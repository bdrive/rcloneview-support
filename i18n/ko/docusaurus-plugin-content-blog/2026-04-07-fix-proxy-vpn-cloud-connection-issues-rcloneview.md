---
slug: fix-proxy-vpn-cloud-connection-issues-rcloneview
title: "RcloneView에서 프록시 및 VPN 클라우드 연결 문제 해결하기"
authors:
  - tayson
description: "회사 프록시나 VPN 뒤에 있을 때 RcloneView에서 발생하는 클라우드 동기화 및 전송 실패를 해결합니다. HTTP_PROXY 설정, SSL 인증서 오류, 스플릿 터널링, DNS 확인 문제, 방화벽 우회 기법을 다룹니다."
keywords:
  - rclone proxy settings
  - rclone VPN connection error
  - rclone corporate proxy fix
  - rclone SSL certificate error
  - rclone HTTPS_PROXY config
  - rclone DNS resolution failure
  - rclone firewall blocked
  - rcloneview proxy configuration
  - rclone split tunneling VPN
  - fix rclone connection behind proxy
tags:
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView에서 프록시 및 VPN 클라우드 연결 문제 해결하기

> 회사 프록시와 VPN은 종종 클라우드 동기화 연결을 알쏭달쏭한 타임아웃 및 인증서 오류로 끊어버립니다. 이 가이드는 흔히 발생하는 모든 시나리오와 네트워크 제한 환경에서도 RcloneView가 안정적으로 작동하도록 구성하는 방법을 다룹니다.

많은 조직이 인터넷 트래픽을 프록시 서버를 통해 라우팅하거나, 원격 근무자에게 VPN 연결을 요구합니다. 이러한 보안 조치는 보안을 강화하지만, 클라우드 스토리지 API 호출을 방해하는 경우가 많습니다. rclone과 RcloneView는 클라우드 제공업체 엔드포인트에 직접 HTTPS로 접근해야 하며, 프록시, 방화벽, VPN 터널, SSL 검사 장비 등 사용자의 컴퓨터와 해당 엔드포인트 사이에 존재하는 무언가는 연결 실패를 일으킬 수 있습니다. 오류는 타임아웃과 DNS 실패부터 TLS 핸드셰이크 오류, 인증서 거부까지 다양합니다. 이 가이드는 각 문제를 살펴보고 구체적인 해결 방법을 제시합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HTTP_PROXY 및 HTTPS_PROXY 환경 변수 구성하기

rclone은 대부분의 네트워킹 도구가 사용하는 표준 HTTP 프록시 환경 변수를 존중합니다. 조직에서 인터넷 접근에 프록시를 요구한다면, rclone이 트래픽을 어디로 라우팅해야 하는지 알 수 있도록 이 변수들을 설정해야 합니다.

### 프록시 변수 설정하기

**Windows (시스템 환경 변수):**

1. **설정 > 시스템 > 정보 > 고급 시스템 설정 > 환경 변수**를 엽니다.
2. 시스템 변수(또는 사용자 변수)에 다음을 추가합니다.
   - `HTTP_PROXY` = `http://proxy.company.com:8080`
   - `HTTPS_PROXY` = `http://proxy.company.com:8080`
   - `NO_PROXY` = `localhost,127.0.0.1,.internal.company.com`
3. 새 변수를 적용하려면 RcloneView를 다시 시작합니다.

**macOS / Linux (셸 프로필):**

`~/.bashrc`, `~/.zshrc`, 또는 `/etc/environment`에 추가합니다.

```bash
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="http://proxy.company.com:8080"
export NO_PROXY="localhost,127.0.0.1,.internal.company.com"
```

파일을 source 하거나 터미널 세션을 다시 시작하세요.

### 인증이 필요한 프록시

프록시가 사용자 이름과 비밀번호를 요구하는 경우, URL에 자격 증명을 포함시킵니다.

```
http://username:password@proxy.company.com:8080
```

비밀번호에 포함된 특수 문자는 URL 인코딩해야 합니다(예: `@`는 `%40`, `#`은 `%23`).

### SOCKS5 프록시

SOCKS5 프록시(SSH 터널에서 흔히 사용됨)의 경우 다음을 사용하세요.

```
socks5://proxy.company.com:1080
```

이 값을 `HTTP_PROXY`와 `HTTPS_PROXY` 모두에 설정하세요.

### 프록시 구성 확인하기

rclone이 프록시를 통해 클라우드 제공업체에 도달할 수 있는지 테스트합니다.

```bash
rclone lsd remote: --dump headers -v
```

연결에 성공하면 디렉터리 목록이 표시됩니다. `--dump headers` 플래그는 HTTP 헤더를 보여주며, 이를 통해 프록시가 사용되고 있는지 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## SSL 인증서 오류 해결하기

SSL/TLS 인증서 오류는 회사 프록시 뒤에서 가장 흔하게 발생하는 문제입니다. 많은 조직이 SSL 검사(HTTPS 인터셉션 또는 중간자 검사라고도 함)를 사용하는데, 이 경우 프록시가 조직 자체의 인증 기관(CA)을 사용해 HTTPS 트래픽을 복호화한 뒤 재암호화합니다. rclone은 기본적으로 이 CA를 신뢰하지 않으므로 다음과 같은 오류가 발생합니다.

- `x509: certificate signed by unknown authority`
- `TLS handshake timeout`
- `SSL certificate problem: unable to get local issuer certificate`

### 해결 방법: 회사 CA 인증서 추가하기

1. IT 부서에서 **회사 루트 CA 인증서**를 받으세요. 보통 `.pem` 또는 `.crt` 파일입니다.
2. `--ca-cert` 플래그를 사용해 **rclone에 이를 신뢰하도록 지시**합니다.
   ```bash
   rclone lsd remote: --ca-cert /path/to/corporate-ca.pem
   ```
3. rclone 구성 환경에 설정해 **영구적으로 적용**합니다. 셸 프로필에 추가하세요.
   ```bash
   export RCLONE_CA_CERT="/path/to/corporate-ca.pem"
   ```
4. RcloneView에서는 리모트 또는 작업 구성에 사용자 지정 플래그로 `--ca-cert /path/to/corporate-ca.pem`을 추가하세요.

### 해결 방법: 시스템 신뢰 저장소에 CA 추가하기

또는 회사 CA를 운영체제의 신뢰 저장소에 추가하여 rclone을 포함한 모든 애플리케이션이 자동으로 이를 신뢰하도록 할 수 있습니다.

**Windows:**
```
certutil -addstore "Root" corporate-ca.crt
```

**macOS:**
```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain corporate-ca.crt
```

**Linux (Debian/Ubuntu):**
```bash
sudo cp corporate-ca.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

### 최후의 수단: SSL 검증 비활성화

회사 CA 인증서를 구할 수 없는 경우, SSL 검증을 완전히 비활성화할 수 있습니다. 이는 실제 중간자 공격에 대한 보호를 제거하므로 프로덕션 환경에서는 **권장하지 않습니다.**

```bash
rclone lsd remote: --no-check-certificate
```

이 옵션은 인증서가 문제의 원인인지 확인하기 위한 테스트 용도로만 사용하고, 이후에는 올바른 CA 인증서 해결책을 마련하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## VPN 환경에서 DNS 문제 해결하기

VPN 연결은 종종 시스템의 DNS 설정을 재정의하여 클라우드 제공업체 도메인이 확인되지 않거나 잘못된 주소로 확인되게 만들 수 있습니다.

### 증상

- `dial tcp: lookup storage.googleapis.com: no such host`
- `dial tcp: lookup graph.microsoft.com: i/o timeout`
- VPN 연결 전에는 정상 작동했던 연결이 이제 실패함.

### 해결 방법

**DNS 확인 확인하기:**

```bash
nslookup storage.googleapis.com
nslookup graph.microsoft.com
nslookup api.dropboxapi.com
```

VPN에 연결된 상태에서 이 명령이 실패하거나 예상치 못한 IP를 반환하면 DNS가 문제입니다.

**특정 DNS 서버 사용하기:**

일부 VPN 클라이언트는 DNS 설정을 구성할 수 있게 해줍니다. VPN이 공용 클라우드 제공업체 도메인을 확인할 수 있는 DNS 서버를 사용하고 있는지 확인하세요. VPN이 외부 도메인을 확인할 수 없는 내부 DNS 서버를 강제로 사용하게 한다면, IT 팀에 클라우드 제공업체 도메인에 대한 DNS 포워딩 규칙 추가를 요청하세요.

**수동 DNS 재정의(임시):**

임시 해결책으로 hosts 파일에 클라우드 제공업체 엔드포인트를 추가합니다.

- Windows: `C:\Windows\System32\drivers\etc\hosts`
- macOS/Linux: `/etc/hosts`

클라우드 제공업체는 IP 주소를 순환시키므로 이 방법은 취약하지만, 올바른 DNS 해결책이 마련될 때까지 임시로 문제를 해결하는 데 도움이 됩니다.

변경 후에는 **DNS 캐시를 초기화**하세요.

```bash
# Windows
ipconfig /flushdns

# macOS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux
sudo systemd-resolve --flush-caches
```

## 스플릿 터널링 구성하기

스플릿 터널링은 회사 트래픽만 VPN을 통해 라우팅하고 클라우드 스토리지 트래픽은 인터넷으로 직접 전송되도록 합니다. 이를 통해 클라우드 제공업체 연결에서 프록시와 VPN을 모두 우회할 수 있으며, 종종 모든 문제를 한 번에 해결합니다.

### 설정 방법

스플릿 터널링은 일반적으로 VPN 클라이언트에서 구성하거나 IT 부서를 통해 설정합니다. 다음 도메인 또는 IP 범위를 VPN 터널에서 제외하도록 요청해야 합니다.

**Google Drive / Google Cloud:**
- `*.googleapis.com`
- `*.google.com`
- `accounts.google.com`

**Microsoft OneDrive / SharePoint / Azure:**
- `*.sharepoint.com`
- `*.onedrive.com`
- `graph.microsoft.com`
- `login.microsoftonline.com`
- `*.blob.core.windows.net`

**Amazon S3:**
- `*.amazonaws.com`
- `s3.*.amazonaws.com`

**Dropbox:**
- `*.dropbox.com`
- `*.dropboxapi.com`

**기타 제공업체:** API 엔드포인트 도메인은 각 제공업체 문서를 확인하세요.

IT 부서가 스플릿 터널링을 구성할 수 없는 경우, 위에서 설명한 프록시 및 인증서 해결 방법이 최선의 대안입니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 회사 방화벽 우회하기

회사 방화벽은 rclone에 필요한 특정 포트, 프로토콜, 또는 도메인을 차단할 수 있습니다. 흔히 발생하는 방화벽 관련 문제는 다음과 같습니다.

### 차단된 포트

rclone은 대부분의 클라우드 제공업체에 대해 HTTPS(443 포트)를 사용합니다. 브라우저가 아닌 트래픽에 대해 443 포트가 차단되어 있으면 rclone 연결이 타임아웃됩니다. IT 부서에 rclone 프로세스에 대한 아웃바운드 HTTPS가 허용되어 있는지 확인을 요청하세요.

### 차단된 도메인

일부 방화벽은 특정 클라우드 스토리지 도메인에 대한 접근을 차단합니다. 조직이 특정 클라우드 제공업체를 공식적으로 지원하지 않는다면, 해당 API 엔드포인트가 차단 목록에 있을 수 있습니다. 타임아웃 오류나 연결 거부 메시지가 표시됩니다. 유일한 해결책은 IT 팀에 필요한 도메인을 허용 목록에 추가해 달라고 요청하는 것입니다.

### 심층 패킷 검사

일부 차세대 방화벽은 인증서 수준을 넘어 HTTPS 트래픽을 검사합니다. 이들은 표준 브라우저 트래픽처럼 보이지 않는 연결을 차단할 수 있습니다. rclone의 User-Agent 헤더는 자신을 rclone으로 식별하는데, 일부 DPI 규칙이 이를 플래그할 수 있습니다. 사용자 지정 User-Agent를 설정할 수 있습니다.

```bash
rclone lsd remote: --user-agent "Mozilla/5.0"
```

이는 임시방편이며, 반드시 필요하다고 확인되고 IT 팀의 승인을 받은 경우에만 사용해야 합니다.

### 프록시를 통한 OAuth 토큰 갱신

OAuth를 사용하는 클라우드 제공업체(Google Drive, OneDrive, Dropbox)는 주기적으로 액세스 토큰을 갱신합니다. 토큰 갱신 엔드포인트가 차단되었거나 프록시가 OAuth 흐름을 방해하면, 자격 증명이 올바른데도 인증 오류가 발생합니다. 다음 OAuth 엔드포인트에 접근할 수 있는지 확인하세요.

- `oauth2.googleapis.com` (Google)
- `login.microsoftonline.com` (Microsoft)
- `api.dropbox.com/oauth2/token` (Dropbox)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## 연결 타임아웃 문제 해결하기

프록시나 VPN 뒤에서 연결이 타임아웃되면, 다음 단계로 원인을 좁혀 나가세요.

1. **기본 연결 테스트:**
   ```bash
   curl -v https://storage.googleapis.com
   ```
   curl은 작동하지만 rclone은 작동하지 않는다면, rclone이 프록시 환경 변수를 인식하지 못하는 것이 원인일 가능성이 높습니다.

2. **상세 로깅으로 테스트:**
   ```bash
   rclone lsd remote: -vv --dump headers --dump auth
   ```
   이는 rclone이 정확히 무엇을 보내고 받고 있는지 보여줍니다.

3. **프록시 간섭 확인:**
   ```bash
   rclone lsd remote: --no-check-certificate -vv
   ```
   이 명령이 작동하지만 일반 명령은 작동하지 않는다면, SSL 검사가 원인입니다.

4. VPN이 관련되어 있는지 확인하려면 **VPN 없이 테스트**해 보세요(가능한 경우).

5. 프록시 연결이 느린 경우 **타임아웃을 늘리세요.**
   ```bash
   rclone lsd remote: --timeout 60s --contimeout 30s
   ```

6. 자세한 오류 메시지는 작업 기록(Job History)에서 **RcloneView 로그를 확인**하세요.

## RcloneView에서 영구적으로 구성하기

프록시 설정, 인증서 경로, 플래그의 올바른 조합을 찾았다면, 다시 찾을 필요가 없도록 저장해 두세요.

- **환경 변수** — 모든 rclone 작업에 적용되도록 시스템 프로필에 `HTTP_PROXY`, `HTTPS_PROXY`, `RCLONE_CA_CERT`를 설정합니다.
- **작업의 사용자 지정 플래그** — RcloneView의 작업 구성에서 `--ca-cert`, `--timeout`, `--contimeout` 같은 플래그를 사용자 지정 매개변수로 추가합니다.
- **리모트별 설정** — 일부 설정은 `rclone.conf`의 리모트 구성에 직접 추가할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 네트워크에 프록시가 필요한 경우 **프록시 환경 변수를 설정**합니다.
3. SSL 검사가 사용 중인 경우 **회사 CA 인증서를 설치**합니다.
4. 동기화 작업을 설정하기 전에 간단한 `rclone lsd remote:` 명령으로 **연결을 테스트**합니다.
5. 일관되고 반복 가능한 동기화를 위해 **작동하는 구성을 RcloneView 작업으로 저장**합니다.

네트워크 제한이 클라우드 스토리지를 효과적으로 관리하는 데 걸림돌이 될 필요는 없습니다. 올바른 프록시 설정과 인증서 구성만 갖추면, RcloneView는 가장 폐쇄적인 회사 환경에서도 안정적으로 작동합니다.

---

**관련 가이드:**

- [원격 스토리지 추가하기](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [OAuth 온라인 로그인 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [작업 실행 및 관리하기](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />

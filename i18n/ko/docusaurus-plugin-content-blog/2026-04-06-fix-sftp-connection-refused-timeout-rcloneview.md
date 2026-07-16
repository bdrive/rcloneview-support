---
slug: fix-sftp-connection-refused-timeout-rcloneview
title: "RcloneView에서 SFTP 연결 거부 및 타임아웃 오류 해결하기"
authors:
  - tayson
description: "RcloneView에서 SFTP 연결 거부, 타임아웃, 인증 오류를 해결합니다. 방화벽 규칙, SSH 키, 포트 설정, 타임아웃 조정을 다룹니다."
keywords:
  - sftp connection refused rclone
  - sftp timeout error rcloneview
  - fix sftp connection rclone
  - rclone sftp ssh key error
  - sftp firewall blocked
  - sftp port configuration rclone
  - rcloneview sftp setup
  - ssh connection timeout fix
  - sftp authentication failed rclone
  - rclone sftp troubleshoot
tags:
  - troubleshooting
  - sftp
  - tips
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView에서 SFTP 연결 거부 및 타임아웃 오류 해결하기

> RcloneView의 SFTP 오류는 거의 항상 네트워크 구성, 인증 설정, 또는 서버 측 설정에서 비롯됩니다. 이 가이드는 흔히 발생하는 모든 원인과 해결 방법을 안내합니다.

SFTP(SSH File Transfer Protocol)는 rclone에서 가장 널리 사용되는 리모트 중 하나로, RcloneView를 SSH 접근이 가능한 모든 서버 — NAS 장치, Linux 서버, 공유 호스팅, 자체 호스팅 인프라 — 에 연결합니다. 클라우드 제공업체의 API와 달리 SFTP는 네트워크 접근성, 방화벽 규칙, SSH 설정에 의존하기 때문에 오류가 발생할 수 있는 지점이 더 많습니다. 다음은 가장 흔한 SFTP 문제를 진단하고 해결하는 방법입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 흔한 SFTP 오류 메시지

| 오류 메시지 | 가능한 원인 |
|--------------|-------------|
| `connection refused` | SSH 서버가 실행되지 않음, 잘못된 포트, 또는 방화벽 차단 |
| `connection timed out` | 방화벽의 패킷 드롭, 서버 접근 불가, 또는 네트워크 문제 |
| `ssh: handshake failed` | SSH 키 불일치, 호환되지 않는 알고리즘, 또는 서버 측 설정 |
| `permission denied (publickey)` | 잘못된 키 파일, 서버에 등록되지 않은 키, 또는 패스프레이즈 문제 |
| `permission denied (password)` | 잘못된 비밀번호 또는 서버에서 비밀번호 인증이 비활성화됨 |
| `no supported methods remain` | 서버가 rclone에 구성되지 않은 인증 방식을 요구함 |
| `ssh: unable to authenticate` | 자격 증명이 제공되지 않았거나 거부됨 |
| `too many authentication failures` | SSH 에이전트가 올바른 키에 도달하기 전에 너무 많은 키를 제시함 |

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="View SFTP error details in RcloneView job history" class="img-large img-center" />

## 해결 1: 연결 거부(Connection Refused)

"connection refused" 오류는 TCP 연결이 적극적으로 거부되었음을 의미합니다. 서버의 네트워크 스택에는 접근할 수 있지만, 대상 포트에서 아무것도 수신 대기하고 있지 않은 상태입니다.

### SSH가 실행 중인지 확인

원격 서버에서 `sudo systemctl status sshd`를 실행합니다. SSH가 실행되고 있지 않다면 `sudo systemctl start sshd && sudo systemctl enable sshd`로 시작합니다.

### 포트 확인

기본 SSH 포트는 22이지만, 많은 서버가 사용자 지정 포트를 사용합니다. `grep -i "^Port" /etc/ssh/sshd_config`로 확인하세요. RcloneView에서는 SFTP 리모트의 포트 설정이 이와 일치하는지 확인해야 합니다. 포트 22와 2222 같은 사용자 지정 포트 간의 불일치는 가장 흔한 원인 중 하나입니다.

<img src="/support/images/en/blog/new-remote.png" alt="Configure SFTP remote port in RcloneView" class="img-large img-center" />

### 로컬 방화벽 차단 확인

서버에서 방화벽이 SSH 포트로의 인바운드 연결을 허용하는지 확인합니다. `sudo ufw status`(Ubuntu/Debian), `sudo firewall-cmd --list-ports`(RHEL/Fedora), 또는 `sudo iptables -L -n | grep 22`를 사용하세요. 포트가 차단되어 있다면 이를 허용하는 규칙을 추가합니다.

## 해결 2: 연결 타임아웃

타임아웃은 패킷이 전송되었지만 응답을 받지 못했다는 의미입니다. 이는 일반적으로 서버 측 구성 문제라기보다는 네트워크 수준의 문제입니다.

### 네트워크 접근성

내 컴퓨터에서 기본 연결성을 테스트합니다.

```bash
ping server-hostname
telnet server-hostname 22
```

`ping`은 성공하지만 포트 22로의 `telnet`이 실패한다면, 나와 서버 사이의 방화벽이 SSH 포트를 차단하고 있는 것입니다.

### 라우터 및 NAT 방화벽

SFTP 서버가 NAT 라우터 뒤에 있다면, 외부 트래픽을 SSH 포트에서 내부 서버 IP로 라우팅하도록 포트 포워딩이 구성되어 있는지 확인합니다. 포트 포워딩이 없으면 로컬 네트워크 외부에서의 연결은 타임아웃됩니다.

### ISP 또는 회사 방화벽 차단

일부 ISP와 회사 네트워크는 포트 22로의 아웃바운드 연결을 차단합니다. 대체 포트로 테스트하거나 VPN을 사용해 제한을 우회하세요.

### Rclone의 타임아웃 조정

rclone의 기본 연결 타임아웃은 지연 시간이 긴 연결에는 너무 짧을 수 있습니다. `--contimeout` 플래그를 추가하여 늘릴 수 있습니다. SFTP 특유의 서버 응답 지연에 대해서는 `--timeout`을 더 높은 값(예: 느린 서버의 경우 `5m`)으로 설정하는 것을 고려하세요.

## 해결 3: SSH 키 인증 실패

키 기반 인증은 SFTP 연결에 가장 안전하고 권장되는 방법이지만, 잘못 구성되는 경우가 흔합니다.

### 키 파일 경로 확인

RcloneView에서 SFTP 리모트 구성에는 SSH 키 파일 경로 필드가 포함되어 있습니다. 다음을 확인하세요.

- 경로가 공개 키가 아닌 **개인** 키(예: `~/.ssh/id_rsa` 또는 `~/.ssh/id_ed25519`)를 가리키는지 확인합니다.
- 파일이 존재하며 사용자 계정에서 읽을 수 있는지 확인합니다.
- 키 파일에 올바른 권한(Linux/macOS에서 `600`)이 설정되어 있는지 확인합니다.

### 서버에 키 등록

공개 키는 서버의 `~/.ssh/authorized_keys`에 등록되어 있어야 합니다. `cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys`로 추가한 후, 파일 권한은 `600`, `.ssh` 디렉토리 권한은 `700`으로 설정되어 있는지 확인하세요.

### 패스프레이즈로 보호된 키

개인 키에 패스프레이즈가 설정되어 있다면, rclone이 키를 복호화하기 위해 이 패스프레이즈가 필요합니다. RcloneView의 SFTP 리모트 설정에서 해당 필드에 패스프레이즈를 입력하세요. 비워 두면 인증이 조용히 실패합니다.

### SSH 에이전트 충돌

SSH 에이전트가 많은 키를 로드한 채 실행 중이라면, 서버가 너무 많은 키 시도 실패 후 연결을 거부할 수 있습니다(기본 제한은 보통 6회). rclone 설정에서 정확한 키 파일을 지정하여 에이전트를 우회하거나, 에이전트에 로드된 키의 수를 줄이세요.

## 해결 4: 비밀번호 인증 문제

### 서버에서 비활성화된 비밀번호 인증

많은 서버가 보안을 위해 비밀번호 인증을 비활성화합니다. `grep -i "PasswordAuthentication" /etc/ssh/sshd_config`로 확인하세요. `no`로 설정되어 있다면 키 기반 인증을 대신 사용해야 합니다.

### 잘못된 비밀번호

RcloneView의 SFTP 리모트 구성에 올바른 비밀번호를 입력했는지 확인하세요. rclone은 비밀번호를 `rclone.conf`에 난독화된 형식으로 저장합니다 — 구성 파일을 수동으로 편집하는 경우 `rclone obscure`를 사용해 비밀번호를 올바르게 인코딩하세요.

## 해결 5: 동시 연결 제한

SFTP 서버는 종종 동시 세션 수를 제한합니다. rclone은 기본적으로 4개의 동시 전송을 사용하지만, 일부 서버는 1개 또는 2개의 연결만 허용합니다.

대용량 전송 중 간헐적인 연결 실패가 발생한다면 동시성을 줄이세요.

- 병렬 연결을 제한하려면 `--transfers 1` 또는 `--transfers 2`를 설정하세요.
- 동시 확인 작업 수를 줄이려면 `--checkers 1`을 설정하세요.

일부 공유 호스팅 제공업체는 특히 제한적입니다. 낮은 동시성으로 시작해 점진적으로 늘리세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SFTP transfer progress in RcloneView" class="img-large img-center" />

## 해결 6: SSH 알고리즘 비호환성

오래된 서버는 최신 SSH 알고리즘을 지원하지 않을 수 있고, 강화된 서버는 오래된 알고리즘을 거부할 수 있습니다. "handshake failed" 오류가 발생한다면 가능하다면 SSH 서버 소프트웨어를 업데이트하거나, `/etc/ssh/sshd_config`에서 `KexAlgorithms`, `Ciphers`, `MACs` 제한을 확인하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer with SFTP remote connected" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 올바른 호스트, 포트, 인증 설정으로 **SFTP 리모트를 추가**합니다.
3. 탐색기에서 리모트를 탐색하여 **연결을 테스트**합니다.
4. 오류가 발생하면 위의 **체크리스트를 순서대로 확인**합니다.

SFTP 문제는 거의 항상 소프트웨어 버그가 아니라 구성 문제입니다. 네트워크, 방화벽, 인증, 서버 설정 등 각 계층을 체계적으로 확인하면 대부분의 경우를 해결할 수 있습니다.

---

**관련 가이드:**

- [RcloneView에서 Rclone 오류 문제 해결하기](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Rclone 구성 손상 수정하기](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [중단된 전송 복구하기](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />

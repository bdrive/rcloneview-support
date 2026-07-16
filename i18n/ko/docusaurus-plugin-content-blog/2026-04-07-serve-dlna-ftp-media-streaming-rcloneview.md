---
slug: serve-dlna-ftp-media-streaming-rcloneview
title: "RcloneView로 DLNA와 FTP 서버를 통해 클라우드 미디어 스트리밍하기"
authors: [tayson]
description: "rclone serve와 RcloneView를 사용하여 DLNA 미디어 스트리밍과 클라우드 스토리지에 대한 FTP 서버 접근을 설정하고, 모든 기기에서 끊김 없는 미디어 재생을 경험하세요."
keywords:
  - rclone dlna server
  - cloud storage media streaming
  - rclone ftp server
  - stream google drive dlna
  - cloud media server
  - rclone serve dlna
  - rcloneview media streaming
  - ftp cloud storage
  - smart tv cloud streaming
  - rclone media player
tags: [RcloneView, feature, media, guide, tips, cloud-storage, automation, mount]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 DLNA와 FTP 서버를 통해 클라우드 미디어 스트리밍하기

> rclone serve를 통해 스마트 TV, 미디어 플레이어, FTP 클라이언트로 콘텐츠를 직접 스트리밍하여 클라우드 스토리지를 개인 미디어 서버로 만들어보세요.

클라우드 스토리지에는 수 테라바이트의 사진, 동영상, 음악이 저장되어 있지만, 거실 TV나 기존 파일 전송 도구를 통해 이 콘텐츠에 접근하는 것은 답답할 정도로 번거로울 수 있습니다. rclone의 `serve` 명령어는 클라우드 리모트를 DLNA 미디어 서버, FTP 서버, HTTP 서버, 또는 WebDAV 엔드포인트로 노출시켜 이 문제를 해결합니다. 리모트를 관리하고 연결을 모니터링할 수 있는 RcloneView의 직관적인 인터페이스와 결합하면 몇 분 만에 완전히 작동하는 클라우드 기반 미디어 서버를 구축할 수 있습니다. 이 가이드에서는 스마트 TV와 미디어 플레이어로의 DLNA 스트리밍, 레거시 클라이언트 접근을 위한 FTP 서버 구성, 원활한 재생을 위한 성능 튜닝, 그리고 다중 사용자 환경을 위한 접근 제어를 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone Serve의 작동 방식

rclone의 `serve` 명령어는 표준 프로토콜(DLNA, FTP, HTTP, WebDAV)의 요청을 클라우드 스토리지 API 호출로 변환하는 로컬 서버를 생성합니다. 스마트 TV가 DLNA를 통해 동영상을 요청하면, rclone은 클라우드 제공업체에서 파일을 가져와 실시간으로 스트리밍합니다. 클라이언트 기기는 자신이 클라우드 스토리지에 접근하고 있다는 사실을 전혀 알지 못합니다 -- 단지 표준 미디어 서버나 파일 서버로만 인식합니다.

**사용 가능한 serve 프로토콜:**

| 프로토콜 | 사용 사례 | 대표 클라이언트 |
|----------|----------|----------------|
| DLNA | TV 및 플레이어로의 미디어 스트리밍 | 스마트 TV, VLC, Kodi, Xbox, PlayStation |
| FTP | 레거시 애플리케이션을 위한 파일 전송 | FileZilla, WinSCP, 커맨드라인 FTP 클라이언트 |
| HTTP | 브라우저 기반 파일 접근 | 모든 웹 브라우저 |
| WebDAV | 마운트 가능한 네트워크 드라이브 | Windows 탐색기, macOS Finder, Linux 파일 관리자 |
| SFTP | 보안 파일 전송 | SSH 클라이언트, SFTP 지원 애플리케이션 |

**아키텍처 개요:**

데이터 흐름은 단순합니다.

1. 클라이언트 기기가 로컬 네트워크에서 rclone serve 인스턴스를 검색하거나 연결합니다.
2. 클라이언트가 파일 목록 또는 특정 파일을 요청합니다.
3. rclone이 해당 요청을 클라우드 스토리지 API 호출로 변환합니다.
4. 데이터가 클라우드 제공업체에서 rclone을 거쳐 클라이언트로 스트리밍됩니다.
5. 선택적으로 VFS 캐싱을 사용하면 자주 접근하는 데이터를 로컬에 저장하여 재접근 속도를 높일 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

이러한 아키텍처 덕분에 미디어 라이브러리가 전적으로 클라우드에 있으면서도 표준 프로토콜을 통해 네트워크 상의 모든 기기에서 접근 가능해집니다.

## DLNA 미디어 스트리밍 설정하기

DLNA(Digital Living Network Alliance)는 홈 네트워크에서 미디어 스트리밍을 위한 보편적인 표준입니다. 거의 모든 스마트 TV, 게임 콘솔, 미디어 플레이어가 DLNA 검색 및 재생을 지원합니다.

**기본 DLNA 서버 시작하기:**

RcloneView에 내장된 터미널을 통해 클라우드 미디어 라이브러리를 가리키는 DLNA 서버를 시작합니다.

```bash
rclone serve dlna gdrive:/Media
```

이 명령을 실행하면 즉시 로컬 네트워크에 자신을 알리는 DLNA 서버가 생성됩니다. 같은 네트워크에 있는 DLNA 지원 기기는 이를 자동으로 검색합니다.

**DLNA 서버 커스터마이징:**

```bash
rclone serve dlna gdrive:/Media \
  --name "Cloud Media Server" \
  --addr :7879 \
  --log-level INFO \
  --vfs-cache-mode full \
  --vfs-cache-max-size 10G \
  --vfs-read-ahead 128M
```

**주요 DLNA 플래그:**

| 플래그 | 목적 | 권장 값 |
|------|---------|-------------------|
| `--name` | 클라이언트에 표시되는 서버 이름 | "Cloud Movies"와 같은 설명적인 이름 |
| `--addr` | 리스닝 주소 및 포트 | `:7879` (기본값) |
| `--vfs-cache-mode` | 캐싱 전략 | 원활한 스트리밍을 위해 `full` |
| `--vfs-cache-max-size` | 최대 로컬 캐시 크기 | 디스크 공간에 따라 5~20GB |
| `--vfs-read-ahead` | 데이터 프리페치 버퍼 | 동영상 스트리밍을 위해 128M~256M |
| `--vfs-cache-max-age` | 캐시 파일 유지 시간 | 미디어 라이브러리의 경우 `24h` |

**스마트 TV에서 연결하기:**

1. 위 명령어로 DLNA 서버를 시작합니다.
2. 스마트 TV에서 미디어 플레이어 또는 DLNA 브라우저를 엽니다(정확한 명칭은 제조사마다 다릅니다 -- 삼성은 "SmartThings", LG는 "Media Player", 소니는 "Media Player"를 사용합니다).
3. 지정한 서버 이름(예: "Cloud Media Server")을 찾습니다.
4. 폴더를 탐색하고 재생할 미디어를 선택합니다.

**VLC에서 연결하기:**

1. VLC 미디어 플레이어를 엽니다.
2. View > Playlist > Local Network > Universal Plug'n'Play로 이동합니다.
3. 목록에 rclone DLNA 서버가 나타납니다.
4. 미디어를 탐색하고 바로 재생합니다.

**S3 호환 스토리지에서 미디어 서빙하기:**

S3와 유사한 오브젝트 스토리지 제공업체는 기가바이트당 낮은 비용 덕분에 미디어 라이브러리에 매우 적합합니다.

```bash
# Serve from Wasabi (S3-compatible, no egress fees)
rclone serve dlna wasabi:media-bucket \
  --name "Wasabi Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## FTP 서버 설정하기

FTP는 특히 레거시 애플리케이션, 네트워크 연결 기기, 자동화 워크플로우에서 여전히 널리 사용되는 파일 전송 방식입니다. rclone을 사용하면 어떤 클라우드 리모트든 완전한 기능을 갖춘 FTP 서버로 노출시킬 수 있습니다.

**기본 FTP 서버 시작하기:**

```bash
rclone serve ftp gdrive: --addr :2121 --user ftpuser --pass ftppassword
```

이 명령어는 Google Drive 전체에 접근할 수 있는 FTP 서버를 포트 2121에 생성합니다.

**고급 FTP 구성:**

```bash
rclone serve ftp s3:my-bucket \
  --addr :2121 \
  --user admin \
  --pass secure-password \
  --passive-port 30000-30100 \
  --vfs-cache-mode writes \
  --vfs-cache-max-size 5G \
  --dir-cache-time 5m \
  --log-level INFO
```

**주요 FTP 플래그:**

| 플래그 | 목적 |
|------|---------|
| `--addr` | 리스닝 주소 및 포트 |
| `--user` / `--pass` | FTP 인증 자격 증명 |
| `--passive-port` | 패시브 모드 연결을 위한 포트 범위 |
| `--vfs-cache-mode` | 업로드 지원을 위해서는 `writes`, 읽기/쓰기 캐싱을 위해서는 `full` |
| `--dir-cache-time` | 디렉터리 목록이 캐시되는 기간 |
| `--read-only` | 업로드 및 수정 방지 |

**FileZilla 또는 다른 FTP 클라이언트에서 연결하기:**

1. FTP 클라이언트를 엽니다.
2. 호스트(rclone을 실행 중인 머신의 IP), 포트(2121), 사용자 이름, 비밀번호를 입력합니다.
3. 연결한 뒤 기존 FTP 서버를 사용하듯 클라우드 스토리지를 탐색합니다.

**FTP 서빙의 활용 사례:**

- **레거시 애플리케이션 통합:** FTP만 지원하는 오래된 애플리케이션도 이제 클라우드 스토리지에 접근할 수 있습니다.
- **네트워크 스캐너 업로드:** 문서 스캐너가 스캔한 파일을 FTP를 통해 클라우드 스토리지로 직접 전송하도록 구성할 수 있습니다.
- **자동화된 파일 드롭:** 외부에서 파일을 수신하기 위한 쓰기 전용 FTP 엔드포인트를 설정할 수 있습니다.
- **크로스 플랫폼 접근:** FTP는 추가 소프트웨어 설치 없이 모든 운영체제에서 작동합니다.

## 스트리밍을 위한 성능 튜닝

원활한 미디어 스트리밍을 위해서는 rclone의 VFS(Virtual File System) 캐시와 네트워크 설정을 세심하게 튜닝해야 합니다.

**VFS 캐시 모드 이해하기:**

| 모드 | 동작 | 최적 용도 |
|------|------|----------|
| `off` | 캐싱 없음, 직접 스트리밍 | 작은 파일, 고대역폭 연결 |
| `minimal` | 열려 있는 파일만 캐시 | 가벼운 미디어 탐색 |
| `writes` | 쓰기를 로컬에 캐시하고 읽기는 스트리밍 | 업로드가 많은 FTP 사용 |
| `full` | 완전한 읽기/쓰기 캐싱 | 동영상 스트리밍, 미디어 재생 |

미디어 스트리밍의 경우 `full` 캐시 모드가 거의 항상 최선의 선택입니다. 네트워크 지연이나 API 스로틀링으로 인해 동영상 재생이 끊기지 않도록 보장합니다.

**동영상 스트리밍 최적화:**

```bash
rclone serve dlna gdrive:/Movies \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --vfs-cache-max-age 72h \
  --buffer-size 64M \
  --vfs-read-chunk-size 32M \
  --vfs-read-chunk-size-limit 256M
```

주요 매개변수 설명:
- **`--vfs-read-ahead 256M`**: 현재 재생 위치보다 256MB 앞서 데이터를 미리 가져와 재생 중 버퍼링을 방지합니다.
- **`--vfs-read-chunk-size 32M`**: 읽기의 초기 청크 크기입니다. 32MB부터 시작해 상한선까지 두 배씩 증가합니다.
- **`--vfs-read-chunk-size-limit 256M`**: 최대 청크 크기입니다. 청크가 클수록 API 호출 수는 줄지만 초기 지연 시간은 늘어납니다.
- **`--buffer-size 64M`**: 열려 있는 각 파일에 대한 메모리 내 버퍼입니다.

**대역폭 고려사항:**

동영상 스트리밍 대역폭 요구사항은 화질에 따라 크게 달라집니다.

| 화질 | 비트레이트 | 최소 연결 속도 |
|--------------|---------|-------------------|
| 720p | 3-5 Mbps | 10 Mbps 권장 |
| 1080p | 8-12 Mbps | 25 Mbps 권장 |
| 4K | 25-40 Mbps | 50 Mbps 권장 |

인터넷 연결이나 클라우드 제공업체의 아웃바운드(egress) 대역폭이 이러한 속도를 유지할 수 없다면, 업로드 전에 미디어를 더 낮은 비트레이트로 트랜스코딩하거나 Wasabi 또는 CDN 기반 S3 버킷처럼 빠른 아웃바운드를 제공하는 업체를 사용하는 것을 고려하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

**스트리밍 성능 모니터링하기:**

RcloneView의 전송 모니터링 기능을 사용하여 실시간 처리량을 확인하고 병목 지점을 파악하세요. 잦은 멈춤 후 몰아서 전송되는 패턴이 보인다면 read-ahead 버퍼를 늘리세요. 전송 속도가 지속적으로 느리다면 병목은 대개 인터넷 연결이나 클라우드 제공업체의 처리량 제한 때문일 가능성이 높습니다.

## 접근 제어 및 다중 사용자 설정

공유 환경에서는 누가 어떤 콘텐츠에 접근할 수 있는지 제어해야 합니다.

**FTP 다중 사용자 설정:**

rclone의 FTP 서버는 하나의 사용자/비밀번호 쌍만 직접 지원합니다. 다중 사용자 환경을 위해서는 서로 다른 포트에서 여러 serve 인스턴스를 실행하세요.

```bash
# Family media - read only
rclone serve ftp gdrive:/Media/Family \
  --addr :2121 --user family --pass familypass --read-only &

# Admin access - full control
rclone serve ftp gdrive: \
  --addr :2122 --user admin --pass adminpass &
```

**읽기 전용 접근:**

미디어 서버의 경우 대개 읽기 전용 접근이 적절합니다.

```bash
rclone serve dlna gdrive:/Media --read-only
rclone serve ftp gdrive:/Media --read-only --user viewer --pass viewerpass
```

**특정 디렉터리로 제한하기:**

노출 범위를 제한하기 위해 특정 하위 디렉터리만 서빙합니다.

```bash
# Only serve the Movies folder, not the entire drive
rclone serve dlna gdrive:/Media/Movies --name "Movies"

# Serve a specific S3 prefix
rclone serve ftp s3:media-bucket/public --user public --pass publicpass
```

**네트워크 수준 제한:**

특정 인터페이스에 바인딩하여 네트워크 접근을 제어합니다.

```bash
# Only accessible from local machine
rclone serve dlna gdrive:/Media --addr 127.0.0.1:7879

# Only accessible from local network
rclone serve ftp gdrive: --addr 192.168.1.100:2121 --user admin --pass adminpass
```

## 상시 실행 서비스로 운영하기

항상 켜져 있는 미디어 서버를 위해 rclone serve가 자동으로 시작되도록 구성합니다.

**Linux systemd 서비스:**

```bash
sudo cat > /etc/systemd/system/rclone-dlna.service << 'EOF'
[Unit]
Description=Rclone DLNA Media Server
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=rclone
ExecStart=/usr/bin/rclone serve dlna gdrive:/Media \
  --name "Cloud Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --log-file /var/log/rclone-dlna.log \
  --log-level INFO
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable rclone-dlna
sudo systemctl start rclone-dlna
```

**Windows 서비스 설정:**

Windows에서는 NSSM(Non-Sucking Service Manager)이나 작업 스케줄러를 사용하여 시작 시 rclone serve 명령어를 실행할 수 있습니다.

```powershell
# Using Task Scheduler (run at login)
schtasks /create /tn "Rclone DLNA" /tr "rclone serve dlna gdrive:/Media --name CloudMedia --vfs-cache-mode full" /sc onlogon
```

**여러 서버를 동시에 실행하기:**

호환성을 극대화하기 위해 DLNA와 FTP 서버를 동시에 실행할 수 있습니다.

```bash
# DLNA for smart TVs and media players
rclone serve dlna gdrive:/Media --name "Cloud Media" &

# FTP for file manager access
rclone serve ftp gdrive: --addr :2121 --user admin --pass adminpass &

# HTTP for browser access
rclone serve http gdrive:/Media --addr :8080 --read-only &
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

## Serve와 Mount 비교하기

`rclone serve`와 `rclone mount` 모두 클라우드 스토리지를 로컬에서 접근 가능하게 만들지만, 각각 다른 목적을 가지고 있습니다.

| 특성 | Serve (DLNA/FTP) | Mount |
|---------|------------------|-------|
| 프로토콜 | DLNA, FTP, HTTP, WebDAV | FUSE/WinFSP 파일 시스템 |
| 클라이언트 호환성 | 프로토콜을 지원하는 모든 클라이언트 | 파일 시스템을 통한 모든 애플리케이션 |
| 네트워크 접근 | 네트워크 상 모든 기기에서 사용 가능 | 기본적으로 로컬 머신만 |
| 설정 복잡도 | 간단한 명령어, 드라이버 불필요 | FUSE(Linux/Mac) 또는 WinFSP(Windows) 필요 |
| 미디어 플레이어 지원 | 네이티브 DLNA 검색 | 플레이어가 마운트 경로를 가리키도록 설정 필요 |
| 동시 다중 사용자 | 예, 기본 지원 | 파일 시스템 공유에 따라 제한적 |

**serve를 사용해야 할 때:**
- 스마트 TV, 게임 콘솔, 네트워크 플레이어로 미디어를 스트리밍할 때
- 레거시 애플리케이션이나 기기를 위한 FTP 접근을 제공할 때
- 네트워크 상의 여러 사용자와 클라우드 파일을 공유할 때
- FUSE/WinFSP 드라이버 설치를 피하고 싶을 때

**mount를 사용해야 할 때:**
- 로컬 경로를 기대하는 데스크톱 애플리케이션에서 클라우드 파일에 접근할 때
- 오피스 애플리케이션에서 클라우드 파일을 직접 편집할 때
- 로컬 파일 경로를 대상으로 동작하는 스크립트를 실행할 때

많은 환경에서는 serve와 mount를 동시에 실행하는 것이 두 방식의 장점을 모두 누릴 수 있는 최선의 방법입니다.

## 시작하기

rclone serve는 클라우드 스토리지를 수동적인 보관소에서 능동적인 미디어 서버이자 파일 공유 플랫폼으로 탈바꿈시킵니다. 먼저 클라우드 미디어 폴더를 가리키는 간단한 DLNA 서버로 시작하여 스마트 TV나 VLC 플레이어에서 재생을 테스트해보세요. 스트리밍이 안정적으로 작동하는 것을 확인했다면, 더 매끄러운 재생을 위해 VFS 캐싱을 추가하고, 더 폭넓은 파일 접근을 위한 FTP 엔드포인트를 설정하며, 서비스가 자동으로 시작되도록 구성하세요. RcloneView가 리모트를 관리하고 연결을 모니터링해주므로, 기존 클라우드 스토리지 구독료 외에는 추가 비용 없이 완전한 클라우드 기반 미디어 서버를 갖출 수 있습니다.

---

**관련 가이드:**
- [클라우드 스토리지를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [원격 스토리지 탐색 및 관리하기](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [S3 원격 스토리지 연결 설정](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />

---
slug: serve-webdav-http-from-cloud-rcloneview
title: "RcloneView로 클라우드 스토리지를 WebDAV 또는 HTTP로 제공하기"
authors:
  - tayson
description: "RcloneView를 통해 rclone의 serve 명령을 사용하여 클라우드 스토리지를 로컬 WebDAV 또는 HTTP 서버로 노출하세요. 드라이브를 마운트하지 않고도 WebDAV를 지원하는 앱에서 파일에 액세스할 수 있습니다."
keywords:
  - rclone serve webdav
  - expose cloud storage webdav
  - rcloneview serve http
  - cloud storage webdav server
  - rclone webdav local server
  - access cloud via webdav
  - serve google drive webdav
  - rclone serve command guide
  - webdav from cloud storage
  - rcloneview serve feature
tags:
  - webdav
  - feature
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 클라우드 스토리지를 WebDAV 또는 HTTP로 제공하기

> RcloneView는 모든 클라우드 스토리지 제공업체를 로컬 WebDAV 또는 HTTP 서버로 노출할 수 있습니다. WebDAV를 지원하는 모든 앱(파일 관리자, DAM 도구, 크리에이티브 앱, 모바일 클라이언트)은 이를 통해 클라우드 파일을 직접 읽고 쓸 수 있습니다.

rclone의 VFS 레이어로 클라우드 드라이브를 마운트하는 것은 클라우드 스토리지를 로컬로 노출하는 가장 일반적인 방법입니다. 하지만 일부 시나리오에서는 다른 접근 방식이 필요합니다. 애플리케이션이 네트워크를 통해 연결할 수 있는 WebDAV 서버, 브라우저에 파일을 제공하기 위한 일반 HTTP 서버, 또는 FUSE 드라이브를 마운트할 수 없는 장치에서 클라우드 스토리지에 액세스하는 경량 방법 등입니다. rclone의 `serve` 명령은 이 모든 것을 처리하며, RcloneView는 터미널 및 작업 인터페이스를 통해 이를 사용할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone이 제공할 수 있는 것

Rclone은 `rclone serve` 명령을 통해 여러 서버 프로토콜을 지원합니다:

| 프로토콜 | 사용 사례 |
|----------|---------|
| `webdav` | 파일 관리자, DAM 도구, WebDAV를 지원하는 앱 |
| `http` | 클라우드 파일에 대한 읽기 전용 브라우저 액세스 |
| `ftp` | 레거시 앱 호환성 |
| `sftp` | 보안 셸 기반 파일 액세스 |
| `s3` | 모든 클라우드를 S3 호환으로 노출(S3 클라이언트와 함께 사용) |
| `dlna` | DLNA 호환 장치로 미디어 스트리밍 |

이 가이드는 데스크톱 워크플로우에서 가장 유용한 WebDAV와 HTTP에 초점을 맞춥니다.

## 사용 사례 1: 앱 통합을 위한 WebDAV

많은 전문 앱이 WebDAV를 기본적으로 지원합니다: Cyberduck, Finder(macOS), Adobe Bridge, DAM 도구, 프로젝트 관리 도구 등입니다. 클라우드 스토리지를 WebDAV로 노출하면 드라이브 마운트 없이도 이러한 앱에서 액세스할 수 있습니다.

### RcloneView에서 WebDAV 서버 시작하기

RcloneView에서 **터미널** 패널을 열고 다음을 실행하세요:

```bash
rclone serve webdav gdrive:/Documents/ --addr 127.0.0.1:8888 --user myuser --pass mypassword
```

이 명령은 Google Drive의 `/Documents/` 폴더를 노출하는 WebDAV 서버를 `http://127.0.0.1:8888`에서 시작합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Open RcloneView terminal to start serve command" class="img-large img-center" />

### 앱에서 연결하기

WebDAV를 지원하는 모든 앱에서 WebDAV 연결을 추가하세요:
- **URL**: `http://127.0.0.1:8888`
- **사용자 이름**: `myuser`
- **비밀번호**: `mypassword`

앱은 Google Drive의 Documents 폴더를 WebDAV 공유로 인식하여 탐색, 읽기, 쓰기가 가능해집니다.

## 사용 사례 2: 읽기 전용 브라우저 액세스를 위한 HTTP

동료에게 클라우드 계정 액세스 권한을 부여하지 않고 파일을 공유하려면 폴더를 HTTP로 제공하세요:

```bash
rclone serve http s3-remote:my-bucket/reports/ --addr 0.0.0.0:8080
```

네트워크에 있는 누구나 브라우저에서 `http://your-machine-ip:8080`을 열어 다운로드 링크가 포함된 디렉터리 목록을 볼 수 있습니다. 클라우드 계정이 필요하지 않습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse served cloud files in browser" class="img-large img-center" />

## 사용 사례 3: S3 클라이언트 호환성을 위한 S3 제공

강력한 기법입니다: Google Drive나 Backblaze B2의 네이티브 API 같은 비 S3 클라우드를 S3 호환 엔드포인트로 노출하여 모든 S3 클라이언트가 액세스할 수 있게 합니다:

```bash
rclone serve s3 gdrive:/Backups/ --addr 127.0.0.1:9000 --auth-key ACCESSKEY,SECRETKEY
```

S3 클라이언트(AWS CLI, s3cmd, 모든 S3 SDK)는 `http://127.0.0.1:9000`에 연결하여 Google Drive를 마치 S3인 것처럼 사용할 수 있습니다.

## 지속적인 Serve 작업 만들기

시작 시 또는 예약된 시간에 serve 명령을 실행하려면:

1. RcloneView에서 **사용자 지정 명령** 모드로 새 **작업**을 만드세요.
2. 원하는 플래그와 함께 `rclone serve webdav` 명령을 입력하세요.
3. RcloneView가 시작될 때 자동으로 시작되도록 설정하거나 필요에 따라 예약하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule serve job to run on startup" class="img-large img-center" />

## 보안 고려 사항

| 시나리오 | 권장 사항 |
|----------|---------|
| 로컬 전용 사용 | `127.0.0.1`에 바인딩 — 내 컴퓨터 외부에서 액세스 불가 |
| LAN 공유 | 컴퓨터의 로컬 IP에 바인딩하고 `--user`와 `--pass` 추가 |
| 인터넷 노출 | HTTPS 사용(`--cert`와 `--key` 플래그 추가) 또는 리버스 프록시 뒤에 배치 |
| 공개 HTTP 서버 | 읽기 전용 VFS와 함께 `rclone serve http` 사용: `--read-only` 추가 |

`127.0.0.1`을 넘어 액세스 가능한 모든 서버에는 항상 사용자 이름/비밀번호를 설정하세요:

```bash
rclone serve webdav remote:path --addr 0.0.0.0:8888 --user admin --pass strongpassword --read-only
```

## 유용한 Serve 플래그

| 플래그 | 목적 |
|------|------|
| `--addr host:port` | 바인딩 주소 및 포트 |
| `--user` / `--pass` | HTTP 기본 인증 |
| `--read-only` | 쓰기 방지 |
| `--vfs-cache-mode full` | 성능 향상을 위해 파일을 로컬에 캐시 |
| `--no-modtime` | modtime 보고 비활성화(일부 앱에 유용) |
| `--htpasswd /path/file` | 여러 사용자를 위해 htpasswd 파일 사용 |

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. RcloneView에서 **터미널을 여세요**.
3. WebDAV 서버를 시작하려면 **`rclone serve webdav remote:path --addr 127.0.0.1:8888`을 실행**하세요.
4. WebDAV URL과 자격 증명을 사용하여 **앱에서 연결**하세요.

WebDAV는 그렇지 않으면 클라우드 파일을 읽을 수 없는 수십 개의 앱에서 클라우드 스토리지 액세스를 가능하게 합니다. 마운트가 필요하지 않습니다.

---

**관련 가이드:**

- [클라우드 스토리지를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [SFTP와 SMB를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [RcloneView 터미널: GUI 안의 CLI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)

<CloudSupportGrid />

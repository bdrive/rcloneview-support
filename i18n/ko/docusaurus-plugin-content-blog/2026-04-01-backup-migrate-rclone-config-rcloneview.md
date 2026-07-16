---
slug: backup-migrate-rclone-config-rcloneview
title: "RcloneView로 Rclone Config 백업, 마이그레이션, 관리하는 방법"
authors:
  - tayson
description: "RcloneView를 사용하여 암호화된 리모트를 포함한 rclone 설정 파일을 백업, 복원, 마이그레이션하는 방법을 알아보세요. 클라우드 연결을 이동 가능하고 안전하게 유지하세요."
keywords:
  - backup rclone config
  - migrate rclone configuration
  - rclone config file location
  - rcloneview config backup
  - rclone config portable
  - export rclone remotes
  - rclone config file backup
  - move rclone to new computer
  - rclone config migration
  - rcloneview configuration management
tags:
  - RcloneView
  - cloud-storage
  - feature
  - guide
  - tips
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Rclone Config 백업, 마이그레이션, 관리하는 방법

> rclone 설정 파일에는 연결 정보, 인증 토큰, 암호화 키, 사용자 지정 설정 등 모든 클라우드 리모트 구성이 담겨 있습니다. 이 파일을 잃어버리면 모든 리모트를 처음부터 다시 설정해야 합니다. 백업하고, 마이그레이션하고, 이동 가능하게 유지하는 방법을 알아보세요.

RcloneView에서 OAuth 흐름, API 키, 암호화 비밀번호, 사용자 지정 엔드포인트 등 수십 개의 클라우드 리모트를 설정하는 데 시간을 들인 후에는, 디스크 장애나 OS 재설치, 기기 교체로 인해 그 작업을 잃고 싶지 않을 것입니다. rclone 설정 파일은 이 모든 설정을 하나의 텍스트 파일로 담고 있습니다. 이 파일이 어디에 있는지, 어떻게 보호해야 하는지 이해하는 것은 진지한 RcloneView 사용자라면 반드시 알아야 할 필수 관리 사항입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone 설정 파일은 어디에 있나요?

설정 파일 위치는 운영체제에 따라 다릅니다:

| OS | 기본 위치 |
|----|----------------|
| **Windows** | `%APPDATA%\rclone\rclone.conf` |
| **macOS** | `~/.config/rclone/rclone.conf` |
| **Linux** | `~/.config/rclone/rclone.conf` |

RcloneView의 **터미널**에서 위치를 확인할 수 있습니다:

```bash
rclone config file
```

이 명령은 현재 시스템에서 사용 중인 정확한 경로를 출력합니다.

## 설정 파일 안에는 무엇이 있나요

설정 파일은 일반 텍스트 INI 형식 파일입니다. 각 섹션은 하나의 리모트를 나타냅니다:

```ini
[my-google-drive]
type = drive
client_id =
client_secret =
token = {"access_token":"ya29...","expiry":"2026-05-01T..."}

[s3-backup]
type = s3
provider = AWS
access_key_id = AKIA...
secret_access_key = abc123...
region = us-east-1

[encrypted-drive]
type = crypt
remote = my-google-drive:encrypted/
password = *** ENCRYPTED ***
password2 = *** ENCRYPTED ***
```

**중요:** OAuth 토큰(Google Drive, OneDrive, Dropbox용)은 설정 파일에 저장됩니다. 이 토큰은 사용 중 자동으로 만료되고 갱신됩니다. 최신 유효 토큰을 확보하려면 설정 파일을 정기적으로 백업하세요.

## 설정 파일 백업하기

### 수동 백업

설정 파일을 안전한 위치에 복사합니다:

**Windows:**
```
copy %APPDATA%\rclone\rclone.conf C:\Backups\rclone-config-backup.conf
```

**macOS/Linux:**
```bash
cp ~/.config/rclone/rclone.conf ~/backups/rclone-config-$(date +%Y%m%d).conf
```

### RcloneView를 이용한 자동 백업

설정 파일 자체를 클라우드 스토리지로 백업하는 작업을 RcloneView에 설정합니다:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule config file backup in RcloneView" class="img-large img-center" />

1. 새로운 **Copy** 작업을 생성합니다.
2. 소스: 설정 파일 위치 (`~/.config/rclone/`)
3. 대상: 클라우드 폴더 (`s3-backup:system-configs/rclone/`)
4. 일정: 매주 또는 주요 변경 후.

**보안 참고:** 설정 파일에는 자격 증명이 포함되어 있습니다. 암호화된 스토리지나 암호화된 클라우드 폴더(예: Crypt 리모트)에만 백업하세요.

## 저장 시 설정 파일 암호화하기

rclone은 비밀번호로 전체 설정 파일을 암호화할 수 있습니다. RcloneView의 터미널에서 이 기능을 활성화하세요:

```bash
rclone config
# Choose: s - Set configuration password
```

비밀번호를 설정하면 설정 파일이 디스크에서 암호화됩니다. RcloneView를 시작할 때마다, 또는 rclone 명령을 실행할 때마다 비밀번호가 필요합니다. 이는 설정 파일이 유출되더라도 자격 증명을 보호합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Set config password in RcloneView terminal" class="img-large img-center" />

## 새 기기로 마이그레이션하기

### 방법 1 — 직접 복사

가장 간단한 마이그레이션 방법입니다:

1. 이전 기기에서 `rclone.conf`를 새 기기의 동일한 경로로 복사합니다.
2. 새 기기에 RcloneView를 설치합니다.
3. RcloneView를 열면 모든 리모트가 즉시 나타납니다.

대부분의 리모트(S3, WebDAV, FTP 등)는 재인증이 필요하지 않습니다. OAuth 리모트(Google Drive, OneDrive, Dropbox)는 저장된 토큰을 사용하며, 이는 만료되기 전까지(일반적으로 마지막 사용 후 60~90일) 유효합니다.

### 방법 2 — OAuth 리모트 재인증

OAuth 토큰이 만료된 경우, 영향을 받은 각 리모트를 재인증하세요:

1. RcloneView에서 **Remotes**를 엽니다.
2. 리모트를 선택하고 **Edit**를 선택합니다.
3. **Re-authorize**를 클릭하여 새 토큰을 생성합니다.

만료된 OAuth 토큰이 있는 리모트만 이 단계가 필요합니다.

### 방법 3 — `--config` 플래그 사용

설정 파일을 이동성을 위해 비표준 위치(예: Dropbox)에 보관하는 경우 다음을 사용하세요:

```bash
rclone --config /path/to/rclone.conf <command>
```

또는 `RCLONE_CONFIG` 환경 변수를 설정하여 해당 기기의 모든 rclone 작업에 기본값으로 적용할 수 있습니다.

## RcloneView에서 설정 보기 및 편집하기

RcloneView의 리모트 관리 인터페이스는 리모트를 추가하고 편집할 수 있는 GUI를 제공합니다. 하지만 직접 접근을 선호하는 파워 유저를 위해, 설정 파일을 직접 수정하는 것도 항상 유효한 변경 방법입니다. 설정 파일을 수동으로 편집한 후에는 RcloneView를 재시작하여 변경 사항을 반영하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Manage remotes in RcloneView" class="img-large img-center" />

## 모범 사례

| 모범 사례 | 이유 |
|----------|-----|
| 매주 설정 백업 | OAuth 토큰이 갱신되므로 최신 유효 상태를 확보 |
| 백업 위치 암호화 | 설정에는 자격 증명과 토큰이 포함됨 |
| 민감한 설치에는 설정 비밀번호 사용 | 기기가 침해되었을 때 추가 보호 |
| 공개 Git 저장소에 설정을 커밋하지 않기 | 액세스 키와 토큰이 노출될 수 있음 |
| 주기적으로 복원 테스트 | 백업이 실제로 사용 가능한지 확인 |

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView 다운로드**.
2. RcloneView 터미널에서 `rclone config file`을 사용하여 **설정 파일 찾기**.
3. 설정 파일을 암호화된 클라우드 스토리지로 복사하는 **자동 백업 작업 설정**.
4. 설정 비밀번호(설정한 경우)를 비밀번호 관리자에 **저장** — 이를 잃으면 설정에 대한 접근 권한도 잃게 됩니다.

rclone 설정은 RcloneView 설정에서 가장 중요한 단일 파일입니다. 그에 걸맞게 보호하세요.

---

**관련 가이드:**

- [Crypt 리모트로 클라우드 백업 암호화하기](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [RcloneView 터미널: GUI 안의 CLI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [App Lock으로 RcloneView 보안 강화하기](https://rcloneview.com/support/blog/secure-rcloneview-app-lock-password)

<CloudSupportGrid />

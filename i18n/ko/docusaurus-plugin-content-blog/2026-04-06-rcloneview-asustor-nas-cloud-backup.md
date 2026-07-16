---
slug: rcloneview-asustor-nas-cloud-backup
title: "ASUSTOR NAS에서 RcloneView를 실행하여 자동 클라우드 백업 구성하기"
authors:
  - tayson
description: "ASUSTOR NAS 장치는 Docker를 통해 RcloneView를 실행할 수 있을 만큼 강력합니다. 자동 클라우드 백업을 설정하고, 원격 스토리지를 마운트하고, NAS에서 직접 전송을 모니터링하세요."
keywords:
  - rcloneview asustor nas
  - asustor nas cloud backup
  - asustor docker rcloneview
  - asustor cloud sync alternative
  - asustor nas rclone gui
  - asustor automated backup cloud
  - asustor mount cloud storage
  - asustor nas s3 backup
  - asustor cloud file manager
  - rcloneview nas setup
tags:
  - RcloneView
  - nas
  - platform
  - backup
  - cloud-backup
  - guide
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# ASUSTOR NAS에서 RcloneView를 실행하여 자동 클라우드 백업 구성하기

> ASUSTOR NAS는 24시간 내내 작동합니다 — 이를 항상 켜져 있는 클라우드 백업 엔진으로 활용해보세요. RcloneView는 예약 백업, 클라우드 마운트, 실시간 전송 모니터링 기능을 갖춘 멀티 클라우드 파일 관리 허브로 NAS를 변신시켜줍니다.

ASUSTOR NAS 장치는 Intel 또는 ARM 프로세서를 탑재하며, ADM(ASUSTOR Data Master) OS를 실행하고, Portainer 앱이나 명령줄을 통해 Docker를 지원합니다. 이 덕분에 RcloneView를 컨테이너화된 서비스로 실행할 수 있습니다 — 데스크톱이나 노트북을 점유하지 않고도 항상 켜져 있고 항상 백업을 수행합니다. NAS 공유 폴더를 Backblaze B2로 백업하든, Google Drive와 폴더를 동기화하든, S3를 로컬 볼륨으로 마운트하든, ASUSTOR NAS의 RcloneView는 웹 기반 GUI에서 이 모든 작업을 처리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 왜 NAS에서 클라우드 백업을 실행해야 할까요

클라우드 백업을 워크스테이션이 아닌 NAS에서 직접 실행하면 여러 이점이 있습니다:

- **상시 운영** — NAS는 이미 24시간 내내 작동하고 있습니다. PC가 켜져 있지 않아도 백업이 예약대로 실행됩니다.
- **NAS 데이터에 LAN 속도로 접근** — 업로드 전에 네트워크를 통해 PC로 파일을 가져올 필요가 없습니다. NAS가 자체 디스크에서 직접 읽습니다.
- **중앙 집중식 관리** — 모든 백업 작업, 일정, 로그가 NAS에 있습니다. 브라우저가 있는 모든 기기에서 관리할 수 있습니다.
- **워크스테이션 리소스 소모 없음** — 대용량 전송에 드는 CPU 및 대역폭 비용을 NAS로 넘길 수 있습니다.

## ASUSTOR NAS 호환성

Docker를 통한 RcloneView는 다음 ASUSTOR 모델에서 실행됩니다:

- **Intel 기반**(x86_64) 프로세서: AS31, AS32, AS33, AS52, AS54, AS61, AS62, AS63, AS64, AS65, AS67, Lockerstor, Lockerstor Pro, Flashstor 시리즈.
- **ARM 기반** 프로세서: Drivestor 및 Drivestor Pro 시리즈(AS11, AS33 ARM 변형) — 사용 중인 모델의 Docker 지원 여부를 확인하세요.
- **ADM 4.0 이상**과 App Central에서 설치한 Docker(Portainer).
- **최소 2GB RAM** 권장(대용량 동시 전송 시 4GB 이상).

## Docker를 통한 RcloneView 설치

### 1단계 — App Central에서 Docker 설치

1. ADM 웹 인터페이스에서 **App Central**을 엽니다.
2. **Portainer**(또는 사용 가능한 경우 Docker-CE)를 검색합니다.
3. Portainer 앱을 설치하고 실행합니다.

### 2단계 — RcloneView 컨테이너 배포

`http://your-nas-ip:9443`에서 Portainer를 열고 새 컨테이너를 생성하거나, SSH를 사용하여 명령줄로 배포합니다:

```bash
docker run -d \
  --name rcloneview \
  -p 5572:5572 \
  -v /volume1/Docker/rcloneview/config:/config/rclone \
  -v /volume1:/data/volume1 \
  --restart unless-stopped \
  rcloneview/rcloneview:latest
```

주요 볼륨 매핑:

- `/volume1/Docker/rcloneview/config` — rclone 리모트 설정을 영구적으로 저장합니다.
- `/volume1` — 백업 작업을 위해 메인 NAS 볼륨을 RcloneView에 노출합니다.

### 3단계 — 웹 인터페이스 접속

브라우저를 열고 `http://your-nas-ip:5572`로 이동합니다. RcloneView 대시보드가 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote setup on ASUSTOR NAS" class="img-large img-center" />

## 클라우드 리모트 연결

RcloneView 인터페이스에서 클라우드 스토리지 제공업체를 추가하세요:

### NAS 백업을 위한 일반적인 설정

- **Backblaze B2** — 월 $6/TB로 대용량 NAS 백업에 비용 효율적입니다.
- **Wasabi** — 유출 비용(egress fee) 없는 정액제 S3 호환 스토리지입니다.
- **Google Drive** — NAS와 Drive 사이에서 중요한 폴더를 동기화합니다.
- **Amazon S3** — 유연한 스토리지 클래스를 갖춘 엔터프라이즈급 내구성을 제공합니다.
- **SFTP** — 원격 서버나 보조 NAS로 백업합니다.

각 리모트는 한 번만 설정하면 영구적으로 저장됩니다. 설정 마법사가 제공업체별 인증 과정을 안내합니다 — S3 호환 서비스는 API 키, Google Drive와 OneDrive는 OAuth를 사용합니다.

## 자동 백업 예약하기

NAS에서 RcloneView를 실행하는 핵심 가치는 자동화되고 무인으로 수행되는 백업입니다. 설정 방법은 다음과 같습니다:

### 백업 작업 생성

1. RcloneView의 듀얼 패널 탐색기를 엽니다.
2. 왼쪽 패널을 NAS 로컬 경로로 설정합니다(예: `/data/volume1/Photos`).
3. 오른쪽 패널을 클라우드 리모트로 설정합니다(예: `backblaze-b2:nas-backup/photos/`).
4. NAS 폴더를 클라우드에 그대로 미러링하려면 **동기화**를, 삭제 반영 없이 새 파일만 추가하려면 **복사**를 선택합니다.
5. 작업에 이름을 지정하여 저장합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a backup job on ASUSTOR NAS with RcloneView" class="img-large img-center" />

### 작업 예약하기

작업이 자동으로 실행되도록 설정합니다:

- **매일 오전 2시** — NAS 성능에 영향을 주지 않도록 사용량이 적은 시간대에 백업합니다.
- **주간 전체 동기화** — 대역폭 수요가 가장 낮은 주말에 포괄적인 동기화를 수행합니다.
- **온디맨드** — 중요한 변경 작업 전에 수동으로 백업을 실행합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cloud backups on ASUSTOR NAS" class="img-large img-center" />

## 클라우드 스토리지 마운트

RcloneView는 클라우드 스토리지를 NAS의 로컬 경로로 마운트하여 원격 파일을 로컬 디스크에 있는 것처럼 접근할 수 있게 해줍니다. 다음과 같은 경우에 유용합니다:

- 클라우드 스토리지로 **NAS 용량 확장**.
- 수동으로 다운로드하지 않고 **보관된 파일에 접근**.
- NAS 미디어 앱을 통해 클라우드 스토리지에서 **미디어 스트리밍**.

Docker에서 FUSE 마운트를 활성화하려면 컨테이너에 다음 플래그를 추가하세요:

```bash
--device /dev/fuse --cap-add SYS_ADMIN
```

그런 다음 RcloneView의 마운트 관리자를 사용하여 원하는 리모트를 로컬 경로에 마운트하세요.

## 전송 모니터링

백업 작업이 실행되는 동안 RcloneView의 전송 모니터링은 실시간 진행 상황을 보여줍니다:

- 현재 전송 중인 파일
- 전송 속도 및 예상 완료 시간(ETA)
- 오류 및 재시도
- 완료된 파일 수

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor NAS cloud backup progress in RcloneView" class="img-large img-center" />

작업 기록을 확인하여 예약된 백업이 성공적으로 완료되었는지 확인하세요. 작업이 실패하는 경우(네트워크 장애, 자격 증명 만료), RcloneView가 문제 해결을 위해 오류를 기록합니다.

## ASUSTOR NAS 백업 모범 사례

- **가장 중요한 데이터부터 시작하세요** — 사진, 문서, 데이터베이스를 먼저 백업하고 미디어 라이브러리는 나중에 진행하세요.
- 인터넷 연결이 포화되지 않도록 업무 시간에는 **대역폭 제한을 사용**하세요: 작업 옵션에서 `--bwlimit 10M`을 설정합니다.
- 랜섬웨어나 실수로 인한 덮어쓰기를 방지하기 위해 클라우드 스토리지에서 **버전 관리를 활성화**하세요.
- **rclone 설정을 백업하세요** — `/config/rclone` 디렉터리에는 클라우드 자격 증명이 들어 있습니다. 이를 두 번째 위치에 복사해 두세요.
- **디스크 상태를 모니터링하세요** — 백업이 실행되기 전에 NAS 디스크가 고장 나면 클라우드 백업도 소용이 없습니다. ADM의 스토리지 매니저 알림을 활용하세요.

## 시작하기

1. ASUSTOR App Central에서 **Portainer를 설치**합니다.
2. 위에 나온 볼륨 매핑을 사용하여 **RcloneView Docker 컨테이너를 배포**합니다.
3. **클라우드 리모트를 추가**합니다 — Backblaze B2, S3, Google Drive 또는 지원되는 다른 제공업체.
4. 가장 중요한 NAS 공유 폴더에 대해 **백업 작업을 생성하고 예약**합니다.
5. 모든 것이 원활하게 실행되고 있는지 확인하기 위해 **매주 작업 기록을 확인**합니다.

ASUSTOR NAS는 이미 RAID로 데이터를 로컬에서 보호하고 있습니다. RcloneView로 자동 클라우드 백업을 추가하면 진정한 오프사이트 보호를 얻을 수 있으며 — 이 모든 과정이 자동으로 실행됩니다.

---

**관련 가이드:**

- [클라우드-NAS 브리지: Synology로 백업하기](https://rcloneview.com/support/blog/cloud-to-synology-nas-with-rcloneview)
- [TrueNAS에서 RcloneView 실행하기](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup)
- [매일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />

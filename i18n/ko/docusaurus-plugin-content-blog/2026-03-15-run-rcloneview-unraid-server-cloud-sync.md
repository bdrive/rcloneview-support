---
slug: run-rcloneview-unraid-server-cloud-sync
title: "Unraid에서 RcloneView 실행하기 — 서버를 위한 클라우드 백업과 멀티 클라우드 동기화"
authors:
  - tayson
description: "Unraid는 홈 및 소규모 비즈니스 서버를 손쉽게 구축할 수 있게 해줍니다. Docker로 RcloneView를 추가하여 Unraid 공유 폴더를 클라우드 스토리지와 동기화하고, 오프사이트 백업과 멀티 클라우드 관리를 실현하세요."
keywords:
  - unraid cloud backup
  - unraid rclone
  - unraid cloud sync
  - unraid rcloneview
  - unraid s3 backup
  - unraid google drive
  - unraid offsite backup
  - unraid docker cloud sync
  - unraid backup solution
  - unraid multi cloud
tags:
  - nas
  - docker
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Unraid에서 RcloneView 실행하기 — 서버를 위한 클라우드 백업과 멀티 클라우드 동기화

> Unraid는 로컬 스토리지에 있어서는 훌륭합니다. 하지만 패리티 드라이브는 화재, 도난, 랜섬웨어로부터 데이터를 보호해주지 못합니다. RcloneView를 추가해 시각적인 파일 관리자로 공유 폴더를 클라우드에 백업하세요.

Unraid는 가장 인기 있는 홈 및 소규모 비즈니스 서버 플랫폼 중 하나입니다. 패리티 기반 스토리지는 드라이브 장애로부터 보호해주지만, 로컬 보호만으로는 충분하지 않습니다. 진정한 데이터 안전을 위해서는 오프사이트 백업이 필요합니다. RcloneView는 Unraid에서 Docker 컨테이너로 실행되어, 서버에 시각적인 클라우드 관리 기능과 자동화된 백업 기능을 추가해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 왜 Unraid + RcloneView인가?

Unraid의 Community Apps에는 기본적인 rclone 플러그인이 포함되어 있지만, 대부분 CLI 전용이거나 기능이 제한적입니다. RcloneView는 다음을 제공합니다:

- **시각적 파일 브라우저** — Unraid 공유 폴더와 클라우드 스토리지를 나란히 확인
- **70개 이상의 클라우드 프로바이더** — Unraid 서버에서 모든 클라우드에 연결
- **예약 백업** — 오프사이트 보호를 자동화
- **폴더 비교** — 백업 무결성 검증
- **암호화 백업** — crypt 리모트로 데이터 비공개 유지

## Docker로 설치하기

RcloneView는 Unraid에서 Docker 컨테이너로 실행됩니다. Community Apps를 통해 설치하거나 컨테이너를 직접 수동으로 설정할 수 있습니다.

RcloneView가 데이터에 접근할 수 있도록 Unraid 공유 폴더를 볼륨으로 매핑하세요.

## 주요 워크플로우

### 공유 폴더를 클라우드로 백업

한쪽 창에는 Unraid 공유 폴더를, 다른 쪽 창에는 클라우드 스토리지를 엽니다. 중요한 데이터를 위한 백업 작업을 생성하세요:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Unraid to cloud backup" class="img-large img-center" />

### 매일 밤 오프사이트 백업 예약하기

서버가 유휴 상태일 때 매일 밤 실행되는 자동화된 백업을 설정하세요:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Unraid backups" class="img-large img-center" />

### 백업 무결성 검증

패리티는 로컬 데이터를 보호합니다. 폴더 비교를 사용해 클라우드 백업을 검증하세요:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Unraid backup" class="img-large img-center" />

### 민감한 데이터 암호화

crypt 리모트를 사용하면 데이터가 서버를 떠나기 전에 백업을 암호화할 수 있습니다. 클라우드 프로바이더는 암호화되지 않은 데이터를 절대 볼 수 없습니다.

### 멀티 클라우드 백업 전략

최대한의 보호를 위해 두 개의 프로바이더에 백업하세요:

| 공유 폴더 | 1차 백업 | 2차 백업 |
|-------|---------------|-----------------|
| Documents | Google Drive | Backblaze B2 |
| Media | Backblaze B2 | Wasabi |
| Photos | Google Photos (via Drive) | S3 |
| Appdata | B2 | S3 Glacier |

## 백업 모니터링

작업 기록을 확인하여 백업이 성공적으로 완료되었는지 확인하세요:

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor backup jobs" class="img-large img-center" />

## 시작하기

1. Unraid에서 Docker 컨테이너로 **RcloneView를 설치**합니다.
2. 공유 폴더를 컨테이너 볼륨으로 **매핑**합니다.
3. 리모트 관리자에서 **클라우드 계정을 추가**합니다.
4. 중요한 공유 폴더를 위한 **백업 작업을 생성**합니다.
5. 폴더 비교로 **예약 및 검증**합니다.

패리티는 드라이브 장애로부터 보호해줍니다. 클라우드 백업은 그 외의 모든 것으로부터 보호해줍니다.

---

**관련 가이드:**

- [Docker에서 RcloneView 실행하기](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [TrueNAS에서 RcloneView 실행하기](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [NAS를 여러 클라우드에 백업하기](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />

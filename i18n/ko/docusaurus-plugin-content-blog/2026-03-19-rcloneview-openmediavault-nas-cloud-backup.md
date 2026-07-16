---
slug: rcloneview-openmediavault-nas-cloud-backup
title: "OpenMediaVault에서 RcloneView 실행하기 — DIY NAS를 위한 클라우드 백업"
authors:
  - tayson
description: "OpenMediaVault는 어떤 PC든 NAS로 바꿔줍니다. Docker로 RcloneView를 추가해 OMV 공유 폴더를 클라우드 스토리지와 동기화하고, 오프사이트 백업과 멀티 클라우드 관리를 실현하세요."
keywords:
  - openmediavault cloud backup
  - openmediavault rclone
  - omv cloud sync
  - openmediavault s3 backup
  - omv rcloneview
  - openmediavault offsite backup
  - omv google drive
  - openmediavault docker rclone
  - diy nas cloud backup
  - omv backup solution
tags:
  - nas
  - docker
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenMediaVault에서 RcloneView 실행하기 — DIY NAS를 위한 클라우드 백업

> OpenMediaVault(OMV)는 저렴한 하드웨어에서도 강력한 NAS를 구축할 수 있게 해줍니다. 하지만 로컬 스토리지만으로는 안전하지 않습니다. RcloneView를 추가해 NAS 데이터를 클라우드로 전송하고 재해 복구에 대비하세요.

OpenMediaVault는 DIY 빌더들이 즐겨 찾는 NAS OS입니다 — 오래된 PC, 라즈베리 파이, 또는 전용 하드웨어에서 실행할 수 있습니다. RAID, SMB/NFS 공유, 웹 인터페이스를 제공하지만, 클라우드 백업 기능은 없습니다. RcloneView가 이 공백을 메워줍니다. OMV에서 Docker 컨테이너로 실행되며, 70개 이상의 클라우드 제공업체와 공유 폴더를 동기화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 왜 OMV + RcloneView인가?

OMV의 내장 기능은 로컬 스토리지를 잘 처리하지만, 클라우드 통합은 제한적입니다. RcloneView는 다음을 추가합니다.

- **70개 이상의 클라우드 제공업체** — Google Drive, S3, B2, Wasabi 등
- **시각적 파일 관리** — NAS와 클라우드 스토리지를 나란히 탐색
- **예약 백업** — 자동화된 오프사이트 보호
- **검증** — Folder Comparison으로 백업 무결성 확인
- **암호화** — crypt 리모트로 비공개 백업

## Docker로 설치하기

OMV는 omv-extras 플러그인을 통해 Docker를 지원합니다. 공유 폴더를 볼륨으로 마운트한 컨테이너로 RcloneView를 실행하세요.

## 주요 워크플로우

### 공유 폴더를 클라우드로 백업

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OMV to cloud backup" class="img-large img-center" />

### 야간 오프사이트 백업 예약

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OMV backup" class="img-large img-center" />

### 백업 무결성 검증

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OMV backup" class="img-large img-center" />

### 민감한 데이터 암호화

crypt 리모트를 사용해 백업 데이터가 네트워크를 벗어나기 전에 암호화하세요.

## 권장 설정

| OMV 공유 폴더 | 백업 대상 | 일정 |
|-----------|-------------------|----------|
| Documents | Google Drive | 6시간마다 |
| Photos | Backblaze B2 | 매일 밤 |
| Media | Wasabi | 매일 밤 |
| System config | B2 | 매주 |

## 시작하기

1. omv-extras를 통해 OMV에 **Docker 설치**.
2. **RcloneView를 컨테이너로 배포**.
3. 공유 폴더를 컨테이너 볼륨으로 **마운트**.
4. **클라우드 계정을 추가**하고 백업 작업 생성.
5. **예약 및 검증**.

DIY NAS, 프로급 클라우드 백업.

---

**관련 가이드:**

- [Docker에서 RcloneView 실행하기](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [TrueNAS에서 RcloneView 실행하기](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [Unraid에서 RcloneView 실행하기](https://rcloneview.com/support/blog/run-rcloneview-unraid-server-cloud-sync)

<CloudSupportGrid />

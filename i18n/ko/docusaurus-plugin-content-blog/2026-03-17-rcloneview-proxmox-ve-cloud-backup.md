---
slug: rcloneview-proxmox-ve-cloud-backup
title: "Proxmox VE에서 RcloneView 실행하기 — 가상 머신과 컨테이너를 위한 클라우드 백업"
authors:
  - tayson
description: "Proxmox VE는 VM과 컨테이너를 호스팅합니다. RcloneView를 추가하여 VM 데이터, ISO 라이브러리, 설정을 클라우드 스토리지에 백업하고 오프사이트 재해 복구를 준비하세요."
keywords:
  - proxmox cloud backup
  - proxmox rclone
  - proxmox offsite backup
  - proxmox ve cloud sync
  - proxmox backup s3
  - proxmox google drive backup
  - proxmox rcloneview
  - proxmox vm backup cloud
  - proxmox disaster recovery
  - proxmox cloud storage
tags:
  - platform
  - docker
  - disaster-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proxmox VE에서 RcloneView 실행하기 — 가상 머신과 컨테이너를 위한 클라우드 백업

> Proxmox VE는 VM을 로컬에 백업합니다. 하지만 로컬 백업만으로는 하드웨어 고장, 화재, 도난에서 살아남을 수 없습니다. RcloneView를 추가해 VM 백업을 클라우드 스토리지로 전송하여 완전한 재해 복구를 갖추세요.

Proxmox VE는 홈랩과 프로덕션 환경에서 가상 머신과 LXC 컨테이너를 구동하는 가장 인기 있는 오픈소스 하이퍼바이저 중 하나입니다. 내장된 Proxmox Backup Server는 로컬 백업을 훌륭하게 처리하지만, 로컬 전용 백업만으로는 부족합니다. RcloneView는 VM 백업, ISO 라이브러리, 설정 내보내기를 S3, B2, Google Drive 등 원하는 클라우드 제공업체로 전송하는 클라우드 계층을 추가합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Proxmox에 클라우드 백업이 필요한 이유

Proxmox의 로컬 백업은 VM 손상과 실수로 인한 삭제로부터 보호해줍니다. 클라우드 백업은 다음으로부터 보호해줍니다:

- **하드웨어 고장** — 서버 전체가 다운되는 경우
- **랜섬웨어** — 로컬 백업이 VM과 함께 암호화되는 경우
- **물리적 재해** — 화재, 홍수, 도난
- **사이트 장애** — 데이터센터나 홈랩이 사라지는 경우

## 배포 옵션

### Proxmox에서 Docker 컨테이너로 실행

Proxmox 호스트 내부의 경량 LXC 컨테이너 안에서 RcloneView를 Docker 컨테이너로 실행합니다.

### 전용 LXC 컨테이너

백업 스토리지에 접근할 수 있는, RcloneView 전용의 최소한의 LXC 컨테이너를 생성합니다.

## 주요 워크플로

### VM 백업을 클라우드로 동기화

RcloneView를 Proxmox 백업 스토리지에 연결하고 클라우드로 동기화합니다:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Proxmox backup to cloud" class="img-large img-center" />

### 야간 오프사이트 백업 예약

Proxmox가 로컬 백업을 생성한 후, RcloneView가 이를 클라우드로 전송합니다:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Proxmox cloud backup" class="img-large img-center" />

### ISO 라이브러리 백업

ISO 모음과 컨테이너 템플릿은 다시 만들기 어렵습니다. 이를 클라우드 스토리지에 백업하세요.

### 백업 무결성 확인

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Proxmox backup" class="img-large img-center" />

### 민감한 VM 데이터 암호화

VM 백업에는 민감한 데이터가 포함될 수 있습니다. 업로드 전에 crypt 리모트를 사용하여 암호화하세요.

## 권장 전략

| 데이터 유형 | 클라우드 티어 | 보관 기간 |
|-----------|-----------|-----------|
| VM 백업 (최근) | S3 / B2 | 최근 7일 |
| VM 백업 (아카이브) | S3 Glacier | 최근 90일 |
| ISO 라이브러리 | B2 | 영구 |
| Proxmox 설정 | Google Drive | 최근 30일 |

## 시작하기

1. Proxmox에서 컨테이너로 **RcloneView를 배포**하세요.
2. 백업 대상을 위한 **클라우드 계정을 추가**하세요.
3. 백업 스토리지를 대상으로 하는 **동기화 작업을 생성**하세요.
4. 로컬 백업 완료 후 **실행되도록 예약**하세요.
5. Folder Comparison으로 **정기적으로 확인**하세요.

로컬 백업은 실수로부터 여러분을 구해줍니다. 클라우드 백업은 재해로부터 여러분을 구해줍니다.

---

**관련 가이드:**

- [Docker에서 RcloneView 실행하기](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [랜섬웨어로부터 보호하기](https://rcloneview.com/support/blog/protect-cloud-storage-ransomware-backup-rcloneview)
- [클라우드 백업 암호화하기](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

---
slug: rcloneview-qnap-nas-cloud-backup-rcloneview
title: "QNAP NAS에서 RcloneView 사용하기 — NAS를 위한 클라우드 백업과 멀티 클라우드 동기화"
authors:
  - tayson
description: "QNAP NAS 사용자는 RcloneView를 통해 S3, B2, Google Drive 등으로 클라우드 백업을 할 수 있습니다. QNAP NAS에서 연결, 동기화, 백업 자동화하는 방법을 알아보세요."
keywords:
  - qnap cloud backup
  - qnap nas rclone
  - qnap cloud sync
  - qnap s3 backup
  - qnap google drive sync
  - qnap multi cloud
  - qnap nas cloud storage
  - qnap backup tool
  - qnap rcloneview
  - qnap automated backup
tags:
  - RcloneView
  - qnap
  - nas
  - backup
  - cloud-storage
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# QNAP NAS에서 RcloneView 사용하기 — NAS를 위한 클라우드 백업과 멀티 클라우드 동기화

> QNAP NAS 장치는 가장 중요한 데이터를 로컬에 저장합니다. 하지만 로컬 전용 저장 방식은 곧 로컬 전용 위험을 의미합니다 — 하드웨어 고장, 화재, 도난, 침수는 모든 것을 앗아갈 수 있습니다. RcloneView를 통한 클라우드 백업은 70개 이상의 클라우드 제공업체로 오프사이트 보호를 추가해줍니다.

QNAP NAS는 HBS 3(Hybrid Backup Sync)를 통해 클라우드 동기화 기능을 기본 제공하지만, 클라우드 제공업체 지원 범위는 rclone의 70개 이상 제공업체에 비해 제한적입니다. QNAP에 연결된 데스크톱이나 전용 장치에서 실행되는 RcloneView는 rclone이 지원하는 모든 제공업체에 대한 접근 권한과 더불어 시각적 관리, 폴더 비교, 배치 작업 기능을 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## QNAP을 RcloneView에 연결하기

### 네트워크 공유(SMB/CIFS)를 통한 연결

RcloneView가 실행 중인 컴퓨터에서 QNAP 공유 폴더에 접근합니다. QNAP 공유를 네트워크 드라이브로 매핑한 다음, RcloneView 작업에서 로컬 소스로 사용하세요.

### SFTP를 통한 연결

QNAP을 SFTP 리모트로 추가합니다:

1. QNAP에서 SFTP를 활성화합니다(제어판 → 네트워크 및 파일 서비스 → Telnet/SSH).
2. RcloneView에서 QNAP의 IP와 자격 증명으로 SFTP 리모트를 추가합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add QNAP NAS as remote" class="img-large img-center" />

## 백업 워크플로

### QNAP → Backblaze B2

월 $6/TB의 저렴한 오프사이트 백업:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup QNAP to B2" class="img-large img-center" />

### QNAP → AWS S3

중요한 비즈니스 데이터를 위한 엔터프라이즈급 내구성.

### QNAP → Google Drive

Google Drive를 통해 NAS 파일을 협업에 활용할 수 있도록 만듭니다.

### 야간 백업 예약하기

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule QNAP backup" class="img-large img-center" />

## 백업 확인하기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify QNAP backup" class="img-large img-center" />

## QNAP HBS 3 대 RcloneView

| 기능 | QNAP HBS 3 | RcloneView |
|---------|-----------|------------|
| 클라우드 제공업체 | 약 15개 | 70개 이상 |
| NAS에서 직접 실행 | ✅ | 연결된 장치에서 실행 |
| 2단 탐색기 | ❌ | ✅ |
| 폴더 비교 | ❌ | ✅ |
| 배치 작업 | ❌ | ✅ |
| 알림 | 이메일 | Slack/Discord/Telegram |
| 암호화된 리모트 | 제한적 | ✅ (crypt) |

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 네트워크 공유 또는 SFTP를 통해 **QNAP에 연결**하세요.
3. **클라우드 백업 대상을 추가**하세요.
4. **자동 백업을 예약**하세요.
5. **폴더 비교로 검증**하세요.

여러분의 NAS 데이터는 오프사이트 보호를 받을 자격이 있습니다.

---

**관련 가이드:**

- [Synology NAS에서 RcloneView 사용하기](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [동기화 작업 만들기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

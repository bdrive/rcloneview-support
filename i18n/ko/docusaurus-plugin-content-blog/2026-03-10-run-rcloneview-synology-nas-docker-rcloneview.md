---
slug: run-rcloneview-synology-nas-docker-rcloneview
title: "시놀로지 NAS에서 RcloneView 실행하기 — NAS에서 클라우드 백업과 동기화"
authors:
  - tayson
description: "시놀로지 NAS를 클라우드 백업 허브로 만들어보세요. RcloneView를 시놀로지 NAS와 함께 사용하여 자동 클라우드 동기화, 백업, 멀티 클라우드 관리를 하는 방법을 알아봅니다."
keywords:
  - rcloneview synology nas
  - synology cloud backup
  - synology cloud sync alternative
  - synology rclone
  - synology nas s3 backup
  - synology google drive sync
  - synology multi cloud
  - nas cloud backup tool
  - synology automated backup
  - synology nas cloud manager
tags:
  - synology
  - nas
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 시놀로지 NAS에서 RcloneView 실행하기 — NAS에서 클라우드 백업과 동기화

> 시놀로지 NAS에는 대체 불가능한 데이터가 테라바이트 단위로 저장되어 있습니다. 시놀로지의 내장 기능인 Cloud Sync는 기본적인 설정에는 유용하지만, 멀티 클라우드 관리, 스케줄링, 폴더 비교, 일괄 작업이 필요할 때는 RcloneView가 그 공백을 채워줍니다.

시놀로지 NAS 장치는 중앙 집중식 로컬 스토리지로는 훌륭하지만, 클라우드 통합 측면에서는 한계가 있습니다. 시놀로지 Cloud Sync는 약 20개의 클라우드 프로바이더에 대해 기본적인 동기화를 지원합니다. 시놀로지 Hyper Backup은 백업을 처리하지만 멀티 클라우드 파일 관리 기능이 없습니다. RcloneView는 70개 이상의 클라우드 프로바이더, 시각적 파일 관리, 고급 자동화로 이 두 가지를 보완합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 시놀로지에 RcloneView가 필요한 이유

### 시놀로지 Cloud Sync를 넘어서

| 기능 | 시놀로지 Cloud Sync | RcloneView |
|---------|-------------------|------------|
| 클라우드 프로바이더 | 약 20개 | 70개 이상 |
| 듀얼 패널 파일 탐색기 | ❌ | ✅ |
| 폴더 비교 | ❌ | ✅ |
| 클라우드 간 전송 | ❌ | ✅ |
| 일괄 작업 | ❌ | ✅ |
| Slack/Discord 알림 | ❌ | ✅ |
| 필터 규칙 | 기본 | rclone 필터 전체 지원 |
| 암호화 리모트 | ❌ | ✅ (crypt) |
| 클라우드 드라이브 마운트 | ❌ | ✅ |
| S3 호환 프로바이더 | 제한적 | 전체 지원 |

### 시놀로지 자동 감지

RcloneView는 네트워크상의 시놀로지 NAS 장치를 자동으로 감지합니다.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection" class="img-large img-center" />

수동 네트워크 설정이 필요 없습니다.

## 설정 옵션

### 옵션 1: 데스크톱에서 RcloneView를 실행하고 NAS에 연결하기

가장 간단한 방법입니다. Windows/Mac/Linux 데스크톱에서 RcloneView를 실행하세요.

1. 시놀로지 NAS를 리모트로 추가합니다(자동 감지 또는 SFTP/WebDAV를 통해).
2. 클라우드 대상을 추가합니다(S3, B2, Google Drive 등).
3. NAS와 클라우드 간의 동기화/복사 작업을 생성합니다.
4. 작업이 자동으로 실행되도록 스케줄을 설정합니다.

가정용 사용자나 소규모 사무실에 적합합니다.

### 옵션 2: 전용 머신에서 RcloneView 실행하기

라즈베리 파이나 오래된 노트북을 전용 백업 컨트롤러로 사용하세요.

1. 전용 머신에 RcloneView를 설치합니다.
2. 네트워크 마운트를 통해 시놀로지 NAS에 연결합니다.
3. 모든 백업 작업을 설정하고 스케줄링합니다.
4. 24시간 내내 실행 상태로 둡니다.

## 백업 워크플로

### NAS → 클라우드 (오프사이트 백업)

가장 중요한 워크플로입니다. NAS를 클라우드 스토리지로 백업하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup NAS to cloud" class="img-large img-center" />

권장 대상:

| NAS 데이터 | 클라우드 대상 | 이유 |
|----------|-------------|-----|
| 사진 및 동영상 | Backblaze B2 | 저렴함, TB당 $6 |
| 문서 | Google Drive | 접근성 좋고 검색 가능 |
| 비즈니스 데이터 | AWS S3 | 내구성과 엔터프라이즈급 안정성 |
| 전체(암호화) | 아무 프로바이더 + crypt | 제로 지식 백업 |

### 클라우드 → NAS (로컬 미러링)

빠른 접근을 위해 클라우드 데이터의 로컬 사본을 유지하세요.

```
Google Drive → NAS/CloudMirror/GoogleDrive/
OneDrive → NAS/CloudMirror/OneDrive/
```

### NAS → NAS (원격 사이트 백업)

두 곳에 NAS 장치가 있다면, 클라우드 프로바이더를 중간 저장소로 사용하여 RcloneView를 통해 서로 동기화할 수 있습니다.

## 자동 백업 스케줄링

야간 NAS 백업을 설정하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS cloud backup" class="img-large img-center" />

### 권장 스케줄

| 작업 | 빈도 | 시간 |
|-----|-----------|------|
| 중요 데이터 → B2 | 매일 밤 | 오전 2시 |
| 사진 → Google Drive | 매일 밤 | 오전 3시 |
| 전체 NAS → S3 | 매주 | 토요일 자정 |
| 검증(비교) | 매주 | 일요일 오전 6시 |

## 백업 검증

NAS 콘텐츠를 클라우드 백업과 비교하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify NAS backup against cloud" class="img-large img-center" />

## 암호화된 NAS 백업

crypt 리모트를 사용하여 NAS 데이터를 클라우드 스토리지에 업로드하기 전에 암호화하세요. 클라우드 프로바이더는 암호화되지 않은 원본 파일을 절대 볼 수 없습니다.

## NAS 관리자를 위한 일괄 작업

전체 NAS 백업 루틴을 자동화하세요.

1. /photos → B2로 복사.
2. /documents → Google Drive로 복사.
3. /business → S3(암호화)로 복사.
4. 세 항목 모두 비교.
5. Slack으로 알림 전송.

이 모든 것을 하나의 예약된 일괄 작업으로 처리할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **시놀로지 NAS에 연결**합니다(자동 감지).
3. **클라우드 스토리지 리모트를 추가**합니다.
4. **백업 작업을 생성하고 스케줄링**합니다.
5. **폴더 비교로 검증**합니다.

NAS 데이터는 소중합니다. 오프사이트 안전망을 마련해 주세요.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 스케줄링](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [폴더 콘텐츠 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [클라우드 백업 암호화하기](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

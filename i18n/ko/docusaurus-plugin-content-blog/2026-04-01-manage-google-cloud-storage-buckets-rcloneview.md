---
slug: manage-google-cloud-storage-buckets-rcloneview
title: "RcloneView로 Google Cloud Storage 버킷 관리하기"
authors:
  - tayson
description: "RcloneView를 사용해 Google Cloud Storage(GCS) 버킷을 시각적으로 탐색, 업로드, 동기화, 관리하세요. CLI가 필요 없습니다 — GUI를 통한 완전한 GCS 관리."
keywords:
  - google cloud storage rcloneview
  - manage gcs buckets gui
  - rclone google cloud storage
  - gcs bucket management tool
  - google cloud storage gui
  - sync files google cloud storage
  - upload to gcs without cli
  - rcloneview gcs
  - google cloud storage backup
  - gcs rclone gui
tags:
  - RcloneView
  - google-cloud-storage
  - cloud-storage
  - guide
  - object-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Google Cloud Storage 버킷 관리하기

> Google Cloud Storage는 GCP의 객체 스토리지 기반으로, 내구성이 뛰어나고 빠르며 Google의 클라우드 플랫폼과 깊이 통합되어 있습니다. RcloneView는 `gsutil`이나 GCP 콘솔 없이도 GCS 버킷을 위한 시각적 파일 관리자를 제공합니다.

Google Cloud Storage(GCS)는 이미 Google Cloud Platform을 사용 중인 팀이 앱 데이터, ML 데이터셋, BigQuery 스테이징, 미디어 배포 등에 선호하는 객체 스토리지입니다. `gsutil`과 GCP 콘솔도 작동은 하지만, 대량 파일 작업과 일상적인 파일 관리에는 느립니다. RcloneView는 GCS 버킷을 위한 듀얼 패널 파일 관리자를 제공하여, 데스크톱 파일 탐색기를 사용하듯 파일을 탐색하고 전송하고 동기화할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView가 GCS 관리에 더해주는 것

| 작업 | GCP 콘솔 | gsutil CLI | RcloneView |
|------|------------|------------|------------|
| 버킷을 시각적으로 탐색 | ✓ | ✗ | ✓ |
| 드래그 앤 드롭 업로드 | 제한적 | ✗ | ✓ |
| 다른 클라우드로 동기화 | ✗ | ✗ | ✓ |
| 로컬 디스크로 전송 | 느림 | ✓ | ✓ |
| 동기화 작업 예약 | ✗ | 수동 | ✓ |
| 실시간 전송 모니터링 | ✗ | ✓ | ✓ |

## Google Cloud Storage를 RcloneView에 연결하기

### 1단계 — 서비스 계정 생성

GCP 콘솔에서:

1. **IAM & Admin → Service Accounts**로 이동합니다.
2. **Storage Admin**(버킷 관리 없이 읽기/쓰기만 필요하면 **Storage Object Admin**) 역할을 가진 새 서비스 계정을 생성합니다.
3. JSON 키 파일을 생성하고 다운로드합니다.

### 2단계 — RcloneView에 GCS 리모트 추가

RcloneView를 열고 **New Remote**를 클릭합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Cloud Storage remote in RcloneView" class="img-large img-center" />

1. 리모트 유형 목록에서 **Google Cloud Storage**를 선택합니다.
2. 다운로드한 **JSON 서비스 계정 키 파일**을 지정합니다.
3. **GCP 프로젝트 ID**를 입력합니다.
4. 리모트 이름을 지정하고(예: `gcs-prod`) 저장합니다.

연결이 완료되면 GCS 버킷이 RcloneView의 파일 탐색기에 최상위 폴더로 표시됩니다.

## GCS 버킷 탐색 및 관리

버킷을 열면 그 안의 내용이 표시됩니다. RcloneView는 객체 키 계층 구조를 폴더로 표현하며, GCP 콘솔에서 보는 것과 동일합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse GCS buckets in RcloneView" class="img-large img-center" />

듀얼 패널 인터페이스에서 다음을 할 수 있습니다:
- GCS 경로 간, 또는 로컬 디스크와의 **파일 복사**
- 버킷 내부 또는 버킷 간 **객체 이동**
- 확인 절차를 거친 **객체 삭제**
- 새 키로 복사한 뒤 기존 키를 삭제하는 방식의 **이름 변경**

## GCS로/에서 파일 동기화하기

### 로컬 데이터셋을 GCS로 업로드

1. RcloneView에서 **Job**을 엽니다.
2. 소스를 로컬 폴더로 설정합니다(예: `D:\ml-dataset\`).
3. 대상을 GCS 경로로 설정합니다(예: `gcs-prod:my-ml-bucket/training-data/`).
4. **Copy**(새 파일만 추가) 또는 **Sync**(정확히 미러링)를 선택합니다.
5. 작업을 실행하고 진행 상황을 실시간으로 모니터링합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Upload dataset to GCS in RcloneView" class="img-large img-center" />

### 크로스 클라우드: GCS에서 다른 제공업체로

RcloneView는 클라우드 간 직접 전송을 지원합니다. 일반적인 GCS 워크플로:

- **GCS → AWS S3** — 이중화를 위해 클라우드 간 버킷 복제
- **GCS → Backblaze B2** — 콜드 데이터를 저렴한 스토리지로 아카이빙
- **GCS → Google Drive** — 처리된 결과물을 비기술 이해관계자와 공유
- **GCS → 로컬 NAS** — 온프레미스 처리를 위해 데이터 가져오기

## GCS 스토리지 클래스 인식

GCS에는 Standard, Nearline, Coldline, Archive 등 여러 스토리지 클래스가 있습니다. RcloneView에서 동기화 작업을 설정할 때 rclone 플래그를 전달하여 새 객체의 특정 스토리지 클래스를 지정할 수 있습니다.

| 스토리지 클래스 | 사용 사례 | 최소 저장 기간 |
|--------------|----------|--------------------------|
| Standard | 자주 접근하는 데이터 | 없음 |
| Nearline | 월간 접근 | 30일 |
| Coldline | 분기별 접근 | 90일 |
| Archive | 연간 접근 | 365일 |

아카이브 데이터의 경우 RcloneView 작업 편집기의 **Custom flags** 필드에 `--gcs-storage-class COLDLINE`을 입력하세요.

## 정기적인 GCS 동기화 예약하기

야간 업로드, 일일 스테이징 동기화, 주간 아카이브 실행 등 반복되는 백업 작업을 위해:

1. 소스와 GCS 대상을 지정한 작업을 생성합니다.
2. **Schedule** 설정을 엽니다.
3. 빈도를 설정합니다(매일, 매주, 사용자 지정 cron).
4. 완료 시 이메일 또는 알림을 활성화합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule GCS sync job" class="img-large img-center" />

## 검증을 위한 폴더 비교

대용량 전송 후에는 RcloneView의 **Folder Comparison**을 사용해 로컬 파일이 GCS의 파일과 일치하는지 확인하세요 — 파일 수, 크기, 체크섬을 검사합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify GCS sync with folder comparison" class="img-large img-center" />

누락되거나 불일치하는 객체는 강조 표시되어, 해당 파일만 다시 실행할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. GCP 콘솔에서 Storage Object Admin 권한을 가진 **서비스 계정을 생성**합니다.
3. **JSON 키를 다운로드**하고 RcloneView에 GCS 리모트를 추가합니다.
4. **버킷을 탐색**하고 시각적으로 파일 전송을 시작하세요.

GCS는 강력한 인프라입니다 — RcloneView는 일상적인 파일 관리를 로컬 드라이브만큼 쉽게 만들어 줍니다.

---

**관련 가이드:**

- [Google Cloud Storage를 AWS S3로 전송하기](https://rcloneview.com/support/blog/transfer-google-cloud-storage-aws-s3-without-cli-rcloneview)
- [Amazon S3 버킷을 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [RcloneView로 S3, Wasabi, R2 통합 관리하기](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />

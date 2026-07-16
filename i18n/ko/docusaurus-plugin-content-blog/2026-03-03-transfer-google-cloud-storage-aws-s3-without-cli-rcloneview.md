---
slug: transfer-google-cloud-storage-aws-s3-without-cli-rcloneview
title: "CLI 없이 RcloneView로 Google Cloud Storage와 AWS S3 간 파일 전송하기"
authors:
  - tayson
description: "gsutil, aws cli, 스크립팅 없이 RcloneView의 시각적 GUI를 사용해 Google Cloud Storage(GCS)와 AWS S3 간 데이터를 이동, 동기화, 마이그레이션하세요."
keywords:
  - google cloud storage to s3
  - gcs to aws s3 transfer
  - google cloud storage migration
  - gcs s3 sync
  - transfer between gcs and s3
  - google cloud storage gui
  - gcs backup to s3
  - multi-cloud transfer gcs
  - google cloud storage rclone
  - gcs to s3 without cli
tags:
  - google-cloud-storage
  - aws-s3
  - migration
  - sync
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# CLI 없이 RcloneView로 Google Cloud Storage와 AWS S3 간 파일 전송하기

> Google Cloud Storage와 AWS S3 전반의 데이터를 관리하려면 보통 gsutil, aws cli, 커스텀 스크립트를 함께 다뤄야 합니다. RcloneView를 사용하면 시각적 인터페이스만으로 이 모든 작업을 처리할 수 있습니다 — GCS와 S3 간 전송을 몇 분 만에 탐색, 비교, 동기화, 예약할 수 있습니다.

멀티 클라우드는 대부분의 엔지니어링 팀에게 현실입니다. ML 학습 데이터는 GCS 버킷에 있고, 프로덕션 자산은 S3에 있으며, 누군가는 이 둘을 동기화 상태로 유지해야 합니다. gsutil과 aws cli로 셸 스크립트를 작성하는 전통적인 방식은 작동은 하지만 취약하고, 모니터링하기 어려우며, 비개발자가 관리하기는 불가능합니다.

RcloneView는 GCS와 S3에 네이티브로 연결되어, 두 개의 가장 큰 클라우드 플랫폼 간 데이터 이동을 탐색, 전송, 비교, 자동화할 수 있는 통합 GUI를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 왜 GCS와 S3 사이에 데이터를 이동해야 할까요?

팀들이 Google Cloud Storage와 AWS S3 간에 데이터를 전송하는 데는 몇 가지 공통적인 이유가 있습니다.

**멀티 클라우드 이중화** — 중요한 데이터를 두 개의 주요 프로바이더에 저장하면 프로바이더 수준의 장애와 벤더 종속을 방지할 수 있습니다. 한쪽 클라우드에 장애가 발생해도 다른 쪽에서 데이터에 접근할 수 있습니다.

**비용 최적화** — GCS와 S3는 스토리지, 이그레스(egress), 작업(operation)에 대해 서로 다른 가격 체계를 가지고 있습니다. 콜드 데이터를 사용 패턴에 맞춰 더 저렴한 프로바이더로 이동하면 상당한 비용을 절감할 수 있습니다.

**크로스 플랫폼 워크플로우** — 데이터 사이언스 팀은 GCP(BigQuery, Vertex AI)를 사용하지만 프로덕션 인프라는 AWS에서 운영됩니다. 데이터는 양쪽을 오가야 합니다.

**마이그레이션** — 다운타임 없이 GCP에서 AWS로(또는 그 반대로) 이전하려면 안정적이고 재개 가능한 전송이 필요합니다.

**컴플라이언스 및 데이터 레지던시** — 일부 규제는 특정 지역이나 프로바이더에 데이터 사본을 보관하도록 요구합니다.

## GCS와 S3 리모트 설정하기

### Google Cloud Storage 추가

1. RcloneView를 열고 **Add Remote**를 클릭합니다.
2. 프로바이더 목록에서 **Google Cloud Storage**를 선택합니다.
3. 인증 방식을 선택합니다.
   - **Service Account JSON** — 서버 간(server-to-server) 전송에 권장됩니다. 서비스 계정 키 파일을 업로드합니다.
   - **OAuth (브라우저 로그인)** — 개인 GCP 계정에 적합합니다. [OAuth 로그인 가이드](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)를 따르세요.
4. 메시지가 표시되면 **project ID**와 기본 **bucket location**을 설정합니다.
5. 리모트를 저장하면 이제 GCS 버킷을 탐색할 수 있습니다.

### AWS S3 추가

1. **Add Remote**를 다시 클릭합니다.
2. 프로바이더 목록에서 **Amazon S3**를 선택합니다.
3. **Access Key ID**와 **Secret Access Key**를 입력합니다.
4. **region**과 **endpoint**를 선택합니다.
5. 저장하면 S3 버킷이 Explorer에 표시됩니다.

S3 설정에 대한 자세한 내용은 [AWS S3 연결 가이드](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)를 참고하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Add GCS and S3 remotes in RcloneView" class="img-large img-center" />

## GCS와 S3를 나란히 탐색하기

두 리모트가 연결되면 RcloneView의 2단 Explorer에서 이를 엽니다. 왼쪽에는 GCS 버킷, 오른쪽에는 S3 버킷(또는 그 반대)이 표시됩니다. 다음을 수행할 수 있습니다.

- 양쪽에서 동시에 버킷과 폴더를 **탐색**합니다.
- **파일 크기, 날짜, 개수를 확인**해 무엇이 어디에 있는지 파악합니다.
- 파일을 GCS에서 S3로 직접 **드래그 앤 드롭**하거나 내장된 복사/이동 명령을 사용합니다.

이러한 나란히 보기(side-by-side view)를 통해 GCP 콘솔과 AWS 콘솔을 오가지 않고도 두 클라우드를 즉시 파악할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse GCS and S3 side by side in RcloneView" class="img-large img-center" />

## 전송 시나리오

### 시나리오 1: 일회성 마이그레이션 (GCS → S3)

플랫폼 마이그레이션을 위해 GCS의 모든 데이터를 S3로 이동합니다.

1. **Copy 작업 생성**
   - Source: GCS 리모트 → 버킷 선택
   - Destination: S3 리모트 → 대상 버킷 선택
2. **최대 속도로 구성**
   - 병렬 전송: 8–16 (GCS와 S3 모두 높은 병렬성을 잘 처리합니다)
   - 청크 크기: 대용량 파일의 경우 64MB–128MB
   - 디렉터리 목록 조회 속도를 높이려면 `--fast-list` 플래그를 활성화합니다
3. **작업 실행** 후 실시간으로 진행 상황을 모니터링합니다.

대규모 마이그레이션의 경우 Copy 작업을 여러 번 실행하세요. 첫 전체 복사 이후 후속 실행에서는 새로 생기거나 변경된 파일만 전송되므로, 중단되더라도 안전하게 재개할 수 있습니다.

### 시나리오 2: 지속적인 동기화 (양방향)

GCS 버킷과 S3 버킷을 지속적으로 동기화 상태로 유지합니다.

1. 기본 방향으로 **Sync 작업 생성** (GCS → S3).
2. [작업 예약(Job Scheduling)](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)을 사용해 매시간 또는 매일 실행되도록 **예약**합니다.
3. 양방향 동기화가 필요하면 **반대 방향 Sync 작업을 추가**합니다 (S3 → GCS).
4. **Batch Jobs**(v1.3)를 사용해 두 방향을 순차적으로 실행합니다.

### 시나리오 3: 선택적 크로스 클라우드 백업

특정 데이터만 다른 클라우드로 백업합니다.

1. **[필터 규칙(Filter Rules)](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)**을 사용해 특정 파일 유형이나 폴더를 포함/제외합니다.
   - 예: `*.parquet`와 `*.csv` 파일(ML 데이터셋)만 동기화
   - 예: `tmp/`와 `logs/` 디렉터리 제외
2. 이러한 필터를 적용해 **예약된 Copy 작업을 생성**합니다.

## GCS와 S3의 콘텐츠 비교하기

전송 전후로 [폴더 비교(Folder Comparison)](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)를 사용해 두 버킷에 동일한 데이터가 있는지 확인하세요.

- **GCS에만 있는 파일** — 손쉬운 식별을 위해 강조 표시됩니다.
- **S3에만 있는 파일** — 대상에는 존재하지만 소스에는 없는 항목을 보여줍니다.
- **다른 파일** — 이름은 같지만 크기나 체크섬이 다른 파일입니다.
- **동일한 파일** — 두 클라우드에서 일치가 확인된 파일입니다.

이는 마이그레이션 검증에 매우 유용합니다. 테라바이트 단위의 데이터를 복사한 후, 모든 파일이 손상 없이 도착했음을 증명할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare GCS and S3 bucket contents" class="img-large img-center" />

## 전송 속도 최적화하기

GCS와 S3는 모두 고성능 오브젝트 스토리지이므로 전송을 적극적으로 밀어붙일 수 있습니다.

| 설정 | 권장 값 | 이유 |
|---------|-------------------|-----|
| 병렬 전송 | 8–16 | 두 프로바이더 모두 동시 요청을 잘 처리합니다 |
| 청크 크기 | 64MB–128MB | 대용량 파일에 대한 API 오버헤드를 줄입니다 |
| Checkers | 16–32 | 대규모 디렉터리의 비교 단계 속도를 높입니다 |
| 버퍼 크기 | 128MB | 클라우드 리전 간 네트워크 지연을 완화합니다 |
| Fast-list | 활성화 | 디렉터리 목록 조회 시 API 호출을 크게 줄입니다 |

### 리전 간 고려 사항

GCS 버킷이 `us-central1`에 있고 S3 버킷이 `eu-west-1`에 있다면, 데이터는 리전 간 인터넷을 거쳐 이동해야 합니다. 최상의 성능을 위해서는 다음을 고려하세요.

- 가능하면 소스와 대상을 같은 지리적 영역에 둡니다.
- 네트워크 혼잡을 피하기 위해 트래픽이 적은 시간대에 전송을 실행합니다.
- 이그레스 비용을 모니터링합니다 — GCS와 S3 모두 네트워크를 벗어나는 데이터에 대해 요금을 부과합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor GCS to S3 transfer speed" class="img-large img-center" />

## GCS ↔ S3 워크플로우 자동화하기

### 일일 데이터 파이프라인

매일 밤 실행되는 예약 작업을 설정합니다.

1. AWS 기반 학습 작업을 위해 새 ML 학습 데이터를 GCS → S3로 동기화합니다.
2. BigQuery 분석을 위해 결과를 S3 → GCS로 다시 복사합니다.
3. 파이프라인이 완료되면 [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control)을 통해 알림을 받습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule GCS to S3 data sync" class="img-large img-center" />

### 재해 복구(DR) 복제

중요한 S3 데이터의 실시간 사본을 GCS에 유지합니다(또는 그 반대).

1. 기본 버킷에서 DR 버킷으로 향하는 Sync 작업을 생성합니다.
2. RPO(Recovery Point Objective)를 1시간 미만으로 유지하기 위해 매시간 예약합니다.
3. 데이터 무결성을 보장하기 위해 [체크섬 검증](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)을 사용합니다.

### 비용 기반 티어링

접근 패턴에 따라 더 저렴한 프로바이더로 데이터를 이동합니다.

1. 자주 접근하는 데이터 → 컴퓨트와 가장 가까운 프로바이더에 유지합니다.
2. 콜드/아카이브 데이터 → 가격에 따라 GCS Nearline/Coldline 또는 S3 Glacier로 이동합니다.
3. 비용을 지속적으로 최적화하기 위해 주기적인 티어링 작업을 예약합니다.

## GCS vs S3: 통합 레이어로서의 RcloneView

두 개의 서로 다른 CLI(GCS용 gsutil, S3용 aws s3)를 배워야 하는 대신, RcloneView는 두 플랫폼 모두에 대한 단일 인터페이스를 제공합니다. 이는 다음을 의미합니다.

- **배워야 할 도구는 하나** — 팀이 두 개의 서로 다른 커맨드라인 인터페이스를 익힐 필요가 없습니다.
- **시각적 작업** — 플래그와 인수 대신 드래그 앤 드롭, 우클릭 메뉴, 다이얼로그 기반 구성을 사용합니다.
- **일관된 모니터링** — 어떤 클라우드가 관련되어 있든 동일한 [작업 히스토리(Job History)](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)와 [전송 모니터링(Transfer Monitoring)](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)을 사용합니다.
- **이식 가능한 작업** — GCS를 S3로 동기화하는 작업은 OneDrive를 Dropbox로 동기화하는 작업과 정확히 동일한 방식으로 작동합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Unified job history for GCS and S3 transfers" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다 (Windows, macOS, Linux).
2. 서비스 계정 키나 OAuth 로그인으로 **GCS 리모트를 추가**합니다.
3. 액세스 키 자격 증명으로 **S3 리모트를 추가**합니다.
4. Explorer에서 **양쪽을 나란히 탐색**합니다.
5. 사용 사례에 맞는 **Copy 또는 Sync 작업을 생성**합니다.
6. 손이 가지 않는 멀티 클라우드 데이터 관리를 위해 **예약하고 모니터링**합니다.

이제 gsutil과 aws cli를 오가며 씨름하지 마세요. RcloneView는 GCS와 S3 관리를 하나의 시각적 워크플로우로 통합하여, CLI를 아는 엔지니어뿐 아니라 팀 전체가 멀티 클라우드 데이터 전송에 접근할 수 있게 합니다.

---

**관련 가이드:**

- [AWS S3 및 S3 호환 스토리지 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [브라우저 기반 로그인(OAuth)으로 리모트 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [폴더 콘텐츠 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [동기화 작업 생성](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [실시간 전송 모니터링](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [체크섬 검증 클라우드 마이그레이션](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />

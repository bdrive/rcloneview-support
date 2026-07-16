---
slug: sync-google-cloud-storage-to-wasabi-rcloneview
title: "Google Cloud Storage를 Wasabi로 동기화 — RcloneView로 비용 효율적인 백업"
authors:
  - tayson
description: "Google Cloud Storage의 데이터를 S3 호환 스토리지인 Wasabi로 이동하여 상당한 비용을 절감하세요. RcloneView는 두 제공업체를 모두 지원하며 동기화 작업을 자동화합니다."
keywords:
  - Google Cloud Storage to Wasabi sync
  - GCS Wasabi migration RcloneView
  - Wasabi cost-effective cloud backup
  - Google Cloud Storage backup alternative
  - S3-compatible cloud migration
  - cloud storage cost optimization
  - GCS Wasabi transfer
  - RcloneView Google Cloud Wasabi
tags:
  - RcloneView
  - google-cloud-storage
  - wasabi
  - cloud-to-cloud
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Cloud Storage를 Wasabi로 동기화 — RcloneView로 비용 효율적인 백업

> Wasabi는 Google Cloud Storage의 GB당 비용의 일부만으로 핫 클라우드 스토리지를 제공합니다 — RcloneView는 두 서비스를 모두 연결하여 마이그레이션 또는 지속적인 동기화를 자동화합니다.

Google Cloud Storage는 GCP 워크플로우에 깊이 통합되어 있지만, 대용량 데이터셋의 경우 스토리지 비용이 빠르게 누적됩니다. Wasabi는 TB당 정액 요금제와 이그레스(egress) 비용 없이 S3 호환 핫 스토리지를 제공하여, 보조 백업 대상이나 비용 절감형 마이그레이션 목적지로 매력적입니다. RcloneView는 두 제공업체를 모두 지원하며 단일 GUI 인터페이스에서 동기화 작업을 처리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Cloud Storage 연결하기

Google Cloud Storage(GCS)는 RcloneView에서 두 가지 방법으로 연결할 수 있습니다: 네이티브 GCS 제공업체를 사용하거나 S3 호환 인터페이스를 사용하는 방법입니다. 대부분의 설정에서는 네이티브 GCS 제공업체가 간단합니다. **Remote Manager**를 열고 **New Remote**를 클릭한 후 **Google Cloud Storage**를 선택하세요.

**Project Number**(GCP 콘솔의 Project Info에서 확인 가능)를 입력해야 합니다. 인증은 서비스 계정 JSON 키 또는 OAuth를 사용합니다. 서비스 계정 접근의 경우, GCP 콘솔 → IAM & Admin → Service Accounts에서 JSON 키를 다운로드하고 리모트 설정에 경로를 지정하세요. OAuth의 경우, RcloneView가 브라우저를 열어 Google 계정 인증을 진행합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Google Cloud Storage and Wasabi remotes in RcloneView" class="img-large img-center" />

## Wasabi 연결하기

**Remote Manager**에서 **New Remote**를 클릭하고 **S3 Compatible**을 선택하세요(Wasabi는 S3 호환입니다). 다음 항목을 입력합니다:

- **Access Key ID**: Wasabi 콘솔의 Access Keys 항목에서 확인
- **Secret Access Key**: 해당하는 시크릿 키
- **Endpoint**: 해당 리전의 Wasabi 엔드포인트 (예: `s3.us-east-1.wasabisys.com` 또는 `s3.eu-central-1.wasabisys.com`)

리모트를 저장하세요. 진행하기 전에 File Explorer에 Wasabi 버킷이 표시되는지 확인하세요.

## 동기화 작업 설정하기

**Jobs**로 이동하여 **New Job**을 클릭하세요. 소스로 Google Cloud Storage를 설정하고 — 특정 버킷 또는 폴더 경로를 선택합니다. 대상으로 Wasabi를 설정하고 대상 버킷과 경로를 지정합니다.

작업 마법사의 2단계에서는 신뢰성 있는 대규모 동기화를 위해 다음과 같이 구성하세요:

- **Transfers**: 8–16 (GCS와 Wasabi 모두 높은 동시성을 잘 처리합니다)
- **Checkers**: 8–16 (동시에 실행되는 동등성 검사 개수를 제어)
- **Checksum verification**: 데이터 무결성 확인을 위해 활성화
- **Dry Run**: 범위를 검토하기 위해 먼저 활성화

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Cloud Storage to Wasabi sync" class="img-large img-center" />

## 지속적인 동기화 예약하기

GCS를 기본 스토리지로 유지하고 Wasabi를 비용 효율적인 백업 계층으로 사용하는 경우, 반복 동기화 작업을 예약하세요. PLUS 라이선스가 있으면 작업 설정을 열고 3단계에서 cron 일정을 추가합니다 — 예를 들어 매일 새벽 2시 백업의 경우 `0 2 * * *`입니다.

RcloneView의 증분 동기화는 최초 마이그레이션 이후 실행마다 변경되거나 새로 추가된 파일만 전송한다는 것을 의미합니다. **Job History** 탭은 파일 수, 전송된 데이터, 속도, 오류와 함께 모든 실행 기록을 남겨 — 명확한 감사 추적을 제공합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Cloud Storage to Wasabi sync in RcloneView" class="img-large img-center" />

## 비용 고려사항

Wasabi의 요금제에는 요청당 수수료가 없고 이그레스 비용도 없어서(사용량 제한 내에서) 대용량 데이터셋에 대해 예측 가능합니다. GCS → Wasabi 마이그레이션은 GCS 이그레스 비용이 발생하지만, 이는 마이그레이션의 일회성 비용입니다. 지속적인 백업의 경우 데이터가 서버나 애플리케이션 파이프라인에서 발생하므로, 이그레스 영향은 설정에 따라 달라집니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote Manager**에서 Project Number와 서비스 계정 JSON 또는 OAuth를 사용하여 Google Cloud Storage를 연결하세요.
3. Access Key, Secret Key, 리전 엔드포인트를 사용하여 Wasabi를 연결하세요.
4. 동기화 작업을 생성하고 Dry Run을 실행하여 범위를 확인한 후, 지속적인 자동 백업을 위해 예약하세요.

GCS 백업을 Wasabi로 이전하면 접근성의 저하 없이 일반적으로 의미 있는 스토리지 비용 절감을 얻을 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Scaleway Object Storage 관리하기](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [RcloneView로 Wasabi를 Cloudflare R2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [RcloneView로 일일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />

---
slug: manage-scaleway-object-storage-cloud-sync-rcloneview
title: "Scaleway Object Storage 관리 — RcloneView로 클라우드 동기화 및 백업"
authors:
  - tayson
description: "S3 호환 자격 증명을 사용하여 Scaleway Object Storage를 RcloneView에 연결하고, 유럽 클라우드 버킷을 다른 제공업체와 빠르게 동기화하세요."
keywords:
  - Scaleway object storage RcloneView
  - Scaleway S3 compatible sync
  - Scaleway cloud backup
  - Scaleway rclone GUI
  - European cloud storage sync
  - Scaleway bucket transfer
  - S3 compatible cloud sync
  - Scaleway rcloneview setup
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Scaleway Object Storage 관리 — RcloneView로 클라우드 동기화 및 백업

> Scaleway Object Storage는 S3 호환 유럽 클라우드 서비스입니다 — Access Key, Secret Key, 엔드포인트 URL을 사용하여 몇 분 만에 RcloneView에 연결하세요.

Scaleway는 여러 유럽 리전에서 S3 호환 오브젝트 스토리지를 제공하는 프랑스 클라우드 제공업체입니다. GDPR을 준수하는 스토리지가 필요하면서도 경쟁력 있는 가격을 원하는 팀에게 훌륭한 선택입니다. RcloneView는 모든 S3 호환 제공업체를 지원하므로, CLI 없이도 Scaleway를 연결하고, 버킷을 탐색하며, 다른 모든 클라우드 리모트와 함께 동기화 작업을 설정할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Scaleway 자격 증명 얻기

RcloneView에서 연결하기 전에 Scaleway 콘솔에서 **Access Key**와 **Secret Key**가 필요합니다. console.scaleway.com에 로그인하여 프로젝트 또는 조직의 **Credentials** 메뉴로 이동한 후 새 API 키를 생성하세요. Secret Key는 한 번만 표시되므로 반드시 기록해 두세요. 또한 `s3.{region}.scw.cloud` 형식(예: 암스테르담은 `s3.nl-ams.scw.cloud`, 파리는 `s3.fr-par.scw.cloud`)을 따르는 리전 엔드포인트도 확인해야 합니다.

Access Key, Secret Key, 엔드포인트 이 세 가지 값만 있으면 RcloneView에서 Scaleway를 구성할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Scaleway S3-compatible remote in RcloneView" class="img-large img-center" />

## RcloneView에 Scaleway 연결하기

RcloneView를 열고 **Remote Manager**로 이동합니다. **New Remote**를 클릭하고 제공업체 목록에서 **S3 Compatible**을 선택합니다. 구성 양식에 다음을 입력합니다.

- **Provider**: Other (S3-compatible)
- **Access Key ID**: Scaleway Access Key
- **Secret Access Key**: Scaleway Secret Key
- **Endpoint**: 리전 엔드포인트 (예: `s3.nl-ams.scw.cloud`)

리전 필드는 비워두거나, 요구되는 경우 Scaleway 리전 코드를 입력하세요. 리모트를 저장하면 Remote Manager에 나타납니다. **Open**을 클릭하여 File Explorer에서 Scaleway 버킷을 탐색하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Scaleway transfer in real time" class="img-large img-center" />

## 버킷 탐색 및 파일 전송

File Explorer는 최상위 레벨에 Scaleway 버킷을 표시합니다. 버킷 안으로 이동하면 해당 오브젝트와 폴더 프리픽스를 볼 수 있습니다. 파일과 디렉터리를 선택한 다음, 두 번째 패널에서 열린 다른 리모트(AWS S3, Backblaze B2, 또는 로컬 디렉터리 등)로 복사하거나 이동할 수 있습니다.

대용량 데이터셋의 경우, 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Copy to** 또는 **Move to**를 사용하여 대량 전송을 시작하세요. RcloneView는 전송 속도와 예상 완료 시간을 실시간으로 표시합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Scaleway and another cloud" class="img-large img-center" />

## 예약 동기화 작업 설정하기

Scaleway와 다른 제공업체 간의 자동 백업이나 정기적인 데이터 파이프라인에는 **Job** 시스템이 안정적으로 대응합니다. **Jobs**로 이동하여 **New Job**을 클릭하고, Scaleway를 소스 또는 대상으로 구성합니다. 작업의 고급 옵션에서 대역폭 제한을 설정하고, 전송 동시성을 제어하며, 체크섬 검증을 활성화하여 데이터 무결성을 확인할 수 있습니다.

PLUS 라이선스를 사용하면 cron 스타일 문법으로 작업을 예약할 수 있습니다 — 예를 들어 매일 새벽 2시에 다른 클라우드에서 Scaleway로 동기화하도록 설정할 수 있습니다. 작업 결과는 **Job History**에 기록되어, 실행마다 전송 건수와 오류를 한눈에 확인할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Scaleway 콘솔에서 Access Key, Secret Key, 리전 엔드포인트를 준비하세요.
3. **Remote Manager**를 열고 **New Remote**를 클릭한 후 **S3 Compatible**을 선택하고 자격 증명을 입력하세요.
4. 버킷을 탐색하고 Scaleway로/에서 백업을 자동화하는 동기화 작업을 생성하세요.

Scaleway의 유럽 인프라는 GDPR을 고려한 워크플로우를 위해 RcloneView의 멀티 클라우드 작업 시스템과 잘 어울립니다.

---

**관련 가이드:**

- [RcloneView로 Google Cloud Storage를 Wasabi에 동기화하기](https://rcloneview.com/support/blog/sync-google-cloud-storage-to-wasabi-rcloneview)
- [IDrive E2 클라우드 동기화 및 백업 관리](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [RcloneView로 체크섬 검증 클라우드 마이그레이션하기](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />

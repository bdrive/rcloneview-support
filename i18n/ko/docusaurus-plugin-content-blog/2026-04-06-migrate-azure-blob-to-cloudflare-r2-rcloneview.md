---
slug: migrate-azure-blob-to-cloudflare-r2-rcloneview
title: "RcloneView로 Azure Blob Storage를 Cloudflare R2로 마이그레이션: 제로 이그레스 마이그레이션"
authors:
  - tayson
description: RcloneView로 Azure Blob Storage에서 Cloudflare R2로 마이그레이션하세요 — 이그레스 비용을 없애고, 두 리모트를 설정하고, 데이터를 전송하고, 무결성을 시각적으로 확인합니다.
keywords:
  - rcloneview
  - azure blob to cloudflare r2
  - cloudflare r2 migration
  - azure blob storage
  - zero egress
  - s3 compatible storage
  - rclone GUI
  - cloud migration
  - r2 storage
  - cost optimization
tags:
  - azure
  - cloudflare-r2
  - r2
  - migration
  - cloud-migration
  - s3-compatible
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Azure Blob Storage를 Cloudflare R2로 마이그레이션: 제로 이그레스 마이그레이션

> Azure Blob Storage는 강력하지만, 이그레스 비용이 빠르게 누적됩니다. **Cloudflare R2**는 이그레스 비용이 전혀 없는 S3 호환 오브젝트 스토리지를 제공하며, **RcloneView**가 마이그레이션을 시각적으로 처리합니다.

Azure Blob Storage는 많은 클라우드 아키텍처의 근간입니다. 안정적이고 기능이 풍부하며 Azure 생태계와 깊이 통합되어 있습니다. 하지만 지속적인 고충이 하나 있습니다. 바로 **이그레스 비용**입니다. Azure Blob에서 다운로드되는 1기가바이트마다 비용이 발생하며, CDN, API, 미디어 전송, 분석 파이프라인처럼 데이터를 자주 제공하는 애플리케이션의 경우 이 비용이 스토리지 비용 자체를 압도할 수 있습니다.

Cloudflare R2는 이그레스 비용을 완전히 없앱니다. 스토리지와 오퍼레이션에 대해서만 비용을 지불하며, 읽기에 대한 대역폭 비용은 전혀 없습니다. 데이터가 쓰기보다 읽기가 더 많은 워크로드의 경우, R2는 클라우드 스토리지 비용을 크게 줄일 수 있습니다. RcloneView는 마이그레이션을 간단하게 만들어줍니다 — 두 공급자를 연결하고, 데이터를 전송하고, 모든 것이 일치하는지 확인하세요.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure Blob에서 Cloudflare R2로 전환해야 하는 이유

이 결정은 대개 경제성에 달려 있습니다.

- **이그레스 비용 제로**: R2는 다운로드된 데이터에 대해 아무런 비용도 청구하지 않습니다. Azure는 지역과 볼륨에 따라 GB당 $0.05-$0.12를 청구합니다.
- **S3 API 호환성**: R2는 S3 API를 지원하므로 기존 도구, SDK, 애플리케이션이 최소한의 변경만으로 작동합니다.
- **예측 가능한 가격**: R2는 스토리지에 대해 월 GB당 $0.015, 오퍼레이션에 대해 정액 요금을 청구합니다. 숨겨진 티어나 예약 용량 약정이 없습니다.
- **Cloudflare 통합**: 이미 DNS, CDN, Workers에 Cloudflare를 사용하고 있다면 R2는 자연스럽게 스택에 통합됩니다.
- **최소 스토리지 기간 없음**: 일부 공급자와 달리, R2는 데이터를 조기에 삭제해도 불이익을 주지 않습니다.

### 간단한 비용 비교

| 비용 요소 | Azure Blob (Hot, East US) | Cloudflare R2 |
|---|---|---|
| GB/월당 스토리지 | ~$0.018 | $0.015 |
| GB당 이그레스 | $0.05-$0.12 | $0.00 |
| Class A 오퍼레이션(쓰기) 100만 건당 | ~$0.065 | $4.50 |
| Class B 오퍼레이션(읽기) 100만 건당 | ~$0.005 | $0.36 |

읽기가 많은 워크로드의 경우, 이그레스 절감액만으로도 마이그레이션을 정당화할 수 있습니다.

## 1단계: 두 리모트 설정하기

RcloneView에서 Azure Blob과 Cloudflare R2를 연결합니다.

1. RcloneView에서 **+ New Remote**를 클릭합니다.
2. **Azure Blob Storage 추가**: Azure Blob 백엔드를 선택하고, 스토리지 계정 이름과 키(또는 연결 문자열)를 입력합니다. 이름을 지정합니다(예: `AzureBlob`).
3. **Cloudflare R2 추가**: S3 호환 스토리지를 선택하고, 공급자로 Cloudflare R2를 선택합니다. Cloudflare 대시보드에서 R2 액세스 키 ID, 시크릿 액세스 키, 엔드포인트 URL을 입력합니다. 이름을 지정합니다(예: `CloudflareR2`).
4. 두 리모트가 모두 Explorer에 표시되는지 확인합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## 2단계: R2 버킷 준비하기

데이터를 전송하기 전에:

- **대상 버킷 생성**: Azure 컨테이너를 미러링하는 버킷을 R2에 생성합니다. 이 작업은 Cloudflare 대시보드에서 하거나 RcloneView의 Explorer에서 직접 할 수 있습니다.
- **명명 규칙 검토**: Azure 컨테이너 이름과 R2 버킷 이름은 비슷한 규칙(소문자, 하이픈 허용)을 따르므로 대부분의 이름이 그대로 전달됩니다.
- **오브젝트 키 호환성 확인**: Azure Blob은 조정이 필요할 수 있는 일부 키 패턴을 지원합니다. 특수 문자가 포함된 키를 검토하세요.

## 3단계: 마이그레이션 실행하기

두 패널 Explorer에서 한쪽에는 Azure Blob을, 다른 쪽에는 Cloudflare R2를 엽니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Azure Blob and Cloudflare R2 side by side in RcloneView" class="img-large img-center" />

### 작은 컨테이너의 경우

컨테이너나 폴더를 Azure Blob에서 R2로 직접 드래그 앤 드롭합니다. RcloneView는 진행 상황을 추적하면서 백그라운드에서 파일을 전송합니다.

### 큰 컨테이너의 경우

신뢰성을 위해 **Copy** 작업을 생성하세요.

1. Azure Blob 컨테이너를 소스로 선택합니다.
2. 해당하는 R2 버킷을 대상으로 선택합니다.
3. **Dry Run**을 실행하여 전송 범위를 미리 확인합니다.
4. 작업을 실행합니다. RcloneView는 전송 속도, 파일 개수, 예상 남은 시간을 포함한 실시간 진행 상황을 보여줍니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Azure Blob to R2 migration" class="img-large img-center" />

## 4단계: 데이터 무결성 확인하기

마이그레이션이 완료된 후, 모든 것이 온전하게 도착했는지 확인합니다.

1. RcloneView의 **Compare** 기능을 사용하여 소스 컨테이너와 R2 버킷을 비교합니다.
2. 비교 결과를 검토합니다 — 누락되었거나 다르다고 표시된 파일이 있는지 확인하세요.
3. 실패한 항목을 개별적으로 다시 복사합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Azure Blob container with R2 bucket to verify migration" class="img-large img-center" />

## 5단계: 대규모 마이그레이션 처리하기

수백 기가바이트 또는 테라바이트를 마이그레이션하시나요? 그에 맞게 계획하세요.

- **마이그레이션 중 Azure 이그레스 비용**: 데이터를 반출하기 위해 Azure 이그레스 비용을 지불하게 됩니다. Azure의 대역폭 가격 티어를 활용하고, 단일 청구 주기 내에 마이그레이션을 실행하는 것을 고려하세요.
- **컨테이너별로 병렬화**: 각 컨테이너에 대해 별도의 작업을 실행하여 부하를 분산시키고 진행 상황 추적을 더 쉽게 만듭니다.
- **실패 시 재개**: 작업이 중단되면 다시 실행하세요. Rclone의 Copy 오퍼레이션은 이미 존재하며 일치하는 파일을 건너뛰므로, 누락된 것만 전송하면 됩니다.
- **대역폭 고려 사항**: Azure와 Cloudflare 모두 고처리량 전송을 지원하지만, RcloneView를 통해 라우팅할 때는 로컬 머신의 대역폭이 병목 지점이 됩니다. 가장 빠른 마이그레이션을 위해서는 Azure 리전에 가까운 VM에서 RcloneView를 실행하세요.

## 6단계: 애플리케이션 업데이트하기

검증이 완료되면:

1. 애플리케이션 구성이 Azure Blob 대신 R2 엔드포인트를 가리키도록 업데이트합니다.
2. 스테이징 환경에서 철저히 테스트합니다.
3. 프로덕션 트래픽을 전환합니다.
4. 롤백 기간(일반적으로 30일) 동안 Azure Blob 데이터를 유지한 후, 스토리지 비용 발생을 중단하기 위해 삭제합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. New Remote 마법사에서 **Azure Blob과 Cloudflare R2를 연결**하세요.
3. **마이그레이션하고, 검증하고, 전환하세요** — 클라우드 비용에서 이그레스 비용을 없애세요.

제로 이그레스는 모든 읽기가 무료라는 뜻입니다. RcloneView가 데이터를 그곳까지 옮겨줍니다.

---

**관련 가이드:**

- [RcloneView로 Cloudflare R2에서 AWS S3로 이동하기](https://rcloneview.com/support/blog/move-from-cloudflare-r2-to-aws-s3-with-rcloneview)
- [RcloneView로 Cloudflare R2와 AWS S3 비교하기](https://rcloneview.com/support/blog/compare-cloudflare-r2-and-aws-s3-with-rcloneview)
- [RcloneView로 Dropbox를 Azure Blob Storage로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)

<CloudSupportGrid />

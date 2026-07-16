---
slug: manage-ovhcloud-object-storage-sync-rcloneview
title: "OVHcloud Object Storage 관리 — RcloneView로 동기화 및 백업하기"
authors:
  - tayson
description: "S3 호환 자격 증명을 사용하여 OVHcloud Object Storage를 RcloneView에 연결하고, GDPR을 준수하는 유럽 버킷을 다른 클라우드 제공업체와 동기화하세요."
keywords:
  - OVHcloud object storage RcloneView
  - OVHcloud S3 sync
  - OVHcloud backup rclone
  - OVHcloud cloud storage GUI
  - European GDPR cloud sync
  - OVHcloud bucket transfer
  - S3-compatible object storage
  - OVHcloud rcloneview setup
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OVHcloud Object Storage 관리 — RcloneView로 동기화 및 백업하기

> OVHcloud Object Storage는 유럽에서 호스팅되는 GDPR 준수 S3 호환 서비스입니다 — RcloneView는 Access Key, Secret Key, 엔드포인트를 사용해 이를 전체 클라우드 생태계와 연결합니다.

OVHcloud는 유럽에서 가장 큰 클라우드 제공업체 중 하나로, 프랑스, 독일, 영국 등 여러 지역에 걸쳐 오브젝트 스토리지를 제공합니다. S3 호환 인터페이스 덕분에 RcloneView는 AWS S3와 정확히 동일한 방식으로 연결할 수 있습니다 — 자격 증명과 엔드포인트만 입력하면 바로 탐색, 전송, 백업 자동화를 시작할 수 있습니다. 유럽 데이터 거주 요건이 있는 조직에게 OVHcloud와 RcloneView의 조합은 실용적이고 감사 가능한 솔루션입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OVHcloud S3 자격 증명 가져오기

OVHcloud는 **High Performance Object Storage** 상품을 통해 S3 호환 접근을 제공합니다. 자격 증명을 얻으려면 OVHcloud 컨트롤 패널에 로그인하여 프로젝트를 연 다음 **Object Storage**로 이동하세요. **S3 users** 아래에서 새 사용자를 생성하고 Access Key와 Secret Key를 다운로드합니다. 지역 엔드포인트를 기록해 두세요 — 예를 들어 Roubaix는 `s3.rbx.io.cloud.ovh.net`, Gravelines는 `s3.gra.io.cloud.ovh.net`입니다.

엔드포인트 URL을 잘 보관해 두세요. 버킷이 위치한 지역을 나타내며, RcloneView에 입력하는 값과 일치해야 합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OVHcloud Object Storage as a new remote in RcloneView" class="img-large img-center" />

## OVHcloud를 RcloneView에 연결하기

RcloneView를 열고 **Remote Manager**로 이동하여 **New Remote**를 클릭합니다. 제공업체 목록에서 **S3 Compatible**을 선택하고 다음 필드를 입력합니다:

- **Access Key ID**: OVHcloud S3 users 페이지에서 가져온 키
- **Secret Access Key**: 해당하는 시크릿
- **Endpoint**: 지역 엔드포인트 (예: `s3.gra.io.cloud.ovh.net`)

리모트를 저장하고 File Explorer에서 엽니다. OVHcloud 버킷이 루트 레벨에 표시됩니다. 아무 버킷이나 탐색하면 접두사(prefix)별로 정리된 내용을 확인할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between OVHcloud and another provider" class="img-large img-center" />

## OVHcloud를 다른 클라우드 제공업체와 동기화하기

RcloneView에서 두 번째 패널을 열어 Google Drive, Backblaze B2, 다른 S3 호환 제공업체, 또는 로컬 폴더 등 원하는 리모트를 지정하세요. 패널 간에 파일을 드래그 앤 드롭하거나, 우클릭하여 전체 디렉터리를 복사할 수 있습니다. 대규모 버킷 마이그레이션의 경우 **Job** 시스템이 더 안정적입니다: 소스와 대상을 구성하고, 2단계에서 동시 실행 수와 대역폭 제한을 설정한 다음, 필요하면 체크섬 검증을 활성화하세요.

OVHcloud의 S3 API는 대용량 객체에 대해 멀티파트 업로드를 지원하며, RcloneView는 특정 크기 임계값을 초과하는 파일을 감지하면 이를 자동으로 활용합니다. 이를 통해 대용량 동영상 파일, 데이터베이스 덤프, 아카이브가 단일 요청 크기 제한에 걸리지 않고 안정적으로 전송됩니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of OVHcloud transfer progress" class="img-large img-center" />

## 정기 백업 예약하기

PLUS 라이선스가 있으면 OVHcloud 동기화 작업을 자동으로 실행되도록 예약할 수 있습니다. **Jobs**로 이동하여 작업을 구성하고, 3단계에서 cron 일정을 설정하세요 — 예를 들어 `0 3 * * *`는 매일 밤 3시에 동기화를 실행합니다. 이는 다른 곳에 저장된 프로덕션 데이터의 사본을 유럽 데이터 거주 규정 준수를 위해 OVHcloud에 보관해야 하는 백업 파이프라인에 특히 유용합니다.

**Job History**는 모든 실행 내역을 기록합니다: 전송된 파일, 데이터 용량, 전송 속도, 그리고 발생한 오류까지 확인할 수 있습니다. 야간 작업이 실패하면 로그 항목에 정확히 어떤 파일에 문제가 있었는지 표시되어 빠르게 조사할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. OVHcloud 컨트롤 패널에서 S3 사용자를 생성하고 Access Key, Secret Key, 지역 엔드포인트를 기록하세요.
3. RcloneView에서 **Remote Manager**를 열고 **New Remote**를 클릭한 다음 **S3 Compatible**을 선택하고 자격 증명을 입력하세요.
4. 버킷을 탐색하고 동기화 작업을 구성하여 OVHcloud를 더 넓은 클라우드 전략에 통합하세요.

OVHcloud의 유럽 인프라와 RcloneView의 유연한 작업 시스템은 GDPR을 고려한 멀티 클라우드 워크플로우에 신뢰할 수 있는 조합입니다.

---

**관련 가이드:**

- [Scaleway Object Storage 관리 — RcloneView로 클라우드 동기화](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [IDrive E2 클라우드 동기화 및 백업 관리](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [RcloneView로 매일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />

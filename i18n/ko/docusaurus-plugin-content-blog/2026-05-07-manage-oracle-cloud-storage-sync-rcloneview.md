---
slug: manage-oracle-cloud-storage-sync-rcloneview
title: "Oracle Cloud Object Storage 관리 — RcloneView로 동기화 및 백업하기"
authors:
  - tayson
description: "S3 호환 액세스 키를 사용해 Oracle Cloud Object Storage를 RcloneView에 연결하고, 버킷을 탐색하며, 자동화된 동기화 및 백업 작업을 손쉽게 실행하세요."
keywords:
  - Oracle Cloud Object Storage
  - RcloneView
  - S3-compatible
  - cloud sync
  - cloud backup
  - OCI storage
  - object storage
  - rclone oracle
tags:
  - oracle-cloud
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Oracle Cloud Object Storage 관리 — RcloneView로 동기화 및 백업하기

> Oracle Cloud Object Storage는 경쟁력 있는 가격과 강력한 엔터프라이즈 SLA를 제공합니다 — RcloneView는 OCI 버킷을 관리, 동기화, 백업할 수 있는 간단한 그래픽 인터페이스를 제공합니다.

Oracle Cloud Infrastructure(OCI) Object Storage는 완전히 S3 호환되는 객체 스토리지로, 넉넉한 Always Free 티어와 엔터프라이즈급 내구성을 보장합니다. OCI에서 워크로드를 운영하는 팀이나 AWS S3의 비용 효율적인 대안을 찾는 팀에게 Oracle Cloud Object Storage는 매력적인 선택지입니다. RcloneView는 S3 호환 API를 통해 연결되며, CLI 없이도 버킷 관리, 파일 전송, 자동화된 동기화 작업을 수행할 수 있는 완전한 기능의 GUI를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 Oracle Cloud Object Storage 설정하기

RcloneView를 Oracle Cloud Object Storage에 연결하려면 세 가지가 필요합니다: **Customer Access Key**(OCI API 키가 아님), **네임스페이스**, 그리고 **지역 엔드포인트**입니다. 액세스 키는 OCI 콘솔의 사용자 프로필 > Customer Secret Keys에서 생성합니다. 엔드포인트 형식은 `https://<namespace>.compat.objectstorage.<region>.oraclecloud.com`이며, 예를 들면 `https://axyz1234abcd.compat.objectstorage.us-ashburn-1.oraclecloud.com`과 같습니다.

RcloneView에서 **New Remote**를 클릭하고 **S3 Compatible Storage**를 선택한 다음, 공급자 드롭다운에서 **Oracle Cloud Infrastructure Object Storage**를 선택하세요. Access Key ID, Secret Key, 지역 엔드포인트를 붙여넣습니다. region 필드는 사용 중인 OCI 리전 코드와 일치하도록 설정하세요. **Save**를 클릭하면 RcloneView가 즉시 연결하여 버킷 목록을 표시합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Oracle Cloud Object Storage remote in RcloneView" class="img-large img-center" />

## 버킷 탐색 및 파일 관리

연결되면 Oracle Cloud Object Storage는 RcloneView의 듀얼 패널 탐색기에서 다른 리모트와 동일하게 동작합니다. 버킷 네임스페이스와 객체 프리픽스를 탐색하고, 드래그 앤 드롭으로 파일을 업로드하며, 객체를 로컬 컴퓨터로 다운로드할 수 있습니다. RcloneView는 실시간 전송 지표를 표시하므로 대용량 업로드가 진행되는 과정을 모니터링할 수 있습니다.

지리적 이중화를 위해 여러 OCI 리전을 사용하는 경우, 각 지역 엔드포인트를 별도의 이름을 가진 리모트로 추가하세요. 그런 다음 탐색기에서 이들을 나란히 열고, 클라우드 간 전송을 통해 리전 간에 객체를 직접 복사할 수 있습니다 — 로컬 다운로드가 필요하지 않습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer between OCI buckets in RcloneView" class="img-large img-center" />

## 백업을 위한 동기화 작업 생성

RcloneView의 **Job Wizard**는 Oracle Cloud Object Storage로 또는 그로부터 동기화 작업을 생성하는 과정을 네 단계로 안내합니다: 소스 선택, 대상 선택, 옵션 구성, 실행 전 검토. 먼저 **dry run** 모드를 사용하여 실제로 어떤 파일이 전송되거나 삭제될지 확인하세요 — 동기화 작업은 소스에 더 이상 존재하지 않는 대상 내 파일을 삭제할 수 있으므로, OCI로 동기화할 때 특히 중요합니다.

**Job History** 패널은 모든 작업 실행을 타임스탬프와 전송 통계와 함께 기록하여 컴플라이언스 목적의 감사 추적을 제공합니다. PLUS 라이선스 사용자는 각 작업에 **스케줄**을 추가하여 백업이 자동으로 실행되도록 할 수 있습니다 — 예를 들어 매일 밤 2시 — 별도의 수동 작업 없이 말이죠.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Oracle Cloud sync jobs in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. OCI 콘솔에서 **Customer Secret Key**를 생성하고 네임스페이스와 리전을 기록해 두세요.
3. RcloneView에서 **New Remote** > **S3 Compatible Storage** > **Oracle Cloud Infrastructure Object Storage**를 클릭하세요.
4. Access Key ID, Secret Key, 지역 엔드포인트 URL을 입력하세요.
5. 버킷을 탐색하고 **Job Wizard**를 사용하여 첫 번째 동기화 또는 백업 작업을 생성하세요.

Oracle Cloud Object Storage의 S3 호환성 덕분에 RcloneView로 관리하는 멀티 클라우드 전략에 손쉽게 추가할 수 있습니다.

---

**관련 가이드:**

- [Amazon S3 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [RcloneView로 S3, Wasabi, R2 통합 관리하기](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [IDrive e2 관리 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

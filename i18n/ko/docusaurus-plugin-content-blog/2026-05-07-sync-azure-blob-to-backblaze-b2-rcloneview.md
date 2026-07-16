---
slug: sync-azure-blob-to-backblaze-b2-rcloneview
title: "Azure Blob Storage를 Backblaze B2로 동기화하기 — RcloneView를 이용한 클라우드 백업"
authors:
  - tayson
description: "RcloneView를 사용하여 Azure Blob Storage의 파일을 Backblaze B2로 동기화하거나 마이그레이션하는 방법을 알아보고, 비용 절감, 이중화, 자동화된 클라우드 백업을 구현해 보세요."
keywords:
  - Azure Blob Storage
  - Backblaze B2
  - cloud migration
  - RcloneView
  - cloud-to-cloud sync
  - cloud backup
  - storage cost savings
  - rclone azure b2
tags:
  - RcloneView
  - azure
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Azure Blob Storage를 Backblaze B2로 동기화하기 — RcloneView를 이용한 클라우드 백업

> Azure Blob Storage에서 Backblaze B2로 데이터를 이동하면 스토리지 비용을 대폭 절감할 수 있습니다 — RcloneView는 안내형 그래픽 인터페이스로 마이그레이션과 지속적인 동기화를 간편하게 만들어 줍니다.

Azure Blob Storage는 엔터프라이즈 워크로드에 널리 사용되지만, Backblaze B2는 훨씬 저렴한 스토리지 요금을 제공하여 — 종종 Azure 비용의 일부 수준에 불과합니다 — 보조 백업 대상이나 완전한 마이그레이션 목적지로 매력적인 선택입니다. 일회성 마이그레이션을 원하든 이중화를 위한 지속적인 동기화를 원하든, RcloneView는 명령줄 지식 없이도 두 가지 모두를 처리합니다. RcloneView에는 내장 rclone 바이너리가 포함되어 있어 별도로 설치할 것이 없습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 Azure Blob Storage 설정하기

RcloneView에서 **New Remote**를 클릭하고 공급자 목록에서 **Microsoft Azure Blob Storage**를 선택합니다. Azure Portal(스토리지 계정 > Access Keys)에서 **Storage Account Name**과 **Storage Account Key**가 필요합니다. 선택적으로 SAS 토큰이나 연결 문자열을 사용할 수도 있습니다. 저장하면 RcloneView가 연결되어 모든 블롭 컨테이너 목록을 표시합니다.

여러 Azure 스토리지 계정을 사용하는 경우 — 예를 들어 환경 또는 리전별로 별도의 계정을 사용하는 경우 — 각각을 별도의 이름이 지정된 리모트로 추가하세요. RcloneView는 동일한 인터페이스에서 이 모든 리모트를 관리하므로 컨테이너를 비교하고 계정 간에 데이터를 손쉽게 이동할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## Backblaze B2 연결하기

**New Remote**를 다시 클릭하고 **Backblaze B2**를 선택하여 두 번째 리모트를 추가합니다. Backblaze 대시보드에서 **Application Key ID**와 **Application Key**를 입력합니다. 추가 보안을 위해 키를 특정 버킷으로 범위를 제한할 수 있습니다. 저장하면 B2 리모트가 Azure 리모트와 함께 탐색기에 표시됩니다.

이제 두 리모트를 듀얼 패널 보기에서 나란히 열 수 있습니다. 일회성 전송을 위해 개별 파일이나 전체 폴더 트리를 Azure에서 B2로 드래그 앤 드롭하세요. 대용량 컨테이너를 마이그레이션하는 경우에는 동기화 작업 방식이 더 안정적이고 재개 가능합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Azure Blob to Backblaze B2 in RcloneView" class="img-large img-center" />

## 동기화 작업 생성 및 예약하기

**Job Manager**를 열고 4단계 **Job Wizard**를 사용하여 Azure Blob을 소스로, Backblaze B2를 대상으로 하는 동기화 작업을 생성합니다. 항상 먼저 **드라이 런**을 실행하세요 — 데이터를 건드리지 않고 모든 추가 및 삭제 사항을 미리 확인할 수 있습니다. 미리보기 결과에 만족하면 실제 동기화를 실행합니다.

지속적인 이중화를 위해 PLUS 라이선스 사용자는 **일정(schedule)**을 추가하여 Azure-to-B2 동기화를 매일 또는 매주 주기로 자동 실행할 수 있습니다. **Job History** 패널은 모든 실행 기록을 파일 수와 전송 크기와 함께 기록하므로, 백업이 성공적으로 완료되었는지 확인하고 규정 준수 요건을 충족하는지 검증할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Azure Blob to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Storage Account Name과 Key를 사용하여 **Azure Blob Storage** 리모트를 추가합니다.
3. Application Key ID와 Key를 사용하여 **Backblaze B2** 리모트를 추가합니다.
4. 듀얼 패널 탐색기에서 두 리모트를 모두 열고 **Job Wizard**를 사용하여 동기화 작업을 생성합니다.
5. 먼저 **드라이 런**을 실행한 다음, PLUS 라이선스로 반복 동기화를 예약합니다.

RcloneView를 통해 Azure Blob에서 Backblaze B2로 동기화하는 것은 신뢰성을 포기하지 않으면서도 비용 효율적인 클라우드 백업 전략을 구축하는 가장 효율적인 방법 중 하나입니다.

---

**관련 가이드:**

- [Azure Blob Storage 관리 — RcloneView를 이용한 클라우드 동기화](https://rcloneview.com/support/blog/manage-azure-blob-storage-cloud-sync-rcloneview)
- [Backblaze B2 관리 — RcloneView를 이용한 클라우드 동기화 및 백업](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [RcloneView로 OneDrive를 Backblaze B2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

---
slug: migrate-azure-blob-to-google-drive-rcloneview
title: "RcloneView로 Azure Blob Storage를 Google Drive로 마이그레이션하기"
authors:
  - tayson
description: "RcloneView로 Azure Blob Storage를 Google Drive로 마이그레이션합니다. 설정, 대용량 컨테이너 처리, 검증, 증분 동기화를 위한 단계별 가이드입니다."
keywords:
  - rcloneview
  - azure blob to google drive
  - migrate azure storage
  - azure blob migration
  - cloud to cloud migration
  - azure to google workspace
  - cloud storage migration tool
  - azure blob transfer
  - google drive migration gui
  - enterprise cloud migration
tags:
  - azure
  - google-drive
  - migration
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Azure Blob Storage를 Google Drive로 마이그레이션하기

> Azure Blob Storage는 개발자를 위해 만들어졌지만, 팀에 협업 기능이 필요할 때는 Google Drive가 목적지가 됩니다 — **RcloneView**는 객체 스토리지와 일반 소비자용 클라우드 사이의 격차를 메워줍니다.

Azure Blob Storage는 애플리케이션 서비스에 탁월합니다 — Hot, Cool, Archive 티어는 구조화된 워크로드에 대해 개발자에게 세밀한 비용 제어를 제공합니다. 하지만 비즈니스 요구사항이 문서 협업, 공동 편집, Google Workspace 통합 쪽으로 이동하면 Azure 컨테이너의 데이터를 Google Drive로 옮길 필요가 생깁니다. RcloneView는 두 플랫폼 모두에 연결되며, 대용량 컨테이너를 처리하고 폴더 구조를 보존하며 전송된 모든 파일을 검증하는 시각적 마이그레이션 워크플로우를 제공합니다.

이 가이드는 두 리모트를 구성하는 것부터 전환 기간 동안의 증분 동기화 설정까지 전체 마이그레이션 과정을 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure Blob에서 Google Drive로 마이그레이션하는 이유

이 마이그레이션의 이유는 대체로 다음 몇 가지 범주로 나뉩니다:

- **협업 요구사항**: Azure Blob Storage에는 내장된 문서 편집이나 공유 기능이 없습니다. Google Drive는 Docs, Sheets, Slides를 통한 실시간 협업과 함께 팀을 위한 세밀한 공유 권한을 제공합니다.
- **Google Workspace 통합**: Google Workspace로 전환하는 조직은 파일을 Google Drive에 두면 Gmail, Calendar, Meet 등 다른 Workspace 앱과 통합되는 이점을 얻습니다.
- **비용 단순화**: Azure Blob의 요금제는 스토리지 티어, 송신 요금, 읽기/쓰기 작업, 데이터 이중화 옵션을 포함합니다. Google Workspace는 스토리지를 사용자당 요금제에 번들로 제공하므로 예산 책정이 더 단순할 수 있습니다.
- **최종 사용자 접근성**: 비기술적 사용자는 Azure Storage Explorer나 Azure 포털보다 Google Drive를 훨씬 더 친숙하게 느낍니다.

## RcloneView에서 Azure Blob Storage 설정하기

Remote Manager를 열고 **Microsoft Azure Blob Storage** 리모트를 추가합니다. 다음이 필요합니다:

- **Account name**: Azure Storage 계정 이름
- **Account key** 또는 **SAS URL**: Azure 포털의 기본 액세스 키 또는 읽기 및 목록 권한이 있는 Shared Access Signature

설정이 완료되면 RcloneView는 스토리지 계정 내 모든 컨테이너를 나열합니다. 각 컨테이너는 탐색기에서 최상위 폴더로 표시됩니다. 컨테이너 안으로 이동하여 프리픽스 기반 가상 디렉터리 구조로 정리된 블롭을 탐색할 수 있습니다.

Azure Blob Storage는 Hot, Cool, Archive의 세 가지 액세스 티어를 지원합니다. RcloneView는 Hot과 Cool 티어에서는 직접 읽을 수 있습니다. Archive 티어 블롭은 전송하기 전에 Hot 또는 Cool로 재수화(rehydrate)해야 합니다. 마이그레이션에 아카이브된 블롭이 포함되어 있다면, 먼저 Azure 포털을 통해 재수화를 시작한 다음 블롭에 접근할 수 있게 되면 RcloneView로 진행하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## RcloneView에서 Google Drive 설정하기

OAuth 2.0 플로우를 사용하여 Google Drive 리모트를 추가합니다. Remote Manager에서 authorize를 클릭하고 Google 계정에 로그인한 후 액세스 권한을 부여합니다. Google Workspace 계정의 경우 My Drive 또는 특정 Shared Drive에 연결할 수 있습니다.

목적지가 Shared Drive라면 구성 중에 이를 선택하세요. Shared Drive는 소유권 규칙이 다릅니다 — 파일이 개별 사용자가 아니라 조직에 속하므로 팀 마이그레이션에 이상적입니다.

Google Drive에는 사용자당 스토리지 할당량이 있습니다(무료 15GB, 또는 Workspace 플랜의 풀링된 스토리지). 대규모 마이그레이션을 시작하기 전에 목적지에 충분한 할당량이 있는지 확인하세요. 전송 중 할당량이 초과되면 RcloneView가 오류를 보고합니다.

## 대용량 컨테이너 처리하기

Azure 컨테이너는 수백만 개의 블롭, 테라바이트 또는 페타바이트에 달하는 데이터를 보유할 수 있습니다. 모든 것을 한 번에 마이그레이션하는 것은 가능하지만 계획이 필요합니다:

- **먼저 목록화하기**: RcloneView의 탐색기를 사용해 컨테이너를 살펴보고 폴더 구조와 전체 크기를 파악하세요. 이를 통해 마이그레이션 소요 시간과 Google Drive 할당량 요구사항을 추정할 수 있습니다.
- **프리픽스별로 마이그레이션하기**: 컨테이너가 논리적 폴더 구조(예: `/projects/2024/`, `/projects/2025/`)를 사용한다면, 한 번에 하나의 프리픽스씩 마이그레이션하세요. 이렇게 하면 검증이 쉬워지고 활성 데이터를 우선순위로 처리할 수 있습니다.
- **병렬 전송**: RcloneView 설정에서 동시 전송 수를 늘리세요. Azure Blob Storage는 높은 동시성을 잘 처리하며, Google Drive는 적절한 속도 제한 처리와 함께 병렬 업로드를 지원합니다.

Google Drive는 API 속도 제한을 적용합니다 — 대부분의 계정에서 초당 10개 업로드입니다. RcloneView는 자동으로 속도를 조절하고 403(Rate Limit Exceeded) 또는 429 응답에 대해 재시도하지만, 이러한 제약으로 인해 대규모 마이그레이션은 자연히 시간이 더 걸립니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Azure Blob Storage to Google Drive in RcloneView" class="img-large img-center" />

## 마이그레이션 실행하기

왼쪽에 Azure Blob, 오른쪽에 Google Drive가 있는 2단 탐색기를 엽니다. 소스 컨테이너(또는 특정 프리픽스)와 Google Drive의 목적지 폴더를 선택하세요.

복사 또는 동기화 작업을 생성합니다. RcloneView는 각 블롭을 파일로 전송하며, 프리픽스 기반 디렉터리 구조를 Google Drive의 실제 폴더로 보존합니다. 파일명, 크기, 수정 시간은 보존됩니다. Azure 메타데이터(사용자 정의 블롭 속성)는 Google Drive가 임의의 키-값 메타데이터를 지원하지 않기 때문에 전송되지 않습니다.

전송 중에는 실시간 모니터링 패널에 다음이 표시됩니다:

- 파일별 전송 진행률 및 속도
- 완료된 파일 수 대 남은 파일 수
- 완료 예상 시간
- 오류 또는 재시도

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Azure Blob to Google Drive migration in RcloneView" class="img-large img-center" />

## 마이그레이션 검증하기

전송이 완료되면 RcloneView의 비교 기능을 사용하여 마이그레이션을 검증하세요. Azure 컨테이너와 Google Drive 목적지 폴더를 비교합니다. 비교 화면에서는 다음을 강조 표시합니다:

- **누락된 파일**: 전송되지 않은 블롭(오류 또는 Archive 티어 제약으로 인한 경우일 수 있음)
- **크기 불일치**: 불완전하게 전송된 파일
- **일치하는 파일**: 성공적으로 마이그레이션된 항목

Azure Blob Storage는 콘텐츠 검증에 MD5를 사용하고 Google Drive는 자체 체크섬을 사용하므로, RcloneView는 기본적으로 파일 크기와 수정 시간을 비교에 사용합니다. 중요한 마이그레이션의 경우 작업 설정에서 체크섬 검증을 활성화하여 바이트 단위의 정확도를 확보할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Azure to Google Drive migration with compare" class="img-large img-center" />

## 마이그레이션 후 증분 동기화 예약하기

마이그레이션은 즉시 이루어지는 경우가 드뭅니다 — 전송이 진행되는 동안 Azure Blob Storage에 새 데이터가 들어올 수 있습니다. 전환 기간 동안 매일(또는 더 자주) 실행되도록 RcloneView에서 예약된 동기화 작업을 설정하세요. 이 증분 동기화는 새롭거나 변경된 블롭을 감지하여 델타만 Google Drive로 전송합니다.

모든 시스템이 Google Drive를 가리키게 되고 Azure 컨테이너가 더 이상 새 데이터를 받지 않게 되면, 마지막으로 남은 항목을 처리하기 위해 최종 동기화를 실행하세요. 그런 다음 예약된 작업을 비활성화합니다.

장기간 진행되는 전환의 경우, RcloneView의 작업 이력은 모든 동기화 실행에 대한 완전한 로그를 제공합니다 — 전송된 파일, 이동된 바이트 수, 오류, 소요 시간 등입니다. 이 감사 추적은 마이그레이션 일정을 검증하고 이해관계자에게 보고하는 데 매우 유용합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Azure to Google Drive" class="img-large img-center" />

## 전환 관리하기

공존 기간 동안에는 RcloneView에서 두 리모트를 모두 마운트하여 나란히 접근할 수 있도록 하는 것을 고려하세요. 사용자는 Azure 컨테이너와 Google Drive를 동시에 탐색하여 파일이 새 위치에서도 사용 가능한지 확인할 수 있습니다. 마운트 기능을 사용하면 사용자가 Google Drive를 로컬 드라이브 문자로 접근할 수 있어, 매핑된 드라이브에 익숙한 팀의 전환을 더 쉽게 만들어 줍니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as local drive during migration" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Azure Blob Storage(계정 키 또는 SAS 사용)와 Google Drive(OAuth 사용)를 리모트로 추가하세요.
3. 2단 탐색기에서 마이그레이션을 실행하며, 관리하기 쉽도록 컨테이너 또는 프리픽스 단위로 마이그레이션하세요.
4. 비교로 검증한 다음, 전환이 완료될 때까지 증분 동기화를 예약하세요.

Azure Blob Storage는 애플리케이션 서비스에는 잘 맞지만, 팀에 Google Workspace 협업이 필요할 때는 RcloneView가 데이터를 깔끔하고 검증 가능하게 옮겨줍니다.

---

**관련 가이드:**

- [Google Drive 추가하기](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [원격 스토리지를 즉시 동기화하기](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

---
slug: migrate-box-to-sharepoint-onedrive-rcloneview
title: "Box에서 SharePoint 또는 OneDrive로 마이그레이션하는 방법 — RcloneView를 활용한 기업용 클라우드 마이그레이션"
authors:
  - tayson
description: "Box에서 Microsoft 365로 이전하시나요? RcloneView를 사용해 폴더 구조를 유지하면서 Box에서 SharePoint Online 또는 OneDrive for Business로 파일을 마이그레이션하는 방법을 알아보세요."
keywords:
  - migrate box to sharepoint
  - box to onedrive migration
  - box to microsoft 365 transfer
  - box sharepoint migration tool
  - move files from box
  - box migration tool
  - enterprise cloud migration
  - box to office 365
  - box data migration
  - box alternative migration
tags:
  - box
  - sharepoint
  - onedrive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box에서 SharePoint 또는 OneDrive로 마이그레이션하는 방법 — RcloneView를 활용한 기업용 클라우드 마이그레이션

> 회사가 Microsoft 365로 통합하기로 결정했습니다. 1단계: Box에 있는 모든 파일을 SharePoint와 OneDrive로 마이그레이션합니다. 2단계: 그 과정에서 아무것도 잃지 않습니다.

Box는 오랫동안 기업용 파일 공유의 대표 주자였지만, 많은 조직이 클라우드 생태계를 Microsoft 365 중심으로 통합하고 있습니다. Box에서 SharePoint Online 또는 OneDrive for Business로 마이그레이션하는 것은 특히 수년간 쌓인 데이터, 복잡한 폴더 구조, 공유 워크스페이스를 다뤄야 할 때 큰 프로젝트가 됩니다. RcloneView는 이 작업을 관리 가능한 수준으로 만들어줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 마이그레이션 계획

### Box 환경 평가하기

마이그레이션 전에 보유한 데이터를 파악하세요:

- **개인 폴더** → 각 개인의 OneDrive 계정으로 마이그레이션합니다.
- **공유 폴더/워크스페이스** → SharePoint 문서 라이브러리로 마이그레이션합니다.
- **보관 데이터** → SharePoint 대신 더 저렴한 스토리지(S3, B2)로 이동하는 것을 고려하세요.
- **총 데이터 용량** — 일정과 접근 방식을 결정합니다.

### 대상 매핑

| Box 소스 | Microsoft 365 대상 |
|-----------|--------------------------|
| My Files | OneDrive for Business |
| Shared Folders | SharePoint 팀 사이트 |
| Department Folders | SharePoint 문서 라이브러리 |
| Archive/Cold Data | OneDrive 또는 Azure Blob Storage |

## 단계별 마이그레이션

### 1) Box 및 Microsoft 리모트 추가

RcloneView에서 두 서비스를 모두 연결합니다:

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and SharePoint remotes" class="img-large img-center" />

SharePoint의 경우 OneDrive Business 리모트로 추가하고 SharePoint 사이트 URL을 지정하세요.

### 2) 탐색 및 비교

왼쪽에는 Box를, 오른쪽에는 SharePoint/OneDrive를 엽니다:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Box and SharePoint side by side" class="img-large img-center" />

### 3) 단계별 전송

한 번에 모든 것을 마이그레이션하려 하지 마세요. 우선순위를 정하세요:

**1단계: 활성 프로젝트** — 사람들이 매일 사용해야 하는 파일입니다.
**2단계: 공유 워크스페이스** — 팀 폴더와 협업 공간입니다.
**3단계: 보관 자료** — 이전 프로젝트와 과거 데이터입니다.

### 4) Copy 작업 실행

각 단계별로 Copy 작업을 생성합니다:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Box to SharePoint migration job" class="img-large img-center" />

### 5) 각 단계 검증

각 단계가 끝날 때마다 소스와 대상을 비교합니다:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box to SharePoint migration" class="img-large img-center" />

## 제약 사항 처리하기

### 파일 이름 제한

SharePoint/OneDrive는 Box보다 더 엄격한 이름 지정 규칙을 가지고 있습니다:

- 허용되지 않는 문자: `" * : < > ? / \ |`
- 파일 이름은 공백으로 시작하거나 끝날 수 없습니다.
- 최대 경로 길이: 400자.

Rclone은 전송 중 이러한 변환 상당수를 자동으로 처리합니다.

### Box Notes

Box Notes는 독자적인 형식이며 Microsoft 365에는 직접적인 대응 기능이 없습니다. PDF로 내보내거나 OneNote/Word로 수동으로 복사해야 합니다.

### 권한 및 공유

RcloneView는 파일을 전송하지만 공유 권한은 전송하지 않습니다. 마이그레이션 후 SharePoint/OneDrive에서 공유 설정을 새로 해야 합니다. 이를 별도의 단계로 계획하세요.

### 속도 제한

Box와 SharePoint 모두 API 속도 제한이 있습니다:

- **Box**: 요금제에 따라 다릅니다(일반적으로 초당 10~20개 요청).
- **SharePoint**: Microsoft는 사용 패턴에 따라 스로틀링을 적용합니다.

RcloneView는 이러한 제한을 준수합니다. 대규모 마이그레이션의 경우 업무 시간 외에 전송을 예약하고 재시도(v1.3) 기능을 사용하세요.

## 전환 기간 동안 Box와 SharePoint 동기화 유지하기

모두가 같은 날 전환하지는 않습니다. 두 플랫폼을 최신 상태로 유지하려면 동기화를 예약하세요:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync during Box to SharePoint transition" class="img-large img-center" />

이를 통해 팀이 데이터 공백 없이 점진적으로 전환할 시간을 확보할 수 있습니다.

## 대용량 전송 모니터링

기업 마이그레이션에는 테라바이트 단위의 데이터가 관련됩니다. 진행 상황을 모니터링하세요:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Box to SharePoint migration" class="img-large img-center" />

## 마이그레이션 워크플로를 위한 배치 작업

v1.3 배치 작업을 사용해 전체 마이그레이션 시퀀스를 자동화하세요:

1. Box → SharePoint 복사(활성 프로젝트).
2. Box → OneDrive 복사(개인 파일).
3. Box와 SharePoint를 비교하여 검증.
4. 완료 시 Slack 알림 전송.

## 마이그레이션 이후

1. **모든 파일 검증** — 최종 폴더 비교를 실행합니다.
2. **SharePoint 권한 설정** — 공유 구조를 재구성합니다.
3. **팀 교육** — 사용자가 새 위치에서 파일을 찾도록 돕습니다.
4. **30일간 모니터링** — Box를 대체 수단으로 계속 활성화해 둡니다.
5. **Box 폐기** — 모든 것이 안정적임을 확인한 후 해지합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Box와 SharePoint/OneDrive를 리모트로 추가**합니다.
3. **마이그레이션 단계를 계획**합니다.
4. 각 단계별로 **Copy 작업을 실행**합니다.
5. 각 단계 후 **폴더 비교로 검증**합니다.
6. 전환 기간 동안 **동기화를 예약**합니다.

기업용 마이그레이션이 곧 기업 수준의 복잡함을 의미할 필요는 없습니다.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [클라우드 전송 대역폭 제한 설정하기](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />

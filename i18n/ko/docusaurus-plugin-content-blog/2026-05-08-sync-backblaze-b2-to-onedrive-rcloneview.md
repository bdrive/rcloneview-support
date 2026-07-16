---
slug: sync-backblaze-b2-to-onedrive-rcloneview
title: "Backblaze B2를 OneDrive로 동기화 — RcloneView를 이용한 클라우드 백업"
authors:
  - tayson
description: "RcloneView를 사용하여 Backblaze B2 오브젝트 스토리지에서 Microsoft OneDrive로 파일을 동기화하거나 마이그레이션하는 방법을 알아보세요 — 예약 자동화를 지원하는 GUI 기반 방식입니다."
keywords:
  - Backblaze B2 to OneDrive sync
  - migrate Backblaze B2 OneDrive RcloneView
  - Backblaze B2 OneDrive transfer
  - B2 to OneDrive migration guide
  - cloud storage sync tool
  - Backblaze B2 backup OneDrive
  - OneDrive from B2 migration
  - rclone B2 OneDrive GUI
tags:
  - RcloneView
  - backblaze-b2
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2를 OneDrive로 동기화 — RcloneView를 이용한 클라우드 백업

> Backblaze B2 콜드 스토리지에서 선택한 파일을 OneDrive로 가져와 실제로 사용하거나, RcloneView 작업 하나로 B2 버킷 전체를 OneDrive로 마이그레이션하세요.

Backblaze B2는 훌륭한 아카이브 및 백업 대상이지만, S3 호환 API는 일상적인 협업용으로 설계되지 않았습니다. 팀이 Microsoft 365에서 파일에 접근해야 하거나, SharePoint를 통해 문서를 공유해야 하거나, 단순히 B2의 데이터를 더 접근하기 쉬운 위치로 옮기고 싶다면 OneDrive로 동기화하는 것이 해답입니다. RcloneView는 시각적인 작업 빌더와 실시간 모니터링으로 전송 과정을 간단하게 만들어줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Backblaze B2와 OneDrive 연결하기

RcloneView에서 **Remote 탭 → New Remote**를 열고 먼저 Backblaze B2를 추가합니다. Application Key ID와 Application Key를 입력한 뒤 버킷 이름을 지정합니다. OneDrive의 경우 제공업체 목록에서 선택하고 Microsoft 계정으로 OAuth 브라우저 로그인을 완료합니다. 두 리모트가 모두 저장되면 듀얼 패널 탐색기에서 나란히 열어 확인합니다.

왼쪽에서는 B2 버킷을, 오른쪽에서는 OneDrive를 탐색합니다. 양쪽 모두 폴더 계층 구조 깊숙이 이동할 수 있으며, 전송을 시작하기 전에 파일 개수를 비교할 수 있습니다. 이 시각적 확인 단계는 대규모 마이그레이션 중 발생할 수 있는 예상치 못한 문제를 방지해 줍니다.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Backblaze B2 and OneDrive remotes in RcloneView" class="img-large img-center" />

## 동기화 작업 구성 및 실행

Home 탭에서 **Sync**를 클릭하여 작업 마법사를 엽니다. Backblaze B2 경로를 소스로, OneDrive 대상 폴더를 타겟으로 설정합니다. 2단계에서는 동시 전송 개수를 구성합니다 — OneDrive에는 API 속도 제한이 있으므로 최대치로 시작하는 것보다 4~8개의 동시 전송으로 시작하는 것이 더 안전합니다. 데이터 무결성이 중요한 경우 체크섬 비교를 활성화하세요.

전체 전송을 실행하기 전에 **Dry Run** 옵션을 사용하세요. 이는 선택적으로 동기화할 때 특히 유용합니다 — 예를 들어 3단계에서 **Max file age** 필터를 설정하여 B2에서 최근 90일 이내의 파일만 가져오는 경우입니다. 드라이 런 결과가 올바르게 나오면 실제 작업을 실행합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="B2 to OneDrive sync job in progress in RcloneView" class="img-large img-center" />

## B2에서 정기적으로 가져오기 예약하기

일부 워크플로우에서는 B2에서 OneDrive로의 반복적인 동기화가 필요합니다 — 예를 들어 매일 아침 새로 아카이브된 보고서를 B2에서 OneDrive 폴더로 가져와 팀원들이 Microsoft 365 인터페이스를 통해 접근할 수 있도록 하는 경우입니다. PLUS 라이선스가 있으면 RcloneView의 crontab 스케줄러가 이를 자동으로 처리합니다. 작업 마법사의 4단계에서 워크플로우에 맞는 요일과 시간을 선택하여 일정을 설정하세요.

**Job History** 탭은 모든 실행 기록을 저장하므로, 예약된 각 동기화가 성공적으로 완료되었는지 확인하고 얼마나 많은 데이터가 이동했는지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Backblaze B2 to OneDrive sync" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Backblaze B2(Application Key)와 OneDrive(OAuth)를 리모트로 추가합니다.
3. 적절한 전송 제한을 설정하여 B2에서 OneDrive로의 동기화 작업을 생성합니다.
4. PLUS 라이선스로 반복 동기화를 예약하여 자동화를 완성합니다.

B2의 안정적인 아카이브에서 OneDrive의 협업 환경으로 데이터를 옮기는 작업은 RcloneView와 함께라면 일상적이고 신뢰할 수 있는 작업이 됩니다.

---

**관련 가이드:**

- [RcloneView로 Backblaze B2를 Azure Blob Storage로 동기화하기](https://rcloneview.com/support/blog/sync-backblaze-b2-to-azure-blob-rcloneview)
- [RcloneView로 Backblaze B2 클라우드 스토리지 관리하기](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [RcloneView로 OneDrive를 Backblaze B2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

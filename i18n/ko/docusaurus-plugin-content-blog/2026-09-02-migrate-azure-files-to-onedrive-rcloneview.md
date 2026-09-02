---
slug: migrate-azure-files-to-onedrive-rcloneview
title: "Azure Files를 OneDrive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - casey
description: "RcloneView로 Azure File Storage를 OneDrive로 마이그레이션하세요. 드래그 앤 드롭, 동기화 작업, dry-run 미리보기로 클라우드 간 비즈니스 파일을 이동합니다."
keywords:
  - azure files를 onedrive로 마이그레이션
  - azure file storage 마이그레이션
  - onedrive 클라우드 마이그레이션
  - azure에서 onedrive로 전송
  - 클라우드 간 마이그레이션
  - RcloneView azure files
  - RcloneView onedrive
  - azure file storage를 onedrive로 이동
  - 클라우드 간 파일 전송
  - 비즈니스 클라우드 마이그레이션 도구
tags:
  - RcloneView
  - azure-files
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Azure Files를 OneDrive로 마이그레이션 — RcloneView로 파일 전송하기

> 명령줄을 다루거나 두 개의 콘솔을 오갈 필요 없이 Azure File Storage 공유 전체를 OneDrive로 옮기세요.

프로젝트나 부서용 공유를 위해 Azure File Storage를 도입했던 팀들은 회사 전체가 일상 협업 도구로 Microsoft 365와 OneDrive를 표준화하면서 이를 넘어서는 경우가 많습니다. 두 개의 서로 다른 웹 포털을 통해 모든 것을 수동으로 다시 업로드하는 것은 느리고 오류가 발생하기 쉽습니다. RcloneView는 두 리모트를 하나의 창에서 나란히 열고 그 사이에서 파일을 직접 이동할 수 있게 해주므로, 마이그레이션이 수작업 복사-붙여넣기의 연속이 아니라 하나의 추적 가능한 작업으로 진행됩니다. 마운트 전용 도구와 달리 RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교 기능을 함께 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure Files와 OneDrive를 나란히 연결하기

Azure File Storage를 추가하려면 Azure Portal의 액세스 키 페이지에 있는 스토리지 계정 이름, 공유 키, 공유 이름이 필요합니다 — RcloneView의 리모트 설정 마법사는 정확히 이 세 가지 항목을 요청합니다. 반면 OneDrive는 브라우저 기반 OAuth를 사용합니다: New Remote를 클릭하고 OneDrive를 선택한 다음, RcloneView가 열어주는 팝업 창을 통해 로그인하면 됩니다. API 키를 복사하거나 붙여넣을 필요가 없습니다.

두 리모트가 모두 설정되면 2단 또는 4단 레이아웃을 사용하여 각각을 자체 Explorer 패널에서 엽니다. 한쪽에는 Azure 공유의 폴더 트리가, 다른 쪽에는 OneDrive 구조가 표시되며, 각 패널 하단에는 파일 개수와 크기가 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Azure File Storage와 OneDrive를 리모트로 추가하기" class="img-large img-center" />

## 두 리모트 간에 파일 전송 또는 동기화하기

일회성 마이그레이션의 경우, Azure Files 패널에서 폴더나 파일을 선택하여 OneDrive 패널로 드래그하세요 — 서로 다른 두 리모트 간의 드래그는 복사 작업이므로, 정리할 준비가 될 때까지 Azure 원본은 그대로 유지됩니다. 더 큰 공유의 경우 대신 Sync 마법사를 사용하세요: Azure Files를 소스로, OneDrive를 대상으로 지정한 다음, 실제로 이동이 일어나기 전에 어떤 파일이 복사될지 미리 확인하기 위해 먼저 Dry Run을 실행합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Azure File Storage에서 OneDrive로 파일 전송하기" class="img-large img-center" />

동기화의 Advanced Settings 단계에서 체크섬 비교를 활성화하면 RcloneView가 파일 이름만이 아니라 해시와 크기로 파일 내용을 검증하며, 이는 마이그레이션이 완전히 끝났음을 입증해야 할 때 중요합니다.

## 마이그레이션 자동화 및 진행 상황 추적하기

큰 공유는 한 번에 끝나는 경우가 거의 없습니다. Job Manager에 전송 작업을 저장해두면 첫 번째 실행 이후 Azure Files에 추가된 파일도 다시 잡아낼 수 있도록 재실행할 수 있으며, 실행 중에는 하단 Info View의 Transferring 탭에서 실시간 진행률, 속도, 파일 개수를 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 Azure Files를 OneDrive로 옮기는 반복 동기화 작업 예약하기" class="img-large img-center" />

Job History는 모든 실행의 시작 시간, 소요 시간, 상태, 총 전송 크기를 기록하므로, Azure 공유를 폐기하기 전에 전환이 완료되었음을 확인할 기록을 확보할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 계정 이름, 공유 키, 공유 이름으로 Azure File Storage 리모트를 추가합니다.
3. 브라우저 기반 로그인 흐름을 통해 OneDrive를 추가합니다.
4. Dry Run을 실행한 다음 동기화 작업을 실행하고 Job History에서 결과를 확인합니다.

깔끔하고 검증 가능한 마이그레이션은 언제나 급하게 진행하는 수작업 복사보다 낫습니다.

---

**관련 가이드:**

- [Azure Files Storage 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [OneDrive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [RcloneView로 Azure Files 연결 오류 해결하기](https://rcloneview.com/support/blog/fix-azure-files-connection-errors-rcloneview)

<CloudSupportGrid />

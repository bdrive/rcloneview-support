---
slug: manage-google-drive-shared-with-me-rcloneview
title: "구글 드라이브 '공유 문서함' 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - alex
description: "RcloneView의 크로스 플랫폼 GUI를 사용해 구글 드라이브 '공유 문서함(Shared with Me)' 폴더를 탐색, 동기화, 백업하고 공유 콘텐츠를 놓치지 않는 방법을 알아보세요."
keywords:
  - google drive shared with me
  - google drive shared with me sync
  - rcloneview google drive
  - backup shared google drive folders
  - google drive gui client
  - shared_with_me rclone
  - google drive collaboration backup
  - manage shared google drive files
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 구글 드라이브 '공유 문서함' 관리 — RcloneView로 파일 동기화 및 백업하기

> 다른 사람이 나와 공유한 파일은 내 드라이브와는 별도의 공간에 존재합니다 — RcloneView를 사용하면 내 파일과 마찬가지로 이러한 공유 콘텐츠도 손쉽게 탐색, 백업, 동기화할 수 있습니다.

구글 드라이브의 "공유 문서함(Shared with Me)" 섹션에는 동료, 고객, 협업자가 내 계정과 공유한 모든 파일과 폴더가 들어 있지만, 기본적으로 내 드라이브 폴더 구조에는 포함되지 않습니다. 이러한 분리 구조 때문에 공유 콘텐츠는 특히 클라이언트 폴더를 로컬에 보관하거나 다른 클라우드로 미러링해야 할 때 관리가 소홀해지기 쉽습니다. RcloneView는 공유 문서함 공간을 독립적으로 탐색 가능한 리모트로 연결함으로써 이 문제를 해결하여, 공유 콘텐츠를 워크플로 안의 다른 폴더와 똑같이 다룰 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 공유 문서함 콘텐츠 연결하기

일반적인 구글 드라이브 리모트는 내가 소유했거나 내 폴더 구조 안에 넣어둔 파일만 표시합니다. 나와 공유된 항목에 접근하려면, RcloneView의 리모트 설정에서 구글 드라이브 리모트용 `shared_with_me` 옵션을 사용하면 됩니다 — 이 옵션을 활성화하면 개인 드라이브 루트 대신 공유 문서함 화면으로 연결이 지정됩니다. 즉 별도의 구글 계정이나 브라우저 우회 방법 없이도, 새 리모트 마법사에서 한 번만 설정하면 공유 트리가 다른 연결과 마찬가지로 탐색기 패널에 나타납니다.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new Google Drive remote configured for Shared with Me content in RcloneView" class="img-large img-center" />

연결이 완료되면 공유 문서함 리모트는 일반 파일 소스처럼 동작합니다. 폴더 트리 탐색, 이미지 썸네일 미리보기, 복사·다운로드·공개 링크 가져오기를 위한 기본 우클릭 메뉴가 모두 동일하게 작동합니다. RcloneView는 FREE 라이선스에서도 폴더 동기화 및 비교 기능을 제공하므로, 공유 콘텐츠가 읽기 전용 탐색에만 국한되지 않습니다.

## 사라지기 전에 공유 폴더 백업하기

공유 폴더는 소유자가 접근 권한을 취소하거나 원본 파일을 삭제하면 내 화면에서 사라질 수 있습니다. 이는 프로젝트 산출물을 위해 다른 사람의 드라이브에 의존할 때 실제로 발생할 수 있는 위험입니다. 공유 문서함 리모트에서 내 구글 드라이브, 로컬 디스크, 또는 오브젝트 스토리지 버킷으로 단방향 동기화 작업을 실행하면 내가 직접 관리하는 독립적인 사본을 만들 수 있습니다. 작업 방향을 "대상만 수정(Modifying destination only)"으로 설정하면 원본을 변경하지 않으면서도 백업 대상이 항상 공유 폴더의 현재 상태를 반영하게 됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Shared with Me folder to a backup destination in RcloneView" class="img-large img-center" />

지속적으로 협업하는 클라이언트라면, 필터 설정을 통해 굳이 보관할 필요가 없는 파일 형식을 제외할 수 있습니다 — 동기화 마법사 3단계에 있는 사전 정의된 필터 또는 사용자 지정 필터 규칙을 사용해 Google Docs나 특정 확장자를 건너뛰면, 실제로 중요한 파일에 집중해 백업을 유지할 수 있습니다.

## 지속적인 보호를 위한 예약 설정

고객이 매주 업데이트하는 공유 폴더에는 일회성 복사 이상의 대응이 필요합니다. PLUS 라이선스 사용자는 동기화 작업에 크론탭 형식의 예약을 추가하여, 작업을 수동으로 다시 실행하지 않아도 공유 문서함 콘텐츠가 정기적으로 자동 백업되도록 설정할 수 있습니다. 이후 작업 기록(Job History)에서 각 실행의 상태, 전송된 용량, 소요 시간이 기록되어, 공유 콘텐츠가 마지막으로 언제 캡처되었는지 명확한 감사 추적(audit trail)을 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for a Google Drive Shared with Me remote" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 새 구글 드라이브 리모트를 생성하고 설정 중에 `shared_with_me` 옵션을 활성화하세요.
3. 탐색기 패널에서 공유 문서함 트리를 탐색하여 예상한 폴더가 나타나는지 확인하세요.
4. 백업 대상으로 단방향 동기화 작업을 설정하고, PLUS 라이선스를 사용 중이라면 예약을 걸어두세요.

공유 콘텐츠는 백업 전략의 사각지대가 되어서는 안 됩니다 — 이를 RcloneView로 가져오면 관리 중인 다른 모든 것과 동일한 보호를 받을 수 있습니다.

---

**관련 가이드:**

- [구글 드라이브 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [구글 공유 드라이브 권한 오류 해결 — RcloneView로 해결하는 방법](https://rcloneview.com/support/blog/fix-google-shared-drive-permission-errors-rcloneview)
- [RcloneView로 두 개의 구글 드라이브 계정 동기화하기](https://rcloneview.com/support/blog/sync-two-google-drive-accounts-rcloneview)

<CloudSupportGrid />

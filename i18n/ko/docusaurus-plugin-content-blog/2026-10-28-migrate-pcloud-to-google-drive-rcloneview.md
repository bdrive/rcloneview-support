---
slug: migrate-pcloud-to-google-drive-rcloneview
title: "pCloud를 Google Drive로 마이그레이션 — RcloneView로 파일 전송"
authors:
  - morgan
description: "RcloneView로 pCloud의 파일을 Google Drive로 옮기세요: 두 리모트를 연결하고, Dry Run을 실행하고, 클라우드 간 복사 후 Folder Compare로 확인합니다."
keywords:
  - pcloud를 google drive로 마이그레이션
  - pcloud google drive 전송
  - pcloud 파일을 google drive로 이동
  - pcloud google drive 마이그레이션
  - 클라우드 간 전송
  - rcloneview pcloud
  - rcloneview google drive
  - pcloud 대안 마이그레이션
  - pcloud 데이터 전송
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud를 Google Drive로 마이그레이션 — RcloneView로 파일 전송

> 모든 파일을 먼저 자신의 디스크에 내려받지 않고도 pCloud 계정 전체를 Google Drive로 옮기세요.

Google Workspace로 표준화하는 팀은 pCloud에 쌓인 수년치 파일을 물려받는 경우가 많습니다. 이를 수작업으로 내려받고 다시 업로드하는 일은 느리고 실수하기 쉽습니다. RcloneView는 하나의 창에서 두 서비스를 연결해 클라우드 간 복사를 수행하고, 이전 계정을 정리하기 전에 폴더별로 결과를 검증할 수 있게 해 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud와 Google Drive 연결

RcloneView에서는 두 서비스 모두 OAuth 브라우저 로그인을 사용하므로 붙여넣을 API 키가 없습니다. Remote 탭을 열고 New Remote를 클릭한 다음 pCloud를 선택하고, 열리는 브라우저 창에서 접근을 승인하세요. Google Drive도 같은 방식으로 반복합니다. 두 리모트가 Remote Manager에 표시되면 두 개의 Explorer 패널에 나란히 여세요. 왼쪽에는 pCloud, 오른쪽에는 Google Drive입니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 pCloud와 Google Drive 리모트 추가" class="img-large img-center" />

먼저 pCloud 트리를 탐색하고 최상위 폴더에서 Get Size를 사용하세요. 예를 들어 프로젝트 폴더가 1.5TB인 사진 스튜디오는 하나의 거대한 작업 대신 폴더별로 마이그레이션을 계획할 수 있습니다.

## 클라우드 간 복사

소수의 폴더라면 pCloud 패널에서 Google Drive 패널로 드래그하세요. 서로 다른 리모트 사이의 드래그는 Copy를 수행하므로 pCloud 원본은 그대로 유지됩니다. 계정 전체라면 작업을 만드세요. Sync 마법사를 열고 pCloud를 소스로, Google Drive를 대상으로 선택한 다음 어느 쪽에서도 아무것도 삭제되지 않도록 Copy 유형의 작업을 선택합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 pCloud에서 Google Drive로 클라우드 간 전송" class="img-large img-center" />

Advanced Settings에서는 적당한 Number of file transfers 값으로 시작하는 것이 좋습니다. Google Drive는 API 제한을 적용하므로 동시성이 너무 높으면 재시도가 발생할 수 있습니다. 짧은 네트워크 끊김으로 작업이 끝나지 않도록 "Retry entire sync if fails"는 기본값인 3으로 두세요.

## Dry Run, 필터, 모니터링

실제 실행 전에 Dry Run으로 복사될 파일을 미리 확인하세요. Filtering 단계에서는 `.git/` 폴더 같은 불필요한 항목을 제외하거나 최대 파일 크기와 파일 기간으로 제한할 수 있어, 최근 프로젝트만 옮기면 될 때 유용합니다. 작업이 시작되면 Transferring 탭에 진행률, 속도, 파일 수가 표시되며 Job History에 모든 실행이 기록됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView에서 pCloud에서 Google Drive로의 작업 기록 검토" class="img-large img-center" />

## Folder Compare로 확인

작업이 완료되면 왼쪽에 pCloud, 오른쪽에 Google Drive를 두고 Compare를 여세요. left-only 파일로 필터링하면 도착하지 않은 항목을 볼 수 있고, 비교 화면에서 바로 복사할 수 있습니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화하므로, 같은 도구로 이동과 확인을 모두 처리할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView에서 pCloud와 Google Drive 간 Folder Compare" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. New Remote를 통해 pCloud와 Google Drive를 리모트로 추가합니다.
3. pCloud에서 Google Drive로의 Copy 작업에 Dry Run을 실행한 다음 실제로 실행합니다.
4. 이전 계정을 닫기 전에 Compare로 left-only 파일이 남아 있지 않은지 확인합니다.

단계적 복사와 시각적 확인은 위험한 계정 이전을 일상적인 작업으로 바꿔 줍니다.

---

**관련 가이드:**

- [pCloud를 Google Drive로 동기화 — RcloneView로 클라우드 백업](https://rcloneview.com/support/blog/sync-pcloud-to-google-drive-rcloneview)
- [Google Drive를 pCloud로 마이그레이션 — RcloneView로 파일 전송](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [pCloud 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

---
slug: fix-one-way-sync-deleted-destination-files-rcloneview
title: "단방향 동기화가 대상 파일을 삭제하는 문제 해결 — RcloneView로 백업 보호하기"
authors:
  - casey
description: "단방향 동기화 후 백업에서 파일이 사라졌나요? 원인과 함께 RcloneView의 Copy 작업, Dry Run, Folder Compare로 원치 않는 삭제를 막는 방법을 알아보세요."
keywords:
  - 동기화 후 대상 파일 삭제
  - 단방향 동기화 파일 삭제
  - rclone sync vs copy
  - 동기화 삭제 방지
  - 클라우드 백업 파일 사라짐
  - RcloneView dry run
  - 미러 동기화 파일 삭제
  - 동기화 후 파일 복원
  - RcloneView 문제 해결
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 단방향 동기화가 대상 파일을 삭제하는 문제 해결 — RcloneView로 백업 보호하기

> 동기화 후 백업에서 파일이 사라졌다면, 작업은 동기화가 원래 하도록 설계된 일을 정확히 한 것일 가능성이 큽니다. 올바른 작업 유형을 고르고 먼저 변경 사항을 미리 확인하는 방법을 소개합니다.

흔히 겪는 일입니다. 노트북 폴더를 Backblaze B2로 동기화했는데, 버킷에만 있던 오래된 파일이 사라졌습니다. 이것은 버그가 아닙니다. 단방향 동기화는 대상을 소스와 일치시키며, 여기에는 소스에 없는 파일을 제거하는 것도 포함됩니다. RcloneView는 이런 상황을 미리 파악하고, 아무것도 삭제하지 않는 작업 유형을 선택할 수 있는 도구를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 단방향 동기화가 파일을 제거하는 이유

동기화 마법사에서 단방향 방향은 **"Modifying destination only"**로 표시됩니다. 소스는 그대로 두고 대상이 소스를 미러링할 때까지 대상을 변경합니다. 대상에 있으면서 소스에 대응하는 파일이 없는 항목은 삭제됩니다.

대표적인 원인:

- **잘못된 소스 폴더.** `Projects` 대신 `Projects/2026`을 선택하면 다른 연도 폴더가 모두 대상에서 "불필요한" 항목으로 보입니다.
- **정리된 소스.** 공간을 확보하려고 로컬에서 오래된 파일을 지웠지만, 클라우드 사본은 아카이브로 남아 있기를 기대한 경우입니다.
- **여러 소스, 하나의 대상.** 두 대의 컴퓨터가 같은 폴더로 동기화하면 서로의 파일을 제거합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job in RcloneView" class="img-large img-center" />

## 대상이 아카이브라면 Copy를 사용하세요

대상이 지금까지 보낸 모든 것을 보관해야 한다면 Sync 대신 **Copy** 작업을 사용하세요. Job Manager는 Sync, Copy, Move, Delete, Download, Upload 작업 유형을 제공합니다. Copy는 새 파일과 변경된 파일을 전송하지만 대상에서 아무것도 제거하지 않으므로, 사진 아카이브나 장기 프로젝트 백업에 적합합니다.

Sync는 두 번째 클라우드에 그대로 재현하고 싶은 작업 폴더처럼 진짜 미러가 필요한 경우에만 사용하세요.

## Dry Run으로 삭제 항목 미리 보기

새로 만들거나 수정한 동기화 작업을 실제로 실행하기 전에 **Dry Run**을 실행하세요. 아무것도 변경하지 않고 복사될 파일과 삭제될 파일 목록을 보여 줍니다. 삭제 목록에 보관해야 할 파일이 있다면 중단하고 소스 경로를 수정하거나 Copy로 전환하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job after checking the Dry Run preview in RcloneView" class="img-large img-center" />

## Folder Compare로 차이 확인하기

**Folder Compare**는 두 폴더를 나란히 보여 줍니다. right-only 파일 필터를 적용하면 대상에는 있지만 소스에는 없는 파일, 즉 동기화가 제거할 파일을 정확히 확인할 수 있습니다. 그중 중요한 파일이 있다면 동기화 전에 **Copy left**로 소스로 되돌리거나, 다른 폴더로 동기화하여 영향을 받지 않게 하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing destination-only files in RcloneView" class="img-large img-center" />

마운트 전용 도구와 달리 RcloneView는 동기화와 폴더 비교도 지원하며, FREE License에서 사용할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Job Manager에서 기존 작업을 열고 소스와 대상 경로를 확인합니다.
3. 아카이브 성격의 작업은 Sync에서 Copy로 바꾸고, 유지하는 모든 동기화 작업에는 Dry Run을 실행합니다.
4. Folder Compare로 right-only 파일을 검토한 다음, 실행할 때마다 **Job History**를 확인합니다.

이미 파일이 사라졌다면 먼저 제공업체의 휴지통이나 버전 기록을 확인한 뒤, 같은 일이 다시 일어나지 않도록 작업을 다시 구성하세요.

---

**관련 가이드:**

- [Dry Run — RcloneView로 전송 전에 동기화 미리 보기](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [RcloneView로 실수로 삭제한 클라우드 파일 복구하기](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)
- [RcloneView로 클라우드 동기화 후 누락된 파일 문제 해결](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />

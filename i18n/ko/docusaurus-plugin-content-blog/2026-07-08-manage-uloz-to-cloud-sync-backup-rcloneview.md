---
slug: manage-uloz-to-cloud-sync-backup-rcloneview
title: "Uloz.to 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - casey
description: "Uloz.to 클라우드 스토리지를 RcloneView에 연결하여 드래그 앤 드롭 파일 관리, 예약 백업, 여러 제공업체 간 동기화를 하나의 앱에서 이용하세요."
keywords:
  - Uloz.to
  - Uloz.to cloud storage
  - manage Uloz.to files
  - Uloz.to backup
  - Uloz.to sync
  - RcloneView Uloz.to
  - Uloz.to remote
  - cloud file manager
  - Uloz.to alternative client
  - multi-cloud file management
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Uloz.to 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> 브라우저로 Uloz.to에 파일을 하나씩 업로드하는 대신, 데스크톱 파일 탐색기에서 전체 라이브러리를 관리하세요.

Uloz.to는 인기 있는 파일 호스팅 및 스토리지 서비스이지만, 웹 인터페이스는 대량 백업, 예약 동기화, 계정 간 또는 다른 클라우드로의 파일 이동을 염두에 두고 만들어지지 않았습니다. RcloneView는 Uloz.to를 다른 스토리지와 함께 리모트로 추가하므로, 브라우저 탭을 열 필요 없이 파일을 탐색하고, 백업하고, 동기화 상태를 유지할 수 있습니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화합니다 — Uloz.to도 같은 인터페이스 안의 또 다른 탭일 뿐입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Uloz.to를 리모트로 추가하기

Remote 탭을 열고 **New Remote**를 클릭한 다음, 제공업체 목록에서 Uloz.to를 선택하여 연결을 구성하세요. 추가되고 나면 로컬 디스크 및 다른 클라우드 리모트와 나란히 모든 Explorer 패널에 탭으로 표시됩니다. Remote Manager(Remote 탭 > Remote Manager)는 구성된 모든 리모트를 한곳에 나열하므로, 나중에 설정 화면을 뒤지지 않고도 Uloz.to 연결을 편집하거나 제거할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Uloz.to as a new remote in RcloneView" class="img-large img-center" />

Explorer 내부에서 breadcrumb 경로 표시줄의 우클릭 메뉴에는 **Copy Full Path (with Remote)**가 있습니다 — 일회성 명령을 위해 내장된 Rclone Terminal도 함께 사용한다면 `uloz:FolderName` 형식의 경로를 가져올 때 유용합니다.

## Uloz.to 콘텐츠를 자동으로 동기화 및 백업하기

반복적인 백업을 위해서는 4단계 마법사를 통해 Sync 작업을 설정하세요: Uloz.to를 소스 또는 대상으로 선택하고, 안전하고 안정적인 백업 방향을 위해 단방향 "modifying destination only"를 선택한 다음, 3단계에서 필터를 추가하여 미러링하고 싶지 않은 파일 유형(대용량 `.iso` 파일, 임시 폴더 등)을 제외하세요. 실제로 파일이 이동하기 전에 무엇이 복사되거나 삭제될지 정확히 미리 보려면 먼저 Dry Run을 실행하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Uloz.to and another cloud remote" class="img-large img-center" />

작업에 확신이 생기면, PLUS 라이선스 사용자는 crontab 형식의 일정을 연결하여 Uloz.to 백업이 자동으로 실행되도록 할 수 있습니다 — 매일, 매주, 혹은 워크플로에 맞는 어떤 주기로든 가능합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Uloz.to backup job in RcloneView" class="img-large img-center" />

## Folder Compare로 변경 사항 확인하기

마이그레이션이나 백업을 신뢰하기 전에, Uloz.to 폴더와 다른 리모트의 대응 폴더 사이에서 Folder Compare를 실행하세요. 비교 화면은 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 다른 파일을 나란히 표시해주므로, 문제가 되기 전에 누락된 업로드나 오래된 사본을 발견할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Uloz.to folder contents against another cloud remote" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭을 통해 Uloz.to를 새 리모트로 추가하세요.
3. 다른 클라우드나 로컬 드라이브로 백업할 Sync 작업을 만드세요.
4. Dry Run을 실행한 다음, 첫 전송 후 Folder Compare로 확인하세요.

Uloz.to를 제대로 된 파일 관리 워크플로에 편입시키면 수동 업로드가 줄어들고 파일이 실제로 백업되고 있다는 확신도 훨씬 커집니다.

---

**관련 가이드:**

- [Linkbox 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-linkbox-cloud-sync-backup-rcloneview)
- [Pixeldrain 클라우드 동기화 관리 — RcloneView로 파일 백업하기](https://rcloneview.com/support/blog/manage-pixeldrain-cloud-sync-rcloneview)
- [Terabox 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-terabox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

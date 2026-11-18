---
slug: create-empty-directories-sync-option-rcloneview
title: "빈 디렉터리 생성 — RcloneView 동기화 시 전체 폴더 구조 유지하기"
authors:
  - alex
description: "RcloneView의 빈 디렉터리 생성(Create empty directories) 동기화 옵션으로 빈 프로젝트 폴더를 포함한 전체 폴더 트리를 클라우드 스토리지와 로컬 드라이브 간에 복사하세요."
keywords:
  - 빈 디렉터리 생성 동기화
  - rclone create empty src dirs
  - 클라우드 동기화 폴더 구조 유지
  - 빈 폴더 클라우드 복사
  - 구글 드라이브 빈 폴더 동기화
  - 폴더 템플릿 백업
  - RcloneView 동기화 옵션
  - rclone 빈 폴더 복사 안 됨
  - 클라우드 디렉터리 트리 미러링
tags:
  - RcloneView
  - feature
  - cloud-sync
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 빈 디렉터리 생성 — RcloneView 동기화 시 전체 폴더 구조 유지하기

> 파일만큼 폴더 구성도 중요하다면, 체크박스 하나만 켜서 빈 폴더까지 대상에 전달하세요.

기본적으로 rclone은 폴더가 아니라 파일을 복사하므로, 소스에 있는 빈 디렉터리는 대상에 나타나지 않습니다. 대개는 문제가 없지만, 백업을 복원했는데 팀이 사용하던 `/Invoices/2027`, `/Raw`, `/Exports` 폴더가 사라졌다는 사실을 알게 되면 이야기가 달라집니다. RcloneView는 이 동작을 동기화 마법사의 옵션 하나로 제공하므로, rclone 플래그를 입력하지 않고도 전체 트리를 유지할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 빈 폴더가 사라지는 이유

rclone은 객체를 옮깁니다. 동기화 작업은 소스를 탐색하며 파일을 찾고, 각 파일의 경로를 대상에 다시 만듭니다. 파일이 없는 폴더는 전송할 것이 없으므로 작업에서 건너뜁니다. 많은 클라우드 서비스, 특히 S3 방식의 객체 스토리지는 폴더를 별도의 객체로 저장하지 않습니다. 그곳에서 "폴더"는 파일 이름에 공통으로 붙은 접두사일 뿐입니다.

이 점은 폴더 템플릿을 사용하는 사람들을 곤란하게 만듭니다. 영상 제작사는 모든 작업을 `01_Footage`, `02_Audio`, `03_Graphics`, `04_Deliverables`라는 뼈대로 시작할 수 있습니다. 회계 사무소는 문서가 들어오기 전에 고객별·연도별 폴더를 미리 만들어 둘 수 있습니다. 이런 빈 뼈대가 동기화되지 않으면, 대상 쪽 협업자는 불완전한 구조를 보게 됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a project folder tree between two cloud remotes in RcloneView" class="img-large img-center" />

## 빈 디렉터리 생성 활성화하기

이 옵션은 동기화 마법사의 **Step 1: Configure Storage**에 소스, 대상, 동기화 방향 설정과 함께 있습니다. 소스와 대상을 선택한 뒤 **Create empty directories**를 체크하세요. 작업이 실행되면 RcloneView가 rclone에 소스의 빈 폴더를 대상에 다시 만들도록 지시하며, 이는 rclone의 `--create-empty-src-dirs` 플래그에 해당하는 GUI 기능입니다.

이 설정은 작업과 함께 저장되므로, Job Manager에서 수동으로 시작하든 PLUS 스케줄이 실행하든 매번 적용됩니다. 1:N 동기화에서도 작동하므로, 추가한 모든 대상에 동일한 폴더 뼈대가 전달됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved sync job with empty directory creation enabled in RcloneView" class="img-large img-center" />

## 필터 및 Dry Run과 함께 사용하기

빈 폴더 생성은 Step 3의 필터와 함께 작동합니다. `.git/`을 제외하거나 **Max folder depth**로 작업 범위를 제한하면, 해당 규칙을 통과한 폴더만 생성됩니다. 실제로 쓰기 전에 먼저 **Dry Run**을 실행해 작업 내용을 미리 확인하세요. 이는 소스에 더 이상 없는 대상 항목을 삭제하는 단방향 동기화에서 특히 중요합니다.

Amazon S3, Wasabi, Backblaze B2 같은 버킷 기반 스토리지에서는 기대치를 현실적으로 잡으세요. 이러한 백엔드에는 실제 디렉터리가 없으므로, 빈 폴더가 Google Drive, OneDrive, Dropbox, SFTP 또는 로컬 디스크에서처럼 유지되지 않을 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing left-only folders after a sync in RcloneView" class="img-large img-center" />

작업이 끝나면 같은 두 위치에서 **Folder Compare**를 열어 결과를 나란히 확인하세요. 동기화와 Folder Compare는 모두 FREE 라이선스에서 사용할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Home 탭에서 **Sync**를 열고 소스와 대상 폴더를 선택합니다.
3. Step 1에서 **Create empty directories**를 체크한 뒤, Step 3에서 필요한 필터를 설정합니다.
4. Dry Run을 실행한 다음, 작업을 저장하고 Job Manager에서 실행합니다.

빈 폴더가 유지되면, 복원이나 마이그레이션 후에도 팀이 설정한 구조 그대로 돌아옵니다.

---

**관련 가이드:**

- [Max Folder Depth 및 Max File Size 필터](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Dry Run — 전송 전 클라우드 동기화 미리 보기](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [동기화 필터가 파일을 제외하지 않는 문제 해결](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />

---
slug: migrate-citrix-sharefile-to-box-rcloneview
title: "Citrix ShareFile에서 Box로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - morgan
description: "RcloneView로 Citrix ShareFile을 Box로 마이그레이션하세요. 두 리모트를 연결하고, Dry Run으로 미리 확인하고, 클라우드 간 폴더를 복사한 뒤 Folder Compare로 검증합니다."
keywords:
  - Citrix ShareFile Box 마이그레이션
  - ShareFile에서 Box로 이전
  - Citrix ShareFile Box 전송
  - 클라우드 간 마이그레이션 도구
  - RcloneView ShareFile
  - Box for Business 마이그레이션
  - 기업용 파일 마이그레이션 GUI
  - ShareFile 폴더를 Box로 이동
  - rclone ShareFile Box
tags:
  - RcloneView
  - sharefile
  - box
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Citrix ShareFile에서 Box로 마이그레이션 — RcloneView로 파일 전송하기

> ShareFile 폴더 트리를 클라우드 간에 Box로 옮기고, 모든 변경 사항을 먼저 미리 확인하고, 결과를 나란히 검증하세요. 모두 하나의 GUI에서 가능합니다.

조직이 Box로 통합할 때는 계약서, 고객 납품물, 프로젝트 폴더가 담긴 ShareFile 아카이브도 함께 옮겨야 합니다. 모든 것을 노트북으로 다운로드했다가 다시 업로드하는 방식은 느리고 실수가 생기기 쉽습니다. RcloneView는 두 서비스를 리모트로 연결하고 rclone을 통해 전송을 실행하므로, 파일이 두 클라우드 사이에서 직접 이동하는 동안 하나의 창에서 진행 상황을 지켜볼 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Citrix ShareFile과 Box 연결하기

**Remote tab > New Remote**를 열고 Citrix ShareFile을 선택합니다. ShareFile은 로그인 외에도 **Root Folder ID**가 필요하며, 이는 rclone이 어떤 폴더를 리모트의 최상위로 취급할지 알려 줍니다. 부서별로 마이그레이션할 계획이라면 루트 폴더마다 별도의 리모트를 만들어 각 작업을 작고 점검하기 쉽게 유지하세요.

다음으로 Box를 추가합니다. Box는 OAuth를 사용합니다. RcloneView가 브라우저를 열고, 로그인하면 연결이 저장되며 복사할 API 키는 없습니다. 조직에서 Box for Business를 사용한다면 설정 중에 `box_sub_type = enterprise`를 지정하여 리모트가 기업 계정을 대상으로 하도록 하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Citrix ShareFile and Box remotes in RcloneView" class="img-large img-center" />

왼쪽 패널에 ShareFile을, 오른쪽 패널에 Box를 엽니다. 두 곳을 나란히 탐색하면 무엇이든 옮기기 전에 예상한 폴더가 보이는지 빠르게 확인할 수 있습니다.

## 전송 계획 및 미리 보기

일회성 마이그레이션에는 **Copy** 작업이 신중한 선택입니다. Box에 이미 있는 것은 제거하지 않고 파일을 추가합니다. **Home tab > Sync** 또는 Job Manager에서 작업을 만들고, ShareFile 폴더를 소스로, Box 폴더를 대상으로 선택한 뒤 `sharefile-legal-to-box` 같은 작업 이름을 지정하세요.

Advanced Settings 단계에서는 이 조합에 대해 체크섬을 끄세요. 체크섬 비교에는 양쪽이 공유하는 해시 유형이 필요한데, ShareFile(MD5)과 Box(SHA-1)는 서로 다른 해시를 사용하므로 rclone은 대신 크기와 수정 시간으로 비교합니다. 목록 조회가 느리게 느껴진다면 equality checker 수를 적당히 유지하세요. Filtering 단계에서는 대용량 설치 파일(`.iso`)이나 보관하지 않기로 한 레거시 폴더를 제외할 수 있습니다.

실행하기 전에 **Dry Run**을 사용하세요. 아무것도 전송하지 않고 복사될 파일 목록을 보여 주므로, 고객 문서 40,000건을 옮기는 법률 사무소도 먼저 범위를 확인할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Citrix ShareFile to Box in RcloneView" class="img-large img-center" />

## 실행, 모니터링, 검증

작업을 시작하고 **Transferring** 탭에서 진행률, 속도, 파일 수를 확인하세요. 대규모 마이그레이션은 최상위 폴더마다 하나씩 여러 작업으로 나누면 한 작업이 실패해도 나머지가 막히지 않습니다. 각 실행은 상태, 총 크기, 파일 수와 함께 **Job History**에 기록되어 마이그레이션의 감사 기록이 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed ShareFile to Box migration runs" class="img-large img-center" />

작업이 끝나면 소스와 대상에서 **Folder Compare**를 엽니다. left-only 파일 필터로 도착하지 않은 항목을 찾은 다음, Copy right로 빈 부분을 채우세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying ShareFile and Box contents" class="img-large img-center" />

## 시작하기

RcloneView는 Windows, macOS, Linux에서 실행되며, 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화할 수 있습니다.

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Citrix ShareFile(Root Folder ID 포함)과 Box를 리모트로 추가합니다.
3. ShareFile에서 Box로 가는 Copy 작업을 만들고 먼저 Dry Run을 실행합니다.
4. 작업을 실행한 뒤 Folder Compare와 Job History로 결과를 확인합니다.

계획하고 검증한 마이그레이션이라면 팀은 빠진 폴더가 없는지 걱정하지 않고 Box로 전환할 수 있습니다.

---

**관련 가이드:**

- [Citrix ShareFile 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Box 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [RcloneView로 Citrix ShareFile에서 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-citrix-sharefile-to-google-drive-rcloneview)

<CloudSupportGrid />

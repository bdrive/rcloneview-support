---
slug: migrate-pikpak-to-google-drive-rcloneview
title: "PikPak에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView의 클라우드 간 전송 기능을 사용하여 PikPak에서 Google Drive로 파일을 마이그레이션하는 단계별 가이드 — 두 리모트를 설정하고 로컬 다운로드 없이 전송하세요."
keywords:
  - PikPak to Google Drive
  - PikPak migration
  - RcloneView PikPak
  - cloud-to-cloud transfer
  - PikPak export
  - Google Drive import
  - rclone PikPak
  - cloud file migration
tags:
  - pikpak
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# PikPak에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기

> PikPak 사용자는 로컬 컴퓨터에 먼저 모든 파일을 다운로드할 필요 없이 RcloneView를 사용해 클라우드에서 바로 Google Drive로 파일을 옮길 수 있습니다.

PikPak은 아시아에서 널리 사용되는 인기 클라우드 스토리지 및 오프라인 다운로드 서비스로, 토렌트와 마그넷 링크를 클라우드에 직접 저장할 수 있는 기능으로 높은 평가를 받고 있습니다. PikPak에서 벗어나 마이그레이션하려는 사용자든, 단순히 PikPak 파일의 백업 사본을 Google Drive에 보관하려는 사용자든, RcloneView는 가장 깔끔한 방법을 제공합니다. 즉, 파일을 로컬 디스크를 거치지 않고 두 제공업체 사이에서 직접 이동시키는 클라우드 간 전송입니다. RcloneView에는 내장된 rclone 바이너리가 포함되어 있어 별도로 설치할 것이 없습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## PikPak 리모트 설정하기

RcloneView에서 **New Remote**를 클릭하고 제공업체 목록에서 **PikPak**을 선택하세요. PikPak **사용자 이름**(이메일 주소)과 **비밀번호**를 입력합니다. RcloneView는 PikPak API로 인증하여 계정에 연결합니다. 저장 후 PikPak 리모트가 듀얼 패널 탐색기에 나타나며, 로컬 파일 시스템처럼 파일과 폴더를 탐색할 수 있습니다.

마이그레이션을 시작하기 전에 몇 분 정도 시간을 들여 PikPak 폴더 구조를 살펴보고 콘텐츠가 어떻게 구성되어 있는지 파악하세요. 하나의 거대한 배치로 전송하기보다 별도의 작업으로 나누어 전송하는 편이 나을 수 있는 큰 폴더나 깊이 중첩된 구조가 있는지 확인하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Adding PikPak as a remote in RcloneView" class="img-large img-center" />

## Google Drive 추가하기

다시 **New Remote**를 클릭하고 **Google Drive**를 선택하세요. RcloneView는 Google OAuth 인증을 위한 브라우저 탭을 엽니다. Google 계정으로 로그인하고 요청된 권한을 부여하세요. OAuth 절차가 완료되면 Google Drive 리모트가 PikPak 리모트와 함께 탐색기에 표시됩니다.

전송을 시작하기 전에 Google Drive에 전용 마이그레이션 대상 폴더(예: `PikPak Import/`)를 만드세요. 이렇게 하면 마이그레이션된 콘텐츠를 정리된 상태로 유지할 수 있고, PikPak과 Google Drive 간 폴더 크기를 비교하여 전송이 완전히 완료되었는지 쉽게 확인할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="PikPak and Google Drive open side by side for migration in RcloneView" class="img-large img-center" />

## 클라우드 간 전송 실행하기

두 리모트를 듀얼 패널 뷰에서 열어두면, 소규모 마이그레이션의 경우 PikPak에서 Google Drive로 폴더를 직접 드래그할 수 있습니다. 규모가 더 큰 마이그레이션에는 **Job Wizard**를 사용하는 것이 더 안정적입니다. PikPak을 소스로, Google Drive 대상 폴더를 타깃으로 설정하고 **Copy** 모드를 선택하세요(PikPak에서 아무것도 삭제하지 않고 파일을 복사합니다).

항상 먼저 **드라이 런(dry run)**을 실행하세요. PikPak 계정에는 오프라인 다운로드로 쌓인 수천 개의 파일이 있을 수 있으며, 드라이 런을 통해 실제 작업을 실행하기 전에 전송량을 명확히 파악할 수 있습니다. 결과에 만족하면 실제 작업을 실행하세요. RcloneView의 **Job Manager**는 현재 파일명과 전송 수를 포함한 실시간 진행 상황을 보여줍니다. 완료 후 **Job History**를 확인하여 모든 파일이 성공적으로 전송되었는지 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a PikPak to Google Drive migration job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **New Remote** > **PikPak**을 클릭하고 PikPak 사용자 이름과 비밀번호를 입력하세요.
3. **New Remote** > **Google Drive**를 클릭하고 OAuth 인증을 완료하세요.
4. 마이그레이션 대상으로 Google Drive에 `PikPak Import/` 폴더를 만드세요.
5. **Job Wizard**를 사용해 복사 작업을 만들고, 드라이 런을 실행한 다음 전체 마이그레이션을 실행하세요.

RcloneView를 통해 PikPak에서 Google Drive로 마이그레이션하는 과정은 대규모 클라우드 라이브러리도 안정적으로, 그리고 로컬 저장 공간 부담 없이 처리할 수 있는 간소화된 프로세스입니다.

---

**관련 가이드:**

- [RcloneView로 PikPak 클라우드 다운로드 관리하기](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)
- [Google Drive 관리 — RcloneView로 클라우드 동기화 및 백업](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView로 클라우드 간 마이그레이션하기](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />

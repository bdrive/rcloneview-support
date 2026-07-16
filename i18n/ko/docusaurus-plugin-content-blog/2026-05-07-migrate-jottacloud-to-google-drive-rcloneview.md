---
slug: migrate-jottacloud-to-google-drive-rcloneview
title: "Jottacloud에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView의 클라우드 간 전송 기능을 사용하여 Jottacloud에서 Google Drive로 파일을 마이그레이션하는 단계별 가이드 — 두 리모트를 설정하고 마이그레이션 작업을 실행하세요."
keywords:
  - Jottacloud migration
  - Jottacloud to Google Drive
  - RcloneView migration
  - cloud-to-cloud transfer
  - Jottacloud export
  - cloud storage migration
  - rclone Jottacloud
  - Google Drive import
tags:
  - jottacloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기

> Jottacloud에서 Google Drive로 파일을 옮기는 작업은 RcloneView를 사용하면 간단합니다 — 두 리모트를 연결하고 모든 파일을 먼저 다운로드하지 않고도 클라우드에서 바로 전송할 수 있습니다.

Jottacloud는 무제한 저장 공간 제공으로 인기를 끌었던 노르웨이의 클라우드 스토리지 서비스이지만, 많은 사용자들이 이제 Google Drive와 같이 보다 보편적으로 접근 가능한 플랫폼으로 마이그레이션하고자 합니다. 요금제 변경, 가격 문제, 혹은 단순히 클라우드 스토리지를 통합하기 위해서든, RcloneView는 마이그레이션 과정을 깔끔하고 안정적으로 만들어 줍니다. 모든 파일을 먼저 로컬로 다운로드할 필요가 없습니다 — RcloneView는 클라우드 간 작업으로 Jottacloud에서 Google Drive로 파일을 직접 전송합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Jottacloud 리모트 설정하기

RcloneView에서 **New Remote**를 클릭하고 제공자 목록에서 **Jottacloud**를 선택하세요. RcloneView가 인증 과정을 안내해 줍니다 — Jottacloud는 브라우저를 통해 로그인하는 기기 기반 로그인 방식을 사용하며, 발급된 토큰은 RcloneView에 안전하게 저장됩니다. 인증이 완료되면 개인 아카이브, 백업 폴더, 공유 콘텐츠를 포함한 Jottacloud 계정이 탐색기에 표시됩니다.

마이그레이션을 시작하기 전에 Jottacloud 폴더 구조를 살펴보고 콘텐츠가 어떻게 정리되어 있는지 파악하세요. 특수 문자가 포함된 폴더 이름이나 깊이 중첩된 구조가 있는지 확인하세요. 이러한 요소는 대규모 마이그레이션 중 간혹 문제를 일으킬 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud as a remote in RcloneView" class="img-large img-center" />

## Google Drive 추가하기

다시 **New Remote**를 클릭하고 **Google Drive**를 선택하세요. RcloneView가 Google OAuth 인증을 위한 브라우저 탭을 엽니다 — Google 계정으로 로그인하고 요청된 권한을 부여하세요. 인증이 완료되면 Google Drive 리모트가 탐색기에 나타납니다.

마이그레이션을 시작하기 전에 Google Drive에 대상 폴더를 만드세요 — 예를 들어 `Jottacloud Import/` — 마이그레이션된 파일을 기존 콘텐츠와 분리하여 정리된 상태로 유지할 수 있습니다. 이렇게 하면 어떤 파일이 어디에서 왔는지 헷갈리지 않고 마이그레이션 결과를 쉽게 확인할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Google Drive and Jottacloud open side by side in RcloneView" class="img-large img-center" />

## 마이그레이션 작업 실행하기

두 리모트가 모두 설정되면 Job Manager에서 **Job Wizard**를 여세요. Jottacloud를 소스로 설정하고(마이그레이션할 최상위 폴더 또는 특정 하위 폴더를 선택), Google Drive 대상 폴더를 타겟으로 설정하세요. 마이그레이션에는 **Sync** 모드가 아닌 **Copy** 모드를 선택하세요 — 이렇게 하면 소스에서 아무것도 삭제하지 않고 파일이 복사됩니다.

항상 먼저 **dry run**(예행 실행)을 실행하여 어떤 파일이 전송될지 정확히 확인하세요. 수천 개의 파일이 있는 대규모 Jottacloud 계정의 경우, dry run 결과를 통해 전체 전송을 실행하기 전에 잠재적인 문제를 미리 발견할 수 있습니다. 확인이 끝나면 실제 작업을 실행하세요. RcloneView의 **Job Manager**는 실시간 진행 상황을 보여주며, **Job History**는 최종 전송 개수와 오류를 기록합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Jottacloud to Google Drive migration job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **New Remote** > **Jottacloud**를 클릭하고 브라우저 인증을 완료하세요.
3. **New Remote** > **Google Drive**를 클릭하고 OAuth 인증을 완료하세요.
4. 마이그레이션된 콘텐츠를 위해 Google Drive에 대상 폴더를 만드세요.
5. **Job Wizard**를 사용하여 복사 작업을 생성하고, dry run을 실행한 다음 전체 마이그레이션을 실행하세요.

RcloneView를 사용하면 Jottacloud에서 Google Drive로의 마이그레이션은 설정에 몇 분밖에 걸리지 않고 자동으로 완료까지 실행되는 일회성 작업이 됩니다.

---

**관련 가이드:**

- [Jottacloud 관리 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Google Drive 관리 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView로 Jottacloud에서 Backblaze B2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-jottacloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

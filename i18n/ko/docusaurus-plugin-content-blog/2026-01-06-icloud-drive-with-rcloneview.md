---
slug: icloud-drive-with-rcloneview
title: "RcloneView + iCloud Drive: 내장 터미널로 안전하게 Apple 클라우드 백업하기"
authors:
  - tayson
description: "RcloneView 터미널로 iCloud Drive를 추가한 다음, Compare, Sync, Jobs로 시각적으로 관리하세요. Windows 또는 macOS에서 Apple 클라우드를 안전하게 백업하는 워크플로입니다."
keywords:
  - icloud drive backup
  - rclone icloud
  - rcloneview icloud
  - apple id 2fa rclone
  - icloud to google drive
  - icloud to s3
  - cloud to cloud backup
  - rclone terminal gui
  - rcloneview terminal
  - apple cloud migration
tags:
  - RcloneView
  - cloud-storage
  - backup
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# RcloneView + iCloud Drive: 내장 터미널로 안전하게 Apple 클라우드 백업하기

> iCloud Drive는 널리 쓰이지만, 엔터프라이즈급 백업 워크플로가 기본으로 제공되지는 않습니다. RcloneView는 내장 터미널로 iCloud를 추가한 다음 Compare, Sync, Jobs를 통해 모든 것을 시각적으로 관리할 수 있게 해 이 간극을 메워줍니다.

iCloud Drive를 Google Drive, S3, 또는 로컬 디스크로 안정적으로 백업하려면 **rclone의 iCloud 백엔드**와 **안전하고 반복 가능한 워크플로를 위한 GUI**, 이 두 가지가 필요합니다. RcloneView는 이 둘을 한곳에서 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud 백업이 까다로운 이유

- iCloud는 대화형 Apple ID 로그인과 2FA를 요구합니다.
- 기본 제공 도구는 클라우드 간 백업이나 스케줄링 기능이 없습니다.
- CLI 전용 설정은 강력하지만 잘못 구성하기 쉽습니다.

RcloneView는 필요한 CLI 단계를 내장 터미널에서 실행한 다음, 이후에는 모든 것을 GUI에서 관리할 수 있게 하여 이 문제를 해결합니다.

## 1단계: RcloneView 터미널 열기

내장 터미널을 사용하면 외부 셸을 열지 않고도 rclone 명령을 실행할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="RcloneView Terminal tab" class="img-large img-center" />

## 2단계: rclone config로 iCloud Drive 추가하기

iCloud는 Apple 2FA 때문에 현재 CLI 설정이 필요합니다. 터미널에서 `rclone config`를 실행하고 안내에 따르세요.

```bash
rclone config
```

주요 프롬프트는 다음과 같습니다.

- **Storage**: `iclouddrive` (또는 해당 번호)를 선택
- **Apple ID**: 사용 중인 iCloud 이메일
- **Password**: Apple ID 비밀번호
- **2FA code**: 신뢰할 수 있는 기기로 전송된 코드 입력

참고 가이드(스크린샷 및 전체 단계):  
[/support/howto/remote-storage-connection-settings/connect-using-cli/add-icloud-drive](/howto/remote-storage-connection-settings/connect-using-cli/add-icloud-drive)

## 3단계: RcloneView에서 새 리모트 확인하기

리모트가 생성되면 **Remote Manager**에 자동으로 표시됩니다.

<img src="/support/images/en/blog/remote-manager.png" alt="Remote Manager" class="img-large img-center" />

여기서 Explorer로 열어 일반적인 GUI 워크플로를 사용할 수 있습니다.

## 4단계: GUI 도구로 안전하게 백업하기

### 동기화 전에 Compare로 확인하기

**Compare**를 실행하면 동기화가 데이터를 변경하기 전에 어떤 것이 바뀔지 미리 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

가이드: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)

### iCloud를 다른 클라우드로 동기화하기

iCloud를 소스로, 백업 대상(Drive, S3, 외장 디스크)을 대상으로 선택하세요.

<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />

가이드: [/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)

### Job으로 저장하고 예약하기

반복 백업을 위해 Sync를 Job으로 저장하세요(Plus 라이선스).

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />
</div>

가이드: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs), [/support/howto/rcloneview-advanced/job-scheduling-and-execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## iCloud 백업 모범 사례

- 백업을 체계적으로 관리하려면 **전용 대상 폴더를 사용**하세요.
- 동기화 방향을 검증하기 위해 **드라이 런(dry run)으로 시작**하세요.
- 초기 설정 중에는 **Apple ID 2FA를 준비**해 두세요.
- 실패를 조기에 발견하려면 **Job History를 모니터링**하세요.

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history" class="img-large img-center" />

## 이 워크플로가 적합한 대상

- 시각적인 안전장치를 원하는 **초보자**.
- CLI의 유연함이 필요하지만 GUI 조작을 선호하는 **엔지니어**.
- 반복 가능하고 감사 가능한 백업 작업을 원하는 **IT 관리자**.

## 결론

rclone CLI와 시각적 제어 계층을 결합하면 iCloud Drive를 안전하고 반복적으로 백업할 수 있습니다. RcloneView 터미널을 한 번만 사용해 iCloud를 설정한 다음, 나머지는 모두 GUI에서 실행하여 속도, 안전성, 명확성을 확보하세요.

---
slug: backup-zoho-workdrive-google-drive-s3-rcloneview
title: "RcloneView로 Zoho WorkDrive를 Google Drive 또는 S3에 자동 백업하기"
authors:
  - tayson
description: "RcloneView의 WebDAV 연결을 사용하여 Zoho WorkDrive 데이터를 Google Drive, AWS S3 또는 외부 스토리지에 자동으로, 예약된 일정에 따라 백업하여 보호하세요."
keywords:
  - zoho workdrive backup
  - zoho to google drive
  - zoho workdrive sync
  - zoho workdrive export
  - backup zoho files
  - zoho workdrive to s3
  - zoho cloud backup tool
  - zoho workdrive migration
  - zoho workdrive rclone
  - zoho file backup automation
tags:
  - RcloneView
  - zoho
  - cloud-storage
  - backup
  - sync
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Zoho WorkDrive를 Google Drive 또는 S3에 자동 백업하기

> Zoho WorkDrive는 훌륭한 협업 도구이지만, 백업 계획은 준비되어 있으신가요? Zoho 구독이 만료되거나 데이터가 실수로 삭제되더라도, Google Drive나 S3에 독립적으로 백업해두면 아무것도 잃지 않을 수 있습니다.

Zoho WorkDrive는 CRM, 메일, 프로젝트, 공유 파일 스토리지를 하나의 플랫폼에서 제공하는 Zoho 생태계를 사용하는 기업들에게 인기가 있습니다. 하지만 Zoho는 WorkDrive 데이터를 다른 클라우드에 백업하는 네이티브 방법을 제공하지 않습니다. 재해 복구, 컴플라이언스 또는 마이그레이션 목적으로 독립적인 사본이 필요하다면, RcloneView가 WebDAV를 통해 WorkDrive에 연결하여 이 공백을 메워줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDrive를 백업해야 하는 이유

- **네이티브 크로스 클라우드 백업 부재** — Zoho는 S3 또는 GDrive로의 내장 내보내기 기능을 제공하지 않습니다.
- **실수로 인한 삭제 위험** — 팀원이 공유 파일을 삭제할 수 있습니다. 외부 백업이 없으면 복구가 불가능할 수 있습니다.
- **구독 의존성** — Zoho 플랜이 만료되거나 다운그레이드되면 파일 접근이 제한될 수 있습니다.
- **컴플라이언스 요구사항** — 일부 규제는 여러 독립적인 위치에 데이터를 저장하도록 요구합니다.
- **마이그레이션 유연성** — 언젠가 Zoho에서 Google Workspace나 Microsoft 365로 전환하기로 결정하더라도, 백업이 있으면 전환이 원활해집니다.

## WebDAV를 통해 Zoho WorkDrive 연결하기

Zoho WorkDrive는 WebDAV 접근을 지원하며, RcloneView는 이를 네이티브로 연결합니다:

1. RcloneView를 열고 **리모트 추가**를 클릭합니다.
2. 제공자 목록에서 **WebDAV**를 선택합니다.
3. Zoho WorkDrive WebDAV 세부 정보를 입력합니다:
   - **URL**: Zoho WorkDrive WebDAV 엔드포인트입니다.
   - **사용자 이름**: Zoho 이메일입니다.
   - **비밀번호**: Zoho 보안 설정에서 발급한 앱 전용 비밀번호입니다.
4. 저장하면 — 이제 WorkDrive 파일과 폴더를 탐색할 수 있습니다.

WebDAV 설정에 대한 자세한 내용은 [WebDAV 연결 가이드](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)를 참고하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Add Zoho WorkDrive via WebDAV" class="img-large img-center" />

## WorkDrive 파일 탐색하기

연결이 완료되면, 듀얼 패널 탐색기에서 전체 WorkDrive를 탐색할 수 있습니다:

- 팀 폴더, 개인 파일, 공유 공간을 확인합니다.
- 파일 크기를 확인하여 백업 스토리지 요구 사항을 추정합니다.
- 우선적으로 백업이 필요한 중요 폴더를 식별합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Zoho WorkDrive files" class="img-large img-center" />

## Google Drive로 백업하기

1. [OAuth 로그인](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)을 통해 **Google Drive를 두 번째 리모트로 추가**합니다.
2. **복사 작업 생성**: Zoho WorkDrive → Google Drive 폴더.
3. **초기 백업 실행** — 폴더 구조를 유지한 채 모든 파일이 전송됩니다.
4. 자동 증분 업데이트를 위해 [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)으로 매일 예약합니다.

## AWS S3로 백업하기

1. **S3를 리모트로 추가**합니다 ([S3 설정 가이드](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)).
2. **복사 작업 생성**: Zoho WorkDrive → S3 버킷.
3. 야간 실행을 위해 **예약**합니다.
4. 비용 절감을 위해 S3 수명 주기 정책을 사용하여 오래된 백업을 Glacier로 이동합니다.

## 백업 확인하기

각 백업 실행 후, [폴더 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)를 사용하여 완전성을 확인하세요:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Zoho WorkDrive backup" class="img-large img-center" />

## 자동화 및 모니터링

1. 비수기 시간대에 매일 실행되도록 **백업을 예약**합니다.
2. [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) 또는 [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)을 통해 **알림을 받습니다**.
3. **작업 기록을 검토**하여 모든 백업 실행을 추적합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Zoho WorkDrive backups" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Zoho backup job history" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. WebDAV를 통해 **Zoho WorkDrive를 추가**합니다.
3. **백업 대상을 추가**합니다 (Google Drive, S3, 외부 드라이브).
4. **복사 작업을 생성**하고 예약합니다.
5. 폴더 비교로 **확인**합니다.

Zoho WorkDrive 데이터를 백업 계획 없이 방치하지 마세요. RcloneView는 어떤 클라우드로든 자동화되고 검증된 백업을 제공하여, Zoho가 기본으로 제공하지 않는 마음의 평화를 드립니다.

---

**관련 가이드:**

- [WebDAV 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)
- [브라우저 기반 로그인(OAuth)으로 리모트 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [AWS S3 및 S3 호환 스토리지 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

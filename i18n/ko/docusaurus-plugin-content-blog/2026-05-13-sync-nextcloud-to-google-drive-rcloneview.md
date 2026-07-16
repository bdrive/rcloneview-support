---
slug: sync-nextcloud-to-google-drive-rcloneview
title: "Nextcloud를 Google Drive와 동기화 — RcloneView로 파일 마이그레이션 및 백업하기"
authors:
  - tayson
description: "RcloneView로 Nextcloud를 Google Drive와 동기화하는 방법을 알아보세요. 완전 자동화 지원과 함께 자체 호스팅 Nextcloud 서버의 파일을 Google Drive로 전송할 수 있습니다."
keywords:
  - Nextcloud to Google Drive sync
  - migrate Nextcloud Google Drive
  - RcloneView Nextcloud Google Drive
  - sync self-hosted cloud to Google Drive
  - Nextcloud WebDAV sync RcloneView
  - backup Nextcloud to Google Drive
  - cloud migration self-hosted RcloneView
  - transfer Nextcloud files Google Drive
  - Nextcloud Google Drive automated sync
  - RcloneView WebDAV cloud transfer
tags:
  - RcloneView
  - nextcloud
  - google-drive
  - cloud-to-cloud
  - migration
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nextcloud를 Google Drive와 동기화 — RcloneView로 파일 마이그레이션 및 백업하기

> Nextcloud는 데이터에 대한 완전한 제어권을 제공하며, RcloneView는 이중화, 마이그레이션 또는 팀 접근을 위해 Google Drive로의 다리 역할을 추가합니다.

Nextcloud는 조직이 스토리지 인프라를 직접 소유할 수 있게 해주지만, 자체 호스팅 데이터라도 오프사이트 사본이 필요합니다. RcloneView로 Nextcloud를 Google Drive와 동기화하면 스크립팅이나 수동 파일 전송 없이 주요 클라우드 플랫폼에 두 번째 사본을 만들 수 있습니다. 자체 호스팅 인프라에서 완전히 벗어나려는 경우든, Nextcloud를 기본 저장소로 유지하면서 Google Drive를 보조 백업으로 사용하는 경우든, RcloneView는 예약 지원이 포함된 시각적 동기화 인터페이스로 전송을 처리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 두 리모트 설정하기

동기화 작업을 생성하기 전에 두 개의 리모트를 구성해야 합니다. Google Drive의 경우 **Remote** 탭으로 이동하여 **New Remote**를 클릭하고 Google Drive를 선택하세요 — OAuth 인증을 위한 브라우저 창이 열리므로 API 키나 자격 증명을 수동으로 관리할 필요가 없습니다. Nextcloud의 경우 리모트 유형으로 **WebDAV**를 선택하세요. `https://your-nextcloud.example.com/remote.php/dav/files/username/` 형식으로 Nextcloud 서버 URL을 입력하고, Nextcloud 사용자 이름과 비밀번호(계정에 2단계 인증이 활성화되어 있다면 앱 비밀번호)를 함께 입력합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud WebDAV and Google Drive remotes in RcloneView" class="img-large img-center" />

두 리모트가 모두 저장되면 탐색기 패널에서 각각을 클릭하여 연결을 확인하세요. Nextcloud 연결이 성공하면 홈 디렉토리의 폴더 구조가 표시되고, Google Drive는 드라이브 루트를 표시합니다. Nextcloud에서 인증 오류가 발생하면 URL에 전체 WebDAV 경로가 포함되어 있는지 확인하세요 — `/remote.php/dav/files/username/`을 생략하는 것이 가장 흔한 설정 실수입니다.

## Nextcloud-Google Drive 동기화 작업 생성하기

두 리모트가 모두 확인되면 Home 탭에서 **Job Manager**를 열고 새 **Sync** 작업을 생성하세요. Step 1에서 Nextcloud 경로를 소스로, Google Drive 폴더를 대상으로 설정합니다. 동기화 방향이 단방향(소스가 대상만 수정)으로 설정되어 있는지 확인하세요 — 이렇게 하면 Nextcloud 파일을 변경하지 않고 Nextcloud 콘텐츠를 Google Drive에 미러링합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

Step 2에서는 서버의 업로드 용량에 따라 동시 전송 수를 구성하세요. 대규모 Nextcloud 라이브러리 — 예를 들어 200GB의 자산이 있는 디자인 팀의 공유 프로젝트 폴더 — 의 경우 동시 전송 수를 늘리면 Google Drive 대상의 초기 채우기 속도가 빨라집니다. 데이터 무결성이 중요한 경우 **checksum** 검증을 활성화하세요. 이는 파일 크기뿐만 아니라 콘텐츠 해시로 전송된 각 파일이 소스와 일치하는지 확인합니다.

## 시스템 폴더 및 메타데이터 필터링하기

Nextcloud 서버에는 Google Drive 미러에 속하지 않는 시스템 폴더, 썸네일 캐시, 임시 파일이 누적됩니다. 작업 마법사의 Step 3에서 이러한 경로를 제외하는 필터 규칙을 추가하세요. `.nextcloud/` 또는 `.thumbs/`와 같은 패턴은 대상에 가치를 더하지 않고 잡음만 추가하는 메타데이터 디렉토리를 건너뛰게 합니다. RcloneView의 이미지, 문서, 동영상에 대한 사전 정의 필터 프리셋을 사용하면 팀이 관심 있는 파일 유형으로만 동기화 범위를 좁힐 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

작업을 실제로 실행하기 전에 Job Manager의 **Dry Run** 옵션을 사용하여 예정된 모든 작업을 미리 확인하세요. 드라이 런은 실제 변경 없이 복사될 모든 파일을 나열합니다 — 대규모 초기 전송을 진행하기 전에 유용한 사전 점검입니다.

## 예약을 통한 동기화 자동화

드라이 런을 검증했다면 작업을 저장하고 — PLUS 라이선스가 있는 경우 — Step 4에서 예약을 연결하세요. 매일 밤 실행되는 크론 방식 예약을 사용하면 수동 개입 없이 Nextcloud의 매일 변경 사항으로 Google Drive 사본을 최신 상태로 유지할 수 있습니다. 동기화 완료 알림은 예약된 각 실행이 성공할 때마다 알려줍니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Nextcloud to Google Drive sync in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. New Remote를 통해 **Google Drive** 리모트(OAuth 브라우저 로그인)와 **Nextcloud** 리모트(WebDAV URL + 자격 증명)를 추가하세요.
3. Nextcloud 경로를 소스로, Google Drive 폴더를 대상으로 하는 **Sync** 작업을 생성하세요.
4. **Dry Run**을 실행하여 범위를 확인한 다음, 지속적인 자동 동기화를 위해 예약과 함께 저장하세요.

Nextcloud 데이터의 동기화된 Google Drive 사본을 유지하면 서버 장애나 실수로 인한 삭제가 영구적인 데이터 손실로 이어지지 않습니다.

---

**관련 가이드:**

- [RcloneView로 Nextcloud를 Backblaze B2와 동기화하기](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [RcloneView로 Nextcloud 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [RcloneView로 Seafile을 Google Drive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />

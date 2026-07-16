---
slug: backup-nextcloud-webdav-with-rcloneview
title: "RcloneView로 Nextcloud와 WebDAV 드라이브 백업하기: 시각적 동기화, 예약, 무결성 검사"
authors:
  - tayson
description: "RcloneView로 Nextcloud나 모든 WebDAV 드라이브를 보호하세요 - 리모트를 추가하고, 차이점을 미리 확인하고, 버전 관리된 백업을 예약하고, CLI 플래그를 외울 필요 없이 무결성을 검증합니다."
keywords:
  - nextcloud backup
  - webdav backup
  - rcloneview webdav
  - nextcloud to s3
  - webdav to google drive
  - cloud to cloud backup
  - rclone webdav gui
  - versioned backup
  - rclone check
  - cloud automation
tags:
  - webdav
  - nextcloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Nextcloud와 WebDAV 드라이브 백업하기: 시각적 동기화, 예약, 무결성 검사

> 명령줄 없이도 Nextcloud나 모든 WebDAV 드라이브를 Google Drive, S3/Wasabi 또는 다른 클라우드로 미러링하여 안전하게 보호하세요. RcloneView는 변경 사항을 미리보고, 작업을 예약하고, 무결성을 검증하여 백업을 신뢰할 수 있게 유지합니다.

Nextcloud와 다른 WebDAV 서비스는 팀 공유와 자체 호스팅 스토리지를 지원하지만, 여전히 오프사이트 백업이 필요합니다. RcloneView는 rclone 엔진을 GUI로 감싸서 WebDAV를 한 번만 추가하고, 대상 클라우드와 연결하고, Job Scheduler와 Compare로 검증된 백업을 자동화할 수 있게 해줍니다.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## RcloneView로 WebDAV/Nextcloud를 백업해야 하는 이유

- 덮어쓰기를 방지하기 위해 동기화 전에 **Compare**로 차이점을 시각화하세요.
- 동일한 WebDAV 리모트를 재사용하여 여러 대상(Drive, S3, Wasabi)으로 백업하세요.
- 반복 백업을 예약하고 Job History에 로그를 보관하세요.
- 데이터 무결성을 확인하기 위해 복사/동기화 흐름에서 체크섬 옵션을 활성화하세요(지원되는 경우).

## WebDAV/Nextcloud 리모트 연결하기

1. **`+ New Remote`**를 클릭 -> **WebDAV**를 선택합니다.
2. **URL**, **사용자 이름**, **비밀번호/앱 비밀번호**를 입력하고 알맞은 벤더 프리셋(예: Nextcloud)을 선택합니다.
3. `Nextcloud_Main`처럼 명확하게 이름을 지정하세요.  
   <img src="/support/images/en/blog/new-remote.png" alt="New remote wizard" class="img-medium img-center" />

참고 자료가 필요하신가요? WebDAV 가이드를 확인하세요: [WebDAV/Nextcloud 리모트 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav).

## 백업 대상 선택하기

- 쉬운 공유와 이력 관리를 위한 **Google Drive / Workspace**.
- 예측 가능한 비용과 라이프사이클 규칙을 위한 **S3 호환** 클라우드(Amazon S3, Wasabi, R2).
- 간단한 미러 복사를 위한 **다른 WebDAV**.

`+ New Remote`로 대상 리모트를 추가한 다음, **Explorer -> Browse**에서 둘을 나란히 엽니다.  
<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Side-by-side remotes" class="img-medium img-center" />

## 복사하기 전에 미리보기

- Explorer에서 원본(WebDAV)과 대상 폴더를 선택합니다.
- **Compare**를 클릭하여 누락되거나 더 최신이거나 동일한 항목을 강조 표시합니다.
- **`Copy ->`** 또는 **`<- Copy`**를 사용하여 필요한 항목만 이동하거나, 불필요한 파일을 안전하게 삭제하세요.

## Sync로 일회성 백업 실행하기

1. 원본/대상 폴더를 선택합니다.
2. **Sync**를 클릭하고 계획된 변경 사항을 확인하기 위해 먼저 **Dry run**을 활성화합니다.
3. Sync 옵션에서 서버가 스로틀링하는 경우 동시성을 적당히 유지하세요. 테스트 후 Settings에서 transfers/checkers를 높일 수 있습니다.
4. **Transfer**와 **Completed** 탭에서 진행 상황을 확인하고, API 제한 여부는 로그를 검토하세요.

## 반복 백업 예약하기 (한 번 설정하고 잊어버리기)

1. Sync 대화 상자에서 **Save to Jobs**를 클릭합니다(또는 **Job Manager -> Add Job**을 엽니다).
2. 일정(매일 또는 특정 요일)을 선택하고, 간단한 특정 시점 복사본을 원한다면 대상을 날짜별 폴더로 지정하세요.
3. 알림을 활성화하고 성공/실패 세부 정보는 **Job History**에서 확인하세요.  

- 가이드: [동기화 작업 만들기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), [작업 실행 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job), [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution), [전송 모니터링](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## 간단한 FAQ

**Nextcloud뿐만 아니라 모든 WebDAV에서 작동하나요?**  
네 - WebDAV를 선택하고 서비스에 맞는 벤더/프리셋 또는 "기타"를 선택하세요.

**여러 대상에 백업할 수 있나요?**  
네 - 동일한 WebDAV 원본을 여러 작업에서 재사용하세요(예: Nextcloud -> Drive와 Nextcloud -> Wasabi).

**앱이 잠겨 있어도 예약된 작업이 실행되나요?**  
작업은 설정된 대로 실행됩니다. App Lock은 UI 접근만 보호합니다([App Lock 활성화](/tutorials/enable-app-lock) 참조).

## 마무리

RcloneView는 WebDAV/Nextcloud 백업을 시각적이고 예측 가능하게 만들어줍니다: 리모트를 한 번만 추가하고, 변경 사항을 미리보고, 성능을 조정하고, 검증된 작업을 예약하세요. CLI 숙련도 없이도 신뢰할 수 있는 오프사이트 복사본으로 팀의 파일을 보호하세요.

<CloudSupportGrid />

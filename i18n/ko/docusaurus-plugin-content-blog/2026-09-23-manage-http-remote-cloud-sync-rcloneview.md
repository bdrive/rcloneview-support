---
slug: manage-http-remote-cloud-sync-rcloneview
title: "HTTP 리모트 스토리지 관리하기 — RcloneView로 파일 탐색 및 동기화하기"
authors:
  - alex
description: "읽기 전용 HTTP 파일 인덱스를 RcloneView에 연결하고 Google Drive, S3, Backblaze B2 등 90개 이상의 클라우드 스토리지 제공업체로 동기화하세요."
keywords:
  - HTTP 리모트 RcloneView
  - HTTP 파일 서버 동기화
  - 읽기 전용 HTTP 스토리지
  - HTTP를 클라우드로 동기화
  - HTTP 디렉터리 목록 rclone
  - HTTP에서 Google Drive로
  - HTTP에서 Amazon S3로
  - HTTP 파일 아카이브
  - RcloneView HTTP 연결
  - HTTP 리모트 탐색
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HTTP 리모트 스토리지 관리하기 — RcloneView로 파일 탐색 및 동기화하기

> RcloneView는 공개 HTTP 파일 인덱스를 탐색 가능한 리모트로 바꿔주므로, wget 명령 한 줄 없이도 그 내용을 Google Drive, S3, 그 밖의 90개 이상의 클라우드 제공업체로 가져올 수 있습니다.

수많은 데이터셋, 펌웨어 아카이브, 연구 미러, 내부 빌드 아티팩트가 여전히 API도 로그인도 없이 URL로 제공되는 단순한 HTTP 디렉터리 목록 뒤에 있습니다. 이런 소스에서 다운로드하려면 보통 curl이나 wget 루프를 스크립팅하고 실행 중에 디렉터리 구조가 바뀌지 않기를 바라야 합니다. RcloneView는 모든 HTTP 엔드포인트를 읽기 전용 리모트로 연결하여 클라우드 스토리지와 동일한 탐색기 패널에서 탐색할 수 있게 해주며, 필요한 것을 제대로 된 백업 대상으로 복사할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 HTTP 리모트 연결하기

**Remote** 탭을 열고 **New Remote**를 클릭한 다음 제공업체 목록에서 HTTP를 선택하세요. 탐색하려는 파일 인덱스의 기본 URL을 입력하면 RcloneView가 서버의 디렉터리 목록을 읽어와 일반 폴더 트리로 표시합니다. HTTP 리모트는 설계상 읽기 전용이므로 OAuth 흐름도 관리할 자격 증명도 없습니다: 파일 목록 조회, 탐색, 다운로드는 가능하지만 소스 서버에 업로드, 이름 변경, 삭제는 할 수 없습니다.

이 차이는 이 리모트 유형을 사용하는 방식에 중요합니다. 마운트 전용 도구와 달리 RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교를 제공하므로, HTTP 리모트는 쓰기 가능한 클라우드나 로컬 대상을 반대편에 두고 데이터를 끌어오는 소스로 활용할 때 가장 유용합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 새 HTTP 리모트를 추가하는 화면" class="img-large img-center" />

## HTTP 인덱스 탐색 및 다운로드하기

연결이 완료되면 HTTP 리모트는 RcloneView의 다중 패널 탐색기에서 다른 패널과 동일하게 동작합니다. 폴더 트리를 펼치고, 서버가 제공하는 경우 파일 크기와 수정 날짜를 확인하고, Ctrl+Click이나 Shift+Click으로 여러 파일이나 하위 폴더를 선택한 뒤 다운로드하세요. 인접 패널에서 Backblaze B2 버킷이나 Google Drive 폴더 같은 클라우드 대상을 열고 파일을 끌어다 놓아 전송을 시작할 수 있습니다.

이는 공개 데이터셋 아카이브를 미러링하거나, 벤더의 HTTP 배포 지점에서 펌웨어 이미지를 가져오거나, 디렉터리 목록만 제공하는 내부 빌드 서버의 스냅샷을 아카이브하는 팀에게 흔한 패턴입니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 HTTP 리모트에서 클라우드 스토리지로 파일을 복사하는 화면" class="img-large img-center" />

## HTTP 소스에서 반복적으로 가져오기 예약하기

HTTP 인덱스가 야간 빌드나 주간 데이터셋 갱신처럼 주기적으로 업데이트된다면, HTTP 리모트를 소스로, 클라우드 스토리지를 대상으로 하는 Job Manager 항목을 설정하세요. HTTP 디렉터리 목록이 노출하는 메타데이터의 양이 서버마다 다를 수 있으므로, 실제 전송 전에 파일 매칭이 예상대로 동작하는지 확인하기 위해 먼저 **Dry Run**을 실행하여 복사될 파일을 정확히 확인하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 HTTP 리모트로부터 파일을 가져오는 반복 작업을 예약하는 화면" class="img-large img-center" />

**PLUS 라이선스**를 사용하면 작업에 crontab 방식의 일정을 연결하여 HTTP 서버에 게시되는 새 파일이 해당 일정에 따라 클라우드 아카이브로 전송되도록 할 수 있으며, 이후 **Job History** 탭에서 전송 건수를 확인하고 소스 서버가 더 이상 제공하지 않는 파일을 찾아낼 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Remote** > **New Remote**를 열고 제공업체 목록에서 HTTP를 선택합니다.
3. 디렉터리 목록의 기본 URL을 입력하고 리모트를 저장합니다.
4. 한쪽 패널에 HTTP 리모트를, 다른 쪽 패널에 클라우드 대상을 엽니다.
5. **Job Manager**를 사용해 동기화 작업을 구성하고, 첫 실제 가져오기 전에 Dry Run을 실행합니다.

HTTP 소스를 연결하고 나면, 클라우드 아카이브로 파일을 가져오는 작업이 매번 기억해서 다시 실행해야 하는 일회성 스크립트가 아니라 반복 가능하고 추적 가능한 작업이 됩니다.

---

**관련 가이드:**

- [Connect Any WebDAV Server to RcloneView — Sync with Google Drive, S3, and 90+ Clouds](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Connect Any SFTP Server to RcloneView — Sync Remote Servers with Cloud Storage](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Manage FTP Server Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

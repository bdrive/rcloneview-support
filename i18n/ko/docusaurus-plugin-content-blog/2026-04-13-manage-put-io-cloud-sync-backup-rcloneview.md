---
slug: manage-put-io-cloud-sync-backup-rcloneview
title: "Put.io 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - tayson
description: "OAuth를 사용해 Put.io를 RcloneView에 연결하고, 클라우드 파일을 탐색하며, 미디어 콘텐츠를 다른 클라우드 제공업체와 손쉽게 동기화하는 방법을 알아보세요."
keywords:
  - put.io RcloneView
  - put.io cloud sync
  - put.io backup
  - manage put.io files
  - put.io rclone GUI
  - put.io media management
  - cloud file transfer put.io
  - put.io sync cloud
tags:
  - putio
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Put.io 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> Put.io는 가져온 콘텐츠를 클라우드에 직접 저장하는 클라우드 토렌트 및 다운로드 서비스입니다 — RcloneView를 사용하면 이러한 파일을 손쉽게 탐색, 동기화, 백업할 수 있습니다.

Put.io를 사용하면 토렌트, 직접 링크, 프리미엄 파일 호스트 콘텐츠를 클라우드 스토리지로 바로 가져올 수 있어 미디어 애호가들에게 인기 있는 선택지입니다. 파일이 Put.io에 저장되면, 이를 로컬 드라이브나 다른 클라우드, 개인 아카이브로 옮길 안정적인 방법이 필요합니다. RcloneView는 OAuth 브라우저 로그인을 사용해 Put.io에 연결하며, 명령줄을 사용하지 않고도 전송을 관리할 수 있는 완전한 GUI를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Put.io를 RcloneView에 연결하기

RcloneView를 열고 **리모트 관리자(Remote Manager)**로 이동합니다. **New Remote**를 클릭하고 제공업체 목록을 스크롤하여 **Put.io**를 선택합니다. RcloneView가 OAuth 인증을 위해 자동으로 브라우저를 엽니다 — Put.io 계정으로 로그인하고 접근 권한을 부여하세요. API 키를 수동으로 복사할 필요가 없으며, OAuth 흐름이 모든 것을 처리합니다.

인증이 완료되면 리모트 관리자에 리모트가 표시됩니다. **Open**을 클릭하여 파일 탐색기를 실행하고 Put.io 스토리지를 탐색하세요. 저장된 파일, 토렌트나 다운로드 작업별로 정리된 폴더, 그리고 직접 만든 디렉토리를 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Put.io remote in RcloneView" class="img-large img-center" />

## Put.io 파일 탐색 및 관리

RcloneView 파일 탐색기는 익숙한 트리 및 목록 보기 형태로 Put.io 콘텐츠를 표시합니다. 폴더를 탐색하고, 여러 파일을 선택하고, 패널에서 바로 전송을 시작할 수 있습니다. 영화, TV 시리즈, 오디오 파일 등 대용량 미디어 라이브러리가 있다면 썸네일 보기를 통해 이미지 그리드로 콘텐츠를 빠르게 식별할 수 있습니다.

Put.io와 다른 클라우드(예: Google Drive나 Backblaze B2) 간에 파일을 복사하거나 이동하려면, 대상 리모트를 가리키는 두 번째 패널을 엽니다. Put.io 패널에서 파일을 선택하고 마우스 오른쪽 버튼을 클릭한 뒤 **Copy** 또는 **Move**를 선택하세요. 클라우드 간 작업을 수행할 때 RcloneView는 로컬 컴퓨터에 먼저 다운로드하지 않고 전송을 처리합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Put.io to another provider" class="img-large img-center" />

## Put.io용 동기화 작업 설정하기

정기적인 백업이나 Put.io에서 장기 보관 스토리지로의 단방향 동기화에는 수동 전송보다 **작업(Job)** 기능이 더 안정적입니다. **Jobs**로 이동하여 **New Job**을 클릭하고 소스로 Put.io 리모트를 선택합니다. 대상은 구성된 다른 리모트로 설정하세요 — Backblaze B2는 저렴한 미디어 아카이빙에 흔히 사용되는 선택지입니다.

작업 구성 단계에서 **Dry Run**을 활성화하면 실제로 실행하기 전에 어떤 파일이 전송될지 미리 볼 수 있습니다. Put.io 라이브러리가 크고 동기화 범위를 확인하고 싶을 때 유용합니다. 검토가 끝나면 Dry Run을 비활성화하고 작업을 실행하세요. RcloneView는 **Job History** 탭에서 파일 수, 속도, 상태와 함께 각 전송 기록을 남깁니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Put.io sync job in RcloneView" class="img-large img-center" />

## 활용 사례: 미디어 콘텐츠 워크플로우

Put.io 사용자는 대체로 몇 가지 패턴으로 나뉩니다. 가져온 미디어를 콜드 스토리지에 아카이빙하거나, 콘텐츠를 홈 서버에 미러링하거나, 타사 플레이어로 스트리밍하기 위해 Google Drive와 동기화하는 경우입니다. RcloneView는 이 모든 경우를 지원합니다. 서로 다른 Put.io 하위 디렉토리마다 별도의 작업을 만들 수 있으며 — 영화용 작업 하나, TV 프로그램용 작업 하나 — PLUS 라이선스로 각각 독립적으로 예약할 수 있습니다.

이미 복사된 항목이 무엇인지 확실하지 않을 때는 **폴더 비교(Folder Compare)** 기능이 유용합니다. Put.io 폴더와 대상 폴더를 나란히 열면 RcloneView가 차이점을 강조 표시하여 누락된 항목만 전송할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Put.io transfer logs in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote Manager**를 열고 **New Remote**를 클릭한 뒤 **Put.io**를 선택합니다.
3. OAuth 브라우저 로그인을 완료하여 접근을 승인합니다.
4. 파일 탐색기에서 Put.io 리모트를 열고 원하는 대상으로 동기화 작업을 구성합니다.

RcloneView는 Put.io를 수동적인 다운로드 저장소에서 클라우드 스토리지 워크플로우의 능동적인 일부로 바꿔줍니다.

---

**관련 가이드:**

- [RcloneView로 pCloud를 AWS S3에 백업하기](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [RcloneView를 이용한 클라우드 간 마이그레이션](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [작업 기록 및 전송 로그 모니터링](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />

---
slug: manage-mailru-cloud-sync-rcloneview
title: "Mail.ru 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - tayson
description: "RcloneView로 Mail.ru 클라우드 스토리지를 연결하고 관리하는 방법을 알아보세요. CLI 명령 없이 깔끔한 GUI로 Mail.ru 파일을 동기화, 백업, 전송할 수 있습니다."
keywords:
  - Mail.ru cloud storage RcloneView
  - Mail.ru cloud sync GUI
  - manage Mail.ru files
  - Mail.ru backup tool
  - rclone Mail.ru GUI
  - Mail.ru file transfer
  - cloud storage management
  - Mail.ru sync desktop app
tags:
  - RcloneView
  - mailru
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mail.ru 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> Mail.ru 클라우드를 RcloneView에 연결하여 파일을 관리하고, 자동 백업을 실행하며, 여러 제공업체 간 데이터를 동기화하세요 — 모두 하나의 데스크톱 GUI에서 가능합니다.

Mail.ru 클라우드는 넉넉한 무료 저장 공간을 제공하며 러시아 및 인접 국가에서 널리 사용되고 있습니다. 적절한 도구 없이는 효율적으로 관리하기가 쉽지 않습니다. RcloneView는 rclone의 검증된 Mail.ru 백엔드를 통해 Mail.ru 클라우드에 연결하고, 익숙한 2단 탐색기 화면으로 파일을 보여줌으로써 이러한 격차를 해소합니다. 명령줄 지식이 전혀 필요하지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 Mail.ru 클라우드를 리모트로 추가하기

RcloneView에서 Mail.ru를 설정하는 데는 2분도 채 걸리지 않습니다. 메뉴 바에서 **Remote 탭**을 열고 **New Remote**를 클릭합니다. 제공업체 목록을 스크롤하여 Mail.ru Cloud를 찾거나(또는 검색 필드에 "mail"을 입력) Mail.ru 계정 자격 증명(사용자 이름과 비밀번호)을 입력합니다. RcloneView는 이 정보를 내장된 rclone 인스턴스에 전달하며, rclone이 Mail.ru API에 대한 인증을 처리합니다.

저장이 완료되면 해당 리모트가 즉시 탐색기 패널에 나타납니다. 로컬 드라이브와 마찬가지로 폴더를 탐색하고, 썸네일을 미리 보고, 파일 메타데이터를 확인하고, 폴더 트리를 탐색할 수 있습니다. 경로 표시줄의 브레드크럼을 클릭할 수 있어 깊이 중첩된 디렉터리로도 빠르게 이동할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Mail.ru Cloud as a new remote in RcloneView" class="img-large img-center" />

## Mail.ru 파일을 다른 클라우드나 로컬 드라이브로 동기화하기

RcloneView의 가장 강력한 기능 중 하나는 원활한 클라우드 간 전송입니다. Mail.ru 클라우드에서 Google Drive, Backblaze B2, 또는 로컬 폴더로 파일을 복사해야 한다면, 듀얼 패널 탐색기에서 두 위치를 나란히 엽니다. 한쪽 패널에서 다른 패널로 파일을 드래그하거나, 우클릭 후 **Copy**를 선택하고 대상 패널에서 **Paste**를 선택합니다.

반복적인 백업을 위해서는 내장된 Job Manager를 사용하세요. Mail.ru를 소스로, 원하는 대상을 지정하여 Sync 또는 Copy 작업을 정의합니다. 전송 동시성을 구성하고 체크섬 검증을 활성화하여 전송 중 손상된 파일을 확인할 수 있습니다. PLUS 라이선스를 사용하면 crontab 방식의 타이머로 이러한 작업을 예약하여 수동 개입 없이 백업이 자동으로 실행되도록 할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Mail.ru sync job in RcloneView Job Manager" class="img-large img-center" />

## 전송 모니터링 및 기록 확인하기

RcloneView 창 하단의 **Transferring** 탭에는 진행 중인 모든 작업의 실시간 진행 상황(파일 수, 전송된 바이트, 현재 속도)이 표시됩니다. 일시 정지하거나 설정을 조정해야 할 경우 언제든지 실행 중인 작업을 취소할 수 있습니다.

각 작업이 완료되면 **Job History** 탭에 전체 기록(시작 시간, 소요 시간, 전송된 총 용량, 최종 상태(Completed, Errored, Canceled))이 보존됩니다. Mail.ru에 클라이언트 산출물을 저장하는 사진 사업체의 경우, 이 기록은 신뢰할 수 있는 감사 추적을 제공하며 밤사이 백업 작업이 실패했는지 쉽게 확인할 수 있게 해줍니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing Mail.ru sync results" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Remote 탭 → New Remote**를 열고 Mail.ru Cloud를 선택한 후 자격 증명을 입력합니다.
3. 탐색기 패널에서 Mail.ru 파일을 탐색하고 원하는 대상으로 항목을 드래그합니다.
4. 자동화된 반복 백업을 위해 **Job Manager**에서 Sync 작업을 생성합니다.

RcloneView를 사용하면 Mail.ru 클라우드가 터미널 없이도 멀티 클라우드 워크플로에 매끄럽게 통합됩니다.

---

**관련 가이드:**

- [RcloneView로 Yandex Disk 클라우드 스토리지 관리하기](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Mail.ru 클라우드를 Google Drive 및 S3로 전송하기](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [RcloneView로 여러 클라우드 계정 관리하기](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />

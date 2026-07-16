---
slug: manage-ftp-server-cloud-sync-backup-rcloneview
title: "FTP 서버 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - robin
description: "RcloneView로 FTP 서버를 연결하고 관리하세요. FTP 파일을 Google Drive, S3, Backblaze B2 및 90개 이상의 클라우드 스토리지 제공업체로 동기화하고 백업할 수 있습니다."
keywords:
  - FTP server management
  - FTP cloud sync
  - FTP backup to cloud
  - RcloneView FTP
  - FTP file transfer
  - sync FTP to Google Drive
  - FTP to Amazon S3
  - FTP cloud backup tool
  - manage FTP storage
  - FTP rclone GUI
tags:
  - RcloneView
  - ftp
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# FTP 서버 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> RcloneView는 FTP 서버를 완전한 리모트로 전환하여, Google Drive, S3 및 90개 이상의 다른 클라우드 제공업체와 함께 시각적으로 파일을 탐색, 동기화, 백업할 수 있게 해줍니다.

FTP는 여전히 수많은 웹 호스팅 환경, 레거시 미디어 아카이브, 내부 파일 배포 서버의 근간을 이루고 있습니다. FTP 파일을 관리하려면 보통 터미널 세션, 수동 디렉토리 목록 확인, 직접 작성한 스크립트를 번갈아 사용해야 합니다. RcloneView는 FTP 서버를 다른 클라우드 스토리지 계정과 똑같이 취급하므로, 명령줄을 사용하지 않고도 파일을 탐색하고 전송하고 백업할 수 있는 일관된 시각적 인터페이스를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 FTP 서버 연결하기

**Remote** 탭을 열고 **New Remote**를 클릭합니다. 제공업체 목록에서 FTP를 선택하고 서버의 호스트명 또는 IP 주소, 포트, 사용자 이름, 비밀번호를 입력합니다. 서버가 FTPS(FTP over TLS)를 지원한다면, 고급 옵션에서 이를 활성화하여 암호화된 연결을 사용할 수 있습니다.

저장하면 FTP 리모트가 클라우드 계정과 함께 탐색기 패널에 나타납니다. 폴더 트리를 펼치고 하위 디렉토리를 탐색하며, 파일 이름, 크기, 수정 타임스탬프를 확인할 수 있습니다 — Amazon S3나 Dropbox에서와 동일한 경험입니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new FTP remote in RcloneView" class="img-large img-center" />

## FTP 파일을 시각적으로 탐색하고 전송하기

RcloneView의 멀티 패널 탐색기는 FTP 관리를 효율적으로 만들어주는 핵심 기능입니다. 한 패널에서 FTP 리모트를 열고, 다른 패널에서 클라우드 대상 — Backblaze B2 버킷, Google Drive 폴더, 또는 Amazon S3 접두사 — 를 엽니다. 패널 사이에 파일을 드래그 앤 드롭하면 복사가 시작됩니다. 여러 자산을 한꺼번에 이동할 때는 Ctrl+클릭 또는 Shift+클릭으로 다중 선택을 사용하세요. 마우스 오른쪽 버튼 클릭으로 이름 변경, 삭제, 폴더 생성, 폴더 크기 확인이 가능합니다.

FTP 서버에 클라이언트 파일을 보관하며 이를 객체 스토리지로 아카이빙해야 하는 웹 에이전시나, FTP 호스트에서 여러 클라우드 CDN 제공업체로 자산을 배포하는 미디어 팀에게 이 나란히 보기 방식은 오류가 발생하기 쉬운 수동 워크플로를 대체합니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from FTP remote to cloud storage in RcloneView" class="img-large img-center" />

## FTP와 클라우드 스토리지 간 동기화 작업 생성하기

반복적인 워크플로를 위해 RcloneView의 **Job Manager**를 사용하면 FTP 서버와 원하는 클라우드 대상 간의 동기화 또는 복사 작업을 설정할 수 있습니다. 4단계 마법사는 원본 및 대상 선택, 고급 설정(동시 전송, 체크섬 검증), 필터 규칙(파일 유형, 크기 제한, 기간 임계값)을 포함합니다.

먼저 **Dry Run**을 실행해 보세요 — 실제로 변경을 가하지 않고 복사되거나 삭제될 모든 파일을 미리 보여줍니다. 이는 디렉토리 구조가 복잡하거나 의도치 않은 덮어쓰기가 문제를 일으킬 수 있는 FTP 원본에 특히 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing a sync job from FTP to cloud storage in RcloneView" class="img-large img-center" />

각 실행 후, **Job History** 탭에서 실행 시간, 전송 속도, 파일 수, 최종 상태를 확인할 수 있어 무엇이 언제 이동했는지 명확한 감사 기록을 제공합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing FTP to cloud backup results in RcloneView" class="img-large img-center" />

**PLUS 라이선스**를 사용하면 FTP 동기화 작업에 cron 방식의 일정을 연결할 수 있습니다 — 매일 밤 새 업로드를 백업하거나 매주 클라우드 스토리지로 동기화하는 등, 세션을 열어둘 필요 없이 자동으로 처리됩니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Remote** > **New Remote**를 열고 제공업체 목록에서 FTP를 선택합니다.
3. 서버 호스트, 포트, 사용자 이름, 비밀번호를 입력한 다음 리모트를 저장합니다.
4. 한 패널에서 FTP 리모트를 열고 다른 패널에서 클라우드 대상을 엽니다.
5. **Job Manager**를 사용해 동기화 작업을 설정하고, 첫 실제 전송 전에 Dry Run을 실행합니다.

FTP 서버를 RcloneView에 연결하면 더 이상 동기화 스크립트를 작성할 필요가 없습니다 — 모든 전송이 하나의 인터페이스에서 추적되고, 반복 가능하며, 감사 가능합니다.

---

**관련 가이드:**

- [SFTP 서버 스토리지 관리 — RcloneView로 클라우드 동기화하기](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [RcloneView로 FTP 서버를 클라우드 스토리지로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [WebDAV 서버 연결 및 RcloneView로 클라우드 동기화하기](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)

<CloudSupportGrid />

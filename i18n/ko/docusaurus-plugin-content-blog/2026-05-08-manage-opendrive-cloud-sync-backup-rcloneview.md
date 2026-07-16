---
slug: manage-opendrive-cloud-sync-backup-rcloneview
title: "OpenDrive 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - jay
description: "OpenDrive를 RcloneView에 연결하여 파일을 관리하고, 백업을 자동화하며, 명령줄 지식이 전혀 필요 없는 GUI로 클라우드 간 데이터를 동기화하세요."
keywords:
  - OpenDrive cloud storage RcloneView
  - OpenDrive sync GUI
  - manage OpenDrive files
  - OpenDrive backup tool
  - rclone OpenDrive GUI
  - OpenDrive file transfer
  - cloud storage management
  - OpenDrive desktop app
tags:
  - RcloneView
  - opendrive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDrive 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> OpenDrive를 RcloneView에 연결하여 드래그 앤 드롭 파일 관리, 예약 백업, 클라우드 간 전송까지 명령줄 없이 처리하세요.

OpenDrive는 파일 공유와 협업에 중점을 둔 개인용 및 비즈니스용 플랜을 제공하는 클라우드 스토리지 플랫폼입니다. 웹 인터페이스는 가벼운 용도로는 충분하지만, 대용량 데이터셋을 이동하거나 백업을 자동화하거나 다른 클라우드와 동기화해야 하는 파워 유저에게는 더 강력한 도구가 필요합니다. rclone의 OpenDrive 백엔드를 기반으로 하는 RcloneView는 OpenDrive 계정에 완전한 기능을 갖춘 GUI를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OpenDrive를 RcloneView에 연결하기

**Remote 탭 → New Remote**로 이동하여 제공업체 목록에서 OpenDrive를 선택하세요. OAuth를 통해 인증해야 하며, RcloneView가 브라우저 창을 열어 OpenDrive 계정으로 로그인하고 액세스 권한을 부여할 수 있게 해줍니다. 인증이 완료되면 리모트가 저장되어 즉시 탐색기 패널에서 사용할 수 있습니다.

탐색기에는 이름, 크기, 최종 수정일, 유형 등 전체 메타데이터와 함께 OpenDrive 폴더 및 파일이 표시됩니다. 왼쪽의 폴더 트리를 통해 전체 스토리지 계층 구조를 탐색할 수 있으며, 오른쪽의 파일 목록은 정렬 가능한 열과 함께 선택한 폴더의 내용을 보여줍니다. 이미지가 많은 폴더의 경우 썸네일 보기를 사용할 수 있어 사진이나 자산 라이브러리에서 원하는 파일을 쉽게 찾을 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OpenDrive as a new remote in RcloneView" class="img-large img-center" />

## OpenDrive 파일을 외부 드라이브 또는 다른 클라우드로 백업하기

클라이언트 프로젝트 파일을 OpenDrive에 저장하는 소규모 디자인 에이전시의 경우, 다른 곳에 두 번째 사본을 보관하는 것이 매우 중요합니다. RcloneView를 사용하면 OpenDrive에서 Amazon S3, Backblaze B2, 또는 로컬 외장 드라이브로 백업 작업을 손쉽게 설정할 수 있습니다. 한쪽 패널에서 소스(OpenDrive)를 열고 다른 쪽 패널에서 대상을 연 다음, Job Manager를 사용하여 동기화 작업을 구성하세요.

4단계 작업 마법사를 통해 소스 및 대상 경로를 설정하고, 전송 동시성을 구성하며, 체크섬 검증을 활성화하고, 파일 필터(임시 파일 제외 또는 기간별 제한)를 설정할 수 있습니다. PLUS 라이선스를 사용하면 작업을 매일 밤 또는 원하는 crontab 일정에 따라 실행하도록 예약할 수 있어, 수동 작업 없이도 항상 OpenDrive 데이터를 백업된 상태로 유지할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an OpenDrive backup job in RcloneView" class="img-large img-center" />

## 동기화 전 드라이 런 실행하기

대규모 동기화 작업을 실행하기 전에 RcloneView의 **Dry Run** 모드를 사용하세요. 이 모드는 동기화를 시뮬레이션하여 실제로 변경 사항을 적용하지 않고도 어떤 파일이 복사, 업데이트 또는 삭제될지 정확히 보여줍니다. 대규모 OpenDrive 라이브러리를 새 제공업체로 마이그레이션하는 팀에게 드라이 런은 예기치 않은 파일 삭제를 사전에 발견하는 데 매우 유용합니다.

드라이 런 결과는 Transferring 탭과 Log 탭에 표시되어 계획된 작업의 전체적인 그림을 파악할 수 있습니다. 결과에 만족한다면 클릭 한 번으로 실제 동기화를 실행하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for an OpenDrive sync job" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote 탭 → New Remote**로 이동하여 OpenDrive를 선택하고 OAuth 로그인을 완료하세요.
3. 듀얼 패널 탐색기에서 OpenDrive 파일을 탐색하고 관리하세요.
4. Job Manager를 사용하여 원하는 대상으로 예약 백업을 생성하세요.

RcloneView는 Google Drive, S3 및 사용 중인 다른 모든 제공업체와 마찬가지로 OpenDrive를 클라우드 워크플로우의 핵심 구성 요소로 만들어 줍니다.

---

**관련 가이드:**

- [RcloneView로 OpenDrive 파일을 AWS S3에 백업하기](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [RcloneView로 여러 클라우드 계정 관리하기](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [RcloneView로 매일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />

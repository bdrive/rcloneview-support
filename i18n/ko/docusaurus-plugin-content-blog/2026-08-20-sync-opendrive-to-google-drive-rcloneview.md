---
slug: sync-opendrive-to-google-drive-rcloneview
title: "OpenDrive를 Google Drive로 동기화하기 — RcloneView로 클라우드 백업하기"
authors:
  - kai
description: "RcloneView로 OpenDrive 폴더를 Google Drive로 동기화하고, Folder Compare와 예약 작업을 활용해 두 클라우드를 정확히 맞춰 관리하세요."
keywords:
  - OpenDrive를 Google Drive로 동기화
  - OpenDrive Google Drive 백업
  - RcloneView OpenDrive 동기화
  - OpenDrive 클라우드 백업
  - 클라우드 간 동기화
  - OpenDrive Google Drive RcloneView
  - 멀티 클라우드 백업 도구
  - OpenDrive 폴더 비교
tags:
  - RcloneView
  - opendrive
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDrive를 Google Drive로 동기화하기 — RcloneView로 클라우드 백업하기

> 로컬 디스크에 먼저 다운로드하지 않고도 OpenDrive 폴더를 Google Drive에 그대로 미러링하세요.

작업 파일은 OpenDrive에 저장하면서 클라이언트나 파트너와는 Google Drive로 협업하는 팀은 보통 파일을 수동으로 주고받게 되고, 어느 한쪽이 변경되는 순간 동기화가 어긋나기 시작합니다. RcloneView는 두 리모트를 한 창에서 연결하여 직접 동기화하므로, 전송이 로컬 폴더를 거치지 않고 클라우드 간(cloud-to-cloud)으로 이루어집니다. 마운트 전용 도구와 달리 RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교 기능을 함께 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OpenDrive와 Google Drive 리모트 설정하기

먼저 Remote Manager에서 OpenDrive를 리모트로 추가한 다음, 브라우저 기반 OAuth 로그인으로 Google Drive를 추가하세요 — 설정을 마치면 두 리모트가 File Explorer에 각각 별도의 탭으로 나타나므로, 동기화 작업을 만들기 전에 양쪽을 독립적으로 살펴볼 수 있습니다. 동기화 마법사로 넘어가기 전에 두 리모트에서 모두 폴더 목록을 불러올 수 있는지 확인하세요 — 탐색에 실패하는 리모트는 동기화 도중에도 실패하므로, 미리 발견하는 편이 훨씬 수월합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## 단방향 동기화 작업 구성하기

동기화 마법사에서 OpenDrive 폴더를 소스로, 대상 Google Drive 폴더를 대상지로 선택한 다음 단방향 동기화를 선택하여 OpenDrive가 기준이 되도록 하세요. Advanced Settings에서 파일 전송 수와 동일성 검사기 수를 폴더 크기에 맞게 설정하세요 — 기본값이 대부분의 경우에 적합하지만, 수만 개의 작은 파일이 있는 폴더는 OpenDrive가 메타데이터 요청에 느리게 응답할 경우 동일성 검사기 수를 낮추는 편이 유리합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from OpenDrive to Google Drive in RcloneView" class="img-large img-center" />

첫 실제 동기화 전에 Dry Run을 실행하여 어떤 파일이 복사될지 미리 확인하세요 — 특히 이미 존재하는 OpenDrive 폴더를 처음으로 작업 대상으로 지정할 때, 의도하지 않은 전체 폴더 전송을 사전에 방지하는 데 유용합니다.

## Folder Compare로 결과 확인하기

첫 동기화가 완료되면 Folder Compare를 열고 같은 두 폴더를 지정하여 양쪽이 일치하는지 확인하세요. Folder Compare는 한쪽에만 존재하거나 크기가 다른 파일을 강조해서 보여주므로, Job History를 뒤져가며 오류를 찾는 것보다 부분적인 전송 누락을 훨씬 빠르게 발견할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and Google Drive folders after sync in RcloneView" class="img-large img-center" />

## 지속적인 동기화 예약하기

초기 동기화를 확인했다면 Job Manager에 작업을 저장하고 crontab 형식의 예약을 설정하세요 — PLUS 라이선스에서 사용 가능하며, 이를 통해 매번 수동으로 실행하지 않아도 OpenDrive의 변경 사항이 일정한 주기로 Google Drive에 반영됩니다. Job History는 전송 크기와 파일 수를 포함해 예약된 모든 실행 기록을 남기므로, 예약이 실제로 정상 작동하고 있는지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring OpenDrive to Google Drive sync job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote Manager에서 OpenDrive와 Google Drive를 모두 리모트로 추가하세요.
3. Dry Run을 먼저 실행한 뒤 실제로 단방향 동기화 작업을 실행하세요.
4. Folder Compare로 결과를 확인하고, 필요하다면 예약을 설정하여 작업을 저장해 지속적인 백업으로 활용하세요.

두 리모트를 나란히 볼 수 있게 되면, OpenDrive와 Google Drive를 맞춰 유지하는 일은 수동 작업이 아니라 일상적인 동기화 작업이 됩니다.

---

**관련 가이드:**

- [RcloneView로 OpenDrive 파일과 클라우드 동기화 관리하기](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [RcloneView로 OpenDrive를 AWS S3와 외부 스토리지로 백업하기](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [RcloneView로 Box를 Google Drive로 동기화하기](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />

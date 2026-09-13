---
slug: migrate-sftp-to-google-drive-rcloneview
title: "SFTP에서 Google Drive로 마이그레이션하기 — RcloneView로 파일 전송하기"
authors:
  - kai
description: "RcloneView의 듀얼 패널 탐색기, 드라이 런 미리보기, 예약 동기화 작업을 사용해 SFTP 서버에서 Google Drive로 파일을 마이그레이션하세요."
keywords:
  - RcloneView
  - SFTP를 Google Drive로 마이그레이션
  - SFTP에서 클라우드로 마이그레이션
  - SFTP 파일 전송
  - SSH 파일을 클라우드로 전송
  - 클라우드 스토리지 마이그레이션
  - SFTP 클라이언트 GUI
  - Google Drive 백업
  - 안전한 파일 전송 도구
  - SFTP 서버 폐기
tags:
  - RcloneView
  - sftp
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SFTP에서 Google Drive로 마이그레이션하기 — RcloneView로 파일 전송하기

> 오래된 SFTP 서버를 파일 손실 없이 은퇴시키세요 — RcloneView로 모든 것을 Google Drive로 바로 옮길 수 있습니다.

많은 팀이 여전히 파일 전달용으로 내부 SFTP 서버를 운영하지만, 해당 서버의 SSH 자격 증명, 방화벽 규칙, 디스크 공간을 유지하는 비용은 Google Drive에 스토리지와 공유를 맡기는 것에 비해 비싸집니다. RcloneView는 하나의 창에서 SFTP 호스트와 Google Drive에 동시에 연결하므로, 터미널을 건드리지 않고도 둘 사이를 탐색, 비교, 전송할 수 있습니다. 하드웨어를 완전히 폐기하기 전에 레거시 파일 서버를 마이그레이션하려는 소규모 IT 팀에게 실용적인 첫걸음입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTP 서버와 Google Drive를 나란히 연결하기

먼저 SFTP 리모트를 추가하세요: New Remote 마법사에서 호스트 주소와 SSH 자격 증명을 입력하며, 기본적으로 포트 22를 사용합니다. API 키 입력 없이 OAuth 브라우저 로그인을 통해 Google Drive를 두 번째 리모트로 추가하세요. RcloneView의 분할 패널 레이아웃을 사용해 두 리모트를 별도의 Explorer 패널에서 열면 양쪽의 전체 폴더 구조를 한 번에 볼 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an SFTP remote and a Google Drive remote in RcloneView" class="img-large img-center" />

RcloneView는 한 창에서 90개 이상의 공급자를 마운트하고 동기화할 수 있으며, Windows, macOS, Linux를 모두 지원하므로, SFTP 서버가 로컬 네트워크에 있든 점프 호스트를 통해서만 접근 가능하든 동일한 설정이 그대로 작동합니다.

## 옮기기 전에 마이그레이션 미리보기

수년간 쌓인 파일을 옮기기 전에, SFTP 루트와 대상 Google Drive 폴더 사이에서 Folder Compare를 실행해 대상 쪽에 정확히 무엇이 빠져 있는지 확인하세요. 그런 다음 전송을 Sync 작업으로 구성하고 Dry Run을 사용해 복사를 시뮬레이션하세요 — RcloneView는 실제로 아무것도 기록하지 않은 채 이동할 모든 파일과 생성될 모든 폴더를 나열해 확인할 수 있게 해줍니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing SFTP and Google Drive folder contents before migration in RcloneView" class="img-large img-center" />

이 단계는 SFTP 서버에 일관성 없는 이름 규칙을 가진 중첩 폴더가 수년간 쌓여 있을 때 특히 중요합니다 — 드라이 런을 통해 문제가 야간 지원 사고로 번지기 전에 발견할 수 있습니다.

## 예약 작업으로 나머지 전송 자동화하기

대규모 SFTP 아카이브의 경우, 한 번에 모두 옮기려 하지 마세요. 마이그레이션을 Job Manager에 Job으로 저장하고, 파일 전송 개수를 네트워크의 실제 처리 능력에 맞게 설정한 다음, 다른 Explorer 패널에서 계속 작업하는 동안 백그라운드에서 실행되도록 두세요. 전환 기간 동안 SFTP 서버를 몇 주 더 가동해야 한다면, PLUS 라이선스의 예약 기능을 사용해 크론탭 방식 일정으로 동기화를 반복하여 기존 서버가 꺼질 때까지 Google Drive를 최신 상태로 유지할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring SFTP to Google Drive sync job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 호스트 주소와 SSH 자격 증명을 사용해 SFTP 서버를 리모트로 추가하세요.
3. OAuth 브라우저 로그인 흐름을 통해 Google Drive를 두 번째 리모트로 추가하세요.
4. Folder Compare와 Dry Run을 실행한 다음, 실제로 실행하기 전에 전송을 Job으로 저장하세요.

동기화 작업이 더 이상 복사할 것이 없는 반복 실행에서 깔끔하게 완료되면, 기존 SFTP 서버를 안전하게 종료할 수 있습니다.

---

**관련 가이드:**

- [SFTP 서버 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Google Drive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView로 SFTP와 SMB를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />

---
slug: manage-hidrive-cloud-sync-backup-rcloneview
title: "HiDrive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - tayson
description: "RcloneView를 사용하여 HiDrive 클라우드 스토리지를 연결, 동기화, 백업하는 방법을 알아보세요. CLI 명령어 없이 GUI에서 모든 HiDrive 파일을 관리할 수 있습니다."
keywords:
  - HiDrive RcloneView
  - HiDrive cloud sync
  - HiDrive backup
  - STRATO HiDrive management
  - HiDrive file transfer
  - rclone HiDrive GUI
  - HiDrive sync tool
  - cloud storage management HiDrive
tags:
  - hidrive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> RcloneView는 HiDrive에 완전한 GUI 제어 기능을 제공하여, 명령줄을 열지 않고도 파일을 탐색하고 동기화하며 백업하고 전송 일정을 예약할 수 있게 해줍니다.

STRATO가 제공하고 유럽 데이터 센터 전역에서 운영되는 HiDrive는 개인정보 보호를 중시하는 사용자와 GDPR을 준수해야 하는 기업들에게 인기 있는 선택지입니다. rclone을 이용해 HiDrive를 프로그래밍 방식으로 관리하는 것은 예전부터 가능했지만, RcloneView는 그 강력한 기능을 깔끔한 인터페이스로 감싸주어 Windows, macOS, Linux 어디에서든 누구나 파일 전송, 예약 백업, 클라우드 간 동기화를 손쉽게 이용할 수 있게 합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에 HiDrive 연결하기

RcloneView에서 HiDrive를 리모트로 추가하는 과정은 간단합니다. **Remote 탭 → New Remote**를 클릭하고, 제공업체 목록에서 HiDrive까지 스크롤한 후 OAuth 브라우저 로그인 절차를 따르세요. RcloneView가 기본 브라우저를 열면 STRATO 계정으로 인증하고, 이후 리모트가 자동으로 저장됩니다 — 토큰을 직접 복사할 필요가 없습니다.

연결이 완료되면 HiDrive 폴더가 Explorer 패널에 즉시 표시됩니다. 여러 개의 탭을 열어 로컬 폴더와 HiDrive 백업을 비교하거나, 화면을 분할하여 HiDrive와 Amazon S3 같은 다른 클라우드를 나란히 볼 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive as a new remote in RcloneView" class="img-large img-center" />

HiDrive는 RcloneView를 통해 업로드, 다운로드, 이름 변경, 삭제, 새 폴더 생성, 공개 링크 생성 등 표준 파일 작업을 지원합니다. Windows 탐색기에서 파일을 HiDrive Explorer 패널로 직접 드래그 앤 드롭하여 업로드하거나, 패널 사이에서 드래그하여 클라우드 간 복사를 실행할 수 있습니다.

## HiDrive 자동 백업 예약하기

HiDrive에 프로젝트 아카이브나 클라이언트 산출물을 저장하는 기업이라면 자동 백업이 필수적입니다. RcloneView의 Job Manager(PLUS 라이선스)를 사용하면 crontab 방식의 일정을 설정할 수 있습니다 — 예를 들어 로컬의 `D:\Projects` 폴더를 매일 오전 2시에 `hidrive:Backups/Projects`로 동기화하는 야간 작업을 만들 수 있습니다.

4단계 동기화 마법사는 소스와 대상 선택, 전송 동시성 설정, 파일 필터, 일정 설정을 안내합니다. 2단계에서 체크섬 검증을 활성화하면 수정 시간에만 의존하지 않고 파일 무결성을 바이트 단위로 확인할 수 있습니다 — 시간대 차이로 인해 잘못된 불일치가 발생할 수 있는 유럽 서버와 동기화할 때 특히 중요합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled HiDrive backup job in RcloneView" class="img-large img-center" />

첫 실제 동기화 전에 Dry Run 옵션을 사용하여 어떤 파일이 복사되거나 삭제될지 미리 확인하세요. 대상 파일이 덮어써질 수 있는 단방향 동기화를 설정할 때 특히 유용합니다.

## 전송 및 작업 기록 모니터링

RcloneView 하단의 **Transferring** 탭은 진행 중인 HiDrive 전송에 대한 실시간 가시성을 제공합니다: 파일 수, 전송 속도, 이동된 바이트 수, 경과 시간 등입니다. 네트워크 문제로 작업이 실패하면 RcloneView가 자동으로 재시도합니다(기본값: 3회 재시도).

**Job History** 탭에는 과거 실행 기록이 전체적으로 저장됩니다 — 실행 유형(수동 또는 예약), 시작 시간, 소요 시간, 상태, 전송된 총 용량 등입니다. 정기적인 데이터 보호 활동을 입증해야 하는 컴플라이언스 팀에게 이 감사 기록은 즉시 유용하게 활용됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing HiDrive backup job history in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. RcloneView를 실행하고 **Remote 탭 → New Remote**를 클릭한 후 HiDrive를 선택하고 OAuth 로그인을 완료하세요.
3. Explorer 패널을 사용하여 HiDrive 폴더를 탐색하고 연결을 확인하세요.
4. **Job Manager**를 열어 로컬 드라이브에서 HiDrive로의 새 동기화 작업을 생성하고 일정을 설정하세요.

RcloneView를 사용하면 HiDrive는 백업 전략의 완전히 관리되는 일부가 됩니다 — 자동으로 예약되고, 모니터링되며, 검증됩니다.

---

**관련 가이드:**

- [OneDrive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Jottacloud 관리 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [RcloneView로 일일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />

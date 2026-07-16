---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "RcloneView로 Google 포토를 외장 드라이브나 NAS에 백업하는 방법"
authors:
  - tayson
description: "RcloneView를 사용해 Google 포토 라이브러리 전체를 외장 하드 드라이브, NAS, 또는 다른 클라우드로 자동으로, 앨범 구조를 유지한 채로 다운로드하고 백업하세요."
keywords:
  - google photos backup
  - download all google photos
  - google photos to external drive
  - google photos to nas
  - backup google photos automatically
  - google photos to hard drive
  - google photos rclone
  - google photos sync nas
  - save google photos locally
  - google photos export alternative
tags:
  - google-photos
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Google 포토를 외장 드라이브나 NAS에 백업하는 방법

> Google 포토는 소중한 추억을 저장해주지만, 계정이 잠기거나 저장 공간이 가득 차거나 Google이 정책을 변경하면 어떻게 될까요? 로컬 백업이 있으면 사진이 항상 내 것으로 남습니다.

Google 포토는 편리하지만 늘 그런 것은 아닙니다. 저장 공간 제한, 계정 정지, 정책 변경은 모두 수년간 쌓인 소중한 사진과 동영상에 대한 접근을 위협할 수 있습니다. Google 테이크아웃이 존재하긴 하지만 속도가 매우 느리고, 대용량 라이브러리에서는 실패하며, 증분 업데이트를 지원하지 않습니다.

RcloneView는 더 나은 방법을 제공합니다. Google 포토에 직접 연결하고, 라이브러리를 시각적으로 탐색하며, 외장 드라이브, NAS, 또는 다른 클라우드로 전체를 동기화할 수 있습니다. 자동 예약 기능까지 있어 앞으로 추가되는 사진도 계속 백업됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 왜 Google 포토를 로컬에 백업해야 할까요?

### Google 테이크아웃만으로는 부족합니다

Google 테이크아웃으로 사진을 내보낼 수 있지만, 다음과 같은 심각한 한계가 있습니다.

- **느리고 불안정함** — 대용량 라이브러리는 내보내기 도중 실패하는 경우가 많아 처음부터 다시 시작해야 합니다.
- **증분 업데이트 불가** — 내보낼 때마다 전체를 다시 덤프합니다. 이번 달에 새 사진이 500장 생겼다면, 전체를 다시 내보내야 합니다.
- **ZIP 압축 파일 형식** — 수십 개의 ZIP 파일을 받게 되며, 이를 수동으로 압축 해제하고 정리해야 합니다.
- **자동화 불가** — 매번 완전히 수동으로 진행해야 하는 프로세스입니다.

### 클라우드 단독 저장의 실질적인 위험

- **저장 공간 한도 초과** — 15GB(Gmail, Drive와 공유)에 도달하면 Google이 삭제하거나 결제할 것을 요청하기 시작합니다.
- **계정 잠금** — 정책 위반은 실수로라도 전체 Google 계정을 정지시킬 수 있습니다.
- **서비스 변경** — Google은 과거에 여러 제품(Google+, Picasa)을 중단한 적이 있습니다. 데이터 전략은 이를 감안해야 합니다.

외장 드라이브나 NAS에 로컬 백업을 해두면, 어떤 정책 변경으로도 빼앗을 수 없는 독립적인 사본을 확보할 수 있습니다.

## Google 포토를 리모트로 설정하기

### 1단계: RcloneView에 Google 포토 추가하기

RcloneView를 열고 새 리모트를 만듭니다.

1. 리모트 관리자에서 **리모트 추가** 버튼을 클릭합니다.
2. 제공업체 목록에서 **Google 포토**를 선택합니다.
3. OAuth 인증 절차를 따릅니다 — RcloneView가 브라우저를 열어 접근 권한을 승인하도록 안내합니다.
4. 인증이 완료되면 Google 포토 라이브러리가 탐색 가능한 리모트로 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Photos as a remote in RcloneView" class="img-large img-center" />

### 2단계: 사진 라이브러리 탐색하기

연결이 완료되면 RcloneView의 [탐색기](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)에서 Google 포토 라이브러리를 바로 탐색할 수 있습니다. Google 포토는 다음과 같은 방식으로 파일을 정리합니다.

- **연도/월 폴더** — 사진은 `media/by-year/2024/01` 형태의 경로로 배치됩니다.
- **앨범** — 앨범은 `album` 경로 아래에 별도 폴더로 표시됩니다.
- **공유 앨범** — `shared-album` 아래에서 확인할 수 있습니다.

이를 통해 전송을 시작하기 전에 정확히 무엇을 백업하는지 쉽게 확인할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Photos library in RcloneView Explorer" class="img-large img-center" />

## 백업 전략 1: Google 포토 → 외장 하드 드라이브

가장 간단한 방법 — USB로 연결한 외장 드라이브에 모든 것을 복사합니다.

### 설정 방법

1. **외장 드라이브를 연결**하고 드라이브 문자(Windows) 또는 마운트 지점(Mac/Linux)을 확인합니다.
2. RcloneView에서 **복사 작업을 생성**합니다.
   - **원본**: Google 포토 리모트(모든 사진을 대상으로 하려면 `media/by-year` 폴더 선택)
   - **대상**: 외장 드라이브 경로(예: `E:\Google Photos Backup`)
3. **작업을 실행**합니다 — RcloneView가 폴더 구조를 유지하면서 모든 사진과 동영상을 다운로드합니다.

### 권장 설정

- **병렬 전송 수**: 4~6개 (Google 포토 API에는 속도 제한이 있습니다)
- **작업 유형**: 복사(동기화 아님 — Google 포토에서 사진을 삭제해도 로컬 파일을 삭제하고 싶지는 않을 것입니다)

### 증분 업데이트를 위해

초기 백업 이후에는 이후 실행에서 새 사진만 다운로드합니다. RcloneView는 드라이브에 이미 있는 파일과 비교해 기존 파일은 건너뜁니다. 이를 통해 몇 시간이 걸리는 최초 백업이 빠른 일일 업데이트로 바뀝니다.

## 백업 전략 2: Google 포토 → Synology NAS

Synology NAS를 사용하는 사용자라면 RcloneView는 훨씬 더 통합된 경험을 제공합니다. v1.0부터 Synology NAS 기기는 네트워크에서 [자동으로 감지](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)됩니다.

### 설정 방법

1. **RcloneView를 실행**하면 Synology NAS가 로컬 탭에 자동으로 표시됩니다.
2. **복사 작업을 생성**합니다.
   - **원본**: Google 포토 리모트
   - **대상**: NAS의 공유 폴더(예: `/photos/google-backup`)
3. [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) 기능을 사용해 매일 또는 매주 실행되도록 **작업을 예약**합니다.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection for Google Photos backup" class="img-large img-center" />

### 사진 백업에 NAS가 이상적인 이유

- **항상 켜져 있음** — 외장 드라이브와 달리 NAS는 항상 연결되어 준비된 상태입니다.
- **RAID 보호** — 대부분의 NAS 구성은 디스크 장애 방지를 위해 RAID를 사용합니다.
- **어디서나 접근 가능** — 네트워크 상의 어떤 기기에서도 백업된 사진을 볼 수 있습니다.
- **2차 클라우드 백업** — 다른 RcloneView 작업을 사용해 NAS를 S3나 Backblaze B2로 동기화하면 오프사이트 이중화를 확보할 수 있습니다.

## 백업 전략 3: Google 포토 → 다른 클라우드

다른 클라우드 제공업체에도 사본을 보관하고 싶으신가요? RcloneView는 클라우드 간 전송을 원활하게 처리합니다.

- **Google 포토 → OneDrive** — Microsoft 365 저장 공간을 활용합니다.
- **Google 포토 → AWS S3** — 저렴하고 내구성이 뛰어난 오브젝트 스토리지에 아카이브합니다.
- **Google 포토 → Backblaze B2** — 저비용 무제한 백업 스토리지입니다.
- **Google 포토 → Wasabi** — 유출(egress) 비용 없는 S3 호환 스토리지입니다.

Google 포토를 원본으로, 원하는 클라우드를 대상으로 설정해 복사 작업을 생성하기만 하면 됩니다. 로컬 기기의 저장 공간을 거치지 않고, RcloneView가 rclone 엔진을 통해 직접 전송을 처리합니다.

## 사진 백업 자동화하기

일회성 백업도 좋지만, 자동화된 반복 백업이 더 낫습니다.

### 예약 백업 설정하기

1. 위의 전략 중 하나를 사용해 **복사 작업을 생성**합니다.
2. **작업 예약**을 열고 반복 일정을 설정합니다.
   - **매일 오전 2시** — 전날 추가된 새 사진을 모두 포착합니다.
   - **매주 일요일** — 라이브러리가 작은 경우에 적합한 가벼운 방식입니다.
3. 작업이 잘 실행되었는지 알 수 있도록 **알림을 추가**합니다.
   - 팀을 위한 [Slack 알림](https://rcloneview.com/support/blog/rcloneview-slack-remote-control)
   - 개인용 [Telegram 알림](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)
   - 커뮤니티를 위한 [Discord 알림](https://rcloneview.com/support/blog/rcloneview-discord-remote-control)

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automatic Google Photos backups" class="img-large img-center" />

### 다중 대상 백업을 위한 배치 작업 사용하기

v1.3의 [배치 작업](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview)을 사용하면 하나의 자동화된 시퀀스로 Google 포토를 여러 대상에 백업할 수 있습니다.

1. Google 포토 → 외장 드라이브 복사
2. Google 포토 → NAS 복사
3. Google 포토 → Backblaze B2 복사

한 번의 클릭(또는 한 번의 예약 트리거)으로 세 가지 작업이 모두 실행됩니다.

## 모니터링 및 검증

### 실시간 전송 모니터링

백업 진행 상황을 실시간으로 확인하세요 — 파일 수, 전송 속도, 예상 완료 시간을 볼 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Photos backup progress" class="img-large img-center" />

### 폴더 비교로 검증하기

백업이 완료되면 [폴더 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) 기능을 사용해 로컬 사본이 Google 포토 라이브러리와 일치하는지 확인하세요. 빠진 것이 없다는 확신을 얻을 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Google Photos with local backup" class="img-large img-center" />

### 작업 기록 확인하기

[작업 기록](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)을 확인하면 전송된 파일, 발생한 오류, 총 소요 시간 등 과거 백업 실행 전체 기록을 볼 수 있습니다.

## 대용량 Google 포토 라이브러리를 위한 팁

사진이 수만 장에 달한다면 다음을 참고하세요.

1. **최근 연도부터 시작하기** — 최근 2~3년치를 먼저 백업하고 그다음 과거로 거슬러 올라가세요. 가장 최근 추억을 가장 빠르게 보호할 수 있습니다.
2. **증분 복사 사용하기** — 최초 실행 이후에는 새 파일만 전송됩니다.
3. **속도 제한에 여유를 갖기** — Google 포토 API의 제한은 Google 드라이브보다 더 엄격합니다. 병렬 전송 수를 4~6개로 유지하세요.
4. **실패 시 재시도하기** — v1.3의 실패한 작업 재시도 기능이 일시적인 API 오류를 원활하게 처리합니다.
5. **비수기 시간대 예약을 고려하기** — 네트워크 혼잡을 피하려면 대용량 백업을 야간에 실행하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요(Windows, macOS, Linux).
2. OAuth 인증을 사용해 **Google 포토를 리모트로 추가**하세요.
3. 무엇을 백업하는지 확인하기 위해 탐색기에서 **라이브러리를 탐색**하세요.
4. 선택한 대상(외장 드라이브, NAS, 또는 클라우드)으로 **복사 작업을 생성**하세요.
5. 자동 반복 백업을 위해 **예약**하세요.
6. 첫 실행 후 폴더 비교로 **검증**하세요.

사진은 다시 되돌릴 수 없는 소중한 자산입니다. 백업이 단일 제공업체에 의존해서는 안 됩니다. RcloneView를 사용하면 CLI 없이도 자동으로, 안정적으로 독립적인 사본을 유지할 수 있습니다.

---

**관련 가이드:**

- [브라우저 기반 로그인(OAuth)으로 리모트 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [리모트 탐색 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Synology NAS 자동 감지 및 연결](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />

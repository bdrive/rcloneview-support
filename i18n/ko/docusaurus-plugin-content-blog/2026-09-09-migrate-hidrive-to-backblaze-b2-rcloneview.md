---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "HiDrive에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - kai
description: "RcloneView로 HiDrive에서 Backblaze B2로 파일을 마이그레이션하세요 — 두 제공업체 간에 파일을 로컬에 임시 저장하지 않고 이동하는 크로스 플랫폼 GUI입니다."
keywords:
  - HiDrive에서 Backblaze B2로 마이그레이션
  - HiDrive Backblaze B2 전송
  - RcloneView HiDrive 마이그레이션
  - HiDrive 클라우드 백업 도구
  - Backblaze B2 마이그레이션 GUI
  - HiDrive 파일을 B2로 이동
  - 클라우드 간 전송 RcloneView
  - HiDrive B2 동기화
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기

> 로컬 드라이브에 먼저 다운로드하지 않고, RcloneView로 HiDrive에서 Backblaze B2로 파일을 직접 이동하세요.

HiDrive 계정을 넘어선 규모로 성장한 팀은 더 저렴한 객체 스토리지와 애플리케이션 키 모델을 이유로 Backblaze B2로 이전하는 경우가 많지만, 두 서비스는 서로 직접 연동되지 않습니다. RcloneView는 하나의 창에서 두 서비스를 연결합니다: 두 서비스를 각각 리모트로 연결하고, 패널 간에 파일을 드래그하면, 내장된 rclone 엔진이 제공업체가 지원하는 범위에서 서버 간 전송을 처리합니다. 전송 자체에는 수동 내보내기나 로컬 임시 저장 폴더가 필요하지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDrive와 Backblaze B2 연결하기

**Remote tab → New Remote**를 통해 HiDrive를 먼저 추가하세요. HiDrive는 OAuth 브라우저 로그인 방식을 사용하므로, RcloneView가 브라우저 창을 열어 로그인 및 접근 권한 승인을 진행합니다 — API 키를 직접 복사할 필요가 없습니다. Backblaze B2는 설정 방식이 다릅니다: 리모트 유형으로 Backblaze B2를 선택하고, Backblaze 키 관리 페이지에서 생성한 Application Key ID와 Application Key를 입력하세요. 두 리모트가 모두 Remote Manager에 표시되면, Explorer 패널 두 개를 나란히 열어 하나는 HiDrive를, 다른 하나는 B2 버킷을 가리키도록 설정하세요.

마운트만 지원하는 도구와 달리, RcloneView는 이런 리모트 간의 동기화와 폴더 비교도 FREE 라이선스로 제공합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 HiDrive 리모트 추가하기" class="img-large img-center" />

## 일회성 전송 또는 반복 동기화 실행하기

일회성 마이그레이션의 경우, HiDrive 패널에서 폴더를 선택해 B2 패널로 드래그한 뒤 전송을 확인하세요 — RcloneView는 서로 다른 리모트 간의 드래그를 복사로 처리하므로, 데이터가 제대로 도착했는지 확인할 때까지 HiDrive 원본은 그대로 남아 있습니다. HiDrive가 전환 기간 동안 계속 새 파일을 받는 지속적인 마이그레이션이라면, 대신 Sync 작업을 구성하세요: 4단계 마법사에서 HiDrive를 소스로, B2를 대상으로 지정하고, 방향을 일방향인 "Modifying destination only"로 설정한 다음, 차이를 따라잡고 싶을 때마다 수동으로 실행하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="HiDrive에서 Backblaze B2로의 클라우드 간 동기화 작업" class="img-large img-center" />

최종 전환 전에는 작업의 Dry Run 옵션을 실행해, 어떤 파일이 복사되고 어떤 파일이(있다면) 대상 쪽에서 삭제될지 미리 확인하세요 — 프로덕션 워크플로우를 새 B2 버킷으로 전환하기 전에 유용한 점검 단계입니다.

## 이전 확인 및 자동화하기

초기 마이그레이션이 끝나면, 완료 메시지 하나만 믿기보다 Folder Compare를 사용해 양쪽을 파일 단위로 확인하고 파일 수와 크기가 일치하는지 검증하세요. 마이그레이션을 일정에 따라 반복해야 한다면 — 예를 들어 전환 기간 동안 새로 업로드되는 HiDrive 파일을 B2에 계속 반영해야 한다면 — PLUS 라이선스로 crontab 방식 스케줄링을 사용해 전환 계획에 맞는 간격으로 동기화 작업을 자동 실행할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="HiDrive에서 Backblaze B2로의 반복 동기화 작업 예약하기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView 다운로드**.
2. Remote Manager에서 OAuth 브라우저 로그인으로 HiDrive를 추가하세요.
3. Application Key ID와 Application Key로 Backblaze B2를 추가하세요.
4. Dry Run을 실행한 다음, 두 패널 사이의 전송 또는 동기화 작업을 실행하세요.

두 리모트를 모두 설정하고 나면, HiDrive에서 B2로의 이전 작업도 평소 파일 관리에 사용하는 것과 동일한 인터페이스에서 진행되는 드래그 앤 드롭 또는 예약 작업일 뿐입니다.

---

**관련 가이드:**

- [HiDrive 스토리지 관리하기 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Backblaze B2 스토리지 관리하기 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [HiDrive를 Amazon S3로 동기화하기 — RcloneView로 클라우드 백업하기](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)

<CloudSupportGrid />

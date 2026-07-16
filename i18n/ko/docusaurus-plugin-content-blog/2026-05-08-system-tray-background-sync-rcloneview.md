---
slug: system-tray-background-sync-rcloneview
title: "시스템 트레이와 백그라운드 동기화 — RcloneView에서 클라우드 작업을 계속 실행하기"
authors:
  - steve
description: "RcloneView의 시스템 트레이 통합 기능이 창을 열어두지 않고도 백그라운드에서 동기화 작업을 실행하고, 클라우드 마운트를 관리하며, 작업 완료 알림을 보내는 방법을 알아보세요."
keywords:
  - RcloneView 시스템 트레이 백그라운드 동기화
  - 클라우드 동기화 백그라운드 모드
  - RcloneView 트레이로 최소화
  - RcloneView 백그라운드 클라우드 백업
  - RcloneView 트레이 아이콘 작업
  - 클라우드 동기화 알림 RcloneView
  - 클라우드 동기화 백그라운드 유지
  - RcloneView 지속적인 백업
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 시스템 트레이와 백그라운드 동기화 — RcloneView에서 클라우드 작업을 계속 실행하기

> RcloneView의 시스템 트레이 통합 기능을 사용하면 앱을 최소화한 상태에서도 동기화 작업 실행, 클라우드 드라이브 마운트, 알림 수신을 워크플로 중단 없이 계속할 수 있습니다.

대부분의 클라우드 동기화 도구는 작업이 실행 중인지 확인하려면 창을 계속 열어두어야 합니다. RcloneView의 시스템 트레이 지원은 이러한 제약을 없애줍니다. 한 번 설정하면 RcloneView를 완전히 최소화해도 예약된 동기화 작업, 진행 중인 전송, 마운트된 클라우드 드라이브가 백그라운드에서 계속 작동합니다. 트레이 아이콘을 통해 작업 공간을 어지럽히지 않고도 모든 기능에 빠르게 접근할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 백그라운드 모드와 시스템 트레이 활성화하기

기본적으로 RcloneView는 창을 닫을 때 종료되지 않고 시스템 트레이로 최소화되도록 설정할 수 있습니다. **Settings 탭 → General**에서 **Quit on close** 옵션을 찾으세요. 이 옵션을 비활성화하면 X 버튼을 클릭했을 때 완전히 종료되는 대신 RcloneView가 시스템 트레이로 이동합니다.

**Launch at login**을 활성화하면 시스템이 시작될 때 RcloneView가 자동으로 실행되어 즉시 예약된 작업을 모니터링하기 시작합니다. 여기에 **Start minimized**를 함께 사용하면 컴퓨터가 부팅되는 순간부터 RcloneView가 백그라운드에서 조용히 실행됩니다.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView running in background with system tray active" class="img-large img-center" />

## 트레이에서 클라우드 마운트 관리하기

가장 유용한 트레이 기능 중 하나는 빠른 마운트 관리입니다. RcloneView 트레이 아이콘을 마우스 오른쪽 버튼으로 클릭하면 설정된 모든 클라우드 마운트 목록과 현재 상태(마운트됨 또는 마운트 해제됨)를 확인할 수 있습니다. 항목을 클릭하면 메인 창을 열지 않고도 마운트 상태를 전환할 수 있습니다. 클라우드 드라이브를 로컬 볼륨으로 마운트하거나 마운트 해제할 수 있습니다.

이는 하루 종일 여러 클라우드 드라이브를 마운트해두는 전문가들에게 특히 유용합니다. 예를 들어 개발자는 S3 버킷을 네트워크 드라이브로 마운트하고, 문서 접근을 위해 Google Drive를 마운트하며, 로컬 파일 전송을 위해 NAS를 마운트할 수 있습니다. 트레이를 사용하면 이 모든 마운트를 즉시 제어할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Quick access to cloud mounts via system tray in RcloneView" class="img-large img-center" />

## 작업 완료 알림

동기화 작업이 완료되면(예약 실행이든 수동 실행이든) RcloneView는 작업 이름, 소요 시간, 최종 상태를 보여주는 데스크톱 알림을 표시할 수 있습니다. **Settings 탭 → Interfaces & Notifications → Show sync completion notification**에서 이 기능을 활성화하세요.

이를 통해 대용량 야간 백업 작업을 시작하고 RcloneView를 트레이로 최소화한 뒤, 작업이 완료되면 데스크톱 알림을 받을 수 있습니다. 작업에 오류가 발생한 경우에도 즉시 알 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing background sync completions in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Settings → General**에서 **Quit on close**를 비활성화하고 **Launch at login**을 활성화하세요.
3. 평소처럼 동기화 작업 또는 예약된 작업을 설정하세요.
4. RcloneView를 최소화하세요 — 작업과 마운트가 백그라운드에서 계속 실행됩니다.

설정을 완료하면 RcloneView는 창을 계속 열어둘 필요 없이 클라우드 스토리지를 위한 조용한 백그라운드 서비스처럼 작동합니다.

---

**관련 가이드:**

- [RcloneView로 일일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [동기화 완료 시 알림 — RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [RcloneView의 이메일 SMTP 작업 알림](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)

<CloudSupportGrid />

---
slug: fix-email-smtp-notifications-not-sending-rcloneview
title: "이메일 SMTP 알림이 전송되지 않는 문제 해결 — RcloneView 문제 해결 가이드"
authors:
  - morgan
description: "전송되지 않는 RcloneView 이메일 SMTP 알림을 수정하세요. 작업 알림의 포트 차단, 인증 오류, 임계값 설정 오류를 해결합니다."
keywords:
  - RcloneView 이메일 알림 문제 해결
  - SMTP 알림 전송 안 됨
  - RcloneView 이메일 알림 오류
  - SMTP 인증 실패
  - 동기화 작업 알림 문제 해결
  - 포트 587 차단 SMTP
  - 백업 알림 미수신
  - RcloneView PLUS 알림
tags:
  - RcloneView
  - troubleshooting
  - automation
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 이메일 SMTP 알림이 전송되지 않는 문제 해결 — RcloneView 문제 해결 가이드

> RcloneView의 이메일 알림이 도착하지 않을 때, 원인은 거의 항상 SMTP 설정, 포트 차단, 또는 너무 높게 설정된 전송 임계값입니다 — 각각을 진단하고 해결하는 방법을 알아봅니다.

이메일 알림은 실제로 도착해야만 유용합니다. 예약된 백업이 조용히 실패하고 알림이 받은편지함에 전혀 도달하지 않으면, 무인 모니터링의 핵심 의미가 사라집니다. RcloneView의 SMTP 알림 시스템은 잘못 설정하기 쉬운 몇 가지 설정에 의존하며, 이 가이드는 작업 알림이 다시 안정적으로 작동하도록 가장 흔한 실패 지점을 살펴봅니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 인증 및 호스트 오류

무음(silent) 알림 실패의 가장 흔한 원인은 잘못된 SMTP 인증입니다. 이메일 제공업체가 앱 전용 비밀번호를 요구하는 경우(2단계 인증이 활성화된 Gmail 및 Microsoft 365 계정에서 흔함), 일반 계정 비밀번호를 입력하면 필드에서 명확한 오류 없이 값을 받아들이더라도 연결에 실패합니다. 제공업체의 보안 설정에서 앱 비밀번호를 생성하여 대신 사용하세요.

**SMTP 호스트** 필드도 다시 확인하세요 — `smtp.gmial.com`과 같은 오타나 SMTP 호스트 대신 제공업체의 IMAP 호스트를 사용하면 연결이 실패합니다. 자격 증명을 수정한 후에는 실제 작업에 설정을 사용하기 전에 항상 **테스트** 버튼을 사용하세요. 이는 인증 문제를 작업 수준 설정 문제와 분리해서 확인하는 데 도움이 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Testing SMTP authentication settings in RcloneView notification configuration" class="img-large img-center" />

## 포트 차단 및 네트워크 문제

RcloneView는 SMTP 전송에 STARTTLS를 사용하는 **포트 587**을 권장합니다. 아웃바운드 방화벽 규칙이 제한적인 네트워크(기업 네트워크, 일부 VPS 제공업체, 특정 가정용 ISP에서 흔함)에서 RcloneView를 실행하는 경우, 포트 587(특히 포트 25)이 완전히 차단되어 명확한 오류 대신 테스트 이메일이 시간 초과될 수 있습니다.

테스트가 인증 오류를 반환하는 대신 계속 시간 초과된다면, 문제는 자격 증명 수준이 아니라 거의 확실히 네트워크 수준입니다. 제공업체가 지원하는 경우 포트 465(SSL)로 전환해 보거나, 네트워크 관리자에게 아웃바운드 SMTP 트래픽이 허용되는지 확인하세요. 원격 서버나 Docker 컨테이너의 외부 rclone 인스턴스에 연결하는 경우, 연결이 실제로 rclone이 실행되는 위치에서 시작되므로 해당 서버의 아웃바운드 규칙도 SMTP 트래픽을 허용하는지 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Reviewing job notification settings after an SMTP connection failure" class="img-large img-center" />

## 임계값 및 수신자 설정 오류

SMTP가 연결되고 테스트가 성공하지만 실제 작업에 대한 알림이 전혀 도착하지 않는다면, 작업 수준의 알림 임계값을 확인하세요. RcloneView에서는 알림을 보내기 전 최소 전송 크기(MB 또는 GB 단위)를 설정할 수 있습니다 — 이는 자주 실행되며 데이터 이동이 거의 없는 작업에서 알림 피로도를 줄이는 데 유용하지만, 반대로 몇 개의 파일만 전송하는 작업은 임계값 아래로 떨어져 이메일이 전혀 생성되지 않을 수 있습니다. 이것이 원인인지 확인하기 위해 임시로 임계값을 낮추거나 제거하세요.

수신자 주소가 전역 SMTP 설정뿐 아니라 작업 수준에서도 올바르게 입력되었는지 확인하세요 — RcloneView는 알림 수신자를 작업별로 구성하도록 요구하므로, 특정 작업에 수신자가 지정되지 않은 전역적으로 정상 작동하는 SMTP 연결은 해당 작업에 대한 알림을 전혀 보내지 않습니다. 이메일 알림은 PLUS 라이선스 기능이므로, SMTP, 수신자, 임계값이 모두 정상인데도 알림이 도착하지 않는다면 추가로 문제를 해결하기 전에 라이선스 등급을 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history and notification recipients for a completed sync job" class="img-large img-center" />

## 시작하기

1. 아직 다운로드하지 않았다면 [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하고 알림 설정을 엽니다.
2. 제공업체가 앱 전용 비밀번호를 요구하는 경우 이를 사용하여 SMTP 자격 증명을 다시 입력한 다음 **테스트**를 클릭합니다.
3. 테스트가 시간 초과되면 포트 587에서 포트 465로 전환하거나 아웃바운드 SMTP를 차단하는 방화벽 규칙을 확인합니다.
4. 각 작업의 알림 임계값과 수신자 목록이 예상대로 구성되어 있는지 검토합니다.

SMTP 자격 증명, 네트워크 액세스, 작업 수준 설정이 모두 확인되면, 이메일 알림은 백그라운드에서 실행되는 모든 예약된 동기화에 대한 신뢰할 수 있는 안전망이 됩니다.

---

**관련 가이드:**

- [이메일 SMTP 작업 알림 — RcloneView에서 동기화 상태를 실시간으로 확인하기](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)
- [RcloneView를 이용한 동기화 완료 알림](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [RcloneView로 예약된 동기화가 실행되지 않는 문제 해결하기](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />

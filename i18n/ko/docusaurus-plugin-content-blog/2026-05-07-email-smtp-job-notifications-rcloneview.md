---
slug: email-smtp-job-notifications-rcloneview
title: "이메일 SMTP 작업 알림 — RcloneView에서 동기화 상태를 실시간으로 확인하기"
authors:
  - tayson
description: "RcloneView PLUS에서 이메일 SMTP 알림을 설정하여 동기화 작업 완료 알림을 받고, 여러 수신자를 구성하고, 무인 백업 작업을 이메일로 모니터링하는 방법을 알아보세요."
keywords:
  - RcloneView 이메일 알림
  - SMTP 동기화 알림
  - 클라우드 동기화 이메일 알림
  - 작업 알림 SMTP
  - 백업 모니터링 이메일
  - RcloneView PLUS 알림
  - 동기화 완료 알림
  - rclone 이메일 알림
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 이메일 SMTP 작업 알림 — RcloneView에서 동기화 상태를 실시간으로 확인하기

> RcloneView PLUS를 사용하면 동기화 작업 완료에 대해 직접 SMTP 이메일 알림을 설정할 수 있어, 수동으로 확인하지 않아도 팀이 백업 완료 또는 실패 여부를 항상 알 수 있습니다.

클라우드 동기화 및 백업 작업을 예약하여 실행하는 것은 자동화의 절반에 불과합니다. 나머지 절반은 애플리케이션을 열고 작업 기록을 수동으로 확인하지 않아도 결과를 아는 것입니다. RcloneView PLUS는 직접 SMTP 설정을 통한 이메일 알림을 지원하여, 작업이 완료되는 즉시 동기화 상태 메시지를 받은편지함으로 바로 전달합니다. 이를 통해 개인과 팀 모두 무인 백업 모니터링을 실용적으로 수행할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 SMTP 설정하기

이메일 알림을 설정하려면 RcloneView의 알림 설정(PLUS 라이선스에서 사용 가능)을 엽니다. SMTP 서버 세부 정보를 입력합니다.

- **SMTP 호스트**: 이메일 제공업체의 발신 메일 서버(예: Gmail의 경우 `smtp.gmail.com` 또는 조직의 Exchange/SMTP 서버).
- **포트**: 일반적으로 STARTTLS(권장)의 경우 **587** 포트, SSL의 경우 465 포트를 사용합니다. 대부분의 소비자 및 클라우드 환경에서는 포트 25가 일반적으로 차단되므로 사용을 피하세요.
- **인증**: 이메일 사용자 이름과 비밀번호 또는 앱 전용 비밀번호를 입력합니다. Gmail의 경우 계정에 2FA가 활성화되어 있으면 앱 비밀번호를 사용하세요.
- **보낸사람 주소**: 알림 이메일에 표시될 발신자 주소입니다.

세부 정보를 입력한 후 **테스트** 버튼을 사용하여 테스트 이메일을 보내고 실제 알림에 사용하기 전에 SMTP 연결이 정상적으로 작동하는지 확인하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring SMTP email notification settings in RcloneView PLUS" class="img-large img-center" />

## 수신자 추가 및 작업별 설정

SMTP가 전역적으로 설정되면 작업 수준에서 알림 수신자를 추가할 수 있습니다. 동기화 작업의 설정을 열고 해당 작업이 완료될 때 알림을 받을 하나 이상의 이메일 주소를 입력합니다. 작업마다 다른 사람에게 알릴 수 있습니다. 예를 들어 재무 문서 백업 작업은 재무팀에 알리고, 미디어 동기화 작업은 콘텐츠 팀에 알릴 수 있습니다.

RcloneView는 또한 알림 임계값을 설정할 수 있게 해줍니다. 예를 들어 작업이 설정 가능한 메가바이트 수 이상을 전송할 때만 이메일을 보내도록 할 수 있습니다. 이는 자주 실행되며 변경 사항 없이 완료되는 경우가 많은 작업에 유용합니다. 실제로 의미 있는 일이 발생했을 때만 알림을 받게 되어 알림 피로도를 줄일 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Setting email notification recipients on a sync job in RcloneView" class="img-large img-center" />

## 이메일 알림 사용 사례

**무인 백업 모니터링**이 가장 주요한 사용 사례입니다. 로컬 파일을 Backblaze B2로 매일 밤 백업하도록 예약했다면, 개인 주소로 이메일 알림을 설정하세요. 네트워크 장애, 자격 증명 문제, 디스크 용량 부족 등으로 작업이 실패하면 몇 주 후 복구를 시도하다가 문제를 발견하는 대신 아침에 실패 이메일을 받게 됩니다.

**팀 인지도** 역시 그에 못지않게 중요합니다. 공유 클라우드 동기화 작업이 완료되면(예: 공유 프로젝트 폴더를 Amazon S3로 매주 동기화) 전체 팀에 알림을 보내면 누구도 RcloneView에 로그인할 필요 없이 동기화가 최신 상태임을 확인할 수 있습니다. 각 작업마다 다른 수신자에게 알림을 보내도록 설정하여 담당 영역에 따라 적절한 사람에게 정보가 전달되도록 할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and notification log in RcloneView PLUS" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하고 PLUS 라이선스를 활성화합니다.
2. **알림 설정**을 열고 SMTP 호스트, 포트 587, 인증 자격 증명을 입력합니다.
3. **테스트**를 클릭하여 테스트 이메일을 보내고 연결을 확인합니다.
4. 각 동기화 작업의 설정을 열고 알림을 받을 이메일 주소를 추가합니다.
5. 선택적으로 전송 크기 임계값을 설정하여 상당한 양의 데이터가 이동될 때만 알림이 발생하도록 합니다.

RcloneView PLUS의 이메일 SMTP 알림은 자동화된 백업 모니터링의 마지막 고리를 완성합니다. 클라우드 동기화 작업이 성공적으로 실행되고 있다는 확신을 주거나, 그렇지 않을 때 즉시 알려줍니다.

---

**관련 가이드:**

- [RcloneView를 이용한 동기화 완료 알림](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [RcloneView로 매일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [RcloneView 텔레그램 원격 제어](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)

<CloudSupportGrid />

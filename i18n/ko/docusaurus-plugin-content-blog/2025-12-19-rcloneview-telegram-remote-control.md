---
slug: rcloneview-telegram-remote-control
title: "RcloneView 텔레그램 원격 제어: 휴대폰으로 클라우드 작업 관리하기"
authors:
  - tayson
description: "안전한 봇과 몇 가지 간단한 명령어로 텔레그램에서 즉시 작업 알림을 받고 RcloneView 작업을 시작, 중지, 확인하세요."
keywords:
  - rcloneview telegram
  - rclone telegram bot
  - rclone remote control
  - rcloneview notifications
  - mobile job control
  - rclone chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
  - rclone cli telegram
tags:
  - RcloneView
  - backup
  - cloud-storage
  - job-management
  - security
  - automation
---


import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView 텔레그램 원격 제어: 휴대폰으로 클라우드 작업 관리하기

> RcloneView를 챗옵스 콘솔로 변신시켜 보세요: PC에서 떨어져 있을 때도 작업 알림을 받고, 작업 목록을 확인하고, 텔레그램에서 작업을 시작하거나 중지할 수 있습니다.

텔레그램 원격 제어를 사용하면 RcloneView가 작업 시작, 완료, 오류 알림을 휴대폰으로 보내주고, 간단한 채팅 명령으로 작업을 실행하거나 중지할 수 있습니다. 장시간 걸리는 백업, 야간 동기화, 또는 빠른 제어가 필요한 헤드리스 서버 환경에 안성맞춤입니다.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 텔레그램에서 할 수 있는 일

- 알림 수신: 작업 시작, 작업 완료, 작업 오류.
- 사용 가능한 작업 목록 조회.
- 이름 또는 인덱스로 작업 시작.
- 실행 중인 작업 중지.
- 필요할 때 작업 진행 상황과 상태 확인.

텔레그램 명령을 처리하려면 RcloneView가 실행 중이어야 합니다(데스크톱 또는 헤드리스).

## 사전 준비 사항

- RcloneView가 설치되어 실행 중이어야 합니다.
- 텔레그램 계정.
- 인터넷 연결.
- 텔레그램 봇을 생성할 권한(BotFather를 통해).

## 텔레그램 봇 만들기 (BotFather)

1. 텔레그램을 열고 **BotFather**를 검색한 뒤 대화를 엽니다.  
   <img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

2. 봇을 생성합니다: **Bot Name**과 `bot`으로 끝나는 **Bot Username**을 설정합니다.  
   예시: `RcloneView_test_bot` / `rcloneview_test_bot`.  
   <img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

3. BotFather가 표시하는 **Bot Token**을 복사합니다. RcloneView 설정에 필요하므로 비밀로 보관하세요.  
   <img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

## 봇 시작하기 (중요)

텔레그램이 채팅 업데이트를 반환할 수 있도록 봇을 한 번 시작해야 합니다.

1. 이름이나 사용자명으로 봇을 검색하여 대화를 엽니다.  
   <img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

2. **Start**를 탭하거나(또는 `/start`를 전송) 메시지를 하나 더 보냅니다(예: `hi`).  
   <img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

## 텔레그램 Chat ID 찾기

1. 브라우저에서 다음 주소를 엽니다:  
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

2. JSON 응답에서 `chat.id`의 숫자 값을 확인합니다(예: `987654321`). 이것이 여러분의 Chat ID입니다.  
   <img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

:::caution 토큰을 비공개로 유지하세요
Bot Token과 Chat ID는 비밀번호처럼 취급하세요. 설정된 Chat ID만 작업을 제어할 수 있습니다.
:::

## RcloneView에서 텔레그램 원격 제어 활성화하기

1. **설정 -> 인터페이스 & 알림**을 엽니다.
2. **텔레그램 원격 제어**를 켭니다.  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

3. **Bot Token**과 **Chat ID**를 입력합니다.  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

4. **테스트 메시지 보내기**를 클릭합니다. `RcloneView Telegram Test Message`를 받게 됩니다.  
   <img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

## 명령어 가이드 (작업용 챗옵스)

봇 대화에서 다음을 사용하세요:

- `/help` - 모든 명령어를 표시합니다.  
  <img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

- `/listjobs` - 현재 연결에 대한 작업 목록을 표시합니다.  
  <img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

- `/start <jobName>` - 정확한 이름으로 작업을 시작합니다.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

- `/start #<n>` (권장) - 가장 최근 `/listjobs`의 목록 인덱스로 시작합니다.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

- `/stop <jobId>` - 실행 중인 작업을 중지합니다.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

- `/status <jobId>` - 진행 상황과 전송된 크기를 확인합니다.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

## 자동화에서 중요한 이유

- 야간 또는 장시간 전송: VPN으로 서버에 접속하지 않고도 알림을 받고 재시작하거나 중지할 수 있습니다.
- 예약된 백업: 성공 또는 실패를 즉시 확인하고 휴대폰에서 다시 실행할 수 있습니다.
- 멀티 클라우드 작업: 콘솔 앞에 있지 않아도 통합 제어 타워를 유지할 수 있습니다.
- 더 빠른 장애 대응: 폭주하는 작업을 중지하거나, 일정을 재조정하거나, 다른 프리셋으로 빠르게 전환할 수 있습니다.

## 보안 팁

- 설정된 Chat ID만 명령을 실행할 수 있습니다.
- Bot Token이 노출된 경우 즉시 재발급하세요.
- 원격 명령이 일시적으로 필요하지 않다면 설정에서 텔레그램 원격 제어를 비활성화하세요.

## 관련 자료

- [텔레그램 원격 제어 사용법 (튜토리얼)](https://rcloneview.com/support/tutorials/telegram-remote-control)
- [작업 생성 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [실시간 전송 모니터링](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [내장 터미널 사용하기](https://rcloneview.com/support/tutorials/rcloneview-terminal-rclone-cli-inside-gui) <!-- replace with actual link if different -->

## 마무리

텔레그램은 RcloneView를 모바일 명령 센터로 바꿔줍니다: 항상 알림을 받고, 작업을 즉시 시작하거나 중지할 수 있으며, 장애에 더 빠르게 대응할 수 있습니다. 한 번 설정하고 토큰을 안전하게 보관한 뒤, 책상에서 떨어져 있을 때도 자신 있게 클라우드 자동화를 운영하세요.

<CloudSupportGrid />

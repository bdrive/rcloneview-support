---
sidebar_position: 9
description: "RcloneView의 텔레그램 원격 제어를 사용하여 작업 알림을 받고, 텔레그램에서 작업 목록 조회, 시작, 중지, 상태 확인을 원격으로 수행하는 방법입니다."
keywords:
  - rcloneview
  - 텔레그램 원격 제어
  - 텔레그램 봇
  - 작업 알림
  - 원격 작업 제어
  - rclone 작업 관리자
tags:
  - RcloneView
  - Tutorial
  - Telegram
  - Remote-Control
  - Job-Management
date: 2025-12-17
author: tayson
---

# RcloneView 텔레그램 원격 제어

텔레그램 원격 제어를 사용하면 PC 앞에 앉아 있지 않아도 텔레그램에서 RcloneView 작업 알림을 받고 작업을 직접 제어할 수 있습니다.

이 튜토리얼에서 다루는 내용:

- 텔레그램 봇 생성하기 (BotFather)
- 텔레그램 Chat ID 찾기
- RcloneView에서 텔레그램 원격 제어 활성화하기
- 텔레그램 명령어로 작업 목록 조회/시작/중지 및 상태 확인하기
- 실전 예제와 보안 주의사항

---

## 텔레그램 원격 제어란?

텔레그램 원격 제어는 다음을 수행할 수 있게 해주는 RcloneView 내장 기능입니다:

- 작업 시작/완료/오류 알림 수신
- 작업 목록 조회
- 작업 원격 시작
- 실행 중인 작업 중지
- 작업 진행률/상태 확인

RcloneView가 실행 중이면 휴대폰만으로도 작업을 관리할 수 있습니다.

---

## 요구 사항

- RcloneView가 설치되어 실행 중이어야 함
- 텔레그램 계정
- 인터넷 연결
- 텔레그램 봇 생성 권한 (BotFather 사용)

---

## 1단계 텔레그램 봇 생성하기 (BotFather)

### 1-1단계 BotFather 열기

1. 텔레그램을 엽니다.
2. **BotFather**를 검색합니다.
3. BotFather 채팅을 엽니다.

<img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

### 1-2단계 새 봇 만들기

BotFather를 사용하여 새 봇을 만들고 다음을 설정합니다:

- **봇 이름** (표시 이름)
- **봇 사용자 이름** (반드시 `bot`으로 끝나야 함)

예시:

- 봇 이름: `RcloneView_test_bot`
- 봇 사용자 이름: `rcloneview_test_bot`

<img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

### 1-3단계 봇 토큰 저장하기 (중요)

봇이 생성되면 BotFather가 다음과 같은 토큰을 제공합니다:

```
123456789:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

:::caution 토큰을 비밀로 유지하세요
이 토큰은 RcloneView 설정에 필요합니다. 공개적으로 공유하지 마세요.
:::

<img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

---

## 2단계 텔레그램에서 봇 시작하기 (중요)

`getUpdates`를 통해 Chat ID를 가져오려면 먼저 봇과의 채팅을 시작해야 합니다.

### 2-1단계 봇 검색하기

1. 이름이나 사용자 이름으로 봇을 검색합니다.
2. 봇 채팅을 엽니다.

<img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

### 2-2단계 시작 버튼을 누르고 메시지 보내기

1. **시작**을 클릭합니다 (또는 `/start`를 전송).
2. 메시지를 하나 더 보냅니다 (예: `hi`).

이렇게 하면 나중에 텔레그램에서 읽을 수 있는 업데이트 기록이 생성됩니다.

<img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

---

## 3단계 텔레그램 Chat ID 찾기

### 3-1단계 브라우저에서 getUpdates 열기

다음 URL을 엽니다 (토큰으로 교체):

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

### 3-2단계 `chat.id` 추출하기

JSON 응답에서 다음을 찾습니다:

```json
"chat": {
  "id": 987654321
}
```

**Chat ID**는 `chat.id`에 있는 숫자입니다 (예: `987654321`).

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

---

## 4단계 RcloneView에서 텔레그램 원격 제어 활성화하기

### 4-1단계 설정 열기

1. RcloneView를 엽니다.
2. **설정**으로 이동합니다.
3. **인터페이스 및 알림**을 선택합니다.
4. **텔레그램 원격 제어**를 찾습니다.

### 4-2단계 켜기

**텔레그램 원격 제어**를 활성화합니다:

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

### 4-3단계 토큰과 Chat ID 입력하기

- **텔레그램 봇 토큰**: BotFather에서 발급
- **텔레그램 Chat ID**: `getUpdates`에서 확인

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

### 4-4단계 테스트 메시지 보내기

**테스트 메시지 보내기**를 클릭합니다. 정상적으로 동작하면 다음 메시지를 받게 됩니다:
`RcloneView Telegram Test Message`

<img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

---

## 5단계 텔레그램 명령어 (작업 제어)

봇과의 텔레그램 채팅에서 다음 명령어를 입력합니다.

### `/help`

사용 가능한 모든 명령어를 보여줍니다:

```
/help
```

<img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

### `/listjobs`

현재 선택된 연결의 작업 목록을 조회합니다:

```
/listjobs
```

출력 예시:

```
Total: 3
1) Backup_Photos
2) Sync_Documents
3) Archive_To_NAS
```

<img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

### `/start <jobName>`

이름으로 작업을 시작합니다:

```
/start Backup_Photos
```

:::note 작업 이름이 정확히 일치해야 합니다
`/listjobs`를 사용하여 정확한 작업 이름을 복사하세요.
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

### `/start #<number>` (권장)

가장 최근의 `/listjobs` 결과에서 번호로 작업을 시작합니다:

```
/start #2
```

:::important 먼저 `/listjobs`를 실행하세요
번호는 현재 작업 목록 출력을 기준으로 합니다.
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

### `/stop <jobId>`

실행 중인 작업을 중지합니다:

```
/stop 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

### `/status <jobId>`

실행 중인 작업의 진행 상황을 보여줍니다:

```
/status 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

---

## 자동 작업 알림

텔레그램 원격 제어가 활성화되면 RcloneView는 다음에 대해 자동으로 알림을 보낼 수 있습니다:

- 작업 시작됨
- 작업 성공적으로 완료됨
- 작업이 오류로 실패함

<img src="/support/images/en/tutorials/telegram/telegram-job-notifications.jpg" alt="telegram job notifications" class="img-large img-center" />

---

## 보안 주의사항

- 명령어는 설정된 **Chat ID**에서만 처리됩니다.
- **봇 토큰**은 비밀로 유지하세요. 비밀번호처럼 취급하세요.
- 원격 제어를 일시 중지하려면 설정에서 스위치를 끄세요.

---

## 요약

텔레그램 원격 제어는 장시간 실행되는 작업에 대해 RcloneView를 더 쉽게 운용할 수 있게 해줍니다:

- 작업을 원격으로 관리
- 실시간 알림으로 상황 파악
- PC를 열지 않고도 모바일에서 작업 제어

예약된 백업, 동기화, 대용량 전송을 실행할 때 어디서든 확인하고 싶다면 사용해 보세요.

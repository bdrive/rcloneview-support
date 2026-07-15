---

sidebar_position: 10
description: "RcloneView의 Slack 원격 제어 기능을 사용하여 작업 알림을 받고, Slack에서 원격으로 작업 목록 조회, 시작, 중지, 상태 확인을 수행하는 방법을 알아봅니다."
keywords:
  - rcloneview
  - slack 원격 제어
  - slack 봇
  - 작업 알림
  - 원격 작업 제어
  - rclone 작업 관리자
tags:
  - RcloneView
  - Tutorial
  - Slack
  - Remote-Control
  - Job-Management
date: 2026-01-19
author: steve

---

# RcloneView Slack 원격 제어

Slack 원격 제어를 사용하면 PC 앞에 앉아 있지 않아도 RcloneView 작업 알림을 받고 Slack에서 직접 작업을 제어할 수 있습니다.

이 튜토리얼에서는 다음 내용을 다룹니다:

* Slack 앱 생성(앱 매니페스트 사용)
* 필요한 토큰 발급(App Token, Bot Token)
* Slack 멤버 ID 찾기
* RcloneView에서 Slack 원격 제어 활성화
* Slack 명령어로 작업 목록 조회, 시작, 중지, 상태 확인

---

## Slack 원격 제어란?

Slack 원격 제어는 다음을 수행할 수 있는 RcloneView 내장 기능입니다:

* 작업 시작, 완료, 오류에 대한 실시간 알림 수신
* 등록된 작업 목록 조회
* 원격으로 작업 시작
* 실행 중인 작업 중지
* 필요할 때마다 작업 진행 상황과 상태 확인

RcloneView가 실행 중인 한, 모바일 Slack 앱만으로 클라우드 작업을 관리할 수 있습니다.

---

## 요구 사항

* RcloneView 설치 및 실행 중 (Desktop 또는 Headless)
* Slack 계정 및 워크스페이스
* 인터넷 연결

---

## 1단계: Slack 앱 생성 (앱 매니페스트)

가장 빠르고 정확하게 설정하려면 "앱 매니페스트" 방식으로 봇을 생성합니다.

### 1-1 Slack API 대시보드 열기

1. [Slack API 대시보드](https://api.slack.com/apps)로 이동합니다.
2. **Create New App** 버튼을 클릭합니다.

### 1-2 매니페스트로 생성

1. **From an app manifest** 옵션을 선택합니다.
2. 앱을 설치할 **Workspace**를 선택합니다.
3. **JSON** 탭을 선택하고 다음 설정 코드를 붙여넣습니다:

```json
{
    "display_information": {
        "name": "RcloneView",
        "description": "Effortlessly browse, organize, transfer files across your cloud storages.",
        "background_color": "#3f2f3f"
    },
    "features": {
        "bot_user": {
            "display_name": "RcloneView",
            "always_online": false
        },
        "slash_commands": [
            {
                "command": "/help",
                "description": "Show all commands",
                "should_escape": false
            },
            {
                "command": "/joblist",
                "description": "List jobs",
                "should_escape": false
            },
            {
                "command": "/start",
                "description": "Starts a job (Enter number or name)",
                "usage_hint": "<#number> or <jobName>",
                "should_escape": false
            },
            {
                "command": "/stop",
                "description": "Stop a running job by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            },
            {
                "command": "/jobstatus",
                "description": "Check status by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            }
        ]
    },
    "oauth_config": {
        "scopes": {
            "bot": [
                "commands",
                "chat:write",
                "chat:write.public",
                "im:write",
                "app_mentions:read",
                "files:write"
            ]
        }
    },
    "settings": {
        "interactivity": {
            "is_enabled": true
        },
        "org_deploy_enabled": false,
        "socket_mode_enabled": true,
        "token_rotation_enabled": false
    }
}

```

4. **Next**를 클릭한 다음 **Create**를 클릭하여 완료합니다.

---

## 2단계: 토큰 발급 및 저장

RcloneView에는 두 종류의 토큰이 필요합니다. **비밀번호처럼 취급하세요.**

### 2-1 App Token 발급 (Socket Mode용)

1. 왼쪽 메뉴에서 **Basic Information**을 클릭합니다.
2. **App-Level Tokens** 섹션에서 **Generate Token and Scopes**를 클릭합니다.
3. 토큰 이름을 `RcloneView`로 지정하고 `connections:write` 스코프를 추가한 뒤 생성합니다.
4. **`xapp-`**로 시작하는 토큰을 저장합니다.

### 2-2 Bot Token 가져오기

1. 왼쪽 메뉴에서 **Install App**을 클릭합니다.
2. **Install to Workspace**를 클릭하고 **Allow**를 클릭합니다.
3. **`xoxb-`**로 시작하는 **Bot User OAuth Token**을 복사합니다.

---

### 3단계: 메시지 탭 활성화

1. 왼쪽 메뉴에서 **App Home**을 클릭합니다.
2. `Messages Tab`을 켭니다.
3. `Allow users to send Slash commands and messages from the messages tab`를 체크합니다.

이렇게 하면 봇에게 직접 슬래시 명령어를 보낼 수 있습니다.

---

## 4단계: Slack 멤버 ID 찾기

봇이 알림을 받을 사용자를 알기 위해서는 고유 ID가 필요합니다.

1. Slack을 열고 **프로필 사진**을 클릭한 다음 **Profile**을 선택합니다.
2. **More(···)** 버튼을 클릭하고 **Copy member ID**를 선택합니다.
3. ID를 저장합니다 (예: `U1234567890`).
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />

---

## 5단계: RcloneView에서 Slack 원격 제어 활성화

### 5-1 설정 열기

1. RcloneView를 실행합니다.
2. **Settings** -> **Interfaces & Notifications**로 이동합니다.

### 5-2 인증 정보 입력

1. **Slack Remote Control**을 켭니다.
2. 토큰과 ID를 입력합니다:
* **Slack App Token**: `xapp-...`
* **Slack Bot Token**: `xoxb-...`
* **My Member ID**: `U...`

### 5-3 테스트 메시지 보내기

**Send Test Message**를 클릭합니다. 성공하면 휴대폰으로 메시지를 받게 됩니다.

---

## 6단계: Slack 명령어 (작업 제어)

봇이 설치된 채팅방에서 다음 명령어를 입력합니다.

### `/help`

사용 가능한 모든 명령어를 표시합니다.

### `/joblist`

현재 선택된 연결의 작업 목록을 표시합니다.

### `/start <jobName>`

이름으로 특정 작업을 시작합니다.

### `/start #<number>` (권장)

가장 최근 `/joblist` 결과의 인덱스를 사용하여 작업을 시작합니다 (예: `/start #1`).

### `/stop <JobId>`

실행 중인 작업을 중지합니다.

### `/jobstatus <JobId>`

특정 작업의 실시간 진행 상황과 통계를 확인합니다.

---

## 자동 작업 알림

활성화하면 RcloneView는 다음에 대해 자동으로 알림을 보냅니다:

* 작업 시작
* 작업 성공적으로 완료
* 오류로 인한 작업 실패

---

## 보안 참고 사항

* 명령어는 설정된 **Member ID**에서 온 경우에만 처리됩니다.
* **App Token**과 **Bot Token**을 비공개로 유지하세요.
* 원격 제어를 일시 중지해야 하는 경우 설정에서 토글을 끄기만 하면 됩니다.

---

## 요약

Slack 원격 제어는 오래 걸리는 클라우드 작업 관리를 훨씬 더 효율적으로 만들어줍니다:

* 위치에 관계없이 원격 작업 관리
* 알림을 통한 실시간 상태 업데이트
* PC 없이 모바일로 즉시 제어

지금 한 번 설정해두고 더 스마트한 클라우드 자동화 환경을 즐겨보세요!

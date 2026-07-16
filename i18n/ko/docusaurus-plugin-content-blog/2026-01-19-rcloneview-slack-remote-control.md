---
slug: rcloneview-slack-remote-control
title: "RcloneView Slack 원격 제어: 휴대폰으로 클라우드 작업 관리하기"
authors:
  - steve
description: "보안이 강화된 앱과 간단한 슬래시 명령으로 Slack에서 즉시 작업 알림을 받고 RcloneView 작업을 시작, 중지, 확인하세요."
keywords:
  - rcloneview slack
  - rclone slack bot
  - rclone remote control
  - rcloneview notifications
  - slack chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
tags:
  - job-management
  - security
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import RvCta from '@site/src/components/RvCta';

# RcloneView Slack 원격 제어: 휴대폰으로 클라우드 작업 관리하기

> RcloneView를 챗옵스 콘솔로 바꿔보세요. PC에서 떨어져 있을 때도 Slack에서 작업 알림을 받고, 작업 목록을 확인하고, 작업을 시작하거나 중지할 수 있습니다.

Slack 원격 제어를 사용하면 RcloneView가 작업 시작, 완료, 오류 알림을 휴대폰으로 보내고, 간단한 슬래시 명령으로 작업을 실행하거나 중지할 수 있습니다. 장시간 백업, 야간 동기화, 또는 모바일로 빠르게 제어하고 싶은 원격 서버 환경에 적합합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Slack에서 할 수 있는 일

- **실시간 알림**: 작업이 시작, 완료, 또는 오류가 발생할 때 즉시 알림을 받습니다.
- **작업 목록 보기**: 등록된 모든 RcloneView 작업을 깔끔한 목록으로 확인합니다.
- **원격 작업 제어**: 이름 또는 인덱스(#N)로 작업을 시작하거나, 즉시 중지할 수 있습니다.
- **필요할 때 상태 확인**: 진행률, 전송 속도, 예상 남은 시간을 언제든지 확인합니다.

*참고: Slack 명령을 처리하려면 RcloneView가 PC 또는 서버에서 실행 중이어야 합니다.*

## 사전 준비 사항

- RcloneView가 설치되어 실행 중이어야 합니다 (Desktop 또는 Headless).
- Slack 계정과 본인 소유의 워크스페이스가 필요합니다.
- 인터넷 연결이 필요합니다.

---

## 1단계: Slack 앱 생성 (매니페스트 사용)

보안을 최대화하기 위해 RcloneView는 사용자가 직접 봇을 생성하는 "프라이빗 앱" 방식을 사용합니다. 이를 통해 데이터가 어떠한 제3자 서버도 거치지 않고 PC에서 Slack으로 직접 전달됩니다.

1. [Slack API 대시보드](https://api.slack.com/apps)로 이동하여 **[Create New App]**을 클릭합니다.
   
2. **[From a manifest]**를 선택합니다.
   
3. 앱을 설치할 **Workspace**를 선택하고 **[Next]**를 클릭합니다.
4. **[JSON]** 탭을 선택하고 기존 내용을 삭제한 뒤 아래 코드를 붙여넣습니다:

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
                "description": "Start a job (Enter number or name)",
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

5. **[Next]**를 클릭한 후, **[Create]**를 클릭하여 앱 생성을 완료합니다.

---

## 2단계: 토큰 발급받기

RcloneView 설정을 위해 두 종류의 토큰이 필요합니다. **이 토큰들은 비밀번호처럼 취급하고 절대 다른 사람과 공유하지 마세요.**

### ① 앱 토큰 발급받기 (Socket Mode용)

1. 왼쪽 메뉴에서 **[Basic Information]**으로 이동합니다.
2. 아래로 스크롤하여 **[App-Level Tokens]** 섹션에서 **[Generate Token and Scopes]**를 클릭합니다.
3. 이름을 `RcloneView`로 설정하고 **[Add Scope]**를 클릭하여 `connections:write`를 선택한 뒤 **[Generate]**를 클릭합니다.
4. `xapp-...`로 시작하는 토큰을 복사하여 저장합니다.

### ② 봇 토큰 발급받기 (메시지 전송용)

1. 왼쪽 메뉴에서 **[Install App]**으로 이동합니다.
2. 녹색 **[Install to Workspace]** 버튼을 클릭하고 **[Allow]**를 클릭합니다.
3. `xoxb-...`로 시작하는 **Bot User OAuth Token**을 복사하여 저장합니다.

---

### 3단계: 메시지 탭 활성화

1. 왼쪽 메뉴에서 **App Home**을 클릭합니다.
2. `Messages Tab`을 켭니다.
3. `Allow users to send Slash commands and messages from the messages tab`를 체크합니다.

이렇게 하면 봇에게 직접 슬래시 명령을 보낼 수 있습니다.

---

## 4단계: 내 멤버 ID 찾기

봇이 알림(DM)을 보낼 사용자를 알기 위해서는 사용자의 고유 ID가 필요합니다.

1. Slack 앱을 열고 프로필 사진을 클릭한 뒤 **[Profile]**을 선택합니다.
2. **[More (···)]** 버튼을 클릭합니다.
3. 메뉴 하단의 **[Copy member ID]**를 선택합니다. (예: `U1234567890`)
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />


---

## 5단계: RcloneView에서 Slack 제어 활성화

1. RcloneView를 열고 **Settings -> Interfaces & Notifications**로 이동합니다.
2. **Slack Remote Control** 스위치를 켭니다.
3. 각 필드에 **App Token**, **Bot Token**, **Member ID**를 입력합니다.
4. **[Send Test Message]**를 클릭하여 휴대폰으로 메시지가 오는지 확인합니다.

---

## ⌨️ 명령어 가이드 (ChatOps)

봇이 있는 모든 채팅에서 다음 명령을 입력하세요:

* `/help` - 사용 가능한 모든 명령을 표시합니다.
* `/joblist` - 현재 연결에 등록된 모든 작업을 나열합니다.
* `/start <jobName>` - 정확한 이름으로 작업을 시작합니다.
* `/start #<number>` - `/joblist`의 인덱스를 사용하여 작업을 시작합니다 (예: `/start #1`).
* `/stop <JobId>` - Job ID를 사용하여 실행 중인 작업을 중지합니다.
* `/jobstatus <JobId>` - 특정 작업의 실시간 진행 상황과 통계를 확인합니다.

---

## 보안 및 관리 팁

* **사용자 식별**: 설정된 Member ID만 명령을 실행할 권한을 가집니다.
* **토큰 교체**: 토큰이 노출된 경우 즉시 Slack API 페이지로 이동하여 `Regenerate`를 클릭하세요.
* **오프라인 상태**: RcloneView가 실행 중이 아니면 Slack 봇이 명령에 응답하지 않습니다.

## 관련 자료

* [RcloneView 기본 가이드](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
* [작업 스케줄링 및 자동화](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
* [실시간 전송 모니터링](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## 마무리

Slack은 RcloneView를 모바일 명령 센터로 만들어줍니다. 항상 알림을 받고, 작업을 즉시 시작하거나 중지할 수 있으며, 오류에 더 빠르게 대응할 수 있습니다. 한 번만 설정해두고 토큰을 안전하게 보관하면, 자리를 비운 동안에도 안심하고 클라우드 자동화를 관리할 수 있습니다.

<CloudSupportGrid />

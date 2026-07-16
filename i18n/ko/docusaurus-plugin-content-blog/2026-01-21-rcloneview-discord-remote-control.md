---
slug: rcloneview-discord-remote-control
title: "RcloneView Discord 원격 제어: Discord에서 클라우드 작업 관리하기"
authors:
  - steve
description: "자신만의 안전한 봇, Application ID, Discord 사용자 ID를 사용하여 Discord에서 작업 알림을 받고 RcloneView 명령을 실행하세요."
keywords:
  - rcloneview discord
  - rclone discord bot
  - rclone remote control
  - rcloneview notifications
  - discord chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
tags:
  - RcloneView
  - backup
  - cloud-storage
  - job-management
  - security
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import RvCta from '@site/src/components/RvCta';

# RcloneView Discord 원격 제어: Discord에서 클라우드 작업 관리하기

> RcloneView를 Discord 챗옵스 콘솔로 바꿔보세요: PC를 열지 않고도 Discord에서 작업 알림을 받고, 작업 목록을 확인하고, 작업을 시작하거나 중지할 수 있습니다.

Discord 원격 제어 기능을 사용하면 RcloneView가 작업 시작, 완료, 오류 알림을 보내주며, 작업을 실행하거나 중지하는 간단한 명령도 받아들입니다. 장시간 백업, 야간 동기화, 또는 데스크톱이나 모바일에서 Discord를 통해 빠르게 제어하고 싶은 원격 서버 환경에 안성맞춤입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Discord에서 할 수 있는 일

- **실시간 알림**: 작업이 시작, 완료되거나 오류가 발생하면 즉시 알림을 받습니다.
- **작업 목록 보기**: 등록된 모든 RcloneView 작업을 깔끔한 목록으로 확인합니다.
- **원격 작업 제어**: 이름 또는 인덱스(#N)로 작업을 시작하거나 즉시 중지합니다.
- **온디맨드 상태 확인**: 언제든지 진행 상황, 전송 속도, 예상 남은 시간을 확인합니다.

*참고: Discord 명령을 처리하려면 PC 또는 서버에서 RcloneView가 실행 중이어야 합니다.*

## 사전 준비 사항

- RcloneView가 설치되어 실행 중이어야 합니다(Desktop 또는 Headless).
- Discord 계정이 필요합니다.
- 봇을 설치할 수 있는 Discord 서버(Guild Install)가 필요합니다.
- 인터넷 연결이 필요합니다.

---

## 1단계: Discord 애플리케이션과 봇 만들기

최고 수준의 보안을 위해 RcloneView는 "직접 봇을 가져오는(bring your own bot)" 방식을 사용합니다. 데이터는 제3자 중계 없이 RcloneView와 Discord 사이에서 직접 오갑니다.

1. [Discord Developer Portal](https://discord.com/developers/applications)로 이동하여 **New Application**을 클릭합니다. 이름을 지정합니다(예: `RcloneView`).
2. **Installation**을 열고 Installation Context로 **Guild Install**을 선택한 다음(User Install이 켜져 있다면 끄세요) 저장합니다.
3. **Bot** 탭으로 이동해 **Add Bot**을 클릭한 뒤, 복사하거나 재설정하여 **Discord Bot Token**을 얻습니다. 이 토큰은 비밀로 유지하세요.
4. 슬래시 명령뿐만 아니라 일반 텍스트 명령도 보낼 계획이라면, RcloneView가 명령 텍스트를 읽을 수 있도록 Bot 탭에서 **MESSAGE CONTENT INTENT**를 활성화하세요.

---

## 2단계: 서버 생성 및 봇 설치

봇을 사용하려면 봇이 상주할 Discord 서버("Guild"라고도 함)가 필요합니다. RcloneView 로그를 위한 전용 서버가 없다면 아래 단계를 따르세요.

### 2-1단계 새 Discord 서버 만들기

1. **Discord 앱**(Desktop 또는 Web)을 엽니다.
2. 왼쪽 서버 목록 하단에 있는 **더하기(+) 아이콘**(서버 추가)을 클릭합니다.
3. **직접 만들기**를 선택합니다.
4. **나와 친구들을 위한 서버**를 선택합니다.
5. 서버 이름을 입력하고(예: `RcloneView Control Center`) **만들기**를 클릭합니다.
   

### 2-2단계 서버에 봇 설치하기

1. 다시 **Discord Developer Portal**로 이동합니다.
2. **OAuth2 > URL Generator**를 엽니다.
3. 범위(scope)에서 **bot**과 **applications.commands**를 선택합니다.
4. **Bot Permissions**에서 **Send Messages**, **Use Slash Commands**, 그리고 로그 파일을 받고 싶다면 **Attach Files**를 선택합니다.
5. 하단에 생성된 URL을 복사하여 브라우저에 붙여넣습니다.
6. 방금 만든 서버(예: `RcloneView Control Center`)를 선택하고 **Authorize**를 클릭합니다.

---

## 3단계: RcloneView에 필요한 값 수집하기

- **Discord Bot Token**: **Bot** 탭에서 확인(1-3단계 참고).
- **Discord Application ID**: Developer Portal의 **General Information**에서 확인.
- **My Discord User ID (Snowflake)**: 사용자를 고유하게 식별하는 긴 숫자 ID.

### Discord 사용자 ID 확인 방법

1. Discord(Desktop 또는 Web)에서 **User Settings**(⚙️)를 엽니다.
2. **Advanced**로 이동해 **Developer Mode**를 켭니다.
3. **프로필 사진** 또는 **사용자명**(왼쪽 하단 또는 멤버 목록)을 마우스 오른쪽 버튼으로 클릭하고 **Copy User ID**를 선택합니다. 표시된 숫자를 저장하세요(예: `123456789012345678`).

이 ID가 왜 필요한가요?

- **보안**: 앱은 본인 계정에서 보낸 명령만 처리합니다.
- **직접 알림**: 봇은 작업이 시작되거나 실패했을 때 정확히 어떤 사용자에게 DM을 보내야 하는지 알 수 있습니다.

---

## 4단계: RcloneView에서 Discord 제어 활성화하기

1. RcloneView를 열고 **Settings -> Interfaces & Notifications**로 이동합니다.
2. **Discord Remote Control** 스위치를 켭니다.
3. 필드에 **Discord Bot Token**, **Discord Application ID**, **My Discord User ID**를 입력합니다.
4. **Send Test Message**를 클릭하여 봇으로부터 DM을 받는지 확인합니다.

---

## ⌨️ 명령어 가이드(ChatOps)

봇에 명령을 보냅니다(사생활 보호를 위해 DM을 권장하며, 봇이 접근 권한이 있는 채널에서도 작동합니다):

- `/help` — 사용 가능한 모든 명령을 표시합니다.
- `/joblist` — 현재 연결에 등록된 모든 작업을 나열합니다.
- `/start <jobName>` — 정확한 이름으로 작업을 시작합니다.
- `/start #<number>` — `/joblist`의 인덱스를 사용해 작업을 시작합니다(예: `/start #1`).
- `/stop <JobId>` — Job ID를 사용해 실행 중인 작업을 중지합니다.
- `/jobstatus <JobId>` — 특정 작업의 실시간 진행 상황과 통계를 확인합니다.

---

## 보안 및 관리 팁

- **사용자 식별**: 설정된 Discord 사용자 ID만 명령을 실행할 권한을 갖습니다.
- **토큰 보안**: Bot Token과 Application ID를 비밀번호처럼 취급하세요. 노출되었다면 재설정하세요.
- **온라인 상태**: RcloneView가 실행 중이 아니면 Discord 봇은 명령에 응답하지 않습니다.

## 관련 자료

- [RcloneView 기본 가이드](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
- [작업 예약 및 자동화](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
- [실시간 전송 모니터링](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## 마무리

Discord는 RcloneView를 모바일 명령 센터로 바꿔줍니다: 항상 알림을 받고, 즉시 작업을 시작하거나 중지할 수 있으며, 오류에 더 빠르게 대응할 수 있습니다. 한 번만 설정해두고 토큰을 안전하게 보관하면, 자리를 비운 사이에도 자신 있게 클라우드 자동화를 관리할 수 있습니다.

<CloudSupportGrid />

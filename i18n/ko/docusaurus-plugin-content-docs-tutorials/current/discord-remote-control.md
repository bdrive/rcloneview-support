---
sidebar_position: 11
description: RcloneView의 Discord 원격 제어 기능을 사용해 작업 알림을 받고, Discord에서 원격으로 작업 목록 조회, 시작, 중지 및 상태 확인을 수행하는 방법을 안내합니다.
keywords:
  - rcloneview
  - discord 원격 제어
  - discord 봇
  - 작업 알림
  - 원격 작업 제어
  - rclone 작업 관리자
tags:
  - RcloneView
  - Tutorial
  - Discord
  - Remote-Control
  - Job-Management
date: 2026-01-20
author: steve
---

# RcloneView Discord 원격 제어

Discord 원격 제어를 사용하면 PC 앞에 앉아 있지 않아도 RcloneView 작업 알림을 받고 Discord에서 직접 작업을 제어할 수 있습니다.

이 튜토리얼에서는 다음 내용을 다룹니다.

- Discord 애플리케이션 및 봇 생성
- 설치 컨텍스트를 **Guild Install**로 설정
- 필요한 ID(봇 토큰, 애플리케이션 ID, Discord 사용자 ID) 확인
- RcloneView에서 Discord 원격 제어 활성화
- Discord 명령어로 작업 목록 조회/시작/중지 및 상태 확인

---

## Discord 원격 제어란?

Discord 원격 제어는 다음을 수행할 수 있게 해주는 RcloneView 내장 기능입니다.

- 작업 시작, 완료, 오류에 대한 실시간 알림 수신
- 등록된 작업 목록 조회
- 작업을 원격으로 시작
- 실행 중인 작업 중지
- 필요할 때 작업 진행 상황 및 상태 확인

RcloneView가 실행 중이기만 하면 Discord 클라이언트에서 클라우드 작업을 관리할 수 있습니다.

---

## 요구 사항

- RcloneView 설치 및 실행 중(데스크톱 또는 헤드리스)
- Discord 계정
- 서버에 Discord 봇을 생성 및 설치할 권한(Guild Install)
- 인터넷 연결

---

## 1단계: Discord 애플리케이션 및 봇 생성

### 1-1단계 Discord 개발자 포털 열기

1. [Discord 개발자 포털](https://discord.com/developers/applications)로 이동합니다.
2. **New Application**을 클릭하고 이름을 입력합니다(예: `RcloneView`).
   <img src="/support/images/en/tutorials/discord/discord-new-application.png" class="img-large img-center" />

### 1-2단계 설치 컨텍스트를 Guild Install로 설정

1. 왼쪽 메뉴에서 **Installation**을 엽니다.
2. **Installation Contexts**에서 **Guild Install**을 선택합니다. (User Install이 켜져 있으면 비활성화합니다.)
3. 변경 사항을 저장합니다.
   <img src="/support/images/en/tutorials/discord/discord-installation-context.png" class="img-large img-center" />

### 1-3단계 봇 추가 및 봇 토큰 발급

1. **Bot** 탭을 엽니다.
2. **Add Bot**을 클릭하고 확인합니다.
3. **Reset Token**(또는 **Copy Token**)을 클릭하여 **Discord 봇 토큰**을 발급받습니다. 이 토큰은 비밀로 유지하세요.
   <img src="/support/images/en/tutorials/discord/discord-bot-token.png" class="img-large img-center" />

### 1-4단계 봇의 메시지 읽기 권한 허용(권장)

슬래시 명령어 대신 텍스트 명령어를 보낼 계획이라면, Bot 탭에서 **MESSAGE CONTENT INTENT**를 활성화하여 RcloneView가 DM이나 채널에서 명령어 텍스트를 읽을 수 있도록 합니다.
   <img src="/support/images/en/tutorials/discord/discord-privileged-intent.png" class="img-large img-center" />

---

## 2단계: 서버 생성 및 봇 설치

봇을 사용하려면 봇이 상주할 Discord 서버("길드"라고도 함)가 필요합니다. RcloneView 로그용 전용 서버가 없다면 아래 단계를 따르세요.

### 2-1단계 새 Discord 서버 생성

1. **Discord 앱**(데스크톱 또는 웹)을 엽니다.
2. 왼쪽 서버 목록 하단의 **더하기(+) 아이콘**(Add a Server)을 클릭합니다.
3. **Create My Own**을 선택합니다.
4. **For me and my friends**를 선택합니다.
5. 서버 이름을 입력하고(예: `RcloneView Control Center`) **Create**를 클릭합니다.
   

### 2-2단계 서버에 봇 설치

1. **Discord 개발자 포털**로 돌아갑니다.
2. **OAuth2 > URL Generator**를 엽니다.
3. 스코프에서 **bot**과 **applications.commands**를 선택합니다.
4. **Bot Permissions**에서 **Send Messages**, **Use Slash Commands**, 그리고 로그 파일을 받으려면 **Attach Files**를 선택합니다.
5. 하단에 생성된 URL을 복사해 브라우저에 붙여넣습니다.
6. 방금 만든 서버(예: `RcloneView Control Center`)를 선택하고 **Authorize**를 클릭합니다.

---

## 3단계: RcloneView에 필요한 값 수집

- **Discord 봇 토큰**: **Bot** 탭에서 확인(1-3단계).
- **Discord 애플리케이션 ID**: 개발자 포털의 **General Information**에서 확인.
- **내 Discord 사용자 ID(Snowflake)**: 사용자를 고유하게 식별하는 긴 숫자입니다.

### Discord 사용자 ID 확인 방법

`Discord 사용자 ID`를 확인하려면 먼저 개발자 모드를 활성화하세요.

1. Discord(데스크톱 또는 웹)를 엽니다.
2. 왼쪽 하단의 **사용자 설정**(⚙️)을 클릭합니다.
3. **App Settings**에서 **Advanced**를 엽니다.
4. **Developer Mode**를 **On**으로 전환합니다.

그런 다음 ID를 복사합니다.

1. **프로필 사진** 또는 **사용자 이름**(왼쪽 하단 또는 채팅/멤버 목록)을 마우스 오른쪽 버튼으로 클릭합니다.
2. **Copy User ID**를 클릭합니다.
3. 긴 숫자 문자열을 저장합니다(예: `123456789012345678`).
   <img src="/support/images/en/tutorials/discord/discord-copy-userid.png" class="img-large img-center" />

이 ID가 필요한 이유는 무엇인가요?

- 보안: Flutter 앱은 내 계정에서 온 명령어만 처리합니다.
- 직접 알림: 작업이 시작되거나 실패했을 때 봇이 정확히 어떤 사용자에게 DM을 보내야 하는지 알 수 있습니다.

---

## 4단계: RcloneView에서 Discord 원격 제어 활성화

### 4-1단계 설정 열기

1. RcloneView를 실행합니다.
2. **Settings** -> **Interfaces & Notifications**로 이동합니다.

### 4-2단계 인증 정보 입력

1. **Discord Remote Control**을 켭니다.
2. 다음을 입력합니다.
   - **Discord 봇 토큰**: `...`
   - **Discord 애플리케이션 ID**: **General Information**에서 확인.
   - **내 Discord 사용자 ID**: `123456789012345678`

### 4-3단계 테스트 메시지 보내기

**Send Test Message**를 클릭합니다. 성공하면 Discord에서 봇으로부터 DM을 받게 됩니다.
   <img src="/support/images/en/tutorials/discord/discord-test-message-received.png" class="img-large img-center" />

---

## 5단계: Discord 명령어(작업 제어)

봇에게 명령어를 보냅니다(프라이버시를 위해 DM을 권장하지만, 봇이 있고 실행 권한이 있는 채널에서도 사용할 수 있습니다).

### `/help`

사용 가능한 모든 명령어를 표시합니다.

### `/joblist`

현재 선택된 연결의 작업 목록을 표시합니다.

### `/start <jobName>`

이름으로 특정 작업을 시작합니다.

### `/start #<number>`(권장)

가장 최근 `/joblist` 결과의 인덱스를 사용해 작업을 시작합니다(예: `/start #1`).

### `/stop <JobId>`

실행 중인 작업을 중지합니다.

### `/jobstatus <JobId>`

특정 작업의 실시간 진행 상황과 통계를 확인합니다.

---

## 자동 작업 알림

활성화하면 RcloneView는 다음에 대해 자동으로 알림을 보냅니다.

- 작업 시작
- 작업 성공적으로 완료
- 오류로 인한 작업 실패

---

## 보안 참고 사항

- 명령어는 구성된 **Discord 사용자 ID**에서 온 경우에만 처리됩니다.
- **Discord 봇 토큰**과 **애플리케이션 ID**는 비공개로 유지하세요.
- 원격 제어를 일시 중지하려면 설정에서 토글을 끄기만 하면 됩니다.

---

## 요약

Discord 원격 제어를 사용하면 PC 앞에 있지 않아도 장시간 실행되는 전송 작업을 운용할 수 있습니다.

- Discord를 통한 원격 작업 관리
- 알림을 통한 실시간 상태 업데이트
- 모바일 또는 데스크톱 Discord를 통한 즉각적인 제어

한 번 설정해두면 어디서든 클라우드 자동화를 관리할 수 있습니다.

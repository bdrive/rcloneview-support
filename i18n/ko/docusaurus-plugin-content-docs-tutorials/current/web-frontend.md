---
sidebar_position: 1
description: "RcloneView의 내장 웹 서버를 활성화하여 로컬 네트워크의 모든 브라우저에서 Explorer, Jobs, Remotes, Settings에 액세스하세요."
keywords:
  - rcloneview
  - 웹 프론트엔드
  - 웹 서버
  - 브라우저 액세스
  - 원격 액세스
  - 웹 UI
  - rclone 웹 인터페이스
tags:
  - RcloneView
  - Tutorial
  - Web-Frontend
  - Remote-Access
date: 2026-03-27
author: steve
---

# RcloneView 웹 프론트엔드

RcloneView에는 웹 브라우저에서 RcloneView의 전체 인터페이스에 액세스할 수 있게 해주는 내장 웹 서버가 포함되어 있습니다. 데스크톱 앱 창을 열지 않고도 리모트를 탐색하고, 작업을 관리하고, 설정을 구성할 수 있습니다.

이 튜토리얼에서 다루는 내용:

- RcloneView 설정에서 웹 서버 활성화하기
- 포트, 사용자 이름, 비밀번호 구성하기
- 브라우저에서 웹 프론트엔드에 액세스하기
- 네트워크의 다른 기기에서 원격 액세스 허용하기

---

## 웹 프론트엔드란?

웹 프론트엔드는 데스크톱 앱 경험을 그대로 반영하는 RcloneView의 브라우저 기반 인터페이스입니다. 내장 웹 서버가 실행되면 브라우저를 열고 다음을 포함한 익숙한 UI를 통해 RcloneView와 상호작용할 수 있습니다:

- **Explorer** — 로컬 및 원격 스토리지 탐색
- **Jobs** — 동기화/복사 작업 보기 및 관리
- **Remotes** — 리모트 연결 관리
- **Settings** — RcloneView 옵션 구성

같은 네트워크의 다른 기기에서 전송을 관리하고 싶거나 단순히 브라우저 기반 워크플로를 선호할 때 유용합니다.

---

## 요구 사항

- RcloneView가 설치되어 실행 중이어야 함 (데스크톱)
- 최신 웹 브라우저 (Chrome, Firefox, Safari, Edge 등)
- 원격 액세스를 위해서는 같은 로컬 네트워크에 있는 기기

---

## 1단계: 웹 서버 설정 열기

1. **RcloneView**를 실행합니다.
2. **Settings** > **Network & Misc**로 이동합니다.
3. **Beta**로 표시된 **Web Server** 섹션을 찾습니다.

<img src="/support/images/en/tutorials/web-frontend/web-server-settings.png" alt="Web Server settings in RcloneView" class="img-large img-center" />

---

## 2단계: 웹 서버 구성

**Web Server** 섹션에서 다음을 구성합니다:

- **Port**: 웹 서버의 포트 번호 (기본값: `8580`). 기본 포트가 다른 서비스와 충돌하는 경우 변경하세요.
- **Username**: 인증에 사용할 사용자 이름을 설정합니다 (예: `admin`).
- **Password**: 웹 프론트엔드에 대한 액세스를 보호할 비밀번호를 설정합니다.

---

## 3단계: 웹 서버 활성화

1. **Enable Web Server**를 **On**으로 전환합니다.
2. 상태가 **Stopped**에서 **Running on port 8580**(또는 구성한 포트)으로 변경됩니다.
3. 설정을 변경한 후 사용할 수 있는 **Restart Server** 버튼이 나타납니다.

<img src="/support/images/en/tutorials/web-frontend/web-server-running.png" alt="Web Server running on port 8580" class="img-large img-center" />

---

## 4단계: 웹 프론트엔드 액세스

1. 같은 컴퓨터에서 웹 브라우저를 엽니다.
2. `http://localhost:8580` (또는 구성한 포트)으로 이동합니다.
3. RcloneView 로그인 화면이 나타납니다. 2단계에서 구성한 **Username**과 **Password**를 입력한 다음 **Sign In**을 클릭합니다.

<img src="/support/images/en/tutorials/web-frontend/web-frontend-login.png" alt="RcloneView Web Frontend login screen" class="img-large img-center" />

4. RcloneView 웹 프론트엔드가 전체 인터페이스와 함께 로드됩니다 — 왼쪽 사이드바에서 Explorer, Jobs, Remotes, Settings에 모두 액세스할 수 있습니다.

<img src="/support/images/en/tutorials/web-frontend/web-frontend-explorer.png" alt="RcloneView Web Frontend Explorer" class="img-large img-center" />

---

## 5단계: 원격 액세스 허용 (선택 사항)

기본적으로 웹 서버는 **localhost (127.0.0.1)**의 연결만 허용합니다. 네트워크의 다른 기기에서 RcloneView에 액세스하려면:

1. **Allow remote access**를 **On**으로 전환합니다.
2. 변경 사항을 적용하려면 **Restart Server**를 클릭합니다.
3. 다른 기기에서 브라우저를 열고 `http://<your-computer-ip>:8580`으로 이동합니다.

> **보안 참고:** 원격 액세스를 활성화하면 네트워크의 모든 기기가 웹 프론트엔드에 접근할 수 있습니다. 액세스를 보호하려면 항상 강력한 사용자 이름과 비밀번호를 사용하세요.

---

## 요약

RcloneView 웹 프론트엔드를 사용하면 모든 핵심 기능에 브라우저 기반으로 액세스할 수 있습니다:

- **Settings > Network & Misc**에서 웹 서버 활성화
- 안전한 액세스를 위한 포트, 사용자 이름, 비밀번호 설정
- `http://localhost:8580`에서 전체 UI 액세스
- 필요에 따라 네트워크의 다른 기기를 위한 원격 액세스 활성화

RcloneView를 백그라운드에서 계속 실행하면서 어떤 브라우저에서든 클라우드 스토리지를 관리하세요.


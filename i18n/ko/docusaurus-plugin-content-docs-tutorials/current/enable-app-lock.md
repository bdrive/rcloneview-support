---
sidebar_position: 13
description: "RcloneView에서 앱 잠금(App Lock)을 활성화하여 실행 시 비밀번호를 요구하고 리모트, 전송, 작업, 마운트 및 내부 데이터베이스를 보호하세요."
keywords:
  - rcloneview
  - app lock
  - password
  - security
  - rclone_view.db
  - job history
  - transfer history
  - settings
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - password
date: 2025-12-08
author: tayson
---

# 앱 잠금(비밀번호 보호) 사용하기

**앱 잠금(App Lock)**은 RcloneView가 시작되거나 다시 열릴 때 비밀번호를 요구하여 리모트, 전송 기록, 작업, 마운트 정보, 작업 기록, 내부 데이터베이스(`rclone_view.db`)를 보호합니다. 여러 사용자가 접근할 수 있는 공유 PC나 회사 PC에 이상적입니다.

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## 앱 잠금을 사용하는 이유

- RcloneView 작업, 마운트, 전송 기록을 비공개로 유지합니다.
- 공유 PC나 사무실 환경에 적합합니다.
- 민감한 동기화/마운트 작업 및 자동화 작업을 보호합니다.
- 자동 작업이 백그라운드에서 실행 중이더라도 보안 계층을 추가합니다.

## 앱 잠금 활성화 방법

### 1단계 — 설정 열기

- 상단 메뉴에서 **설정 → 일반 설정(Settings → General Settings)**으로 이동합니다.
  <img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open settings menu" />

### 2단계 — 일반 탭에서 앱 잠금 켜기

- **일반(General)**에서 **앱 잠금 활성화(Enable App Lock)**를 체크합니다.
- 사용할 비밀번호를 입력합니다.
- **닫기(Close)**를 클릭하여 저장합니다.

<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

## 앱 잠금의 동작 방식

앱 잠금이 활성화되면 RcloneView를 실행하거나 창을 다시 열 때 접근이 허용되기 전에 비밀번호 입력을 요구합니다.

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## 앱 잠금 재설정(Reset App)

비밀번호를 잊어버린 경우 비밀번호 입력 화면에서 **앱 초기화(Reset App)**를 클릭하세요.

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

**경고:** 앱 초기화(Reset App)는 RcloneView의 모든 내부 데이터를 삭제합니다.

- 앱 잠금 비밀번호
- 모든 설정 값
- 전송 기록
- 작업 정의
- 작업 기록

초기화되지 않는 항목: **rclone config**(`rclone.conf`)는 그대로 유지되므로 리모트 정의는 손상되지 않습니다.

## 권장 사용 사례

- 공유 또는 공용 PC.
- 회사 또는 기관 환경.
- 많은 자동화 작업을 실행하며 변조를 방지하고 싶을 때.
- 작업/전송 기록과 내부 데이터를 보호해야 할 때.

## 요약

| 항목 | 설명 |
| --- | --- |
| 기능 | RcloneView 시작/재실행 시 비밀번호 요구 |
| 보호 대상 | 설정, 작업, 전송 기록, DB 파일 |
| 트리거 | 앱 실행 또는 재실행 |
| 초기화 | **앱 초기화(Reset App)**는 내부 데이터를 삭제하지만 `rclone.conf`는 유지 |
| 적합 대상 | 공유 PC, 높은 보안이 필요한 환경 |

앱 잠금은 작지만 강력한 보호막을 제공하는 스위치입니다. 활성화하여 RcloneView 활동과 기록을 비공개로 유지하세요.

---
sidebar_position: 10
description: RcloneView에서 일반 환경설정, 인터페이스 레이아웃, 알림, 내장 Rclone 설정을 구성하는 방법을 알아봅니다.
keywords:
  - rcloneview
  - rclone
  - rcloneview settings
  - 일반 환경설정
  - dark mode
  - rclone log
  - rclone configurations
tags:
  - RcloneView
  - settings
  - configuration
  - preferences
date: 2025-06-22
author: Jay
---
# 일반 설정

RcloneView의 **설정** 메뉴는 명확성과 사용자 지정을 위해 네 개의 탭으로 나뉘어 있습니다.

- **일반**
- **인터페이스 및 알림**
- **내장 Rclone**
- **네트워크 및 기타**

각 탭에서는 애플리케이션의 서로 다른 부분을 구성할 수 있습니다. 아래에서 각 섹션을 자세히 살펴보겠습니다.

---

## 🛠 일반

<img src="/support/images/en/howto/rcloneview-basic/general-settings.png" alt="general settings" class="img-medium img-center" />
### 언어

- **언어**: 드롭다운에서 원하는 UI 언어를 선택합니다.

### 시작 동작

- **로그인 시 실행**: 시스템에 로그인할 때 RcloneView를 자동으로 시작합니다.

:::important 자동 시작: 예약 및 마운트

**로그인 시 실행**이 활성화된 경우:  

- [**작업 스케줄러**](/howto/rcloneview-advanced/job-scheduling-and-execution)에 정의된 예약 작업은 로그인 시 자동으로 실행됩니다.  
- [**마운트 관리자**](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)에서 자동 마운트로 구성된 리모트는 RcloneView가 시작될 때 자동으로 마운트됩니다.  
:::

- **최소화하여 시작**: RcloneView를 시스템 트레이로 실행합니다.

- **Synology NAS 자동 감지**: 로컬 네트워크에서 Synology NAS 장치를 자동으로 검색합니다.

### 초기화

- **기본 설정 복원**: 모든 옵션을 원래 기본값으로 재설정합니다.

---

## 🎛  인터페이스 및 알림

<img src="/support/images/en/howto/rcloneview-basic/interface-settings.png" alt="interface settings" class="img-medium img-center" />
### UI 모양

- **다크 모드**: 라이트 테마와 다크 테마 간에 전환합니다.
- **테마 색상**: 사용 가능한 강조 색상 중에서 선택합니다.

### 드래그 앤 드롭

- **드래그 앤 드롭 확인**: 드래그 앤 드롭으로 파일을 이동할 때 확인 팝업을 표시합니다.

### 작업 유형 표시(전송 로그 필터)

전송 로그 패널에 표시할 작업 유형을 선택합니다.
- **다운로드**
- **업로드**
- **동기화**

<img src="/support/images/en/howto/rcloneview-basic/notification-dialogs-settings.png" alt="notification dialogs settings" class="img-medium img-center" />
### 알림 대화상자

RcloneView 사용 중 받고 싶은 팝업 알림 유형을 결정합니다.

- **작업 상태 로그 표시**: 각 전송 작업이 완료된 후 상세 로그 대화상자를 표시합니다.
- **비교 완료 표시**: 폴더 비교 작업이 성공적으로 완료되면 알립니다.
- **비교 중 파일 삭제 전 확인 표시**: 폴더 비교 중 파일을 삭제하기 전에 확인을 요청합니다.
- **동기화 완료 알림 표시**: 동기화 작업이 완료되면 메시지를 표시합니다.
- **네트워크 오류 대화상자 표시**: 작업 중 네트워크 연결 오류가 발생하면 즉시 알립니다.

---

## ⚙️ 내장 Rclone

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-settings.png" alt="embedded rclone settings" class="img-medium img-center" />

### 내장 프로세스 수명 주기

- **앱 종료 시 rclone 중지**: RcloneView가 종료될 때 내장된 `rclone` 프로세스를 자동으로 종료합니다.

:::caution 변경 후 재시작 필요

경로 설정, 전역 플래그, 로깅 옵션 등 **내장 Rclone** 탭에서 설정을 변경한 후에는 **내장 Rclone 재시작**을 클릭하여 변경 사항을 적용해야 합니다.  
이렇게 하면 내장 Rclone 프로세스가 재시작되며, 현재 실행 중인 작업이 중단될 수 있습니다.

:::
### 경로 설정

- **로컬 Rclone 위치**: `rclone` 바이너리의 절대 경로입니다.
- **로컬 Rclone 설정 위치**: `rclone.conf` 파일(리모트 정보 포함)의 경로입니다.
- **기본 다운로드 폴더**: 다운로드한 파일이 저장될 디렉터리입니다.
- **기본 업로드 폴더**: 업로드 작업의 소스로 사용되는 디렉터리입니다.

   <img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-advanced-options-settings.png" alt="embedded rclone advanced options settings" class="img-medium img-center" />
### 고급 옵션

- **전역 Rclone 플래그**: rclone에 전달할 추가 플래그입니다(예: `--s3-directory-markers`).
- **설정 비밀번호**: 암호화된 rclone 설정에 사용할 비밀번호입니다. 이 비밀번호를 설정하면 rclone 설정 파일이 암호화됩니다.

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-logging-configuration-settings.png" alt="embedded rclone logging configuration settings" class="img-medium img-center" />
### 로깅 구성

- **rclone 로깅 활성화**: Rclone 작업에 대한 파일 기반 로깅을 활성화합니다.
- **로그 폴더**: 로그 파일을 저장할 디렉터리입니다.
- **로그 파일 이름**: 로그의 기본 파일 이름입니다.
- **로그 수준**: 상세도 수준을 선택합니다(DEBUG, INFO, NOTICE, ERROR).

---

## 🌐 네트워크 및 기타

<img src="/support/images/en/howto/rcloneview-basic/network-etc-settings.png" alt="network etc settings" class="img-medium img-center" />

### 네트워크

- **프록시 설정**: 프록시를 구성합니다(추후 지원 예정 기능).
- **Rclone 연결 관리자**: 활성 Rclone 연결을 보거나 관리합니다.  
  → [자세히 보기](/howto/rcloneview-basic/connection-manager)

### 진단

- **애플리케이션 로그**: 문제 해결이나 버그 보고에 도움이 되는 내부 로그를 엽니다.

---

## ✅ 요약

이러한 설정을 통해 RcloneView가 시작 시 어떻게 동작하는지, Rclone과 어떻게 상호작용하는지, 작업 결과나 오류를 어떻게 알리는지를 완전히 제어할 수 있습니다. 동기화를 예약하든, 드라이브를 자동 마운트하든, 네트워크 문제를 해결하든 워크플로에 맞게 조정하세요.


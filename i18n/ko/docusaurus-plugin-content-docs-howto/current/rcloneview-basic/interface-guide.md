---
sidebar_position: 1
description: "제목 표시줄, 주 메뉴, 파일 탐색기, 전송 탭을 포함한 RcloneView 레이아웃의 시각적 구성 안내."
keywords:
  - rcloneview
  - rclone GUI
  - cloud file manager
  - remote storage management
  - file explorer
  - cloud to cloud transfer
  - file synchronization
  - rcloneview interface
  - rcloneview layout
  - toolbar
  - transfer status
tags:
  - RcloneView
  - UI-guide
  - file-explorer
  - Remote-Storage
  - layout
  - interface
  - cloud-file-transfer
  - Remote-storage-managent
date: 2025-05-27
author: Jay
---
# RcloneView 인터페이스 가이드

RcloneView는 로컬 스토리지와 클라우드 리모트 간에 파일을 탐색, 비교, 전송할 수 있는 직관적인 레이아웃을 제공합니다. 아래는 각 영역에 대한 상세한 설명입니다.

<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="rcloneview user interface" class="img-large img-center" />
## ① 제목 표시줄

애플리케이션 이름과 표준 창 제어 버튼을 표시합니다:

- `—`: 최소화
- `□`: 최대화 / 이전 크기로 복원
- `X`: RcloneView 종료

## ② 주 메뉴 바

핵심 기능에 접근하기 위한 주요 탐색 탭:

- **`Home`** – 파일 동기화 및 비교, 작업 예약, 다중 창 지원 도구  
- **`Remote`** – 클라우드 스토리지 리모트 추가, 구성 및 마운트  
- **`Settings`** – 리모트 연결, 일반 환경설정 및 인터페이스 레이아웃 관리  
- **`Help`** – 제품 지원, 라이선스 활성화, 피드백, 업데이트 확인 접근  

## ③ 툴바

툴바는 선택된 메뉴 탭에 따라 동적으로 변경됩니다:

  ### `Home`이 선택된 경우:

| 버튼        | 설명                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| `Sync`        | 두 탐색기 창에서 선택한 디렉터리 간에 파일과 폴더를 동기화합니다 |
| `Compare`     | 두 탐색기 창에서 선택한 디렉터리 간의 차이를 비교합니다           |
| `Job Manager` | 자주 사용하는 리모트 간의 반복적인 동기화 작업을 생성 및 관리합니다     |
| `New Window`  | 다른 Rclone 데몬 인스턴스에 연결하기 위한 새 RcloneView 창을 엽니다        |
 
### `Remote`가 선택된 경우:

<img src="/support/images/en/howto/rcloneview-basic/remote-tab-toolbar.png" alt="remote tab toolbar" class="img-medium img-center" />

| 버튼           | 설명                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| `New Remote`     | 클라우드 스토리지 리모트에 대한 새 연결을 생성합니다                                |
| `Remote Manager` | 저장된 리모트를 조회, 수정 또는 삭제합니다                                              |
| `Mount Manager`  | 리모트를 로컬 드라이브로 마운트합니다                                                  |
| `Job Manager`    | 자주 사용하는 리모트 간의 반복적인 동기화 작업을 생성 및 관리합니다 |
  
### `Settings`가 선택된 경우:
<img src="/support/images/en/howto/rcloneview-basic/settings-menu-toolbar.png" alt="settings menu toolbar" class="img-medium img-center" />

| 버튼             | 설명                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `Connect Manager`  | 내장 또는 외부 Rclone 데몬 연결을 관리하고 전환합니다                                     |
| `General settings` | 애플리케이션 언어, 파일 경로, 테마, 드래그 앤 드롭 동작, 내장 Rclone 옵션 등을 구성합니다. |
| `Layout`           | 폴더 트리와 파일 목록 보기의 가로/세로 창 레이아웃을 전환합니다                   |
| `View count`       | 단일 창과 이중 창 파일 탐색기 보기를 전환합니다                                                 |

### `Help`가 선택된 경우:
<img src="/support/images/en/howto/rcloneview-basic/help-menu-toolbar.png" alt="help menu toolbar" class="img-medium img-center" />

| 버튼                 | 설명                           |
| ---------------------- | ------------------------------------- |
| `Check for Updates`    | 새 버전이 있는지 확인합니다   |
| `Feedback`             | 피드백을 제출하거나 문제를 신고합니다      |
| `Homepage`             | RcloneView 공식 웹사이트를 방문합니다 |
| `Register License Key` | PLUS 라이선스를 활성화합니다            |

## ④ 파일 탐색기 창

각 창에서는 탭 인터페이스를 사용해 로컬 드라이브나 클라우드 리모트를 탐색할 수 있습니다.  
각 창에서 서로 다른 소스를 열고 그 사이에서 손쉽게 파일을 전송할 수 있습니다.

  <img src="/support/images/en/howto/rcloneview-basic/file-explorer-pannel-layout.png" alt="file explorer panel layout" class="img-medium img-center" />
이 창에는 다음 구성 요소가 포함됩니다:

1. **탭 바** – 현재 연결(예: Local Disk, myAwsS3, myGoogleDrive)을 표시합니다  
2. **경로 표시줄(Breadcrumb)** – > 현재 폴더 경로를 표시하며, 클릭하거나 입력해 자동 완성으로 빠르게 이동할 수 있습니다. 
3. **창 툴바** – 다음과 같은 빠른 작업을 포함합니다:  
	- <img src="/support/icons/alias-icon.png" alt="alias icon" class="inline-icon" /> **별칭 생성(즐겨찾기)** — 현재 폴더를 즐겨찾기로 저장해 빠르게 접근합니다  
	- <img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />**폴더 마운트** — 선택한 폴더를 로컬 드라이브로 마운트합니다  
	- <img src="/support/icons/settings-icon.png" alt="settings icon" class="inline-icon" /> **리모트 설정 편집** — 연결된 리모트의 구성을 수정합니다  
	- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" /> **새로고침** — 현재 폴더의 콘텐츠를 다시 불러옵니다
4. **폴더 트리** – 접고 펼칠 수 있는 폴더 탐색기  
5. **파일/폴더 목록 보기** – 이름, 유형, 수정한 날짜, 크기와 함께 콘텐츠를 표시합니다  
6. **요약 바닥글** – 전체 파일/폴더 수와 전체 파일 크기를 표시합니다

## ⑤ 전송 상태 탭

동기화 또는 파일 전송 작업의 상태와 이력을 표시합니다:

| 탭             | 설명                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------- |
| **`Transfer`**  | 속도, 진행률, 남은 시간을 포함해 진행 중인 모든 활성 전송 작업을 표시합니다 |
| **`Completed`** | 시간, 크기, 작업 ID 등의 세부 정보와 함께 완료된 모든 동기화 또는 복사 작업을 나열합니다               |
| **`Log`**       | 타임스탬프, 작업 유형, 메시지, 상태가 포함된 타임스탬프 로그 항목을 표시합니다               |
## ⑥ 바닥글

- **버전 정보**: 현재 실행 중인 RcloneView 버전(예: `RcloneView 0.6.301`)
- **라이선스 정보**: 라이선스 유형을 나타냅니다(`FREE License` 또는 `PLUS License`)
- **Rclone 연결 정보**: 연결된 rclone 인스턴스, 서버 주소, OS를 표시합니다
  - 예: `Connected to rclone v1.69.1 (http://127.0.0.1:5582, windows)`

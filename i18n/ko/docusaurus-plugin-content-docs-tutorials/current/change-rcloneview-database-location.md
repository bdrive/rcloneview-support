---
sidebar_position: 9
description: "RcloneView가 SQLite 데이터베이스(rclone_view.db)를 저장하는 위치를 변경하고, 기록·작업·마운트·UI 상태를 위한 안전하고 쓰기 가능한 폴더를 선택하는 방법."
keywords:
  - rcloneview
  - database
  - rclone_view.db
  - settings
  - path settings
  - job history
  - transfer history
  - sqlite
  - backup
tags:
  - RcloneView
  - Tutorial
  - settings
  - backup
  - database
date: 2025-12-08
author: tayson
---

# 데이터베이스 저장 위치 변경하기

RcloneView는 핵심 상태를 **`rclone_view.db`**라는 이름의 SQLite 파일에 저장합니다. 이 데이터베이스는 전송 기록, 작업 정의, 마운트 설정, 작업 실행 기록, UI 상태를 기억합니다. 즉 앱이 "무엇을 했는지 기억"하고 인터페이스에 "현재 상태를 표시"하는 데 필요한 모든 것을 담고 있습니다.

기본적으로 데이터베이스는 문서(Documents) 폴더에 저장됩니다. 외장 드라이브나 동기화되는 백업 폴더 등 다른 쓰기 가능한 위치로 옮길 수 있습니다.

<img src="/support/images/en/tutorials/database/database-windows-path.png" class="img-medium img-center" alt="Default database path on Windows" />

## OS별 기본 데이터베이스 경로

| Platform | Default path                               |
| -------- | ------------------------------------------ |
| Windows  | `C:\Users\<user>\Documents\rclone_view.db` |
| macOS    | `/Users/<user>/Documents/rclone_view.db`   |
| Linux    | `/home/<user>/Documents/rclone_view.db`    |

## 데이터베이스 위치 변경 방법

RcloneView 내에서 직접 쓰기 가능한 폴더(로컬 또는 외장)를 자유롭게 선택할 수 있습니다.

### 1단계 — 설정 열기

- 상단 메뉴에서 **설정(Settings) → 일반 설정(General Settings)**으로 이동합니다.  
  <img src="/support/images/en/tutorials/database/database-settings-menu.png" class="img-medium img-center" alt="Open Settings menu" />

### 2단계 — 내장 Rclone → 경로 설정

- 설정 창에서 **내장 Rclone(Embedded Rclone) → 경로 설정(Path Settings)**을 엽니다.
- **데이터베이스 폴더(Database folder)**를 클릭하여 `rclone_view.db`의 새 위치를 선택합니다.  
  <img src="/support/images/en/tutorials/database/database-settings-dlg.png" class="img-medium img-center" alt="Database folder picker" />

- 폴더 아이콘을 사용해 대상 디렉터리를 찾아보세요. RcloneView가 그 위치에 `rclone_view.db`를 배치합니다.

## 권한 및 경로 관련 주의사항

RcloneView는 선택한 폴더에 임시 파일을 생성하여 쓰기 권한을 테스트합니다. 특정 시스템 폴더는 일반 사용자의 쓰기를 차단하여 경고가 표시됩니다.

- **Windows**: `C:\Program Files`, `C:\Windows` 등
- **macOS**: `/Applications`, `/System`, `/usr` 등
- **Linux**: `/usr`, `/opt`, `/etc` 등

<img src="/support/images/en/tutorials/database/database-settings-warning.png" class="img-medium img-center" alt="Permission warning" />

경고가 표시되면 완전한 쓰기 권한이 있는 다른 경로를 선택하세요.

## 권장 위치

- `C:\Users\<user>\Documents`
- `C:\Users\<user>\AppData\Roaming`
- 쓰기 권한이 있는 개인 소유 폴더
- 사용자가 관리하는 외장 드라이브(쓰기 권한 확인 필요)

느리거나 권한이 제한된 위치는 피하고, 네트워크 공유 폴더는 지연(latency)을 유발할 수 있다는 점을 참고하세요.

## 데이터베이스 관리 팁

- 시스템 보호 폴더는 피하세요.
- 클라우드 동기화 폴더를 사용한다면 작은 파일을 안정적으로 동기화하는 서비스(예: OneDrive, Dropbox)를 우선하세요.
- `rclone_view.db`를 주기적으로 백업하세요.
- 실사용 중인 데이터베이스에는 지연이 큰 네트워크 경로를 피하세요.

## 요약

| Item             | Details                                                    |
| ---------------- | ---------------------------------------------------------- |
| 데이터베이스 파일    | `rclone_view.db`                                           |
| 저장 내용          | 전송 기록, 작업, 마운트, UI 상태                              |
| 기본 경로          | 사용자 문서(Documents) 폴더                                  |
| 경로 변경          | 설정 → 내장 Rclone → 경로 설정                                |
| 권한 확인          | 임시 파일 쓰기 테스트                                          |
| 권장 위치          | 사용자 쓰기 권한이 있는 폴더(Documents, Roaming, 외장 드라이브) |

`rclone_view.db`를 위해 안정적이고 쓰기 가능한 위치를 선택하여 RcloneView를 안정적으로 유지하고 기록을 보존하세요.


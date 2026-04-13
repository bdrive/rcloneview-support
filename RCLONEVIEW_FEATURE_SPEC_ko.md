# RcloneView Feature Specification

> **Purpose:** RcloneView 블로그 작성 시 참고하는 공식 기능 명세서. 모든 내용은 소스코드(`rclone-navigator`) + 공식 문서(`rcloneview-support/howto`, `docs`)에서 검증됨.
> **Last Updated:** 2026-04-13
> **App Version:** 1.4.1+1
> **Framework:** Flutter (Dart 3.2.6+)

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [File Explorer](#2-file-explorer)
3. [File Operations](#3-file-operations)
4. [Sync & Job Management](#4-sync--job-management)
5. [Folder Compare](#5-folder-compare)
6. [Mount & Virtual Drive](#6-mount--virtual-drive)
7. [Rclone Terminal](#7-rclone-terminal)
8. [Remote Management](#8-remote-management)
9. [Connection Management](#9-connection-management)
10. [Supported Cloud Providers](#10-supported-cloud-providers)
11. [Virtual Remotes](#11-virtual-remotes)
12. [Settings & Preferences](#12-settings--preferences)
13. [Notification & Remote Control](#13-notification--remote-control)
14. [Multi-Window & System Tray](#14-multi-window--system-tray)
15. [Platform Support](#15-platform-support)
16. [License Structure](#16-license-structure)
17. [Batch Operations (Beta)](#17-batch-operations-beta)

---

## 1. Product Overview

### 1.1 What is RcloneView

RcloneView는 rclone 기반의 크로스 플랫폼 GUI 클라이언트이다. Windows, macOS, Linux에서 동작하며, 90개 이상의 클라우드 스토리지를 하나의 인터페이스로 관리한다.

**핵심 구조:**
- RcloneView는 rclone RC(Remote Control) API를 통해 rclone과 통신한다
- 내장된 Embedded Rclone 바이너리를 포함하며, 별도 설치 없이 바로 사용 가능하다
- 외부 rclone 인스턴스(로컬/원격 서버/Docker)에도 연결할 수 있다
- rclone 자체 기능이 아닌, rclone을 활용하는 독립적 GUI 프론트엔드이다

**Embedded Rclone:**
- 기본 API 주소: `http://127.0.0.1:5582` (localhost loopback)
- 지원 rclone 최소 버전: v1.69.1 이상
- 앱 종료 시 자동 종료 옵션 지원
- 앱 내에서 rclone 자체 업데이트(Self Update) 가능

### 1.2 Main UI Layout

RcloneView의 메인 화면은 4개 영역으로 구성된다:

**1) Menu Bar (상단 메뉴)**
- **Home 탭:** Sync, Compare, Job Manager, New Window 버튼
- **Remote 탭:** New Remote, Remote Manager, Mount Manager, Job Manager 버튼
- **Settings 탭:** Connect Manager, General, Layout, View count
- **Help 탭:** Check for Updates, Feedback, Homepage, Register License Key

**2) Explorer Panels (중앙)**
- 1~4개 패널 동시 표시 가능 (수평/수직 분할)
- 각 패널: Tab Bar + Breadcrumb Path Bar + Folder Tree + File List
- 패널 툴바: Alias(즐겨찾기) 생성, 폴더 마운트, 리모트 설정 편집, 새로고침

**3) Info View (하단 탭)**
- **Transferring 탭:** 진행 중인 작업 모니터링 (진행률, 속도, 파일 수)
- **Terminal 탭:** 내장 rclone CLI 터미널
- **Log 탭:** 타임스탬프 포함 로그 엔트리
- **Features 탭:** 예정 기능 미리보기

**4) Footer (최하단)**
- 앱 버전 정보
- 라이선스 정보 (FREE License / PLUS License)
- rclone 연결 정보 (버전, 서버 주소, OS)

---

## 2. File Explorer

### 2.1 탐색기 구성

각 Explorer 패널은 클라우드 또는 로컬 스토리지를 탐색하는 파일 관리자이다.

**Tab Bar:**
- 현재 연결된 리모트 표시
- 탭 전환으로 여러 리모트 간 이동

**Breadcrumb Path Bar:**
- 현재 폴더 경로를 계층적으로 표시
- 자동 완성 제안 기능
- 우클릭 메뉴: Cut, Copy, Paste, Copy Full Path (with Remote), Select All
- Copy Full Path: `mygoogledrive:Meet recordings` 형태로 rclone 명령에 바로 사용 가능

**Folder Tree:**
- 좌측 접이식 폴더 트리 네비게이터
- 폴더 확장/축소로 계층 탐색

**File List:**
- 이름, 타입, 수정일, 크기 컬럼 표시
- 썸네일 뷰 지원 (이미지 파일 미리보기 그리드)
- 하단 요약: 전체 파일/폴더 수 및 총 파일 크기

### 2.2 뷰 모드

| 뷰 모드 | 설명 |
|---------|------|
| List View | 파일 상세 정보 (이름, 크기, 날짜, 타입) 목록 |
| Tree View | 폴더 계층 구조 탐색 |
| Thumbnail View | 이미지 파일 미리보기 그리드 |

### 2.3 레이아웃 설정

- **수평 분할:** 패널을 좌우로 배치
- **수직 분할:** 패널을 상하로 배치
- **패널 수:** 1개 ~ 4개 동시 표시 가능
- Settings 탭의 Layout / View count에서 변경

---

## 3. File Operations

### 3.1 기본 파일 작업

모든 작업은 우클릭 컨텍스트 메뉴 또는 키보드 단축키로 수행한다.

| 작업 | 방법 | 단축키 | 설명 |
|------|------|--------|------|
| Copy | 우클릭 > Copy | Ctrl+C / Cmd+C | 파일/폴더 복사 |
| Cut | 우클릭 > Cut | Ctrl+X / Cmd+X | 파일/폴더 잘라내기 (이동) |
| Paste | 우클릭 > Paste | Ctrl+V / Cmd+V | 복사/잘라낸 항목 붙여넣기 |
| Delete | 우클릭 > Delete | - | 파일/폴더 삭제 (확인 다이얼로그) |
| Rename | 우클릭 > Rename | - | 파일/폴더 이름 변경 (인라인 편집) |
| New Folder | 우클릭 > New Folder | - | 현재 위치에 새 폴더 생성 |
| Download | 우클릭 > Download | - | 클라우드 → 로컬 다운로드 |
| Upload | 우클릭 > Upload | - | 로컬 → 클라우드 업로드 |
| Reload | 우클릭 > Reload | F5 / Cmd+R | 폴더 내용 새로고침 |
| Get Size | 우클릭 > Get Size | - | 선택한 항목의 총 크기 계산 |
| Get Public Link | 우클릭 > Get Public Link | - | 공유 가능한 퍼블릭 링크 생성 (제공자별 지원) |
| Open in Explorer | 우클릭 > Open in Explorer | - | 네이티브 파일 관리자에서 열기 |

### 3.2 다중 선택

| 방법 | 동작 |
|------|------|
| Ctrl + Click | 개별 파일 선택/해제 |
| Shift + Click | 범위 선택 (첫 번째~마지막 클릭 사이 모든 파일) |

### 3.3 드래그 앤 드롭

| 상황 | 동작 |
|------|------|
| 같은 리모트 내 | **이동** (Move) |
| 다른 리모트 간 | **복사** (Copy) |
| Windows 탐색기 → RcloneView | **업로드** (Upload to cloud) |

- 드래그 앤 드롭 시 확인 팝업 표시 가능 (Settings에서 on/off)

---

## 4. Sync & Job Management

### 4.1 동기화 설정 (4단계)

동기화 작업은 4단계 마법사로 설정한다:

**Step 1: Configure Storage (스토리지 설정)**
- 소스 리모트 + 폴더 선택
- 대상 리모트 + 폴더 선택
- 작업 이름 입력 (허용 문자: a-z, A-Z, 0-9, -, _)
- 1:N 동기화: 여러 대상 추가 가능
- 동기화 방향:
  - **단방향** "Modifying destination only" — 대상만 수정 (공식, 안정)
  - **양방향** "Bidirection" — 양쪽 변경 병합 (Beta, 실험적)
- Create empty directories 옵션

**Step 2: Advanced Settings (고급 설정)**
- **병렬 전송 수** (Number of file transfers): 동시에 전송하는 파일 수
- **멀티스레드 전송** (Number of multi-thread transfers): 기본값 4, 0으로 비활성화
- **동등성 검사기 수** (Number of equality checkers): 기본값 8, 느린 백엔드는 4 이하 권장
- **체크섬 비교** (Enable checksum): 해시+크기로 파일 동일 여부 판별
- **실패 시 재시도** (Retry entire sync if fails): 기본값 3, 1로 설정하면 재시도 없음

**Step 3: Filtering Settings (필터 설정)**
- **최대 파일 크기:** MB 단위 (초과 파일 제외)
- **최대 파일 연령:** y(년), d(일), h(시), m(분), s(초) 단위
- **최대 폴더 깊이:** 폴더 계층 수준 제한
- **사전 정의 필터:** Music, Video, Image, Document, Google Docs, Box Docs
- **커스텀 필터:** 파일 타입, 폴더, 경로 제외 규칙 직접 작성
  - 예: `.iso` (해당 확장자 제외), `/.git/*` (루트의 .git 파일 제외), `.git/` (모든 .git 폴더 제외)

**Step 4: Scheduling (스케줄링) — PLUS License 전용**
- Crontab 방식 스케줄링
- 설정 필드: Minute(0-59), Hour(0-23), Day of Week(0-6), Day of Month(1-31), Month(1-12)
- 지원 포맷: 비움(매번), 리스트(1,3,5), 범위(0-2), 스텝(6-12/3)
- Simulate schedule: 다음 실행 시각 미리보기

### 4.2 Dry Run (시뮬레이션)

실제 변경 없이 동기화를 시뮬레이션하는 기능:
- 복사될 파일 목록 표시
- 삭제될 파일 목록 표시
- 상세 작업 목록 미리 확인
- 실수 방지를 위해 실제 동기화 전 권장

### 4.3 Job Manager (작업 관리자)

작업의 생성, 편집, 실행, 모니터링을 담당하는 중앙 관리 인터페이스.

**작업 관리:**
- Add Job: 새 작업 생성
- Edit Job: 기존 작업 수정
- Duplicate: 작업 복제
- Delete: 작업 삭제
- Export: 작업 설정을 `rclone_jobs_~.json` 파일로 내보내기
- Import: JSON 파일에서 작업 가져오기

**작업 유형:**
- Sync: 소스 → 대상 동기화
- Copy: 파일/폴더 복사
- Move: 파일/폴더 이동
- Delete: 파일/폴더 삭제
- Download: 클라우드 → 로컬
- Upload: 로컬 → 클라우드

**실행 모드:**
- One-time: 즉시 실행 (저장 없음)
- Add: 작업 생성 후 저장
- Edit: 기존 작업 수정

### 4.4 Job History (실행 이력)

각 작업의 실행 기록을 상세히 추적한다.

**이력 필드:**
| 필드 | 설명 |
|------|------|
| Execution Type | Manual (수동) 또는 Scheduled (스케줄) |
| Start Time | 실행 시작 시각 |
| Time Spent | 소요 시간 |
| Status | Completed (성공) / Errored (오류) / Canceled (취소) |
| Total Size | 전송된 총 크기 |
| Speed | 전송 속도 |
| Files | 전송된 파일 수 |
| Job Type | Sync/Copy/Move/Delete/Download/Upload |

**이력 필터:**
- From ~ To (날짜 범위)
- Today, Yesterday, Last week, Last month
- Delete all (전체 삭제)

### 4.5 1:N Synchronization

하나의 소스를 여러 대상에 동시 동기화하는 기능.
- Step 1에서 여러 대상 폴더를 추가
- 각 대상에 동일한 소스 내용이 반영됨
- FREE 라이선스에서 사용 가능

### 4.6 Transfer Monitoring

하단 Info View의 Transferring 탭에서 진행 중인 작업을 실시간 모니터링:
- 진행률 표시 (퍼센트)
- 전송 속도
- 전송된 파일 수/크기
- 작업 취소 가능

하단 탭 필터: Download, Upload, Sync 작업별 표시/숨김 가능

---

## 5. Folder Compare

### 5.1 개요

두 폴더(로컬/클라우드)를 나란히 비교하여 차이점을 시각적으로 보여주는 기능.

Home 탭의 **Compare** 버튼으로 실행.

### 5.2 비교 결과 필터

| 필터 | 설명 |
|------|------|
| Show left-only files | 왼쪽에만 있는 파일 |
| Show right-only files | 오른쪽에만 있는 파일 |
| Show same files | 양쪽 동일한 파일 |
| Show different files | 크기가 다른 파일 |
| Show errored files | 오류/충돌 파일 |

### 5.3 비교 뷰 작업

**네비게이션:**
- Navigate to upper folder (상위 폴더)
- Navigate to lower folder (하위 폴더)

**파일 작업:**
- Copy → : 왼쪽 → 오른쪽 복사
- ← Copy : 오른쪽 → 왼쪽 복사
- Delete : 선택한 파일 삭제

**크기 변화 탐색:**
- Find folders by file count change (파일 수 변화로 폴더 찾기)
- Find folders by size change (크기 변화로 폴더 찾기)
- Find folder with largest change (가장 큰 변화)
- Find folder with next large change (다음으로 큰 변화)
- Find folder with smallest change (가장 작은 변화)
- Find folder with next smaller change (다음으로 작은 변화)

**복사 동작:**
- 대상에 파일이 없거나 크기가 다를 때만 복사
- 복사 후 해당 파일은 비교 뷰에서 "equal"로 표시

### 5.4 Folder Compare with Filter — PLUS License 전용

커스텀 필터 규칙으로 비교 대상을 제한:
- 폴더명, 파일 타입별 필터
- 예: `.iso` (제외), `/.git/*` (루트 .git 파일), `/.git/` (루트 .git 폴더), `.git/` (모든 .git 폴더)

---

## 6. Mount & Virtual Drive

### 6.1 개요

클라우드 스토리지를 로컬 드라이브처럼 마운트하여 파일 탐색기에서 직접 접근하는 기능.

### 6.2 마운트 방법

**방법 1: Remote Explorer에서**
1. 탐색기에서 마운트할 리모트 폴더 선택
2. 패널 툴바의 Mount 아이콘 클릭
3. 마운트 설정 구성
4. "Save and mount" 또는 "Save" 클릭

**방법 2: Mount Manager에서**
1. Remote 탭 > Mount Manager 버튼 클릭
2. New mount 클릭
3. 리모트 및 하위 디렉토리 선택
4. 옵션 구성
5. Save 또는 Save and mount 클릭

### 6.3 마운트 설정 옵션

| 설정 | 기본값/옵션 | 설명 |
|------|------------|------|
| Target | Auto / 수동 드라이브 문자 | Windows: 드라이브 문자 할당 |
| Mount to local path | - | 커스텀 마운트 위치 (macOS/Linux) |
| Auto mount | Off | 시작 시 자동 마운트 (PLUS) |
| Volume name | - | 마운트된 볼륨 표시 이름 |
| Mount type | cmount (Windows) / nfsmount (Linux/macOS) | 마운트 방식 |
| Network drive | Off | 네트워크 드라이브로 표시 (Windows) |
| Read only | Off | 읽기 전용 모드 |
| Allow other | Off | 다른 사용자 접근 허용 (Linux) |
| Cache mode | off / minimal / **writes** (기본) / full | VFS 캐시 모드 |
| Cache max size | -1 (무제한) | 최대 캐시 크기 (bytes) |
| Cache max age | - | 캐시 데이터 유효 기간 (nanoseconds) |
| Dir cache time | - | 디렉토리 캐시 유효 기간 (nanoseconds) |

### 6.4 Mount Manager

마운트 상태별 관리:

| 상태 | 가능한 작업 |
|------|------------|
| Mounted (마운트됨) | Unmount, Open (파일 탐색기에서 열기) |
| Unmounted (해제됨) | Mount, Edit, Delete |

**제약사항:**
- Mounted 상태에서는 Edit/Delete 불가
- Unmounted 상태에서는 Open 불가

### 6.5 System Tray에서 마운트 관리

- RcloneView 트레이 아이콘 우클릭
- Mount 메뉴에서 마운트된 드라이브 확인
- 마운트/언마운트 전환
- 새 마운트 시작

---

## 7. Rclone Terminal

### 7.1 개요

RcloneView 내장 터미널로, rclone CLI 명령을 직접 실행할 수 있다. 하단 Info View의 Terminal 탭에 위치.

### 7.2 기능

- xterm.dart 기반 풀 터미널 에뮬레이션
- PTY(pseudo-terminal) 지원
- rclone 명령 자동완성: `rclone` + 스페이스 입력 시 명령어 제안
- 셸 환경: Windows CMD/PowerShell, Linux bash, macOS zsh

**자주 사용하는 명령:**
| 명령 | 설명 |
|------|------|
| `rclone listremotes` | 설정된 리모트 목록 |
| `rclone about "remote:"` | 리모트 스토리지 사용량 |
| `rclone config create <name> <type>` | CLI로 리모트 생성 |

### 7.3 뷰 관리

- **Expand:** 터미널 전체 화면
- **Shrink:** 기본 레이아웃 복귀

### 7.4 출력 처리

- 텍스트 선택 가능
- 우클릭 메뉴: Copy, Paste, Copy All

---

## 8. Remote Management

### 8.1 리모트 추가 방식

RcloneView에서 클라우드 스토리지 연결(리모트)을 추가하는 방법은 제공자에 따라 다르다.

**OAuth 기반 (브라우저 로그인):**
브라우저가 열리고 계정 인증 후 자동 연결. 별도 API 키 불필요.
- Google Drive, Dropbox, Google Photos, OneDrive, Box, pCloud, Yandex Disk, premiumize.me, put.io, HiDrive

**인증 정보 입력:**
Access Key, Token, 또는 계정 정보를 직접 입력.
- Amazon S3 (Access Key ID + Secret Access Key + Region)
- Cloudflare R2 (API Token + Account ID + Endpoint)
- Mega (Email + Password)
- Backblaze B2 (Application Key ID + Application Key)
- Proton Drive (Email + Password, 선택적 2FA)
- Gofile (Access Token)
- Azure File Storage (Account Name + Shared Key + Share Name)
- iCloud Drive (rclone v1.69+ 필요)
- SFTP (Host + SSH 인증)

**추가 설정 필요:**

| 제공자 | 추가 설정 |
|--------|----------|
| Zoho WorkDrive | Region 선택 |
| Google Cloud Storage | Project Number |
| Citrix ShareFile | Root Folder ID |
| Google Drive Shared with Me | `shared_with_me = true` |
| Box for Business | `box_sub_type = enterprise` |
| Dropbox for Business | `dropbox_business = true` |
| Google Drive Computers | `root_folder_id = computer ID` |

### 8.2 Remote Manager

Remote 탭 > Remote Manager 버튼으로 접근.
- 등록된 모든 리모트 목록 표시
- 리모트별 편집/삭제
- 리모트 설정 확인

---

## 9. Connection Management

### 9.1 연결 유형

**Embedded Rclone (내장):**
- 기본 제공, 별도 설치 불필요
- 주소: `http://127.0.0.1:5582`
- 앱과 라이프사이클 공유 (앱 종료 시 함께 종료 옵션)
- rclone 버전 표시, Self Update 지원

**External Rclone (외부):**
- 사용자가 별도 실행한 rclone 인스턴스에 연결
- 실행 위치: 로컬 머신, 원격 서버, Docker 컨테이너
- 기본 포트: 5572
- 실행 명령: `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`

### 9.2 외부 연결 추가

Settings 탭 > Connect Manager > New Connection:
1. Display Name 입력
2. Remote Address 입력 (`http://<host>:5572`)
3. Username / Password 입력
4. SSL 인증서 검증 비활성화 옵션 (자체 서명 인증서용)
5. Test Connection으로 연결 확인
6. Save

### 9.3 AWS EC2 연동

외부 rclone을 AWS EC2에서 실행하여 원격 연결하는 시나리오:

**권장 구성:**
- AMI: Ubuntu Server 22.04 LTS 또는 20.04 LTS
- 인스턴스: t2.micro (Free Tier 가능)
- 스토리지: 최소 8 GB
- 보안 그룹: SSH(포트 22, IP 제한) + Custom TCP(포트 5572)

**설치:**
```bash
curl https://rclone.org/install.sh | sudo bash
rclone version
```

**데몬 실행:**
```bash
rclone rcd --rc-user=admin --rc-pass=admin --rc-addr=0.0.0.0:5572
```

**systemd 서비스:**
- 파일 경로: `/etc/systemd/system/rclone-rcd.service`
- 실행 사용자: Ubuntu
- 주요 플래그: `--rc-user`, `--rc-pass`, `--rc-addr`, `--rc-web-gui` (선택), `--log-file`, `--log-level`

**헬스체크:**
```bash
curl -X POST -u admin:admin "http://<EC2-PUBLIC-IP>:5572/rc/noop"
```

---

## 10. Supported Cloud Providers

### 10.1 OAuth 직접 로그인

| 제공자 | 인증 방식 |
|--------|----------|
| Google Drive | OAuth (브라우저) |
| Dropbox | OAuth (브라우저) |
| Google Photos | OAuth (브라우저) |
| Microsoft OneDrive | OAuth (브라우저) |
| Box | OAuth (브라우저) |
| pCloud | OAuth (브라우저) |
| Yandex Disk | OAuth (브라우저) |
| premiumize.me | OAuth (브라우저) |
| put.io | OAuth (브라우저) |
| HiDrive | OAuth (브라우저) |

### 10.2 개인/비즈니스 클라우드

| 제공자 | 비고 |
|--------|------|
| Google Drive Shared with Me | shared_with_me 설정 필요 |
| Google Drive Computers | root_folder_id 설정 필요 |
| Dropbox for Business | dropbox_business 설정 필요 |
| Box for Business | box_sub_type = enterprise |
| Mega | Email + Password |
| Proton Drive | rclone v1.69+ 필요 |
| Backblaze B2 | Application Key ID + Key |
| Gofile | Access Token |
| iCloud Drive | rclone v1.69+ 필요 |
| iCloud Photos | 별도 패키지 (코드 확인) |
| Zoho WorkDrive | Region 선택 필요 |
| Citrix ShareFile | Root Folder ID 필요 |
| Google Cloud Storage | Project Number 필요 |
| Azure File Storage | Account + Key + Share Name |
| Koofr | - |
| Jottacloud | - |
| Mail.ru Cloud | - |
| Seafile | - |
| Storj | - |
| OpenDrive | - |
| PikPak | - |
| SugarSync | - |
| Files.com | - |
| Enterprise File Fabric | - |
| Cloudinary | - |
| Internet Archive | - |
| ImageKit | - |
| Linkbox | - |
| Pixeldrain | - |
| Uptobox | - |
| Uloz.to | - |

### 10.3 S3 호환 제공자

rclone의 S3 프로토콜을 통해 접속하는 서비스들. Access Key + Secret Key + Endpoint 설정 필요.

| 제공자 | | 제공자 | | 제공자 |
|--------|---|--------|---|--------|
| Amazon S3 | | Cloudflare R2 | | Wasabi |
| IDrive e2 | | MinIO | | DigitalOcean Spaces |
| Linode Object Storage | | Google Cloud Storage (S3) | | IBM COS |
| Tencent COS | | Alibaba OSS | | Huawei OBS |
| IONOS | | Ceph | | StackPath |
| Synology C2 | | Seagate Lyve | | Arvan Cloud |
| Scaleway | | Selectel | | Storj S3 |
| Outscale | | Magalu | | Leviia |
| Liara | | RackCorp | | SeaweedFS |
| Dreamhost | | Petabox | | China Mobile |
| Qiniu | | Netease | | Hetzner |
| OVHcloud | | Cubbit DS3 | | Rclone S3 |

> **참고:** S3 호환 제공자는 rclone 버전에 따라 추가/변경될 수 있다. 구체적 개수보다 "다수의 S3 호환 서비스"로 표현 권장.

### 10.4 프로토콜 기반 스토리지

| 프로토콜 | 설명 |
|---------|------|
| SFTP | SSH File Transfer Protocol (포트 22) |
| FTP | File Transfer Protocol |
| WebDAV | Web Distributed Authoring and Versioning |
| SMB/CIFS | Server Message Block (네트워크 파일 공유) |
| HTTP | 읽기 전용 HTTP 접근 |
| HDFS | Hadoop Distributed File System |

### 10.5 로컬 스토리지

| 타입 | 설명 |
|------|------|
| 로컬 디스크 | Windows/Mac/Linux 내장 디스크 |
| 외장 드라이브 | SSD, USB 등 |
| Synology NAS | 자동 탐지 기능 지원 (Settings에서 on/off) |

---

## 11. Virtual Remotes

rclone의 가상 리모트를 활용하여 기존 리모트에 추가 기능을 부여하는 래퍼.

| 리모트 | 용도 | 사용 예시 |
|--------|------|----------|
| **Alias** | 특정 클라우드 폴더의 바로가기 | 자주 쓰는 깊은 경로에 단축 이름 부여 |
| **Crypt** | 파일명, 내용, 폴더명 암호화 | 민감한 데이터를 암호화하여 클라우드 저장 |
| **Memory** | RAM 기반 임시 저장소 | 테스트/임시 작업용 |
| **Cache** | 느린 리모트 캐싱 가속 | Plex 미디어 서버 통합 포함 |
| **Chunker** | 대용량 파일 청크 분할 | 파일 크기 제한이 있는 제공자에 대용량 파일 저장 |
| **Combine** | 여러 폴더를 서브폴더로 병합 | 여러 클라우드를 하나의 가상 트리로 |
| **Union** | 여러 폴더를 하나로 통합 | 여러 스토리지를 단일 뷰로 합침 |
| **Hasher** | 무결성 검사용 해싱 추가 | 해시를 지원하지 않는 리모트에 체크섬 추가 |
| **Compress** | 업로드 전 파일 압축 | 스토리지 용량 절약 |

---

## 12. Settings & Preferences

### 12.1 General (일반)

| 설정 | 설명 |
|------|------|
| Language | UI 언어 선택 (9개 언어) |
| Launch at login | 시스템 로그인 시 자동 시작 |
| Start minimized | 시스템 트레이로 최소화 시작 |
| Quit on close | 닫기 버튼 동작 (종료 vs 백그라운드) |
| Auto-detect Synology NAS | 로컬 네트워크 NAS 자동 탐지 |
| Show local cloud folders | 로컬 클라우드 폴더 표시 |
| Check for updates | 자동 업데이트 확인 |
| Restore Default Settings | 모든 설정 초기화 |

### 12.2 Interfaces & Notifications (인터페이스)

| 설정 | 설명 |
|------|------|
| Dark mode | Light / Dark / System 테마 |
| Theme color | 액센트 색상 선택 |
| Confirm drag and drop | 드래그 작업 확인 팝업 |
| Show Job Types | Transfer 로그 필터 (Download/Upload/Sync) |
| Show job state log | 전송 완료 후 상세 로그 표시 |
| Show comparison completed | 폴더 비교 완료 알림 |
| Show confirmation before deleting files in compare | 비교 뷰 삭제 확인 |
| Show sync completion notification | 동기화 완료 알림 |
| Show network error dialog | 네트워크 오류 경고 |

### 12.3 Embedded Rclone (내장 Rclone 설정)

| 설정 | 설명 |
|------|------|
| Stop rclone on App Exit | 앱 종료 시 rclone 프로세스 종료 |
| Local Rclone location | rclone 바이너리 경로 (내장 또는 커스텀) |
| Local Rclone config location | rclone.conf 파일 경로 |
| Default download folder | 다운로드 기본 경로 |
| Default upload folder | 업로드 기본 경로 |
| Global Rclone Flags | 추가 rclone 플래그 (예: `--no-check-certificate`) |
| Config Password | 암호화된 rclone 설정 비밀번호 |
| Enable rclone Logging | 파일 기반 로깅 활성화 |
| Log folder | 로그 파일 저장 경로 |
| Log file name | 기본 로그 파일명 |
| Log level | DEBUG / INFO / NOTICE / ERROR |

### 12.4 Supported UI Languages (지원 언어)

| 언어 | 비고 |
|------|------|
| English | 기본 |
| Korean (한국어) | - |
| French (Français) | - |
| German (Deutsch) | - |
| Chinese Simplified (简体中文) | - |
| Chinese Traditional (繁體中文) | - |
| Japanese (日本語) | - |
| Spanish (Español) | - |
| Indonesian (Bahasa Indonesia) | - |

Noto Sans 폰트(KR, SC, TC, JP 변형) 포함으로 CJK 문자 지원.

---

## 13. Notification & Remote Control

> **참고:** 이 섹션의 기능들은 소스코드에서 확인되었으나, 공식 문서에는 미기재 상태. PLUS 라이선스 기능으로 추정됨.

### 13.1 Email Notifications

작업 완료 시 이메일 알림 전송.
- SMTP 서버 직접 설정 (호스트, 포트 587, 인증)
- RcloneView Relay 서비스 사용 옵션
- 수신자 여러 명 설정 가능
- 작업 크기 임계값 설정 (MB/GB 단위, 초과 시에만 알림)

### 13.2 Telegram Bot

- Telegram Bot Token + Chat ID 설정
- 작업 상태 알림 전송

### 13.3 Slack Integration

- App Token + Bot Token 설정
- User ID 지정
- 작업 상태 알림 전송

### 13.4 Discord Integration

- Bot Token + User/Application ID 설정
- DM으로 작업 상태 알림 전송

### 13.5 Application Lock

- 비밀번호로 앱 접근 잠금
- 보안 저장소에 비밀번호 암호화 저장

---

## 14. Multi-Window & System Tray

### 14.1 Multi-Window — PLUS License 전용

- Home 탭 > New Window 버튼으로 새 창 생성
- 각 창은 독립적 상태 유지
- IPC를 통한 창 간 통신
- 창 위치/크기 자동 저장

### 14.2 System Tray

모든 라이선스에서 사용 가능.

**트레이 메뉴:**
- 마운트된 드라이브 목록 확인
- 마운트/언마운트 전환
- 새 마운트 시작
- 앱 열기/닫기

**백그라운드 동작:**
- 최소화 시 시스템 트레이로 이동 (설정에 따라)
- 백그라운드에서 작업 계속 실행
- 작업 완료 시 알림 팝업

---

## 15. Platform Support

### 15.1 Windows

| 기능 | 설명 |
|------|------|
| 마운트 방식 | cmount (기본) |
| 드라이브 문자 | 자동 또는 수동 할당 |
| 네트워크 드라이브 | 네트워크 드라이브로 표시 옵션 |
| 시스템 트레이 | 트레이 아이콘 및 컨텍스트 메뉴 |
| 시작 프로그램 | Launch at login 지원 |
| 데스크톱 알림 | 작업 완료 알림 |

### 15.2 macOS

| 기능 | 설명 |
|------|------|
| 마운트 방식 | nfsmount (기본) |
| 마운트 포인트 | 커스텀 경로 지정 |
| 파일 접근 권한 | Privacy & Security > Files & Folders 또는 Full Disk Access |
| 파일 핸들 제한 | 기본 256~1024, 524288 권장 |
| 지원 버전 | Ventura, Sonoma, Sequoia 확인됨 |
| Dock 통합 | Dock 아이콘 클릭으로 창 관리 |

**macOS 파일 핸들 설정:**
- LaunchDaemon plist 생성: `/Library/LaunchDaemons/limit.maxfiles.plist`
- soft/hard limit 모두 524288로 설정
- 재부팅 필요

**macOS 알려진 이슈:**
- Desktop/Documents/Downloads 폴더 비어있을 수 있음 → Privacy & Security 권한 부여
- 외장 SSD 접근 불가 → `/Volumes`에서 탐색, Alias 리모트로 우회

### 15.3 Linux

| 기능 | 설명 |
|------|------|
| 마운트 방식 | nfsmount |
| GUI 호환 | GTK/Wayland |
| 시스템 통합 | D-Bus, AppIndicator |
| 서비스 | systemd user service |
| Allow other | 다른 사용자 마운트 접근 허용 옵션 |

### 15.4 Network Ports

| 포트 | 용도 |
|------|------|
| 5582 | Embedded Rclone API (기본) |
| 5572 | External Rclone API (기본) |
| 22 | SFTP |
| 80/443 | HTTP/HTTPS (WebDAV, OAuth) |
| 587 | SMTP (이메일 알림) |

---

## 16. License Structure

### 16.1 라이선스 종류

| 타입 | 설명 |
|------|------|
| FREE | 기본 기능, 라이선스 키 불필요 |
| PLUS (Subscription) | 구독형, 기간제 |
| Lifetime | 일회 결제, 영구 사용 |

### 16.2 라이선스 활성화

- 경로: Help > Activate License
- 이메일 주소 + 라이선스 키 입력
- 할인 쿠폰: 이메일당 1회 사용

### 16.3 FREE vs PLUS 기능 비교

| 기능 | FREE | PLUS |
|------|:----:|:----:|
| 마운트/언마운트 | O | O |
| 파일 탐색기 (탐색/복사/삭제) | O | O |
| 폴더 비교 (기본) | O | O |
| 동기화 & 작업 관리 | O | O |
| 1:N 동기화 | O | O |
| 작업 이력 & 로그 | O | O |
| 시스템 트레이 | O | O |
| Rclone 터미널 | O | O |
| Dry Run | O | O |
| Export/Import Jobs | O | O |
| 폴더 비교 + 필터 | X | O |
| 스케줄 기반 동기화 | X | O |
| 시작 시 스케줄 자동 실행 | X | O |
| 시작 시 자동 마운트 | X | O |
| 다중 창 | X | O |

---

## 17. Batch Operations (Beta)

> **상태:** Beta 기능. 소스코드에서 확인되었으나, 안정성이 완전히 검증되지 않음.

### 17.1 개요

여러 작업을 체인으로 연결하여 순차 실행하는 자동화 기능.

### 17.2 지원 단계 유형

| 단계 | 설명 |
|------|------|
| mkdir | 폴더 생성 |
| copyFolder | 폴더 복사 (sync 사용) |
| copyFile | 단일 파일 복사 |
| sync | 폴더 동기화 |
| check | 폴더 검증/비교 |
| move | 파일/폴더 이동 |
| rename | 파일 이름 변경 |
| delete | 필터 기반 삭제 |
| deleteFile | 단일 파일 삭제 |
| purge | 디렉토리 제거 |
| rmdirs | 빈 디렉토리 제거 |
| filelist | 파일 목록 생성 |
| sleep | 실행 일시 중지 |

### 17.3 배치 기능

- 단계 간 변수 전달 (Variable piping)
- Dry-run 미리보기
- 단계별 진행 추적
- 실행 모니터링

---

## 18. 배포 및 설치 (Distribution & Installation)

### 18.1 공식 다운로드 형식

모든 다운로드: https://rcloneview.com/src/download.html

| 플랫폼 | 형식 | 아키텍처 | 파일명 패턴 |
|--------|------|---------|------------|
| Windows | .exe (Inno Setup 설치 프로그램) | x86-64 전용 | `setup_rclone_view-{version}.exe` |
| macOS | .dmg (디스크 이미지) | Universal (x86-64 + ARM64 Apple Silicon) | `RcloneView-{version}.dmg` |
| Linux | .AppImage | x86_64, aarch64 (ARM64) | `RcloneView-{version}-{arch}.AppImage` |
| Linux | .deb (Debian/Ubuntu) | x86_64, aarch64 (ARM64) | `rclone_view-{version}-linux-{arch}.deb` |
| Linux | .rpm (Fedora/RHEL) | x86_64, aarch64 (ARM64) | `rclone_view-{version}-linux-{arch}.rpm` |

### 18.2 공식 배포 채널

| 채널 | 상태 | 비고 |
|------|------|------|
| rcloneview.com 다운로드 페이지 | **공식** | 유일한 공식 배포 채널 |
| macOS 자동 업데이트 (Sparkle) | **공식** | 앱 내 appcast 피드 |

### 18.3 비공식 / 미지원 배포 채널

아래 채널에는 공식 RcloneView 패키지가 **없다**. 블로그에서 이 채널을 통한 설치를 안내해서는 안 된다:

| 채널 | 상태 | 비고 |
|------|------|------|
| AUR (Arch User Repository) | **미제공** | 공식 AUR 패키지 없음 |
| Snap Store | **미제공** | 소스에 설정 존재하나 미게시 |
| Flathub / Flatpak | **미제공** | 소스에 매니페스트 존재하나 미게시 |
| Homebrew (macOS) | **미제공** | formula/cask 없음 |
| APT 저장소 | **미제공** | PPA나 apt repo 없음 — .deb 직접 다운로드 |
| RPM 저장소 (dnf/yum) | **미제공** | repo 없음 — .rpm 직접 다운로드 |
| pip / npm / 기타 패키지 매니저 | **미제공** | 해당 없음 |
| 서드파티 미러 | **비공식** | 보증/관리하지 않음 |

### 18.4 시스템 요구사항

**모든 플랫폼 — GUI 필수:**
- RcloneView는 Flutter 기반 **GUI 데스크톱 애플리케이션**이다
- **헤드리스(디스플레이 서버 없이) 실행 불가**
- **systemd/Windows 서비스로 자체 실행 불가**
- 헤드리스/서버 환경에서는 rclone CLI를 직접 사용할 것 (`rclone rcd`)

**Windows:**
- 아키텍처: x86-64 전용 (ARM64 Windows 빌드 없음)
- VC++ 2015-2022 Redistributable 필요
- 최소: Windows Vista 이상

**macOS:**
- 아키텍처: Universal 바이너리 (Intel x86-64 + Apple Silicon ARM64)
- 최소: macOS 12.7 (Monterey)
- 공증(Notarization) 및 코드 서명 완료

**Linux:**
- 아키텍처: x86_64 및 aarch64 (ARM64)
- 데스크톱 환경 필수: X11 또는 Wayland 디스플레이 서버
- 필수 의존성: GTK+ 3.0
- 필수 의존성: libayatana-appindicator3-1 또는 libappindicator3-1 (시스템 트레이)
- 테스트 기반: Ubuntu 22.04 LTS (Jammy)
- 마운트 기능에 FUSE 필요 (fuse3 권장)

### 18.5 Linux ARM64 참고사항 (Raspberry Pi 등)

ARM64 빌드(.deb, .rpm, .AppImage)가 Linux용으로 제공된다. 단:

- **그래픽 데스크톱 환경이 반드시 필요** — 헤드리스 시스템에서 실행 불가
- Raspberry Pi 등 ARM64 SBC에서는 데스크톱 환경(예: Raspberry Pi Desktop with X11/Wayland)이 설치 및 실행 중이어야 함
- 원격 데스크톱(VNC/RDP) 또는 X11 포워딩으로 다른 머신에 GUI 표시 가능
- 디스플레이 없이 완전 헤드리스로 운영하려면 rclone CLI 직접 사용 — 화면 없이 RcloneView는 무의미
- ARM64 SBC에서의 성능은 크게 달라짐 — 구체적 속도 수치 인용 금지

### 18.6 기술 스택

| 구성 요소 | 기술 | 비고 |
|-----------|------|------|
| GUI 프레임워크 | **Flutter** (Dart 3.2.6+) | Qt 아님, Electron 아님, GTK 앱 아님 |
| 터미널 | xterm.dart | 내장 터미널 에뮬레이션 |
| 상태 관리 | Riverpod | flutter_riverpod |
| 데이터베이스 | SQLite (sqflite_common_ffi) | 로컬 저장소 |
| 보안 저장소 | flutter_secure_storage | 인증 정보 |
| 빌드 시스템 | CMake (Linux/Windows), Xcode (macOS) | 플랫폼별 |
| Linux 패키징 | flutter_distributor, appimage-builder | .deb, .rpm, .AppImage |
| Windows 패키징 | Inno Setup | .exe 설치 프로그램 |
| macOS 패키징 | appdmg | .dmg + 공증 |

---

## 19. 제한사항 및 부정 사실 (Limitations & Negative Facts)

RcloneView가 **지원하지 않는 것**, **할 수 없는 것**, **제공하지 않는 것**을 명시. 블로그에서 이와 반대되는 주장을 해서는 안 된다.

### 19.1 RcloneView는 ~이/가 아니다

| 주장 | 실제 |
|------|------|
| 헤드리스/CLI 도구 | GUI 전용 애플리케이션. CLI는 rclone을 직접 사용 |
| rclone 대체품 | rclone에 의존하는 프론트엔드 |
| rclone 공식 GUI | rclone과 독립적인 서드파티 GUI |
| 웹 애플리케이션 | 네이티브 데스크톱 앱 (최종 사용자용 브라우저 인터페이스 없음) |
| 모바일 앱 | iOS/Android 빌드 배포 안 함 |
| Qt 애플리케이션 | Flutter/Dart 기반 |
| Electron 애플리케이션 | Flutter/Dart 기반 |
| 클라우드 서비스 | 사용자의 로컬 머신에서만 실행 |
| 패키지 매니저로 설치 가능 | rcloneview.com 직접 다운로드만 공식 지원 |

### 19.2 RcloneView는 ~할 수 없다

| 주장 | 실제 |
|------|------|
| 디스플레이 서버 없이 실행 | Linux에서 X11 또는 Wayland 필수, 모든 플랫폼에서 GUI 필수 |
| 백그라운드 데몬/서비스로 실행 | 앱 자체를 systemd 서비스로 등록 불가. (rclone rcd는 가능하지만 그건 rclone이지 RcloneView가 아님) |
| 32비트 시스템에서 실행 | 64비트(x86-64, ARM64) 빌드만 존재 |
| Windows ARM에서 실행 | Windows ARM64 빌드 미제공 |
| rclone 없이 동기화 | 모든 스토리지 작업은 rclone에 전적으로 의존 |
| 오프라인 작업 | 클라우드 스토리지 접근에 네트워크 필수 |
| Linux 자동 업데이트 | 자동 업데이트는 macOS(Sparkle)만 가능. Linux/Windows는 수동 다운로드 |

### 19.3 RcloneView가 제공하지 않는 것

| 주장 | 실제 |
|------|------|
| AUR 패키지 | Arch User Repository에 미게시 |
| Snap 패키지 | Snapcraft 설정 존재하나 Snap Store 미게시 |
| Flatpak 패키지 | Flatpak 매니페스트 존재하나 Flathub 미게시 |
| Homebrew formula/cask | Homebrew에서 사용 불가 |
| APT/YUM/DNF 저장소 | 패키지 저장소 없음 — .deb/.rpm은 직접 다운로드 |
| Docker 이미지 | 컨테이너화되지 않음 |
| iOS/Android 앱 | 모바일 빌드 미배포 |
| 32비트 빌드 | x86 (32비트) 또는 armv7 빌드 없음 |

### 19.4 블로그 플랫폼별 필수 주의사항

특정 플랫폼에 대한 블로그 작성 시 반드시 포함해야 할 내용:

**Raspberry Pi / ARM64 SBC 관련 글:**
- 데스크톱 환경 + 디스플레이 서버 필수임을 반드시 명시
- 헤드리스 설정을 주요 사용 사례로 설명하면 안 됨
- 원격 실행 시 VNC/X11 포워딩을 대안으로 언급
- 완전 헤드리스 시나리오에는 rclone CLI 권장

**Arch Linux 관련 글:**
- `yay -S rcloneview` 등 AUR 설치 안내 절대 금지
- rcloneview.com에서 .AppImage 또는 수동 바이너리 설치 안내
- Qt5 의존성 언급 금지 — Flutter/GTK+3 기반

**모든 Linux 배포판 글:**
- GTK+3 및 디스플레이 서버(X11/Wayland) 요구사항 명시
- RcloneView를 systemd 서비스로 설명 금지
- 공식 문서의 systemd 서비스는 `rclone rcd`용이며 RcloneView 자체가 아님

**서버/NAS 관련 글:**
- RcloneView는 GUI 도구이며 서버 애플리케이션이 아님을 명확히
- 서버 활용: 서버에 RcloneView를 설치하지 말고, Connection Manager로 원격 rclone에 연결

---

## Appendix: Credential Guides

### AWS S3
- AWS Management Console: `https://aws.amazon.com/console`
- IAM Console에서 Access Key 생성
- 필요 정보: Access Key ID, Secret Access Key, Region 코드 (예: ap-northeast-2)

### Cloudflare R2
- Dashboard: `https://dash.cloudflare.com`
- R2 Bucket 생성 후 API Token 발급
- Admin Read & Write 권한 필요
- Endpoint: `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`

### Backblaze B2
- 키 관리: `https://secure.backblaze.com/b2_buckets.htm`
- 필요 정보: Application Key ID, Application Key

### Proton Drive
- 로그인: `https://drive.proton.me/`
- 필요 정보: Email, Password, 선택적 2FA
- 2FA 설정: `https://proton.me/support/two-factor-authentication`

### Gofile
- Token 확인: `https://gofile.io/myprofile`
- Account API Token 필드에서 확인

### Azure File Storage
- Azure Portal > Storage Account > Access keys
- 필요 정보: Storage Account Name, Shared Key, Share Name

### Mega
- 로그인: `https://mega.nz/login`
- 필요 정보: Email, Password

---

## Appendix: Troubleshooting Reference

### macOS: Desktop/Documents/Downloads 폴더가 비어있음
- **원인:** macOS Catalina+ Privacy 권한 미부여
- **해결 1:** System Settings > Privacy & Security > Files & Folders에서 권한 부여
- **해결 2:** Full Disk Access에 RcloneView 추가
- **필수:** 권한 변경 후 RcloneView 재시작

### macOS: Too many open files 오류
- **원인:** macOS 파일 디스크립터 기본 제한 (256~1024)
- **해결:** `/Library/LaunchDaemons/limit.maxfiles.plist` 생성, soft/hard 524288 설정
- **필수:** 재부팅 필요

### macOS: 외장 SSD 접근 불가
- **해결:** `/Volumes`에서 SSD 탐색 후 Alias 리모트 생성

### 로그 수집 방법
1. Settings > Embedded Rclone > Enable rclone Logging 체크
2. Log level: DEBUG (가장 상세)
3. Restart Embedded Rclone 클릭
4. 문제 재현
5. 로그 파일을 rcloneview@bdrive.com으로 전송

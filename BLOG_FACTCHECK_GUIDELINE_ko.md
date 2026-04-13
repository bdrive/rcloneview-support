# RcloneView Blog Fact-Check Guideline

> **Purpose:** RcloneView 블로그 자동 생성 후, 표현/수치/명칭을 검증하는 가이드라인.
> **Companion:** 기능 상세는 `RCLONEVIEW_FEATURE_SPEC.md`를 참조. 이 문서는 **검증 규칙**에 집중한다.
> **Sources:** `rcloneview-support/howto`, `rcloneview-support/docs` 문서 + `rclone-navigator` 소스코드 전체 분석 기반.
> **Last Updated:** 2026-04-13
> **Guideline Version:** 1.1

---

## 사용 방법 (2-문서 체계)

| 순서 | 문서 | 역할 |
|------|------|------|
| 1 (글 작성 전) | `RCLONEVIEW_FEATURE_SPEC.md` | 기능 명세 참고 → 정확한 정보로 글 작성 |
| 2 (글 작성 후) | **이 문서** | 표현/수치/명칭/금지 항목 검증 |

---

## 검증 원칙 (Verification Principles)

> **이 문서에 없다고 틀린 것이 아니다.**

1. **기능 존재 여부:** 이 문서는 참고만. `RCLONEVIEW_FEATURE_SPEC.md`, 소스코드, 공식 문서가 권위 소스이다.
2. **표현/톤/명칭:** 이 문서가 권위 소스이다. 여기 규칙을 따른다.
3. **수치/기본값:** 이 문서에 명시된 검증 수치만 인용. 그 외 수치는 소스에서 직접 확인.
4. **클라우드 제공자:** rclone 업데이트로 수시 추가됨. 이 문서 목록에 없는 제공자라도 rclone이 지원하면 유효.
5. **false negative 방지:** 블로그에서 언급한 기능이 이 문서에 없을 때, 즉시 "틀림"으로 판정하지 말고 Feature Spec 또는 소스코드에서 재확인.

---

## Table of Contents

1. [Validation Rules (블로그 생성 규칙)](#1-validation-rules)
2. [Terminology & Naming (정확한 용어)](#2-terminology--naming)
3. [License & Pricing Facts (라이선스 사실)](#3-license--pricing-facts)
4. [Verified Numbers & Defaults (검증된 수치)](#4-verified-numbers--defaults)
5. [URLs & Contact (검증된 링크)](#5-urls--contact)
6. [Unverified / Do Not Claim (주장 금지 항목)](#6-unverified--do-not-claim)
7. [Fact-Check Checklist](#7-fact-check-checklist)
8. [Safe Descriptions (사전 검증 문구)](#8-safe-descriptions)

---

## 1. Validation Rules

블로그 자동 생성 시 반드시 준수해야 할 규칙.

### 1.1 절대 금지 사항

| Rule | Reason |
|------|--------|
| 구체적 가격(달러/원)을 명시하지 않는다 | 가격은 수시로 변경됨. "pricing page 참조"로 유도 |
| 지원 클라우드 개수를 "100+"처럼 정확하게 표기하지 않는다 | rclone 업데이트마다 변동. "90개 이상" 또는 "수십 개" 사용 |
| "가장 빠른", "유일한", "최초의" 등 최상급 표현 금지 | 검증 불가능한 비교 주장 |
| 미래 기능을 확정적으로 서술하지 않는다 | "Proxy 설정 (coming soon)" 같은 미구현 기능 포함 |
| 보안/암호화 강도를 구체적으로 주장하지 않는다 | "AES-256" 등은 rclone crypt의 구현이며, RcloneView 자체 기능이 아님 |
| 다른 제품과의 직접 비교 금지 | 법적 리스크 및 검증 불가 |
| rclone 자체 기능을 RcloneView 고유 기능처럼 서술하지 않는다 | RcloneView는 rclone의 GUI 프론트엔드 |
| 설치 명령이나 패키지 이름을 날조하지 않는다 | Feature Spec Section 18의 방법만 사용. 아래 1.5 참조 |
| RcloneView를 헤드리스/CLI/서버 도구로 설명하지 않는다 | 디스플레이 서버 필수 GUI 앱. 아래 1.6 참조 |
| 비공식 패키지 매니저 배포를 주장하지 않는다 | AUR, Snap Store, Flathub, Homebrew — 모두 비공식 |
| 구체적 성능 수치를 인용하지 않는다 | 전송 속도 등은 환경 의존적이며 검증 불가 |

### 1.2 표현 가이드

| 상황 | 올바른 표현 | 잘못된 표현 |
|------|------------|------------|
| 클라우드 제공자 수 | "90개 이상의 클라우드 스토리지 지원" | "100개 클라우드 지원" |
| rclone 관계 | "rclone 기반 GUI 클라이언트" | "rclone을 대체하는 도구" |
| 양방향 동기화 | "양방향 동기화 (Beta)" | "완벽한 양방향 동기화" |
| 암호화 | "rclone Crypt를 통한 암호화 지원" | "군사급 암호화 제공" |
| 무료 기능 | "무료 라이선스로 기본 기능 사용 가능" | "무료로 모든 기능 사용 가능" |
| 플랫폼 | "Windows, macOS, Linux 지원" | "모든 운영체제 지원" |
| 마운트 | "가상 드라이브로 마운트" | "로컬 드라이브처럼 완벽히 작동" |

### 1.3 숫자/수치 인용 규칙

- 문서 또는 코드에서 직접 확인된 수치만 사용
- 변동 가능한 수치(클라우드 수, 버전 등)는 범위로 표현
- 기본값은 "(기본값: X)" 형태로 괄호 안에 표기
- 성능 수치(전송 속도 등)는 절대 명시하지 않음 (환경 의존적)

### 1.4 스크린샷/이미지 참조 규칙

- 문서에 포함된 스크린샷의 UI가 현재 버전과 다를 수 있음
- 버전 특정 스크린샷을 "현재 모습"으로 서술하지 않음
- UI 설명 시 기능 중심으로 서술 (버튼 위치보다 기능 설명)

### 1.5 설치 및 배포 관련 규칙

AI 할루시네이션 중 가장 위험한 유형: 존재하지 않는 설치 방법을 안내하여 사용자가 막다른 골목에 빠지는 것을 방지.

**유효한 설치 방법:**

| 플랫폼 | 유효한 방법 | 명령/행동 |
|--------|-----------|----------|
| Windows | rcloneview.com에서 .exe 다운로드 | `setup_rclone_view-{version}.exe` 실행 |
| macOS | rcloneview.com에서 .dmg 다운로드 | `RcloneView-{version}.dmg` 열기 |
| Linux | rcloneview.com에서 .AppImage 다운로드 | `chmod +x RcloneView-*.AppImage && ./RcloneView-*.AppImage` |
| Linux | rcloneview.com에서 .deb 다운로드 | `sudo dpkg -i rclone_view-*-linux-{arch}.deb` |
| Linux | rcloneview.com에서 .rpm 다운로드 | `sudo rpm -i rclone_view-*-linux-{arch}.rpm` |

**날조된 설치 방법 — 절대 사용 금지:**

| 날조된 방법 | 잘못된 이유 |
|------------|-----------|
| `yay -S rcloneview` | AUR 패키지 없음 |
| `pacman -S rcloneview` | 공식 Arch 저장소에 없음 |
| `snap install rcloneview` | Snap Store 미게시 |
| `flatpak install rcloneview` | Flathub 미게시 |
| `brew install rcloneview` | Homebrew formula 없음 |
| `apt install rcloneview` | APT 저장소 없음 — .deb 직접 다운로드 |
| `dnf install rcloneview` | DNF 저장소 없음 — .rpm 직접 다운로드 |
| `pip install rcloneview` | Python 패키지 아님 |
| `npm install rcloneview` | Node.js 패키지 아님 |
| `docker run rcloneview` | Docker 이미지 없음 |

**아키텍처 관련 규칙:**
- Linux x86_64 및 aarch64 (ARM64) 빌드 모두 존재
- Windows는 x86-64 전용 (ARM64 Windows 빌드 없음)
- macOS는 Universal (Intel + Apple Silicon 하나의 .dmg)
- 모든 플랫폼에서 32비트 빌드 없음

### 1.6 플랫폼 및 헤드리스 운영 규칙

RcloneView는 **GUI 데스크톱 애플리케이션**이다. 모든 블로그 글은 이 제약을 준수해야 한다:

| 규칙 | 상세 |
|------|------|
| GUI 필수 | Linux에서 X11 또는 Wayland, Windows/macOS에서 네이티브 GUI 필요 |
| 헤드리스 실행 불가 | CLI 전용 모드, 헤드리스 모드, 서버 모드 없음 |
| systemd 서비스 불가 | RcloneView 자체를 `/etc/systemd/system/rcloneview.service`로 실행 불가. 문서의 systemd 서비스는 `rclone rcd`(rclone 데몬)용 |
| 기술 스택은 Flutter | Qt 아님, Electron 아님, GTK 아님. GTK+3은 Linux 의존성으로 사용 |
| 원격 데스크톱은 가능 | VNC, RDP, X11 포워딩으로 원격 머신에 GUI 표시 가능하나, 명시적으로 안내 필요 |

**플랫폼별 블로그 필수 요구사항:**

| 글 주제 | 반드시 포함 | 절대 주장 금지 |
|---------|-----------|--------------|
| Raspberry Pi / ARM SBC | 데스크톱 환경 + 디스플레이 서버 필수; 헤드리스는 rclone CLI 권장 | 헤드리스 설정이 주요 사용 사례 |
| Arch Linux | rcloneview.com 직접 다운로드 (.AppImage 또는 수동) | AUR 패키지, Qt5 의존성 |
| 모든 Linux 배포판 | GTK+3 및 X11/Wayland 요구사항 | 패키지 매니저 설치 (dpkg/rpm + 다운로드 파일 제외) |
| 서버 / NAS | Connection Manager로 원격 rclone에 연결; 서버에 RcloneView 설치하지 않기 | RcloneView가 서버 소프트웨어 |
| Docker | 해당 없음 — Docker에서는 rclone CLI 사용 | RcloneView용 Docker 이미지 |

---

## 2. Terminology & Naming

### 2.1 제품명 및 브랜드

| 정확한 표기 | 잘못된 표기 |
|------------|------------|
| RcloneView | Rclone View, rcloneview, RCloneView, Rclone-View |
| rclone | Rclone (문장 중간), RCLONE |
| Rclone (문장 시작만) | rClone |
| PLUS License | Plus license, plus 라이선스 |
| FREE License | Free license, 무료 라이선스 (비공식 OK) |
| Lifetime License | 평생 라이선스 (비공식 OK) |

### 2.2 기능명 정확한 표기

| 기능 | 정확한 명칭 | 비고 |
|------|------------|------|
| 파일 탐색기 | File Explorer | 좌/우 패널 |
| 폴더 비교 | Folder Compare | Compare 버튼 |
| 작업 관리자 | Job Manager | Job Manager 버튼 |
| 마운트 관리자 | Mount Manager | Remote 탭 |
| 연결 관리자 | Connect Manager / Connection Manager | Settings 탭 |
| 리모트 관리자 | Remote Manager | Remote 탭 |
| 내장 Rclone | Embedded Rclone | 외부: External Rclone |
| 가상 리모트 | Virtual Remotes | Alias, Crypt, Cache 등 |
| 시스템 트레이 | System Tray | 트레이 아이콘 |
| 드라이 런 | Dry Run | 동기화 시뮬레이션 |
| 배치 작업 | Batch Operations | Beta 기능 |

### 2.3 클라우드 서비스 정확한 표기

| 정확한 표기 | 잘못된 표기 |
|------------|------------|
| Google Drive | Google drive, GDrive |
| OneDrive | One Drive, Onedrive |
| Dropbox | Drop Box, DropBox |
| Backblaze B2 | BackBlaze, Backblaze b2 |
| Cloudflare R2 | CloudFlare, cloudflare R2 |
| Amazon S3 | Amazon s3, AWS S3 (비공식 OK) |
| pCloud | PCloud, Pcloud |
| Yandex Disk | Yandex disk, YandexDisk |
| Mega | MEGA (공식은 MEGA이나 rclone에서는 Mega) |
| Proton Drive | ProtonDrive, proton drive |
| Azure File Storage | Azure file storage |
| Zoho WorkDrive | Zoho Workdrive |
| Citrix ShareFile | Citrix Sharefile |
| HiDrive | Hi Drive, Hidrive |
| iCloud Drive | icloud Drive, ICloud |

---

## 3. License & Pricing Facts

> 기능 상세 비교는 `RCLONEVIEW_FEATURE_SPEC.md` Section 16 참조.

### 3.1 검증된 라이선스 구조

| 항목 | 사실 | 출처 |
|------|------|------|
| 라이선스 종류 | FREE, PLUS, Lifetime | 문서+코드 |
| FREE는 라이선스 키 불필요 | 맞음 | 문서 |
| PLUS는 라이선스 키 필요 | 맞음 | 문서+코드 |
| 활성화 경로 | Help > Activate License | 문서 |
| 할인 쿠폰은 이메일당 1회 | 맞음 | 문서 |

### 3.2 라이선스 관련 주장 금지

- 구체적 가격 (수시 변동)
- 경쟁사 대비 가격 비교
- "무료로 충분하다" 류의 주관적 평가
- Trial 기간의 구체적 일수 (변동 가능)

---

## 4. Verified Numbers & Defaults

블로그에서 인용 가능한, 검증된 구체적 수치.

| 항목 | 값 | 출처 |
|------|-----|------|
| Embedded Rclone 기본 주소 | http://127.0.0.1:5582 | 문서+코드 |
| External Rclone 기본 포트 | 5572 | 문서+코드 |
| 멀티스레드 전송 기본값 | 4 | 문서 |
| 동등성 검사기 기본값 | 8 | 문서 |
| 동기화 재시도 기본값 | 3회 | 문서 |
| 지원 UI 언어 수 | 9개 | 코드 (arb 파일) |
| 탐색기 패널 수 | 1~4개 | 코드 |
| macOS 권장 파일 핸들 | 524288 | 문서 |
| 캐시 모드 기본값 | writes | 문서 |
| 최소 rclone 버전 | v1.69.1 | 문서 |
| SMTP 기본 포트 | 587 | 코드 |
| 지원 클라우드 수 | 90개 이상 | 코드 분석 |

### 4.1 수치 인용 시 주의

- **변동 가능:** 클라우드 제공자 수, rclone 버전, 앱 버전
- **환경 의존적:** 전송 속도, 마운트 성능, 캐시 효율
- **절대 인용 금지:** 구체적 가격, 할인율, Trial 기간

---

## 5. URLs & Contact

### 5.1 공식 URL (검증됨)

| 용도 | URL |
|------|-----|
| 공식 웹사이트 | https://rcloneview.com |
| 다운로드 | https://rcloneview.com/src/download.html |
| 가격 & 라이선스 | https://rcloneview.com/src/pricing.html |
| Rclone 공식 | https://rclone.org |
| 업데이트 피드 | https://rcloneview.com/appcast/ |
| macOS 빌드 | https://downloads.bdrive.com/rclone_view/builds/ |

### 5.2 지원 채널 (검증됨)

| 채널 | 연락처 |
|------|--------|
| 이메일 | rcloneview@bdrive.com |
| 포럼 | https://forum.rcloneview.com |

### 5.3 참고 문서 (검증됨)

| 문서 | URL |
|------|-----|
| Rclone 필터링 | https://rclone.org/filtering/ |
| Rclone Bisync | https://rclone.org/bisync/ |
| Rclone 개요 | https://rclone.org/overview/ |
| AWS S3 문서 | https://docs.aws.amazon.com/general/latest/gr/s3.html |

### 5.4 URL 인용 규칙

- 위 목록의 URL만 블로그에 포함 가능
- 서드파티 서비스 URL(AWS Console, Cloudflare Dashboard 등)은 튜토리얼 문맥에서만 사용
- 깨진 링크 주의: 게시 전 링크 유효성 확인 필수

---

## 6. Unverified / Do Not Claim

문서 또는 코드 한쪽에서만 확인되었거나, 검증이 불충분한 항목. **블로그에서 확정적으로 서술하지 말 것.**

### 6.1 코드에만 존재 (문서화 안 됨) — 내부/미출시 가능성

| 항목 | 상태 | 이유 |
|------|------|------|
| Email Notifications | 💻 코드만 | 문서에 미기재, PLUS 기능일 수 있음 |
| Telegram Bot | 💻 코드만 | 문서에 미기재 |
| Slack Integration | 💻 코드만 | 문서에 미기재 |
| Discord Integration | 💻 코드만 | 문서에 미기재 |
| Web Server Access | 💻 코드만 | 문서에 미기재 |
| Application Lock | 💻 코드만 | 문서에 미기재 |
| Batch Operations | 💻 코드만 | Beta 상태, 문서 미비 |
| Thumbnail View | 💻 코드만 | 이미지 미리보기 그리드 |
| Get Public Link | 💻 코드만 | 제공자별 지원 여부 불명확 |
| iCloud Photos | 💻 코드만 | 별도 패키지, 문서 미비 |
| Analytics/Telemetry | 💻 코드만 | 사용자에게 공개할 내용 아님 |

### 6.2 미구현 / Coming Soon

| 항목 | 상태 |
|------|------|
| Proxy 설정 | 문서에 "coming soon" 명시 |

### 6.3 버전 의존적 사실

| 항목 | 주의사항 |
|------|----------|
| 앱 버전 번호 | 문서: 0.6.301~1.1.517 / 코드: 1.4.1+1 — 게시 시 최신 확인 |
| rclone 버전 | v1.69.1~v1.70.1 언급 — 최신 확인 필요 |
| iCloud Drive 지원 | rclone v1.69+ 필요 — rclone 버전 조건 명시 |

### 6.4 주관적/과장 위험 표현 목록

블로그 생성 시 아래 표현이 나타나면 자동으로 제거하거나 수정:

| 위험 표현 | 대체 표현 |
|-----------|----------|
| "완벽한" | "포괄적인" 또는 삭제 |
| "가장 빠른" | 삭제 (성능 비교 금지) |
| "유일한" | "몇 안 되는" 또는 삭제 |
| "혁신적인" | 삭제 |
| "무제한" | "다수의" 또는 구체적 수치 |
| "안전한/보안이 뛰어난" | "rclone의 암호화 기능 활용" |
| "쉬운/간단한" | "GUI 기반의" |
| "모든 클라우드" | "90개 이상의 클라우드 스토리지" |
| "실시간" | "진행 중인 작업 모니터링" |
| "자동으로" | 구체적 동작 설명 |

---

## 7. Fact-Check Checklist

블로그 게시 전 최종 검증 체크리스트:

**용어 및 표현:**
- [ ] 제품명이 "RcloneView"로 정확히 표기되었는가?
- [ ] rclone과 RcloneView의 기능이 구분되어 서술되었는가?
- [ ] FREE/PLUS 라이선스 구분이 정확한가?
- [ ] 구체적 가격이 포함되어 있지 않은가?
- [ ] 최상급 표현(가장, 유일, 최초)이 없는가?
- [ ] 클라우드 서비스 이름이 정확히 표기되었는가?
- [ ] 인용된 URL이 검증된 목록에 있는가?
- [ ] 성능 관련 주장(속도, 효율)이 없는가?
- [ ] 다른 제품과의 비교가 없는가?
- [ ] 양방향 동기화에 "Beta" 표시가 되어있는가?
- [ ] 수치가 검증된 값인가? (Section 4 참조)

**기능 및 상태:**
- [ ] 미구현(Coming Soon) 기능이 확정적으로 서술되지 않았는가?
- [ ] 코드에만 존재하는 기능(Section 6.1)이 공식 기능처럼 서술되지 않았는가?
- [ ] 플랫폼 지원이 "Windows, macOS, Linux"로 정확한가?
- [ ] 기술 스택이 Flutter/Dart로 설명되었는가? (Qt, Electron 아님)

**설치 및 배포 (핵심 — 가장 빈번한 오류 지점):**
- [ ] 모든 설치 명령이 Section 1.5 기준 유효한가?
- [ ] 날조된 패키지 매니저 명령(yay, snap, flatpak, brew, apt repo, dnf repo)이 없는가?
- [ ] 모든 설치 안내가 "rcloneview.com에서 다운로드"로 시작하는가?
- [ ] 아키텍처 표기가 정확한가? (Linux: x86_64/aarch64, Windows: x86-64 전용, macOS: Universal)

**플랫폼 및 헤드리스 (핵심 — 실제 사용자 불만 발생):**
- [ ] RcloneView가 디스플레이 필수 GUI 앱임이 명확한가?
- [ ] 헤드리스/CLI/서버 운영 주장이 없는가?
- [ ] systemd 서비스가 `rclone rcd`용임이 명확한가? (RcloneView 자체 아님)
- [ ] Raspberry Pi/ARM 글: 데스크톱 환경 필수 요건이 명시되었는가?
- [ ] Arch Linux 글: 설치가 직접 다운로드(AUR 아님)로 안내되었는가?
- [ ] 서버/NAS 글: 서버에 rclone(RcloneView 아님)을 설치하라고 안내되었는가?

---

## 8. Safe Descriptions (사전 검증 문구)

블로그에서 안전하게 사용할 수 있는 사전 검증된 문구:

**제품 소개:**
> RcloneView는 rclone 기반의 GUI 클라이언트로, Windows, macOS, Linux에서 90개 이상의 클라우드 스토리지를 하나의 인터페이스로 관리할 수 있습니다.

**핵심 가치:**
> 파일 탐색, 동기화, 폴더 비교, 가상 드라이브 마운트 등 클라우드 스토리지 관리에 필요한 기능을 GUI로 제공합니다.

**무료 사용:**
> 기본 파일 관리, 동기화, 마운트, 폴더 비교 기능은 FREE 라이선스로 사용할 수 있습니다. 스케줄 동기화, 다중 창 등 고급 기능은 PLUS 라이선스가 필요합니다.

**rclone 관계:**
> RcloneView는 rclone의 공식 GUI가 아닌, rclone RC API를 활용하는 독립적인 GUI 프론트엔드입니다. 내장된 rclone 바이너리를 포함하며, 외부 rclone 인스턴스에도 연결할 수 있습니다.

**마운트 설명:**
> 클라우드 스토리지를 로컬 드라이브처럼 마운트하여 파일 탐색기에서 직접 접근할 수 있습니다. Windows에서는 드라이브 문자 할당, macOS/Linux에서는 마운트 포인트 지정이 가능합니다.

**동기화 설명:**
> 단방향 동기화로 소스의 내용을 대상에 반영하거나, 양방향 동기화(Beta)로 양쪽 변경사항을 병합할 수 있습니다. 1:N 동기화로 하나의 소스를 여러 대상에 동기화할 수도 있습니다.

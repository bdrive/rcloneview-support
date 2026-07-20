---
sidebar_position: 13
description: "테스트, 리모트 관리, 문제 해결을 위해 RcloneView에 내장된 터미널에서 rclone CLI 명령을 직접 실행하세요."
keywords:
  - rcloneview
  - rclone
  - terminal
  - cli
  - remote management
  - troubleshooting
  - rclone config
tags:
  - RcloneView
  - Terminal
  - CLI
  - rclone
  - troubleshooting
date: 2025-12-04
author: tayson
---

# RcloneView에서 터미널 사용하기

RcloneView에는 내장 터미널이 있어 CMD, PowerShell 또는 시스템 셸을 열지 않고도 전체 `rclone` CLI 명령을 실행할 수 있습니다. 앱 안에 머무르면서 빠른 테스트, 리모트 관리, 로그 캡처를 하기에 이상적입니다.

이 가이드에서는 터미널을 여는 방법, `rclone` 명령을 실행하는 방법, 보기를 확장/축소하는 방법, 결과를 공유하기 위해 복사 옵션을 사용하는 방법을 다룹니다.

---

## 터미널 열기

- RcloneView 하단의 **`Terminal`** 탭을 클릭합니다.  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="terminal bottom" class="img-medium img-center" />
- 터미널은 표준 `rclone` 명령줄 인터페이스처럼 작동하며 현재 RcloneView 컨텍스트에서 명령을 실행합니다.

---

## 사용 가능한 rclone 명령 목록 보기

rclone을 입력한 뒤 스페이스 바를 누르면 지원되는 모든 명령이 자동으로 표시됩니다.  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="terminal input rclone" class="img-medium img-center" />

---

## 도움말 및 리모트 세부 정보 보기 (`rclone about`)

- `about`에 대한 일반 도움말을 보려면:  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about.png" alt="terminal input rclone about" class="img-medium img-center" />
- 특정 리모트(예: `mygoogle`)의 스토리지 정보를 확인하려면:
  ```bash
  rclone about "mygoogle:"
  ```
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="terminal input rclone about my google" class="img-medium img-center" />

결과 예시:  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle-result.png" alt="terminal about my google result" class="img-medium img-center" />

---

## 구성된 모든 리모트 목록 보기

`listremotes` 명령을 사용해 사용 가능한 리모트를 확인합니다.

```bash
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes" class="img-medium img-center" />

---

## 터미널 보기 확장 또는 축소

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="terminal expand" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="terminal shrink" class="img-medium img-center" />
</div>

- **확장**: 긴 출력 결과를 위해 전체 화면 터미널로 전환합니다.
- **축소**: 기본 레이아웃으로 돌아갑니다.

---

## CLI로 리모트 만들기 (`rclone config create`)

예시: `mygoogledrive`라는 이름의 Google Drive 리모트를 만들고 확인합니다.

```bash
rclone config create mygoogledrive drive
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="rclone config create drive" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-check.png" alt="rclone config create check" class="img-medium img-center" />

---

## 복사, 붙여넣기, 모두 복사

터미널 출력을 선택하면 컨텍스트 메뉴가 열리며 **복사**, **붙여넣기**, **모두 복사**를 선택할 수 있습니다.  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="terminal select copy" class="img-medium img-center" />

이는 로그를 지원팀과 공유하거나 결과를 문서로 저장할 때 유용합니다.

---

## 권장 사용 사례

- 자동화하기 전에 고급 `rclone` 명령(`lsf`, `tree`, 백엔드 플래그)을 테스트합니다.
- RcloneView 내에서 스크립트나 서버 측 명령을 검증합니다.
- GUI 경로가 느릴 때 리모트를 빠르게 관리하거나 생성합니다.

:::caution 파괴적인 명령에 주의하세요
`delete`, `purge` 또는 잘못된 `sync` 플래그와 같은 명령은 데이터를 영구적으로 삭제할 수 있습니다. 터미널에서 실행하기 전에 경로와 리모트를 다시 확인하세요.
:::

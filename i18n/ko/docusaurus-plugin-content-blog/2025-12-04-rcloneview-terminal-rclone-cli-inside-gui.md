---
slug: rcloneview-terminal-rclone-cli-inside-gui
title: "RcloneView 터미널: GUI 안에서 rclone CLI의 모든 기능을 사용하기"
authors:
  - tayson
description: "RcloneView의 터미널 안에서 자동완성, 전체 화면 모드, 복사 가능한 로그와 함께 완전한 rclone CLI를 실행하세요--별도의 셸이 필요 없습니다."
keywords:
  - rclone terminal
  - rcloneview terminal
  - rclone cli gui
  - rclone commands
  - cloud storage cli tool
  - cloud automation
  - rclone beginners
  - rclone power users
  - cloud devops tools
  - rcloneview
tags:
  - RcloneView
  - cloud-storage
  - sync
  - file-management
  - cli

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView 터미널: GUI 안에서 rclone CLI의 모든 기능을 사용하기

> RcloneView를 벗어나지 않고 모든 rclone 명령어를 실행하세요. 새로운 터미널은 자동완성, 복사 가능한 로그, 전체 화면 출력을 브라우징, 비교, 동기화에 사용하는 바로 그 창 안으로 가져옵니다.

RcloneView에는 이제 내장 터미널이 포함되어 있어 앱 안에서 완전한 rclone CLI를 실행할 수 있습니다 -- 별도의 CMD, PowerShell, 터미널 창이 필요 없습니다. 초보자는 시각적 맥락과 함께 명령어를 배울 수 있고, 엔지니어와 파워 유저, IT 관리자는 컨텍스트 전환 없이 자동화 플래그, 상세 로그, 스크립팅 흐름을 그대로 유지할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 왜 CLI를 GUI 안으로 가져와야 할까요?

- 브라우징용 GUI와 고급 플래그나 진단용 셸 사이를 왔다 갔다 하지 않아도 됩니다.
- rclone 출력과 로그를 전송, 마운트, 예약된 작업 옆에 그대로 유지하세요.
- 빈 터미널 대신 안내된 UI 힌트로 팀원에게 rclone을 안전하게 가르치세요.

## RcloneView 터미널이란?

터미널은 RcloneView 작업 공간 하단에 위치하며, 앱에서 이미 사용 중인 것과 동일한 rclone 바이너리를 실행합니다. `rclone`을 입력하고 스페이스바를 누르면 지원되는 모든 명령어가 표시되며, 바로 실행할 수 있습니다--Windows, macOS, Linux 모두 동일한 경험을 공유합니다.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="Terminal tab in RcloneView" class="img-medium img-center" />

## 초보자를 위한 이점

- 설정 스트레스 없음: rclone이 이미 번들로 포함되어 있어 설치하거나 시스템 경로를 찾지 않고도 명령어를 연습할 수 있습니다.
- 자동완성으로 탐색이 간단해집니다--`rclone `을 입력하면 실행하기 전에 명령어 목록을 확인할 수 있습니다.
- 출력이 앱 안에 남아 있어 복사하거나, 다시 실행하거나, GUI에서 보는 내용과 비교하기가 더 쉽습니다.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="Autocomplete list for rclone commands" class="img-medium img-center" />

## 엔지니어 및 파워 유저를 위한 이점

- 마운트, 비교, 스케줄러, CLI 실험을 위한 단일 작업 공간을 유지하세요--컨텍스트 전환이 필요 없습니다.
- 클라우드 지연이나 API 스로틀링 문제를 해결하기 위해 상세 로그(`-vv`)를 캡처한 후 클릭 한 번으로 전체를 복사하세요.
- `rclone config create`로 더 빠르게 리모트를 구성하고, 백엔드를 검증한 다음 스크립트로 작성된 작업으로 넘어가세요.
- 긴 출력이나 여러 줄 스크립트를 편안하게 읽으려면 확장 보기를 사용하세요.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="Expanded Terminal view" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="Shrink Terminal view" class="img-medium img-center" />
</div>

## 한눈에 보는 주요 기능

- **명령어 자동 검색**: `rclone` + 스페이스를 입력하면 실행 전에 맥락과 함께 모든 명령어를 볼 수 있습니다.
- **전체 화면 터미널**: 긴 목록을 볼 때는 확장하고, 비교나 전송을 확인해야 할 때는 축소하세요.
- **복사, 붙여넣기, 전체 복사**: 파일을 내보내지 않고도 팀원이나 지원팀과 로그를 공유하세요.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="Copy and paste options in the Terminal" class="img-medium img-center" />

## 지금 바로 시도해볼 실용적인 명령어

### 1) 리모트의 저장 공간 사용량 확인
```bash
rclone about "mygoogle:"
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="rclone about output in RcloneView Terminal" class="img-medium img-center" />

### 2) 구성된 모든 리모트 검색
```bash
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes in RcloneView Terminal" class="img-medium img-center" />

### 3) CLI로 새 리모트 생성
```bash
rclone config create mygoogledrive drive
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="Create Google Drive remote with rclone config create" class="img-medium img-center" />

### 4) 전송 전에 폴더 미리보기
```bash
rclone lsf mygoogledrive:Projects --dirs-only --recursive --max-depth 2
```

### 5) 상세 로그로 마이그레이션 리허설
```bash
rclone sync mygoogledrive:Projects s3backup:Projects --dry-run -vv --progress
```
`--dry-run`으로 변경 사항을 시뮬레이션하고, `-vv`로 실제 작업을 실행하기 전에 느린 백엔드나 스로틀링을 파악하세요.

## GUI와 터미널, 언제 무엇을 선택할까

- **GUI 사용**: 클라우드 간 드래그 앤 드롭, 시각적으로 차이 비교, 반복 작업 예약, 저장소를 드라이브로 마운트할 때.
- **터미널 사용**: 백엔드 플래그를 테스트하거나, 임시 진단을 실행하거나, 클릭보다 입력이 더 빠른 고급 rclone 명령어를 실행할 때.
- **둘 다 함께 사용**: 비교로 미리보고, CLI 플래그로 계획을 조정한 다음, 워크플로우를 예약된 작업으로 저장하세요.

## 빠른 시작 및 안전 수칙

1. **터미널** 탭을 열고 `rclone `을 입력한 다음 목록에서 명령어를 선택하세요.
2. 동기화나 삭제 작업을 실행하기 전에 읽기 전용 명령어(`listremotes`, `lsf`, `about`)부터 시작하세요.
3. 스크린샷과 함께 안내되는 자세한 설명은 [RcloneView에서 터미널 사용하기](/howto/rcloneview-basic/using-terminal-in-rcloneview)를 참고하세요.

> 프로 팁: `delete`, `purge`, 확인되지 않은 `sync`와 같은 파괴적인 명령어는 데이터를 삭제할 수 있습니다. Enter를 누르기 전에 경로와 리모트를 다시 한번 확인하세요.

## 결론

RcloneView 터미널은 이미 사용하고 있는 시각적 도구 옆에 완전한 rclone CLI를 배치하여, 초보자는 더 빠르게 배우고 전문가는 더 빠르게 작업할 수 있게 해줍니다. 오늘 바로 사용해보고 클라우드 운영, 자동화 실험, 디버그 로그를 한곳에 모아두세요.

<CloudSupportGrid />

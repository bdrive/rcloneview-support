---
slug: copy-full-path-rclone-cli-breadcrumb-rcloneview
title: "리모트 포함 전체 경로 복사 — RcloneView에서 GUI와 rclone 명령어 연결하기"
authors:
  - kai
description: "RcloneView 브레드크럼의 전체 경로 복사(Copy Full Path)로 remote:path 문자열을 가져와 내장 rclone 터미널에서 실행하세요. 실용적인 GUI-CLI 워크플로입니다."
keywords:
  - rclone 리모트 경로
  - rclone 전체 경로 복사
  - RcloneView 브레드크럼
  - rclone 터미널 GUI
  - rclone about 명령어
  - remote:path 구문
  - rclone GUI 워크플로
  - rclone 명령어 도우미
  - RcloneView 기능
  - 클라우드 경로 복사
tags:
  - RcloneView
  - feature
  - cli
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 리모트 포함 전체 경로 복사 — RcloneView에서 GUI와 rclone 명령어 연결하기

> 오른쪽 클릭 한 번으로 탐색 중인 폴더가 바로 사용할 수 있는 rclone 경로가 됩니다.

rclone 명령어를 입력해 본 사람이라면 특히 공백이 있거나 중첩된 폴더에서 `remote:path`를 정확히 쓰기가 얼마나 번거로운지 알 것입니다. RcloneView는 리모트 이름을 포함한 전체 경로를 클립보드로 바로 복사하는 브레드크럼 메뉴 옵션으로 이 문제를 해결합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 전체 경로 복사 기능이 하는 일

각 탐색기 패널에는 현재 위치를 보여 주는 브레드크럼 경로 표시줄이 있습니다. 여기에서 오른쪽 클릭하면 잘라내기, 복사, 붙여넣기, 모두 선택, 그리고 **Copy Full Path (with Remote)** 가 나타납니다. 마지막 옵션은 위치를 rclone이 기대하는 정확한 구문인 `mygoogledrive:Meet recordings` 형식으로 복사합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView 탐색기에 표시된 리모트 목록" class="img-large img-center" />

리모트 이름이 포함되므로 폴더가 어느 리모트에 속하는지 추측할 필요가 없습니다. 같은 제공업체의 여러 계정을 관리할 때 특히 중요합니다.

## 내장 터미널에 붙여넣기

RcloneView에는 하단 정보 보기(Info View)에 완전한 터미널 에뮬레이션을 지원하는 Terminal 탭이 있습니다. `rclone` 뒤에 공백을 입력하면 명령어 제안이 표시되며, 복사한 경로를 붙여넣으면 됩니다. 예를 들어 `rclone about "remote:"` 는 리모트의 스토리지 사용량을 보고하고, `rclone listremotes` 는 설정된 모든 리모트를 나열합니다. 공백이 포함된 경로는 따옴표로 묶으세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView 내에서 작업과 명령어 실행하기" class="img-large img-center" />

이 GUI-CLI 순환은 마법사가 제공하지 않는 일회성 명령어가 필요할 때, 시각적 탐색기로 올바른 폴더를 찾으면서도 유용합니다.

## 작업과 문서에서 경로 활용하기

복사한 경로는 터미널 밖에서도 유용합니다. 런북, 지원 티켓, 동료와의 채팅에 붙여넣으면 모두가 동일한 위치를 가리키게 됩니다. 전송 후에는 Transferring 탭이나 작업 기록(Job History)에서 결과를 확인할 수 있으며, 작업 기록에는 실행마다 상태, 크기, 속도가 기록됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="완료된 전송을 보여주는 작업 기록" class="img-large img-center" />

RcloneView는 rclone을 대체하는 도구가 아니라 rclone 위에 구축된 GUI이므로, 터미널에서 실행하는 명령어는 작업에 사용되는 것과 동일한 내장 엔진을 사용합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 리모트를 추가하고 탐색기에서 폴더로 이동하세요.
3. 브레드크럼 표시줄에서 오른쪽 클릭하고 **Copy Full Path (with Remote)** 를 선택하세요.
4. Terminal 탭을 열고 `rclone about "` 를 입력한 뒤 경로를 붙여넣으세요.

오타는 줄이고 문제 해결은 빠르게, 클릭과 입력을 하나의 도구로 해결하세요.

---

**관련 가이드:**

- [RcloneView 안의 Rclone 터미널](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [터미널과 GUI 워크플로](https://rcloneview.com/support/blog/rcloneview-terminal-gui-workflow)
- [Alias 리모트 단축 경로](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />

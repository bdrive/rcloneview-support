---
slug: copy-full-path-remote-paths-rcloneview
title: "전체 경로 복사 — RcloneView에서 빠르게 리모트 경로 복사하기"
authors:
  - robin
description: "RcloneView의 전체 경로 복사 명령으로 rclone CLI 명령, 스크립트, 작업 설정에 필요한 remote:path 문자열을 즉시 가져오세요."
keywords:
  - RcloneView 전체 경로 복사
  - rclone 리모트 경로
  - 리모트 경로 복사
  - rclone CLI 경로 구문
  - 브레드크럼 경로 바
  - RcloneView 터미널 워크플로
  - rclone 스크립팅 경로
  - 클라우드 리모트 경로 복사
tags:
  - RcloneView
  - feature
  - cli
  - tips
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 전체 경로 복사 — RcloneView에서 빠르게 리모트 경로 복사하기

> 리모트 이름과 폴더 경로를 손으로 다시 입력하지 마세요 — 브레드크럼 바를 마우스 오른쪽 클릭하면 rclone이 기대하는 정확한 `remote:path` 문자열을 복사할 수 있습니다.

RcloneView GUI와 rclone CLI 명령을 함께 사용하는 사람이라면 이 불편함을 잘 압니다: 폴더를 눈으로 찾은 다음, 스크립트나 터미널 명령에서 참조하기 위해 경로를 손으로 다시 조합해야 합니다. RcloneView의 전체 경로 복사 기능은 rclone이 사용하는 정확한 `mygoogledrive:Meet recordings` 형식을 생성해 이 단계를 완전히 없애며, 명령, 작업 필터, 자동화 스크립트에 바로 붙여넣을 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 이 명령의 위치

전체 경로 복사는 각 탐색기 패널 상단에 있는 브레드크럼 경로 바의 마우스 오른쪽 클릭 메뉴에서 잘라내기, 복사, 붙여넣기, 전체 선택과 함께 제공됩니다. 로컬이든 클라우드든 원하는 폴더로 이동한 다음, 파일 행이 아니라 경로 바 자체를 마우스 오른쪽 클릭하고 전체 경로 복사를 선택하세요. RcloneView는 rclone 자체의 CLI, 설정 파일, RC API 호출이 기대하는 것과 동일한 `remote:path` 구문으로 리모트 이름과 폴더 경로를 클립보드에 씁니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView breadcrumb path bar with right-click context menu open" class="img-large img-center" />

이는 rclone이 이 구문에 엄격하기 때문에 중요합니다: 콜론이 리모트 이름과 경로를 구분하며, 이를 잘못 입력하면(불필요한 슬래시, 누락된 콜론) 사람들이 경로를 기억에 의존해 손으로 입력할 때 흔히 발생하는 "디렉토리를 찾을 수 없음" 오류의 원인이 됩니다.

## 수동 경로 입력보다 나은 이유

폴더 이름에 유니코드 문자, 공백, 깊은 중첩이 포함되면 손으로 경로를 입력하는 방식은 한계에 부딪힙니다 — 바로 이런 경로가 오타가 나기 쉽고 디버깅하기 어렵습니다. 전체 경로 복사는 RcloneView가 폴더 트리를 렌더링할 때 이미 해석해 둔 정확한 문자열을 복사함으로써 이 문제를 모두 우회하므로, 붙여넣는 내용이 실제 리모트의 내용과 일치함이 보장됩니다. RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교를 지원하며, 전체 경로 복사는 탐색기, 동기화 작업 설정, 폴더 비교 세 가지 모두에서 동일하게 작동합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder path for comparison in RcloneView" class="img-large img-center" />

동기화 작업의 원본이나 대상 폴더를 설정할 때, 또는 정확한 경로 접두사가 필요한 사용자 지정 필터 규칙을 작성할 때 특히 유용합니다 — 복사한 경로를 붙여넣으면 엉뚱한 파일을 조용히 제외시키는 사소한 오타를 피할 수 있습니다.

## 내장 터미널과 함께 사용하기

전체 경로 복사는 하단 정보 뷰의 Rclone 터미널과 함께 사용할 때 가장 강력합니다. 탐색기에서 경로를 복사하고 터미널 탭으로 전환한 다음, 앱을 벗어나거나 다시 입력하지 않고 `rclone lsf`나 `rclone about` 같은 명령에 바로 붙여넣으세요. 이는 RcloneView를 하이브리드 워크플로 도구로 만들어 줍니다: 시각적으로 탐색해 필요한 폴더를 찾은 다음, GUI가 아직 제공하지 않는 기능을 위해 곧바로 CLI 수준의 제어로 넘어갈 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an rclone command referencing a copied remote path" class="img-large img-center" />

정기적인 유지 관리 작업을 스크립트로 작성하는 사람이라면 — `rclone size` 확인이나 두 폴더 간 수동 `rclone check` 등 — 이 단축 기능은 손으로 명령을 작성할 때 가장 오류가 나기 쉬운 단계를 없애 줍니다.

## 시작하기

1. 아직 설치하지 않았다면 [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 탐색기에서 아무 리모트나 열고 참조하려는 폴더로 이동합니다.
3. 브레드크럼 경로 바를 마우스 오른쪽 클릭하고 전체 경로 복사를 선택합니다.
4. 복사한 `remote:path` 문자열을 동기화 작업, 필터 규칙, 또는 내장 Rclone 터미널에 붙여넣습니다.

이것이 습관이 되면, 리모트 경로를 손으로 입력하는 것이 얼마나 느린 방식이었는지 느끼게 될 것입니다.

---

**관련 가이드:**

- [RcloneView 터미널: GUI 안에서 rclone CLI의 모든 기능 사용하기](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [RcloneView 키보드 단축키와 생산성 팁](https://rcloneview.com/support/blog/keyboard-shortcuts-productivity-rcloneview)
- [RcloneView에서 클라우드 파일 관리 속도를 높여주는 두 창 탐색기 팁 10가지](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)

<CloudSupportGrid />

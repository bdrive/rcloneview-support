---
slug: multilingual-interface-9-languages-rcloneview
title: "다국어 인터페이스 — RcloneView를 9개 언어로 사용하기"
authors:
  - casey
description: "RcloneView는 CJK 지원을 포함한 9개 UI 언어로 제공되어, 글로벌 팀도 클라우드 동기화 및 마운트 워크플로우를 자연스럽게 읽을 수 있습니다."
keywords:
  - RcloneView 언어 설정
  - RcloneView 다국어 인터페이스
  - 클라우드 스토리지 앱 언어
  - RcloneView 한국어 일본어 중국어
  - RcloneView 언어 변경
  - 현지화된 클라우드 동기화 도구
  - Noto Sans CJK 지원
  - 국제 클라우드 스토리지 GUI
  - RcloneView UI 설정
tags:
  - RcloneView
  - feature
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 다국어 인터페이스 — RcloneView를 9개 언어로 사용하기

> 클라우드 동기화 도구는 그것을 실제로 읽을 수 있는 팀에게만 유용합니다 — RcloneView의 인터페이스는 기본적으로 9개 언어에 맞춰 제공됩니다.

분산된 팀 전체에 파일 관리 도구를 도입하다 보면, 대개 팀원 중 누군가는 익숙하지 않은 언어로 메뉴를 읽어야 하는 상황에 놓입니다. RcloneView는 브라우저의 자동 번역이나 영어 전용 빌드에 의존하는 대신, 완전한 UI 번역을 제공함으로써 이를 피합니다. 팀이 서울, 파리, 상파울루 어디에 걸쳐 있든, 동기화 마법사, 마운트 설정, Job Manager가 모두 현지 언어로 표시됩니다. RcloneView는 하나의 창에서 Windows, macOS, Linux 전반에 걸쳐 90개 이상의 제공업체를 마운트하고 동기화할 수 있으며 — 이제는 팀이 실제로 사용하는 언어로도 이용할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 지원 언어

RcloneView는 현재 영어, 한국어, 프랑스어, 독일어, 중국어 간체, 중국어 번체, 일본어, 스페인어, 인도네시아어를 지원합니다. 이는 일부 메뉴에만 적용되는 부분적인 번역 계층이 아닙니다 — Remote Manager, 동기화(Sync) 설정, 폴더 비교(Folder Compare), Settings 전반의 레이블이 모두 현지화되어 있어, 영어를 사용하지 않는 사용자도 작업 도중 절반만 번역된 대화상자를 보고 헤맬 일이 없습니다.

특히 CJK 언어의 경우, 앱에는 Noto Sans 폰트 변형(한국어, 중국어 간체, 중국어 번체, 일본어)이 번들로 포함되어 있어, 올바른 문자 집합을 포함하지 않는 시스템 폰트에 의존하는 앱들이 흔히 겪는 두부(tofu) 박스 렌더링 문제를 피할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="현지화된 메뉴 옵션을 보여주는 RcloneView 인터페이스" class="img-large img-center" />

## 언어 전환하기

언어 선택은 Settings 탭 > General > Language 아래에 있습니다. 드롭다운에서 원하는 언어를 선택하면 인터페이스가 즉시 업데이트됩니다 — 재시작이 필요 없습니다. 덕분에 한 지역의 지원 담당자가 마운트나 동기화 설정을 함께 살펴보는 동안 동료의 세션을 잠시 그의 언어로 전환했다가 다시 되돌리는 것도 쉽습니다.

이 설정은 클라우드 계정에 연동되는 것이 아니라 설치본 단위로 적용되므로, 모든 팀원이 동일한 공유 리모트에 접속하고 있더라도 각자 가장 편한 언어로 RcloneView를 실행할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="현지화된 인터페이스로 클라우드 간 전송을 설정하는 모습" class="img-large img-center" />

## 다지역 팀에게 중요한 이유

동기화 작업, 필터 규칙, 마운트 구성은 그 자체로도 충분히 기술적인 세부사항을 포함하고 있으며 — 여기에 언어 장벽까지 더해지면 필터를 잘못 구성하거나 동기화 방향을 잘못 설정할 가능성이 커집니다. 제대로 현지화된 인터페이스가 있다면, 도쿄의 운영팀과 베를린의 IT 관리자가 실제 운영 파일에 영향을 주는 작업을 실행하기 전에, "Modifying destination only"와 "Bidirection" 동기화 설정을 각자의 언어로 정확히 읽고 이해할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="현지화된 RcloneView 인터페이스에서 동기화 작업을 실행하는 모습" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Settings 탭 > General > Language를 여세요.
3. 사용 가능한 9개 옵션 중 원하는 언어를 선택하세요.
4. 리모트, 동기화 작업, 마운트 설정을 계속 진행하세요 — 인터페이스 전체가 선택한 언어를 따릅니다.

팀 전체가 실제로 편하게 읽을 수 있는 도구는 처음부터 올바르게 구성될 가능성이 높은 도구이기도 합니다.

---

**관련 가이드:**

- [RcloneView의 키보드 단축키와 생산성 팁](https://rcloneview.com/support/blog/keyboard-shortcuts-productivity-rcloneview)
- [RcloneView의 다크 모드와 테마 커스터마이징](https://rcloneview.com/support/blog/dark-mode-themes-customization-rcloneview)
- [RcloneView 터미널 — GUI와 CLI 워크플로우를 함께](https://rcloneview.com/support/blog/rcloneview-terminal-gui-workflow)

<CloudSupportGrid />

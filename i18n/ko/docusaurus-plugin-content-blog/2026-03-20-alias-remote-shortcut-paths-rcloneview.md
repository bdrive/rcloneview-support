---
slug: alias-remote-shortcut-paths-rcloneview
title: "별칭 리모트(Alias Remote) — RcloneView로 깊은 클라우드 폴더에 바로가기 만들기"
authors:
  - tayson
description: "rclone의 별칭 리모트(alias remote) 기능을 사용해 중첩된 클라우드 폴더에 바로가기를 만들고 RcloneView로 생산성을 높이는 방법을 알아보세요."
keywords:
  - alias remote
  - rclone alias
  - folder shortcuts
  - cloud folder shortcuts
  - nested folder access
  - rclone remote configuration
  - productivity shortcuts
  - folder shortcuts rclone
  - quick folder access
  - cloud organization
tags:
  - feature
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 별칭 리모트(Alias Remote) — RcloneView로 깊은 클라우드 폴더에 바로가기 만들기

> 자주 사용하는 클라우드 디렉터리에 도달하기 위해 수많은 폴더를 탐색하는 데 지치셨나요? 별칭 리모트로 바로가기를 만들어 즉시 접근하세요.

클라우드 스토리지의 계층 구조는 다루기 어려워지기 쉽습니다. 깊이 중첩된 프로젝트 폴더나 공유 팀 디렉터리를 찾으려면 여러 번 클릭해야 합니다. rclone의 별칭 리모트 기능은 특정 폴더를 직접 가리키는 바로가기, 즉 별칭(alias)을 만들어 이 문제를 해결합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 별칭 리모트란 무엇인가요?

별칭 리모트는 다른 리모트 내의 하위 폴더를 가리키는 가상 리모트입니다. `/MyDrive/Projects/Client A/2026/Active Cases/Smith vs. Jones`를 탐색하는 대신, 해당 위치를 직접 가리키는 `smith-vs-jones`라는 별칭을 만들 수 있습니다.

![File comparison and selection](/images/en/howto/rcloneview-basic/compare-display-select.png)

RcloneView에서는 `smith-vs-jones`가 리모트 목록에 별도의 리모트로 표시되어 한 번의 클릭으로 해당 폴더에 접근할 수 있습니다. 이 가상 리모트는 실제 리모트와 완전히 동일하게 동작하므로, 별칭을 시작점으로 파일을 복사, 이동, 동기화할 수 있습니다.

## 별칭 리모트 만들기

기본 리모트와 하위 폴더 경로를 지정하여 rclone 설정 파일에 별칭 리모트를 구성합니다. RcloneView는 구성된 모든 별칭 리모트를 표준 클라우드 계정과 함께 표시합니다.

![Job scheduling interface](/images/en/howto/rcloneview-advanced/create-job-schedule.png)

예를 들어, `/GoogleDrive/Archive/2025`를 가리키는 `archive-2025`라는 별칭을 만든 다음, RcloneView의 리모트 선택기에서 바로 접근할 수 있습니다. 이 별칭은 데이터를 중복 저장하거나 별도의 스토리지를 요구하지 않으면서 편리한 바로가기 역할을 합니다.

## 생산성 향상

일반적인 활용 사례는 다음과 같습니다.

- 작업 중 빠르게 접근해야 하는 프로젝트별 폴더
- 잦은 접근이 필요한 법률 또는 비즈니스 기업의 클라이언트 디렉터리
- 여러 프로젝트에서 정기적으로 참조하는 공유 팀 폴더
- 자주 접근하지는 않지만 쉬운 검색이 필요한 아카이브 또는 백업 폴더
- 특정 워크플로우나 캠페인을 위한 임시 작업 디렉터리

각 별칭은 탐색 단계를 줄여 워크플로우를 가장 중요한 작업에 집중시켜 줍니다. 팀은 별칭 구성을 공유하여 모든 사람이 동일한 프로젝트 구조에 효율적으로 접근하도록 할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. rclone 설정에서 별칭 리모트를 구성합니다(자주 사용하는 하위 디렉터리를 가리키도록 설정).
3. RcloneView를 실행하면 새 별칭이 별도의 리모트로 표시됩니다.
4. 별칭을 클릭하면 즉시 해당 폴더로 이동합니다.

클라우드 탐색을 간소화하고 수 시간의 생산성을 되찾으세요.

---

**관련 가이드:**

- [가상 리모트 — 결합(Combine) 및 유니온(Union) 별칭](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [리모트 관리 — 추가, 편집, 삭제](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)
- [유니온 리모트 — 무료 스토리지 결합](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)

<CloudSupportGrid />

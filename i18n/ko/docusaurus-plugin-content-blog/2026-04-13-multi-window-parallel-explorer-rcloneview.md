---
slug: multi-window-parallel-explorer-rcloneview
title: "멀티 윈도우 지원 — RcloneView에서 여러 클라우드 스토리지를 나란히 관리하기"
authors:
  - tayson
description: "RcloneView의 멀티 윈도우 기능을 사용해 서로 다른 클라우드 스토리지 작업을 위한 독립적인 창을 열어보세요. Google Drive, S3, OneDrive를 여러 창에서 동시에 관리할 수 있습니다."
keywords:
  - RcloneView multi-window
  - multiple windows cloud storage
  - parallel cloud management
  - RcloneView PLUS feature
  - cloud storage multi-window
  - side by side cloud management
  - RcloneView independent windows
  - cloud file manager multiple windows
  - RcloneView productivity
  - multi-window cloud sync
tags:
  - RcloneView
  - feature
  - cloud-storage
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 멀티 윈도우 지원 — RcloneView에서 여러 클라우드 스토리지를 나란히 관리하기

> RcloneView의 멀티 윈도우 기능(PLUS 라이선스)은 독립적인 애플리케이션 창을 열어주어, 컨텍스트 전환 없이 서로 다른 클라우드 스토리지 작업을 동시에 관리할 수 있게 해줍니다.

RcloneView의 Explorer 패널은 이미 하나의 창에서 1개에서 4개까지의 패널을 지원하며, 나란히 탐색하거나 드래그 앤 드롭으로 전송하는 데 유용합니다. 하지만 서로 다른 여러 작업이 얽힌 복잡한 워크플로우 — 한 화면에서는 진행 중인 마이그레이션을 모니터링하면서 다른 화면에서는 별도의 클라우드를 탐색하거나, 폴더 비교를 실행하면서 동시에 새로운 동기화 작업을 설정하는 경우 — 에는 멀티 윈도우를 통해 서로 간섭하지 않고 동작하는 완전히 독립적인 RcloneView 창을 열 수 있습니다. 이 기능은 PLUS 라이선스에서 사용할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 멀티 윈도우 작동 방식

멀티 윈도우를 통해 열린 각 새 창은 자체 Explorer 패널, Transferring 탭, 상태를 가진 완전히 독립적인 RcloneView 인스턴스입니다. 한 창에서의 변경 사항은 다른 창에 영향을 주지 않습니다. 창들은 RcloneView의 내부 IPC 메커니즘을 통해 통신하지만, 파일 탐색 상태와 진행 중인 작업은 서로 격리되어 있습니다.

새 창을 열려면 Home 탭에서 **New Window** 버튼을 클릭하세요. 새 창은 메인 창과 동일한 기본 상태로 열리며, 이후 다른 리모트로 이동하거나 별도의 작업을 독립적으로 시작할 수 있습니다. 창의 위치와 크기는 세션 간에 자동으로 저장되므로, 다음에 RcloneView를 열 때도 멀티 윈도우 레이아웃이 그대로 유지됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Opening a new independent window in RcloneView" class="img-large img-center" />

## 실전 멀티 윈도우 워크플로우

**클라우드 제공업체 간 병렬 탐색:** Window 1을 열어 Amazon S3 버킷을 탐색하면서 Window 2에서는 Google Drive를 표시합니다. 창 사이에 파일을 드래그하여 서로 다른 제공업체 간 복사를 실행하거나, 마이그레이션 중에 두 제공업체의 콘텐츠를 동시에 모니터링할 수 있습니다.

**파일 탐색과 함께하는 작업 모니터링:** Window 1에는 Transferring 탭을 열어 진행 중인 작업의 진행 상황을 표시하고, Window 2에서는 다른 클라우드를 탐색하거나 다음 작업을 설정할 수 있습니다 — 탭을 전환하거나 모니터링 화면을 중단할 필요가 없습니다.

**전용 창에서의 폴더 비교:** Window 1에서 대용량 폴더 비교 작업(대형 클라우드 폴더의 경우 시간이 걸릴 수 있음)을 실행하는 동안 Window 2에서는 계속 파일 작업을 이어갈 수 있습니다. 비교 작업은 다른 작업을 차단하지 않고 독립적으로 실행됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Running folder comparison in one window while browsing another in RcloneView" class="img-large img-center" />

**다중 사용자 또는 다중 프로젝트 워크플로우:** 여러 클라이언트나 프로젝트의 클라우드 스토리지를 관리하는 전문가는 각 작업에 전용 창을 할당하여, 리모트 간을 반복적으로 오가는 대신 컨텍스트별 화면을 동시에 열어둘 수 있습니다.

## 멀티 윈도우와 패널 레이아웃 조합하기

각 창 내에서 패널 레이아웃(1~4개 패널, 수평 또는 수직 분할)은 Settings 탭 > Layout / View count를 통해 독립적으로 구성할 수 있습니다. 2개의 패널을 가진 창 2개로 구성된 멀티 윈도우 설정은 두 개의 정돈된 작업 공간에 걸쳐 사실상 4개의 동시 Explorer 패널을 제공하는 셈입니다.

이 조합은 특히 동기화 워크플로우에 유용합니다. Window 1에는 진행 중인 동기화 작업의 소스와 대상 패널을 표시하고, Window 2에는 다른 동기화 작업을 위한 두 번째 소스-대상 쌍을 표시합니다. 두 작업 모두 표시 상태를 공유하지 않고 병렬로 실행됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multiple parallel sync operations in RcloneView multi-window mode" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하고 PLUS 라이선스를 활성화합니다.
2. Home 탭에서 **New Window** 버튼을 클릭하여 독립적인 두 번째 창을 엽니다.
3. 각 창을 서로 다른 리모트나 작업으로 이동시켜 병렬로 작업합니다.
4. Settings > Layout에서 창별 패널 수를 조정하여 워크플로우에 가장 효율적인 레이아웃을 만듭니다.

멀티 윈도우는 RcloneView를 단일 작업 파일 관리자에서, 여러 제공업체·프로젝트·진행 중인 작업을 동시에 관리하는 클라우드 스토리지 전문가를 위한 병렬 작업 공간으로 탈바꿈시킵니다.

---

**관련 가이드:**

- [RcloneView 듀얼 패널 Explorer 생산성 팁](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)
- [RcloneView로 여러 클라우드 계정 관리하기](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [모든 클라우드 통합 — Google Drive, Dropbox, OneDrive 관리하기](https://rcloneview.com/support/blog/unify-all-clouds-manage-google-drive-dropbox-onedrive)

<CloudSupportGrid />

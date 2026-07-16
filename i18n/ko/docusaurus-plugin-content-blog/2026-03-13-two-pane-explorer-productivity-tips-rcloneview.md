---
slug: two-pane-explorer-productivity-tips-rcloneview
title: "RcloneView에서 클라우드 파일 관리 속도를 높여주는 듀얼 패널 탐색기 팁 10가지"
authors:
  - tayson
description: "RcloneView의 듀얼 패널 탐색기는 보기보다 강력합니다. 이 생산성 팁들을 익혀 70개 이상의 프로바이더에서 더 빠르게 탐색, 전송, 관리하세요."
keywords:
  - two pane file manager
  - dual pane cloud explorer
  - rcloneview file browser tips
  - cloud file manager productivity
  - two panel file explorer
  - cloud file management tips
  - rcloneview explorer guide
  - dual pane file manager cloud
  - fast cloud file navigation
  - cloud explorer keyboard shortcuts
tags:
  - feature
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView에서 클라우드 파일 관리 속도를 높여주는 듀얼 패널 탐색기 팁 10가지

> RcloneView의 듀얼 패널 탐색기는 두 개의 저장 위치를 나란히 배치해줍니다. 기본적인 드래그 앤 드롭을 넘어, 클라우드 파일 관리를 진정으로 빠르게 만들어주는 기능들이 가득합니다. 대부분의 사용자가 놓치는 10가지 팁을 소개합니다.

듀얼 패널 탐색기는 RcloneView의 핵심입니다. 클라우드 프로바이더, NAS 장치, 로컬 드라이브를 어떤 조합으로든 동시에 두 개의 저장 위치로 표시하고, 양쪽을 오가며 작업할 수 있게 해줍니다. 대부분의 사용자는 드래그 앤 드롭을 바로 발견합니다. 이 팁들은 그보다 더 깊이 들어갑니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 기본기: 두 개의 패널, 어떤 위치든

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Two-pane cloud explorer" class="img-large img-center" />

각 패널은 어떤 저장 위치도 가리킬 수 있습니다. 왼쪽에는 Google Drive, 오른쪽에는 S3. 한쪽에는 OneDrive, 다른 쪽에는 로컬 NAS. 조합은 사용자의 선택에 달려 있습니다.

## 팁 1: 폴더 트리 전체를 드래그 앤 드롭하기

개별 파일만 드래그하지 마세요. 폴더를 선택해서 다른 패널로 드래그하면 디렉터리 트리 전체가 구조를 그대로 유지한 채 전송됩니다. 클라우드 간 전송을 포함해 어떤 두 프로바이더 조합에서도 동작합니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag entire folders" class="img-large img-center" />

## 팁 2: 우클릭으로 더 많은 전송 옵션 사용하기

드래그의 기본 동작은 복사입니다. 선택한 파일에서 우클릭하면 이동, 동기화 등 추가 옵션을 사용할 수 있습니다. 작업 방식에 따라 적합한 동작이 다릅니다. 백업에는 복사, 미러링에는 동기화, 마이그레이션에는 이동을 사용하세요.

## 팁 3: 전송 전에 먼저 비교하기

전송하기 전에 폴더 비교 기능을 사용해 두 패널 사이의 차이를 확인하세요. 불필요한 전송을 방지하고 올바른 방향으로 동기화하고 있는지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders before transfer" class="img-large img-center" />

## 팁 4: 자주 하는 전송을 작업으로 저장하기

같은 두 위치 사이를 정기적으로 전송한다면, 이름을 붙여 작업으로 저장하세요. 다음번에는 두 폴더로 일일이 이동할 필요 없이 클릭 한 번으로 작업을 실행할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Save as job for quick access" class="img-large img-center" />

## 팁 5: 주소 표시줄로 빠르게 이동하기

중첩된 폴더를 클릭해서 들어가는 대신, 주소 표시줄에 경로를 직접 입력하거나 붙여넣으세요. 네 번 클릭할 필요 없이 `/Projects/2026/Q1/`로 바로 이동할 수 있습니다.

## 팁 6: 전송을 실시간으로 모니터링하기

전송을 시작하면 속도, 전송된 파일 수, 예상 남은 시간 등을 실시간으로 확인할 수 있습니다. 대용량 전송이 예정대로 완료될지 가늠하는 데 유용합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring" class="img-large img-center" />

## 팁 7: 키보드 단축키로 여러 파일 선택하기

Ctrl(또는 Cmd)을 누른 채로 목록에서 개별 파일을 선택할 수 있습니다. Shift를 누르면 범위를 선택할 수 있습니다. Ctrl+A로 전체를 선택하세요. 그런 다음 선택 항목을 다른 패널로 드래그하면 일괄 전송이 가능합니다.

## 팁 8: 컨텍스트를 잃지 않고 프로바이더 전환하기

한 패널에서만 클라우드 프로바이더를 변경하고 다른 패널은 그대로 유지할 수 있습니다. 이를 통해 여러 프로바이더에서 동일한 폴더 구조를 빠르게 확인할 수 있으며, 백업 검증이나 마이그레이션 비교에 유용합니다.

## 팁 9: 백업 검증에 폴더 비교 활용하기

전송이나 동기화 작업이 끝난 후, 듀얼 패널 탐색기에서 두 위치를 모두 열고 폴더 비교를 실행하세요. 초록색은 일치함을 의미하며, 차이가 있는 부분은 강조 표시됩니다. 믿되 확인하세요.

## 팁 10: 작업 스케줄링과 결합하기

탐색기는 즉흥적인 전송에 뛰어납니다. 반복되는 작업 흐름에는 탐색기에서 전송을 만들고, 작업으로 저장한 다음, 스케줄을 설정하세요. 탐색기는 설정을 돕고, 스케줄러는 그것을 계속 실행되게 합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule recurring transfers" class="img-large img-center" />

## 듀얼 패널의 힘

듀얼 패널 설계는 단순한 레이아웃 선택이 아니라 하나의 작업 철학입니다. 모든 클라우드 작업이 시각적이고 공간적인 작업으로 바뀝니다. 한쪽에는 소스, 다른 쪽에는 대상. 이는 추상적인 클라우드 스토리지를 직접 보고 다룰 수 있는 것으로 바꿔줍니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 리모트 관리자에서 **클라우드 계정을 추가**하세요.
3. 원하는 프로바이더 조합으로 **두 개의 패널을 여세요**.
4. **탐색을 시작**하세요. 드래그하고, 비교하고, 동기화하고, 관리하세요.

한번 듀얼 패널로 작업해보면, 단일 패널 파일 관리자는 한쪽 눈을 감고 운전하는 것처럼 답답하게 느껴질 것입니다.

---

**관련 가이드:**

- [드래그 앤 드롭 클라우드 전송](https://rcloneview.com/support/blog/drag-drop-cloud-transfer-guide-rcloneview)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />

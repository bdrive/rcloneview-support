---
slug: bisync-bidirectional-cloud-sync-rcloneview
title: "Bisync: RcloneView로 구현하는 진정한 양방향 클라우드 동기화"
authors:
  - tayson
description: "RcloneView를 통해 rclone의 bisync 기능을 사용하여 두 클라우드 위치를 양방향으로 동기화 상태로 유지하세요. bisync를 언제 사용해야 하는지, 어떻게 설정하는지, 충돌은 어떻게 처리하는지 알아봅니다."
keywords:
  - bisync rcloneview
  - bidirectional cloud sync rclone
  - rclone bisync guide
  - two-way cloud sync
  - sync both directions cloud
  - rcloneview bisync setup
  - rclone bidirectional sync
  - google drive bidirectional sync
  - onedrive two-way sync
  - cloud folder two-way mirror
tags:
  - RcloneView
  - sync
  - cloud-sync
  - feature
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync: RcloneView로 구현하는 진정한 양방향 클라우드 동기화

> 표준 rclone Sync는 단방향입니다 — 대상을 소스와 일치시킵니다. Bisync는 한 단계 더 나아갑니다: 어느 한쪽 위치에서 발생한 변경 사항이 다른 쪽으로 전파됩니다. 위치 A에 파일을 추가하면 위치 B에도 나타나며, 그 반대도 마찬가지입니다. RcloneView에서 이를 설정하는 방법을 소개합니다.

대부분의 클라우드 동기화 시나리오는 단방향입니다: 로컬 머신을 클라우드에 백업하거나, 기본 클라우드를 백업 클라우드에 미러링하는 식입니다. 하지만 일부 워크플로우는 진정한 양방향 동기화를 필요로 합니다 — 두 사람이 함께 편집하는 공유 폴더, 항상 동기화 상태를 유지해야 하는 회사용 머신과 가정용 머신, 또는 동등하게 작동하는 두 개의 클라우드 계정 등이 그렇습니다. Rclone의 `bisync` 명령이 이를 제공하며, RcloneView는 명령줄 없이도 이를 설정할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Sync와 Bisync의 차이점

| 동작 | rclone sync | rclone bisync |
|----------|------------|--------------|
| 방향 | 단방향 (소스 → 대상) | 양방향 (양쪽 모두) |
| 삭제 | 소스에 없으면 대상에서 삭제 | 양방향으로 삭제 전파 |
| 충돌 | 항상 소스가 우선 | 명시적인 충돌 처리 필요 |
| 데이터 손실 위험 | 방향이 잘못되면 발생 가능 | 낮은 위험; 양쪽 모두 확인 |
| 복잡도 | 단순 | 더 복잡함; 신중한 설정 필요 |

## Bisync를 사용해야 할 때

**다음의 경우 bisync를 사용하세요:**
- 두 사람 또는 두 시스템이 같은 폴더에 변경 사항을 반영하는 경우.
- 항상 동시에 온라인 상태가 아닌 여러 기기에서 파일을 편집하는 경우.
- 두 클라우드 계정을 양쪽 모두의 변경 사항이 반영되는 활성 미러로 유지하는 경우.

**다음의 경우 일반 Sync를 사용하세요:**
- 명확한 기본(소스)과 보조(백업/대상)가 있는 경우.
- 한쪽에서만 새 파일을 생성하고 — 다른 쪽은 읽기 전용인 경우.
- 단순성과 예측 가능성이 우선인 경우.

## RcloneView에서 Bisync 설정하기

Bisync는 이후 실행에서 변경 사항을 추적할 수 있도록 기준 상태를 설정하기 위해 최초 1회 초기화(resync)가 필요합니다.

### 1단계 — 두 개의 리모트 추가

두 위치가 모두 RcloneView에 리모트로 구성되어 있는지 확인하세요. 예를 들어:
- `gdrive-work:/Projects/Active/` (Google Drive 업무용 계정)
- `onedrive-home:/Projects/Active/` (OneDrive 가정용 계정)

<img src="/support/images/en/blog/new-remote.png" alt="Configure remotes for bisync in RcloneView" class="img-large img-center" />

### 2단계 — 초기 resync 실행

첫 번째 bisync 실행에는 기준선을 설정하기 위해 `--resync`를 사용해야 합니다. RcloneView의 **Terminal**에서:

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --resync --verbose
```

이 명령은 이후 실행에서 bisync가 변경 사항을 감지하는 데 사용하는 기준 상태 파일(`~/.cache/rclone/bisync/`에 저장됨)을 생성합니다. resync는 최신 파일을 양쪽에 복사하여 두 위치를 동일하게 만듭니다.

### 3단계 — RcloneView에서 Bisync 작업 생성

1. RcloneView에서 **Jobs**를 엽니다.
2. **Custom Command**를 선택하거나 Terminal 패널을 사용합니다.
3. 지속적인 실행을 위한 bisync 명령을 입력합니다:

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --verbose --log-file /tmp/bisync.log
```

4. 작업으로 저장하고 매시간 또는 매일 실행되도록 예약합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule bisync job in RcloneView" class="img-large img-center" />

## 충돌 처리

Bisync는 실행 사이에 파일이 두 위치 모두에서 수정된 경우 충돌을 감지합니다. 기본적으로 rclone bisync는 이러한 충돌을 표시하고 어느 쪽 버전도 덮어쓰지 않습니다.

`--conflict-resolve newer`를 추가하면 더 최신 파일을 자동으로 우선시합니다:

```bash
rclone bisync path1 path2 --conflict-resolve newer
```

또는 `--conflict-resolve larger`를 사용하면 더 큰 파일을 우선시합니다(문서가 계속 커지는 시나리오에 유용합니다).

자동으로 해결되지 않은 충돌 파일은 `.conflict` 접미사가 붙은 이름으로 변경되어 양쪽 버전이 모두 보존됩니다.

## 자주 사용하는 Bisync 플래그

| 플래그 | 용도 |
|------|---------|
| `--resync` | 기준선을 초기화하거나 재설정 (한 번만 사용) |
| `--conflict-resolve newer` | 더 최신 파일을 우선시하여 충돌 자동 해결 |
| `--filters-file /path/to/filters` | 포함/제외 규칙 적용 |
| `--max-delete 10` | 10개 이상의 파일이 삭제될 경우 중단 (안전 장치) |
| `--dry-run` | 실제로 변경하지 않고 변경될 내용 미리 보기 |
| `--verbose` | 디버깅을 위한 상세 출력 |

`--max-delete` 플래그는 특히 중요합니다 — 잘못된 설정으로 인해 bisync가 대량의 파일을 실수로 삭제하는 것을 방지합니다.

## Bisync 실행 모니터링

각 실행 후 RcloneView의 **Job History**에서 bisync 출력을 확인하세요:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor bisync results in RcloneView" class="img-large img-center" />

정상적인 bisync 실행에서는 다음이 표시됩니다:
- path1에서 path2로 복사된 파일
- path2에서 path1로 복사된 파일
- 감지된 충돌 및 해결 방식
- 총 소요 시간 및 전송 통계

## Bisync의 한계

- **동일한 파일에 대한 동시 편집에는 적합하지 않습니다** — bisync는 실시간이 아니라 실행 사이의 상태를 비교합니다.
- **삭제 전파는 위험할 수 있습니다** — 한쪽에서 파일을 삭제하면 다음 실행 후 다른 쪽에서도 삭제됩니다.
- **실행 사이에 안정적인 상태가 필요합니다** — 실행이 중간에 실패하면 `--resync`로 다시 실행하여 기준선을 재구성하세요.
- **경로가 클수록 느려집니다** — 기준선 비교는 매 실행마다 양쪽 위치를 전체 스캔합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. RcloneView에서 **두 리모트를 모두 구성**합니다.
3. RcloneView의 터미널에서 **초기 `--resync`를 실행**하여 기준선을 설정합니다.
4. 지속적인 동기화를 위해 **정기적인 bisync 실행을 예약**합니다.

Bisync는 로컬 디스크, 클라우드 제공업체, NAS 공유 등 rclone이 지원하는 모든 리모트 쌍에 진정한 양방향 동기화를 제공합니다.

---

**관련 가이드:**

- [Sync, Copy, Move — 차이점 설명](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [필터 규칙과 선택적 동기화](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [잘못된 동기화 방향으로 인한 데이터 손실 방지](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />

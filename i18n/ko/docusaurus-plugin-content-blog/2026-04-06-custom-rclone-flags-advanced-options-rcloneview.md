---
slug: custom-rclone-flags-advanced-options-rcloneview
title: "RcloneView 작업에서 사용자 지정 rclone 플래그와 고급 옵션 사용하기"
authors:
  - tayson
description: "성능 튜닝, 디버깅, 고급 작업 구성을 위해 RcloneView에서 사용자 지정 rclone 플래그를 추가하는 방법을 알아보세요. transfers, checkers, fast-list 등을 다룹니다."
keywords:
  - rclone custom flags
  - rcloneview advanced options
  - rclone transfers flag
  - rclone fast-list performance
  - rclone checkers setting
  - rclone no-traverse flag
  - rclone size-only flag
  - rcloneview job configuration
  - rclone performance tuning
  - rclone debugging flags
tags:
  - RcloneView
  - feature
  - rclone
  - guide
  - tips
  - cli
  - performance
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView 작업에서 사용자 지정 rclone 플래그와 고급 옵션 사용하기

> RcloneView는 일반적인 경우를 자동으로 처리하지만, rclone의 진정한 힘은 플래그에 있습니다. 어떤 플래그를 어디에 추가해야 하는지 알면 전송 시간을 절반으로 줄이거나 까다로운 예외 상황을 해결할 수 있습니다.

rclone에는 전송 병렬성부터 체크섬 동작, 재시도 로직까지 모든 것을 제어하는 수백 개의 명령줄 플래그가 있습니다. RcloneView는 가장 일반적인 작업을 위한 깔끔한 인터페이스를 제공하지만, 기본값만으로는 부족한 상황을 위해 모든 작업에 사용자 지정 플래그를 추가할 수도 있습니다. 이 가이드에서는 가장 유용한 플래그, 사용 시점, RcloneView에서 구성하는 방법을 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 사용자 지정 플래그를 추가하는 위치

RcloneView는 다음 두 곳에서 사용자 지정 플래그를 지원합니다.

1. **작업 구성** -- 작업(복사, 동기화, 이동)을 생성하거나 편집할 때 추가 플래그를 입력하는 필드가 있습니다. 명령줄에서 사용하는 것과 동일하게 입력하세요.
2. **터미널** -- 일회성 명령의 경우 터미널 패널을 열고 필요한 플래그와 함께 전체 rclone 명령을 입력합니다.

저장된 작업에 추가된 플래그는 실행 시마다 유지되므로, 한 번만 구성하면 예약된 실행을 포함하여 작업이 실행될 때마다 적용됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView job configuration with custom flags" class="img-large img-center" />

## 성능 튜닝 플래그

이 플래그들은 전송 속도와 리소스 사용량에 직접적인 영향을 미칩니다.

### --transfers N

병렬로 전송할 파일 수를 제어합니다. 기본값은 4입니다.

```bash
--transfers 16
```

작은 파일이 많거나 제공업체가 높은 동시성을 지원하는 경우 이 값을 늘리세요. S3, B2, Wasabi는 16-32개의 병렬 전송을 잘 처리합니다. Google Drive는 8-10개 이상에서 속도를 제한할 수 있습니다.

### --checkers N

병렬로 확인(비교)할 파일 수를 제어합니다. 기본값은 8입니다.

```bash
--checkers 32
```

파일이 많은 디렉터리에서 동기화나 확인 작업을 실행할 때 이 값을 늘리세요. 확인 단계가 전송이 아니라 병목 지점인 경우가 많습니다.

### --fast-list

단일 요청으로 모든 개체를 요청하여 디렉터리 목록을 가져올 때 더 적은 API 호출을 사용합니다. 대형 버킷이 있는 S3 호환 제공업체에서 훨씬 빠릅니다.

```bash
--fast-list
```

트레이드오프: 전체 목록을 메모리에 보관하므로 더 많은 메모리를 사용합니다. 수백만 개의 개체가 있는 버킷에서는 이로 인해 수 기가바이트의 RAM을 소비할 수 있습니다.

### --no-traverse

대상 목록 가져오기를 완전히 건너뜁니다. 수백만 개의 기존 파일이 있는 대상에 소수의 파일을 복사할 때 유용합니다.

```bash
--no-traverse
```

이 플래그가 없으면 rclone은 기존 파일을 확인하기 위해 전체 대상을 나열합니다. 대상이 대부분 관련이 없다는 것을 알고 있는 경우(예: 500만 개의 개체가 있는 버킷에 10개의 새 파일을 복사) `--no-traverse`는 목록 작성에 소요되는 시간을 몇 분씩 절약해 줍니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane view for configuring transfer jobs" class="img-large img-center" />

### --buffer-size

파일 전송당 메모리 내 버퍼를 제어합니다. 기본값은 16 MiB입니다.

```bash
--buffer-size 64M
```

고대역폭 연결에서 대용량 파일의 경우 이 값을 늘려 I/O 지연을 줄이세요. 메모리가 제한적인 경우 줄이세요.

### --multi-thread-streams N

단일 파일의 멀티스레드 다운로드에 사용할 스트림 수입니다. 기본값은 4입니다.

```bash
--multi-thread-streams 8
```

바이트 범위 요청을 지원하는 제공업체에서 대용량 개별 파일을 다운로드할 때 도움이 됩니다.

## 비교 및 동작 플래그

이 플래그들은 rclone이 전송할 항목을 결정하는 방식을 변경합니다.

### --size-only

수정 시간과 체크섬을 무시하고 크기만으로 파일을 비교합니다.

```bash
--size-only
```

타임스탬프를 신뢰할 수 없거나(일부 SFTP 서버에서 흔함), 동일한 크기의 변경 사항을 놓치더라도 가능한 가장 빠른 비교를 원할 때 사용하세요.

### --ignore-existing

크기나 날짜에 관계없이 대상에 이미 존재하는 파일을 건너뜁니다.

```bash
--ignore-existing
```

기존 파일을 수정하지 않고 새 파일만 추가하는 증분 업로드에 이상적입니다. 모든 파일을 비교하는 것보다 훨씬 빠릅니다.

### --ignore-size

크기를 무시하고 수정 시간만으로 파일을 비교합니다.

```bash
--ignore-size
```

거의 필요하지 않지만, 특정 파일 유형에 대해 잘못된 크기를 보고하는 제공업체와 함께 사용하면 유용합니다.

### --update

대상에서 더 최신인 파일을 건너뜁니다.

```bash
--update
```

대상에서 더 오래된 파일만 복사하려는 양방향 스타일 워크플로에 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders with custom comparison flags" class="img-large img-center" />

## 재시도 및 안정성 플래그

### --retries N

실패한 작업에 대한 재시도 횟수입니다. 기본값은 3입니다.

```bash
--retries 10
```

불안정한 네트워크나 간헐적인 오류가 있는 제공업체의 경우 이 값을 늘리세요.

### --retries-sleep DURATION

재시도 사이에 대기하는 시간입니다. 기본값은 0입니다.

```bash
--retries-sleep 5s
```

재시도 사이에 지연을 추가하며, 제공업체가 속도를 제한할 때 유용합니다.

### --low-level-retries N

저수준 작업(HTTP 요청)에 대한 재시도 횟수입니다. 기본값은 10입니다.

```bash
--low-level-retries 20
```

### --timeout DURATION

IO 유휴 타임아웃입니다. 기본값은 5m0s입니다.

```bash
--timeout 10m
```

매우 느린 연결이나 지연 시간이 긴 제공업체의 경우 이 값을 늘리세요.

## 디버깅 및 로깅 플래그

작업이 실패하거나 예상치 못하게 동작할 때, 이 플래그들은 문제를 진단하는 데 도움이 됩니다.

### -v / -vv

상세 및 매우 상세한 출력입니다.

```bash
-v
```

전송되는 각 파일과 기본 진행 정보를 보여줍니다. HTTP 요청을 포함한 상세 디버그 출력에는 `-vv`를 사용하세요.

### --log-file PATH

콘솔 대신 파일에 로그를 기록합니다.

```bash
--log-file /tmp/rclone-debug.log
```

### --log-level DEBUG

로그 레벨을 명시적으로 설정합니다.

```bash
--log-level DEBUG
```

가장 상세한 출력을 생성합니다. 문제를 보고하거나 예상치 못한 동작을 조사할 때 사용하세요.

### --dry-run

실제 변경 없이 작업을 시뮬레이션합니다.

```bash
--dry-run
```

새로운 플래그 조합을 테스트할 때는 예상대로 동작하는지 확인하기 위해 항상 이 옵션을 먼저 실행하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer with verbose logging in RcloneView" class="img-large img-center" />

## 작업별 플래그 구성

RcloneView를 사용하면 작업마다 다른 플래그 세트를 저장할 수 있습니다. 실용적인 조합 몇 가지를 소개합니다.

**S3로의 대용량 파일 동기화:**
```
--transfers 8 --checkers 16 --fast-list --buffer-size 64M
```

**소용량 파일의 증분 백업:**
```
--transfers 32 --checkers 64 --ignore-existing --fast-list
```

**dry-run을 먼저 실행하는 신중한 동기화:**
```
--dry-run -v
```
그런 다음 실제 실행을 위해 `--dry-run`을 제거하세요.

**실패한 전송 디버깅:**
```
-vv --log-file /tmp/debug.log --retries 1
```

## 잘 알지 못하면 피해야 할 플래그

| 플래그 | 위험 |
|------|------|
| `--delete-before` | 전송 전에 대상 파일을 삭제합니다 -- 전송이 중간에 실패하면 위험할 수 있습니다 |
| 테스트 없이 사용하는 `--max-delete N` | 너무 낮게 설정하면 정리를 막을 수 있습니다 |
| `--no-check-certificate` | TLS 검증을 비활성화합니다 -- 보안 위험 |
| `--ignore-checksum` | 무결성 검증을 건너뜁니다 -- 체크섬의 목적을 무력화합니다 |

## 모범 사례

- **기본값으로 시작하기** -- rclone의 기본값은 대부분의 워크로드에 적합합니다. 특정 문제나 측정 가능한 병목 현상이 있을 때만 플래그를 추가하세요.
- **--dry-run으로 테스트하기** -- 프로덕션 작업에 새 플래그를 적용하기 전에 테스트하세요.
- **플래그 문서화하기** -- 사용자 지정 플래그가 있는 작업을 저장할 때, 나중에 본인(또는 팀원)이 의도를 이해할 수 있도록 각 플래그가 존재하는 이유를 기록하세요.
- **전후 벤치마크하기** -- 성능 플래그를 사용할 때와 사용하지 않을 때의 전송 시간을 측정하여 워크로드에 실제로 도움이 되는지 확인하세요.
- **프로덕션 작업에는 -v 사용하기** -- 약간의 오버헤드는 각 실행 중에 발생한 상황을 파악할 수 있는 가시성만큼의 가치가 있습니다.

---

**관련 가이드:**

- [체크 및 비교로 클라우드 파일 무결성 검증하기](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [중단되거나 실패한 전송 복구하기](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [클라우드 간 전송 및 동기화](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />

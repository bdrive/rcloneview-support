---
slug: min-age-max-age-time-based-filters-rcloneview
title: "RcloneView에서 Min-Age 및 Max-Age 시간 기반 필터 사용하기"
authors:
  - tayson
description: "RcloneView에서 min-age 및 max-age 시간 기반 필터를 사용하여 특정 시간 범위 내에 수정된 파일만 동기화, 복사 또는 백업하세요. 최근 변경 사항만 전송하거나 오래된 파일을 건너뛸 수 있습니다."
keywords:
  - rcloneview
  - min-age filter
  - max-age filter
  - time-based sync
  - rclone min-age
  - rclone max-age
  - sync recent files only
  - filter by date
  - incremental sync time
  - cloud sync filter date
tags:
  - RcloneView
  - feature
  - filters
  - cloud-sync
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView에서 Min-Age 및 Max-Age 시간 기반 필터 사용하기

> 모든 동기화 작업이 전체 파일을 전송할 필요는 없습니다. RcloneView의 시간 기반 필터를 사용하면 특정 시간 범위 내에 수정된 파일만 대상으로 지정할 수 있습니다. 오늘 변경된 파일만 동기화하거나, 30일보다 오래된 파일을 건너뛰거나, 최근 업로드된 파일만 백업할 수 있습니다.

Rclone의 `--min-age` 및 `--max-age` 플래그는 수정 시간을 기준으로 동기화, 복사, 이동 작업에 포함될 파일을 제어하는 강력한 도구입니다. RcloneView는 커스텀 플래그 인터페이스를 통해 이러한 옵션을 제공하므로, 명령줄을 다루지 않고도 시간 기반 파일 선택을 정밀하게 제어할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Min-Age와 Max-Age 이해하기

이 두 플래그는 파일 수정 날짜를 기준으로 시간 기반 필터로 동작합니다.

- **`--max-age`**: 지정된 시간 범위 내에 수정된 파일만 포함합니다. 2시간 전에 수정된 파일은 `--max-age 24h`를 통과합니다. 3일 전에 수정된 파일은 `--max-age 24h`를 통과하지 못하고 건너뜁니다.
- **`--min-age`**: 지정된 시간 범위 *이전에* 수정된 파일만 포함합니다. 30일 전에 수정된 파일은 `--min-age 7d`를 통과합니다. 어제 수정된 파일은 `--min-age 7d`를 통과하지 못하고 건너뜁니다.

다음과 같이 생각하면 됩니다.
- `--max-age 24h` = "24시간 이내의 파일" (최근에 수정됨)
- `--min-age 7d` = "7일보다 오래된 파일" (최근에 수정되지 않음)

## 시간 형식

두 플래그 모두 유연한 시간 형식을 지원합니다.

| 형식 | 예시 | 의미 |
|---|---|---|
| 기간 | `30s`, `5m`, `2h`, `7d`, `4w` | 초, 분, 시간, 일, 주 |
| 조합 | `1d2h30m` | 1일, 2시간, 30분 |
| 절대 날짜 | `2026-04-01` | 2026년 4월 1일 이전/이후의 파일 |
| 날짜 및 시간 | `2026-04-01T15:00:00` | 4월 1일 오후 3시 이전/이후의 파일 |

기간 값은 작업이 실행되는 현재 시각을 기준으로 상대적으로 계산됩니다.

## 사용 사례 1: 오늘 변경된 파일만 동기화

수 테라바이트에 달하는 대규모 클라우드 스토리지를 보유하고 있지만 오늘 변경된 파일만 동기화하고 싶은 경우:

```
--max-age 24h
```

RcloneView 작업 설정의 커스텀 플래그 필드에 이 값을 추가하세요. 동기화 작업은 지난 24시간 이내에 수정된 파일만 검토하므로, 파일 목록을 나열하고 비교하는 시간이 크게 줄어듭니다. 이는 매일 변경되는 파일이 전체 중 일부에 불과한 일일 증분 백업에 유용합니다.

## 사용 사례 2: 오래된 파일 아카이브

90일보다 오래된 파일을 활성 스토리지에서 콜드 스토리지로 이동:

```
--min-age 90d
```

동기화가 아닌 **이동(move)** 작업과 함께 이 플래그를 사용하여 Google Drive에서 S3 Glacier로 90일보다 오래된 파일을 전송하세요. 전송이 완료되면 파일은 Google Drive에서 제거되어 활성 스토리지의 공간을 확보하는 동시에 아카이브에 보존됩니다.

## 사용 사례 3: 시간 범위 동기화

두 플래그를 함께 사용하여 특정 시간 범위를 대상으로 지정할 수 있습니다. 예를 들어 7일에서 30일 전 사이에 수정된 파일을 동기화하려면:

```
--min-age 7d --max-age 30d
```

이는 단계별 아카이빙 워크플로우에 유용합니다. 7일 미만의 파일은 활성 스토리지에 남아 있고, 7~30일 사이의 파일은 웜 스토리지로 이동하며, 30일보다 오래된 파일은 콜드 스토리지로 이동합니다.

## 사용 사례 4: 최근 수정된 파일 건너뛰기

마이그레이션 중에는 미완성 작업이 전송되는 것을 방지하기 위해 현재 편집 중인 파일을 건너뛰고 싶을 수 있습니다.

```
--min-age 1h
```

이렇게 하면 최소 1시간 동안 변경되지 않고 안정된 파일만 전송됩니다. 현재 편집 중이거나 저장 중인 파일은 다음 동기화 실행 시로 넘어갑니다.

## 사용 사례 5: 최근 작업의 야간 백업

그날의 작업만 캡처하는 야간 백업 작업의 경우:

```
--max-age 25h
```

24시간 대신 25시간을 사용하면 전날 백업과 1시간의 겹치는 구간이 생겨, 백업 일정과 파일 수정 시간 사이의 타이밍 차이로 인해 파일이 누락되지 않도록 보장합니다.

## RcloneView에서 시간 필터 적용하기

RcloneView 작업 설정에서:

1. 동기화 또는 복사 작업 설정을 엽니다.
2. 고급 옵션 또는 커스텀 플래그 섹션으로 이동합니다.
3. 플래그 필드에 `--max-age 24h` 또는 `--min-age 7d` (또는 둘 다)를 추가합니다.
4. 작업을 저장하고 실행합니다.

플래그는 작업 중 모든 파일 비교에 적용됩니다. 시간 기준을 충족하지 않는 파일은 완전히 건너뛰어지며, 목록에 나열되거나 비교되거나 전송되지 않습니다. 이는 대용량 원격 스토리지의 작업 시간을 크게 단축할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a time-filtered sync job in RcloneView" class="img-large img-center" />

## 다른 필터와 결합하기

시간 기반 필터는 다른 rclone 필터 옵션과 함께 사용할 수 있습니다.

- **include/exclude와 함께**: `--max-age 24h --include "*.pdf"`는 지난 24시간 이내에 수정된 PDF 파일만 동기화합니다.
- **크기 필터와 함께**: `--max-age 7d --min-size 1M`는 지난 주에 수정된 1MB보다 큰 파일만 동기화합니다.
- **디렉터리 필터와 함께**: `--max-age 24h --include "/projects/**"`는 범위를 특정 디렉터리로 제한합니다.

이러한 조합 가능성 덕분에 복잡한 스크립트 없이도 정밀한 전송 규칙을 만들 수 있습니다.

## 먼저 드라이 런 실행하기

프로덕션 데이터에서 시간 필터가 적용된 작업을 실행하기 전에, RcloneView의 드라이 런 모드를 사용하여 영향을 받을 파일을 미리 확인하세요. 드라이 런은 실제로 전송하지 않고 필터 기준에 일치하는 파일 목록을 표시합니다. 이를 통해 작업을 실행하기 전에 `--min-age` 및 `--max-age` 값이 올바른 파일을 선택하는지 확인할 수 있습니다.

## 흔히 발생하는 문제

- **시간대**: 수정 시간은 UTC 기준으로 비교됩니다. 로컬 시간대가 UTC와 크게 차이가 나는 경우 기간 값을 그에 맞게 조정하거나 절대 날짜 형식을 사용하세요.
- **제공업체 정확도**: 일부 클라우드 제공업체(특히 Google Drive)는 제한된 정밀도로 수정 시간을 보고합니다. Google Drive에서 "오늘" 수정된 파일의 타임스탬프가 실제 수정 시간과 몇 초 차이가 날 수 있습니다.
- **min-age와 함께 사용하는 Sync와 Copy**: `--min-age`를 동기화와 함께 사용하는 것은 위험할 수 있습니다. 동기화는 원본에 존재하지 않는 대상 파일을 삭제합니다. `--min-age`가 원본 목록에서 최근 파일을 필터링하면, 동기화가 대상에서 해당 파일을 삭제할 수 있습니다. 의도치 않은 삭제를 방지하려면 `--min-age`를 사용할 때는 동기화가 아닌 복사를 사용하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 작업 관리자에서 동기화 또는 복사 작업을 생성합니다.
3. 커스텀 플래그 섹션에 `--max-age` 또는 `--min-age` 플래그를 추가합니다.
4. 드라이 런으로 테스트하여 파일 선택을 확인합니다.
5. 자동화된 시간 기반 백업을 위해 작업을 예약합니다.

시간 기반 필터는 RcloneView를 증분 백업, 단계별 아카이빙, 타겟 동기화 작업을 위한 정밀한 도구로 만들어줍니다. 이를 활용해 전송 시간을 줄이고, 대역폭 사용을 최소화하며, 정교한 데이터 라이프사이클 워크플로우를 구현하세요.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [작업 스케줄링](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

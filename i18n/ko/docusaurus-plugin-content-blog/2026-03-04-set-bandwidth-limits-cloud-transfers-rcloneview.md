---
slug: set-bandwidth-limits-cloud-transfers-rcloneview
title: "RcloneView에서 클라우드 전송 대역폭 제한을 설정하는 방법"
authors:
  - tayson
description: "클라우드 동기화 및 백업 작업이 사용하는 대역폭을 제어하세요 — 업무 시간의 네트워크 저하를 막고, RcloneView의 속도 제한 설정으로 야간에는 속도를 최대화할 수 있습니다."
keywords:
  - rclone bandwidth limit
  - cloud transfer speed limit
  - throttle cloud sync
  - rcloneview bandwidth control
  - limit upload speed rclone
  - cloud backup bandwidth
  - rclone bwlimit
  - network throttle cloud sync
  - control cloud transfer speed
  - rcloneview transfer settings
tags:
  - performance
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView에서 클라우드 전송 대역폭 제한을 설정하는 방법

> 업무 시간에 대용량 클라우드 동기화를 실행하고 계신가요? 팀원들이 바로 알아챌 겁니다. 모두의 인터넷을 마비시키지 않으면서 백업을 실행하도록 대역폭을 제한하는 방법을 알려드립니다.

클라우드 동기화 및 백업 작업은 네트워크 연결을 포화시켜 화상 회의, 웹 브라우징, 기타 중요한 업무 속도를 떨어뜨릴 수 있습니다. 이는 사무실 환경, 연결을 공유하는 홈오피스, 또는 테라바이트 단위의 데이터를 동기화할 때 특히 문제가 됩니다. RcloneView를 사용하면 정확한 대역폭 제한을 설정하여 네트워크를 방해하지 않으면서 클라우드 전송을 백그라운드에서 실행할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 대역폭 제한이 중요한 이유

### 공유 네트워크

100 Mbps 연결을 사용하는 사무실에서, 제한 없는 클라우드 동기화 작업 하나가 80 Mbps 이상을 소비하여 나머지 팀원에게는 거의 아무것도 남지 않을 수 있습니다.

### 홈오피스

화상 회의에는 약 5~10 Mbps가 필요합니다. 백업 작업이 사용 가능한 대역폭을 모두 차지하면 Zoom 통화 화질이 형편없어집니다.

### ISP 공정 이용 정책

일부 ISP는 지속적인 고대역폭 사용에 대해 속도를 제한하거나 추가 요금을 부과합니다. 클라우드 전송을 제한하면 예상치 못한 요금이나 속도 저하를 방지할 수 있습니다.

### 클라우드 제공업체의 속도 제한

일부 제공업체(특히 Google Drive)는 전송 속도가 너무 빠르면 속도를 제한하거나 오류를 반환합니다. 대역폭을 제한하면 안전한 범위 내에서 유지할 수 있습니다.

## 대역폭 제한 설정 방법

### 방법 1: 작업별 대역폭 제한

RcloneView에서 작업을 생성하거나 편집할 때 rclone 옵션에 대역폭 제한 플래그를 추가합니다.

- **`--bwlimit 10M`** — 10 MB/s(초당 메가바이트)로 제한
- **`--bwlimit 50M`** — 50 MB/s로 제한
- **`--bwlimit 1M`** — 1 MB/s로 제한(백그라운드 소량 동기화에 적합)

### 방법 2: 시간대별 대역폭 스케줄링

rclone은 시간대별 대역폭 제한을 지원합니다 — 하루 중 시간대에 따라 다른 속도를 사용할 수 있습니다.

```
--bwlimit "08:00,5M 18:00,50M 23:00,off"
```

이는 다음을 의미합니다.
- **오전 8시 – 오후 6시**: 5 MB/s로 제한(업무 시간, 영향 최소화)
- **오후 6시 – 오후 11시**: 50 MB/s로 제한(저녁, 여유 대역폭 증가)
- **오후 11시 – 오전 8시**: 무제한(야간, 최대 속도)

대부분의 사용자에게 이것이 최적의 지점입니다 — 전송은 24시간 실행되지만 네트워크가 유휴 상태일 때만 전속력으로 진행됩니다.

### 방법 3: 업로드와 다운로드 제한 분리

업로드와 다운로드에 서로 다른 제한을 설정합니다.

```
--bwlimit "10M:5M"
```

이는 업로드를 10 MB/s, 다운로드를 5 MB/s로 제한합니다. ISP가 비대칭 속도를 제공하는 경우(케이블 및 DSL 연결에서 흔함) 유용합니다.

## 실전 예시

### 100 Mbps 연결을 사용하는 홈오피스

```
--bwlimit "09:00,2M 17:00,off"
```
- 업무 시간 중: 2 MB/s(화상 회의와 함께 사용해도 거의 눈에 띄지 않음)
- 업무 시간 이후: 무제한

### 50 Mbps 공유 연결을 사용하는 소규모 사무실

```
--bwlimit "08:00,3M 18:00,25M 22:00,off"
```
- 업무 시간: 3 MB/s(직원들을 위해 47 Mbps 확보)
- 저녁: 25 MB/s(절반 용량)
- 야간: 최대 속도

### 주말 동안의 대규모 마이그레이션

```
--bwlimit off
```
- 제한 없음 — 유지보수 시간대 동안 전송 속도를 최대화합니다.

## 작업 스케줄링과 결합하기

가장 강력한 방식은 **야간에는 대역폭 제한 없이 무거운 작업을 실행**하고 **낮 동안에는 엄격한 제한으로 가벼운 작업을 실행**하는 것입니다.

1. 동기화 작업의 두 가지 버전을 생성합니다.
   - **주간 작업**: `--bwlimit 5M` — 정오에 실행되는 빠른 증분 동기화
   - **야간 작업**: 대역폭 제한 없음 — 새벽 2시에 실행되는 대용량 전송
2. [작업 스케줄링](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)으로 두 작업을 모두 예약합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers with different bandwidth limits" class="img-large img-center" />

## 실제 속도 모니터링하기

실시간 전송 모니터링을 사용하여 대역폭 제한이 제대로 작동하는지 확인하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed with bandwidth limits" class="img-large img-center" />

전송 속도 표시는 설정한 제한값 이하로 나타나야 합니다. 설정한 제한보다 더 낮은 속도가 나타난다면 병목은 다른 곳(네트워크, 제공업체 API, 디스크 속도)에 있는 것입니다.

## 빠른 참조

| 시나리오 | 설정 | 효과 |
|----------|---------|--------|
| 가벼운 백그라운드 동기화 | `--bwlimit 2M` | 거의 눈에 띄지 않음 |
| 중간 수준 전송 | `--bwlimit 10M` | 눈에 띄지만 관리 가능 |
| 업무 시간에만 적용 | `--bwlimit "09:00,5M 17:00,off"` | 업무 시간 중 제한됨 |
| 업로드 위주 | `--bwlimit "20M:5M"` | 업로드 20M, 다운로드 5M |
| 제한 없음 | `--bwlimit off` 또는 생략 | 최대 속도 |

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **리모트를 추가**하고 동기화/복사 작업을 생성하세요.
3. 작업의 rclone 플래그에 **`--bwlimit`을 추가**하세요.
4. **테스트하고 모니터링**하여 적절한 균형을 찾으세요.
5. 최상의 결과를 위해 **스케줄링과 결합**하세요.

빠른 전송은 좋습니다. 하지만 팀의 화상 회의를 망치지 않는 전송이 더 좋습니다.

---

**관련 가이드:**

- [대용량 클라우드 전송 가속화하기](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 스케줄링](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [실시간 전송 모니터링](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Google Drive 속도 제한 오류 해결하기](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)

<CloudSupportGrid />

---
slug: rclone-about-storage-usage-analysis-rcloneview
title: "RcloneView로 클라우드 스토리지 사용량과 할당량 분석하기"
authors:
  - tayson
description: "RcloneView의 대시보드와 rclone about 명령을 사용하여 클라우드 스토리지 사용량을 모니터링하고, 할당량을 확인하고, 용량이 큰 폴더를 찾아내고, 여러 제공업체에 걸쳐 용량을 계획하세요."
keywords:
  - rclone about storage usage
  - cloud storage quota monitor
  - rcloneview storage analysis
  - check cloud storage space
  - cloud capacity planning
  - storage usage per remote
  - rclone disk usage
  - cloud quota monitoring tool
  - compare cloud storage usage
  - rcloneview dashboard storage
tags:
  - RcloneView
  - feature
  - cloud-storage
  - guide
  - tips
  - cost-optimization
  - dashboard
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 클라우드 스토리지 사용량과 할당량 분석하기

> 클라우드 비용을 최적화하려면 먼저 스토리지가 정확히 어디에 사용되고 있는지 파악해야 합니다. RcloneView는 연결된 모든 리모트의 사용량 데이터와 할당량 정보를 한곳에 모아 보여줍니다.

대부분의 클라우드 스토리지 비용은 용량에 의해 결정됩니다. S3에서 기가바이트 단위로 요금을 지불하든, Google Drive에서 무료 티어 안에 머무르든, OneDrive에서 팀 할당량을 공유하든, 각 리모트가 얼마나 많은 공간을 사용하는지 아는 것은 비용 관리와 용량 계획에 필수적입니다. Rclone의 `about` 명령은 제공업체의 API에 전체, 사용됨, 여유, 휴지통 공간을 조회합니다. RcloneView는 이 정보를 시각적으로 보여주므로, 여러 제공업체의 대시보드를 오갈 필요 없이 모든 리모트를 모니터링할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone About가 보고하는 정보

`rclone about` 명령은 제공업체의 API로부터 직접 스토리지 지표를 반환합니다. 일반적인 응답에는 다음이 포함됩니다.

| 지표 | 설명 |
|--------|-------------|
| **전체(Total)** | 계정에 할당된 전체 스토리지 할당량 |
| **사용됨(Used)** | 현재 파일이 차지하고 있는 공간 |
| **여유(Free)** | 남아 있는 사용 가능 공간 |
| **휴지통(Trashed)** | 휴지통/재활용함에 있는 항목이 차지하는 공간 |
| **기타(Other)** | 다른 서비스가 차지하는 공간(예: Google 계정의 Gmail) |

모든 제공업체가 모든 필드를 보고하는 것은 아닙니다. 예를 들어 S3 호환 서비스는 버킷에 고정 할당량이 없기 때문에 대개 사용된 공간만 보고합니다. Google Drive는 다섯 가지 필드를 모두 보고하므로 가장 많은 정보를 제공하는 서비스 중 하나입니다.

## RcloneView에서 스토리지 사용량 보기

RcloneView는 연결된 리모트에 대한 시각적 개요를 제공합니다.

1. **RcloneView**를 열고 **대시보드** 또는 **리모트 탐색기**로 이동합니다.
2. 확인하려는 리모트를 선택합니다.
3. 사용됨, 여유, 전체 공간을 보여주는 스토리지 요약을 확인합니다.

모든 리모트를 한눈에 빠르게 확인하고 싶다면, 대시보드에서 연결된 모든 제공업체의 사용량을 한눈에 볼 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote list showing connected cloud providers" class="img-large img-center" />

## 터미널에서 Rclone About 실행하기

원시 수치를 확인하거나 스크립팅이 필요하다면, RcloneView에서 **터미널**을 열고 다음을 실행하세요.

```bash
rclone about gdrive:
```

출력 예시:

```
Total:   15 GiB
Used:    9.2 GiB
Free:    5.8 GiB
Trashed: 1.4 GiB
Other:   3.1 GiB
```

여러 리모트를 빠르게 확인하려면:

```bash
rclone about gdrive:
rclone about onedrive:
rclone about s3-backup:
```

스크립트로 파싱할 수 있는 기계 판독 가능한 출력을 원한다면 `--json`을 사용하세요.

```bash
rclone about gdrive: --json
```

## 용량이 큰 폴더 찾기

전체 사용량을 아는 것은 시작에 불과합니다. 어떤 폴더가 가장 많은 공간을 차지하는지 정확히 파악하려면 `rclone size` 명령이 필요합니다.

```bash
rclone size gdrive:/Photos
```

이 명령은 지정한 경로에 있는 모든 파일의 전체 개수와 크기를 반환합니다. 가장 큰 폴더를 찾으려면 최상위 디렉터리들에 대해 실행하고 비교하세요.

RcloneView의 **탐색기**에서는 어떤 리모트든 탐색하면서 폴더 크기를 바로 확인할 수 있어, 명령을 실행하지 않고도 공간을 많이 차지하는 항목을 쉽게 찾을 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer browsing cloud folders with size information" class="img-large img-center" />

## 여러 제공업체에 걸친 할당량 모니터링

제공업체마다 할당량을 다르게 처리합니다.

| 제공업체 | 할당량 모델 | 참고 사항 |
|----------|------------|-------|
| **Google Drive** | Drive, Gmail, Photos 간 공유 | 무료 15GB; Workspace 요금제는 다양함 |
| **OneDrive** | 사용자별 할당 | 무료 5GB; Microsoft 365 요금제는 1TB 이상 제공 |
| **Dropbox** | 계정별 할당량 | 무료 2GB; Plus는 2TB 제공 |
| **Backblaze B2** | 사용량 기반 과금, 고정 할당량 없음 | 저장된 GB당 월별 청구 |
| **Amazon S3** | 사용량 기반 과금, 고정 할당량 없음 | 스토리지 클래스별 계층 요금제 |
| **pCloud** | 평생 또는 구독 할당량 | 무료 10GB; 평생 요금제 이용 가능 |

S3, B2와 같은 사용량 기반 제공업체는 도달할 할당량이 없지만, 사용량을 직접 모니터링하는 것이 청구 금액을 통제하는 방법입니다. 할당량 기반 제공업체의 경우, 공간이 부족해지면 조용히 동기화와 백업이 실패합니다.

## 용량 계획 및 비용 추정

스토리지 사용량 데이터를 활용해 미리 계획을 세우세요.

1. **시간에 따른 증가 추적** -- `rclone about`을 주기적으로 실행하고 결과를 기록하세요. 리모트별 월간 사용량을 추적하는 간단한 스프레드시트만으로도 추세를 파악할 수 있습니다.
2. **사용량 기반 제공업체의 월별 비용 추정**:
   - Backblaze B2: 저장 용량 $0.006/GB/월
   - Amazon S3 Standard: $0.023/GB/월
   - Wasabi: $0.0069/GB/월 (최소 1TB)
3. **알림 설정** -- 할당량 기반 리모트의 사용률이 80%를 넘으면 정리 작업이나 업그레이드를 계획하세요.
4. **제공업체 비교** -- 한 리모트가 GB당 비용이 더 저렴하다면, 콜드 데이터를 그곳으로 이전하는 것을 고려하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare storage consumption across cloud providers" class="img-large img-center" />

## 휴지통에서 공간 회수하기

가장 간과되기 쉬운 스토리지 소비 요인 중 하나가 바로 휴지통입니다. Google Drive와 OneDrive는 모두 휴지통에 있는 파일을 할당량에 포함해 계산합니다. `rclone about` 출력은 휴지통 공간을 명시적으로 보여주며, 다음 명령으로 회수할 수 있습니다.

```bash
rclone cleanup gdrive:
```

RcloneView에서는 명령을 입력하지 않고도 UI를 통해 이 작업을 수행할 수 있습니다. 휴지통 공간을 회수하는 것은 활성 파일을 하나도 삭제하지 않고도 기가바이트 단위의 공간을 확보하는 가장 빠른 방법인 경우가 많습니다.

## 제공업체 간 사용량 비교하기

여러 클라우드 계정을 관리할 때, 제공업체 간 비교는 다음과 같은 결정에 도움이 됩니다.

- **새 백업을 어디에 저장할지** -- 여유 공간이 가장 많은 리모트로 데이터를 보내세요.
- **어떤 제공업체를 확장할지** -- S3 비용이 B2보다 빠르게 증가하고 있다면 그 원인을 조사하세요.
- **언제 아카이브할지** -- 자주 접근하지 않는 데이터를 비싼 스토리지에서 더 저렴한 계층으로 이동하세요.

RcloneView의 다중 리모트 대시보드는 이러한 비교를 즉시 가능하게 합니다. 세 개의 서로 다른 제공업체 대시보드에 각각 로그인하는 대신, 하나의 인터페이스에서 모든 사용량 데이터를 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView dashboard showing multiple remote storage status" class="img-large img-center" />

## 모범 사례

- **대용량 전송을 시작하기 전에 할당량을 확인하세요** -- 대상 공간이 가득 차 있으면 조용히 실패가 발생합니다.
- **휴지통 사용량을 모니터링**하고 정기적으로 정리하여 유령 할당량 소비를 방지하세요.
- **월별로 사용량을 기록**하여 비용 추적 및 추세 분석에 활용하세요.
- 특정 폴더에서 공간을 가장 많이 차지하는 항목을 찾으려면 **`rclone size`를 사용**하세요.
- RcloneView에서 `rclone about` 명령을 예약 작업으로 저장하여 **점검을 자동화**하세요.

---

**관련 가이드:**

- [클라우드 스토리지 정리: 휴지통 비우기와 이전 버전 삭제하기](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2 비교](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [비즈니스용 Google Drive vs OneDrive](https://rcloneview.com/support/blog/google-drive-vs-onedrive-for-business-rcloneview)

<CloudSupportGrid />

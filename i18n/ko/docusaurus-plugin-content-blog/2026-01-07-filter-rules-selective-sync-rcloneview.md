---
slug: filter-rules-selective-sync-rcloneview
title: "RcloneView 필터 규칙: 폴더와 파일 유형을 제외해 더 빠르고 깔끔한 동기화 만들기"
authors:
  - tayson
description: "RcloneView 필터 규칙으로 선택적 동기화 워크플로우를 구성해 불필요한 파일을 건너뛰고, 클라우드 트래픽을 줄이고, 백업을 깔끔하게 유지하세요. GUI 중심이라 CLI 플래그가 필요 없습니다."
keywords:
  - rclone filter rules
  - rclone exclude
  - rclone include
  - rcloneview filters
  - selective sync
  - cloud sync optimization
  - reduce sync time
  - file sync filters
  - rcloneview workflow
  - cloud backup efficiency
tags:
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# RcloneView 필터 규칙: 폴더와 파일 유형을 제외해 더 빠르고 깔끔한 동기화 만들기

> 가장 빠른 동기화는 불필요한 노이즈를 무시하는 동기화입니다. RcloneView 필터 규칙을 사용하면 캐시 폴더, 임시 파일, 빌드 산출물을 건너뛰어 모든 전송을 의도적으로 만들 수 있습니다.

선택적 동기화는 시간, 대역폭, 클라우드 비용을 직접적으로 절약해 주기 때문에 가장 많이 검색되는 rclone 주제 중 하나입니다. 대부분의 가이드는 CLI 플래그만 나열하고 끝납니다. 이 글에서는 결과를 예측 가능하게 유지하는 시각적 UI를 통해 RcloneView에서 **필터 우선 워크플로우**를 구성하는 방법을 보여드립니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 필터 규칙이 그 어느 때보다 중요한 이유

클라우드 동기화 비용과 지연은 애초에 필요하지 않은 파일을 스캔하고 전송하는 데서 발생합니다.

- 캐시 폴더 (`.cache`, `node_modules`, `.gradle`)
- 임시 또는 미리보기 파일 (`*.tmp`, `*_preview.*`)
- 자동 생성된 빌드 산출물
- 변경되지 않은 파일에 대한 반복적인 메타데이터 확인

필터는 노이즈를 줄여 모든 동기화(Sync) 또는 복사(Copy) 작업을 더 작고, 더 빠르고, 더 안전하게 만듭니다.

## RcloneView에서 필터 규칙이 하는 일

필터는 **전송이 시작되기 전에 무엇을 포함하고 제외할지**를 정의합니다. RcloneView에서는 Sync/Job UI를 통해 이를 적용하므로 CLI 문법을 외울 필요가 없습니다.

필터 규칙을 다음과 같은 용도로 사용하세요.

- 폴더 전체 제외
- 특정 프로젝트 경로만 포함
- 백업하고 싶지 않은 파일 유형 건너뛰기
- 민감하거나 무관한 데이터 보호

## GUI에서 필터를 설정하는 위치

Sync를 실행하거나 Job을 생성할 때 필터를 추가할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

몇 초 만에 사용자 지정 규칙을 추가할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="Add custom filter rule" class="img-large img-center" />

필요에 따라 규칙을 수정하고 다듬으세요.

<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="Adjust custom filter rule" class="img-large img-center" />

## 실전 필터 규칙 (바로 사용 가능한 예시)

### 흔한 노이즈 제외하기

- `**/node_modules/**`
- `**/.cache/**`
- `**/*.tmp`
- `**/*.log`

### 작업 폴더만 동기화하기

- 포함: `**/Projects/**`
- 제외: `**/Downloads/**`

### 미디어 프로젝트 규칙

- 포함: `**/*.mp4`, `**/*.mov`, `**/*.wav`
- 제외: `**/*_proxy.*`, `**/*_preview.*`

### 디자인/창작 워크플로우

- 포함: `**/*.psd`, `**/*.ai`, `**/*.blend`
- 제외: `**/renders/**`, `**/cache/**`

## 먼저 비교(Compare)하고, 필터링한 다음, 동기화하세요

필터는 시각적으로 검증했을 때 가장 안전합니다.

1. **Compare**를 실행해 무엇이 변경될지 확인합니다.
2. 중요한 항목이 사라진다면 필터를 조정합니다.
3. 확신을 가지고 동기화합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

가이드: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)

## 필터 우선 워크플로우 (설계부터 안전하게)

### 1단계: 원본과 대상 확인

Configure Storage 단계를 사용해 필터링 전에 경로를 검증하세요.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="Sync advanced settings" class="img-large img-center" />
</div>

### 2단계: 필터 적용

워크플로우에 맞게 제외 및 포함 규칙을 추가하세요.

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

### 3단계: 검증을 위한 Dry Run

데이터를 이동하기 전에 필터링된 결과 집합을 확인할 수 있도록 Dry Run을 실행하세요.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="Sync dry run details" class="img-large img-center" />
</div>

## 필터링된 워크플로우를 Job으로 저장하기

필터가 올바르게 설정되면 Sync를 Job으로 저장하세요.

- 매번 실행할 때마다 일관된 동작
- 사람의 실수 감소
- 자동화된 백업을 위한 손쉬운 스케줄링

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

가이드: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)

## 필터링된 동기화 예약하기

Job Scheduling을 사용해 선택적 백업을 자동화하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />

가이드: [/support/howto/rcloneview-advanced/job-scheduling-and-execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## 필터 규칙으로 얻는 실질적인 이점

- **더 빠른 동기화**: 스캔 및 전송되는 파일 수 감소
- **더 낮은 비용**: API 트래픽과 반복 업로드 감소
- **더 깔끔한 백업**: 의미 있는 파일만 보존
- **더 안정적인 운영**: 작업 로그가 작아지고 문제 해결이 쉬워짐

## 피해야 할 흔한 실수

- 중요한 폴더를 과도하게 필터링하는 것 (먼저 Compare로 테스트하세요)
- 명확한 순서 없이 포함/제외 규칙을 뒤섞는 것
- 대규모 마이그레이션에서 Dry Run을 건너뛰는 것
- 필터가 기존 데이터에 소급 적용된다고 가정하는 것

## 모범 사례 요약

- 모든 Sync 또는 Copy 작업에 필터를 포함시키세요.  
- Compare를 사용해 필터가 무엇을 제거할지 검증하세요.  
- 전체 데이터셋에 필터를 적용하기 전에 작은 테스트 폴더로 먼저 시작하세요.  
- 반복 가능성과 감사 가능성을 위해 필터링된 작업을 저장하세요.  

## 결론

선택적 동기화는 클라우드 작업을 더 빠르고 저렴하게 만드는 가장 빠른 방법입니다. RcloneView는 복잡한 rclone 필터 규칙을 이해하고, 테스트하고, 자동화할 수 있는 시각적 워크플로우로 바꿔줍니다. 노이즈가 많은 폴더 하나를 제외하는 것부터 시작해 보세요. 바로 다음 실행에서 동기화 시간이 줄어드는 것을 확인할 수 있습니다.


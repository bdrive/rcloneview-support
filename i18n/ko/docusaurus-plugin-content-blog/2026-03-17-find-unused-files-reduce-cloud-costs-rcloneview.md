---
slug: find-unused-files-reduce-cloud-costs-rcloneview
title: "클라우드 스토리지를 낭비하는 미사용 파일 찾기 — RcloneView의 스토리지 감사로 비용 절감하기"
authors:
  - tayson
description: "아무도 오래된 파일을 삭제하지 않기 때문에 클라우드 요금은 계속 늘어납니다. RcloneView를 사용해 모든 클라우드 계정에서 잊혀진 데이터, 오래된 백업, 불필요한 중복 파일을 찾는 방법을 알아보세요."
keywords:
  - 클라우드 스토리지 비용 절감
  - 미사용 클라우드 파일 찾기
  - 클라우드 스토리지 정리
  - 클라우드 비용 최적화
  - 클라우드 스토리지 낭비
  - 클라우드 요금 절감
  - 클라우드 파일 감사
  - 스토리지 비용 절감
  - 클라우드 정리 도구
  - 불필요한 클라우드 파일
tags:
  - RcloneView
  - cost-optimization
  - tips
  - cloud-storage
  - organization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 클라우드 스토리지를 낭비하는 미사용 파일 찾기 — RcloneView의 스토리지 감사로 비용 절감하기

> 세 개의 클라우드 제공업체에 걸쳐 5TB에 대한 비용을 지불하고 있다면, 그중 실제로 필요한 용량은 얼마나 될까요? 대부분의 사용자에게 클라우드 스토리지의 30~50%는 다시는 접근하지 않을 파일이 차지하고 있습니다.

클라우드 스토리지 요금은 서서히 늘어납니다. 여기서 몇 기가바이트, 저기서 잊혀진 백업 하나, 그러다 보면 어느새 아무도 쓰지 않는 데이터에 매년 수백 달러를 지출하게 됩니다. 문제는 기가바이트당 가격이 아니라, 눈에 보이지 않게 쌓이는 데이터입니다. RcloneView는 각 계정에 무엇이 들어 있는지 정확히 보여주어 무엇을 남기고 무엇을 지울지 현명하게 결정할 수 있도록 도와줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 흔한 낭비의 원인

### 오래된 백업 사본

백업 작업은 사본을 만듭니다. 몇 년에 걸쳐 백업 대상을 바꿔왔다면, 이전 제공업체에 남은 오래된 사본이 유료 스토리지를 계속 차지하고 있을 수 있습니다.

### 여러 제공업체에 걸친 중복 파일

"혹시 몰라서" 모든 곳에 동기화해 두었기 때문에, 같은 파일이 Google Drive, OneDrive, Dropbox에 동시에 저장되어 있는 경우입니다.

### 오래된 프로젝트 파일

2년 전 프로젝트가 여전히 S3 Standard(TB당 $23)에 남아 있지만, Glacier(TB당 $1)로 옮길 수 있는 경우입니다.

### 테스트 및 임시 데이터

테스트 업로드, 테스트 폴더, 캐시 데이터, `.DS_Store` 파일, `Thumbs.db` 등이 수천 개의 폴더에 걸쳐 쌓입니다.

## 낭비를 찾는 방법

### 각 계정 살펴보기

모든 클라우드 계정을 연결하고 체계적으로 살펴보세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse cloud accounts" class="img-large img-center" />

### 계정 간 중복 비교하기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicates across clouds" class="img-large img-center" />

두 제공업체 간 폴더 비교(Folder Comparison)를 사용하면 동일한 파일을 강조해서 보여주므로, 이중으로 비용을 지불하고 있는 잠재적 중복 파일을 찾을 수 있습니다.

### 백업 최신 여부 확인하기

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check backup recency" class="img-large img-center" />

작업 기록(Job history)을 보면 백업이 마지막으로 실행된 시점을 알 수 있습니다. 6개월 동안 백업이 실행되지 않았다면, 아직도 필요한 백업일까요?

## 실행 계획

| 발견 사항 | 조치 | 절감액 |
|---------|--------|---------|
| 비싼 스토리지에 남은 오래된 백업 | 삭제 또는 Glacier로 이동 | $5-20/TB/월 |
| 여러 제공업체에 걸친 중복 파일 | 한 개만 남기고 나머지 삭제 | $5-10/TB/월 |
| 핫 스토리지에 남은 오래된 프로젝트 | 콜드 스토리지로 아카이브 | $15-20/TB/월 |
| 임시 파일 및 불필요한 데이터 | 삭제 | 가변적 |
| 사용하지 않는 제공업체 계정 | 해지 | 구독 비용 |

## 삭제 전에 먼저 아카이브하세요

무작정 삭제하지 마세요. 먼저 오래된 파일을 콜드 스토리지로 옮기세요. "혹시 몰라서" 보관해 두기에 충분히 저렴하면서도 핫 스토리지보다 90% 저렴합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **모든 클라우드 계정을 연결**하세요.
3. **체계적으로 살펴보고 비교**하세요.
4. **미사용 데이터를 콜드 스토리지로 아카이브**하세요.
5. 아카이브 후 **진짜 낭비되는 데이터를 삭제**하세요.

가장 저렴한 스토리지는 필요 없는 스토리지입니다.

---

**관련 가이드:**

- [클라우드 스토리지 감사 가이드](https://rcloneview.com/support/blog/cloud-storage-permissions-audit-rcloneview)
- [숨겨진 클라우드 스토리지 비용](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Google Drive에서 S3 Glacier로 아카이브하기](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)

<CloudSupportGrid />

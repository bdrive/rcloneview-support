---
slug: archive-google-drive-to-s3-glacier-rcloneview
title: "Google Drive 파일을 S3 Glacier로 아카이브 — RcloneView로 90% 저렴한 장기 보관"
authors:
  - tayson
description: "아카이브 데이터에 Google Drive 스토리지는 비용이 많이 듭니다. 오래된 파일을 S3 Glacier로 옮기면 복구 가능성을 유지하면서도 GB당 몇 센트로 보관할 수 있습니다. RcloneView가 전체 과정을 자동화합니다."
keywords:
  - google drive to glacier
  - google drive archive
  - s3 glacier archive
  - cheap cloud archive
  - google drive cold storage
  - archive old cloud files
  - google drive to s3
  - reduce google drive cost
  - long term cloud storage
  - cloud archive strategy
tags:
  - RcloneView
  - google-drive
  - s3
  - glacier
  - archive
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive 파일을 S3 Glacier로 아카이브 — RcloneView로 90% 저렴한 장기 보관

> Google Drive 2TB에 매달 10달러를 지불하고 있지만, 그중 80%의 파일은 1년 넘게 열어본 적이 없습니다. 이런 파일을 S3 Glacier로 옮기면 TB당 월 1달러로 스토리지 비용을 크게 줄일 수 있습니다.

Google Drive 요금제는 매일 열어보는 문서, 동료와 공유하는 파일 같은 활성 파일에 맞춰 설계되어 있습니다. 하지만 대부분의 Google Drive 계정에는 오래된 프로젝트 폴더, 완료된 작업, 보관용 사진, 더 이상 쓰지 않는 문서 등 몇 년간 접근하지 않은 파일이 쌓여 있습니다. 이런 파일들은 훨씬 저렴하게 보관할 수 있음에도 비싼 스토리지에 그대로 놓여 있는 셈입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 비용 비교

| 스토리지 | TB당 월 요금 |
|---------|-------------------|
| Google Drive (One) | ~$5 |
| Google Workspace Business | ~$6 |
| S3 Standard | ~$23 |
| S3 Glacier Instant Retrieval | ~$4 |
| S3 Glacier Flexible Retrieval | ~$3.6 |
| S3 Glacier Deep Archive | ~$1 |

비활성 파일 1TB를 Google Drive에서 Glacier Deep Archive로 옮기면 연간 약 48달러를 절약할 수 있습니다.

## 무엇을 아카이브해야 할까

Glacier로 옮기기 좋은 후보:

- 완료된 프로젝트 폴더(6개월 이상 지난 것)
- 세금 문서 및 재무 기록(신고 완료 후)
- 오래된 사진/동영상 백업
- 퇴사한 직원의 데이터
- 보관 중인 팀 파일

옮기지 말아야 할 것(Google Drive에 유지):

- 활성 문서 및 스프레드시트
- 공동 작업 중인 공유 파일
- 매주 또는 매달 열어보는 파일

## 아카이브 과정

### 1) 아카이브 후보 파악

탐색기에서 Google Drive를 살펴보고 최근에 접근하지 않은 폴더를 찾습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive for archive candidates" class="img-large img-center" />

### 2) S3 Glacier로 전송

Glacier 스토리지 클래스로 구성된 S3 버킷으로 Google Drive에서 복사 작업을 생성합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Transfer to Glacier" class="img-large img-center" />

### 3) 아카이브 확인

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify archive completeness" class="img-large img-center" />

### 4) Google Drive에서 삭제

확인이 끝난 후에만 삭제합니다. 이렇게 하면 Google Drive 저장 용량을 확보할 수 있습니다.

### 5) 정기 아카이브 예약

새로운 후보 파일을 위해 매달 아카이브 작업을 예약합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule monthly archival" class="img-large img-center" />

## 주의 사항

- **Glacier 검색에는 비용과 시간이 듭니다** — Glacier Instant Retrieval은 빠르게 접근할 수 있지만, Deep Archive는 12시간 이상 걸릴 수 있습니다
- **최소 보관 기간** — Glacier는 조기 삭제 시 요금을 부과합니다(클래스에 따라 90~180일)
- **삭제 전 확인** — Drive에서 파일을 제거하기 전에 항상 아카이브가 완전한지 확인하세요

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Google Drive**와 **S3** 리모트를 추가합니다.
3. Google Drive에서 **비활성 파일을 파악**합니다.
4. **Glacier로 복사**한 뒤 확인하고, Drive를 정리합니다.

활성 파일은 Drive에, 나머지는 모두 Glacier에.

---

**관련 가이드:**

- [숨겨진 클라우드 스토리지 비용](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Glacier를 활용한 콜드 아카이브](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />

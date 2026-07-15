---
slug: make-s3-files-accessible-google-drive-rcloneview
title: "AWS S3 파일을 Google Drive에서 접근 가능하게 만드는 방법 — 팀 협업을 위한 S3 버킷 동기화"
authors:
  - tayson
description: "AWS S3는 저장 공간으로는 훌륭하지만 비개발자 팀이 접근하기는 어렵습니다. RcloneView를 사용해 S3 버킷 콘텐츠를 Google Drive와 동기화하여 손쉽게 공유하는 방법을 알아보세요."
keywords:
  - s3 to google drive sync
  - aws s3 google drive
  - share s3 files team
  - s3 bucket google drive
  - make s3 accessible
  - s3 collaboration tool
  - sync s3 google drive
  - s3 files non technical users
  - aws s3 file sharing
  - s3 to gdrive transfer
tags:
  - RcloneView
  - aws-s3
  - google-drive
  - collaboration
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# AWS S3 파일을 Google Drive에서 접근 가능하게 만드는 방법 — 팀 협업을 위한 S3 버킷 동기화

> 개발팀은 모든 것을 S3 버킷에 저장합니다. 마케팅팀은 Google Drive를 사용합니다. 마케팅팀이 S3에서 파일이 필요할 때마다 개발자에게 다운로드해서 공유해 달라고 요청해야 합니다. 더 나은 방법이 있습니다.

AWS S3는 강력하고 비용 효율적이지만, 개발자를 위해 설계되었습니다. AWS 콘솔은 비개발자 팀원에게 친숙하지 않으며, 개별 S3 객체를 공유하려면 presigned URL을 생성해야 합니다. 선택한 S3 폴더를 Google Drive와 동기화하면, 누구나 AWS 자격 증명 없이도 필요한 파일에 접근할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 문제 상황

- **개발자**는 에셋, 리포트, 익스포트 파일을 S3에 저장합니다.
- **비개발 팀**(마케팅, 영업, 경영진)은 S3에 쉽게 접근할 수 없습니다.
- **현재 우회 방법**: 누군가 S3에서 다운로드해서 Google Drive에 수동으로 업로드합니다.
- **결과**: 오래된 파일, 추가 작업, 그리고 지친 팀원들.

## 해결 방법

RcloneView를 사용해 특정 S3 폴더를 Google Drive와 자동으로 동기화하세요.

```
S3: reports/monthly/ → Google Drive: Shared/Monthly Reports/
S3: assets/marketing/ → Google Drive: Shared/Marketing Assets/
S3: exports/data/ → Google Drive: Shared/Data Exports/
```

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync S3 to Google Drive" class="img-large img-center" />

## 설정 방법

### 1) 두 계정 연결하기

AWS S3와 Google Drive를 리모트로 추가하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Add S3 and Google Drive remotes" class="img-large img-center" />

### 2) 선택적 동기화 작업 만들기

S3 버킷 전체를 동기화하지 마세요 — 비개발 팀에게 필요한 폴더만 동기화하세요. 필터 규칙을 사용해 특정 경로나 파일 형식만 포함시킬 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create S3 to Google Drive sync job" class="img-large img-center" />

### 3) 자동 업데이트 예약하기

매시간 또는 매일 동기화해서 Google Drive가 항상 최신 파일을 유지하도록 하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule S3 to Google Drive sync" class="img-large img-center" />

### 4) 동기화 완전성 확인하기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify S3 and Google Drive are in sync" class="img-large img-center" />

## 단방향 vs 양방향

### 단방향 (S3 → Google Drive)

S3에서 Google Drive로 **Copy** 또는 **Sync**를 사용하세요. Google Drive는 읽기 전용(미러)이 됩니다. 변경은 반드시 S3에서 이루어져야 합니다.

적합한 경우: 리포트, 익스포트, 생성된 에셋.

### 양방향

양방향으로 동기화합니다. Google Drive에서의 변경이 S3로, 그리고 그 반대로도 동기화됩니다.

적합한 경우: 두 팀이 함께 기여하는 공유 작업 폴더.

## 관련성 있는 파일만 필터링하기

S3에 있는 모든 것으로 Google Drive를 채우지 마세요. 필터를 사용하세요.

- `*.pdf`, `*.xlsx`, `*.pptx`와 같은 업무 문서만 포함시킵니다.
- 원시 데이터, 로그, 임시 파일은 제외합니다.
- `--max-age 90d`를 사용해 최근 파일만 동기화합니다.

## 비용 고려사항

S3 이그레스(egress)는 비용이 발생합니다(처음 10TB까지 TB당 $90). 대용량 데이터셋을 자주 동기화한다면 다음을 고려하세요.

- 비수기 시간대에 동기화합니다.
- 필터를 사용해 데이터 용량을 제한합니다.
- 중간 저장소로 Backblaze B2나 Wasabi를 고려합니다(무료/저렴한 이그레스).

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **S3와 Google Drive를 리모트로 추가**하세요.
3. 특정 폴더에 대해 **타겟팅된 동기화 작업을 생성**하세요.
4. **시간별 또는 일별 업데이트를 예약**하세요.
5. **Google Drive 폴더를 팀과 공유**하세요.

개발 인프라와 팀 협업 사이의 간극을 좁혀보세요.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Rclone 필터 규칙 설명](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [작업 예약하기](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [대역폭 제한 설정하기](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />

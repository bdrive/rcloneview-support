---
slug: sync-onedrive-to-dropbox-both-clouds-rcloneview
title: "OneDrive와 Dropbox 동기화하는 방법 — RcloneView로 두 플랫폼 모두 최신 상태 유지하기"
authors:
  - tayson
description: "업무용으로 OneDrive를, 클라이언트용으로 Dropbox를 사용하시나요? RcloneView를 사용해 OneDrive와 Dropbox 간 특정 폴더를 자동으로 동기화하는 방법을 알아보세요."
keywords:
  - sync onedrive dropbox
  - onedrive to dropbox
  - onedrive dropbox sync tool
  - transfer onedrive dropbox
  - keep onedrive dropbox in sync
  - onedrive dropbox bridge
  - onedrive dropbox transfer
  - multi cloud sync
  - onedrive dropbox backup
  - sync two cloud services
tags:
  - onedrive
  - dropbox
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive와 Dropbox 동기화하는 방법 — RcloneView로 두 플랫폼 모두 최신 상태 유지하기

> 사무실에서는 Microsoft 365를 사용하기 때문에 모든 것이 OneDrive에 있습니다. 하지만 프리랜서 디자이너는 Dropbox를 고집합니다. 담당 회계사도 Dropbox를 사용합니다. 결국 파일을 수동으로 복사하고 있다면, 이제 그 문제를 해결해 보겠습니다.

OneDrive와 Dropbox는 서로 다른 생태계를 위한 서비스입니다. Microsoft 365 사용자는 OneDrive를 중심으로 작업하고, 크리에이티브 전문가와 많은 소규모 비즈니스는 Dropbox를 선호합니다. 두 그룹과 함께 일한다면 파일을 동기화 상태로 유지하는 것만으로 많은 수작업 시간을 절약할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 설정

### 1) 두 계정 모두 추가하기

<img src="/support/images/en/blog/new-remote.png" alt="Add OneDrive and Dropbox" class="img-large img-center" />

### 2) 나란히 탐색하기

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive and Dropbox side by side" class="img-large img-center" />

### 3) 동기화 작업 만들기

두 클라우드 간 특정 프로젝트 폴더를 동기화합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create OneDrive Dropbox sync" class="img-large img-center" />

### 4) 자동 업데이트 예약하기

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive Dropbox sync" class="img-large img-center" />

### 5) 동기화 상태 확인하기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare OneDrive and Dropbox" class="img-large img-center" />

## 모범 사례

- **특정 폴더만 동기화하기** — 계정 전체를 동기화하지 말고 공유 프로젝트 폴더만 동기화하세요.
- **단방향 전달에는 복사(Copy) 사용하기** — 완성된 파일을 다른 플랫폼으로 밀어넣습니다.
- **필터 사용하기** — 임시 파일, `.DS_Store`, Office 잠금 파일을 제외하세요.
- **충돌 여부 모니터링하기** — 두 플랫폼 모두 동시 편집을 지원하므로 동기화 충돌이 발생할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **OneDrive와 Dropbox를 추가**합니다.
3. **대상 동기화 작업을 생성**합니다.
4. **예약하고 확인**합니다.

---

**관련 가이드:**

- [동기화 작업 만들기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [클라우드 동기화 충돌 감지 및 해결](https://rcloneview.com/support/blog/resolve-cloud-sync-conflicts-rcloneview)
- [Rclone 필터 규칙](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />

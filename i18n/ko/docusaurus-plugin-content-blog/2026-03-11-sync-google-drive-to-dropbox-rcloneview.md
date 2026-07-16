---
slug: sync-google-drive-to-dropbox-rcloneview
title: "Google Drive와 Dropbox 동기화하는 방법 — RcloneView로 두 클라우드를 항상 최신 상태로 유지하기"
authors:
  - tayson
description: "Google Drive와 Dropbox를 함께 사용하시나요? RcloneView를 사용해 두 플랫폼의 파일을 항상 최신 상태로 동기화하는 방법을 알아보세요."
keywords:
  - sync google drive dropbox
  - google drive to dropbox
  - keep google drive dropbox in sync
  - google drive dropbox sync tool
  - transfer google drive dropbox
  - google drive dropbox bridge
  - multi cloud sync google dropbox
  - google drive dropbox backup
  - sync two cloud accounts
  - google drive dropbox migration
tags:
  - RcloneView
  - google-drive
  - dropbox
  - sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive와 Dropbox 동기화하는 방법 — RcloneView로 두 클라우드를 항상 최신 상태로 유지하기

> 회사는 Google Workspace를 쓰지만 클라이언트는 Dropbox를 사용합니다. 팀은 Drive에서 공유하지만 디자이너는 Dropbox를 선호합니다. 이유가 무엇이든, 두 클라우드를 동기화 상태로 유지해야 합니다. 방법을 알려드립니다.

Google Drive와 Dropbox는 가장 인기 있는 클라우드 스토리지 플랫폼 중 두 가지지만, 서로 직접 연동되지는 않습니다. 두 플랫폼 모두에 파일을 두어야 할 때 흔히 쓰는 방법은 수동 복사-붙여넣기나 이메일 첨부입니다. RcloneView는 이 동기화를 자동화해 두 플랫폼을 항상 최신 상태로 유지해 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 흔한 시나리오

- **클라이언트 협업** — 팀은 Google Drive를, 클라이언트는 Dropbox를 사용
- **부서 간 연결** — 엔지니어링팀은 Drive를, 마케팅팀은 Dropbox를 사용
- **개인 + 업무** — 업무는 Google Workspace, 개인은 Dropbox
- **마이그레이션 완충** — 한 플랫폼에서 다른 플랫폼으로 점진적으로 이전
- **이중화** — 두 플랫폼 모두에 파일을 두어 상호 백업

## 설정

### 1) 두 계정 모두 추가하기

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Drive and Dropbox" class="img-large img-center" />

### 2) 나란히 탐색하기

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive and Dropbox side by side" class="img-large img-center" />

### 3) 동기화 전략 선택하기

**단방향 (Google Drive → Dropbox):** Google Drive가 기준(source of truth)이 됩니다. 변경 사항이 Dropbox로 전달됩니다.

**단방향 (Dropbox → Google Drive):** Dropbox가 기준이 됩니다. 변경 사항이 Drive로 전달됩니다.

**폴더 단위 동기화:** 계정 전체가 아니라 특정 폴더만 동기화합니다. 예를 들어 `Projects/ClientA/` 폴더만 동기화할 수 있습니다.

### 4) 정기 동기화 예약하기

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Google Drive Dropbox sync" class="img-large img-center" />

### 5) 동기화 상태 확인하기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Google Drive and Dropbox" class="img-large img-center" />

## 팁

- **필터를 사용**해 클라우드 전체가 아니라 관련 폴더만 동기화하세요.
- **백업에는 복사(Copy)를 사용**하세요 — 실수로 삭제한 내용이 전파되는 것을 막아줍니다.
- **미러링에는 동기화(Sync)를 사용**하세요 — 양쪽을 동일하게 유지합니다.
- **요청 제한(rate limit)을 주의**하세요 — Google과 Dropbox 모두 과도한 사용을 제한합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Google Drive와 Dropbox를 리모트로 추가**합니다.
3. 필요한 폴더에 대한 **동기화 또는 복사 작업을 생성**합니다.
4. **자동 업데이트를 예약**합니다.
5. **폴더 비교로 확인**합니다.

두 클라우드, 하나의 동기화. 더 이상 수동으로 파일을 공유할 필요가 없습니다.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Rclone 필터 규칙 설명](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [동기화 vs 복사 vs 이동 차이 설명](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)

<CloudSupportGrid />

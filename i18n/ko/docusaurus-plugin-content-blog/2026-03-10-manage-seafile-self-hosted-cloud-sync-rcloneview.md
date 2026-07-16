---
slug: manage-seafile-self-hosted-cloud-sync-rcloneview
title: "RcloneView로 Seafile 자체 호스팅 클라우드를 Google Drive, S3, 외부 스토리지와 동기화하기"
authors:
  - tayson
description: "Seafile은 인기 있는 자체 호스팅 클라우드 스토리지 플랫폼입니다. RcloneView를 사용해 Seafile을 Google Drive, AWS S3, 또는 다른 클라우드와 동기화하고 백업하는 방법을 알아보세요."
keywords:
  - seafile sync
  - seafile backup cloud
  - seafile rclone
  - seafile google drive sync
  - seafile s3 backup
  - self hosted cloud sync
  - seafile file transfer
  - seafile migration
  - seafile external backup
  - seafile multi cloud
tags:
  - seafile
  - self-hosted
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Seafile 자체 호스팅 클라우드를 Google Drive, S3, 외부 스토리지와 동기화하기

> Seafile은 자체 호스팅 클라우드 스토리지로 데이터에 대한 완전한 통제권을 제공합니다. 하지만 자체 호스팅이 고립을 의미하지는 않습니다 — RcloneView는 Seafile을 70개 이상의 외부 클라우드 제공업체와 연결해 백업, 협업, 마이그레이션을 지원합니다.

Seafile은 많은 조직이 자체 서버에서 운영하는 오픈소스 파일 동기화 및 공유 플랫폼입니다. 빠른 동기화, 파일 잠금, 대용량 파일에서의 뛰어난 성능을 제공합니다. 문제는 Seafile이 여러분의 인프라에 존재하기 때문에 오프사이트 백업, 클라우드 협업, 또는 데이터를 이전/반출할 방법이 필요하다는 점입니다. RcloneView는 Seafile을 나머지 클라우드 세계와 연결해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Seafile을 외부 클라우드와 연결해야 하는 이유

- **오프사이트 백업** — 자체 호스팅은 곧 자체 책임을 의미합니다. 재해 복구를 위해 S3나 B2로 백업하세요.
- **협업** — Google Drive나 Dropbox를 통해 외부 파트너와 파일을 공유하세요.
- **마이그레이션** — 다른 클라우드에서 Seafile로 데이터를 이전하거나, 플랫폼을 변경할 때 반출하세요.
- **하이브리드 구성** — 민감한 데이터는 Seafile에, 공유 파일은 퍼블릭 클라우드에 두세요.

## RcloneView에서 Seafile 설정하기

### 리모트로 Seafile 추가하기

1. RcloneView를 열고 **Add Remote**를 클릭합니다.
2. 유형으로 **Seafile**을 선택합니다.
3. Seafile 서버 URL을 입력합니다(예: `https://seafile.yourcompany.com`).
4. 사용자 이름과 비밀번호(또는 API 토큰)를 입력합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add Seafile remote" class="img-large img-center" />

Seafile 라이브러리가 듀얼 패널 탐색기에 나타납니다.

## 주요 워크플로

### 1) Seafile → S3 (오프사이트 백업)

Seafile에서 AWS S3 또는 Backblaze B2로의 야간 백업을 예약하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Seafile to S3 backup" class="img-large img-center" />

이제 자체 호스팅 데이터에 독립적인 오프사이트 사본이 생깁니다.

### 2) Google Drive → Seafile (마이그레이션)

자체 호스팅으로 전환 중이신가요? Google Drive에서 Seafile로 파일을 전송하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate Google Drive to Seafile" class="img-large img-center" />

### 3) Seafile → Google Drive (외부 공유)

Seafile 접근 권한이 없는 외부 파트너와 공유하기 위해 특정 라이브러리를 Google Drive로 복사하세요.

### 4) 암호화된 오프사이트 백업

crypt 리모트를 사용해 클라우드 스토리지로 전송하기 전 Seafile 데이터를 암호화하세요. 자체 호스팅의 개인정보 보호가 오프사이트 백업까지 확장됩니다.

## 백업 검증하기

Seafile 라이브러리를 백업 대상과 비교하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Seafile backup" class="img-large img-center" />

## 완전한 백업을 위한 배치 작업

v1.3 배치 작업으로 여러 Seafile 백업 작업을 연결하세요.

1. 라이브러리 A → S3로 복사.
2. 라이브러리 B → S3로 복사.
3. 모든 라이브러리를 S3와 비교.
4. Slack 알림 전송.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 클라우드 계정과 함께 **Seafile을 추가**하세요.
3. Seafile에서 외부 스토리지로 **백업 작업을 생성**하세요.
4. 안정적인 오프사이트 보호를 위해 **예약하고 검증**하세요.

자체 호스팅이 제한을 의미하지는 않습니다. Seafile을 모든 것과 연결하세요.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [클라우드 백업 암호화하기](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

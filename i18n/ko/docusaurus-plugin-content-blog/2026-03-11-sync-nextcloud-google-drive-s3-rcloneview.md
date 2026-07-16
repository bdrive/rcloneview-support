---
slug: sync-nextcloud-google-drive-s3-rcloneview
title: "RcloneView로 Nextcloud를 Google Drive, S3 등 다른 클라우드와 동기화하기"
authors:
  - tayson
description: "Nextcloud는 대표적인 셀프 호스팅 클라우드 플랫폼입니다. RcloneView를 사용해 Nextcloud를 Google Drive, AWS S3, Backblaze B2와 동기화하고 백업하는 방법을 알아보세요."
keywords:
  - nextcloud sync
  - nextcloud backup cloud
  - nextcloud rclone
  - nextcloud google drive
  - nextcloud s3 backup
  - nextcloud external storage
  - sync nextcloud files
  - nextcloud migration
  - nextcloud multi cloud
  - nextcloud off site backup
tags:
  - nextcloud
  - self-hosted
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Nextcloud를 Google Drive, S3 등 다른 클라우드와 동기화하기

> Nextcloud는 내 데이터를 완전히 통제할 수 있게 해줍니다. 하지만 셀프 호스팅이라는 것은 백업도 스스로 책임져야 한다는 의미입니다. RcloneView는 Nextcloud를 70개 이상의 클라우드 제공업체와 연결하여 오프사이트 백업, 마이그레이션, 멀티 클라우드 워크플로우를 지원합니다.

Nextcloud는 파일 동기화, 협업, 프라이버시 중심 스토리지를 위해 수백만 명이 사용하는 가장 인기 있는 셀프 호스팅 클라우드 플랫폼입니다. 하지만 Nextcloud를 자체 인프라에서 운영한다는 것은 백업, 재해 복구, 데이터 마이그레이션까지 직접 책임져야 한다는 뜻입니다. RcloneView는 Nextcloud를 나머지 클라우드 생태계와 연결해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Nextcloud를 외부 클라우드와 연결해야 하는 이유

- **오프사이트 백업** — Nextcloud 서버에 문제가 생기면 외부 백업 없이는 데이터가 사라집니다.
- **마이그레이션** — Google Drive/OneDrive에서 Nextcloud로, 또는 그 반대로 이전할 때.
- **하이브리드 클라우드** — 민감한 데이터는 Nextcloud에, 공유 데이터는 Google Drive에 보관.
- **클라이언트 전달** — Nextcloud의 결과물을 클라이언트의 Dropbox나 OneDrive로 복사.
- **비용 최적화** — 오래된 Nextcloud 데이터를 저렴한 오브젝트 스토리지(B2, S3 Glacier)로 아카이브.

## RcloneView에서 Nextcloud 설정하기

### WebDAV로 연결하기

1. RcloneView를 열고 **리모트 추가**를 클릭합니다.
2. 유형으로 **WebDAV**를 선택합니다.
3. Nextcloud WebDAV URL을 입력합니다: `https://your-nextcloud.com/remote.php/dav/files/USERNAME/`
4. Nextcloud 사용자 이름과 앱 비밀번호를 입력합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add Nextcloud via WebDAV" class="img-large img-center" />

이제 Nextcloud 파일이 RcloneView의 듀얼 패널 탐색기에 표시됩니다.

## 주요 워크플로우

### 1) Nextcloud → S3 (오프사이트 백업)

Nextcloud에서 AWS S3나 Backblaze B2로 매일 밤 백업을 예약합니다:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Nextcloud backup" class="img-large img-center" />

### 2) Google Drive → Nextcloud (마이그레이션)

Google에서 셀프 호스팅 환경으로 마이그레이션합니다:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate Google Drive to Nextcloud" class="img-large img-center" />

### 3) Nextcloud → Google Drive (공유)

특정 폴더를 Google Drive로 복사하여 외부 파트너와 협업합니다.

### 4) 암호화된 오프사이트 백업

암호화를 한 겹 더 씌워 제로 지식(zero-knowledge) 암호화 백업을 구성할 수 있습니다. 클라우드 백업 제공업체조차 Nextcloud 데이터를 읽을 수 없습니다.

## 백업 확인하기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Nextcloud backup" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView 다운로드**.
2. WebDAV로 **Nextcloud 추가**.
3. **백업/동기화 대상 추가**.
4. **자동 백업 예약**.
5. **폴더 비교로 확인**.

셀프 호스팅도, 백업도 안전하게.

---

**관련 가이드:**

- [동기화 작업 만들기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [클라우드 백업 암호화](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

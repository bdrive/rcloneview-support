---
slug: manage-quatrix-enterprise-file-sync-rcloneview
title: "Quatrix 엔터프라이즈 파일 공유 관리 — RcloneView로 Google Drive, S3 등과 동기화하기"
authors:
  - tayson
description: "Maytech의 Quatrix는 엔터프라이즈 파일 공유 플랫폼입니다. RcloneView를 사용하여 Quatrix를 Google Drive, S3 등 다른 클라우드와 함께 동기화하고 백업하는 방법을 알아보세요."
keywords:
  - quatrix file sharing
  - quatrix rclone
  - quatrix sync
  - quatrix backup
  - quatrix enterprise cloud
  - maytech quatrix
  - quatrix file transfer
  - quatrix google drive
  - quatrix s3 backup
  - enterprise file sharing sync
tags:
  - quatrix
  - enterprise
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Quatrix 엔터프라이즈 파일 공유 관리 — RcloneView로 Google Drive, S3 등과 동기화하기

> Maytech의 Quatrix는 컴플라이언스 기능을 갖춘 안전한 엔터프라이즈 파일 공유를 제공합니다. 하지만 다른 클라우드 플랫폼과 통합하려면 적절한 도구가 필요합니다. RcloneView는 Quatrix를 70개 이상의 프로바이더와 연결해 줍니다.

Quatrix는 보안과 컴플라이언스에 중점을 둔 엔터프라이즈급 파일 공유 및 전송 플랫폼입니다. 많은 조직이 안전한 외부 파일 교환에는 Quatrix를, 내부 협업에는 Google Drive나 OneDrive를 함께 사용합니다. RcloneView는 Quatrix를 여러분의 전체 클라우드 생태계와 연결해 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 Quatrix 설정하기

Quatrix는 API 또는 WebDAV 인터페이스를 통해 접근할 수 있습니다.

1. RcloneView를 열고 **Add Remote**를 클릭합니다.
2. 사용 중인 Quatrix 설정에 맞는 연결 방식을 선택합니다.
3. Quatrix 자격 증명을 입력합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add Quatrix remote" class="img-large img-center" />

## 주요 워크플로우

### Quatrix → S3 (오프사이트 백업)

민감한 Quatrix 데이터를 암호화하여 AWS S3에 백업합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Quatrix backup" class="img-large img-center" />

### Google Drive → Quatrix (안전한 외부 공유)

내부 Google Drive의 파일을 Quatrix로 이동하여 외부 당사자와 안전하게 공유합니다.

### Quatrix → NAS (로컬 아카이브)

컴플라이언스 아카이빙을 위해 Quatrix 콘텐츠의 로컬 사본을 NAS에 보관합니다.

## 확인 및 모니터링

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Quatrix sync" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 다른 클라우드와 함께 **Quatrix를 추가**합니다.
3. **백업 및 동기화 작업을 생성**합니다.
4. **일정을 예약하고 확인**합니다.

엔터프라이즈 파일 공유를 모든 것과 연결하세요.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [클라우드 백업 암호화](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

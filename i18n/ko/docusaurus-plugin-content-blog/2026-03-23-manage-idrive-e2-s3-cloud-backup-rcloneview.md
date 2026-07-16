---
slug: manage-idrive-e2-s3-cloud-backup-rcloneview
title: "IDrive e2 관리 — RcloneView로 S3 호환 클라우드 백업하기"
authors:
  - tayson
description: "RcloneView를 사용하여 확장 가능한 클라우드 백업과 재해 복구를 위한 저렴한 S3 호환 스토리지 솔루션인 IDrive e2를 관리하는 방법을 알아보세요."
keywords:
  - IDrive e2 백업
  - S3 호환 스토리지
  - 저렴한 클라우드 백업
  - IDrive e2 동기화
  - RcloneView S3
  - 저렴한 클라우드 스토리지
  - 오브젝트 스토리지 백업
  - IDrive e2 통합
  - 클라우드 백업 솔루션
  - 비용 효율적인 클라우드 스토리지
tags:
  - RcloneView
  - idrive-e2
  - s3-compatible
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IDrive e2 관리 — RcloneView로 S3 호환 클라우드 백업하기

> IDrive e2는 훨씬 저렴한 비용으로 S3 호환 스토리지를 제공하며, RcloneView를 사용하면 손쉽게 관리할 수 있습니다.

IDrive e2는 프리미엄 가격 없이도 엔터프라이즈급 안정성을 제공하는 비용 효율적인 S3 호환 오브젝트 스토리지 플랫폼입니다. 완전한 백업 및 동기화 기능을 유지하면서 클라우드 스토리지 비용을 절감하고 싶다면, RcloneView는 IDrive e2와 원활하게 통합되어 전체 백업 워크플로우를 자동화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 클라우드 백업에 IDrive e2를 사용해야 하는 이유

IDrive e2는 S3 API 호환성을 제공하므로 RcloneView를 포함하여 S3를 지원하는 모든 도구와 함께 작동합니다. 경쟁력 있는 가격과 다양한 데이터 센터 옵션을 갖추고 있어 과도한 비용 없이 대규모 백업을 관리하는 기업에 이상적입니다. 데이터베이스, 미디어 라이브러리, 전체 파일 시스템 등 무엇을 백업하든 IDrive e2는 필요에 맞게 확장됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding IDrive e2 as a new remote in RcloneView" class="img-large img-center" />

## RcloneView에서 IDrive e2 설정하기

RcloneView는 IDrive e2를 다른 S3 호환 스토리지와 동일하게 취급합니다. 간단히 다음과 같이 진행하세요.

1. RcloneView를 열고 새 리모트를 추가합니다
2. 공급자로 S3-compatible을 선택합니다
3. IDrive e2 엔드포인트 URL과 자격 증명을 입력합니다
4. 리모트 이름을 지정하고 연결을 테스트합니다

몇 분 안에 RcloneView의 직관적인 인터페이스를 통해 IDrive e2 버킷에 완전히 액세스할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring data to IDrive e2 buckets" class="img-large img-center" />

## IDrive e2로 백업 자동화하기

RcloneView의 작업 스케줄러를 사용하여 IDrive e2로의 반복 백업을 생성하세요. 로컬 스토리지 또는 다른 클라우드 제공업체에서 매시간, 매일 또는 매주 백업을 설정할 수 있습니다. 전송 진행 상황을 실시간으로 모니터링하고 작업이 완료되거나 실패할 때 알림을 받으세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling recurring backup jobs to IDrive e2" class="img-large img-center" />

## 간편해진 재해 복구

IDrive e2는 버전 관리가 되고 지리적으로 분산되어 있으므로 여러 복구 지점을 확보할 수 있습니다. RcloneView를 사용하면 필요할 때 언제든지 파일, 전체 폴더 또는 완전한 데이터 세트를 신속하게 복원할 수 있습니다.

---

## 시작하기

1. **IDrive e2에 가입**하고 액세스 키, 시크릿 키, 엔드포인트 URL을 발급받으세요.
2. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
3. S3-compatible 공급자 옵션을 사용하여 **IDrive e2를 리모트로 추가**하세요.
4. **첫 번째 백업을 예약**하고 나머지는 RcloneView에 맡기세요.

지금 바로 IDrive e2와 RcloneView로 데이터를 저렴하게 보호하세요.

---

**관련 가이드:**

- [Linode Object Storage 관리 — RcloneView로 S3 호환 백업하기](https://rcloneview.com/support/blog/manage-linode-object-storage-s3-rcloneview)
- [RcloneView로 Vultr Object Storage S3를 Google Drive에 동기화하기](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [Google Cloud Storage 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-cloud-storage-sync-rcloneview)

<CloudSupportGrid />

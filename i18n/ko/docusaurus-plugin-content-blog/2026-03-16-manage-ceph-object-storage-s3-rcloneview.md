---
slug: manage-ceph-object-storage-s3-rcloneview
title: "RcloneView로 Ceph 오브젝트 스토리지 관리하기 — Ceph 클러스터를 위한 S3 호환 GUI"
authors:
  - tayson
description: "Ceph의 RADOS Gateway는 S3 호환 스토리지를 제공하지만, 이를 시각적으로 관리하는 것은 번거로운 일입니다. RcloneView를 사용해 데스크톱 파일 관리자로 Ceph 클러스터를 탐색하고, 동기화하고, 백업하세요."
keywords:
  - ceph object storage gui
  - ceph s3 file manager
  - ceph rados gateway gui
  - ceph storage management
  - ceph sync tool
  - ceph rclone
  - ceph backup cloud
  - ceph rgw gui
  - ceph s3 compatible
  - ceph visual file manager
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - self-hosted
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Ceph 오브젝트 스토리지 관리하기 — Ceph 클러스터를 위한 S3 호환 GUI

> Ceph는 세계에서 가장 큰 규모의 스토리지 클러스터 일부를 구동하고 있습니다. 하지만 버킷을 탐색하거나, 외부 클라우드로 동기화하거나, 데이터를 검증하려면 대개 CLI 도구와 스크립트가 필요합니다. RcloneView는 Ceph 관리자들이 그동안 아쉬워했던 시각적 계층을 제공합니다.

Ceph는 기업, 연구 기관, 클라우드 제공업체가 가장 선호하는 분산 스토리지 시스템입니다. Ceph의 RADOS Gateway(RGW)는 S3 호환 API를 제공하므로, RcloneView는 Ceph 클러스터에 직접 연결하여 버킷 탐색, 외부 클라우드로의 데이터 전송, 백업 예약, 무결성 검증 등 완전한 시각적 파일 관리 경험을 제공할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ceph를 RcloneView에 연결하기

<img src="/support/images/en/blog/new-remote.png" alt="Add Ceph S3 remote" class="img-large img-center" />

RGW 엔드포인트, 액세스 키, 시크릿 키를 사용해 Ceph 클러스터를 S3 호환 리모트로 추가하세요. RcloneView는 이를 다른 S3 프로바이더와 동일하게 취급합니다.

## 주요 사용 사례

### 버킷을 시각적으로 탐색하고 관리하기

`s3cmd`나 `aws cli`를 사용하는 대신 듀얼 패널 탐색기에서 Ceph 버킷과 오브젝트를 탐색하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Ceph buckets" class="img-large img-center" />

### 외부 클라우드로 복제하기

중요한 Ceph 데이터의 오프사이트 복사본을 AWS S3, Google Cloud Storage, 또는 Backblaze B2에 유지하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Replicate Ceph to cloud" class="img-large img-center" />

### 사이트 간 백업 예약하기

Ceph 클러스터에서 외부 클라우드 제공업체로의 야간 복제를 자동화하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Ceph backup" class="img-large img-center" />

### Ceph로/에서 데이터 마이그레이션하기

AWS S3에서 자체 Ceph 클러스터로 이전하시나요? 아니면 Ceph에서 상용 제공업체로 마이그레이션하시나요? 듀얼 패널 탐색기를 사용하면 이 작업을 시각적으로 처리할 수 있습니다.

### 데이터 무결성 검증하기

폴더 비교 기능을 사용해 복제된 데이터가 원본과 일치하는지 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Ceph replication" class="img-large img-center" />

## 성능 고려 사항

Ceph 클러스터는 높은 처리량을 감당할 수 있습니다. 대규모 마이그레이션이나 백업 시 대역폭을 최대화하려면 병렬 전송 수(8-16)와 멀티 스레드 스트림을 늘리세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Ceph RGW를** S3 호환 리모트로 **추가**하세요.
3. 파일 탐색기에서 **버킷을 탐색**하세요.
4. 외부 클라우드로 **복제 작업을 설정**하세요.

엔터프라이즈급 스토리지에는 엔터프라이즈급 관리 도구가 필요합니다.

---

**관련 가이드:**

- [MinIO 스토리지 관리하기](https://rcloneview.com/support/blog/sync-minio-to-aws-s3-google-drive-gui-rcloneview)
- [OpenStack Swift 관리하기](https://rcloneview.com/support/blog/manage-openstack-swift-object-storage-gui-rcloneview)
- [멀티 스레드 전송](https://rcloneview.com/support/blog/multi-threaded-transfers-parallel-streams-rcloneview)

<CloudSupportGrid />

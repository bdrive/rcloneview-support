---
slug: manage-ovh-cloud-object-storage-sync-rcloneview
title: "OVH 클라우드 오브젝트 스토리지 관리 — RcloneView로 S3, Google Drive 등과 동기화하기"
authors:
  - tayson
description: "OVH 클라우드 오브젝트 스토리지는 저렴하고 EU 기반이지만, Horizon 대시보드로 관리하기는 번거롭습니다. RcloneView를 사용해 시각적 파일 관리자로 OVH 스토리지를 탐색, 동기화, 백업하세요."
keywords:
  - ovh cloud object storage
  - ovh cloud rclone
  - ovh cloud sync google drive
  - ovh object storage gui
  - ovh cloud file manager
  - ovh openstack swift gui
  - ovh cloud backup
  - ovh cloud transfer
  - ovh cloud sync s3
  - ovh cloud storage management
tags:
  - openstack
  - swift
  - s3-compatible
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OVH 클라우드 오브젝트 스토리지 관리 — RcloneView로 S3, Google Drive 등과 동기화하기

> OVH 클라우드는 OpenStack Swift 기반의 저렴하고 GDPR을 준수하는 오브젝트 스토리지를 제공합니다. 하지만 Horizon 대시보드를 통한 컨테이너 관리는 파일 관리라기보다는 인프라 작업처럼 느껴집니다. RcloneView가 이를 바꿔 놓습니다.

OVHcloud의 오브젝트 스토리지는 GDPR을 준수하는 저렴한 클라우드 스토리지가 필요한 유럽 기업에게 훌륭한 선택입니다. OpenStack Swift 기반으로 구축되어 안정적이고 가격도 합리적입니다. 문제는 일상적인 관리입니다 — Horizon 대시보드는 인프라 관리자를 위해 설계된 것이지, 파일을 탐색하거나 다른 클라우드로 동기화하거나 자동화된 백업을 실행하기 위한 것이 아닙니다. RcloneView는 OVH 클라우드에 부족한 시각적 파일 관리 계층을 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 왜 OVH 클라우드 + RcloneView인가?

OVH 클라우드 오브젝트 스토리지는 S3 호환 및 Swift 호환 액세스를 제공합니다. RcloneView는 두 프로토콜을 모두 지원하므로 익숙한 2단 파일 탐색기로 컨테이너에 연결하고 관리할 수 있습니다.

### 제공되는 기능

- 모든 OVH 컨테이너와 오브젝트의 **시각적 탐색**
- OVH와 70개 이상의 프로바이더 간 **크로스 클라우드 동기화**
- OVH 스토리지를 대상으로 하거나 OVH 스토리지에서 시작하는 **예약 백업**
- 전송 검증을 위한 **폴더 비교**

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Manage OVH Cloud in two panes" class="img-large img-center" />

## OVH 클라우드를 RcloneView에 연결하기

<img src="/support/images/en/blog/new-remote.png" alt="Add OVH Cloud remote" class="img-large img-center" />

S3 호환 API(신규 프로젝트에 권장) 또는 네이티브 Swift API를 통해 연결할 수 있습니다. 어느 쪽을 선택하든 OVH 컨테이너가 즉시 파일 탐색기에 나타납니다.

## 일반적인 워크플로

### OVH를 Google Drive와 동기화하기

팀 협업을 위해 OVH 파일의 작업 사본을 Google Drive에서 접근 가능하게 유지하세요. 변경 사항은 다시 OVH로 동기화하여 장기적이고 비용 효율적인 스토리지로 보관할 수 있습니다.

### OVH를 다른 프로바이더로 백업하기

벤더 종속을 방지하기 위해 Backblaze B2나 AWS S3에 백업을 유지하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OVH backup" class="img-large img-center" />

### OVH로 또는 OVH에서 마이그레이션하기

비용 절감을 위해 AWS S3에서 OVH로 이전하시나요? 아니면 OVH에서 Azure로 통합하시나요? 2단 탐색기를 사용하면 마이그레이션을 드래그 앤 드롭 작업으로 처리할 수 있습니다.

### 전송 모니터링

실시간 전송 모니터링으로 진행 상황을 추적하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor OVH transfers" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **OVH 클라우드**를 S3 호환 또는 Swift 리모트로 추가하세요.
3. 2단 탐색기에서 **컨테이너를 탐색**하세요.
4. 크로스 클라우드 워크플로를 위한 **동기화 작업을 설정**하세요.

저렴한 EU 스토리지에는 훌륭한 파일 관리자가 어울립니다.

---

**관련 가이드:**

- [OpenStack Swift 스토리지 관리하기](https://rcloneview.com/support/blog/manage-openstack-swift-object-storage-gui-rcloneview)
- [동기화 작업 만들기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

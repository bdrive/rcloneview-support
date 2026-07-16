---
slug: manage-alibaba-oss-cloud-sync-backup-rcloneview
title: "Alibaba Cloud OSS 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - tayson
description: "Alibaba Cloud OSS를 RcloneView에 연결하고, 버킷을 탐색하며, 아시아 태평양 및 중국 지역 워크로드를 위한 동기화 및 백업 작업을 실행하는 방법을 알아보세요."
keywords:
  - Alibaba Cloud OSS
  - RcloneView
  - S3-compatible storage
  - cloud sync
  - cloud backup
  - object storage
  - Asia-Pacific cloud
  - rclone OSS
tags:
  - alibaba-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Alibaba Cloud OSS 관리 — RcloneView로 파일 동기화 및 백업하기

> Alibaba Cloud OSS는 아시아 태평양 워크로드를 위한 대표적인 오브젝트 스토리지 플랫폼입니다 — RcloneView를 사용하면 명령줄을 사용하지 않고도 버킷을 손쉽게 탐색하고, 동기화하고, 백업할 수 있습니다.

Alibaba Cloud Object Storage Service(OSS)는 중국 또는 아시아 태평양 지역에 데이터 거주 요건이 있는 팀에게 최적의 스토리지 플랫폼입니다. 대용량 미디어 파일을 아카이브하든, 애플리케이션 데이터를 백업하든, 지역 간 데이터셋을 동기화하든, RcloneView는 검증된 rclone의 OSS 지원 기능 위에 깔끔한 그래픽 인터페이스를 제공합니다. 별도의 rclone 설치가 필요 없습니다 — RcloneView에는 내장 rclone 바이너리가 포함되어 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Alibaba Cloud OSS를 리모트로 추가하기

RcloneView를 열고 사이드바에서 **New Remote** 버튼을 클릭합니다. 제공업체 목록에서 **S3 Compatible Storage**를 선택한 다음 제공업체로 **Alibaba OSS**를 선택합니다(표시되는 경우 전용 **Alibaba Cloud Object Storage** 유형을 선택해도 됩니다). **Access Key ID**, **Access Key Secret**, 그리고 해당 지역에 맞는 올바른 OSS 엔드포인트가 필요합니다 — 예를 들어 화동 지역은 `oss-cn-hangzhou.aliyuncs.com`, 싱가포르는 `oss-ap-southeast-1.aliyuncs.com`을 사용합니다.

자격 증명을 입력하면 RcloneView가 즉시 연결을 검증하고 버킷 목록을 표시합니다. 버킷이 특정 지역에 있는 경우 엔드포인트가 일치하는지 확인하세요 — 엔드포인트 불일치는 OSS 연결 실패의 가장 흔한 원인입니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Alibaba Cloud OSS remote in RcloneView" class="img-large img-center" />

## 버킷 탐색 및 파일 전송

리모트를 추가하면 Alibaba OSS 리모트가 듀얼 페인 파일 탐색기에 나타납니다. 로컬 파일 시스템과 마찬가지로 폴더와 오브젝트를 탐색할 수 있습니다. 로컬 드라이브의 파일을 OSS 버킷으로 드래그 앤 드롭하거나, OSS 프리픽스 간에 오브젝트를 직접 이동할 수 있습니다. RcloneView는 실시간 전송 진행 상황을 표시하여 대용량 업로드 상태를 항상 확인할 수 있습니다.

여러 지역에 걸쳐 여러 OSS 버킷을 사용하는 팀의 경우, 각 지역 엔드포인트를 별도의 리모트로 추가하여 하나의 RcloneView 창에서 모두 관리할 수 있습니다. 이를 통해 여러 명령줄 세션을 오가지 않고도 지역 간 데이터 이동을 간편하게 처리할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer using RcloneView" class="img-large img-center" />

## 동기화 및 백업 작업 실행하기

OSS 워크플로우에서 RcloneView의 진정한 강점은 동기화 작업 시스템입니다. **Job Wizard**를 사용하면 4단계의 안내 과정을 통해 로컬 폴더나 클라우드 리모트에서 OSS 버킷으로 동기화 작업을 생성할 수 있습니다. **dry run** 옵션을 사용하면 실제로 실행하기 전에 어떤 파일이 전송될지 미리 확인할 수 있어, 대용량 OSS 버킷을 다룰 때 특히 유용합니다.

RcloneView의 **1:N 동기화** 기능을 사용하면 하나의 소스를 여러 OSS 버킷으로 동시에 동기화할 수 있어, 여러 OSS 지역에 걸쳐 중복 사본을 유지하는 데 유용합니다. **Job Manager**는 실행 중인 모든 작업을 추적하며, **Job History**는 감사(auditing)를 위한 과거 전송 기록 전체를 제공합니다. PLUS 라이선스 보유자는 이러한 작업을 반복 타이머로 예약하여 수동 개입 없이 자동으로 백업을 실행할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job for Alibaba OSS in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **New Remote**를 클릭하고 **S3 Compatible Storage**를 선택한 다음, 제공업체로 **Alibaba OSS**를 선택합니다.
3. **Access Key ID**, **Access Key Secret**, OSS 지역 엔드포인트를 입력합니다.
4. 듀얼 페인 탐색기에서 버킷을 탐색하고 파일을 드래그하여 전송합니다.
5. **Job Manager**를 열고 마법사를 사용해 동기화 작업을 생성한 다음, 첫 실제 동기화 전에 dry run을 실행합니다.

Alibaba Cloud OSS는 모든 아시아 태평양 데이터 워크플로우에 자연스럽게 어우러지며, RcloneView는 명령줄의 진입 장벽을 없애 팀 전체가 자신 있게 스토리지를 관리할 수 있도록 합니다.

---

**관련 가이드:**

- [Amazon S3 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Cloudflare R2 관리 — RcloneView로 클라우드 동기화하기](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [RcloneView로 S3, Wasabi, R2 중앙 관리하기](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />

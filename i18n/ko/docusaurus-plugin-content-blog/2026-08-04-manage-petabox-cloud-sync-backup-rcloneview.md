---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Petabox 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - kai
description: "Petabox S3 호환 스토리지를 RcloneView에 연결하여 90개 이상의 다른 클라우드 제공업체와 함께 크로스 플랫폼 탐색, 동기화, 백업, 마운트를 수행하세요."
keywords:
  - Petabox
  - Petabox RcloneView
  - Petabox 동기화
  - Petabox 백업
  - S3 호환 스토리지
  - Petabox 관리
  - 오브젝트 스토리지 GUI
  - Petabox 클라우드 스토리지
  - S3 호환 클라우드 관리자
  - Petabox rclone
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Petabox 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> 별도의 S3 클라이언트 없이, 사용 중인 다른 모든 클라우드와 같은 창에서 Petabox 오브젝트 스토리지를 탐색하고 동기화하며 백업하세요.

Petabox는 S3 호환 오브젝트 스토리지 서비스로, Amazon S3나 Wasabi와 마찬가지로 액세스 키, 시크릿 키, 사용자 지정 엔드포인트를 통해 RcloneView에 연결됩니다. 연결되면 Petabox는 RcloneView의 파일 탐색기에서 다른 리모트와 똑같이 동작하며 — 탐색, 동기화, 마운트가 다른 제공업체와 나란히 가능합니다. 이는 Petabox의 오브젝트 스토리지 경제성 때문에 이를 선택했지만 AWS CLI나 버킷 전용 웹 콘솔 대신 일반적인 파일 관리자 경험이 필요한 팀에게 중요합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## S3 호환 리모트로 Petabox 연결하기

Petabox 추가는 RcloneView의 표준 S3 호환 리모트 흐름을 따릅니다: 새 리모트를 열고 S3 호환 유형을 선택한 다음, Petabox Access Key ID, Secret Access Key, Petabox 대시보드의 버킷 엔드포인트 URL을 입력하세요. RcloneView는 임베디드 rclone 바이너리를 포함하고 있어 별도의 설치 단계가 필요 없으며, 자격 증명만으로 버킷을 파일 탐색기로 가져올 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

추가되면 Petabox는 Google Drive나 OneDrive처럼 탐색기 패널의 탭으로 표시됩니다. 마운트 전용 S3 브라우저와 달리, RcloneView는 Petabox에 대해 동기화 및 폴더 비교도 수행하며 — FREE 라이선스에서 기본 동기화를 위한 별도 구매가 필요하지 않습니다.

## Petabox를 다른 클라우드 제공업체와 동기화하기

일반적인 Petabox 사용 사례는 더 비용이 높은 제공업체에 현재 존재하는 데이터를 아카이빙하거나, 이중화를 위해 작업 중인 버킷을 미러링하는 것입니다. RcloneView의 동기화 마법사를 사용하면 Petabox를 소스 또는 대상으로 설정할 수 있으며, 파일 유형, 연령, 크기별 필터를 적용해 원하는 데이터만 이동하도록 할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Petabox object storage with another cloud provider in RcloneView" class="img-large img-center" />

드라이 런(Dry Run) 모드는 실제로 아무것도 실행하기 전에 복사되거나 삭제될 항목을 정확히 미리 보여줍니다 — 실수로 덮어쓰고 싶지 않은 버킷을 대상으로 단방향 동기화를 실행할 때 유용합니다. 비교(Compare) 뷰는 한 걸음 더 나아가, Petabox와 두 번째 리모트 사이의 왼쪽 전용, 오른쪽 전용, 크기가 다른 파일을 복사를 진행하기 전에 보여줍니다.

## Petabox 반복 백업 예약하기

지속적인 보호를 위해서는 Petabox 동기화를 매번 수동으로 실행하는 대신 Job Manager에 작업으로 저장하세요. PLUS 라이선스 사용자는 크론탭 형식의 일정을 연결하여 Petabox로/에서의 백업이 자동으로 실행되도록 할 수 있으며, 작업 기록(Job History)이 매 실행마다 상태, 전송 속도, 파일 수를 추적합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Petabox backup job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 새 리모트를 열고 Petabox용 S3 호환 스토리지 유형을 선택하세요.
3. Access Key, Secret Key, Petabox 엔드포인트를 입력한 다음 버킷을 탐색하세요.
4. 동기화 또는 백업 작업을 설정하고, 필요하다면 Job Manager에서 일정을 연결하세요.

Petabox의 오브젝트 스토리지 가격 구조는 RcloneView가 Petabox와 이미 관리 중인 다른 모든 클라우드 사이에서 데이터를 자유롭게 이동할 수 있는 능력과 잘 어울립니다.

---

**관련 가이드:**

- [Cloudflare R2 관리하기 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Wasabi 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneView로 Amazon S3 버킷을 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />

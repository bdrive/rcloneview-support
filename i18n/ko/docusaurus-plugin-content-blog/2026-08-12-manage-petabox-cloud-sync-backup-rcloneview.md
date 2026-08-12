---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Petabox 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - kai
description: "Petabox S3 호환 오브젝트 스토리지를 RcloneView에 연결하여 하나의 GUI에서 크로스 플랫폼 탐색, 동기화, 백업, 마운트를 이용하세요."
keywords:
  - Petabox RcloneView
  - Petabox 클라우드 스토리지
  - S3 호환 오브젝트 스토리지
  - Petabox 백업
  - Petabox 동기화
  - Petabox 마운트
  - 오브젝트 스토리지 GUI
  - Petabox 파일 관리
  - 클라우드 스토리지 관리자
  - Petabox 버킷 동기화
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Petabox 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기

> 하나의 데스크톱 창에서 사용 중인 다른 모든 클라우드와 함께 Petabox 버킷을 탐색, 동기화, 백업하세요.

Petabox는 S3 호환 오브젝트 스토리지 서비스이므로, RcloneView는 Amazon S3, Wasabi 또는 다른 S3 프로토콜 제공업체에 연결하는 것과 동일한 방식으로 연결할 수 있습니다: Access Key ID, Secret Access Key, 엔드포인트를 사용합니다. 연결되면 Petabox 버킷은 파일 탐색기에 일반 리모트로 표시되어, 로컬 폴더처럼 탐색, 전송, 예약이 가능합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 새 리모트로 Petabox 연결하기

Remote 탭에서 Remote Manager를 열고 New Remote를 선택하세요. Petabox는 rclone의 S3 프로토콜을 통해 액세스되므로 S3 호환 옵션을 선택하고 Access Key ID, Secret Access Key, 그리고 계정에서 제공된 Petabox 엔드포인트 URL을 입력하세요. 완료할 OAuth 브라우저 흐름은 없습니다 — 자격 증명만으로 연결이 인증되며, 테스트 연결이 성공하는 즉시 리모트가 탭 바에 나타납니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 새 S3 호환 리모트 추가하기" class="img-large img-center" />

마운트 전용 도구와 달리, RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교를 제공합니다 — Petabox 버킷은 다른 지원 제공업체와 동일하게 동기화, 비교, 작업 기록 기능을 사용할 수 있으며, 시작하는 데 업그레이드가 필요하지 않습니다.

## 버킷 탐색, 전송, 동기화하기

Petabox를 추가한 후에는 탐색기를 두 개의 패널로 분할하세요 — 하나는 로컬 폴더나 다른 클라우드를, 다른 하나는 Petabox 버킷을 표시하고 그 사이에 파일을 드래그합니다. 동일한 리모트 내에서 파일을 이동하면 이동(move) 작업이 되고, 다른 리모트 간에 드래그하면 복사(copy) 작업이 되므로 원본 파일을 건드리지 않고 Petabox 백업을 준비할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="로컬 폴더와 Petabox 버킷 간 파일 전송하기" class="img-large img-center" />

반복적인 전송의 경우 4단계 동기화 마법사를 사용하세요: 소스와 대상을 선택하고, 고급 설정에서 동시 전송 수와 동등성 검사기 수를 설정한 다음, 작업을 저장하기 전에 파일 유형, 크기, 또는 기간에 대한 필터를 적용합니다. 실제 전송을 실행하기 전에 먼저 드라이 런(Dry Run)을 실행하여 무엇이 복사되거나 삭제될지 정확히 미리 확인하세요.

## 백업 예약 및 작업 모니터링하기

동기화 작업이 Job Manager에 저장되면, PLUS 라이선스 사용자는 crontab 형식의 일정을 연결하여 Petabox 백업이 자체 주기로 자동 실행되도록 할 수 있으며, 저장하기 전에 다가오는 실행 시간을 미리 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Petabox 동기화 작업에 반복 백업 일정 설정하기" class="img-large img-center" />

예약 실행이든 수동 실행이든 모든 실행은 상태, 전송 속도, 파일 수, 총 크기와 함께 Job History에 기록되므로, Petabox 백업이 정상적으로 완료되었는지 확인하거나 재시도할 실패한 실행을 찾아낼 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Petabox 계정에서 Access Key ID와 Secret Access Key를 생성하고 엔드포인트 URL을 기록해 두세요.
3. Remote Manager에서 Petabox를 새 S3 호환 리모트로 추가하고 연결을 테스트하세요.
4. Petabox 버킷에 반복 백업을 예약하기 전에 드라이 런 동기화를 실행하세요.

Petabox가 연결되면, 여러분의 오브젝트 스토리지는 관리 중인 다른 모든 클라우드 바로 옆에 자리하게 됩니다 — 별도의 클라이언트도, 창 전환도 필요 없습니다.

---

**관련 가이드:**

- [RcloneView로 Storj 스토리지 관리하기 — 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [RcloneView로 IDrive E2 스토리지 관리하기 — 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [RcloneView로 Wasabi 스토리지 관리하기 — 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

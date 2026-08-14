---
slug: manage-liara-object-storage-cloud-sync-rcloneview
title: "Liara 오브젝트 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - robin
description: "Liara S3 호환 오브젝트 스토리지를 RcloneView에 연결하여 하나의 GUI에서 크로스 플랫폼 탐색, 동기화, 백업, 마운트를 이용하세요."
keywords:
  - Liara RcloneView
  - Liara 오브젝트 스토리지
  - S3 호환 오브젝트 스토리지
  - Liara 백업
  - Liara 동기화
  - Liara 스토리지 마운트
  - 오브젝트 스토리지 GUI
  - Liara 파일 관리
  - 클라우드 스토리지 관리자
  - Liara 버킷 동기화
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

# Liara 오브젝트 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기

> 이미 관리 중인 다른 모든 클라우드와 같은 탐색기 창에 Liara 버킷을 가져오세요.

Liara는 S3 호환 오브젝트 스토리지 서비스이며, RcloneView는 Amazon S3, Wasabi 또는 다른 S3 프로토콜 제공업체에 연결하는 것과 동일한 방식으로 연결합니다 — Access Key, Secret Key, 엔드포인트를 사용합니다. 리모트가 추가되면 Liara 버킷은 파일 탐색기에 일반 탭으로 표시되어, 로컬 디스크 및 다른 클라우드 계정과 함께 탐색, 전송, 예약이 가능합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 새 리모트로 Liara 연결하기

Remote 탭에서 Remote Manager를 열고 New Remote를 클릭하세요. Liara는 rclone의 S3 프로토콜을 통해 액세스되므로 S3 호환 옵션을 선택하고 Liara 콘솔에서 발급받은 Access Key, Secret Key, 엔드포인트 URL을 입력하세요. 완료할 OAuth 브라우저 단계는 없습니다 — 테스트 연결이 성공하는 즉시 버킷이 다른 리모트와 마찬가지로 탭 바에 나타납니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 새 S3 호환 리모트 추가하기" class="img-large img-center" />

RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화합니다 — Liara도 다른 클라우드 계정과 별도의 클라이언트나 다른 워크플로가 필요하지 않습니다.

## 버킷 탐색, 전송, 동기화하기

탐색기를 두 개의 패널로 분할하세요 — 하나는 로컬 파일이나 다른 클라우드를, 다른 하나는 Liara 버킷을 표시하고 그 사이에 파일을 드래그합니다. 동일한 리모트 내에서 이동하면 이동(move) 작업이 되고, 다른 리모트 간에 드래그하면 복사(copy) 작업이 되므로 원본 폴더를 건드리지 않고 Liara로 백업을 준비할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="로컬 폴더와 Liara 버킷 간 파일 전송하기" class="img-large img-center" />

반복적인 작업의 경우 4단계 동기화 마법사를 사용하세요: 소스와 대상을 선택하고, 고급 설정에서 동시 전송 수와 동등성 검사기 수를 조정한 다음, 저장 전에 파일 유형, 크기, 기간 필터를 적용합니다. 실제 동기화를 실행하기 전에 먼저 드라이 런(Dry Run)을 실행하여 무엇이 복사되거나 삭제될지 정확히 미리 확인하세요.

## 백업 예약 및 작업 모니터링하기

동기화 작업이 Job Manager에 저장되면, PLUS 라이선스 사용자는 crontab 형식의 일정을 연결하여 Liara 백업이 고정된 주기로 자동 실행되도록 할 수 있으며, 저장하기 전에 다가오는 실행 시간을 미리 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Liara 동기화 작업에 반복 백업 일정 설정하기" class="img-large img-center" />

수동 실행이든 예약 실행이든 모든 실행은 상태, 전송 속도, 파일 수, 총 크기와 함께 Job History에 기록되므로, Liara 백업이 정상적으로 완료되었는지 확인하거나 재시도할 실패한 실행을 찾아낼 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Liara 콘솔에서 Access Key와 Secret Key를 생성하고 엔드포인트 URL을 기록해 두세요.
3. Remote Manager에서 Liara를 새 S3 호환 리모트로 추가하고 연결을 테스트하세요.
4. Liara 버킷에 반복 백업을 예약하기 전에 드라이 런 동기화를 실행하세요.

Liara가 연결되면, 여러분의 오브젝트 스토리지는 관리 중인 다른 모든 클라우드 바로 옆에 자리하게 됩니다 — 하나의 탐색기, 하나의 동기화 작업 세트, 별도의 클라이언트는 필요 없습니다.

---

**관련 가이드:**

- [RcloneView로 Petabox 스토리지 관리하기 — 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-petabox-cloud-sync-backup-rcloneview)
- [RcloneView로 Scaleway 오브젝트 스토리지 관리하기 — 동기화 및 백업](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [RcloneView로 Wasabi 스토리지 관리하기 — 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

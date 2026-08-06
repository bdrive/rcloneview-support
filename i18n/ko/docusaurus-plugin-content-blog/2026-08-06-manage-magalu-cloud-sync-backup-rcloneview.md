---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Magalu 클라우드 스토리지 관리하기 — RcloneView로 동기화 및 백업하기"
authors:
  - robin
description: "Magalu Cloud의 S3 호환 오브젝트 스토리지를 RcloneView에 연결하여 드래그 앤 드롭 탐색, 예약된 백업, 클라우드 간 동기화를 이용하세요."
keywords:
  - Magalu 클라우드 스토리지
  - Magalu S3
  - RcloneView Magalu
  - Magalu 파일 관리
  - Magalu 클라우드 백업
  - Magalu 동기화
  - S3 호환 스토리지 GUI
  - 브라질 클라우드 스토리지
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Magalu 클라우드 스토리지 관리하기 — RcloneView로 동기화 및 백업하기

> Magalu Cloud의 S3 호환 오브젝트 스토리지를 다른 모든 클라우드에 사용하는 것과 동일한 창에서 탐색, 동기화, 백업하세요.

Magalu Cloud는 S3 호환 오브젝트 스토리지 서비스이며, 대부분의 S3 호환 제공업체와 마찬가지로 전용 데스크톱 파일 관리자 없이 제공됩니다 — 파일을 옮기기 위해 `curl` 호출을 스크립팅하거나 CLI를 직접 구성해야 합니다. RcloneView는 Magalu 버킷을 다른 리모트와 정확히 동일하게 취급하여 이 공백을 메웁니다: 전체 파일 탐색, 드래그 앤 드롭 전송, 예약된 동기화 작업까지, 터미널이 필요 없습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Magalu 버킷 연결하기

Magalu Cloud는 S3 프로토콜을 사용하므로, Amazon S3나 Backblaze B2를 추가할 때와 동일한 방식으로 RcloneView에 추가할 수 있습니다: 새 리모트를 생성하고, S3 호환 제공업체 옵션을 선택한 다음, 계정 지역에 맞는 Access Key, Secret Key, Magalu 엔드포인트 URL을 입력하세요. 저장이 완료되면 버킷은 탐색기(Explorer) 패널의 일반 탭으로 표시되어, 곧바로 탐색하고 전송할 준비가 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Magalu 클라우드 S3 호환 리모트 추가하기" class="img-large img-center" />

S3, Azure, Backblaze B2를 FREE 라이선스에서 전체 읽기/쓰기로 연결할 수 있으므로, Magalu도 유료 결제의 장벽 없이 기존 클라우드 목록에 합류할 수 있습니다.

## Magalu 스토리지 탐색 및 정리하기

연결되면 Magalu 버킷은 탐색기에서 일반 로컬 폴더처럼 동작합니다. 이름, 유형, 수정된 날짜, 크기로 정렬하고, 버킷이 이미지로 가득할 때는 썸네일 보기로 전환하며, 폴더를 다른 곳으로 아카이브할지 결정하기 전에 크기 가져오기(Get Size)를 사용해 폴더가 차지하는 공간을 확인하세요. Ctrl+클릭 또는 Shift+클릭으로 여러 항목을 선택하면 스크립트를 작성할 필요 없이 대량 다운로드 및 삭제를 처리할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView에서 Magalu 클라우드 버킷 내용 탐색하기" class="img-large img-center" />

## Magalu와의 백업 주고받기

정기적인 백업을 위해 Magalu를 소스 또는 대상으로 하는 동기화 작업을 설정하세요. 4단계 마법사는 동시 전송 수, 파일을 타임스탬프만이 아니라 해시와 크기로 비교하는 체크섬 검증, 그리고 보관하고 싶지 않은 파일 유형을 제외하는 필터링 규칙을 다룹니다. 실제 운영 데이터가 있는 버킷을 대상으로 동기화 작업을 실행하기 전에, 정확히 무엇이 복사되거나 삭제될지 미리 확인하려면 먼저 드라이 런(Dry Run)을 실행하는 것이 좋습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 Magalu 클라우드 백업 작업 예약하기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 새 리모트를 생성하고 S3 호환 제공업체 유형을 선택하세요.
3. Magalu의 Access Key, Secret Key, 엔드포인트 URL을 입력하세요.
4. Magalu와 다른 클라우드 리모트 간에 파일을 이동시킬 동기화 또는 복사 작업을 설정하세요.

Magalu가 RcloneView에 연결되면, 오브젝트 스토리지 관리는 더 이상 스크립팅 작업이 아니라 일반적인 파일 워크플로우의 일부가 됩니다.

---

**관련 가이드:**

- [Scaleway 오브젝트 스토리지 관리하기 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [IONOS 오브젝트 스토리지 관리하기 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Leviia 오브젝트 스토리지 관리하기 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-leviia-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

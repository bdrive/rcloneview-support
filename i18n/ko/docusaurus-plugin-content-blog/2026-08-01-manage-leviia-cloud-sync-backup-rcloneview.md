---
slug: manage-leviia-cloud-sync-backup-rcloneview
title: "Leviia 오브젝트 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - casey
description: "Leviia의 S3 호환 오브젝트 스토리지를 RcloneView에 연결하여 드래그 앤 드롭 파일 관리, 예약 백업, 클라우드 간 동기화를 이용하세요."
keywords:
  - Leviia 오브젝트 스토리지
  - Leviia S3
  - RcloneView Leviia
  - Leviia 파일 관리
  - Leviia 클라우드 백업
  - Leviia 동기화
  - S3 호환 스토리지 GUI
  - 유럽 오브젝트 스토리지
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

# Leviia 오브젝트 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기

> 다른 모든 클라우드에 사용하는 것과 동일한 창에서 Leviia의 S3 호환 오브젝트 스토리지를 탐색하고, 동기화하고, 백업하세요.

Leviia는 유럽에서 호스팅되는 S3 호환 오브젝트 스토리지를 제공하며, 이미 S3와 잘 맞는 도구 생태계를 포기하지 않으면서도 데이터 상주 보장을 원하는 팀에게 흔한 선택지입니다. 단점은 S3 호환 제공업체가 자체적으로 완성도 높은 데스크톱 클라이언트를 제공하는 경우가 드물어, 사용자가 업로드를 스크립트로 작성하거나 순수 CLI를 다뤄야 한다는 점입니다. RcloneView는 Leviia를 다른 리모트와 똑같이 취급하여 이 불편함을 없애줍니다 — 완전한 파일 탐색, 드래그 앤 드롭 전송, 예약 동기화 작업까지, 명령어 없이 가능합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Leviia 버킷 연결하기

Leviia는 S3 프로토콜을 사용하므로, Amazon S3나 Wasabi를 추가할 때와 같은 방식으로 RcloneView에 추가할 수 있습니다. 새 리모트를 만들고, S3 호환 제공업체 옵션을 선택한 뒤, 계정 지역에 맞는 Access Key, Secret Key, Leviia 엔드포인트 URL을 입력하면 됩니다. 저장하고 나면 버킷이 Explorer 패널에 일반 탭으로 표시되어 바로 탐색하고 전송할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Leviia object storage remote in RcloneView" class="img-large img-center" />

RcloneView는 한 창에서 90개 이상의 제공업체를 마운트하고 동기화하며 Windows, macOS, Linux에서 모두 동작하므로, Leviia 버킷도 도구를 바꾸지 않고 관리하는 다른 모든 클라우드 계정과 나란히 놓입니다.

## Leviia 스토리지 탐색 및 정리하기

연결하고 나면 Leviia 버킷은 Explorer에서 로컬 폴더와 똑같이 동작합니다. 이름, 유형, 수정 날짜, 크기별로 정렬하고, 이미지가 가득한 버킷은 썸네일 보기로 전환하며, Get Size를 사용해 특정 폴더가 어느 정도 용량을 차지하는지 확인한 뒤 다른 곳으로 보관할지 결정할 수 있습니다. Ctrl+Click 또는 Shift+Click을 사용한 다중 선택으로 스크립트 반복문 없이 대량 다운로드와 삭제를 처리합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing Leviia bucket contents in RcloneView" class="img-large img-center" />

## Leviia로 백업하고 Leviia에서 백업하기

반복적인 백업을 위해서는 Leviia를 소스나 대상으로 하는 동기화 작업을 설정하세요. 4단계 마법사는 동시 전송 수, 타임스탬프뿐 아니라 해시와 크기로 파일을 비교하는 체크섬 검증, 보관하고 싶지 않은 파일 유형을 제외하는 필터링 규칙을 다룹니다. 프로덕션 데이터가 있는 버킷을 대상으로 동기화 작업을 실행하기 전에는 Dry Run을 먼저 실행하여 무엇이 복사되거나 삭제될지 미리 확인하는 것이 좋습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Leviia backup job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 새 리모트를 만들고 S3 호환 제공업체 유형을 선택합니다.
3. Leviia의 Access Key, Secret Key, 엔드포인트 URL을 입력합니다.
4. Leviia와 다른 클라우드 리모트 사이에 파일을 이동할 Sync 또는 Copy 작업을 설정합니다.

Leviia가 RcloneView에 연결되고 나면, 오브젝트 스토리지 관리는 더 이상 스크립트 작성이 필요한 일이 아니라 일상적인 파일 작업의 일부가 됩니다.

---

**관련 가이드:**

- [RcloneView로 Ceph 오브젝트 스토리지 관리하기 — Ceph 클러스터를 위한 S3 호환 GUI](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Scaleway 오브젝트 스토리지 관리하기 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [IONOS 오브젝트 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />

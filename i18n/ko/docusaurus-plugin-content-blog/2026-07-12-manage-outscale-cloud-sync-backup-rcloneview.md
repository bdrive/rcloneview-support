---
slug: manage-outscale-cloud-sync-backup-rcloneview
title: "Outscale 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - morgan
description: "S3 호환 파일 탐색, 동기화, 백업을 위해 Outscale Object Storage를 RcloneView에 연결하세요. Windows, macOS, Linux에서 사용 가능합니다."
keywords:
  - Outscale storage
  - Outscale Object Storage
  - S3-compatible storage GUI
  - RcloneView Outscale
  - cloud backup software
  - sync Outscale to cloud
  - manage cloud storage GUI
  - object storage sync tool
  - multi-cloud file manager
  - S3 credentials setup
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Outscale 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> 명령줄에서 원시 S3 자격 증명을 다루는 대신, 그래픽 인터페이스로 Outscale Object Storage 버킷을 탐색, 동기화, 백업하세요.

Outscale Object Storage는 rclone의 S3 호환 프로토콜을 통해 액세스하며, 설정에는 Access Key, Secret Key, 엔드포인트가 필요합니다. 이런 값들은 설정 파일에서 오타가 나기 쉽습니다. RcloneView는 이 설정 과정을 가이드형 입력 폼으로 감싸고, 그 위에 완전한 파일 탐색기, 동기화 엔진, 작업 스케줄러를 더해줍니다. 이미 Outscale에 데이터를 저장하고 있는 팀도 다른 모든 리모트와 동일한 방식으로 관리할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Outscale을 S3 호환 리모트로 연결하기

RcloneView에서 Outscale을 추가하는 과정은 다른 S3 호환 서비스와 동일한 자격 증명 입력 흐름을 따릅니다. Remote 탭 > New Remote를 열고, S3 호환 유형을 선택한 다음, Access Key ID, Secret Access Key, Outscale 엔드포인트를 입력하세요. Connect Manager를 사용하면 이미 서버의 공유 rclone 데몬을 통해 Outscale 연동을 운영 중인 경우 RcloneView를 외부 rclone 인스턴스에 연결할 수도 있습니다.

리모트가 저장되면 Explorer 패널에 이미 설정된 다른 클라우드나 로컬 스토리지와 나란히 별도의 탭으로 표시됩니다. Alias 리모트로 연결 이름을 변경하면 깊이 중첩된 버킷 경로를 매일 탐색하기 쉬운 이름으로 줄일 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an Outscale S3-compatible remote in RcloneView" class="img-large img-center" />

## Outscale 데이터 탐색, 동기화, 백업하기

리모트가 연결되면 File Explorer는 Outscale에 있는 항목을 로컬 폴더나 다른 클라우드 리모트와 비교할 수 있는 듀얼 패널 뷰를 제공합니다. 서로 다른 두 리모트 사이에서 드래그 앤 드롭을 하면 복사가 실행되며, 우클릭 메뉴에서는 이름 변경, 삭제, 크기 확인, 다운로드/업로드 등 일상적인 파일 작업을 처리할 수 있습니다.

반복적인 백업을 위해 Sync 마법사는 4단계에 걸쳐 소스와 대상, 전송 동시성, 필터링 규칙을 설정할 수 있으며, 최대 파일 age나 미디어·문서 유형에 대한 사전 정의된 필터 같은 옵션도 포함되어 있습니다. Outscale과 같은 S3 호환 서비스는 FREE 라이선스에서도 읽기/쓰기 전체 권한으로 연결할 수 있습니다. 버킷에 데이터를 다시 쓰기 위해 업그레이드할 필요가 없습니다. 1:N 동기화를 사용하면 동일한 Outscale 버킷을 하나의 작업으로 여러 대상에 미러링할 수 있어, 백업을 로컬 드라이브와 두 번째 클라우드 리모트에 동시에 저장해야 할 때 유용합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Outscale storage and another remote" class="img-large img-center" />

## Outscale 반복 백업 자동화하기

Job Manager는 생성한 모든 동기화, 복사, 이동 작업을 하나의 목록에 유지하며, 각 실행 기록은 상태, 전송 크기, 파일 수와 함께 Job History에 기록됩니다. Dry Run을 사용하면 실제 전송을 진행하기 전에 어떤 파일이 복사되거나 삭제될지 미리 확인할 수 있습니다. 새로운 Outscale 버킷으로의 대규모 첫 동기화 전에 유용한 안전 점검입니다.

PLUS 라이선스 사용자는 작업에 crontab 형식의 스케줄을 연결하여 Outscale 백업이 정해진 주기로 자동 실행되도록 설정할 수 있으며, 저장 전에 향후 실행 시간을 미리 확인할 수 있는 시뮬레이션 옵션도 제공됩니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Outscale storage" class="img-large img-center" />

## Outscale을 로컬 드라이브로 마운트하기

Outscale 스토리지는 가상 드라이브로도 마운트할 수 있어, 다른 데스크톱 애플리케이션이 버킷 콘텐츠를 로컬 파일처럼 읽고 쓸 수 있습니다. 마운트 설정에는 VFS 캐시 모드(기본값: writes), 캐시 크기 제한, 읽기 전용 모드가 포함되며, 마운트는 리모트 패널 툴바나 전용 Mount Manager에서 바로 시작할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting an Outscale bucket as a local drive in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭 > New Remote를 열고 S3 호환 옵션을 선택하여 Outscale 자격 증명과 엔드포인트를 입력합니다.
3. Folder Compare나 드래그 앤 드롭을 사용해 기존 데이터를 Outscale로 이동한 다음, 지속적인 백업을 위한 Sync 작업을 설정하세요.
4. 작업을 Job Manager에 추가하고, PLUS에서는 스케줄을 연결해 수동 개입 없이 백업이 실행되도록 하세요.

리모트가 설정되면 Outscale 스토리지는 RcloneView의 다른 연결과 동일하게 동작합니다. 탐색 가능하고, 동기화 가능하며, 예약된 일정에 따라 백업할 준비가 됩니다.

---

**관련 가이드:**

- [Wasabi 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Scaleway Object Storage 관리 — RcloneView로 클라우드 동기화](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Hetzner Object Storage 관리 — RcloneView로 클라우드 동기화](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />

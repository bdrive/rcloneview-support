---
slug: manage-selectel-cloud-sync-backup-rcloneview
title: "Selectel 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - alex
description: "RcloneView에 Selectel Object Storage를 연결하여 Windows, macOS, Linux에서 S3 호환 파일 탐색, 동기화, 마운트, 백업을 수행하세요."
keywords:
  - Selectel 스토리지
  - Selectel Object Storage
  - S3 호환 스토리지 GUI
  - RcloneView Selectel
  - 클라우드 백업 소프트웨어
  - Selectel 클라우드 동기화
  - 클라우드 스토리지 GUI 관리
  - 오브젝트 스토리지 동기화 도구
  - 멀티 클라우드 파일 관리자
  - S3 자격 증명 설정
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

# Selectel 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> 설정 파일에 S3 자격 증명을 직접 입력하는 대신, 그래픽 인터페이스에서 Selectel Object Storage 버킷을 탐색, 동기화, 백업하세요.

Selectel Object Storage는 rclone의 S3 호환 프로토콜을 통해 접근하므로, 연결하려면 Access Key, Secret Key, 엔드포인트를 처음부터 정확히 입력해야 합니다. RcloneView는 이 설정 과정을 안내형 입력 폼으로 바꾸고, 파일 탐색기, 동기화 엔진, 작업 스케줄러까지 함께 제공하므로, Selectel에 데이터를 저장하는 팀도 다른 모든 리모트를 관리하는 것과 동일한 방식으로 관리할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Selectel을 S3 호환 리모트로 연결하기

RcloneView에서 Selectel을 추가하는 과정은 다른 S3 호환 서비스에 사용하는 자격 증명 입력 흐름과 동일합니다: Remote 탭 > New Remote를 열고 S3 호환 옵션을 선택한 뒤 Access Key ID, Secret Access Key, Selectel 엔드포인트를 입력합니다. Selectel 연동이 이미 서버의 공유 rclone 데몬을 통해 이루어지고 있다면, Connect Manager를 사용해 임베디드 rclone 대신 외부 rclone 인스턴스를 가리키도록 RcloneView를 설정할 수도 있습니다.

저장이 완료되면 해당 리모트는 이미 구성된 다른 클라우드나 로컬 스토리지 옆에 자체 탭으로 표시됩니다. Alias 리모트를 사용하면 깊이 중첩된 버킷 경로를 일상적인 탐색이 더 쉬운 짧은 이름으로 줄일 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Selectel S3-compatible remote in RcloneView" class="img-large img-center" />

## Selectel 데이터 탐색, 동기화, 백업하기

리모트가 연결되면 File Explorer의 듀얼 패널 레이아웃을 통해 Selectel에 있는 내용을 로컬 폴더나 다른 클라우드 리모트와 나란히 비교할 수 있습니다. 서로 다른 리모트 사이로 파일을 드래그하면 복사가 실행되며, 우클릭 메뉴에서는 이름 변경, 삭제, 크기 확인, 다운로드/업로드 등 일상적인 파일 관리 기능을 제공합니다.

반복적인 백업의 경우, Sync 마법사가 소스와 대상, 전송 동시성, 필터링 규칙을 네 단계에 걸쳐 안내하며, 미디어나 문서 유형을 위한 사전 정의 필터와 최대 파일 나이 같은 옵션도 제공합니다. Selectel과 같은 S3 호환 서비스를 FREE 라이선스에서 완전한 읽기/쓰기 액세스로 연결할 수 있습니다 — 버킷에 데이터를 다시 쓰기 위해 업그레이드가 필요하지 않습니다. 1:N 동기화를 사용하면 동일한 Selectel 버킷을 하나의 작업으로 여러 대상에 미러링할 수 있어, 백업이 로컬 드라이브와 두 번째 클라우드 리모트 모두에 저장되어야 할 때 유용합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Selectel storage and another remote" class="img-large img-center" />

## Selectel 정기 백업 자동화하기

Job Manager는 모든 동기화, 복사, 이동 작업을 하나의 목록으로 관리하며, 각 실행은 상태, 전송 크기, 파일 수와 함께 Job History에 기록됩니다. Dry Run은 실제 전송이 실행되기 전에 어떤 파일이 복사되거나 삭제될지 정확히 미리 보여주며, 새 Selectel 버킷으로 처음 대규모 동기화를 하기 전에 확인해볼 가치가 있습니다.

PLUS 라이선스 사용자는 작업에 crontab 방식의 일정을 연결하여 Selectel 백업이 반복적인 주기로 자동 실행되도록 할 수 있으며, 일정을 저장하기 전에 다가오는 실행 시간을 미리 확인할 수 있는 시뮬레이션 옵션도 제공됩니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Selectel storage" class="img-large img-center" />

## Selectel을 로컬 드라이브로 마운트하기

Selectel 스토리지는 가상 드라이브로도 마운트할 수 있어, 다른 데스크톱 애플리케이션이 버킷 내용을 로컬 파일처럼 읽고 쓸 수 있습니다. 마운트 구성에는 VFS 캐시 모드(기본값: writes), 캐시 크기 제한, 읽기 전용 모드가 포함되며, 마운트는 리모트의 패널 툴바나 전용 Mount Manager에서 시작할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Selectel bucket as a local drive in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Remote 탭 > New Remote를 열고 S3 호환 옵션을 선택하여 Selectel 자격 증명과 엔드포인트를 입력합니다.
3. Folder Compare나 드래그 앤 드롭을 사용해 기존 데이터를 Selectel로 옮긴 뒤, 지속적인 백업을 위한 Sync 작업을 설정합니다.
4. 작업을 Job Manager에 추가하고, PLUS에서는 수동 개입 없이 백업이 실행되도록 일정을 연결합니다.

리모트가 구성되면 Selectel 스토리지는 RcloneView의 다른 연결과 마찬가지로 동작합니다 — 탐색 가능하고, 동기화 가능하며, 마운트 가능하고, 일정에 따라 백업할 준비가 됩니다.

---

**관련 가이드:**

- [IONOS Object Storage 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Vultr Object Storage 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-vultr-object-storage-cloud-sync-backup-rcloneview)
- [Linode Object Storage 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

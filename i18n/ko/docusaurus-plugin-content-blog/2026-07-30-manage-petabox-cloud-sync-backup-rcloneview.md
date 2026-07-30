---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Petabox 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - steve
description: "S3 호환 오브젝트 스토리지인 Petabox를 RcloneView에 연결하여 크로스 플랫폼 파일 탐색, 동기화, 자동 백업을 이용하세요."
keywords:
  - Petabox 스토리지
  - Petabox 오브젝트 스토리지
  - S3 호환 스토리지 GUI
  - RcloneView Petabox
  - 클라우드 백업 소프트웨어
  - Petabox를 클라우드로 동기화
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

# Petabox 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> 설정 파일에서 S3 자격 증명을 직접 편집하는 대신, 그래픽 인터페이스에서 Petabox 오브젝트 스토리지 버킷을 탐색·동기화·백업하세요.

Petabox는 rclone의 S3 호환 프로토콜을 통해 연결되므로, 연결하려면 Access Key, Secret Key, 엔드포인트 URL을 입력해야 합니다 — 명령줄에서는 잘못 입력하기 쉬운 종류의 설정입니다. RcloneView는 이 과정을 안내형 폼으로 바꾸고, 완전한 듀얼 패널 파일 탐색기, 동기화 엔진, 작업 스케줄러와 함께 제공하므로, 이미 Petabox에 데이터를 저장하고 있는 팀이 다른 모든 리모트와 함께 하나의 창에서 이를 관리할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## S3 호환 리모트로 Petabox 연결하기

RcloneView에서 Petabox를 추가하는 방법은 다른 S3 호환 서비스와 동일한 자격 증명 입력 흐름을 사용합니다: Remote 탭 > New Remote를 열고 S3 호환 유형을 선택한 다음 Access Key ID, Secret Access Key, Petabox 엔드포인트를 입력하세요. 만약 Petabox 연동이 이미 서버의 공유 rclone 데몬을 통해 실행 중이라면, Connect Manager를 사용해 내장 rclone 대신 해당 외부 rclone 인스턴스를 가리키게 할 수 있습니다.

저장이 완료되면 해당 리모트는 이미 구성된 다른 클라우드나 로컬 스토리지 옆에 자체 탭으로 Explorer 패널에 나타납니다. Alias 리모트를 사용하면 깊이 중첩된 버킷 경로를 매일 탐색하기 쉬운 짧은 이름으로 줄일 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

## Petabox 데이터 탐색, 동기화, 백업하기

리모트가 연결되면 File Explorer의 듀얼 패널 레이아웃 덕분에 Petabox에 이미 있는 것을 로컬 폴더나 다른 클라우드 리모트와 간단히 비교할 수 있습니다. 서로 다른 리모트 간에 드래그 앤 드롭하면 복사가 실행되며, 우클릭 메뉴에는 일반적인 파일 작업을 위한 이름 변경, 삭제, 크기 확인, 다운로드/업로드가 포함되어 있습니다.

반복적인 백업의 경우, 4단계 Sync 마법사가 소스와 대상, 전송 동시성, 최대 파일 나이 및 미디어나 문서 유형에 대한 미리 정의된 필터 같은 필터링 규칙을 처리합니다. Petabox 같은 S3 호환 서비스를 FREE 라이선스에서도 완전한 읽기/쓰기 액세스로 연결할 수 있습니다 — 버킷에 데이터를 다시 쓰기 위해 라이선스를 업그레이드할 필요가 없습니다. 1:N 동기화는 동일한 Petabox 버킷을 하나의 작업에서 여러 대상에 미러링할 수 있어, 백업이 로컬 드라이브와 두 번째 클라우드 제공업체 모두에 있어야 할 때 유용합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Petabox storage and another remote" class="img-large img-center" />

## 반복되는 Petabox 백업 자동화하기

Job Manager는 모든 동기화, 복사, 이동 작업을 하나의 목록에 보관하며, 각 실행은 상태, 전송 크기, 파일 수와 함께 Job History에 기록됩니다. Dry Run은 실제 전송을 실행하기 전에 어떤 파일이 복사되거나 삭제될지 정확히 미리 보여줍니다 — 새로운 Petabox 버킷에 대규모 첫 동기화를 하기 전에 확인할 가치가 있습니다.

PLUS 라이선스 사용자는 작업에 crontab 방식의 일정을 연결하여 Petabox 백업이 반복 주기로 자동 실행되도록 할 수 있으며, 저장하기 전에 다가오는 실행 시간을 미리 볼 수 있는 시뮬레이션 옵션도 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Petabox storage" class="img-large img-center" />

## Petabox를 로컬 드라이브로 마운트하기

Petabox 스토리지는 가상 드라이브로도 마운트할 수 있어, 다른 데스크톱 애플리케이션이 버킷 콘텐츠를 로컬 파일처럼 읽고 쓸 수 있게 합니다. 마운트 구성에는 VFS 캐시 모드(기본값: writes), 캐시 크기 제한, 읽기 전용 모드가 포함되며, 마운트는 리모트의 패널 툴바나 전용 Mount Manager 어디에서든 시작할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Petabox bucket as a local drive in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭 > New Remote를 열고 S3 호환 옵션을 선택하여 Petabox 자격 증명과 엔드포인트를 입력하세요.
3. Folder Compare나 드래그 앤 드롭을 사용해 기존 데이터를 Petabox로 옮긴 다음, 지속적인 백업을 위한 Sync 작업을 설정하세요.
4. 작업을 Job Manager에 추가하고, PLUS에서는 일정을 연결하여 수동 개입 없이 백업이 실행되도록 하세요.

리모트가 구성되면 Petabox 스토리지는 RcloneView의 다른 연결과 마찬가지로 동작합니다 — 탐색 가능하고, 동기화 가능하며, 일정에 따라 백업할 준비가 됩니다.

---

**관련 가이드:**

- [Outscale 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-outscale-cloud-sync-backup-rcloneview)
- [Scaleway 오브젝트 스토리지 관리 — RcloneView로 클라우드 동기화하기](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Selectel 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

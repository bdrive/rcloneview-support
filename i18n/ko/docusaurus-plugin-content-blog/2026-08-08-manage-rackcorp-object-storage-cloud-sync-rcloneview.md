---
slug: manage-rackcorp-object-storage-cloud-sync-rcloneview
title: "RackCorp 오브젝트 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - tayson
description: "RackCorp의 S3 호환 오브젝트 스토리지를 RcloneView에 연결하여 드래그 앤 드롭 파일 탐색, 예약 동기화, 크로스 클라우드 백업을 이용하세요."
keywords:
  - RackCorp 오브젝트 스토리지
  - RackCorp S3
  - RcloneView RackCorp
  - RackCorp 파일 관리
  - RackCorp 클라우드 백업
  - RackCorp 동기화
  - S3 호환 스토리지 GUI
  - 오브젝트 스토리지 GUI 클라이언트
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

# RackCorp 오브젝트 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> 다른 모든 클라우드에서 사용하는 것과 동일한 드래그 앤 드롭 방식으로 RackCorp 오브젝트 스토리지 버킷을 탐색, 동기화, 백업하세요.

RackCorp의 S3 호환 오브젝트 스토리지는 팀에게 대형 하이퍼스케일러의 지역적 대안을 제공하지만, 버킷을 관리하려면 보통 별도의 CLI 도구나 브라우저 콘솔 탭을 오가야 합니다. RcloneView는 rclone의 S3 프로토콜을 통해 RackCorp에 연결하고, 이미 관리 중인 Google Drive, OneDrive 등 다른 리모트와 동일한 탐색기 창에 버킷을 표시합니다. 마운트만 지원하는 도구와 달리, RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교 기능을 함께 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RackCorp을 RcloneView에 연결하기

RackCorp 오브젝트 스토리지는 다른 S3 호환 제공업체와 동일한 방식으로 추가합니다: Remote 탭 > New Remote를 열고 S3 호환 옵션을 선택한 뒤 Access Key ID, Secret Access Key, RackCorp 엔드포인트 URL을 입력합니다. RcloneView는 이 자격 증명을 그대로 rclone 설정에 전달하므로 별도의 드라이버나 플러그인을 설치할 필요가 없습니다 — 임베디드 rclone 바이너리가 프로토콜 협상을 처리합니다.

리모트가 생성되면 Explorer 패널에 새 탭으로 표시됩니다. 상세한 메타데이터가 필요하면 List View로 버킷을 탐색하고, 이미지를 저장 중이며 빠르게 시각적으로 훑어보고 싶다면 Thumbnail View로 전환할 수 있습니다. 왼쪽의 폴더 트리를 사용하면 경로를 다시 입력하지 않고도 프리픽스 간을 이동할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 RackCorp 오브젝트 스토리지용 새 S3 호환 리모트를 추가하는 모습" class="img-large img-center" />

파일 목록에서 객체를 우클릭하면 Copy, Cut, Rename, Get Size, Get Public Link에 접근할 수 있습니다 — 로컬 파일에 사용하는 것과 동일한 컨텍스트 메뉴가 RackCorp 버킷에도 그대로 적용됩니다.

## RackCorp을 다른 클라우드와 동기화하기

오브젝트 스토리지는 단독으로 사용되는 경우가 드뭅니다. 일반적인 패턴은 매일 편집용 작업 사본을 Google Drive나 OneDrive에 두고, 완성된 자산은 더 저렴하고 장기적인 보관을 위해 RackCorp에 아카이브하는 것입니다. RcloneView의 4단계 Sync 마법사는 터미널을 사용하지 않고도 이를 처리합니다: RackCorp을 소스 또는 대상으로 선택하고, 임시 파일이나 과도하게 큰 자산을 제외하는 필터를 설정한 뒤, 아카이브가 새 자료만 받도록 단방향 동기화를 선택합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 RackCorp과 다른 리모트 간의 클라우드 간 동기화 작업을 구성하는 모습" class="img-large img-center" />

전체 전송을 실행하기 전에 Dry Run을 실행하여 어떤 파일이 복사되거나 삭제될지 정확히 미리 확인하세요. 대용량 버킷을 실수로 다시 업로드하면 대역폭과 시간을 낭비할 수 있는 오브젝트 스토리지에서는 특히 유용합니다.

## 예약 작업으로 백업 자동화하기

PLUS 라이선스를 사용하는 팀의 경우, RackCorp 동기화 작업을 매번 수동으로 실행하는 대신 crontab 방식의 일정에 따라 실행할 수 있습니다. 분, 시, 요일 필드를 한 번만 설정하면 RcloneView가 백그라운드에서 RackCorp 버킷을 최신 상태로 유지합니다 — 이후 Job History 탭에서 각 실행의 상태, 전송 속도, 파일 수를 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 RackCorp 오브젝트 스토리지용 예약 동기화 작업을 설정하는 모습" class="img-large img-center" />

속도보다 데이터 무결성이 중요하다면 Advanced Settings 단계에서 체크섬 검증을 활성화하세요 — RcloneView는 크기와 타임스탬프뿐만 아니라 파일 해시를 비교하여 전송 중 발생하는 조용한 손상까지 잡아냅니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Remote 탭 > New Remote로 이동해 RackCorp용 S3 호환 옵션을 선택합니다.
3. Access Key ID, Secret Access Key, RackCorp 엔드포인트를 입력하여 연결합니다.
4. 동기화 또는 백업 작업을 설정하여 RackCorp을 다른 클라우드 리모트와 동기화된 상태로 유지합니다.

연결이 완료되면 RackCorp은 RcloneView 작업 공간의 다른 탭과 동일하게 동작합니다 — 별도의 콘솔도, 외워야 할 CLI 플래그도 필요 없습니다.

---

**관련 가이드:**

- [Scaleway 오브젝트 스토리지 관리 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Selectel 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [VFS 캐시 — RcloneView에서 더 빠른 클라우드 마운트 성능](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />

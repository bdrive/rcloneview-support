---
slug: manage-seaweedfs-cloud-sync-backup-rcloneview
title: "SeaweedFS 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - alex
description: "자체 호스팅 SeaweedFS 오브젝트 스토리지를 RcloneView에 연결하여 CLI 없이 크로스 플랫폼 마운트, 동기화, 백업을 수행하세요."
keywords:
  - SeaweedFS RcloneView
  - SeaweedFS S3 호환 스토리지
  - 자체 호스팅 오브젝트 스토리지 GUI
  - SeaweedFS 마운트
  - SeaweedFS 백업
  - SeaweedFS 동기화
  - 분산 오브젝트 스토리지
  - SeaweedFS S3 게이트웨이
  - SeaweedFS 스토리지 관리
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - self-hosted
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SeaweedFS 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기

> 터미널을 건드리지 않고도 자체 호스팅 SeaweedFS 클러스터를 마운트 가능한 드라이브이자 최상급 동기화 대상으로 바꿔보세요.

SeaweedFS는 S3 호환 게이트웨이를 제공하는 빠른 분산 스토리지 시스템으로, 퍼블릭 클라우드 비용 대신 자체 하드웨어에 오브젝트 스토리지를 두고 싶은 팀들에게 인기 있는 선택지입니다. 문제는 대부분의 SeaweedFS 배포가 전적으로 설정 파일과 CLI 명령으로만 관리된다는 점입니다. RcloneView는 SeaweedFS 게이트웨이를 다른 S3 호환 리모트와 동일하게 취급함으로써 이 간극을 메워, 기존 클러스터 위에 시각적 파일 브라우저, 드래그 앤 드롭 전송, 예약 백업 기능을 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SeaweedFS를 S3 호환 리모트로 연결하기

SeaweedFS의 S3 게이트웨이는 Amazon S3와 동일한 프로토콜을 사용하므로, RcloneView는 다른 S3 호환 제공업체에 연결할 때와 같은 방식으로 연결합니다: 액세스 키 ID, 시크릿 액세스 키, 그리고 게이트웨이 주소와 포트를 가리키는 사용자 지정 엔드포인트입니다. Remote 탭 > New Remote를 열고 S3 호환 옵션을 선택한 뒤 클러스터 게이트웨이 URL을 엔드포인트로 입력하세요. RcloneView는 로컬 RC API를 통해 통신하는 내장 rclone 인스턴스와 함께 제공되므로, 별도의 바이너리나 손으로 편집해야 하는 설정 파일이 필요 없습니다 — UI에 입력하는 자격 증명이 필요한 설정의 전부입니다.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new S3-compatible remote for a self-hosted SeaweedFS gateway in RcloneView" class="img-large img-center" />

이 워크플로는 SeaweedFS 클러스터가 홈 서버에서 실행되든, 코로케이션 랙에서 실행되든, 직접 관리하는 클라우드 VM에서 실행되든 동일하게 적용됩니다 — RcloneView는 게이트웨이가 S3 API 호출에 응답하기만 하면 됩니다.

## SeaweedFS와 다른 클라우드 간 데이터 동기화 및 백업하기

일단 연결되면 SeaweedFS는 RcloneView Explorer의 다른 패널과 똑같이 동작하므로, 같은 창 안에서 Google Drive, OneDrive, Backblaze B2, 또는 로컬 디스크와 파일을 드래그하여 주고받을 수 있습니다. 지속적인 보호를 위해 4단계 Sync 마법사를 사용하면 SeaweedFS 버킷에서 두 번째 리모트로 향하는 단방향 작업을 구성하고, 임시 파일을 제외할 필터를 추가하며, 실제로 무엇이 복사되거나 삭제될지 미리 보기 위해 먼저 Dry Run을 실행할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing files between a SeaweedFS bucket and another cloud remote in RcloneView" class="img-large img-center" />

마운트 전용 도구와 달리, RcloneView는 FREE 라이선스에서도 SeaweedFS와 다른 지원 제공업체 간의 동기화와 폴더 비교를 함께 수행합니다.

## SeaweedFS를 로컬 드라이브로 마운트하기

네이티브 애플리케이션이 파일을 직접 읽고 쓰는 워크플로가 필요하다면, Mount Manager를 통해 SeaweedFS 버킷을 Windows, macOS, Linux에서 로컬 드라이브로 연결할 수 있습니다. 응답성과 안전성의 균형을 위해서는 VFS 캐시 모드를 "writes"로 설정하고, 최근 사용한 파일에 오프라인으로 접근해야 한다면 "full"로 설정하세요.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a SeaweedFS remote as a local drive from Mount Manager" class="img-large img-center" />

## 전송 및 작업 기록 모니터링하기

SeaweedFS 리모트에 대한 모든 동기화 또는 복사 작업은 실시간 진행률, 속도, 파일 수와 함께 Transferring 탭에 표시되며, 완료된 각 실행은 기간, 총 용량, 상태와 함께 Job History에 기록됩니다. 이 기록 덕분에 예약된 백업이 실제로 실행되었는지 필요할 때 바로 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed sync runs against a SeaweedFS remote" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. SeaweedFS 게이트웨이의 액세스 키, 시크릿 키, 엔드포인트 URL을 준비합니다.
3. RcloneView에서 새 S3 호환 리모트를 만들고 연결을 테스트합니다.
4. 동기화 작업이나 마운트를 설정해 SeaweedFS와 다른 리모트 간 데이터 이동을 시작합니다.

자체 호스팅 스토리지가 명령줄 전용일 필요는 없습니다 — 제대로 된 GUI만 있으면 SeaweedFS도 상용 클라우드만큼 다루기 쉬워집니다.

---

**관련 가이드:**

- [MinIO 자체 호스팅 스토리지 관리하기 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [RcloneView로 S3, Wasabi, R2를 하나로 통합하기](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [RcloneView의 VFS 캐시와 마운트 성능](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />

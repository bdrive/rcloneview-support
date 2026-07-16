---
slug: manage-idrive-e2-cloud-sync-backup-rcloneview
title: "IDrive E2 스토리지 관리 — RcloneView로 파일 동기화 및 백업"
authors:
  - tayson
description: "IDrive E2를 RcloneView에 연결하고 GUI로 S3 호환 버킷을 관리하세요. IDrive E2를 Google Drive, Amazon S3 및 기타 클라우드와 손쉽게 동기화할 수 있습니다."
keywords:
  - IDrive E2
  - IDrive E2 sync
  - IDrive E2 backup
  - IDrive E2 RcloneView
  - IDrive E2 S3 compatible
  - IDrive E2 cloud management
  - IDrive E2 to S3
  - IDrive E2 to Google Drive
  - S3-compatible storage GUI
  - cloud storage sync
tags:
  - RcloneView
  - idrive-e2
  - s3-compatible
  - cloud-storage
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IDrive E2 스토리지 관리 — RcloneView로 파일 동기화 및 백업

> IDrive E2를 RcloneView에 추가하고 Google Drive, Amazon S3, Backblaze B2 등 90개 이상의 클라우드 스토리지 서비스와 함께 S3 호환 버킷을 관리하세요.

IDrive E2는 비용 효율적인 S3 호환 오브젝트 스토리지 서비스로, Amazon S3의 API 호환성을 유지하면서 더 저렴한 대안을 찾는 개발자와 기업들 사이에서 인기가 높습니다. RcloneView는 S3 호환 제공업체를 지원하므로 IDrive E2 버킷을 GUI에 연결하고 명령줄 스크립트를 작성하지 않고도 동기화, 백업, 클라우드 간 마이그레이션을 처리할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 IDrive E2 설정하기

IDrive E2는 액세스 키 ID, 시크릿 액세스 키, 그리고 선택한 리전에 연결된 엔드포인트 URL 등 표준 S3 호환 자격 증명을 사용합니다. 이러한 자격 증명은 IDrive E2 계정 포털에서 생성할 수 있습니다. 자격 증명을 준비했다면 RcloneView를 열고 Remote 탭으로 이동한 뒤 New Remote를 클릭하세요. 제공업체 유형으로 Amazon S3를 선택하고 IDrive E2 엔드포인트 URL과 자격 증명으로 구성합니다.

저장 후 IDrive E2 리모트가 파일 탐색기에 나타납니다. 버킷과 오브젝트를 직접 탐색하고, 파일 크기와 수정 타임스탬프를 확인하며, 마우스 오른쪽 클릭 작업으로 파일을 복사, 이동, 삭제 또는 다운로드할 수 있습니다. 브레드크럼 경로 바는 버킷 내 현재 위치를 표시하며, 더 깊은 폴더 구조를 탐색할 때 자동완성 제안을 제공합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding IDrive E2 as a remote in RcloneView" class="img-large img-center" />

## IDrive E2를 다른 클라우드와 동기화하기

IDrive E2를 주요 백업 대상으로 사용하는 조직은 지리적 이중화나 제공업체 장애 조치를 위해 중요한 버킷을 보조 제공업체에 복제하고자 하는 경우가 많습니다. RcloneView를 사용하면 이 과정이 간단해집니다. IDrive E2 버킷을 소스로, Amazon S3, Cloudflare R2, Google Drive를 대상으로 하는 동기화 작업을 생성하세요.

4단계 동기화 마법사가 스토리지 선택, 고급 전송 설정(동시 전송, 체크섬 검증), 필터링 규칙(큰 파일 제외, 특정 확장자), 선택적 스케줄링 등 구성을 처리합니다. 체크섬 검증을 활성화하면 전송된 각 오브젝트가 온전하게 전송되었는지 확인할 수 있으며, 이는 IDrive E2에 저장된 바이너리 아카이브와 데이터베이스 덤프에 특히 중요합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing IDrive E2 bucket to Amazon S3 with RcloneView" class="img-large img-center" />

예약 동기화(PLUS 라이선스)는 지정된 간격으로 IDrive E2 복제를 자동으로 실행합니다. Job History는 각 실행의 시작 시간, 소요 시간, 전송된 파일 수, 최종 상태를 기록하여 외부 스크립트나 cron 작업을 유지 관리할 필요 없이 지속적인 감사 추적을 제공합니다.

## 진행 중인 전송 모니터링

대용량 IDrive E2 동기화를 실행할 때 RcloneView 하단의 Transferring 탭은 현재 전송 중인 파일, 누적 개수, 전체 동기화 상태 등 실시간 진행 상황을 보여줍니다. 필요한 경우 이 화면에서 직접 실행 중인 작업을 취소할 수 있으며, Log 탭은 발생하는 모든 오류를 문제 해결할 수 있도록 타임스탬프가 기록된 항목을 제공합니다.

대용량 워크로드의 경우, 동기화 마법사의 고급 설정 단계에서 Number of File Transfers를 조정하면 동시에 전송되는 오브젝트 수를 제어할 수 있습니다. 멀티스레드 전송 설정(기본값: 4)은 대형 오브젝트의 청크 업로드를 처리합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring IDrive E2 sync progress in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. IDrive 계정 포털에서 IDrive E2 액세스 키 ID와 시크릿 액세스 키를 생성하세요.
3. IDrive E2 엔드포인트와 자격 증명으로 RcloneView에 새 S3 호환 리모트를 추가하세요.
4. IDrive E2 버킷을 정기적인 일정으로 보조 스토리지에 백업하는 동기화 작업을 생성하세요.

RcloneView를 사용하면 IDrive E2 버킷도 다른 클라우드 스토리지와 마찬가지로 파일 브라우저에서 확인하고, 동기화 작업으로 구성하며, Job History를 통해 감사할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 IDrive E2를 Amazon S3, Google Drive와 동기화하기](https://rcloneview.com/support/blog/sync-idrive-e2-s3-google-drive-rcloneview)
- [RcloneView로 Cloudflare R2 클라우드 동기화 관리하기](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [RcloneView로 S3, Wasabi, Cloudflare R2 스토리지 중앙 관리하기](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />

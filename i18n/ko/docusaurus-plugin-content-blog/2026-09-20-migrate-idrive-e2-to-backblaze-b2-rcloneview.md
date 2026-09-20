---
slug: migrate-idrive-e2-to-backblaze-b2-rcloneview
title: "IDrive e2에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - steve
description: "RcloneView의 클라우드 간 전송 도구, 드라이런 미리보기, 작업 기록을 사용해 IDrive e2에서 Backblaze B2로 버킷을 이동하세요."
keywords:
  - migrate idrive e2 to backblaze b2
  - idrive e2 to backblaze b2 transfer
  - s3 compatible storage migration
  - cloud to cloud object storage transfer
  - RcloneView migration guide
  - backblaze b2 bucket migration
  - idrive e2 rcloneview
  - object storage provider switch
tags:
  - RcloneView
  - idrive-e2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IDrive e2에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기

> 파일을 로컬에 먼저 임시 저장하지 않고 두 개의 S3 호환 제공업체 사이에서 오브젝트 스토리지 버킷을 이동하세요.

S3 호환 오브젝트 스토리지 제공업체를 전환하는 작업은 보통 파일 하나를 옮기기도 전에 액세스 키, 엔드포인트, 버킷 구조를 하나하나 분석해야 하는 일입니다. RcloneView는 IDrive e2와 Backblaze B2 모두를 네이티브 리모트로 연결하므로, 두 서비스 간 마이그레이션이 다운로드 후 업로드하는 2단계 과정이 아니라 직접적인 클라우드 간 전송이 됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 연결하기

IDrive e2와 Backblaze B2는 모두 RcloneView의 S3 호환 리모트 설정을 통해 구성되며, 각각 Access Key, Secret Key, 엔드포인트가 필요합니다. Backblaze B2의 경우 RcloneView는 일부 팀이 S3 호환 방식보다 선호하는 네이티브 자격 증명 입력 방식(Application Key ID와 Application Key 사용)도 지원합니다. 두 리모트가 Remote Manager에 나타나면, RcloneView의 수평 또는 수직 분할 레이아웃을 사용해 각 리모트당 하나씩 탐색기 패널 두 개를 나란히 엽니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote manager with IDrive e2 and Backblaze B2 remotes configured" class="img-large img-center" />

두 버킷을 동시에 볼 수 있으면, 전송을 시작하기 전에 양쪽의 폴더 구조를 미리 살펴보고 이름 불일치나 예상치 못한 중첩 폴더를 미리 발견할 수 있습니다.

## 동기화 작업으로 전송 실행하기

대용량 버킷을 수동으로 드래그하는 대신, 4단계 마법사를 통해 동기화 작업을 설정하세요. 소스로 IDrive e2, 대상으로 Backblaze B2를 선택하고, 단방향 동기화를 선택하면 대상만 소스와 일치하도록 수정되고 IDrive e2에는 아무 변화가 없습니다. 2단계에서 RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하며, 파일 전송 개수를 조정하고 체크섬 비교를 활성화해 파일을 수정 시각뿐 아니라 해시와 크기로도 검증할 수 있는데, 이는 서로 다른 두 스토리지 백엔드 간 마이그레이션 시 특히 중요합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView sync job configured between two S3-compatible object storage remotes" class="img-large img-center" />

실제 전송을 실행하기 전에 드라이런을 사용해 어떤 파일이 복사될지 미리 확인하고, 예상치 못한 삭제나 건너뛰기가 없는지 확인하세요.

## 마이그레이션 검증하기

동기화가 완료되면, 작업 기록(Job History)에서 전송된 총 크기, 전송 속도, 파일 수를 확인해 소스 버킷의 총계와 비교할 수 있는 기록을 얻을 수 있습니다. 추가 검증을 위해 RcloneView의 폴더 비교 도구를 사용하면 마이그레이션 이후 두 버킷을 나란히 비교하여 크기가 다르거나 한쪽에만 존재하는 파일을 표시할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing a completed cloud-to-cloud migration" class="img-large img-center" />

## 시작하기

1. **[rcloneview.com](https://rcloneview.com/src/download.html)에서 RcloneView 다운로드**
2. Access Key, Secret Key, 엔드포인트로 IDrive e2 리모트를 추가하세요.
3. S3 호환 방식 또는 네이티브 자격 증명을 사용해 Backblaze B2 리모트를 추가하세요.
4. 단방향 동기화 작업을 구성하고, 먼저 드라이런을 실행한 다음 실제로 실행하고 작업 기록으로 검증하세요.

깔끔한 버킷 마이그레이션의 핵심은 전후를 모두 검증하는 것입니다 — RcloneView의 드라이런과 비교 도구가 이 두 단계를 하나의 워크플로로 만들어 줍니다.

---

**관련 가이드:**

- [IDrive e2 스토리지 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Backblaze B2 스토리지 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2 — 오브젝트 스토리지 비교](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />

---
slug: migrate-backblaze-b2-to-google-drive-rcloneview
title: "Backblaze B2에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "로컬에 다운로드하지 않고 Backblaze B2에서 Google Drive로 파일을 이동하세요. RcloneView는 진행 상황 모니터링과 필터링을 갖춘 클라우드 간 직접 전송을 지원합니다."
keywords:
  - Backblaze B2 to Google Drive
  - migrate B2 to Google Drive
  - Backblaze B2 migration
  - cloud-to-cloud transfer
  - B2 to GDrive RcloneView
  - transfer Backblaze files
  - cloud storage migration
  - Backblaze B2 sync
  - Google Drive import
  - RcloneView migration
tags:
  - RcloneView
  - backblaze-b2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기

> RcloneView를 사용하면 중간 로컬 저장 공간 없이도 Backblaze B2 버킷의 파일을 Google Drive로 직접 전송할 수 있으며, 실시간 진행률 추적과 필터 기능도 지원합니다.

Backblaze B2는 훌륭한 오브젝트 스토리지 솔루션이지만, Google Workspace에 크게 의존하는 팀이라면 협업을 더 쉽게 하기 위해 작업 파일을 Google Drive에 통합하는 것이 더 실용적일 수 있습니다. 수년간 쌓인 B2 아카이브 데이터를 Google Drive로 마이그레이션하려면 예전에는 먼저 모든 것을 로컬에 다운로드해야 했는데, 이는 느리고 저장 공간을 많이 소모하는 과정이었습니다. RcloneView는 동기화 엔진을 통해 B2와 Google Drive 간의 클라우드 간 직접 전송을 지원하여, 로컬 디스크를 거치지 않고 두 공급자 사이에서 데이터를 라우팅합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 설정하기

마이그레이션을 시작하기 전에 RcloneView에 Backblaze B2와 Google Drive를 모두 리모트로 추가하세요. Backblaze B2의 경우 Remote 탭으로 이동하여 New Remote를 클릭하고 Backblaze B2를 선택합니다. Backblaze 계정의 App Keys에서 생성한 Application Key ID와 Application Key를 입력합니다. Google Drive의 경우 공급자 목록에서 Google Drive를 선택하면 OAuth 인증을 위한 브라우저 창이 열립니다. Google 계정으로 로그인하고 접근 권한을 부여하세요.

두 리모트가 모두 설정되면 RcloneView의 듀얼 패널 파일 탐색기에서 나란히 열어볼 수 있습니다. 한쪽에서는 B2 버킷을, 다른 쪽에서는 Google Drive 폴더를 탐색하면서 원하는 마이그레이션 구조를 시각적으로 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Google Drive remotes in RcloneView" class="img-large img-center" />

## 마이그레이션 실행하기

두 리모트가 연결되면 Sync 마법사를 사용하여 전송을 설정합니다. 소스로 Backblaze B2 버킷(또는 그 안의 특정 경로)을 선택하고 대상으로 Google Drive 폴더를 선택합니다. Advanced Settings 단계에서 체크섬 검증을 사용하면 각 파일이 올바르게 전송되었는지 확인할 수 있으며, 이는 조용한 데이터 손상이 발견되지 않을 수 있는 대용량 아카이브에서 특히 중요합니다.

Filtering 단계는 대용량 B2 버킷에 유용합니다. 파일 나이 필터를 사용해 특정 날짜보다 오래된 파일만 마이그레이션하거나, 특정 확장자(임시 `.tmp` 파일 등)를 제외하거나, 최대 파일 크기를 제한하여 마이그레이션을 여러 단계로 나눠 진행할 수 있습니다. 이는 디자인 에이전시의 3TB에 달하는 프로젝트 아카이브를 마이그레이션할 때 특히 유용하며, 파일 유형과 폴더 깊이로 필터링하여 각 배치에서 이동할 항목을 제어할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 files to Google Drive with RcloneView" class="img-large img-center" />

전체 마이그레이션을 실행하기 전에 Dry Run 모드를 실행하여 정확히 어떤 파일이 복사될지 미리 확인하세요. 시뮬레이션은 실제 변경 없이 예정된 작업의 전체 목록을 보여주며, 이는 프로덕션 데이터를 마이그레이션할 때 반드시 거쳐야 할 중요한 안전 단계입니다.

## 전송 모니터링 및 검증하기

RcloneView 하단의 Transferring 탭은 파일 수, 전송 상태, 발생한 오류 등 작업 진행 상황을 실시간으로 보여줍니다. 여러 시간에 걸쳐 실행되는 대규모 마이그레이션의 경우, Job History는 각 실행의 시작 시간, 소요 시간, 이동한 총 데이터량, 최종 상태를 기록합니다.

전송이 완료된 후에는 Folder Compare를 사용하여 Google Drive에 B2 소스의 모든 내용이 포함되었는지 검증하세요. 비교 기능은 한쪽에만 존재하는 파일이나 크기 차이가 있는 파일을 강조 표시해 주므로, 정상적으로 완료되지 않은 항목을 쉽게 파악하고 재전송할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing migration job history for B2 to Google Drive transfer in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Application Key ID와 Application Key를 사용해 Backblaze B2를 추가합니다.
3. OAuth 브라우저 인증 흐름을 통해 Google Drive를 추가합니다.
4. Dry Run과 함께 Sync 마법사를 사용해 전체 전송을 실행하기 전에 마이그레이션을 미리 확인합니다.

클라우드 간 직접 마이그레이션은 로컬 중간 저장소로 인한 병목 현상을 없애고, B2에서 Google Drive로의 전송이 공급자 측 처리량으로 계속 실행되도록 합니다.

---

**관련 가이드:**

- [RcloneView로 Backblaze B2를 Amazon S3로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [RcloneView로 Google Drive 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView로 Dropbox를 저렴한 Backblaze B2 스토리지에 백업하기](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />

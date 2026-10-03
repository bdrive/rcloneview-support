---
slug: migrate-opendrive-to-backblaze-b2-rcloneview
title: "OpenDrive에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView로 OpenDrive의 파일을 Backblaze B2로 옮기세요. 두 리모트를 연결하고, Dry Run으로 복사를 확인하고, 전송을 실행한 뒤 Folder Compare로 검증합니다."
keywords:
  - OpenDrive Backblaze B2 마이그레이션
  - OpenDrive B2 전송
  - OpenDrive 마이그레이션
  - Backblaze B2 백업
  - 클라우드 간 전송
  - RcloneView OpenDrive
  - RcloneView Backblaze B2
  - OpenDrive B2 파일 이동
tags:
  - RcloneView
  - opendrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDrive에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기

> 수동으로 다운로드하고 다시 업로드하는 대신, 미리 확인하고 검증할 수 있는 클라우드 간 전송으로 OpenDrive 라이브러리를 Backblaze B2 버킷으로 옮기세요.

파일 공유 계정의 한계를 넘어선 팀은 장기 아카이브를 위해 오브젝트 스토리지를 원하는 경우가 많습니다. OpenDrive에서 Backblaze B2로 데이터를 직접 옮기려면 먼저 모든 파일을 로컬로 다운로드해야 합니다. RcloneView는 두 서비스에 모두 연결하여 서비스 간에 직접 전송하며, Dry Run과 비교 단계를 통해 무엇이 이동했는지 확인할 수 있습니다. FREE 라이선스로 S3, Azure, Backblaze B2에 읽기/쓰기 전체 권한으로 연결하세요.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 연결하기

Remote 탭을 열고 New Remote를 선택합니다. OpenDrive를 하나의 리모트로, Backblaze B2를 다른 리모트로 추가하세요. B2는 Application Key ID와 Application Key를 사용하며, Backblaze 키 관리 페이지에서 생성할 수 있습니다. 대상 경로를 준비할 수 있도록 먼저 Backblaze에서 대상 버킷을 만드세요.

두 리모트가 Remote Manager에 표시되면 두 개의 Explorer 패널에 나란히 여세요. 대용량 전송을 시작하기 전에 각 리모트의 최상위 폴더를 탐색하여 자격 증명이 작동하는지 확인합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 OpenDrive 및 Backblaze B2 리모트 추가" class="img-large img-center" />

## 폴더 구조 계획하기

마이그레이션은 데이터를 B2에 어떻게 배치할지 결정하기 좋은 시점입니다. 일반적인 방식은 목적별로 버킷을 하나씩 두는 것으로, 예를 들어 완료된 프로젝트를 위한 아카이브 버킷을 만들고 최상위 폴더를 현재 OpenDrive 구조와 동일하게 구성합니다. 가장 큰 OpenDrive 폴더에서 Get Size를 사용해 용량을 추정하고, 가장 중요한 폴더부터 복사하세요.

일부 파일 형식을 제외하려면 동기화 마법사 3단계에서 최대 파일 크기, 최대 파일 보존 기간 또는 `.iso` 같은 사용자 지정 제외 규칙을 설정할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 OpenDrive에서 Backblaze B2로 클라우드 간 전송" class="img-large img-center" />

## Dry Run 후 전송하기

OpenDrive를 소스로, B2 버킷을 대상으로 하는 작업을 만드세요. 마이그레이션에는 소스를 그대로 두는 Copy 작업이 더 안전합니다. Sync 작업은 소스와 일치시키기 위해 대상의 파일을 삭제할 수 있습니다. 먼저 Dry Run을 실행해 복사될 파일 목록을 확인하세요.

2단계에서 "Retry entire sync if fails"는 기본값인 3으로 유지하고, 소스에서 요청 제한이 걸리면 동시 전송 수를 낮추는 것을 고려하세요. 그런 다음 작업을 실행하고 Transferring 탭에서 진행률, 속도, 파일 수를 확인합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 OpenDrive에서 B2로의 작업 실행" class="img-large img-center" />

## 소스를 정리하기 전에 검증하기

작업이 끝나면 Job History를 열어 상태가 Completed인지 확인하고 전체 크기와 파일 수를 검토합니다. 그런 다음 OpenDrive와 B2 폴더에 Compare를 사용하세요. left-only 파일은 도착하지 않은 항목이고, different 파일은 다시 복사해야 할 수 있는 크기 불일치를 나타냅니다. 비교 결과에 left-only 파일이 없을 때까지 OpenDrive 데이터를 보관하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OpenDrive와 Backblaze B2 간의 Folder Compare" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. OpenDrive와 Backblaze B2를 리모트로 추가하고 대상 버킷을 만듭니다.
3. Copy 작업을 만들고 Dry Run을 실행한 뒤 전송을 실행합니다.
4. 소스를 폐기하기 전에 Job History와 Folder Compare로 검증합니다.

미리 확인하고 검증하는 복사 방식 덕분에 대용량 라이브러리도 B2로 예측 가능하게 옮길 수 있습니다.

---

**관련 가이드:**

- [OpenDrive 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [RcloneView로 SugarSync에서 Backblaze B2로 마이그레이션](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [RcloneView로 Koofr에서 Backblaze B2로 마이그레이션](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

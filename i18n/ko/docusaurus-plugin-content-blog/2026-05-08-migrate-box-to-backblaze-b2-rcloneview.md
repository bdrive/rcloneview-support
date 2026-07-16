---
slug: migrate-box-to-backblaze-b2-rcloneview
title: "Box에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - steve
description: "RcloneView를 사용하여 Box 클라우드 스토리지를 Backblaze B2 오브젝트 스토리지로 이전하세요. 파일 마이그레이션, 전송 검증, 향후 백업 자동화까지 다루는 완벽 가이드입니다."
keywords:
  - Box to Backblaze B2 migration
  - migrate Box Backblaze B2 RcloneView
  - Box Backblaze B2 file transfer
  - switch Box to B2 storage
  - cloud storage migration Box
  - Box backup Backblaze B2
  - Box to S3 migration
  - rclone Box B2 GUI
tags:
  - box
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기

> RcloneView의 GUI 기반 마이그레이션 워크플로를 사용하여 Box 워크스페이스 전체를 Backblaze B2 오브젝트 스토리지로 옮기거나, 보조 백업 사본을 생성하세요.

Box는 널리 사용되는 엔터프라이즈 협업 플랫폼이지만, 아카이브 및 백업 용도로는 Backblaze B2와 같은 전용 오브젝트 스토리지에 비해 저장 비용이 상당히 높을 수 있습니다. Box에서 아카이브 데이터를 이전하거나, Box 콘텐츠의 백업 사본을 더 비용 효율적인 계층에 만들고자 하는 팀은 RcloneView를 사용하여 로컬에 먼저 다운로드하지 않고도 직접 마이그레이션할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box와 Backblaze B2 연결하기

Box의 경우 **리모트 탭 → 새 리모트**로 이동하여 Box를 선택하고 Box 계정으로 OAuth 인증을 완료하세요. Box for Business 사용자는 전체 워크스페이스에 접근하려면 리모트 설정에서 `box_sub_type = enterprise`도 설정해야 합니다. Backblaze B2의 경우 리모트 설정 중에 Application Key ID와 Application Key를 입력하세요.

두 리모트가 모두 구성되면 Box를 왼쪽 탐색기 패널에, B2를 오른쪽에 배치하세요. 마이그레이션하려는 특정 Box 폴더로 이동하고, 전송을 시작하기 전에 대상 B2 버킷의 이름이 올바르고 접근 가능한지 확인하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Box and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 마이그레이션 작업 구성하기

홈 탭의 **동기화** 버튼을 사용하여 마이그레이션 작업을 생성하세요. Box 폴더를 소스로, B2 버킷(또는 그 안의 하위 폴더)을 대상으로 설정합니다. 2단계에서 **체크섬**을 활성화하여 전송 중 모든 파일의 무결성을 검증하세요. 재시도 횟수는 5회 이상으로 설정하세요 — 대량 벌크 전송 중에는 B2 API가 간헐적으로 요청을 제한할 수 있으며, 자동 재시도를 통해 수동 개입 없이 마이그레이션이 완료되도록 보장합니다.

실제 마이그레이션 전에 **드라이 런(Dry Run)**을 실행하여 전송될 전체 파일 목록을 확인하세요. 이는 공유 파일이나 Box Notes(`.boxnote` 형식)가 예상대로 전송되지 않을 수 있는 Box 마이그레이션에서 특히 중요합니다 — 드라이 런 결과는 실제 데이터에 영향을 주기 전에 실패하는 파일을 강조하여 보여줍니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

## Box Notes 및 특수 파일 유형 처리하기

Box Notes는 Box 외부에서 제대로 렌더링되지 않을 수 있는 독점 형식(`.boxnote`)입니다. 마이그레이션 전에 보존해야 할 Box Notes는 Box 웹 인터페이스에서 표준 형식(`.docx` 또는 `.pdf`)으로 내보내세요. RcloneView는 `.boxnote` 파일을 바이너리 데이터로 마이그레이션하지만, B2나 Box가 아닌 다른 클라이언트에서는 편집할 수 없습니다.

공유 폴더와 외부 협업자 콘텐츠의 경우, 마이그레이션하려는 모든 콘텐츠에 Box 계정이 접근 권한을 가지고 있는지 확인하세요. RcloneView의 **로그 탭**에서는 계정이 접근할 수 없는 파일에 대한 권한 오류를 표시합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Box to B2 migration progress in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Box(OAuth)와 Backblaze B2(Application Key)를 리모트로 추가하세요.
3. 실행 전 드라이 런을 통해 마이그레이션을 미리 확인하세요.
4. 체크섬 검증을 활성화한 상태로 실제 마이그레이션을 실행하세요.

RcloneView로 Box에서 Backblaze B2로 마이그레이션하는 것은 깔끔하고 검증 가능한 프로세스로, 아카이브 콘텐츠를 위한 비용 효율적이고 내구성 있는 스토리지를 제공합니다.

---

**관련 가이드:**

- [RcloneView로 Box를 AWS S3로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [RcloneView로 Backblaze B2 클라우드 스토리지 관리하기](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [RcloneView로 Box를 S3 Glacier 아카이브로 전환하기](https://rcloneview.com/support/blog/box-to-s3-glacier-archive-rcloneview)

<CloudSupportGrid />

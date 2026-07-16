---
slug: migrate-aws-s3-to-google-drive-rcloneview
title: "AWS S3에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView의 GUI를 사용해 AWS S3 버킷에서 Google Drive로 파일을 이동하세요. S3-to-Google-Drive 마이그레이션에 CLI가 필요 없습니다 — 손쉽게 전송, 검증, 예약할 수 있습니다."
keywords:
  - migrate AWS S3 to Google Drive
  - S3 to Google Drive transfer
  - AWS S3 Google Drive migration
  - rclone S3 to Google Drive
  - cloud-to-cloud migration tool
  - move S3 files to Google Drive
  - object storage to Google Drive
  - RcloneView S3 migration
tags:
  - amazon-s3
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# AWS S3에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기

> RcloneView는 S3-to-Google-Drive 마이그레이션을 직접적인 클라우드 간 전송으로 처리합니다 — 로컬 다운로드가 필요 없으며, 실시간 진행 상황과 체크섬 검증을 제공합니다.

AWS S3에서 Google Drive로 마이그레이션하는 것은 팀이 인프라 중심 스토리지에서 협업 지향 플랫폼으로 전환할 때 흔히 발생하는 시나리오입니다. 스타트업은 수년간 쌓인 S3 애플리케이션 로그와 자산을 Google Drive로 아카이빙하여 팀 간 접근을 더 쉽게 만들 수 있습니다. 소규모 에이전시는 프로젝트별 S3 버킷에 흩어진 클라이언트 결과물을 공유 Google Drive로 통합할 수 있습니다. RcloneView는 이 마이그레이션을 시각적이고 감사 가능하게 만들며, 로컬 머신에 파일을 임시 저장하지 않고 서버 측에서 전송을 처리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 설정하기

마이그레이션을 시작하기 전에 두 클라우드 제공자를 RcloneView에 추가하세요. AWS S3의 경우 **Remote 탭 → New Remote → Amazon S3**로 이동하여 Access Key ID, Secret Access Key를 입력하고 버킷 리전을 선택합니다. Google Drive의 경우 OAuth 브라우저 로그인을 통해 다른 리모트를 추가하세요 — RcloneView가 Google의 인증 페이지를 열고 토큰을 자동으로 저장합니다.

두 리모트가 모두 구성되면 Explorer를 2패널 레이아웃으로 엽니다. 왼쪽 패널에는 S3 버킷이, 오른쪽 패널에는 대상 Google Drive 폴더가 표시됩니다. 이 나란히 보기는 마이그레이션을 시작하기 전에 폴더 구조를 확인하는 데 이상적입니다.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring AWS S3 and Google Drive remotes in RcloneView" class="img-large img-center" />

## 동기화 마법사로 마이그레이션 실행하기

대규모 마이그레이션의 경우 수동 드래그 앤 드롭 대신 Sync Job 마법사를 사용하세요. **Job Manager → Add Job**에서 소스를 S3 버킷 경로(예: `mybucket/exports/`)로 설정하고 대상을 Google Drive 폴더로 설정합니다. Step 2에서는 대역폭에 따라 동시 전송 수를 8~12로 설정하고, 체크섬 검증을 활성화하여 전송 후 각 파일의 무결성을 확인합니다.

먼저 **Dry Run**을 실행하세요. RcloneView는 실제로 아무것도 전송하지 않고 복사할 모든 파일을 나열합니다. 수백 GB에 걸쳐 50,000개의 파일이 있는 버킷의 경우, 이 미리보기를 통해 몇 시간의 전송 시간을 투자하기 전에 범위를 확인할 수 있습니다. 파일 목록이 올바르게 보이면 실제 동기화를 실행하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="S3 to Google Drive cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## 파일 유형 차이 및 필터 처리하기

S3 버킷에는 Google Drive로 옮길 필요가 없는 자동 생성 파일 — `.log` 파일, 임시 업로드, 0바이트 마커 객체 — 이 포함되는 경우가 많습니다. Step 3 필터링을 사용해 불필요한 확장자를 제외하세요: 사용자 지정 제외 필터에 `.log`, `.tmp`, `.part`를 추가합니다. 또한 최대 파일 수명 필터를 설정하여 최근 90일 이내에 수정된 파일만 마이그레이션함으로써 활성 사용 사례의 전송 범위를 줄일 수 있습니다.

Google Drive는 파일 이름 지정에 몇 가지 특이한 점이 있습니다: S3 객체 키의 `?`, `*`, `:` 같은 문자는 rclone에 의해 자동으로 변환됩니다. RcloneView는 이름 변경이 필요했던 객체를 검토할 수 있도록 Log 탭에 인코딩 오류를 표시합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing the S3 to Google Drive migration job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. New Remote 마법사에서 Access Key + Secret + Region을 사용해 AWS S3 리모트를 추가하세요.
3. OAuth 브라우저 인증을 통해 Google Drive 리모트를 추가하세요.
4. Job Manager에서 Sync 작업을 생성하고, Dry Run으로 미리 확인한 후 마이그레이션을 실행하세요.

RcloneView를 사용하면 S3-to-Google-Drive 마이그레이션을 완전한 가시성 속에서 실행할 수 있습니다 — CLI 스크립트도, 임시 저장 비용도 없이, 기록을 위한 완전한 작업 이력을 남깁니다.

---

**관련 가이드:**

- [RcloneView로 Google Drive를 AWS S3로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [증분 백업: Google Drive에서 Amazon S3로](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [RcloneView로 체크섬 검증 클라우드 마이그레이션하기](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />

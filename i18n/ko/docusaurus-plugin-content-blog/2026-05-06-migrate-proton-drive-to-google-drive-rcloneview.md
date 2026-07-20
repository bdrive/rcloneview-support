---
slug: migrate-proton-drive-to-google-drive-rcloneview
title: "Proton Drive에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView로 Proton Drive에서 Google Drive로 파일을 이동하세요. 암호화된 클라우드 데이터를 제공업체 간에 직접 전송 — 수동 다운로드 없이 전체 폴더 구조를 유지합니다."
keywords:
  - migrate Proton Drive to Google Drive
  - Proton Drive Google Drive transfer
  - RcloneView Proton Google Drive migration
  - Proton Drive migration tool
  - move files Proton Drive Google Drive
  - Proton Drive cloud migration GUI
  - Google Drive import Proton Drive
  - cloud to cloud migration
  - Proton Drive file transfer tool
  - RcloneView Proton Drive sync
tags:
  - RcloneView
  - proton-drive
  - google-drive
  - cloud-to-cloud
  - migration
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton Drive에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기

> RcloneView는 Proton Drive의 콘텐츠를 클라우드에서 직접 Google Drive로 마이그레이션합니다 — 파일을 즉시 복호화하여 로컬에 아무것도 저장하지 않고 업로드합니다.

Proton Drive의 종단 간 암호화는 프라이버시를 중시하는 사용자에게 신뢰받는 스토리지 플랫폼입니다. Google Workspace 기반의 팀 환경으로 이전할 때 Proton Drive의 문서, 사진, 프로젝트 자산을 Google Drive로 마이그레이션하는 것은 흔한 요구사항입니다. RcloneView는 두 제공업체에 모두 연결하고 단일 동기화 작업을 통해 전송을 조율함으로써 이 마이그레이션을 효율적으로 처리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 Proton Drive와 Google Drive 연결하기

Proton Drive를 리모트로 추가하려면 rclone v1.69 이상이 필요하며, RcloneView에 내장된 rclone은 기본적으로 이 조건을 충족합니다. Remote 탭 > New Remote로 이동하여 Proton Drive를 선택하고 Proton 계정의 이메일과 비밀번호를 입력하세요. 2단계 인증(2FA)이 활성화되어 있다면 2FA 코드 입력도 요구됩니다.

Google Drive의 경우 Google Drive를 선택하고 OAuth 브라우저 인증 절차를 완료하세요. 설정이 완료되면 두 리모트 모두 RcloneView의 파일 탐색기에 표시됩니다. 듀얼 패널 보기에서 Proton Drive와 Google Drive를 나란히 열어 마이그레이션 범위를 확인하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Proton Drive and Google Drive remotes in RcloneView" class="img-large img-center" />

## 마이그레이션 작업 구성하기

Proton Drive를 소스로, Google Drive 폴더를 대상으로 하는 Copy 또는 Sync 작업을 생성하세요. RcloneView의 동기화 마법사에서:

- **모드:** Proton Drive에서 파일을 삭제하지 않고 이동하려면 Copy를 선택합니다 (마이그레이션 중 원본을 백업으로 유지)
- **필터링:** 파일 형식 호환성 문제를 피하기 위해 미리 정의된 Google Docs 필터를 사용합니다
- **체크섬:** 전송된 파일의 무결성 검증을 위해 활성화합니다

Proton Drive의 암호화 특성상 rclone은 다운로드 중 콘텐츠를 복호화하고 평문을 Google Drive에 다시 업로드합니다. 시작하기 전에 Google Drive 대상 폴더에 충분한 용량이 있는지 확인하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## 드라이런 실행 및 미리보기

대규모 마이그레이션을 실행하기 전에는 항상 드라이런(dry run) 모드를 사용하세요. RcloneView의 드라이런은 Proton Drive 소스를 스캔하여 전송될 모든 파일을 나열하며, 커밋 전에 파일 개수, 폴더 구조 미리보기, 전송 크기 추정치를 제공합니다. 이는 Proton Drive의 내부 파일 버전이나 공유 링크처럼 제외하고 싶은 폴더를 식별하는 데 도움이 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## 진행 상황 모니터링 및 결과 검증

RcloneView의 Transfer 탭은 실시간 마이그레이션 진행 상황을 보여줍니다. Proton Drive의 암호화된 스토리지는 평문 제공업체에 비해 처리 오버헤드가 다소 추가되므로, 전송 속도가 동등한 Google Drive 간 전송보다 약간 느릴 수 있습니다. 작업이 완료되면 Job History에 마이그레이션된 파일 수, 전송된 바이트 수, 소요 시간, 오류를 포함한 전체 요약이 표시됩니다.

Google Drive의 파일 개수와 크기를 Proton Drive 소스와 비교하여 마이그레이션이 성공적으로 완료되었는지 검증하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Proton Drive to Google Drive migration progress in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Proton Drive(이메일 + 비밀번호)와 Google Drive(OAuth)를 리모트로 추가하세요.
3. Proton Drive에서 Google Drive 대상 폴더로 Copy 작업을 생성하세요.
4. 드라이런을 실행하여 범위를 확인한 후 전체 마이그레이션을 실행하세요.

RcloneView를 사용하면 Proton Drive에서 Google Drive로의 마이그레이션이 진행 상황 모니터링과 상세한 전송 기록 로그까지 포함된 간단한 프로세스가 됩니다.

---

**관련 가이드:**

- [Proton Drive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [RcloneView로 Proton Drive에서 OneDrive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-proton-drive-to-onedrive-rcloneview)
- [Google Drive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

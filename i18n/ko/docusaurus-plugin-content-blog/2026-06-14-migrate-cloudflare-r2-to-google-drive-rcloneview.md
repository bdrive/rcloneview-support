---
slug: migrate-cloudflare-r2-to-google-drive-rcloneview
title: "Cloudflare R2에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - jay
description: "RcloneView를 사용하여 Cloudflare R2에서 Google Drive로 파일을 마이그레이션하는 방법을 알아보세요 — 예상치 못한 송신 비용 없이, 가이드형 시각적 전송 워크플로우만으로 가능합니다."
keywords:
  - cloudflare r2 to google drive
  - migrate r2 to google drive rcloneview
  - cloudflare r2 google drive transfer
  - rcloneview cloudflare r2 migration
  - object storage to google drive
  - r2 bucket to google drive rclone
  - cloudflare r2 backup google drive
  - cloud migration rcloneview
tags:
  - RcloneView
  - cloudflare-r2
  - google-drive
  - cloud-to-cloud
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudflare R2에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기

> RcloneView의 시각적 인터페이스를 사용하여 Cloudflare R2 버킷의 파일을 Google Drive로 이동하세요 — CLI가 필요 없고, R2에서의 송신 요금도 발생하지 않습니다.

Cloudflare R2는 송신 요금이 없는 오브젝트 스토리지로 개발자들에게 인기가 많지만, 팀들은 비기술직 동료와 공유하거나 Google Workspace와 통합하거나 스토리지 계정을 통합하기 위해 데이터를 Google Drive로 옮겨야 하는 경우가 많습니다. RcloneView는 두 서비스를 클릭 몇 번으로 연결하는 워크플로우를 제공하므로, 명령어를 한 줄도 작성하지 않고 R2 버킷을 Google Drive로 마이그레이션할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cloudflare R2와 Google Drive 연결하기

먼저 두 서비스를 모두 리모트로 추가합니다. **Remote** 탭에서 **New Remote**를 클릭하고 Cloudflare R2를 선택합니다. Cloudflare의 **API 토큰**, **계정 ID**, **엔드포인트 URL**(`https://<account-id>.r2.cloudflarestorage.com` 형식)이 필요합니다. RcloneView는 R2용으로 rclone의 S3 호환 백엔드를 사용하므로, R2 API 토큰이 Access Key와 Secret Key 필드에 그대로 대응됩니다.

다음으로 Google Drive를 두 번째 리모트로 추가합니다. RcloneView는 OAuth 인증을 위한 브라우저 창을 엽니다 — Google 계정으로 로그인하고 접근 권한을 부여하세요. API 키 입력은 필요하지 않습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Cloudflare R2 and Google Drive remotes in RcloneView" class="img-large img-center" />

두 리모트가 모두 구성되면, RcloneView의 듀얼 패널 탐색기에서 R2 버킷과 Google Drive 폴더를 나란히 탐색할 수 있습니다.

## 마이그레이션 실행하기

Home 탭에서 **Sync**를 클릭하여 4단계 작업 마법사를 실행합니다. 1단계에서는 원본으로 R2 버킷(또는 그 안의 특정 하위 폴더)을 선택하고, 대상으로 Google Drive 폴더를 선택합니다. 작업 이름은 명확하게 지정하세요 — `r2-to-gdrive-migration`과 같은 이름이 나중에 기록을 검토할 때 도움이 됩니다.

2단계에서는 각 전송 후 파일 무결성을 확인하기 위해 **체크섬 검증**을 활성화합니다. 이는 특히 동영상이나 압축 파일처럼 큰 파일에서 중요한데, 전송 중 손상이 발생해도 감지되지 않을 수 있기 때문입니다. 일시적인 네트워크 중단을 자동으로 처리하도록 재시도 횟수를 최소 3회로 설정하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a migration job from Cloudflare R2 to Google Drive in RcloneView" class="img-large img-center" />

작업을 실행하기 전에 **Dry Run**을 실행하여 정확히 어떤 파일이 복사될지 미리 확인하세요. 전체 전송 목록과 파일 크기를 보여주므로, Google Drive에 어떤 변경도 가해지기 전에 범위를 확인할 수 있습니다.

## 필터링 및 대용량 전송 처리하기

R2 버킷에 다양한 파일 형식이 섞여 있다면, 3단계에서 필터를 적용할 수 있습니다. 프로젝트 버킷을 마이그레이션하는 디자인 팀이라면 Max File Size 필터를 사용해 웹용으로 준비된 결과물은 모두 유지하면서 500MB가 넘는 원본 `.psd` 파일은 제외할 수 있습니다. **Max File Age** 필터는 점진적 마이그레이션에도 유용합니다 — 전체 이력 데이터셋이 아니라 지난 30일 동안 수정된 파일만 이동하는 식입니다.

몇 시간에 걸친 대규모 마이그레이션의 경우, **Job History** 탭에 각 실행의 속도, 파일 수, 완료 상태가 기록됩니다. 작업이 중간에 중단되더라도 다시 실행하는 것은 안전합니다 — RcloneView는 이미 성공적으로 전송된 파일은 건너뛰고 중단된 지점부터 이어서 진행합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring a Cloudflare R2 to Google Drive transfer job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. API 토큰, 계정 ID, 엔드포인트 URL을 사용해 Cloudflare R2를 리모트로 추가합니다.
3. OAuth 브라우저 로그인을 통해 Google Drive를 리모트로 추가합니다.
4. R2 버킷에서 Google Drive 폴더로 Copy 또는 Sync 작업을 생성합니다 — 범위를 확인하기 위해 먼저 Dry Run을 실행하세요.

Cloudflare R2의 무료 송신 모델 덕분에 데이터를 외부로 옮기는 데 R2 측 비용은 전혀 들지 않으며, 나머지 과정은 RcloneView가 시각적으로 처리해 줍니다.

---

**관련 가이드:**

- [RcloneView로 Google Drive에서 Cloudflare R2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [Cloudflare R2 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Google Drive 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

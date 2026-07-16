---
slug: migrate-onedrive-to-wasabi-rcloneview
title: "OneDrive에서 Wasabi로 마이그레이션 — RcloneView로 클라우드 백업"
authors:
  - tayson
description: "RcloneView를 사용해 Microsoft OneDrive에서 Wasabi 핫 클라우드 스토리지로 파일을 이동하세요. CLI 명령어 없이 OneDrive에서 Wasabi로 마이그레이션하는 단계별 가이드입니다."
keywords:
  - migrate OneDrive to Wasabi
  - OneDrive Wasabi transfer
  - OneDrive to S3 migration
  - Wasabi cloud backup from OneDrive
  - rclone OneDrive Wasabi
  - cloud-to-cloud migration OneDrive
  - move Microsoft OneDrive files to Wasabi
  - RcloneView OneDrive migration
tags:
  - RcloneView
  - onedrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive에서 Wasabi로 마이그레이션 — RcloneView로 클라우드 백업

> RcloneView를 사용해 Microsoft OneDrive에서 Wasabi의 S3 호환 핫 클라우드 스토리지로 파일을 전송하세요 — 중간 다운로드 과정 없이 클라우드 간 직접 전송이 가능합니다.

조직들은 흔히 Microsoft 365에 포함된 OneDrive로 시작했다가, 데이터 양이 늘어나면서 전용의 비용 효율적인 백업 계층이 필요하다는 것을 깨닫습니다. Wasabi의 S3 호환 핫 클라우드 스토리지는 인기 있는 대상지입니다. 예측 가능한 정액제 스토리지에 이그레스 비용이 없기 때문입니다. RcloneView는 rclone의 백엔드를 통해 두 서비스를 연결하여, 스크립팅 없이 시각적 인터페이스만으로 OneDrive 콘텐츠를 Wasabi 버킷으로 마이그레이션할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive와 Wasabi 연결하기

먼저 OneDrive를 추가하세요: **리모트 탭 → 새 리모트 → Microsoft OneDrive**를 선택하고, OAuth 브라우저 로그인으로 인증한 다음 리모트가 저장되었는지 확인합니다. 개인용 OneDrive의 경우 이 과정은 즉시 완료됩니다. OneDrive for Business의 경우 인증 중 올바른 테넌트를 선택해야 할 수 있습니다.

다음으로 Wasabi를 추가하세요: **새 리모트 → Amazon S3 Compatible → Wasabi**를 선택합니다. Wasabi 액세스 키, 시크릿 키를 입력하고 버킷 리전에 맞는 올바른 엔드포인트를 선택합니다(예: `s3.us-east-1.wasabisys.com`). Wasabi의 S3 API는 별도의 특별한 설정 없이도 rclone의 S3 백엔드와 호환됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Wasabi remotes in RcloneView" class="img-large img-center" />

## 마이그레이션 범위 계획하기

탐색기를 2패널 레이아웃으로 열어 왼쪽에는 OneDrive, 오른쪽에는 Wasabi를 배치합니다. OneDrive 트리를 탐색하여 마이그레이션할 폴더를 식별하세요. 법무 부서라면 `Contracts/2020-2024/` 아카이브를 이동하는 경우가 있고, 디자인 에이전시라면 500GB 규모의 레이어 파일이 들어 있는 `Client-Assets/` 폴더를 마이그레이션할 수 있습니다.

전송을 시작하기 전에 소스 폴더에서 RcloneView의 **크기 가져오기** 마우스 오른쪽 버튼 옵션을 사용해 전체 데이터 용량을 계산하세요. 대규모 마이그레이션의 경우, 대역폭을 다른 사용자나 서비스와 공유한다면 작업을 야간에 실행하도록 설정하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Viewing OneDrive to Wasabi transfer in RcloneView" class="img-large img-center" />

## 검증을 포함한 동기화 작업 실행하기

작업 관리자에서 동기화 작업을 생성합니다. 소스는 OneDrive 경로, 대상은 Wasabi 버킷 경로로 지정합니다. 2단계에서 **체크섬 검증**을 활성화하여 전송 후 각 파일의 해시를 검증하세요 — 규정 준수가 중요한 아카이브에는 필수적입니다. 동시 전송 수는 속도와 API 안정성의 균형을 위해 6~8로 설정하세요.

먼저 드라이 런을 실행하여 작업 목록을 미리 확인하세요. 파일 이름에 특수 문자가 포함된 OneDrive 항목(사용자 생성 콘텐츠에서 흔함)은 인코딩 조정을 위해 표시됩니다. 실제 전송 전에 드라이 런 후 로그 탭을 검토하여 문제를 미리 파악하세요.

마이그레이션 후에는 RcloneView의 **폴더 비교** 기능을 사용해 OneDrive 소스와 Wasabi 대상을 시각적으로 비교하세요 — OneDrive 사본을 폐기하기 전에 파일 개수와 크기가 일치하는지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OneDrive and Wasabi folders after migration in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 새 리모트 마법사에서 OAuth 로그인으로 OneDrive를, S3 자격 증명으로 Wasabi를 추가하세요.
3. 폴더 비교를 사용해 마이그레이션 범위를 파악한 다음, 작업 관리자에서 동기화 작업을 생성하세요.
4. 체크섬 검증을 활성화하고, 드라이 런을 실행한 후 전체 마이그레이션을 실행하세요.

RcloneView로 OneDrive에서 Wasabi로 이전하면 작업 기록과 전송 로그가 자동으로 저장되는, 검증되고 감사 가능한 마이그레이션 이력을 확보할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 OneDrive에서 Backblaze B2로 마이그레이션](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [RcloneView로 OneDrive에서 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [RcloneView로 OneDrive 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

---
slug: transfer-wasabi-to-google-drive-rcloneview
title: "RcloneView로 Wasabi와 Google Drive 간 파일 전송하기"
authors:
  - tayson
description: "RcloneView로 Wasabi 버킷과 Google Drive 간에 데이터를 이동하거나 백업하세요-리모트를 빠르게 설정하고, S3 업로드를 최적화하고, 동기화 전에 비교하고, 지속적인 작업을 예약할 수 있습니다."
keywords:
  - Wasabi to Google Drive transfer
  - Wasabi cloud migration
  - cloud-to-cloud backup
  - rcloneview
  - rclone s3
  - google drive migration
  - cloud sync
  - wasabi google drive transfer
  - s3 multipart upload
  - cloud automation
tags:
  - cloud-migration
  - wasabi
  - google-drive
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Wasabi와 Google Drive 간 파일 전송하기

> 명령줄과 씨름하지 않고도 Wasabi에서 Google Drive로(또는 그 반대로) 수 테라바이트를 이동하세요. RcloneView는 rclone의 속도와 S3 튜닝을 안내형 GUI에 담아, 자신 있게 비교하고 동기화하고 마이그레이션을 예약할 수 있게 해줍니다.

RcloneView는 Wasabi와 같은 S3 호환 스토리지와 Google Drive의 OAuth 흐름을 모두 지원합니다. 두 리모트를 나란히 열고, 워크플로우에 맞게 Explorer/Compare/Sync를 선택하고, 대용량 업로드를 안정적으로 유지하기 위해 S3 친화적인 청킹을 적용하세요.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Wasabi와 Google Drive 한눈에 비교하기

- **Wasabi**: S3 API, 빠른 인제스트, 낮은 스토리지 비용, 버킷별 엔드포인트(예: `s3.us-east-1.wasabisys.com`).
- **Google Drive / Workspace**: 친숙한 공유 기능, 강력한 협업, 트래픽 급증 시 고려해야 할 API 할당량.
- **RcloneView**: 둘 다를 위한 하나의 UI-동기화 전 비교, 드래그 앤 드롭, 드라이런 실행, 반복 작업 예약.

## Wasabi 리모트 추가하기(S3 호환)

1. **`+ New Remote`**를 클릭 -> **S3**를 선택합니다.
2. **Access Key** / **Secret Key**, 버킷 리전, 엔드포인트(예: `s3.wasabisys.com` 또는 리전별 URL)를 입력합니다.
3. 명확성을 위해 `Wasabi_Archive`(또는 유사한 이름)로 저장합니다.  
   <img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="New remote wizard" class="img-large img-center" />

참고 설정: [S3 호환 설정](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

## OAuth로 Google Drive 연결하기

1. **`+ New Remote`**에서 **Google Drive**를 선택합니다.
2. 브라우저 OAuth 프롬프트를 통해 로그인하고 마이그레이션할 계정 또는 Workspace를 확인합니다.
3. 이름을 지정합니다(예: `GDrive_Workspace`).

자세한 내용: [OAuth로 Google Drive 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

## 두 클라우드를 나란히 열기

1. **Explorer -> Browse**에서 한쪽에 **Wasabi** 리모트를, 다른 쪽에 **Google Drive**를 엽니다.
2. 원본 버킷/폴더와 대상 Drive 폴더로 이동합니다.  


## 최적의 전송 방법 선택하기

- **드래그 앤 드롭(Explorer)**: 선택한 폴더에 대한 빠른 복사. 진행 상황은 **Transfer** 로그에 표시됩니다.
- **Compare -> Copy**: 먼저 차이점을 미리 확인한 후, 누락되거나 최신인 파일을 확신을 갖고 복사합니다.
- **Sync**: 지속적인 백업을 위한 단방향 미러링(Wasabi -> Drive 또는 그 반대). 먼저 **`--dry-run`**을 추가하여 검증하세요.
- 단계별 안내가 필요하신가요? 멀티 클라우드 튜토리얼 흐름을 참고하세요: [MEGA와 Google Drive 간 파일 전송하기](https://rcloneview.com/support/tutorials/transfer-files-between-mega-and-google-drive)

## 예약 백업 작업 만들기

1. Sync가 성공한 후 **Save to Jobs**를 클릭합니다.
2. **Job Manager** -> **Add Job**을 열거나(또는 저장된 작업을 편집) 일정을 설정합니다(예: 매일 밤).
3. Drive에서 변경/삭제된 항목을 보존하기 위해 **Backup Dir** 또는 버전 관리 폴더를 유지하세요.
4. 작업별 결과는 **Transfer** 탭과 **History**에서 모니터링합니다.  
- 가이드: [동기화 작업 생성](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), [작업 실행 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job), [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution), [전송 모니터링](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## 마이그레이션 체크리스트(무결성 + 안전성)

- 먼저 **Compare**를 실행하여 이동할 항목을 확인하고, 필요하면 결과를 내보냅니다.
- 예상치 못한 상황을 피하기 위해 Sync에서 **`--dry-run`**부터 시작하세요.
- 중요한 데이터의 경우, 내장 터미널에서 `rclone check source: dest:`로 검증하고 **API 로그**를 검토하세요.
- 무결성을 확인할 때까지 별도의 대상 폴더(예: `Wasabi_Archive_2025`)를 사용하세요.
- 명확한 이름(`Wasabi->GDrive_Nightly`)으로 작업을 문서화하고, 엔드포인트/키는 필요한 버킷으로만 범위를 제한하세요.

## 마무리

RcloneView를 사용하면 Wasabi의 S3 성능과 Google Drive의 협업 기능을 하나의 인터페이스에서 사용할 수 있습니다. 두 리모트를 생성하고, 변경 사항을 미리 확인하고, S3 업로드를 조정하고, 반복 작업을 예약하세요-설정 파일이나 CLI 플래그를 편집할 필요가 전혀 없습니다. 오늘 Wasabi -> Google Drive 마이그레이션을 시작하고 모든 실행을 검증 가능하게 유지하세요.

<CloudSupportGrid />

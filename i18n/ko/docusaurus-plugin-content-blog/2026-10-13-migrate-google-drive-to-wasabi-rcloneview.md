---
slug: migrate-google-drive-to-wasabi-rcloneview
title: "Google Drive를 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - alex
description: "RcloneView로 Google Drive를 Wasabi로 마이그레이션하세요. 클라우드 간 복사, Dry Run과 Folder Compare 검증, S3 호환 아카이브 유지 방법을 안내합니다."
keywords:
  - Google Drive를 Wasabi로 마이그레이션
  - google drive to wasabi
  - Google Drive Wasabi 전송
  - Google Drive 아카이브 S3
  - Wasabi 마이그레이션 GUI
  - 클라우드 간 전송
  - rcloneview google drive wasabi
  - Google Drive를 오브젝트 스토리지로 이동
  - Google Drive 백업 Wasabi
  - Wasabi 버킷 동기화
tags:
  - RcloneView
  - google-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive를 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기

> 먼저 내 디스크로 다운로드하지 않고도 Google Drive를 Wasabi 버킷으로 옮기거나 아카이브할 수 있습니다.

완성된 프로젝트 2TB를 보유한 디자인 스튜디오가 이를 Google Drive에서 꺼내 S3 호환 오브젝트 스토리지로 옮기고 싶어 할 수 있습니다. RcloneView는 Drive에서 Wasabi로 직접 전송하며, 사전에 Dry Run을, 사후에 Folder Compare를 실행해 누락된 파일이 없는지 확인할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 연결하기

Google Drive는 OAuth를 사용합니다. **New Remote**에서 선택한 뒤 브라우저로 로그인하세요. Wasabi는 S3 호환 제공자이므로 Access Key, Secret Key, 그리고 사용하는 Wasabi 리전의 엔드포인트를 입력합니다. 대상이 될 버킷은 먼저 Wasabi 콘솔에서 만들어 두세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Google Drive와 Wasabi 리모트 추가" class="img-large img-center" />

S3, Azure, Backblaze B2는 FREE 라이선스에서도 읽기/쓰기를 모두 사용할 수 있으며, Wasabi 및 기타 S3 호환 서비스도 같은 방식으로 동작합니다.

## Dry Run으로 전송 계획 세우기

한쪽 Explorer 패널에서 Google Drive를, 다른 쪽에서 Wasabi 버킷을 엽니다. 일회성 이동이라면 패널 사이로 폴더를 드래그하세요. 서로 다른 리모트 간에는 복사가 수행됩니다. 대용량 라이브러리라면 대신 작업(job)을 만드세요. Step 1에서 소스와 대상을 지정하고, Step 2에서 동시 전송 수를 조정하며, Step 3에서 파일 크기, 수정 시점, 유형별로 필터링할 수 있습니다. **Dry Run**을 실행하면 복사될 모든 파일을 미리 볼 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive에서 Wasabi로의 클라우드 간 전송" class="img-large img-center" />

마이그레이션 중에는 Sync 대신 **Copy** 작업 유형을 선택하세요. Copy는 대상의 어떤 파일도 삭제하지 않으므로, 결과를 검증하기 전까지 더 안전한 선택입니다.

## 전송 지켜보기

작업을 시작하고 창 하단의 Transferring 탭에서 진행률, 속도, 파일 수를 확인하세요. Google Drive의 요청 제한으로 속도가 느려지면 작업의 고급 설정에서 동시 파일 전송 수를 낮춘 뒤 다시 실행하세요. 이미 복사된 파일은 건너뜁니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView에서 Wasabi로의 전송 모니터링" class="img-large img-center" />

## 정리하기 전에 검증하기

**Compare**를 사용해 두 위치를 나란히 비교하세요. 필터로 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 동일한 파일, 다른 파일을 확인할 수 있어 누락된 부분이 한눈에 드러납니다. 비교 결과가 깨끗해진 후에만 Google Drive의 데이터 삭제를 고려하세요. Job History에는 각 실행 기록이 보관됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare로 Google Drive에서 Wasabi로의 마이그레이션 검증" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Google Drive(OAuth)와 Wasabi(Access Key, Secret Key, 엔드포인트)를 리모트로 추가합니다.
3. Drive에서 버킷으로 가는 Copy 작업을 만들고 Dry Run을 실행합니다.
4. 작업을 시작한 뒤 Compare로 결과를 확인합니다.

직접 관리하는 버킷에 검증된 사본이 있으면 이후 정리 작업의 부담이 줄어듭니다.

---

**관련 가이드:**

- [RcloneView로 Wasabi 스토리지 관리하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [OneDrive를 Wasabi로 마이그레이션](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Dropbox를 Wasabi로 마이그레이션](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />

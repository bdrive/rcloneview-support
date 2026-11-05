---
slug: migrate-zoho-workdrive-to-wasabi-rcloneview
title: "Zoho WorkDrive에서 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - morgan
description: "RcloneView로 Zoho WorkDrive에서 Wasabi 오브젝트 스토리지로 마이그레이션하세요: 두 리모트 연결, Dry Run, 클라우드 간 복사, Folder Compare로 검증."
keywords:
  - Zoho WorkDrive에서 Wasabi로 마이그레이션
  - Zoho WorkDrive Wasabi 전송
  - Zoho WorkDrive 내보내기
  - Wasabi 오브젝트 스토리지 마이그레이션
  - Zoho WorkDrive 백업
  - 클라우드 간 전송
  - rclone GUI 마이그레이션
  - RcloneView Wasabi
tags:
  - RcloneView
  - zoho
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDrive에서 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기

> 내 디스크에 아무것도 임시 저장하지 않고 Zoho WorkDrive 팀 폴더를 Wasabi 버킷으로 보관하세요.

프로젝트가 끝나거나, 부서가 도구를 바꾸거나, 재무팀이 더 저렴한 장기 보관 방식을 원할 때 팀은 Zoho WorkDrive에서 벗어납니다. Wasabi는 이런 보관 용도에 적합한 S3 호환 대상이지만, 수천 개의 파일을 수동으로 옮기는 일은 느립니다. RcloneView는 하나의 창에서 두 서비스를 연결하고, 사전에 Dry Run을 거쳐 클라우드 간 복사를 수행한 뒤 비교로 확인합니다. Wasabi 같은 S3 호환 스토리지는 FREE 라이선스에서도 읽기/쓰기가 모두 가능하게 연결할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDrive와 Wasabi 연결하기

Remote 탭을 열고 New Remote를 선택합니다. Zoho WorkDrive는 설정 중 리전 선택이 필요하므로 Zoho 계정과 일치하는 데이터 센터를 고르세요. Wasabi는 S3 호환 리모트로 추가합니다. 액세스 키, 시크릿 키, 버킷 리전의 엔드포인트를 입력합니다.

두 리모트가 Remote Manager에 나타나면 두 개의 Explorer 패널에서 엽니다. 무엇이든 옮기기 전에 왼쪽에서는 팀 폴더를, 오른쪽에서는 버킷을 살펴보세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Zoho WorkDrive와 Wasabi 리모트 추가" class="img-large img-center" />

## 복사 계획과 Dry Run 실행

보관 대상에 무엇이 포함될지 정하세요. 작업 마법사의 3단계에서 최대 파일 기간, 최대 파일 크기, 폴더 깊이 제한을 설정하고 `.git/` 폴더 제외 같은 사용자 지정 규칙을 추가할 수 있습니다. 대상에서 아무것도 삭제되지 않도록 미러링 동기화 대신 Copy 작업을 선택하세요.

그런 다음 Dry Run을 실행합니다. 양쪽을 변경하지 않고 복사되거나 삭제될 모든 파일을 나열하므로, 잘못된 폴더나 필터를 가장 부담 없이 발견할 수 있는 시점입니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Zoho WorkDrive에서 Wasabi로의 클라우드 간 전송" class="img-large img-center" />

## 전송 실행과 모니터링

작업을 시작하고 Transferring 탭에서 진행 상황을 따라가세요. 진행률, 속도, 파일 수가 표시됩니다. 2단계에서 대용량 보관을 위해 파일 전송 수를 늘릴 수 있습니다. Zoho 쪽 응답이 느리다면 equality checker는 적당한 수준으로 유지하세요. "Retry entire sync if fails"의 기본값은 3이며 일시적인 네트워크 오류에 대응합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Zoho WorkDrive에서 Wasabi로의 전송 모니터링" class="img-large img-center" />

## Folder Compare와 Job History로 검증하기

작업이 끝나면 한쪽에 Zoho WorkDrive, 다른 쪽에 Wasabi 버킷을 놓고 Compare를 엽니다. 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 다른 파일 필터로 아직 없는 항목을 확인할 수 있고, 복사 동작으로 남은 파일을 전송합니다. Job History는 각 실행의 상태, 크기, 파일 수를 기록하므로 마이그레이션 기록으로도 쓸 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="마이그레이션 후 Zoho WorkDrive와 Wasabi 비교" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Zoho WorkDrive(리전 포함)와 Wasabi를 리모트로 추가합니다.
3. 필터를 포함한 Copy 작업을 만들고 Dry Run을 실행합니다.
4. 작업을 실행한 뒤, 원본을 정리하기 전에 Folder Compare로 확인합니다.

Compare에서 양쪽이 일치하는 것을 확인할 때까지 Zoho 데이터를 그대로 두세요.

---

**관련 가이드:**

- [RcloneView로 Zoho WorkDrive 스토리지 관리하기](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [RcloneView로 Zoho WorkDrive에서 Backblaze B2로 마이그레이션](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-backblaze-b2-rcloneview)
- [Wasabi 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

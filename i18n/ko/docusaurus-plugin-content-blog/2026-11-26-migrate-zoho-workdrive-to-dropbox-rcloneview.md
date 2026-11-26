---
slug: migrate-zoho-workdrive-to-dropbox-rcloneview
title: "Zoho WorkDrive에서 Dropbox로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - robin
description: "RcloneView로 Zoho WorkDrive의 파일을 Dropbox로 옮기세요. 두 클라우드를 연결하고, Dry Run으로 미리 보고, 클라우드 간 복사 후 Folder Compare로 검증합니다."
keywords:
  - zoho workdrive dropbox 마이그레이션
  - zoho workdrive dropbox 전송
  - zoho workdrive 파일 이동
  - zoho workdrive 마이그레이션 도구
  - dropbox 마이그레이션
  - 클라우드 간 전송
  - rcloneview zoho workdrive
  - rcloneview dropbox
  - rclone gui zoho workdrive
tags:
  - RcloneView
  - zoho
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDrive에서 Dropbox로 마이그레이션 — RcloneView로 파일 전송하기

> Zoho WorkDrive 워크스페이스를 클라우드 간 직접 Dropbox로 옮기세요. 변경 전에는 미리 보기로, 완료 후에는 나란히 비교로 확인할 수 있습니다.

팀이 Zoho WorkDrive를 떠나는 이유는 다양합니다 — Dropbox를 쓰는 회사와의 합병, Dropbox로 표준화한 고객사, 혹은 단순한 도구 통합 등입니다. 모든 파일을 노트북으로 다운로드한 뒤 다시 업로드하는 방식은 느리고 실수가 생기기 쉽습니다. RcloneView는 하나의 창에서 두 서비스를 연결해 파일을 서로 직접 복사하며, Dry Run, 작업 기록, Folder Compare로 빠진 파일이 없는지 확인할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDrive와 Dropbox 연결하기

**Remote > New Remote**를 열고 먼저 Zoho WorkDrive를 추가합니다. Zoho WorkDrive는 대부분의 프로바이더보다 한 단계가 더 필요합니다. Zoho 계정이 속한 **리전**(예: 미국 또는 EU 데이터 센터)을 선택해야 합니다. 잘못된 리전 선택이 연결 실패의 흔한 원인이므로, 시작하기 전에 Zoho에 로그인하는 도메인을 확인하세요.

다음으로 Dropbox를 추가합니다. Dropbox는 OAuth를 사용합니다. 브라우저 창이 열리면 로그인하고 접근을 승인하면 RcloneView가 자동으로 설정을 마칩니다 — API 키는 필요 없습니다. 팀에서 Dropbox Business를 사용한다면 설정 중에 `dropbox_business` 옵션을 활성화해 팀 폴더에 접근할 수 있게 하세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Zoho WorkDrive와 Dropbox 리모트 추가하기" class="img-large img-center" />

## Dry Run으로 복사 미리 보기

두 리모트를 Explorer 패널에 나란히 열고 옮기려는 WorkDrive 폴더로 이동합니다. 간단한 테스트로 작은 폴더를 드래그해 볼 수 있습니다 — 서로 다른 리모트 간 드래그는 항상 이동이 아닌 복사이므로 원본은 그대로 유지됩니다.

전체 마이그레이션을 하려면 **Job Manager**를 열고 새 작업을 추가합니다. Zoho WorkDrive를 소스로, 새 Dropbox 폴더(예: `/WorkDrive-Archive`)를 대상으로 설정합니다. 첫 번째 실행에는 단방향 동기화 대신 **Copy** 작업을 사용하세요. Copy는 대상에서 아무것도 삭제하지 않습니다. 그런 다음 **Dry Run**을 실행해 데이터가 이동하기 전에 전송될 파일의 정확한 목록을 확인합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Zoho WorkDrive에서 Dropbox로 클라우드 간 전송" class="img-large img-center" />

## 전송 설정 조정 및 진행 상황 모니터링

Dropbox는 API 속도 제한을 적용하므로, 동시 파일 전송 수를 높게 설정하기보다 적당한 수준으로 유지하는 편이 더 안정적입니다. 일시적인 오류가 자동으로 복구되도록 **Retry entire sync if fails**는 기본값 3으로 두세요. 워크스페이스에 대용량 동영상이나 디자인 파일이 있다면 멀티스레드 전송 설정(기본값 4)이 개별 대용량 파일에 도움이 됩니다.

작업이 실행되는 동안 **Transferring** 탭에서 진행률, 속도, 파일 수를 확인할 수 있습니다. 작업이 끝나면 **Job History**에 상태, 전체 크기, 파일 수가 기록됩니다 — 관리자가 마이그레이션 완료 증빙을 요청할 때 유용합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView에서 Zoho WorkDrive에서 Dropbox로의 전송 모니터링" class="img-large img-center" />

## Folder Compare로 검증하기

**Home > Compare**를 열고 왼쪽에 WorkDrive, 오른쪽에 Dropbox를 배치합니다. **left-only files** 필터로 전송되지 않은 파일을 찾고, **different files** 필터로 크기 불일치를 확인하세요. 누락된 항목을 선택하고 **Copy right**로 채웁니다. 마운트 전용 도구와 달리 RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교를 지원합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="마이그레이션 후 Zoho WorkDrive와 Dropbox 폴더 비교하기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Zoho WorkDrive(올바른 리전 선택)와 Dropbox(OAuth 로그인)를 리모트로 추가합니다.
3. WorkDrive에서 새 Dropbox 폴더로의 Copy 작업을 만들고 먼저 Dry Run을 실행합니다.
4. 작업을 실행한 뒤 Folder Compare와 Job History로 결과를 확인합니다.

계획적이고 검증된 마이그레이션으로 팀은 누락된 파일을 찾아 헤매지 않고 첫날부터 Dropbox로 전환할 수 있습니다.

---

**관련 가이드:**

- [Zoho WorkDrive 관리 — RcloneView로 클라우드 동기화](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [RcloneView로 Zoho WorkDrive에서 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-google-drive-rcloneview)
- [RcloneView로 Dropbox 동기화 오류 해결하기](https://rcloneview.com/support/blog/fix-dropbox-sync-errors-rcloneview)

<CloudSupportGrid />

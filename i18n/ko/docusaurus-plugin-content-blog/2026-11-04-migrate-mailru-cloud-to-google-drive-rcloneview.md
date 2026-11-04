---
slug: migrate-mailru-cloud-to-google-drive-rcloneview
title: "Mail.ru Cloud를 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView로 Mail.ru Cloud를 Google Drive로 마이그레이션하세요: 두 리모트 연결, Dry Run 실행, 클라우드 간 폴더 복사, Folder Compare로 결과 검증까지."
keywords:
  - Mail.ru Cloud를 Google Drive로 마이그레이션
  - Mail.ru Cloud 전송
  - Mail.ru에서 Google Drive로
  - RcloneView Mail.ru
  - 클라우드 간 마이그레이션
  - 클라우드 간 파일 이동
  - Mail.ru Cloud 백업
  - rclone GUI 마이그레이션
  - Google Drive 마이그레이션 도구
  - Folder Compare 검증
tags:
  - RcloneView
  - mailru
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mail.ru Cloud를 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기

> 수동 다운로드와 재업로드 대신, 눈으로 확인하고 검증할 수 있는 워크플로로 Mail.ru Cloud 파일을 Google Drive로 옮기세요.

수년간 쌓인 문서, 스캔본, 미디어를 Mail.ru Cloud에서 옮기려면 보통 노트북으로 전부 내려받은 뒤 다시 업로드해야 합니다. rclone 기반 GUI인 RcloneView는 두 서비스를 리모트로 연결하여 한 창에서 복사하고 결과를 검증할 수 있게 해 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 연결하기

RcloneView를 열고 **New Remote**로 Mail.ru Cloud와 Google Drive를 추가하세요. Google Drive는 브라우저에서 OAuth로 로그인하므로 API 키가 필요 없습니다. Mail.ru Cloud는 지원되는 제공자 목록에 있으며, 화면의 안내에 따라 자격 증명을 입력하세요. 두 리모트가 Remote Manager에 나타나면 두 개의 Explorer 패널에 나란히 여세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Mail.ru Cloud와 Google Drive 리모트 추가" class="img-large img-center" />

RcloneView는 Windows, macOS, Linux에서 한 창으로 90개 이상의 클라우드 스토리지 서비스를 지원하므로, 이후의 다른 마이그레이션에도 같은 방식으로 설정할 수 있습니다.

## 옮기기 전에 복사 계획 세우기

먼저 원본 트리를 둘러보세요. 최상위 폴더에서 **Get Size**로 용량을 추정한 뒤, 지금 옮길 것과 나중에 옮길 것을 정하세요. 예를 들어 소규모 업체라면 공유 「Contracts」 폴더는 바로 마이그레이션하고, 큰 「Archive」 폴더는 업무 외 시간에 예약할 수 있습니다.

Mail.ru 패널의 폴더를 Google Drive 패널로 드래그하세요. 서로 다른 리모트 사이의 드래그는 **Copy**로 동작하므로, 만족할 때까지 원본은 그대로 유지됩니다. 더 큰 작업은 Sync 마법사에서 Copy 작업을 만들고, Advanced Settings에서 전송 수를 설정하고, ISO 이미지처럼 필요 없는 파일은 필터로 건너뛰세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 두 리모트 간 클라우드 대 클라우드 전송" class="img-large img-center" />

## Dry Run, 전송, 모니터링

먼저 **Dry Run**을 실행하세요. 양쪽을 건드리지 않고 복사될 항목을 나열해 주므로, 잘못된 경로를 시간을 낭비하기 전에 잡아낼 수 있습니다. 목록이 맞다면 작업을 시작하고 Transferring 탭에서 진행률, 속도, 파일 수를 확인하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView Transferring 탭에서 진행 중인 전송 모니터링" class="img-large img-center" />

## Folder Compare로 검증하기

복사가 끝나면 왼쪽에 Mail.ru Cloud, 오른쪽에 Google Drive를 두고 **Compare**를 여세요. left-only와 different 파일로 필터링하여 누락되거나 일치하지 않는 항목을 확인한 뒤 해당 파일을 복사하세요. Job History에는 파일의 상태, 크기, 소요 시간이 기록됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="원본과 대상 간 차이를 보여 주는 Folder Compare" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **New Remote**로 Mail.ru Cloud와 Google Drive를 추가하세요.
3. 폴더 하나로 Dry Run을 실행한 다음 Copy 작업을 시작하세요.
4. 이전 계정을 정리하기 전에 Folder Compare로 확인하세요.

검증된 클라우드 간 직접 복사는 마이그레이션의 위험을 낮추고 중단 후 재개하기 쉽게 해 줍니다.

---

**관련 가이드:**

- [Mail.ru Cloud 동기화 관리](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Mail.ru Cloud를 Google Drive와 S3로 전송](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [Mail.ru Cloud를 Backblaze B2로 마이그레이션](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

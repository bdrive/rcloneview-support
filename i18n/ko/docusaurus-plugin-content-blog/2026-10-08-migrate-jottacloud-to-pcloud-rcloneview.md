---
slug: migrate-jottacloud-to-pcloud-rcloneview
title: "Jottacloud에서 pCloud로 마이그레이션 — RcloneView로 파일 전송"
authors:
  - casey
description: "RcloneView로 Jottacloud의 파일을 pCloud로 옮깁니다. 두 리모트를 연결하고, Dry Run으로 미리 확인하고, 클라우드 간 전송을 실행한 뒤 Folder Compare로 검증하세요."
keywords:
  - Jottacloud pCloud 마이그레이션
  - Jottacloud pCloud 전송
  - Jottacloud에서 pCloud로 이전
  - 클라우드 간 전송
  - RcloneView Jottacloud
  - RcloneView pCloud
  - Jottacloud 파일 이동
  - Jottacloud 대안
  - rclone GUI 마이그레이션
tags:
  - RcloneView
  - jottacloud
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud에서 pCloud로 마이그레이션 — RcloneView로 파일 전송

> RcloneView는 수동으로 내려받고 다시 업로드하는 대신, 미리 확인하고 검증할 수 있는 클라우드 간 전송으로 Jottacloud 라이브러리를 pCloud로 옮깁니다.

Jottacloud에서 pCloud로 갈아타려면 대개 수년간 쌓인 사진, 문서, 아카이브를 직접 내려받고 올려야 하는데, 이를 원하는 사람은 없습니다. RcloneView는 두 서비스를 리모트로 연결해 그 사이에서 데이터를 전송하므로, 한 창에서 이전 작업을 미리 확인하고, 실행하고, 검증할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 연결

Remote > New Remote를 열어 Jottacloud를 추가한 다음 pCloud를 추가합니다. pCloud는 OAuth를 사용하므로 브라우저 창이 열려 로그인하면 리모트가 자동으로 연결됩니다. Jottacloud는 같은 New Remote 마법사에서 안내에 따라 설정합니다.

각 리모트를 별도의 Explorer 패널에서 열어 루트 폴더를 탐색하세요. 양쪽 목록이 모두 보이면 데이터를 옮기기 전에 연결이 정상 동작함을 확인한 것입니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Jottacloud와 pCloud 리모트 추가" class="img-large img-center" />

## Dry Run으로 전송 미리보기

왼쪽에 Jottacloud, 오른쪽에 pCloud를 두고 폴더를 끌어다 놓아 빠르게 복사하거나, 전체 라이브러리를 위한 동기화 작업을 만들 수 있습니다. 서로 다른 리모트 사이에서 끌어서 놓기는 이동이 아니라 복사로 동작하므로, 직접 정리하기 전까지 원본은 그대로 유지됩니다.

전체 마이그레이션이라면 4단계 마법사로 작업을 만들고, 원본과 대상 폴더를 선택한 뒤 먼저 Dry Run을 실행하세요. 아무것도 변경하지 않고 복사되거나 삭제될 파일 목록을 보여 줍니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Jottacloud에서 pCloud로의 클라우드 간 전송" class="img-large img-center" />

## 작업 실행 및 진행 상황 확인

작업을 시작하고 Transferring 탭에서 진행률, 속도, 파일 수를 확인하세요. 라이브러리가 크다면 2단계에서 전송 수를 적당히 유지하고, 짧은 네트워크 중단으로 실행이 끝나지 않도록 "Retry entire sync if fails"를 3으로 두세요.

단계적으로 마이그레이션할 계획이라면 필터링 단계에서 폴더, 파일 사용 기간, 또는 Image나 Document 같은 사전 정의 유형으로 범위를 제한하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView에서 Jottacloud에서 pCloud로의 전송 모니터링" class="img-large img-center" />

## 무엇이든 해지하기 전에 검증

Compare를 열어 Jottacloud와 pCloud를 나란히 놓으세요. 왼쪽에만 있는 파일과 서로 다른 파일을 표시해 도착하지 않은 항목을 찾은 다음, 해당 항목만 복사합니다. 이전 계정을 정리하기 전에 Job History에서 최종 상태를 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView에서 Folder Compare로 마이그레이션 검증" class="img-large img-center" />

## 시작하기

1. **RcloneView 다운로드**: [rcloneview.com](https://rcloneview.com/src/download.html)에서 받으세요.
2. Jottacloud와 pCloud를 리모트로 추가하고 둘 다 탐색해 봅니다.
3. Jottacloud에서 pCloud로 동기화 또는 복사 작업을 만들고 Dry Run을 실행합니다.
4. 작업을 실행한 뒤 Folder Compare와 Job History로 확인합니다.

미리 확인하고 검증한 전송이라면 이미 가지고 있는 파일을 위험에 빠뜨리지 않고 스토리지 제공업체를 바꿀 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Jottacloud를 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [RcloneView로 pCloud를 Dropbox로 마이그레이션](https://rcloneview.com/support/blog/migrate-pcloud-to-dropbox-rcloneview)
- [Jottacloud 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

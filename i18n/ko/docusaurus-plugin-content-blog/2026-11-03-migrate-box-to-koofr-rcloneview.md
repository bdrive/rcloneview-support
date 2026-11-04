---
slug: migrate-box-to-koofr-rcloneview
title: "Box에서 Koofr로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - jay
description: "RcloneView로 Box에서 Koofr로 마이그레이션하세요: 두 리모트를 연결하고, 전송을 Dry Run으로 확인한 뒤, 클라우드 간 복사를 실행하고 Folder Compare로 결과를 검증합니다."
keywords:
  - Box에서 Koofr로 마이그레이션
  - Box Koofr 전송
  - Box Koofr 마이그레이션
  - RcloneView Box
  - RcloneView Koofr
  - 클라우드 간 전송
  - Box에서 파일 옮기기
  - Koofr 유럽 클라우드 스토리지
  - rclone GUI 마이그레이션
  - Box Docs 필터
tags:
  - RcloneView
  - box
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box에서 Koofr로 마이그레이션 — RcloneView로 파일 전송하기

> 내 디스크에 먼저 다운로드하지 않고도 Box 워크스페이스를 Koofr로 옮기세요.

팀이 Box를 떠나는 이유는 다양합니다. 프로젝트가 끝났거나, 계약이 종료되었거나, 유럽 스토리지 제공업체를 선호하기 때문입니다. Koofr는 자연스러운 이전 대상이지만, 수년간 쌓인 폴더를 수동으로 옮기는 일은 느리고 실수하기 쉽습니다. RcloneView는 두 서비스를 하나의 창에서 연결하고 클라우드 간 복사를 실행하며, Dry Run과 비교 단계를 통해 누락된 항목이 없는지 확인합니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box와 Koofr를 리모트로 연결하기

Remote 탭을 열고 New Remote를 선택하세요. Box는 OAuth로 로그인합니다. 브라우저가 열리면 접근을 승인하고, RcloneView가 자동으로 연결합니다. 회사 계정을 마이그레이션하는 경우 Box for Business는 리모트 구성에 `box_sub_type = enterprise` 설정이 필요합니다.

Koofr도 같은 방식으로 두 번째 리모트로 추가하세요. 두 리모트가 Remote Manager에 표시되면, 파일을 하나도 옮기기 전에 두 개의 Explorer 패널에서 나란히 열어 원본과 대상을 살펴볼 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Box와 Koofr 리모트 추가" class="img-large img-center" />

## 필터와 Dry Run으로 복사 계획하기

Box 계정에는 보관하려는 파일 외에도 더 많은 것이 들어 있는 경우가 많습니다. 동기화 마법사 3단계에서는 최대 파일 크기, 최대 파일 보존 기간 또는 폴더 깊이 제한을 설정할 수 있습니다. 미리 정의된 Box Docs 필터도 있으며, `.git/` 폴더나 `.iso` 파일을 제외하는 사용자 지정 규칙도 만들 수 있습니다.

무엇이든 실행하기 전에 Dry Run을 사용하세요. 양쪽을 변경하지 않고 복사 및 삭제될 파일 목록을 보여줍니다. 마이그레이션에는 미러링 동기화 대신 Copy 작업을 선택하여, 대상에 이미 데이터가 있더라도 Koofr의 항목이 삭제되지 않도록 하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Box에서 Koofr로 클라우드 간 전송" class="img-large img-center" />

## 전송 실행 및 진행 상황 확인

작업을 시작하고 Transferring 탭에서 진행 상황을 확인하세요. 진행률, 속도, 파일 수가 실시간으로 표시됩니다. 대용량 라이브러리의 경우 2단계에서 파일 전송 수를 늘리되, 어느 한쪽 백엔드의 응답이 느리다면 equality checker 수는 적당하게 유지하세요. "Retry entire sync if fails"의 기본값은 3이며, 일시적인 네트워크 오류에 도움이 됩니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring 탭에서 Box에서 Koofr로의 전송 모니터링" class="img-large img-center" />

## Folder Compare로 검증하기

작업이 끝나면 왼쪽에 Box, 오른쪽에 Koofr를 두고 Compare를 여세요. 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 다른 파일에 대한 필터로 남은 항목을 정확히 확인할 수 있습니다. 남은 파일은 copy-right 동작으로 전송하세요. Job History에는 각 실행의 상태, 크기, 파일 수가 마이그레이션 기록으로 남습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="마이그레이션 후 Box와 Koofr 폴더 비교" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Box(OAuth)와 Koofr를 리모트로 추가하세요.
3. 필터를 적용한 Copy 작업을 만든 다음 Dry Run을 실행하세요.
4. 작업을 실행한 후 Folder Compare로 결과를 확인하세요.

Compare에서 양쪽이 일치할 때까지 Box 계정은 그대로 두세요.

---

**관련 가이드:**

- [Box 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Koofr 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [RcloneView로 Box에서 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />

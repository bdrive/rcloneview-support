---
slug: migrate-pcloud-to-jottacloud-rcloneview
title: "pCloud에서 Jottacloud로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - alex
description: "RcloneView로 pCloud에서 Jottacloud로 마이그레이션하세요: 두 리모트를 연결하고, Dry Run으로 미리 확인한 뒤, 클라우드 간 복사를 실행하고 Folder Compare로 검증합니다."
keywords:
  - pCloud에서 Jottacloud로 마이그레이션
  - pCloud Jottacloud 전송
  - pCloud Jottacloud 마이그레이션
  - RcloneView pCloud
  - RcloneView Jottacloud
  - 클라우드 간 전송
  - pCloud에서 파일 옮기기
  - 유럽 클라우드 스토리지 마이그레이션
  - rclone GUI 마이그레이션
tags:
  - RcloneView
  - pcloud
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud에서 Jottacloud로 마이그레이션 — RcloneView로 파일 전송하기

> pCloud 라이브러리를 Jottacloud로 클라우드 간 옮기세요. 먼저 미리 확인하고, 마지막에 검증 단계를 거칩니다.

고객 아카이브를 통합하는 사진작가나 공유 폴더를 새 제공업체로 옮기는 가족 모두 같은 일을 마주합니다. 한 클라우드에 있는 수천 개의 파일을 다른 클라우드로 옮겨야 하는 일입니다. 모든 것을 노트북에 다운로드한 뒤 다시 업로드하는 방식은 느리고 불안정합니다. RcloneView는 pCloud와 Jottacloud를 하나의 창에서 연결하고 둘 사이의 복사를 실행하며, Dry Run과 Folder Compare로 결과를 확인할 수 있게 해 줍니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud와 Jottacloud를 리모트로 연결하기

Remote 탭을 열고 New Remote를 선택합니다. pCloud는 OAuth로 로그인합니다. 브라우저가 열리고 접근을 승인하면 RcloneView가 자동으로 연결됩니다. 두 번째 리모트로 Jottacloud를 추가하려면 해당 제공업체의 화면 안내를 따르세요.

두 리모트가 Remote Manager에 표시되면 두 개의 Explorer 패널에 나란히 열어 보세요. 원본과 대상을 먼저 살펴보면 어떤 폴더를 옮기고 어디에 두어야 할지 결정하는 데 도움이 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 pCloud와 Jottacloud 리모트 추가" class="img-large img-center" />

## 필터와 Dry Run으로 복사 계획하기

작업 마법사의 3단계에서는 최대 파일 크기, 최대 파일 보관 기간, 폴더 깊이로 전송을 제한할 수 있습니다. 미리 정의된 필터는 Music, Video, Image, Document 파일을 다루며, 사용자 지정 규칙으로 `.git/` 폴더나 `.iso` 파일 같은 패턴을 제외할 수 있어 설치 프로그램과 디스크 이미지를 건너뛰는 데 유용합니다.

실제 작업 전에 Dry Run을 실행하세요. 어느 쪽도 변경하지 않고 복사되거나 삭제될 파일의 목록을 보여 줍니다. 마이그레이션에는 미러링 동기화 대신 Copy 작업을 선택하여, Jottacloud에 이미 있는 항목이 삭제되지 않도록 하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 pCloud에서 Jottacloud로 클라우드 간 전송" class="img-large img-center" />

## 전송 실행 및 진행 상황 확인

작업을 시작하고 Transferring 탭에서 진행 상황, 속도, 파일 수를 확인하세요. 라이브러리가 큰 경우 2단계에서 파일 전송 수를 늘리되, 어느 한 백엔드의 응답이 느리다면 동등성 검사기 수는 적당히 유지하세요. "Retry entire sync if fails"의 기본값은 3이며, 일시적인 네트워크 오류를 흡수해 줍니다.

한 번의 세션으로 부족하다면 Job Manager에 작업을 저장하고 나중에 다시 실행하세요. Copy 작업은 없거나 다른 파일만 전송하므로, 반복 실행은 이전 실행이 멈춘 지점부터 이어집니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 pCloud에서 Jottacloud로 Copy 작업 실행" class="img-large img-center" />

## Folder Compare로 검증하기

작업이 완료되면 왼쪽에 pCloud, 오른쪽에 Jottacloud를 놓고 Compare를 엽니다. 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 다른 파일 필터로 아직 옮겨야 할 항목을 확인할 수 있고, 오른쪽으로 복사 동작으로 남은 파일을 전송할 수 있습니다. Job History에는 실행마다 상태, 크기, 속도, 파일 수가 마이그레이션 기록으로 남습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="마이그레이션 후 pCloud와 Jottacloud 폴더 비교" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. pCloud(OAuth)와 Jottacloud를 리모트로 추가합니다.
3. 필터를 적용한 Copy 작업을 만들고 Dry Run을 실행합니다.
4. 작업을 실행한 뒤 Folder Compare로 결과를 확인합니다.

Compare에서 양쪽이 일치하는 것을 확인할 때까지 pCloud 계정은 그대로 두세요.

---

**관련 가이드:**

- [pCloud 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Jottacloud 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [RcloneView로 Jottacloud에서 pCloud로 마이그레이션](https://rcloneview.com/support/blog/migrate-jottacloud-to-pcloud-rcloneview)

<CloudSupportGrid />

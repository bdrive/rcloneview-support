---
slug: migrate-dropbox-to-koofr-rcloneview
title: "Dropbox에서 Koofr로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - robin
description: "RcloneView로 Dropbox에서 Koofr로 마이그레이션하세요: 두 리모트를 연결하고, Dry Run을 실행한 뒤, 클라우드 간 복사를 수행하고 Folder Compare로 결과를 검증합니다."
keywords:
  - Dropbox에서 Koofr로 마이그레이션
  - Dropbox Koofr 전송
  - Dropbox Koofr 마이그레이션
  - RcloneView Dropbox
  - RcloneView Koofr
  - 클라우드 간 전송
  - Dropbox에서 파일 옮기기
  - Koofr 유럽 클라우드 스토리지
  - rclone GUI 마이그레이션
  - Dropbox for Business 마이그레이션
tags:
  - RcloneView
  - dropbox
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox에서 Koofr로 마이그레이션 — RcloneView로 파일 전송하기

> 복사 전에 미리 확인하고 복사 후에 비교하면서, Dropbox 계정을 Koofr 클라우드로 클라우드 간 옮기세요.

디자인 에이전시가 고객 계정을 정리하거나, 프리랜서가 아카이브를 유럽 제공업체에 호스팅하고 싶을 때가 있습니다. 어느 쪽이든 수천 개의 Dropbox 폴더를 노트북으로 끌어다 옮기는 일은 느리고 실수하기 쉽습니다. RcloneView는 Dropbox와 Koofr를 하나의 창에서 연결하고 둘 사이의 복사를 실행하며, Dry Run과 Folder Compare로 결과를 확인할 수 있게 해 줍니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox와 Koofr를 리모트로 연결하기

Remote 탭을 열고 New Remote를 선택합니다. Dropbox는 OAuth로 로그인합니다. 브라우저가 열리고 접근을 승인하면 RcloneView가 자동으로 연결됩니다. 회사 계정의 경우 Dropbox for Business는 리모트 구성에서 `dropbox_business = true` 설정이 필요합니다.

두 번째 리모트로 Koofr를 추가합니다. 두 리모트가 Remote Manager에 표시되면 두 개의 Explorer 패널에 나란히 열어 보세요. 무언가를 옮기기 전에 원본 트리와 대상 트리를 살펴보면 어떤 폴더가 중요한지 알 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Dropbox와 Koofr 리모트 추가" class="img-large img-center" />

## 필터와 Dry Run으로 복사 계획하기

대부분의 Dropbox 계정에는 옮기고 싶지 않은 임시 파일이 있습니다. 작업 마법사의 3단계에서는 최대 파일 크기, 최대 파일 보관 기간, 폴더 깊이 제한을 설정할 수 있습니다. 미리 정의된 필터는 Music, Video, Image, Document 파일을 다루며, 사용자 지정 규칙으로 `.git/` 폴더나 `.iso` 파일 같은 패턴을 제외할 수 있습니다.

실제 작업 전에 Dry Run을 실행하세요. 어느 쪽도 건드리지 않고 복사되거나 삭제될 파일의 목록을 보여 줍니다. 마이그레이션에는 미러링 동기화 대신 Copy 작업을 선택하여, Koofr에 이미 저장된 항목이 삭제되지 않도록 하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Dropbox에서 Koofr로 클라우드 간 전송" class="img-large img-center" />

## 전송 실행 및 진행 상황 확인

작업을 시작하고 Transferring 탭에서 진행 상황, 속도, 파일 수를 확인하세요. 라이브러리가 큰 경우 2단계에서 파일 전송 수를 늘리되, 어느 한 서비스의 응답이 느리다면 동등성 검사기 수는 적당히 유지하세요. "Retry entire sync if fails"의 기본값은 3이며, 일시적인 네트워크 오류를 흡수해 줍니다.

라이브러리가 너무 커서 한 번에 끝나지 않으면 Job Manager에 작업을 저장하고 나중에 다시 실행하세요. Copy 작업은 없거나 다른 항목만 전송하므로, 두 번째 실행은 첫 번째가 멈춘 지점부터 이어집니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring 탭에서 Dropbox에서 Koofr로의 전송 모니터링" class="img-large img-center" />

## Folder Compare로 검증하기

작업이 끝나면 왼쪽에 Dropbox, 오른쪽에 Koofr를 놓고 Compare를 엽니다. 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 다른 파일 필터로 남은 항목을 확인할 수 있습니다. 오른쪽으로 복사 동작은 남은 항목을 전송합니다. Job History에는 실행마다 상태, 크기, 속도, 파일 수가 기록되어 마이그레이션 문서로 활용하기 좋습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="완료된 Dropbox에서 Koofr로의 마이그레이션을 보여 주는 Job History" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Dropbox(OAuth)와 Koofr를 리모트로 추가합니다.
3. 필터를 적용한 Copy 작업을 만들고 Dry Run을 실행합니다.
4. 작업을 실행한 뒤 Folder Compare로 결과를 확인합니다.

Compare에서 양쪽이 일치하는 것을 확인할 때까지 Dropbox 계정은 그대로 두세요.

---

**관련 가이드:**

- [Koofr 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [RcloneView로 Koofr에서 Dropbox로 마이그레이션](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [RcloneView로 Dropbox에서 pCloud로 마이그레이션](https://rcloneview.com/support/blog/migrate-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />

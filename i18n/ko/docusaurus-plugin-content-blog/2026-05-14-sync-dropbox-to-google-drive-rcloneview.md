---
slug: sync-dropbox-to-google-drive-rcloneview
title: "Dropbox를 Google Drive와 동기화 — RcloneView로 클라우드 백업 자동화하기"
authors:
  - casey
description: "RcloneView로 Dropbox를 Google Drive와 자동으로 동기화하는 방법을 알아보세요. 스케줄링, 필터링, 실시간 전송 모니터링을 갖춘 반복 클라우드 간 백업 작업을 설정합니다."
keywords:
  - sync Dropbox to Google Drive
  - Dropbox Google Drive sync
  - Dropbox to Google Drive backup
  - cloud to cloud sync RcloneView
  - automate Dropbox Google Drive transfer
  - rclone Dropbox Google Drive GUI
  - Dropbox cloud backup solution
  - recurring cloud sync job
  - cross-cloud backup automation
  - RcloneView cloud sync tool
tags:
  - RcloneView
  - dropbox
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox를 Google Drive와 동기화 — RcloneView로 클라우드 백업 자동화하기

> 스크립트나 터미널, 비싼 서드파티 동기화 서비스 없이 Dropbox와 Google Drive를 자동으로 동기화 상태로 유지하세요.

많은 팀이 일상적인 파일 공유를 위해 Dropbox를 사용하지만, 스마트한 클라우드 전략은 Google Drive와 같은 두 번째 제공업체에 중복 사본을 유지하는 것을 의미합니다. 실수로 인한 삭제로부터 보호하거나, 워크스페이스 마이그레이션을 준비하거나, 이중 클라우드 백업 정책을 충족하는 경우 등, RcloneView는 Dropbox를 Google Drive와 안정적으로 동기화할 수 있는 예약된 GUI 기반 파이프라인을 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox와 Google Drive를 리모트로 연결하기

동기화 작업을 예약하기 전에 RcloneView는 두 제공업체 모두에 대한 인증된 연결이 필요합니다. 앱을 열고 **Remote 탭**으로 이동한 다음 **New Remote**를 클릭하세요. 제공업체 목록에서 **Dropbox**를 선택하고 OAuth 브라우저 로그인을 완료합니다 — API 키가 필요하지 않습니다. **Google Drive**에 대해서도 동일한 과정을 반복하여 Google 계정으로 인증하세요.

이제 두 리모트가 Remote Manager에 표시되며 모든 Explorer 패널에서 접근할 수 있습니다. 왼쪽 패널에서 Dropbox 폴더를, 오른쪽 패널에서 Google Drive 대상을 탐색할 수 있어 작업을 만들기 전에 소스와 대상을 쉽게 식별할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Google Drive remotes in RcloneView" class="img-large img-center" />

**Dropbox for Business**를 사용하는 팀은 리모트 설정 시 `dropbox_business = true` 매개변수를 설정하세요. **Google 공유 드라이브**의 경우 팀 폴더가 리모트 탐색기에서 접근 가능하도록 공유 드라이브 옵션을 활성화하세요.

## 스케줄링을 포함한 동기화 작업 만들기

두 리모트가 연결되면 **Home 탭**으로 이동하여 **Sync**를 클릭해 작업 마법사를 엽니다. 1단계에서 Dropbox 폴더를 소스로, Google Drive 폴더를 대상으로 선택하세요. `dropbox-to-gdrive-backup`과 같이 작업에 알기 쉬운 이름을 지정합니다.

2단계에서는 연결 속도에 맞게 동시 전송 개수를 조정하세요. **체크섬 검증**을 활성화하면 크기뿐 아니라 바이트 단위로 파일 무결성이 확인됩니다. 3단계에서는 파일 유형별로 필터링할 수 있습니다 — 예를 들어 Dropbox가 동기화된 팀 폴더에 남기는 `.tmp` 또는 `.lnk` 파일을 제외할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled Dropbox to Google Drive sync job in RcloneView" class="img-large img-center" />

4단계에서 자동화가 이루어집니다. **PLUS 라이선스**가 있으면 cron 스타일 스케줄을 설정할 수 있습니다 — 예를 들어 매일 밤 오전 2시 — 그러면 최신 Dropbox 콘텐츠가 자동으로 Google Drive에 미러링됩니다. 매일 실행하려면 cron 표현식 `0 2 * * *`를, 일요일마다 주간 동기화하려면 `0 2 * * 0`을 사용하세요. **Simulate schedule** 버튼은 저장하기 전에 다음 몇 번의 실행 시간을 미리 보여줍니다.

## 실시간 전송 모니터링 및 기록 검토

작업이 실행되면 앱 하단의 **Transferring 탭**이 파일 수, 전송 속도, 총 이동 데이터, 중간에 중단해야 할 경우를 위한 취소 버튼 등 실시간 전송 진행 상황을 보여줍니다. Dropbox에서 Google Drive로 80GB의 프로젝트 아카이브를 동기화하는 크리에이티브 에이전시의 경우, 전송이 완료되면서 각 파일의 상태가 갱신되는 것을 지켜볼 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Dropbox to Google Drive sync" class="img-large img-center" />

각 실행 후 **Job History** 화면에는 실행 유형(수동 또는 예약), 소요 시간, 전송된 총 바이트 수, 속도, 최종 상태(완료됨, 오류 발생, 취소됨)가 기록됩니다. Dropbox 또는 Google Drive에서 일시적인 API 속도 제한이 발생하면 내장된 재시도 메커니즘(기본값: 3회 시도)이 수동 개입 없이 일시적인 실패를 처리합니다.

## 폴더 비교로 동기화 결과 확인하기

초기 전체 동기화 후에는 RcloneView의 **Folder Compare** 도구를 사용하여 양쪽이 일치하는지 확인하세요. Home 탭에서 실행하고 Dropbox 소스와 Google Drive 대상을 선택한 다음 Compare를 클릭하세요. 결과에는 왼쪽에만 있는 파일(아직 동기화되지 않음), 오른쪽에만 있는 파일(Drive에 수동으로 추가됨), 동일한 파일, 크기가 일치하지 않는 파일이 표시됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Dropbox and Google Drive are in sync" class="img-large img-center" />

첫 라이브 동기화 전에 **Dry Run**을 실행하여 어떤 파일이 복사되거나 삭제될지 정확히 미리 확인하세요. 이는 특히 활성화된 Dropbox 팀 폴더를 동기화할 때 중요합니다 — Google Drive 대상에 어떤 변경이 반영되기 전에 범위를 확인하고 싶을 것입니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. OAuth 로그인을 통해 Dropbox 리모트를 추가하세요 (Remote 탭 > New Remote).
3. 같은 방식으로 Google Drive 리모트를 추가하세요.
4. 원하는 스케줄로 Dropbox에서 Google Drive로 향하는 Sync 작업을 생성하세요.

적절한 Dropbox-to-Google Drive 파이프라인을 구축하면 데이터가 두 클라우드에 존재하게 되어 제공업체 장애, 실수로 인한 삭제, 예기치 않은 요금 청구로부터 보호받을 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Dropbox를 Google Drive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [Dropbox 관리 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [RcloneView로 Google Drive를 Dropbox와 동기화하기](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)

<CloudSupportGrid />

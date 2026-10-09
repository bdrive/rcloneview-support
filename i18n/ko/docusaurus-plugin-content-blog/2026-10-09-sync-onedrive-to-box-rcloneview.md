---
slug: sync-onedrive-to-box-rcloneview
title: "OneDrive를 Box로 동기화 — RcloneView로 클라우드 백업"
authors:
  - alex
description: "RcloneView로 OneDrive를 Box에 동기화하세요. OAuth로 두 서비스를 연결하고, Dry Run으로 미리 확인한 뒤, 클라우드 간 동기화를 실행하고 Folder Compare로 검증합니다."
keywords:
  - OneDrive Box 동기화
  - OneDrive Box 백업
  - OneDrive Box 동기화 도구
  - OneDrive Box 복사
  - 클라우드 간 동기화
  - OneDrive Box 마이그레이션
  - RcloneView
  - rclone GUI
  - 폴더 비교
  - 예약 클라우드 동기화
tags:
  - RcloneView
  - onedrive
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive를 Box로 동기화 — RcloneView로 클라우드 백업

> OneDrive 파일의 두 번째 사본을 Box에 보관하세요. 두 클라우드 사이에서 직접 이동합니다.

팀 내부에서는 OneDrive를 쓰지만 고객, 파트너, 규정 준수 절차에서는 Box에 파일이 있기를 요구하는 경우가 많습니다. 전부 다운로드한 뒤 다시 업로드하는 방식은 느리고, 여유 로컬 디스크도 필요합니다. RcloneView는 두 서비스를 연결해 클라우드 간 동기화를 수행하며, 사전에 Dry Run으로 확인하고 사후에 시각적으로 비교할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive와 Box 연결

두 서비스 모두 OAuth 브라우저 로그인을 사용합니다. Remote 탭에서 **New Remote**를 클릭하고 Microsoft OneDrive를 선택한 뒤 로그인하세요. Box도 같은 방식으로 반복합니다. Box Business 또는 Enterprise 계정이라면 구성 중에 `box_sub_type = enterprise`를 설정하세요.

RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화할 수 있으며 Windows, macOS, Linux에서 동작합니다. 두 리모트가 만들어지면 두 개의 Explorer 패널에 나란히 여세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 OneDrive와 Box 리모트 추가" class="img-large img-center" />

## 복사 또는 동기화 선택 후 Dry Run

Sync 마법사를 열고 OneDrive를 소스로, Box 폴더를 대상으로 선택하세요. 단방향 동기화는 대상만 변경하므로, OneDrive에서 삭제한 파일은 Box에서도 삭제됩니다. 미러링이 아닌 안전망을 원한다면 Copy 작업을 사용하세요.

먼저 **Dry Run**을 실행하세요. 아무것도 변경하지 않고 복사될 파일과 삭제될 파일을 나열해 줍니다. 예를 들어 회계 팀이 150GB 규모의 "Clients" 폴더를 동기화할 때, 실제 실행 전에 폴더 구조를 확인하고 불필요한 임시 파일을 찾아낼 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive에서 Box로 클라우드 간 동기화" class="img-large img-center" />

## 필터링과 작업 조정

마법사 2단계에서는 파일 전송 수, 멀티스레드 전송, 동일성 검사기(equality checker) 수를 설정합니다. 크기와 시간만이 아니라 해시와 크기로 비교하려면 체크섬 비교를 활성화하세요. 3단계에서는 최대 크기, 기간, 사용자 지정 규칙으로 파일을 제외하거나, 문서 또는 이미지용 사전 정의 필터를 사용할 수 있습니다. Box에는 요금제에 따른 자체 업로드 크기 제한이 있으므로, 매우 큰 파일을 동기화하기 전에 계정을 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="OneDrive에서 Box로 동기화 작업 시작" class="img-large img-center" />

## 모니터링, 비교, 예약

Transferring 탭에서 속도, 파일 수, 크기를 보며 진행 상황을 확인하세요. 이후 **Compare**를 열어 왼쪽에 OneDrive, 오른쪽에 Box를 놓고 왼쪽에만 있는 파일이나 서로 다른 파일을 필터링하세요. Job History에는 실행마다 상태, 소요 시간, 크기가 기록됩니다.

PLUS 라이선스에서는 4단계에서 crontab 형식의 일정을 추가하여, RcloneView가 시스템 트레이에서 실행되는 동안 매일 밤 동기화가 반복되도록 할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OneDrive와 Box 간 Folder Compare" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭에서 OneDrive와 Box 리모트를 추가하세요.
3. OneDrive에서 Box로 Sync 또는 Copy 작업을 만들고 Dry Run을 실행하세요.
4. 작업을 실행한 뒤 Folder Compare와 Job History로 검증하세요.

Box에 검증된 두 번째 사본이 있으면 팀이 다음에 어떤 플랫폼으로 옮기든 믿을 수 있는 대비책이 됩니다.

---

**관련 가이드:**

- [OneDrive 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Box 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Box에서 OneDrive로 마이그레이션 — RcloneView로 파일 전송](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />

---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Box for Business 스토리지 관리하기 — RcloneView로 동기화 및 백업하기"
authors:
  - robin
description: "Box for Business를 RcloneView에 연결해 엔터프라이즈 Box 계정의 크로스 플랫폼 파일 탐색, 클라우드 간 동기화, 예약 백업을 이용하세요."
keywords:
  - box for business
  - box 엔터프라이즈 스토리지
  - rcloneview box business
  - box business 동기화
  - box_sub_type enterprise
  - 엔터프라이즈 클라우드 스토리지 gui
  - box 팀 계정 백업
  - 비즈니스 클라우드 스토리지 관리
  - box business 마이그레이션
  - 멀티 클라우드 파일 관리
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box for Business 스토리지 관리하기 — RcloneView로 동기화 및 백업하기

> Box for Business 엔터프라이즈 계정을 RcloneView에 연결해서, 관리하는 다른 모든 클라우드와 함께 공유된 회사 폴더를 탐색, 동기화, 백업하세요.

Box for Business 계정은 하나의 개인 계정이 아니라 엔터프라이즈가 관리하는 폴더를 중심으로 콘텐츠를 구성하므로, 표준 Box 연결이 올바르게 동작하려면 하나의 추가 설정이 필요합니다. RcloneView는 이를 직접 처리하여, IT 관리자가 Box 웹 앱과 별도의 동기화 클라이언트를 오가지 않고도 하나의 창에서 엔터프라이즈 Box 콘텐츠를 탐색, 전송, 보호할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box for Business 리모트 설정하기

Box for Business 계정을 추가하는 과정은 개인용 Box 연결과 동일하게 시작됩니다: New Remote를 클릭하고 Box를 선택한 다음 브라우저에서 OAuth 로그인을 완료하세요. 차이점은 하나의 추가 설정뿐입니다 — `box_sub_type = enterprise` — 이 설정은 리모트를 개별 사용자의 공간이 아니라 엔터프라이즈 계정 구조로 연결합니다. 설정이 적용되면 엔터프라이즈 계정의 폴더가 다른 리모트와 마찬가지로 Explorer 패널에 로드됩니다.

마운트 전용 도구와 달리, RcloneView는 FREE 라이선스에서도 폴더를 동기화하고 비교할 수 있으므로, 다른 부서의 클라우드와 함께 Box를 관리하는 관리자는 파일을 옮기기 위해 별도의 애플리케이션을 둘 필요가 없습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## 엔터프라이즈 폴더 탐색하기

연결이 완료되면 File Explorer 패널에 모든 리모트에서 사용되는 것과 동일한 Name, Type, Modified date, Size 열과 함께 엔터프라이즈 폴더 구조가 표시되며, 깊은 부서 계층 구조를 탐색할 수 있는 접을 수 있는 폴더 트리도 제공됩니다. 브레드크럼 경로 표시줄의 Copy Full Path 옵션은 `remote:path` 형식으로 경로를 출력하며, 이는 빠른 `rclone about` 스토리지 확인을 위해 내장된 rclone Terminal로 위치를 넘길 때 유용합니다.

Ctrl+Click과 Shift+Click 다중 선택을 사용하면 전체 계정을 처음부터 끝까지 살펴보지 않고도 대규모 엔터프라이즈 공간에서 특정 프로젝트 폴더를 골라낼 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Box for Business enterprise folders in RcloneView Explorer" class="img-large img-center" />

## 엔터프라이즈 데이터를 두 번째 클라우드에 백업하기

엔터프라이즈 파일을 단일 프로바이더에만 보관하는 것은 많은 IT 팀이 감수하고 싶어 하지 않는 위험이므로, Box for Business 콘텐츠를 Amazon S3, Backblaze B2 또는 다른 클라우드에 미러링하여 보조 사본을 만드는 것이 일반적인 패턴입니다. RcloneView의 4단계 Sync 마법사는 이를 처리합니다: Box for Business 리모트를 소스로 선택하고, 대상 리모트를 선택한 다음, 동기화 방향을 단방향으로 설정하면 백업 대상이 상위 항목을 건드리지 않고 소스를 그대로 반영합니다. Filtering 설정을 이용하면 용량이 큰 미디어를 제외하거나 작업을 특정 기간 이내의 파일로 제한할 수 있어, 백업 범위를 실제로 중요한 것에만 맞출 수 있습니다.

첫 전체 동기화 전에 Dry Run을 실행하면 복사되고 삭제될 파일의 정확한 목록이 표시되며, 이는 전체 엔터프라이즈 계정 분량의 데이터를 옮기기 전에 확인할 가치가 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Box for Business backup job in RcloneView" class="img-large img-center" />

## 반복 백업 자동화하기

PLUS 라이선스 사용자는 Box for Business 백업 작업에 crontab 형식의 예약을 걸어, 수동 개입 없이 매일 밤 또는 매주 실행되도록 할 수 있습니다. 이후 Job History는 모든 실행에 대해 실행 유형, 소요 시간, 상태, 전송된 총 용량을 기록하므로, 관리자는 Box 자체 관리 콘솔을 뒤지지 않고도 확인할 수 있는 기록을 얻습니다.

## 시작하기

1. **RcloneView 다운로드**: [rcloneview.com](https://rcloneview.com/src/download.html)에서 다운로드하세요.
2. 새 Box 리모트를 추가하고 설정 중에 `box_sub_type = enterprise`를 설정하세요.
3. Explorer 패널에서 엔터프라이즈 폴더를 탐색하고 필요한 부서에 접근할 수 있는지 확인하세요.
4. Sync 작업을 만들어 엔터프라이즈 데이터를 보조 클라우드에 미러링하고, PLUS 라이선스라면 예약을 설정하세요.

올바르게 구성된 Box for Business 리모트는 그렇지 않으면 한 곳에만 존재하는 회사 데이터를 위한 실질적인 안전망으로 RcloneView를 활용할 수 있게 해줍니다.

---

**관련 가이드:**

- [RcloneView로 Box 스토리지 관리하기 — 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Box를 OneDrive로 마이그레이션하기 — RcloneView로 파일 전송](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)
- [Box 스토리지를 네트워크 드라이브로 마운트하기 — RcloneView 사용](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />

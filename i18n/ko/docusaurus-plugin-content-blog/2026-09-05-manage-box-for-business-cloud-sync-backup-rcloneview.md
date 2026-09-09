---
slug: manage-box-for-business-cloud-sync-backup-rcloneview
title: "Box for Business 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - tayson
description: "Box for Business를 RcloneView에 연결하여 90개 이상의 다른 제공업체와 함께 엔터프라이즈 클라우드 파일을 탐색, 동기화, 마운트, 백업하세요."
keywords:
  - Box for Business
  - Box 엔터프라이즈 스토리지
  - RcloneView
  - 엔터프라이즈 클라우드 동기화
  - 클라우드 스토리지 관리
  - 클라우드 백업 소프트웨어
  - box_sub_type enterprise
  - 멀티 클라우드 파일 관리
  - 비즈니스 클라우드 스토리지
  - 폴더 비교 도구
tags:
  - RcloneView
  - box
  - enterprise
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box for Business 관리 — RcloneView로 파일 동기화 및 백업하기

> 조직의 Box for Business 계정을 다른 드라이브와 똑같이 다루세요 — 하나의 데스크톱 앱에서 탐색, 동기화, 마운트, 백업까지.

Box for Business 계정에는 흔히 수년간 쌓인 부서별 공유 파일이 여러 겹으로 중첩된 팀 폴더에 흩어져 있으며, IT 담당자는 브라우저 탭 안에서만 지내지 않고도 이러한 콘텐츠를 확인하고 이동하고 보호할 신뢰할 수 있는 방법이 필요합니다. RcloneView는 개인 Box 계정과 동일한 OAuth 로그인을 통해 Box for Business에 연결한 다음, 엔터프라이즈 전용 설정 플래그를 적용하여 앱이 조직의 전체 폴더 구조를 볼 수 있게 합니다. 연결되면 이 계정은 RcloneView의 탐색기, 동기화, 마운트 도구에서 다른 리모트와 동일하게 동작하며, 동기화와 폴더 비교 기능은 FREE 라이선스에서도 사용할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box for Business 리모트 설정하기

RcloneView에서 새 리모트를 만들고 Box를 선택하세요 — 앱이 브라우저를 열어 표준 OAuth 로그인을 진행하므로 API 키나 수동 토큰 입력이 필요 없습니다. 회사의 Box 자격 증명으로 로그인하여 연결을 승인하세요.

Box for Business 계정은 개인 Box 로그인 외에 추가 설정이 하나 더 필요합니다: 리모트의 고급 설정에 입력하는 `box_sub_type = enterprise`입니다. 이 설정은 rclone이 단일 개인 계정이 아니라 조직의 공유 팀 구조를 보도록 지시하며, 이를 통해 RcloneView 탐색기 패널에 회사 전체 폴더가 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 새 Box for Business 리모트를 생성하는 모습" class="img-large img-center" />

여러 부서에 걸쳐 여러 Box for Business 계정을 관리한다면, Remote Manager가 각 계정을 별도로 유지해 주므로 자격 증명이나 enterprise 플래그를 독립적으로 편집할 수 있습니다.

## 엔터프라이즈 폴더 비교 및 동기화하기

오래된 파일 서버에서 부서를 이전하거나 중복된 팀 폴더를 정리하기 전에, Folder Compare를 사용해 Box for Business 폴더와 대상 위치 사이에 정확히 무엇이 다른지 확인하세요. 비교 화면은 결과를 왼쪽에만 있음, 오른쪽에만 있음, 동일함, 다름으로 필터링하므로 모든 것을 다시 업로드하는 대신 누락된 항목만 복사할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box for Business 폴더를 다른 클라우드 리모트와 비교하고 동기화하는 모습" class="img-large img-center" />

지속적인 보호를 위해, 단방향 동기화 작업은 소스를 건드리지 않고 중요한 Box for Business 폴더의 보조 사본을 최신 상태로 유지하며, dry run은 실제로 아무것도 이동하기 전에 어떤 파일이 복사되거나 삭제될지 정확히 보여줍니다.

## 백업 예약 및 작업 모니터링하기

Job Manager를 사용하면 동일한 Box for Business 콘텐츠를 두 대상에 동시에 미러링하는 동기화, 복사, 또는 1:N 작업을 구성할 수 있습니다 — 예를 들어 로컬 NAS와 S3 호환 버킷으로, 하나의 동기화 작업으로 온사이트와 오프사이트 백업 요구사항을 모두 충족할 수 있습니다. 이후 Job History는 모든 실행의 시작 시간, 소요 시간, 상태, 파일 수를 기록하므로, 관리자가 야간 백업이 실제로 완료되었는지 확인할 때 유용합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 반복되는 Box for Business 백업 작업을 예약하는 모습" class="img-large img-center" />

PLUS 라이선스 사용자는 crontab 방식의 예약 기능으로 이를 한 단계 더 자동화하여, 누군가 수동으로 실행하지 않아도 밤사이 백업이 실행되도록 할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 새 Box 리모트를 추가하고 회사 계정으로 OAuth 로그인을 완료합니다.
3. 리모트의 고급 설정을 편집하여 `box_sub_type = enterprise`를 설정해 회사 폴더의 잠금을 해제합니다.
4. 동기화 작업이나 마운트를 구성하여 Box for Business 콘텐츠 관리를 시작합니다.

엔터프라이즈 Box 계정이 하나의 인터페이스에서 다른 모든 리모트와 나란히 놓이면, 일상적인 파일 관리와 재해 복구 백업은 더 이상 두 개의 분리된 워크플로우가 아니게 됩니다.

---

**관련 가이드:**

- [Box 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Box에서 SharePoint 또는 OneDrive로 마이그레이션하는 방법 — RcloneView를 이용한 엔터프라이즈 클라우드 마이그레이션](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [RcloneView로 Box 스토리지를 네트워크 드라이브로 마운트하여 원활한 팀 액세스 지원](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />

---
slug: sync-hidrive-to-onedrive-rcloneview
title: "HiDrive를 OneDrive로 동기화 — RcloneView를 이용한 클라우드 백업"
authors:
  - tayson
description: "RcloneView로 HiDrive의 파일을 OneDrive로 동기화하세요. Strato HiDrive 스토리지를 로컬에 다운로드하지 않고 Microsoft OneDrive로 직접 전송합니다."
keywords:
  - HiDrive to OneDrive
  - sync HiDrive OneDrive
  - HiDrive migration
  - Strato HiDrive sync
  - cloud-to-cloud transfer
  - HiDrive RcloneView
  - OneDrive backup
  - European cloud migration
  - RcloneView sync
  - cloud storage transfer
tags:
  - RcloneView
  - hidrive
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive를 OneDrive로 동기화 — RcloneView를 이용한 클라우드 백업

> RcloneView로 Strato HiDrive의 파일을 Microsoft OneDrive로 직접 전송하세요 — 로컬 다운로드 없이 클라우드 간 직접 동기화가 가능합니다.

Strato의 HiDrive는 GDPR을 준수하는 데이터 보관이 필요한 기업들에게 인기 있는 유럽의 클라우드 스토리지 서비스입니다. 조직들이 Microsoft 365를 도입하면서 많은 기업이 Teams와 SharePoint 내에서의 원활한 협업을 위해 HiDrive의 파일을 OneDrive로 통합하고자 합니다. RcloneView는 이러한 전환을 간단하게 만들어줍니다. 두 서비스를 모두 리모트로 추가한 다음, RcloneView의 GUI를 통해 중간 로컬 머신에 파일을 다운로드하지 않고도 HiDrive 폴더를 OneDrive로 직접 동기화할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDrive와 OneDrive 연결하기

HiDrive는 rclone에서 OAuth 인증을 사용합니다. RcloneView에서 HiDrive를 리모트로 추가하면 브라우저 창이 열려 Strato HiDrive 계정으로 로그인하고 액세스 권한을 부여할 수 있습니다. OneDrive에도 동일한 OAuth 방식이 적용됩니다. 제공업체 목록에서 Microsoft OneDrive를 선택하고 Microsoft 계정으로 인증하면 리모트가 구성됩니다.

두 리모트가 모두 활성화되면 RcloneView의 듀얼 패널 탐색기에서 나란히 열어보세요. 한쪽에는 HiDrive 폴더 구조가, 다른 쪽에는 OneDrive가 표시됩니다. 이 시각적 레이아웃은 동기화 작업을 만들기 전에 어떤 HiDrive 폴더가 어떤 OneDrive 대상에 매핑되는지 파악하여 마이그레이션을 계획하는 데 도움이 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## 동기화 작업 구성하기

동기화 마법사를 사용하여 HiDrive에서 OneDrive로의 전송을 생성하세요. HiDrive 원본 폴더와 OneDrive 대상 폴더를 선택한 다음 구성 단계를 진행합니다. 단방향 동기화(기본값이자 안정적인 옵션)는 HiDrive 콘텐츠를 OneDrive에 미러링합니다. 새로 생성되거나 변경된 파일이 복사되며, 원한다면 HiDrive에서 삭제된 파일을 OneDrive에서도 함께 제거할 수 있습니다.

프로젝트 아카이브를 통합하는 팀에게는 필터링 단계가 유용합니다. 최대 파일 연령을 설정하여 지난 2년 이내에 생성되거나 수정된 파일만 마이그레이션하거나, 파일 유형 필터를 사용하여 대용량 동영상 파일은 제외하고 문서, 스프레드시트, 프레젠테이션만 포함할 수 있습니다. `.tmp`나 `/.git/`와 같은 사용자 지정 필터 규칙을 사용하면 작업 공간의 불필요한 파일을 마이그레이션에서 제외할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HiDrive folders to OneDrive with RcloneView" class="img-large img-center" />

실제 전송 전에 Dry Run 모드를 실행하여 파일 목록이 예상과 일치하는지 확인하세요. 시뮬레이션은 실제 변경 없이 어떤 파일이 복사될지 정확히 보여주므로, 비즈니스 데이터를 다른 제공업체로 이전할 때 거쳐볼 만한 가치가 있는 단계입니다.

## 지속적인 동기화 예약하기

전환 기간 동안 HiDrive와 OneDrive를 병행 운영하는 팀의 경우, 예약 기반 동기화(PLUS 라이선스)를 사용하면 두 서비스를 계속 동기화된 상태로 유지할 수 있습니다. 매일, 주 2회 또는 사용자 지정 cron 간격 등 반복 일정을 정의하면 RcloneView가 백그라운드에서 동기화 작업을 처리합니다. 작업 기록(Job History)은 시작 시간, 전송된 파일, 완료 상태와 함께 모든 실행 내역을 기록합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling recurring HiDrive to OneDrive sync in RcloneView" class="img-large img-center" />

동기화가 올바르게 완료되었는지 확인해야 한다면, 폴더 비교(Folder Compare) 기능을 사용하여 OneDrive에 HiDrive의 예상 파일이 제대로 포함되어 있는지 확인하세요. 비교 화면에서는 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 크기가 다른 파일을 보여주어 재전송이 필요한 항목을 놓치지 않도록 도와줍니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭에서 OAuth 브라우저 로그인 방식으로 HiDrive를 추가합니다.
3. OAuth 브라우저 로그인 방식으로 OneDrive를 추가합니다.
4. 동기화 마법사를 사용하여 HiDrive 폴더를 OneDrive로 전송하고, Dry Run으로 먼저 미리 확인합니다.

RcloneView를 통해 HiDrive에서 OneDrive로 이전하면 중간 로컬 스토리지 소비 없이 GUI 기반의 감사 가능한 프로세스를 유지할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 HiDrive Strato 클라우드 동기화 관리하기](https://rcloneview.com/support/blog/manage-hidrive-strato-sync-cloud-rcloneview)
- [RcloneView로 OneDrive 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [RcloneView를 이용한 클라우드 간 마이그레이션](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />

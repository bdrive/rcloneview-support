---
slug: zero-downtime-sharepoint-to-google-shared-drives-rcloneview
title: "RcloneView로 진행하는 무중단 SharePoint에서 Google Shared Drives 마이그레이션"
authors:
  - tayson
description: RcloneView의 멀티 클라우드 Explorer, Compare 미리보기, Sync 작업, 스케줄러 기반 델타 실행을 결합하여 사용자 작업을 중단시키지 않고 Microsoft 365 SharePoint Online 라이브러리를 Google Shared Drives로 이전하세요.
keywords:
  - sharepoint to google drive
  - google shared drive migration
  - rcloneview
  - zero downtime transfer
  - microsoft 365 to workspace
  - rclone compare
  - multi cloud sync
  - scheduler automation
  - sharepoint cutover plan
  - cloud migration blueprint
tags:
  - sharepoint
  - google-drive
  - migration
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 진행하는 무중단 SharePoint에서 Google Shared Drives 마이그레이션

> 디자이너, 재무팀, 프로젝트 팀이 SharePoint에서 계속 작업하는 동안 백그라운드에서 Google Shared Drives를 채우고, 준비가 끝나면 한 번의 전환 창(cutover window)으로 스위치를 넘기세요.

SharePoint Online 라이브러리는 대개 권한이 복잡한 폴더, 문서 세트, 지역별 데이터 통제로 가득 차 있습니다. 동시에 Google Workspace Shared Drives는 더 단순한 협업과 저장 용량을 약속하지만, 네이티브 이전 도구는 메타데이터, 델타 구간, 속도 제한을 거의 존중하지 않습니다. RcloneView는 rclone의 SharePoint 및 Google Drive 백엔드를 GUI로 감싸주므로, 단계적 Compare 실행, Sync + Copy 작업, 마운트 기반 QA, 스케줄러 기반 델타 실행을 통해 멀티 클라우드 마이그레이션을 계획할 수 있습니다.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 무중단 SharePoint -> Google 전환을 계획해야 하는 이유

- **분산된 팀은 작업을 멈출 수 없습니다** -- 마케팅 자산, PMO, 계약 관련 자료는 새 Shared Drive가 채워지는 동안에도 지속적인 접근이 필요합니다.
- **세분화된 권한** -- SharePoint 라이브러리는 Teams와 연결된 폴더와 독립된 문서 센터가 혼재되어 있으므로, 명확한 감사 로그와 함께 Shared Drives 내부에 이를 재구성할 수 있는 반복 가능한 방법이 필요합니다.

무중단 전략이란 두 플랫폼이 모두 온라인 상태를 유지하는 동안 다단계 동기화를 실행한 뒤, 마지막 델타 이후에 전환을 완료하는 것을 의미합니다.

## 마이그레이션 청사진: 멀티 클라우드 제어판

1. [Remote Manager](/howto/rcloneview-basic/remote-manager)와 함께 [SharePoint for Business](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business), [Google Shared Drives](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive) 제공업체 가이드를 이용해 **양쪽을 모두 연결**하세요. RcloneView는 테넌트별로 OAuth 토큰을 분리하고 보호 조치와 함께 저장합니다.
2. **Explorer 창을 정리**하여 각 창이 대응하는 라이브러리와 Shared Drive를 각각 참조하도록 하세요.
3. **작업 템플릿**은 [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)와 [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)에서 가져옵니다. Copy 작업은 대상을 초기 적재하고, Sync 작업은 단방향 정리를 처리하며, Compare 실행은 검증을 담당합니다.
4. **QA용 마운트**는 [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)를 따르며, 파워 유저가 전환 전에 Finder나 Explorer 안에서 콘텐츠를 미리 확인할 수 있게 해줍니다.
5. **스케줄러 + 모니터링**은 [Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution)과 [Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring)에 의존하여 델타 실행을 예측 가능하게 유지합니다.  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  
  

## 1단계 -- 커넥터 및 메타데이터 강화

- 리모트마다 이름을 지정하고 (`sp-marketing`, `sp-pmo`, `gdrive-regional-apac`), 루트 경로를 특정 라이브러리로 제한하세요. 이렇게 하면 [Browse and manage remote storage](/howto/rcloneview-basic/browse-and-manage-remote-storage) 안에서 리모트 탐색 속도가 빨라집니다.

## 2단계 -- Compare 실행으로 기준선 잡기

1. 듀얼 패널 Explorer를 열고, 왼쪽 창은 SharePoint, 오른쪽 창은 빈 Shared Drive로 지정하세요.
2. [Compare folder contents](/howto/rcloneview-basic/compare-folder-contents)를 사용하여 크기, 체크섬, 타임스탬프 차이를 감지하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare SharePoint library to Google Shared Drive before migrating" class="img-large img-center" />

기준선 Compare 스냅샷은 원본 상태에 대한 포렌식 기록을 제공하며, 이전 대신 아카이빙해야 할 오래된 하위 사이트를 식별하는 데 도움이 됩니다.

## 3단계 -- Copy + Sync 작업 준비

- SharePoint의 어떤 것도 삭제하지 않으면서 Shared Drive를 초기 적재하려면 비즈니스 단위별로 **Copy** 작업을 만드세요. 참고: [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs).  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  
   

## 4단계 -- 스케줄러로 델타 구간 자동화

Scheduler를 열어 전역으로 활성화한 뒤, 작업별로 주기를 지정하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule staged SharePoint to Google migration jobs inside RcloneView" class="img-large img-center" />


## 5단계 -- 전환 당일 체크리스트

1. SharePoint의 **쓰기를 동결**하되(Teams/Slack으로 공지), 읽기 전용 접근이 필요한 경우를 위해 사이트는 온라인 상태로 유지하세요.
2. 마지막 Sync + Compare 작업 세트를 실행하세요. Compare 차이 비교를 사용해 마지막 델타 이후 변경된 파일이 소수에 불과함을 확인하세요.
3. [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)로 새 Shared Drive를 마운트하고, 비즈니스 담당자가 복잡한 폴더 구조를 직접 점검하도록 하세요.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />  
       


## 마이그레이션 이후 QA 및 마운트 운영

Mount Manager를 이용하면 엔지니어, 재무팀, 크리에이티브 리더가 새 Shared Drives(또는 기존 SharePoint 리모트)를 읽기 전용 드라이브로 열어 감사 및 교육 목적으로 사용할 수 있습니다.

## 프로젝트 타임라인 가이드

| 단계 | RcloneView 작업 | 결과 |
| --- | --- | --- |
| 1주차 | 리모트 연결, 기준선 Compare, Copy 작업 생성 | 각 라이브러리 인벤토리 확보 + Shared Drives 초기 적재 |
| 2주차 | 야간 Scheduler 델타 + 주간 Compare 리포트 | 드리프트 가시성을 갖춘 지속적인 업데이트 |
| 3주차 | 파일럿 마운트, 권한 검증, 사용자 교육 | 이해관계자가 Google Shared Drives를 안전하게 미리 확인 |
| 전환 주간 | SharePoint 동결, 최종 Sync/Compare, Shared Drive 정식 오픈 | 서명된 검증 로그와 함께 최소한의 다운타임 |
| 2주 후 | 레거시 리모트에 대한 예약 Sync + S3/Wasabi로의 선택적 아카이브 Copy | 폐기 전 누락된 파일이 없음을 증명 |


RcloneView는 멀티 클라우드 마이그레이션을 예측 가능한 플레이북으로 바꿔줍니다: 리모트를 설정하고, 차이점을 미리 보고, Copy + Sync 작업을 준비하고, 델타를 자동화하고, QA를 위해 마운트하세요. 여러분의 팀은 Google Shared Drives로 리디렉션되는 정확한 순간까지 SharePoint에서 계속 생산적으로 작업할 수 있습니다.

<CloudSupportGrid />

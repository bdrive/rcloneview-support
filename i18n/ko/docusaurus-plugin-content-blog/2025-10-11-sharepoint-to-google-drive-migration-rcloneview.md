---
slug: sharepoint-to-google-drive-migration-rcloneview
title: "RcloneView로 SharePoint에서 Google Drive로 마이그레이션 완벽 가이드: 단계별 비즈니스 가이드"
authors:
  - tayson
description: "RcloneView로 시각적이고 속도 제한이 가능하며 감사 가능한 SharePoint-Google Drive 마이그레이션 — CLI 없이 정책 친화적인 전환을 원하는 기업 IT 팀을 위해 만들어졌습니다."
keywords:
  - SharePoint to Google Drive
  - move files from SharePoint to Drive
  - RcloneView SharePoint
  - cloud migration for business
  - Microsoft 365 migration tool
  - migrate sharepoint document library
  - google drive workspace migration
  - rclone sharepoint connector
  - office 365 to google drive
  - sharepoint migration guide
tags:
  - RcloneView
  - migration
  - sharepoint
  - google-drive
  - microsoft-365
  - business
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 SharePoint에서 Google Drive로 마이그레이션 완벽 가이드: 단계별 비즈니스 가이드

> SharePoint 문서 라이브러리를 Google Drive(Workspace)로, 기업 관리자가 CLI를 다루지 않고도 실행할 수 있는 시각적이고 속도 제한이 가능하며 반복 가능한 흐름으로 이전하세요.

RcloneView는 rclone의 SharePoint 및 Google Drive 커넥터를 감사 친화적인 로그, 스케줄러, 실시간 모니터링을 갖춘 GUI로 감쌉니다. 이 가이드는 팀 사이트, 프로젝트 폴더, 또는 전체 사업부를 다운타임 없이 이전할 수 있도록 단계적 마이그레이션을 계획하고 실행하는 방법을 보여줍니다.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## SharePoint → Google Drive에 RcloneView를 사용해야 하는 이유

- CLI 불필요: 안내형 대화상자를 통해 Microsoft 365(SharePoint/OneDrive for Business)와 Google Drive 리모트를 구성합니다.
- 비즈니스 친화적: SharePoint 및 Drive API 속도 제한을 피하기 위해 요청을 조절하고, 유지보수 시간대에 전환 작업을 예약할 수 있습니다.
- 운영 가시성: 감사를 위한 양쪽 탐색기, 비교 및 복사, 작업 이력, 실시간 전송 모니터링을 제공합니다.
- 유연한 이동: 단일 복사, 양방향 동기화, 또는 원본과 대상을 정렬 상태로 유지하는 단계적 델타 동기화 중 선택할 수 있습니다.

## 사전 준비 사항 (엔터프라이즈 대비)

- 대상 SharePoint 사이트와 Google Drive 대상(공유 드라이브 또는 내 드라이브)에 접근 권한이 있는 계정으로 RcloneView를 설치하고 로그인합니다.
- 테넌트가 타사 앱을 제한하는 경우 Microsoft Graph에 대한 관리자 동의를 받습니다.
- 전환 작업 시간대(또는 단계적 동기화 허용)와 충분한 Drive/공유 드라이브 용량을 확보합니다.

## 1단계 — SharePoint 및 Google Drive 리모트 연결

1) **RcloneView ? 설정 ? 리모트 스토리지**에서 새 리모트를 추가합니다.  
<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2) **OneDrive/SharePoint (Microsoft 365)**를 선택하고, 사이트를 소유하거나 접근할 수 있는 계정으로 로그인한 뒤 올바른 **사이트 / 문서 라이브러리**(예: `/sites/Marketing/Shared Documents`)를 선택합니다.  
3) **Google Drive**(Workspace)를 추가합니다: 프로젝트에 맞게 **내 드라이브**에 저장할지 특정 **공유 드라이브**에 저장할지 선택합니다.  
4) 각 리모트를 테스트하고 저장합니다.

## 2단계 — 올바른 라이브러리와 대상 폴더 매핑

- 각 SharePoint 라이브러리에 대해 연결 대화상자에서 선택한 경로를 기록해 두고, 탐색기에서 열어 루트가 예상대로(부서 폴더가 보이는지)인지 확인합니다.
- Google Drive/공유 드라이브에 아직 없는 경우 일치하는 폴더 구조를 만듭니다.
- 팀별 격리가 필요한 경우, 사이트별 또는 민감한 컬렉션별로 여러 SharePoint 리모트를 사용해 반복합니다.

## 3단계 — 양쪽 비교로 검증

- 두 개의 창으로 구성된 탐색기에서 두 리모트를 엽니다.  
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
- 복사 전에 **비교** 기능으로 차이(크기, 누락된 파일)를 미리 확인합니다.  
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
- 권한, 버전 관리된 파일, 이름 규칙을 확인하기 위해 작은 시범 폴더를 먼저 복사합니다(SharePoint의 `# % & { }`는 Drive에서는 유효해지지만, 긴 경로는 여전히 정리가 필요할 수 있습니다).

## 4단계 — 마이그레이션 모드 선택

- **일회성 복사(가장 빠름)**: 새 공유 드라이브로 일괄 이전할 때는 **복사**를 사용합니다. 전환 중 원본을 읽기 전용으로 전환하는 경우에 적합합니다.
- **동기화(양방향 옵션)**: 마이그레이션 중에도 사용자가 파일을 계속 편집하는 경우 **동기화**를 사용하고, 전환 시간대에 마지막 델타 동기화로 마무리합니다.
- **가능한 경우 서버 사이드**: SharePoint와 Drive가 인터넷으로 접근 가능한 경우, RcloneView는 지원되는 곳에서 서버 사이드 복사를 활용해 아웃바운드 트래픽을 줄입니다.

임시 이동이나 빠른 수정에는 드래그 앤 드롭도 사용할 수 있습니다.  
<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## 5단계 — 반복 가능한 작업 생성 및 전환 예약

1) **작업**에서 SharePoint 라이브러리부터 대상 공유 드라이브 경로까지 새로운 **복사** 또는 **동기화** 작업을 생성합니다.  
2) Microsoft 365 및 Google Drive 속도 제한을 준수하도록 **대역폭 제한**과 **전송 수**를 설정합니다(예: `tpslimit`, `--drive-chunk-size`, 또는 **최대 전송** 슬라이더).  
3) 저장한 다음, 대량 이동을 위해 업무 외 시간대에 예약하고, 델타 동기화를 위한 두 번째 일정을 추가합니다.  
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## 6단계 — 실행, 모니터링 및 속도 제한 처리

- 작업을 시작하고 실시간으로 진행 상황(처리량, 예상 완료 시간, 오류)을 확인합니다.  
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />
- `throttled` 또는 `403`/`429` 응답이 보이면 전송 수를 줄이거나 짧은 백오프를 추가합니다. RcloneView는 터미널을 열지 않고도 이러한 로그를 표시합니다.
- **작업 이력**을 사용해 규정 준수를 위한 결과를 내보내고, UI에서 직접 실패한 항목을 재시도할 수 있습니다.

## 7단계 — 마이그레이션 후 점검 및 인계

- 사용자 접근을 잠금 해제하기 전에 **비교**를 다시 실행해 대상이 SharePoint와 일치하는지 확인합니다.
- 권한을 부분 점검합니다: Drive ACL은 SharePoint를 자동으로 반영하지 않지만, 올바른 Workspace 그룹과 새 루트를 일괄 공유할 수 있습니다.
- 팀이 SharePoint에서 계속 활동 중이라면 며칠 동안 작업을 예약된 델타 동기화로 유지한 다음, 원본을 읽기 전용으로 전환합니다.

## 기업 환경을 위한 문제 해결 팁

- **복잡한 사이트**: 우발적인 범위 확대를 피하기 위해 테넌트 전체가 아닌 사이트/라이브러리 단위로 연결합니다.
- **긴 경로나 특수 문자**: 고급 옵션에서 Rclone의 유니코드 정규화 및 경로 길이 처리를 활성화하고, 전환 전에 탐색기에서 예외 사례의 이름을 변경합니다.
- **데이터 주권**: 규제 대상 팀의 경우 지역 공유 드라이브를 대상으로 지정하고 작업 이력 내보내기의 감사 기록을 유지합니다.

## 관련 자료

- [브라우저 기반 로그인(OAuth)으로 리모트 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Google Drive 추가](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [폴더 콘텐츠 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [리모트 스토리지 즉시 동기화](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [실시간 전송 모니터링](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [클라우드 스토리지를 로컬 드라이브로 마운트](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

## 마무리

RcloneView는 IT 팀에게 SharePoint 라이브러리를 Google Drive 또는 공유 드라이브로 이전할 수 있는 시각적이고 위험이 낮은 경로를 제공합니다. 정책 친화적인 속도 제한, 예약된 전환 작업, 실시간 모니터링을 통해 명령줄 스크립트 없이 비즈니스에 중요한 데이터를 이전하고, 이해관계자에게 진행 상황을 알리며, 향후 통합 작업을 위한 반복 가능한 작업을 남길 수 있습니다.

<CloudSupportGrid />

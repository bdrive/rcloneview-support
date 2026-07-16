---
slug: manage-enterprise-file-fabric-cloud-sync-rcloneview
title: "엔터프라이즈 File Fabric 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - morgan
description: "RcloneView를 사용하여 Enterprise File Fabric 스토리지를 연결, 동기화, 백업하세요 — Windows, macOS, Linux용 rclone 기반 크로스플랫폼 멀티 클라우드 GUI입니다."
keywords:
  - Enterprise File Fabric RcloneView
  - Enterprise File Fabric 동기화
  - Enterprise File Fabric 클라우드 동기화
  - Enterprise File Fabric 백업
  - Enterprise File Fabric 파일 관리
  - 기업용 클라우드 스토리지 관리
  - RcloneView 엔터프라이즈 스토리지
  - Enterprise File Fabric GUI 클라이언트
tags:
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 엔터프라이즈 File Fabric 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> RcloneView는 Enterprise File Fabric에 직접 연결하여 CLI 명령어를 한 줄도 작성하지 않고도 조직의 관리형 파일 스토리지를 탐색, 동기화, 백업할 수 있게 해줍니다.

Enterprise File Fabric은 서로 다른 스토리지 백엔드를 단일 거버넌스 계층 아래 통합해야 하는 조직에서 사용하는 클라우드 콘텐츠 서비스 플랫폼입니다. 팀이 프로젝트 파일, 규정 준수 기록, 또는 공유 디지털 자산을 그곳에 저장하든, 해당 콘텐츠를 동기화하고 백업 상태로 유지하려면 신뢰할 수 있는 크로스 클라우드 지원 도구가 필요합니다. rclone 기반의 Flutter GUI 클라이언트인 RcloneView는 Windows, macOS, Linux의 통합 인터페이스 하나로 Enterprise File Fabric을 비롯한 90개 이상의 클라우드 제공업체를 처리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 Enterprise File Fabric 연결하기

Enterprise File Fabric을 리모트로 추가하는 데는 RcloneView의 내장 새 리모트 마법사를 통해 몇 분이면 충분합니다. **Remote** 탭을 열고 **New Remote**를 클릭한 다음, 제공업체 목록에서 Enterprise File Fabric을 선택하세요. 엔드포인트 URL과 API 토큰(조직에서 API 접근에 사용하는 것과 동일한 자격 증명)을 입력한 후 저장합니다. 리모트는 즉시 탐색기 패널에 표시되며, 여기서 폴더를 탐색하고 파일 개수와 크기를 확인하며 브레드크럼 바에서 경로를 바로 복사할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Enterprise File Fabric remote in RcloneView" class="img-large img-center" />

마운트 전용 도구와 달리, RcloneView는 FREE 라이선스에서도 폴더 동기화 및 비교를 지원하므로 단순한 드라이브 매핑을 넘어 모든 클라우드 환경에서 Enterprise File Fabric 콘텐츠를 능동적으로 관리할 수 있습니다.

## Enterprise File Fabric을 다른 클라우드 대상으로 동기화하기

Enterprise File Fabric에서 흔히 사용되는 시나리오는 재해 복구나 장기 보관을 위해 관리형 콘텐츠를 보조 클라우드 대상으로 복제하는 것입니다. RcloneView의 동기화 마법사에서 Enterprise File Fabric을 소스로 설정하고 Amazon S3, Backblaze B2, Google Drive 또는 온프레미스 SFTP 서버 등 원하는 대상을 선택하세요. 4단계 마법사가 전송 동시성, 체크섬 검증, 파일 기간 필터를 안내하므로 필요한 것만 이동시킬 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Enterprise File Fabric in RcloneView" class="img-large img-center" />

실제 전송 전에는 항상 **Dry Run**을 실행하세요. RcloneView는 복사하거나 건너뛸 정확한 파일 목록을 표시하여 단 1바이트도 이동하기 전에 필터 규칙을 다듬을 수 있게 해줍니다. 동일한 Enterprise File Fabric 폴더를 여러 대상에 동시에 미러링하는 1:N 복제의 경우, 1단계에서 추가 대상 경로를 추가하기만 하면 됩니다. 이 기능은 대상 개수 제한 없이 FREE 라이선스에서 사용할 수 있습니다.

## 자동화된 백업 예약하기

Enterprise File Fabric을 사용하는 조직은 종종 사람의 개입 없이 실행되는 야간 또는 주간 백업 창이 필요합니다. **PLUS 라이선스**는 RcloneView 내부에서 crontab 방식의 예약 기능을 제공합니다. 분, 시, 요일, 월 필드를 설정하여 원하는 주기로 Enterprise File Fabric 동기화 작업을 실행하세요. 내장된 **Simulate schedule** 도구는 다음 여러 실행 시간을 미리 보여주므로 확정하기 전에 타이밍을 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an Enterprise File Fabric backup job in RcloneView" class="img-large img-center" />

작업 완료 알림은 앱이 시스템 트레이에 최소화된 상태로 실행되고 있을 때도 운영 팀에 정보를 제공합니다.

## 전송 기록 및 감사 추적 모니터링

모든 Enterprise File Fabric 동기화 작업은 RcloneView의 **Job History** 화면에 시작 시간, 소요 시간, 전송 속도, 파일 개수, 최종 상태와 함께 기록됩니다. 날짜 범위나 결과별로 기록을 필터링하여 SLA 준수 여부를 확인하고 데이터 이동을 감사할 수 있으며, 이는 관리형 파일 스토리지 플랫폼에 대한 보존 또는 거버넌스 요구사항이 있는 조직에 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Enterprise File Fabric transfers in RcloneView" class="img-large img-center" />

RcloneView 내의 rclone 터미널 탭을 사용하면 고급 사용자가 GUI를 벗어나지 않고도 Enterprise File Fabric 리모트에 대해 사용자 지정 `rclone` 명령어를 실행할 수 있어 임시 조회나 일회성 작업에 유용합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote** 탭을 열고 **New Remote**를 클릭한 다음 Enterprise File Fabric을 선택합니다.
3. Enterprise File Fabric 엔드포인트 URL과 API 토큰을 입력한 후 리모트를 저장합니다.
4. 동기화 작업을 구성하고 원하는 백업 대상을 설정한 다음 먼저 **Dry Run**을 실행하세요.
5. (PLUS) 예약 실행을 활성화하여 이메일 또는 Slack 알림과 함께 지속적인 백업을 자동화하세요.

Enterprise File Fabric 관리를 RcloneView 안에서 중앙화하면 도구가 난립하는 것을 방지하고, 모든 클라우드 데이터 이동에 대한 감사 가능한 단일 기록을 팀에 제공합니다.

---

**관련 가이드:**

- [RcloneView로 SharePoint 스토리지 관리하기](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [RcloneView로 Azure Files 관리하기](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [RcloneView를 활용한 DevOps 및 소프트웨어 팀을 위한 클라우드 스토리지](https://rcloneview.com/support/blog/cloud-storage-devops-software-teams-rcloneview)

<CloudSupportGrid />

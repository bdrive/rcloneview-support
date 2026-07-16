---
slug: sync-one-source-multiple-cloud-destinations-rcloneview
title: "1:N 동기화 — RcloneView로 하나의 소스를 여러 클라우드 대상으로 백업하기"
authors:
  - kai
description: "RcloneView의 1:N 동기화를 사용하여 하나의 소스 폴더를 여러 클라우드 대상으로 동시에 백업하세요. 다중 클라우드 중복 백업으로 파일을 보호하세요."
keywords:
  - 1 to N sync RcloneView
  - multiple cloud backup destinations
  - sync one source multiple clouds
  - redundant cloud backup RcloneView
  - multi-cloud sync backup
  - backup multiple cloud providers
  - RcloneView multiple destinations
  - parallel cloud backup
  - one source multiple backups RcloneView
  - automated multi-destination sync
tags:
  - multi-cloud
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 1:N 동기화 — RcloneView로 하나의 소스를 여러 클라우드 대상으로 백업하기

> 하나의 동기화 작업, 여러 대상 — RcloneView는 단일 실행으로 하나의 소스를 원하는 만큼의 클라우드 제공업체에 미러링합니다.

대부분의 백업 전략은 중복성 확보에 실패합니다. 파일이 하나의 대상으로만 전송되어 단일 장애 지점이 생기기 때문입니다. RcloneView의 1:N 동기화를 사용하면 하나의 소스 폴더를 하나의 작업 안에서 여러 클라우드 대상으로 백업할 수 있습니다 — 즉, 각 대상마다 별도의 작업을 실행하지 않고도 데이터가 Google Drive, Backblaze B2, S3 호환 제공업체에 동시에 저장됩니다. 이 기능은 FREE 라이선스에서 사용 가능하며, 사용자가 구성한 모든 클라우드 리모트 조합에서 동작합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 1:N 동기화가 작동하는 방식

RcloneView의 작업 관리자(Job Manager)에서 동기화 작업을 생성할 때, 4단계 마법사 중 1단계에서 여러 대상 폴더를 추가할 수 있습니다. 소스와 첫 번째 대상을 선택한 후 **Add Destination**을 클릭하면 대상을 더 추가할 수 있습니다. 각 대상은 독립적으로 동기화되지만 동일한 소스에 의해 구동됩니다 — 즉, 소스는 한 번만 읽히고 쓰기 작업은 모든 대상에 병렬로 수행됩니다. 이는 별도의 작업을 실행하는 것과는 의미 있는 차이가 있습니다. 별도로 실행하는 경우 실행 사이에 소스가 변경되면 각 대상이 서로 다른 스냅샷을 캡처할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring 1:N sync with multiple destinations in RcloneView" class="img-large img-center" />

디지털 미디어 회사의 실용적인 설정 예시는 다음과 같습니다. 소스는 마스터 비디오 파일이 있는 로컬 프로덕션 NAS 폴더이고, 대상 1은 팀 접근을 위한 Google Drive, 대상 2는 장기 보관을 위한 Backblaze B2, 대상 3은 추가 오프사이트 사본을 위한 Wasabi입니다. 세 대상 모두 단일 작업 실행으로부터 동일한 소스 상태와 동기화된 상태를 유지합니다.

## 다중 대상 동기화 작업 설정하기

홈 탭에서 **Job Manager**를 열고 **Add Job**을 클릭하여 새 동기화 작업을 생성합니다. 1단계에서 소스(구성된 리모트 또는 로컬 폴더)를 선택합니다. 첫 번째 대상 폴더를 선택한 후 **Add Destination**을 클릭하여 각각 다른 리모트와 폴더 경로를 가리키는 추가 대상을 삽입합니다. 다중 대상 의도를 반영하는 설명적인 이름을 작업에 부여하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a 1:N sync job to multiple cloud destinations in RcloneView" class="img-large img-center" />

2단계에서는 모든 대상에 공유되는 전송 설정 — 동시 전송 개수, 멀티스레드 설정, 체크섬 검증 활성화 여부 — 를 구성합니다. 서로 다른 속도 제한을 가진 클라우드 제공업체로 동기화하는 1:N 작업의 경우, 동시 전송 개수를 적당히 유지하세요. 여러 대상에 대해 동시에 공격적인 병렬 처리를 하면 제한이 엄격한 제공업체에서 스로틀링이 발생할 수 있습니다. 3단계에서는 모든 대상에 균일하게 적용되는 필터 규칙을 추가할 수 있으므로, 대상마다 제외 로직을 중복 작성할 필요가 없습니다.

## 드라이 런으로 작업 확인하기

대규모 1:N 동기화를 실행하기 전에 작업 관리자의 **Dry Run** 옵션을 사용하세요. 드라이 런은 실제 변경 사항을 적용하지 않고 각 대상에 복사될 파일 등 계획된 모든 작업을 보여줍니다. 세 개의 제공업체로 동기화하는 작업의 경우, 미리보기는 대상별로 작업 목록을 표시하여 경로가 올바르고 범위가 예상한 대로인지 확신할 수 있게 해줍니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing 1:N sync job history in RcloneView" class="img-large img-center" />

실행 후 **Job History** 탭에는 각 작업 실행에 대한 시작 시간, 소요 시간, 총 전송 바이트, 최종 상태(Completed, Errored, Canceled)가 기록됩니다. 백업 검증에 대한 컴플라이언스 요구 사항이 있는 팀의 경우, 이 로그는 추가 도구 없이도 바로 사용할 수 있는 감사 추적(audit trail)을 제공합니다.

## 다중 대상 백업 자동 예약하기

PLUS 라이선스를 사용하면 4단계에서 1:N 작업에 크론 스타일 일정을 연결하여 선택한 간격으로 자동 실행되도록 할 수 있습니다. **Simulate schedule** 버튼은 저장하기 전에 예정된 실행 시간을 미리 보여줍니다. 활성화되면 RcloneView의 시스템 트레이 통합이 작업을 백그라운드에서 계속 실행하며, 작업 완료 알림이 모든 대상이 최신 데이터를 받았는지 확인해 줍니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination backup in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote** > **New Remote**를 통해 두 개 이상의 클라우드 리모트를 추가하세요.
3. **Sync** 작업을 생성하고 1단계에서 **Add Destination**을 사용하여 각 대상 제공업체와 폴더를 추가하세요.
4. **Dry Run**을 실행하여 범위를 확인한 다음, 자동화된 다중 클라우드 중복성을 위해 일정과 함께 저장하세요.

1:N 동기화를 사용하면 하나의 RcloneView 작업이 완전한 다중 클라우드 백업 전략이 됩니다 — 추가 스크립트도, 추가 단계도 필요 없습니다.

---

**관련 가이드:**

- [RcloneView로 매일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [RcloneView를 활용한 다중 클라우드 백업 전략](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [작업 내보내기 및 가져오기 — RcloneView의 이식 가능한 워크플로우](https://rcloneview.com/support/blog/job-export-import-portable-workflow-rcloneview)

<CloudSupportGrid />

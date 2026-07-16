---
slug: migrate-jottacloud-to-onedrive-rcloneview
title: "Jottacloud에서 OneDrive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView를 사용하여 Jottacloud의 모든 파일을 Microsoft OneDrive로 마이그레이션하는 단계별 가이드입니다. 명령줄 도구 없이 전체 라이브러리를 이동하세요."
keywords:
  - jottacloud to onedrive migration
  - transfer jottacloud to onedrive
  - migrate jottacloud to onedrive
  - cloud to cloud transfer gui
  - jottacloud migration tool
  - onedrive cloud migration
  - rcloneview jottacloud onedrive
  - cloud storage migration guide
tags:
  - jottacloud
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud에서 OneDrive로 마이그레이션 — RcloneView로 파일 전송하기

> 명령줄을 사용하지 않고 Jottacloud의 전체 라이브러리를 Microsoft OneDrive로 이동하세요 — RcloneView는 전체 진행 상황 모니터링과 파일 무결성 검증을 통해 클라우드 간 전송을 처리합니다.

많은 팀이 Microsoft 365를 중심으로 통합하면서 Jottacloud에서 OneDrive로 전환하여 더욱 긴밀한 Office 앱 통합과 폭넓은 엔터프라이즈 도구를 활용합니다. 문제는 수년간 쌓인 파일을 대규모로 정확하게 전송하는 것입니다. RcloneView의 클라우드 간 작업 엔진을 사용하면 두 리모트를 매핑하고, 검증된 복사를 실행하며, 내장된 폴더 비교로 완전성을 확인할 수 있습니다 — rclone 설정 파일을 수동으로 편집할 필요 없이 단일 GUI에서 모두 처리됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Jottacloud와 OneDrive를 리모트로 연결하기

RcloneView를 열고 **Remote** 탭으로 이동한 다음 **New Remote**를 클릭합니다. 제공업체 목록에서 Jottacloud를 선택하고 화면의 설정 안내를 따라 계정을 인증합니다.

다음으로 OneDrive용 두 번째 리모트를 추가합니다. OneDrive는 브라우저 기반 OAuth를 사용하며, RcloneView가 자동으로 기본 브라우저를 열어 계정 로그인을 진행합니다. 인증이 완료되면 연결이 rclone 설정에 저장되고 Explorer 패널에서 즉시 사용할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Jottacloud remote in RcloneView Remote Manager" class="img-large img-center" />

두 리모트가 모두 연결되면 RcloneView의 듀얼 패널 Explorer를 사용하여 나란히 엽니다. 원본 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Get Size**를 선택하여 시작 전에 전체 데이터 용량을 확인합니다 — 이는 명확한 마이그레이션 기준선을 제공하고 전송 후 예상치 못한 불일치를 발견하는 데 도움이 됩니다.

## Job Manager에서 복사 작업 생성하기

**Home → Job Manager**로 이동한 다음 **Add Job**을 클릭합니다. Jottacloud 루트(또는 하위 폴더)를 소스로, 대상 OneDrive 폴더를 목적지로 설정합니다. 초기 마이그레이션의 작업 유형으로 **Copy**를 선택합니다 — 이렇게 하면 원본을 그대로 유지하면서 원본을 건드리지 않고 OneDrive를 채웁니다.

마법사의 2단계에서 **Number of file transfers**를 늘려 여러 파일을 동시에 전송합니다. 대용량 라이브러리의 경우 이렇게 하면 총 마이그레이션 시간이 크게 단축됩니다. **Enable checksum**을 활성화하여 각 전송된 파일이 파일명뿐만 아니라 해시와 크기로도 검증되도록 합니다 — 원본을 폐기하기 전에 조용한 데이터 손상을 반드시 잡아내야 하는 일회성 마이그레이션에서 매우 중요합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud-to-cloud migration job in RcloneView Job Manager" class="img-large img-center" />

실제 실행 전에 **Dry Run**을 클릭하여 복사될 파일을 미리 확인합니다. 중첩된 폴더가 수천 개인 프로젝트 아카이브의 경우, 이 미리보기 단계에서 전송 도중 실패를 유발할 수 있는 경로 길이 문제와 초과 크기 파일을 미리 발견할 수 있습니다.

## 진행 상황 및 전송 속도 모니터링하기

작업이 시작되면 하단 Info View의 **Transferring** 탭에 개별 파일명, 전송 속도, 이동된 총 바이트 수, 진행 중인 파일 개수 등 실시간 진행 상황이 표시됩니다. 이미 전송된 파일을 손상시키지 않고 언제든지 작업을 취소할 수 있습니다 — RcloneView의 기반이 되는 rclone 엔진은 부분 전송을 깔끔하게 처리하며, 재개된 Copy 작업은 대상에 크기와 체크섬이 일치하는 파일이 이미 존재하면 건너뜁니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Jottacloud to OneDrive transfer in RcloneView" class="img-large img-center" />

밤새 진행되는 매우 큰 마이그레이션의 경우, 시스템 트레이를 사용하여 RcloneView를 백그라운드에서 계속 실행하세요. 전송이 완료되면 작업 완료 알림으로 알려드립니다.

## 폴더 비교로 완전성 검증하기

복사 작업이 완료되면 Home 탭에서 **Folder Compare**를 엽니다. 왼쪽 패널을 Jottacloud 소스로, 오른쪽 패널을 OneDrive 대상으로 설정합니다. RcloneView는 양쪽을 스캔하여 전송되지 않은 왼쪽 전용 파일, 손상되었을 수 있는 크기가 다른 파일, 오른쪽 전용 파일을 강조 표시합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Jottacloud source and OneDrive destination to verify migration completeness" class="img-large img-center" />

전송을 마무리하려면 남아 있는 왼쪽 전용 파일에 대해 **Copy Right**를 사용합니다. 비교 결과에 왼쪽 전용 항목이나 크기가 다른 항목이 표시되지 않으면 Jottacloud 콘텐츠가 OneDrive에 완전하고 정확하게 미러링된 것이며, Microsoft 365 워크플로우에 바로 사용할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Remote 탭 → New Remote를 통해 Jottacloud 계정을 추가하고 안내를 따릅니다.
3. Remote 탭 → New Remote(브라우저 OAuth 로그인)를 통해 OneDrive 계정을 추가합니다.
4. Job Manager에서 Copy 작업을 생성하고 체크섬을 활성화한 다음 먼저 Dry Run을 실행합니다.
5. 전송 후 Folder Compare를 열어 왼쪽 전용 또는 불일치 파일이 없는지 확인합니다.

깔끔한 Jottacloud-to-OneDrive 마이그레이션은 스크립팅이나 예상치 못한 문제 없이 한 세션 안에 완료할 수 있으며, 원본을 폐기하기 전에 신뢰할 수 있는 검증된 결과를 확보할 수 있습니다.

---

**관련 가이드:**

- [Jottacloud 클라우드 스토리지 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Jottacloud에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [OneDrive 클라우드 스토리지 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

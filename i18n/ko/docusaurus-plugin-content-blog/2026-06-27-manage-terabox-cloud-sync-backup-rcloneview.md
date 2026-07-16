---
slug: manage-terabox-cloud-sync-backup-rcloneview
title: "Terabox 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - alex
description: "RcloneView로 Terabox 클라우드 스토리지를 관리하세요 — 하나의 크로스 플랫폼 GUI로 90개 이상의 제공업체 간에 파일을 동기화, 백업, 전송할 수 있습니다. CLI가 필요 없습니다."
keywords:
  - Terabox 동기화
  - Terabox 백업
  - Terabox 스토리지 관리
  - Terabox RcloneView
  - Terabox 클라우드 관리
  - Terabox 파일 전송
  - Terabox를 Google Drive로 동기화
  - Terabox 클라우드 백업 도구
  - RcloneView Terabox 가이드
  - 클라우드 스토리지 관리자 Terabox
tags:
  - RcloneView
  - terabox
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Terabox 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> Terabox를 RcloneView에 연결하면 명령줄을 사용하지 않고도 파일을 탐색, 동기화, 백업, 전송할 수 있는 완전한 기능의 클라우드 관리 환경을 이용할 수 있습니다.

Terabox는 넉넉한 무료 클라우드 스토리지 용량을 제공하여 동영상 아카이브, 프로젝트 파일, 개인 백업을 저장하는 데 인기 있는 선택지입니다. 하지만 이러한 스토리지를 효율적으로 관리하려면 — 특히 파일을 다른 제공업체로 이동하거나 정기 백업을 예약해야 할 때 — 제대로 된 도구가 필요합니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화하므로, Terabox도 이미 사용 중인 멀티 클라우드 워크플로우에 자연스럽게 어우러집니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에 Terabox 연결하기

Terabox를 리모트로 추가하는 데는 1분밖에 걸리지 않습니다. RcloneView를 열고 **Remote** 탭으로 이동한 다음 **New Remote**를 클릭하세요. 제공업체 목록을 스크롤하여 Terabox를 선택하고, 메시지가 표시되면 계정 자격 증명을 입력한 후 저장합니다. RcloneView는 연결 정보를 내장된 rclone 구성에 저장하므로 설정을 반복할 필요가 없습니다.

연결되면 Terabox가 Explorer 패널에 탭으로 표시됩니다. 다른 모든 제공업체에 사용하는 것과 동일한 2단 인터페이스에서 폴더를 탐색하고, 새 디렉터리를 만들고, 파일 이름을 바꾸고, 스토리지 사용량을 확인할 수 있습니다. 경로 표시줄(breadcrumb)을 이용하면 깊은 폴더 계층 구조에서도 현재 위치를 놓치지 않고 쉽게 탐색할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Terabox as a new remote in RcloneView" class="img-large img-center" />

## Terabox에서 파일 동기화 및 백업하기

RcloneView의 4단계 동기화 마법사를 사용하면 몇 분 만에 Terabox 백업 작업을 구성할 수 있습니다. Terabox를 소스로 설정하고, 로컬 폴더, 외장 드라이브, 또는 다른 클라우드 제공업체 등 원하는 대상을 선택한 다음 작업 이름을 지정하세요. 고급 단계에서는 동시 전송 수를 조정하고 체크섬 검증을 활성화하여 대상에 도착하는 모든 파일이 원본과 바이트 단위로 일치하는지 확인할 수 있습니다.

전체 동기화를 실행하기 전에 Job Manager에서 **Dry Run**을 실행하여 어떤 파일이 복사되거나 제거될지 정확히 미리 확인하세요. 이는 대용량 Terabox 아카이브를 다룰 때 실수로 파일이 삭제되면 큰 손실이 발생할 수 있으므로 특히 유용합니다. 미리보기 결과에 만족하면 작업을 실행하고 화면 하단의 Transferring 탭에서 실시간 진행 상황을 모니터링하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Terabox in RcloneView" class="img-large img-center" />

## Terabox 파일을 다른 클라우드로 전송하기

흔한 사용 사례 중 하나는 지역 데이터 보관 규정이 더 엄격하거나 송신 비용이 더 낮은 제공업체로 Terabox의 콘텐츠를 마이그레이션하는 것입니다. 두 리모트를 나란히 Explorer 패널에 열어두면 Terabox에서 Amazon S3, Google Drive, Backblaze B2, 또는 RcloneView가 지원하는 다른 제공업체로 파일을 직접 드래그할 수 있습니다. 서로 다른 리모트 간 드래그 앤 드롭은 항상 이동이 아닌 복사이므로, 정리를 결정하기 전까지 Terabox의 원본은 그대로 유지됩니다.

더 큰 규모의 마이그레이션에는 전용 Copy 또는 Sync 작업을 만드세요. RcloneView는 FREE 라이선스에서도 1:N 동기화를 지원하므로, 하나의 Terabox 폴더를 한 번의 작업 실행으로 여러 대상에 밀어넣을 수 있습니다 — 기본 백업과 콜드 아카이브 사본을 모두 원할 때 유용합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Terabox to another provider" class="img-large img-center" />

## 작업 기록 검토 및 전송 모니터링

각 실행 후 RcloneView는 결과를 **Job History**에 기록합니다. 날짜 범위로 필터링하고, 작업이 완료되었는지, 오류가 발생했는지, 취소되었는지 확인하고, 총 전송된 바이트 수와 전송 속도를 검토할 수 있습니다. 여러 워크플로우에 걸쳐 대규모 Terabox 라이브러리를 관리하는 사람에게 이 감사 기록은 이상 징후를 발견하는 데 매우 유용합니다 — 오류 수가 갑자기 급증하면 종종 조사해볼 만한 할당량 제한이나 네트워크 문제를 나타냅니다.

PLUS 라이선스 보유자는 모든 Terabox 작업에 cron 방식 일정을 연결하고 완료 시 알림을 활성화할 수 있어, 백업을 진정으로 손댈 필요 없이 실행할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing Terabox sync results in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote** 탭을 열고 **New Remote**를 클릭한 다음 Terabox를 선택하고 자격 증명을 입력하세요.
3. Explorer 패널에서 Terabox 폴더를 탐색하고 백업하거나 전송하려는 콘텐츠를 확인하세요.
4. 4단계 마법사를 사용해 Sync 또는 Copy 작업을 만들고, Dry Run으로 계획을 확인한 다음 실행하세요.

잘 구성된 Terabox 백업은 설정하는 데 몇 분밖에 걸리지 않으며, 저장된 콘텐츠가 필요한 곳 어디에서든 안전하게 복제된다는 확신을 줍니다.

---

**관련 가이드:**

- [RcloneView로 Terabox 무료 스토리지를 다른 클라우드로 동기화하기](https://rcloneview.com/support/blog/sync-terabox-free-storage-other-clouds-rcloneview)
- [MEGA 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [RcloneView를 이용한 클라우드 간 마이그레이션](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />

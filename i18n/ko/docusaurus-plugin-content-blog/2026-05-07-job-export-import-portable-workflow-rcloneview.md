---
slug: job-export-import-portable-workflow-rcloneview
title: "작업 내보내기 및 가져오기 — RcloneView의 이식 가능한 동기화 워크플로우"
authors:
  - tayson
description: "RcloneView에서 동기화 작업을 내보내고 가져와 여러 컴퓨터에서 워크플로우를 공유하고, 팀 구성을 표준화하며, 시스템 마이그레이션 후 복구하는 방법을 알아보세요."
keywords:
  - RcloneView job export
  - sync job import
  - portable sync workflow
  - job manager export
  - team sync configuration
  - backup sync jobs
  - migrate RcloneView jobs
  - job portability
tags:
  - feature
  - job-management
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 작업 내보내기 및 가져오기 — RcloneView의 이식 가능한 동기화 워크플로우

> RcloneView를 사용하면 모든 동기화 작업을 JSON 파일로 내보내고 다른 컴퓨터에서 가져올 수 있어, 워크플로우를 진정으로 이식 가능하게 만들고 팀 구성을 일관되게 유지할 수 있습니다.

복잡한 동기화 작업을 설정하는 데는 시간이 걸립니다. 올바른 소스 및 대상 리모트를 선택하고, 필터를 구성하고, 대역폭 제한을 설정하고, 각 작업에 맞게 옵션을 조정해야 합니다. 새 컴퓨터로 업그레이드하거나, 두 번째 워크스테이션을 추가하거나, 새 팀원을 합류시킬 때 이 작업을 반복하고 싶지는 않을 것입니다. RcloneView의 작업 내보내기 및 가져오기 기능은 전체 작업 구성을 이식 가능한 JSON 파일에 담아 어떤 RcloneView 설치본에도 불러올 수 있게 함으로써 이 문제를 해결합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 동기화 작업 내보내기

작업을 내보내려면 RcloneView에서 **작업 관리자(Job Manager)**를 열고 툴바 또는 컨텍스트 메뉴에서 **내보내기(Export)** 옵션을 찾으세요. RcloneView는 소스/대상 경로, 필터 규칙, rclone 플래그, 예약 정보를 포함한 구성된 모든 동기화 작업을 하나의 JSON 파일로 내보냅니다. 이 파일을 저장할 위치는 직접 선택할 수 있습니다.

전체적인 백업 전략의 일환으로 작업을 정기적으로 내보내는 것이 좋은 습관입니다. 내보낸 JSON을 클라우드 폴더(예: Google Drive나 Backblaze B2 백업 버킷)에 저장해 두면 로컬 컴퓨터에 어떤 일이 생기더라도 항상 접근할 수 있습니다. 이는 백업 구성 자체를 백업하는 것이라고 생각하면 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager in RcloneView showing export option" class="img-large img-center" />

## 새 컴퓨터에서 작업 가져오기

대상 컴퓨터에서 [rcloneview.com](https://rcloneview.com/src/download.html)에서 RcloneView를 설치하고 필요한 클라우드 리모트를 설정하세요(가져온 작업이 올바르게 작동하려면 동일한 리모트 이름이 존재해야 합니다). 그런 다음 **작업 관리자**를 열고 **가져오기(Import)** 기능을 사용해 내보낸 JSON 파일을 불러오세요. 모든 동기화 작업이 즉시 나타나며 바로 실행할 준비가 됩니다.

이 워크플로우는 특히 컴퓨터 마이그레이션 이후에 유용합니다. 수십 개의 동기화 작업을 수동으로 다시 만드는 대신, 가져오기는 몇 초면 끝납니다. 동일한 프로세스가 팀 표준화에도 적용됩니다. 팀 리더가 표준 작업 구성을 만들어 내보낸 다음, 이 JSON 파일을 모든 팀원에게 배포하면 각자 자신의 RcloneView 설치본으로 가져올 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Imported jobs visible in RcloneView Job Manager" class="img-large img-center" />

## 팀 표준화 및 재해 복구

여러 클라우드 대상을 관리하는 팀에게는 동기화 작업 구성의 일관성이 매우 중요합니다. 각 팀원이 각자 수동으로 작업을 구성하면 필터 규칙이나 대상 경로에 불일치가 생겨 파일 누락이나 의도치 않은 덮어쓰기가 발생할 수 있습니다. 마스터 작업 내보내기 파일을 유지하고 이를 모든 팀 컴퓨터에 가져오면 모든 사람이 동일한 워크플로우를 실행하도록 보장할 수 있습니다.

내보내기/가져오기 기능은 동기화 구성을 위한 경량 재해 복구 메커니즘 역할도 합니다. RcloneView를 재설치해야 하거나 컴퓨터를 교체해야 하는 경우, 전체 워크플로우를 복원하는 과정은 rclone 리모트 구성을 가져오고 작업 JSON을 가져오는 두 단계로 끝납니다. RcloneView의 내보내기/가져오기는 무료 버전에서도 사용할 수 있으며, 이 기능을 사용하는 데 PLUS 라이선스가 필요하지 않습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Standardized sync jobs shared across team machines in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 주 사용 컴퓨터의 **작업 관리자**에서 동기화 작업을 구성하세요.
3. 작업 관리자에서 **내보내기**를 사용해 모든 작업을 JSON 파일로 저장하세요.
4. 안전한 보관을 위해 내보내기 파일을 클라우드 백업 위치에 저장하세요.
5. 새 컴퓨터에서 RcloneView를 설치하고, 일치하는 리모트 이름을 설정한 다음 JSON을 **가져오기**하여 모든 작업을 복원하세요.

작업 내보내기 및 가져오기를 통해 RcloneView는 진정으로 이식 가능한 동기화 플랫폼이 됩니다. 워크플로우에 투자한 시간이 단 하나의 컴퓨터에 묶이는 일은 없습니다.

---

**관련 가이드:**

- [RcloneView로 매일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [RcloneView로 rclone 구성 백업 및 마이그레이션하기](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [RcloneView의 일괄 작업](https://rcloneview.com/support/blog/batch-operations-rcloneview)

<CloudSupportGrid />

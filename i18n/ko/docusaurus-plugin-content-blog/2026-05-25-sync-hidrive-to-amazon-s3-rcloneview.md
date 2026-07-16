---
slug: sync-hidrive-to-amazon-s3-rcloneview
title: "HiDrive를 Amazon S3와 동기화 — RcloneView로 클라우드 백업하기"
authors:
  - morgan
description: "RcloneView를 사용하여 HiDrive 파일을 Amazon S3와 동기화하고 백업하는 방법을 알아보세요. 간단한 GUI로 유럽과 글로벌 클라우드 스토리지 간에 파일을 전송할 수 있습니다."
keywords:
  - HiDrive to Amazon S3
  - RcloneView HiDrive backup
  - sync HiDrive S3
  - HiDrive cloud backup
  - transfer HiDrive to AWS
  - cloud-to-cloud backup RcloneView
  - HiDrive migration to S3
  - Amazon S3 backup tool
  - cross-cloud file transfer
  - HiDrive file sync
tags:
  - hidrive
  - amazon-s3
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive를 Amazon S3와 동기화 — RcloneView로 클라우드 백업하기

> RcloneView의 시각적 동기화 도구를 사용해 HiDrive 스토리지를 Amazon S3로 백업하세요 — CLI가 필요 없으며, 예약 실행, 필터링, 실시간 전송 모니터링이 내장되어 있습니다.

Strato의 유럽 클라우드 플랫폼인 HiDrive는 GDPR 준수 스토리지를 중요시하는 기업들에게 인기가 있습니다. 한편 Amazon S3는 객체 스토리지의 내구성과 생태계 통합의 기준점으로, 미션 크리티컬한 데이터를 위한 자연스러운 보조 백업 대상입니다. RcloneView를 사용하면 두 공급자를 하나의 인터페이스에서 연결하고, 명령어를 하나도 작성하지 않고도 HiDrive 폴더와 S3 버킷을 일치시키는 자동화된 필터링 동기화 작업을 실행할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 HiDrive와 Amazon S3 연결하기

HiDrive는 인증에 OAuth를 사용합니다. 즉, RcloneView가 브라우저 탭을 열어 Strato 계정으로 로그인하고 접근 권한을 부여하도록 하며, API 키를 관리할 필요가 없습니다. **Remote > New Remote**로 이동해 **HiDrive**를 선택하고 브라우저 로그인을 완료하세요. HiDrive 폴더 트리가 파일 탐색기에 즉시 표시됩니다.

Amazon S3의 경우 다시 **Remote > New Remote**로 이동해 **Amazon S3**를 선택하고, AWS 액세스 키 ID, 시크릿 액세스 키, 대상 리전을 입력하세요. 최소 권한 접근을 원한다면 AWS 콘솔에서 대상 버킷에만 쓰기 권한이 제한된 전용 IAM 사용자를 생성한 다음, 해당 자격 증명을 RcloneView에 입력하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting HiDrive and Amazon S3 as remotes in RcloneView" class="img-large img-center" />

두 리모트가 모두 등록되면, RcloneView의 이중 패널 탐색기에서 HiDrive는 왼쪽, S3는 오른쪽에 나란히 열어 전체 동기화를 실행하기 전에 폴더 내용을 시각적으로 비교하세요.

## HiDrive-to-S3 동기화 작업 구성하기

두 리모트가 연결되면 **Home > Sync**로 이동해 작업 마법사를 엽니다. HiDrive 폴더를 소스로, S3 버킷(선택적 하위 폴더 프리픽스 포함)을 대상으로 설정하세요. 고급 설정 단계에서는 사용 가능한 대역폭에 맞게 동시 전송 스레드 수를 구성합니다 — 값이 높을수록 평면적인 파일 구조의 대량 전송이 빨라지고, 값이 낮을수록 엄격한 속도 제한이 있는 연결에서 더 안전합니다.

필터링 단계에서는 파일 유형(예: `.tmp`, `.part`)이나 파일 나이 기준으로 관련 없는 파일을 제외할 수 있습니다 — 예를 들어 **Max file age** 필터(`90d`)를 사용해 최근 90일 이내에 수정된 파일만 동기화할 수 있습니다. 이를 통해 작업 범위를 집중시키고 양쪽 엔드포인트에 대한 불필요한 API 호출을 줄일 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

처음 실행하기 전에는 항상 **Dry Run**을 클릭해 전송되거나 삭제될 정확한 파일 목록을 미리 확인하세요 — 데이터가 채워진 HiDrive 계정에서 새 S3 버킷으로 동기화할 때, 데이터가 이동하기 전에 단방향 동기화 방향이 올바른지 확인하는 필수 단계입니다.

## 자동 백업 예약하기

지속적인 보호를 위해 PLUS 라이선스 사용자는 HiDrive-to-S3 작업을 crontab 방식의 일정에 따라 자동으로 실행하도록 예약할 수 있습니다. 일반적인 구성으로는 매일 새벽 2시 전체 동기화와 업무 시간 중 매시간 증분 실행이 있습니다. 작업 마법사의 4단계에 있는 일정 시뮬레이터는 저장을 확정하기 전에 다음 10회의 실행 시간을 미리 보여줍니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated HiDrive to S3 backup in RcloneView" class="img-large img-center" />

무인 실행이 진행되는 동안 **Transferring** 탭은 각 예약 실행의 실시간 전송 속도와 파일 개수를 표시하며, **Job History**는 모든 실행 결과, 전송된 바이트 수, 오류 세부 정보를 기록합니다 — 백업 책임 추적을 위한 완전한 감사 기록입니다.

## 폴더 비교로 동기화 완전성 검증하기

첫 동기화가 완료된 후, RcloneView의 **Folder Compare** 기능을 사용해 HiDrive와 S3가 실제로 동기화되었는지 확인하세요. 비교 화면에서 두 폴더를 열면 RcloneView가 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 크기가 다른 파일을 강조 표시해줍니다 — 파일 목록을 수동으로 대조하지 않고도 누락되거나 불일치하는 항목을 발견할 수 있습니다. 중요도가 높은 아카이브의 경우, 동기화 작업의 고급 설정에서 **checksum** 비교를 활성화해 크기뿐 아니라 해시로 파일 무결성을 검증하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Amazon S3 folder contents in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. OAuth 브라우저 로그인을 사용해 **Remote > New Remote > HiDrive**로 HiDrive 계정을 추가하세요.
3. IAM 자격 증명을 사용해 **Remote > New Remote > Amazon S3**로 Amazon S3 버킷을 추가하세요.
4. **Home > Sync**에서 HiDrive에서 S3로의 동기화 작업을 생성하고, 먼저 Dry Run을 실행한 다음 실행하세요.

자동 예약 기능을 활성화하면 HiDrive 파일이 설정한 일정에 따라 S3로 흘러 들어가 지속적인 수작업 없이도 공급자 간 백업을 유지할 수 있습니다.

---

**관련 가이드:**

- [HiDrive 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Amazon S3 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [HiDrive를 Google Drive와 동기화 — RcloneView로 클라우드 백업하기](https://rcloneview.com/support/blog/sync-hidrive-to-google-drive-rcloneview)

<CloudSupportGrid />

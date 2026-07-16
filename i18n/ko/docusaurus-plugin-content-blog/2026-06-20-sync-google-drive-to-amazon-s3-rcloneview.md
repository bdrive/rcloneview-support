---
slug: sync-google-drive-to-amazon-s3-rcloneview
title: "Google Drive를 Amazon S3로 동기화 — RcloneView로 클라우드 백업 자동화"
authors:
  - jay
description: "RcloneView로 Google Drive를 Amazon S3로 동기화하세요. 클라우드 간 자동 백업 작업을 설정하고, 전송을 예약하고, 하나의 GUI에서 진행 상황을 모니터링할 수 있습니다."
keywords:
  - Google Drive to Amazon S3
  - sync Google Drive to S3
  - backup Google Drive to S3
  - RcloneView Google Drive S3
  - cloud to cloud sync
  - Amazon S3 backup
  - Google Drive backup
  - automated cloud backup
  - cloud storage migration
  - rclone Google Drive S3
tags:
  - google-drive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive를 Amazon S3로 동기화 — RcloneView로 클라우드 백업 자동화

> Google Drive를 Amazon S3로 백업하면 별도의 클라우드 인프라에 데이터의 독립적인 사본을 만들 수 있습니다 — RcloneView는 이를 한 번 설정하면 알아서 돌아가는 워크플로우로 바꿔줍니다.

Google Drive는 협업에는 뛰어나지만, 중요한 파일의 유일한 사본으로 이것 하나에만 의존하는 것은 대부분의 팀이 감수해서는 안 될 위험입니다. Amazon S3는 내구성이 뛰어나고 저렴한 오브젝트 스토리지를 제공하여 Google Drive를 보완하는 독립적인 백업 대상이 되어줍니다. RcloneView의 GUI 기반 작업 시스템을 사용하면, 200GB 규모의 공유 프로젝트 파일을 관리하는 콘텐츠 팀도 rclone 명령어 없이 몇 분 만에 클라우드 간 자동 백업을 구축할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 Google Drive와 Amazon S3 설정하기

동기화 작업을 만들기 전에 두 리모트를 모두 구성해야 합니다. RcloneView에서 **Remote 탭 > New Remote**를 클릭합니다. Google Drive의 경우 제공업체 목록에서 선택하면 OAuth 인증을 위한 브라우저 창이 열립니다. 로그인하고 액세스 권한을 부여하면 API 키를 수동으로 관리할 필요 없이 리모트가 자동으로 저장됩니다.

Amazon S3의 경우 제공업체로 **Amazon S3**를 선택한 다음 **Access Key ID**, **Secret Access Key**, 그리고 S3 버킷의 **Region**(예: `us-east-1`)을 입력합니다. RcloneView는 모든 자격 증명을 암호화된 로컬 저장소에 안전하게 보관합니다. 두 리모트가 모두 저장되면 각각 탐색기 패널의 탭으로 표시되어 바로 탐색할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## 클라우드 간 동기화 작업 구성하기

**Home 탭 > Sync**를 클릭하여 작업 마법사를 엽니다. Google Drive(또는 `My Drive/Projects`와 같은 특정 하위 폴더)를 소스로 설정하고, S3 버킷 프리픽스(예: `my-backup-bucket/google-drive/`)를 대상으로 설정합니다. `gdrive-to-s3-daily`처럼 작업에 알아보기 쉬운 이름을 붙입니다.

**Advanced Settings**에서 **checksum verification**을 활성화하면 크기만이 아니라 해시 값으로 파일을 비교합니다 — 이는 크기는 같지만 부분 덮어쓰기로 인해 내용이 다른 파일을 잡아냅니다. 동시 전송 수는 네트워크 용량에 맞게 설정하며, 대부분의 브로드밴드 연결에서는 4~8개 전송이 Google Drive의 요청 제한(rate limit)을 유발하지 않으면서도 적합합니다.

**Filtering** 단계에서는 무엇을 동기화할지 정밀하게 제어할 수 있습니다: 문서 백업만 필요하다면 대용량 동영상 파일을 제외하거나, Max File Age 필드를 사용해 최근 90일 이내에 수정된 파일로 범위를 제한할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Google Drive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

## 전송 실행 및 모니터링

첫 전체 동기화를 실행하기 전에 내장된 **Dry Run** 기능을 사용해 대상에서 어떤 파일이 복사되거나 삭제될지 정확히 미리 확인하세요. 특히 S3 버킷이 비어 있는 초기 설정 단계에서, 기가바이트 단위의 데이터를 전송하기 전에 작업 구성을 확인하는 데 유용합니다.

준비가 되면 **Run**을 클릭합니다. RcloneView 하단의 **Transferring** 탭에서 속도, 파일 수, 완료 백분율 등의 실시간 진행 상황을 확인할 수 있습니다. 수만 개의 파일이 있는 대규모 Google Drive 라이브러리의 경우 초기 동기화에 몇 시간이 걸릴 수 있지만, 이후 실행에서는 변경된 파일만 전송되므로 훨씬 빠르게 완료됩니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to S3 transfer progress in RcloneView" class="img-large img-center" />

## 매일 자동 백업 예약하기

**PLUS 라이선스**가 있다면 **Job Manager**에서 작업을 열고 cron 스타일 인터페이스를 사용해 일정을 추가할 수 있습니다 — 예를 들어 매일 새벽 1시에 실행되도록 설정할 수 있습니다. **Simulate Schedule** 도구는 다음 10회의 실행 시각을 미리 보여주므로 백업이 정확한 시점에 실행되는지 확인할 수 있습니다. 저장하고 나면 RcloneView 창이 열려 있든 아니든 백업이 자동으로 실행됩니다.

실행이 끝날 때마다 **Job History**에 소요 시간, 전송 속도, 파일 수, 완료 상태가 기록되어 Google Drive에서 S3로 푸시된 모든 백업에 대한 명확한 감사 기록을 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive to Amazon S3 backup in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Remote 탭 > New Remote**에서 OAuth 로그인으로 Google Drive 리모트를 추가합니다.
3. AWS Access Key ID, Secret Key, 버킷 리전을 사용해 Amazon S3 리모트를 추가합니다.
4. 동기화 작업을 만듭니다: 소스 = Google Drive 폴더, 대상 = S3 버킷 프리픽스, 그런 다음 실행하거나 예약합니다.

이제 Google Drive 데이터는 AWS 인프라에 독립적으로 백업되어, 실수로 인한 삭제, 계정 정지, 또는 어느 한쪽 플랫폼의 서비스 장애로부터 보호됩니다.

---

**관련 가이드:**

- [증분 백업: RcloneView로 Google Drive를 Amazon S3에 백업하기](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [RcloneView로 Amazon S3 버킷을 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [RcloneView로 매일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />

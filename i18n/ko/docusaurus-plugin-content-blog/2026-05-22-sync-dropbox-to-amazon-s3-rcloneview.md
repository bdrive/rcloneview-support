---
slug: sync-dropbox-to-amazon-s3-rcloneview
title: "Dropbox를 Amazon S3와 동기화하기 — RcloneView로 클라우드 백업"
authors:
  - tayson
description: "RcloneView를 사용해 Dropbox 파일을 Amazon S3에 동기화하고 백업하는 방법을 알아보세요. 예약 실행, 드라이런 미리보기, 전송 기록을 갖춘 클라우드 간 전송을 설정합니다."
keywords:
  - Dropbox to Amazon S3
  - Dropbox S3 backup
  - sync Dropbox to S3
  - RcloneView cloud-to-cloud
  - Dropbox backup to object storage
  - Amazon S3 backup
  - cloud migration rclone GUI
  - automate Dropbox backup
  - Dropbox S3 sync
  - cloud-to-cloud file transfer
tags:
  - RcloneView
  - dropbox
  - amazon-s3
  - cloud-to-cloud
  - migration
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox를 Amazon S3와 동기화하기 — RcloneView로 클라우드 백업

> RcloneView의 시각적 클라우드 간 동기화 기능을 사용해 CLI 없이 Dropbox 파일을 Amazon S3에 미러링하여 안정적이고 독립적으로 관리되는 오브젝트 스토리지를 구축하세요.

많은 팀이 일상적인 협업에는 Dropbox를 사용하지만, 장기 보관, 컴플라이언스 아카이빙, 벤더 종속성 완화를 위해 Amazon S3에 보조 백업을 두고 싶어 합니다. RcloneView를 사용하면 데이터를 로컬 컴퓨터를 거치지 않고, rclone 명령어를 직접 작성하지 않고도 Dropbox에서 S3 버킷으로 파일을 바로 동기화할 수 있습니다. 500GB 규모의 프로젝트 파일을 보유한 영상 제작 회사라면 몇 분 만에 야간 Dropbox-to-S3 백업 작업을 설정하고, 실행할 때마다 전체 감사 기록을 확보할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox와 Amazon S3를 리모트로 연결하기

먼저 RcloneView에서 두 프로바이더를 모두 추가합니다. **Remote 탭 > New Remote**로 이동해 **Dropbox**를 선택하면 RcloneView가 OAuth 인증을 위한 브라우저 창을 엽니다. 액세스 권한을 허용하면 API 키나 수동 토큰 설정 없이 즉시 Explorer 패널에 Dropbox 계정이 표시됩니다.

Amazon S3의 경우 두 번째 리모트를 추가하고 **Amazon S3**를 선택한 뒤, **Access Key ID**, **Secret Access Key**, 대상 **리전 코드**(예: `us-east-1`)를 입력합니다. 이후 두 리모트가 모두 Explorer의 탭으로 표시되어, 작업을 생성하기 전에 각 쪽을 탐색하며 폴더 구조를 확인할 수 있습니다. Dropbox 폴더를 우클릭하면 동기화를 실행하기 전에 해당 폴더의 크기를 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## 클라우드 간 동기화 작업 구성하기

두 리모트가 준비되면 **Home 탭 > Sync**를 열어 4단계 동기화 마법사를 시작합니다:

1. **스토리지 구성** — Dropbox의 소스 폴더(예: `/Project Files`)와 키 접두사를 포함한 Amazon S3 대상 버킷(예: `my-backup-bucket/dropbox-mirror`)을 선택합니다. 기록에서 쉽게 식별할 수 있도록 작업 이름을 명확하게 지정합니다.
2. **고급 설정** — 속도와 API 속도 제한 사이의 균형을 맞추기 위해 동시 전송 수를 설정하고, S3에서 바이트 수준의 데이터 무결성 검증이 필요하다면 체크섬 검증을 활성화합니다.
3. **필터링** — `.dropbox` 시스템 메타데이터 파일, 캐시 디렉터리, 또는 S3에 필요 없는 파일 유형을 제외합니다. 미리 정의된 필터 카테고리(Image, Video, Document)를 사용하면 일반적인 필터링 시나리오를 빠르게 처리할 수 있습니다.
4. **예약(PLUS 라이선스)** — 자동 야간 실행을 위해 crontab 방식의 일정을 구성합니다. 예약 UI를 통해 다음 실행 시간을 시뮬레이션하여 저장 전에 타이밍을 확인할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Dropbox to Amazon S3 cloud-to-cloud sync job in RcloneView" class="img-large img-center" />

## 첫 실제 동기화 전에 드라이런 실행하기

특히 S3 버킷에 이미 데이터가 있는 경우, 첫 실제 전송을 실행하기 전에 **Dry Run** 기능을 사용하세요. 드라이런은 동기화를 시뮬레이션하여 실제로 변경을 가하지 않고도 어떤 파일이 복사될지, 그리고 (있다면) 대상에서 어떤 파일이 삭제될지를 정확히 보여줍니다. 이 미리보기를 통해 잘못 설정된 소스 경로나 예기치 않은 삭제를 S3 버킷에 반영되기 전에 미리 파악할 수 있습니다.

드라이런 결과에 만족했다면 Job Manager에서 **Run**을 클릭해 실제 동기화를 시작합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Dropbox to Amazon S3 sync job in RcloneView Job Manager" class="img-large img-center" />

## 전송 모니터링 및 작업 기록 확인하기

작업이 실행되는 동안 RcloneView 하단의 **Transferring** 탭에서 파일 이름, 전송 속도, 전송된 총 바이트 수 등 실시간 진행 상황을 확인할 수 있습니다. 파일은 로컬 워크스테이션을 거치지 않고 Dropbox와 S3 사이에서 직접 이동하므로, 표시되는 속도는 로컬 연결이 아닌 클라우드 측 대역폭을 반영합니다.

각 동기화가 완료되면 **Job History** 탭에 시작 시간, 소요 시간, 상태(완료 / 오류 / 취소), 총 전송된 데이터가 기록됩니다. 컴플라이언스가 중요한 워크플로에서는 이 로그가 예약된 백업이 정시에 오류 없이 실행되었는지를 확인할 수 있는 문서로 활용됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Dropbox to Amazon S3 backup runs in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Remote 탭 > New Remote > Dropbox**를 통해 Dropbox를 추가하고 브라우저 OAuth 흐름으로 인증합니다.
3. **Remote 탭 > New Remote > Amazon S3**를 통해 Access Key ID, Secret Access Key, 리전을 입력하여 Amazon S3를 추가합니다.
4. **Home 탭 > Sync**를 열고 Dropbox를 소스로, S3를 대상으로 선택한 뒤 드라이런 미리보기를 실행하고, 저장 후 자동 야간 백업을 예약합니다.

이제 Dropbox 파일이 설정한 일정에 따라 실행되고 모든 전송 기록이 남는, 안정적이고 독립적으로 관리되는 Amazon S3 백업을 갖추게 됩니다.

---

**관련 가이드:**

- [RcloneView로 OneDrive를 Amazon S3로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-onedrive-to-amazon-s3-rcloneview)
- [Amazon S3 관리 — RcloneView로 클라우드 동기화 및 백업](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [RcloneView로 Google Drive를 Amazon S3에 증분 백업하기](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)

<CloudSupportGrid />

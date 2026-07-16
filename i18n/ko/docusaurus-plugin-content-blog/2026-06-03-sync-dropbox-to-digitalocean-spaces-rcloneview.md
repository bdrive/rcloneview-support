---
slug: sync-dropbox-to-digitalocean-spaces-rcloneview
title: "Dropbox를 DigitalOcean Spaces와 동기화 — RcloneView로 클라우드 백업하기"
authors:
  - morgan
description: "RcloneView를 사용하여 Dropbox 파일을 DigitalOcean Spaces에 동기화하고 백업하는 방법을 알아보세요. CLI 없이 자동화된 클라우드 간 전송을 설정할 수 있습니다."
keywords:
  - sync Dropbox to DigitalOcean Spaces
  - Dropbox to DigitalOcean backup
  - RcloneView Dropbox DigitalOcean
  - cloud-to-cloud sync
  - DigitalOcean Spaces backup
  - Dropbox backup object storage
  - cloud sync GUI
  - RcloneView S3 sync
  - automated cloud backup
  - DigitalOcean Spaces rclone
tags:
  - dropbox
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox를 DigitalOcean Spaces와 동기화 — RcloneView로 클라우드 백업하기

> CLI 명령어 없이 Dropbox 파일을 DigitalOcean Spaces 오브젝트 스토리지에 자동으로 백업하세요.

Dropbox는 팀이 매일 파일을 공유하며 협업하기에 적합한 도구입니다. DigitalOcean Spaces는 인프라와 통합된 확장 가능하고 저렴한 스토리지를 원하는 개발자를 위해 만들어진 S3 호환 오브젝트 스토리지를 제공합니다. 이 두 서비스를 RcloneView와 함께 사용하면 자동화된 오프사이트 백업 파이프라인을 구축할 수 있습니다. 파일은 활발한 협업을 위해 Dropbox에 보관되고, Spaces는 영속적인 백업 사본을 보관합니다. RcloneView는 클라우드 간 전송 전체를 시각적으로 처리하므로 터미널이 필요하지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox와 DigitalOcean Spaces 연결하기

먼저 두 서비스를 RcloneView에 리모트로 추가합니다. Dropbox의 경우 **Remote 탭 > New Remote**로 이동하여 **Dropbox**를 선택하고, OAuth 브라우저 흐름을 따라 클릭하여 RcloneView를 인증합니다. API 키를 복사할 필요가 없습니다. 열리는 브라우저 창이 자동으로 인증을 처리하고 완료되면 RcloneView로 돌아옵니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

DigitalOcean Spaces의 경우, 두 번째 새 리모트를 생성하고 **S3**를 선택한 후 공급자로 **DigitalOcean**을 선택합니다. DigitalOcean 제어판(API > Spaces Keys)에서 발급받은 **Access Key**와 **Secret Key**, 그리고 Spaces 리전에 해당하는 **리전 엔드포인트**가 필요합니다. 예를 들어 뉴욕 리전이라면 `nyc3.digitaloceanspaces.com`입니다. 두 리모트가 모두 저장되면 RcloneView 파일 탐색기에서 탐색 가능한 탭으로 표시됩니다.

## 동기화 작업 구성하기

두 리모트가 연결되면 **Home 탭**에서 **Sync**를 클릭하여 4단계 동기화 마법사를 엽니다. 1단계에서는 Dropbox 폴더를 **소스**로, DigitalOcean Spaces 버킷(또는 그 안의 하위 디렉터리)을 **대상**으로 설정합니다. 작업 이름은 알아보기 쉽게 지정하세요 — `dropbox-spaces-backup`처럼 지으면 좋습니다 — 그리고 대상을 소스의 충실한 복제본으로 유지하려면 **단방향 동기화**를 선택합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job from Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

2단계에서는 연결 용량에 맞춰 동시 파일 전송 수를 설정합니다. 여러 Dropbox 폴더에 흩어진 수천 개의 작은 자산 파일을 다루는 디자인 에이전시라면, 이 값을 늘리면 초기 전체 동기화 속도가 눈에 띄게 빨라집니다. 3단계에서는 Spaces에 필요하지 않은 항목을 제외하는 필터 규칙을 추가합니다. 예를 들어 `.DS_Store` 파일, Dropbox Paper 문서, 또는 임시 초안용으로만 사용하는 폴더 등이 해당됩니다.

작업을 처음 실행하기 전에 **Dry Run**을 클릭하여 정확히 어떤 파일이 전송되거나 삭제될지 확인하세요. 실제로 데이터가 이동하기 전에 필터 규칙이 의도한 대로 작동하는지 확인할 수 있습니다.

## 진행 중인 전송 모니터링하기

**Run Job**을 클릭하면 RcloneView 하단의 **Transferring** 탭에서 파일 수, 전송 속도, 이동한 총 바이트 등 실시간 진행 상황을 확인할 수 있습니다. 전체 Dropbox 계정에서 8만 개의 파일을 이동하는 콘텐츠 스튜디오처럼 대규모 초기 동기화의 경우, 이 화면을 통해 작업 완료까지 걸리는 시간을 쉽게 예측하고 초기 오류를 파악할 수 있습니다. 실행 중인 작업은 언제든 취소할 수 있으며, 재시도 설정(2단계에서 구성 가능)이 일시적인 네트워크 문제를 자동으로 처리합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

## 자동 백업 예약하기 (PLUS 라이선스)

손이 가지 않는 백업 루틴을 원한다면, **PLUS 라이선스** 사용자는 동기화 마법사 4단계에서 crontab 방식의 일정을 추가할 수 있습니다. 매일 밤, 몇 시간마다, 또는 요일을 지정하여 작업을 실행하도록 설정할 수 있습니다. 저장하기 전에 **Simulate Schedule**을 클릭하면 다음 여러 실행 시간을 미리 확인하고 타이밍이 올바른지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Dropbox to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

예약이 완료되면 RcloneView는 백그라운드에서 작업을 실행하고 완료 시 데스크톱 알림을 보냅니다. **Job History** 화면에는 시작 시간, 소요 시간, 파일 수, 총 용량, 최종 상태 등 모든 실행 기록이 저장되므로, Dropbox 백업이 마지막으로 언제 실행되었고 성공했는지 항상 명확하게 확인할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView**를 다운로드합니다.
2. OAuth 브라우저 로그인 흐름을 통해 **Dropbox**를 리모트로 추가합니다.
3. Access Key, Secret Key, 리전 엔드포인트를 사용하여 **DigitalOcean Spaces**를 S3 리모트로 추가합니다.
4. 동기화 마법사를 열고 Dropbox를 소스로, Spaces를 대상으로 설정한 후 **Run Job**을 클릭합니다.

이 설정을 완료하면 Dropbox 콘텐츠가 DigitalOcean Spaces에 지속적으로 미러링되어, 별도의 수동 작업 없이도 유지되는 안정적인 오프사이트 백업을 확보할 수 있습니다.

---

**관련 가이드:**

- [Dropbox 관리 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [DigitalOcean Spaces 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Dropbox를 Backblaze B2에 백업하기 — RcloneView로 저렴한 클라우드 스토리지 이용하기](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />

---
slug: manage-digitalocean-spaces-cloud-sync-backup-rcloneview
title: "DigitalOcean Spaces 관리 — RcloneView로 파일 동기화 및 백업"
authors:
  - tayson
description: "DigitalOcean Spaces를 RcloneView에 연결하여 GUI로 오브젝트 스토리지를 관리하세요. CLI 명령 없이 리전 간 파일을 동기화, 백업, 전송할 수 있습니다."
keywords:
  - DigitalOcean Spaces RcloneView
  - DigitalOcean Spaces sync
  - DigitalOcean Spaces backup
  - S3-compatible object storage GUI
  - DigitalOcean Spaces management
  - rclone DigitalOcean Spaces
  - cloud object storage sync
  - DigitalOcean backup tool
tags:
  - RcloneView
  - digitalocean-spaces
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DigitalOcean Spaces 관리 — RcloneView로 파일 동기화 및 백업

> RcloneView는 S3 호환 API를 통해 DigitalOcean Spaces에 연결되어, 모든 리전의 오브젝트 스토리지 버킷을 시각적 파일 관리자로 다룰 수 있게 해줍니다.

DigitalOcean Spaces는 균일한 요금제와 내장 CDN을 제공하는 개발자 친화적인 오브젝트 스토리지 서비스입니다. DigitalOcean Droplets에서 워크로드를 운영하는 팀들은 백업, 정적 자산, 배포 아티팩트를 Spaces에 자주 저장합니다. RcloneView는 rclone의 S3 호환 백엔드 위에 그래픽 레이어를 추가하여, CLI를 전혀 사용하지 않고도 버킷을 시각적으로 탐색하고, 예약 동기화를 실행하고, 로컬 디렉터리와 원격 스토리지를 비교할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 DigitalOcean Spaces 설정하기

DigitalOcean Spaces는 S3 호환 API를 사용하므로, RcloneView에서는 이를 S3 리모트로 설정합니다. **Remote 탭 → New Remote → Amazon S3 Compatible**로 이동한 다음, 프로바이더로 **DigitalOcean Spaces**를 선택하세요. 다음 항목이 필요합니다:

- **Access Key ID** — DigitalOcean 컨트롤 패널의 API → Spaces Keys에서 생성
- **Secret Access Key** — 생성 시 한 번만 표시됨
- **Endpoint** — 리전별로 다름, 예: `nyc3.digitaloceanspaces.com`

저장하면 Spaces 버킷이 즉시 Explorer 패널에 나타납니다. 버킷 내용을 탐색하고, 로컬 폴더에서 드래그 앤 드롭으로 파일을 업로드하며, Droplet의 백업 디렉터리와 Spaces 버킷을 나란히 비교하는 패널을 열 수도 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring DigitalOcean Spaces as an S3 remote in RcloneView" class="img-large img-center" />

## 로컬 서버를 DigitalOcean Spaces로 동기화하기

일반적인 사용 사례는 다음과 같습니다: 개발 팀이 CI 서버에서 빌드 아티팩트를 생성하고, 이를 매일 밤 Spaces에 장기 저장용으로 업로드하고자 합니다. RcloneView의 Job Manager를 사용하여 로컬 아티팩트 디렉터리에서 `do-spaces:artifacts-bucket/builds`로 향하는 동기화 작업을 생성하세요. 일정을 오전 3시로 설정하고, 체크섬 검증을 활성화하며, 500MB를 초과하는 임시 파일을 제외하기 위한 최대 파일 크기 필터를 추가합니다.

1:N 동기화 옵션을 사용하면 동일한 아티팩트 디렉터리를 DigitalOcean Spaces와 Amazon S3에 동시에 미러링할 수 있습니다 — 다중 리전 이중화를 유지하거나 스토리지 프로바이더를 전환하는 팀에게 유용합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a DigitalOcean Spaces sync job in real time" class="img-large img-center" />

## 리전 간 및 프로바이더 간 전송

Spaces 리전 간(예: `nyc3`에서 `sfo3`로) 데이터를 이동하거나 다른 S3 호환 프로바이더로 완전히 마이그레이션해야 할 때, RcloneView는 이를 클라우드 간 직접 전송으로 처리합니다. Explorer 패널 두 개를 열어 — 하나는 소스 Spaces 버킷을, 다른 하나는 대상을 가리키게 한 다음 — 드래그 앤 드롭하거나 동기화 마법사를 사용하세요.

대규모 마이그레이션의 경우, 동기화 마법사 2단계에서 **파일 전송 수**를 8~16으로 설정하여 처리량을 극대화하세요. RcloneView의 실시간 전송 모니터는 파일별 진행 상황과 전체 속도를 보여주므로, 대용량 데이터셋의 완료 시간을 예측할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between DigitalOcean Spaces and Amazon S3 in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. DigitalOcean 컨트롤 패널에서 Spaces 액세스 키를 생성하세요.
3. RcloneView에서 Spaces 자격 증명과 엔드포인트로 새 S3 리모트를 생성하세요.
4. Job Manager에서 Spaces 버킷을 대상으로 하는 동기화 작업을 생성하고 일정을 설정하세요.

DigitalOcean Spaces는 이제 완전히 관리되는 예약 백업 대상이 됩니다 — 실시간 모니터링과 작업 기록을 하나의 인터페이스에서 모두 확인할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Google Drive를 DigitalOcean Spaces로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)
- [RcloneView로 DigitalOcean Spaces를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [RcloneView로 S3, Wasabi, R2 통합 관리하기](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />

---
slug: sync-google-drive-to-digitalocean-spaces-rcloneview
title: "Google Drive를 DigitalOcean Spaces로 동기화 — RcloneView를 이용한 클라우드 백업"
authors:
  - tayson
description: "저렴한 S3 호환 클라우드 백업을 위해 Google Drive를 DigitalOcean Spaces로 동기화하세요. RcloneView의 시각적 인터페이스로 자동화된 동기화 작업을 설정할 수 있습니다."
keywords:
  - sync google drive to digitalocean spaces
  - google drive digitalocean backup
  - google drive s3 compatible sync
  - digitalocean spaces backup
  - cloud-to-cloud sync
  - rcloneview google drive sync
  - google drive object storage
  - digitalocean spaces transfer
  - automated cloud backup
  - google drive redundancy
tags:
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive를 DigitalOcean Spaces로 동기화 — RcloneView를 이용한 클라우드 백업

> Google Drive를 DigitalOcean Spaces로 백업하면 Drive에 있는 모든 파일에 대해 저렴한 S3 호환 안전망을 확보할 수 있습니다.

Google Drive는 협업과 실시간 편집을 훌륭하게 처리하지만, 보관용 백업 대상으로 설계되지는 않았습니다. DigitalOcean Spaces는 월 $5에 250GB(추가 스토리지는 GB당 $0.02)를 제공하는 정액제 S3 호환 오브젝트 스토리지로, Drive 백업을 위한 예측 가능하고 저렴한 대상입니다. RcloneView는 두 서비스를 연결하고 예약된 작업과 실시간 진행 상황 모니터링을 통해 두 서비스를 동기화 상태로 유지합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive 백업에 DigitalOcean Spaces를 사용해야 하는 이유

DigitalOcean Spaces는 여러 리전(NYC, SFO, AMS, SGP, FRA)에 걸쳐 S3 호환 오브젝트 스토리지를 제공합니다. 정액 가격 모델 덕분에 AWS S3에서 발생할 수 있는 요청당 비용 예상치 못한 청구를 없앨 수 있습니다. 이미 DigitalOcean에서 인프라를 운영 중인 팀이라면 Spaces가 네이티브로 통합됩니다. Google Drive에서 동기화된 파일은 즉시 Droplets, Kubernetes 클러스터, 서버리스 함수에서 접근할 수 있게 됩니다.

Google Drive의 기본 백업 옵션은 제한적입니다. Google Takeout은 지속적인 미러링이 아닌 일회성 내보내기만 생성합니다. 서드파티 백업 도구는 추가 Google Workspace 라이선스 비용에 맞먹는 사용자당 요금을 청구하는 경우가 많습니다. RcloneView를 통해 Drive를 Spaces로 동기화하면 Spaces 스토리지 요금만 들고, 자신의 컴퓨터나 서버에서 실행됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## 리모트 설정하기

RcloneView에서 공급자로 "Google Drive"를 선택하여 Google Drive 리모트를 추가하세요. OAuth 흐름은 브라우저를 통해 인증합니다. Google 계정으로 로그인하고 접근을 허용하세요. 루트 폴더 ID를 구성하여 전체 Drive, 특정 공유 드라이브, 또는 단일 폴더로 리모트 범위를 지정할 수 있습니다.

DigitalOcean Spaces의 경우 S3 호환 리모트를 생성하세요. 공급자 드롭다운에서 "Amazon S3 Compliant"를 선택한 다음 "DigitalOcean Spaces"를 선택합니다. Spaces Access Key와 Secret Key(DigitalOcean 컨트롤 패널의 API > Spaces Keys에서 생성)를 입력하세요. 엔드포인트는 `nyc3.digitaloceanspaces.com` 또는 `fra1.digitaloceanspaces.com`과 같이 원하는 리전으로 설정합니다. RcloneView는 자격 증명을 검증하고 기존 Spaces 목록을 표시합니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Browsing Google Drive and DigitalOcean Spaces in RcloneView explorer" class="img-large img-center" />

## 동기화 작업 구성하기

RcloneView의 작업 관리자를 열고 새 작업을 생성하세요. Google Drive를 소스로, DigitalOcean Space를 대상으로 설정합니다. 정확한 미러를 유지하려면 "Sync" 모드를 선택하고, Drive에서 파일이 삭제된 후에도 Spaces에 삭제된 파일을 보존하고 싶다면 "Copy" 모드를 선택하세요.

Google Drive는 Google 문서, 스프레드시트, 프레젠테이션을 전통적인 파일 확장자가 없는 클라우드 네이티브 형식으로 저장합니다. RcloneView는 전송 중 이러한 파일을 자동으로 Microsoft Office 형식(`.docx`, `.xlsx`, `.pptx`)으로 내보내어 Spaces에 사용 가능한 파일로 저장되도록 합니다. PDF나 다른 형식을 선호하는 경우 리모트 구성에서 내보내기 형식을 사용자 지정할 수 있습니다.

초기 동기화 속도를 높이려면 병렬 전송을 구성하세요. 일반적으로 4~8개의 동시 전송이 Google Drive의 API 할당량 내에서 잘 작동합니다. 다른 서비스와 연결을 공유하는 경우 대역폭 제한을 설정하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Drive to DigitalOcean Spaces sync" class="img-large img-center" />

## 예약 및 지속적인 유지 관리

Drive가 얼마나 자주 변경되는지에 따라 매일 밤 또는 매주 동기화 작업이 실행되도록 예약하세요. RcloneView의 스케줄러는 cron 스타일 타이밍을 지원하며, 각 실행은 마지막 동기화 이후 변경된 파일만 전송합니다. 작업 기록 패널은 타임스탬프, 파일 수, 전송 볼륨과 함께 모든 실행을 추적합니다.

DigitalOcean Spaces는 내장 CDN을 지원합니다. Drive 파일이 동기화되면 Spaces CDN을 활성화하여 전 세계에 파일을 제공할 수 있습니다. Google Drive에서 시작된 마케팅 자산, 문서, 미디어를 배포하는 데 유용합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Drive to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. OAuth를 통해 Google Drive 계정을 인증하고, 원한다면 특정 폴더나 공유 드라이브로 리모트 범위를 지정하세요.
3. API 키와 리전 엔드포인트로 DigitalOcean Spaces 리모트를 추가하세요.
4. 지속적인 백업을 위해 Sync 작업을 생성하고 반복적으로 실행되도록 예약하세요.

Google Drive를 DigitalOcean Spaces와 동기화하면 파일이 두 개의 독립적인 클라우드에 존재하게 되어 실수로 인한 삭제, 계정 잠금, 공급자 장애로부터 보호받을 수 있습니다.

---

**관련 가이드:**

- [Google Drive를 다른 계정으로 쉽게 전송하기](https://rcloneview.com/support/blog/transfer-google-drive-to-another-account-easily)
- [RcloneView로 DigitalOcean Spaces를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [RcloneView로 Linode Object Storage, S3, Google Drive 동기화하기](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)

<CloudSupportGrid />

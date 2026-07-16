---
slug: rcloneview-terramaster-nas-cloud-backup
title: "TerraMaster NAS에서 RcloneView로 클라우드 백업 및 동기화하기"
authors:
  - tayson
description: "TerraMaster NAS와 RcloneView를 설정하여 NAS 데이터를 클라우드 스토리지로 동기화하고 백업하세요. SFTP 또는 SMB로 연결하고 S3, B2, Google Drive로의 백업을 자동화합니다."
keywords:
  - rcloneview
  - terramaster nas cloud backup
  - terramaster cloud sync
  - terramaster backup to cloud
  - terramaster rclone
  - nas cloud backup gui
  - terramaster google drive
  - terramaster s3 backup
  - terramaster file sync
  - nas to cloud transfer
tags:
  - nas
  - platform
  - cloud-backup
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# TerraMaster NAS에서 RcloneView로 클라우드 백업 및 동기화하기

> TerraMaster NAS 장치는 저렴한 네트워크 스토리지를 제공하지만, 내장된 클라우드 백업 옵션은 제한적입니다 — **RcloneView**는 시각적인 GUI를 통해 멀티 클라우드 백업, 동기화, 파일 관리 기능으로 TerraMaster를 확장합니다.

TerraMaster는 TOS(TerraMaster Operating System)를 운영하는 인기 NAS 장치를 제조합니다. TOS는 몇몇 제공업체에 대한 기본적인 클라우드 동기화 기능을 포함하지만, 기업과 파워 유저에게 필요한 다양한 클라우드 스토리지 서비스를 모두 지원하지는 않습니다. RcloneView는 SFTP 또는 SMB를 통해 TerraMaster NAS에 연결하고 이를 70개 이상의 클라우드 제공업체와 연결하여 자동 백업, 클라우드-NAS 동기화, 크로스 클라우드 파일 관리를 가능하게 합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## TerraMaster에 클라우드 백업을 추가해야 하는 이유

NAS는 빠른 로컬 스토리지와 RAID 이중화를 제공하지만, 다음으로부터는 보호해주지 못합니다:

- **사이트 수준의 재해**: 화재, 홍수, 도난, 전력 서지는 NAS와 모든 드라이브를 동시에 파괴할 수 있습니다. RAID는 드라이브 장애로부터 보호하지만 사이트 손실로부터는 보호하지 못합니다.
- **랜섬웨어**: 랜섬웨어가 네트워크에 도달하면 NAS 공유를 암호화할 수 있습니다. 클라우드 백업(특히 불변 스토리지로의 백업)은 복구 지점을 제공합니다.
- **RAID를 넘어서는 하드웨어 장애**: 컨트롤러 보드 장애, 전원 공급 장치 손상, 펌웨어 손상은 RAID 수준과 관계없이 NAS 전체를 접근 불가능하게 만들 수 있습니다.

클라우드 백업은 로컬 NAS가 제공할 수 없는 지리적 이중화를 제공합니다. RcloneView는 빠른 로컬 NAS에서 주 워크플로를 유지하면서 이러한 백업을 자동화합니다.

## TerraMaster에 RcloneView 연결하기

RcloneView는 (TerraMaster 자체가 아닌) 데스크톱 또는 별도의 머신에서 실행되며 네트워크를 통해 NAS에 연결됩니다. 두 가지 연결 방법을 사용할 수 있습니다:

### SFTP 연결

TerraMaster에서 SSH를 활성화하세요(TOS 제어판 > 서비스 > SSH). 그런 다음 RcloneView의 리모트 관리자에서 SFTP 리모트를 추가합니다:

- 호스트: TerraMaster의 IP 주소 (예: `192.168.1.100`)
- 포트: 22 (기본 SSH 포트)
- 사용자 이름: TOS 관리자 사용자 이름
- 비밀번호 또는 SSH 키: TOS 자격 증명

SFTP는 암호화된 파일 전송을 제공하며, RcloneView에서 NAS 데이터에 접근하는 데 권장되는 방법입니다.

### SMB 연결

TerraMaster 공유 폴더가 SMB(Windows 파일 공유)를 통해 접근 가능하다면, RcloneView에서 SMB 리모트를 추가하세요. 이는 표준 Windows 네트워크 경로 형식을 사용하며, 이미 SMB 공유가 구성되어 있다면 편리합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting RcloneView to TerraMaster NAS via SFTP" class="img-large img-center" />

## NAS 데이터를 클라우드 스토리지로 백업하기

연결이 완료되면 TerraMaster에서 클라우드 목적지로 백업 작업을 설정하세요:

1. 왼쪽 창에서 TerraMaster SFTP 리모트를 엽니다.
2. 오른쪽 창에서 클라우드 목적지(AWS S3, Backblaze B2, Google Drive, Wasabi)를 엽니다.
3. NAS에서 백업할 폴더로 이동합니다.
4. NAS 데이터를 클라우드로 복사하는 동기화 작업을 생성합니다.

RcloneView의 델타 감지 기능은 마지막 백업 이후 변경된 파일만 전송되도록 보장합니다. 테라바이트 규모의 데이터를 가진 NAS의 경우 초기 백업에는 며칠이 걸릴 수 있지만, 이후의 일일 백업은 그날 변경된 사항만 전송하므로 일반적으로 몇 분 만에 완료됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backing up TerraMaster NAS to cloud storage in RcloneView" class="img-large img-center" />

## 클라우드 백업 목적지 선택하기

NAS 백업의 경우, 이그레스(반출) 비용이 없는 비용 효율적인 스토리지가 이상적입니다:

- **Backblaze B2**: 월 6달러/TB, Cloudflare 파트너십을 통한 무료 이그레스. 간단한 가격 정책으로 단순한 백업에 적합합니다.
- **Wasabi**: 월 6.99달러/TB, 이그레스 비용 없음. 최소 90일 보관 기간이 적용됩니다.
- **AWS S3 Glacier Deep Archive**: 아카이브 데이터의 경우 월 0.99달러/TB. 검색에는 몇 시간이 소요되며 GB당 검색 비용이 발생하지만, 스토리지 비용은 가장 저렴합니다.
- **Google Drive**: 팀이 이미 Google Workspace를 사용하고 있다면 편리합니다. 스토리지 비용은 더 높지만 통합이 매끄럽습니다.

대부분의 TerraMaster 사용자에게는 Backblaze B2가 비용, 단순성, 검색 속도 면에서 가장 균형 잡힌 선택입니다.

## 자동 백업 예약하기

RcloneView의 스케줄러를 구성하여 NAS 백업을 자동으로 실행하세요:

- **일일 증분 백업**: 매일 밤 NAS에서 변경된 파일을 클라우드로 동기화합니다. 초기 시딩 이후에는 대역폭 사용량이 최소화됩니다.
- **주간 전체 검증**: 매주 비교 작업을 실행하여 모든 NAS 파일이 클라우드 백업과 일치하는지 확인합니다. 이를 통해 전송 중단이나 조용한 데이터 손상으로 인한 불일치를 발견할 수 있습니다.

업무 시간 동안 백업 트래픽이 네트워크를 소모하지 않도록 대역폭 제한을 설정하세요. 야간이나 비수기 시간대에 백업을 예약하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling TerraMaster NAS backup in RcloneView" class="img-large img-center" />

## 클라우드 데이터를 TerraMaster로 동기화하기

반대 워크플로도 유용합니다: 클라우드 데이터를 NAS로 가져와 로컬에서 접근하는 것입니다. 팀이 Google Drive에서 협업하지만 프로젝트 파일에 빠른 로컬 접근이 필요하다면, 관련 Drive 폴더를 TerraMaster로 동기화하세요. NAS 속도로 로컬에서 파일을 편집하면, RcloneView가 예약에 따라 변경 사항을 클라우드로 다시 동기화합니다.

이러한 하이브리드 방식은 클라우드 스토리지의 협업 이점과 로컬 NAS 접근의 성능을 모두 제공합니다.

## NAS 백업 암호화하기

민감한 데이터의 경우, RcloneView의 crypt 리모트를 사용하여 파일이 네트워크를 떠나기 전에 암호화하세요. 암호화는 RcloneView가 실행되는 데스크톱 머신에서 클라우드에 업로드되기 전에 이루어집니다. 클라우드 제공업체가 침해당하더라도 NAS 백업 데이터는 읽을 수 없는 상태로 유지됩니다.

## 모니터링 및 검증

RcloneView의 작업 기록은 전송된 파일 수, 건너뛴 파일 수, 총 바이트 수, 경과 시간, 오류 등의 통계와 함께 모든 백업 실행을 기록합니다. 백업이 성공적으로 완료되고 있는지 확인하기 위해 정기적으로 기록을 검토하세요. 비교 기능을 주기적으로 사용하여 클라우드 백업이 NAS 콘텐츠와 일치하는지 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitoring TerraMaster NAS backup history in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. TerraMaster에서 SSH를 활성화하고 RcloneView에 SFTP 리모트로 추가합니다.
3. 클라우드 목적지(B2, S3, Google Drive, Wasabi)를 추가합니다.
4. NAS에서 클라우드로 향하는 일일 백업 작업을 생성하고 예약합니다.
5. 비교 기능으로 주기적으로 백업을 검증합니다.

TerraMaster NAS는 로컬 스토리지와 공유를 담당합니다. RcloneView는 사이트 수준의 재해, 랜섬웨어, RAID를 넘어서는 하드웨어 장애로부터 데이터를 보호하는 클라우드 백업 계층을 추가합니다.

---

**관련 가이드:**

- [원격 스토리지 탐색 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [동기화 작업 생성](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [작업 기록](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />

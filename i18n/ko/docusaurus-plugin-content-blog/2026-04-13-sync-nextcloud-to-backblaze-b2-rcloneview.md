---
slug: sync-nextcloud-to-backblaze-b2-rcloneview
title: "Nextcloud을 Backblaze B2로 동기화 — RcloneView로 오프사이트 백업하기"
authors:
  - tayson
description: "RcloneView를 사용해 자체 호스팅한 Nextcloud 데이터를 Backblaze B2로 백업하세요. WebDAV와 App Key로 연결한 다음 자동화된 오프사이트 백업을 예약할 수 있습니다."
keywords:
  - Nextcloud Backblaze B2 backup
  - Nextcloud offsite backup RcloneView
  - Nextcloud WebDAV sync B2
  - self-hosted Nextcloud backup
  - Backblaze B2 Nextcloud cloud backup
  - automated Nextcloud backup
  - Nextcloud disaster recovery
  - RcloneView WebDAV backup
tags:
  - RcloneView
  - nextcloud
  - backblaze-b2
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nextcloud을 Backblaze B2로 동기화 — RcloneView로 오프사이트 백업하기

> Nextcloud는 자체 호스팅 협업에 훌륭한 도구이지만, 오프사이트 백업이 없다면 서버 장애 한 번으로 데이터가 영구히 손실될 수 있습니다 — RcloneView는 이를 Backblaze B2로 자동 동기화합니다.

Nextcloud를 자체 호스팅하면 데이터에 대한 완전한 통제권을 갖게 되지만, 그 통제에는 책임이 따릅니다. 서버가 손상되거나, 랜섬웨어 공격을 받거나, 적절한 백업 없이 폐기된다면 안전망이 없는 셈입니다. Backblaze B2는 Nextcloud와 완벽하게 어울리는 저렴하고 내구성 있는 오프사이트 오브젝트 스토리지를 제공합니다. RcloneView는 Nextcloud를 WebDAV로, B2를 Application Key로 연결하여 반복 백업을 설정하고 예약할 수 있는 GUI를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## WebDAV로 Nextcloud 연결하기

RcloneView를 열고 **Remote Manager**로 이동합니다. **New Remote**를 클릭하고 **WebDAV**를 선택합니다. Nextcloud는 표준 경로에서 WebDAV를 통해 파일을 노출합니다. 다음 항목을 입력합니다:

- **URL**: `https://your-nextcloud-domain/remote.php/dav/files/your-username/`
- **Vendor**: Nextcloud
- **User**: Nextcloud 사용자 이름
- **Password**: Nextcloud 계정 비밀번호 (2FA가 활성화된 경우 앱 비밀번호)

리모트를 저장하고 File Explorer에서 열어 Nextcloud 파일이 표시되는지 확인합니다. 몇 개의 폴더를 탐색하여 접근이 가능한지 확인하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

## Backblaze B2 연결하기

다시 **Remote Manager**로 돌아가 **New Remote**를 클릭하고 **Backblaze B2**를 선택합니다. Backblaze 콘솔에서 **App Keys**로 이동하여 백업 버킷에 대한 읽기/쓰기 권한이 있는 키를 생성합니다. RcloneView에 **Application Key ID**와 **Application Key**를 입력합니다. 리모트를 저장하고 열어서 B2 버킷에 접근할 수 있는지 확인합니다.

아직 생성하지 않았다면 대상 버킷을 만드세요 — Nextcloud 백업의 경우 전용 버킷(예: `nextcloud-backup`)을 사용하면 정리하기 편리합니다.

## 백업 작업 설정하기

**Jobs**로 이동하여 **New Job**을 클릭합니다. 다음을 구성합니다:

- **Source**: 루트 또는 특정 디렉터리를 가리키는 Nextcloud WebDAV 리모트
- **Destination**: Backblaze B2 리모트와 백업 버킷

작업 마법사 2단계에서 Nextcloud 백업에 권장되는 옵션은 다음과 같습니다:

- **transfers**를 4로 설정 (WebDAV는 연결당 오버헤드가 있으므로 동시 처리 수를 낮추는 것이 안정적입니다)
- 무결성 보장을 위해 **checksum verification** 활성화
- 커밋 전 범위를 검토하기 위해 첫 실행 시 **Dry Run** 활성화

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud to Backblaze B2 backup job in RcloneView" class="img-large img-center" />

## 자동 백업 예약하기

PLUS 라이선스가 있다면 작업 마법사 3단계에서 cron 구문을 사용해 일정을 추가하세요. 매일 오전 1시 백업의 경우: `0 1 * * *`. 매주의 경우: `0 1 * * 0`. RcloneView는 예약된 시간에 백그라운드에서 조용히 작업을 실행하고 결과를 **Job History**에 기록합니다.

각 Job History 항목에는 확인된 파일 수, 전송된 파일 수(변경된 파일만 다시 전송됨), 데이터 용량, 소요 시간, 오류 여부가 표시됩니다. 이를 통해 애플리케이션을 직접 열지 않고도 야간 백업이 성공적으로 실행되었는지 빠르게 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## 백업 전략 참고 사항

- RcloneView의 동기화 작업은 기본적으로 증분 방식으로 동작합니다 — 최초 실행 이후에는 새로 추가되거나 변경된 파일만 전송됩니다
- B2에 삭제된 파일을 보존하고 싶다면 **--backup-dir** 방식의 버전 관리를 고려하세요
- Nextcloud 데이터베이스 백업은 별도로 처리해야 하지만(mysqldump 등), Nextcloud 데이터 디렉터리의 모든 파일 데이터는 WebDAV를 통해 깔끔하게 동기화됩니다

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote Manager**에서 서버 URL과 자격 증명을 사용해 WebDAV로 Nextcloud를 연결합니다.
3. Application Key ID와 Application Key를 사용해 Backblaze B2를 연결합니다.
4. 자동화된 야간 오프사이트 백업을 위해 Nextcloud에서 B2로의 동기화 작업을 생성하고 예약합니다.

Nextcloud → Backblaze B2 백업을 매일 밤 자동으로 실행하면 자체 호스팅 데이터도 최소한의 비용으로 엔터프라이즈급 이중화를 갖출 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Nextcloud를 Google Drive와 S3로 동기화하기](https://rcloneview.com/support/blog/sync-nextcloud-google-drive-s3-rcloneview)
- [RcloneView로 Nextcloud WebDAV 백업하기](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [RcloneView로 매일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />

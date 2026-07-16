---
slug: sync-nextcloud-to-wasabi-rcloneview
title: "Nextcloud를 Wasabi로 동기화 — RcloneView를 이용한 클라우드 백업"
authors:
  - jay
description: "RcloneView로 Nextcloud 인스턴스를 Wasabi S3에 동기화하세요 — WebDAV와 S3 리모트를 연결하고, 백업 작업을 자동화하며, 셀프 호스팅 데이터를 오프사이트에서 안전하게 보호합니다."
keywords:
  - sync nextcloud to wasabi
  - nextcloud wasabi backup
  - nextcloud s3 backup gui
  - backup nextcloud to s3
  - nextcloud cloud backup rcloneview
  - wasabi s3 backup tool
  - webdav to s3 sync rcloneview
  - nextcloud off-site backup
  - rcloneview nextcloud wasabi
tags:
  - nextcloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nextcloud를 Wasabi로 동기화 — RcloneView를 이용한 클라우드 백업

> 셀프 호스팅 Nextcloud 인스턴스에는 오프사이트 백업이 필요합니다 — RcloneView를 사용하면 Nextcloud 폴더를 Wasabi S3 스토리지로 동기화하는 작업을 간단하고 완전히 자동화할 수 있습니다.

셀프 호스팅 Nextcloud 서버를 운영하면 파일을 직접 통제할 수 있지만, 그만큼 책임도 따릅니다. 서버가 고장 나거나, 랜섬웨어에 감염되거나, 디스크가 손상되면 데이터도 함께 사라집니다. Wasabi로 동기화하면 예상치 못한 전송 비용 없이 안정적인 오프사이트 사본을 확보할 수 있습니다. RcloneView는 WebDAV를 통해 Nextcloud에, S3 프로토콜을 통해 Wasabi에 연결한 다음, CLI 없이도 이 둘 사이의 안정적인 동기화 작업을 구성할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Nextcloud 인스턴스를 리모트로 연결하기

RcloneView를 열고 **Remote 탭 > New Remote**로 이동합니다. 리모트 유형으로 **WebDAV**를 선택하고 벤더로 **Nextcloud**를 선택합니다. `https://cloud.yourdomain.com/remote.php/dav/files/username/` 형식으로 Nextcloud 서버 URL을 입력하고, Nextcloud 사용자 이름과 계정 비밀번호 또는 Nextcloud의 보안 설정에서 생성한 앱 전용 비밀번호를 입력합니다. 리모트를 저장하면 파일 탐색기에서 탐색 가능한 소스로 나타납니다.

마운트 전용 도구와 달리, RcloneView는 Nextcloud 같은 WebDAV 소스를 Wasabi 같은 S3 호환 대상으로 직접 동기화합니다 — FREE 라이선스에서도 전부 사용할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud as a WebDAV remote in RcloneView" class="img-large img-center" />

연결이 완료되면 Nextcloud 디렉토리를 탐색해 링크가 정상적으로 작동하는지 확인하세요. 파일 이름, 크기, 수정 날짜를 확인할 수 있어 백업 작업에 포함할 폴더와 제외할 Nextcloud 내부 디렉토리(예: `trashbin`)를 결정하는 데 유용합니다.

## Wasabi를 S3 호환 리모트로 추가하기

다시 **Remote 탭 > New Remote**에서 **Amazon S3**를 선택하고 제공업체로 **Wasabi**를 선택합니다. Wasabi Access Key ID와 Secret Access Key를 입력하고, 일치하는 리전 엔드포인트(예: `s3.us-east-1.wasabisys.com`)를 선택한 후 대상 버킷을 지정합니다. 저장한 후에는 RcloneView가 Nextcloud와 나란히 두 번째 탐색기 패널에서 Wasabi 버킷을 열 수 있으므로, 전체 동기화를 실행하기 전에 개별 파일을 드래그해 연결을 확인할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud and Wasabi remotes open side by side for cloud-to-cloud backup in RcloneView" class="img-large img-center" />

Wasabi의 S3 호환 API 덕분에 RcloneView는 이를 Amazon S3와 동일하게 취급하므로, 별도의 설정 없이도 모든 동기화, 복사, 이동, 필터 작업이 작동합니다.

## 동기화 작업 구성하기

Home 탭에서 **Sync**를 클릭해 4단계 작업 마법사를 엽니다. 1단계에서는 Nextcloud 폴더를 소스로, Wasabi 버킷(또는 `nextcloud-backup/` 같은 하위 폴더)을 대상으로 설정합니다. `nextcloud-to-wasabi-daily`처럼 작업 이름을 설명적으로 지정하세요.

2단계에서는 연결 상태가 허용하는 한 병렬 전송 수를 늘립니다 — Nextcloud에서 흔히 볼 수 있는 대량의 작은 파일을 동기화하는 속도를 높여줍니다. **체크섬 검증**을 활성화해 크기뿐만 아니라 파일 해시를 비교하면, 이전에 부분적으로 업로드되면서 발생한 손상도 감지할 수 있습니다. 3단계에서는 Nextcloud의 `trashbin` 폴더와 청크 업로드 임시 파일을 제외하는 필터 규칙을 추가해 백업을 깔끔하게 유지합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Wasabi sync job in RcloneView" class="img-large img-center" />

PLUS 라이선스를 사용하면 4단계에서 crontab 형식의 일정을 추가할 수 있습니다 — 예를 들어 매일 새벽 2시처럼 설정하면 별도의 수동 실행 없이 백업이 진행됩니다. 스케줄러는 특정 요일, 월간 간격, 단계별 범위 지정을 지원합니다.

## 전송 기록 검토하기

각 실행이 끝날 때마다 **Job History** 탭에 실행 시작 시간, 소요 시간, 상태(완료 / 오류 / 취소), 전송된 총 바이트, 전송 속도가 기록됩니다. 이 로그는 백업이 지연되거나 파일이 누락된 것처럼 보일 때 가장 먼저 확인해야 할 곳으로, Nextcloud 데이터가 예상대로 Wasabi에 도착하고 있는지 손쉽게 감사할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing completed Nextcloud to Wasabi backup runs" class="img-large img-center" />

여러 Nextcloud 인스턴스를 운영하거나 지역별 이중화를 위해 서로 다른 리전의 Wasabi 버킷으로 백업하는 경우, RcloneView의 1:N 동기화 기능을 사용하면 하나의 소스를 여러 대상에 지정하고 단일 작업으로 함께 실행할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Nextcloud 서버를 WebDAV 리모트로 추가합니다(Remote 탭 > New Remote > WebDAV > Nextcloud 벤더).
3. Access Key, Secret Key, 리전 엔드포인트, 버킷 이름을 사용해 Wasabi를 S3 호환 리모트로 추가합니다.
4. Nextcloud를 소스로, Wasabi 버킷을 대상으로 하는 동기화 작업을 생성합니다 — 무결성이 보장된 백업을 위해 2단계에서 체크섬 검증을 활성화하세요.

셀프 호스팅된 Nextcloud 데이터는 명령줄 스크립트 없이 자동으로 실행되는 안정적인 오프사이트 사본을 Wasabi에 보유하게 됩니다.

---

**Related Guides:**

- [RcloneView로 Nextcloud 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [RcloneView로 Wasabi 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneView로 Nextcloud를 Backblaze B2로 동기화하기](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

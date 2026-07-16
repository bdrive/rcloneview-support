---
slug: manage-vultr-object-storage-cloud-sync-backup-rcloneview
title: "Vultr Object Storage 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - alex
description: "Vultr Object Storage를 RcloneView에 연결하고 S3 호환 버킷을 GUI로 관리하세요 — CLI 없이 동기화, 백업, 마운트, 전송 자동화까지 가능합니다."
keywords:
  - Vultr Object Storage
  - RcloneView Vultr
  - Vultr S3 compatible backup
  - Vultr cloud sync GUI
  - S3-compatible object storage manager
  - Vultr bucket sync
  - object storage backup tool
  - cloud file transfer Vultr
  - Vultr cloud management
  - S3 compatible GUI rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Vultr Object Storage 관리 — RcloneView로 파일 동기화 및 백업하기

> RcloneView는 Vultr Object Storage의 S3 호환 API에 연결하여 버킷 탐색, 백업 예약, 클라우드 스토리지를 로컬 드라이브로 마운트하는 기능을 완전한 GUI로 제공합니다.

Vultr Object Storage는 Vultr 클라우드 인프라 위에 구축된 S3 호환 오브젝트 스토리지 서비스로, Vultr의 컴퓨팅 서비스와 함께 전 세계에 분산된 비용 효율적인 스토리지를 필요로 하는 개발자와 인프라 팀들이 선호합니다. 이 서비스는 프로그래밍 방식으로 구성하기는 간단하지만, CLI를 통해 매일 파일을 관리하거나 커스텀 스크립트를 작성하는 것은 대부분의 팀이 피하고 싶어하는 번거로움입니다. RcloneView는 Vultr 버킷을 다른 리모트와 똑같이 취급하여 이 문제를 해결합니다 — 분할 창 파일 탐색기에서 버킷을 탐색하고, 마법사를 통해 반복 동기화 작업을 설정하며, rclone 명령어를 한 줄도 작성하지 않고 실시간으로 전송을 모니터링할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 Vultr Object Storage 연결하기

RcloneView에 Vultr를 추가하는 것은 표준 S3 호환 설정 방식을 사용합니다. **Remote** 탭을 열고 **New Remote**를 클릭한 다음, 공급자 유형으로 **Amazon S3**를 선택하세요. Vultr Object Storage의 Access Key와 Secret Key를 입력합니다 — 이 정보는 Vultr 관리 콘솔의 Object Storage 인스턴스 자격 증명 섹션에서 확인할 수 있습니다. **Endpoint** 필드에는 Vultr 대시보드에 표시된 엔드포인트 URL을 붙여넣으세요(각 데이터센터 지역마다 고유한 엔드포인트 URL이 있습니다). region 필드는 `auto`로 두거나 비워두면 됩니다. Vultr는 엔드포인트를 기준으로 라우팅을 처리합니다.

저장이 완료되면 Vultr 버킷이 RcloneView Explorer 패널에 최상위 폴더로 나타납니다. 경로 표시줄의 브레드크럼을 통해 오브젝트 프리픽스를 탐색하고, 목록 보기와 썸네일 보기를 전환하며, 파일 이름, 크기, 수정 날짜를 한눈에 확인할 수 있습니다. 듀얼 패널 레이아웃을 사용하면 한쪽 패널에서 Vultr를, 다른 쪽 패널에서 로컬 폴더, NAS 경로, 또는 다른 클라우드를 열어 드래그 앤 드롭 업로드, 다운로드, 공급자 간 복사를 간편하게 수행할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Vultr Object Storage as an S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneView는 최대 4개의 Explorer 패널을 동시에 표시할 수 있어, 여러 Vultr 지역 간에 데이터를 이동하거나 Vultr와 Backblaze B2 같은 공급자 간에 상호 업로드할 때 유용합니다.

## Vultr Object Storage로 파일 동기화 및 백업하기

RcloneView의 자동 백업 작업은 4단계 마법사를 따릅니다. 소스(로컬 폴더, 외장 드라이브, 또는 다른 클라우드 리모트)를 선택하고 대상으로 Vultr 버킷을 선택하세요. 작업 이름을 지정하고, Vultr로 데이터를 미러링하는 단방향 동기화를 선택한 다음 필터링 및 고급 옵션을 구성합니다. 동시 전송 개수를 늘리면 야간 빌드 아티팩트(수백 개의 작은 파일)를 백업하는 소프트웨어 팀과 같은 워크로드의 처리량이 향상됩니다. 체크섬 비교를 활성화하면 컴파일된 바이너리나 데이터베이스 덤프를 아카이빙할 때 중요한, 모든 파일이 바이트 단위로 완전히 동일하게 도착함을 보장합니다.

첫 실제 실행 전에 **Dry Run**을 클릭하여 전송되거나 삭제될 파일의 전체 목록을 미리 확인하세요. 이 안전 점검은 공유 버킷에서 예기치 않은 삭제를 방지합니다. 확인이 끝나면 **Run**을 클릭하세요 — RcloneView 하단의 Transferring 탭에 파일 수, 전송 속도, 총 바이트가 실시간으로 표시됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Vultr Object Storage in RcloneView" class="img-large img-center" />

RcloneView PLUS 사용자는 crontab 형식의 규칙으로 작업을 예약할 수 있습니다 — 예를 들어 월요일부터 금요일까지 매일 새벽 03:00에 실행되는 야간 백업 — 그리고 완료 알림을 받을 수 있습니다.

## Vultr 스토리지를 로컬 드라이브로 마운트하기

RcloneView의 Mount 기능을 사용하면 Vultr 버킷을 Windows에서는 드라이브 문자로, macOS/Linux에서는 마운트 포인트로 로컬 드라이브에 직접 연결하여 별도의 동기화 단계 없이 모든 애플리케이션에서 접근할 수 있게 합니다. Remote 탭에서 **Mount Manager**를 열고 **New Mount**를 클릭한 다음, Vultr 리모트를 선택하고 노출할 버킷이나 하위 폴더를 선택하세요. 대부분의 워크로드에는 VFS 캐시 모드를 **writes**로 설정한 다음 **Save and Mount**를 클릭합니다.

버킷은 로컬 볼륨으로 표시됩니다. 예를 들어 마운트된 드라이브에 빌드 아티팩트를 직접 저장하는 CI 파이프라인은 Vultr API에 대해 전혀 알 필요가 없습니다 — 로컬 디스크에 쓰는 것처럼 파일을 작성하면 rclone이 업로드를 투명하게 처리합니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Vultr Object Storage bucket as a local drive using RcloneView's Mount Manager" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Vultr 관리 콘솔에서 Object Storage 인스턴스를 열고 Access Key, Secret Key, 엔드포인트 URL을 복사합니다.
3. RcloneView에서 **Remote 탭 → New Remote → Amazon S3**로 이동하여 자격 증명과 Vultr 엔드포인트를 입력한 다음 저장합니다.
4. Explorer 패널에서 버킷을 탐색하거나 **Job Manager**를 통해 자동 백업 작업을 구성하세요.

연결이 완료되면 Vultr Object Storage는 로컬 스토리지, NAS, 다른 클라우드 공급자와 함께 RcloneView의 단일 인터페이스에서 관리하는 모든 멀티 클라우드 워크플로에 원활하게 통합됩니다.

---

**관련 가이드:**

- [RcloneView로 Vultr Object Storage를 Google Drive와 동기화하기](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [RcloneView로 Cloudflare R2 클라우드 스토리지 관리하기](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [RcloneView로 Amazon S3 버킷을 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />

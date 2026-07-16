---
slug: manage-qiniu-cloud-storage-sync-rcloneview
title: "Qiniu 클라우드 오브젝트 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - kai
description: "Qiniu Cloud Kodo 오브젝트 스토리지를 RcloneView에 연결하여 Windows, macOS, Linux에서 하나의 GUI로 90개 이상의 클라우드 공급자 간 파일을 동기화, 백업, 전송하세요."
keywords:
  - Qiniu Cloud storage sync
  - Kodo object storage GUI
  - RcloneView Qiniu setup
  - Qiniu S3 compatible rclone
  - sync files to Qiniu Cloud
  - Qiniu backup client Windows
  - Qiniu cloud storage manager
  - transfer files Qiniu RcloneView
  - Qiniu Kodo S3 desktop client
  - manage Qiniu buckets GUI
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

# Qiniu 클라우드 오브젝트 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> Qiniu Cloud의 Kodo 오브젝트 스토리지를 RcloneView의 듀얼 패널 인터페이스에 연결하여 CLI를 사용하지 않고도 업로드, 백업, 클라우드 간 전송을 처리하세요.

Qiniu Cloud(七牛云)는 중국을 대표하는 클라우드 인프라 제공업체 중 하나이며, Kodo 오브젝트 스토리지 서비스는 미디어 전송, 애플리케이션 자산 관리, 대규모 데이터 아카이빙에 널리 사용됩니다. Kodo는 S3 호환 API를 구현하기 때문에, RcloneView는 별도의 플러그인 없이 Amazon S3, Wasabi, Cloudflare R2와 동일한 워크플로로 연결됩니다. 마운트 전용 도구와 달리, RcloneView는 FREE 라이선스에서도 Kodo 및 90개 이상의 다른 공급자를 대상으로 폴더를 동기화하고 비교할 수 있어, 다양한 클라우드 환경을 사용하는 팀에게 실용적인 단일 도구가 됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 Qiniu Kodo를 S3 리모트로 설정하기

Qiniu Kodo를 추가하려면 **Remote** 탭을 열고 **New Remote**를 클릭하세요. 공급자 목록에서 S3 프로토콜을 선택한 다음, S3 공급자로 **Qiniu**를 선택합니다. Qiniu Cloud 콘솔에서 발급받은 **Access Key**, **Secret Key**, 그리고 버킷의 지역에 해당하는 **리전 엔드포인트**, 이렇게 세 가지 자격 증명이 필요합니다. 입력을 마치면 RcloneView는 이 설정을 로컬 rclone 설정 파일에 저장하며, 리모트가 즉시 탐색기 패널에 나타납니다.

별도의 rclone 설치는 필요하지 않습니다. RcloneView에는 모든 API 통신을 처리하는 내장 rclone 바이너리가 포함되어 있습니다. 이미 외부에서 rclone을 관리하고 있다면, Settings > Connect Manager를 통해 RcloneView를 해당 인스턴스에 연결할 수도 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Qiniu Cloud S3 remote in RcloneView" class="img-large img-center" />

저장 후에는 Kodo 버킷이 패널의 탭 바에 표시됩니다. 버킷을 클릭하면 파일 목록에서 이름, 유형, 수정 날짜, 크기 열과 함께 내용을 탐색할 수 있습니다.

## Kodo 버킷 탐색 및 관리

RcloneView의 듀얼 패널 레이아웃을 사용하면 로컬 폴더, Google Drive, 회사 S3 버킷 등 다른 리모트와 Qiniu Kodo를 같은 창에서 함께 다룰 수 있습니다. 로컬 패널에서 Kodo 패널로 파일을 드래그하면 업로드되고, 반대로 드래그하면 다운로드됩니다. 두 Qiniu 리모트(또는 버킷) 사이에서 파일을 이동하면 로컬 디스크를 거치지 않고 직접 복사됩니다.

대량 작업을 할 때는 Shift+클릭 또는 Ctrl+클릭으로 여러 오브젝트를 선택한 다음 한 번에 복사, 이동, 삭제할 수 있습니다. 썸네일 보기 모드는 이미지가 많은 Kodo 버킷을 탐색할 때 유용합니다. 파괴적인 작업을 실행하기 전에는 **Dry Run** 버튼으로 어떤 파일이 영향을 받을지 정확히 미리 볼 수 있습니다. 이는 프로덕션 자산을 정리할 때 중요한 안전장치입니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files between local storage and Qiniu Kodo buckets in RcloneView" class="img-large img-center" />

## Qiniu Cloud로 파일 동기화 및 백업하기

RcloneView의 4단계 동기화 마법사는 Kodo를 대상으로 반복 실행 가능한 작업을 구성합니다. **1단계**에서는 Qiniu를 소스 또는 대상으로 선택하고 다른 리모트와 짝지을 수 있습니다. 예를 들어 로컬 미디어 라이브러리를 CDN 배포용 Kodo 버킷과 동기화할 수 있습니다. **2단계**에서는 병렬 전송 수를 조정하고 체크섬 검증을 활성화하여 업로드된 모든 오브젝트가 소스와 비트 단위로 동일한지 확인할 수 있습니다. **3단계**에서는 파일 유형 필터, 기간 범위, 크기 제한을 제공하므로 캐시 파일을 제외하거나 최근에 수정된 자산으로만 동기화 범위를 제한할 수 있습니다.

PLUS 라이선스를 사용하면 **4단계**에서 cron 방식 예약이 활성화됩니다. 프로덕션 서버 디렉터리에서 Kodo로의 야간 백업을 구성하면 RcloneView가 이를 백그라운드에서 자동으로 실행합니다. **1:N 동기화** 기능을 사용하면 하나의 소스를 여러 대상에 동시에 복제할 수 있습니다. 이는 동일한 자산 세트를 Qiniu Kodo와 보조 S3 아카이브에 한 번의 작업으로 배포할 때 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Qiniu Cloud Kodo in RcloneView" class="img-large img-center" />

## 전송 및 작업 기록 모니터링

RcloneView 하단의 **Transferring** 탭은 실행 중인 Kodo 작업의 실시간 진행 상황을 보여줍니다. 파일 이름, 전송된 바이트 수, 현재 속도, 전체 완료율 등을 확인할 수 있습니다. 새 버킷에 수백 기가바이트의 비디오 자산을 업로드하는 것과 같은 대규모 초기 시딩 작업의 경우, 이 실시간 전송 모니터링 화면이 있으면 별도의 모니터링 대시보드가 필요 없습니다.

**Job History** 탭은 완료된 모든 실행 기록을 시작 시간, 소요 시간, 총 크기, 전송 속도, 파일 개수, 상태와 함께 기록합니다. 날짜 범위나 작업 유형으로 필터링하여 몇 주 또는 몇 달에 걸친 동기화 활동을 감사할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Qiniu Cloud sync runs in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote** 탭을 열고 **New Remote**를 클릭한 다음, S3 프로토콜을 선택하고 공급자로 **Qiniu**를 선택하세요.
3. Qiniu Cloud 콘솔에서 발급받은 **Access Key**, **Secret Key**, 리전 엔드포인트를 입력하세요.
4. Kodo 버킷을 대상으로 하는 동기화 작업을 생성하고 실행하여 로컬 파일을 백업하거나 Qiniu와 다른 클라우드 간에 데이터를 전송하세요.

Qiniu Kodo를 연결하면, 다른 모든 공급자에서 사용하는 것과 동일한 인터페이스로 중국 클라우드 오브젝트 스토리지를 완전히 제어할 수 있습니다.

---

**관련 가이드:**

- [Amazon S3 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Cloudflare R2 스토리지 관리 — RcloneView로 클라우드 동기화하기](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Wasabi 클라우드 스토리지 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

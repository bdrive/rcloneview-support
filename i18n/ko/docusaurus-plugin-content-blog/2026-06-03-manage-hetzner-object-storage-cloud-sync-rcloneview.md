---
slug: manage-hetzner-object-storage-cloud-sync-rcloneview
title: "Hetzner Object Storage 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - kai
description: "Hetzner Object Storage를 RcloneView에 연결하여 자동 동기화 및 백업을 설정하는 방법을 알아보세요. CLI 없이 간단한 GUI로 S3 호환 버킷을 관리할 수 있습니다."
keywords:
  - Hetzner Object Storage
  - Hetzner 클라우드 백업
  - RcloneView Hetzner
  - S3 호환 클라우드 스토리지
  - Hetzner 파일 동기화
  - 클라우드 백업 GUI
  - Hetzner rclone
  - 오브젝트 스토리지 백업
  - 유럽 클라우드 스토리지
  - Hetzner 버킷 관리
tags:
  - RcloneView
  - hetzner
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hetzner Object Storage 관리 — RcloneView로 파일 동기화 및 백업하기

> Hetzner Object Storage를 RcloneView에 연결하고 CLI 명령어를 하나도 작성하지 않고 백업 작업을 자동화하세요.

Hetzner Object Storage는 신뢰할 수 있는 유럽 기반 데이터 저장소가 필요한 팀을 위해 경쟁력 있는 가격을 제공하는 S3 호환 클라우드 스토리지 서비스입니다. 프로젝트 파일을 아카이빙하든, 서버 스냅샷을 백업하든, 다른 클라우드에서 데이터를 복제하든 RcloneView는 이 모든 작업을 시각적 인터페이스로 관리할 수 있게 해줍니다. Hetzner는 다른 S3 호환 제공업체와 동일한 방식으로 설정합니다. 액세스 키, 비밀 키, 버킷 엔드포인트를 입력한 후에는 다른 모든 리모트와 동일한 듀얼 패널 파일 탐색기로 전체를 관리할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에 Hetzner Object Storage 연결하기

Hetzner Object Storage는 S3 프로토콜을 사용하므로 RcloneView에서의 설정은 Amazon S3나 Wasabi와 동일한 방식을 따릅니다. **Remote 탭**을 열고 **New Remote**를 클릭하세요. 제공업체 목록에서 **S3**를 선택하고 제공업체로 **Hetzner**를 선택합니다. Hetzner Cloud Console에서 세 가지 정보가 필요합니다. **Access Key ID**, **Secret Access Key**, 그리고 선택한 리전의 **엔드포인트 URL**입니다. 예를 들어 Falkenstein 리전의 경우 `fsn1.your-objectstorage.com`입니다.

자격 증명과 리전 엔드포인트를 입력한 후 **Save**를 클릭하세요. RcloneView가 연결을 설정하면 Hetzner 버킷이 즉시 파일 탐색기에서 탐색 가능한 폴더로 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Hetzner Object Storage remote in RcloneView" class="img-large img-center" />

연결 후에는 터미널을 사용하지 않고도 버킷 탐색, 드래그 앤 드롭을 통한 파일 업로드, 객체 다운로드, 항목 이름 변경, 파일 삭제, 새 폴더 생성이 가능합니다. 경로 표시줄(breadcrumb)에는 버킷 계층 구조 내 현재 위치가 표시되며, 하단에는 선택한 디렉터리의 전체 파일 수와 크기가 요약되어 표시됩니다.

## 파일 업로드 및 정리하기

RcloneView의 듀얼 패널 탐색기를 사용하면 Hetzner Object Storage와 로컬 머신 또는 다른 클라우드 간에 데이터를 실용적으로 이동할 수 있습니다. 왼쪽 패널에 로컬 디스크를, 오른쪽 패널에 Hetzner 리모트를 열고 파일을 드래그하여 이동하세요. Windows 탐색기에서 업로드할 경우 파일을 RcloneView 패널로 직접 드래그하면 한 번의 작업으로 Hetzner 버킷에 저장됩니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to Hetzner Object Storage in RcloneView" class="img-large img-center" />

대용량 데이터셋의 경우 — 예를 들어 미디어 제작 회사가 500GB의 렌더링 출력물을 백업하는 경우 — 동기화 마법사의 **멀티 스레드 전송** 설정을 사용하면 더 많은 데이터를 병렬로 전송할 수 있습니다. 기본값인 동시 4개 스트림은 대부분의 연결에서 잘 작동하지만, 고대역폭 회선에서 대용량 파일을 다룰 때 이 값을 늘리면 전송 시간을 크게 단축할 수 있습니다.

## 동기화 및 백업 작업 실행하기

지속적인 백업 워크플로우를 위해 RcloneView의 **Job Manager**는 필요할 때 또는 예약된 시간에 실행할 수 있는 구성된 동기화 작업의 영구 목록을 제공합니다. **Home 탭**에서 열고 **Add Job**을 클릭하여 4단계 동기화 마법사를 실행하세요.

1. **1단계:** 소스(로컬 폴더 또는 다른 리모트)와 대상(Hetzner 버킷 또는 그 하위 디렉터리)을 설정한 후 작업 이름을 지정합니다
2. **2단계:** 동시 실행 설정을 구성합니다 — 파일 전송 수, 멀티 스레드 수, 무결성 검사를 위한 체크섬 검증 활성화 여부
3. **3단계:** Hetzner에 포함하고 싶지 않은 파일 유형이나 경로(예: `.tmp` 파일이나 `/cache/` 디렉터리)를 제외하는 필터링 규칙을 추가합니다
4. **4단계 (PLUS 라이선스):** 백업이 정의된 간격으로 자동 실행되도록 crontab 스타일 스케줄을 설정합니다

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Hetzner Object Storage in RcloneView" class="img-large img-center" />

새 작업을 실행하기 전에 **Dry Run** 옵션을 사용하여 어떤 파일이 복사되거나 삭제될지 정확히 미리 확인하세요. 이는 동기화를 처음 설정할 때나 필터 규칙을 수정할 때 중요한 파일이 제외되지 않았는지 확인하는 데 특히 유용합니다.

## 전송 기록 검토하기

작업이 실행되면 **Job History** 화면에 모든 실행 내역이 기록됩니다. 시작 시간, 소요 시간, 전송된 총 크기, 평균 속도, 파일 수, 최종 상태 등입니다. Hetzner Object Storage로 야간 백업을 실행하는 팀의 경우, 이 로그는 어떤 실행이 문제없이 완료되었고 어떤 실행에서 오류가 발생했는지 보여주는 명확한 감사 추적을 제공하며, 문제 해결과 데이터 보존 정책 준수 입증 모두에 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Hetzner Object Storage sync in RcloneView" class="img-large img-center" />

기록 필터를 사용하면 날짜 범위(오늘, 어제, 지난주, 지난달)로 결과를 좁힐 수 있어 전체 로그를 스크롤하지 않고도 특정 백업 시점의 기록을 빠르게 확인할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote 탭 > New Remote**로 이동하여 **S3**를 선택하고 제공업체로 **Hetzner**를 선택하세요.
3. Hetzner Cloud Console에서 Hetzner Access Key ID, Secret Access Key, 리전 엔드포인트를 입력하세요.
4. **Job Manager**를 열고 Hetzner 버킷을 대상으로 하는 동기화 작업을 생성한 후 **Run Job**을 클릭하세요.

Hetzner Object Storage를 연결하면 rclone 명령어 없이 깔끔한 GUI로 완전히 관리되는 신뢰할 수 있는 유럽 기반 오브젝트 스토리지를 사용할 수 있습니다.

---

**관련 가이드:**

- [Hetzner Storage Box 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Wasabi 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Cloudflare R2 관리 — RcloneView로 클라우드 동기화하기](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />

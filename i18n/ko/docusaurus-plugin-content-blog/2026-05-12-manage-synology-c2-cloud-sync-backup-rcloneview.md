---
slug: manage-synology-c2-cloud-sync-backup-rcloneview
title: "Synology C2 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - tayson
description: "Synology C2를 RcloneView에 연결하고 클라우드 백업을 손쉽게 관리하세요. 세련된 데스크톱 GUI를 통해 파일을 동기화하고, 작업을 예약하고, 전송을 모니터링할 수 있습니다."
keywords:
  - Synology C2 RcloneView
  - Synology C2 백업
  - Synology C2 스토리지 관리
  - Synology C2 rclone GUI
  - S3 호환 클라우드 동기화
  - Synology 클라우드 스토리지 백업
  - Synology C2 동기화 자동화
  - RcloneView S3 설정
  - Synology C2 파일 전송
  - Synology C2 예약 백업
tags:
  - RcloneView
  - synology
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology C2 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> Synology C2는 Synology가 만든 전용 클라우드 스토리지입니다 — RcloneView를 사용하면 명령어를 한 줄도 입력하지 않고 시각적인 인터페이스에서 관리할 수 있습니다.

Synology C2는 Synology NAS 사용자의 생태계를 확장하기 위해 설계된 클라우드 스토리지 서비스로, rclone 기반 도구와 원활하게 통합되는 S3 호환 오브젝트 스토리지를 제공합니다. 집에서 DiskStation을 운영하든, 소규모 비즈니스 파일 서버를 관리하든, 추가적인 오프사이트 백업 계층이 필요하든, RcloneView를 사용하면 Synology C2와의 파일 탐색, 동기화, 전송 자동화를 간편하게 수행할 수 있습니다. Synology C2는 표준 S3 호환 API를 제공하기 때문에, 다른 주요 오브젝트 스토리지 제공업체에서 기대할 수 있는 것과 동일한 안정적인 rclone 성능을 깔끔한 데스크톱 GUI 안에서 그대로 누릴 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## S3 호환 리모트로 Synology C2 연결하기

Synology C2 오브젝트 스토리지는 표준 S3 호환 API를 사용하므로, RcloneView에서 리모트 유형으로 Amazon S3를 선택하고 Synology C2 엔드포인트를 지정하여 연결합니다. Remote 탭을 열고 New Remote를 클릭한 다음, 제공업체로 Amazon S3를 선택합니다. C2 Access Key ID, Secret Access Key, 그리고 C2 계정의 리전 엔드포인트를 입력합니다 — 이 정보는 스토리지를 생성하고 액세스 키 페어를 발급한 후 Synology C2 포털에서 확인할 수 있습니다. 리전 필드를 C2 리전과 일치하도록 설정하고 저장합니다.

리모트가 생성되면 다른 클라우드 스토리지와 마찬가지로 Explorer 패널에 표시됩니다. GUI를 벗어나지 않고도 버킷과 폴더를 탐색하고, 파일 크기와 수정 날짜를 확인하고, 중첩된 디렉터리 트리를 탐색할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Synology C2 S3-compatible remote in RcloneView" class="img-large img-center" />

## 파일 탐색 및 전송

한쪽 Explorer 패널에 Synology C2 리모트를 열고, 인접한 패널에 로컬 드라이브나 다른 클라우드를 열어두면, 파일을 서로 드래그하여 즉시 전송을 시작할 수 있습니다. RcloneView는 어떤 작업도 실행하기 전에 확인을 요청하며, 화면 하단의 Transferring 탭에서는 파일 개수, 전송된 바이트, 현재 처리량 등 실시간 진행 상황을 보여줍니다.

대용량 데이터의 경우 — 예를 들어 사진 스튜디오가 2TB에 달하는 RAW 파일을 백업하는 경우 — RcloneView의 멀티스레드 엔진이 여러 파일을 병렬로 전송합니다. 작업의 고급 설정(Advanced Settings)에서 동시 전송 스트림 수를 구성하여 네트워크 연결을 포화시키지 않으면서도 처리량을 최대화할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into Synology C2 storage in RcloneView" class="img-large img-center" />

## 지속적인 백업을 위한 동기화 작업 생성

일회성 전송을 넘어, RcloneView의 Job Manager를 사용하면 필요할 때 또는 정해진 일정에 따라 소스 폴더를 Synology C2 버킷에 미러링하는 동기화(Sync) 작업을 정의할 수 있습니다. 작업 유형으로 Sync를 선택하고, 소스(로컬 폴더, Synology NAS 리모트, 또는 다른 클라우드)를 지정한 다음, 대상을 C2 버킷으로 설정하고 필터링 옵션을 구성합니다. 파일 보관 기한, 크기 제한, 확장자 제외 등은 별도의 설정 파일을 편집하지 않고도 모두 구성할 수 있습니다.

첫 실제 동기화를 실행하기 전에 내장된 Dry Run을 실행해 보세요. 수천 개의 파일이 관련된 경우에도 어떤 파일이 복사되거나 삭제될지 정확히 보여주므로 예상치 못한 결과를 방지할 수 있습니다. Job History는 모든 실행에 대해 타임스탬프, 파일 개수, 전송 크기, 상태 코드를 기록하여 완전한 감사 추적을 제공합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Synology C2 in RcloneView" class="img-large img-center" />

## 자동 백업 예약 설정 (PLUS 라이선스)

손쉬운 데이터 보호를 위해 RcloneView의 PLUS 라이선스는 crontab 방식의 예약 기능을 제공합니다. 작업 마법사의 Schedule 단계에서 Minute, Hour, Day-of-Week 필드를 입력하여 Synology C2 동기화 작업을 매일 밤, 매주, 또는 원하는 사용자 지정 간격으로 실행하도록 설정할 수 있습니다. RcloneView는 설정된 시간에 전송을 실행하고 그 결과를 Job History에 기록하여, 자리를 비운 동안에도 백업이 실행되었는지 확인하고 정확히 어떤 파일이 전송되었는지 검증할 수 있는 완전한 감사 추적을 제공합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Synology C2 backup job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드합니다**.
2. Synology C2 포털에서 스토리지 버킷을 생성하고 액세스 키 페어를 발급받습니다.
3. RcloneView에서 Remote 탭 > New Remote를 열고 Amazon S3를 선택한 다음, C2 Access Key ID, Secret Access Key, 리전 엔드포인트를 입력합니다.
4. Explorer 패널에서 소스와 함께 C2 버킷을 열고, Job Manager에서 동기화 작업을 생성한 다음 먼저 Dry Run을 실행합니다.
5. 예약 기능(PLUS 라이선스)을 활성화하여 수동 개입 없이 매일 밤 또는 매주 백업을 자동화합니다.

Synology C2는 긴밀하게 통합된 오프사이트 백업 계층을 제공하며 — RcloneView는 이를 몇 분 만에 설정할 수 있는 예약되고 모니터링되는 워크플로로 만들어 줍니다.

---

**관련 가이드:**

- [RcloneView로 여러 클라우드에 NAS 백업하기](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [RcloneView로 Wasabi 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Hyper Backup 없이 Synology 백업하기 — RcloneView](https://rcloneview.com/support/blog/backup-synology-without-hyper-backup-rcloneview)

<CloudSupportGrid />

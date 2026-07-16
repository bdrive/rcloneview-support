---
slug: manage-storj-cloud-sync-backup-rcloneview
title: "Storj 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - tayson
description: "RcloneView로 Storj 분산형 클라우드 스토리지를 관리하는 방법을 알아보세요. CLI 없이 간단한 GUI로 Storj에서 파일을 동기화, 백업, 전송할 수 있습니다."
keywords:
  - Storj cloud storage management
  - RcloneView Storj sync
  - Storj backup files
  - decentralized cloud storage GUI
  - Storj file transfer
  - Storj rclone GUI
  - Storj sync backup tool
  - manage Storj with RcloneView
  - Storj desktop client
  - Storj S3 compatible GUI
tags:
  - RcloneView
  - storj
  - cloud-storage
  - cloud-sync
  - backup
  - decentralized-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Storj 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> RcloneView는 명령어를 하나도 작성하지 않고도 Storj 분산형 클라우드 스토리지를 동기화, 백업, 관리할 수 있는 완전한 기능의 GUI를 제공합니다.

Storj는 암호화된 파일 조각을 전 세계 노드 네트워크에 분산 저장하는 분산형 오브젝트 스토리지 플랫폼입니다. 의료 기록, 금융 아카이브, 창작 자산 등 민감한 데이터를 다루는 팀들은 내장된 암호화와 복원력 때문에 Storj를 선택합니다. RcloneView를 사용하면 Storj 버킷을 연결하여 다른 클라우드 계정과 함께 시각적으로 관리할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에 Storj 연결하기

RcloneView는 네이티브 Storj 백엔드와 S3 호환 엔드포인트, 두 가지 연결 방식으로 Storj를 지원합니다. 대부분의 사용자에게는 S3 호환 방식이 가장 간단합니다 — Storj 콘솔에서 S3 자격 증명(Access Key ID, Secret Access Key, 지역 엔드포인트 URL)을 생성한 다음, RcloneView에서 새 리모트를 추가할 때 제공자 유형으로 Amazon S3를 선택하고 해당 자격 증명을 입력하면 됩니다.

네이티브 Storj 백엔드는 Storj 웹 UI에서 생성할 수 있는 Access Grant 토큰이 필요합니다. 새 리모트를 추가하고 제공자로 Storj를 선택한 다음, Access Grant를 붙여넣으세요. 두 방식 모두 2분 이내에 완료되며, RcloneView는 암호화된 로컬 저장소를 사용해 자격 증명을 안전하게 보관합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Storj remote in RcloneView" class="img-large img-center" />

연결이 완료되면 Storj 버킷이 다른 리모트와 함께 파일 탐색기에 표시됩니다. 다른 클라우드 제공자를 사용할 때와 마찬가지로 폴더를 탐색하고, 썸네일을 미리 보고, 파일을 관리할 수 있습니다.

## Storj로 파일 동기화 및 백업하기

RcloneView의 4단계 동기화 마법사를 사용하면 Storj로의 정기 백업을 손쉽게 구성할 수 있습니다. 소스로 로컬 폴더나 클라우드 리모트를 선택하고, 대상으로 Storj 버킷이나 하위 폴더를 지정한 다음, 작업 이름을 지정하고 동기화 또는 복사 모드를 선택하세요. 2TB의 RAW 파일을 보관하는 사진 스튜디오의 경우, 매일 밤 실행되는 동기화 작업으로 수동 작업 없이 Storj 버킷을 최신 상태로 유지할 수 있습니다.

고급 설정에서 **체크섬** 옵션을 활성화하면 데이터 무결성을 검증할 수 있습니다 — Storj의 소거 코드(erasure-coded) 저장 방식은 이미 복원력이 뛰어나지만, 해시 비교로 업로드를 검증하면 한 층 더 안심할 수 있습니다. 일시적인 네트워크 장애를 원활하게 처리하려면 재시도 횟수를 기본값인 3으로 설정하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Storj in RcloneView" class="img-large img-center" />

## 자동화된 Storj 백업 예약하기 (PLUS)

PLUS 라이선스가 있으면 크론탭 방식의 스케줄러를 사용해 Storj 백업 작업을 예약할 수 있습니다. 매일 오전 2시 백업, 주간 아카이빙 실행, 또는 원하는 주기를 설정할 수 있습니다. RcloneView의 **일정 시뮬레이션** 기능으로 실행 전에 다음 실행 시간을 미리 확인할 수 있습니다.

작업 기록은 시작 시간, 소요 시간, 전송된 바이트 수, 완료 상태 등 모든 실행 내역을 추적하므로 Storj로 전송된 모든 파일에 대한 명확한 감사 추적이 가능합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Storj backup jobs in RcloneView" class="img-large img-center" />

## Storj와 다른 클라우드 간 전송하기

Storj는 이미 Google Drive나 Dropbox에 저장된 데이터의 보조 오프사이트 사본으로 활용하기에 적합합니다. RcloneView의 듀얼 패널 탐색기를 사용하면 리모트 간에 파일을 직접 드래그할 수 있습니다. 대규모 마이그레이션의 경우, **드라이 런** 모드로 동기화 작업을 실행해 실제 전송 전에 무엇이 전송될지 미리 확인하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from another remote to Storj" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭 > New Remote로 이동하여 Storj 또는 S3 호환 제공자를 선택하세요.
3. Storj Access Grant 또는 S3 호환 자격 증명을 입력하고 저장하세요.
4. 파일 탐색기를 열어 Storj 버킷을 탐색하고 동기화 작업을 생성하세요.

Storj의 분산형 아키텍처는 오프사이트 백업 대상으로서 훌륭한 선택이며, RcloneView는 이를 다른 주요 클라우드 제공자만큼이나 쉽게 관리할 수 있게 해줍니다.

---

**관련 가이드:**

- [Amazon S3 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Dropbox에서 Storj로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [RcloneView로 Storj와 Google Drive 간 전송하기](https://rcloneview.com/support/blog/transfer-storj-and-google-drive-with-rcloneview)

<CloudSupportGrid />

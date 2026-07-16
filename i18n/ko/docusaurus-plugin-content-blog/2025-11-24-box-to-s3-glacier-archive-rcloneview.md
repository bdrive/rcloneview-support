---
slug: box-to-s3-glacier-archive-rcloneview
title: "Box에서 S3 + Glacier로: RcloneView로 구축하는 계층형 아카이브"
authors:
  - tayson
description: "RcloneView의 비교, 체크섬 검증, 예약 동기화 기능으로 Box 라이브러리를 Amazon S3 핫 스토리지와 Glacier Deep Archive로 마이그레이션하여 장기 보관을 구현하세요."
keywords:
  - rcloneview
  - box migration
  - s3
  - glacier
  - cloud archive
  - checksum verification
  - scheduler
  - multi cloud
  - rclone
  - tiered storage
  - cloud backup
  - compare sync
  - mount
  - job history
  - visual dashboard
  - gui
  - aws
  - vault
  - compliance
  - long term retention
tags:
  - cloud-migration
  - s3
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box에서 S3 + Glacier로: RcloneView로 구축하는 계층형 아카이브

> Box 라이브러리를 상시 접근용 Amazon S3와 장기 보관용 Glacier로 이동하세요. 시각적 비교, 체크섬 검증 동기화, 예약 작업을 활용하면 CLI 플래그 없이도 가능합니다.

Box는 협업에는 훌륭하지만, 장기 보관이나 대용량 미디어 라이브러리를 유지하려면 비용이 커질 수 있습니다. RcloneView를 사용하면 Box 폴더를 S3 버킷에 미러링해 핫 액세스를 확보하고, 오래된 데이터는 예약 작업으로 Glacier 클래스로 옮길 수 있습니다. 스크립트를 일일이 지켜보지 않아도 나란히 비교하고, 작업 로그를 남기고, 재시도까지 처리됩니다.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 해결하려는 문제

- 콜드 데이터를 Glacier로 계층화해 Box 스토리지 비용을 절감합니다.
- 활성 팀을 위한 상시 이용 가능한 S3 사본을 유지하는 동시에, 이력은 Glacier에 보관합니다.
- 체크섬 검증 작업과 감사 추적으로 데이터 무결성을 유지합니다.

## Box와 S3 리모트를 빠르게 연결하기

- `+ New Remote`로 Box와 S3 리모트를 추가하세요. OAuth 및 키 설정은 다음을 참고하세요: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login), [s3](/howto/remote-storage-connection-settings/s3).  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />. 

- 첫 동기화 전에 **원격 탐색기(Remote Explorer)**로 폴더 깊이와 명명 규칙을 미리 점검하세요.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />. 

- 선택 사항: 빠른 점검을 위해 두 리모트 중 하나를 로컬에 마운트할 수 있습니다: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />. 

## 이동 전에 먼저 비교하기

- Box와 대상 S3 프리픽스 사이에서 **비교(Compare)**를 실행해 작업 전에 누락되거나 더 최신인 파일을 확인하세요: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- 확장자(예: PDF, CAD, 미디어)로 필터링해 검토 범위를 좁힐 수 있습니다.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />. 


## 2단계 파이프라인 구축하기 (S3 핫, Glacier 콜드)

- 1단계: 활성 계층을 위해 Box에서 S3로 **복사(copy)** 작업을 생성하세요: [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs). 안전을 위해 먼저 copy로 시작하고, 결과를 검증한 뒤 sync로 전환하세요.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />. 

- 2단계: 버킷에 S3 라이프사이클 정책을 적용해 N일 후 객체가 Glacier 클래스로 전환되도록 하세요. RcloneView 작업은 계속 핫 프리픽스(예: `s3:box-archive/hot/`)를 대상으로 유지합니다.
- 3단계: 딥 아카이브를 위해 자주 쓰지 않는 폴더를 Glacier 전용 프리픽스(예: `s3:box-archive/cold/`)로 직접 보내는 보조 작업을 예약하세요.  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />. 


RcloneView는 Box를 벗어나 스토리지 비용을 절감하고 AWS에서 규정 준수 아카이브를 유지할 수 있는 시각적이고 반복 가능한 방법을 제공합니다. 먼저 비교하고, 안전하게 복사하고, 나머지는 예약하세요 -- 그리고 마음 편히 쉬세요.


<CloudSupportGrid />

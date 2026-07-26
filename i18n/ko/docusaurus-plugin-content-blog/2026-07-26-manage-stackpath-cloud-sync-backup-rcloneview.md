---
slug: manage-stackpath-cloud-sync-backup-rcloneview
title: "StackPath 오브젝트 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - jay
description: "StackPath 오브젝트 스토리지를 RcloneView에 연결하여 드래그 앤 드롭 파일 관리, 예약 백업, 크로스 클라우드 동기화를 이용하세요."
keywords:
  - StackPath 오브젝트 스토리지
  - StackPath S3
  - RcloneView StackPath
  - StackPath 파일 관리
  - StackPath 백업
  - StackPath 클라우드 동기화
  - S3 호환 스토리지 GUI
  - 엣지 오브젝트 스토리지
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# StackPath 오브젝트 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기

> 다른 모든 클라우드에 사용하는 것과 같은 창에서 StackPath의 S3 호환 오브젝트 스토리지를 탐색하고, 동기화하고, 백업하세요.

StackPath 오브젝트 스토리지는 S3 호환 API를 제공하므로 rclone 기반 도구와는 잘 어울리지만, 전용 데스크톱 GUI가 딸려 오는 경우는 드뭅니다. 팀들은 결국 업로드를 스크립팅하거나 버킷 안에 무엇이 있는지 확인하기 위해 별도의 CLI 세션을 이리저리 오가게 됩니다. RcloneView는 StackPath를 다른 리모트와 동일하게 취급함으로써 이 간극을 메웁니다 — 명령어를 한 줄도 작성하지 않고도 완전한 파일 탐색, 드래그 앤 드롭 전송, 예약된 작업을 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## StackPath 버킷 연결하기

StackPath는 S3 프로토콜을 사용하므로, Amazon S3나 Wasabi를 추가할 때와 같은 방식으로 RcloneView에 추가할 수 있습니다: 새 리모트를 만들고, S3 호환 제공업체 옵션을 선택한 뒤, 액세스 키, 시크릿 키, 그리고 해당 지역의 StackPath 엔드포인트 URL을 입력하세요. 연결되면 버킷은 Explorer 패널에 일반 탭으로 나타납니다 — 별도의 자격 증명 파일도, 연결이 제대로 되었는지 확인하기 위한 터미널도 필요 없습니다.

FREE 라이선스에서도 S3, Azure, Backblaze B2를 완전한 읽기/쓰기 권한으로 연결할 수 있으므로, StackPath를 다른 S3 호환 계정과 함께 사용해도 파일 이동을 시작하기 위해 업그레이드할 필요가 없습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a StackPath object storage remote in RcloneView" class="img-large img-center" />

## 매일 파일 탐색하고 관리하기

리모트가 설정되고 나면 StackPath 버킷은 RcloneView의 Explorer에서 로컬 폴더와 완전히 똑같이 동작합니다. 이름, 유형, 수정 날짜, 크기별로 정렬할 수 있고, 이미지가 많은 버킷은 썸네일 보기로 전환할 수 있으며, 다른 곳으로 아카이브할지 결정하기 전에 Get Size로 자산 폴더가 차지하는 용량을 확인할 수 있습니다. Ctrl+클릭이나 Shift+클릭을 이용한 다중 선택은 로컬 드라이브에서와 동일하게 작동하므로, 대량 삭제나 대량 다운로드도 스크립트를 짜는 대신 몇 초 만에 끝낼 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing StackPath bucket contents in RcloneView" class="img-large img-center" />

## StackPath로/에서 백업하기

정기적인 백업을 위해서는 StackPath를 소스 또는 대상으로 하는 Sync 작업을 설정하세요. 4단계 마법사를 통해 동시 전송 수를 구성하고, 타임스탬프가 아니라 해시로 파일을 비교하도록 체크섬 검증을 활성화하며, 보관할 필요가 없는 파일 유형을 제외하는 필터를 적용할 수 있습니다. 전송을 확정하기 전에 먼저 Dry Run을 실행하여 정확히 무엇이 복사되거나 삭제될지 미리 확인하세요 — 버킷에 프로덕션 자산이 들어 있을 때 유용한 안전장치입니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a StackPath backup job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 새 리모트를 만들고 S3 호환 제공업체 유형을 선택합니다.
3. StackPath 액세스 키, 시크릿 키, 엔드포인트를 입력합니다.
4. Sync 또는 Copy 작업을 설정하여 StackPath와 다른 리모트 간에 파일을 이동합니다.

StackPath가 RcloneView에 연결되고 나면, 오브젝트 스토리지 관리는 더 이상 스크립팅 작업이 아니라 평소 파일 작업 흐름의 일부가 됩니다.

---

**관련 가이드:**

- [Ceph 오브젝트 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Scaleway 오브젝트 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [S3 액세스 거부 문제 해결 — RcloneView로 권한 오류 고치기](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />

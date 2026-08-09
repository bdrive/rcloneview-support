---
slug: manage-rackcorp-cloud-sync-backup-rcloneview
title: "RackCorp 오브젝트 스토리지 관리하기 — RcloneView로 동기화 및 백업하기"
authors:
  - morgan
description: "RackCorp 오브젝트 스토리지를 RcloneView에 연결하여 90개 이상의 다른 클라우드 제공업체와 함께 크로스 플랫폼 동기화, 백업, 마운트를 이용하세요."
keywords:
  - RackCorp 스토리지
  - RackCorp 클라우드 백업
  - RackCorp RcloneView
  - S3 호환 오브젝트 스토리지 GUI
  - RackCorp 스토리지 동기화
  - RackCorp 백업
  - 오브젝트 스토리지 로컬 드라이브 마운트
  - 멀티 클라우드 파일 관리자
  - 클라우드 스토리지 동기화 도구
  - 오브젝트 스토리지 백업 소프트웨어
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RackCorp 오브젝트 스토리지 관리하기 — RcloneView로 동기화 및 백업하기

> RackCorp의 S3 호환 오브젝트 스토리지를 다른 클라우드, 로컬 드라이브, NAS 공유 폴더와 동일한 창으로 가져오세요.

이미 RackCorp에서 인프라를 운영 중인 팀은 버킷에서 파일을 옮기기 위해 별도의 S3 클라이언트를 함께 다뤄야 하는 경우가 많습니다. RcloneView는 RackCorp를 다른 리모트와 똑같이 취급함으로써 이 번거로운 과정을 없애줍니다 — 같은 탐색기 안에서 Google Drive, S3, 로컬 디스크와 나란히 탐색하고, 동기화하고, 마운트하고, 백업하세요. 마운트만 지원하는 도구와 달리, RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교(Folder Compare)까지 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RackCorp를 리모트로 추가하기

RackCorp는 rclone의 S3 프로토콜을 통해 접근하므로, 다른 S3 호환 서비스와 동일한 자격 증명 입력 방식으로 설정합니다: Access Key ID, Secret Access Key, 그리고 올바른 지역 엔드포인트가 필요합니다. Remote 탭 > New Remote를 열고 S3 호환 옵션을 선택한 다음, RackCorp 계정의 자격 증명을 붙여넣으세요.

저장이 완료되면 RackCorp는 이미 구성한 다른 리모트들과 나란히 탐색기(Explorer) 패널에 자체 탭으로 표시됩니다. 버킷 경로를 외울 필요가 없습니다 — 폴더 트리와 브레드크럼 바로 시각적으로 탐색할 수 있으며, 내장 rclone 터미널에서 필요할 경우 우클릭 > 전체 경로 복사(Copy Full Path)로 `remote:bucket/path` 형식의 문자열을 얻을 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 새 S3 호환 리모트 추가하기" class="img-large img-center" />

## RackCorp로 동기화 및 백업하기

리모트가 연결되면 Sync 마법사로 반복 실행 가능한 백업 작업을 만드세요. Step 1에서는 로컬 또는 클라우드 소스와 RackCorp 대상 폴더를 설정하고, Step 2에서는 대용량 데이터셋을 위한 동시 파일 전송 수와 멀티스레드 전송 수를 조정하며, Step 3에서는 파일 유형, 크기, 또는 기간별 필터를 적용하여 임시 파일과 캐시가 버킷으로 전송되지 않도록 합니다.

전송을 확정하기 전에 먼저 드라이 런(Dry Run)을 실행하여 어떤 파일이 복사되거나 삭제될지 정확히 미리 확인하세요 — 이렇게 하면 실제 운영 데이터에 영향을 주기 전에 폴더 매핑 실수를 잡아낼 수 있습니다. 반복 실행할 작업이라면 Job Manager에 저장해 두면, 이후 Job History에서 전체 전송 로그와 함께 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RackCorp 스토리지에 대한 예약 백업 작업 구성하기" class="img-large img-center" />

## RackCorp를 로컬 드라이브로 마운트하기

RackCorp 오브젝트를 일반 파일처럼 다루고 싶다면, 버킷을 가상 드라이브로 마운트하세요. 탐색기에서 리모트 폴더를 선택하고 패널 툴바의 마운트 아이콘을 클릭한 다음, VFS 캐시 모드를 선택합니다 — Writes 모드는 변경 사항을 로컬에 버퍼링한 뒤 업로드하는 방식으로, 기본값으로 무난한 선택입니다.

마운트된 버킷은 Mount Manager에 표시되며, 여기서 마운트 해제, 기본 파일 탐색기에서 다시 열기, 또는 메인 창을 앞으로 가져오지 않고 시스템 트레이에서 바로 마운트를 전환할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Remote Explorer에서 RackCorp 버킷을 로컬 드라이브로 마운트하기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. RackCorp 계정에서 Access Key ID와 Secret Access Key를 생성하세요.
3. Remote 탭 > New Remote를 사용해 RackCorp를 새 S3 호환 리모트로 추가하세요.
4. 워크플로우에 맞게 동기화 작업을 만들거나 버킷을 직접 마운트하세요.

RackCorp가 RcloneView에 연결되면, 더 이상 컨텍스트를 전환해야 하는 별도의 도구가 아니라 일상적인 백업 루틴의 또 다른 대상이 됩니다.

---

**관련 가이드:**

- [Linode 오브젝트 스토리지 관리하기 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)
- [Hetzner 오브젝트 스토리지 관리하기 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)
- [RcloneView로 Amazon S3를 Cloudflare R2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-amazon-s3-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />

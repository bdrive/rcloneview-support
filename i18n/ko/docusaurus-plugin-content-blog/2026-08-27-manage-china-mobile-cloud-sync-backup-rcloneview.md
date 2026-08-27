---
slug: manage-china-mobile-cloud-sync-backup-rcloneview
title: "China Mobile 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - jay
description: "China Mobile의 S3 호환 오브젝트 스토리지를 RcloneView에 연결하여 크로스 플랫폼 탐색, 드래그 앤 드롭 전송, 예약 백업 작업을 이용하세요."
keywords:
  - China Mobile 오브젝트 스토리지
  - China Mobile 클라우드 스토리지 관리
  - S3 호환 스토리지 GUI
  - RcloneView China Mobile
  - China Mobile 오브젝트 스토리지 동기화
  - S3 호환 스토리지 백업
  - China Mobile Ecloud EOS
  - 오브젝트 스토리지 파일 관리자
  - 멀티 클라우드 GUI 클라이언트
  - S3 엔드포인트 액세스 키 설정
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# China Mobile 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> 터미널을 건드리지 않고, 다른 모든 클라우드와 동일한 창에서 China Mobile의 S3 호환 오브젝트 스토리지를 탐색, 전송, 백업하세요.

China Mobile의 S3 호환 오브젝트 스토리지로 인프라를 운영하는 팀은 흔히 원시 CLI 호출이나 일회성 스크립트로 이를 관리하며, 나머지 클라우드 환경과는 분리된 채로 남겨두곤 합니다. RcloneView는 이를 다른 S3 호환 리모트와 동일하게 취급합니다 — 동일한 탐색기, 동일한 동기화 작업, 동일한 폴더 비교 — 그래서 China Mobile의 버킷이 Google Drive, Backblaze B2, 또는 로컬 디스크와 나란히 하나의 인터페이스 안에 놓입니다. S3, Azure, Backblaze B2는 FREE 라이선스에서 완전한 읽기/쓰기로 연결할 수 있으며, S3 호환 엔드포인트라면 어디든 마찬가지입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## China Mobile 오브젝트 스토리지 연결하기

China Mobile의 오브젝트 스토리지는 rclone의 S3 프로토콜을 통해 접근하며, RcloneView가 Wasabi, MinIO, Cloudflare R2에 사용하는 것과 동일한 경로입니다. New Remote 화면에서 S3 호환 제공업체 유형을 선택하고 Access Key ID, Secret Access Key, 서비스 Endpoint 세 가지 값을 입력합니다. OAuth 흐름은 없습니다 — 자격 증명을 직접 입력하는 방식이므로, 엔드포인트 문자열을 다시 한번 확인하세요. 새 리모트가 첫 연결 테스트에 실패하는 가장 흔한 원인이 바로 이 오타입니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 China Mobile S3 호환 리모트를 추가하는 모습" class="img-large img-center" />

리모트가 연결되면 다른 모든 스토리지 유형과 마찬가지로 Explorer 패널에 탭으로 표시됩니다. 로컬 디스크, 다른 클라우드, 또는 완전히 다른 버킷 등 1개에서 4개까지의 패널 레이아웃을 사용해 두 번째 패널과 나란히 열 수 있습니다.

## 파일 탐색 및 전송하기

리모트를 연 상태에서 File List는 로컬 파일 관리자에서 기대할 수 있는 것과 동일한 열로 버킷과 객체를 보여줍니다: 이름, 유형, 수정 날짜, 크기. 우클릭으로 Copy, Cut, Paste, Rename, New Folder, Download, Upload를 사용하거나, Ctrl+Click과 Shift+Click으로 여러 항목을 선택한 뒤 일괄 작업을 수행할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="China Mobile 오브젝트 스토리지와 다른 리모트 간 파일 전송" class="img-large img-center" />

드래그 앤 드롭은 간단한 규칙을 따릅니다: 같은 리모트 내에서 파일을 이동하면 위치가 바뀌고, 서로 다른 두 리모트 사이로 드래그하면 복사됩니다. 덕분에 오브젝트 스토리지와 다른 클라우드 사이의 임시 전송은 로컬에 먼저 다운로드하는 대신 패널 사이로 선택 항목을 드래그하는 작업이 됩니다.

## 반복 백업 예약하기

반복적인 작업이라면 Job Manager의 4단계 마법사가 일회성 전송을 저장된 작업으로 바꿔줍니다: 소스와 대상을 선택하고, 전송 동시성과 재시도 동작을 조정하고, 최대 파일 크기나 나이 같은 필터를 적용한 뒤 — PLUS 라이선스에서는 — crontab 방식의 일정을 설정합니다. 실제로 실행하기 전에 무엇이 복사되거나 삭제될지 미리 확인하려면 먼저 Dry Run을 실행하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 China Mobile 오브젝트 스토리지용 백업 작업을 예약하는 모습" class="img-large img-center" />

이후 Job History가 모든 실행을 추적합니다 — 상태, 소요 시간, 전송 속도, 파일 수 — 원시 로그를 뒤지지 않고도 무엇이 언제 이동했는지 기록으로 남습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. New Remote를 열고 S3 호환 제공업체 유형을 선택한 뒤, China Mobile의 Access Key ID, Secret Access Key, 엔드포인트를 입력합니다.
3. Explorer에서 버킷을 탐색하고 다른 리모트와의 수동 복사를 테스트합니다.
4. 반복할 전송이 있다면 Job Manager에서 동기화 작업을 만들고, 첫 실제 실행 전에 Dry Run을 실행합니다.

China Mobile 오브젝트 스토리지가 하나의 탐색기 안에서 다른 리모트와 나란히 놓이면, 데이터를 옮기는 일은 더 이상 스크립팅 작업이 아니라 드래그 앤 드롭 작업이 됩니다.

---

**관련 가이드:**

- [RackCorp 오브젝트 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-rackcorp-object-storage-cloud-sync-rcloneview)
- [Scaleway 오브젝트 스토리지 관리 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Ceph 오브젝트 스토리지 관리 — Ceph 클러스터를 위한 S3 호환 GUI, RcloneView](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)

<CloudSupportGrid />

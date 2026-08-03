---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "RcloneView로 Magalu Cloud 스토리지 관리 — 파일 동기화 및 백업"
authors:
  - jay
description: "Magalu Cloud 객체 스토리지를 RcloneView에 연결하여 드래그 앤 드롭 파일 관리, 예약 동기화, 크로스 클라우드 백업 워크플로를 구현하세요."
keywords:
  - magalu 클라우드 스토리지
  - magalu 객체 스토리지
  - s3 호환 스토리지 gui
  - rcloneview magalu
  - 객체 스토리지 백업
  - 클라우드 동기화 gui
  - 멀티 클라우드 파일 탐색기
  - s3 호환 관리자
  - magalu 백업
  - 브라질 클라우드 스토리지
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

# RcloneView로 Magalu Cloud 스토리지 관리 — 파일 동기화 및 백업

> 다른 모든 클라우드를 관리하는 것과 동일한 창에서 Magalu Cloud 객체 스토리지를 탐색, 동기화, 백업하세요.

Magalu Cloud는 S3 호환 객체 스토리지 서비스로, rclone을 비롯해 S3 프로토콜 기반의 모든 도구와 함께 작동한다는 의미입니다. RcloneView는 이 프로토콜 지원을 시각적 파일 탐색기로 감싸주므로, 애플리케이션 데이터나 백업을 위해 이미 Magalu 버킷을 사용하는 팀은 `s3cmd` 플래그를 외우거나 별도의 콘솔 탭을 오가며 파일을 옮길 필요가 없습니다. 버킷을 한 번 연결하면 앱의 다른 모든 리모트와 동일하게 동작합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Magalu Cloud를 리모트로 연결하기

Magalu Cloud는 S3 프로토콜을 사용하므로, RcloneView는 Amazon S3, Wasabi, Backblaze B2에 연결할 때와 동일한 방식, 즉 S3 호환 리모트 유형을 통해 연결합니다. **New Remote**를 열고 S3 호환 옵션을 선택한 다음, Access Key와 Secret Key, 그리고 해당 리전의 Magalu Cloud 엔드포인트 URL을 입력하세요. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트 및 동기화하므로, Magalu 버킷이 기존 Google Drive, OneDrive, 온프레미스 NAS 연결과 나란히 자리하게 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 새 Magalu Cloud S3 호환 리모트 추가하기" class="img-large img-center" />

리모트를 저장하면 Explorer 패널에 탭으로 표시되며, 전체 폴더 트리 탐색, 이미지가 많은 버킷을 위한 썸네일 미리보기, 로컬 파일과 동일한 우클릭 작업(복사, 잘라내기, 이름 변경, 삭제)을 사용할 수 있습니다.

## Magalu 버킷과 다른 스토리지 동기화하기

객체 스토리지는 단독으로 존재하는 경우가 드뭅니다. 대부분의 팀은 이중화를 위해 다른 클라우드와, 또는 스테이징을 위해 로컬 인프라와 함께 사용합니다. RcloneView의 Sync 마법사를 사용하면 Magalu 버킷을 소스 또는 대상으로 설정하고, 단방향 동기화 또는 양방향 동기화(Beta)를 선택하며, 전송 전에 최대 파일 크기나 파일 수명 같은 필터를 적용할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Magalu Cloud 버킷과 다른 리모트 간 동기화 작업 구성하기" class="img-large img-center" />

프로덕션 버킷을 백업 대상으로 처음 미러링하기 전에, 어떤 객체가 복사되거나 삭제될지 미리 확인할 수 있는 유용한 점검인 **Dry Run**을 먼저 실행하세요.

## 반복 백업 자동화하기

매일 변경되는 버킷의 경우 수동 전송은 확장성이 없습니다. Magalu 동기화 구성을 Job으로 저장한 다음, 예약 단계(PLUS 라이선스)를 사용하여 크론탭 형식의 반복 주기(매일 밤, 매주, 또는 사용자 지정 간격)를 정의하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Magalu Cloud 버킷의 반복 백업 작업 예약하기" class="img-large img-center" />

모든 실행은 상태, 전송 속도, 파일 개수와 함께 Job History에 기록되므로, 예약된 백업이 실제로 완료되었는지 추측이 아니라 확인을 통해 알 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Magalu Cloud 계정의 Access Key와 Secret Key를 생성하고 해당 리전의 엔드포인트를 확인하세요.
3. RcloneView에서 Magalu Cloud를 새 S3 호환 리모트로 추가하세요.
4. Dry Run을 먼저 실행하여 백업 또는 보조 스토리지 대상과 연결하는 동기화 작업을 설정하세요.

S3 호환 버킷을 파일 관리자의 또 다른 폴더처럼 취급하면, 객체 스토리지가 워크플로의 나머지 부분과 분리되어 있던 마찰이 사라집니다.

---

**관련 가이드:**

- [RcloneView로 Wasabi 클라우드 스토리지 관리하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneView로 Cloudflare R2 스토리지 관리하기](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [RcloneView로 IDrive e2 클라우드 스토리지 관리하기](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

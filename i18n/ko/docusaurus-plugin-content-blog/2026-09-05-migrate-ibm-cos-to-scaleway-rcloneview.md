---
slug: migrate-ibm-cos-to-scaleway-rcloneview
title: "IBM Cloud Object Storage에서 Scaleway로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - kai
description: "RcloneView로 IBM Cloud Object Storage에서 Scaleway Object Storage로 버킷을 이동하고, 체크섬으로 검증하고 dry run으로 미리 확인하세요."
keywords:
  - IBM COS에서 Scaleway로 마이그레이션
  - IBM Cloud Object Storage 마이그레이션
  - Scaleway Object Storage
  - S3 호환 스토리지 전송
  - RcloneView
  - 오브젝트 스토리지 마이그레이션
  - 클라우드 간 전송
  - 체크섬 검증 동기화
  - 버킷 마이그레이션 도구
  - 멀티 클라우드 오브젝트 스토리지
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IBM Cloud Object Storage에서 Scaleway로 마이그레이션 — RcloneView로 파일 전송하기

> 두 S3 호환 오브젝트 스토리지 제공업체 사이에서 버킷을 직접 이동하세요 — dry-run 미리보기와 체크섬 검증까지 함께.

팀들은 데이터 거주 요구사항, 지역별 지연시간, 또는 단순히 인프라 통합을 위해 오브젝트 스토리지 제공업체를 옮기지만, 두 S3 호환 엔드포인트 사이에서 수 테라바이트의 버킷 콘텐츠를 수동으로 다시 업로드하는 일은 느리고 오류가 발생하기 쉽습니다. RcloneView는 IBM Cloud Object Storage와 Scaleway Object Storage 모두를 표준 S3 호환 리모트로 연결한 다음, 로컬 디스크를 거치지 않고 버킷 간에 데이터를 직접 전송합니다. S3, Azure File Storage, Backblaze B2는 FREE 라이선스에서도 완전한 읽기/쓰기로 연결할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 오브젝트 스토리지 엔드포인트 연결하기

IBM COS와 Scaleway는 모두 RcloneView에서 S3 호환 리모트로 추가되며, 각각 OAuth 로그인 대신 Access Key, Secret Key, 제공업체별 엔드포인트 URL을 필요로 합니다. 먼저 IBM Cloud 인스턴스의 API 키와 엔드포인트를 사용해 IBM Cloud Object Storage를 추가한 다음, Scaleway Object Storage 자격 증명에 대해서도 같은 과정을 반복하세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 IBM Cloud Object Storage와 Scaleway 리모트를 추가하는 모습" class="img-large img-center" />

두 리모트가 모두 구성되면 탐색기 패널에 각각 별도의 탭으로 표시되므로, 실제로 무엇을 옮겨야 할지 결정하기 전에 양쪽의 버킷 내용을 살펴볼 수 있습니다.

## 마이그레이션 미리보기 및 실행하기

IBM COS를 소스로, Scaleway를 대상으로 설정한 동기화 또는 복사 작업이 대량 전송을 처리합니다. 전체 실행을 진행하기 전에 Dry Run을 사용해 어떤 객체가 복사될지 정확히 확인하세요 — 이는 두 제공업체 간에 버킷 구조가 정확히 일치하지 않을 때 특히 유용한, 이름이나 경로 문제를 조기에 발견하는 방법입니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="IBM Cloud Object Storage에서 Scaleway로 객체를 직접 전송하는 모습" class="img-large img-center" />

작업의 고급 설정에서 체크섬 비교를 활성화하면 수정 시간만이 아니라 해시와 크기로 파일을 검증하며, 이는 타임스탬프를 다르게 처리할 수 있는 두 개의 서로 다른 스토리지 백엔드 사이에서 데이터를 옮길 때 중요합니다. 필터링 설정을 사용하면 버킷의 일부만 옮겨야 할 때 특정 파일 형식이나 크기를 초과하는 객체를 제외할 수도 있습니다.

## 전송 모니터링 및 예약하기

대규모 오브젝트 스토리지 마이그레이션은 한 번에 끝나는 경우가 드뭅니다. Transferring 탭은 실행 중인 작업의 실시간 진행률, 속도, 파일 수를 보여주며, Job History는 완료되거나 취소된 모든 실행 기록 — 상태, 소요 시간, 전송된 총 크기 포함 — 을 보관하므로 마이그레이션이 깔끔하게 끝났는지 확인하거나 취소된 작업을 이어서 진행할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="IBM COS에서 Scaleway로 버킷을 마이그레이션한 후 작업 기록을 검토하는 모습" class="img-large img-center" />

작업의 고급 설정에서 파일 전송 수와 멀티스레드 전송 수를 조정하면 대량의 객체를 더 효율적으로 이동하는 데 도움이 될 수 있으며, 실패 시 재시도 설정은 불안정한 연결이 여러 시간에 걸친 전송을 망칠 가능성을 줄여줍니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. IBM Cloud Object Storage 자격 증명을 새 S3 호환 리모트로 추가합니다.
3. Scaleway Object Storage 자격 증명을 두 번째 S3 호환 리모트로 추가합니다.
4. dry run을 실행한 다음, 두 리모트 사이에서 체크섬 검증 동기화 작업을 실행합니다.

두 엔드포인트가 동일한 탐색기 안에 나란히 놓이면, 오브젝트 스토리지 제공업체 사이에서 버킷을 옮기는 일은 수동으로 추측하는 작업이 아니라 모니터링되는 작업이 됩니다.

---

**관련 가이드:**

- [IBM Cloud Object Storage 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-ibm-cos-cloud-sync-backup-rcloneview)
- [Scaleway Object Storage 관리 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2: 합리적인 가격의 S3 호환 스토리지 비교](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />

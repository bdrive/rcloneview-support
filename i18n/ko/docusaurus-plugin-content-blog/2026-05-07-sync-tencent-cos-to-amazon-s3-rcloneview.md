---
slug: sync-tencent-cos-to-amazon-s3-rcloneview
title: "Tencent COS를 Amazon S3로 동기화 — RcloneView로 하는 클라우드 백업"
authors:
  - tayson
description: "RcloneView를 사용해 Tencent Cloud COS 데이터를 Amazon S3로 동기화하여 글로벌 가용성, 리전 간 이중화, 자동화된 클라우드 백업 작업을 구축하는 방법을 알아보세요."
keywords:
  - Tencent COS to S3
  - Tencent COS sync
  - Amazon S3 backup
  - RcloneView Tencent
  - cloud-to-cloud sync
  - S3-compatible storage
  - China cloud to global
  - cross-region cloud sync
tags:
  - tencent-cos
  - amazon-s3
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Tencent COS를 Amazon S3로 동기화 — RcloneView로 하는 클라우드 백업

> 중국 리전 데이터를 위해 Tencent Cloud COS를 운영하는 기업은 RcloneView를 사용하여 해당 데이터를 Amazon S3로 동기화함으로써 글로벌 가용성과 리전 간 이중화를 확보할 수 있습니다.

Tencent Cloud Object Storage(COS)는 중국 본토에 사용자나 운영 거점을 둔 기업들에게 널리 사용되며, 낮은 지연 시간과 현지 데이터 규정 준수를 제공합니다. 하지만 글로벌 가용성이나 재해 복구를 위해서는 조직이 해당 데이터를 더 넓은 국제적 범위를 가진 Amazon S3로 복제해야 하는 경우가 많습니다. RcloneView는 두 제공업체 모두에 대한 S3 호환 리모트 지원을 통해 이러한 클라우드 간 동기화를 간단하게 처리하며, 모든 작업을 하나의 그래픽 인터페이스에서 관리할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Tencent COS 리모트 설정하기

Tencent COS와 Amazon S3는 모두 S3 호환이므로, RcloneView는 동일한 S3 제공업체 프레임워크를 통해 이들을 처리합니다. RcloneView에서 **New Remote**를 클릭하고 **S3 Compatible Storage**를 선택하세요. 제공업체 드롭다운에서 **Tencent Cloud COS**를 선택합니다. Tencent Cloud 콘솔에서 발급받은 **SecretId**와 **SecretKey**를 입력하고, COS 리전에 맞는 올바른 **엔드포인트**(예: 광저우의 경우 `cos.ap-guangzhou.myqcloud.com`)를 함께 입력합니다.

저장 후 Tencent COS 리모트가 듀얼 패널 탐색기에 표시됩니다. COS 버킷과 객체를 탐색하고, 콘텐츠가 접근 가능한지 확인하며, 동기화 작업을 설정하기 전에 폴더 구조가 예상대로인지 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Tencent Cloud COS as an S3-compatible remote in RcloneView" class="img-large img-center" />

## 대상으로 Amazon S3 추가하기

다시 **New Remote**를 클릭하고 **Amazon S3**를 선택합니다. AWS **Access Key ID**와 **Secret Access Key**를 입력하고, 대상 버킷이 위치한 AWS 리전을 지정합니다. 대상 버킷이 아직 존재하지 않는다면 먼저 AWS S3 콘솔에서 생성하세요. RcloneView는 설정 과정에서 해당 버킷에 연결합니다.

두 리모트를 모두 설정한 후에는 듀얼 패널 탐색기에서 나란히 열어 콘텐츠를 비교하고 연결 상태를 확인할 수 있습니다. 전체 동기화 작업을 실행하기 전에 양쪽에서 몇몇 폴더를 탐색하며 간단히 점검해볼 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud view of Tencent COS and Amazon S3 in RcloneView" class="img-large img-center" />

## 동기화 작업 생성 및 예약하기

**Job Manager**를 열고 **Job Wizard**를 실행합니다. Tencent COS 버킷(또는 특정 접두사)을 소스로, Amazon S3 버킷을 대상으로 설정합니다. 실제 동기화를 실행하기 전에 **dry run** 옵션을 사용해 전송될 내용을 미리 확인하세요. 기존 COS 버킷의 초기 대량 마이그레이션의 경우, dry run은 전송 크기를 예측하고 경로나 인코딩 문제를 미리 발견하는 데 도움이 됩니다.

작업이 성공적으로 실행되면 반복 일정으로 설정하는 것을 고려해보세요. PLUS 라이선스 사용자는 매일 또는 매주 주기로 실행되는 자동 동기화 작업을 구성하여, Tencent COS에 새 데이터가 도착할 때마다 S3 복제본을 최신 상태로 유지할 수 있습니다. **Job History** 패널은 모든 실행 기록을 로그로 남겨 전송량과 오류에 대한 가시성을 제공합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Tencent COS to Amazon S3 sync in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **New Remote** > **S3 Compatible Storage** > **Tencent Cloud COS**를 통해 **Tencent Cloud COS** 리모트를 추가하세요.
3. AWS 자격 증명으로 **Amazon S3** 리모트를 추가하세요.
4. **Job Wizard**를 사용해 COS에서 S3로의 동기화 작업을 만들고 먼저 dry run을 실행하세요.
5. PLUS 라이선스로 반복 동기화 작업을 예약하여 지속적인 클라우드 간 복제를 구성하세요.

RcloneView를 통해 Tencent COS에서 Amazon S3로 동기화하는 것은 중국 리전의 주 저장소에서 글로벌 데이터 가용성을 확보하는 가장 깔끔한 방법 중 하나입니다.

---

**관련 가이드:**

- [Tencent COS 관리 — RcloneView로 하는 클라우드 동기화](https://rcloneview.com/support/blog/manage-tencent-cos-cloud-sync-rcloneview)
- [Amazon S3 관리 — RcloneView로 하는 클라우드 동기화 및 백업](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [RcloneView로 S3, Wasabi, R2 통합 관리하기](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />

---
slug: sync-dropbox-to-s3-backup-rcloneview
title: "백업을 위한 Dropbox와 AWS S3 동기화 — RcloneView로 자동화하는 클라우드 간 보호"
authors:
  - tayson
description: "Dropbox는 협업에는 훌륭하지만 백업은 아닙니다. RcloneView를 사용해 Dropbox 파일을 AWS S3로 자동 동기화하여 저렴하고 이중화된 클라우드 백업을 구성하는 방법을 알아보세요."
keywords:
  - dropbox to s3 backup
  - sync dropbox aws
  - dropbox backup s3
  - dropbox cloud to cloud backup
  - dropbox offsite backup
  - dropbox s3 sync tool
  - dropbox redundant backup
  - dropbox aws transfer
  - automated dropbox backup
  - dropbox data protection
tags:
  - dropbox
  - s3
  - aws-s3
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 백업을 위한 Dropbox와 AWS S3 동기화 — RcloneView로 자동화하는 클라우드 간 보호

> Dropbox는 파일을 동기화할 뿐 백업하지는 않습니다. 누군가 공유 폴더를 삭제하면 Dropbox는 그 삭제 내용을 모든 곳에 충실히 동기화합니다. S3에 별도의 백업을 두면 바로 이런 상황을 막을 수 있습니다.

많은 사람들이 동기화와 백업을 혼동합니다. Dropbox는 동기화 서비스로, 삭제와 덮어쓰기를 포함한 변경 사항이 연결된 모든 기기에 전파됩니다. 진정한 백업은 원본이 바뀌어도 함께 바뀌지 않는 독립적인 사본입니다. AWS S3는 이런 용도에 이상적입니다. 내구성이 뛰어나고, 버전 관리가 가능하며, 비용 효율적입니다. RcloneView는 Dropbox에서 S3로의 백업 파이프라인을 자동화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox에 백업이 필요한 이유

- **실수로 인한 삭제** — Dropbox는 삭제 내용을 전파합니다. S3 백업은 파일을 그대로 보존합니다.
- **랜섬웨어** — 암호화된 파일이 Dropbox에 동기화됩니다. S3 버전 관리를 사용하면 암호화 이전 버전으로 복원할 수 있습니다.
- **계정 침해** — 누군가 계정에 접근해 데이터를 삭제하더라도 S3 백업은 영향을 받지 않습니다.
- **Dropbox 서비스 장애** — 드물지만 발생할 수 있습니다. S3 백업은 파일에 대한 접근을 보장합니다.

## 백업 설정하기

<img src="/support/images/en/blog/new-remote.png" alt="Connect Dropbox and S3" class="img-large img-center" />

RcloneView에 Dropbox와 AWS S3 계정을 리모트로 추가합니다.

## 백업 작업 생성하기

한쪽 창에는 Dropbox를, 다른 쪽 창에는 S3를 엽니다. 동기화가 아닌 복사(Copy) 작업을 생성합니다(Dropbox 파일이 삭제되었을 때 S3에서도 삭제되는 것을 원하지 않기 때문입니다).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dropbox to S3 backup" class="img-large img-center" />

## 매일 밤 백업 예약하기

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Dropbox backup" class="img-large img-center" />

매일 밤 백업을 실행합니다. 각 실행마다 새 파일과 변경된 파일만 전송되므로 대역폭과 비용을 최소화할 수 있습니다.

## 백업 무결성 확인하기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup" class="img-large img-center" />

Dropbox와 S3를 주기적으로 비교하여 백업이 완전하고 최신 상태인지 확인하세요.

## 비용 최적화

| S3 스토리지 클래스 | 적합한 용도 | 비용 |
|-----------------|---------|------|
| S3 Standard | 백업에 자주 접근하는 경우 | ~$23/TB/월 |
| S3 Infrequent Access | 월 1회 정도 복원이 필요한 경우 | ~$12.5/TB/월 |
| S3 Glacier Instant | 복원이 드물지만 필요할 때 빠르게 접근해야 하는 경우 | ~$4/TB/월 |
| S3 Glacier Deep Archive | 보관 전용 | ~$1/TB/월 |

대부분의 Dropbox 백업 시나리오에서는 S3 Infrequent Access나 Glacier Instant가 가장 균형 잡힌 선택입니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Dropbox**와 **AWS S3** 리모트를 추가합니다.
3. **복사(Copy) 작업을 생성**합니다(동기화 아님).
4. **매일 밤 실행되도록 예약**합니다.
5. 폴더 비교로 **주기적으로 확인**합니다.

동기화는 파일을 최신 상태로 유지합니다. 백업은 파일을 안전하게 지킵니다.

---

**관련 가이드:**

- [Dropbox를 AWS S3로 백업하기](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)
- [Dropbox를 Backblaze B2로 백업하기](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [동기화 vs 복사 vs 이동의 차이](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)

<CloudSupportGrid />

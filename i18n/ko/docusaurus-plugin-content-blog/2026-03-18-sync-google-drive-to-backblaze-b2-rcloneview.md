---
slug: sync-google-drive-to-backblaze-b2-rcloneview
title: "Google Drive를 Backblaze B2로 동기화 — RcloneView로 하는 저렴한 클라우드 간 백업"
authors:
  - tayson
description: "일상 업무는 Google Drive로, 저렴한 백업은 Backblaze B2로. RcloneView를 사용해 Google Drive에서 B2로의 자동 클라우드 간 백업을 설정하는 방법을 알아보세요."
keywords:
  - google drive to backblaze b2
  - google drive backup b2
  - sync google drive b2
  - google drive cloud backup
  - backblaze b2 backup tool
  - google drive offsite backup
  - google drive b2 sync
  - affordable google drive backup
  - cloud to cloud backup google
  - google drive redundancy
tags:
  - google-drive
  - backblaze-b2
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive를 Backblaze B2로 동기화 — RcloneView로 하는 저렴한 클라우드 간 백업

> Google Drive는 작업 파일을 저장하고, Backblaze B2는 월 $6/TB의 비용으로 이를 보호합니다. 이 둘을 함께 사용하면 가장 비용 효율적인 클라우드 백업 전략 중 하나가 완성됩니다.

Google Drive는 매일 사용하는 파일들이 있는 곳입니다. 하지만 Google Drive만으로는 백업이 되지 않습니다 — 실수로 인한 삭제, 계정 침해, 동기화 오류 등으로 Google이 복구해줄 수 없는 데이터 손실이 발생할 수 있습니다. 월 $6/TB의 Backblaze B2는 안전망을 제공합니다: RcloneView가 자동으로 업데이트하는 모든 파일의 독립적인 사본입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 왜 Google Drive 백업에 B2를 사용해야 할까요?

| 요소 | Backblaze B2 |
|--------|-------------|
| 저장 비용 | $6/TB/월 |
| 다운로드 비용 | $0.01/GB |
| 무료 송신(egress) | 저장량의 3배/월 |
| 내구성 | 99.999999999% |
| API | S3 호환 |

B2는 백업 작업에 특화되어 설계되었습니다: 저렴한 저장 비용, 사용한 만큼 지불하는 요금제, 그리고 범용 도구 지원을 위한 S3 호환성까지 갖추고 있습니다.

## 백업 설정하기

<img src="/support/images/en/blog/new-remote.png" alt="Connect Google Drive and B2" class="img-large img-center" />

RcloneView에서 Google Drive와 Backblaze B2를 모두 리모트로 추가합니다.

## 백업 작업 생성하기

한쪽 창에 Google Drive를, 다른 쪽 창에 B2를 엽니다. Copy 작업을 생성합니다:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to B2" class="img-large img-center" />

**Copy**를 사용하세요(Sync가 아닙니다) — 그래야 Google Drive에서 삭제된 파일도 B2에 그대로 보존됩니다.

## 야간 백업 예약하기

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly backup" class="img-large img-center" />

실행할 때마다 새 파일과 변경된 파일만 전송됩니다. 일반적인 Google Drive 계정의 경우, 매일 백업을 해도 사용하는 대역폭은 최소한에 그칩니다.

## 백업 무결성 확인하기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup" class="img-large img-center" />

## 암호화 추가하기

민감한 데이터의 경우, B2 위에 crypt 리모트를 추가로 적용하세요. 파일은 내 컴퓨터를 떠나기 전에 암호화되므로, Backblaze는 암호화되지 않은 데이터를 절대 볼 수 없습니다.

## 비용 예시

| Google Drive 용량 | B2 월 비용 |
|-------------------|----------------|
| 100 GB | $0.60 |
| 500 GB | $3.00 |
| 1 TB | $6.00 |
| 5 TB | $30.00 |

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Google Drive**와 **Backblaze B2** 리모트를 추가하세요.
3. 백업을 위한 **Copy 작업을 생성**하세요.
4. **야간 실행을 예약**하세요.
5. 파일이 보호되고 있다는 사실을 알고 **편히 잠드세요**.

낮에는 Drive에서 작업하고, 밤에는 B2에서 백업하세요.

---

**관련 가이드:**

- [Dropbox를 Backblaze B2로 백업하기](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Dropbox를 S3로 동기화해 백업하기](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [클라우드 백업 암호화하기](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

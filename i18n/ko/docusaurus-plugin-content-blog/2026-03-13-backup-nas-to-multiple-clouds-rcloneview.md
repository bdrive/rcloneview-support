---
slug: backup-nas-to-multiple-clouds-rcloneview
title: "NAS를 여러 클라우드에 백업하는 방법 — RcloneView로 구현하는 3-2-1 백업 전략"
authors:
  - tayson
description: "여러 클라우드 제공업체에 동시에 백업하여 NAS 데이터를 보호하세요. RcloneView의 배치 작업을 사용하여 제대로 된 3-2-1 백업 전략을 구현합니다."
keywords:
  - nas multi cloud backup
  - 3 2 1 backup strategy
  - nas cloud backup multiple
  - synology multi cloud backup
  - qnap multi cloud backup
  - nas backup strategy
  - nas to s3 and b2 backup
  - nas disaster recovery
  - multi cloud backup plan
  - nas off site backup
tags:
  - nas
  - multi-cloud
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# NAS를 여러 클라우드에 백업하는 방법 — RcloneView로 구현하는 3-2-1 백업 전략

> 클라우드 백업 하나면 좋습니다. 두 개면 더 좋습니다. 3-2-1 규칙은 이렇게 말합니다: 3개의 사본, 2개의 서로 다른 매체, 1개는 오프사이트. NAS가 첫 번째 사본입니다. 클라우드 A가 두 번째 사본입니다. 클라우드 B가 세 번째 사본입니다. RcloneView가 이 모든 것을 자동화합니다.

NAS는 훌륭한 중앙 집중식 스토리지 솔루션이지만, 여전히 단일 위치에 있는 단일 장치입니다. 하드웨어 고장, 화재, 도난, 자연재해는 그 안의 모든 것과 함께 NAS를 파괴할 수 있습니다. 서로 다른 인프라, 서로 다른 리전에 있는 여러 클라우드 제공업체에 백업하면 진정한 재해 복구가 가능해집니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 3-2-1 전략

| 사본 | 위치 | 제공업체 |
|------|----------|----------|
| 1 (기본) | NAS (로컬) | Synology/QNAP |
| 2 (클라우드 백업) | 클라우드 A | Backblaze B2 ($6/TB) |
| 3 (클라우드 백업) | 클라우드 B | AWS S3 또는 Wasabi |

세 개의 사본. 두 가지 다른 유형의 스토리지(로컬 NAS + 클라우드). 하나는 오프사이트(클라우드는 정의상 오프사이트입니다).

## RcloneView로 설정하기

### 1) NAS와 클라우드 연결하기

<img src="/support/images/en/blog/new-remote.png" alt="Add NAS and cloud remotes" class="img-large img-center" />

### 2) 각 클라우드에 대한 백업 작업 생성하기

**작업 1**: NAS → Backblaze B2 (기본 클라우드 백업).
**작업 2**: NAS → AWS S3 (보조 클라우드 백업).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create multi-cloud backup jobs" class="img-large img-center" />

### 3) 야간 백업 예약하기

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-cloud NAS backup" class="img-large img-center" />

일정을 분산시키세요:
- 오전 2:00 → NAS → Backblaze B2.
- 오전 4:00 → NAS → AWS S3.

### 4) 배치 작업으로 자동화하기

v1.3 배치 작업은 모든 것을 하나로 연결합니다:

1. NAS → B2 복사.
2. NAS → S3 복사.
3. NAS와 B2 비교.
4. NAS와 S3 비교.
5. Slack으로 알림.

### 5) 두 백업 모두 확인하기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify multi-cloud backup" class="img-large img-center" />

## 비용 최적화

| 데이터 용량 | B2 월 비용 | S3 Standard-IA 월 비용 | 합계 |
|-------------|-----------|----------------------|-------|
| 1 TB | $6 | $12.50 | $18.50 |
| 5 TB | $30 | $62.50 | $92.50 |
| 10 TB | $60 | $125 | $185 |

보조 백업의 경우 더 저렴한 등급을 사용하세요: S3 Glacier ($4/TB) 또는 Wasabi ($7/TB, 이그레스 무료).

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **NAS와 두 개의 클라우드 제공업체를 연결**합니다.
3. 각 클라우드로의 **복사 작업을 생성**합니다.
4. 배치 작업으로 **예약 및 자동화**합니다.
5. 매주 **두 백업을 모두 확인**합니다.

두 개의 클라우드, 하나의 NAS, 데이터 손실 위험 제로.

---

**관련 가이드:**

- [Synology NAS에서 RcloneView 사용하기](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [QNAP NAS에서 RcloneView 사용하기](https://rcloneview.com/support/blog/rcloneview-qnap-nas-cloud-backup-rcloneview)
- [클라우드 간 백업이 중요한 이유](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)

<CloudSupportGrid />

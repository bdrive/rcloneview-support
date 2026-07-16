---
slug: migrate-backblaze-b2-to-aws-s3-rcloneview
title: "Backblaze B2에서 AWS S3로 마이그레이션하는 방법 — RcloneView로 단계별 진행하기"
authors:
  - tayson
description: "생태계 통합을 위해 Backblaze B2에서 AWS S3로 데이터를 옮겨야 하나요? RcloneView를 사용해 최소한의 비용과 데이터 손실 없이 마이그레이션하는 방법을 알아보세요."
keywords:
  - backblaze b2 to aws s3
  - migrate b2 to s3
  - backblaze to amazon s3
  - b2 s3 migration tool
  - switch cloud storage provider
  - backblaze b2 migration
  - b2 to s3 transfer
  - cloud storage migration
  - backblaze to aws
  - s3 migration tool
tags:
  - backblaze-b2
  - aws-s3
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2에서 AWS S3로 마이그레이션하는 방법 — RcloneView로 단계별 진행하기

> Backblaze B2는 저렴한 스토리지로 훌륭한 선택지입니다. 하지만 Lambda 트리거, CloudFront CDN, Athena 쿼리 같은 AWS 생태계 통합이 필요하다면 S3가 필요합니다. 데이터 손실 없이 마이그레이션하는 방법을 소개합니다.

Backblaze B2와 AWS S3는 둘 다 S3 호환 스토리지이므로, 적절한 도구만 있다면 마이그레이션이 어렵지 않습니다. 가장 중요하게 고려할 부분은 아웃바운드 트래픽 비용, 전송 시간, 검증입니다. RcloneView는 전송을 처리하면서 시각적인 모니터링과 검증 기능을 함께 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 마이그레이션 계획

### 비용 산정

B2 아웃바운드 비용: $10/TB (Cloudflare Bandwidth Alliance를 이용하면 무료).

| 데이터 용량 | B2 아웃바운드 비용 | S3 스토리지 비용 (첫 달) |
|-------------|---------------|-------------------------|
| 100 GB | $1 | $2.30 |
| 1 TB | $10 | $23 |
| 10 TB | $100 | $230 |

### 소요 시간

전송 속도는 네트워크 연결과 B2/S3의 처리량에 따라 달라집니다. 두 서비스 모두 높은 병렬 처리를 잘 지원합니다.

## 단계별 진행

### 1) 두 리모트 추가하기

<img src="/support/images/en/blog/new-remote.png" alt="Add B2 and S3 remotes" class="img-large img-center" />

### 2) 탐색하며 비교하기

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse B2 and S3 side by side" class="img-large img-center" />

### 3) Copy 작업 실행하기

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Migrate B2 to S3" class="img-large img-center" />

높은 병렬 처리(16–32 전송)를 사용하세요 — B2와 S3 모두 이를 잘 처리합니다.

### 4) 진행 상황 모니터링하기

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor B2 to S3 migration" class="img-large img-center" />

### 5) 완전성 검증하기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify B2 to S3 migration" class="img-large img-center" />

## 마이그레이션 이후

1. **애플리케이션 설정 업데이트** — 앱이 S3 엔드포인트를 가리키도록 변경하세요.
2. **철저히 테스트하기** — 읽기와 쓰기가 정상적으로 동작하는지 확인하세요.
3. **B2를 30일간 유지하기** — 문제가 발생할 경우를 대비한 폴백입니다.
4. **B2 데이터 삭제하기** — S3에서 모든 것이 정상 작동함을 확인한 후 진행하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **B2와 S3를 리모트로 추가**하세요.
3. **높은 병렬 처리로 Copy 작업을 실행**하세요.
4. **폴더 비교 기능으로 검증**하세요.

같은 API, 더 큰 생태계.

---

**관련 가이드:**

- [동기화 작업 만들기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [S3 호환 공급자 간 마이그레이션하기](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-s3-rcloneview)

<CloudSupportGrid />

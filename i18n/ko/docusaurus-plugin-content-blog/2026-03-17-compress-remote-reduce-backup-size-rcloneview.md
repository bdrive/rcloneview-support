---
slug: compress-remote-reduce-backup-size-rcloneview
title: "압축 리모트 — RcloneView에서 클라우드 백업 용량을 자동으로 줄이기"
authors:
  - tayson
description: "RcloneView는 클라우드 스토리지에 업로드하기 전 파일을 자동으로 압축하는 rclone의 compress 리모트를 지원합니다. 모든 백업에서 스토리지 비용과 대역폭을 절약하세요."
keywords:
  - rclone compress remote
  - compress cloud backup
  - reduce cloud storage size
  - compressed cloud upload
  - rcloneview compress
  - save cloud storage space
  - compress before upload
  - cloud backup compression
  - reduce backup size
  - rclone compression
tags:
  - feature
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 압축 리모트 — RcloneView에서 클라우드 백업 용량을 자동으로 줄이기

> 500GB짜리 백업이 압축을 통해 300GB가 될 수 있습니다. compress 리모트는 어떤 클라우드 제공업체든 자동 gzip 압축으로 감싸줍니다 — 더 작은 백업, 더 낮은 비용, 동일한 데이터.

클라우드 스토리지 비용은 용량에 비례해 늘어납니다. 백업 용량을 30~60% 줄일 수 있다면, 매달 그만큼 스토리지 비용을 절약하는 셈입니다. rclone의 compress 리모트는 투명한 압축 기능을 제공합니다 — 업로드 전에 파일을 압축하고 다운로드 시 압축을 해제하며, 별도의 수동 작업이 필요 없습니다. RcloneView를 사용하면 이 설정을 시각적으로 구성하고, 압축된 백업을 다른 클라우드 계정과 함께 관리할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Compress 리모트의 작동 방식

compress 리모트는 다른 리모트(Google Drive, S3, B2 등)를 감싸서 자동으로 다음을 수행합니다.

1. 업로드 전에 gzip을 사용해 **파일을 압축**
2. 다운로드 시 투명하게 **파일 압축을 해제**
3. CPU 낭비를 막기 위해 **이미 압축된 형식(jpg, mp4, zip 등)은 건너뜀**

compress 리모트는 다른 일반 리모트와 마찬가지로 탐색, 복사, 동기화 등을 할 수 있지만, 대상 위치에는 파일이 압축된 상태로 저장됩니다.

## 파일 형식별 압축 효과

| 파일 형식 | 일반적인 압축률 | 예시 |
|-----------|-------------------|---------|
| 텍스트 파일, CSV, 로그 | 60~90% 감소 | 100 MB → 10~40 MB |
| 오피스 문서 (docx, xlsx) | 5~15% 감소 | 이미 어느 정도 압축되어 있음 |
| 데이터베이스 덤프 | 50~80% 감소 | 1 GB → 200~500 MB |
| 소스 코드 | 60~80% 감소 | 500 MB → 100~200 MB |
| 사진 (JPG, PNG) | ~0% | 이미 압축되어 있음 |
| 동영상 (MP4, MKV) | ~0% | 이미 압축되어 있음 |
| ZIP/RAR 압축 파일 | ~0% | 이미 압축되어 있음 |

적합한 경우: 텍스트 위주 데이터, 로그, 데이터베이스 백업, 소스 코드, 압축되지 않은 데이터 형식.
효과가 적은 경우: 사진, 동영상, 이미 압축된 아카이브.

## Compress 리모트 설정하기

<img src="/support/images/en/blog/new-remote.png" alt="Create compress remote" class="img-large img-center" />

기존 스토리지 리모트를 감싸는 compress 리모트를 만드세요. 이후 원본 리모트 대신 compress 리모트를 백업 대상으로 사용합니다.

## 활용 사례

### 로그 백업 압축

서버 로그는 압축 효율이 매우 뛰어납니다(80~90%). 50GB 로그 아카이브가 클라우드 스토리지에서는 5~10GB가 됩니다.

### 데이터베이스 백업 비용 절감

일일 데이터베이스 덤프는 압축 효율이 매우 높습니다. 업로드 전에 압축하여 클라우드 스토리지 비용을 줄이세요.

### 소스 코드 아카이브

수천 개의 텍스트 파일로 이루어진 개발 프로젝트는 압축의 효과를 크게 볼 수 있습니다.

### 압축 백업 예약하기

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule compressed backup" class="img-large img-center" />

## 참고 사항

- **CPU 오버헤드**: 압축은 업로드와 다운로드 시 CPU를 사용합니다. 최신 CPU라면 문제없이 처리할 수 있습니다.
- **모든 파일이 압축되는 것은 아님**: 이미 압축된 형식(JPG, MP4, ZIP)은 압축 없이 그대로 전달됩니다.
- **투명한 접근**: compress 리모트를 통해 탐색할 때 파일은 평범하게 보입니다 — 압축 해제는 자동으로 이루어집니다.
- **암호화와 결합**: compress 리모트와 crypt 리모트를 겹쳐서 압축과 암호화를 동시에 적용한 백업을 만들 수도 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **클라우드 스토리지를** 일반 리모트로 추가하세요.
3. 이를 감싸는 **compress 리모트를 생성**하세요.
4. **compress 리모트를** 백업 대상으로 사용하세요.
5. 더 작아진 백업과 낮아진 비용을 **누리세요**.

더 작은 백업, 더 낮은 비용, 동일한 데이터.

---

**관련 가이드:**

- [숨겨진 클라우드 스토리지 비용](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [클라우드 백업 암호화하기](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [가상 리모트: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />

---
slug: rcloneview-truenas-cloud-backup
title: "TrueNAS에서 RcloneView로 클라우드 백업 및 동기화하기"
authors:
  - tayson
description: "RcloneView를 TrueNAS(CORE 또는 SCALE)에 연결하여 클라우드 백업, 동기화, 멀티 클라우드 관리를 수행하세요. rclone의 모든 기능으로 TrueNAS Cloud Sync 작업을 대체하거나 보강할 수 있습니다."
keywords:
  - rcloneview truenas
  - truenas cloud backup rclone
  - truenas scale rclone gui
  - truenas core cloud sync
  - rclone truenas setup
  - truenas s3 backup rcloneview
  - truenas google drive backup
  - truenas cloud storage management
  - backup truenas to cloud
  - truenas rclone integration
tags:
  - nas
  - cloud-backup
  - platform
  - linux
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# TrueNAS에서 RcloneView로 클라우드 백업 및 동기화하기

> TrueNAS에는 rclone 기반의 내장 Cloud Sync 작업 기능이 있지만, 내장 인터페이스는 제한적입니다. TrueNAS와 함께 RcloneView를 실행하면 멀티 클라우드 관리, Crypt 리모트, Bisync, 필터 규칙, 폴더 비교 등 rclone의 모든 기능을 활용할 수 있습니다.

TrueNAS CORE와 SCALE은 모두 Cloud Sync 작업 기능을 위해 내부적으로 rclone을 포함하고 있습니다. 하지만 웹 GUI는 rclone 기능의 일부만 제공합니다 — 제한된 공급자 옵션, 암호화 계층 부재, bisync 미지원, 크로스 클라우드 작업 불가 등입니다. RcloneView를 TrueNAS에서(Docker, VM, 또는 원격 워크스테이션을 통해) 실행하면 TrueNAS를 주 스토리지 플랫폼으로 계속 사용하면서도 rclone의 완전한 기능 세트에 접근할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## TrueNAS + RcloneView: 두 가지 통합 방법

### 방법 1 — TrueNAS SCALE 컨테이너에서 RcloneView 실행(Docker)

TrueNAS SCALE은 Apps 인터페이스를 통해 네이티브로 Docker 컨테이너를 지원합니다. RcloneView를 상시 실행되는 컨테이너로 실행할 수 있습니다.

1. TrueNAS SCALE에서 **Apps → Available Applications**로 이동하거나 **Custom App** 옵션을 사용합니다.
2. TrueNAS 데이터셋 경로를 가리키는 볼륨 마운트와 함께 RcloneView의 Docker 이미지를 배포합니다.
3. 브라우저에서 RcloneView의 웹 인터페이스에 접속합니다.

이렇게 하면 RcloneView가 NAS 자체에 위치하므로 별도의 머신 없이 백업 작업을 실행할 수 있습니다.

### 방법 2 — 워크스테이션에서 RcloneView 실행, NAS를 리모트로 사용

데스크톱에서 RcloneView를 실행하고 TrueNAS 데이터셋을 리모트로 추가합니다.

- **SMB**: RcloneView에서 Windows 공유를 로컬 또는 SMB 리모트로 추가합니다.
- **SFTP**: TrueNAS에서 SFTP를 활성화하고 RcloneView에 SFTP 리모트로 추가합니다.
- **NFS**: NAS의 NFS 공유를 로컬에 마운트하고 RcloneView에서 로컬 경로로 취급합니다.

이 방법은 설정이 더 간단하며 Docker에 대한 전문 지식 없이도 사용할 수 있습니다.

## TrueNAS에서 SFTP 설정하기

가장 안정적인 원격 접근 방법입니다.

### 1단계 — TrueNAS에서 SSH 활성화

TrueNAS에서: **System → Services → SSH → Enable**. 백업 대상 데이터셋에만 접근 권한이 제한된 전용 사용자를 만듭니다.

### 2단계 — RcloneView에 TrueNAS를 SFTP 리모트로 추가

<img src="/support/images/en/blog/new-remote.png" alt="Add TrueNAS SFTP remote in RcloneView" class="img-large img-center" />

1. RcloneView에서 **New Remote**를 클릭합니다.
2. **SFTP**를 선택합니다.
3. TrueNAS IP, SSH 포트(기본값 22), 사용자 이름, SSH 키 또는 비밀번호를 입력합니다.
4. 루트 경로를 데이터셋으로 설정합니다(예: `/mnt/tank/Backups`).
5. 저장합니다.

이제 RcloneView는 TrueNAS 데이터셋을 탐색 가능한 리모트로 표시합니다.

## TrueNAS를 위한 클라우드 백업 작업

TrueNAS를 SFTP 리모트로 접근할 수 있게 되면 포괄적인 백업 작업을 만들 수 있습니다.

### TrueNAS 데이터셋을 S3로 백업하기

1. RcloneView에서 새 **Sync** 작업을 만듭니다.
2. 소스: `truenas-sftp:/mnt/tank/Photos/`
3. 대상: `s3-backup:truenas-photos-backup/`
4. 데이터 무결성을 위해 체크섬 검증을 활성화합니다.
5. 매일 밤 실행되도록 예약합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS to S3 backup job" class="img-large img-center" />

### 클라우드로 암호화 백업하기

민감한 데이터셋의 경우 Crypt 리모트 계층을 추가합니다.

1. S3 리모트를 감싸는 Crypt 리모트를 만듭니다.
2. 원본 S3 리모트 대신 Crypt 리모트를 대상으로 설정합니다.
3. 파일은 TrueNAS를 떠나기 전에 클라이언트 측에서 암호화됩니다.

### 멀티 클라우드 백업

RcloneView를 사용하여 동일한 TrueNAS 데이터셋을 두 개의 클라우드 공급자에 동시에 백업합니다.

- 작업 1: `truenas-sftp:/mnt/tank/` → `s3-primary:` (매일)
- 작업 2: `truenas-sftp:/mnt/tank/` → `b2-secondary:` (매주)

## TrueNAS 내장 Cloud Sync 대비 장점

| 기능 | TrueNAS Cloud Sync | RcloneView |
|---------|-------------------|-----------|
| 공급자 지원 | 약 20개 공급자 | 70개 이상 공급자 |
| Crypt/암호화 계층 | ✗ | ✓ |
| Bisync(양방향) | ✗ | ✓ |
| 필터 규칙 | 제한적 | rclone 필터 전체 지원 |
| 폴더 비교 | ✗ | ✓ |
| 크로스 클라우드(클라우드 A → 클라우드 B) | ✗ | ✓ |
| 작업 예약 | ✓ | ✓ |
| 실시간 모니터링 | 제한적 | ✓ |

## 모니터링 및 검증

RcloneView의 **Folder Comparison**을 사용하여 TrueNAS 백업이 클라우드 스토리지와 일치하는지 주기적으로 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup in cloud with folder comparison" class="img-large img-center" />

TrueNAS 소스와 클라우드 대상을 비교하면 누락되거나 변경된 파일이 즉시 표시됩니다. 데이터 무결성 점검을 위해 월간 검증 실행을 예약하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **TrueNAS에서 SSH를 활성화**하고 RcloneView에 SFTP 리모트로 추가합니다.
3. TrueNAS 데이터셋에서 클라우드 공급자로 **백업 작업을 만듭니다**.
4. **예약 및 암호화** — 매일 밤 백업 작업을 설정하고 민감한 데이터셋을 위해 Crypt 리모트를 추가합니다.

TrueNAS는 훌륭한 NAS 소프트웨어입니다. RcloneView와 함께 사용하면 TrueNAS의 내장 도구가 제공하는 수준을 훨씬 뛰어넘는 완전하고 유연한 클라우드 백업 전략을 갖출 수 있습니다.

---

**관련 가이드:**

- [Synology NAS에서 RcloneView 실행하기](https://rcloneview.com/support/blog/rcloneview-synology-rclone-gui)
- [Docker에서 RcloneView 실행하기](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [NAS를 여러 클라우드로 백업하기](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />

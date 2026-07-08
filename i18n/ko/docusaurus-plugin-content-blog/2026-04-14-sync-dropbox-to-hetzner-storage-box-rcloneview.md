---
slug: sync-dropbox-to-hetzner-storage-box-rcloneview
title: "Dropbox를 Hetzner Storage Box로 동기화 — RcloneView로 하는 클라우드 백업"
authors:
  - tayson
description: "RcloneView를 사용해 Dropbox 파일을 Hetzner Storage Box로 동기화하고 백업하세요. Dropbox에서 Hetzner로 마이그레이션하거나 백업 사본을 유지하기 위한 단계별 가이드입니다."
keywords:
  - sync Dropbox to Hetzner Storage Box
  - Dropbox Hetzner backup
  - migrate Dropbox to Hetzner
  - Hetzner Storage Box cloud backup
  - rclone Dropbox Hetzner
  - Dropbox to SFTP backup
  - European cloud backup Dropbox
  - RcloneView Dropbox Hetzner
tags:
  - RcloneView
  - dropbox
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox를 Hetzner Storage Box로 동기화 — RcloneView로 하는 클라우드 백업

> RcloneView는 SFTP를 통해 Dropbox를 Hetzner Storage Box로 동기화하여 유럽 사용자에게 Dropbox 파일에 대한 GDPR 준수 보조 백업 대상을 제공합니다.

Hetzner Storage Box는 SFTP, FTP, Samba, WebDAV 접근을 지원하는 독일 호스팅 기반의 비용 효율적인 스토리지 서비스입니다. 협업을 위해 Dropbox를 사용하는 유럽의 기업과 개발자들은 종종 Hetzner Storage Box를 보조 백업 대상으로 추가합니다. 대용량 데이터에 대해 훨씬 저렴하고 데이터를 EU 관할권 내에 유지할 수 있기 때문입니다. RcloneView는 rclone의 Dropbox 및 SFTP 백엔드를 통해 둘 다 연결하여, 예약된 Dropbox-to-Hetzner 동기화를 간단한 GUI 작업으로 만들어줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox와 Hetzner Storage Box 설정하기

먼저 Dropbox를 추가합니다: **리모트 탭 → 새 리모트 → Dropbox**, OAuth 브라우저 로그인으로 인증합니다. Dropbox 폴더가 즉시 탐색기에 표시됩니다.

Hetzner Storage Box를 SFTP 리모트로 추가합니다: **새 리모트 → SFTP**. 다음과 같이 설정합니다:
- **Host**: `yourboxid.your-storagebox.de`
- **User**: Storage Box 사용자 이름 (Hetzner Robot 패널에 표시됨)
- **인증**: SSH 키(권장) 또는 비밀번호
- **Port**: 23 (Hetzner Storage Box는 표준 포트 22가 아닌 포트 23을 사용합니다)

저장하기 전에 연결을 테스트하세요. 두 리모트가 모두 추가되면 분할 화면 탐색기를 열어 왼쪽에는 Dropbox, 오른쪽에는 Hetzner를 탐색할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Dropbox and Hetzner Storage Box SFTP remote in RcloneView" class="img-large img-center" />

## 예약된 동기화 작업 생성하기

지속적인 백업 시나리오를 위해 작업 관리자에서 동기화 작업을 생성합니다. 소스는 Dropbox 폴더(예: `dropbox:/Team/Projects/`), 대상은 Hetzner 경로(예: `hetzner:/backups/dropbox/`)입니다. 2단계에서 동시 전송 수를 4~6으로 설정하세요 — Hetzner Storage Box는 이 정도 동시성 수준에서 SFTP 연결을 잘 처리합니다.

작업을 매일 밤 2:00 AM에 실행되도록 예약하세요(PLUS 라이선스). 증분 동기화는 새 파일이나 수정된 파일만 복사하여, 최초 전체 동기화 이후에는 전송 시간을 짧게 유지합니다. 작업 기록에는 각 실행의 상태, 전송 크기, 소요 시간이 기록으로 남습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly Dropbox to Hetzner sync in RcloneView" class="img-large img-center" />

## Dropbox에서 Hetzner로 일회성 마이그레이션

Dropbox에서 벗어나 Hetzner Storage Box를 주요 저장 위치로 마이그레이션하는 경우, 동기화 대신 복사 작업을 사용하세요. 복사는 소스에서 아무것도 삭제하지 않고 Dropbox의 모든 파일을 Hetzner로 전송합니다 — 전환 기간 동안 Dropbox의 콘텐츠를 그대로 유지합니다. 실행을 확정하기 전에 먼저 드라이 런을 실행하여 파일 수와 총 전송 크기를 확인하세요.

수백 GB에 달하는 대용량 Dropbox 계정의 경우, 2단계에서 체크섬 검증을 활성화하여 전송 후 각 파일의 무결성을 확인하세요. 폴더 비교 기능을 사용하면 작업 완료 후 Dropbox와 Hetzner 폴더 구조를 나란히 비교하여 마이그레이션이 올바르게 완료되었는지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Dropbox and Hetzner Storage Box folders after migration in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 새 리모트 마법사에서 OAuth로 Dropbox를, SFTP(포트 23)로 Hetzner Storage Box를 추가하세요.
3. 작업 관리자에서 Dropbox 경로에서 Hetzner 경로로의 동기화 작업을 생성하세요.
4. 야간 동기화를 예약하고 전송 감사 로그는 작업 기록에서 확인하세요.

RcloneView로 Dropbox를 Hetzner Storage Box에 동기화하면 유럽 팀은 수동 개입 없이 자동으로 실행되는 비용 효율적이고 GDPR을 준수하는 보조 백업을 확보할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Hetzner Storage Box 마운트 및 클라우드로 동기화하기](https://rcloneview.com/support/blog/mount-hetzner-storage-box-sync-cloud-rcloneview)
- [RcloneView로 Dropbox를 Backblaze B2에 백업하기](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [RcloneView로 Dropbox를 AWS S3에 백업하기](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />

---
slug: backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview
title: "RcloneView로 Dropbox를 Backblaze B2에 백업하여 저렴한 장기 저장소 확보하기"
authors:
  - tayson
description: "RcloneView를 사용해 Dropbox 데이터를 Backblaze B2에 백업하여 훨씬 저렴한 비용으로 보호하세요 — 예약 실행과 검증까지 자동으로 처리합니다."
keywords:
  - dropbox backup to backblaze
  - dropbox to b2
  - backup dropbox cheap
  - dropbox backblaze b2 sync
  - dropbox long-term backup
  - affordable cloud backup
  - dropbox data protection
  - dropbox to backblaze transfer
  - dropbox rclone backup
  - cheap dropbox backup solution
tags:
  - dropbox
  - backblaze-b2
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Dropbox를 Backblaze B2에 백업하여 저렴한 장기 저장소 확보하기

> Dropbox는 일상적인 동기화에는 훌륭하지만, 장기 백업 용도로는 비용이 많이 듭니다. Backblaze B2는 그보다 훨씬 저렴한 비용으로 이용할 수 있습니다. RcloneView는 두 서비스를 연결하고 백업을 자동화해줍니다.

Dropbox는 실시간 파일 동기화와 협업에 뛰어나지만, 이를 유일한 백업 수단으로 사용하는 것은 특히 대용량 라이브러리의 경우 위험하고 비용도 많이 듭니다. Backblaze B2는 GB당 월 $0.006(대부분의 경쟁 서비스 대비 약 1/3 수준)에 S3 호환 오브젝트 스토리지를 제공해 장기 보관에 이상적입니다. RcloneView는 이 둘 사이의 간극을 메워줍니다: Dropbox를 예약된 일정에 따라 B2에 자동으로 백업하고, 체크섬으로 검증하며, 언제든 복원할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox를 Backblaze B2에 백업해야 하는 이유

### 비용 절감

| 제공업체 | TB당 월 비용 | 연간 10TB |
|----------|-------------------|------------|
| Dropbox Business | 사용자당 약 $15 (제한적) | 상이 |
| Backblaze B2 | $6 | $72 |
| AWS S3 Standard | $23 | $276 |

B2의 가격 정책 덕분에 이용 가능한 클라우드 백업 대상 중 가장 저렴한 축에 속합니다.

### Dropbox로부터의 독립성

- **계정 문제** — Dropbox 계정이 정지되거나 침해당해도 B2 백업은 영향을 받지 않습니다.
- **실수로 인한 삭제** — Dropbox의 버전 기록에는 한계가 있습니다. B2는 독립적인 안전망을 제공합니다.
- **랜섬웨어 방어** — 라이프사이클 규칙이 적용된 별도의 B2 백업은 변경 불가능한 복구 지점 역할을 할 수 있습니다.

## 백업 설정하기

### 1단계: Dropbox 추가

1. **리모트 추가**를 클릭한 뒤 **Dropbox**를 선택합니다.
2. OAuth로 인증합니다.
3. 이제 Dropbox 파일을 탐색할 수 있습니다.

### 2단계: Backblaze B2 추가

1. **리모트 추가**를 클릭한 뒤 **Backblaze B2**(또는 S3 호환)를 선택합니다.
2. B2 애플리케이션 키 ID와 애플리케이션 키를 입력합니다.
3. 이제 B2 버킷을 탐색할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and Backblaze B2 remotes" class="img-large img-center" />

### 3단계: 백업 작업 생성

1. **복사(Copy) 작업**을 생성합니다: Dropbox → B2 버킷.
2. Dropbox에서 파일이 삭제되었을 때 B2 파일까지 삭제되지 않도록 동기화(Sync)가 아닌 복사(Copy)를 사용하세요.
3. 초기 백업을 실행합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to B2 backup job" class="img-large img-center" />

### 4단계: 검증

[폴더 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) 기능을 사용해 모든 파일이 B2로 정상 전송되었는지 확인하세요:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on B2" class="img-large img-center" />

### 5단계: 예약 실행

매일 자동 백업이 실행되도록 설정합니다:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Dropbox to B2 backups" class="img-large img-center" />

## 모니터링

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Dropbox to B2 transfer" class="img-large img-center" />

[Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) 또는 [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) 알림을 추가해 백업 완료나 실패 여부를 바로 확인하세요.

## B2에서 복원하기

복원이 필요할 때는:

1. 반대 방향으로 복사(Copy) 작업을 생성합니다: B2 → Dropbox(또는 B2 → 로컬 드라이브).
2. 폴더 비교 기능을 사용해 복원할 특정 파일을 선택합니다.
3. RcloneView가 시각적으로 전송을 처리하므로 CLI가 필요 없습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Dropbox**와 **Backblaze B2**를 리모트로 추가합니다.
3. **복사(Copy) 작업을 생성**하고 초기 백업을 실행합니다.
4. 매일 자동으로 보호되도록 **예약**을 설정합니다.
5. Dropbox 데이터가 저렴하고 독립적인 백업으로 보호되고 있다는 사실에 **안심하고 지내세요**.

---

**관련 가이드:**

- [브라우저 기반 로그인(OAuth)으로 리모트 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

---
slug: migrate-onedrive-to-backblaze-b2-rcloneview
title: "RcloneView로 OneDrive를 Backblaze B2로 마이그레이션하여 저렴한 클라우드 백업 구축하기"
authors:
  - tayson
description: "RcloneView로 OneDrive 파일을 Backblaze B2로 마이그레이션하여 스토리지 비용을 절감하세요. 개인 또는 비즈니스 데이터를 더 저렴한 S3 호환 스토리지로 옮기는 단계별 가이드입니다."
keywords:
  - migrate onedrive to backblaze b2
  - onedrive to b2 migration
  - rcloneview onedrive backblaze
  - move onedrive to backblaze b2
  - rclone onedrive backblaze b2
  - onedrive cheaper storage alternative
  - backblaze b2 from onedrive
  - cloud storage cost reduction
  - onedrive backup to b2
  - transfer onedrive backblaze
tags:
  - RcloneView
  - onedrive
  - backblaze-b2
  - cloud-migration
  - migration
  - backup
  - cost-optimization
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 OneDrive를 Backblaze B2로 마이그레이션하여 저렴한 클라우드 백업 구축하기

> OneDrive 스토리지 비용은 특히 아카이브가 많은 팀이나 테라바이트 단위의 데이터를 보유한 개인에게 부담이 될 수 있습니다. Backblaze B2는 훨씬 저렴한 가격에 S3 호환 오브젝트 스토리지를 제공합니다. RcloneView를 사용하면 마이그레이션을 간단하게 진행할 수 있습니다.

OneDrive는 활발한 협업에는 편리하지만, 장기 아카이브나 콜드 백업, 대용량 미디어 컬렉션에는 가장 비용 효율적인 선택이 아닙니다. 월 약 $0.006/GB인 Backblaze B2는 자주 액세스하지 않는 데이터의 경우 OneDrive의 사용자당 요금제보다 훨씬 저렴합니다. 활성 작업 파일은 OneDrive에 그대로 두고 아카이브 데이터만 OneDrive에서 Backblaze B2로 옮기는 것은 현명한 비용 최적화 전략이며, RcloneView를 사용하면 커맨드라인 지식 없이도 실행할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 이 마이그레이션이 필요한 경우

- Microsoft 365 스토리지 할당량을 초과했지만 업그레이드는 피하고 싶은 경우.
- OneDrive에 거의 액세스하지 않는 대용량 미디어 아카이브(사진, 동영상, 프로젝트 파일)가 있는 경우.
- OneDrive를 주 백업 대상으로 Backblaze B2로 교체하려는 경우.
- 다른 리전으로의 이그레스 비용이 없는 네이티브 rclone 지원 S3 호환 스토리지를 원하는 경우.

## 비용 비교: OneDrive vs Backblaze B2

| 스토리지 | 1TB/월 | 5TB/월 |
|---------|-----------|-----------|
| OneDrive (Microsoft 365) | ~$9.99/사용자 | ~$50+(사용자당 제한) |
| Backblaze B2 | ~$6.00 | ~$30.00 |

아카이브가 많은 사용자의 경우, Backblaze B2로 스토리지 비용을 40~60% 절감할 수 있습니다.

## 1단계 — RcloneView에서 OneDrive 연결하기

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive in RcloneView" class="img-large img-center" />

1. RcloneView를 열고 **New Remote**를 클릭합니다.
2. **Microsoft OneDrive**를 선택합니다.
3. **Authorize**를 클릭하면 Microsoft OAuth 인증을 위한 브라우저 창이 열립니다.
4. 로그인하고 액세스 권한을 부여합니다.
5. OneDrive 유형(개인용, 비즈니스용, SharePoint)을 선택하고 리모트 이름을 `onedrive`로 저장합니다.

## 2단계 — RcloneView에서 Backblaze B2 연결하기

1. [Backblaze 대시보드](https://www.backblaze.com)에 로그인하여 **App Keys**로 이동합니다.
2. 대상 버킷에 대해 **Read and Write** 권한을 가진 새 애플리케이션 키를 생성합니다.
3. **keyID**와 **applicationKey**를 기록해 둡니다.
4. RcloneView에서 **Backblaze B2** 유형의 새 리모트를 추가합니다.
5. keyID와 applicationKey를 입력하고 이름을 `b2`로 지정한 후 저장합니다.

## 3단계 — 대상 버킷 만들기

마이그레이션 전에 Backblaze B2에서 대상 버킷을 생성합니다.

- **버킷 이름**: 고유한 이름을 선택합니다(예: `onedrive-archive-2026`)
- **버킷 유형**: Private(개인 백업용) 또는 Public(미디어 배포용)
- **버전 관리**: 선택 사항 — 덮어써진 파일의 복구를 가능하게 합니다

## 4단계 — 마이그레이션 실행하기

RcloneView에서 **Jobs**를 열고 다음과 같이 설정합니다.

| 설정 | 값 |
|---------|-------|
| Source | `onedrive:/Archives/`(또는 마이그레이션할 폴더) |
| Destination | `b2:onedrive-archive-2026/` |
| Mode | **Copy**(확인 전까지 OneDrive 사본 유지) |
| Transfers | 동시 4~8개(대역폭에 맞게 조정) |
| Checksum | 활성화 |

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transfer OneDrive to Backblaze B2 in progress" class="img-large img-center" />

**Run**을 클릭합니다. RcloneView는 파일별 진행 상황, 전송 속도, 예상 완료 시간을 표시합니다.

## 5단계 — 폴더 비교로 마이그레이션 확인하기

작업이 완료되면 RcloneView의 **Folder Comparison**을 사용하여 모든 OneDrive 파일이 B2에 제대로 도착했는지 확인합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive to B2 migration" class="img-large img-center" />

불일치 항목은 강조 표시됩니다. 작업을 다시 실행하면 rclone은 이미 존재하는 파일은 건너뛰고 누락된 파일만 다시 전송합니다.

## 6단계 — 지속적인 백업 예약하기(선택 사항)

앞으로도 B2를 OneDrive의 실시간 백업으로 유지하려면 다음과 같이 하세요.

1. 작업 모드를 Copy에서 **Sync**로 전환합니다.
2. **Schedule**을 열고 반복 주기를 설정합니다(예: 매일 밤 2시).
3. 새로 생성되거나 변경된 OneDrive 파일이 자동으로 B2에 백업됩니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to B2 backup" class="img-large img-center" />

## 대용량 OneDrive 마이그레이션을 위한 팁

- **폴더 단위로 마이그레이션하기** — 대용량 계정은 100~500GB 단위로 나눕니다.
- **피크 시간대 피하기** — Microsoft는 트래픽이 많을 때 OneDrive API 액세스를 제한합니다.
- **대역폭 제한 사용하기** — 업무 시간 중 일상 업무에 영향을 주지 않도록 RcloneView에서 제한을 설정합니다.
- **OneDrive를 활성 상태로 유지하기** — B2에서 확인이 끝나기 전까지는 OneDrive의 파일을 삭제하지 마세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. RcloneView의 설정 마법사를 통해 **OneDrive와 Backblaze B2** 리모트를 추가합니다.
3. Backblaze 대시보드에서 **B2 버킷을 생성**합니다.
4. **복사, 확인 후 결정**합니다 — OneDrive를 계속 활성 스토리지로 유지할지, 완전히 B2로 전환할지 선택하세요.

Microsoft 종속성 감소, 낮은 비용, S3 호환성 — Backblaze B2는 OneDrive 아카이브를 위한 현명한 이전 대상입니다.

---

**관련 가이드:**

- [Dropbox를 Backblaze B2로 백업하기](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Google Drive를 OneDrive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [숨겨진 클라우드 스토리지 비용 — RcloneView로 비용 절감하기](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />

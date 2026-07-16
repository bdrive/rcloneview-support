---
slug: fix-backblaze-b2-cap-exceeded-errors-rcloneview
title: "Backblaze B2 용량 초과 오류 해결하기 — RcloneView로 해결"
authors:
  - tayson
description: "RcloneView에서 Backblaze B2 용량 초과 오류를 진단하고 해결하는 방법을 알아보세요. 전송 속도를 제어하고 일일 용량을 관리하여 B2 백업을 안정적으로 유지하세요."
keywords:
  - Backblaze B2 cap exceeded error
  - B2 daily cap limit rclone
  - fix Backblaze B2 errors RcloneView
  - B2 transfer cap exceeded
  - Backblaze B2 troubleshooting
  - rclone B2 rate limit
  - Backblaze B2 backup errors
  - B2 upload cap fix
tags:
  - troubleshooting
  - backblaze-b2
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2 용량 초과 오류 해결하기 — RcloneView로 해결

> Backblaze B2의 일일 다운로드 용량 제한은 동기화 도중 전송을 중단시킬 수 있습니다. RcloneView에서 용량 초과 오류를 진단하고 제한 범위 내에서 작업이 유지되도록 구성하는 방법을 알아봅니다.

Backblaze B2는 Cloudflare와 피어링된 네트워크로의 송신 트래픽은 넉넉하게 무료로 제공하지만, 피어링되지 않은 대상으로의 다운로드는 일일 용량을 소모합니다. 이 용량에 도달하면 B2는 "cap exceeded" 메시지와 함께 HTTP 403 오류를 반환하여 RcloneView 동기화 작업이 실패하거나 정체됩니다. 이 가이드에서는 오류를 식별하고, 전송 구성을 조정하며, B2 계정의 일일 제한 내에서 작업을 예약하는 방법을 안내합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 용량 초과 오류 식별하기

B2 용량이 초과되면 RcloneView는 인터페이스 하단의 **Log 탭**에 오류를 표시합니다. `403 Forbidden`과 함께 `Transaction cap exceeded` 또는 `Download cap exceeded`라는 메시지가 포함된 항목이 표시됩니다. Transferring 탭의 전송 모니터에는 해당 작업이 0 B/s에서 정체된 것으로 나타납니다.

Rclone Terminal(Terminal 탭)을 열고 `rclone about b2-remote:`를 실행하여 현재 스토리지 및 트랜잭션 사용량을 확인하세요. 터미널에서는 정확한 용량 제한(이는 Backblaze 콘솔에서 설정됨)을 표시하지 않지만, 리모트가 연결 가능한지 확인하고 전체 계정 상태를 보여줍니다.

<img src="/support/images/en/blog/new-remote.png" alt="Checking Backblaze B2 remote configuration in RcloneView" class="img-large img-center" />

## 용량 초과를 피하기 위한 전송 설정 조정

가장 효과적인 해결책은 대역폭을 제한하여 다운로드를 여러 날에 걸쳐 분산시키는 것입니다. RcloneView의 Global Rclone Flags(Settings 탭 → Embedded Rclone → Global Rclone Flags)에 `--bwlimit 10M`을 추가하여 대역폭을 10 MB/s로 제한하세요. 이렇게 하면 일일 데이터 소비량이 줄어들어 대용량 동기화나 복원 작업을 실행할 때도 B2 용량 범위 내에서 전송을 유지할 수 있습니다.

스케줄러로 트리거되는 작업은 하루 동안 분산시키세요. 오전 6시에 200GB 복원 작업을 한 번에 실행하는 대신, 폴더 깊이별로 작업을 분할하세요. 필터 규칙을 사용해 `Archive/2023/`을 먼저 처리한 다음, 정오에 별도 작업으로 `Archive/2024/`를 처리하는 식입니다. 동기화 마법사 3단계에 있는 RcloneView의 사용자 지정 필터 규칙을 사용하면 이 작업이 쉬워집니다. 폴더 경로 제외 기능을 사용해 각 배치를 분리하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Backblaze B2 jobs to avoid daily cap in RcloneView" class="img-large img-center" />

## 용량 초기화 후 실패한 동기화 복구하기

Backblaze B2 용량은 태평양 표준시 자정에 매일 초기화됩니다. 용량 초과 오류로 작업이 실패하면, RcloneView의 동기화는 멱등성을 가지므로 초기화 후 같은 작업을 다시 실행하면 이미 전송된 파일은 건너뛰고 중단된 지점부터 재개됩니다. Folder Compare 기능을 사용하면 소스와 대상을 비교하여 실패 전에 완료된 파일을 확인할 수 있습니다.

안전을 위해 작업 마법사 2단계에서 **Retry entire sync if fails**를 활성화하고(재시도 3회로 설정) 재시도 간격이 용량이 초기화될 만큼 충분히 길게 설정되어 있는지 확인하세요. Job History 탭을 정기적으로 확인하여 실패를 조기에 발견하고, 새 전송을 예약하기 전에 용량 상태를 검토하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Backblaze B2 job failure history in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. B2 작업이 실패한 후 Log 탭에서 `403 cap exceeded` 오류를 확인하세요.
3. Global Rclone Flags에 `--bwlimit`을 추가하여 일일 데이터 소비량을 제한하세요.
4. 일일 용량이 초기화된 후 동기화 작업을 다시 실행하세요. RcloneView는 이미 전송된 파일을 자동으로 건너뜁니다.

신중한 일정 관리와 대역폭 제한을 통해, Backblaze B2는 일일 용량 제한 내에서도 여전히 비용 효율적인 백업 대상으로 활용할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Backblaze B2를 AWS S3로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [RcloneView로 클라우드 동기화 네트워크 재시도 중단 문제 해결하기](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)
- [RcloneView의 사용자 지정 Rclone 플래그 및 고급 옵션](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />

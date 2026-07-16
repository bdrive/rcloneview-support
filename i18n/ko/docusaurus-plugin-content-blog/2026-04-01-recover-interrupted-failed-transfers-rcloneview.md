---
slug: recover-interrupted-failed-transfers-rcloneview
title: "RcloneView로 중단되거나 실패한 클라우드 전송 복구하는 방법"
authors:
  - tayson
description: "RcloneView에서 중단된 클라우드 전송을 재개하고, 부분 업로드에서 복구하며, 실패한 동기화 작업을 수정하세요. 완료되지 않는 대용량 파일 전송을 위한 실용적인 기법입니다."
keywords:
  - resume interrupted cloud transfer rclone
  - recover failed file transfer rcloneview
  - rclone resume partial upload
  - interrupted cloud sync recovery
  - rcloneview transfer failed
  - rclone retry failed transfers
  - cloud upload resume after disconnect
  - partial cloud transfer recovery
  - rclone resume large file upload
  - fix interrupted sync rcloneview
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 중단되거나 실패한 클라우드 전송 복구하는 방법

> 네트워크 단절, API 타임아웃, 노트북 절전 모드, 정전 등은 클라우드 전송을 중단시킵니다. RcloneView와 rclone은 처음부터 모든 것을 다시 업로드하지 않고도 안전하게 재개할 수 있는 내장 메커니즘을 갖추고 있습니다.

수 테라바이트를 클라우드로 전송하는 작업은 5분 만에 끝나는 작업이 아닙니다. 장시간 실행되는 작업 중에는 연결 중단이 거의 불가피합니다. 다행히도 RcloneView가 내부적으로 사용하는 rclone의 지능형 전송 엔진은 바로 이런 상황을 위해 설계되었습니다. 복사(Copy)와 동기화(Sync) 작업은 본질적으로 멱등성을 가지고 있어서, 다시 실행하면 이미 전송된 파일은 건너뛰고 중단된 지점부터 재개됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone이 중단된 전송을 처리하는 방식

Rclone은 각 파일을 전송하기 전에 소스와 대상을 비교합니다. 중단 후 복사(Copy) 또는 동기화(Sync) 작업을 다시 실행하면 다음과 같이 동작합니다.

- **이미 전송된 파일**은 건너뜁니다(크기+수정 시간 기준, 또는 체크섬이 활성화된 경우 체크섬 기준).
- **부분적으로 전송된 파일**은 정리된 후 처음부터 다시 전송됩니다.
- **아직 시작되지 않은 파일**은 대기열에 추가되어 재개된 실행에서 전송됩니다.

즉, 대부분의 경우 별도의 "재개" 버튼은 필요 없으며, 동일한 작업을 다시 실행하기만 하면 됩니다.

## 1단계 — 동일한 작업 다시 실행

중단 후 RcloneView에서 **작업(Jobs)**을 열고 동일한 작업에서 **실행(Run)**을 다시 클릭하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Re-run a failed transfer job in RcloneView" class="img-large img-center" />

RcloneView는 다음을 수행합니다.
1. 소스와 대상 목록을 가져옵니다.
2. 대상에 이미 존재하는 파일을 비교합니다.
3. 성공적으로 전송된 파일은 건너뜁니다.
4. 누락되거나 수정된 파일만 전송합니다.

10,000개 파일 작업 중 8,000개가 성공한 경우, 다시 실행하면 원래 소요 시간의 극히 일부만 걸립니다.

## 2단계 — 작업 기록에서 실패한 파일 확인

다시 실행하기 전에, RcloneView의 **작업 기록(Job History)**을 검토하여 무엇이 실패했는지 파악하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Review failed files in RcloneView job history" class="img-large img-center" />

로그에는 다음이 표시됩니다.
- 실패한 특정 파일
- 각 실패에 대한 오류 메시지
- 실패가 일시적(네트워크 오류)이었는지 지속적(권한, 경로 길이 초과)이었는지 여부

지속적인 오류는 다시 실행하기 전에 수정이 필요하며, 일시적인 오류는 재시도 시 해결됩니다.

## 3단계 — 부분적으로 업로드된 대용량 파일 처리

매우 큰 파일(수 GB)의 경우, 업로드 도중 중단되면 대상에 부분 파일이 남습니다. Rclone의 동작 방식은 공급자에 따라 다릅니다.

| 공급자 | 부분 파일 동작 |
|----------|-----------------------|
| Amazon S3 / S3 호환 | 멀티파트 업로드: 미완료 파트가 고아 상태로 남고, rclone은 처음부터 다시 시도합니다 |
| Google Drive | 재개 가능한 업로드: 세션이 유효하면 rclone이 파일 중간부터 재개할 수 있습니다 |
| OneDrive | 재개 가능한 업로드: Google Drive와 유사합니다 |
| Backblaze B2 | 대용량 파일 파트: 미완료 업로드는 B2 콘솔에서 확인할 수 있습니다 |

**S3 고아 멀티파트 업로드의 경우:** 이러한 업로드는 누적되어 비용이 발생합니다. 다음 방법으로 정리하세요.
- RcloneView 터미널: `rclone cleanup s3-remote:bucket-name`
- 또는 AWS 콘솔의 S3 → Your Bucket → Multipart uploads 메뉴를 통해

## 4단계 — `--retries` 및 `--low-level-retries` 사용

일시적인 오류로 실패하는 작업의 경우, RcloneView 작업에서 자동 재시도를 설정하세요.

**사용자 지정 플래그(Custom flags)** 필드에 다음을 추가합니다.
```
--retries 5 --retries-sleep 10s --low-level-retries 20
```

- `--retries 5` — 오류가 발생하면 전체 작업을 최대 5회까지 재시도
- `--retries-sleep 10s` — 재시도 사이에 10초 대기
- `--low-level-retries 20` — 개별 저수준 작업(API 호출)을 최대 20회까지 재시도

## 5단계 — 체크섬 불일치 처리

중단된 전송 후, 체크섬 검증과 함께 다시 실행하면 데이터 무결성을 보장할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer integrity with folder comparison" class="img-large img-center" />

RcloneView에서 작업 설정의 **체크섬 검증(Checksum verification)**을 활성화하세요. 이렇게 하면 rclone이 (크기/수정 시간뿐만 아니라) 파일 내용을 비교하도록 강제됩니다. 속도는 느려지지만, 부분적으로 작성된 파일이 확실히 감지되어 재전송됩니다.

## 6단계 — 파일을 삭제한 동기화에서 복구

동기화(Sync) 작업이 잘못된 방향으로 실행되어 소스가 아닌 대상이 원본을 덮어쓴 경우, 클라우드 공급자의 버전 관리 기능을 통해 복구해야 합니다.

- **Google Drive**: 휴지통 또는 버전 기록에서 복원(30~180일간 보관).
- **OneDrive**: 휴지통 또는 버전 기록에서 복원.
- **버전 관리가 활성화된 S3**: S3 콘솔에서 이전 버전으로 복원.
- **Backblaze B2**: 버전 기록이 활성화되어 있으면 복원.

이것이 초기 대용량 전송에는 동기화(Sync)보다 (비파괴적인) **복사(Copy)** 모드를 사용하는 것이 강력히 권장되는 이유입니다.

## 예방: 복원력을 갖춘 전송 구성

처음부터 전송 작업에 복원력을 구축하세요.

| 설정 | 권장 사항 |
|---------|----------------|
| 작업 모드 | 초기 마이그레이션에는 **복사(Copy)**를, 지속적인 유지 관리에는 동기화(Sync)를 사용하세요 |
| 재시도 | `--retries 5 --retries-sleep 10s`로 설정하세요 |
| 체크섬 | 중요한 데이터에 대해 활성화하세요 |
| 전송 수 | 불안정한 연결에서는 동시 전송 수를 낮추세요 |
| 일정 | 안정적인 네트워크 구간(야간, VPN 미사용 시)에 실행하세요 |
| 대역폭 | 네트워크 포화로 인한 타임아웃을 방지하기 위해 제한을 설정하세요 |

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 무엇이 왜 실패했는지 확인하기 위해 **작업 기록을 확인**하세요.
3. **작업을 다시 실행**하세요 — rclone이 완료된 파일을 자동으로 건너뜁니다.
4. 향후 복원력을 위해 **재시도 및 체크섬 검증을 설정**하세요.

대부분의 중단된 전송은 실행 버튼을 다시 클릭하는 것만으로 해결됩니다. 나머지는 rclone이 처리합니다.

---

**관련 가이드:**

- [잘못된 동기화 방향으로 인한 데이터 손실 방지](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)
- [체크섬으로 검증된 클라우드 마이그레이션](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [대용량 클라우드 전송 가속화](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />

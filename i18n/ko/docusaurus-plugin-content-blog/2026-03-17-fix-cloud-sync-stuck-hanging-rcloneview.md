---
slug: fix-cloud-sync-stuck-hanging-rcloneview
title: "클라우드 동기화가 99%에서 멈추거나 정지했을 때 해결하기 — RcloneView에서 멈춘 전송 문제 해결하기"
authors:
  - tayson
description: "클라우드 동기화가 몇 시간째 실행 중인데 멈춘 것처럼 보이나요? 진행률이 99%에서 완료되지 않는다면, 전송이 멈추는 원인과 해결 방법을 알아보세요."
keywords:
  - cloud sync stuck
  - cloud transfer hanging
  - sync stuck 99 percent
  - cloud upload frozen
  - rclone transfer stuck
  - cloud sync not completing
  - fix stalled cloud transfer
  - cloud sync timeout
  - cloud upload hanging
  - rclone sync frozen
tags:
  - RcloneView
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 클라우드 동기화가 99%에서 멈추거나 정지했을 때 해결하기 — RcloneView에서 멈춘 전송 문제 해결하기

> 진행률 표시줄이 99%를 가리키고 있습니다. 45분째 99%입니다. 작동 중인 걸까요? 멈춘 걸까요? 취소해야 할까요? 멈춘 클라우드 전송을 진단하고 해결하는 방법을 알아봅니다.

멈춘 클라우드 전송은 클라우드 동기화에서 가장 답답한 문제 중 하나입니다. 작업은 실행 중인 것처럼 보이지만 진행률 표시기는 거의 움직이지 않아서, 기다려야 할지 재시작해야 할지 판단하기 어렵습니다. 다행히도 멈춘 전송에는 거의 항상 명확하고 해결 가능한 원인이 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 흔한 원인들

### 1) 대용량 파일이 거의 완료된 경우

가장 흔한 "가짜 경고"입니다. 50GB 파일이 98% 완료됐다면 아직 1GB가 남아 있습니다. 초당 10MB 속도라면 100초가 더 걸리지만, 진행률 표시줄은 바이트가 아니라 파일 개수를 기준으로 측정하기 때문에 거의 움직이지 않습니다.

**해결 방법**: 전송 속도 표시기를 확인하세요. 바이트가 계속 흐르고 있다면 전송은 정상적으로 작동 중이며, 마지막 대용량 파일 처리가 느릴 뿐입니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Check if bytes are flowing" class="img-large img-center" />

### 2) API 속도 제한(Rate Limit)에 의한 조절

Google Drive, OneDrive 등 일부 제공업체는 API 한도에 도달하면 전송을 조절(throttle)합니다. 전송 속도가 극도로 느려지지만 실패하지는 않습니다.

**해결 방법**: 동시 전송 수를 줄이세요. 내장 터미널에서 `--tpslimit`을 추가하세요.

### 3) 대용량 파일에서의 네트워크 타임아웃

일부 제공업체는 오래 실행되는 업로드를 조용히 끊어버립니다. 전송은 활성 상태로 보이지만 실제로는 데이터가 이동하지 않습니다.

**해결 방법**: 리모트 설정에서 타임아웃을 구성하세요. `--timeout`을 사용하면 정지 상태를 더 빨리 감지할 수 있습니다.

### 4) 다른 프로세스가 파일을 잠근 경우

원본 파일이 다른 애플리케이션에서 열려 있는 경우입니다. 전송이 접근 권한을 기다립니다.

**해결 방법**: 해당 파일을 사용 중일 수 있는 애플리케이션을 종료하거나, 필터를 사용해 사용 중인 파일을 제외하세요.

### 5) 제공업체 측 처리 지연

일부 제공업체는 업로드된 파일에 대해 완료를 확정하기 전에 바이러스 검사, 인덱싱 등의 처리를 수행합니다. 이로 인해 업로드 완료와 확정 사이에 지연이 발생합니다.

**해결 방법**: 기다리세요. 보통 1~5분 내에 해결됩니다.

### 6) 메모리 부족

전송 목록이 매우 방대한 경우(수백만 개 파일) 사용 가능한 메모리가 부족해져 처리 속도가 크게 느려질 수 있습니다.

**해결 방법**: 전송을 폴더 단위로 더 작은 배치로 나누세요.

## 진단 단계

### 작업 기록 확인

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check job status" class="img-large img-center" />

### 터미널로 상세 출력 확인

RcloneView의 터미널에서 동일한 작업을 `-vv` 플래그와 함께 실행해 상세한 진단 출력을 확인하세요.

### 취소 후 재실행

전송이 정말로 멈췄다면 작업을 취소하고 다시 실행하세요. RcloneView는 이미 전송된 파일을 건너뛰고 멈췄던 지점부터 재개합니다.

## 예방 방법

- 리모트 설정에서 **적절한 타임아웃 설정**
- 속도 제한을 피하기 위해 **적당한 동시성 사용** (4~8개 전송)
- **대용량 작업을 작은 배치로 분할**
- **재시도 일정 예약** — 야간 작업이 멈추면 두 번째 예약 실행이 이를 따라잡습니다

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **전송 속도를 확인**하세요 — 바이트가 흐르고 있다면 정상 작동 중입니다.
3. 속도 제한에 걸렸다면 **동시성을 줄이세요**.
4. 정말로 멈췄다면 **취소 후 재실행**하세요.

99%에서 완료되지 않고 멈춰 있는 경우는 거의 항상 마지막 대용량 파일이 느리게 마무리되고 있는 것입니다.

---

**관련 가이드:**

- [느린 클라우드 업로드 해결하기](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [실패한 전송 재개하기](https://rcloneview.com/support/blog/resume-failed-cloud-transfers-rcloneview)
- [클라우드 API 속도 제한 설명](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)

<CloudSupportGrid />

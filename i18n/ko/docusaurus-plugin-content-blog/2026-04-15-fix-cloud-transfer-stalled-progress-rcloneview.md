---
slug: fix-cloud-transfer-stalled-progress-rcloneview
title: "클라우드 전송 진행 멈춤 문제 해결 — RcloneView로 해결하는 방법"
authors:
  - tayson
description: "RcloneView에서 멈추거나 정지된 클라우드 전송을 해결하세요 — 멈춘 동기화 작업을 진단하고, 타임아웃을 해결하며, 데이터 손실 없이 전송을 재시작합니다."
keywords:
  - cloud transfer stuck
  - sync stalled fix
  - RcloneView transfer freeze
  - cloud upload stuck
  - fix stalled sync
  - rclone transfer timeout
  - cloud backup not progressing
  - resolve frozen transfer
  - cloud transfer hang
  - rclone timeout recovery
tags:
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 클라우드 전송 진행 멈춤 문제 해결 — RcloneView로 해결하는 방법

> 몇 시간째 99%에 머물러 있는 전송은 특정한 근본 원인을 나타냅니다 — RcloneView는 멈춤을 진단하고 데이터 손실 없이 깔끔하게 재시작할 수 있는 모니터링 및 제어 도구를 제공합니다.

완료 직전에 멈추는 클라우드 전송이나 끝없이 실행되는 동기화 작업은 가장 골치 아픈 클라우드 관리 문제 중 하나입니다. 전송 멈춤은 일반적으로 대용량 파일이 API 타임아웃 한도에 걸리거나, rclone의 재시도 로직이 복구하지 못하는 네트워크 중단이 발생하거나, 공급자 측의 제한으로 연결이 멈추는 경우에 발생합니다. RcloneView는 무슨 일이 일어나고 있는지 명확히 보여주고 정확하게 개입할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 멈춤 진단하기

RcloneView 하단 정보 뷰에서 **전송 중(Transferring)** 탭을 엽니다. 이 패널은 전송 속도, 파일 개수, 현재 처리 중인 특정 파일 등 실시간 진행 상황과 함께 활성 작업을 보여줍니다. 여기서 멈춤 현상은 바로 확인할 수 있습니다 — 특정 파일에서 진행 상황 변화 없이 속도가 0 B/s로 떨어집니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView Transferring tab showing a stalled cloud transfer" class="img-large img-center" />

**로그(Log)** 탭으로 전환하면 오류 메시지를 확인할 수 있습니다. 일반적인 멈춤 원인은 타임스탬프와 함께 다음과 같이 나타납니다:
- **"too many requests"** — API 속도 제한이 전송을 제한하고 있음
- **"connection reset by peer"** — 네트워크 중단으로 활성 세션이 끊어짐
- **"EOF"** 또는 타임아웃 메시지 — 대용량 파일 업로드 중 공급자가 연결을 종료함

수 GB 단위의 동영상 파일이나 데이터베이스 덤프 같은 매우 큰 파일의 경우, 문제는 흔히 멀티파트 업로드 조립 중 공급자 측 세션 타임아웃에서 발생합니다. 업로드는 완료되지만 완료된 파트를 승인하기 전에 공급자의 세션이 만료되어 rclone이 무한정 대기하게 됩니다.

## 멈춘 전송 복구하기

전송 중 탭에서 활성 작업의 **취소(Cancel)**를 클릭하여 멈춘 작업을 취소합니다. RcloneView의 동기화 및 복사 작업은 안전한 재시작을 위해 설계되었습니다 — 동일한 작업을 다시 실행하면 rclone이 대상에 이미 존재하는 파일을 비교하여 성공적으로 전송된 파일은 건너뜁니다. 멈췄던 파일(및 시작되지 않은 파일)만 다시 시도됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Canceling and restarting a stalled transfer job in RcloneView" class="img-large img-center" />

S3 호환 백엔드로 전송하는 특정 대용량 파일에서 멈춤이 계속 발생하는 경우, RcloneView의 전역 rclone 플래그(설정 > 내장 Rclone > 전역 Rclone 플래그)에서 청크 크기를 늘리세요: `--s3-chunk-size 256M`을 추가하면 대용량 파일 조립에 필요한 API 호출 총 횟수를 줄일 수 있습니다.

## 향후 멈춤 방지하기

작업 설정(2단계: 고급 설정 > **실패 시 전체 동기화 재시도**)에서 재시도 횟수를 3 이상으로 설정하세요 — 일시적인 네트워크 문제가 즉시 작업 실패로 이어지지 않고 자동으로 재시도되도록 합니다. 느리거나 불안정한 연결(VPN, 모바일 핫스팟)을 통한 전송의 경우, **파일 전송 수(동시 전송 수)**를 줄이면 회선의 경합이 줄어듭니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing recovered transfers after stall resolution in RcloneView" class="img-large img-center" />

**작업 기록(Job History)** 탭은 시간에 따른 패턴을 보여줍니다 — 동일한 작업이 하루 중 특정 시간대에 지속적으로 멈춘다면, 원인은 피크 시간대의 공급자 측 속도 제한일 가능성이 높습니다. 일정을 비피크 시간대로 조정하면 별도의 설정 변경 없이 이 문제를 해결할 수 있습니다.

## 시작하기

1. **전송 중 탭**에서 전송을 모니터링합니다 — 특정 파일에서 0 B/s 속도를 확인합니다.
2. 근본 원인(타임아웃, 속도 제한, 네트워크 재설정)을 나타내는 오류 메시지를 **로그 탭**에서 확인합니다.
3. 작업을 취소하고 재시작합니다 — rclone은 완료된 파일을 건너뛰고 멈춘 지점부터 재개합니다.
4. 향후 멈춤을 방지하기 위해 고급 설정에서 재시도 횟수를 늘리고 청크 크기를 조정합니다.

멈춘 전송은 거의 항상 복구 가능합니다 — 핵심은 원인이 공급자 측인지, 네트워크 측인지, 설정 관련인지를 파악한 후 그에 맞는 해결책을 적용하는 것입니다.

---

**관련 가이드:**

- [RcloneView로 중단되거나 실패한 클라우드 전송 복구하기](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [느린 클라우드 업로드 해결 — RcloneView로 속도 최적화](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [RcloneView로 작업 기록 및 전송 로그 모니터링](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />

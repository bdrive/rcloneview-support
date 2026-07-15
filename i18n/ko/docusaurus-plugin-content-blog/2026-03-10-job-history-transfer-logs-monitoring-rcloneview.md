---
slug: job-history-transfer-logs-monitoring-rcloneview
title: "작업 기록과 로그로 클라우드 전송 추적하기 — RcloneView에서 모든 동기화와 백업 모니터링하기"
authors:
  - tayson
description: "RcloneView의 작업 기록과 전송 로그로 모든 클라우드 동기화, 복사, 백업 작업을 추적하세요. 성공, 실패, 성능을 시간에 따라 모니터링할 수 있습니다."
keywords:
  - cloud transfer history
  - sync job log
  - cloud backup monitoring
  - transfer log cloud
  - rclone job history
  - cloud sync monitoring
  - backup job tracking
  - cloud transfer status
  - rclone transfer log
  - cloud job monitoring tool
tags:
  - RcloneView
  - monitoring
  - job-history
  - feature
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 작업 기록과 로그로 클라우드 전송 추적하기 — RcloneView에서 모든 동기화와 백업 모니터링하기

> 지난주에 백업을 예약했습니다. 실제로 실행되었나요? 성공적으로 완료되었나요? 몇 개의 파일이 전송되었나요? 작업 기록이 없다면 그저 추측할 뿐입니다. RcloneView를 사용하면 모든 작업이 흔적을 남깁니다.

클라우드 동기화를 설정하는 것은 첫 번째 단계입니다. 그것이 안정적으로 작동한다는 것을 아는 것은 두 번째 단계이며, 어쩌면 더 중요할 수도 있습니다. RcloneView의 작업 기록은 모든 실행을 추적합니다. 언제 실행되었는지, 얼마나 걸렸는지, 몇 개의 파일이 전송되었는지, 오류가 발생했는지까지 모두 기록됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 작업 기록이 중요한 이유

### 조용한 실패

가장 나쁜 백업 실패는 알아채지 못하는 실패입니다. 흔히 발생하는 조용한 문제들:

- **OAuth 토큰 만료** — 클라우드 제공업체가 접근 권한을 철회하여 작업이 조용히 실패합니다.
- **디스크 공간 부족** — 전송 도중 대상 저장 공간이 부족해집니다.
- **속도 제한** — 제공업체가 전송을 제한하여 일부 파일이 건너뛰어집니다.
- **네트워크 타임아웃** — 간헐적인 연결 문제로 부분 전송이 발생합니다.

작업 기록이 없다면 이런 문제들은 복원이 필요한 순간까지 눈에 띄지 않으며, 그제서야 "백업"이 몇 달이나 지난 것임을 발견하게 됩니다.

### 규정 준수와 감사

일부 업계에서는 백업이 실제로 수행되었다는 문서화된 증거를 요구합니다. 작업 기록은 다음을 제공합니다:

- 모든 작업 실행에 대한 타임스탬프.
- 파일 수와 전송량.
- 성공/실패 상태.
- 문제 해결을 위한 오류 상세 정보.

## RcloneView의 작업 기록

### 과거 실행 내역 보기

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view" class="img-large img-center" />

각 항목에는 다음이 표시됩니다:

- **작업 이름** — 어떤 동기화/복사/이동 작업이 실행되었는지.
- **시작 시간** — 실행이 시작된 시점.
- **소요 시간** — 걸린 시간.
- **상태** — 성공, 부분 성공, 또는 실패.
- **전송된 파일** — 이동된 파일 수.
- **데이터 용량** — 전송된 총 바이트 수.
- **오류** — 오류 발생 건수(있는 경우).

### 추세 파악하기

시간이 지나면서 작업 기록은 다음과 같은 패턴을 드러냅니다:

- **소요 시간 증가** — 데이터셋이 커지고 있거나 성능이 저하되고 있음을 의미합니다.
- **간헐적 실패** — 특정 날짜에 발생하는 네트워크 또는 제공업체 문제.
- **전송 건수 0** — 변경 사항이 없음(증분 동기화에서는 정상)이거나, 작업이 제대로 작동하지 않는 것.
- **오류 급증** — 속도 제한, 권한 문제, 또는 저장 공간 부족.

## 실시간 전송 모니터링

작업이 실행되는 동안 진행 상황을 실시간으로 모니터링할 수 있습니다:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring" class="img-large img-center" />

실시간 모니터링은 다음을 보여줍니다:

- **현재 속도** — MB/s 또는 GB/s.
- **진행 중인 전송** — 병렬로 진행되는 파일 작업 수.
- **진행률** — 완료 백분율.
- **예상 완료 시간** — 남은 시간 예측.
- **오류** — 실시간 오류 발생 건수.

## 실패 알림

v1.3에서는 Slack, Discord, Telegram 알림 기능이 추가되었습니다. 다음과 같은 상황이 발생했을 때 즉시 알 수 있도록 알림을 설정하세요:

- 예약된 작업이 실패했을 때.
- 작업이 오류와 함께 완료되었을 때.
- 작업이 성공적으로 완료되었을 때(선택적 확인 알림).

이것이 바로 "아마 백업이 실행됐을 것"과 "백업이 확실히 실행됐다 — Slack 메시지를 받았으니까"의 차이입니다.

## 로그로 문제 해결하기

작업이 실패하면 전송 로그가 정확한 원인을 알려줍니다:

- **403 Forbidden** — 속도 제한 또는 권한 문제.
- **404 Not Found** — 전송 중 소스 파일이 삭제됨.
- **429 Too Many Requests** — 제공업체의 속도 제한.
- **Timeout** — 네트워크 연결 문제.
- **디스크 공간 부족** — 대상 저장 공간 부족.

## 모범 사례

### 매주 작업 기록 검토하기

매주 월요일 2분만 투자해 지난주의 작업 실행 내역을 검토하세요. 문제가 위기로 번지기 전에 잡아낼 수 있습니다.

### 실패 알림 설정하기

수동 확인에만 의존하지 마세요. 작업 실패에 대해 Slack이나 Discord 알림을 설정하세요.

### 오류 발생 후 검증하기

작업에서 오류가 보고되면 폴더 비교 기능을 사용하여 정확히 어떤 파일이 누락되었거나 다른지 확인하세요:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify after job errors" class="img-large img-center" />

### 실패한 전송 재시도하기

v1.3의 재시도 기능은 실패한 파일 전송을 자동으로 재실행할 수 있습니다. 문제가 지속적으로 발생한다면 로그를 통해 근본 원인을 조사하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **동기화/백업 작업을 생성하고 예약**하세요.
3. 작업 기록을 통해 **실행을 모니터링**하세요.
4. 실패 알림을 위해 **알림을 설정**하세요.
5. **매주 검토**하세요 — 신뢰하되 확인하세요.

모니터링하지 않는 백업은 신뢰할 수 없는 백업입니다.

---

**관련 가이드:**

- [동기화 작업 만들기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />

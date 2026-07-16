---
slug: cloud-api-rate-limits-explained-rcloneview
title: "클라우드 API 속도 제한 완전 정리 — 전송이 실패하는 이유와 해결 방법"
authors:
  - tayson
description: "Google Drive 403 오류? OneDrive 속도 제한? 클라우드 API 속도 제한이 무엇인지, 왜 전송이 실패하는지, 그리고 RcloneView에서 이를 피하도록 설정하는 방법을 알아보세요."
keywords:
  - cloud api rate limit
  - google drive 403 error
  - onedrive throttling
  - s3 rate limit
  - cloud transfer failed
  - api rate limit exceeded
  - cloud sync error fix
  - google drive quota exceeded
  - dropbox rate limit
  - cloud storage api limits
tags:
  - RcloneView
  - cloud-storage
  - troubleshooting
  - api
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 클라우드 API 속도 제한 완전 정리 — 전송이 실패하는 이유와 해결 방법

> 클라우드 동기화가 처음에는 빠르게 시작되다가 갑자기 느려집니다. "Rate limit exceeded", "403 Forbidden", "Too many requests" 같은 오류 메시지가 나타나고, 전송이 60%에서 멈춰버립니다. 무슨 일이 일어난 걸까요?

모든 클라우드 스토리지 제공업체는 API와 상호작용할 수 있는 속도를 제한합니다. 이러한 속도 제한은 인프라를 악용으로부터 보호하기 위한 것이지만, 대량의 데이터를 이동하는 정상적인 사용자에게도 영향을 미칩니다. 이러한 제한을 이해하고 도구가 이를 준수하도록 설정하는 것이, 안정적으로 완료되는 전송과 중간에 실패하는 전송의 차이를 만듭니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## API 속도 제한이란 무엇인가?

클라우드 스토리지에서 파일을 업로드, 다운로드, 목록 조회, 수정할 때 도구는 API 호출을 수행합니다. 각 작업은 하나 이상의 API 요청입니다. 속도 제한은 일정 시간 동안 만들 수 있는 요청 수의 상한선을 정합니다.

### 제한의 유형

- **초당 요청 수** — 초당 API 호출 횟수 (예: S3: 프리픽스당 초당 3,500건의 PUT 요청).
- **일일 요청 수** — 하루 총 API 호출 횟수 (예: Google Drive: 앱 기준 하루 약 100억 건의 쿼리이지만, 사용자당은 훨씬 적음).
- **일일 대역폭** — 총 데이터 전송량 (예: Google Drive: 하루 약 750GB 업로드).
- **동시 연결 수** — 허용되는 동시 연결 수.
- **버스트 제한** — 속도 제한이 걸리기 전에 허용되는 단기 급증치.

## 제공업체별 속도 제한

### Google Drive

| 제한 | 값 |
|-------|-------|
| 일일 업로드 | 약 750GB |
| 일일 다운로드 | 약 10TB |
| 100초당 API 쿼리 | 사용자당 1,000건 |
| 초당 파일 작업 | 약 10건 |
| 오류 코드 | 403 (userRateLimitExceeded), 429 |

Google Drive는 가장 공격적으로 속도를 제한하는 제공업체 중 하나입니다. `403`이나 `userRateLimitExceeded`가 보인다면 한계에 부딪힌 것입니다.

### OneDrive / SharePoint

| 제한 | 값 |
|-------|-------|
| API 호출 | 동적 스로틀링 |
| 동시 업로드 | 약 4건 권장 |
| 오류 코드 | 429 (Too Many Requests), 503 |

Microsoft는 동적 스로틀링을 사용합니다 — 세션 내 사용량이 늘어날수록 제한이 점점 엄격해집니다.

### AWS S3

| 제한 | 값 |
|-------|-------|
| PUT/COPY/POST/DELETE | 프리픽스당 초당 3,500건 |
| GET/HEAD | 프리픽스당 초당 5,500건 |
| 일일 대역폭 제한 없음 | 무제한 |
| 오류 코드 | 503 (Slow Down) |

S3는 가장 관대합니다. 수천 개의 소용량 파일 작업을 수행하지 않는 한 대부분의 사용자는 속도 제한에 걸리지 않습니다.

### Dropbox

| 제한 | 값 |
|-------|-------|
| API 호출 | 앱 기준 분당 약 300건 |
| 세션당 업로드 | 점진적 스로틀링 |
| 오류 코드 | 429 |

### Backblaze B2

| 제한 | 값 |
|-------|-------|
| API 호출 | 요금제에 따라 다름 |
| 동시 업로드 | 하드 리밋 없음 |
| 대역폭 | 사용량 기준 과금, 상한 없음 |

B2는 매우 관대하며, 속도 제한이 문제가 되는 경우는 드뭅니다.

## RcloneView의 속도 제한 처리 방식

### 자동 재시도

rclone이 속도 제한 오류(429, 403, 503)를 받으면 자동으로 다음을 수행합니다.

1. 해당 전송을 일시 중지합니다.
2. 서버가 지정한 시간만큼 대기합니다(또는 지수 백오프를 사용합니다).
3. 작업을 재시도합니다.

전송 로그에서 "rate limited, waiting X seconds"로 이를 확인할 수 있습니다.

### 병렬 전송 수 설정

병렬 전송 수를 줄여 API 요청 속도를 낮출 수 있습니다.

| 제공업체 | 권장 병렬 전송 수 |
|----------|-------------------------------|
| Google Drive | 3–4 |
| OneDrive | 4 |
| Dropbox | 3–4 |
| S3 | 8–32 |
| B2 | 8–16 |

### 대역폭 제한

[대역폭 제한](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)을 사용하여 데이터 전송 속도를 제어하고 간접적으로 API 호출 수를 줄일 수 있습니다.

### v1.3 실패한 전송 재시도

속도 제한 처리에도 불구하고 전송이 실패하는 경우, v1.3의 재시도 기능이 작업 완료 후 실패한 파일을 다시 실행할 수 있습니다.

## 속도 제한을 피하는 전략

### 1) 비성수기 시간대에 전송하기

다른 사용자(그리고 자신의 앱)가 API 호출을 하지 않는 야간이나 주말에 대용량 전송을 예약하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers during off-hours" class="img-large img-center" />

### 2) 여러 날에 걸쳐 분산하기

Google Drive의 일일 업로드 제한인 750GB를 초과하는 마이그레이션의 경우:

- 1일차: 폴더 A 전송 (500GB).
- 2일차: 폴더 B 전송 (500GB).
- 3일차: 폴더 C 전송 및 전체 검증.

### 3) 자체 API 자격 증명 사용하기

Google Drive를 비롯한 일부 제공업체는 공유 자격 증명 대신 자체 OAuth 앱 자격 증명을 사용할 때 더 높은 속도 제한을 허용합니다. 더 높은 할당량을 위해 자체 Google API 프로젝트를 구성하세요.

### 4) 파일 검사 줄이기

초기 대량 업로드의 경우, 대상 검사를 건너뛰세요. 이렇게 하면 각 파일이 이미 존재하는지 확인하는 API 호출이 절반으로 줄어듭니다.

### 5) 소용량 파일 묶기

소용량 파일이 수천 개 있다면, 전송 전에 ZIP으로 압축하는 것을 고려하세요. 1GB짜리 ZIP 파일 하나는 API 호출 1건으로 끝나지만, 개별 파일 10,000개를 업로드하면 API 호출 10,000건이 발생합니다.

## 속도 제한 문제 모니터링

전송 진행 상황을 지켜보며 스로틀링 징후를 확인하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor for rate limit errors" class="img-large img-center" />

경고 신호:

- 강하게 시작한 전송 속도가 갑자기 떨어짐.
- 전송 중 주기적으로 일시 중지됨.
- 로그에 429나 403 코드가 포함된 오류 메시지가 나타남.
- 전송 속도가 빨라짐 → 느려짐 → 빨라짐을 반복함.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 사용하는 클라우드 제공업체에 맞게 **적절한 병렬 전송 수를 설정**하세요.
3. **대용량 전송을 비성수기 시간대**에 예약하세요.
4. **진행 상황을 모니터링**하며 스로틀링 지표를 확인하세요.
5. 안정성을 위해 (v1.3의) **재시도 기능을 사용**하세요.

속도 제한은 사라지지 않지만, 올바른 설정을 사용하면 그 안에서도 안정적으로 작업할 수 있습니다.

---

**관련 가이드:**

- [Google Drive 403 속도 제한 오류 해결하기](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [대역폭 제한 설정하기](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

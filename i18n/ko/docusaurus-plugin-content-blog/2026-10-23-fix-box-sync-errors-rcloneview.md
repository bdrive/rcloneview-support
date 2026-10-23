---
slug: fix-box-sync-errors-rcloneview
title: "Box 동기화 오류 해결 — RcloneView로 해결하는 방법"
authors:
  - kai
description: "RcloneView로 Box 동기화 오류 해결: Dry Run, 로그, 작업 기록을 활용해 OAuth, Box for Business, 속도 제한, 파일 이름 문제를 해결하세요."
keywords:
  - Box 동기화 오류 해결
  - Box 동기화 안 됨
  - Box 속도 제한 오류
  - Box OAuth 토큰 만료
  - Box for Business rclone
  - RcloneView box
  - Box 문제 해결
  - Box 전송 실패
tags:
  - RcloneView
  - box
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box 동기화 오류 해결 — RcloneView로 해결하는 방법

> RcloneView에 이미 내장된 도구로 실패한 Box 전송을 진단하는 실용적인 체크리스트입니다.

Box 동기화 작업은 대개 몇 가지 반복되는 이유로 실패합니다. 만료된 로그인, 잘못된 계정 유형, 제한된 API 호출, 또는 Box가 일반 문서와 다르게 처리하는 파일 등입니다. RcloneView는 작업 기록, 로그, 내장 터미널을 제공하여 이러한 원인을 빠르게 구분할 수 있게 해 줍니다. 또한 RcloneView는 하나의 창에서 90개 이상의 제공자를 마운트하고 동기화할 수 있으며 Windows, macOS, Linux에서 동작하므로, 같은 파일을 다른 리모트에서 테스트해 볼 수도 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 작업 기록과 로그 탭부터 확인하기

작업 기록(Job History)을 열어 실패한 실행의 상태(Completed, Errored, Canceled)와 전송된 크기, 파일 수를 확인하세요. 일부만 전송되었다면 파일별 문제일 가능성이 높습니다. 작업이 즉시 실패한다면 대개 인증이나 설정 문제입니다.

자세한 내용은 하단의 로그(Log) 탭으로 전환하세요. 더 많은 정보를 기록하려면 Embedded Rclone 설정에서 rclone 로깅을 활성화하고 레벨을 DEBUG로 설정한 다음, 내장 rclone을 재시작하고 오류를 재현하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView에서 실패한 작업 기록 검토" class="img-large img-center" />

## 재인증하고 계정 유형 확인하기

모든 요청이 실패한다면 OAuth 토큰이 만료되었거나 취소되었을 수 있습니다. 리모트 관리자(Remote Manager)를 열고 Box 리모트를 편집한 다음, 브라우저를 통해 다시 로그인하세요.

로그인은 되지만 폴더가 보이지 않거나 권한 오류가 발생한다면 계정 유형을 확인하세요. Box for Business는 리모트에 `box_sub_type = enterprise` 설정이 필요합니다. 비즈니스 계정에 개인 계정 설정을 사용하는 것은 혼란스러운 결과가 나타나는 흔한 원인입니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Box 리모트 설정 편집" class="img-large img-center" />

## 속도 제한과 대용량 작업 처리하기

수천 개의 작은 파일을 한꺼번에 처리하면 Box가 요청을 제한할 수 있습니다. 작업의 고급 설정(Advanced Settings)에서 파일 전송 수와 동등성 검사기(equality checkers) 수를 낮추세요(느린 백엔드에는 4개 이하 권장). 일시적인 실패가 자동으로 복구되도록 재시도는 기본값인 3으로 두세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring 탭에서 전송 모니터링" class="img-large img-center" />

## 문제가 되는 파일 걸러내기

Box Notes와 같은 온라인 전용 항목은 일반 파일이 아닙니다. 필터링 단계의 사전 정의된 Box Docs 필터를 사용하면 이러한 항목이 제외되어 더 이상 작업을 실패시키지 않습니다. 사용자 지정 규칙을 추가하거나, 최대 파일 크기를 설정하거나, 조사하는 동안 문제가 되는 폴더를 제외할 수도 있습니다. 이후 Dry Run을 실행하여 복사될 항목을 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="폴더를 비교하여 동기화에 실패한 파일 찾기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 작업 기록과 로그 탭에서 정확한 오류를 확인하세요.
3. Box 리모트를 재인증하고, 해당되는 경우 Box for Business 설정을 확인하세요.
4. 동시 실행 수를 낮추고 Box Docs 필터를 적용한 다음, Dry Run을 실행하고 다시 실행하세요.

대부분의 Box 실패는 로그를 몇 분만 살펴보면 드러나는 설정 문제입니다.

---

**관련 가이드:**

- [Box 업로드 오류 해결](https://rcloneview.com/support/blog/fix-box-upload-errors-rcloneview)
- [OAuth 토큰 만료 클라우드 동기화 오류 해결](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)
- [클라우드 API 속도 제한 오류 해결](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />

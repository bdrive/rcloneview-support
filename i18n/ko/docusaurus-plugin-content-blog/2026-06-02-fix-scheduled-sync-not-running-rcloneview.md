---
slug: fix-scheduled-sync-not-running-rcloneview
title: "예약 동기화가 실행되지 않는 문제 해결 — RcloneView 자동화 클라우드 작업 문제 진단"
authors:
  - steve
description: "시작되지 않거나 잘못된 시간에 실행되는 RcloneView 예약 동기화 작업을 진단하고 해결합니다. 라이선스 확인, 크론 구문, 시작 설정, 로그 검사를 다룹니다."
keywords:
  - rcloneview scheduled sync not running
  - fix scheduled cloud backup rcloneview
  - rcloneview schedule troubleshooting
  - cloud sync cron job not starting
  - automated cloud backup not running
  - rcloneview plus schedule fix
  - fix cloud sync schedule
  - rcloneview crontab troubleshooting
tags:
  - troubleshooting
  - tips
  - automation
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 예약 동기화가 실행되지 않는 문제 해결 — RcloneView 자동화 클라우드 작업 문제 진단

> RcloneView의 자동 백업이 예약된 시간에 실행되지 않거나 아예 시작되지 않는다면, 이 가이드는 라이선스 확인부터 크론 구문, 시작 구성까지 가능한 모든 원인을 순서대로 살펴봅니다.

예약 기반 동기화는 RcloneView의 가장 실용적인 PLUS 기능 중 하나입니다. 작업을 한 번 구성하면 수동 개입 없이 크론탭 일정에 따라 실행됩니다. 이 기능이 작동을 멈췄다면 원인은 거의 항상 다음 네 가지 중 하나입니다 — 라이선스 문제, 잘못 구성된 일정, 작업이 실행될 시점에 앱이 실행되고 있지 않음, 또는 작업 자체의 조용한 오류입니다. 각 계층을 체계적으로 살펴보면 몇 분 안에 문제를 해결할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 확인 1: PLUS 라이선스가 활성 상태인지 확인

예약 기반 동기화는 PLUS 또는 평생 라이선스에서만 제공되는 기능입니다. FREE 라이선스는 크론탭 예약을 활성화하지 않으며, FREE 라이선스로 저장된 작업은 일정이 조용히 비활성화됩니다. RcloneView 창 하단의 푸터 바를 확인하세요 — rclone 버전 및 연결 정보와 함께 "FREE License" 또는 "PLUS License"가 표시됩니다.

라이선스가 FREE로 표시되거나 만료된 경우, **Help → Activate License**로 이동하여 이메일 주소와 라이선스 키를 다시 입력하세요. 할인 쿠폰은 이메일 주소당 1회만 사용할 수 있으므로, 동일한 쿠폰으로 중복 활성화를 시도해도 구독이 연장되지 않습니다 — 최근 갱신 후에도 키가 유효하지 않은 것으로 표시되면 지원팀에 문의하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Verifying a sync job is configured and ready to run in RcloneView" class="img-large img-center" />

PLUS가 활성 상태인지 확인한 후, Job Manager에서 해당 작업을 다시 열고 4단계(예약)에 빈 필드가 아닌 실제 값이 입력되어 있는지 확인하세요. 이전에 저장된 작업은 PLUS가 활성화된 상태에서 편집하고 다시 저장해야 일정이 고정될 수 있습니다.

## 확인 2: 작업 4단계의 크론탭 구문 검토

RcloneView의 스케줄러는 다섯 개의 크론탭 스타일 필드를 사용합니다: **Minute**(0–59), **Hour**(0–23), **Day of Week**(0–6, 일요일=0), **Day of Month**(1–31), **Month**(1–12). 필드를 비워두면 "매번"을 의미하고, 값을 입력하면 "이때만"을 의미합니다. 가장 흔한 잘못된 구성은 잘못된 필드에 `0`을 입력하거나, Day of Week와 Day of Month를 절대 일치하지 않는 방식으로 함께 지정하는 등 호환되지 않는 조합을 사용하는 것입니다.

RcloneView는 4단계에 **Simulate Schedule** 버튼을 바로 제공합니다. 저장하기 전에 이 버튼을 클릭하여 다음 몇 번의 실행 시간을 미리 확인하세요. 미리보기에서 예상치 못한 결과가 나타나면 — 매분 실행되거나, 예상한 날짜를 건너뛰거나, 앞으로 예정된 실행이 전혀 표시되지 않는 경우 — 필드를 조정하고 다시 시뮬레이션하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring crontab schedule fields in RcloneView Job Manager Step 4" class="img-large img-center" />

목록 구문(`1,3,5`), 범위 구문(평일의 경우 `1-5`), 단계 구문(4시간마다의 경우 `0-23/4`)이 모두 지원됩니다. 예를 들어 매일 자정에 실행되는 작업은 Minute=`0`, Hour=`0`으로 설정하고 나머지 필드는 비워둡니다.

## 확인 3: 예약 시간에 RcloneView가 실행 중인지 유지

예약된 작업이 실행되려면 RcloneView가 **열려서 실행 중**이어야 합니다 — 백그라운드 시스템 서비스나 데몬으로 동작하지 않습니다. 컴퓨터가 절전 모드이거나, 사용자가 로그아웃했거나, 앱이 닫혀 있으면 그 시간 동안 예정된 일정은 조용히 건너뛰어집니다.

해결 방법은 간단합니다. **Settings → General**에서 **Launch at login**을 활성화하여 OS가 부팅될 때 앱이 자동으로 시작되도록 하세요. **Start minimized**와 함께 사용하면 RcloneView가 데스크톱을 방해하지 않고 시스템 트레이에서 시작되면서도 백그라운드에서 예약된 모든 작업을 계속 실행합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView running a scheduled sync transfer in the background" class="img-large img-center" />

대상 컴퓨터가 밤마다 정기적으로 종료된다면, 일정을 업무 시간에 맞게 조정하거나 작업 예정 시간 전에 절전 모드에서 깨어나도록 OS를 구성하는 것을 고려하세요.

## 확인 4: 작업 기록 및 전송 로그 검사

작업이 실행된 것처럼 보였지만 결과물이 없는 경우, 하단 정보 뷰의 **Job History** 탭을 가장 먼저 확인하세요. 모든 실행 기록에 대해 상태(Completed / Errored / Canceled), 소요 시간, 전송 속도, 파일 수가 기록됩니다. "Errored" 항목만 표시하도록 기록을 필터링하여 실패한 실행을 찾아내세요. 각 기록은 관련 로그 출력에 연결되어 있으며, 여기서 네트워크 시간 초과, 인증 오류, 경로를 찾을 수 없음, 대상 권한 문제 등 구체적인 실패 원인을 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled sync execution records and status" class="img-large img-center" />

더 깊은 진단을 위해 **Settings → Embedded Rclone**에서 **Enable rclone Logging**을 활성화하고 로그 수준을 **INFO** 또는 **DEBUG**로 설정하세요. 다음에 작업이 실행되면(또는 수동으로 트리거하면) 로그 파일에 정확한 오류 코드와 실패를 일으킨 파일을 포함한 전체 rclone 출력이 기록되어, 간헐적인 문제에서도 근본 원인 분석을 쉽게 만들어줍니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 푸터 바를 확인하세요 — 크론탭 예약에는 PLUS 라이선스가 필요합니다.
3. 해당 작업 열기 → Edit → Step 4로 이동한 다음 Simulate Schedule을 사용하여 크론 구문을 확인하세요.
4. Settings → General에서 **Launch at login**과 **Start minimized**를 활성화하세요.
5. Job History에서 오류가 발생한 실행을 확인하고, 자세한 진단을 위해 rclone 로깅을 활성화하세요.

이 네 가지 계층에 걸친 체계적인 진단은 대부분의 예약 동기화 실패를 추측 없이 빠르게 해결해줍니다.

---

**관련 가이드:**

- [RcloneView로 매일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [일정 모범 사례 — RcloneView의 크론, 재시도, 모니터링](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [작업 기록 및 전송 로그 — RcloneView의 모니터링](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />

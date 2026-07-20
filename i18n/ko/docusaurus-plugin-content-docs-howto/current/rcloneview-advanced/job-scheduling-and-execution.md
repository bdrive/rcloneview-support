---
sidebar_position: 2
description: "RcloneView에서 유연한 예약 옵션을 사용하여 동기화 작업을 자동으로 실행하는 방법을 알아봅니다. Plus 라이선스가 필요합니다."
keywords:
  - rcloneview
  - job scheduling
  - sync automation
  - scheduled sync
  - rclone
  - job manager
  - cloud sync
  - job scheduler
  - rclone automation
  - crontab
  - plus license
  - recurring sync
tags:
  - RcloneView
  - Job-Manager
  - Scheduling
  - Sync
  - PLUS-Feature
  - automation
date: 2025-05-23
author: Jay
---
# 작업 예약 및 자동 실행

작업 예약(Job Scheduling)을 사용하면 특정 시간과 간격으로 동기화 작업을 자동으로 실행할 수 있습니다.


:::important 작업을 예약하려면 PLUS 라이선스가 필요합니다
이 기능을 사용하려면 [**PLUS 라이선스**](https://rcloneview.com/src/pricing.html)를 구매해야 합니다.
:::


## 작업 예약 설정

다음 경우에 예약을 구성할 수 있습니다.

- 새 작업을 생성할 때 ([Step 4: Scheduling](/howto/rcloneview-basic/create-sync-jobs#step4-scheduling-available-with-plus-license))
- 기존 작업을 편집하여 일정을 추가할 때

## 작업을 추가 또는 편집하여 예약 구성하기


**`Job Manager`**를 열려면 홈 메뉴의 툴바 아이콘을 클릭하세요.  
그런 다음 **`Add Job`** 또는 **`Edit Job`**을 클릭하고 **Step 4: Scheduling**으로 이동합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-medium img-center" />
### **작업 예약 방법**

1. **`Run whenever time units ~`** 라벨이 붙은 체크박스를 선택하여 예약을 활성화합니다.
2. Time 및 Date 필드를 사용하여 원하는 반복 일정을 설정합니다.
3. **`Simulate`**를 클릭하여 작업이 언제 실행될지 미리 확인합니다.
4. 일정이 올바른지 확인한 후 **`Save`**를 클릭합니다.

  저장한 후에는 캘린더 아이콘 <img src="/support/icons/calendar-icon.png" alt="calendar icon" class="inline-icon" /> 또는 **`Upcoming Schedule`** 아래의 **예약된 날짜**를 클릭하여 구성된 실행 시간을 시각적으로 검토할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/verify-job-schedule.png" alt="verify job schedule" class="img-medium img-center" />

<details>
<summary>Time 및 Date 필드 이해하기</summary>

Time 및 Date 필드 이해하기

**예약 구성은 Crontab 스타일 값을 지원하여**, 다양한 사용자 요구에 맞는 정밀하고 유연한 예약을 가능하게 합니다.

| Field Name   | Allowed Values | Description                             |
| ------------ | -------------- | --------------------------------------- |
| Minute       | 0-59           | 시(hour) 내의 분                         |
| Hour         | 0-23           | 하루 중 시간                             |
| Day of Week  | 0-6            | 0 = 일요일, 1 = 월요일, …, 6 = 토요일 |
| Day of Month | 1-31           | 월(month) 중 일                                        |
| Month        | 1-12           | 1은 1월, 2는 2월, 이런 식으로 이어집니다. |

**허용되는 형식:**

- **빈 값** : 모든 단위에 일치합니다 (예: Minutes가 비어 있으면 매분마다).
- **n1, n2, ...** : 값 목록 (예: 월, 수, 금의 경우 1,3,5).
- **n1-n2** : 값의 범위 (예: 0-2는 0, 1, 2를 의미).
- **n1-n2/n3**: 간격이 있는 범위 (예: 6-12/3은 6, 9, 12를 의미).

**Minute**, **Hour**, **Day of Week**, **Day of Month**, **Month** 필드는 논리적인 **AND** 연산으로 함께 작동합니다. 즉, 작업은 **모든** 조건이 충족될 때만 실행됩니다.

📌 예시: **매월 첫 번째 일요일 오전 1시 30분에 동기화 작업 실행하기**. 
이 일정을 구현하려면 다음 필드를 구성하세요.

- **시간 (오전 1:30):**
    - **Minute:** 30
    - **Hour:** 1
    
- **날짜 (매월 첫 번째 일요일):**
    - **Day of Month:** 1-7 — 해당 월의 첫 7일에 일치
    - **Day of Week:** 0 — 0은 일요일을 나타냄
    - **Month:** _비워 둠_ — 모든 월에 적용

✅ 이 조합은 **날짜가 첫 번째 주 이내**이면서 **일요일에 해당**할 때만 작업이 실행되도록 하여, 매월 첫 번째 일요일 오전 1시 30분으로 효과적으로 예약합니다.

<img src="/support/images/en/howto/rcloneview-advanced/example-of-job-schedule.png" alt="example of job schedule" class="img-medium img-center" />

</details>


:::caution 예약된 작업을 위해서는 RcloneView가 실행 중이어야 합니다
예약된 작업이 정상적으로 실행되려면 **RcloneView가 백그라운드에서 실행 중**이어야 합니다.  
작업이 외부 `rclone` 엔진을 사용하도록 구성된 경우, 예약된 시간에 외부 `rclone` 인스턴스도 활성 상태로 실행 중인지 확인하세요.  
:::

## 작업 예약 결과 확인

### **Job Manager에서 실행 기록 보기**

  
**Job Manager** 창에서 가장 최근 실행 시간(`Last execution`)과 다음 예약 실행(`Upcoming Schedule`)을 모두 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/open-job-schedule-history.png" alt="open job schedule history" class="img-medium img-center" />
작업의 실행 기록 상세 내용을 보려면:

- **Job Manager**를 엽니다.
- **history 아이콘** <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" />을 클릭하여 선택한 작업의 실행 기록을 엽니다.
  

**`Execution Type`** 열에서 `Scheduled`로 표시된 항목은 해당 작업이 스케줄러에 의해 자동으로 트리거되었음을 나타냅니다.

<img src="/support/images/en/howto/rcloneview-advanced/view-history-of-scheduled-job.png" alt="view history of scheduled job" class="img-medium img-center" />


:::info 여러 대상에 대한 로그 확인  
작업에 여러 대상 리모트가 포함된 경우, History 보기에서 각 대상 탭을 개별적으로 클릭하여 각 타겟의 로그 상세 내용을 검토하세요.
:::


### 완료 알림 (Windows)

작업이 완료되면 Windows 시스템 트레이에 동기화 작업 요약을 보여주는 **알림 팝업**이 나타납니다.

  - **`See details`**를 클릭하면 결과의 전체 세부 정보를 볼 수 있습니다.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Windows 알림에서 알람 메시지 확인하기
팝업을 놓쳤더라도 **Windows 시스템 트레이**의 **알림 아이콘**을 클릭하여 동기화 알림을 계속 확인할 수 있습니다.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::


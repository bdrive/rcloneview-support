---
sidebar_position: 7
description: "RcloneView Job Manager를 사용해 동기화 작업을 실행, 모니터링, 관리하는 방법을 알아봅니다. Dry run, 작업 기록, 알림 기능을 포함합니다."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - job manager
  - run sync job
  - dry run
  - job execution
  - Job Monitor
  - job history
  - scheduled jobs
  - rclone automation
tags:
  - RcloneView
  - Cloud
  - Sync
  - Job-Management
  - cloud-storage
  - job-history
  - job-monitoring
  - Remote-storage-managent
date: 2025-06-16
author: Jay
---
# 작업 실행 및 관리

메인 메뉴에서 `Job Manager` 툴바를 클릭하여 Job Manager를 엽니다.

실행할 작업을 선택한 다음 **`Run`** 버튼을 클릭하여 실행합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />


<details>
<summary>필드 설명 </summary>

- `Job Name` : 작업의 이름입니다. -> 아이콘은 소스에서 대상으로의 동기화 방향을 시각적으로 나타냅니다. 작업에 여러 대상이 포함된 경우, 각 대상 리모트마다 별도의 아이콘이 표시됩니다.  
- `Source` : 소스 역할을 하는 리모트 스토리지의 폴더입니다.  
- `Destination` : 대상 역할을 하는 리모트 스토리지의 폴더입니다.   
- `Upcoming Schedule` : 이 작업이 다음에 실행될 예정 시간을 표시합니다. 스케줄이 설정되어 있지 않으면 **Unscheduled**로 표시됩니다.    
  ⚠️ _이 기능은 PLUS 라이선스에서만 사용할 수 있습니다._ 참고:: [작업 스케줄링 설정 방법](/howto/rcloneview-advanced/job-scheduling-and-execution). 
- `Last execution` : 스케줄을 통해 이 작업이 가장 최근에 자동 실행된 시간입니다.   
- `Created At` : 작업이 생성된 날짜와 시간입니다.  
- `History` : 이 작업의 실행 기록을 엽니다. 클릭하면 전체 기록 창이 열립니다.  

</details>

<details>
<summary>작업 관리 툴바</summary>

작업 관리 툴바

작업을 선택한 후, 아래 툴바 옵션을 사용하여 관리할 수 있습니다:

- **`Add Job`** : 새 작업을 생성하고 추가합니다. [참고: 작업 생성 방법](/howto/rcloneview-basic/create-sync-jobs)  
- **`Edit Job`** : 선택한 작업을 수정합니다.
- **`Duplicate`** : 선택한 작업의 복사본을 생성합니다. 
  복제된 작업에는 (1), (2), …, (n)과 같은 접미사가 자동으로 붙습니다.
  이후 Edit Job을 사용하여 원본을 기반으로 새 작업을 빠르게 커스터마이즈할 수 있습니다.  
- **`Delete`** : 선택한 작업을 삭제합니다.

</details>


:::tip 💡 작업 내보내기 및 가져오기
**Job Manager** 오른쪽 상단의 **설정 아이콘** <img src="/support/icons/setting-icon.png" alt="setting icon" class="inline-icon" /> 을 클릭하면 현재 작업을 내보내거나 이전에 저장한 작업을 가져올 수 있습니다. 작업은 `rclone_jobs_~.json`이라는 이름의 파일로 내보내지고 저장됩니다.    

:::
### 시뮬레이션: Dry run 실행하기 (선택 사항)

**Dry run**을 실행하여 실제 변경 없이 동기화 작업을 시뮬레이션할 수 있습니다.

**`Dry run`** 버튼을 클릭하면 변경 사항을 적용하지 않고 동기화를 시뮬레이션합니다.

- 이 미리보기는 **Destination**으로 복사될 파일과 삭제될 파일을 보여줍니다.
- **`See details`**를 클릭하면 대상에서 발생할 전체 작업 목록(예: 복사, 생성, 삭제)을 볼 수 있습니다.
- 대상이 여러 개인 작업의 경우, 결과는 각 대상별로 그룹화되며 각 대상마다 별도의 **`See details`**가 제공됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-dry-run-result.png" alt="job dry run result" class="img-medium img-center" />

## 작업 실행 결과 모니터링

동기화 작업의 진행 상황과 결과를 실시간으로 확인할 수 있습니다.

### 전송 상태 (진행 중)

- 동기화 중에는 **`Transfer`** 탭을 열어 각 파일의 실시간 진행 상황을 확인할 수 있습니다.
- **+** 아이콘을 클릭하면 개별 파일 전송을 펼쳐서 모니터링할 수 있습니다.
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### 완료된 작업 (실행 후)

- 동기화가 완료되면 **`Completed`** 탭으로 이동하여 결과를 확인합니다.
- **+** 아이콘을 클릭하면 완료된 각 작업의 파일 단위 세부 정보를 확인할 수 있습니다.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip 동기화된 리모트를 빠르게 열기
**`Completed`** 탭에서 완료된 작업을 더블클릭하면 Explorer 창에서 소스와 대상 폴더를 모두 열 수 있습니다.  
이를 통해 동기화된 폴더를 즉시 쉽게 확인할 수 있습니다.
:::

### 완료 알림 (Windows)

동기화가 완료되면 Windows 시스템 트레이에 알림 팝업이 나타나며 동기화 작업 요약을 보여줍니다.

  - **`See details`**를 클릭하면 결과의 전체 세부 내역을 볼 수 있습니다.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Windows 알림에서 알람 메시지 확인하기
팝업을 놓쳤다면, **Windows 시스템 트레이**의 **알림 아이콘**을 클릭하여 동기화 알림을 확인할 수 있습니다.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::


## 작업 기록 보기


**`Job Manager`**에서 작업 옆의 **`History`** 아이콘 <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" /> 을 클릭하여 실행 로그를 확인합니다.

작업이 여러 대상으로 실행된 경우, 각 대상은 기록에서 별도의 탭으로 표시됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-medium img-center" />

<details>
<summary>필드 설명</summary>

필드 설명


- `Execution Type` : 
	- Manual : 사용자가 수동으로 실행함
	- Scheduled : RcloneView에 의해 자동으로 실행됨
- `Start Time` : 작업이 시작된 시간   
- `Time Spent` : 동기화에 소요된 총 시간  
- `Status` : Job의 수행 결과  
	- Completed : 성공   
	- Errored : 실패, 오류 메시지 확인 가능. 
- `Total Size` : 전송된 총 데이터 크기
- `Speed` : 평균 전송 속도. 
- `Files` : 전송된 파일 수. 
- `Job Type` : 현재는 Sync이며, 향후 업데이트에서 Copy, Purge, Batch 작업이 추가될 수 있습니다   
- `Delete` : 선택한 기록 항목을 삭제합니다. 

</details>


<details>
<summary>기록 필터링 및 삭제 툴바</summary>

기록 필터링 및 삭제 툴바

기록이 많이 쌓인 경우, 툴바 옵션을 사용하여 필터링하거나 삭제할 수 있습니다.

- `From ~ To` : 캘린더를 사용하여 사용자 지정 날짜 범위를 선택하고 해당 기간의 기록을 표시합니다.  
- `Today` : 오늘의 기록 항목만 표시합니다.  
- `Yesterday` : 정확히 하루 전의 기록 항목을 표시합니다.  
- `Last week` : 지난 7일간의 기록을 표시합니다.
- `Last month` : 지난 30일간의 기록을 표시합니다.
- `Delete all` : - 모든 기록 항목을 영구적으로 삭제합니다.   ⚠️ _이 작업은 되돌릴 수 없습니다. 신중하게 진행하세요._

</details>



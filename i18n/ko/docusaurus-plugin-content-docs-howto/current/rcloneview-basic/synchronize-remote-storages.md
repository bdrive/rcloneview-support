---
sidebar_position: 5
description: "RcloneView의 강력한 동기화(Sync) 기능을 사용하여 로컬 또는 클라우드 스토리지 간 폴더를 즉시 미러링하는 방법을 알아보세요. 설정, 필터, 드라이 런, 예약 옵션을 포함합니다."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync folders
  - bidirectional sync
  - sync job
  - dry run
  - scheduled sync
  - job scheduling
  - Job Monitor
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-storage
  - file-synchronization
  - job-scheduler
  - dry-run
  - Remote-Storage
date: 2025-06-04
author: Jay
---
# 리모트 스토리지 즉시 동기화하기

RcloneView의 **`Sync`** 기능을 사용하면 클라우드 리모트나 로컬 스토리지 간의 폴더를 즉시 미러링할 수 있습니다.

이 가이드에서는 동기화 작업을 설정하고 실행하는 방법을 안내합니다.
## 소스 및 대상 폴더 선택

동기화 작업을 시작하려면 **소스(Source)**와 **대상(Destination)** 폴더를 지정해야 합니다.

- **Explorer** 패널에서 두 개의 탭을 엽니다.
	- **왼쪽 탭**에서 선택한 폴더가 **소스**가 됩니다
	- **오른쪽 탭**에서 선택한 폴더가 **대상**이 됩니다

- 각 탭 상단의 **경로 표시줄(Path Bar)**을 사용하여 폴더 경로를 직접 입력할 수도 있습니다.
- 이러한 설정은 필요한 경우 **Sync** 설정 창에서 나중에 조정할 수 있습니다.

폴더 선택이 끝나면 상단 **`Home`** 메뉴의 **`Sync`** 버튼을 클릭하여 진행합니다.
<img src="/support/images/en/howto/rcloneview-basic/sync-remote-folder-select.png" alt="sync remote folder select" class="img-medium img-center" />
## 동기화 작업 실행

소스와 대상 폴더를 선택한 후, 동기화를 설정하고 실행할 수 있습니다.


<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="sync configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="sync advanced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="sync filtering settings" class="img-medium img-center" />
</div>

### 1단계: 폴더 경로 확인

- **`Configure Storage`** 단계에서 선택한 소스 및 대상 폴더를 확인합니다.
- **Next**를 클릭하기 전에 두 폴더가 올바르게 설정되었는지 확인하세요.

:::caution 동기화 작동 방식
RcloneView의 Sync는 소스와 대상을 동일하게 만듭니다.
즉, **`대상만 수정됩니다`**.
- **소스** 폴더의 내용이 **대상**으로 미러링됩니다.
- 소스에는 없지만 대상에 존재하는 파일은 **삭제**됩니다.

👍 **중요:** Rclone은 공식적으로 **단방향 동기화(one-directional sync)**만 지원합니다.
⚠️ **양방향 동기화(Bidirection)**는 **베타 기능**으로 제공되며 공식적으로 지원되지 않습니다. 예기치 않은 동작이나 오류가 발생할 수 있으므로 **프로덕션 환경에서는 사용을 권장하지 않습니다**.
:::

<details>
<summary>Configure Storage 상세 설정</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-config-storage-details.png" alt="sync config storage details" class="img-medium img-center" />

1. **소스 폴더를 선택합니다**.
 - 왼쪽 패널의 폴더 아이콘을 클릭하여 소스를 선택합니다.
2. **대상 폴더를 선택합니다**.
- 오른쪽 패널의 폴더 아이콘을 클릭하여 대상을 선택합니다.
3. **추가 대상을 추가합니다** (선택 사항).
- **Add Destination** 버튼을 클릭하면 여러 대상으로 동시에 동기화할 수 있습니다. 필요한 경우 **1:N 동기화**를 구성할 수 있습니다.
4. **동기화 방향을 선택합니다**.
 - **대상만 수정(Modifying destination only)**: 소스에서 대상으로 동기화합니다. 대상 콘텐츠를 소스와 일치하도록 업데이트하거나 삭제합니다.
 - **양방향(Bidirection)** (베타): 두 폴더를 비교하여 양방향으로 변경 사항을 동기화합니다.
⚠️ 이 모드는 의도치 않게 새 파일을 덮어쓸 수 있으므로 주의해서 사용하세요.
5. **빈 디렉터리 생성** (선택 사항).
- 활성화하면 파일이 없는 소스 디렉터리도 대상에 빈 폴더로 생성됩니다.

:::caution RcloneView에서 양방향 동기화 사용하기
RcloneView는 양방향 동기화를 수행하기 위해 rclone의 베타 명령어인 `bisync`를 사용합니다.
이 기능은 아직 **실험적**이므로, 활성화하기 전에 공식 [사용자 매뉴얼](https://rclone.org/bisync/), 특히 [제한 사항](https://rclone.org/bisync/#limitations) 섹션을 검토할 것을 권장합니다.

bisync를 잘못 사용하면 데이터 손실이 발생할 수 있습니다. 주의해서 사용하세요.
:::


</details>

### 2단계: 고급 설정 (선택 사항)

  - 고급 설정에는 다음에 대한 옵션이 포함됩니다:
	  - 전송 성능
	  - 연결 방식
	  - 오류 처리 동작

> 💡 특별히 커스텀 동작이 필요하지 않다면 기본값 사용을 권장합니다.

<details>
<summary>고급 설정 상세 내용</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**성능:**

1. **`Number of file transfers`**:
   병렬로 실행할 파일 전송 개수입니다. 리모트에서 타임아웃이 자주 발생하는 경우 이 값을 낮추거나, 대역폭이 충분하고 빠른 리모트인 경우 값을 높이는 것이 유용할 수 있습니다.
2. **`Number of multi thread transfers`**:
   멀티 스레드 전송을 사용할 때 사용할 스트림 수를 설정합니다. 멀티 스레드 전송을 비활성화하려면 `0`으로 설정하세요 (기본값 4). 256MB를 초과하는 파일을 이를 지원하는 백엔드로 전송할 때, rclone은 여러 스레드를 사용하여 파일을 전송합니다.
3. **`Number of equaility checkers`**:
   checker는 동기화 중 파일의 동일성을 확인합니다. S3, Swift, Dropbox와 같은 일부 스토리지 시스템에서는 이 작업에 상당한 시간이 걸릴 수 있어 병렬로 실행됩니다. 기본값은 8개의 checker를 병렬로 실행하는 것입니다. 다만 응답 속도가 느린 백엔드의 경우 `--checkers`를 4개 이하의 스레드로 설정하여 이 기본값을 (늘리기보다는) 낮춰야 할 수도 있습니다.


**안전성과 무결성:**

5. **`Enable checksum to compare files`** :
   일반적으로 rclone은 파일이 동일한지 확인하기 위해 수정 시간과 크기를 확인합니다. 이 플래그를 설정하면 rclone은 파일 해시와 크기를 확인하여 파일이 동일한지 판단합니다. 이는 Drive와 Swift처럼 객체에 동일한 해시 타입을 저장하는 리모트 간에 전송할 때 매우 유용합니다. 어떤 리모트가 어떤 해시 타입을 지원하는지에 대한 자세한 내용은 [개요 섹션](https://rclone.org/overview/)의 표를 참고하세요.


**오류 제어:**

5. **`Retry the entire sync if it fails this many times`**:
   동기화가 이 횟수만큼 실패하면 전체 동기화를 재시도합니다 (기본값 3). 일부 리모트는 불안정할 수 있으며, 몇 번의 재시도를 통해 오류로 전송되지 않은 파일을 가져올 수 있습니다. 재시도를 비활성화하려면 `1`로 설정하세요.

</details>



### 3단계: 파일 및 폴더 필터링 (선택 사항)

- RcloneView는 Google Docs나 Box Docs와 같은 서비스에 대해 기본적으로 기본 필터를 적용합니다.
- 동기화에서 제외할 파일 형식이나 폴더를 추가로 지정할 수 있습니다.

<details>
<summary>필터링 설정 상세 내용</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings-details.png" alt="sync filtering settings details" class="img-medium img-center" />

1. **`Don't sync files over`** :
   동기화를 허용할 **최대 파일 크기**를 제어합니다.
   기본 단위는 MB입니다.
2. **`Don't sync files older than this`** :
   동기화를 허용할 **최대 파일 경과 시간**을 제어합니다.
   이는 디렉터리가 아닌 **파일에만** 적용됩니다.
   다음 단위를 사용하세요:
   `y` = 년, `d` = 일, `h` = 시간, `m` = 분, `s` = 초 (예: 2y30d12h30m45s)
3. **`Don't sync folders over this depth`** :
   설정하면 Rclone은 지정한 깊이 이내의 폴더만 동기화합니다.
   예를 들어 이 값을 `1`로 설정하면 최상위 디렉터리의 파일만 동기화됩니다.
   `2`로 설정하면 처음 두 단계의 폴더 내 파일을 동기화하는 식입니다.
4. **사전 정의된 필터**.
   음악, 비디오, 이미지, 문서, Google Docs, Box Docs와 같은 일반적인 파일 형식에 대해 내장 필터를 빠르게 적용할 수 있습니다.
   - Music, Video, Image, Document, Google Docs, Box Docs
     이러한 필터는 필터 목록에 사전 정의된 옵션으로 제공됩니다.
1. **기타 (= 사용자 정의 필터)**.
   특정 파일 형식, 폴더, 경로를 제외하거나 포함하도록 사용자 정의 규칙을 지정할 수 있습니다.
   다음은 일반적인 예시입니다:
   **`.iso`** : 모든 .iso 파일을 제외합니다.
   **`/.git/*`** : 루트에 있는 .git 폴더 안의 파일만 제외하고, 하위 폴더는 제외하지 않습니다.
   **`/.git/`** : 루트에 있는 .git 폴더 전체와 그 안의 모든 내용을 제외합니다.
   **`.git/`** : 위치에 상관없이 모든 .git 폴더와 그 안의 모든 내용을 제외합니다.

   🔗 더 고급 예시와 구문은 [Rclone 필터링 가이드](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)를 참고하세요


</details>

  
  
### 4단계: 동기화 실행

- 모든 설정이 완료되면 **Run**을 클릭하여 동기화 프로세스를 시작합니다.

:::important 동기화 예약. 
동기화 작업을 예약된 날짜와 시간에 실행하려면, 먼저 **Save to Jobs**를 클릭하여 동기화 작업을 작업(Job)으로 등록하세요. 그런 다음 **`Job Manager`**를 실행하여 일정을 설정합니다.

> ⚠️ **작업 예약(Job scheduling)은 PLUS 기능으로 제공됩니다.**

이 기능을 사용하려면 [**PLUS 라이선스**](https://rcloneview.com/src/pricing.html)를 구매해야 합니다.
:::

### 시뮬레이션: 드라이 런 실행 (선택 사항)

**드라이 런(Dry run)**을 실행하여 실제 변경 없이 동기화 작업을 시뮬레이션할 수 있습니다.

- 이 미리보기는 **대상**으로 복사될 파일과 삭제될 파일을 보여줍니다.
- **`See details`**를 클릭하면 대상에서 발생할 전체 작업 목록(예: 복사, 생성, 삭제)을 볼 수 있습니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="sync dry run" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="sync dry run details" class="img-medium img-center" />
</div>

## 동기화 결과 모니터링

동기화 작업의 진행 상황과 결과를 실시간으로 확인할 수 있습니다.

### 전송 상태 (진행 중)

- 동기화 중에는 **`Transfer`** 탭을 열어 각 파일의 실시간 진행 상황을 확인할 수 있습니다.
- **+** 아이콘을 클릭하면 개별 파일 전송을 펼쳐서 모니터링할 수 있습니다.
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### 완료된 작업 (동기화 후)

- 동기화가 완료되면 **`Completed`** 탭으로 이동하여 결과를 확인합니다.
- **+** 아이콘을 클릭하면 각 완료된 작업의 파일 단위 상세 정보를 볼 수 있습니다.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip 동기화된 리모트를 빠르게 열기
**`Completed`** 탭에서 완료된 작업을 더블클릭하면 Explorer 패널에서 소스와 대상 폴더를 모두 열 수 있습니다.
이를 통해 동기화된 폴더를 즉시 손쉽게 확인할 수 있습니다.
:::

### 완료 알림 (Windows)

동기화가 완료되면 Windows 시스템 트레이에 동기화 작업 요약을 보여주는 알림 팝업이 나타납니다.

  - **`See details`**를 클릭하면 결과에 대한 전체 세부 내역을 확인할 수 있습니다.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Windows 알림에서 알람 메시지 확인하기
팝업을 놓쳤다면 **Windows 시스템 트레이**의 **알림 아이콘**을 클릭하여 동기화 알림을 계속 확인할 수 있습니다.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::



## 동기화 작업을 Job으로 저장하기

동일한 동기화 작업을 정기적으로 수행한다면, 이를 **Job**으로 저장하여 쉽게 재사용할 수 있습니다.

- 동기화를 설정한 후 **`Save to Jobs`**를 클릭합니다.
- **Job Name**을 입력한 다음 **Save**를 클릭하여 작업을 저장합니다.
  - ❗허용되는 문자: `a–z`, `A–Z`, `0–9`, `-`, `_`, `.`
- 이후 **`Job Manager`**에서 저장된 Job을 클릭 한 번으로 실행할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="save sync to jobs" class="img-medium img-center" />
Home 메뉴의 **`Job Manager`** 툴바를 클릭하면 저장된 작업을 확인하고 실행할 수 있습니다.
<img src="/support/images/en/howto/rcloneview-basic/verify-job-in-job-manager.png" alt="verify job in job manager" class="img-medium img-center" />

---
sidebar_position: 6
description: "RcloneView에서 원격 폴더를 반복적으로 또는 예약하여 동기화하기 위해 동기화 작업(Job)을 만들고 관리하는 방법을 알아봅니다."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync job
  - job manager
  - scheduled sync
  - create sync
  - rclone automation
  - plus license
  - cloud storage
  - remote storage
tags:
  - RcloneView
  - Cloud
  - Sync
  - job-scheduler
  - create-job
  - Job-Management
date: 2025-06-04
author: Jay
---
# 동기화 작업(Job) 만들기

자주 사용하는 동기화 작업을 **작업(Job)**으로 저장해두면, 몇 번의 클릭만으로 반복 실행할 수 있습니다.  

작업(Job)을 만드는 방법은 크게 두 가지입니다.  
- 동기화 작업(Instant Sync)에서 바로 작업(Job)을 생성합니다.
- **작업 관리자(Job Manager)**를 사용해 작업(Job)을 직접 구성하고 저장합니다.

## Instant Sync에서 작업(Job) 만들기

동기화 작업을 구성한 뒤 동기화 창에서 **Save to Jobs**를 클릭하면 작업(Job)을 만들 수 있습니다.  

👉 참고: [동기화에서 즉시 작업(Job) 만들기](/howto/rcloneview-basic/synchronize-remote-storages#save-sync-operation-as-a-job)

홈 메뉴의 **`Job Manager`** 툴바를 클릭하면 저장된 작업(Job)을 확인하고 실행할 수 있습니다.

## 작업 관리자(Job Manager)로 작업(Job) 만들기


### (선택) 소스 및 대상 폴더 선택

**작업 관리자(Job Manager)**로 작업(Job)을 만들기 전에, 선택적으로 소스와 대상 폴더를 미리 지정할 수 있습니다.  

나중에 새 작업(Job)을 추가할 때 폴더를 미리 지정해 두고 싶다면 유용합니다.  

또는 **작업 관리자(Job Manager)**의 **Add Job** 창 안에서 직접 소스와 대상 폴더를 구성할 수도 있습니다.  

작업 관리자를 열려면 홈 툴바에서 **Job Manager** 버튼을 클릭하세요.

<img src="/support/images/en/howto/rcloneview-basic/create-job-using-job-manager.png" alt="create job using job manager" class="img-medium img-center" />

### 새 작업(Job) 추가

새 작업(Job)을 추가하려면 **Job Manager**(=`Jobs`) 모달 창에서 **`Add Job`**을 클릭하세요.  

#### Step 0: 작업 관리자 열고 `Add Job` 클릭

  다음과 같은 `Jobs` 창이 표시됩니다. **Add Job** 버튼을 클릭해 작업 생성 마법사를 엽니다.

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add job in job manager" class="img-medium img-center" />
  작업 마법사는 세 단계로 진행됩니다.

1. **Configure Storage** – 소스와 대상 폴더 선택  
2. **Advanced Settings (선택)** – 동기화 동작 설정  
3. **Filtering Settings (선택)** – 파일 형식이나 폴더에 대한 필터 정의
<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="add job configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-advnaced-settings.png" alt="add job advnaced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-filtering-settings.png" alt="add job filtering settings" class="img-medium img-center" />
</div>
#### Step 1: Configure Storage

- **`Configure Storage`** 단계에서 선택한 소스와 대상 폴더를 확인합니다.
- **`Job Name`**을 입력합니다  ( ❗허용 문자: `a–z`, `A–Z`, `0–9`, `-`, `_` )
- 하나의 소스를 여러 대상으로 동기화하려면 **Add Destination**을 클릭해 원격 폴더를 추가하세요.  
  이렇게 하면 **1:N (일대다)** 동기화가 가능합니다.  
- **Next**를 클릭하기 전에 모든 폴더가 올바르게 설정되었는지 확인하세요.

:::caution 동기화 동작 방식
RcloneView 동기화는 소스와 대상을 동일하게 만듭니다.  
즉, **`대상만 수정됨`**을 의미합니다.  
- **소스** 폴더의 내용이 **대상**에 그대로 미러링됩니다.  
- 소스에 존재하지 않는 대상 내의 기존 파일은 **삭제**됩니다.  

👍 **중요:** rclone은 공식적으로 **단방향 동기화**만 지원합니다.  
⚠️ **양방향 동기화(=Bidirection)**는 **베타 기능**으로 제공되며 공식적으로 지원되지 않습니다. 예기치 않은 동작이나 오류가 발생할 수 있으므로 **프로덕션 환경에서는 사용을 권장하지 않습니다**.
:::

<details>
<summary>Configure Storage 상세 설명</summary>

<img src="/support/images/en/howto/rcloneview-basic/job-config-storage-details.png" alt="job config storage details" class="img-medium img-center" />

1. **`Job Name`**. 
 - ❗허용 문자: `a–z`, `A–Z`, `0–9`, `-`, `_` 
2. **소스 폴더를 선택합니다**.   
 - 왼쪽 패널의 폴더 아이콘을 클릭해 소스를 선택합니다.  
1. **대상 폴더를 선택합니다**. 
- 오른쪽 패널의 폴더 아이콘을 클릭해 대상을 선택합니다.  
1. **추가 대상을 추가합니다** (선택 사항). 
- **Add Destination** 버튼을 클릭하면 여러 대상에 동시에 동기화할 수 있습니다. 필요하다면 **1:N 동기화**를 구성할 수 있습니다.  
5. **동기화 방향을 선택합니다**. 
 - **대상만 수정됨**: 소스에서 대상으로 동기화합니다. 소스와 일치하도록 대상 콘텐츠를 업데이트하거나 삭제합니다.  
 - **양방향(Bidirection)** (베타): 두 폴더를 비교해 양쪽 방향으로 변경 사항을 동기화합니다.  
⚠️ 이 모드는 새 파일을 의도치 않게 덮어쓸 수 있으므로 주의해서 사용하세요.  
6. **빈 디렉터리 생성** (선택 사항).   
- 활성화하면 파일이 없는 소스 디렉터리도 대상에 빈 폴더로 재생성됩니다.  

:::caution RcloneView에서 양방향 동기화 사용하기
RcloneView는 양방향 동기화를 수행하기 위해 rclone의 베타 명령어인 `bisync`를 사용합니다.    
이 기능은 아직 **실험적** 단계이므로, 활성화하기 전에 공식 [사용 설명서](https://rclone.org/bisync/) — 특히 [제한 사항](https://rclone.org/bisync/#limitations) 섹션 — 를 검토하는 것을 권장합니다.

bisync를 잘못 사용하면 데이터 손실이 발생할 수 있습니다. 주의해서 사용하세요.
:::


</details>

#### Step 2: Advanced Settings (선택)

  - 고급 설정(Advanced Settings)에는 다음 옵션이 포함됩니다.
	  - 전송 성능
	  - 연결 방식
	  - 오류 처리 동작

> 💡 특별한 동작이 필요하지 않다면 기본값 사용을 권장합니다.

<details>
<summary>Advanced Settings 상세 설명</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**성능:**

1. **`Number of file transfers`**:   
   병렬로 실행할 파일 전송 개수입니다. 원격 저장소에서 타임아웃이 자주 발생한다면 이 값을 더 작게, 대역폭이 넉넉하고 원격 저장소가 빠르다면 더 크게 설정하는 것이 유용할 수 있습니다.  
2. **`Number of multi thread transfers`**:  
   멀티 스레드 전송을 사용할 때 사용할 스트림 수를 설정합니다. `0`으로 설정하면 멀티 스레드 전송이 비활성화됩니다 (기본값 4). 256MB 이상의 파일을 이를 지원하는 백엔드로 전송할 때, rclone은 여러 스레드를 사용해 파일을 전송합니다.  
3. **`Number of equaility checkers`**:  
   체커(checker)는 동기화 중 파일의 동일성을 검사합니다. 일부 스토리지 시스템(예: S3, Swift, Dropbox)의 경우 이 작업에 상당한 시간이 걸릴 수 있어 병렬로 실행됩니다. 기본값은 체커 8개를 병렬로 실행하는 것입니다. 다만 응답이 느린 백엔드의 경우, `--checkers`를 4개 이하로 설정해 이 기본값을 (늘리기보다는) 낮춰야 할 수도 있습니다.  


**안전성 및 무결성:**

5. **` Enable checksum to compare files`** :  
   일반적으로 rclone은 파일의 수정 시간과 크기를 확인해 동일한지 판단합니다. 이 플래그를 설정하면 rclone은 파일 해시와 크기를 확인해 파일이 동일한지 판단합니다. 이는 동일한 해시 타입을 객체에 저장하는 원격 저장소 간 전송 시(예: Drive와 Swift) 매우 유용합니다. 어떤 원격 저장소가 어떤 해시 타입을 지원하는지는 [개요 섹션](https://rclone.org/overview/)의 표를 참고하세요.  


**오류 제어:**

5. **`Retry the entire sync if it fails this many times`**:  
   실패할 경우 전체 동기화를 이 횟수만큼 재시도합니다 (기본값 3). 일부 원격 저장소는 불안정할 수 있으며, 몇 차례 재시도를 하면 오류로 전송되지 않은 파일을 다시 가져오는 데 도움이 됩니다. `1`로 설정하면 재시도를 비활성화합니다.  

</details>



#### Step 3: Filtering Settings (선택)

- RcloneView는 Google Docs나 Box Docs 같은 서비스에 대해 기본적으로 기본 필터를 적용합니다.
- 동기화에서 제외할 추가 파일 형식이나 폴더를 지정할 수 있습니다.

<details>
<summary>Filering Settings 상세 설명</summary>


<img src="/support/images/en/howto/rcloneview-basic/jobs-filtering-setttings-details.png" alt="jobs filtering setttings details" class="img-medium img-center" />
1. **`Don't sync files over`** :  
   동기화를 허용할 **최대 파일 크기**를 지정합니다.  
   기본 단위는 MB입니다.  
2. **`Don't sync files older than this`** :    
   동기화를 허용할 **최대 파일 경과 시간**을 지정합니다.  
   이 설정은 디렉터리가 아닌 **파일에만** 적용됩니다.  
   다음 단위를 사용하세요.  
   `y` = 년, `d` = 일, `h` = 시간, `m` = 분, `s` = 초  (예: 2y30d12h30m45s)  
3. **`Don't sync folders over this depth`** :   
   설정하면 rclone은 지정한 깊이 이내의 폴더만 동기화합니다.  
   예를 들어 `1`로 설정하면 최상위 디렉터리의 파일만 동기화합니다.  
   `2`로 설정하면 처음 두 폴더 레벨 내의 파일을 동기화하며, 이런 식으로 적용됩니다.
4. **미리 정의된 필터(Predefined Filters)**.   
   음악, 동영상, 이미지, 문서, Google Docs, Box Docs 등 일반적인 파일 형식에 대해 내장 필터를 빠르게 적용할 수 있습니다.  
   - Music, Video, Image, Document, Google Docs, Box Docs  
     이러한 필터는 필터 목록에서 미리 정의된 옵션으로 제공됩니다.
1. **기타 (= 사용자 지정 필터)**.  
   특정 파일 형식, 폴더 또는 경로를 제외하거나 포함하도록 사용자 지정 규칙을 정의할 수 있습니다.  
   일반적인 예시는 다음과 같습니다.  
   **`.iso`** : 모든 .iso 파일을 제외합니다.  
   **`/.git/*`** : 루트에 있는 .git 폴더 내부의 파일만 제외하며, 하위 폴더는 제외하지 않습니다.  
   **`/.git/`** :  루트의 .git 폴더 전체를 그 내부의 모든 것과 함께 제외합니다.   
   **`.git/`** : 위치와 상관없이 모든 .git 폴더와 그 내부의 모든 것을 제외합니다.   
   
   🔗 더 고급 예시와 구문은 [Rclone 필터링 가이드](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)를 참고하세요.


</details>


#### Step4: Scheduling (PLUS 라이선스에서 사용 가능)

작업 예약 기능을 사용하면 지정한 간격 또는 시간에 작업(Job)을 자동으로 실행할 수 있습니다.   

💡 이 기능은 [**PLUS 라이선스**](https://rcloneview.com/src/pricing.html)에서만 사용할 수 있습니다.  

자세한 내용은 [작업 예약 설정하기](/howto/rcloneview-advanced/job-scheduling-and-execution)를 참고하세요.   

마지막으로, 목록에서 생성한 작업(Job)을 검토해 모든 설정이 올바른지 확인하세요.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="add job scheduling" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-completed.png" alt="add job completed" class="img-medium img-center" />
</div>

  






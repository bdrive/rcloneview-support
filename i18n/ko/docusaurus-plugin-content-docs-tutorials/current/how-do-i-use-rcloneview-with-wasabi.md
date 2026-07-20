---
description: RcloneView를 사용하여 Wasabi와 로컬 스토리지, 다른 클라우드 간에 데이터를 탐색, 백업, 동기화, 마이그레이션하는 방법을 알아보세요.
keywords:
  - rcloneview
  - wasabi
  - s3-compatible
  - cloud backup
  - cloud sync
  - cloud migration
  - file synchronization
  - gui
  - rclone gui
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - cloud-backup
  - Tutorial
  - wasabi
unlisted: true
---

# RcloneView를 Wasabi와 함께 사용하려면 어떻게 해야 하나요?

RcloneView는 **rclone**을 위한 시각적인 2단 탐색기(Explorer)를 제공하는 데스크톱 애플리케이션입니다. 명령줄을 사용하지 않고도 **Wasabi**와 다른 클라우드 또는 로컬 스토리지 간에 파일을 복사, 동기화, 마이그레이션할 수 있습니다.

RcloneView를 사용하면 다음을 할 수 있습니다:

- Wasabi 버킷을 로컬 폴더처럼 탐색  
- **로컬 디스크 ↔ Wasabi** 또는 **Wasabi ↔ 다른 클라우드** 간에 파일을 드래그 앤 드롭  
- 일회성 전송 실행 또는 반복 동기화 작업 예약  

먼저 실제 동작을 보고 싶다면 짧은 데모 영상을 시청해 보세요 (자동 크기 조절, 레터박스 없음):

<iframe
  src="https://www.youtube.com/embed/yKc6qS2DG2A"
  title="Wasabi + RcloneView Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  loading="lazy"
  style={{aspectRatio: '16 / 9', width: '100%', maxWidth: '960px', height: 'auto', display: 'block', margin: '0 auto', border: 0}}
></iframe>

<br />

> RcloneView에 대한 자세한 내용은 공식 사이트를 방문하세요: [https://rcloneview.com](https://rcloneview.com)  


---

## 1. RcloneView 다운로드 및 설치

RcloneView는 **Windows, macOS, Linux**용으로 제공됩니다.

1. 다운로드 페이지로 이동합니다: [https://rcloneview.com/src/download](https://rcloneview.com/src/download).  
2. 사용 중인 OS에 맞는 설치 프로그램을 선택합니다 (Windows, macOS, Linux).  
3. **RcloneView**를 설치하고 실행합니다.

---

## 2. RcloneView에 Wasabi를 리모트로 추가

RcloneView는 Wasabi를 **S3 호환** 백엔드로 취급합니다. 리모트를 한 번 생성하면 탐색, 복사, 동기화, 예약 작업에 재사용할 수 있습니다.

### 2.1 사전 준비 사항 – Wasabi 액세스 키와 엔드포인트

RcloneView를 Wasabi에 연결하려면 다음이 필요합니다:

- **Access Key** / **Secret Key**  
- **Region / Endpoint URL** (예: 리전 `ap-northeast-2`, 엔드포인트 `s3.ap-northeast-2.wasabisys.com`)  

액세스 키를 생성하고 엔드포인트를 확인하려면 Wasabi 공식 문서를 참고하세요:

- Wasabi 문서: [https://docs.wasabi.com/docs](https://docs.wasabi.com/docs)  
- 예시: "[Creating a New Access Key](https://docs.wasabi.com/docs/creating-a-new-access-key)" 또는 "[Creating a Bucket](https://docs.wasabi.com/docs/creating-a-bucket)" (Wasabi 문서 포털 내에서 검색).

**Access Key**, **Secret Key**, **Endpoint**를 확보했다면 RcloneView로 돌아옵니다.

### 2.2 "새 리모트" 마법사 열기

1. **RcloneView**를 실행합니다.  
2. 상단 메뉴에서 **`Remote` → `+ New Remote`**를 클릭합니다.  
   - 또는 탐색기 창에서 **`+`** 탭을 클릭하고 **`New Remote`**를 선택합니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2.3 S3 호환 제공업체로 Wasabi 구성

1. **New Remote** 대화 상자에서 `Wasabi`를 검색합니다.  
2. **Wasabi** 제공업체 타일을 선택합니다.  
3. 연결을 구성합니다:
   - **Remote name**: `MyWasabi`처럼 알아보기 쉬운 이름을 입력합니다.  
   - **Access Key ID**: Wasabi 액세스 키를 붙여넣습니다.  
   - **Secret Access Key**: Wasabi 비밀 키를 붙여넣습니다.  
   - **Endpoint**: Wasabi S3 엔드포인트를 입력합니다 (예: `s3.ap-northeast-2.wasabisys.com`).  
4. **Add Remote**를 클릭합니다.

<img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="add new wasabi remote configuration" class="img-large img-center" />

### 2.4 Wasabi 리모트 확인

1. **`Remote → Remote Manager`**를 엽니다.  
2. Wasabi 리모트(예: `MyWasabi`)가 목록에 있고 연결 가능한지 확인합니다.

<img src="/support/images/en/tutorials/verify-wasabi-in-remote-manager.png" alt="verify wasabi in remote manager" class="img-large img-center" />

자세한 내용은 일반 S3 호환 가이드를 참고하세요:  
- [How to Add S3-Compatible Remote](/howto/remote-storage-connection-settings/s3)

---

## 3. Wasabi에서 폴더 탐색

리모트가 생성되면 RcloneView 탐색기 안에서 버킷과 객체를 탐색할 수 있습니다.

1. 탐색기 창에서 **`+`** 탭을 클릭합니다.  
2. "Open Remote" 목록에서 사용자의 **Wasabi** 리모트(예: `MyWasabi`)를 선택합니다.  
3. RcloneView가 리모트를 탭에서 열며, 버킷이 최상위 폴더처럼 표시됩니다.  
4. 버킷을 더블 클릭하여 내용을 탐색합니다.

<img src="/support/images/en/tutorials/wasabi-remote-in-rcloneview-explorer.png" alt="wasabi remote in rcloneview explorer" class="img-large img-center" />

더 일반적인 탐색 팁은 다음을 참고하세요:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

## 4. 로컬 디스크와 Wasabi 간 파일 관리

이 섹션에서는 RcloneView를 사용해 로컬 컴퓨터와 Wasabi 간에 데이터를 이동하는 실용적인 방법을 소개합니다.

다음과 같이 열 수 있습니다:

- **왼쪽 창**: 로컬 디스크 (예: `C:\` 또는 특정 폴더)  
- **오른쪽 창**: Wasabi 리모트 버킷  

그런 다음 작업 흐름에 따라 드래그 앤 드롭, 폴더 비교, 동기화 작업을 사용합니다.

---

### 4.1 로컬과 Wasabi 간 드래그 앤 드롭

드래그 앤 드롭은 파일을 복사하는 가장 간단한 방법입니다.

1. 왼쪽 창에서 **로컬 폴더**(예: `D:\Media`)를 엽니다.  
2. 오른쪽 창에서 **Wasabi 버킷/폴더**를 엽니다.  
3. 왼쪽에서 파일이나 폴더를 선택합니다.  
4. 오른쪽 창으로 드래그하여 원하는 위치에 놓습니다.  
5. RcloneView가 전송 작업을 시작하며, 진행 상황은 **Transfer** 탭에 표시됩니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="wasabi drag and drop" class="img-large img-center" />
다중 선택, 마우스 오른쪽 버튼 클릭 작업 등에 대한 자세한 내용은 다음을 참고하세요:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 4.2 폴더 비교 후 변경된 파일 복사

복사하기 전에 **차이점**을 확인하고 싶다면 **Compare** 기능을 사용하세요.

일반적인 사용 사례: 로컬 백업 폴더와 Wasabi 백업 폴더를 비교합니다.

1. 왼쪽 창에서 **원본 폴더**(예: 로컬 또는 다른 클라우드)를 엽니다.  
2. 오른쪽 창에서 **Wasabi 대상 폴더**를 엽니다.  
3. 상단 **Home** 메뉴에서 **`Compare`**를 클릭합니다.  
4. RcloneView는 다음을 표시합니다:
   - 왼쪽에만 있는 파일 (원본에만 있음)  
   - 오른쪽에만 있는 파일 (대상에만 있음)  
   - 변경된 파일 (크기, 타임스탬프 또는 체크섬이 다름)  
5. 이동하려는 항목을 선택하고 **Copy →**(또는 반대 방향은 **← Copy**)를 클릭합니다.

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="wasabi and local compare and copy" class="img-large img-center" />
더 자세히 알아보기:  
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### 4.3 로컬 디스크와 Wasabi 간 동기화 작업

반복적인 백업이나 미러링에는 **Sync**를 사용하세요. 동기화는 대상을 원본과 일치시킵니다.

일반적으로 사용되는 세 가지 패턴이 있습니다:

- **즉시 동기화** (한 번 바로 실행)  
- **저장된 동기화 작업** (필요할 때 다시 실행)  
- **예약된 동기화 작업** (일정에 따라 자동 실행)  

> ⚠️ 동기화는 대상을 원본과 일치시키므로, 대상에만 존재하는 파일은 삭제될 수 있습니다. 실행하기 전에 동기화 설정을 주의 깊게 검토하세요.

#### 4.3.1 즉시 동기화 (일회성)

1. 왼쪽 창에서 **원본 폴더**(예: 로컬 폴더)를 엽니다.  
2. 오른쪽 창에서 **대상 Wasabi 폴더**를 엽니다.  
3. **Home** 메뉴에서 **`Sync`**를 클릭합니다.  

<img src="/support/images/en/tutorials/wasabi-and-local-instant-sync.png" alt="wasabi and local instant sync" class="img-large img-center" />

그런 다음 **Sync** 대화 상자에서:

1. **Configure Storage**에서 원본과 대상을 확인합니다.  
2. 필요하다면 **Advanced Settings** 또는 **Filtering Settings**를 조정합니다.  
3. 변경 사항을 미리 보고 싶다면 먼저 **Dry Run**을 실행합니다.  
4. **Run**을 클릭하여 동기화를 시작합니다.

<img src="/support/images/en/tutorials/wasabi-configure-sync-job.png" alt="wasabi configure sync job" class="img-large img-center" />
동기화를 실행한 후에는 파일 전송 진행 상황을 실시간으로 모니터링할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="wasabi real time monitoring transferring" class="img-large img-center" />

참고:  
- [Synchronize Remote Storages Instantly](/howto/rcloneview-basic/synchronize-remote-storages)

#### 4.3.2 재사용을 위한 동기화 작업 저장

동일한 로컬 → Wasabi 백업을 정기적으로 실행할 예정이라면:  
위와 같이 동기화를 구성합니다 (원본은 왼쪽, Wasabi 대상은 오른쪽).    

1. Sync 대화 상자에서 즉시 실행 대신 **Save to Jobs**를 선택합니다.  
2. `SyncLocalToWasabi`처럼 알아보기 쉬운 이름을 작업에 부여합니다.  
3. 이후 업데이트된 백업이 필요할 때마다 **Job Manager**를 열어 작업을 수동으로 실행합니다.

<img src="/support/images/en/tutorials/wasabi-saved-sync-job-execution.png" alt="wasabi saved sync job execution" class="img-large img-right" />  
지원되는 플랫폼(예: Windows)에서는 작업이 완료되면 RcloneView가 시스템 알림을 표시할 수 있습니다.

참고:  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

#### 4.3.3 Wasabi 자동 백업 예약 (작업 예약)

Wasabi로의 백업을 완전히 자동화하려면 동기화 작업을 예약하세요.

> 📌 **작업 예약은 PLUS 기능입니다.** 예약 기능을 사용하려면 [PLUS 라이선스](https://rcloneview.com/src/pricing.html)가 필요합니다.

툴바에서 **Job Manager**를 엽니다.    
1. Wasabi 동기화 작업(예: `LocalToWasabi_DailyBackup`)을 선택하고 **Edit Job**을 클릭하거나, 현재 탐색기 선택 항목으로 새 작업을 생성합니다.  
2. **Step 4: Scheduling**으로 이동합니다.  
3. **Run whenever time units ~**를 활성화하고 일정을 설정합니다 (예: 매일 01:00).  
4. **Simulate**를 사용하여 다가오는 실행 시간을 미리 봅니다.  
5. 작업을 저장하고 RcloneView를 계속 실행 상태로 유지합니다. 작업이 자동으로 실행됩니다.

<img src="/support/images/en/tutorials/scheule-automatic-wasabi-backup.png" alt="scheule automatic wasabi backup" class="img-large img-center" />


더 자세한 내용은 다음을 참고하세요:  
- [Job Scheduling and Automated Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

### 4.4 Mount를 사용하여 Windows 탐색기에서 Wasabi 사용

Wasabi 버킷을 시스템에 **가상 드라이브 또는 폴더**로 마운트한 다음, 평소처럼 Windows 탐색기(또는 macOS의 Finder)를 사용할 수 있습니다.

일반적인 흐름:

Wasabi 리모트가 구성되어 있고 정상 작동하는지 확인하세요.  
1. 마운트할 Wasabi 폴더를 선택합니다.  
2. RcloneView 탐색기 오른쪽 상단의 **Mount** 아이콘을 클릭합니다.  
3. **Save and mount** 버튼을 클릭하여 마운트를 시작합니다.  
4. 잠시 후 OS에 새 드라이브 또는 폴더가 나타납니다. 해당 경로를 탐색하면 RcloneView/rclone을 통해 Wasabi에서 데이터를 직접 읽고 쓸 수 있습니다.

<img src="/support/images/en/tutorials/mount-wasabi-as-local-drive.png" alt="mount wasabi as local drive" class="img-large img-center" />
자세한 내용:  
- [Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

---

## 5. 도움을 받을 수 있는 곳

- RcloneView 문서 및 사용법 가이드: [https://rcloneview.com/support](https://rcloneview.com/support)  
- Wasabi 문서 포털: [https://docs.wasabi.com](https://docs.wasabi.com)  

Wasabi의 S3 호환 객체 스토리지와 RcloneView의 시각적 작업 관리를 결합하면 rclone 명령줄 문법을 배우지 않고도 안정적인 백업, 동기화, 마이그레이션 워크플로를 구축할 수 있습니다.

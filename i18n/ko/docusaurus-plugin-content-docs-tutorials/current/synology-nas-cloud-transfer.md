---
sidebar_position: 3
description: "로컬 네트워크에서 Synology NAS를 자동으로 감지하고, WebDAV, SMB, SFTP를 이용해 RcloneView에 연결하는 방법을 알아보세요."
keywords:
  - rcloneview
  - Synology NAS
  - 자동 감지
  - NAS to cloud transfer
  - SMB
  - WebDAV
  - SFTP
  - Synology integration
  - cloud storage sync
  - cloud backup
  - google drive
  - onedrive
  - drag and drop
  - job scheduler
  - multi-cloud management
tags:
  - RcloneView
  - Tutorial
  - synology
  - NAS
  - auto-detection
  - cloud-file-transfer
  - webdav
  - sftp
  - cloud-migration
  - multi-cloud
  - sync
  - job
  - drag-and-drop
date: 2025-09-11
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# RcloneView로 손쉽게 연동하는 Synology NAS: 자동 감지, 설정 및 파일 전송

**RcloneView**를 사용하면 Synology NAS를 Google Drive, OneDrive, iCloud 같은 클라우드 서비스에 손쉽게 연결할 수 있습니다. 자동 감지 기능, SMB, WebDAV, SFTP 내장 지원, 복잡한 설정 없이도 NAS와 클라우드 드라이브 간에 파일을 전송, 동기화, 작업 예약할 수 있습니다—모두 사용자 친화적인 GUI에서 처리됩니다.

## **✅ NAS-클라우드 전송에 RcloneView를 사용해야 하는 이유**

Synology NAS를 홈 서버, 사무실 백업, 미디어 저장소로 사용하고 있다면 클라우드 스토리지 계정도 함께 사용하고 있을 가능성이 큽니다. RcloneView를 사용하면 파일을 수동으로 다운로드하거나 명령줄 도구를 익힐 필요가 없습니다.

대신 다음을 제공합니다:

- 🚀 로컬 네트워크 내 NAS 장치 자동 감지
    
- 🔄 NAS와 클라우드 스토리지 간 동기화 및 전송 작업
    
- 👨‍💻 WebDAV, SMB, FTP, SFTP를 위한 GUI 기반 설정
    
- 📅 NAS에서 클라우드로의 자동 백업 작업 예약
    
- ✅ 동기화 전 폴더 내용 비교
    
- 🧠 명령줄 지식 불필요
  

초보자든 시스템 관리자든, **RcloneView는 NAS-클라우드 관리를 간단하게 만들어줍니다**.

## **🧰 1단계: 로컬 네트워크에서 NAS 감지**
  

RcloneView는 로컬 네트워크를 자동으로 스캔하여 Synology NAS 장치를 찾습니다.

<img src="/support/images/en/tutorials/synology-nas-auto-detect.png" alt="synology nas auto detect" class="img-medium img-center" />


- NAS와 컴퓨터가 **동일한 로컬 네트워크**에 있는지 확인하세요.
    
- 감지된 NAS 장치는 다음 정보를 포함한 목록으로 표시됩니다:
    
    - 장치 이름, IP, MAC 주소, DSM 포트
        
    - **DSM(DiskStation Manager)**을 여는 링크


:::info VLAN 환경에서 NAS 자동 감지가 작동하지 않는 경우
VLAN(Virtual Local Area Network)을 사용하는 경우, RcloneView가 Synology NAS를 자동으로 감지하지 못할 수 있습니다.  

이는 자동 검색 기능이 멀티캐스트 또는 브로드캐스트 프로토콜에 의존하는데, 보안 및 트래픽 격리 목적으로 VLAN 간에 이러한 프로토콜이 일반적으로 제한되거나 차단되기 때문입니다.
:::

  
### 연결 방식 선택

  드롭다운에서 연결 방식을 선택하세요:

- **WebDAV** (기본값, 권장)
- **SMB**
- **FTP**
- **SFTP**

**🔗 각 방식을 먼저 Synology에서 설정해야 하나요?**

공식 DSM 설정 가이드를 참고하세요:

- [Synology에서 WebDAV 설정하기](https://kb.synology.com/en-global/DSM/help/WebDAVServer/webdav_server)
- [Synology에서 SMB 활성화하기](https://kb.synology.com/en-global/DSM/help/SMBService/smbservice_smb_settings)
- [Synology에서 FTP 설정하기](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_setting) 
- [Synology에서 SFTP 설정하기](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_sftp) 

:::important 포트 포워딩 및 DDNS 설정

NAS가 라우터 뒤에 있거나 NAT(Network Address Translation) 환경에서 운영 중이라면, DSM에서 WebDAV, SMB, FTP, SFTP를 활성화한 후 라우터에서 **포트 포워딩을 설정**해야 합니다.

📘 자세히 알아보기: [Synology 포트 포워딩 가이드](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id5)

또한, **IP 주소 대신 도메인 기반 접속**으로 인터넷을 통해 NAS에 접속하려면 Synology의 **DDNS(Dynamic DNS)** 서비스를 설정할 수 있습니다.

🌐 자세히 알아보기: [Synology DDNS 설정 가이드](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id3)

:::


## **🔗 2단계: Synology NAS를 리모트로 추가**

NAS와 연결 방식을 선택하면 RcloneView가 자동으로 **`+ New Remote`** 마법사로 안내합니다:

- **Provider**는 선택한 연결 방식(예: WebDAV, SMB, SFTP)에 따라 자동으로 선택됩니다.
- **Remote Name**은 자동으로 채워집니다(예: `Synology-28`) — 원하는 경우 변경할 수 있습니다.
- **URL & Port**:  
  - **WebDAV**의 경우, 전체 URL을 입력하세요(예: `https://abc.synology.me:5006`)  
  - **SMB / FTP / SFTP**의 경우, **호스트**(예: `192.168.1.100`)와 해당 **포트**를 입력하세요:
    - SMB는 `445`  
    - FTP는 `21`  
    - SFTP는 `22`
- **사용자 이름 및 비밀번호**: 공유 폴더에 접근할 때 사용하는 NAS 계정 자격 증명을 입력하세요.

<div class="img-grid-3">
<img src="/support/images/en/tutorials/add-synology-webdav-remote.png" alt="add synology webdav remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-smb-remote.png" alt="add synology smb remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-sftp-remote.png" alt="add synology sftp remote" class="img-medium img-center" />
</div>

📌 **각 방식에 대해 더 도움이 필요하신가요?**  
자세한 설정 가이드는 다음과 같습니다:

- 👉 [SFTP 리모트 추가 방법](/howto/remote-storage-connection-settings/sftp)
- 👉 [WebDAV 리모트 추가 방법](/howto/remote-storage-connection-settings/webdav)



✅ 추가가 완료되면 NAS 리모트가 리모트 목록에 나타납니다.  
그런 다음 **Explorer** 패널에서 열어 파일을 탐색하거나 전송을 시작할 수 있습니다.

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## **💽 2.5단계: NAS를 로컬 드라이브로 마운트하기 (Explorer/Finder)**

Explorer 툴바의 Mount 버튼을 사용하여 모든 NAS 폴더를 Windows에서 로컬 드라이브(예: `W:`)로, 또는 macOS Finder의 위치로 마운트할 수 있습니다.

### 마운트 방법

1. RcloneView **Browse/Explorer**에서 NAS 리모트를 열고 마운트할 폴더로 이동합니다.
2. 상단 툴바에서 **Mount(<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />)** 아이콘을 클릭합니다.
3. 옵션을 설정합니다:
   - Windows: 드라이브 문자를 선택합니다(자동 또는 직접 선택)
   - macOS: 마운트 폴더 이름을 확인합니다(기본값은 `~/homefolder/<Remote name>` 형식),
4. **Save and mount**를 클릭합니다. 폴더가 로컬 디스크로 표시됩니다:
   - Windows: "내 PC" 아래, 예: `synology-28-webdav … (W:)`
   - macOS: Finder "위치" 아래

<img src="/support/images/en/tutorials/mount-synology-nas-as-local-drive.png" alt="mount synology nas as local drive" class="img-medium img-center" />
                
:::tip 마운트 해제
마운트를 해제하려면 RcloneView에서 **Unmount**를 클릭하거나 OS에서 드라이브를 꺼내세요.
:::

:::note 사전 준비 사항
`rclone mount`를 통한 마운트는 OS 파일시스템 드라이버가 필요할 수 있습니다. 설치되어 있지 않다면 아래 링크를 참고하세요:
- Windows: [WinFsp](https://winfsp.dev/)
- macOS: [macFUSE](https://osxfuse.github.io/)

성능을 위해 RcloneView는 대량 작업 중 **VFS 캐시**를 활성화합니다. 네트워크 상태에 따라 초기 메타데이터 로딩에 다소 시간이 걸릴 수 있습니다.
:::

전체 내용 및 추가 방법은 다음을 참고하세요:

- [방법 1: Remote Explorer에서 마운트](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- [방법 2: Mount Manager를 통한 마운트](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)
- [마운트된 드라이브 보기 및 관리](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)
- [시스템 트레이에서 빠른 마운트](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)

## **🚚 3단계: 파일 전송 또는 동기화**

  
NAS를 리모트로 연결하면 RcloneView는 이를 클라우드 스토리지와 관리할 수 있는 **4가지 강력한 방법**을 제공합니다.

  
### **🖱️ 방법 1: 드래그 앤 드롭**

1. **Browse** 탭을 엽니다.
    
2. 한쪽 패널에 **NAS** 리모트를, 다른 쪽 패널에 클라우드 리모트(예: Google Drive)를 불러옵니다.
    
3. 한 패널에서 파일을 드래그하여 다른 패널에 놓기만 하면 됩니다.
    
4. 전송이 즉시 시작됩니다. **Transfer Logs** 탭에서 진행 상황을 모니터링할 수 있습니다.
    
<img src="/support/images/en/tutorials/synology-nas-to-google-drag-and-drop.png" alt="synology nas to google drag and drop" class="img-medium img-center" />

  👉 자세히 알아보기: [리모트 스토리지 탐색](/howto/rcloneview-basic/browse-and-manage-remote-storage)


### **🔍 방법 2: 폴더 내용 비교**

1. Explorer 패널에서 NAS와 클라우드 폴더를 모두 엽니다.
    
2. 상단 메뉴의 **Home** 탭에서 **Compare**를 클릭합니다.
    
3. RcloneView가 다음을 강조 표시합니다:
    
    - 한쪽에만 있는 파일
        
    - 크기 또는 체크섬이 충돌하는 파일
        
    - 동일한 파일
        
    
4. **Copy →**, **← Copy**, 또는 **Delete**를 사용하여 파일에 대한 작업을 수행합니다.
    
<img src="/support/images/en/tutorials/compare-synology-nas-and-google-drive.png" alt="compare synology nas and google drive" class="img-medium img-center" />

  👉 자세히 알아보기: [폴더 비교](/howto/rcloneview-basic/compare-folder-contents)


### **🔁 방법 3: 동기화 또는 일회성 작업**

1. 소스(NAS)와 대상(클라우드)을 선택합니다.
    
2. **Sync**를 클릭하여 동기화 옵션을 엽니다.
    
3. 방향, 드라이런, 필터 등을 선택합니다.
    
4. 즉시 동기화를 실행하거나 **Save to Jobs**를 클릭합니다.
    

  <img src="/support/images/en/tutorials/sync-job-synology-to-google-drive.png" alt="sync job synology to google drive" class="img-medium img-center" />
  

👉 자세히 알아보기:

- [리모트 스토리지 동기화](/howto/rcloneview-basic/synchronize-remote-storages)
    
- [동기화 작업 생성](/howto/rcloneview-basic/create-sync-jobs)
    


### **⏰ 방법 4: 반복 작업 예약**

1. **Job Manager**로 이동 → **Add Job**을 클릭합니다.
    
2. NAS와 클라우드 폴더를 선택합니다.
    
3. 일정(매일, 매주, cron)을 정의합니다.
    
4. 저장하고 작업을 활성화합니다.
    

  ✅ 예약된 시간에 작업이 백그라운드에서 자동으로 실행됩니다.
 

👉 자세히 알아보기: [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)



## **🧾 요약**

  

RcloneView의 Synology NAS 통합을 사용하면 다음이 가능합니다:

- 기술적 설정 없이 NAS 감지 및 연결
    
- SMB, SFTP, FTP, WebDAV를 손쉽게 사용
    
- 모든 클라우드로 전송, 동기화, 백업 작업 예약
    
  
명령줄도, 스크립트도 필요 없습니다. 빠르고 강력하며 유연한 클라우드 파일 관리를 경험해 보세요.

  
## **🔗 관련 가이드**

- [SFTP 리모트 추가 방법](/howto/remote-storage-connection-settings/sftp)
- [WebDAV 리모트 추가 방법](/howto/remote-storage-connection-settings/webdav)
- [폴더 내용 비교](/howto/rcloneview-basic/compare-folder-contents)
- [리모트 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [리모트 스토리지 동기화](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성](/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리](/howto/rcloneview-basic/execute-manage-job)
- [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

🧠 **지금 바로 RcloneView로 NAS를 클라우드에 연결해 보세요.**

<CloudSupportGrid />

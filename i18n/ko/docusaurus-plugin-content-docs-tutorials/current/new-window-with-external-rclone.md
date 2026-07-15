---
sidebar_position: 5
description: "RcloneView를 AWS EC2에서 실행 중인 외부 Rclone 인스턴스에 연결하여 Google Drive와 AWS S3를 클라우드에서 직접 동기화하는 방법을 알아보세요."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - google drive
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
tags:
  - RcloneView
  - aws-ec2
  - google-drive
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - cloud-to-cloud
  - aws-s3
date: 2025-06-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# EC2의 외부 Rclone을 통해 AWS S3와 Google Drive 동기화하기

**RcloneView**를 사용하면 내장된 **임베디드 Rclone** 덕분에 클라우드 스토리지 서비스 간(예: Google Drive ↔ AWS S3) 데이터 동기화가 간단합니다. RcloneView를 설치하면 이 임베디드 엔진이 자동으로 포함되며, 일반적으로 **로컬 PC**에서 파일 전송을 관리하는 데 사용됩니다.

하지만 임베디드 Rclone을 사용하면 **모든 전송 트래픽이 로컬 컴퓨터를 거쳐 흐르게** 됩니다. 이는 특히 대용량 데이터셋을 동기화하거나 느린 네트워크에서 작업할 때 속도를 크게 저하시킬 수 있습니다.

예를 들어, 임베디드 Rclone을 사용하여 **Google Drive에서 AWS S3**로 파일을 동기화하면 파일을 로컬 머신으로 다운로드한 다음 다시 S3로 업로드하는 과정을 거치게 됩니다. 이 이중 전송은 지연 시간을 늘릴 뿐만 아니라 로컬 대역폭도 소모합니다.

<img src="/support/images/en/tutorials/sync-aws-s3-and-google-drive-via-ec2.png" alt="sync aws s3 and google drive via ec2" class="img-medium img-center" />
이 경우 더 나은 해결책은 **AWS EC2 서버**와 같은 클라우드 인스턴스에서 **Rclone을 직접 실행**하는 것입니다. RcloneView를 **EC2에서 실행 중인 외부 Rclone**에 연결하면 다음과 같은 이점을 얻을 수 있습니다.

- 로컬 PC를 거치는 트래픽 경로를 피할 수 있습니다  
- 클라우드 내에서 직접 클라우드 간 전송을 수행할 수 있습니다 (Google → EC2 → S3)  
- 더 빠른 클라우드 네트워크 인프라를 활용할 수 있습니다    

이 아키텍처는 성능을 크게 향상시키고 로컬 디바이스의 부하를 줄여줍니다.

이 튜토리얼에서는 **RcloneView의 새 창(New Window) 기능**을 사용하여 **EC2의 외부 Rclone**에 연결한 다음, 전적으로 클라우드에서 **Google Drive**와 **AWS S3** 간에 파일을 동기화하는 방법을 안내합니다.

:::caution AWS EC2 및 네트워크 전송 요금이 부과될 수 있습니다  

EC2 인스턴스에서 Rclone을 실행하면 전송 속도가 빨라질 수 있지만, **AWS는 컴퓨팅 사용량 및 다른 서비스로의 아웃바운드 데이터 전송에 대해 요금을 부과할 수 있습니다**.  

참고: [AWS 요금 – 데이터 전송](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)

:::
  
이 가이드에서는 다음 내용을 다룹니다.

1. AWS EC2 인스턴스에서 **Rclone** 실행 및 설정  
2. RcloneView 새 창 열기  
3. EC2의 **외부 Rclone**에 연결  
4. **Google Drive** 및 **AWS S3** 리모트 추가  
5. 향상된 성능으로 두 스토리지 간 파일 직접 동기화

---

## 파트 1: EC2에 Rclone 배포하기 (외부 Rclone)

AWS EC2 가이드를 따라 Ubuntu를 실행하고, 포트 5572를 열고, Rclone을 설치한 다음 `rcd` 데몬을 실행하세요.  

👉 참고: [AWS EC2 서버에서 Rclone 실행하는 방법](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
 
**핵심 사항**:

- `rclone rcd`가 `--rc-addr=0.0.0.0:5572`로 실행 중입니다  
- EC2 보안 그룹에서 포트 `5572`를 엽니다
- HTTP Basic 인증이 설정되어 있습니다 (`--rc-user`, `--rc-pass`)  
- 다음 명령으로 데몬을 실행합니다:

 ```bash
   rclone rcd --rc-user=admin --rc-pass=admin --rc-addr=0.0.0.0:5572
```

- 다음과 같이 접근을 확인합니다:

```bash
curl -X POST -u admin:admin "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"

```



---

## 파트 2: RcloneView 새 창 열기

연결을 체계적으로 관리할 수 있도록, RcloneView는 각 창이 자체 Rclone 엔진으로 동작하도록 지원합니다.

1. **RcloneView**를 실행합니다
    
2. `Home` 메뉴에서 **`New Window`** 버튼을 클릭합니다
    
3. 새 애플리케이션 창이 열립니다. 이 인스턴스는 메인 창과 독립적이며 자체 연결 컨텍스트를 유지합니다.
    

  📌 _다음 단계에서 이 창을 외부 Rclone(EC2)에 연결합니다._

  
👉 자세히 알아보기: [New Window로 여러 Rclone 연결 사용하기](/howto/rcloneview-advanced/multi-window)

---

## 파트 3: EC2에서 호스팅되는 외부 Rclone 연결하기

**새로 열린 창**에서 다음 단계에 따라 EC2에서 호스팅되는 외부 Rclone에 연결합니다.

1. `Settings` 메뉴에서 **`Connection Manager`**를 엽니다.

2. **`New Connection`**을 클릭하여 새 Rclone 연결 프로필을 생성합니다.

3. 필요한 항목을 입력합니다:

    - **Display Name**: `ec2-rclone` (원하는 이름으로 지정 가능)

    - **Remote Address**: `http://<EC2-PUBLIC-IP-or-DNS-NAME>:5572`

    - **Username / Password**: 파트 1에서 Rclone 데몬을 시작할 때 설정한 값을 사용합니다  
      (예: `--rc-user=admin`, `--rc-pass=admin`)

4. **`Test Connection`**을 클릭하여 설정을 확인합니다.  
   연결 성공 응답이 표시되어야 합니다.

5. 테스트를 통과하면 **`Save`**를 클릭한 다음 **`Connect`**를 클릭합니다.

6. 이제 EC2에서 실행 중인 **외부 Rclone 인스턴스**에 연결되었으며, 창 상단에 연결 상태가 표시됩니다.

<div class="img-grid-2">
<img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="new connection to ec2 rclone" class="img-medium img-center" />
<img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="connected to ec2 rclone" class="img-medium img-center" />
</div>

👉 자세히 알아보기: [새 외부 Rclone 추가하기](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)


---

## 파트 4: AWS S3 및 Google Drive 리모트 추가하기 (외부 Rclone 경유)

  
EC2에 연결된 RcloneView 창에서 계속 진행합니다:

### ➕ AWS S3 리모트 추가하기

1. `Remote` 메뉴에서 **`+ New Remote`**를 클릭합니다
    
2. **Provider** 탭에서 S3를 검색하여 선택합니다
    
3. **`Options`** 탭에서:
    
    - **`Provider`**를 AWS로 설정합니다
        
    - AWS **`Access Key ID`**와 **`Secret Access Key`**를 입력합니다
        
    - **`Region`**을 설정하고, S3 호환 서비스의 경우 선택적으로 **Endpoint**를 설정합니다
        
    
4. **Save**를 클릭하고 이름을 지정합니다 (예: ec2-s3)
    
👉 자세히 알아보기: [AWS S3 리모트 추가하기](/howto/remote-storage-connection-settings/s3)

### ➕ Google Drive 리모트 추가하기 (OAuth 액세스 토큰 사용)

새로운 브라우저 기반 로그인 흐름을 완료하는 대신, 아래 가이드의 단계에 따라 앞서 확보한 **OAuth 액세스 토큰**을 사용할 수 있습니다:

👉 참고: [브라우저 없이 외부 Rclone에 Google Drive 설정하기](/howto/remote-storage-connection-settings/ec2-google-drive-connection)

1. `Remote` 메뉴에서 **`+ New Remote`**로 이동합니다
2. 제공자로 **Google Drive**를 선택합니다
3. **Options** 탭에서 아래로 스크롤하여 **Show advanced options**를 클릭합니다
4. 앞서 복사한 토큰을 **`token`** 필드에 붙여넣습니다
5. 리모트 이름을 지정하고(예: `ec2-gdrive`) 저장합니다

  <img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />


---

## 파트 5: AWS S3와 Google Drive 간 파일 동기화하기

 이제 EC2 Rclone 인스턴스를 통해 Google Drive와 S3 간에 파일을 전송할 수 있습니다.

  ### **📁 방법 A: 필요할 때 비교 후 동기화하기**

1. **Browse** 탭으로 이동합니다
    
2. 왼쪽 창에 **Google Drive 리모트**를 불러옵니다 (ec2-gdrive:)
    
3. 오른쪽 창에 **AWS S3 리모트**를 불러옵니다 (ec2-s3:)
    
4. 상단 메뉴에서 **Compare**를 클릭합니다
    
5. 차이를 확인합니다:
    
    - 한쪽에만 존재하는 파일
        
    - 크기가 다른 파일
        
    - 완전히 일치하는 파일
        
    
6. **Copy →**, **← Copy**, 또는 **Delete**를 사용하여 동기화합니다
    

💡 진행 상황은 상태 표시줄과 전송 로그 탭에 표시됩니다.

  👉 자세히 알아보기: [폴더 내용 비교하기](/howto/rcloneview-basic/compare-folder-contents)

---

### **🕒 방법 B: 예약 동기화 작업 설정하기**

1. **Home → Job Manager**로 이동한 다음 **Add Job**을 클릭합니다
    
2. **Sync**를 선택합니다
    
    - Source: ec2-gdrive:folder
        
    - Destination: ec2-s3:folder
        
    
3. 다음을 설정합니다:
    
    - 동기화 방향
        
    - 필터링 규칙 (선택 사항)
        
    
4. (선택 사항) **Scheduling**을 활성화합니다
    
    - 시간 패턴을 설정합니다
        
    - 내장 시뮬레이터로 예약을 미리 확인합니다
        
    
5. **Save & Enable**을 클릭합니다
    

  예약이 완료되면 RcloneView는 EC2에서 호스팅되는 Rclone 백엔드를 사용하여 동기화를 자동으로 실행합니다.

👉 자세히 알아보기:
- [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리하기](/howto/rcloneview-basic/execute-manage-job)
- [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)
  
---

## 최종 확인

- **Transfer Log** 또는 **Job History** 패널에서 동기화가 성공적으로 완료되었는지 확인합니다
    
- EC2가 계속 연결되어 응답하는지 주기적으로 점검합니다
    

---

## 🔗 관련 가이드

- [AWS EC2 서버에서 Rclone 실행하는 방법](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [New Window로 여러 Rclone 연결 사용하기](/howto/rcloneview-advanced/multi-window)
- [새 외부 Rclone 추가하기](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [AWS S3 리모트 추가하기](/howto/remote-storage-connection-settings/s3)
- [폴더 내용 비교하기](/howto/rcloneview-basic/compare-folder-contents)
-  [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리하기](/howto/rcloneview-basic/execute-manage-job)
- [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)



<CloudSupportGrid />

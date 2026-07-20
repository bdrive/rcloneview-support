---
sidebar_position: 12
description: "외부 Rclone 데몬을 실행하고 RcloneView로 제어하여 OneDrive의 파일을 고속으로 Wasabi로 이동하세요."
keywords:
  - rcloneview
  - rclone
  - external rclone
  - onedrive
  - wasabi
  - s3 compatible
  - cloud migration
  - cloud sync
  - cloud transfer
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - onedrive
  - wasabi
date: 2025-07-15
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# 외부 Rclone을 통해 OneDrive를 Wasabi로 이동하기

Microsoft 365 데이터 세트가 큰 경우, 노트북을 통해 이동하면 느리고 불안정할 수 있습니다. 클라우드 VM(EC2, GCE 또는 모든 Linux 호스트)에서 **Rclone**을 실행하고 **RcloneView**로 제어하면 트래픽이 데이터 센터 안에 머물고, 가정용 네트워크의 병목 현상을 피할 수 있으며, 브라우저 없는 인증도 가능해집니다.

이 튜토리얼에서는 다음을 진행합니다.

1. 원격 서버에서 외부 엔진으로 **rclone rcd**를 실행합니다.
2. 해당 외부 Rclone에 연결하는 **새 RcloneView 창**을 엽니다.
3. **OneDrive**와 **Wasabi** 리모트를 추가합니다(헤드리스/CLI 전용 인증 경로 포함).
4. 로컬 대역폭을 사용하지 않고 OneDrive에서 Wasabi로 복사, 동기화 또는 작업을 예약합니다.

## 1부. 서버에 Rclone 배포하기 (외부 Rclone)

1. 소형 Linux VM을 실행합니다(예: AWS의 `t3.medium` 또는 동급 사양).  
2. TCP **5572** 포트를 사용자 IP로 개방하거나 SSH로 터널링합니다.  
3. Rclone을 설치합니다.
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. 인증과 함께 원격 제어 데몬을 시작합니다.
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
5. 노트북에서 접속 가능한지 확인합니다.
```bash
curl -u admin:admin -X POST "http://<SERVER-IP>:5572/rc/noop"
```
   `{}` 응답이 오면 데몬이 RcloneView와 연결될 준비가 된 것입니다.

👉 다시 확인이 필요하신가요? [AWS EC2에서 Rclone 실행하기](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)를 참고하세요.

## 2부. 새 RcloneView 창 열기

각 RcloneView 창은 서로 다른 Rclone 인스턴스와 연결될 수 있습니다.

1. **RcloneView**를 실행합니다.  
2. **Home** 메뉴에서 **`New Window`**를 클릭합니다.  
3. 두 번째 창이 열리며, 이 창은 방금 실행한 외부 Rclone에 연결됩니다.

👉 자세히 알아보기: [New Window로 여러 Rclone 연결 사용하기](/howto/rcloneview-advanced/multi-window)

## 3부. RcloneView를 외부 Rclone에 연결하기

새 창에서:

1. **Settings -> Connection Manager** -> **New Connection**을 엽니다.  
2. 다음 항목을 입력합니다.

| 필드          | 값                              |
| -------------- | ---------------------------------- |
| Display Name   | `external-rclone`                  |
| Remote Address | `http://<SERVER-IP>:5572`          |
| Username       | `admin`                            |
| Password       | `admin`                            |

3. **Test Connection** -> **Save** -> **Connect**를 클릭합니다. 상태 표시줄에 외부 데몬에 연결되었다고 표시됩니다.

## 4부. Wasabi와 OneDrive 리모트 추가하기 (외부 Rclone 내부)

지금 생성하는 모든 리모트는 외부 Rclone 프로세스 내부에 존재하며, 연결된 RcloneView 창에서 공유됩니다.

### ➕ Wasabi 추가하기 (S3 호환)

1. **Remote** 탭 -> **`+ New Remote`**로 이동합니다.  
2. **S3 / Wasabi**를 선택합니다.  
3. **Access Key**, **Secret Key**, 그리고 사용 중인 리전의 **엔드포인트**(예: `s3.ap-northeast-2.wasabisys.com`)를 입력합니다.  
4. 리모트를 저장합니다(예: `wasabi-prod`로 이름 지정).

👉 자세한 내용: [RcloneView에서 Wasabi 리모트 추가하는 방법](/tutorials/#2-add-wasabi-as-a-remote-in-rcloneview)

### ➕ OneDrive 추가하기 (로컬 브라우저 없이 가능)

1. 다시 **`+ New Remote`**를 클릭하고 **OneDrive**를 선택합니다.  
2. 서버에 브라우저가 있다면 RcloneView에서 표준 OAuth 절차를 완료합니다.  
3. 서버가 헤드리스 환경이거나 브라우저를 열 수 없다면 헤드리스/CLI 방식을 따릅니다. 브라우저가 있는 다른 기기에서 토큰을 생성한 뒤 서버 측 설정에 붙여넣으면 됩니다.  

👉 단계별 헤드리스 절차: [EC2/헤드리스 환경에서 Microsoft 리모트 추가하기](/howto/remote-storage-connection-settings/ec2-onedrive-headless)
저장 후 Explorer에 **OneDrive**와 **Wasabi** 두 개의 리모트가 표시됩니다.

## 5부. Wasabi로 전송 또는 동기화하기

### 방법 A: 일회성 복사/동기화

1. Explorer에서 한쪽에 **OneDrive**를, 다른 쪽에 **Wasabi**를 엽니다.  
2. OneDrive의 소스 폴더와 Wasabi의 대상 버킷/폴더를 선택합니다.  
3. **`Sync`**(대상을 소스와 일치시킴)를 클릭하거나 단순 복사를 위해 **Copy ->**를 사용합니다.  
4. 필요하다면 먼저 **Dry Run**을 실행한 뒤 **Run**으로 시작합니다. 진행 상황은 **Transfer** 탭에 표시됩니다.

### 방법 B: 작업 저장 또는 예약하기

1. 위와 같이 복사/동기화를 구성한 뒤, 대화 상자에서 **Save to Jobs**를 선택합니다.  
2. **Job Manager**를 열어 저장된 작업을 언제든 다시 실행할 수 있습니다.  
3. 자동화하려면 Job Manager에서 **Schedule**(PLUS 기능)을 활성화하고 원하는 주기를 설정합니다.  
4. 로그와 결과는 **Job History**에서 확인합니다.

👉 작업 및 예약에 관한 더 많은 정보:  
- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)  
- [작업 실행 및 관리하기](/howto/rcloneview-basic/execute-manage-job)  
- [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Wasabi 업로드 속도를 높이는 빠른 팁

- 가능하다면 외부 VM을 Wasabi와 같은 리전에 두어 지연 시간을 줄이세요.  
- 대용량 객체의 경우, `--transfers`와 `--s3-upload-concurrency` 값을 높이면 처리량이 향상될 수 있습니다. CPU와 네트워크 상태를 보며 점진적으로 조정하세요.  
- 파괴적인 동기화 전에는 **Dry Run**을 사용해 변경될 내용을 미리 확인하세요.

## ✅ 마무리

Rclone을 원격 데몬으로 호스팅하고 전용 RcloneView 창에서 제어하면, 로컬 병목 없이 안정적인 OneDrive -> Wasabi 마이그레이션이 가능합니다. 헤드리스 인증 절차 덕분에 브라우저를 사용할 수 없는 환경에서도 문제없이 진행할 수 있으며, 작업/예약 기능으로 반복 실행도 손쉽게 처리할 수 있습니다.

## 🔗 관련 가이드

- **인증 및 리모트**  
  - [EC2/헤드리스 환경에서 Microsoft 리모트 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)  
  - [S3 호환 리모트 추가하는 방법](/howto/remote-storage-connection-settings/s3)  
- **외부 Rclone 및 창**  
  - [New Window로 여러 Rclone 연결 사용하기](/howto/rcloneview-advanced/multi-window)  
  - [AWS EC2에서 Rclone 실행하기](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- **전송 및 자동화**  
  - [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)  
  - [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)  
  - [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

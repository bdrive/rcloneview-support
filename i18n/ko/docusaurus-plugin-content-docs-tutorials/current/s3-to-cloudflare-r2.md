---
sidebar_position: 10
description: RcloneView를 사용하여 Amazon S3에서 Cloudflare R2로 데이터를 마이그레이션하는 방법을 알아보세요.
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - aws s3
  - cloudflare r2
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';


# RcloneView로 AWS S3에서 Cloudflare R2로 마이그레이션하기

오늘날 클라우드 중심의 환경에서 기업과 개발자는 스토리지 비용을 최적화하고, 벤더 종속을 피하며, 데이터 접근성을 개선하고자 합니다. **Amazon S3**는 오랫동안 객체 스토리지의 업계 표준으로 자리 잡았으며, 높은 내구성과 AWS 서비스와의 원활한 통합을 제공해 왔습니다. 하지만 데이터 전송량이 늘어남에 따라 S3의 송신(egress) 비용과 복잡한 청구 방식이 상당한 부담이 될 수 있습니다.

**Cloudflare R2**는 송신 비용이 없고, 투명한 가격 모델을 제공하며, Cloudflare의 방대한 엣지 네트워크를 통한 글로벌 성능을 갖춘, S3와 호환되는 매력적인 대안입니다. S3에서 R2로 마이그레이션하면 다음과 같은 이점을 얻을 수 있습니다.

- **송신 비용을 제거**하여 전체 클라우드 스토리지 비용 절감
- S3 API 호환성과 유연한 멀티 클라우드 구성으로 **벤더 종속 회피**
- **Cloudflare의 글로벌 엣지**를 활용한 더 빠르고 안정적인 데이터 접근
- 사용하기 쉬운 대시보드로 **청구 및 관리 간소화**

클라우드 플랫폼 간 수동 마이그레이션은 번거롭고 오류가 발생하기 쉽습니다. 바로 이 지점에서 **RcloneView**가 차이를 만들어냅니다.

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2.png" alt="transfer files between aws s3 and cloudflare r2" class="img-medium img-center" />

## S3에서 R2 마이그레이션에 RcloneView를 사용해야 하는 이유

RcloneView는 Rclone을 기반으로 구축된 GUI 기반 클라우드 스토리지 관리 도구입니다. AWS S3 및 Cloudflare R2와 같은 **S3 호환 엔드포인트**를 기본적으로 지원하며, 다음과 같은 기능을 제공합니다.

- **액세스 키 / 시크릿 키 인증**에 대한 완전한 지원
- 커스텀 엔드포인트 설정 가능 (R2용)
- 드래그 앤 드롭 파일 마이그레이션을 위한 듀얼 페인 탐색기
- 폴더 비교 및 동기화 도구
- 대량 또는 증분 마이그레이션을 위한 예약 작업
- 상세한 진행 로그 및 오류 처리

테라바이트 단위의 데이터를 이전하든 몇 개의 폴더만 옮기든, RcloneView를 사용하면 명령줄 지식 없이도 자신 있게 마이그레이션을 진행할 수 있습니다.

## 🔄 AWS S3에서 Cloudflare R2로 파일 전송하기

### 1단계: AWS S3 리모트 추가

1. **RcloneView**를 실행하고 **`Remote`** 탭으로 이동한 뒤 **`+ New Remote`**를 클릭합니다.
2. **`Provider`** 탭에서 **Amazon S3**를 선택합니다.
3. **`Options`** 탭에서:
   - `provider`를 `AWS`로 설정합니다
   - **Access Key ID**와 **Secret Access Key**를 입력합니다
   - 리전과 엔드포인트는 별도로 커스터마이징하지 않는 한 기본값으로 두면 됩니다
4. **Save**를 클릭하여 설정을 완료합니다.

👉 자세히 알아보기:   
- [S3 리모트 추가 방법](/howto/remote-storage-connection-settings/s3)
- [AWS S3 액세스 자격 증명 얻는 방법](/howto/cloud-storage-setting/aws-account-info)
### 2단계: Cloudflare R2 리모트 추가

1. 다시 `Remote` 탭에서 **`+ New Remote`**를 클릭합니다.
2. **`Provider`** 탭에서 **S3**를 선택합니다 (맞습니다, 다시 한 번—R2는 S3 프로토콜을 사용합니다).
3. **`Options`** 탭에서:
   - `provider`를 `Cloudflare`로 설정합니다
   - **Cloudflare R2 Access Key**와 **Secret Key**를 입력합니다
   - `endpoint`를 `https://<accountid>.r2.cloudflarestorage.com`으로 설정합니다
1. **Save**를 클릭하여 R2 리모트 설정을 완료합니다.

👉 자세히 알아보기:   
- [S3 리모트 추가 방법](/howto/remote-storage-connection-settings/s3)
- [Cloudflare R2 액세스 자격 증명 얻는 방법](/howto/cloud-storage-setting/cloudflare-r2-credential)

### 3단계: 듀얼 페인 탐색기에서 리모트 열기

1. RcloneView에서 **Browse** 탭으로 이동합니다.
2. 왼쪽 페인에서 `+`를 클릭하고 **AWS S3** 리모트를 선택합니다.
3. 오른쪽 페인에서 `+`를 클릭하고 **Cloudflare R2** 리모트를 선택합니다.
4. 이제 두 서비스를 나란히 보고 관리할 수 있습니다.

<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

---
## 📌 파일 마이그레이션 방법

### 🖱️ 방법 1: 드래그 앤 드롭으로 파일 이동

- 왼쪽에서 AWS S3의 파일 또는 폴더를 선택합니다.
- 오른쪽의 Cloudflare R2 페인으로 드래그 앤 드롭합니다.
- 전송이 자동으로 시작되며, 진행 상황은 **`Transfer`** 탭에 표시됩니다.

👉 자세히 알아보기: [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 🔍 방법 2: 폴더 비교 후 전송

1. 양쪽 페인에서 대응하는 소스(S3)와 대상(R2) 폴더로 이동합니다.
2. `Home` 메뉴에서 **`Compare`**를 클릭합니다.
3. RcloneView가 다음을 강조 표시합니다:
   - S3에만 있는 파일
   - 이미 R2에 있는 파일
   - 크기 또는 타임스탬프가 다른 동일 파일
4. **Copy →**를 클릭하여 선택한 파일을 S3에서 R2로 마이그레이션합니다.
5. 필요하다면 **Delete**로 정리합니다.

👉 자세히 알아보기: [폴더 내용 비교](/howto/rcloneview-basic/compare-folder-contents)

---

### 🔁 방법 3: 동기화 또는 작업(Job) 사용

1. 탐색기 페인에서 동기화하려는 **Cloudflare R2** 폴더와 **AWS S3** 폴더를 선택합니다.
2. `home` 메뉴에서 **`Sync`** 버튼을 클릭합니다.
3. 동기화 옵션(단방향 또는 양방향)을 선택하고, 작업을 미리 보고 확인합니다.
4. RcloneView가 동기화를 실행하고 **`transfer`** 로그 탭에 진행 상황을 표시합니다.

- 반복적이거나 예약된 전송의 경우:
  1. Sync 모달에서 **`Save to Jobs`**를 클릭하거나 **`Job Manager`** → **`Add Job`**을 엽니다.
  2. 소스, 대상, 옵션을 구성합니다.
  3. 저장 후 수동으로 실행하거나 일정을 설정합니다.

👉 자세히 알아보기:
- [원격 스토리지 동기화](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성](/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ 방법 4: 반복 동기화 작업 예약

1. 탐색기 페인에서 동기화 상태를 유지하고 싶은 **Cloudflare R2**와 **AWS S3** 폴더를 선택합니다.
2. **`Home`** 또는 **`Remote`** 메뉴에서 **`Job Manager`**를 열고 **`Add Job`**을 클릭합니다.
3. 소스와 대상을 확인합니다.
4. 일정 편집기를 사용하여 작업이 실행될 시점을 설정합니다. 저장하기 전에 일정을 미리 확인하세요.
5. 저장하고 예약된 작업을 활성화합니다.

RcloneView는 지정한 시간에 동기화를 실행합니다. **`Job History`**에서 실행 세부 정보와 로그를 확인하고, 완료 시 알림을 받을 수 있습니다.

👉 자세히 알아보기: [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)


---

## ✅ 요약

AWS S3에서 Cloudflare R2로 마이그레이션하면 성능을 희생하지 않으면서도 송신 비용과 벤더 종속을 줄일 수 있습니다. RcloneView를 사용하면 전환 과정이 빠르고 안전하며 완전히 시각적으로 이루어집니다.

지금 바로 시도해 보고 Cloudflare R2로 클라우드 스토리지 구성을 미래에 대비하세요.

---

## 🔗 관련 가이드

- [S3 리모트 추가 방법](/howto/remote-storage-connection-settings/s3)
- [AWS S3 액세스 자격 증명 얻는 방법](/howto/cloud-storage-setting/aws-account-info)
- [Cloudflare R2 액세스 자격 증명 얻는 방법](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [폴더 내용 비교](/howto/rcloneview-basic/compare-folder-contents)
- [원격 스토리지 동기화](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성](/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리](/howto/rcloneview-basic/execute-manage-job)
- [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

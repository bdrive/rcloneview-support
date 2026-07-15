---
sidebar_position: 1
description: "RcloneView를 AWS S3에 연결하기 위해 AWS Access Key ID, Secret Access Key, Region 코드를 안전하게 가져오는 단계별 가이드입니다."
keywords:
  - rcloneview
  - rclone
  - aws account
  - access key id
  - secret key id
  - region code
  - s3 setup
  - iam
  - aws s3
  - aws
  - secret access key
tags:
  - RcloneView
  - aws-account
  - secret-key-id
  - access-key-id
  - credentials
  - secret-access-key
  - aws-s3
date: 2025-05-26
author: Jay
---
# Rclone용 AWS Access Key와 Region 가져오는 방법

RcloneView에서 AWS S3를 리모트로 추가하려면 AWS **Access Key ID**, **Secret Access Key**, **Region** 코드가 필요합니다. 이 가이드에서는 AWS 계정에서 이 정보들을 안전하게 생성하는 방법을 단계별로 안내합니다.

## 단계별 안내: AWS Access Key ID와 Secret Access Key 가져오기

Rclone을 AWS S3에 연결하려면 AWS 계정에서 액세스 키를 생성해야 합니다.

1. [AWS Management Console](https://aws.amazon.com/console)에 **로그인**합니다.
2. **IAM (Identity and Access Management)**으로 이동합니다.  
   AWS 서비스 검색창에서 "IAM"을 검색하면 됩니다.
3. 왼쪽 사이드바에서 **Users**를 클릭한 다음 본인의 **IAM 사용자 이름**을 클릭합니다.
4. **Security credentials** 탭으로 이동합니다.
5. **Access keys** 섹션까지 스크롤한 후 **Create access key**를 클릭합니다.
6. 다음을 선택합니다.  
   `✔ Application running outside AWS`
7. 키를 구분하기 쉽도록 필요 시 설명(예: `RcloneView Access`)을 입력합니다.
8. **Create access key**를 클릭합니다.
9. 마지막 화면에서 다음 두 가지를 모두 복사합니다.
   - **Access Key ID**
   - **Secret Access Key**

:::important
⚠️ 이 키들은 **한 번만** 표시됩니다. 반드시 (예: 비밀번호 관리자 등에) **안전하게 보관**하세요.
:::

## AWS S3 Region 확인하는 방법

S3 버킷이 위치한 AWS **Region**도 알아야 합니다. 이는 Rclone 리모트를 설정할 때 필요합니다.

### 방법 1: AWS S3 콘솔에서 확인하기

1. [Amazon S3 Console](https://s3.console.aws.amazon.com/s3/home)에 접속합니다.
2. 목록에서 본인의 버킷을 찾습니다.
3. **Region** 열에 리전이 표시됩니다(예: 서울은 `ap-northeast-2`, 버지니아는 `us-east-1`).

### 방법 2: 공식 리전 목록 참고하기

사용 가능한 모든 리전과 해당 코드는 다음 공식 문서를 참고하세요.

👉 [AWS Region Codes and Endpoints](https://docs.aws.amazon.com/general/latest/gr/s3.html)

:::danger Security Tip
🔒 **AWS 자격 증명을 절대 공개적으로 공유하거나 노출하지 마세요.**  
키를 주기적으로 교체(rotate)하고, 사용하지 않는 키는 **IAM Console**에서 삭제하세요.
:::

---
sidebar_position: 3
description: "Cloudflare R2 자격 증명과 엔드포인트를 얻는 방법"
keywords:
  - rcloneview
  - cloud
  - rclone
  - cloudflare r2
  - r2 endpoint
  - access key id
  - secret access key
  - cloudflare r2 rclone
  - cloudflare s3 api
  - connect r2 to rcloneview
tags:
  - RcloneView
  - Cloud
  - cloud-storage
  - credentials
  - configuration
  - access-key-id
  - secret-access-key
  - secret-key-id
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
# Cloudflare R2 자격 증명과 엔드포인트를 얻는 방법

**Cloudflare R2**를 Rclone 또는 **RcloneView**에 연결하려면 다음 세 가지 핵심 정보가 필요합니다:

- ✅ Access Key ID  
- ✅ Secret Access Key  
- ✅ R2 S3 호환 엔드포인트 URL  

이 가이드는 Cloudflare 대시보드에서 이 정보들을 가져오는 방법을 안내합니다.

---

## 🧰 사전 준비 사항

시작하기 전에 다음을 확인하세요:

- **R2 Object Storage**가 활성화된 Cloudflare 계정이 있어야 합니다.
- [Cloudflare Dashboard](https://dash.cloudflare.com)에 접근할 수 있어야 합니다.
- 클라우드 스토리지 개념에 대한 기본적인 이해가 있으면 도움이 됩니다.

---

## 📦 1단계: R2 버킷 생성 (아직 없는 경우)

1. [Cloudflare Dashboard](https://dash.cloudflare.com)에 로그인합니다.
2. 왼쪽 사이드바에서 **R2 → Object Storage**로 이동합니다.
3. **Create bucket**을 클릭합니다.
4. 버킷의 고유한 이름을 입력합니다.
5. 위치를 선택합니다 (예: **Automatic**, 또는 `westerneurope`와 같은 지역).
6. **Create Bucket**을 클릭합니다.

이 버킷이 RcloneView를 사용해 전송하는 파일들의 저장 위치가 됩니다.

---

## 🔐 2단계: API 자격 증명 생성

R2로 인증하려면 접근 권한을 제공하는 API 토큰을 생성해야 합니다.

### ➕ Access Key와 Secret Key 생성 방법:

1. Cloudflare 대시보드에서 **Storage & databases -> R2 Object storage → Overview**로 이동합니다.
2. **Account Details** 섹션의 **API Tokens** 옆에 있는 **Manage** 버튼을 클릭합니다.

   <img src="/support/images/en/howto/cloud-storage-setting/cloudflare-manage-r2-api-token.png" alt="cloudflare manage r2 api token" class="img-medium img-center" />
   
3. **Create API Token**을 클릭합니다. 사용 목적에 맞는 토큰 유형(Account 또는 User)을 선택합니다.

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-create-user-api-token.png" alt="cloudflare create user api token" class="img-medium img-center" />

3. 토큰에 이름을 지정합니다 (예: `Rclone Access`).
4. 권한을 선택합니다:
   - `Admin Read & Write` (전체 접근)  
	❗다른 권한으로는 버킷 접근이 허용되지 않을 수 있습니다.
1. 적용 범위를 선택합니다:
   - 모든 버킷
   - 특정 버킷만
7. 필요한 경우 만료 기간을 설정합니다 (또는 "Forever"로 둡니다).
8. **Create API Token**을 클릭합니다.

토큰이 생성되면 Cloudflare가 다음을 보여줍니다:

- **Access Key ID**
- **Secret Access Key**

:::danger 중요
이 자격 증명은 한 번만 표시됩니다. 반드시 복사하여 안전하게 보관하세요.
:::

---

## **🌐 3단계: R2 엔드포인트 URL 가져오기**

1. Cloudflare 대시보드에서 **R2 → Object Storage**로 이동합니다.  
2. **버킷 이름**을 클릭하여 상세 정보를 엽니다.  
3. **Settings** 탭으로 이동합니다.  
4. **S3 API** 섹션에서 엔드포인트 형식과 계정 정보를 확인할 수 있습니다.    
    
API 토큰이 생성된 방식에 따라 다음 엔드포인트 형식 중 하나를 사용해야 합니다:

 ### 🔐 API 토큰이 Admin 수준 접근 권한을 가지고 모든 버킷에 접근 가능한 경우:

기본 엔드포인트(버킷 경로 없이)를 사용합니다:

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com
```

### 📦 API 토큰이 특정 버킷으로 범위가 지정되어 있거나, 특정 버킷에만 접근하려는 경우:

버킷별 엔드포인트를 사용합니다:

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com/<BUCKET-NAME>
```

**ACCOUNT_ID**와 **버킷 이름**은 모두 버킷의 **Settings** 탭에 있는 **S3 API** 섹션에서 확인할 수 있습니다:

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-r2-s3-api-endpoint.png" alt="cloudflare r2 s3 api endpoint" class="img-medium img-center" />

**RcloneView** 또는 **Rclone CLI**를 통해 Cloudflare R2 리모트를 설정할 때 이 엔드포인트를 사용하세요.

---
   
## ✅ 요약

이제 Cloudflare R2 리모트를 구성하기 위해 다음 값들이 준비되어 있어야 합니다:

| 필드             | 설명                                      |
|------------------|--------------------------------------------------|
| Access Key ID     | Cloudflare API 토큰에서 제공                |
| Secret Access Key | Cloudflare API 토큰에서 제공                |
| Endpoint URL      | R2 버킷 설정에서 확인 (S3 호환 URL) |

이제 새 S3 호환 리모트를 설정할 때 **RcloneView**에 이 값들을 입력하거나, Rclone CLI를 사용할 수 있습니다.

👉 다음: [RcloneView에서 S3 호환 리모트 추가하는 방법](/howto/remote-storage-connection-settings/s3)

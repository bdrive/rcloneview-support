---
sidebar_position: 1
description: "RcloneView를 설치하고 Google Drive를 리모트로 연결하는 방법을 간단한 단계별 가이드로 알아보세요."
keywords:
  - rclone
  - cloud
  - sync
  - rcloneview
  - guide
  - google drive
  - remote storage
  - Quick Start
  - OAuth
tags:
  - RcloneView
  - Cloud
  - Sync
  - getting-started
  - google-drive
  - Remote-Storage
date: 2025-05-26
author: Jay
slug: /
---
# 빠른 시작 가이드

이 가이드는 **RcloneView**를 설치하고 **원격 스토리지(Google Drive)**를 추가하는 과정을 단계별로 안내합니다.

## **1단계: RcloneView 설치하기**

1. [**RcloneView 다운로드 페이지**](https://rcloneview.com/src/download.html)에서 설치 파일을 다운로드합니다.
2. 다운로드한 설치 파일을 실행하고 화면의 안내에 따라 설치를 완료합니다.
3. 설치가 성공적으로 완료되면 다음과 같은 확인 화면이 표시됩니다.
<img src="/support/images/howto/Completed-install.png" alt="Completed-install" class="img-medium img-center" />

## **2단계: 원격 스토리지 추가하기 (Google Drive 예시)**

### **새 리모트 구성 창 열기**

- 상단 메뉴의 **`Remote`** 아래에서 **`+ New Remote`**를 클릭합니다.
- 또는 Explorer 패널의 **`+`** 버튼을 클릭하고 **`New Remote`**를 선택하여 리모트 구성을 시작할 수 있습니다.
<img src="/support/images/howto/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
### Google Drive 리모트 추가하기

1. 검색창에 **`google`**을 입력합니다.
2. 검색 결과에서 **`Google Drive`**를 선택합니다.
3. 알아보기 쉬운 **`Remote name`**(예: MyGoogleDrive)을 입력합니다.
4. **`Add Remote`**를 클릭하여 리모트 추가를 완료합니다.

:::tip
별표(*)로 표시된 필드는 필수 입력 항목입니다. 저장하기 전에 모든 필수 필드를 입력했는지 확인하세요.
:::
<div class="img-grid-2">
<img src="/support/images/en/howto/new-remote-step1.png" alt="new remote step1" class="img-medium img-center" />
<img src="/support/images/en/howto/add-remote-step2.png" alt="add remote step2" class="img-medium img-center" />
</div>

:::tip OAuth 기반 클라우드 리모트

**Google Drive**, **Dropbox**, **Google Photos**, **OneDrive**, **Box**, **pCloud**, **Yandex Disk**, **premiumize.me**, **put.io**, **HiDrive**와 같이 OAuth(웹 기반 로그인)를 지원하는 대부분의 클라우드 스토리지 제공업체는 `Options` 단계를 건너뛸 수 있습니다—리모트 이름만 지정하고 브라우저를 통해 로그인하면 됩니다.

하지만 **일부 제공업체는** OAuth 로그인 전에 `Options` 탭에서 **추가 설정이 필요합니다**.
- **Zoho WorkDrive** – 지역 선택
- **Google Cloud Storage** – 프로젝트 번호 입력
- **Citrix ShareFile** – 루트 폴더 ID 입력
- **Google Drive Shared with Me** – `shared_with_me` 활성화
- **Box for Business** – box_sub_type에서 `enterprise` 선택

👉 가이드 참고: [웹 브라우저 로그인으로 연결하기](/howto/remote-storage-connection-settings/add-oath-online-login#supported-cloud-providers--setup-requirements)
:::

## **3단계: 원격 스토리지 연결하기 (GoogleDrive 싱글 사인온)**
### 계정 인증

- Google SSO 로그인 페이지로 리디렉션됩니다.
- Google 계정을 선택하거나 **"다른 계정 사용"**을 선택하여 다른 계정으로 로그인할 수 있습니다.

<img src="/support/images/howto/google-choose-account.png" alt="google choose account" class="img-medium img-center" />
:::tip
위에 표시된 비밀번호 기반 로그인 외의 방법을 사용 중이라면 [이 가이드](https://support.google.com/accounts/answer/12849458)를 참고하여 로그인 과정을 완료하세요.
:::

### RcloneView 접근 권한 승인하기

- "계속"을 클릭하여 Google Drive와의 연결을 완료합니다.

<img src="/support/images/howto/google-trust-rclone.png" alt="google trust rclone" class="img-medium img-center" />
- **"Success!"**가 표시된 확인 페이지가 나타납니다.
<img src="/support/images/howto/google-login-complete.png" alt="google login complete" class="img-medium img-center" />
✅ **완료!** 이제 Google Drive 리모트가 성공적으로 연결되어 RcloneView에서 사용할 준비가 되었습니다.


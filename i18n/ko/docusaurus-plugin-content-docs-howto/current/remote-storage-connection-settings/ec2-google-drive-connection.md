---
sidebar_position: 11
description: 웹 브라우저를 사용하지 않고 로컬에서 생성한 OAuth 토큰을 이용해 AWS EC2에서 실행 중인 외부 Rclone에 Google Drive 리모트를 추가하는 방법을 알아보세요.
keywords:
  - rcloneview
  - rclone
  - google drive
  - OAuth
  - token
  - ec2
  - external rclone
  - no browser login
  - headless
  - cloud storage
  - Remote Connection
  - remote storage
tags:
  - Remote-Storage
  - google-drive
  - external-rclone
  - aws-ec2
  - remote-connection
  - cloud-storage
date: 2025-07-07
author: Jay
---
# AWS EC2의 외부 Rclone에 Google Drive 추가 (웹 브라우저 없이)

이 가이드는 **AWS EC2 Ubuntu 서버**와 같이 웹 브라우저를 사용할 수 없는 시스템에서 실행 중인 **외부 Rclone 인스턴스**에 **Google Drive 리모트**를 추가하는 방법을 설명합니다.

이러한 환경에서는 브라우저를 통한 표준 OAuth 로그인 절차를 완료할 수 없습니다. 대신 로컬에 설치된 RcloneView를 사용해 필요한 **OAuth 토큰**을 얻은 다음, EC2에서 실행 중인 외부 Rclone에서 이를 재사용할 수 있습니다.

:::info EC2에서 Rclone 데몬 실행하기
EC2 인스턴스에 Rclone을 설치하고 실행하는 방법은,

다음을 참고하세요: 👉 [AWS EC2에서 Rclone 엔진 실행하는 방법](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

:::

전체 과정은 다음과 같습니다: 브라우저가 있는 머신에서 Google Drive OAuth 토큰을 생성한 다음, RcloneView를 통해 그 토큰을 EC2에서 실행 중인 외부 Rclone에 붙여넣습니다.

---
## ✅ 1단계: Google Drive 토큰 생성 (방법 중 하나 선택)

**방법 A: `rclone authorize "drive"` (가장 빠름)**

1. 브라우저와 동일한 rclone 버전이 설치된 머신에서 다음을 실행합니다.
   ```bash
   rclone authorize "drive"
   ```
2. 브라우저에서 Google 로그인/동의 절차를 완료합니다.
3. 출력된 JSON 토큰 블록을 복사합니다(전체 JSON을 그대로 유지). 이 값을 3단계에서 EC2에 붙여넣게 됩니다.

**방법 B: RcloneView 내장 리모트를 사용해 토큰 복사하기**

1. 로컬 PC에서 내장 Rclone을 사용해 Google Drive를 추가합니다(일반적인 브라우저 OAuth 방식).  
   👉 [빠른 가이드: Google Drive 리모트 추가](../#step-2-adding-remote-storage-google-drive-example)
2. **리모트 관리자**를 열고 Google Drive 리모트를 편집한 다음 **고급 옵션 표시**를 클릭하고 **Token** 필드(JSON)를 복사합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-from-embedded-rclone.png" alt="copy google oauth token from embedded rclone" class="img-medium img-center" />

👉 리모트 편집에 대해 자세히 알아보기: [리모트 설정 편집](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## ✅ 2단계: 외부 Rclone(EC2)에 연결하기

RcloneView에서 **`새 창`**을 열거나 현재 세션을 사용해 EC2에 호스팅된 Rclone에 연결합니다.

- `Settings` -> **`Connection Manager`**를 열어 EC2에 호스팅된 Rclone에 대한 새 연결을 생성하거나, 이미 설정되어 있다면 기존 연결에 접속합니다.

👉 자세히 알아보기: [외부 Rclone 연결](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 자세히 알아보기: [새 창 기능](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## ✅ 3단계: 외부 Rclone에 Google Drive 리모트 추가 (토큰 붙여넣기)

1. EC2에 연결된 창에서 `Remote` 메뉴로 이동해 **`+ New Remote`**를 선택합니다.
2. 제공자로 **Google Drive**를 선택합니다.
3. **`Remote Name`**을 입력하고 **`Show advanced options`**를 클릭합니다.
4. 앞서 복사한 **OAuth 토큰**을 **`Token`** 필드에 붙여넣습니다.
5. **`Add Remote`** 버튼을 클릭해 평소와 같이 설정을 완료합니다.


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-to-external-rclone.png" alt="copy google oauth token to external rclone" class="img-medium img-center" />

:::info **이 오류 팝업은 무시해도 됩니다**
**RcloneView에 아래와 같은 오류 메시지가 표시되더라도 안전하게 무시할 수 있습니다.**
이 메시지가 표시되더라도 대부분의 경우 토큰 설정은 정상적으로 완료됩니다.
대화상자를 닫은 후에는 Google Drive에 정상적으로 접근할 수 있을 것입니다.  
이는 알려진 UI 문제이며, 다음 릴리스에서 사용자 경험을 개선할 예정입니다.
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
설정이 완료되면 EC2 기반 Rclone은 브라우저 지원 없이도 Google Drive에 접근할 수 있습니다. 이제 평소처럼 RcloneView를 사용해 파일을 관리, 동기화, 전송할 수 있습니다.

---

## 🔗 관련 가이드

- [AWS EC2에서 Rclone 엔진 실행하는 방법](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [Google Drive 리모트 추가](/howto/#step-2-adding-remote-storage-google-drive-example)
- [리모트 설정 편집](/howto/rcloneview-basic/remote-manager#edit-remote-settings)
- [외부 Rclone 연결](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [멀티 윈도우 사용법](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

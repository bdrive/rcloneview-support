---
sidebar_position: 12
description: "AWS EC2에 Rclone을 설치하고 실행한 다음, PC의 RcloneView에서 해당 서버에 연결하여 서버에서 브라우저를 사용하지 않고 OneDrive 리모트를 추가합니다."
keywords:
  - rcloneview
  - rclone
  - onedrive
  - headless
  - external rclone
  - aws ec2
  - rclone rcd
  - remote storage
  - cloud migration
tags:
  - Remote-Storage
  - onedrive
  - external-rclone
  - aws-ec2
  - headless
date: 2025-07-15
author: Jay
---
# AWS EC2의 외부 Rclone에 OneDrive 추가하기 (Headless)

:::info 관련 사전 준비 사항
전체 EC2 설정 과정이 필요하다면 👉 [AWS EC2에서 Rclone 엔진 실행하기](/howto/cloud-storage-setting/run-rclone-on-aws-ec2) 문서를 참고하세요.
:::

---

전체 과정은 다음과 같습니다. 브라우저가 있는 컴퓨터에서 OneDrive OAuth 토큰을 생성한 다음, RcloneView를 통해 그 토큰을 EC2에서 실행 중인 외부 Rclone에 붙여넣습니다.

---

## 1단계. OneDrive 토큰 생성하기 (방법 중 하나 선택)

**방법 A: `rclone authorize "onedrive"` 사용 (가장 빠른 방법)**

1. 브라우저와 동일한 버전의 rclone이 설치된 컴퓨터에서 다음을 실행합니다.
   ```bash
   rclone authorize "onedrive"
   ```  
2. 브라우저에서 Microsoft 로그인 및 동의 절차를 완료합니다.  
3. 출력된 JSON 토큰 블록 전체를 복사합니다(JSON 전체를 유지해야 합니다). 이 값을 3단계에서 EC2에 붙여넣게 됩니다.

**방법 B: RcloneView 내장 리모트를 사용해 토큰 복사하기**

1. 로컬 PC에서 내장 Rclone을 사용하여 OneDrive를 추가합니다(일반 브라우저 OAuth 방식).  
2. **리모트 관리자(Remote Manager)**를 열어 OneDrive 리모트를 편집하고 **고급 옵션 표시**를 클릭한 다음, **Token** 필드(JSON)를 복사합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-from-embedded-rclone.png" alt="copy onedrive oauth token from embedded rclone" class="img-medium img-center" />


👉 리모트 편집에 대한 자세한 내용: [리모트 설정 편집](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## 2단계. 외부 Rclone(EC2)에 연결하기

RcloneView에서 **새 창**을 열거나 현재 세션을 그대로 사용하여 EC2에서 호스팅되는 Rclone에 연결합니다.

- `Settings` -> **`Connection Manager`**를 열어 EC2에서 호스팅되는 Rclone에 대한 새 연결을 만들거나, 이미 구성된 연결이 있다면 해당 연결에 접속합니다.

👉 자세히 알아보기: [외부 Rclone 연결하기](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 자세히 알아보기: [새 창 기능](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## 3단계. 외부 Rclone에 OneDrive 리모트 추가하기 (토큰 붙여넣기)

1. EC2에 연결된 창에서 `Remote` 메뉴로 이동하여 **`+ New Remote`**를 선택합니다.
2. 공급자로 **OneDrive**를 선택합니다.
3. **Remote Name**을 입력하고 **고급 옵션 표시**를 클릭합니다.
4. 앞서 복사한 **OAuth Token** 값을 **Token** 필드에 붙여넣습니다.
5. **Add Remote**를 클릭하여 설정을 완료합니다.


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-to-external-rclone.png" alt="copy onedrive oauth token to external rclone" class="img-medium img-center" />
:::info **이 오류 팝업은 무시해도 됩니다**
RcloneView에서 아래와 같은 오류 메시지가 표시되더라도 안전하게 무시할 수 있습니다.
대부분의 경우 이 메시지가 표시되더라도 토큰 구성은 정상적으로 완료됩니다.
대화상자를 닫으면 OneDrive에 정상적으로 접근할 수 있을 것입니다.  
이는 알려진 UI 이슈이며, 다음 릴리스에서 사용자 경험을 개선할 예정입니다.
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
설정이 완료되면 EC2 기반 Rclone은 브라우저 지원 없이도 OneDrive에 접근할 수 있습니다. 이제 평소와 같이 RcloneView로 파일을 관리, 동기화, 전송할 수 있습니다.

---

## 관련 링크

- [AWS EC2에서 Rclone 엔진 실행하기](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- [연결 관리자](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
- [멀티 윈도우 사용법](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)  
- [동기화 작업 생성](/howto/rcloneview-basic/create-sync-jobs)  
- [작업 실행 및 관리](/howto/rcloneview-basic/execute-manage-job)  
- [작업 스케줄링 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

---
sidebar_position: 4
description: "RcloneView에서 파일 동기화 및 접근을 위해 WebDAV를 리모트 스토리지로 설정하는 방법을 알아보세요."
keywords:
  - rcloneview
  - webdav
  - remote storage
  - cloud storage
  - sync
  - webdav configuration
  - rclone
tags:
  - webdav
  - Remote-Storage
  - remote-connection
date: 2025-06-20
author: Jay
---
# WebDAV

## RcloneView를 사용하여 WebDAV 추가하는 방법

### 1단계: 새 리모트 구성 창 열기

- 상단 메뉴의 **`Remote`** 아래에서 **`+ New Remote`**를 클릭합니다.
- 또는 Explorer 패널의 **`+`** 버튼을 클릭하고 **`New Remote`**를 선택하여 리모트 구성을 시작합니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2단계: WebDAV 리모트 추가

#### **`Provider`** 탭에서:
1. **`webdav`**를 검색합니다.
2. 목록에서 **`WebDAV`**를 선택합니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-provider.png" alt="add webdav remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-options.png" alt="add webdav remote options" class="img-medium img-center" />
</div>

#### **`Options`** 탭에서:
3. 리모트 URL을 입력합니다
4. 로그인 사용자 이름을 입력합니다
5. 비밀번호를 입력합니다

<details>
<summary>Options Details</summary>

옵션 상세 정보

| Field          | Description                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`          | WebDAV 리모트 URL (예: https://webdav.example.com/) 사용자 지정 포트 번호도 지정할 수 있습니다 (예: https://webdav.example.com:5020)                                                                          |
| `vendor`       | (선택 사항) 비워 두거나 WebDAV 호환 서비스 제공업체 입력 (예: fastmail, nextcloud, owncloud, sharepoint, sharepoint-ntlm, rclone)  전체 목록 참조: [WebDAV Provider Notes](https://rclone.org/webdav/#provider-notes) |
| `user`         | 로그인 사용자 이름                                                                                                                                                                                                     |
| `pass`         | 로그인 비밀번호 (마스킹 처리됨)                                                                                                                                                                                               |
| `bearer_token` | (선택 사항) 일반적으로 비워 둠                                                                                                                                                                                              |



</details>
#### **`Name`** 탭에서:
6. 이 리모트를 식별할 수 있는 고유한 이름을 입력합니다 (예: `myWebDAV`).

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-name.png" alt="add webdav remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-save.png" alt="add webdav remote save" class="img-medium img-center" />
</div>
#### **`Save`** 탭에서:
5. **`Save`**를 클릭하여 리모트 설정을 완료합니다.

### 3단계: RcloneView에서 추가된 WebDAV 리모트 확인

1. 상단 메뉴에서 **`Remote`** 탭 아래의 **`Remote Manager`**를 클릭합니다.
2. **Remote Manager** 창에 **WebDAV 리모트**가 표시되는지 확인합니다.

✅ **완료!** 이제 WebDAV 리모트가 성공적으로 구성되어 RcloneView에서 사용할 준비가 되었습니다.

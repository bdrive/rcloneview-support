---
sidebar_position: 6
description: "RcloneView에서 Gofile 스토리지를 추가하는 방법을 알아보세요."
keywords:
  - rcloneview
  - rclone
  - gofile
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - gofile
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-05-27
author: Jay
---
# Gofile

## RcloneView(Windows)로 Gofile을 추가하는 방법

### 1단계: 새 리모트 구성 창 열기

- 상단 메뉴의 **`Remote`** 아래에서 **`+ New Remote`**를 클릭합니다.
- 또는 탐색기 창에서 **`+`** 버튼을 클릭하고 **`New Remote`**를 선택하여 리모트 구성을 시작합니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
### 2단계: Gofile 리모트 추가

#### **`Provider`** 탭에서:

1. **`gofile`**을 검색합니다.
2. 목록에서 **`Gofile`**을 선택합니다.

#### **`Options`** 탭에서:

3. **Access Token**을 입력합니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-provider.png" alt="add go file provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-option.png" alt="add gofile remote option" class="img-medium img-center" />
</div>
:::info Access Token을 얻는 방법
 - [https://gofile.io/myprofile](https://gofile.io/myprofile)로 이동합니다.
 - Gofile 계정에 로그인합니다.
- 아래로 스크롤하여 **`Account API Token`**을 찾아 복사합니다.
:::

#### **`Name`** 탭에서:

4. 이 리모트에 **`Remote name`**을 지정합니다 (예: `myGofile`).

#### **`Save`** 탭에서:

5. **`Save`**를 클릭하여 리모트 추가를 완료합니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-name.png" alt="add go file remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-save.png" alt="add gofile remote save" class="img-medium img-center" />
</div>


### 3단계: RcloneView에서 추가된 Gofile 리모트 확인

**RcloneView**를 실행합니다.

1. 메뉴 바에서 **`Remote`** 탭 아래의 **`Remote Manager`**를 클릭합니다.
2. **`Remote Manager`** 창에 **`Gofile`** 리모트가 표시되는지 확인합니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />
</div>


✅ **완료!** 이제 **`Gofile`** 리모트가 성공적으로 구성되어 **RcloneView**에서 사용할 준비가 되었습니다.


## 🔗 추가 자료

- 🔐 토큰 받기: [https://gofile.io/myprofile](https://gofile.io/myprofile)

---
sidebar_position: 9
description: RcloneView에서 Mega 스토리지를 추가하는 방법을 알아보세요.
keywords:
  - rcloneview
  - rclone
  - mega
  - cloud storage
  - remote storage
  - Remote Connection
tags:
  - mega
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-21
author: Jay
---

# Mega

## RcloneView를 사용하여 Mega를 추가하는 방법 (Windows)

### 1단계: 리모트 관리자 열기

- **리모트 관리자(Remote Manager)** 우측 상단에서 **`+ New Remote`**를 클릭합니다.
- 또는 탐색기 창의 **`+`** 버튼을 클릭한 후 **`New Remote`**를 선택하여 리모트 설정을 시작할 수 있습니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2단계: 스토리지 제공자로 Mega 선택

1. **Search Provider** 검색창에 `mega`를 입력합니다.
2. 목록에서 **Mega** 옵션을 클릭합니다.

이후 Mega 설정 화면으로 이동합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/select-mega-to-add-remote.png" alt="select mega to add remote" class="img-medium img-center" />

### 3단계: Mega 리모트 구성하기

양식에 필요한 정보를 입력합니다:

- **Remote name**: 리모트를 구분하기 위한 이름 (예: `MyMega`)
- **user**: **Mega 이메일 주소** (예: `example@gmail.com`)
- **pass**: **Mega 비밀번호**

모든 값을 입력한 후 **`Add Remote`**를 클릭하여 설정을 완료합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-mega.png" alt="remote configure mega" class="img-medium img-center" />

### 4단계: 추가된 리모트 확인하기

추가가 완료되면 새로 만든 Mega 리모트(예: `MyMega`)가 **리모트 관리자(Remote Manager)** 목록에 표시됩니다.

이제 다음을 수행할 수 있습니다:
- **`Open`**을 클릭하여 파일을 탐색합니다.
- 동기화, 복사 또는 마운트 작업에 사용합니다.
- 언제든지 리모트를 관리하거나 삭제할 수 있습니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="remote manager mega view" class="img-medium img-center" />


✅ **완료!** **RcloneView**에 **Mega** 스토리지 연결을 성공적으로 마쳤습니다.


## 🔗 추가 자료

- 🌐 [Mega.nz 로그인](https://mega.nz/login)
- 🔐 Mega 계정 관리: [https://mega.nz/settings](https://mega.nz/settings)

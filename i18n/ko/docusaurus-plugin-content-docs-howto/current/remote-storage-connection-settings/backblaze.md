---
sidebar_position: 8
description: "RcloneView에서 Backblaze B2 스토리지를 추가하는 방법을 알아보세요."
keywords:
  - rcloneview
  - rclone
  - backblaze
  - b2
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - backblaze
  - b2
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-20
author: Jay
---

# Backblaze B2

## RcloneView로 Backblaze B2 추가하기 (Windows)

### 1단계: 리모트 관리자 열기

- 상단 메뉴의 **`Remote`** 아래에서 **`+ New Remote`**를 클릭합니다.
- 또는 탐색기 창의 **`+`** 버튼을 클릭하고 **`New Remote`**를 선택하여 리모트 설정을 시작할 수 있습니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2단계: 스토리지 제공자로 Backblaze B2 선택

1. **Search Provider** 검색창에 `b2`를 입력합니다.
2. 표시되는 **Backblaze B2** 옵션을 클릭합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-backblaze-b2-remote.png" alt="add backblaze b2 remote" class="img-medium img-center" />

이제 Backblaze B2 설정 화면으로 이동합니다.

### 3단계: Backblaze B2 리모트 구성

설정 양식에서 다음 필수 정보를 입력합니다:

- **Remote name**: 리모트를 위한 알아보기 쉬운 이름 (예: `MyB2Master`).
- **account**: Backblaze **Application Key ID**.
- **key**: Backblaze **Application Key**.

필수 값을 입력한 후 **`Add Remote`**를 클릭하여 연결을 저장합니다.
<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-backblaze-b2.png" alt="remote configure backblaze b2" class="img-medium img-center" />

:::info 이 자격 증명은 어디서 얻나요?

- [Backblaze B2 계정](https://secure.backblaze.com/b2_buckets.htm)에 로그인합니다.
- **App Keys**로 이동합니다.
- 기존 키 쌍을 만들거나 복사합니다:
  - **Key ID**를 `account`로 사용합니다
  - **Application Key**를 `key`로 사용합니다
:::


### 4단계: 추가된 리모트 확인

추가가 완료되면 새로운 Backblaze B2 리모트(예: `MyB2Master`)가 **Remote Manager** 목록에 표시됩니다.

이제 다음을 수행할 수 있습니다:
- **`Open`**을 클릭하여 리모트를 탐색합니다.
- 복사/동기화/마운트 작업에 사용합니다.
- 언제든지 관리하거나 삭제할 수 있습니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-backblaze-view.png" alt="remote manager backblaze view" class="img-medium img-center" />

✅ **완료!** **Backblaze B2** 스토리지를 **RcloneView**에 성공적으로 연결했습니다.


## 🔗 추가 리소스

- 🔐 키 관리: [https://secure.backblaze.com/b2_buckets.htm](https://secure.backblaze.com/b2_buckets.htm)
- 📘 앱 키 문서: [https://www.backblaze.com/b2/docs/application_keys.html](https://www.backblaze.com/b2/docs/application_keys.html)

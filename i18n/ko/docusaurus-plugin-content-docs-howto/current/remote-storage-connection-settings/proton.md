---
sidebar_position: 10
description: RcloneView에서 Proton Drive 스토리지를 추가하는 방법을 알아보세요.
keywords:
  - rcloneview
  - rclone
  - proton
  - protondrive
  - cloud storage
  - remote storage
  - Remote Connection
tags:
  - proton
  - protondrive
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-21
author: Jay
---

# Proton Drive

## RcloneView(Windows)로 Proton Drive 추가하는 방법

### 1단계: 리모트 관리자 열기

- **리모트 관리자** 우측 상단의 **`+ New Remote`**를 클릭합니다.
- 또는 탐색기 창의 **`+`** 버튼을 클릭하고 **`New Remote`**를 선택하여 리모트 설정을 시작할 수 있습니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
---

### 2단계: 스토리지 제공업체로 Proton Drive 선택

1. **Search Provider** 검색창에 `proton`을 입력합니다.
2. 목록에서 **Proton Drive**를 선택합니다.

그러면 Proton Drive의 설정 화면으로 이동합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/select-proton-drive-remote.png" alt="select proton drive remote" class="img-medium img-center" />

### 3단계: Proton Drive 리모트 설정

설정 양식에서 필요한 항목을 입력합니다.

- **Remote name**: 리모트를 구분할 이름 (예: `MyProtonDrive`)
- **username**: Proton 이메일 주소
- **password**: Proton 계정 비밀번호
- **2fa** (선택 사항): 현재 2FA 코드(2FA가 활성화된 경우에만 필요)

필요한 정보를 모두 입력한 후 **`Add Remote`**를 클릭하여 설정을 완료합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-proton.png" alt="remote configure proton" class="img-medium img-center" />

### 4단계: 추가된 리모트 확인

추가가 완료되면 **리모트 관리자** 목록에 Proton Drive 리모트(예: `MyProtonDrive`)가 표시됩니다.

이제 다음을 수행할 수 있습니다.
- **`Open`**을 클릭하여 Proton Drive 콘텐츠를 탐색합니다.
- 전송, 마운트 또는 예약된 작업에서 사용합니다.
- 언제든지 리모트 설정을 편집하거나 삭제합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-proton-view.png" alt="remote manager proton view" class="img-medium img-center" />


✅ **완료!** 이제 **Proton Drive**가 **RcloneView**에 성공적으로 연결되었습니다.


## 🔗 추가 자료

- 🌐 [Proton Drive 로그인](https://drive.proton.me/)
- 🔐 [Proton 계정 관리](https://account.proton.me/)
- 🛡️ [Proton 2FA 설정 가이드](https://proton.me/support/two-factor-authentication)

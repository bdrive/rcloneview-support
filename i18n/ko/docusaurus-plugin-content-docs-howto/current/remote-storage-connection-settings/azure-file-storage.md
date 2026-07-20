---
sidebar_position: 7
description: RcloneView에 Azure File Storage를 추가하는 방법을 알아보세요.
keywords:
  - rcloneview
  - azure file storage
  - azure files
  - smb
  - cloud storage
  - remote storage
  - Remote Connection
  - rclone
tags:
  - azure
  - azure-files
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-12-03
author: tayson
---

# Azure File Storage

## RcloneView를 사용하여 Azure File Storage를 추가하는 방법

Azure File Storage는 SMB를 사용하며 연결하려면 다음 세 가지 항목이 필요합니다.

- **Azure Storage Account Name**
- **Storage Account Shared Key**
- **Azure File Share Name**

이 세 가지 항목은 모두 **Azure Portal**에서 복사할 수 있습니다(공유 키는 Storage account > **Access keys**, 공유 이름은 **File shares**에서 확인).

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-account-key.png" alt="get azure storage account name and account shared key" class="img-large img-center" />

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-name.png" alt="get azure storage share name" class="img-large img-center" />

### 1단계: New Remote 창 열기

- 상단 메뉴의 **`Remote`**에서 **`+ New Remote`**를 클릭합니다.
- 또는 Explorer 패널의 **`+`** 버튼을 클릭하고 **New Remote**를 선택합니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-large img-center" />
</div>

### 2단계: 스토리지 제공업체로 Azure File Storage 선택

1. **Search Provider** 바에 `Azure File Storage`를 입력합니다.
2. 목록에서 **Azure File Storage** 옵션을 클릭합니다.

그러면 Azure File Storage 구성 화면으로 이동합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote.png" alt="select azure file storage to add remote" class="img-large img-center" />

### 3단계: Azure File Storage 리모트 구성

양식에 필요한 정보를 입력합니다.

- **Remote name**: 리모트를 식별할 이름(예: `MyAzureFileStorage`)
- **account**: Azure Storage **Account Name**. 사용 중인 Azure Storage Account Name으로 설정합니다.
- **key**: **Storage Account Shared Key**
- **share_name**: **Azure Files Share Name**. 필수 항목이며 접근할 공유의 이름입니다.

모든 값을 입력한 후 **`Add Remote`**를 클릭하여 설정을 완료합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote-settings.png" alt="remote configure azure file storage" class="img-large img-center" />

### 4단계: 추가된 리모트 확인

추가가 완료되면 새 Azure File Storage 리모트(예: `MyAzure`)가 **Remote Manager** 목록에 표시됩니다.

이제 다음을 수행할 수 있습니다.

- **`Open`**을 클릭하여 파일을 탐색합니다.
- 동기화, 복사 또는 마운트 작업에 사용합니다.
- 언제든지 리모트를 관리하거나 삭제합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-remote-manager.png" alt="remote manager azure file storage view" class="img-large img-center" />

✅ **완료되었습니다!** **Azure File Storage** 스토리지를 **RcloneView**에 성공적으로 연결했습니다.

**완료되었습니다!** 이제 RcloneView에서 바로 Azure File Share의 파일을 탐색하고 전송할 수 있습니다.

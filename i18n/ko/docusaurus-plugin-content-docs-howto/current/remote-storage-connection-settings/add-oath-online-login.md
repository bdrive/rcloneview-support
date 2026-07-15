---
sidebar_position: 2
description: RcloneView에서 OAuth 또는 브라우저 기반 로그인으로 클라우드 리모트를 설정하는 방법을 알아보세요.
keywords:
  - rcloneview
  - SSO
  - OAuth
  - Dropbox
  - Onedrive
  - Box
  - pCloud
  - Yandex
  - premiumize
  - put
  - zoho
  - google cloud storage
  - citrix
  - sharefile
  - hidrive
  - rclone
  - Remote Connection
tags:
  - SSO
  - OAuth
  - dropbox
  - onedrive
  - box
  - pcloud
  - yandex
  - premiumizw
  - PLUS-Feature
  - zoho
  - google-cloud-storage
  - citrix
  - sharefile
  - hidrive
date: 2025-06-23
author: Jay
---
# 자동 로그인 (OneDrive, Box 등)

RcloneView를 사용하면 **Google Drive, OneDrive, Dropbox, Box**와 같은 주요 클라우드 제공업체에 간단한 브라우저 기반 로그인(OAuth)으로 쉽게 연결할 수 있습니다.

:::important 옵션 설정 불필요
**✅ 대부분의 제공업체는 리모트 이름만 입력하면 됩니다.**  
**✅ Options 탭을 건너뛰고 바로 브라우저 로그인으로 진행할 수 있습니다.**
:::

**Save**를 클릭하면 RcloneView가 브라우저 창을 열어 클라우드 계정에 로그인할 수 있게 해줍니다. 로그인을 완료하면 리모트가 자동으로 추가되어 별도의 수동 설정 없이 바로 사용할 수 있습니다.

## 빠른 설정 가이드

1. **RcloneView**를 실행하고 상단 메뉴 또는 Explorer 패널에서 **`+ New Remote`**를 클릭합니다.
2. **Provider** 탭에서 사용할 클라우드 서비스를 선택합니다(예: Google Drive, OneDrive).
3. **Options** 탭은 건너뜁니다(추가 정보가 필요한 경우 제외). 아래 표를 참고하세요.
4. **Save** 단계로 이동하여 **Save**를 클릭합니다.
5. 브라우저 창이 열리면 클라우드 계정에 로그인합니다.
6. 로그인이 완료되면 리모트가 자동으로 추가됩니다.

👉 자세한 예시가 필요하신가요? [Google Drive 연결 방법](../#step-2-adding-remote-storage-google-drive-example)을 참고하세요.
## 지원되는 클라우드 제공업체 및 설정 요구사항

| 클라우드 제공업체              | 필수 옵션                                                          |
| --------------------------- | ---------------------------------------------------------------- |
| Google Drive                | 없음                                                             |
| Google Drive Shared with Me | **Advanced Options:**<br />`shared_with_me` = **true**           |
| Google Drive Computers      | **Advanced Options:**<br />`root_folder_id` = `<your folder ID>` |
| Dropbox                     | 없음                                                             |
| Dropbox for Business        | **Advanced Options:**<br />`dropbox_business` = **true**         |
| Microsoft OneDrive          | 없음                                                             |
| Box                         | 없음                                                             |
| Box for Business            | `box_sub_type = enterprise`                                      |
| pCloud                      | 없음                                                             |
| Yandex Disk                 | 없음                                                             |
| premiumize.me               | 없음                                                             |
| put.io                      | 없음                                                             |
| Zoho WorkDrive              | `Region` 필요                                                     |
| Google Cloud Storage        | `Project Number` 필요                                             |
| Citrix ShareFile            | `Root Folder ID` 필요                                             |
| HiDrive                     | 없음                                                             |

## 예시: Google Drive Shared with Me (Advanced Options 필요)

**Google Drive Shared with Me**를 사용하면 다른 사용자가 명시적으로 공유한 파일과 폴더를, 자신의 드라이브에 추가하지 않고도 액세스할 수 있습니다. 이는 스토리지를 중복 사용하지 않고 조직이나 팀 간에 협업할 때 유용합니다.

RcloneView는 리모트 설정 중 고급 옵션 설정을 통해 이 기능을 지원합니다.

**Options** 탭에서:

1. 화면 하단으로 스크롤하여 **`Show advanced options`**를 클릭합니다.
2. `shared_with_me` 필드를 찾아 드롭다운에서 **`true`**로 설정합니다.
3. 별도의 사용자 지정 설정이 필요하지 않다면 다른 옵션은 기본값으로 둡니다.
4. **Next**를 클릭한 다음, 브라우저에서 안내에 따라 로그인을 완료합니다.

:::tip
`shared_with_me = true` 설정은 Rclone이 여러분의 Google 계정과 공유된 파일 및 폴더만 표시하도록 지시합니다.
:::

<img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-shared-with-me-options.png" alt="google drive shared with me options" class="img-medium img-center" />
## 예시: Google Drive Computers (Advanced Options 필요)

**Google Drive "Computers"**는 노트북이나 데스크톱 등 기기의 로컬 파일을 Google Drive의 특별한 "Computers" 섹션 아래 클라우드로 동기화하는 기능입니다. 각 컴퓨터는 별도의 폴더로 표시되며, Rclone을 통해 액세스하려면 고유한 `root_folder_id`가 필요합니다.

🔗 이 기능에 대해 더 알아보기: [Google Drive에서 동기화된 컴퓨터 액세스하기](https://support.google.com/drive/answer/3096479)

### RcloneView에서 Google Drive Computers 연결하는 방법

1. [drive.google.com](https://drive.google.com/)을 열고 **Computers** 섹션에서 대상 컴퓨터(예: **My Laptop**)를 클릭합니다.
2. URL에서 **Computer ID**를 복사합니다.  
   예를 들어  
   `https://drive.google.com/drive/folders/1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ`  
   에서 ID는 `folders/` 뒤에 오는 문자열입니다:  
   `1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ  
3. **RcloneView**를 열고 **Remote** 메뉴 아래 **`+ New Remote`**를 클릭한 다음 **Google Drive**를 선택하고 **Options** 탭으로 진행합니다.
4. 화면 하단으로 스크롤하여 **`Show advanced options`**를 클릭합니다.
5. 복사한 Computer ID를 `root_folder_id` 필드에 붙여넣습니다.
6. **Next**를 클릭하고 OAuth 로그인을 따라 설정을 완료합니다.

<div class="img-grid-3">
  <img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-computers-id-copy.png" alt="google drive computers id copy" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computer-remote-options.png" alt="add google drive computer remote options" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computers-options-root-folder-id.png" alt="add google drive computers options root folder id" class="img-medium img-center" />
</div>

✅ 설정이 완료되면 RcloneView 내에서 직접 기기와 동기화된 Google Drive 폴더를 탐색하고 액세스할 수 있습니다.

## 예시: Box for Business 연결하기

**Options** 탭에서:
- `box_sub_type`에 **enterprise**를 선택합니다
- 나머지 설정은 기본값으로 진행합니다  
- 안내가 표시되면 브라우저에서 조직의 SSO 포털을 통해 로그인합니다


✅ 로그인이 완료되면 RcloneView에 리모트가 표시되며 바로 사용할 수 있습니다.

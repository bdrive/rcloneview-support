---
slug: fix-azure-blob-sas-token-auth-errors-rcloneview
title: "使用 RcloneView 修復 Azure Blob Storage SAS 權杖與驗證錯誤"
authors:
  - tayson
description: "修復 rclone 中 Azure Blob Storage SAS 權杖與驗證錯誤。學習使用 RcloneView 的設定工具解決 401、403 及權杖過期問題。"
keywords:
  - rcloneview
  - azure blob storage
  - sas token error
  - azure authentication error
  - azure 403 forbidden
  - azure 401 unauthorized
  - rclone azure setup
  - azure blob sas token
  - azure storage connection
  - fix azure rclone
tags:
  - RcloneView
  - troubleshooting
  - azure
  - cloud-storage
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 修復 Azure Blob Storage SAS 權杖與驗證錯誤

> Azure Blob Storage 的驗證機制較為複雜,有多種驗證方式且容易出現細微的設定錯誤。**RcloneView** 簡化了設定流程,協助你快速排除 401/403 錯誤。

Azure Blob Storage 是一個強大且廣泛使用的物件儲存服務,但從 rclone 連線至該服務時,必須確保驗證設定完全正確。無論你使用的是存取金鑰(access key)、SAS 權杖,還是服務主體(service principal),只要有一個參數設定錯誤,就可能導致難以理解的錯誤訊息,完全阻礙你的工作流程。

本指南涵蓋在 rclone 中使用 Azure Blob Storage 時最常見的驗證錯誤,說明各種可用的驗證方式,並帶你透過 RcloneView 的視覺化遠端設定介面逐一修復問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure 驗證方式總覽

Azure Blob Storage 透過 rclone 支援多種驗證方式。了解你目前使用的是哪一種,是排除問題的第一步:

- **儲存體帳戶存取金鑰(Storage Account Access Key)**:一組共用金鑰,可完整存取整個儲存體帳戶。簡單但權限極大 -- 請像對待 root 密碼一樣謹慎保管。
- **SAS 權杖(共用存取簽章)**:一種範圍受限的權杖,可授予特定權限、時間限制,以及選用的 IP 限制。對於外部分享而言,比存取金鑰更安全。
- **服務主體(Azure AD)**:透過 Azure AD 應用程式進行以 OAuth 為基礎的驗證。最適合具備角色型存取控制的企業環境。
- **受控識別(Managed Identity)**:在 Azure 內部執行時可用(例如 Azure VM)。自動使用 Azure 的身分服務。

每種方式都有各自的設定參數與失敗模式。以下各節將針對每種方式最常見的錯誤加以說明。

## SAS 權杖過期(401 Unauthorized)

最常見的 SAS 權杖錯誤就是過期。SAS 權杖有開始時間與到期時間,一旦權杖過期,每個請求都會傳回 `401 Unauthorized` 或 `403 AuthenticationFailed` 錯誤。

**症狀:**
```
HTTP 401: Server failed to authenticate the request.
AuthenticationFailed: Signed expiry time must be after signed start time.
```

**修復方法:**

1. 開啟 Azure 入口網站(Azure Portal),並前往你的儲存體帳戶。
2. 在「安全性 + 網路」區段下,前往 **共用存取簽章**。
3. 設定新的到期日期,並保留較充裕的時間範圍(例如個人使用可設 1 年,共享存取則可設短一些)。
4. 產生新的 SAS 權杖。
5. 在 RcloneView 中,編輯你的 Azure Blob 遠端,將舊的 SAS 權杖替換為新的權杖。
6. 測試連線以確認存取已恢復正常。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## SAS 權杖權限錯誤(403 Forbidden)

SAS 權杖可能本身有效,但缺少你所執行操作所需的權限。舉例來說,只有讀取權限的權杖,在 rclone 嘗試上傳、刪除或列出容器(container)時會失敗。

**症狀:**
```
HTTP 403: This request is not authorized to perform this operation.
AuthorizationPermissionMismatch
```

**rclone 操作所需的權限:**

| 操作 | 所需的 SAS 權限 |
|---|---|
| 列出容器 | List |
| 瀏覽檔案 | Read, List |
| 上傳檔案 | Write, Create |
| 刪除檔案 | Delete |
| 完整同步 | Read, Write, Delete, List, Create |

**修復方法:** 在 Azure 入口網站中產生一組具備所有必要權限的新 SAS 權杖。若要進行 rclone 同步操作,通常需要 Read、Write、Delete、List、Add 及 Create 權限。若不確定該啟用哪些權限,可為你的個人儲存體帳戶啟用所有權限。

## IP 限制阻擋存取(403 Forbidden)

SAS 權杖可以限制只能從特定 IP 位址或範圍存取。如果你是在辦公室網路產生的權杖,卻在家中嘗試使用,IP 限制便會阻擋你的存取。

**症狀:**
```
HTTP 403: This request is not authorized to perform this operation using this source IP.
```

**修復方法:**

- 產生一組不含 IP 限制的新 SAS 權杖,或
- 將你目前的 IP 位址加入 SAS 權杖設定中的允許範圍,或
- 改用不受 IP 限制的儲存體帳戶存取金鑰。

如果你使用的是動態 IP(大多數家用網路連線皆是如此),除非能定期更新,否則應避免使用有 IP 限制的 SAS 權杖。

## 存取金鑰錯誤(401 Unauthorized)

如果你使用的是儲存體帳戶存取金鑰,發生錯誤通常代表金鑰錯誤或帳戶名稱不正確。

**常見原因:**

- 複製金鑰時夾帶了多餘的空白字元或換行字元。
- Key1 已被輪替(rotate),目前實際生效的是 Key2,卻仍使用 Key1。
- 儲存體帳戶名稱拼寫錯誤。
- 使用了連接字串(connection string)而非單純的金鑰。

**在 RcloneView 中的修復方法:**

1. 前往 Azure 入口網站,進入你的儲存體帳戶,開啟 **存取金鑰**。
2. 點選 Key1 或 Key2 旁的 **顯示**,然後仔細複製金鑰。
3. 在 RcloneView 中編輯你的 Azure Blob 遠端,並將金鑰貼入 `key` 欄位。
4. 仔細確認 `account` 欄位與你的儲存體帳戶名稱完全一致(區分大小寫)。
5. 測試連線。

## 服務主體設定錯誤

服務主體驗證需要三個值:租用戶識別碼(tenant ID)、用戶端識別碼(client ID)以及用戶端密碼(client secret)。這些值中任何一個遺漏或錯誤,都會導致驗證失敗。

**症狀:**
```
HTTP 401: AADSTS7000215: Invalid client secret provided.
HTTP 401: AADSTS70001: Application with identifier 'xxx' was not found.
```

**修復方法:**

1. 在 Azure 入口網站中,前往 **Azure Active Directory > 應用程式註冊**。
2. 找到你的應用程式,並確認 **應用程式(用戶端)識別碼**。
3. 在概觀頁面上檢查 **目錄(租用戶)識別碼**。
4. 在 **憑證與密碼** 下,若舊的密碼已過期,則建立新的用戶端密碼。
5. 在 RcloneView 中,以正確的 tenant、client_id 及 client_secret 值更新遠端設定。
6. 確認該服務主體已在儲存體帳戶上被指派 **Storage Blob Data Contributor** 角色。

## 逐步產生正確的 SAS 權杖

若要完全避免 SAS 權杖問題,請依照以下流程操作:

1. 開啟 Azure 入口網站,並前往你的儲存體帳戶。
2. 在左側選單中點選 **共用存取簽章**。
3. 在 **允許的服務** 下,選取 **Blob**。
4. 在 **允許的資源類型** 下,選取 **容器(Container)** 與 **物件(Object)**。
5. 在 **允許的權限** 下,選取你所需的所有權限(Read、Write、Delete、List、Add、Create)。
6. 將 **開始日期** 設為今天,**到期日期** 設為合理的未來日期。
7. 除非你需要 IP 限制,否則將 **允許的 IP 位址** 保留空白。
8. 將 **允許的通訊協定** 設為 **僅限 HTTPS**。
9. 點選 **產生 SAS 及連接字串**。
10. 複製 **SAS 權杖**(以 `?sv=` 開頭)。貼入 rclone 設定時,請移除開頭的 `?`。

## 在 RcloneView 中測試你的連線

完成 Azure Blob 遠端的設定或更新後,請立即測試連線:

1. 在 RcloneView 的檔案總管面板中開啟該遠端。
2. 確認你的容器(container)已正確列出。
3. 進入某個容器,確認可以看到檔案。
4. 嘗試上傳一個小型測試檔案,以驗證寫入權限。
5. 刪除該測試檔案,以確認刪除權限。

如果任何一個步驟失敗,錯誤訊息會指出具體的權限或設定問題。請在遠端設定中修正該問題,然後再次測試。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用你偏好的驗證方式(存取金鑰或 SAS 權杖)新增 Azure Blob Storage 遠端。
3. 在檔案總管面板中瀏覽你的容器,以測試連線。
4. 若遇到 401 或 403 錯誤,請參考上方對應的章節進行診斷與修復。

Azure 驗證錯誤幾乎都是由權杖過期、權限缺失或憑證複製錯誤所引起。透過 RcloneView 的視覺化工具進行系統化排查,能讓你輕鬆找出並解決問題。

---

**相關指南:**

- [瀏覽與管理遠端儲存](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [新增 AWS S3 及相容 S3 服務](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [即時同步遠端儲存](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />

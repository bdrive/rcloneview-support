---
slug: mount-google-shared-drives-rcloneview
title: "使用 RcloneView 在 Windows 與 macOS 掛載 Google 共用雲端硬碟 -- 完整存取,無需同步用戶端"
authors:
  - tayson
description: 透過 RcloneView 引導式工作流程,將任何 Google 共用雲端硬碟直接掛載到 Finder 或檔案總管,繞過 Drive for Desktop 的限制,同時保留管理員層級的控制權。
keywords:
  - google shared drive mount
  - mount shared drive windows
  - mount shared drive mac
  - rcloneview
  - rclone mount google drive
  - team drive windows
  - shared drive explorer
  - google workspace shared drive
  - rclone gui
  - mount team drive
tags:
  - RcloneView
  - google-drive
  - mount
  - productivity
  - workspace
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在 Windows 與 macOS 掛載 Google 共用雲端硬碟 -- 完整存取,無需同步用戶端

> 讓每個團隊都能取得所需的共用雲端硬碟,而不必在筆電上強制安裝完整的同步用戶端。

Google Workspace 共用雲端硬碟通常存放著設計素材、交接資料夾或合規檔案,但 Drive for Desktop 只保留少量快取,且難以應付每位使用者多達數十個共用雲端硬碟的情況。RcloneView 建構於 rclone 的共用雲端硬碟支援之上,讓您可以將所需的雲端硬碟精確地掛載為 Windows 上的實體磁碟機代號,或 macOS 上的 Finder 磁碟區,並內建自動掛載與 VFS 快取功能。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 為什麼團隊需要不依賴 Drive for Desktop 的共用雲端硬碟掛載

- Drive for Desktop 會鏡像整個雲端硬碟,佔用大量 SSD 空間,一旦達到配額上限,筆電就會離線。
- 服務台無法在不授予整個帳戶同步權限的情況下,將單一共用雲端硬碟交給承包商使用。
- 工程師與媒體團隊需要可預測的路徑(例如 X:\Marketing 或 /Volumes/Archive),供自動化流程、指令碼與創意應用程式使用。

## RcloneView 如何將共用雲端硬碟帶到 Windows 與 macOS

RcloneView 在 rclone 之上疊加一層圖形介面,因此共用雲端硬碟選取器、授權權杖與掛載旗標都會為您自動處理。

- 引導式遠端精靈會列出您的 Google Workspace 帳戶可存取的每個共用雲端硬碟,並安全地儲存。相關參考步驟請見 [/support/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive)。
- 掛載管理員會顯示 [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) 中所述的選項,讓您不必記住指令列語法。
- 自動掛載位於「掛載」對話方塊中;「登入時啟動」可在「設定」->「一般」中找到(詳見 [/support/howto/rcloneview-basic/general-settings](/howto/rcloneview-basic/general-settings))。

## 掛載前您需要準備的事項

| 需求 | 詳細說明 |
| --- | --- |
| RcloneView + Rclone | 安裝最新的 RcloneView 套件(內含 rclone)。 |
| 檔案系統驅動程式 | Windows 使用 WinFsp(已內建)。macOS 需要 macFUSE;請依照 RcloneView 內的提示操作。可參考 [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos) 調整限制。 |


## 逐步操作:使用 RcloneView 掛載 Google 共用雲端硬碟

以下步驟與管理員在指令列中執行的操作相同,但透過友善的精靈呈現,讓服務台能快速重複執行。

### 步驟 1 -- 連接您的 Google Workspace 帳戶

1. 開啟 **遠端管理員** -> **+ 新增遠端**。
2. 選擇 **Google Drive** -> **OAuth(瀏覽器)**。
3. 瀏覽器登入完成後,RcloneView 會將重新整理權杖(refresh token)儲存在本機,讓共用雲端硬碟保持授權狀態。

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


### 步驟 2 -- 選取您要使用的共用雲端硬碟

1. 出現「將此設定為共用雲端硬碟?」提示時,選擇 **是**。
2. RcloneView 會列出 Google 傳回的所有共用雲端硬碟。輸入編號或搜尋以標示正確的雲端硬碟。
3. 以具描述性的名稱(例如 `shared_marketing`)儲存遠端,讓團隊成員能立即知道其內容。

### 步驟 3 -- 設定掛載設定檔

1. 前往 **掛載管理員**(或點選遠端瀏覽器內的掛載圖示)。
2. 選取共用雲端硬碟遠端,並選擇要掛載的資料夾(根目錄或子資料夾)。
3. 設定掛載目標與選項:
   - **目標(Target)**:保持 `Auto`,或使用 **掛載到本機路徑** 指定固定的磁碟機代號/掛載路徑。
   - **自動掛載(Auto mount)**:啟用後,RcloneView 會在啟動時重新掛載(可搭配「設定」中的「登入時啟動」)。
   - **進階選項**:設定 **磁碟區名稱**(選填標籤)、**掛載類型**(預設為 `cmount`)、**網路磁碟機**(Windows)、**允許其他使用者**(Linux),若想禁止寫入則勾選 **唯讀**。
   - **快取選項**:選擇 **快取模式**(建議使用 `full` 以獲得最佳相容性),設定 **快取最大容量**、**快取最長時間**,以及對話方塊中以奈秒為單位顯示的 **目錄快取時間**。

### 步驟 4 -- 啟動並驗證

1. 點選 **儲存並掛載**。掛載啟用後,狀態標籤會轉為綠色。
2. 在檔案總管或 Finder 中開啟新的磁碟機,應可看到共用雲端硬碟的資料夾;較大的目錄可能需要一些時間,視您設定的 **目錄快取時間** 而定,目錄快取才會填滿。
3. 使用掛載管理員可以卸載、開啟已掛載的資料夾,或編輯設定。

## 效能與存取技巧

- 將 **快取模式** 設為 **Full**,並將 **快取最大容量** 設得寬裕一些,以獲得最流暢的編輯體驗。
- 對財務/法務雲端硬碟使用 **唯讀**,以避免意外刪除;需要時再另外建立可寫入的掛載。
- 依變更頻率調整 **目錄快取時間**(活躍的雲端硬碟設定較短,封存用途則設定較長)。
- 重複使用固定的 **目標** 或 **掛載到本機路徑**,讓指令碼與應用程式始終能找到相同的掛載點。

## 自動化、共用與確保存取安全

RcloneView 讓您能在多台機器上維持一致的共用雲端硬碟掛載:

- 在每個掛載上啟用 **自動掛載**,並在「設定」中啟用 **登入時啟動**,讓磁碟機在作業系統啟動時就已就緒。
- 使用工作排程器,在下班後將共用雲端硬碟內容鏡像備份到 S3/Wasabi,以進行異地保存。
- 在使用者開啟 Office 或 Adobe 之前,檢查掛載管理員的狀態(已掛載 vs. 未掛載)以確認連線正常。

## 疑難排解與常見問答

| 症狀 | 可能原因 | 解決方式 |
| --- | --- | --- |
| 睡眠後磁碟機消失 | 作業系統卸載了 WinFsp/macFUSE | 啟用 **自動掛載** 與 **登入時啟動**,讓 RcloneView 在啟動時重新掛載。 |
| 開啟檔案速度緩慢 | 快取容量過小或位於速度較慢的磁碟上 | 增加 **快取最大容量**,並將 **快取模式** 保持為 Full。 |
| macOS 上出現權限錯誤 | FUSE 缺少完整磁碟取用權 | 授予 RcloneView 與 macFUSE 完整磁碟取用權,然後重新啟動掛載(Apple 選單 -> 系統設定 -> 隱私權與安全性)。 |
| `too many open files` | macOS ulimit 預設為 256 | 依照 [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos) 中的說明調整 plist 設定。 |
| 共用雲端硬碟清單為空 | Workspace 管理員停用了 Drive API | 在 Google 管理控制台重新啟用 Drive API,或請求該共用雲端硬碟的委派存取權。 |

## 無需指令碼即可部署共用雲端硬碟掛載

RcloneView 讓共用雲端硬碟的存取變得可預測:沒有臃腫的同步資料夾、無需撰寫指令碼,也不必為每個新掛載等待 IT 部門處理。立即為每個團隊提供乾淨的磁碟機代號或 Finder 磁碟區,讓您的 Google Workspace 儲存空間保持掌控。


<CloudSupportGrid />

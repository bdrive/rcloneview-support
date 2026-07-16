---
slug: migrate-onedrive-to-dropbox-rcloneview
title: "使用 RcloneView 將 OneDrive 遷移至 Dropbox"
authors:
  - tayson
description: "使用 RcloneView 從 OneDrive 遷移至 Dropbox。比較平台功能、設定兩個遠端、傳輸資料，並逐步驗證遷移結果。"
keywords:
  - rcloneview
  - onedrive to dropbox
  - migrate onedrive to dropbox
  - onedrive dropbox migration
  - onedrive migration tool
  - cloud storage migration
  - dropbox from onedrive
  - microsoft to dropbox
  - onedrive data transfer
  - cloud to cloud migration gui
tags:
  - RcloneView
  - onedrive
  - dropbox
  - migration
  - cloud-migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 OneDrive 遷移至 Dropbox

> 從 OneDrive 切換到 Dropbox意味著要在兩個不同的生態系統之間搬移檔案 —— **RcloneView** 透過視覺化介面處理傳輸、中繼資料保留與驗證。

OneDrive 與 Microsoft 365 深度整合，而 Dropbox 則專注於檔案同步與協作，並擁有廣泛的第三方應用整合。無論是切換生產力套件的組織、因智慧同步或 Paper 功能而轉向 Dropbox 的團隊,還是偏好 Dropbox 檔案復原能力的個人使用者,都面臨相同的挑戰：在平台之間傳輸可能累積多年的資料。RcloneView 透過各自的 API 連接兩個平台,提供簡單直接的遷移路徑。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要從 OneDrive 遷移至 Dropbox

這項決定通常涉及以下一項或多項因素：

- **平台切換**：從 Microsoft 365 轉換至 Google Workspace 或不含 OneDrive 的套件,但仍偏好使用 Dropbox 作為檔案儲存。
- **智慧同步**：Dropbox 的智慧同步（線上專屬檔案搭配本機佔位符）相較於 OneDrive 的隨選檔案功能,擁有更長的實績與更廣的應用程式相容性。
- **第三方整合**：Dropbox 透過其 API 生態系統,與更多創意及生產力工具連接。
- **檔案復原**：Dropbox Business 方案提供 180 天的版本歷史紀錄,相較之下 OneDrive 個人版方案僅限 30 天。
- **跨平台一致性**：Dropbox 在 Windows、macOS 與 Linux 上提供更一致的使用體驗。

## 設定兩個遠端

### OneDrive 遠端

開啟 RcloneView 的遠端管理器,新增一個 **Microsoft OneDrive** 遠端。透過 OAuth 進行授權,依帳戶類型選擇 OneDrive 個人版或商業版。若為商業版帳戶,請選擇您的個人磁碟機或 SharePoint 文件庫。

### Dropbox 遠端

新增一個 **Dropbox** 遠端。透過 OAuth 進行授權 —— RcloneView 會開啟瀏覽器視窗以進行 Dropbox 登入並授予權限。權杖會儲存在您本機的 rclone 設定中。若您使用 Business 方案,Dropbox 遠端可存取您整個 Dropbox,包括團隊資料夾。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Dropbox remotes in RcloneView" class="img-large img-center" />

## 規劃遷移

在開始傳輸之前：

1. **檔名相容性**：OneDrive for Business 對 `#` 和 `%` 等字元有所限制,而 Dropbox 則有自己的限制（例如結尾的空格與句點）。存在於 OneDrive 上的檔案可能需要重新命名才能與 Dropbox 相容。RcloneView 會自動處理編碼,但仍請檢查您的檔案結構是否存在邊緣情況。
2. **大小與結構**：使用 RcloneView 的儲存空間分析功能來確認總資料量。以 50 Mbps 的速度傳輸 500 GB 資料大約需要 22 小時。
3. **共用檔案與連結**：OneDrive 的共用權限與連結不會傳輸至 Dropbox。請在遷移前記錄任何重要的共用連結,以便在 Dropbox 上重新建立。
4. **OneNote 筆記本**：儲存在 OneDrive 上的 OneNote 檔案並非標準檔案 —— 它們在遷移前需要先匯出。建議另外單獨匯出這些檔案。

## 執行遷移

在左側窗格開啟 OneDrive,右側窗格開啟 Dropbox。導覽至來源資料夾與目標位置。初次遷移時請使用複製工作,以便在驗證完成前於兩端都保留檔案。

RcloneView 使用檔案大小與修改時間來比較檔案。OneDrive 使用 QuickXorHash,而 Dropbox 則使用自己的內容雜湊 —— 由於這兩者不相容,RcloneView 在這兩個服務供應商之間的差異偵測會依賴大小與時間戳記比較。相符的檔案會被略過,只有新增或變更的檔案才會被傳輸。

對於大型遷移,請啟用多執行緒傳輸,並設定適當的頻寬限制,以避免佔滿您的網路連線。RcloneView 的即時監控功能會顯示傳輸進度、速度與預估完成時間。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating OneDrive to Dropbox in RcloneView" class="img-large img-center" />

## 驗證遷移結果

傳輸完成後,使用 RcloneView 的比較功能來驗證完整性。選擇 OneDrive 作為來源、Dropbox 作為目的地,並執行比較。相符的檔案會顯示為相同；缺少或有差異的檔案則會被標示出來。

若您有任何 Office Online 文件,請特別留意類似 Google Docs 格式的檔案 —— 這些檔案在傳輸過程中應已轉換為標準 Office 格式。請確認轉換後的檔案在 Dropbox 中可以正常開啟。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying OneDrive to Dropbox migration in RcloneView" class="img-large img-center" />

## 遷移後續步驟

1. 安裝 Dropbox 桌面用戶端並設定智慧同步偏好設定。
2. 在 Dropbox 上重新建立任何共用連結或資料夾權限。
3. 更新指向 OneDrive 路徑的應用程式整合設定。
4. 在刪除前,保留 OneDrive 資料一段過渡期（30 至 60 天）。
5. 若要同時並行運作兩個平台,請在 RcloneView 中排程每日同步工作,以保持 Dropbox 資料的最新狀態。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling ongoing OneDrive to Dropbox sync in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在遠端管理器中新增 OneDrive 與 Dropbox 遠端。
3. 執行從 OneDrive 到 Dropbox 的複製工作。
4. 使用比較功能進行驗證。
5. 完成遷移後續步驟,並在準備就緒時停用 OneDrive。

OneDrive 與 Dropbox 服務於不同的生態系統,但 RcloneView 可確保您的資料在兩者之間乾淨且完整地搬移。

---

**相關指南：**

- [透過瀏覽器登入方式新增遠端（OAuth）](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [即時傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />

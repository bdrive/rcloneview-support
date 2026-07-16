---
slug: fix-cloud-sync-missing-files-after-transfer-rcloneview
title: "使用 RcloneView 修復雲端同步後檔案遺失的問題"
authors:
  - tayson
description: "診斷並修復雲端同步操作後檔案遺失的問題。了解 RcloneView 中常見的原因，例如篩選規則、特殊字元和同步方向錯誤。"
keywords:
  - rcloneview
  - missing files after sync
  - cloud sync missing files
  - rclone files not syncing
  - cloud transfer missing data
  - sync direction wrong
  - google docs not syncing
  - rclone filter rules
  - cloud file transfer issues
  - fix cloud sync
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 修復雲端同步後檔案遺失的問題

> 你執行了一個同步作業，看起來一切順利，但目的地卻少了一些檔案。**RcloneView** 提供了完整的工具，能準確診斷發生了什麼問題，並防止它再次發生。

在雲端同步後發現檔案遺失，是雲端檔案管理中最令人焦慮的情況之一。傳輸過程沒有出現任何錯誤，作業紀錄也顯示成功，但檢查目的地時，某些檔案卻不見蹤影。在你驚慌之前，請先了解：這幾乎都是由邏輯設定問題所導致，而非真正的資料遺失。

本指南將說明同步後檔案遺失最常見的原因，並示範如何運用 RcloneView 的比對、紀錄與試跑（dry-run）功能來找出並解決問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 篩選規則悄悄排除了檔案

檔案遺失最常見的原因，就是篩選規則將它們排除在外。如果你設定了 `--exclude`、`--include` 或 `--filter` 規則卻忘記了，符合這些條件的檔案就會在同步過程中被靜默跳過。Rclone 不會在標準輸出中對被排除的檔案發出警告。

**常見的篩選錯誤：**

- 使用 `--include "*.jpg"` 規則時，無意間排除了所有非 JPG 檔案，包括文件與試算表。
- 使用 `--exclude "*.tmp"` 規則時，也連帶排除了檔名中間包含 `.tmp` 字樣的檔案。
- 使用 `--min-size` 旗標，跳過了雖然檔案小但很重要的檔案，例如設定檔或文字筆記。
- 建立新作業時，不小心沿用了上一個作業殘留的篩選規則。

**如何診斷：** 在 RcloneView 中，檢查你的同步作業所附加的旗標與篩選條件。先暫時移除所有篩選條件並執行比對，看看遺失的檔案是否出現。接著再逐一重新加入篩選條件，找出是哪一條規則排除了它們。

## 同步方向混淆

`sync`、`copy` 與 `move` 之間的差異至關重要，選錯方式可能導致檔案消失。

- **Sync（同步）** 會讓目的地與來源保持一致。目的地中存在但來源沒有的檔案會被**刪除**。如果你不小心以錯誤方向執行同步（目的地到來源，而非來源到目的地），你的來源檔案可能會被移除。
- **Copy（複製）** 只會將檔案新增至目的地，絕不會刪除任何內容。若不確定該用哪種方式，這是較安全的選項。
- **Move（移動）** 會傳輸檔案，然後從來源刪除它們。

如果同步後來源的檔案不見了，你很可能以錯誤的方向執行了同步。在執行前，務必在 RcloneView 的雙窗格檔案總管中再三確認哪一邊是來源、哪一邊是目的地。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Google 文件、試算表與簡報

Google Workspace 文件（文件、試算表、簡報、繪圖）並非傳統檔案，它們是雲端原生物件，在原生狀態下沒有固定的大小，也沒有可下載的二進位格式。從 Google Drive 同步時，rclone 會將它們轉換為可下載的格式（例如 `.docx`、`.xlsx`、`.pdf`），但這項行為取決於你的設定。

**常見問題：**

- 若未設定匯出格式，Google 文件可能會顯示為零位元組檔案，或直接被完全跳過。
- 檔名過長的檔案，在某些作業系統上可能會匯出失敗。
- Google Drive 中的捷徑並非真正的檔案，不會被傳輸。

**如何修復：** 檢查你的 Google Drive 遠端是否已設定適當的匯出格式。或者，如果目的地不需要 Google 文件，可明確將其排除，以避免混淆檔案是否遺失的判斷。

## 大小寫敏感與特殊字元

不同的雲端服務對檔名的處理方式各不相同。名為 `Report.PDF` 與 `report.pdf` 的檔案，在 Windows 與 OneDrive 上可能被視為同一檔案，但在 Linux 與 S3 上卻會被視為兩個不同的檔案。同步過程中，其中一個可能會靜默覆蓋另一個。

**容易造成問題的字元包括：**

- 結尾的空格或句點（OneDrive 與 Windows 會拒絕）。
- 冒號、問號與角括號（在 Windows 上無效）。
- 表情符號或 Unicode 字元（部分服務商處理方式不一致）。
- 在 Windows 上超過 260 字元的過長檔案路徑。

**如何診斷：** 使用 RcloneView 的比對功能並列顯示檔案。找出存在於來源、但在目的地遺失或名稱不同的檔案。Rclone 紀錄可能會針對含有不相容字元的檔案顯示重新命名的警告。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 檔案大小限制與服務商限制

某些雲端服務商設有檔案大小上限，可能導致大型檔案被靜默跳過：

- Google Drive：每個檔案 5 TB。
- OneDrive：每個檔案 250 GB。
- Dropbox：透過 API 為每個檔案 2 GB（透過桌面用戶端為 350 GB）。
- MEGA：檔案大小限制依帳戶類型而異。
- 許多相容 S3 的服務商：每個物件 5 TB，但個別上傳分段限制為 5 GB。

如果你要同步的檔案超過目的地服務商的限制，傳輸將會失敗。請在 RcloneView 中查看作業歷史紀錄，尋找與超大檔案相關的錯誤項目。

## 使用比對功能找出遺失的檔案

RcloneView 的資料夾比對功能，是找出究竟哪些檔案遺失的最快方法。在一側開啟來源，另一側開啟目的地，然後執行比對。此工具會標示出僅存在於來源、僅存在於目的地，或兩者內容不同的檔案。

這能讓你獲得一份明確的未傳輸檔案清單，供你逐一調查。留意其中的規律 —— 遺失的檔案是否都在同一個資料夾中？是否共用同一個副檔名？是否都低於某個特定大小？這些規律往往能指向根本原因。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 同步前先執行試跑

避免檔案遺失的最佳方法，就是在每次同步前先執行試跑（dry run）。試跑會模擬整個操作，而不會真正傳輸或刪除任何檔案，它會準確顯示 rclone 將會執行的動作，包括哪些檔案會被跳過、傳輸或刪除。

在 RcloneView 中，設定同步作業時可以使用 `--dry-run` 旗標。仔細檢視輸出結果，如果你預期要傳輸的檔案沒有出現在清單中，請在執行實際同步前，先檢查你的篩選規則與設定。

## 預防策略

為避免未來的同步再次發生檔案遺失，建議：

1. **務必先比對。** 在同步前使用 RcloneView 的比對功能，了解兩個位置目前的狀態。
2. **優先使用 copy 而非 sync**，如果你不希望目的地的任何內容被刪除。
3. **從試跑開始。** 在正式套用新的同步設定前，先加上 `--dry-run` 進行測試。
4. **記錄你的篩選規則。** 保留每條篩選規則的用途與設定原因的紀錄。
5. **檢查作業歷史。** 每次同步後，查看 RcloneView 的作業歷史紀錄，確認實際傳輸的檔案數量符合預期。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟雙窗格檔案總管，選擇你的來源與目的地遠端，然後執行資料夾比對。
3. 檢查你的同步作業設定，包括篩選規則、同步方向，以及任何可能排除檔案的旗標。
4. 使用 `--dry-run` 在正式執行前預覽同步操作。

同步後檔案遺失幾乎都是設定問題，而非資料遺失。透過 RcloneView 的比對與紀錄工具，有條理地進行診斷，每次都能準確找出原因。

---

**相關指南：**

- [瀏覽與管理遠端儲存空間](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [即時同步遠端儲存空間](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />

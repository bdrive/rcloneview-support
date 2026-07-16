---
slug: dry-run-preview-sync-before-transfer-rcloneview
title: "在 RcloneView 中傳輸前使用 Dry Run 預覽同步變更"
authors:
  - tayson
description: "在 RcloneView 中使用 dry run 於傳輸檔案前預覽同步變更。在意外刪除與篩選條件不符造成資料遺失之前及早發現問題。"
keywords:
  - rcloneview
  - dry run
  - 預覽同步
  - rclone dry run
  - 同步預覽
  - 安全雲端同步
  - 防止資料遺失
  - 同步模擬
  - 雲端傳輸預覽
  - 同步前比對
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 RcloneView 中傳輸前使用 Dry Run 預覽同步變更

> 一次設定錯誤的同步就可能在幾秒鐘內刪除數千個檔案。**RcloneView** 讓你在傳輸任何一個位元組之前，透過 dry run 預覽每一項變更，讓你在執行同步前擁有完全的信心。

同步操作是 rclone 最強大的功能之一。它會讓目的地與來源一致，傳輸新檔案、更新已變更的檔案，並刪除來源已不存在的檔案。最後這部分——刪除，正是同步既強大又危險的原因所在。

Dry run 會模擬整個同步操作，但實際上不會移動、複製或刪除任何東西。它會準確顯示將會發生的事：哪些檔案會被傳輸、哪些會被刪除、哪些會被跳過。你可以檢視輸出結果，確認符合預期，然後才執行真正的同步。

RcloneView 將 dry run 直接整合進其同步工作流程，讓你能輕鬆透過 GUI 在執行前預覽變更。無論你是在同步兩個雲端遠端，還是將本機檔案備份到雲端，dry run 都應該是每次的第一步。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dry Run 的作用

當你啟用 dry run 模式時，rclone 會執行與真正同步相同的所有分析：掃描來源與目的地，依大小、時間戳記或校驗碼比對檔案，並建立要執行的操作清單。唯一的差別是這些操作實際上都不會被執行。

Dry run 的輸出會告訴你：
- **要傳輸的檔案**：會從來源複製到目的地的新增或已修改檔案。
- **要刪除的檔案**：目的地存在但來源沒有、將會被移除的檔案。
- **要跳過的檔案**：雙方完全相同、不需要任何動作的檔案。
- **總資料量**：將會傳輸多少資料，協助你估算所需時間與頻寬。

這項模擬是唯讀的。不會有任何檔案被移動、複製或刪除，你的來源與目的地將完全不受影響。

## 為什麼 Dry Run 對具破壞性的操作至關重要

`sync` 命令本質上具有破壞性，因為它會刪除目的地中來源不存在的檔案。這是設計上的行為，也是同步與複製的不同之處。但這也意味著錯誤會帶來後果：

- **同步方向錯誤**：如果你不小心對調了來源與目的地，同步會刪除你的來源檔案，以配合一個空的或過期的目的地。
- **路徑錯誤**：同步到錯誤的目錄可能會覆寫不相關的檔案或觸發大量刪除。
- **篩選條件設定錯誤**：如果你的納入／排除篩選條件設錯了，你原本想保留的檔案可能會被排除在來源掃描之外，因而在目的地被刪除。
- **驗證資訊過期**：如果來源遠端的認證已過期，它可能會顯示為空的，導致同步刪除目的地的所有內容。

Dry run 能在任何損害發生之前，捕捉到上述每一個問題。檢視輸出結果只需幾秒鐘，卻能省下數小時的復原工作。

## 如何在 RcloneView 中啟用 Dry Run

RcloneView 提供簡單的方式來執行同步預覽：

1. 開啟**工作管理員**（Job Manager），選擇你想要預覽的同步工作。
2. 在工作設定的**自訂旗標**（Custom Flags）區塊中加入 `--dry-run` 旗標。
3. 執行該工作，RcloneView 會模擬同步並顯示結果。
4. 在傳輸監視器中檢視輸出結果，了解將會發生什麼事。
5. 若一切正確，移除 `--dry-run` 旗標並實際執行該工作。

或者，你也可以使用內建終端機直接執行 dry run 命令：
```
rclone sync source: dest: --dry-run
```

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 讀懂 Dry Run 的輸出結果

Dry run 的輸出格式與真正的同步相同，只是不會執行任何操作。以下是需要留意的重點：

**已傳輸的檔案**會列出路徑與大小。請確認這些正是你預期會被更新或新增的檔案。如果你看到本應已經同步的檔案卻被列為要傳輸，可能表示時間戳記不一致或校驗碼有差異，值得進一步調查。

**已刪除的檔案**是最需要留意檢視的項目。每個列為刪除的檔案，在真正的同步中都會從目的地永久移除。如果你在此看到想要保留的檔案，代表你的來源路徑、篩選條件或同步方向可能需要調整。

**已跳過的檔案**確認已同步的檔案已被正確識別。健康的 dry run 輸出應該以跳過的檔案為主，只有少量的傳輸與刪除。

結尾的**摘要統計**會告訴你傳輸與刪除的總數，以及整體資料量。將這些數字與你的預期進行比對。如果你同步的資料夾中只改了一個檔案，但 dry run 卻顯示數千筆傳輸，那就表示設定有問題。

## Dry Run 曾捕捉到的常見意外狀況

以下是 dry run 曾防止資料遺失的真實情境：

**意外的大量刪除**：你設定了從 Google Drive 到 S3 的同步，但 Google Drive 的權杖過期了。Rclone 看到的來源是空的，因而計畫刪除目的地的所有內容。Dry run 會顯示數千筆刪除、零筆傳輸，立即凸顯出問題。

**篩選條件不符**：你為 `*.tmp` 檔案新增了一個排除篩選條件，卻不小心打成 `*.tmpl`，結果與你的 Terraform 範本檔案相符。Dry run 會顯示這些範本檔案將從目的地被刪除，提醒你注意這個打字錯誤。

**基礎目錄錯誤**：你原本想同步 `remote:projects/2026`，卻打成了 `remote:projects`。Dry run 會揭露所有年份的專案檔案都會被同步，可能覆寫你原本不打算動到的子目錄中的檔案。

**大小寫敏感性問題**：在不區分大小寫的遠端（如 OneDrive）與區分大小寫的遠端（如 S3）之間搬移檔案，可能會產生重複檔案。Dry run 會顯示這些非預期的傳輸，讓你能在問題擴大之前先處理大小寫衝突。

## 讓 Dry Run 成為你工作流程的一部分

為求最大安全性，請將 dry run 納入你的標準作業程序：

**手動同步時**：在執行任何同步操作之前，務必先執行一次 dry run。檢視輸出結果後，再移除旗標並執行真正的同步。多花一分鐘，換來的是安心。

**新建排程工作時**：建立新的排程同步時，先手動加上 `--dry-run` 執行一次。只有在確認 dry run 輸出結果符合預期後，才啟用排程。

**設定變更之後**：只要你修改了工作的來源、目的地、篩選條件或旗標，就在下次執行前先做一次 dry run。設定變更可能帶來意料之外的副作用，而 dry run 能將其揭露出來。

**定期檢查既有工作**：即使是穩定、長期執行的排程工作，偶爾進行一次 dry run 檢查也有好處。來源資料、遠端設定或供應商行為的變化，都可能隨時間改變同步行為。

## 結合 Dry Run 與比對功能

RcloneView 的資料夾比對功能可以與 dry run 相輔相成，提供來源與目的地內容的視覺化並排檢視。兩者搭配使用，能讓你在同步前獲得全面的可視性：

1. 使用**比對**（Compare）功能來視覺化檢視來源與目的地之間的差異。
2. 執行一次 **dry run**，確切了解同步操作將如何處理這些差異。
3. 確認計畫中的操作與你在比對中看到的內容一致。
4. 有信心地執行同步。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

比對功能會顯示目前的狀態，而 dry run 則顯示計畫中的動作。兩者搭配使用，能消除猜測，讓你同時清楚了解「有什麼不同」以及「將會對此採取什麼行動」。

## 進階：搭配其他旗標使用 --dry-run

Dry run 可以與其他所有 rclone 旗標搭配使用，因此你能模擬完全符合正式環境的設定：

- `--dry-run --backup-dir remote:backup` 可預覽同步結果，同時查看備份副本會存放在何處。
- `--dry-run --filter-from filters.txt` 可驗證你的篩選規則是否產生預期的結果。
- `--dry-run --max-age 24h` 可模擬只同步最近 24 小時內修改過的檔案。
- `--dry-run -v` 會加入詳細輸出，提供每項計畫操作的更多細節。

這種可組合性代表你可以在部署到正式環境之前，安全地測試任何設定。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 依你所需的來源與目的地建立同步工作。
3. 在自訂旗標中加入 `--dry-run` 並執行該工作以預覽變更。
4. 仔細檢視輸出結果，然後移除旗標並執行真正的同步。

Dry run 不花任何成本，只需幾秒鐘，卻能防止災難性的資料遺失。將它作為每次同步操作的第一步，你就不會再對同步操作對檔案造成的影響感到意外。

---

**相關指南：**

- [立即同步遠端儲存空間](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />

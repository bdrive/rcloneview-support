---
slug: migrate-koofr-to-onedrive-rcloneview
title: "將 Koofr 遷移至 OneDrive — 使用 RcloneView 傳輸檔案"
authors:
  - jay
description: "使用 RcloneView 將您的檔案從 Koofr 移轉至 Microsoft OneDrive。這是一份視覺化、逐步操作的雲端對雲端遷移指南，安全又準確。"
keywords:
  - Koofr to OneDrive migration
  - migrate Koofr to OneDrive
  - Koofr OneDrive transfer
  - cloud to cloud migration
  - RcloneView Koofr
  - RcloneView OneDrive
  - rclone Koofr OneDrive GUI
  - cloud file migration tool
  - OneDrive migration software
  - Koofr cloud transfer
tags:
  - koofr
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Koofr 遷移至 OneDrive — 使用 RcloneView 傳輸檔案

> RcloneView 讓從 Koofr 遷移至 Microsoft OneDrive 變得簡單且可驗證 — 內建資料夾比較、乾跑預覽（Dry Run）與即時傳輸監控功能。

Koofr 是一款注重隱私的歐洲雲端儲存供應商，深受重視資料主權與簡潔介面的使用者喜愛。OneDrive 與 Microsoft 365 緊密整合，當團隊採用 Word、Excel 與 Teams 協作時，往往會將其作為遷移目的地。在這兩家供應商之間搬移資料，並不只是單純複製檔案 — 真正的挑戰在於如何可靠地完成：保留巢狀資料夾結構、處理檔名的邊界情況，並確認每個檔案都完整送達。RcloneView 以視覺化方式管理整個遷移流程，直接連接兩家供應商，資料不會經過您的本機磁碟。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 Koofr 與 OneDrive

兩個遠端都是透過 RcloneView **Remote** 分頁中的 **New Remote** 精靈設定完成。先從供應商清單中選擇 Koofr 並輸入您的帳戶憑證來新增。接著新增 OneDrive — 它使用 OAuth 驗證方式，因此會開啟瀏覽器視窗，您以 Microsoft 帳戶登入後，連線便會自動建立，無需手動處理權杖（token）。

當兩個遠端都儲存完成後，它們會以獨立分頁的形式顯示在雙窗格檔案總管中。在左側面板開啟 Koofr、右側面板開啟 OneDrive，即可並排檢視兩邊的資料夾樹狀結構。對於正在遷移共用專案階層的團隊來說，這樣的版面配置立即派上用場：在移動任何檔案之前，您可以先確認 OneDrive 上的目標資料夾結構是否與預期相符。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and OneDrive remotes in RcloneView" class="img-large img-center" />

## 遷移前的內容稽核

從 **Home** 分頁啟動的 RcloneView **Folder Compare** 工具，是遷移前檢查的有效方式。將左側指向 Koofr 的來源資料夾，右側指向對應的 OneDrive 目標資料夾。比較檢視會將每個檔案分類：僅左側有（尚未上傳至 OneDrive）、僅右側有（已存在，或來自先前未完成的執行）、相同（大小相符），或不同（大小不符，可能存在衝突）。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Koofr and OneDrive folder contents before migration in RcloneView" class="img-large img-center" />

對於正在遷移數千份文件與設計檔案的團隊而言，這個比較步驟能提前抓出那些通常要到數週後才會以支援請求形式浮現的問題 — 例如因路徑中的特殊字元而靜默失敗的資料夾，或先前嘗試已部分遷移的檔案。一旦比較結果確認來源與目標處於預期狀態，即可繼續進行同步作業。

## 執行雲端對雲端傳輸

在 **Job Manager** 中建立新工作，將 Koofr 資料夾設為來源、目標 OneDrive 資料夾設為目的地，並選擇 **Sync** 作為工作類型。RcloneView 會直接在兩家供應商之間傳輸檔案：資料從 Koofr 流向 OneDrive，不經過本機暫存，這使您的網路頻寬使用量僅與雲端對雲端路徑相關，而不需要將所有資料下載兩次。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer from Koofr to OneDrive in RcloneView" class="img-large img-center" />

在進階設定（Advanced Settings）步驟中，啟用**校驗碼驗證**（checksum verification）以偵測傳輸過程中的任何損壞。先執行一次**乾跑（Dry Run）** — 這會在任何實際搬移之前，預覽將被複製或刪除的完整檔案清單，讓您在正式執行前有最後機會發現非預期的刪除或路徑不符問題。

## 監控進度並確認完成

**Transferring** 分頁會在工作執行期間即時顯示傳輸速度、已處理檔案數量與已搬移的總位元組數。完成後，**Job History** 記錄會保存每次執行的開始時間、耗費時長、傳輸大小與最終狀態。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Koofr to OneDrive migration progress in RcloneView" class="img-large img-center" />

遷移完成後，再執行一次 **Folder Compare** 並篩選「僅左側有」的檔案。如果數量為零，代表遷移已完成。若仍有檔案殘留，比較檢視會準確顯示是哪些檔案，讓您可以針對特定子資料夾重新執行工作，而不必重新遷移整個資料集。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **Remote tab > New Remote** 新增您的 Koofr 遠端，並輸入您的帳戶憑證。
3. 使用 OAuth 瀏覽器登入方式新增您的 OneDrive 遠端 — 無需手動處理權杖。
4. 使用 **Folder Compare** 稽核來源與目標，並在正式執行完整遷移前先執行乾跑同步（Dry Run sync）。

使用 RcloneView 將 Koofr 遷移至 OneDrive，能為您提供完整的稽核軌跡 — 從遷移前的比較到工作歷史紀錄 — 讓您能夠有信心地確認每個檔案都順利完成遷移。

---

**相關指南：**

- [使用 RcloneView 將 Koofr 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [使用 RcloneView 將 Koofr 遷移至 Backblaze B2](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)
- [使用 RcloneView 將 Box 遷移至 OneDrive](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />

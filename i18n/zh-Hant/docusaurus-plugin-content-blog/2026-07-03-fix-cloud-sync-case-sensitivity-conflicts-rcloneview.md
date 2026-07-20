---
slug: fix-cloud-sync-case-sensitivity-conflicts-rcloneview
title: "修正雲端同步大小寫敏感衝突 — 使用 RcloneView 解決重複檔案問題"
authors:
  - tayson
description: "當 Windows 或 macOS 的大小寫不敏感檔案系統遇上大小寫敏感的雲端儲存時，使用 RcloneView 阻止同步工作建立重複檔案。"
keywords:
  - cloud sync case sensitivity
  - duplicate files cloud sync
  - case sensitive filenames cloud storage
  - fix cloud sync duplicates
  - windows macos case insensitive sync
  - cloud storage filename conflicts
  - rcloneview sync errors
  - resolve cloud sync duplicate uploads
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修正雲端同步大小寫敏感衝突 — 使用 RcloneView 解決重複檔案問題

> 「Report.pdf」與「report.pdf」在 Windows 和 macOS 看來完全相同，但對大多數雲端儲存來說卻是兩個不同的檔案 — 這種落差會在你設定同步工作去捕捉它之前，悄悄地讓資料夾塞滿重複檔案。

Windows 和 macOS 預設將本機磁碟格式化為大小寫不敏感，因此 `Invoice.pdf` 與 `invoice.pdf` 在磁碟上會被視為同一個檔案。Google Drive、Dropbox、Amazon S3 以及大多數其他雲端後端則是大小寫敏感的，也就是說它們會樂於將兩者儲存為個別的物件。結果就是資料夾會慢慢累積出幾乎重複的檔案，同步工作看起來像是憑空「建立」了副本，或是發生覆寫循環 — 某台裝置上的重新命名始終無法完全對應到雲端已存在的版本。RcloneView 不會改變底層檔案系統的運作方式，但它能提供可視性與控制項，讓你在這些衝突演變成一團亂之前就先發現它們。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 用資料夾比較找出大小寫衝突

要確認你面對的是大小寫敏感問題而非真正的同步失敗，最快的方法就是在本機資料夾與雲端目的地之間執行資料夾比較。僅在大小寫上有差異的檔案，會在兩側各自顯示為獨立的項目，而不是被判定為「相同」，這就是最明顯的線索 — 真正的內容重複問題會顯示不同的檔案大小，而純粹的大小寫不一致則通常會顯示兩個大小相同但名稱不同的項目。比較檢視畫面中的「顯示不同的檔案」與「顯示僅左側 / 僅右側」篩選器，能讓你輕鬆挑出這些成對項目，而不必手動捲動整個資料夾樹狀結構。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify case sensitivity duplicates between local and cloud storage" class="img-large img-center" />

## 用單向同步與校驗碼防止覆寫循環

雙向同步（Beta）是大小寫衝突造成最大損害的地方，因為每一端都可能將一次重新命名解讀為新上傳與舊刪除的組合。將受影響的工作切換為單向「僅修改目的地」同步能消除這種模糊性 — 永遠由一端作為權威來源，因此來源端僅涉及大小寫的重新命名只會更新目的地，而不會觸發重複檔案。啟用同步精靈第 2 步中的校驗碼比較選項也有幫助，因為它是依雜湊值與檔案大小來比較檔案，而非僅依賴檔名比對，這能在大小寫差異與真正的內容變更混在一起時降低誤判機率。RcloneView 可在同一個視窗中掛載並同步 90 多個服務供應商，並支援 Windows、macOS 與 Linux，這讓你更容易看出某個衝突是否源自特定裝置的檔案系統行為。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job with checksum comparison to avoid case sensitivity duplicates" class="img-large img-center" />

## 安全清除既有的重複檔案

一旦你透過資料夾比較找出大小寫重複的成對檔案，在刪除任何內容之前務必先執行試跑（Dry Run） — 它會列出實際上會被移除的檔案，而不會真的進行任何變更，這一點很重要，因為兩個「重複」檔案的內容可能自大小寫不一致發生以來就已經產生分歧了。確認試跑輸出結果正確後，再使用比較檢視畫面中的刪除動作來移除過時的副本，保留檔名正確且最新的版本。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a dry run before cleaning up case sensitivity duplicate files in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在受影響的本機資料夾與其雲端目的地之間執行資料夾比較。
3. 篩選出顯示為獨立項目但檔案大小相同的檔案，藉此找出大小寫衝突。
4. 將同步工作切換為單向並啟用校驗碼比較，然後在清除重複檔案前先執行試跑。

一點點的可視性，就能將一個看不見的檔案系統怪異行為，變成一個你真正能修正的問題，而不是一個只會不斷悄悄複製檔案的問題。

---

**相關指南：**

- [修正檔名特殊字元 — 使用 RcloneView 解決雲端同步問題](https://rcloneview.com/support/blog/fix-filename-special-characters-cloud-sync-rcloneview)
- [修正雲端同步重複檔案 — 如何使用 RcloneView 解決](https://rcloneview.com/support/blog/fix-cloud-sync-duplicate-files-rcloneview)
- [試跑 — 在 RcloneView 中傳輸前預覽雲端同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />

---
slug: fix-macos-empty-folders-permissions-rcloneview
title: "修復 macOS 桌面和文件文件夾顯示為空的問題 — 使用 RcloneView 修復權限"
authors:
  - robin
description: "修復 RcloneView 在 macOS 上將桌面、文件或下載文件夾顯示為空的問題。授予正確的隱私權限並恢復完整的檔案存取權限。"
keywords:
  - macOS 空資料夾修復
  - RcloneView macOS 權限
  - 桌面資料夾為空 macOS
  - 文件資料夾為空 macOS
  - macOS 完整磁碟取用權
  - 隱私權與安全性 檔案與資料夾
  - macOS 雲端同步權限
  - RcloneView 疑難排解
  - macOS 檔案存取遭拒
  - 修復 RcloneView macOS
tags:
  - RcloneView
  - troubleshooting
  - tips
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 macOS 桌面和文件文件夾顯示為空的問題 — 使用 RcloneView 修復權限

> 如果 RcloneView 將您 Mac 上的桌面、文件或下載資料夾顯示為空,幾乎總是因為某個尚未授予的 macOS 隱私權限——而不是同步問題。

自 Catalina 起,macOS 將桌面、文件和下載資料夾鎖定在隱私權與安全性權限之後,任何想要讀取這些資料夾的應用程式——包括 RcloneView 在將本機資料夾作為同步來源瀏覽時——都必須獲得明確核准。首次設定本機到雲端備份工作的使用者經常遇到這個問題:資料夾樹會載入,但檔案清單始終為空,儘管檔案明顯存在於磁碟上。RcloneView 連接並同步 90 多個雲端服務供應商,但這個特定問題完全出在 macOS 端,而且是一個兩分鐘就能解決的修復。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 資料夾顯示為空的原因

macOS 將桌面、文件和下載視為受保護的位置。應用程式首次嘗試讀取其中之一時會收到權限提示,如果該提示被誤關閉或拒絕——這在初始設定期間很容易意外發生——應用程式會靜默收到一個空清單,而不是錯誤提示。RcloneView 的檔案總管面板會顯示資料夾本身,在某些情況下甚至顯示正確的檔案數量,但底層檔案清單仍為空,因為作業系統在檔案系統層面拒絕提供內容。

這與任何雲端遠端儲存的問題是分開的。如果您的 Google 雲端硬碟或 Dropbox 遠端儲存也顯示為空,那是另一個不同的問題——此修復專門適用於用作同步來源或目標的本機 macOS 資料夾。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder view affected by macOS privacy permissions" class="img-large img-center" />

## 授予正確的權限

開啟系統設定 > 隱私權與安全性 > 檔案與資料夾,在清單中找到 RcloneView,並分別啟用桌面資料夾、文件資料夾和下載資料夾的開關。如果 RcloneView 尚未出現在清單中,請先在應用程式中瀏覽到其中一個資料夾以觸發權限提示——macOS 只會列出已嘗試存取的應用程式。

對於持續存在的問題,或者如果您要從三個受保護資料夾以外的位置(外接硬碟、網路共用)進行同步,在同一個隱私權與安全性面板中授予完整磁碟取用權是更徹底的解決方法。這涵蓋了桌面、文件、下載以及作業系統可能限制的任何其他位置。

<img src="/support/images/en/blog/new-remote.png" alt="Granting macOS Files and Folders permission to RcloneView" class="img-large img-center" />

變更這些權限後,必須完全重新啟動 RcloneView——而不僅僅是關閉視窗。macOS 只在啟動時重新評估應用程式的檔案存取權限,因此在資料夾內容正確顯示之前,需要完全結束並重新開啟應用程式。

## 驗證修復並建立您的同步

重新啟動後,瀏覽回先前為空的資料夾——檔案和資料夾數量現在應該在底部摘要中正常顯示。在執行真正的同步工作之前,請針對您預期的雲端目標使用資料夾比較(Folder Compare),確認 RcloneView 現在能夠看到本機端應有的一切內容,從而在其演變為不完整備份之前捕獲任何殘留的存取問題。

確認權限正常運作後,照常建立您的同步工作:本機資料夾作為來源,雲端遠端儲存作為目標,並先啟用試執行(Dry Run)以預覽將要傳輸的內容。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Building a local-to-cloud sync job after fixing macOS permissions" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟系統設定 > 隱私權與安全性 > 檔案與資料夾。
3. 為 RcloneView 啟用桌面、文件和下載存取權限,或授予完整磁碟取用權。
4. 完全結束並重新啟動 RcloneView,然後驗證資料夾內容是否正確載入。

這個權限模型的存在是為了保護 macOS 上的使用者資料,一旦授予一次,RcloneView 就會在此後的每一個同步工作中保持對本機檔案的完整、不間斷的存取。

---

**相關指南:**

- [使用 RcloneView 修復 macOS「開啟的檔案過多」錯誤](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [macOS Sequoia 上的 RcloneView — 雲端儲存同步](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [修復傳輸後雲端同步檔案遺失問題 — RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />

---
slug: fix-proton-drive-sync-errors-rcloneview
title: "修復 Proton Drive 同步錯誤 — RcloneView 疑難排解指南"
authors:
  - tayson
description: "透過實用的修復方法與記錄步驟，排解 RcloneView 中 Proton Drive 的驗證、雙重驗證（2FA）與同步失敗問題。"
keywords:
  - Proton Drive 同步錯誤
  - 修復 Proton Drive RcloneView
  - Proton Drive 驗證失敗
  - Proton Drive 2FA 登入
  - Proton Drive 疑難排解
  - RcloneView 同步錯誤
  - Proton Drive 連線問題
  - Proton Drive 備份修復
  - rclone 記錄除錯
tags:
  - RcloneView
  - troubleshooting
  - tips
  - proton-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Proton Drive 同步錯誤 — RcloneView 疑難排解指南

> 當 Proton Drive 同步卡住或驗證失敗時，問題通常出在憑證設定或工作記錄，而不是傳輸本身的錯誤。

Proton Drive 是透過電子郵件、密碼與選用的雙重驗證碼連接到 RcloneView，而非瀏覽器 OAuth 流程，因此大多數同步失敗都可追溯到這個憑證交握過程，或是在你的 Proton 帳戶設定變更後尚未重新測試的工作。RcloneView 會在 Job History 與 Log 分頁中顯示這些失敗，只要知道該查看哪裡，就能輕鬆找出真正的原因。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 驗證與 2FA 失敗

如果 Proton Drive 遠端連線失敗，請先在 Remote Manager 中重新檢查輸入的電子郵件與密碼——與 OAuth 供應商不同，這裡沒有瀏覽器重新登入可以回退，因此一旦 Proton 密碼變更，該遠端會在你手動編輯之前持續悄悄失效。若你的 Proton 帳戶已啟用雙重驗證，請務必及時輸入驗證碼，因為 2FA 驗證碼很快就會過期，過期的驗證碼會產生與密碼錯誤相同的一般驗證錯誤。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView Remote Manager 中編輯 Proton Drive 憑證" class="img-large img-center" />

RcloneView 在 Windows、macOS 與 Linux 上使用同一個視窗掛載並同步 Proton Drive——因此修復一次憑證後，無需針對各平台重新設定即可套用到你已設定該遠端的所有位置。

## 同步工作卡住或於傳輸中途失敗

一項會啟動但從未完成的工作，通常代表排除範圍超出預期的篩選規則，或是針對不穩定連線設定得過低的重試次數。開啟該工作的 Advanced Settings 並確認重試次數——預設的 3 次可應對短暫的網路問題，但降至 1 會完全移除這道安全防護。在重新啟動工作前執行一次 Dry Run，即可準確查看它將處理哪些檔案。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在重試 Proton Drive 同步工作前執行 Dry Run" class="img-large img-center" />

## 檢視 Job History 並啟用除錯記錄

Job History 會記錄某次執行是 Completed、Errored 還是 Canceled，以及其停止的確切時間——這個時間戳記是將失敗與特定檔案或網路事件建立關聯的可靠方法。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中檢視 Proton Drive 工作歷程狀態" class="img-large img-center" />

若失敗持續發生或原因不明，請在設定中啟用 rclone 記錄，將記錄層級設為 DEBUG，重新啟動內嵌的 rclone 處理程序，然後重現該同步。產生的記錄檔會精確指出哪個 API 呼叫失敗，這比僅憑錯誤對話方塊猜測有用得多。

## 開始使用

1. 若尚未安裝，請從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote Manager 中重新輸入你的 Proton Drive 電子郵件與密碼，若出現提示則及時完成 2FA。
3. 在受影響的同步工作上執行 Dry Run，確認哪些檔案在範圍內。
4. 若重新整理憑證仍未解決問題，請啟用 DEBUG 記錄並重現該問題。

大多數 Proton Drive 同步錯誤在確認憑證與重試設定後即可解決——其餘的問題記錄會告訴你答案。

---

**相關指南：**

- [使用 RcloneView 管理 Proton Drive 檔案與雲端同步](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [使用 RcloneView 將硬碟加密備份到 Proton Drive](https://rcloneview.com/support/blog/hard-drive-to-proton-drive-with-rcloneview)
- [Proton Drive 連接你的雲端 —— 使用 RcloneView 輕鬆備份與同步](https://rcloneview.com/support/blog/proton-drive-multi-cloud-sync-with-rcloneview)

<CloudSupportGrid />

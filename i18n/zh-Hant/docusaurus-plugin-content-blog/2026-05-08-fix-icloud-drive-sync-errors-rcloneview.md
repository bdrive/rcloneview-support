---
slug: fix-icloud-drive-sync-errors-rcloneview
title: "修復 iCloud Drive 同步錯誤——如何用 RcloneView 解決"
authors:
  - tayson
description: "診斷並修復 RcloneView 中的 iCloud Drive 同步錯誤——涵蓋驗證問題、rclone 版本需求，以及 macOS 上常見的連線問題。"
keywords:
  - iCloud Drive sync errors RcloneView
  - fix iCloud Drive rclone errors
  - iCloud Drive authentication problem
  - RcloneView iCloud troubleshoot
  - iCloud Drive connection failed
  - rclone iCloud Drive setup
  - fix iCloud backup RcloneView
  - iCloud Drive macOS sync issues
tags:
  - macos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 iCloud Drive 同步錯誤——如何用 RcloneView 解決

> rclone 中的 iCloud Drive 支援需要特定設定。以下說明如何在使用 RcloneView 搭配 iCloud 時，診斷驗證失敗、版本不符與連線錯誤。

iCloud Drive 是使用 rclone 設定時較為複雜的雲端儲存供應商之一，因為 Apple 的驗證機制依賴 Apple ID 憑證，且可能涉及兩步驟驗證流程。RcloneView 透過內建的 rclone 後端來處理這一切，但要讓 iCloud 正常運作，必須先滿足幾項前提條件。本指南將帶你了解最常見的失敗情況。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 前提條件：需要 rclone v1.69 或以上版本

iCloud Drive 支援是在 rclone v1.69 中引入的。如果你看到類似 `unknown provider type: iclouddrive` 或 `remote type not found` 的錯誤，表示你內建的 rclone 版本太舊。在 RcloneView 中，可於視窗底部的**頁尾列**查看目前的 rclone 版本。如果顯示的版本早於 v1.69.1，請使用**「說明」分頁 → 檢查更新**來更新至最新的內建 rclone。

RcloneView 內建了較新版本的 rclone 執行檔，但如果你使用的是較舊的安裝版本，觸發一次自我更新即可完全解決此類錯誤。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

## 驗證失敗與 Apple ID 兩步驟驗證

透過**「遠端」分頁 → 新增遠端**新增 iCloud Drive 時，RcloneView 會提示你輸入 Apple ID（電子郵件）與密碼。如果你已啟用兩步驟驗證——Apple 現在對大多數帳戶都要求啟用——系統還會要求你輸入出現在受信任 Apple 裝置上的驗證碼。請在遠端設定精靈提示時輸入該驗證碼。

此階段常見的錯誤包括 `INVALID_EMAIL`（請確認你的 Apple ID 電子郵件地址是否正確）、`AUTHENTICATION_FAILED`（如果你的 Apple 帳戶已啟用進階安全性，可能需要使用專用 App 密碼），以及若未及時回應兩步驟驗證提示所導致的逾時錯誤。如果 Apple 對你的帳戶強制要求使用專用 App 密碼，請至 appleid.apple.com 產生一組，並以此取代一般密碼使用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Testing iCloud Drive connection in RcloneView" class="img-large img-center" />

## 列表載入緩慢或檔案顯示不完整

iCloud Drive 採用隨選儲存方式，意味著檔案可能僅儲存在 iCloud 上，而未下載至本機。透過 rclone 瀏覽時，尚未快取至 Mac 本機的檔案可能顯示的中繼資料有限，或需要更長時間才能列出。這是正常現象——iCloud 必須從 Apple 的伺服器擷取檔案中繼資料。

如果資料夾列表顯示不完整，請嘗試重新整理面板（按 F5 或從右鍵選單選擇**重新載入**）。對於較大型的 iCloud 資料庫，可在工作設定中將**相等性檢查器數量**調低（2–4），以降低 rclone 在比較作業期間頻繁呼叫 iCloud API 的速率。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="iCloud Drive transfer monitoring in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過頁尾列確認內建的 rclone 版本為 v1.69.1 或以上。
3. 設定遠端時使用你的 Apple ID 與兩步驟驗證碼（或專用 App 密碼）。
4. 如果遇到列表載入緩慢或逾時，請降低檢查器的並行數量。

正確設定完成後，iCloud Drive 便能順暢整合進你的 RcloneView 工作流程，用於備份與跨雲端傳輸。

---

**相關指南：**

- [使用 RcloneView 管理 iCloud Drive 雲端同步](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [修復 RcloneView 中的 macOS 開啟檔案過多錯誤](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [RcloneView 於 macOS Sonoma——雲端同步與備份](https://rcloneview.com/support/blog/rcloneview-macos-sonoma-cloud-sync)

<CloudSupportGrid />

---
slug: fix-onedrive-sync-errors-rcloneview
title: "修復 OneDrive 同步錯誤——如何用 RcloneView 解決"
authors:
  - tayson
description: "診斷並修復 RcloneView 中常見的 Microsoft OneDrive 同步錯誤——從過期的 OAuth 憑證、速率限制,到傳輸停滯與校驗碼不符。"
keywords:
  - onedrive sync errors rcloneview
  - fix onedrive sync issues
  - onedrive rate limit error rclone
  - onedrive authentication expired rcloneview
  - microsoft onedrive transfer stalled
  - fix onedrive connection rcloneview
  - onedrive backup errors troubleshoot
  - cloud sync troubleshooting guide
  - onedrive rclone gui fix
  - resolve onedrive sync failures
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 OneDrive 同步錯誤——如何用 RcloneView 解決

> RcloneView 中的 OneDrive 同步錯誤通常可歸結為三個原因之一——過期的 OAuth 憑證、API 速率限制,或傳輸設定錯誤——而每一種都能在應用程式中找到明確的解決方法。

Microsoft OneDrive 是部署最廣泛的商用雲端平台之一,但其 API 行為有時會產生同步錯誤,導致傳輸停滯、不完整或靜默失敗。RcloneView 透過帶時間戳記的日誌、即時傳輸監控與細部工作控制,提供了一個結構化的環境來診斷這些問題——完全不需要使用命令列。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 先查看日誌分頁

在變更任何設定之前,先開啟 RcloneView 底部資訊檢視中的**日誌(Log)**分頁。每一次傳輸與同步操作都會在此寫入帶時間戳記的紀錄,包括 OneDrive API 回傳的錯誤碼。出現 `AccessDenied` 或 `InvalidAuthenticationToken` 訊息代表 OAuth 憑證已過期;出現 `429 Too Many Requests` 訊息代表已達速率限制;而 `EOF` 或連線錯誤通常表示網路中斷,而非 OneDrive 本身的問題。

在動手變更設定之前先確認確切的錯誤類型,可以節省不少時間——憑證問題的修復方式與速率限制問題的修復方式完全不同。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and log tab in RcloneView for diagnosing OneDrive sync errors" class="img-large img-center" />

## 當 OAuth 憑證過期時重新驗證

RcloneView 中的 OneDrive 連線使用 OAuth 瀏覽器驗證。在活躍工作階段中,存取權杖會自動更新,但如果某個遠端長時間閒置,權杖可能會完全過期——導致所有指向該 OneDrive 帳戶的同步工作都因驗證錯誤而失敗。

修復方法很簡單:前往**遠端(Remote)**分頁 > **遠端管理員(Remote Manager)**,找到該 OneDrive 遠端,點擊**編輯(Edit)**。RcloneView 會開啟一個瀏覽器視窗,讓你重新登入並取得新的權杖。儲存後,重新執行失敗的工作即可。無需變更任何工作設定——只需要更新憑證。

<img src="/support/images/en/blog/new-remote.png" alt="Editing a OneDrive remote in RcloneView Remote Manager to refresh OAuth token" class="img-large img-center" />

## 針對速率限制錯誤降低同時傳輸數量

OneDrive 對每個使用者強制實施 API 速率限制,若工作設定了過高的同時檔案傳輸數量,可能會觸發 `429` 回應——導致部分失敗或重試,大幅拖慢整體工作進度。預設的重試次數(3 次)常常會掩蓋速率限制問題,使其看起來像是間歇性錯誤。

在**工作管理員(Job Manager)**中開啟該工作並點擊**編輯(Edit)**。在步驟 2(進階設定)中,將**檔案傳輸數量(Number of file transfers)**從預設值調低至 2 或 4。若該工作使用了較高的相等性檢查器(equality checkers)數量,也請一併調低——官方建議對回應較慢的後端使用 4 個以下。儲存工作後再次執行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing OneDrive job settings to reduce concurrent transfers in RcloneView" class="img-large img-center" />

## 重新執行失敗工作前先使用模擬執行

部分同步可能會讓目的資料夾處於不一致的狀態——有些檔案已傳輸,有些則沒有。在重新執行失敗的工作之前,請使用**模擬執行(dry run)**模式來預覽究竟哪些檔案會被複製或刪除。模擬執行不會做出任何實際變更;它會產生一份完整的預計操作清單,讓你確認工作能從中斷處乾淨地完成。

在工作管理員中,選取該工作並從執行選項中選擇**模擬執行(Dry Run)**。仔細檢查檔案清單,特別是在上一次工作執行期間來源資料夾曾發生變動的情況下。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Dry run preview of OneDrive sync job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 工作失敗後開啟**日誌(Log)**分頁,先確認具體的錯誤類型再進行變更。
3. 若為驗證錯誤,請在遠端管理員中編輯該 OneDrive 遠端,並透過瀏覽器重新驗證。
4. 若為速率限制錯誤,請在工作步驟 2 的進階設定中將同時檔案傳輸數量降至 2–4,並先以模擬執行預覽後再重新執行。

一旦找出根本原因並對症下藥,大多數 OneDrive 同步錯誤都能在幾分鐘內解決——RcloneView 的工作歷史紀錄與日誌輸出提供了你所需的一切,能讓你快速排除問題。

---

**相關指南:**

- [修復雲端傳輸停滯進度——如何用 RcloneView 解決](https://rcloneview.com/support/blog/fix-cloud-transfer-stalled-progress-rcloneview)
- [將 OneDrive 遷移至 Amazon S3——用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-onedrive-to-amazon-s3-rcloneview)
- [將 Backblaze B2 同步至 OneDrive——用 RcloneView 進行雲端備份](https://rcloneview.com/support/blog/sync-backblaze-b2-to-onedrive-rcloneview)

<CloudSupportGrid />

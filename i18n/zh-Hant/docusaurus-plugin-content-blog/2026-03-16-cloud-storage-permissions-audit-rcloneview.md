---
slug: cloud-storage-permissions-audit-rcloneview
title: "稽核您的雲端儲存——使用 RcloneView 找出誤置的檔案、錯誤的權限與資料蔓生"
authors:
  - tayson
description: "您上一次檢查雲端帳戶裡實際存放了什麼是什麼時候？了解如何使用 RcloneView 稽核您的雲端儲存，找出誤置的檔案、孤立的資料與資料蔓生。"
keywords:
  - cloud storage audit
  - cloud permissions audit
  - cloud data sprawl
  - find misplaced cloud files
  - cloud storage cleanup
  - cloud audit tool
  - cloud file inventory
  - data governance cloud
  - cloud storage review
  - multi cloud audit
tags:
  - RcloneView
  - organization
  - best-practices
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 稽核您的雲端儲存——使用 RcloneView 找出誤置的檔案、錯誤的權限與資料蔓生

> 您在 Google Drive、OneDrive、Dropbox、S3，以及兩年前申請的那個 Backblaze 帳戶裡都有檔案。您真的知道每個帳戶裡有什麼嗎？雲端儲存稽核往往會帶來驚喜——而且通常能省錢。

雲端儲存會在不知不覺中累積。免費方案的容量被填滿、試用帳戶被遺忘、共用資料夾不斷增生，不知不覺間您就在為五個不同的服務供應商支付儲存費用，卻不清楚哪些資料存放在哪裡。定期稽核——瀏覽每個帳戶、比對內容、清理重複項目——能讓您的雲端保持井然有序，並將成本控制在掌握之中。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 應該檢查什麼

### 孤立資料

存在於備份服務供應商上、但已從主要來源刪除的檔案。這些是刻意保留的封存資料，還是被遺忘的殘留物？

### 重複副本

同樣的檔案無意間被儲存在多個服務供應商上。資料夾比較功能能抓出這些重複項目：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicates across clouds" class="img-large img-center" />

### 被遺忘的帳戶

那個存有 200 GB 測試資料的 Wasabi 試用帳戶？還是上一份工作留下的 Dropbox 帳戶？將它們全部連接到 RcloneView，看看裡面有什麼：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse all accounts" class="img-large img-center" />

### 過時的備份

幾個月前就已停止執行、卻沒人注意到的備份工作。檢查工作歷史記錄中的空缺：

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check backup history" class="img-large img-center" />

### 不必要的儲存成本

存放在昂貴熱儲存（S3 Standard）上、其實應移至冷儲存（Glacier）的檔案。存放在高階服務供應商上、可移轉至更便宜方案的大型檔案。

## 如何進行稽核

### 第 1 步：連接所有帳戶

將您擁有的每一個雲端帳戶都加入 RcloneView。每一個——包括您已經忘記的帳戶。

### 第 2 步：瀏覽每個帳戶

使用雙窗格檔案總管檢視內容。記錄每個帳戶裡有什麼，以及是否仍有留存的必要。

### 第 3 步：跨帳戶比較

在您的主要儲存空間與每個備份位置之間使用資料夾比較功能。找出重複項目、遺失的檔案與過時資料。

### 第 4 步：清理

- 將誤置的檔案移至正確位置
- 刪除確認無誤的重複項目（需先驗證主要副本）
- 將舊資料封存至冷儲存
- 取消不再使用的帳戶

### 第 5 步：記錄並排程

設定每季提醒，定期重複執行稽核。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **加入您所有的雲端帳戶**——一個都不遺漏。
3. **有系統地瀏覽並比較**。
4. **清理**重複項目與過時資料。
5. **每季重複執行**。

您無法管理您看不見的東西。

---

**相關指南：**

- [管理雲端蔓生](https://rcloneview.com/support/blog/manage-cloud-sprawl-too-many-accounts-rcloneview)
- [尋找並移除重複檔案](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-storage-rcloneview)
- [隱藏的雲端儲存成本](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />

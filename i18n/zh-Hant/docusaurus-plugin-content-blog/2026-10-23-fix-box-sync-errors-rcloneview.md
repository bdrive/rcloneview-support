---
slug: fix-box-sync-errors-rcloneview
title: "修復 Box 同步錯誤 — 使用 RcloneView 解決"
authors:
  - kai
description: "使用 RcloneView 修復 Box 同步錯誤：藉由 Dry Run、記錄檔和作業歷史記錄，解決 OAuth、Box for Business、速率限制和檔名問題。"
keywords:
  - 修復 Box 同步錯誤
  - Box 同步無法運作
  - Box 速率限制錯誤
  - Box OAuth 權杖過期
  - Box for Business rclone
  - RcloneView box
  - Box 疑難排解
  - Box 傳輸失敗
tags:
  - RcloneView
  - box
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Box 同步錯誤 — 使用 RcloneView 解決

> 一份實用的檢查清單，協助你使用 RcloneView 內建的工具診斷失敗的 Box 傳輸。

Box 同步作業失敗通常源自幾個反覆出現的原因：登入過期、帳戶類型錯誤、API 呼叫被限流，或是 Box 處理方式與一般文件不同的檔案。RcloneView 提供作業歷史記錄、記錄檔和內建終端機，讓你能快速區分這些原因。此外，RcloneView 可在單一視窗中掛載並同步 90 多個供應商，支援 Windows、macOS 和 Linux，因此你也可以用另一個遠端來測試相同的檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 從作業歷史記錄與記錄檔索引標籤開始

開啟作業歷史記錄（Job History），查看失敗執行的狀態（Completed、Errored 或 Canceled），以及已傳輸的大小和檔案數量。部分傳輸通常表示是個別檔案的問題；若作業立即失敗，通常是驗證或設定問題。

若要查看詳細資訊，請切換到底部的記錄檔（Log）索引標籤。若要記錄更多內容，請在 Embedded Rclone 設定中啟用 rclone 記錄，將等級設為 DEBUG，重新啟動內建 rclone，然後重現該故障。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中檢視失敗的作業歷史記錄" class="img-large img-center" />

## 重新驗證並檢查帳戶類型

如果所有請求都失敗，可能是 OAuth 權杖已過期或被撤銷。開啟遠端管理員（Remote Manager），編輯 Box 遠端，並透過瀏覽器重新登入。

如果可以登入，但資料夾遺失或出現權限錯誤，請檢查帳戶類型。Box for Business 需要在遠端上設定 `box_sub_type = enterprise`。對企業帳戶使用個人帳戶的設定，是造成結果令人困惑的常見原因。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中編輯 Box 遠端設定" class="img-large img-center" />

## 處理限流與大型作業

當一次處理數千個小檔案時，Box 可能會限制請求。在作業的進階設定（Advanced Settings）中，降低檔案傳輸數量和相等性檢查器（equality checkers）的數量（對於較慢的後端，建議不超過 4）。將重試次數保留為預設值 3，讓暫時性的失敗可以自動恢復。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 索引標籤中監控傳輸" class="img-large img-center" />

## 過濾有問題的檔案

Box Notes 等僅限線上的項目並不是一般檔案。過濾步驟中預先定義的 Box Docs 過濾器會將它們排除，讓它們不再導致作業失敗。你也可以新增自訂規則、設定檔案大小上限，或在調查期間排除有問題的資料夾。之後執行 Dry Run 來確認將會複製的內容。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="比較資料夾以找出同步失敗的檔案" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 查看作業歷史記錄與記錄檔索引標籤，找出確切的錯誤。
3. 重新驗證 Box 遠端，如適用，請確認 Box for Business 設定。
4. 降低並行數，套用 Box Docs 過濾器，然後執行 Dry Run 並重新執行。

大多數 Box 失敗都是設定問題，花幾分鐘查看記錄檔就能發現。

---

**相關指南：**

- [修復 Box 上傳錯誤](https://rcloneview.com/support/blog/fix-box-upload-errors-rcloneview)
- [修復 OAuth 權杖過期導致的雲端同步問題](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)
- [修復雲端 API 速率限制錯誤](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />

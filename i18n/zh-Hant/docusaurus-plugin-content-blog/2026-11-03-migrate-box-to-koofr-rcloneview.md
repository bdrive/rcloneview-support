---
slug: migrate-box-to-koofr-rcloneview
title: "從 Box 遷移到 Koofr — 使用 RcloneView 傳輸檔案"
authors:
  - jay
description: "使用 RcloneView 從 Box 遷移到 Koofr：連接兩個遠端，先以 Dry Run 預演傳輸，再執行雲端到雲端複製，並用 Folder Compare 驗證結果。"
keywords:
  - 從 Box 遷移到 Koofr
  - Box 到 Koofr 傳輸
  - Box Koofr 遷移
  - RcloneView Box
  - RcloneView Koofr
  - 雲端到雲端傳輸
  - 從 Box 移動檔案
  - Koofr 歐洲雲端儲存
  - rclone GUI 遷移
  - Box Docs 篩選器
tags:
  - RcloneView
  - box
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 從 Box 遷移到 Koofr — 使用 RcloneView 傳輸檔案

> 無需先下載到本機磁碟，即可將 Box 工作區遷移到 Koofr。

團隊離開 Box 的原因有很多：專案結束、合約到期，或是偏好歐洲的儲存服務供應商。Koofr 是自然的去處，但手動遷移多年累積的資料夾既緩慢又容易出錯。RcloneView 在同一個視窗中連接兩個服務，並以雲端到雲端的方式執行複製，同時透過 Dry Run 與比較步驟確認沒有遺漏。RcloneView 在 Windows、macOS 與 Linux 上，透過同一個視窗即可掛載並同步 90 多個供應商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Box 與 Koofr 連接為遠端

開啟 Remote 分頁並選擇 New Remote。Box 透過 OAuth 登入：瀏覽器會開啟，您核准存取後，RcloneView 便會自動連線。如果您要遷移的是公司帳號，Box for Business 需要在遠端設定中加入 `box_sub_type = enterprise`。

以相同方式將 Koofr 新增為第二個遠端。兩者都出現在 Remote Manager 後，可在兩個 Explorer 面板中並排開啟，在移動任何檔案之前先瀏覽來源端與目的端。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Box 與 Koofr 遠端" class="img-large img-center" />

## 使用篩選器與 Dry Run 規劃複製

Box 帳號中通常包含比您想保留的檔案更多的內容。同步精靈的第 3 步可讓您設定最大檔案大小、最大檔案時間或資料夾深度限制。另有預先定義的 Box Docs 篩選器，以及自訂規則，例如排除 `.git/` 資料夾或 `.iso` 檔案。

在執行任何操作之前，請先使用 Dry Run。它會列出將被複製與刪除的檔案，而不會變更任何一端。對於遷移，請選擇 Copy 工作而非鏡像同步，這樣即使目的端已有資料，Koofr 上的內容也不會被刪除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 Box 到 Koofr 的雲端到雲端傳輸" class="img-large img-center" />

## 執行傳輸並查看進度

啟動工作，並在 Transferring 分頁中追蹤：進度、速度與檔案數量都會即時顯示。對於大型檔案庫，可在第 2 步增加檔案傳輸數量，但若任一後端回應較慢，請將 equality checkers 數量維持在適中程度。"Retry entire sync if fails" 預設為 3，有助於應對暫時性網路錯誤。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 分頁中監控從 Box 到 Koofr 的傳輸" class="img-large img-center" />

## 使用 Folder Compare 驗證

工作完成後，將 Box 放在左側、Koofr 放在右側開啟 Compare。僅左側、僅右側與不同檔案的篩選器會準確顯示剩餘內容。使用 copy-right 動作傳輸遺漏的檔案。Job History 會保存每次執行的狀態、大小與檔案數量，作為遷移紀錄。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="遷移後比較 Box 與 Koofr 資料夾" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 Box（OAuth）與 Koofr 新增為遠端。
3. 建立含篩選器的 Copy 工作，然後執行 Dry Run。
4. 執行工作，再使用 Folder Compare 確認結果。

在 Compare 顯示兩端一致之前，請先不要動 Box 帳號。

---

**相關指南：**

- [管理 Box 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [管理 Koofr 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [使用 RcloneView 從 Box 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />

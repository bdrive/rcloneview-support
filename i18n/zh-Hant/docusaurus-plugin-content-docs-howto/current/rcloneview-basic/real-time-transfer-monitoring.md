---
sidebar_position: 11
description: "在 RcloneView 中透過工作監控介面追蹤同步、複製、刪除等進行中與已完成的檔案操作。"
keywords:
  - rcloneview
  - Job Monitor
  - Transfer Log
  - Rclone API Logs
  - file transfer
  - sync progress
  - job logs
tags:
  - RcloneView
  - Job-Management
  - Monitoring
  - Transfer-log
  - Completed-log
  - API-log
  - Sync
date: 2025-06-22
author: Jay
---
# 工作監控

RcloneView 提供**工作監控**介面,協助使用者追蹤、檢視及管理進行中與已完成的檔案操作(如同步、複製、刪除)狀態。此介面包含三個主要分頁:

## 傳輸分頁 - 進行中的工作

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="transfer log" class="img-medium img-center" />
此分頁顯示所有目前進行中的檔案傳輸工作。

**欄位:**
- **工作 (Job)**:顯示操作類型(例如同步、複製、刪除)。
- **來源 / 目的地**:顯示來源與目標路徑。
- **已接收大小**:已傳輸的資料量 / 總大小。
- **速度**:目前的傳輸速度。
- **進度**:目前工作的視覺化進度條。
- **百分比**:傳輸完成百分比。
- **剩餘時間**:預估剩餘時間。
- **工作 ID**:用於參照此工作的內部 ID。
- **取消**:點擊 ❌ 圖示以取消進行中的工作。

## 已完成分頁 - 工作歷史紀錄

<img src="/support/images/en/howto/rcloneview-basic/completed-log.png" alt="completed log" class="img-medium img-center" />
此分頁列出所有先前執行過的工作及其結果。

**欄位:**
- **工作 (Job)**:操作類型(同步、複製、刪除等)。
- **來源 / 目的地**:來源與目的地的路徑。
- **狀態**:結果狀態(例如成功、錯誤)。
- **開始時間**:工作的開始時間。
- **花費時間**:工作的總持續時間。
- **檔案數**:已傳輸的檔案數量。
- **大小**:資料總大小。
- **速度**:平均傳輸速度。
- **工作 ID**:內部工作參照編號。
- **刪除**:<img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" /> 圖示,用於移除該紀錄。

## 日誌分頁 - API 通訊日誌

<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="log tab" class="img-medium img-center" />

此分頁顯示 RcloneView 與 Rclone API 通訊的後端日誌。

**欄位:**
- **時間**:操作請求的時間戳記。
- **事件類型**:日誌等級(例如 INFO、ERROR)。
- **工作類型**:操作類型(同步、複製、刪除等)。
- **訊息**:操作結果。
- **詳細資料**:額外的內部中繼資料(例如 JSON 格式的工作 ID)。

此分頁可用於疑難排解或檢視系統層級的互動狀況。

:::tip
- 每筆工作紀錄皆會透過其**工作 ID**在各分頁之間互相對應。
- 日誌會即時自動更新。
- 除非手動刪除,否則「已完成」與「日誌」分頁的歷史紀錄在應用程式重新啟動後仍會保留。
:::

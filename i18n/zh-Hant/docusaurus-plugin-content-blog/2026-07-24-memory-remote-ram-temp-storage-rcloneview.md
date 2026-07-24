---
slug: memory-remote-ram-temp-storage-rcloneview
title: "Memory 遠端 — RcloneView 中以 RAM 為基礎的暫存空間"
authors:
  - casey
description: "了解 RcloneView 的 Memory 虛擬遠端如何運用以 RAM 為基礎的暫存空間,實現快速測試、暫存與一次性雲端工作流程。"
keywords:
  - memory remote rclone
  - rcloneview memory remote
  - 以 RAM 為基礎的雲端儲存
  - virtual remote rcloneview
  - 暫存雲端儲存
  - rclone 測試遠端
  - 暫存雲端傳輸
  - rcloneview virtual remotes
  - 一次性儲存 rclone
  - 記憶體內檔案儲存
tags:
  - RcloneView
  - feature
  - guide
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memory 遠端 — RcloneView 中以 RAM 為基礎的暫存空間

> 需要一個關閉後立即消失的暫存空間嗎?RcloneView 的 **Memory** 虛擬遠端提供以 RAM 為基礎的儲存空間,讓你在不動用磁碟的情況下測試同步工作並暫存傳輸。

在 RcloneView 的虛擬遠端——Alias、Crypt、Cache、Chunker、Combine、Union、Hasher 與 Compress——之中,Memory 顯得與眾不同:在整個工作階段期間,它將資料完全儲存在 RAM 中,不寫入磁碟,結束時也不留下任何痕跡。這種暫時且不留痕跡的特性,正是它適用於特定工作流程(而非日常儲存)的原因。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Memory 遠端的用途

與 Alias(指向現有路徑的捷徑)或 Crypt(為現有遠端加密)不同,Memory 是一個獨立的儲存後端,僅存在於執行中的 rclone 處理程序的記憶體內。複製進去的任何內容,都會在內建 rclone 執行個體重新啟動或應用程式關閉的瞬間消失。這種暫時、不留痕跡的特性,正是它適用於一組特定工作流程而非日常儲存的原因。

RcloneView 可在單一視窗中於 Windows、macOS 與 Linux 上掛載並同步 90+ 家服務供應商——Memory 遠端只是同一個 Remote Manager 中的另一個項目,設定與使用方式與任何實際的雲端連線完全相同。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a transfer job in RcloneView" class="img-large img-center" />

## 安全地測試同步工作

在將新的同步工作指向正式雲端儲存之前,你可以先建立一個 Memory 遠端並在其上執行該工作。這能確認你的來源選取、篩選規則與資料夾結構是否如預期般運作,而不會讓目的端的實際資料承擔風險。搭配 Dry Run,你將獲得雙重保障:一次模擬預覽,加上一次不花成本、不留下任何痕跡的實際測試複製。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a test sync job in RcloneView" class="img-large img-center" />

## 在服務供應商之間暫存傳輸

在兩個直接傳輸效率不佳的雲端服務供應商之間搬移檔案時,Memory 遠端可作為小批量的快速中繼站——在正式排程多步驟批次作業之前進行驗證時相當實用。由於 Memory 沒有磁碟 I/O 額外負擔,小規模暫存傳輸能快速完成,讓你可以迅速反覆調整批次序列。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Managing remotes in RcloneView's Mount Manager" class="img-large img-center" />

## 設定 Memory 遠端

新增 Memory 遠端的流程,與 RcloneView 中新增其他任何連線所使用的 New Remote 流程相同。

**設定方法:**

1. 開啟 Remote 分頁,點按 **New Remote**。
2. 從虛擬遠端類型清單中選取 **Memory**。
3. 儲存——由於儲存空間完全位於本機執行中的 rclone 處理程序內,因此不需要憑證或設定。
4. 如同一般遠端,在任何 Sync、Copy 或批次工作中將其用作來源或目的地。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into a remote in RcloneView" class="img-large img-center" />

## 何時不應使用

Memory 儲存空間並非備份目的地,絕不應存放任何你需要保留的內容——重新啟動 rclone 或應用程式會將其完全清除。它同時受限於可用的系統 RAM,因此只適合小型測試批次,不適合大規模傳輸。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 從 New Remote 的 Virtual Remotes 區段新增一個 Memory 遠端。
3. 在對實際目的地執行相同工作之前,先將測試同步工作指向它。
4. 使用 Job History 確認測試如預期般運作,然後切換為你實際的雲端遠端。

一次性的以 RAM 為基礎的遠端只是個小小的補充功能,但在建構新的工作流程時,它填補了「用 Dry Run 模擬」與「投入正式環境」之間的實際落差。

---

**相關指南:**

- [Virtual Remotes — RcloneView 中的 Combine、Union 與 Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Alias 遠端 — RcloneView 的捷徑路徑](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)
- [加密雲端備份 — RcloneView 的 Crypt 遠端指南](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

---
slug: read-only-mount-protect-cloud-files-rcloneview
title: "唯讀掛載 — 用 RcloneView 保護雲端檔案免遭誤改"
authors:
  - casey
description: "使用 RcloneView 的 Read only 掛載選項，在檔案總管中瀏覽雲端儲存，而不必擔心誤編輯或誤刪除。"
keywords:
  - 唯讀掛載
  - 以唯讀方式掛載雲端儲存
  - 保護雲端檔案
  - RcloneView 掛載
  - rclone 唯讀掛載
  - 防止雲端硬碟檔案被刪除
  - 掛載管理員
  - 虛擬磁碟機
tags:
  - RcloneView
  - feature
  - mount
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 唯讀掛載 — 用 RcloneView 保護雲端檔案免遭誤改

> 將遠端掛載為本機磁碟機，可以瀏覽和複製，但絕不會被修改。

掛載後的雲端硬碟與其他磁碟表現一致，這表示一次誤刪、一次方向錯誤的拖曳，或是某個會重寫檔案的應用程式，都可能改變您的雲端資料。如果目的只是讀取，例如查閱封存資料或開啟參考檔案，那麼無法寫入的磁碟機就是風險最低的選擇。RcloneView 的掛載設定中正好提供了 Read only 選項。RcloneView 可在 Windows、macOS 和 Linux 上透過一個視窗掛載並同步 90 多個供應商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 何時適合使用唯讀

設想一個合規團隊，把已結案的紀錄存放在儲存貯體中。員工需要開啟並複製文件，但任何人都不應能夠修改它們。另一個例子是，您想在桌面端檢查共用的備份目的地，同時又不想讓備份本身面臨風險。

在這兩種情況下，唯讀掛載都允許人們使用檔案總管、媒體播放器和檢視器等一般工具，而寫入嘗試會被拒絕。它不能取代儲存服務本身的權限設定，但會在您自己的電腦上增加一道保護。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="在 RcloneView 檔案總管中掛載遠端資料夾" class="img-large img-center" />

## 在 Mount Manager 中啟用 Read Only

從 Remote 分頁開啟 Mount Manager 並選擇 New mount，或從 Explorer 面板中的 Mount 圖示開始。選擇遠端和子目錄，然後在選項中勾選 **Read only**。在 Windows 上可以選擇磁碟機代號，在 macOS 和 Linux 上則設定本機掛載路徑。選擇 Save and mount 即可立即掛載磁碟機。

同一對話方塊中還有其他選項：磁碟區名稱、快取模式（off、minimal、預設的 writes 或 full），以及在 Windows 上顯示為網路磁碟機。由於不會寫入任何內容，預設快取模式對唯讀使用幾乎沒有影響，不過 full 可以加快對相同檔案的重複讀取。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView 中帶有掛載選項的 Mount Manager" class="img-large img-center" />

## 變更或移除掛載

掛載處於啟用狀態時，Edit 和 Delete 會被停用，因此請先從 Mount Manager 或系統匣選單中卸載。若之後想讓磁碟機可寫入，請先卸載，編輯該項目，取消勾選 Read only，然後重新掛載。您也可以為同一個遠端保留兩個項目：一個唯讀用於瀏覽，一個可寫入用於有意識的操作。

使用 PLUS 授權，Auto mount 可以在啟動時自動掛載您的磁碟機。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中於遠端之間複製檔案" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增要瀏覽的遠端，然後在 Remote 分頁中開啟 Mount Manager。
3. 建立新的掛載，選擇遠端和資料夾，並勾選 Read only。
4. Save and mount，然後在檔案總管中開啟該磁碟機。

唯讀存取讓您可以開啟所有內容，而無需擔心被更動。

---

**相關指南：**

- [開機自動掛載](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [用於掛載效能的 VFS 快取](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [修復 Windows 上的掛載磁碟機代號衝突](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />

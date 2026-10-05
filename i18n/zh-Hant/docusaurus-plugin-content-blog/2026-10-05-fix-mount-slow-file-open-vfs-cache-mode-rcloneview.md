---
slug: fix-mount-slow-file-open-vfs-cache-mode-rcloneview
title: "解決雲端掛載開啟檔案緩慢的問題 — 使用 RcloneView 調整 VFS 快取"
authors:
  - alex
description: "在 Mount Manager 中調整快取模式、快取大小與目錄快取時間，改善已掛載雲端磁碟開啟檔案緩慢的問題。"
keywords:
  - 解決雲端掛載緩慢
  - 掛載的雲端磁碟開啟檔案很慢
  - VFS 快取模式
  - rclone 掛載效能
  - 目錄快取時間
  - 雲端磁碟延遲
  - RcloneView 掛載
  - rclone GUI
  - 掛載疑難排解
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 解決雲端掛載開啟檔案緩慢的問題 — 使用 RcloneView 調整 VFS 快取

> 快取設定會影響已掛載雲端磁碟的回應方式，您可以在 Mount Manager 中針對每個掛載分別修改。

已掛載的雲端磁碟用起來就像本機磁碟，直到您按兩下一個大型檔案並開始等待。資料夾清單載入緩慢、應用程式儲存時卡住，或是媒體播放斷斷續續。RcloneView 提供每個掛載背後的 VFS 快取選項，讓您可以依遠端逐一調整，而不必憑猜測。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 先檢查快取模式

在 Remote 索引標籤中開啟 Mount Manager 並編輯掛載。快取模式提供 off、minimal、writes 與 full。預設值為 writes，會快取寫入磁碟機的檔案。如果您經常重複讀取相同的檔案（例如文件或媒體），full 也會快取讀取內容，因此再次開啟時可以從本機磁碟讀取。off 是最精簡的設定，但會將每次讀取都傳送到雲端。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView 中的 Mount Manager 設定" class="img-large img-center" />

磁碟機處於掛載狀態時，Edit 與 Delete 會被停用，因此請先卸載，修改設定後再重新掛載。

## 設定快取大小與目錄時間

快取最大大小預設為 -1，表示沒有大小限制，這可能會佔滿較小的磁碟。請設定一個符合可用空間的上限，並使用 cache max age 控制快取資料的有效時間。Dir cache time 控制資料夾清單的記憶時間：數值越大，重複的資料夾查詢越少，但其他人所做的變更需要更久才會顯示。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="從 Explorer 工具列掛載遠端資料夾" class="img-large img-center" />

想像一位建築師從共用掛載中開啟 300 MB 的圖面。full 快取模式加上合理的大小限制，表示第一次開啟時下載檔案，之後再開啟則從本機磁碟讀取。

## 為工作選擇合適的工具

掛載適合開啟與編輯單一檔案。若要移動整個資料夾，同步或複製作業比透過磁碟機拖曳檔案更容易監控，而且同步、複製與 Folder Compare 在 FREE 授權下皆可使用。在 Windows 上，掛載類型預設為 cmount；在 Linux 與 macOS 上預設為 nfsmount；Linux 還需要安裝 FUSE。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="使用同步作業而非掛載進行大量傳輸" class="img-large img-center" />

如果問題仍然存在，請在設定中啟用 rclone 記錄，將層級設定為 DEBUG，重新啟動內嵌 rclone，然後重現問題。

## 開始使用

1. **下載 RcloneView** [rcloneview.com](https://rcloneview.com/src/download.html)。
2. 開啟 Mount Manager，卸載速度慢的磁碟機，然後按一下 Edit。
3. 對於以讀取為主的工作，將快取模式切換為 full，並設定快取最大大小。
4. 如果瀏覽緩慢，請增加 dir cache time，然後 Save 並重新掛載。

依照您的工作方式調整快取設定後，已掛載的雲端磁碟就能以您的工作流程所需的方式運作。

---

**相關指南：**

- [VFS 快取 — RcloneView 中的掛載效能](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [使用 RcloneView 修復 VFS 快取磁碟已滿錯誤](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [使用 RcloneView 將雲端儲存掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />

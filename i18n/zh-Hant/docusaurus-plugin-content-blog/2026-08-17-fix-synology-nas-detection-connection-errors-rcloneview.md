---
slug: fix-synology-nas-detection-connection-errors-rcloneview
title: "修復 Synology NAS 偵測與連線錯誤 — 使用 RcloneView 實現可靠備份"
authors:
  - casey
description: "排查 RcloneView 中 Synology NAS 自動偵測和連線失敗的問題,包括本地網路探索和手動設定的修復方法。"
keywords:
  - Synology NAS RcloneView
  - Synology 自動偵測錯誤
  - RcloneView NAS 連線
  - 修復 NAS 未偵測到
  - Synology 雲端備份
  - NAS 本地網路儲存
  - RcloneView 疑難排解
  - Synology SMB 掛載
  - 本地儲存同步
tags:
  - RcloneView
  - troubleshooting
  - synology
  - nas
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Synology NAS 偵測與連線錯誤 — 使用 RcloneView 實現可靠備份

> 當 RcloneView 在本地網路上找不到你的 Synology 時,問題通常出在設定上,而不是NAS本身故障。

RcloneView 可以在本地網路上自動偵測 Synology NAS,但自動偵測不僅取決於NAS是否已開機,還取決於網路可見性。一家每晚備份2TB RAW檔案的攝影工作室,可能會因為NAS悄然從檔案總管中消失而損失整個備份時段。本指南將介紹Synology偵測和連線失敗的常見原因,以及在RcloneView中如何逐一解決。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 自動偵測失敗的原因

RcloneView 的 Synology 自動偵測設定會掃描你的裝置所連接的本地網段。如果NAS位於VLAN、不同子網路或VPN通道之後,廣播就無法到達它,NAS 也就不會自動出現——這是網路拓撲的限制,而不是RcloneView的錯誤。首先確認該設定本身是否已開啟:Settings 標籤 > General > Auto-detect Synology NAS 必須處於啟用狀態,因為它是可切換的開關,新安裝後很容易被遺忘為關閉狀態。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView 設定中的 Synology NAS 自動偵測開關" class="img-large img-center" />

如果開關已開啟但偵測仍然失敗,請檢查用戶端裝置和NAS是否處於同一實體或虛擬網段。在Wi-Fi存取點上啟用了用戶端隔離的企業網路會完全阻止裝置間探索,即使兩台裝置都顯示為「已連線」。

## 當自動偵測無法觸及NAS時手動連線

當自動偵測不可行時——例如遠端辦公室、分段網路,或位於不同VLAN上的NAS裝置——請直接手動連線,而不是排查探索問題。在遠端管理員中直接使用其IP位址或主機名稱,將Synology新增為SFTP或SMB/CIFS遠端,完全繞過本地網路掃描。

<img src="/support/images/en/blog/new-remote.png" alt="將 Synology NAS 手動新增為 SFTP 遠端" class="img-large img-center" />

這種手動方式還能解決最常見的次要問題:看起來像偵測失敗、實際上是身份驗證問題的連線逾時。請再次確認NAS的SSH或SMB服務在Synology自身的控制台中已啟用——RcloneView無法連線到NAS本身未執行的服務。

## 驗證連線並自動化備份

新增遠端後,在儲存前使用測試連線(Test Connection)一步確認憑證和可達性,而不是在傳輸過程中才發現失敗。RcloneView 可以在一個視窗中掛載和同步90多個服務商,涵蓋 Windows、macOS 和 Linux,因此一旦Synology連線成功,它就會與你的雲端遠端處於同一個檔案總管中,無需獨立的應用程式。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="工作歷史記錄顯示已完成的 Synology 備份執行" class="img-large img-center" />

之後,建立一個將NAS鏡像到雲端目標的同步作業,並在首次執行後檢查工作歷史記錄——傳輸檔案數為零卻顯示完成的作業,通常意味著來源路徑有誤,而不是連線中斷。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Settings 中啟用 Auto-detect Synology NAS,或使用NAS的IP位址透過 SFTP/SMB 手動連線。
3. 在儲存遠端之前執行測試連線。
4. 設定到雲端目標的同步作業,並在工作歷史記錄中確認傳輸情況。

一個能夠可靠連線的NAS值得花五分鐘排查網路問題——自動化備份只有在真正執行時才能保護你。

---

**相關指南:**

- [無資料遺失地將 Synology 同步到 Google Drive](https://rcloneview.com/support/blog/sync-synology-google-drive-without-data-loss)
- [使用 RcloneView 將 Synology 備份到雲端](https://rcloneview.com/support/blog/synology-to-cloud-backup-with-rcloneview)
- [修復 SMB/Windows 網路共用掛載錯誤 — RcloneView](https://rcloneview.com/support/blog/fix-smb-windows-network-share-mount-errors-rcloneview)

<CloudSupportGrid />

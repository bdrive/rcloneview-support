---
slug: rcloneview-windows-11-cloud-sync
title: "在 Windows 11 上使用 RcloneView — 雲端儲存同步與備份"
authors:
  - morgan
description: "在 Windows 11 上安裝並執行 RcloneView,在單一桌面應用程式中掛載、同步及備份 90+ 個雲端儲存服務商。"
keywords:
  - rcloneview windows 11
  - windows 11 雲端儲存同步
  - windows 11 掛載雲端硬碟
  - windows 11 雲端備份
  - rclone gui windows 11
  - windows 11 檔案總管 雲端
  - windows 多雲桌面
  - windows 雲端同步軟體
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Windows 11 上使用 RcloneView — 雲端儲存同步與備份

> 相較於先前版本,Windows 11 收緊了檔案總管與權限模型 — 以下說明如何在其上順暢執行 RcloneView,以進行掛載、同步及雲端儲存備份。

Windows 11 重新設計的介面與更嚴格的預設安全政策,為需要處理儲存空間與磁碟機代號的桌面應用程式帶來了一些變化。**RcloneView** 在 Windows 11 上以標準桌面應用程式的形式原生執行,讓你在單一介面中瀏覽、同步及掛載 90+ 個雲端儲存服務商,而不必為 Google Drive、OneDrive、Dropbox 及 S3 相容儲存分別使用不同廠商的應用程式。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Windows 11 上安裝 RcloneView

RcloneView 以針對 x86-64 系統建置的 Inno Setup 安裝程式(`setup_rclone_view-{version}.exe`)形式提供 — 沒有 Windows ARM64 版本,因此本指南適用於標準的 Windows 11 電腦與筆記型電腦。從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載安裝程式,執行並完成安裝精靈。

Windows 11 需要 VC++ 2015-2022 可轉散發套件,若系統缺少此套件,安裝程式會提示安裝。RcloneView 內建 rclone 執行檔,因此不需要另外安裝 rclone 的步驟 — 應用程式預設透過 `http://127.0.0.1:5582` 與其內建的 rclone 執行個體通訊。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增雲端遠端" class="img-large img-center" />

## 將雲端儲存掛載為磁碟機代號

在 Windows 11 上,RcloneView 最實用的功能之一,就是將雲端遠端掛載為本機磁碟機。在 Remote Explorer 面板中選取要掛載的遠端,點選面板工具列中的掛載圖示,選擇自動指派或手動設定磁碟機代號,再點選 Save and mount。之後該遠端就會像實體磁碟一樣顯示在檔案總管中。

Windows 11 預設使用 `cmount` 掛載類型。你也可以將掛載設定為以網路磁碟機而非本機磁碟的方式顯示,並依你較重視回應速度或最近使用檔案的離線存取,調整 VFS 快取模式(off、minimal、writes、full)。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="在 RcloneView 的 Mount Manager 中掛載遠端" class="img-large img-center" />

## 同步與備份檔案

除了掛載之外,RcloneView 的同步精靈還能讓你在任兩個已連線的遠端之間,或本機 Windows 11 資料夾與雲端服務商之間,設定單向同步工作。可在 FREE 授權下以完整讀寫權限連線 S3、Azure 或 Backblaze B2,接著設定排程備份工作,讓你的 Documents 或專案資料夾自動鏡像至雲端儲存。

四步驟同步精靈涵蓋來源與目的地選擇、傳輸並行數、篩選規則(檔案大小、檔案年齡、資料夾深度),以及 PLUS 授權下的 crontab 式排程。Dry Run 選項可在實際變更發生前,精確預覽將複製或刪除的內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中設定雲端對雲端傳輸工作" class="img-large img-center" />

## 從系統匣監控工作

RcloneView 會縮到 Windows 11 系統匣,你可以在那裡檢視已掛載的磁碟機、切換掛載開關,並在不重新開啟完整視窗的情況下啟動新的掛載。進行中的傳輸會顯示在主視窗底部的 Transferring 分頁,即時更新進度百分比、速度與檔案數量。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView** 並執行 Windows 安裝程式。
2. 透過 Remote 分頁 > New Remote 新增你的第一個雲端遠端。
3. 將其掛載為磁碟機代號,或設定同步至本機 Windows 11 資料夾的工作。
4. 在 Job History 面板中確認第一次傳輸已成功完成。

安裝 RcloneView 之後,Windows 11 便擁有一種一致的方式,可存取數十個雲端服務商,而不必為每個服務商個別安裝同步用戶端。

---

**相關指南:**

- [在 Windows 10 上使用 RcloneView — 雲端儲存同步](https://rcloneview.com/support/blog/rcloneview-windows-10-cloud-sync)
- [在 Windows Server 上使用 RcloneView — 雲端備份](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [解決 Windows 上的掛載磁碟機代號衝突](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />

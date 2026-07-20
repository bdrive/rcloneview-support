---
slug: fix-mount-drive-letter-conflict-windows-rcloneview
title: "修正掛載磁碟機代號衝突 — 使用 RcloneView 排除 Windows 雲端儲存問題"
authors:
  - morgan
description: "透過手動指定磁碟機代號與網路磁碟機設定，解決在 RcloneView 中掛載雲端儲存時發生的 Windows 磁碟機代號衝突。"
keywords:
  - drive letter conflict
  - Windows mount error
  - RcloneView mount
  - cloud drive letter
  - fix mount error windows
  - cmount rclone
  - network drive mount
  - virtual drive windows
  - mount troubleshooting
  - RcloneView Windows
tags:
  - RcloneView
  - troubleshooting
  - windows
  - mount
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修正掛載磁碟機代號衝突 — 使用 RcloneView 排除 Windows 雲端儲存問題

> 當雲端掛載佔用了 NAS 或 VPN 已在使用的磁碟機代號時,RcloneView 提供的控制選項能讓你在幾秒鐘內解決問題。

一個同時透過 Synology NAS 對應磁碟機、VPN 用戶端,以及透過 RcloneView 建立兩個雲端掛載的辦公室環境,很容易就會用光可用的磁碟機代號 — 更糟的是,Windows 甚至可能在掛載運作中,悄悄地將某個代號重新指派給其他裝置。在 Windows 上,RcloneView 使用 cmount 掛載雲端儲存,可以自動指派磁碟機代號,也可以讓你手動選擇,因此發生衝突時幾乎都能修正,而不必先卸載所有掛載再重新開始。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 了解 RcloneView 如何指派磁碟機代號

RcloneView 中的每個掛載都有一個 **Target** 設定,可以是自動(Auto),也可以是建立或編輯掛載時手動選擇的磁碟機代號。自動模式讓 Windows 選擇下一個可用的代號,這雖然方便,但一旦其他應用程式 — 例如 NAS 用戶端、VPN 或 USB 磁碟機 — 在下次開機時搶先佔用了相同的代號,就會出現問題。與僅提供掛載功能的工具不同,RcloneView 在同一個免費授權下也提供同步與資料夾比對功能,因此在你排除掛載問題的過程中,不會影響你使用其他任何功能。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote from the RcloneView Explorer panel toolbar" class="img-large img-center" />

## 手動指定空閒的磁碟機代號

從 Remote 分頁開啟 **Mount Manager**,即可看到所有掛載及其目前狀態。掛載必須先卸載才能編輯,因此請先卸載發生衝突的掛載,再開啟其設定,將 Target 從自動改為指定且未被使用的代號。儲存變更後重新掛載 — 一旦 Windows 確認該代號可用,衝突即會解決。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Editing a mount's drive letter setting in RcloneView Mount Manager" class="img-large img-center" />

如果不確定哪些代號已被佔用,可以在選擇替代代號前,先查看檔案總管的「本機」畫面,或在命令提示字元中執行 `wmic logicaldisk get caption`。

## 使用網路磁碟機模式避免未來的衝突

RcloneView 的掛載選項中包含一個 **Network drive** 切換選項,可改變 Windows 內部登錄掛載的方式。搭配手動固定的磁碟機代號,能讓掛載與登入時同樣會保留特定代號的 NAS 對應磁碟機及 VPN 指派共用資料夾,行為更加可預期。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="A NAS-mapped network drive alongside an RcloneView cloud mount on Windows" class="img-large img-center" />

在同時運作多個 NAS 共用資料夾與雲端掛載的環境中,為每個掛載統一採用手動代號 — 而非混用自動與手動 — 能大幅減少重開機後的猜測與不確定性。

## 開始使用

1. 如果尚未安裝,請先從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 Mount Manager,卸載發生衝突的掛載。
3. 編輯其設定,指定一個特定且未被使用的磁碟機代號。
4. 儲存、重新掛載,並確認該磁碟機在檔案總管中正確顯示。

花幾分鐘手動固定磁碟機代號,就能避免每次 Windows 重新調整代號時都要重複修正這個問題。

---

**相關指南:**

- [掛載雲端儲存為本機磁碟機 — 使用 RcloneView 的完整指南](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [使用 RcloneView 將 Google Drive 掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [使用 RcloneView 修正 Rclone Mount FUSE 錯誤](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />

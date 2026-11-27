---
slug: fix-auto-mount-not-working-startup-rcloneview
title: "修復啟動時自動掛載無法運作 — 用 RcloneView 恢復雲端硬碟"
authors:
  - steve
description: "重新開機後雲端硬碟不見了?檢查授權、Launch at login、磁碟機代號、Linux 上的 FUSE 以及 macOS 權限,修復 RcloneView 啟動時自動掛載。"
keywords:
  - 自動掛載無法運作
  - 啟動時雲端硬碟未掛載
  - rcloneview 自動掛載
  - 開機掛載雲端儲存
  - 重新開機後掛載的磁碟消失
  - rclone 掛載啟動修復
  - 登入時啟動雲端硬碟
  - linux fuse 掛載錯誤
  - 磁碟機代號衝突 掛載
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復啟動時自動掛載無法運作 — 用 RcloneView 恢復雲端硬碟

> 如果每次重新開機後雲端硬碟都會消失,通常一份簡短的檢查清單就能徹底解決。

你為 Google Drive 或 S3 儲存貯體設定了掛載,它也如預期運作,但重新開機後磁碟機代號或掛載資料夾不見了。自動掛載仰賴多項設定共同運作:應用程式必須啟動,掛載必須標記為自動掛載,作業系統也必須允許它。本指南將在 RcloneView 中逐一排查每個原因。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 檢查授權與自動掛載設定

**Auto Mount on Startup** 是 PLUS 授權功能。在 FREE 授權下,掛載與卸載功能完全可用,但每次啟動後都需要手動啟動每個掛載。主視窗底部的頁尾會顯示目前啟用的授權。

啟用 PLUS 後,從 Remote 分頁開啟 **Mount Manager**,確認該掛載已啟用 **Auto mount**。請注意,掛載處於作用中時 Edit 無法使用,因此請先卸載,編輯設定後選擇 **Save and mount**。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="在 RcloneView Mount Manager 中啟用自動掛載" class="img-large img-center" />

## 確認 RcloneView 確實有啟動

自動掛載會在 RcloneView 啟動時執行,因此應用程式本身必須在登入時啟動。在 **Settings > General** 中啟用 **Launch at login**。如果希望應用程式直接在系統匣中開啟,請開啟 **Start minimized**。系統匣選單會列出已掛載的磁碟,並讓你逐一切換。

也請檢查 **Quit on close**。如果它處於開啟狀態,關閉視窗會結束應用程式並卸載你的磁碟。將其關閉,即可讓 RcloneView 及其掛載在背景持續執行。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="從 RcloneView 檔案總管掛載雲端資料夾" class="img-large img-center" />

## 解決特定平台的阻礙

**Windows:** 如果掛載使用固定的磁碟機代號,而 USB 隨身碟或網路共用先佔用了該代號,掛載將無法連接。將 **Target** 設為 Auto,或選擇一個未被使用的代號。

**Linux:** 掛載需要 FUSE(建議使用 fuse3)。掛載預設使用 nfsmount,應用程式需要 GTK+3 以及正在執行的 X11 或 Wayland 桌面工作階段。RcloneView 是 GUI 應用程式,無法以無頭 systemd 服務的方式啟動掛載。

**macOS:** 如果掛載點位於 Desktop、Documents 或 Downloads 中,請在 **Privacy & Security > Files & Folders** 或 **Full Disk Access** 中授予 RcloneView 存取權限,然後重新啟動應用程式。

## 其他方法都無效時查看記錄

過期的 OAuth 權杖和開機時的網路延遲也可能導致掛載失敗。在 Settings > Embedded Rclone 中啟用 **rclone logging**,將記錄層級設為 DEBUG,重新啟動內建 rclone,然後重新開機。記錄會顯示確切的錯誤。如果是驗證錯誤,請編輯遠端並重新連線;如果是網路錯誤,通常從系統匣重新掛載即可解決。

<img src="/support/images/en/blog/new-remote.png" alt="驗證錯誤後在 RcloneView 中重新連線雲端遠端" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 確認 PLUS 授權,並在 Mount Manager 中為每個掛載啟用 **Auto mount**。
3. 在 Settings > General 中開啟 **Launch at login** 並關閉 **Quit on close**。
4. 解決磁碟機代號、FUSE 或 macOS 權限問題,然後重新開機進行測試。

檢查清單全部通過後,每次開始工作時你的雲端硬碟都會準備就緒。

---

**相關指南:**

- [使用 RcloneView 在啟動時自動掛載雲端儲存](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [使用 RcloneView 修復 Windows 掛載磁碟機代號衝突](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)
- [使用 RcloneView 修復 rclone 掛載 FUSE 錯誤](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />

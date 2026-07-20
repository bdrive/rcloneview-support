---
slug: fix-macos-too-many-open-files-rcloneview
title: "修正 macOS「開啟檔案過多」錯誤 — 使用 RcloneView 解決"
authors:
  - tayson
description: "在 RcloneView 進行雲端掛載或大型同步作業時，修正 macOS 的「開啟檔案過多」錯誤。逐步指南教您如何提高 macOS 的檔案描述符限制。"
keywords:
  - macOS too many open files
  - fix file descriptor limit macOS
  - RcloneView macOS error
  - macOS mount error
  - ulimit macOS RcloneView
  - LaunchDaemon maxfiles
  - macOS cloud mount fix
  - RcloneView troubleshooting macOS
  - open files limit macOS
  - fix rclone mount macOS
tags:
  - RcloneView
  - macos
  - troubleshooting
  - tips
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修正 macOS「開啟檔案過多」錯誤 — 使用 RcloneView 解決

> 透過提高系統檔案描述符限制，解決 macOS 上 RcloneView 出現的「開啟檔案過多」錯誤 — 這是針對掛載與大型同步作業的官方修正方式。

macOS 對於單一程序可使用的檔案描述符（開啟檔案）數量設有預設限制 — 依 macOS 版本不同，通常介於 256 到 1024 之間。當 RcloneView 掛載雲端硬碟或執行牽涉大量並行檔案操作的大型同步時，此限制可能會被耗盡，導致出現 `too many open files` 之類的錯誤，或發生非預期的掛載失敗。這是一個已被記錄在案的 macOS 限制，需要透過系統層級的設定變更才能解決。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼會發生這個問題

當您使用 RcloneView 將雲端儲存掛載為虛擬磁碟機時，rclone 處理程序會為快取的檔案與正在進行的目錄列表維持開啟的檔案控制代碼。對於檔案數量龐大的遠端 — 例如擁有 5 萬份文件的 Google Drive，或是含有數萬個物件的 S3 儲存桶 — 在高強度操作期間，並行控制代碼的數量可能會超過 macOS 保守的預設值。

為使掛載作業順暢執行，建議的檔案控制代碼限制為 524,288（軟限制與硬限制皆設為此值）。這是官方記錄的 RcloneView macOS 建議數值。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting cloud storage in RcloneView on macOS" class="img-large img-center" />

## 建立 LaunchDaemon 設定

若要在 macOS 上永久提高檔案描述符限制，請建立一個 LaunchDaemon plist 檔案，在系統開機時設定這些限制。開啟終端機並執行以下步驟：

**1. 建立 plist 檔案：**

```bash
sudo nano /Library/LaunchDaemons/limit.maxfiles.plist
```

**2. 貼上以下內容：**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>limit.maxfiles</string>
    <key>ProgramArguments</key>
    <array>
      <string>launchctl</string>
      <string>limit</string>
      <string>maxfiles</string>
      <string>524288</string>
      <string>524288</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>ServiceIPC</key>
    <false/>
  </dict>
</plist>
```

**3. 設定正確的權限並載入：**

```bash
sudo chown root:wheel /Library/LaunchDaemons/limit.maxfiles.plist
sudo chmod 644 /Library/LaunchDaemons/limit.maxfiles.plist
```

建立檔案後，請**重新開機**以套用新的限制。重新開機是必要步驟 — 若未重新開機就直接載入該 daemon，可能無法讓新限制套用至整個系統。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Cloud drive mount working correctly after fixing file descriptor limit on macOS" class="img-large img-center" />

## 驗證限制是否已套用

重新開機後，開啟終端機並確認新的限制已生效：

```bash
launchctl limit maxfiles
```

輸出結果應顯示軟限制與硬限制皆為 `524288`。若顯示的數值較低，該 plist 檔案可能有格式錯誤 — 請重新檢查是否有打字錯誤或不可見字元。

## 其他 macOS 問題：資料夾顯示為空

如果在 macOS Catalina 及以後版本中，您的 Desktop、Documents 或 Downloads 資料夾在 RcloneView 中顯示為空，原因則不同：這是因為 macOS 尚未授予 RcloneView 隱私權限。請前往「系統設定」>「隱私權與安全性」>「檔案與資料夾」，在清單中找到 RcloneView 並啟用存取權限。您也可以將 RcloneView 加入「完全磁碟取用權限」以取得更廣泛的權限。變更權限設定後，請重新啟動 RcloneView。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView macOS privacy permissions configuration" class="img-large img-center" />

## 快速開始

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 建立 `/Library/LaunchDaemons/limit.maxfiles.plist`，並將軟限制與硬限制皆設為 524288。
3. 設定正確的檔案擁有者與權限，然後重新開機。
4. 重新開機後，使用 `launchctl limit maxfiles` 驗證限制是否生效。

提高檔案描述符限制是一次性的系統變更，日後可解決 RcloneView 中所有掛載與同步作業的開啟檔案過多錯誤。

---

**相關指南：**

- [macOS 最佳雲端同步與掛載工具 — RcloneView](https://rcloneview.com/support/blog/best-cloud-sync-mount-tool-macos-rcloneview)
- [將雲端儲存掛載為本機磁碟機 — RcloneView 指南](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [使用 RcloneView 疑難排解 Rclone 錯誤](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />

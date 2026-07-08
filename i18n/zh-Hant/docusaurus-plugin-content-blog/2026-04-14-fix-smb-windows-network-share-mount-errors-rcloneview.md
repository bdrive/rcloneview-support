---
slug: fix-smb-windows-network-share-mount-errors-rcloneview
title: "修復 SMB 網路共用掛載錯誤——使用 RcloneView 解決連線問題"
authors:
  - tayson
description: "診斷並修復 RcloneView 中的 SMB/CIFS 網路共用連線與掛載錯誤。解決 Windows 共用的驗證失敗、協定不相符及權限問題。"
keywords:
  - SMB mount error RcloneView
  - fix SMB connection error rclone
  - CIFS network share troubleshooting
  - Windows network share mount error
  - rclone SMB authentication error
  - SMB protocol mismatch fix
  - fix network drive connection RcloneView
  - SMB share permission error
tags:
  - RcloneView
  - troubleshooting
  - smb
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 SMB 網路共用掛載錯誤——使用 RcloneView 解決連線問題

> RcloneView 中的 SMB/CIFS 網路共用錯誤通常源自驗證不相符、協定版本衝突或防火牆阻擋。以下說明如何診斷並修復每種情況。

SMB（Server Message Block）/CIFS 是 Windows 用於網路檔案共用的協定——NAS 裝置、Windows 檔案伺服器及 Samba 共用都使用此協定。RcloneView 會以遠端的方式連線到 SMB 共用，讓您能在 SMB 與雲端儲存之間同步，或將 SMB 共用與其他雲端服務供應商一併掛載。但 SMB 連線對網路設定相當敏感：驗證模式、方言版本以及防火牆規則都會影響連線是否成功。本指南將逐一說明最常見的 SMB 錯誤及其修復方式。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView 中常見的 SMB 錯誤訊息

在 SMB 連線嘗試失敗後，請查看**記錄（Log）分頁**。常見的錯誤特徵包括：

- `NT_STATUS_LOGON_FAILURE`——使用者名稱或密碼不正確
- `NT_STATUS_ACCESS_DENIED`——憑證正確，但共用權限拒絕存取
- `connection refused` 或 `no route to host`——防火牆阻擋了 445 連接埠（SMB）
- `SMB negotiation failed: Protocol negotiate error`——客戶端與伺服器之間的協定版本不相符
- `NT_STATUS_IO_TIMEOUT`——SMB 伺服器無法連線或無回應

每種錯誤都指向不同的根本原因與修復方式。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring an SMB remote connection in RcloneView" class="img-large img-center" />

## 修復驗證與權限錯誤

若出現 `NT_STATUS_LOGON_FAILURE`，請確認使用者名稱格式。SMB 驗證要求使用者名稱符合伺服器所需的正確格式：
- 網域帳號：`DOMAIN\username` 或 `username@domain.com`
- NAS 上的本機帳號：僅需 `username`（不含網域前綴）
- 訪客存取：使用者名稱與密碼留空，或使用 `guest`

若出現 `NT_STATUS_ACCESS_DENIED`，表示憑證有效，但共用的 ACL 未授予已驗證使用者存取權限。請登入 NAS 或 Windows 伺服器管理面板，確認共用權限已包含您帳號的讀取（或讀寫）存取權。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Testing SMB share connection and browsing files in RcloneView" class="img-large img-center" />

## 修復協定版本問題

較舊的 NAS 裝置與 Samba 伺服器可能不支援 rclone 預設協商使用的最新 SMB3 方言。在 RcloneView 的遠端管理器（Remote Manager）中，編輯 SMB 遠端並明確設定 **SMB version** 欄位：針對舊型硬體可嘗試 `SMB2` 或 `SMB1`。請注意，基於安全考量，Windows 10/11 與 Windows Server 2016 以上版本預設已停用 SMB1——請盡量避免使用 SMB1。

對於執行 Samba 的伺服器（Linux NAS、Synology、QNAP），請檢查 `smb.conf` 檔案中的 `min protocol` 與 `max protocol` 設定，確保 Samba 至少提供 SMB2。

## 修復防火牆與連線問題

SMB 需要使用 TCP 445 連接埠。若 RcloneView 顯示 `connection refused` 或 `no route to host`，請檢查：
- 伺服器防火牆（Windows 防火牆、NAS 防火牆）是否允許來自您客戶端 IP 的 TCP 445 輸入連線
- 您的路由器或網路交換器是否封鎖了 445 連接埠上的跨 VLAN 流量
- 若透過網際網路連線遠端 SMB：SMB 應透過 VPN 通道連線，而非直接對外暴露

修正設定後，請使用 RcloneView 的終端機（Terminal）分頁執行 `rclone about smb-remote:`——若回應成功，即表示連線正常運作。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting an SMB share as a virtual drive through RcloneView Mount Manager" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 連線失敗後，於記錄分頁檢查具體的 SMB 錯誤代碼。
3. 依照錯誤指示，修復驗證、協定版本或防火牆問題。
4. 在建立同步或掛載工作之前，透過遠端管理器重新測試連線。

RcloneView 中的 SMB 錯誤幾乎都能在不重新安裝任何程式的情況下解決——正確的設定變更即可讓您的網路共用穩定連線並同步。

---

**相關指南：**

- [使用 RcloneView 將 SFTP 與 SMB 掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [使用 RcloneView 修復 SFTP 連線遭拒與逾時錯誤](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [使用 RcloneView 疑難排解 Rclone 錯誤](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />

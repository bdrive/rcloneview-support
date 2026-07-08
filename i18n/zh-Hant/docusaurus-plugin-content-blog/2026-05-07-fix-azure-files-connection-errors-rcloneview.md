---
slug: fix-azure-files-connection-errors-rcloneview
title: "修復 Azure Files 連線錯誤 — 使用 RcloneView 解決 Azure SMB 問題"
authors:
  - tayson
description: "排除 RcloneView 中的 Azure Files 連線錯誤 — 修復憑證錯誤、SMB 445 連接埠防火牆封鎖、TLS 版本不符及共用名稱問題。"
keywords:
  - Azure Files 連線錯誤
  - Azure SMB 疑難排解
  - RcloneView Azure Files
  - SMB 445 連接埠
  - Azure File Storage 修復
  - Azure Files 憑證
  - 雲端儲存疑難排解
  - rclone Azure Files
tags:
  - RcloneView
  - azure-files
  - troubleshooting
  - tips
  - smb
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Azure Files 連線錯誤 — 使用 RcloneView 解決 Azure SMB 問題

> RcloneView 中的 Azure Files 連線錯誤幾乎總是由三個問題之一造成 — 憑證錯誤、SMB 連接埠遭封鎖，或 TLS 設定不符。以下說明如何逐一修復。

Azure Files 提供代管於 Azure 上的 SMB 與 NFS 檔案共用服務,RcloneView 直接支援 Azure File Storage 作為遠端類型。然而,Azure Files 連線失敗的頻率比其他供應商更高,因為它需要正確的憑證、防火牆規則和 TLS 設定同時對齊。本指南涵蓋最常見的失敗情況及其解決方法。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 驗證你的 Azure Files 憑證

Azure Files 需要三項資訊:**儲存體帳戶名稱 (Storage Account Name)**、**共用金鑰 (Shared Key,亦稱為 Storage Account Key)**,以及**共用名稱 (Share Name)**。這三個欄位中任何一個不符,都會立即導致驗證失敗。在這種情況下,Azure 傳回的錯誤訊息並不一定會明確指出是哪個欄位出錯。

在 RcloneView 中,開啟你的 Azure Files 遠端設定,並仔細檢查每個欄位:
- **帳戶名稱 (Account Name)**:這是儲存體帳戶名稱,而非顯示名稱或訂閱名稱。
- **帳戶金鑰 (Account Key)**:可在 Azure 入口網站的儲存體帳戶下的 **Access Keys** > Key1 或 Key2 找到。請複製完整金鑰 — 這些是很長的 base64 字串,很容易不小心截斷。
- **共用名稱 (Share Name)**:儲存體帳戶內檔案共用的確切名稱,區分大小寫。

如果你最近在 Azure 入口網站中輪替了存取金鑰,請立即在 RcloneView 的遠端設定中更新金鑰,因為舊金鑰將會失效。

<img src="/support/images/en/blog/new-remote.png" alt="Azure Files remote configuration in RcloneView with Account Name and Key fields" class="img-large img-center" />

## SMB 445 連接埠防火牆問題

Azure Files 透過 TCP 445 連接埠使用 SMB 協定。許多企業網路和 ISP 會封鎖出站的 445 連接埠,以作為防範舊版 SMB 漏洞的安全措施。如果你的憑證正確,但連線仍然逾時,那麼最可能的原因就是 445 連接埠遭到封鎖。

若要測試 445 連接埠是否可以連通,請在 PowerShell(Windows)中執行 `Test-NetConnection -ComputerName <storage-account>.file.core.windows.net -Port 445`,或在 Linux/macOS 上執行 `nc -zv <storage-account>.file.core.windows.net 445`。如果連線失敗,你有兩個選擇:與網路管理員合作以開放出站 445 連接埠,或改用支援的 Azure Files NFS 方式,或改為存取底層的 Azure Blob Storage。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Diagnosing Azure Files port 445 connectivity for RcloneView" class="img-large img-center" />

## TLS 與端點設定

RcloneView 的 Azure Files 遠端在控制平面使用 HTTPS,在資料傳輸時使用 SMB。請確認你的端點設定正確 — 對於標準 Azure 儲存體帳戶,端點為 `<accountname>.file.core.windows.net`。如果你使用的是 Azure Government、Azure China 或私有端點,主機名稱會不同,必須在遠端設定中明確指定。

在預設未啟用 TLS 1.2 的較舊 Windows 系統上,可能會發生 TLS 版本不符的情況。Azure Files 要求 TLS 1.2 或更高版本。在 Windows 上,如果連線因 TLS 相關錯誤訊息而失敗,請透過登錄檔或群組原則啟用 TLS 1.2。在 Linux 上,請確認系統的 OpenSSL 版本支援 TLS 1.2(任何現代發行版皆已支援)。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Successful Azure Files connection and transfer monitoring in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 確認你的**帳戶名稱**、**帳戶金鑰**和**共用名稱**皆正確,並與 Azure 入口網站中的資料完全相符。
3. 使用 `nc` 或 PowerShell 的 `Test-NetConnection` 測試對 445 連接埠的出站連線。
4. 如果 445 連接埠遭到封鎖,請聯絡你的網路團隊,或考慮其他存取方式。
5. 如果出現 TLS 交握錯誤,請確認系統上已啟用 TLS 1.2。

解決 Azure Files 連線錯誤通常只需要檢查憑證與網路設定 — 一旦這些設定正確無誤,該遠端便能在 RcloneView 中穩定運作,支援瀏覽、同步與備份工作。

---

**相關指南:**

- [管理 Azure Files — 使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [修復 SMB Windows 網路共用掛載錯誤 — 使用 RcloneView](https://rcloneview.com/support/blog/fix-smb-windows-network-share-mount-errors-rcloneview)
- [修復 Azure Blob SAS Token 驗證錯誤 — 使用 RcloneView](https://rcloneview.com/support/blog/fix-azure-blob-sas-token-auth-errors-rcloneview)

<CloudSupportGrid />

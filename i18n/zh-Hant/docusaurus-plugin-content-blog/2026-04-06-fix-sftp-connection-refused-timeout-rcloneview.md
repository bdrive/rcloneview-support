---
slug: fix-sftp-connection-refused-timeout-rcloneview
title: "修復 RcloneView 中的 SFTP 連線被拒與逾時錯誤"
authors:
  - tayson
description: "解決 RcloneView 中的 SFTP 連線被拒、逾時與驗證錯誤。涵蓋防火牆規則、SSH 金鑰、連接埠設定與逾時調整。"
keywords:
  - sftp connection refused rclone
  - sftp timeout error rcloneview
  - fix sftp connection rclone
  - rclone sftp ssh key error
  - sftp firewall blocked
  - sftp port configuration rclone
  - rcloneview sftp setup
  - ssh connection timeout fix
  - sftp authentication failed rclone
  - rclone sftp troubleshoot
tags:
  - troubleshooting
  - sftp
  - tips
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 RcloneView 中的 SFTP 連線被拒與逾時錯誤

> RcloneView 中的 SFTP 錯誤幾乎都能追溯到網路設定、驗證設定或伺服器端設定。本指南將逐一說明每種常見成因與修復方式。

SFTP（SSH File Transfer Protocol）是 rclone 中最廣泛使用的遠端之一，可將 RcloneView 連接到任何具備 SSH 存取能力的伺服器——NAS 裝置、Linux 伺服器、共享主機以及自架基礎設施。與雲端服務商 API 不同，SFTP 依賴網路可達性、防火牆規則與 SSH 設定，因此故障點更多。以下說明如何診斷並解決最常見的 SFTP 問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常見 SFTP 錯誤訊息

| 錯誤訊息 | 可能原因 |
|--------------|-------------|
| `connection refused` | SSH 伺服器未執行、連接埠錯誤或防火牆封鎖 |
| `connection timed out` | 防火牆丟棄封包、伺服器無法連線，或網路問題 |
| `ssh: handshake failed` | SSH 金鑰不符、演算法不相容，或伺服器端設定問題 |
| `permission denied (publickey)` | 金鑰檔案錯誤、金鑰未在伺服器上授權，或密碼短語問題 |
| `permission denied (password)` | 密碼輸入錯誤，或伺服器停用了密碼驗證 |
| `no supported methods remain` | 伺服器要求的驗證方式未在 rclone 中設定 |
| `ssh: unable to authenticate` | 未提供憑證或憑證遭拒 |
| `too many authentication failures` | SSH 代理程式在正確金鑰之前嘗試了過多金鑰 |

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="View SFTP error details in RcloneView job history" class="img-large img-center" />

## 修復方式 1：連線被拒

「connection refused」錯誤表示 TCP 連線被主動拒絕。伺服器的網路堆疊可以連上，但目標連接埠上沒有任何服務在監聽。

### 確認 SSH 是否正在執行

在遠端伺服器上執行 `sudo systemctl status sshd`。如果 SSH 未執行，使用 `sudo systemctl start sshd && sudo systemctl enable sshd` 啟動它。

### 確認連接埠

預設的 SSH 連接埠為 22，但許多伺服器會使用自訂連接埠。可使用 `grep -i "^Port" /etc/ssh/sshd_config` 檢查。在 RcloneView 中，請確保 SFTP 遠端的連接埠設定與其相符。連接埠 22 與自訂連接埠（例如 2222）不一致是最常見的成因之一。

<img src="/support/images/en/blog/new-remote.png" alt="Configure SFTP remote port in RcloneView" class="img-large img-center" />

### 檢查本機防火牆封鎖

在伺服器上，確認防火牆允許 SSH 連接埠的入站連線。可使用 `sudo ufw status`（Ubuntu/Debian）、`sudo firewall-cmd --list-ports`（RHEL/Fedora），或 `sudo iptables -L -n | grep 22`。若連接埠遭封鎖，請新增規則以允許連線。

## 修復方式 2：連線逾時

逾時表示封包已送出，但未收到回應。這通常是網路層級的問題，而非伺服器端設定問題。

### 網路可達性

從你的機器測試基本連線狀況：

```bash
ping server-hostname
telnet server-hostname 22
```

如果 `ping` 成功但 `telnet` 連到連接埠 22 失敗，表示你與伺服器之間的防火牆封鎖了 SSH 連接埠。

### 路由器與 NAT 防火牆

如果 SFTP 伺服器位於 NAT 路由器後方，請確認已設定連接埠轉發，將外部流量在 SSH 連接埠上路由至內部伺服器 IP。若未設定連接埠轉發，來自區域網路外部的連線將會逾時。

### ISP 或企業防火牆封鎖

部分 ISP 與企業網路會封鎖連接埠 22 的對外連線。可嘗試使用替代連接埠，或透過 VPN 繞過此限制。

### Rclone 的逾時調整

對於高延遲連線，rclone 的預設連線逾時時間可能過短。可透過新增 `--contimeout` 旗標來增加此時間。若是 SFTP 特有的伺服器回應延遲，可考慮將 `--timeout` 設為較高的值（例如速度較慢的伺服器可設為 `5m`）。

## 修復方式 3：SSH 金鑰驗證失敗

以金鑰為基礎的驗證是 SFTP 連線中最安全、也是建議採用的方式，但設定錯誤十分常見。

### 確認金鑰檔案路徑

在 RcloneView 中，SFTP 遠端設定包含一個 SSH 金鑰檔案路徑欄位。請確認：

- 該路徑指向**私鑰**（例如 `~/.ssh/id_rsa` 或 `~/.ssh/id_ed25519`），而非公鑰。
- 該檔案存在，且你的使用者帳號可讀取。
- 金鑰檔案的權限正確（Linux/macOS 上為 `600`）。

### 在伺服器上授權此金鑰

公鑰必須列在伺服器上的 `~/.ssh/authorized_keys` 中。可使用 `cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys` 加入，接著確認該檔案權限為 `600`、`.ssh` 目錄權限為 `700`。

### 受密碼短語保護的金鑰

如果你的私鑰設有密碼短語，rclone 需要它才能解密金鑰。在 RcloneView 的 SFTP 遠端設定中，於對應欄位輸入密碼短語。若留空，驗證將會靜默失敗。

### SSH 代理程式衝突

如果 SSH 代理程式正在執行且載入了大量金鑰，伺服器可能會在過多次金鑰嘗試失敗後拒絕連線（預設上限通常為 6 次）。可在 rclone 設定中指定確切的金鑰檔案以繞過代理程式，或減少代理程式中載入的金鑰數量。

## 修復方式 4：密碼驗證問題

### 伺服器停用了密碼驗證

許多伺服器基於安全考量停用了密碼驗證。可使用 `grep -i "PasswordAuthentication" /etc/ssh/sshd_config` 檢查。若設為 `no`，則必須改用金鑰驗證。

### 密碼輸入錯誤

請確認你在 RcloneView 的 SFTP 遠端設定中輸入的密碼正確。Rclone 會以混淆格式將密碼儲存於 `rclone.conf` 中——若手動編輯設定檔，請使用 `rclone obscure` 正確編碼密碼。

## 修復方式 5：同時連線數限制

SFTP 伺服器通常會限制同時連線的工作階段數量。Rclone 預設使用 4 個並行傳輸，但部分伺服器僅允許 1 或 2 個連線。

若在大型傳輸過程中出現間歇性連線失敗，請降低並行度：

- 設定 `--transfers 1` 或 `--transfers 2` 以限制並行連線數。
- 設定 `--checkers 1` 以減少同時進行的檢查作業數量。

部分共享主機服務商的限制特別嚴格。請從低並行度開始，再逐步提高。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SFTP transfer progress in RcloneView" class="img-large img-center" />

## 修復方式 6：SSH 演算法不相容

較舊的伺服器可能不支援現代 SSH 演算法，而經過強化的伺服器則可能拒絕較舊的演算法。若看到「handshake failed」錯誤，請盡可能更新 SSH 伺服器軟體，或檢查 `/etc/ssh/sshd_config` 中的 `KexAlgorithms`、`Ciphers` 與 `MACs` 限制。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer with SFTP remote connected" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 SFTP 遠端**，並填入正確的主機、連接埠與驗證設定。
3. **測試連線**，在檔案總管中瀏覽該遠端。
4. 若遇到錯誤，**依序檢查上方清單**。

SFTP 問題幾乎都是設定問題，而非軟體錯誤。有系統地逐層檢查——網路、防火牆、驗證與伺服器設定——即可解決絕大多數情況。

---

**相關指南：**

- [在 RcloneView 中排除 Rclone 錯誤](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [修復 Rclone 設定檔損毀](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [復原中斷的傳輸作業](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />

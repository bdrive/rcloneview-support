---
slug: fix-sftp-public-key-authentication-errors-rcloneview
title: "修復 SFTP 公鑰驗證錯誤 — 使用 RcloneView 解決 SSH 問題"
authors:
  - tayson
description: "排解 RcloneView 中的 SFTP 公鑰驗證失敗問題。診斷金鑰路徑錯誤、權限問題、密碼短語問題及金鑰格式問題。"
keywords:
  - SFTP public key error RcloneView
  - fix SFTP authentication failure
  - SSH key auth rclone SFTP
  - SFTP permission denied public key
  - RcloneView SFTP troubleshooting
  - SSH key format rclone
  - SFTP key passphrase error
  - rclone SFTP connection fix
tags:
  - sftp
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 SFTP 公鑰驗證錯誤 — 使用 RcloneView 解決 SSH 問題

> SFTP 公鑰驗證失敗幾乎都是由金鑰路徑、檔案權限或密碼短語不符所導致 — 本指南將逐一有系統地說明這些問題。

SFTP 是在 RcloneView 中連線遠端 Linux 伺服器最常見的方式之一,而公鑰驗證比密碼驗證更受青睞,是較為安全的驗證方式。當金鑰驗證失敗時,錯誤訊息往往令人費解,例如 `ssh: handshake failed`、`permission denied (publickey)` 或 `no supported methods remain`。本指南將涵蓋最常見的原因,並說明如何診斷與修復每一種情況。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView 中的 SFTP 遠端設定

在 RcloneView 中建立 SFTP 遠端時,與金鑰驗證相關的欄位如下:

- **主機（Host）**:伺服器主機名稱或 IP
- **使用者（User）**:SSH 使用者名稱
- **金鑰檔案（Key file）**:私鑰檔案的路徑(例如 `~/.ssh/id_rsa` 或 `C:\Users\you\.ssh\id_ed25519`)
- **金鑰檔案密碼短語（Key file passphrase）**:用於解密金鑰的密碼短語(如有設定)

每個遠端只能擇一使用密碼驗證或金鑰驗證。若指定了金鑰檔案,請將密碼欄位留空。

<img src="/support/images/en/blog/new-remote.png" alt="SFTP remote configuration with key auth in RcloneView" class="img-large img-center" />

## 常見錯誤 1:金鑰檔案路徑錯誤

金鑰驗證失敗最常見的原因就是金鑰檔案路徑錯誤或無法存取。請檢查:

- 路徑是否存在,且指向**私鑰**(而非 `.pub` 公鑰)
- 在 Windows 上,請使用完整的絕對路徑(例如 `C:\Users\username\.ssh\id_rsa`)
- 在 Linux/macOS 上,`~/.ssh/id_rsa` 通常能正確展開 — 若有疑慮,請使用完整路徑

在 RcloneView 中,開啟 SFTP 遠端設定並確認金鑰檔案路徑。若該位置沒有此檔案,驗證將會靜默失敗,或出現不明確的錯誤訊息。

## 常見錯誤 2:金鑰檔案權限過於開放

在 Linux 與 macOS 上,若私鑰檔案的權限設定為所有人皆可讀取,SSH 會拒絕使用該金鑰。若金鑰檔案權限過於寬鬆,將會看到 `Permissions 0644 for '~/.ssh/id_rsa' are too open` 的錯誤。修復方式如下:

```
chmod 600 ~/.ssh/id_rsa
chmod 700 ~/.ssh
```

在 Windows 上,金鑰檔案權限透過檔案安全性設定進行管理。請確保該金鑰檔案僅限您的使用者帳戶存取,而非與「所有人（Everyone）」共用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP connection test in RcloneView" class="img-large img-center" />

## 常見錯誤 3:密碼短語不符

若您的私鑰受密碼短語保護,RcloneView SFTP 遠端設定中的密碼短語欄位必須完全相符。若金鑰設有密碼短語,但欄位留空,驗證將會失敗。反之,若金鑰未設密碼短語,但輸入了密碼短語,同樣會導致驗證失敗。

若要測試金鑰密碼短語是否正確,請開啟終端機並執行 `ssh -i /path/to/key user@host` — 若系統提示輸入密碼短語且能成功接受,即代表憑證正確。接著再依此更新 RcloneView 中的遠端設定。

## 常見錯誤 4:金鑰格式不支援

較舊的 OpenSSH 私鑰(PEM 格式)大多獲得廣泛支援,但部分較新、採用 OpenSSH 原生格式的 ED25519 金鑰,可能因 rclone 內嵌的 Go SSH 函式庫版本而發生問題。若您遇到 `ssh: no supported methods remain`:

- 將金鑰轉換為 PEM 格式:`ssh-keygen -p -m PEM -f ~/.ssh/id_ed25519`
- 或產生一組 RSA 金鑰:`ssh-keygen -t rsa -b 4096`

## 讀取日誌進行診斷

在 SFTP 連線嘗試失敗後,開啟 RcloneView 中的 **Log** 分頁。日誌會顯示完整的 SSH 交握錯誤。若需要更詳細的資訊,可使用 RcloneView 中的 **Terminal** 分頁,直接執行帶有 `-vv` 旗標的 rclone 指令,印出完整的 SSH 協商過程。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing SFTP connection errors in RcloneView logs" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟您的 SFTP 遠端設定,確認金鑰檔案路徑指向正確的私鑰。
3. 在 Linux/macOS 上,使用 `ls -la ~/.ssh/` 檢查金鑰檔案權限,並以 `chmod 600` 修正。
4. 確認密碼短語欄位與金鑰的密碼短語相符,接着從 Remote Manager 測試連線。

有系統地檢查路徑、權限與密碼短語,能解決絕大多數 SFTP 公鑰驗證失敗的問題。

---

**相關指南:**

- [修復 SFTP 連線被拒與逾時錯誤](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [使用 RcloneView 排解 rclone 錯誤](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [修復因網路錯誤導致的雲端同步中斷](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)

<CloudSupportGrid />

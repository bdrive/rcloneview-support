---
slug: backup-migrate-rclone-config-rcloneview
title: "如何使用 RcloneView 備份、遷移及管理您的 Rclone 設定"
authors:
  - tayson
description: "了解如何使用 RcloneView 備份、還原及遷移您的 rclone 設定檔——包含加密遠端——讓您的雲端連線保持可攜且受到保護。"
keywords:
  - backup rclone config
  - migrate rclone configuration
  - rclone config file location
  - rcloneview config backup
  - rclone config portable
  - export rclone remotes
  - rclone config file backup
  - move rclone to new computer
  - rclone config migration
  - rcloneview configuration management
tags:
  - RcloneView
  - cloud-storage
  - feature
  - guide
  - tips
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 備份、遷移及管理您的 Rclone 設定

> 您的 rclone 設定檔包含所有雲端遠端設定——連線詳情、驗證權杖、加密金鑰及自訂設定。遺失它意味著必須從頭重新設定每一個遠端。以下說明如何備份它、遷移它，並保持其可攜性。

在 RcloneView 中花費時間設定數十個雲端遠端後——OAuth 流程、API 金鑰、加密密碼、自訂端點——您最不希望發生的事，就是因磁碟故障、作業系統重灌或機器升級而失去這些成果。rclone 設定檔是一個編碼了所有這些設定的單一文字檔案。了解它存放的位置以及如何保護它，是任何認真的 RcloneView 使用者必要的維護工作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone 設定檔位於何處？

設定檔的位置取決於您的作業系統：

| 作業系統 | 預設位置 |
|----|----------------|
| **Windows** | `%APPDATA%\rclone\rclone.conf` |
| **macOS** | `~/.config/rclone/rclone.conf` |
| **Linux** | `~/.config/rclone/rclone.conf` |

您可以在 RcloneView 的**終端機**中確認位置：

```bash
rclone config file
```

這會印出您系統上正在使用的確切路徑。

## 設定檔內含什麼

設定檔是純文字的 INI 格式檔案。每個區段代表一個遠端：

```ini
[my-google-drive]
type = drive
client_id =
client_secret =
token = {"access_token":"ya29...","expiry":"2026-05-01T..."}

[s3-backup]
type = s3
provider = AWS
access_key_id = AKIA...
secret_access_key = abc123...
region = us-east-1

[encrypted-drive]
type = crypt
remote = my-google-drive:encrypted/
password = *** ENCRYPTED ***
password2 = *** ENCRYPTED ***
```

**重要提示：** OAuth 權杖（用於 Google Drive、OneDrive、Dropbox）儲存在設定檔中。這些權杖會過期，並在使用過程中自動更新。請定期備份設定檔，以取得最新的有效權杖。

## 備份設定檔

### 手動備份

將設定檔複製到安全位置：

**Windows：**
```
copy %APPDATA%\rclone\rclone.conf C:\Backups\rclone-config-backup.conf
```

**macOS/Linux：**
```bash
cp ~/.config/rclone/rclone.conf ~/backups/rclone-config-$(date +%Y%m%d).conf
```

### 使用 RcloneView 自動備份

在 RcloneView 中設定一項工作，將設定檔本身備份到雲端儲存：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule config file backup in RcloneView" class="img-large img-center" />

1. 建立一個新的**複製**工作。
2. 來源：設定檔所在位置（`~/.config/rclone/`）
3. 目的地：一個雲端資料夾（`s3-backup:system-configs/rclone/`）
4. 排程：每週或在重大變更後執行。

**安全性提醒：** 設定檔包含憑證資訊。請只將其備份到加密儲存空間或加密的雲端資料夾（例如 Crypt 遠端）。

## 靜態加密設定檔

Rclone 可以使用密碼將整個設定檔加密。可從 RcloneView 的終端機啟用此功能：

```bash
rclone config
# Choose: s - Set configuration password
```

設定密碼後，設定檔在磁碟上會被加密。每次 RcloneView 啟動或執行 rclone 命令時都需要輸入密碼。即使設定檔遭竊，這也能保護您的憑證。

<img src="/support/images/en/blog/new-remote.png" alt="Set config password in RcloneView terminal" class="img-large img-center" />

## 遷移到新機器

### 方法一——直接複製

最簡單的遷移方式：

1. 將 `rclone.conf` 從舊機器複製到新機器上的相同路徑。
2. 在新機器上安裝 RcloneView。
3. 開啟 RcloneView——所有遠端會立即出現。

大多數遠端（S3、WebDAV、FTP 等）不需要重新驗證。OAuth 遠端（Google Drive、OneDrive、Dropbox）將使用已儲存的權杖，這些權杖在過期前皆有效（通常自上次使用起 60 至 90 天）。

### 方法二——重新驗證 OAuth 遠端

如果 OAuth 權杖已過期，請重新授權受影響的每個遠端：

1. 在 RcloneView 中開啟**遠端**。
2. 選擇該遠端並選擇**編輯**。
3. 點擊**重新授權**以產生新的權杖。

只有 OAuth 權杖過期的遠端才需要此步驟。

### 方法三——使用 `--config` 旗標

如果您將設定檔存放在非標準位置（例如放在 Dropbox 中以便攜帶），請使用：

```bash
rclone --config /path/to/rclone.conf <command>
```

或設定 `RCLONE_CONFIG` 環境變數，讓它成為該機器上所有 rclone 操作的預設值。

## 在 RcloneView 中檢視及編輯設定

RcloneView 的遠端管理介面提供了新增及編輯遠端的圖形化介面——但對於偏好直接存取的進階使用者，設定檔始終是進行變更的有效方式。手動編輯設定檔後，請重新啟動 RcloneView 以套用變更。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Manage remotes in RcloneView" class="img-large img-center" />

## 最佳實務

| 做法 | 原因 |
|----------|-----|
| 每週備份設定檔 | OAuth 權杖會更新；擷取最新的有效狀態 |
| 加密備份位置 | 設定檔包含憑證及權杖 |
| 為敏感安裝設定設定檔密碼 | 若機器遭入侵可提供額外保護 |
| 不要將設定檔提交到公開的 Git 儲存庫 | 存取金鑰及權杖會因此外洩 |
| 定期測試還原 | 驗證您的備份實際可用 |

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 RcloneView 的終端機中使用 `rclone config file` **找出您的設定檔**。
3. **設定自動備份工作**，將設定檔複製到加密的雲端儲存。
4. 將**設定密碼**（若已設定）儲存在密碼管理工具中——遺失它意味著失去對設定檔的存取權。

您的 rclone 設定檔是您 RcloneView 環境中最重要的單一檔案。請妥善保護它。

---

**相關指南：**

- [使用 Crypt 遠端加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [RcloneView 終端機：圖形介面內建的 CLI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [使用應用程式鎖定保護 RcloneView](https://rcloneview.com/support/blog/secure-rcloneview-app-lock-password)

<CloudSupportGrid />

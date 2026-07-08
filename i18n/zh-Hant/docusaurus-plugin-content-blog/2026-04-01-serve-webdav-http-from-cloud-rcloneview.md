---
slug: serve-webdav-http-from-cloud-rcloneview
title: "使用 RcloneView 將雲端儲存以 WebDAV 或 HTTP 方式提供服務"
authors:
  - tayson
description: "透過 RcloneView 使用 rclone 的 serve 指令,將雲端儲存公開為本機 WebDAV 或 HTTP 伺服器。無需掛載磁碟機,即可在支援 WebDAV 的應用程式中存取檔案。"
keywords:
  - rclone serve webdav
  - expose cloud storage webdav
  - rcloneview serve http
  - cloud storage webdav server
  - rclone webdav local server
  - access cloud via webdav
  - serve google drive webdav
  - rclone serve command guide
  - webdav from cloud storage
  - rcloneview serve feature
tags:
  - RcloneView
  - webdav
  - cloud-storage
  - feature
  - guide
  - self-hosted
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將雲端儲存以 WebDAV 或 HTTP 方式提供服務

> RcloneView 可以將任何雲端儲存供應商公開為本機 WebDAV 或 HTTP 伺服器。任何支援 WebDAV 的應用程式——檔案管理員、DAM 工具、創意應用程式、行動裝置用戶端——都能直接讀寫雲端檔案。

使用 rclone 的 VFS 層來掛載雲端磁碟機,是在本機公開雲端儲存最常見的方式。但某些情境需要不同的做法:讓應用程式透過網路連線的 WebDAV 伺服器、用於在瀏覽器提供檔案的純 HTTP 伺服器,或是在無法掛載 FUSE 磁碟機的裝置上存取雲端儲存的輕量方式。rclone 的 `serve` 指令能處理以上所有情境——而 RcloneView 讓你能透過終端機與工作介面來使用它。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## rclone 可提供的服務類型

rclone 透過 `rclone serve` 指令支援多種伺服器協定:

| 協定 | 使用情境 |
|----------|----------|
| `webdav` | 檔案管理員、DAM 工具、支援 WebDAV 的應用程式 |
| `http` | 唯讀方式在瀏覽器中存取雲端檔案 |
| `ftp` | 相容舊版應用程式 |
| `sftp` | 以安全殼層(SSH)存取檔案 |
| `s3` | 將任何雲端公開為相容 S3 的介面(搭配 S3 用戶端使用) |
| `dlna` | 串流媒體至相容 DLNA 的裝置 |

本指南聚焦於 WebDAV 與 HTTP,這兩者對桌面工作流程最為實用。

## 使用情境一:透過 WebDAV 整合應用程式

許多專業應用程式原生支援 WebDAV:Cyberduck、Finder(macOS)、Adobe Bridge、DAM 工具、專案管理工具等等。將雲端儲存公開為 WebDAV,可讓這些應用程式在不掛載磁碟機的情況下存取它。

### 從 RcloneView 啟動 WebDAV 伺服器

開啟 RcloneView 的 **終端機** 面板並執行:

```bash
rclone serve webdav gdrive:/Documents/ --addr 127.0.0.1:8888 --user myuser --pass mypassword
```

這會在 `http://127.0.0.1:8888` 啟動一個 WebDAV 伺服器,公開你 Google Drive 的 `/Documents/` 資料夾。

<img src="/support/images/en/blog/new-remote.png" alt="Open RcloneView terminal to start serve command" class="img-large img-center" />

### 從應用程式連線

在任何支援 WebDAV 的應用程式中,新增一個 WebDAV 連線:
- **URL**:`http://127.0.0.1:8888`
- **使用者名稱**:`myuser`
- **密碼**:`mypassword`

該應用程式會將你的 Google Drive Documents 資料夾視為一個 WebDAV 共用資料夾——可瀏覽、可讀取、也可寫入。

## 使用情境二:以唯讀 HTTP 方式提供瀏覽器存取

若要與同事分享檔案,而不必授予他們雲端帳號存取權限,可將資料夾以 HTTP 方式提供服務:

```bash
rclone serve http s3-remote:my-bucket/reports/ --addr 0.0.0.0:8080
```

網路上的任何人都可以在瀏覽器中開啟 `http://your-machine-ip:8080`,看到目錄列表與下載連結——不需要雲端帳號。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse served cloud files in browser" class="img-large img-center" />

## 使用情境三:提供 S3 服務以相容 S3 用戶端

一個強大的技巧:將非 S3 的雲端(例如 Google Drive 或 Backblaze B2 的原生 API)公開為相容 S3 的端點,讓任何 S3 用戶端都能存取它:

```bash
rclone serve s3 gdrive:/Backups/ --addr 127.0.0.1:9000 --auth-key ACCESSKEY,SECRETKEY
```

S3 用戶端(AWS CLI、s3cmd、任何 S3 SDK)便可連線至 `http://127.0.0.1:9000`,並像操作 S3 一樣與 Google Drive 互動。

## 建立持續執行的 Serve 工作

若要讓 serve 指令在啟動時或依排程執行:

1. 在 RcloneView 中,以 **自訂指令** 模式建立一個新的 **工作**。
2. 輸入你的 `rclone serve webdav` 指令與所需旗標。
3. 設定為 RcloneView 啟動時自動執行,或依需求排程。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule serve job to run on startup" class="img-large img-center" />

## 安全性考量

| 情境 | 建議 |
|----------|---------------|
| 僅供本機使用 | 綁定至 `127.0.0.1`——外部機器無法存取 |
| 區域網路分享 | 綁定至機器的本機 IP,並加上 `--user` 與 `--pass` |
| 對外公開至網際網路 | 使用 HTTPS(加上 `--cert` 與 `--key` 旗標)或放在反向代理伺服器之後 |
| 公開的 HTTP 伺服器 | 搭配唯讀 VFS 使用 `rclone serve http`:加上 `--read-only` |

對於任何超出 `127.0.0.1` 範圍即可存取的伺服器,務必設定使用者名稱與密碼:

```bash
rclone serve webdav remote:path --addr 0.0.0.0:8888 --user admin --pass strongpassword --read-only
```

## 實用的 Serve 旗標

| 旗標 | 用途 |
|------|---------|
| `--addr host:port` | 綁定位址與連接埠 |
| `--user` / `--pass` | HTTP 基本驗證 |
| `--read-only` | 防止寫入 |
| `--vfs-cache-mode full` | 在本機快取檔案以提升效能 |
| `--no-modtime` | 停用修改時間回報(對某些應用程式有幫助) |
| `--htpasswd /path/file` | 使用 htpasswd 檔案支援多位使用者 |

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 RcloneView 中 **開啟終端機**。
3. **執行 `rclone serve webdav remote:path --addr 127.0.0.1:8888`** 以啟動 WebDAV 伺服器。
4. **從你的應用程式連線**,使用 WebDAV 網址與登入憑證。

WebDAV 為數十種原本無法讀取你雲端檔案的應用程式,解鎖了雲端儲存的存取能力。完全不需要掛載磁碟機。

---

**相關指南:**

- [將雲端儲存掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [將 SFTP 與 SMB 掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [RcloneView 終端機:在 GUI 中使用 CLI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)

<CloudSupportGrid />

---
slug: run-rcloneview-docker-container-cloud-sync
title: "在 Docker 中執行 Rclone 以實現自動化雲端同步 — 使用 RcloneView 設定的無介面備份"
authors:
  - tayson
description: "使用 Docker 執行 rclone,實現自動化的無介面雲端同步與備份。在桌面使用 RcloneView 進行設定,在伺服器上使用 Docker 部署。"
keywords:
  - rclone docker
  - rclone docker container
  - rclone headless backup
  - docker cloud sync
  - rclone docker compose
  - automated cloud backup docker
  - rclone server deployment
  - docker cloud storage sync
  - rclone container setup
  - headless cloud backup
tags:
  - docker
  - automation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Docker 中執行 Rclone 以實現自動化雲端同步 — 使用 RcloneView 設定的無介面備份

> RcloneView 非常適合用來設定與監控雲端同步。但如果是無介面伺服器、Kubernetes 叢集,或是執行 Docker 的 NAS 裝置呢?用 RcloneView 設定,用 Docker 部署。

RcloneView 是一款桌面應用程式 — 非常適合用於設定、監控與手動操作。但若要在無介面伺服器上進行全天候自動化備份,執行 rclone 的 Docker 容器會是理想選擇。最佳工作流程是:先在 RcloneView 中設定遠端並測試工作,再將相同的設定部署到 Docker。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 混合式做法

```
設定與測試: RcloneView(桌面圖形介面)
         ↓ (分享 rclone.conf)
部署與執行:    Docker 容器(無介面、自動化)
         ↓
監控:         Slack/Discord 通知
```

## Docker 設定

### 基本的 rclone Docker 容器

```yaml
# docker-compose.yml
version: '3'
services:
  rclone-sync:
    image: rclone/rclone:latest
    container_name: rclone-sync
    volumes:
      - ./rclone.conf:/config/rclone/rclone.conf:ro
      - /data:/data
    command: sync /data remote:backup --log-file=/tmp/rclone.log --log-level INFO
    restart: unless-stopped
```

### 搭配排程 cron

```yaml
version: '3'
services:
  rclone-cron:
    image: rclone/rclone:latest
    container_name: rclone-cron
    volumes:
      - ./rclone.conf:/config/rclone/rclone.conf:ro
      - ./scripts:/scripts:ro
      - /data:/data
    entrypoint: /bin/sh
    command: -c "while true; do /scripts/backup.sh; sleep 86400; done"
    restart: unless-stopped
```

### backup.sh

```bash
#!/bin/sh
echo "Starting backup: $(date)"
rclone copy /data remote:backup \
  --transfers=8 \
  --checkers=16 \
  --log-level INFO
echo "Backup complete: $(date)"
```

## 先用 RcloneView 進行設定

### 為什麼要先在 RcloneView 中設定?

- **視覺化遠端設定** — 透過圖形介面新增並測試遠端,而不必手動編輯設定檔。
- **測試傳輸** — 在自動化之前先執行手動傳輸並驗證是否正常運作。
- **資料夾比較** — 驗證來源與目的地是否一致。
- **匯出設定** — RcloneView 使用標準的 rclone.conf 檔案。

<img src="/support/images/en/blog/new-remote.png" alt="Configure remotes in RcloneView" class="img-large img-center" />

### 匯出設定檔

rclone 設定檔的位置如下:

- **Linux**: `~/.config/rclone/rclone.conf`
- **macOS**: `~/.config/rclone/rclone.conf`
- **Windows**: `%APPDATA%\rclone\rclone.conf`

將此檔案複製到你的 Docker 部署環境中。

## 使用情境

### 1) NAS Docker 備份

在你的 Synology 或 QNAP NAS 上以 Docker 執行 rclone:

```yaml
services:
  backup:
    image: rclone/rclone:latest
    volumes:
      - /volume1/rclone.conf:/config/rclone/rclone.conf:ro
      - /volume1/data:/data:ro
    command: copy /data b2:nas-backup --transfers=4
```

### 2) 伺服器到雲端的備份

自動化將伺服器目錄備份到 S3:

```yaml
services:
  server-backup:
    image: rclone/rclone:latest
    volumes:
      - ./rclone.conf:/config/rclone/rclone.conf:ro
      - /var/www:/source:ro
      - /var/backups/db:/db-backups:ro
    command: copy /source s3:server-backup/www --transfers=8
```

### 3) 多雲端同步

執行多個容器以處理不同的同步任務:

```yaml
services:
  gdrive-to-b2:
    image: rclone/rclone:latest
    volumes:
      - ./rclone.conf:/config/rclone/rclone.conf:ro
    command: sync gdrive:important b2:gdrive-backup --transfers=4

  onedrive-to-b2:
    image: rclone/rclone:latest
    volumes:
      - ./rclone.conf:/config/rclone/rclone.conf:ro
    command: sync onedrive:work b2:onedrive-backup --transfers=4
```

## 監控 Docker 中的 Rclone

### 健康檢查

在你的 docker-compose 中加入健康檢查:

```yaml
healthcheck:
  test: ["CMD", "rclone", "about", "remote:"]
  interval: 1h
  timeout: 30s
  retries: 3
```

### 日誌監控

掛載日誌磁碟區,並使用標準的 Docker 日誌功能進行監控:

```bash
docker logs rclone-sync --tail 50
```

### 通知

使用 rclone 內建的 webhook 支援,或將輸出導向通知服務。

## 使用 RcloneView 進行驗證

定期從桌面的 RcloneView 檢查由 Docker 管理的備份:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Docker backups from RcloneView" class="img-large img-center" />

這能讓你以視覺化方式確認自動化備份是否正常運作。

## 開始使用

1. **下載 RcloneView**,從 [rcloneview.com](https://rcloneview.com/src/download.html) 進行初次設定。
2. **在圖形介面中設定並測試遠端**。
3. **將 rclone.conf 匯出**到你的伺服器。
4. **部署 Docker 容器**並搭配你的同步指令。
5. **定期從 RcloneView 進行驗證**。

用圖形介面進行設定,用 Docker 進行執行。

---

**相關指南:**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [在 Ubuntu/Debian 上安裝 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 Raspberry Pi 上使用 RcloneView](https://rcloneview.com/support/blog/rcloneview-on-raspberry-pi-cloud-backup-rcloneview)

<CloudSupportGrid />

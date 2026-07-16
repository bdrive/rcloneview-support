---
slug: rclone-rc-api-remote-control-rcloneview
title: "透過 Rclone RC API 遠端控制 RcloneView"
authors: [tayson]
description: "了解如何使用 rclone RC（Remote Control）API 自動化雲端儲存操作、監控傳輸進度，並將 RcloneView 整合到您的工作流程中。"
keywords:
  - rclone rc api
  - rclone remote control
  - rcloneview api
  - rclone automation
  - rclone api endpoints
  - rclone rest api
  - rclone programmatic control
  - cloud storage automation
  - rclone webhook
  - rclone monitoring api
tags: [feature, api, automation, cli, tips, monitoring]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 透過 Rclone RC API 遠端控制 RcloneView

> 使用 rclone 內建的 RC API，並與 RcloneView 無縫整合，解鎖對雲端儲存操作的程式化控制能力。

Rclone 內建一套強大的 REST API，稱為 RC（Remote Control）介面。此 API 將幾乎所有 rclone 操作以 HTTP 端點的形式公開，讓您可以從任何程式語言或自動化工具啟動傳輸、監控進度、管理掛載並查詢統計資訊。RcloneView 在底層的 GUI 操作中，正是利用同一套 RC API 運作，這意味著您在介面中能做的任何事，也都能以程式化方式完成。本指南從基礎原理開始，逐步深入到進階自動化，讓您具備打造自訂整合、監控儀表板以及圍繞雲端儲存操作的自動化工作流程所需的知識。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 了解 Rclone RC 架構

rclone RC API 是一套以 JSON 為基礎的 REST API，以 HTTP 伺服器的形式內嵌於 rclone 程序中運作。當您以 `--rc` 旗標啟動 rclone，或使用 `rclone rcd` 命令時，它會開啟一個連接埠（預設為 5572）並監聽 HTTP 請求。

**RcloneView 如何使用 RC API：**

RcloneView 完全透過此 RC 介面與 rclone 溝通。當您在 GUI 中點擊按鈕以啟動同步、瀏覽目錄或查看傳輸進度時，RcloneView 會在背後向 rclone RC API 發送 HTTP 請求。這種架構意味著：

- RcloneView 可以控制執行在遠端機器上的 rclone 執行個體
- 多個用戶端可以連線至同一個 rclone 執行個體
- 所有操作都是無狀態的，並可被自動化
- GUI 與程式化存取使用相同的底層機制

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-large img-center" />

**內嵌模式 vs. 外部模式的 rclone：**

在內嵌模式下，RcloneView 會啟動自己的 rclone 程序並自動管理 RC 連線。在外部模式下，您需要另行啟動 rclone，並將 RcloneView 指向該執行個體。外部模式對於遠端管理情境至關重要，例如控制執行在 NAS 或雲端伺服器上的 rclone 執行個體。

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-large img-center" />

## 啟動 RC 常駐程序

若要使用 RC API，您需要一個啟用了 RC 介面的 rclone 執行個體。

**基本啟動方式：**

```bash
rclone rcd --rc-addr :5572
```

這會在所有介面的 5572 連接埠啟動 RC 常駐程序，且不需要身分驗證。此方式僅適合本機開發使用。

**啟用身分驗證的啟動方式（建議）：**

```bash
rclone rcd --rc-addr :5572 --rc-user admin --rc-pass your-secure-password
```

**啟用 TLS 加密：**

```bash
rclone rcd --rc-addr :5572 \
  --rc-user admin \
  --rc-pass your-secure-password \
  --rc-cert /path/to/cert.pem \
  --rc-key /path/to/key.pem
```

**啟用網頁 GUI：**

```bash
rclone rcd --rc-addr :5572 --rc-web-gui --rc-user admin --rc-pass your-secure-password
```

**常用啟動旗標：**

| 旗標 | 用途 |
|------|---------|
| `--rc-addr` | 監聽的位址與連接埠 |
| `--rc-user` / `--rc-pass` | 基本身分驗證憑證 |
| `--rc-allow-origin` | 供瀏覽器端存取的 CORS 來源 |
| `--rc-serve` | 透過 RC API 提供遠端物件 |
| `--rc-no-auth` | 停用身分驗證（僅限本機使用） |
| `--rc-cert` / `--rc-key` | TLS 憑證與私密金鑰 |

**驗證常駐程序是否正在執行：**

```bash
curl http://localhost:5572/rc/noop
# 預期回應：{}
```

若已啟用身分驗證：

```bash
curl -u admin:your-secure-password http://localhost:5572/rc/noop
```

## 重要的 API 端點

RC API 提供了數十個依類別組織的端點。以下是日常使用中最重要的幾個。

**核心操作：**

```bash
# 取得 rclone 版本與建置資訊
curl -X POST http://localhost:5572/core/version

# 取得目前的傳輸統計資訊
curl -X POST http://localhost:5572/core/stats

# 取得記憶體統計資訊
curl -X POST http://localhost:5572/core/memstats

# 觸發垃圾回收
curl -X POST http://localhost:5572/core/gc

# 正常關閉 rclone
curl -X POST http://localhost:5572/core/quit
```

**同步與複製操作：**

```bash
# 將檔案從來源複製到目的地
curl -X POST http://localhost:5572/sync/copy \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Documents", "dstFs": "s3:my-bucket/documents"}'

# 同步（鏡像）來源至目的地
curl -X POST http://localhost:5572/sync/sync \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Photos", "dstFs": "b2:photo-backup"}'

# 將檔案從來源移動到目的地
curl -X POST http://localhost:5572/sync/move \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "local:/tmp/uploads", "dstFs": "s3:incoming-bucket"}'
```

**檔案操作：**

```bash
# 列出目錄中的檔案
curl -X POST http://localhost:5572/operations/list \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents"}'

# 取得特定檔案的資訊
curl -X POST http://localhost:5572/operations/stat \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents/report.pdf"}'

# 刪除檔案
curl -X POST http://localhost:5572/operations/deletefile \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "temp/old-file.txt"}'

# 建立目錄
curl -X POST http://localhost:5572/operations/mkdir \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "NewFolder"}'

# 取得磁碟使用資訊
curl -X POST http://localhost:5572/operations/about \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:"}'
```

**掛載操作：**

```bash
# 將遠端掛載為本機磁碟機
curl -X POST http://localhost:5572/mount/mount \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "mountPoint": "/mnt/gdrive"}'

# 列出目前使用中的掛載
curl -X POST http://localhost:5572/mount/listmounts

# 卸載
curl -X POST http://localhost:5572/mount/unmount \
  -H "Content-Type: application/json" \
  -d '{"mountPoint": "/mnt/gdrive"}'
```

## 以程式化方式監控傳輸

RC API 最有價值的用途之一，就是即時傳輸監控。

**輪詢傳輸統計資訊：**

```bash
curl -X POST http://localhost:5572/core/stats
```

這會回傳一個包含以下內容的 JSON 物件：

```json
{
  "bytes": 1234567890,
  "checks": 150,
  "deletedDirs": 0,
  "deletes": 0,
  "elapsedTime": 45.2,
  "errors": 0,
  "eta": 120,
  "fatalError": false,
  "renames": 0,
  "speed": 27434842,
  "totalBytes": 9876543210,
  "totalChecks": 500,
  "totalTransfers": 200,
  "transferTime": 42.1,
  "transfers": 85,
  "transferring": [
    {
      "bytes": 52428800,
      "eta": 30,
      "group": "sync/copy",
      "name": "Photos/vacation-2025/IMG_4521.jpg",
      "percentage": 65,
      "size": 80530636,
      "speed": 1048576,
      "speedAvg": 983040
    }
  ]
}
```

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

**工作管理：**

每個非同步操作（同步、複製、移動）都會建立一個您可以追蹤的工作：

```bash
# 列出所有執行中的工作
curl -X POST http://localhost:5572/job/list

# 取得特定工作的狀態
curl -X POST http://localhost:5572/job/status \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'

# 停止執行中的工作
curl -X POST http://localhost:5572/job/stop \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'
```

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

**建置簡易監控腳本：**

```python
import requests
import time
import json

RC_URL = "http://localhost:5572"
AUTH = ("admin", "your-secure-password")

def get_stats():
    resp = requests.post(f"{RC_URL}/core/stats", auth=AUTH)
    return resp.json()

def monitor_transfers(interval=5):
    while True:
        stats = get_stats()
        speed_mb = stats.get("speed", 0) / 1024 / 1024
        transferred = stats.get("transfers", 0)
        total = stats.get("totalTransfers", 0)
        errors = stats.get("errors", 0)

        print(f"Speed: {speed_mb:.1f} MB/s | "
              f"Progress: {transferred}/{total} | "
              f"Errors: {errors}")

        if transferred >= total and total > 0:
            print("Transfer complete!")
            break

        time.sleep(interval)

monitor_transfers()
```

## 建置自動化腳本

RC API 支援超越單純 GUI 所能提供的強大自動化情境。

**具備錯誤處理的自動化備份：**

```bash
#!/bin/bash
RC_URL="http://localhost:5572"
AUTH="admin:your-secure-password"

# 啟動備份
RESPONSE=$(curl -s -u "$AUTH" -X POST "$RC_URL/sync/sync" \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Important", "dstFs": "b2:backup-bucket/important", "_async": true}')

JOBID=$(echo "$RESPONSE" | jq -r '.jobid')
echo "Started backup job: $JOBID"

# 監控直到完成
while true; do
  STATUS=$(curl -s -u "$AUTH" -X POST "$RC_URL/job/status" \
    -H "Content-Type: application/json" \
    -d "{\"jobid\": $JOBID}")

  FINISHED=$(echo "$STATUS" | jq -r '.finished')
  SUCCESS=$(echo "$STATUS" | jq -r '.success')

  if [ "$FINISHED" = "true" ]; then
    if [ "$SUCCESS" = "true" ]; then
      echo "Backup completed successfully"
    else
      ERROR=$(echo "$STATUS" | jq -r '.error')
      echo "Backup failed: $ERROR"
      # 傳送警示通知
      curl -X POST "https://hooks.slack.com/services/YOUR/WEBHOOK/URL" \
        -d "{\"text\": \"Backup job $JOBID failed: $ERROR\"}"
    fi
    break
  fi

  sleep 10
done
```

**多遠端同步協調：**

```python
import requests
import time

RC_URL = "http://localhost:5572"
AUTH = ("admin", "your-secure-password")

SYNC_JOBS = [
    {"srcFs": "gdrive:/Documents", "dstFs": "s3:backup/documents"},
    {"srcFs": "gdrive:/Photos", "dstFs": "b2:photo-archive"},
    {"srcFs": "onedrive:/Work", "dstFs": "s3:backup/work"},
]

def start_sync(src, dst):
    resp = requests.post(f"{RC_URL}/sync/sync", auth=AUTH,
                        json={"srcFs": src, "dstFs": dst, "_async": True})
    return resp.json().get("jobid")

def wait_for_job(jobid):
    while True:
        resp = requests.post(f"{RC_URL}/job/status", auth=AUTH,
                            json={"jobid": jobid})
        status = resp.json()
        if status.get("finished"):
            return status.get("success", False)
        time.sleep(5)

# 依序執行所有同步作業
for job in SYNC_JOBS:
    print(f"Syncing {job['srcFs']} -> {job['dstFs']}")
    jobid = start_sync(job["srcFs"], job["dstFs"])
    success = wait_for_job(jobid)
    print(f"  Result: {'Success' if success else 'Failed'}")
```

**儲存用量報表自動化：**

```bash
#!/bin/bash
RC_URL="http://localhost:5572"
AUTH="admin:your-secure-password"

REMOTES=("gdrive:" "s3:my-bucket" "b2:my-bucket" "onedrive:")

echo "Storage Usage Report - $(date)"
echo "================================"

for REMOTE in "${REMOTES[@]}"; do
  RESULT=$(curl -s -u "$AUTH" -X POST "$RC_URL/operations/about" \
    -H "Content-Type: application/json" \
    -d "{\"fs\": \"$REMOTE\"}")

  TOTAL=$(echo "$RESULT" | jq -r '.total // "unlimited"')
  USED=$(echo "$RESULT" | jq -r '.used // "unknown"')
  FREE=$(echo "$RESULT" | jq -r '.free // "unknown"')

  echo "$REMOTE: Used=$USED, Free=$FREE, Total=$TOTAL"
done
```

## Webhook 整合與通知

將 RC API 與 webhook 結合，即可打造事件驅動的工作流程。

**傳輸完成時的 Slack 通知：**

```python
import requests
import time

RC_URL = "http://localhost:5572"
RC_AUTH = ("admin", "your-secure-password")
SLACK_WEBHOOK = "https://hooks.slack.com/services/YOUR/WEBHOOK/URL"

def notify_slack(message):
    requests.post(SLACK_WEBHOOK, json={"text": message})

def run_sync_with_notification(src, dst, label):
    # 啟動同步
    resp = requests.post(f"{RC_URL}/sync/sync", auth=RC_AUTH,
                        json={"srcFs": src, "dstFs": dst, "_async": True})
    jobid = resp.json().get("jobid")
    notify_slack(f"Started: {label} (Job #{jobid})")

    # 等待完成
    while True:
        status = requests.post(f"{RC_URL}/job/status", auth=RC_AUTH,
                              json={"jobid": jobid}).json()
        if status.get("finished"):
            # 取得最終統計資訊
            stats = requests.post(f"{RC_URL}/core/stats", auth=RC_AUTH).json()

            if status.get("success"):
                notify_slack(
                    f"Completed: {label}\n"
                    f"Files: {stats.get('transfers', 0)} | "
                    f"Size: {stats.get('bytes', 0) / 1024 / 1024:.1f} MB | "
                    f"Errors: {stats.get('errors', 0)}"
                )
            else:
                notify_slack(f"FAILED: {label}\nError: {status.get('error')}")
            break
        time.sleep(10)

run_sync_with_notification(
    "gdrive:/Backups", "b2:disaster-recovery",
    "Nightly Google Drive Backup"
)
```

**供正常運行時間監控使用的健康檢查端點：**

您可以將 RC API 作為健康檢查端點，供 Uptime Kuma 或 Healthchecks.io 等監控工具使用：

```bash
# 簡單的健康檢查 - 若 rclone 正在執行則回傳 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:5572/rc/noop
```

將此整合到您的監控系統中，即可在 rclone 常駐程序停止運作時收到警示。

## 安全性最佳實務

在公開 RC API 時，尤其是透過網路公開時，安全性至關重要。

**身分驗證：** 在正式環境中務必使用 `--rc-user` 與 `--rc-pass`。切勿在可透過網路存取的介面上使用 `--rc-no-auth`。

**TLS 加密：** 使用 `--rc-cert` 與 `--rc-key` 為 API 流量加密。自簽憑證適用於內部使用；面向公眾的執行個體則建議使用 Let's Encrypt。

**網路限制：** 若僅需本機存取，請綁定至 localhost：

```bash
rclone rcd --rc-addr 127.0.0.1:5572
```

若需遠端存取，建議使用反向代理（nginx、Caddy）並搭配適當的 TLS 終止與速率限制，而非直接公開 rclone。

**防火牆規則：** 限制對 RC 連接埠的存取：

```bash
# 僅允許特定 IP
sudo ufw allow from 192.168.1.0/24 to any port 5572
```

**基於權杖的驗證替代方案：** 對於腳本，建議將憑證放在環境變數中，而非寫死在程式碼裡：

```bash
export RCLONE_RC_USER="admin"
export RCLONE_RC_PASS="your-secure-password"
```

## 開始使用

rclone RC API 將 RcloneView 從一個獨立應用程式，轉變為打造雲端儲存自動化的平台。無論您需要的是簡單的傳輸監控、複雜的多遠端協調，或是與您現有的 DevOps 工具鏈整合，RC API 都能提供所需的基礎。請從啟用 RC 常駐程序開始，透過 `core/stats` 與 `operations/list` 實驗以了解回應格式，接著逐步建置能在無需人工介入的情況下處理日常雲端儲存任務的自動化工作流程。

---

**相關指南：**
- [執行與管理工作](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [即時傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [搭配外部 Rclone 使用 RcloneView](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />

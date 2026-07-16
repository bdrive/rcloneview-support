---
slug: rclone-rc-api-remote-control-rcloneview
title: "使用 Rclone RC API 远程控制 RcloneView"
authors: [tayson]
description: "了解如何使用 rclone RC(远程控制)API 自动化云存储操作、监控传输进度，并将 RcloneView 集成到您的工作流程中。"
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

# 使用 Rclone RC API 远程控制 RcloneView

> 通过 rclone 内置的 RC API,解锁对云存储操作的编程控制,并与 RcloneView 无缝集成。

Rclone 内置了一个强大的 REST API,称为 RC(远程控制)接口。该 API 将几乎所有 rclone 操作都以 HTTP 端点的形式暴露出来,允许您从任何编程语言或自动化工具启动传输、监控进度、管理挂载并查询统计信息。RcloneView 在底层的 GUI 操作中正是利用了同一个 RC API,这意味着您在界面中能做的任何事情,也都可以通过编程方式完成。本指南将从基础原理到高级自动化全面介绍 RC API,帮助您掌握围绕云存储操作构建自定义集成、监控仪表盘和自动化工作流所需的知识。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 理解 Rclone RC 架构

rclone RC API 是一个基于 JSON 的 REST API,作为嵌入在 rclone 进程中的 HTTP 服务器运行。当您使用 `--rc` 标志启动 rclone 或使用 `rclone rcd` 命令时,它会打开一个端口(默认 5572)并监听 HTTP 请求。

**RcloneView 如何使用 RC API:**

RcloneView 完全通过这个 RC 接口与 rclone 通信。当您在 GUI 中点击按钮启动同步、浏览目录或查看传输进度时,RcloneView 会在后台向 rclone RC API 发送 HTTP 请求。这种架构意味着:

- RcloneView 可以控制运行在远程机器上的 rclone 实例
- 多个客户端可以连接到同一个 rclone 实例
- 所有操作都是无状态的,可以实现自动化
- GUI 与编程访问使用相同的底层机制

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-large img-center" />

**内嵌模式与外部模式的对比:**

在内嵌模式下,RcloneView 会启动自己的 rclone 进程并自动管理 RC 连接。在外部模式下,您单独启动 rclone,然后让 RcloneView 指向它。外部模式对于远程管理场景(例如控制运行在 NAS 或云服务器上的 rclone 实例)至关重要。

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-large img-center" />

## 启动 RC 守护进程

要使用 RC API,您需要一个启用了 RC 接口的 rclone 实例正在运行。

**基本启动方式:**

```bash
rclone rcd --rc-addr :5572
```

这会启动 RC 守护进程,监听所有接口的 5572 端口,且不进行任何身份验证。此方式仅适用于本地开发。

**带身份验证的启动方式(推荐):**

```bash
rclone rcd --rc-addr :5572 --rc-user admin --rc-pass your-secure-password
```

**启用 TLS 加密:**

```bash
rclone rcd --rc-addr :5572 \
  --rc-user admin \
  --rc-pass your-secure-password \
  --rc-cert /path/to/cert.pem \
  --rc-key /path/to/key.pem
```

**启用 Web GUI:**

```bash
rclone rcd --rc-addr :5572 --rc-web-gui --rc-user admin --rc-pass your-secure-password
```

**常用启动标志:**

| 标志 | 用途 |
|------|---------|
| `--rc-addr` | 监听的地址和端口 |
| `--rc-user` / `--rc-pass` | 基本身份验证凭据 |
| `--rc-allow-origin` | 用于浏览器访问的 CORS 来源 |
| `--rc-serve` | 通过 RC API 提供远程对象服务 |
| `--rc-no-auth` | 禁用身份验证(仅限本地使用) |
| `--rc-cert` / `--rc-key` | TLS 证书和私钥 |

**验证守护进程是否正在运行:**

```bash
curl http://localhost:5572/rc/noop
# 预期响应: {}
```

如果启用了身份验证:

```bash
curl -u admin:your-secure-password http://localhost:5572/rc/noop
```

## 核心 API 端点

RC API 提供了数十个按类别组织的端点。以下是日常使用中最重要的一些。

**核心操作:**

```bash
# 获取 rclone 版本和构建信息
curl -X POST http://localhost:5572/core/version

# 获取当前传输统计信息
curl -X POST http://localhost:5572/core/stats

# 获取内存统计信息
curl -X POST http://localhost:5572/core/memstats

# 触发垃圾回收
curl -X POST http://localhost:5572/core/gc

# 优雅地关闭 rclone
curl -X POST http://localhost:5572/core/quit
```

**同步与复制操作:**

```bash
# 将文件从源复制到目标
curl -X POST http://localhost:5572/sync/copy \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Documents", "dstFs": "s3:my-bucket/documents"}'

# 同步(镜像)源到目标
curl -X POST http://localhost:5572/sync/sync \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Photos", "dstFs": "b2:photo-backup"}'

# 将文件从源移动到目标
curl -X POST http://localhost:5572/sync/move \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "local:/tmp/uploads", "dstFs": "s3:incoming-bucket"}'
```

**文件操作:**

```bash
# 列出目录中的文件
curl -X POST http://localhost:5572/operations/list \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents"}'

# 获取特定文件的信息
curl -X POST http://localhost:5572/operations/stat \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents/report.pdf"}'

# 删除文件
curl -X POST http://localhost:5572/operations/deletefile \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "temp/old-file.txt"}'

# 创建目录
curl -X POST http://localhost:5572/operations/mkdir \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "NewFolder"}'

# 获取磁盘使用信息
curl -X POST http://localhost:5572/operations/about \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:"}'
```

**挂载操作:**

```bash
# 将远程挂载为本地驱动器
curl -X POST http://localhost:5572/mount/mount \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "mountPoint": "/mnt/gdrive"}'

# 列出活跃的挂载
curl -X POST http://localhost:5572/mount/listmounts

# 卸载
curl -X POST http://localhost:5572/mount/unmount \
  -H "Content-Type: application/json" \
  -d '{"mountPoint": "/mnt/gdrive"}'
```

## 以编程方式监控传输

RC API 最有价值的用途之一就是实时传输监控。

**轮询获取传输统计信息:**

```bash
curl -X POST http://localhost:5572/core/stats
```

这会返回一个包含以下内容的 JSON 对象:

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

**任务管理:**

每个异步操作(同步、复制、移动)都会创建一个可以跟踪的任务:

```bash
# 列出所有正在运行的任务
curl -X POST http://localhost:5572/job/list

# 获取特定任务的状态
curl -X POST http://localhost:5572/job/status \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'

# 停止正在运行的任务
curl -X POST http://localhost:5572/job/stop \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'
```

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

**编写一个简单的监控脚本:**

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

## 构建自动化脚本

RC API 支持强大的自动化场景,远超单纯 GUI 所能提供的能力。

**带错误处理的自动化备份:**

```bash
#!/bin/bash
RC_URL="http://localhost:5572"
AUTH="admin:your-secure-password"

# 启动备份
RESPONSE=$(curl -s -u "$AUTH" -X POST "$RC_URL/sync/sync" \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Important", "dstFs": "b2:backup-bucket/important", "_async": true}')

JOBID=$(echo "$RESPONSE" | jq -r '.jobid')
echo "Started backup job: $JOBID"

# 监控直至完成
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
      # 发送告警通知
      curl -X POST "https://hooks.slack.com/services/YOUR/WEBHOOK/URL" \
        -d "{\"text\": \"Backup job $JOBID failed: $ERROR\"}"
    fi
    break
  fi

  sleep 10
done
```

**多远程同步编排:**

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

# 依次运行所有同步任务
for job in SYNC_JOBS:
    print(f"Syncing {job['srcFs']} -> {job['dstFs']}")
    jobid = start_sync(job["srcFs"], job["dstFs"])
    success = wait_for_job(jobid)
    print(f"  Result: {'Success' if success else 'Failed'}")
```

**存储用量报告自动化:**

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

## Webhook 集成与通知

将 RC API 与 webhook 结合,可以创建事件驱动的工作流。

**传输完成时的 Slack 通知:**

```python
import requests
import time

RC_URL = "http://localhost:5572"
RC_AUTH = ("admin", "your-secure-password")
SLACK_WEBHOOK = "https://hooks.slack.com/services/YOUR/WEBHOOK/URL"

def notify_slack(message):
    requests.post(SLACK_WEBHOOK, json={"text": message})

def run_sync_with_notification(src, dst, label):
    # 启动同步
    resp = requests.post(f"{RC_URL}/sync/sync", auth=RC_AUTH,
                        json={"srcFs": src, "dstFs": dst, "_async": True})
    jobid = resp.json().get("jobid")
    notify_slack(f"Started: {label} (Job #{jobid})")

    # 等待完成
    while True:
        status = requests.post(f"{RC_URL}/job/status", auth=RC_AUTH,
                              json={"jobid": jobid}).json()
        if status.get("finished"):
            # 获取最终统计信息
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

**用于正常运行时间监控的健康检查端点:**

您可以将 RC API 用作 Uptime Kuma 或 Healthchecks.io 等监控工具的健康检查端点:

```bash
# 简单的健康检查 - 如果 rclone 正在运行则返回 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:5572/rc/noop
```

将其集成到您的监控体系中,以便在 rclone 守护进程宕机时收到告警。

## 安全最佳实践

在暴露 RC API 时,尤其是通过网络暴露时,安全性至关重要。

**身份验证:** 生产环境中务必使用 `--rc-user` 和 `--rc-pass`。切勿在可通过网络访问的接口上使用 `--rc-no-auth`。

**TLS 加密:** 使用 `--rc-cert` 和 `--rc-key` 加密 API 流量。自签名证书适用于内部使用;面向公众的实例请使用 Let's Encrypt。

**网络限制:** 如果只需要本地访问,请绑定到 localhost:

```bash
rclone rcd --rc-addr 127.0.0.1:5572
```

对于远程访问,请使用带有适当 TLS 终止和速率限制的反向代理(nginx、Caddy),而不是直接暴露 rclone。

**防火墙规则:** 限制对 RC 端口的访问:

```bash
# 仅允许特定 IP
sudo ufw allow from 192.168.1.0/24 to any port 5572
```

**基于令牌的身份验证替代方案:** 对于脚本,建议将凭据放在环境变量中,而不是硬编码:

```bash
export RCLONE_RC_USER="admin"
export RCLONE_RC_PASS="your-secure-password"
```

## 开始使用

rclone RC API 将 RcloneView 从一个独立应用转变为构建云存储自动化的平台。无论您需要的是简单的传输监控、复杂的多远程编排,还是与现有 DevOps 工具链的集成,RC API 都能提供坚实的基础。首先启用 RC 守护进程,尝试使用 `core/stats` 和 `operations/list` 来了解响应格式,然后逐步构建能够在无需人工干预的情况下处理日常云存储任务的自动化工作流。

---

**相关指南:**
- [执行和管理任务](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [实时传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [在 RcloneView 中使用外部 Rclone](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />

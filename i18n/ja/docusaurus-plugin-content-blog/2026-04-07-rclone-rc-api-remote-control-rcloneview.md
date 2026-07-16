---
slug: rclone-rc-api-remote-control-rcloneview
title: "Rclone RC APIでRcloneViewをリモート制御する"
authors: [tayson]
description: "rclone RC(Remote Control)APIを使ってクラウドストレージ操作を自動化し、転送を監視し、RcloneViewをワークフローに統合する方法を学びます。"
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
tags: [RcloneView, feature, api, automation, guide, cli, tips, monitoring]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone RC APIでRcloneViewをリモート制御する

> rcloneに組み込まれたRC APIを使い、RcloneViewとシームレスに統合されたクラウドストレージ操作のプログラマブルな制御を実現しましょう。

Rcloneには、RC(Remote Control)インターフェースと呼ばれる強力なREST APIが同梱されています。このAPIはrcloneのほぼすべての操作をHTTPエンドポイントとして公開しており、任意のプログラミング言語や自動化ツールから転送の開始、進捗の監視、マウントの管理、統計情報の取得を行うことができます。RcloneViewはGUI操作の裏側でこの同じRC APIを利用しているため、インターフェースでできることはすべてプログラム的にも実行できます。このガイドでは、RC APIの基礎から高度な自動化までを解説し、クラウドストレージ操作を中心としたカスタム連携、監視ダッシュボード、自動化ワークフローを構築するための知識を提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone RCアーキテクチャを理解する

rclone RC APIは、rcloneプロセス内に組み込まれたHTTPサーバーとして動作するJSONベースのREST APIです。`--rc`フラグを付けてrcloneを起動するか、`rclone rcd`コマンドを使用すると、ポート(デフォルトは5572)が開かれ、HTTPリクエストを待ち受けます。

**RcloneViewがRC APIをどう利用しているか:**

RcloneViewはこのRCインターフェースのみを通じてrcloneと通信します。GUIで同期を開始したり、ディレクトリを閲覧したり、転送の進捗を確認したりするためにボタンをクリックすると、RcloneViewは裏側でrclone RC APIにHTTPリクエストを送信しています。このアーキテクチャにより、以下のことが可能になります。

- RcloneViewはリモートマシン上で動作しているrcloneインスタンスを制御できる
- 複数のクライアントが同じrcloneインスタンスに接続できる
- すべての操作はステートレスであり、自動化が可能
- GUIとプログラムからのアクセスは同じ基盤メカニズムを使用する

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-large img-center" />

**組み込み型と外部rcloneの違い:**

組み込みモードでは、RcloneViewが独自のrcloneプロセスを起動し、RC接続を自動的に管理します。外部モードでは、rcloneを別途起動し、RcloneViewをそれに接続させます。外部モードは、NASやクラウドサーバー上で稼働しているrcloneインスタンスを制御するようなリモート管理シナリオにおいて不可欠です。

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-large img-center" />

## RCデーモンを起動する

RC APIを使用するには、RCインターフェースを有効にしたrcloneインスタンスを稼働させる必要があります。

**基本的な起動方法:**

```bash
rclone rcd --rc-addr :5572
```

これにより、認証なしですべてのインターフェースのポート5572でRCデーモンが待ち受け状態になります。これはローカル開発用途にのみ適しています。

**認証付き起動(推奨):**

```bash
rclone rcd --rc-addr :5572 --rc-user admin --rc-pass your-secure-password
```

**TLS暗号化を使用:**

```bash
rclone rcd --rc-addr :5572 \
  --rc-user admin \
  --rc-pass your-secure-password \
  --rc-cert /path/to/cert.pem \
  --rc-key /path/to/key.pem
```

**Web GUIを有効化:**

```bash
rclone rcd --rc-addr :5572 --rc-web-gui --rc-user admin --rc-pass your-secure-password
```

**主な起動フラグ:**

| フラグ | 目的 |
|------|---------|
| `--rc-addr` | 待ち受けるアドレスとポート |
| `--rc-user` / `--rc-pass` | Basic認証の認証情報 |
| `--rc-allow-origin` | ブラウザベースアクセス用のCORSオリジン |
| `--rc-serve` | RC API経由でリモートオブジェクトを配信 |
| `--rc-no-auth` | 認証を無効化(ローカル用途のみ) |
| `--rc-cert` / `--rc-key` | TLS証明書と秘密鍵 |

**デーモンが動作していることを確認する:**

```bash
curl http://localhost:5572/rc/noop
# Expected response: {}
```

認証が有効な場合:

```bash
curl -u admin:your-secure-password http://localhost:5572/rc/noop
```

## 主要なAPIエンドポイント

RC APIはカテゴリ別に整理された数十のエンドポイントを提供します。ここでは日常的に使う最も重要なものを紹介します。

**コア操作:**

```bash
# Get rclone version and build info
curl -X POST http://localhost:5572/core/version

# Get current transfer statistics
curl -X POST http://localhost:5572/core/stats

# Get memory statistics
curl -X POST http://localhost:5572/core/memstats

# Trigger garbage collection
curl -X POST http://localhost:5572/core/gc

# Gracefully shut down rclone
curl -X POST http://localhost:5572/core/quit
```

**同期・コピー操作:**

```bash
# Copy files from source to destination
curl -X POST http://localhost:5572/sync/copy \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Documents", "dstFs": "s3:my-bucket/documents"}'

# Sync (mirror) source to destination
curl -X POST http://localhost:5572/sync/sync \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Photos", "dstFs": "b2:photo-backup"}'

# Move files from source to destination
curl -X POST http://localhost:5572/sync/move \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "local:/tmp/uploads", "dstFs": "s3:incoming-bucket"}'
```

**ファイル操作:**

```bash
# List files in a directory
curl -X POST http://localhost:5572/operations/list \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents"}'

# Get information about a specific file
curl -X POST http://localhost:5572/operations/stat \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents/report.pdf"}'

# Delete a file
curl -X POST http://localhost:5572/operations/deletefile \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "temp/old-file.txt"}'

# Create a directory
curl -X POST http://localhost:5572/operations/mkdir \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "NewFolder"}'

# Get disk usage info
curl -X POST http://localhost:5572/operations/about \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:"}'
```

**マウント操作:**

```bash
# Mount a remote as a local drive
curl -X POST http://localhost:5572/mount/mount \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "mountPoint": "/mnt/gdrive"}'

# List active mounts
curl -X POST http://localhost:5572/mount/listmounts

# Unmount
curl -X POST http://localhost:5572/mount/unmount \
  -H "Content-Type: application/json" \
  -d '{"mountPoint": "/mnt/gdrive"}'
```

## 転送をプログラム的に監視する

RC APIの最も価値ある使い方の一つが、リアルタイムでの転送監視です。

**転送統計のポーリング:**

```bash
curl -X POST http://localhost:5572/core/stats
```

これは以下を含むJSONオブジェクトを返します。

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

**ジョブ管理:**

すべての非同期操作(同期、コピー、移動)はジョブを作成し、それを追跡できます。

```bash
# List all running jobs
curl -X POST http://localhost:5572/job/list

# Get status of a specific job
curl -X POST http://localhost:5572/job/status \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'

# Stop a running job
curl -X POST http://localhost:5572/job/stop \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'
```

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

**シンプルな監視スクリプトを作る:**

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

## 自動化スクリプトを構築する

RC APIは、GUIだけでは実現できない強力な自動化シナリオを可能にします。

**エラー処理付きの自動バックアップ:**

```bash
#!/bin/bash
RC_URL="http://localhost:5572"
AUTH="admin:your-secure-password"

# Start backup
RESPONSE=$(curl -s -u "$AUTH" -X POST "$RC_URL/sync/sync" \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Important", "dstFs": "b2:backup-bucket/important", "_async": true}')

JOBID=$(echo "$RESPONSE" | jq -r '.jobid')
echo "Started backup job: $JOBID"

# Monitor until complete
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
      # Send alert notification
      curl -X POST "https://hooks.slack.com/services/YOUR/WEBHOOK/URL" \
        -d "{\"text\": \"Backup job $JOBID failed: $ERROR\"}"
    fi
    break
  fi

  sleep 10
done
```

**複数リモートの同期オーケストレーション:**

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

# Run all syncs sequentially
for job in SYNC_JOBS:
    print(f"Syncing {job['srcFs']} -> {job['dstFs']}")
    jobid = start_sync(job["srcFs"], job["dstFs"])
    success = wait_for_job(jobid)
    print(f"  Result: {'Success' if success else 'Failed'}")
```

**ストレージ使用状況レポートの自動化:**

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

## Webhook連携と通知

RC APIをWebhookと組み合わせることで、イベント駆動型のワークフローを構築できます。

**転送完了時のSlack通知:**

```python
import requests
import time

RC_URL = "http://localhost:5572"
RC_AUTH = ("admin", "your-secure-password")
SLACK_WEBHOOK = "https://hooks.slack.com/services/YOUR/WEBHOOK/URL"

def notify_slack(message):
    requests.post(SLACK_WEBHOOK, json={"text": message})

def run_sync_with_notification(src, dst, label):
    # Start sync
    resp = requests.post(f"{RC_URL}/sync/sync", auth=RC_AUTH,
                        json={"srcFs": src, "dstFs": dst, "_async": True})
    jobid = resp.json().get("jobid")
    notify_slack(f"Started: {label} (Job #{jobid})")

    # Wait for completion
    while True:
        status = requests.post(f"{RC_URL}/job/status", auth=RC_AUTH,
                              json={"jobid": jobid}).json()
        if status.get("finished"):
            # Get final stats
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

**アップタイム監視用のヘルスチェックエンドポイント:**

RC APIは、Uptime KumaやHealthchecks.ioのような監視ツール向けのヘルスチェックエンドポイントとしても利用できます。

```bash
# Simple health check - returns 200 if rclone is running
curl -s -o /dev/null -w "%{http_code}" http://localhost:5572/rc/noop
```

これを監視スタックに組み込むことで、rcloneデーモンがダウンした際にアラートを受け取ることができます。

## セキュリティのベストプラクティス

特にネットワーク経由でRC APIを公開する場合、セキュリティは非常に重要です。

**認証:** 本番環境では必ず`--rc-user`と`--rc-pass`を使用してください。ネットワークからアクセス可能なインターフェースで`--rc-no-auth`を使って実行してはいけません。

**TLS暗号化:** `--rc-cert`と`--rc-key`を使ってAPI通信を暗号化しましょう。自己署名証明書は内部利用には十分ですが、外部公開するインスタンスにはLet's Encryptを使用してください。

**ネットワーク制限:** ローカルアクセスのみが必要な場合は、localhostにバインドします。

```bash
rclone rcd --rc-addr 127.0.0.1:5572
```

リモートアクセスが必要な場合は、rcloneを直接公開するのではなく、適切なTLS終端とレート制限を備えたリバースプロキシ(nginx、Caddyなど)を使用してください。

**ファイアウォールルール:** RCポートへのアクセスを制限します。

```bash
# Allow only specific IPs
sudo ufw allow from 192.168.1.0/24 to any port 5572
```

**トークンベース認証の代替案:** スクリプトでは、認証情報をハードコードするのではなく、環境変数に格納することを検討してください。

```bash
export RCLONE_RC_USER="admin"
export RCLONE_RC_PASS="your-secure-password"
```

## はじめに

Rclone RC APIは、RcloneViewを単なるスタンドアロンアプリケーションから、クラウドストレージ自動化を構築するためのプラットフォームへと変貌させます。シンプルな転送監視、複雑な複数リモートのオーケストレーション、既存のDevOpsツールチェーンとの統合など、どのような用途であってもRC APIがその基盤となります。まずRCデーモンを有効にし、`core/stats`や`operations/list`を試してレスポンス形式を理解した上で、手動介入なしに日常的なクラウドストレージ作業を処理する自動化ワークフローへと段階的に発展させていきましょう。

---

**関連ガイド:**
- [ジョブの実行と管理](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [リアルタイム転送監視](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [外部Rcloneを使ったRcloneViewの利用](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />

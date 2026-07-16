---
slug: backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview
title: "RcloneViewでDropboxをBackblaze B2にバックアップして手頃な長期ストレージを実現"
authors:
  - tayson
description: "RcloneViewを使って、DropboxのデータをBackblaze B2に低コストでバックアップ——スケジューリングと検証を自動化して大切なデータを保護します。"
keywords:
  - dropbox backup to backblaze
  - dropbox to b2
  - backup dropbox cheap
  - dropbox backblaze b2 sync
  - dropbox long-term backup
  - affordable cloud backup
  - dropbox data protection
  - dropbox to backblaze transfer
  - dropbox rclone backup
  - cheap dropbox backup solution
tags:
  - RcloneView
  - dropbox
  - backblaze-b2
  - cloud-storage
  - backup
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでDropboxをBackblaze B2にバックアップして手頃な長期ストレージを実現

> Dropboxは日常的な同期には優れていますが、長期バックアップ用途には高コストです。Backblaze B2ならその数分の一の価格で済みます。RcloneViewが両者をつなぎ、バックアップを自動化します。

Dropboxはリアルタイムのファイル同期やコラボレーションに優れていますが、それだけをバックアップ手段とするのはリスクが高く、特に大容量のライブラリではコストもかさみます。Backblaze B2はS3互換のオブジェクトストレージを$0.006/GB/月で提供しており(ほとんどの競合の約1/3のコスト)、長期アーカイブに最適です。RcloneViewはこのギャップを埋め、DropboxからB2へのバックアップをスケジュールに沿って自動実行し、チェックサムで検証し、いつでも復元できるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜDropboxをBackblaze B2にバックアップするのか?

### コスト削減

| プロバイダー | TB/月あたりのコスト | 10 TB/年 |
|----------|-------------------|------------|
| Dropbox Business | 約$15/ユーザー(制限あり) | 変動 |
| Backblaze B2 | $6 | $72 |
| AWS S3 Standard | $23 | $276 |

B2の料金は、利用可能なクラウドバックアップ先の中でも最も安価な部類に入ります。

### Dropboxからの独立性

- **アカウントの問題** — Dropboxアカウントが停止または侵害されても、B2のバックアップには影響しません。
- **誤削除** — Dropboxのバージョン履歴には制限があります。B2は独立した安全網となります。
- **ランサムウェア対策** — ライフサイクルルールを設定した別個のB2バックアップは、不変の復旧ポイントとして機能します。

## バックアップの設定

### ステップ1: Dropboxを追加

1. **リモートを追加**をクリック → **Dropbox**を選択。
2. OAuthで認証します。
3. これでDropbox内のファイルを閲覧できるようになります。

### ステップ2: Backblaze B2を追加

1. **リモートを追加**をクリック → **Backblaze B2**(またはS3互換)を選択。
2. B2のApplication Key IDとApplication Keyを入力します。
3. これでB2バケットを閲覧できるようになります。

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and Backblaze B2 remotes" class="img-large img-center" />

### ステップ3: バックアップジョブを作成

1. **コピージョブ**を作成: Dropbox → B2バケット。
2. Dropbox側のファイルが削除された際にB2側も削除されてしまわないよう、同期ではなくコピーを使用します。
3. 初回バックアップを実行します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to B2 backup job" class="img-large img-center" />

### ステップ4: 検証

[フォルダ比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)を使って、すべてのファイルがB2に転送されたことを確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on B2" class="img-large img-center" />

### ステップ5: スケジュール設定

毎日自動でバックアップが実行されるよう設定します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Dropbox to B2 backups" class="img-large img-center" />

## 監視

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Dropbox to B2 transfer" class="img-large img-center" />

[Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control)または[Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)通知を追加すれば、バックアップの完了や失敗を把握できます。

## B2からの復元

復元が必要になった場合:

1. 逆方向のコピージョブを作成します: B2 → Dropbox(またはB2 → ローカルドライブ)。
2. フォルダ比較を使って、復元する特定のファイルを選択します。
3. RcloneViewが視覚的に転送を処理します——CLIは不要です。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**。
2. **Dropbox**と**Backblaze B2**をリモートとして追加。
3. **コピージョブを作成**し、初回バックアップを実行。
4. 毎日自動で保護されるよう**スケジュール設定**。
5. Dropboxのデータが手頃な価格で独立したバックアップを持っていることを知って、**安心して休みましょう**。

---

**関連ガイド:**

- [ブラウザベースのログイン(OAuth)でリモートを追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [フォルダの内容を比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

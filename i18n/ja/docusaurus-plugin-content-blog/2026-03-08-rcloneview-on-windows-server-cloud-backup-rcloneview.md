---
slug: rcloneview-on-windows-server-cloud-backup-rcloneview
title: "Windows Server で RcloneView を使って自動クラウドバックアップを行う方法"
authors:
  - tayson
description: "Windows Server 2019/2022 に RcloneView をセットアップして自動クラウドバックアップを行う方法。S3、Google Drive、Backblaze B2 へのサーバーデータバックアップを GUI でスケジュール設定できます。"
keywords:
  - rcloneview windows server
  - windows server cloud backup
  - windows server s3 backup
  - cloud backup windows server
  - automated server backup cloud
  - windows server google drive sync
  - server data backup tool
  - rclone windows server gui
  - cloud backup gui windows
  - windows server backup solution
tags:
  - windows-server
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Windows Server で RcloneView を使って自動クラウドバックアップを行う方法

> Windows Server はデータベース、ファイル共有、アプリケーションデータなど、重要な業務データを生成します。これらをクラウドストレージにバックアップするには、これまで PowerShell スクリプトを書く必要がありました。RcloneView は同じ作業をビジュアルなインターフェースで実現します。

Windows Server 環境を管理するシステム管理者には、信頼性の高いクラウドバックアップが必要です。rclone の CLI はスクリプトで威力を発揮しますが、RcloneView は視覚的なモニタリング、簡単なジョブ作成、バックアップを検証するための2ペインエクスプローラーを追加し、それでいて rclone 本来のパワーを損ないません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Windows Server にクラウドバックアップが必要な理由

### 3-2-1 バックアップルール

- データの **3つのコピー**。
- **2種類の異なるメディア**。
- **1つのオフサイト**コピー。

クラウドストレージはオフサイト要件を満たします。ローカルバックアップ(テープ、NAS、外付けドライブ)と組み合わせることで、データセンター全体が利用できなくなった場合でも、クラウドバックアップによって災害復旧が可能になります。

### 一般的なバックアップ対象

| データタイプ | ソース | 最適なクラウド先 |
|-----------|--------|------------------|
| ファイル共有 | ネットワークドライブ | S3, Backblaze B2 |
| SQL Server バックアップ | .bak ファイル | S3 Standard-IA |
| IIS ログ | ログディレクトリ | S3 Glacier |
| アプリケーションデータ | 各種 | Google Drive, OneDrive |
| VM スナップショット | Hyper-V エクスポート | Wasabi, B2 |

## Windows Server へのインストール

### 前提条件

- Windows Server 2019 または 2022。
- .NET 6 Runtime 以降。
- クラウドプロバイダーの API へのネットワークアクセス(アウトバウンド HTTPS)。

### RcloneView のインストール

1. [rcloneview.com](https://rcloneview.com/src/download.html) から Windows インストーラーをダウンロードします。
2. インストーラーを実行します。RcloneView は `C:\Program Files\RcloneView\` にインストールされます。
3. RcloneView は初回起動時に rclone を自動的にダウンロードします。

### クラウドリモートの設定

バックアップ先を追加します。

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Windows Server" class="img-large img-center" />

ヘッドレスサーバー(OAuth 用のブラウザがない場合)では、ワークステーション上でリモートを設定し、rclone の設定ファイルをサーバーにコピーすることができます。

## 自動バックアップの設定

### ステップ1: バックアップジョブを作成する

各バックアップソースごとにコピージョブを作成します。

- **ファイル共有** → S3 バケット。
- **SQL バックアップ** → Backblaze B2。
- **ログファイル** → S3 Glacier。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create server backup job" class="img-large img-center" />

### ステップ2: バックアップをスケジュールする

各ジョブを適切な頻度で実行するようスケジュールします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Windows Server backups" class="img-large img-center" />

推奨スケジュール:

| データタイプ | 頻度 | 時刻 |
|-----------|-----------|------|
| ファイル共有 | 毎晩 | 午前2時 |
| SQL バックアップ | 毎晩 | 午前3時(SQL バックアップジョブの後) |
| ログファイル | 毎週 | 日曜日 午前1時 |
| フルサーバー | 毎週 | 土曜日 午後11時 |

### ステップ3: 通知を設定する

Slack、Discord、Telegram(v1.3)経由で、バックアップの完了または失敗を通知します。

これはサーバーバックアップにとって極めて重要です。バックアップが失敗した場合、すぐに把握する必要があります。

### ステップ4: マルチステップワークフローにバッチジョブを使う

バッチジョブで操作を連結します。

1. SQL バックアップを S3 にコピー。
2. ファイル共有を Backblaze B2 にコピー。
3. ソースと転送先を比較して検証。
4. 通知を送信。

これらすべてが自動で、順番に実行されます。

## バックアップの進行状況を監視する

大きなバックアップ転送をリアルタイムで追跡します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor server backup progress" class="img-large img-center" />

## バックアップの整合性を検証する

各バックアップの後、フォルダ比較で検証します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Windows Server backup" class="img-large img-center" />

これにより、以下のような問題を検出できます。

- 転送が静かに失敗したファイル。
- ロックされたファイルの権限エラー。
- バックアップウィンドウ中に変更されたファイル。

## セキュリティに関する考慮事項

### バックアップを暗号化する

rclone の crypt リモートを使用して、アップロード前にすべてのサーバーデータを暗号化します。クラウドプロバイダーには暗号化されたブロブのみが保存されるため、クラウドアカウントが侵害された場合でも、サーバーデータは安全です。

### アクセスを制限する

- 最小限の権限を持つ専用のサービスアカウントで RcloneView を実行する。
- rclone の設定を暗号化して保存する(rclone は設定ファイルの暗号化をサポートしています)。
- S3 の IAM ポリシーを使用して、バックアップアカウントを特定のバケットに制限する。

### 保持ポリシー

クラウドストレージにライフサイクルルールを設定します。

- **S3**: 30日後に Glacier へ移行し、365日後に削除。
- **B2**: ライフサイクルルールを使用して自動クリーンアップ。
- 検出が遅れた問題からの復旧のために、少なくとも30日分のバックアップを保持する。

## 帯域幅の管理

サーバーバックアップはネットワークを飽和させる可能性があります。[帯域幅制限](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)を使用して、本番トラフィックへの影響を防ぎます。

- 業務時間中は利用可能な帯域幅の50%に制限する。
- 夜間のバックアップウィンドウ中は無制限にする。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. **Windows Server にインストール**します。
3. **クラウドストレージリモートを追加**します(S3、B2 など)。
4. **バックアップジョブを作成し、スケジュールを設定**します。
5. 失敗時のアラート用に**通知を設定**します。
6. フォルダ比較で**バックアップを検証**します。

サーバーデータはあなたのビジネスそのものです。バックアップを自動化して、夜はぐっすり眠りましょう。

---

**関連ガイド:**

- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [帯域幅制限を設定する](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />

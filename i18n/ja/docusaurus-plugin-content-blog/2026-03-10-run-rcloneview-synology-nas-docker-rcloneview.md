---
slug: run-rcloneview-synology-nas-docker-rcloneview
title: "Synology NASでRcloneViewを実行 — NASからのクラウドバックアップと同期"
authors:
  - tayson
description: "Synology NASをクラウドバックアップハブに変えましょう。RcloneViewをSynology NASと組み合わせて、自動クラウド同期、バックアップ、マルチクラウド管理を行う方法を解説します。"
keywords:
  - rcloneview synology nas
  - synology cloud backup
  - synology cloud sync alternative
  - synology rclone
  - synology nas s3 backup
  - synology google drive sync
  - synology multi cloud
  - nas cloud backup tool
  - synology automated backup
  - synology nas cloud manager
tags:
  - RcloneView
  - synology
  - nas
  - backup
  - cloud-storage
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology NASでRcloneViewを実行 — NASからのクラウドバックアップと同期

> あなたのSynology NASには、失うことのできない何テラバイトものデータが保存されています。Synology標準のCloud Syncは基本的な用途には十分ですが、マルチクラウド管理、スケジューリング、フォルダ比較、バッチジョブが必要になったとき、RcloneViewがそのギャップを埋めます。

Synology NASデバイスは、集中型のローカルストレージとして優れていますが、クラウド連携には限界があります。Synology Cloud Syncは約20のクラウドプロバイダーで基本的な同期をサポートします。Synology Hyper Backupはバックアップを扱いますが、マルチクラウドのファイル管理はできません。RcloneViewは70以上のクラウドプロバイダー、ビジュアルなファイル管理、高度な自動化でその両方を補完します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜSynologyにRcloneViewなのか

### Synology Cloud Syncを超えて

| 機能 | Synology Cloud Sync | RcloneView |
|---------|-------------------|------------|
| クラウドプロバイダー | 約20 | 70以上 |
| 2ペインファイルエクスプローラー | ❌ | ✅ |
| フォルダ比較 | ❌ | ✅ |
| クラウド間転送 | ❌ | ✅ |
| バッチジョブ | ❌ | ✅ |
| Slack/Discord通知 | ❌ | ✅ |
| フィルタルール | 基本のみ | rcloneフィルタを完全サポート |
| 暗号化リモート | ❌ | ✅（crypt） |
| クラウドドライブのマウント | ❌ | ✅ |
| S3互換プロバイダー | 限定的 | すべて対応 |

### Synology自動検出

RcloneViewはネットワーク上のSynology NASデバイスを自動検出します。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection" class="img-large img-center" />

手動でのネットワーク設定は不要です。

## セットアップの選択肢

### オプション1: デスクトップでRcloneViewを実行し、NASに接続する

最もシンプルな方法です。Windows/Mac/LinuxのデスクトップでRcloneViewを実行します。

1. Synology NASをリモートとして追加します（自動検出、またはSFTP/WebDAV経由）。
2. クラウドの転送先を追加します（S3、B2、Google Driveなど）。
3. NASとクラウド間の同期/コピージョブを作成します。
4. ジョブを自動実行するようスケジュールします。

家庭や小規模オフィスでの利用に適しています。

### オプション2: 専用マシンでRcloneViewを実行する

Raspberry Piや古いノートPCを専用のバックアップコントローラーとして使用します。

1. 専用マシンにRcloneViewをインストールします。
2. ネットワークマウント経由でSynology NASに接続します。
3. すべてのバックアップジョブを設定・スケジュールします。
4. 24時間365日稼働させたままにします。

## バックアップワークフロー

### NAS → クラウド（オフサイトバックアップ）

最も重要なワークフローです。NASをクラウドストレージにバックアップします。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup NAS to cloud" class="img-large img-center" />

推奨される転送先:

| NASのデータ | クラウドの転送先 | 理由 |
|----------|-------------|-----|
| 写真・動画 | Backblaze B2 | 安価、1TBあたり6ドル |
| ドキュメント | Google Drive | アクセスしやすく検索可能 |
| ビジネスデータ | AWS S3 | 耐久性が高くエンタープライズ向け |
| すべて（暗号化） | 任意 + crypt | ゼロ知識バックアップ |

### クラウド → NAS（ローカルミラー）

高速アクセスのためにクラウドデータのローカルコピーを保持します。

```
Google Drive → NAS/CloudMirror/GoogleDrive/
OneDrive → NAS/CloudMirror/OneDrive/
```

### NAS → NAS（遠隔地バックアップ）

2つの拠点にNASデバイスがある場合、クラウドプロバイダーを仲介ストレージとして、RcloneView経由でNAS同士を同期できます。

## 自動バックアップのスケジュール設定

夜間のNASバックアップを設定します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS cloud backup" class="img-large img-center" />

### 推奨スケジュール

| ジョブ | 頻度 | 時刻 |
|-----|-----------|------|
| 重要データ → B2 | 毎晩 | 午前2:00 |
| 写真 → Google Drive | 毎晩 | 午前3:00 |
| NAS全体 → S3 | 毎週 | 土曜深夜 |
| 検証（比較） | 毎週 | 日曜午前6:00 |

## バックアップの検証

NASの内容とクラウドバックアップを比較します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify NAS backup against cloud" class="img-large img-center" />

## NASデータの暗号化バックアップ

cryptリモートを使用して、クラウドストレージにアップロードする前にNASデータを暗号化します。クラウドプロバイダーは暗号化されていないファイルを一切参照できません。

## NAS管理者向けバッチジョブ

NASのバックアップ作業全体を自動化できます。

1. /photos → B2へコピー。
2. /documents → Google Driveへコピー。
3. /business → S3へコピー（暗号化）。
4. 3つすべてを比較。
5. Slackで通知。

これらすべてを1つのスケジュール済みバッチにまとめられます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Synology NASに接続**します（自動検出）。
3. **クラウドストレージのリモートを追加**します。
4. **バックアップジョブを作成し、スケジュール**します。
5. **フォルダ比較で検証**します。

あなたのNASデータは貴重です。オフサイトの安全網を用意しましょう。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [cryptリモートによるクラウドバックアップの暗号化](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

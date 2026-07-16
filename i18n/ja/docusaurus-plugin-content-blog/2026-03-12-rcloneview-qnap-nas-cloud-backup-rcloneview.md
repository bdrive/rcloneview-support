---
slug: rcloneview-qnap-nas-cloud-backup-rcloneview
title: "QNAP NASでRcloneViewを使う — NASのためのクラウドバックアップとマルチクラウド同期"
authors:
  - tayson
description: "QNAP NASユーザーは、RcloneViewを使ってS3、B2、Google Driveなどへのクラウドバックアップが可能です。QNAP NASからの接続、同期、バックアップ自動化の方法を解説します。"
keywords:
  - qnap cloud backup
  - qnap nas rclone
  - qnap cloud sync
  - qnap s3 backup
  - qnap google drive sync
  - qnap multi cloud
  - qnap nas cloud storage
  - qnap backup tool
  - qnap rcloneview
  - qnap automated backup
tags:
  - qnap
  - nas
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# QNAP NASでRcloneViewを使う — NASのためのクラウドバックアップとマルチクラウド同期

> QNAP NASデバイスは重要なデータをローカルに保存します。しかし、ローカルのみの保存はローカルのみのリスクを意味します — ハードウェア障害、火災、盗難、水害はすべてを失わせる可能性があります。RcloneViewによるクラウドバックアップは、70以上のクラウドプロバイダーによるオフサイト保護を追加します。

QNAP NASはHBS 3(Hybrid Backup Sync)を通じて組み込みのクラウド同期機能を提供していますが、そのクラウドプロバイダーのサポートはrcloneの70以上のプロバイダーと比較すると限定的です。QNAPに接続されたデスクトップまたは専用デバイスで動作するRcloneViewを使えば、rcloneがサポートするすべてのプロバイダーにアクセスでき、さらにビジュアル管理、フォルダー比較、バッチジョブも利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## QNAPをRcloneViewに接続する

### ネットワーク共有(SMB/CIFS)経由

RcloneViewを実行しているコンピューターからQNAPの共有フォルダーにアクセスします。QNAPの共有をネットワークドライブとしてマップし、RcloneViewのジョブでローカルソースとして使用します。

### SFTP経由

QNAPをSFTPリモートとして追加します:

1. QNAPでSFTPを有効にします(コントロールパネル → ネットワークとファイルサービス → Telnet/SSH)。
2. RcloneViewでQNAPのIPアドレスと認証情報を使ってSFTPリモートを追加します。

<img src="/support/images/en/blog/new-remote.png" alt="Add QNAP NAS as remote" class="img-large img-center" />

## バックアップワークフロー

### QNAP → Backblaze B2

月額$6/TBの手頃なオフサイトバックアップ:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup QNAP to B2" class="img-large img-center" />

### QNAP → AWS S3

重要なビジネスデータのためのエンタープライズグレードの耐久性。

### QNAP → Google Drive

Google Drive経由でNASファイルをコラボレーション用にアクセス可能にします。

### 毎晩のバックアップをスケジュールする

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule QNAP backup" class="img-large img-center" />

## バックアップを検証する

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify QNAP backup" class="img-large img-center" />

## QNAP HBS 3 と RcloneView の比較

| 機能 | QNAP HBS 3 | RcloneView |
|---------|-----------|------------|
| クラウドプロバイダー | 約15 | 70以上 |
| NAS上で直接動作 | ✅ | 接続されたデバイス上 |
| 2ペインエクスプローラー | ❌ | ✅ |
| フォルダー比較 | ❌ | ✅ |
| バッチジョブ | ❌ | ✅ |
| 通知 | Email | Slack/Discord/Telegram |
| 暗号化リモート | 限定的 | ✅ (crypt) |

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. ネットワーク共有またはSFTP経由で**QNAPに接続**します。
3. **クラウドバックアップ先を追加**します。
4. **自動バックアップをスケジュール**します。
5. フォルダー比較で**検証**します。

あなたのNASデータには、オフサイト保護が必要です。

---

**関連ガイド:**

- [Synology NASでのRcloneView](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

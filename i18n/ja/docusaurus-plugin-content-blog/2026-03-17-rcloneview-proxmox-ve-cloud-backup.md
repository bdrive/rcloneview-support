---
slug: rcloneview-proxmox-ve-cloud-backup
title: "Proxmox VE で RcloneView を実行 — 仮想マシンとコンテナのクラウドバックアップ"
authors:
  - tayson
description: "Proxmox VE は VM とコンテナをホストします。RcloneView を追加して、VM データ、ISO ライブラリ、設定をクラウドストレージにバックアップし、オフサイトの災害復旧に備えましょう。"
keywords:
  - proxmox cloud backup
  - proxmox rclone
  - proxmox offsite backup
  - proxmox ve cloud sync
  - proxmox backup s3
  - proxmox google drive backup
  - proxmox rcloneview
  - proxmox vm backup cloud
  - proxmox disaster recovery
  - proxmox cloud storage
tags:
  - RcloneView
  - platform
  - docker
  - backup
  - disaster-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proxmox VE で RcloneView を実行 — 仮想マシンとコンテナのクラウドバックアップ

> Proxmox VE は VM をローカルにバックアップします。しかし、ローカルバックアップだけではハードウェア障害、火災、盗難には対応できません。RcloneView を追加して VM バックアップをクラウドストレージに送り、完全な災害復旧を実現しましょう。

Proxmox VE は、ホームラボや本番環境で仮想マシンや LXC コンテナを実行する、最も人気のあるオープンソースハイパーバイザーの一つです。内蔵の Proxmox Backup Server はローカルバックアップを見事に処理しますが、ローカルのみのバックアップでは不十分です。RcloneView はクラウド層を追加し、VM バックアップ、ISO ライブラリ、設定エクスポートを S3、B2、Google Drive、その他任意のクラウドプロバイダーに送信します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜ Proxmox にクラウドバックアップが必要なのか

Proxmox のローカルバックアップは、VM の破損や誤削除から保護します。クラウドバックアップは以下から保護します。

- **ハードウェア障害** — サーバー全体が停止する
- **ランサムウェア** — ローカルバックアップが VM と共に暗号化される
- **物理的な災害** — 火災、洪水、盗難
- **サイト障害** — データセンターやホームラボが失われる

## デプロイオプション

### Proxmox 上の Docker コンテナ

Proxmox ホスト上の軽量な LXC コンテナ内で、RcloneView を Docker コンテナとして実行します。

### 専用の LXC コンテナ

バックアップストレージにアクセスできる、RcloneView 専用の最小限の LXC コンテナを作成します。

## 主要なワークフロー

### VM バックアップをクラウドに同期

RcloneView を Proxmox のバックアップストレージに向けて、クラウドに同期します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Proxmox backup to cloud" class="img-large img-center" />

### 夜間のオフサイトバックアップをスケジュール

Proxmox がローカルバックアップを作成した後、RcloneView がそれをクラウドに送信します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Proxmox cloud backup" class="img-large img-center" />

### ISO ライブラリのバックアップ

ISO コレクションやコンテナテンプレートは再作成が困難です。クラウドストレージにバックアップしておきましょう。

### バックアップの整合性を検証

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Proxmox backup" class="img-large img-center" />

### 機密性の高い VM データを暗号化

VM バックアップには機密データが含まれることがあります。アップロード前に crypt リモートを使用して暗号化しましょう。

## 推奨戦略

| データタイプ | クラウド階層 | 保持期間 |
|-----------|-----------|-----------|
| VM バックアップ（最近のもの） | S3 / B2 | 直近7日間 |
| VM バックアップ（アーカイブ） | S3 Glacier | 直近90日間 |
| ISO ライブラリ | B2 | 永続 |
| Proxmox 設定 | Google Drive | 直近30日間 |

## はじめに

1. **RcloneView をデプロイ**し、Proxmox 上のコンテナとして実行します。
2. バックアップ先の**クラウドアカウントを追加**します。
3. バックアップストレージを指す**同期ジョブを作成**します。
4. ローカルバックアップ完了後に**スケジュール**します。
5. フォルダ比較で**定期的に検証**します。

ローカルバックアップはミスからあなたを救います。クラウドバックアップは災害からあなたを救います。

---

**関連ガイド:**

- [Docker で RcloneView を実行](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [ランサムウェアからの保護](https://rcloneview.com/support/blog/protect-cloud-storage-ransomware-backup-rcloneview)
- [クラウドバックアップの暗号化](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

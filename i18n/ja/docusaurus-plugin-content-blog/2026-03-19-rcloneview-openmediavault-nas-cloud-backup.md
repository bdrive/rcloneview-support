---
slug: rcloneview-openmediavault-nas-cloud-backup
title: "OpenMediaVaultでRcloneViewを実行 — 自作NASのクラウドバックアップ"
authors:
  - tayson
description: "OpenMediaVaultはどんなPCでもNASに変えられます。DockerでRcloneViewを追加し、OMVの共有フォルダをクラウドストレージに同期してオフサイトバックアップとマルチクラウド管理を実現しましょう。"
keywords:
  - openmediavault cloud backup
  - openmediavault rclone
  - omv cloud sync
  - openmediavault s3 backup
  - omv rcloneview
  - openmediavault offsite backup
  - omv google drive
  - openmediavault docker rclone
  - diy nas cloud backup
  - omv backup solution
tags:
  - nas
  - docker
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenMediaVaultでRcloneViewを実行 — 自作NASのクラウドバックアップ

> OpenMediaVault(OMV)は、手頃なハードウェアで強力なNASを実現します。しかし、ローカルストレージだけでは安全とは言えません。RcloneViewを追加して、NASのデータをクラウドにプッシュし、災害復旧に備えましょう。

OpenMediaVaultは、DIYビルダーにとって定番のNAS OSです。古いPC、Raspberry Pi、専用ハードウェアなどで動かすことができます。RAID、SMB/NFS共有、Webインターフェースを備えていますが、クラウドバックアップは提供していません。RcloneViewはこのギャップを埋め、OMV上でDockerコンテナとして動作し、共有フォルダを70以上のクラウドプロバイダーに同期します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜOMV + RcloneViewなのか?

OMVの標準機能はローカルストレージの管理には優れていますが、クラウド連携は限定的です。RcloneViewは以下を追加します。

- **70以上のクラウドプロバイダー** — Google Drive、S3、B2、Wasabiなど
- **ビジュアルファイル管理** — NASとクラウドストレージを並べて閲覧
- **スケジュールバックアップ** — 自動化されたオフサイト保護
- **検証** — フォルダ比較機能でバックアップの整合性を確認
- **暗号化** — cryptリモートによるプライベートバックアップ

## Dockerでインストール

OMVはomv-extrasプラグインを通じてDockerをサポートしています。共有フォルダをボリュームとしてマウントし、RcloneViewをコンテナとして実行します。

## 主なワークフロー

### 共有フォルダをクラウドにバックアップ

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OMV to cloud backup" class="img-large img-center" />

### 夜間のオフサイトバックアップをスケジュール

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OMV backup" class="img-large img-center" />

### バックアップの整合性を検証

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OMV backup" class="img-large img-center" />

### 機密データを暗号化

cryptリモートを使用して、ネットワークを出る前にバックアップを暗号化します。

## 推奨セットアップ

| OMV共有 | バックアップ先 | スケジュール |
|-----------|-------------------|----------|
| Documents | Google Drive | 6時間ごと |
| Photos | Backblaze B2 | 毎晩 |
| Media | Wasabi | 毎晩 |
| System config | B2 | 毎週 |

## はじめに

1. omv-extras経由でOMVに**Dockerをインストール**します。
2. **RcloneViewをコンテナとしてデプロイ**します。
3. 共有フォルダをコンテナのボリュームとして**マウント**します。
4. **クラウドアカウントを追加**し、バックアップジョブを作成します。
5. **スケジュールを設定し、検証**します。

自作NASでも、プロ品質のクラウドバックアップを。

---

**関連ガイド:**

- [DockerでRcloneViewを実行](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [TrueNASでRcloneViewを実行](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [UnraidでRcloneViewを実行](https://rcloneview.com/support/blog/run-rcloneview-unraid-server-cloud-sync)

<CloudSupportGrid />

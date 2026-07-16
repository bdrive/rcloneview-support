---
slug: run-rcloneview-unraid-server-cloud-sync
title: "UnraidでRcloneViewを実行 — サーバーのためのクラウドバックアップとマルチクラウド同期"
authors:
  - tayson
description: "Unraidはホームおよび小規模ビジネス向けサーバーを簡単にします。DockerでRcloneViewを追加し、Unraidの共有をクラウドストレージに同期してオフサイトバックアップとマルチクラウド管理を実現しましょう。"
keywords:
  - unraid cloud backup
  - unraid rclone
  - unraid cloud sync
  - unraid rcloneview
  - unraid s3 backup
  - unraid google drive
  - unraid offsite backup
  - unraid docker cloud sync
  - unraid backup solution
  - unraid multi cloud
tags:
  - nas
  - docker
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# UnraidでRcloneViewを実行 — サーバーのためのクラウドバックアップとマルチクラウド同期

> Unraidはローカルストレージにおいて優れた選択肢です。しかし、パリティドライブは火災や盗難、ランサムウェアからは保護してくれません。RcloneViewを追加して、ビジュアルファイルマネージャーで共有をクラウドにバックアップしましょう。

Unraidは、家庭や小規模ビジネス向けサーバープラットフォームとして最も人気のあるものの一つです。パリティベースのストレージはドライブ障害から保護しますが、ローカルでの保護だけでは十分ではありません。真のデータ安全性のためには、オフサイトバックアップが必要です。RcloneViewはUnraid上でDockerコンテナとして動作し、サーバーにビジュアルなクラウド管理と自動バックアップ機能を追加します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜUnraid + RcloneViewなのか？

UnraidのCommunity Appsには基本的なrcloneプラグインが含まれていますが、多くの場合CLI専用であったり機能が限られています。RcloneViewが提供するのは次の通りです。

- **ビジュアルファイルブラウザ** — Unraidの共有をクラウドストレージと並べて表示
- **70以上のクラウドプロバイダー** — Unraidサーバーからあらゆるクラウドに接続
- **スケジュールバックアップ** — オフサイト保護を自動化
- **フォルダ比較** — バックアップの整合性を検証
- **暗号化バックアップ** — cryptリモートでデータのプライバシーを保護

## Docker経由でインストール

RcloneViewはUnraid上でDockerコンテナとして動作します。Community Apps経由でインストールするか、コンテナを手動で設定してください。

RcloneViewがデータにアクセスできるよう、Unraidの共有をボリュームとしてマッピングします。

## 主なワークフロー

### 共有をクラウドにバックアップ

片方のペインでUnraidの共有を開き、もう片方でクラウドストレージを開きます。重要なデータのバックアップジョブを作成します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Unraid to cloud backup" class="img-large img-center" />

### 毎晩のオフサイトバックアップをスケジュール

サーバーがアイドル状態の間に毎晩実行される自動バックアップを設定します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Unraid backups" class="img-large img-center" />

### バックアップの整合性を検証

パリティはローカルデータを保護します。フォルダ比較を使ってクラウドバックアップを検証しましょう。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Unraid backup" class="img-large img-center" />

### 機密データを暗号化

cryptリモートを使用して、データがサーバーを離れる前にバックアップを暗号化します。クラウドプロバイダーが暗号化されていないデータを見ることはありません。

### マルチクラウドバックアップ戦略

最大限の保護のために、2つのプロバイダーにバックアップします。

| 共有 | プライマリバックアップ | セカンダリバックアップ |
|-------|---------------|-----------------|
| Documents | Google Drive | Backblaze B2 |
| Media | Backblaze B2 | Wasabi |
| Photos | Google Photos (via Drive) | S3 |
| Appdata | B2 | S3 Glacier |

## バックアップを監視

ジョブ履歴を確認して、バックアップが正常に完了していることを確認します。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor backup jobs" class="img-large img-center" />

## 始め方

1. **RcloneViewをインストール** — Unraid上でDockerコンテナとして。
2. **共有をマッピング** — コンテナのボリュームとして。
3. **クラウドアカウントを追加** — リモートマネージャーで。
4. **バックアップジョブを作成** — 重要な共有のために。
5. **スケジュールと検証** — フォルダ比較で。

パリティはドライブ障害から保護します。クラウドバックアップはそれ以外のすべてから保護します。

---

**関連ガイド:**

- [DockerでRcloneViewを実行](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [TrueNASでRcloneViewを実行](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [NASを複数のクラウドにバックアップ](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />

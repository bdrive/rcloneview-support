---
slug: rcloneview-truenas-cloud-backup-sync
title: "TrueNASでRcloneViewを実行してクラウドバックアップとマルチクラウド同期を行う"
authors:
  - tayson
description: "TrueNASはローカルストレージ向けに構築されています。RcloneViewを追加してクラウドへ拡張しましょう — データセットをS3にバックアップし、プールをGoogle Driveと同期し、NASからマルチクラウドストレージを管理できます。"
keywords:
  - truenas cloud backup
  - truenas rclone
  - truenas cloud sync
  - truenas s3 backup
  - truenas google drive
  - truenas offsite backup
  - truenas rcloneview
  - truenas cloud storage
  - freenas cloud sync
  - truenas multi cloud
tags:
  - RcloneView
  - nas
  - platform
  - backup
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# TrueNASでRcloneViewを実行してクラウドバックアップとマルチクラウド同期を行う

> TrueNASはZFSによる堅牢なローカルストレージを提供します。しかし、ローカルストレージだけではバックアップ戦略として不十分です。RcloneViewを追加すれば、視覚的なファイルマネージャーでNASのデータセットをクラウドに同期できます。

TrueNAS(旧FreeNAS)は、ZFSによるデータ整合性で信頼を得ている、最も人気のあるNASオペレーティングシステムの一つです。しかし、ZFSはドライブ障害からは保護してくれますが、火災、盗難、ランサムウェア、サイト全体の災害からは守ってくれません。真のデータ保護のためには、オフサイトバックアップが必要です。RcloneViewはTrueNASのセットアップに視覚的なクラウド管理機能を追加し、70以上のクラウドプロバイダーへのデータセット同期を簡単にします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜTrueNAS + RcloneViewなのか?

TrueNASには基本的なCloud Sync Tasks機能が含まれていますが、その範囲は限定的でトラブルシューティングも困難です。RcloneViewは次を提供します。

- **視覚的なファイルブラウジング** — TrueNASのファイルとクラウドストレージを並べて表示
- **70以上のクラウドプロバイダー** — TrueNAS Cloud Syncがネイティブにサポートするよりもはるかに多い
- **フォルダ比較** — バックアップが完全かつ正確であることを検証
- **ジョブスケジューリング** — 監視機能付きの柔軟なスケジューリング
- **暗号化バックアップ** — ゼロ知識暗号化のためのcryptリモート

## 導入オプション

### Dockerコンテナ(推奨)

TrueNAS SCALE上でRcloneViewをDockerコンテナとして実行します。これが最もクリーンなアプローチで、ホストシステムから隔離されており、アップデートも容易です。

### 直接インストール

TrueNAS SCALE(Linuxベース)では、RcloneViewを直接インストールできます。TrueNAS CORE(FreeBSDベース)では、VMまたはjail経由のDockerアプローチを使用してください。

## 主要なワークフロー

### データセットをS3またはB2にバックアップ

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="TrueNAS to cloud backup" class="img-large img-center" />

一方のペインでTrueNASのデータセットを、もう一方のペインでクラウドストレージを閲覧します。重要なデータセットをBackblaze B2、AWS S3、またはWasabiにバックアップする同期ジョブを作成します。

### 夜間バックアップをスケジュール

クラウドのコピーを常に最新に保つために、自動化された夜間バックアップを設定します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS backup" class="img-large img-center" />

### バックアップの整合性を検証

ZFSのチェックサムはローカルデータを保護します。フォルダ比較を使用して、クラウドバックアップがNASと一致していることを検証します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup" class="img-large img-center" />

### アップロード前に暗号化

cryptリモートで機密性の高いNASデータを保護します。バックアッププロバイダーはファイルを読み取ることができません — 暗号化キーを保持するのはあなただけです。

### マルチクラウド冗長性

2つ以上のプロバイダーに同時にバックアップします。あるプロバイダーで障害が発生しても、データはもう一方で安全に保たれます。

## 推奨バックアップ戦略

| データタイプ | クラウド階層 | スケジュール |
|-----------|-----------|----------|
| 重要な文書 | S3 Standard | 6時間ごと |
| メディアライブラリ | Backblaze B2 | 毎晩 |
| アーカイブ | S3 Glacier | 週次 |

## はじめに

1. TrueNAS SCALE上でDockerを介して**RcloneViewをインストール**します。
2. リモートマネージャーで**クラウドアカウントを追加**します。
3. 重要なデータセット用に**バックアップジョブを作成**します。
4. フォルダ比較で**スケジュールと検証**を行います。

ZFSはローカルでデータを保護します。RcloneViewはそれ以外のあらゆる場所でデータを保護します。

---

**関連ガイド:**

- [DockerでRcloneViewを実行する](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [NASを複数のクラウドにバックアップする](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [クラウドバックアップを暗号化する — cryptリモートガイド](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

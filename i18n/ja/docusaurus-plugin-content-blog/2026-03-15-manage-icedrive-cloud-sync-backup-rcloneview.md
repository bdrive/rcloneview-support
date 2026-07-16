---
slug: manage-icedrive-cloud-sync-backup-rcloneview
title: "Icedrive クラウドストレージを管理 — RcloneView で同期・バックアップ"
authors:
  - tayson
description: "Icedrive はシンプルなインターフェースで手頃な価格のクラウドストレージを提供しますが、同期オプションは限られています。RcloneView を使えば、Icedrive を Google Drive、S3、その他 70 以上のプロバイダーと同期できます。"
keywords:
  - icedrive sync
  - icedrive backup
  - icedrive rclone
  - icedrive file manager
  - icedrive to google drive
  - icedrive alternative sync
  - icedrive cloud management
  - icedrive multi cloud
  - icedrive transfer tool
  - icedrive desktop sync
tags:
  - RcloneView
  - cloud-storage
  - sync
  - backup
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Icedrive クラウドストレージを管理 — RcloneView で同期・バックアップ

> Icedrive は手頃な価格とシンプルなデザインで人気を集めています。しかし、その同期機能は自社アプリに限定されています。RcloneView は Icedrive をより広いクラウドエコシステムに開放します。

Icedrive は、手頃な価格設定、有料プランでのゼロ知識暗号化、モダンなインターフェースを備えた魅力的なクラウドストレージの選択肢として台頭してきました。しかし、Icedrive の同期・連携オプションは自社のデスクトップアプリとモバイルアプリに限定されています。Icedrive を Google Drive と同期したい、S3 にバックアップしたい、あるいは Icedrive を他のクラウドアカウントと一緒に管理したいという場合、RcloneView が Icedrive の WebDAV 対応を通じてそのギャップを埋めます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Icedrive を RcloneView に接続する

Icedrive は有料プランで WebDAV 接続をサポートしています。RcloneView に WebDAV リモートとして追加しましょう。

<img src="/support/images/en/blog/new-remote.png" alt="Add Icedrive via WebDAV" class="img-large img-center" />

接続が完了すると、Icedrive のストレージが他のクラウドアカウントと並んで 2 ペインのエクスプローラーに表示されます。

## なぜ Icedrive で RcloneView を使うのか?

### クラウド間同期

Icedrive 自体のアプリはローカルマシンへの同期しかできません。RcloneView なら、Icedrive を Google Drive、OneDrive、S3、Dropbox、その他任意のプロバイダーと直接同期できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Icedrive cross-cloud sync" class="img-large img-center" />

### 自動バックアップ

冗長性を確保するため、Icedrive からセカンダリクラウドへの定期バックアップをスケジュールできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Icedrive backup" class="img-large img-center" />

### マルチクラウド管理

アプリを切り替えることなく、Icedrive のファイルを他のすべてのストレージと一緒に閲覧・管理できます。

### バックアップの検証

フォルダ比較機能を使って、Icedrive のバックアップが完全であることを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Icedrive backup" class="img-large img-center" />

## よくあるワークフロー

### Icedrive を手頃なストレージに、Google Drive をコラボレーションに

大容量ファイルやアーカイブは Icedrive に保存します(TB あたりの単価が安い)。作業中のドキュメントはチームでのアクセスのため Google Drive に同期します。

### Icedrive を B2 にバックアップ

Icedrive に問題が発生した場合に備え、Backblaze B2 にセカンダリバックアップを保持します。夜間のスケジュール同期で両方のコピーを最新の状態に保ちます。

### Icedrive への移行、または Icedrive からの移行

Dropbox や Google Drive から Icedrive への切り替えをお考えですか? RcloneView の 2 ペインドラッグ&ドロップですべてを転送できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. **Icedrive を WebDAV リモートとして追加**します(Icedrive の有料プランが必要です)。
3. 他のクラウドアカウントと**一緒に閲覧**します。
4. スケジュールジョブで**同期・バックアップ**します。

手頃なストレージ、無制限の接続性。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [隠れたクラウドストレージのコスト](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />

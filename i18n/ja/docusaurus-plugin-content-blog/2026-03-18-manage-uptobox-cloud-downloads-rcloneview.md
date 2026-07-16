---
slug: manage-uptobox-cloud-downloads-rcloneview
title: "Uptoboxファイルを管理 — RcloneViewでGoogle Drive、S3などに整理・同期"
authors:
  - tayson
description: "Uptoboxはファイルを保存できますが、同期やマルチクラウド連携機能がありません。RcloneViewを使ってUptoboxのストレージを整理・転送し、任意のクラウドプロバイダーにバックアップしましょう。"
keywords:
  - uptobox sync
  - uptobox file manager
  - uptobox to google drive
  - uptobox backup
  - uptobox rclone
  - uptobox cloud transfer
  - uptobox download organize
  - uptobox alternative sync
  - uptobox multi cloud
  - manage uptobox files
tags:
  - sync
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Uptoboxファイルを管理 — RcloneViewでGoogle Drive、S3などに整理・同期

> Uptoboxはファイルホスティングとして人気がありますが、基本的なアップロードやダウンロード以外のファイル管理機能は限られています。RcloneViewはUptoboxに接続し、マルチクラウドのワークフローに統合します。

Uptoboxは大容量のストレージクォータを備えたファイルホスティングを提供していますが、その管理ツールはアップロード、ダウンロード、共有リンクといった基本的なものにとどまります。Uptoboxを他のクラウドプロバイダーと同期したり、バックアップをスケジュールしたり、プラットフォームをまたいでファイルを整理したりする組み込みの方法はありません。RcloneViewはUptoboxに接続し、Google Drive、S3、OneDriveなど70以上のプロバイダーと並べて扱えるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## UptoboxをRcloneViewに接続する

<img src="/support/images/en/blog/new-remote.png" alt="Add Uptobox remote" class="img-large img-center" />

Uptoboxをリモートとして追加します。接続後は、2ペイン形式のエクスプローラーでファイルを閲覧できます。

## 主なワークフロー

### 散在したファイルを整理する

Uptoboxのストレージを閲覧し、ファイルをフォルダに整理します。ファイルをメインのクラウドにドラッグします。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Organize Uptobox files" class="img-large img-center" />

### 永続的なストレージにバックアップする

Uptoboxのアカウントには有効期限ポリシーがある場合があります。重要なファイルをGoogle DriveやS3にバックアップして、永続的に保持しましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Back up Uptobox files" class="img-large img-center" />

### 他のクラウドと統合する

Uptoboxを他のすべてのストレージと並べて表示します。どのプロバイダー間でもファイルを転送できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Uptobox multi-cloud view" class="img-large img-center" />

### 定期的な転送をスケジュールする

新しくアップロードされたUptoboxのファイルを、自動的にメインのクラウドに移動します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Uptobox sync" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Uptoboxをリモートとして追加**します。
3. ファイルを**閲覧・整理**します。
4. 永続的なストレージのために**メインのクラウドに同期**します。

ファイルホスティングをクラウドエコシステムの一部にしましょう。

---

**関連ガイド:**

- [1Fichierのファイルをダウンロード・整理する](https://rcloneview.com/support/blog/download-organize-1fichier-cloud-storage-rcloneview)
- [Premiumizeのクラウドダウンロードを同期する](https://rcloneview.com/support/blog/sync-premiumize-cloud-downloads-rcloneview)
- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />

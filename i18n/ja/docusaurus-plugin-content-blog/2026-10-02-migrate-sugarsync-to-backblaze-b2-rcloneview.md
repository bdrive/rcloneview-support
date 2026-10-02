---
slug: migrate-sugarsync-to-backblaze-b2-rcloneview
title: "SugarSync から Backblaze B2 への移行 — RcloneView でファイルを転送"
authors:
  - steve
description: "RcloneView で SugarSync から Backblaze B2 へファイルを移動します。両方のリモートを接続し、Dry Run で転送を確認し、Folder Compare で結果を検証します。"
keywords:
  - SugarSync Backblaze B2 移行
  - SugarSync B2 転送
  - SugarSync 移行
  - Backblaze B2 バックアップ
  - クラウド間移行
  - RcloneView SugarSync
  - SugarSync 代替ストレージ
  - rclone SugarSync B2
  - クラウド移行 GUI
  - オブジェクトストレージ バックアップ
tags:
  - RcloneView
  - sugarsync
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SugarSync から Backblaze B2 への移行 — RcloneView でファイルを転送

> 長年蓄積した SugarSync のフォルダーを、手作業でダウンロードして再アップロードすることなく Backblaze B2 のバケットへ移動します。

SugarSync を長く使ってきたチームは、バケットやアプリケーションキーを自動化しやすいオブジェクトストレージへアーカイブを移したいと考えることが多いものです。RcloneView はひとつのウィンドウで両方のサービスに接続できるため、フォルダーを SugarSync から Backblaze B2 へ直接コピーし、古いアカウントを閉じる前に結果を確認できます。FREE ライセンスで S3、Azure、Backblaze B2 に読み書きフルアクセスで接続できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

Remote タブを開き、New Remote をクリックします。アカウントの認証情報で SugarSync を追加し、次に Backblaze のキー管理ページで発行した Application Key ID と Application Key で Backblaze B2 を追加します。ターゲットが明確になるよう、先に Backblaze で宛先のバケットを作成しておきます。

SugarSync を片方の Explorer パネルに、B2 バケットをもう片方に配置します。設定を始める前に、両方を参照してアクセスできることを確認します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で SugarSync と Backblaze B2 のリモートを追加する様子" class="img-large img-center" />

## ドラッグ&ドロップまたは同期ジョブでコピーする

小さなフォルダーは、SugarSync パネルから B2 パネルへドラッグします。異なるリモート間のドラッグはコピーとして実行されるため、元のデータはそのまま残ります。完全な移行には 4 ステップの同期ウィザードを使います。ソースと宛先を選び、転送数を設定し、フィルターを追加し、必要に応じて PLUS ライセンスでスケジュールします。

宛先のデータが削除されないよう、最初の実行には Sync ジョブではなく Copy ジョブを使用してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView での SugarSync から Backblaze B2 へのクラウド間転送" class="img-large img-center" />

## プレビュー、監視、検証

まず Dry Run を実行します。コピーされるファイルが一覧表示されるので、データが移動する前にパスの誤りを見つけられます。ジョブの実行中は、Transferring タブで進捗、速度、ファイル数を確認できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring タブで SugarSync から B2 への転送を監視する様子" class="img-large img-center" />

完了したら Compare を開き、SugarSync と B2 を並べて表示します。左のみのファイルはまだ到着していないもので、比較ビューから直接コピーできます。Job History には各実行の記録が残ります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="SugarSync と Backblaze B2 の内容が一致していることを確認する Folder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. SugarSync と Backblaze B2 をリモートとして追加し、ターゲットのバケットを作成します。
3. Copy ジョブを作成し、Dry Run を実行してから転送を開始します。
4. SugarSync アカウントを閉じる前に、Folder Compare で検証します。

B2 に検証済みのコピーがあれば、古いサービスを安心して終了できます。

---

**関連ガイド:**

- [RcloneView で SugarSync から Google Drive と OneDrive へ移行](https://rcloneview.com/support/blog/migrate-sugarsync-google-drive-onedrive-rcloneview)
- [RcloneView で SugarSync ストレージを管理](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [RcloneView で Backblaze B2 ストレージを管理](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

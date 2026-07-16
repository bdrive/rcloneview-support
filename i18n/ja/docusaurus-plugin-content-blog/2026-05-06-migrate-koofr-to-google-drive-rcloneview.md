---
slug: migrate-koofr-to-google-drive-rcloneview
title: "Koofr から Google Drive への移行 — RcloneView でファイルを転送"
authors:
  - tayson
description: "RcloneView を使って Koofr から Google Drive へファイルを移動しましょう。ローカルへのダウンロードなしで、クラウドプロバイダー間で直接データを転送し、フォルダ構造を維持します。"
keywords:
  - migrate Koofr to Google Drive
  - Koofr to Google Drive transfer
  - RcloneView Koofr Google Drive migration
  - cloud to cloud migration tool
  - Koofr migration GUI
  - move files Koofr Google Drive
  - Koofr cloud migration
  - Google Drive import from Koofr
  - RcloneView cloud migration
  - Koofr file transfer tool
tags:
  - koofr
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr から Google Drive への移行 — RcloneView でファイルを転送

> RcloneView は Koofr のファイルを直接 Google Drive へ移動します — フォルダ構造を維持し、整合性を検証しながら、中間のローカルストレージを必要としません。

Koofr のヨーロッパ発プライバシー重視のストレージは、GDPR 準拠とデータレジデンシーを優先するユーザーに人気です。チームが Google Workspace へ移行し、Koofr のコンテンツを Google Drive に移す必要がある場合、RcloneView は両方のプロバイダーに同時に接続し、直接クラウド間で転送することで、この移行をクリーンに処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView で Koofr と Google Drive を接続する

移行を開始する前に、両方のプロバイダーをリモートとして追加します。Koofr の場合は、Remote タブ > New Remote に移動し、Koofr を選択して、Koofr の認証情報を使って接続を完了します。Google Drive の場合は、Google Drive を選択し、OAuth ブラウザ認証を完了します — Google Drive の OAuth フローは完全に自動化されており、API キーは不要です。

両方のリモートを設定すると、デュアルパネルのエクスプローラーで片側に Koofr、もう片側に Google Drive を表示できます。この視覚的な比較により、移行を計画しやすくなります。フォルダ構造を確認し、ネストされたディレクトリを特定し、Koofr のルート全体を移行するか、特定のサブフォルダのみを移行するかを決められます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Google Drive remotes in RcloneView" class="img-large img-center" />

## 移行用の同期ジョブを設定する

管理された、繰り返し実行可能な移行のために、RcloneView で名前付きの同期ジョブを作成します。

1. **ソース:** Koofr リモート（ルートまたは特定のフォルダ）を選択
2. **宛先:** Google Drive リモートと対象フォルダを選択
3. **ジョブ名:** `koofr-to-gdrive-migration` のようなわかりやすい名前を使用
4. **モード:** Koofr からファイルを削除せずに移動するには Copy を選択

大規模な共有ディレクトリを移行するチームの場合、**Max folder depth** フィルターを使うと、各階層を確認しながら最上位フォルダを個別に移行できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from Koofr to Google Drive in RcloneView" class="img-large img-center" />

## 転送前にドライランでプレビューする

RcloneView のドライランモードを使えば、実際にファイルを移動せずに移行の範囲をプレビューできます。ドライランの出力には、コピーされる予定のすべてのファイルがフォルダごとに一覧表示され、ジョブが何を行うのかを正確に把握できます。これは、ネストされた Koofr のフォルダ構造を移行する際、実行前に宛先のレイアウトを確認したい場合に特に便利です。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## 転送の進行状況を監視し、履歴を確認する

RcloneView の Transfer タブには、Koofr から Google Drive への移行のライブ進行状況が表示されます — 転送中のファイル、現在の速度、転送済みの総バイト数などです。完了後、Job History に完全なサマリーが記録されます。転送サイズの合計、所要時間、ファイル数、発生したエラーです。Google Drive の API レート制限によって転送が遅くなった場合、履歴ログにはそれらの再試行イベントも記録されます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Remote タブ > New Remote で Koofr と Google Drive をリモートとして追加します。
3. Koofr から Google Drive の宛先への Copy または Sync ジョブを作成します。
4. ドライランでプレビューしてから、移行を実行します。

Koofr から Google Drive への移行は、RcloneView を使えばシンプルなクラウド間操作です — ローカルのディスク容量は不要で、転送されるすべてのファイルを完全に把握できます。

---

**関連ガイド:**

- [Koofr ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Google Drive ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Koofr vs Jottacloud — RcloneView によるヨーロッパのクラウドストレージ比較](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />

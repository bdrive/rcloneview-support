---
slug: sync-wasabi-to-google-drive-rcloneview
title: "WasabiをGoogle Driveに同期 — RcloneViewでクラウドバックアップ"
authors:
  - morgan
description: "RcloneViewでWasabiをGoogle Driveに同期します。両方のリモートを接続し、Dry Runでプレビューし、一方向同期を実行して、Folder Compareで結果を検証します。"
keywords:
  - wasabiをgoogle driveに同期
  - wasabi google drive バックアップ
  - wasabi google drive 転送
  - RcloneView wasabi
  - RcloneView google drive
  - クラウド間同期
  - s3からgoogle drive
  - wasabi バケットのバックアップ
tags:
  - RcloneView
  - wasabi
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# WasabiをGoogle Driveに同期 — RcloneViewでクラウドバックアップ

> プレビュー可能な一方向同期で、Wasabiバケットの共同作業しやすい2つ目のコピーをGoogle Driveに保管します。

Wasabiはアーカイブやプロジェクトの成果物の保管先としてよく使われますが、それらのファイルを必要とする人たちはGoogle Driveで作業していることが少なくありません。両者を同期すれば、同僚がすでに使っている場所に読めるコピーが置かれ、片方のアカウントに問題が起きた場合に備えた2つ目の保管場所にもなります。RcloneViewは1つのウィンドウで両方のサービスを接続し、ジョブをプレビューし、結果を検証します。S3、Azure、Backblaze B2は、FREEライセンスで読み書きともに接続でき、ほかにも90以上のプロバイダーに対応しています。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

WasabiはrcloneのS3プロトコル経由で接続します。Access Key、Secret Key、お使いのWasabiリージョンのエンドポイントを入力してください。Google Driveはブラウザー経由のOAuthを使うため、RcloneViewがGoogleのサインインページを開き、アクセスを承認すると接続されます。

それぞれのリモートを別々のExplorerパネルで開きます。バケットとDriveのフォルダーツリーを並べて閲覧すれば、どのプレフィックスがどのフォルダーに対応するのかを正確に把握できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでWasabiとGoogle Driveのリモートを追加する" class="img-large img-center" />

## 同期ジョブを設定する

完成した編集済み動画のバケットを、プロデューサーが共有Driveフォルダーで見られるようにしたい動画スタジオを想像してください。Syncボタンからジョブを作成し、WasabiのプレフィックスをソースにDriveフォルダーを宛先に選び、英数字、ハイフン、アンダースコアを使ってジョブに名前を付けます。

一方向同期("Modifying destination only")は宛先をソースと一致させるため、Driveフォルダーにしか存在しないファイルは削除されます。Driveフォルダーに残したいファイルがある場合は、代わりにCopyジョブを使ってください。Advanced Settingsでは、同時に転送するファイル数の設定やチェックサム比較の有効化ができます。Google ドキュメント、スプレッドシート、スライドは通常のファイルではない点に注意してください。事前定義のGoogle Docsフィルターを使うと、これらを除外できて便利です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでのWasabiとGoogle Drive間のクラウド間転送" class="img-large img-center" />

## Dry Runでプレビューする

最初の本番実行の前に、Dry Runを使いましょう。何も変更せずに、コピーまたは削除されるファイルの一覧が表示されるため、ソースのプレフィックスの間違いや想定外の削除に気づく最も手軽な方法です。一覧が正しければジョブを実行し、Transferringタブで進行状況、速度、ファイル数を確認します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewで同期ジョブを実行する" class="img-large img-center" />

## 検証と繰り返し

同期後、2つの場所でFolder Compareを開き、片側にしかないファイルや差異が残っていないことを確認します。Job Historyには各実行のステータス、所要時間、サイズ、ファイル数が記録されるため、過去の実行を振り返ることができます。PLUSライセンスでは、crontab形式のスケジュールを追加して、コピーが自動で更新されるようにできます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewのFolder Compare画面" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Access Key、Secret Key、リージョンのエンドポイントでWasabiリモートを追加し、続けてブラウザーでのサインインでGoogle Driveを追加します。
3. WasabiのプレフィックスからDriveフォルダーへのSyncジョブを作成し、まずDry Runを実行します。
4. ジョブを実行し、Folder Compareで結果を確認します。

バケットのDriveコピーは、アーカイブをチーム全員が開ける資料に変えてくれます。

---

**関連ガイド:**

- [WasabiをOneDriveに移行](https://rcloneview.com/support/blog/migrate-wasabi-to-onedrive-rcloneview)
- [Dry Run — 転送前に同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [比較ファーストのワークフロー](https://rcloneview.com/support/blog/compare-first-workflow-rcloneview)

<CloudSupportGrid />

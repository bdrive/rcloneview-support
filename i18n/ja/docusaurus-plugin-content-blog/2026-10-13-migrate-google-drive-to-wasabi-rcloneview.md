---
slug: migrate-google-drive-to-wasabi-rcloneview
title: "Google DriveからWasabiへ移行 — RcloneViewでファイルを転送"
authors:
  - alex
description: "RcloneViewでGoogle DriveからWasabiへ移行します。クラウド間コピー、Dry RunとFolder Compareによる検証、S3互換アーカイブの維持方法を紹介します。"
keywords:
  - Google DriveからWasabiへ移行
  - google drive to wasabi
  - Google Drive Wasabi 転送
  - Google Drive アーカイブ S3
  - Wasabi 移行 GUI
  - クラウド間転送
  - rcloneview google drive wasabi
  - Google Driveをオブジェクトストレージへ移動
  - Google Drive バックアップ Wasabi
  - Wasabi バケット 同期
tags:
  - RcloneView
  - google-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google DriveからWasabiへ移行 — RcloneViewでファイルを転送

> 自分のディスクに一度ダウンロードすることなく、Google DriveをWasabiバケットへ移動またはアーカイブできます。

完成したプロジェクト2TBを保有するデザインスタジオが、それらをGoogle DriveからS3互換のオブジェクトストレージへ移したいと考えることがあります。RcloneViewはDriveからWasabiへ直接転送し、事前にDry Run、事後にFolder Compareを実行して、漏れがないことを確認できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

Google DriveはOAuthを使用します。**New Remote**から選択し、ブラウザでサインインします。WasabiはS3互換プロバイダーなので、Access Key、Secret Key、およびWasabiリージョンのエンドポイントを入力します。転送先となるバケットは、先にWasabiコンソールで作成しておいてください。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでGoogle DriveとWasabiのリモートを追加" class="img-large img-center" />

S3、Azure、Backblaze B2はFREEライセンスでも読み書きが可能で、Wasabiやその他のS3互換サービスも同様に動作します。

## Dry Runで転送を計画する

一方のExplorerパネルでGoogle Driveを、もう一方でWasabiバケットを開きます。一度きりの移動なら、パネル間でフォルダをドラッグします。異なるリモート間ではコピーが実行されます。大規模なライブラリの場合は、代わりにジョブを作成します。Step 1でソースと転送先を設定し、Step 2で同時転送数を調整し、Step 3でファイルサイズ、更新時期、種類によるフィルタリングができます。**Dry Run**を実行すると、コピーされるすべてのファイルをプレビューできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google DriveからWasabiへのクラウド間転送" class="img-large img-center" />

移行中は、Syncではなく**Copy**ジョブタイプを選択してください。Copyは転送先のファイルを一切削除しないため、結果を検証するまではより安全な選択です。

## 転送を監視する

ジョブを開始し、ウィンドウ下部のTransferringタブで進捗率、速度、ファイル数を確認します。Google Driveのレート制限で速度が落ちる場合は、ジョブの詳細設定で同時ファイル転送数を下げて再実行してください。コピー済みのファイルはスキップされます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneViewでWasabiへの転送を監視" class="img-large img-center" />

## クリーンアップ前に検証する

**Compare**を使って2つの場所を並べて表示します。フィルターで左のみ、右のみ、同一、相違のファイルを表示できるため、欠落があればすぐにわかります。比較結果に問題がなくなってから初めて、Google Driveのデータ削除を検討してください。Job Historyには各実行の記録が残ります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder CompareでGoogle DriveからWasabiへの移行を検証" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Google Drive(OAuth)とWasabi(Access Key、Secret Key、エンドポイント)をリモートとして追加します。
3. Driveからバケットへ向けたCopyジョブを作成し、Dry Runを実行します。
4. ジョブを開始し、Compareで結果を確認します。

自分で管理するバケットに検証済みのコピーがあれば、その後の整理作業のリスクは低くなります。

---

**関連ガイド:**

- [RcloneViewでWasabiストレージを管理する](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [OneDriveからWasabiへ移行](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [DropboxからWasabiへ移行](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />

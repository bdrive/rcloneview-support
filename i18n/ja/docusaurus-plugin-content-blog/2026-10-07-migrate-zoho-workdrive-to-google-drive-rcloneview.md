---
slug: migrate-zoho-workdrive-to-google-drive-rcloneview
title: "Zoho WorkDriveからGoogle Driveへ移行 — RcloneViewでファイルを転送"
authors:
  - kai
description: "RcloneViewでZoho WorkDriveからGoogle Driveへ移行：リージョンを選び、両方のリモートを接続し、Dry Run、クラウド間コピー、結果の検証まで行います。"
keywords:
  - Zoho WorkDriveからGoogle Driveへ移行
  - Zoho WorkDrive 転送
  - Zoho WorkDrive エクスポート
  - ZohoのファイルをGoogle Driveへ移動
  - クラウド間移行
  - RcloneView
  - rclone GUI
  - Zoho WorkDrive バックアップ
  - Google Drive 同期
  - フォルダ比較
tags:
  - RcloneView
  - zoho
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDriveからGoogle Driveへ移行 — RcloneViewでファイルを転送

> Zoho WorkDriveのチームフォルダを、プレビューと検証を挟みながらGoogle Driveへクラウド間で直接コピーします。

企業がZohoスイートからGoogle Workspaceへ移行する際、WorkDriveのチームフォルダも移す必要があります。すべてをダウンロードして再アップロードするのは時間がかかり、監査もしづらくなります。RcloneViewは両サービスを接続してクラウド間でファイルを転送するため、ひとつのウィンドウから移行のプレビュー、実行、検証ができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDriveとGoogle Driveを接続する

Zoho WorkDriveには追加の設定が1つ必要です。リモートを作成するときに**Region**を選択する必要があり、Zohoアカウントのデータセンターと一致していなければなりません。Google DriveはOAuthのブラウザログインを使います。Remoteタブを開いて**New Remote**をクリックし、各サービスを順に追加します。

基本的な同期とフォルダ比較はFREEライセンスで利用できます。

<img src="/support/images/en/blog/new-remote.png" alt="Zoho WorkDriveとGoogle Driveのリモートを作成" class="img-large img-center" />

## フォルダのマッピングを計画する

Explorerパネルを2つ開き、左にWorkDrive、右にGoogle Driveを表示します。チームフォルダを確認し、それぞれの移行先を決めます。たとえば、四半期レポート150 GBを持つ経理チームは専用の共有ドライブのフォルダに、個人ファイルはマイドライブに割り当てる、といった具合です。

大きなフォルダはGet Sizeで転送時間の目安をつけます。Syncウィザードのフィルタリングステップでは、古いアーカイブなど不要なフォルダやファイル形式を、ファイルの最大経過期間やカスタムフィルタで除外できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Zoho WorkDriveとGoogle Driveを並べて表示" class="img-large img-center" />

## Dry Run、そして転送

WorkDriveからGoogle DriveへのCopyジョブを作成し、まず**Dry Run**を実行します。Dry Runは何も変更せず、コピーされるファイルを一覧表示します。プレビューが問題なければジョブを実行し、Transferringタブで進捗を確認します。

エラーが発生した場合、ジョブは設定された回数までリトライし、Job Historyには実行ごとのステータス、サイズ、ファイル数が記録されます。再実行すると不足しているファイルだけがコピーされます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewで移行ジョブを実行" class="img-large img-center" />

## 検証して記録を残す

HomeタブからCompareを開き、WorkDriveとGoogle Driveを照合します。左のみに存在するファイルでフィルタして転送されなかったものを見つけ、コピーします。Job Historyには、移行の承認手続きに保管できるタイムスタンプ付きの記録が残ります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Zoho WorkDrive移行のJob History" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Zoho WorkDrive（正しいRegionを選択）とGoogle Driveのリモートを追加します。
3. Copyジョブを作成し、Dry Runで転送内容をプレビューします。
4. ジョブを実行し、WorkDriveを廃止する前にFolder Compareで検証します。

比較結果がクリーンになるまで移行元に手を加えないでおけば、切り替えのリスクを抑えられます。

---

**関連ガイド：**

- [Zoho WorkDriveのクラウド同期を管理](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Zoho WorkDriveをOneDriveへ同期](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [Zoho WorkDriveの同期エラーを解決](https://rcloneview.com/support/blog/fix-zoho-workdrive-sync-errors-rcloneview)

<CloudSupportGrid />

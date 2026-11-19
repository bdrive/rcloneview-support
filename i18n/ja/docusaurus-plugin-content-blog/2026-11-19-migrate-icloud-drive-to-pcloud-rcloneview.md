---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "iCloud DriveからpCloudへ移行 — RcloneViewでファイルを転送する"
authors:
  - jay
description: "RcloneViewでiCloud DriveのファイルをpCloudへ移動します。両方のクラウドを接続し、Dry Runでコピーをプレビューし、クラウド間で転送してFolder Compareで検証します。"
keywords:
  - iCloud Drive pCloud 移行
  - iCloud Drive pCloud 転送
  - iCloud Drive ファイル 移動
  - iCloud Drive 移行ツール
  - pCloud 移行
  - クラウド間転送
  - rcloneview icloud drive
  - rcloneview pcloud
  - rclone gui icloud drive
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud DriveからpCloudへ移行 — RcloneViewでファイルを転送する

> プレビュー、進捗確認、検証ができるコピージョブで、iCloud DriveのフォルダーをpCloudへ移しましょう。すべてを一度ローカルディスクに置く必要はありません。

iCloud DriveからpCloudへ移る理由は実用的なものです。Windows、Linux、Macが混在する家庭や、どのデスクトップでも同じように使える1つのストレージアカウントを求めるフリーランサーなどです。iCloud Driveには他のクラウドサービスへ書き出す標準機能がないため、多くの移行は「Macにすべてダウンロードしてから、もう一度アップロードする」作業になります。RcloneViewは両方のサービスに同時に接続し、rclone経由でファイルをコピーするため、1つのウィンドウからクラウド間で転送できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud DriveとpCloudをリモートとして接続する

iCloud Driveのサポートにはrclone v1.69以降が必要です。RcloneViewにはこの要件を満たす組み込みのrcloneバイナリが同梱されているため、追加でインストールするものはありません。Remoteタブを開いて**New Remote**をクリックし、iCloud Driveを選んでAppleアカウントの認証情報を入力します。次にpCloudを追加します。pCloudはブラウザのOAuthログインでサインインするため、APIキーを生成する必要はありません。

両方のリモートを接続したら、Explorerパネルを2つ並べて開きます。iCloud Driveの最上位フォルダーを右クリックして**Get Size**を選ぶと、移動するデータ量がわかります。その数値で、最初のファイルをコピーする前にpCloudのプランに空きがあるかを判断できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

## コピージョブを作成し、Dry Runでプレビューする

移行には**Copy**ジョブが慎重な選択です。pCloudにファイルを追加するだけで、そこにあるものは何も削除しません。削除も含めてpCloudをiCloud Driveと完全に一致させる必要がある場合のみ**Sync**を選びます。

Job Managerで、iCloud Driveのフォルダーをソース、pCloudのフォルダーを宛先としてジョブを作成します。Step 2ではリトライ設定をデフォルトの3のままにして、接続が切れても実行が終了しないようにします。Step 3では不要になったデータを除外できます。カスタムフィルターで`.iso`イメージや`.git/`フォルダーを除外し、最大ファイル経過時間で古い不要ファイルを残しておけます。

本番の転送の前に**Dry Run**を実行しましょう。たとえば顧客プロジェクト300 GBを移すデザイナーなら、Dry Runがコピーされるすべてのファイルを一覧表示するので、何時間もかかる転送を始める前にフォルダー構成を確認できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from iCloud Drive to pCloud in RcloneView" class="img-large img-center" />

## 転送を実行して進捗を追跡する

ジョブを開始し、進捗、速度、ファイル数を表示するTransferringタブを確認します。ライブラリが大きい場合は、最上位フォルダー（Documents、Desktop、プロジェクトフォルダー）ごとにジョブを1つずつ作成します。あるバッチが失敗しても、そのバッチだけを再実行すれば済みます。すべての実行はステータス、合計サイズ、ファイル数とともにJob Historyに記録されるため、何をいつ移したかの記録が残ります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed iCloud Drive to pCloud copy runs" class="img-large img-center" />

## Folder Compareで結果を検証する

**Compare**をクリックし、左にiCloud Driveのフォルダー、右にpCloudのフォルダーを開きます。左側のみのファイルと差異のあるファイルで絞り込んで取りこぼしを見つけ、**Copy right**で不足しているファイルを送ります。両側が同一と表示されたら、安心して古いストレージを整理できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing iCloud Drive and pCloud folders after migration" class="img-large img-center" />

## はじめに

RcloneViewは、Windows、macOS、Linuxで90以上のプロバイダーを1つのウィンドウからマウント・同期できます。

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. iCloud Drive（組み込みのrclone v1.69+を同梱）と、OAuthログインでpCloudを追加します。
3. iCloud DriveからpCloudへのCopyジョブを作成し、Dry Runで確認します。
4. ジョブを実行し、iCloudのプランを縮小する前にFolder Compareで結果を確認します。

フォルダーごとに検証する移行なら、すべてのフォルダーを漏れなくpCloudへ移せます。

---

**関連ガイド:**

- [iCloud Driveストレージを管理 — RcloneViewでファイルを同期・バックアップする](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [pCloudストレージを管理 — RcloneViewでファイルを同期・バックアップする](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [iCloud DriveからDropboxへ移行 — RcloneViewでファイルを転送する](https://rcloneview.com/support/blog/migrate-icloud-drive-to-dropbox-rcloneview)

<CloudSupportGrid />

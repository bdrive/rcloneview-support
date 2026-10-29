---
slug: migrate-dropbox-to-pcloud-rcloneview
title: "DropboxからpCloudへ移行 — RcloneViewでファイルを転送"
authors:
  - robin
description: "RcloneViewでDropboxのファイルをpCloudへ移動：両方のリモートを接続し、Dry Runを実行し、クラウド間コピーを行い、Folder Compareで検証します。"
keywords:
  - dropbox pcloud 移行
  - dropbox pcloud 転送
  - dropboxファイルをpcloudへ移動
  - dropbox pcloud マイグレーション
  - クラウド間転送
  - rcloneview dropbox
  - rcloneview pcloud
  - dropboxからpcloudへ乗り換え
  - dropboxデータの転送
tags:
  - RcloneView
  - dropbox
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DropboxからpCloudへ移行 — RcloneViewでファイルを転送

> 手作業でダウンロードしてからアップロードする代わりに、Dropboxアカウントを管理された検証可能な1回の作業でpCloudへ移しましょう。

プロバイダーを乗り換えるときは、通常、数ギガバイトをノートPCにダウンロードしてから再びアップロードすることになります。RcloneViewならそれを避けられます。DropboxとpCloudを並べて接続し、rcloneを介してクラウド間で転送を実行します。RcloneViewは、Windows、macOS、Linuxで、1つのウィンドウから90以上のプロバイダーをマウントおよび同期できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## DropboxとpCloudを接続する

どちらのサービスもRcloneViewではブラウザベースのOAuthログインを使うため、貼り付けるAPIキーはありません。Remoteタブを開き、**New Remote**をクリックしてDropboxを選択し、開いたブラウザウィンドウでアクセスを承認します。pCloudでも同様に繰り返します。チームアカウントを移行する場合、Dropbox for Businessには`dropbox_business = true`の設定が必要です。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewで新しいDropboxとpCloudのリモートを追加" class="img-large img-center" />

両方のリモートができたら、2つのExplorerパネルで開きます。DropboxのフォルダツリーとpCloudの宛先を並べて見ると、すべてを移すか、選択したフォルダだけを移すかを判断しやすくなります。

## 実行前にコピーを計画する

最初の移行には**Copy**ジョブを使用してください。ソース側では何も削除されないためです。4ステップのジョブウィザードで、ソースにDropbox、宛先に専用のpCloudフォルダを選びます。Advanced Settingsでは、大きな写真や文書ライブラリ向けにファイル転送数を増やしたり、ハッシュとサイズで検証したい場合にチェックサム比較を有効にしたりできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでDropboxからpCloudへのクラウド間転送" class="img-large img-center" />

フィルタリングも役立ちます。最大ファイルサイズを設定するか、`.git/`のような除外パターンを指定すれば、一時ファイルやビルドフォルダが他のファイルと一緒に転送されません。まず**Dry Run**を実行してください。どちらのアカウントにも触れずに、コピーされるファイルの一覧が表示されます。

## 実行、監視、検証

ジョブを開始し、Transferringタブで進捗、速度、ファイル数を確認します。DropboxにはAPIのレート制限があるため、大規模な転送は時々遅くなることがあります。RcloneViewは同期を諦めずに再試行します（デフォルトは3回）。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneViewで実行中の転送を監視" class="img-large img-center" />

ジョブが完了したら、DropboxとpCloudのフォルダで**Compare**を開きます。左側のみのファイルは届いていないもので、「different」のファイルはサイズが異なるものです。取りこぼしたファイルはワンクリックでコピーし、Job Historyで各実行のステータス、合計サイズ、ファイル数を確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="DropboxとpCloudの差分を示すFolder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **New Remote**でDropboxとpCloudをリモートとして追加します。
3. DropboxをソースにしたCopyジョブを作成し、Dry Runを実行します。
4. ジョブを実行し、古いアカウントを閉じる前にFolder Compareで検証します。

Compareで左側のみのファイルがなくなるまでDropboxはそのままにしておけば、元のデータをフォールバックとして残せます。

---

**関連ガイド:**

- [Manage Dropbox Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Manage pCloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrate pCloud to Google Drive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-google-drive-rcloneview)

<CloudSupportGrid />

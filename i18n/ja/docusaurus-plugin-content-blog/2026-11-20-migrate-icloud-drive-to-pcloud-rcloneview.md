---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "iCloud DriveからpCloudへ移行 — RcloneViewでファイルを転送する"
authors:
  - tayson
description: "RcloneViewでiCloud DriveのファイルをpCloudへ移動。両方のリモートを接続し、Dry Runでプレビューし、クラウド間の同期ジョブを実行して、フォルダー比較で確認します。"
keywords:
  - iCloud Drive から pCloud へ
  - iCloud Drive pCloud 移行
  - iCloud pCloud 転送
  - iCloud Drive ファイル 移動
  - pCloud 移行ツール
  - Windows・Linux向け iCloud Drive の代替
  - クラウド間移行 GUI
  - RcloneView iCloud Drive
  - RcloneView pCloud
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud DriveからpCloudへ移行 — RcloneViewでファイルを転送する

> Finderのウィンドウを行き来したり、途中で止まったブラウザーアップロードに悩まされたりせずに、iCloud DriveのライブラリをpCloudへ移しましょう。

iCloud Driveは、持っているデバイスがすべてApple製品であれば便利です。しかしWindowsノートPCやLinuxワークステーションが加わると、多くのユーザーはどのプラットフォームでも同じように使えるクラウドを探し始め、pCloudはよく選ばれる移行先です。RcloneViewは両方のサービスを1つのウィンドウで接続し、繰り返し実行できる同期ジョブでデータをコピーし、解約する前に結果を確認できるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud DriveとpCloudをリモートとして接続する

**Remote**タブを開き、**New Remote**をクリックします。**iCloud Drive**を選び、Appleアカウントの認証情報を入力して、Appleがデバイスに送る確認を完了します。rcloneのiCloud Driveバックエンドは高度なデータ保護（Advanced Data Protection）では動作しないため、Appleアカウントでこの設定をオフにする必要があります。iCloud Driveのサポートにはrclone v1.69以降が必要ですが、RcloneViewに同梱されている内蔵rcloneはこの要件を満たしているため、追加でインストールするものはありません。

次に**pCloud**を追加します。pCloudはOAuthを使うため、ブラウザーウィンドウが開いてサインインすると、リモートが自動的に保存されます。APIキーは不要です。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

両方のリモートを保存したら、左のExplorerパネルでiCloud Driveを、右のパネルでpCloudを開きます。移動するiCloudフォルダーを右クリックし、**Get Size**で開始前にデータ量を確認しましょう。

## Dry Runで移行をプレビューする

**Home**タブから同期ジョブを作成します。iCloud Driveのフォルダーを転送元に、`/From-iCloud`のような新しいpCloudフォルダーを転送先に設定します。iCloud Driveが変更されないよう、方向は一方向（「Modifying destination only」）のままにします。

実行する前に**Dry Run**をクリックします。RcloneViewは実際には何も移動せずに、コピーするすべてのファイルと転送先で削除されるものを一覧表示します。Macのバンドルフォルダー、`.DS_Store`ファイル、忘れていた古いスマートフォンのバックアップフォルダーなど、想定外のものを見つける好機です。持ち込みたくないものは、Step 3でカスタムフィルターを追加して除外してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and pCloud side by side in RcloneView for a cloud-to-cloud transfer" class="img-large img-center" />

これはAppleとpCloudの間のサーバー側コピーではないことに注意してください。データはRcloneViewを実行しているマシンを経由するため、有線接続とスリープしないコンピューターがあると、大規模な移行を一度で完了しやすくなります。

## 実行、監視、確認

ジョブを開始し、**Transferring**タブで進捗、ファイル数、現在の速度を確認します。接続が切れた場合は、同じジョブをもう一度実行します。同期は存在しないファイルや異なるファイルのみを転送するため、完了済みのファイルはスキップされます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring an iCloud Drive to pCloud transfer in the RcloneView Transferring tab" class="img-large img-center" />

ジョブが終わったら、左にiCloud Drive、右にpCloudを置いて**Compare**を開きます。「Show left-only files」と「Show different files」をオンにします。結果が空であれば移行は完了です。**Job History**には、各実行のステータス、サイズ、ファイル数が記録されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying the iCloud Drive to pCloud migration with RcloneView Folder Compare" class="img-large img-center" />

## はじめに

RcloneViewはWindows、macOS、Linuxで動作するため、移行が終わればどのコンピューターからでも新しいpCloudライブラリを管理できます。

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. iCloud Drive（Appleアカウントでサインイン）とpCloud（ブラウザーOAuth）をリモートとして追加します。
3. iCloud DriveからpCloudフォルダーへの一方向同期ジョブを作成し、**Dry Run**で確認します。
4. ジョブを実行し、iCloud側のコピーを整理する前に**Compare**で結果を確認します。

確認できて繰り返し実行できる移行なら、取り残されたファイルを心配せずにクラウドを乗り換えられます。

---

**関連ガイド：**

- [iCloud DriveからGoogle Driveへ移行 — RcloneViewでファイルを転送する](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [pCloudストレージを管理 — RcloneViewでファイルを同期・バックアップする](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [iCloud Driveの同期エラーを解決 — RcloneViewでの対処法](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />

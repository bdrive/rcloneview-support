---
slug: migrate-jottacloud-to-pcloud-rcloneview
title: "Jottacloud から pCloud へ移行 — RcloneView でファイルを転送"
authors:
  - casey
description: "RcloneView で Jottacloud のファイルを pCloud へ移します。両方のリモートを接続し、Dry Run でプレビューし、クラウド間転送を実行して、Folder Compare で検証します。"
keywords:
  - Jottacloud pCloud 移行
  - Jottacloud pCloud 転送
  - Jottacloud から pCloud への移行
  - クラウド間転送
  - RcloneView Jottacloud
  - RcloneView pCloud
  - Jottacloud ファイルの移動
  - Jottacloud の代替
  - rclone GUI 移行
tags:
  - RcloneView
  - jottacloud
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud から pCloud へ移行 — RcloneView でファイルを転送

> RcloneView なら、手動でのダウンロードと再アップロードの代わりに、プレビューと検証ができるクラウド間転送で Jottacloud のライブラリを pCloud へ移せます。

Jottacloud から pCloud へ乗り換えるとなると、何年分もの写真、ドキュメント、アーカイブを手作業でダウンロードしてアップロードし直すことになりがちですが、誰もそれを望んではいません。RcloneView は両方のサービスをリモートとして接続し、その間でデータを転送するため、1 つのウィンドウから移行のプレビュー、実行、検証ができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

Remote > New Remote を開いて Jottacloud を追加し、続けて pCloud を追加します。pCloud は OAuth を使うため、ブラウザウィンドウが開いてサインインすると、リモートが自動的に接続されます。Jottacloud も同じ New Remote ウィザードで、画面の指示に従って設定します。

それぞれのリモートを別々の Explorer パネルで開き、ルートフォルダを参照します。両側の一覧が表示されれば、データを移す前に接続が機能していることを確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で Jottacloud と pCloud のリモートを追加している画面" class="img-large img-center" />

## Dry Run で転送をプレビューする

左に Jottacloud、右に pCloud を置き、フォルダをドラッグして手早くコピーすることも、ライブラリ全体用の同期ジョブを作成することもできます。異なるリモート間のドラッグ&ドロップは移動ではなくコピーになるため、ご自身で判断するまで元のデータはそのまま残ります。

完全な移行には、4 ステップのウィザードでジョブを作成し、コピー元とコピー先のフォルダを選んで、まず Dry Run を実行します。何も変更せずに、コピーまたは削除されるファイルの一覧が表示されます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView での Jottacloud から pCloud へのクラウド間転送" class="img-large img-center" />

## ジョブを実行して進捗を確認する

ジョブを開始したら、Transferring タブで進捗、速度、ファイル数を確認します。大きなライブラリでは、ステップ 2 で転送数を控えめにし、短いネットワーク中断で実行が終わらないよう「Retry entire sync if fails」を 3 のままにします。

段階的に移行する場合は、フィルタリングのステップで、フォルダ、ファイルの経過期間、または Image や Document などの定義済みタイプで対象を絞り込みます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView で Jottacloud から pCloud への転送を監視している画面" class="img-large img-center" />

## 解約する前に検証する

Compare を開いて、Jottacloud と pCloud を並べて表示します。左のみのファイルと異なるファイルを表示して届いていないものを見つけ、それらだけをコピーします。古いアカウントを解約する前に、Job History で最終ステータスを確認してください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView の Folder Compare で移行を検証している画面" class="img-large img-center" />

## はじめに

1. **RcloneView をダウンロード**: [rcloneview.com](https://rcloneview.com/src/download.html) から入手してください。
2. Jottacloud と pCloud をリモートとして追加し、両方を参照します。
3. Jottacloud から pCloud への同期またはコピーのジョブを作成し、Dry Run を実行します。
4. ジョブを実行し、Folder Compare と Job History で確認します。

プレビューと検証を経た転送なら、すでにあるファイルを危険にさらすことなく、ストレージプロバイダーを切り替えられます。

---

**関連ガイド:**

- [RcloneView で Jottacloud を Google Drive に移行](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [RcloneView で pCloud を Dropbox に移行](https://rcloneview.com/support/blog/migrate-pcloud-to-dropbox-rcloneview)
- [Jottacloud ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

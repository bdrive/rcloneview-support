---
slug: migrate-box-to-dropbox-rcloneview
title: "BoxからDropboxへの移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewでBoxからDropboxへ移行。OAuthで両方のリモートを接続し、Dry Runでプレビューしてからクラウド間でフォルダーをコピーし、Folder Compareで検証します。"
keywords:
  - Box Dropbox 移行
  - BoxからDropboxへの移行
  - BoxからDropboxへファイル転送
  - Box Dropbox クラウド間転送
  - BoxフォルダーをDropboxへ移動
  - Dropbox for Business 移行
  - RcloneView Box Dropbox
  - rclone Box Dropbox GUI
  - クラウド移行ツール
tags:
  - RcloneView
  - box
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# BoxからDropboxへの移行 — RcloneViewでファイルを転送

> Boxのフォルダーツリーをクラウド間で直接Dropboxへ移し、変更前に範囲をプレビューし、結果を並べて確認しましょう。

チームがBoxからDropboxへ切り替える理由はさまざまです。合併、新しい取引先の要件、あるいはすでにDropboxを使っているクリエイティブ部門などです。難しいのは、何年分もの共有フォルダーを何も失わずに移すことです。RcloneViewは両方のサービスにリモートとして接続し、rcloneでコピーを実行するため、すべてを一度ノートPCにダウンロードすることなく、1つのウィンドウで移行の計画・実行・検証ができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## BoxとDropboxをリモートとして接続する

どちらのプロバイダーもOAuthを使うため、APIキーをコピーする必要はありません。**Remote tab > New Remote** を開いてBoxを選び、ブラウザが開いたらサインインします。Dropboxも同様に追加します。どちらかがビジネスアカウントの場合は、設定時に該当するオプションを指定してください。Box for Businessは `box_sub_type = enterprise`、Dropbox for Businessは `dropbox_business = true` です。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Dropbox remotes in RcloneView" class="img-large img-center" />

左のExplorerパネルでBoxを、右のパネルでDropboxを開きます。両方を並べて閲覧すれば、ジョブを作成する前に想定どおりのフォルダーが見えること、そして保存先フォルダーが存在することを確認できます。Boxのフォルダーを右クリックして **Get Size** を選ぶと、移動するデータ量を見積もれます。

## Copyジョブを作成してプレビューする

移行では **Copy** ジョブが慎重な選択です。Dropboxにファイルを追加するだけで、保存先のファイルは何も削除しません。**Home tab > Sync** またはJob Managerからジョブを作成し、Boxのフォルダーをソース、Dropboxのフォルダーを保存先に選び、`box-marketing-to-dropbox` のようなわかりやすい名前を付けます。

Advanced Settingsでは、この組み合わせではチェックサムをオフのままにしてください。BoxとDropboxはハッシュの種類が異なるため、rcloneは代わりにサイズと更新日時でファイルを比較します。Dropboxでレート制限がかかり始めたら、ファイル転送数を増やすのではなく減らしましょう。Filteringのステップでは、定義済みの **Box Docs** フィルターでBox独自のドキュメントを分けて扱え、カスタムルールで廃止すると決めたフォルダーをスキップできます。

まず **Dry Run** を実行しましょう。実際には転送せずにコピー対象のファイルをすべて一覧表示するので、代理店が60,000件の顧客アセットを移す際に関係者と範囲を確認したいときに役立ちます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Box to Dropbox in RcloneView" class="img-large img-center" />

## 実行・監視し、監査記録を残す

ジョブを開始し、**Transferring** タブで進捗、速度、ファイル数を確認します。大規模な移行をトップレベルのフォルダーごとのジョブに分ければ、1つのエラーで全体が止まることはありません。すべての実行はステータス、合計サイズ、ファイル数とともに **Job History** に記録され、移行を承認する担当者向けの記録としても使えます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Box to Dropbox migration runs" class="img-large img-center" />

## Folder Compareで検証する

ジョブが終わったら、BoxのソースとDropboxの保存先で **Folder Compare** を開きます。左側のみのファイルで絞り込んで届いていないものを見つけ、Copy rightで不足分を補います。まだBoxに保存する人がいる移行期間中は、最終切り替えの前に同じCopyジョブを再実行して新しいファイルを取り込みましょう。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Box and Dropbox contents" class="img-large img-center" />

## はじめに

マウント専用のツールとは異なり、RcloneViewは同期やフォルダー比較にも対応しており、FREE Licenseで利用できます。

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. 必要に応じてビジネス向けオプションを有効にし、OAuthでBoxとDropboxをリモートとして追加します。
3. BoxからDropboxへのCopyジョブを作成し、Dry Runで確認します。
4. ジョブを実行し、Folder CompareとJob Historyで結果を確認します。

プレビューと検証を経た移行なら、チームはどのフォルダーが取り残されたかを気にせずDropboxへ移れます。

---

**関連ガイド:**

- [Boxストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dropboxストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [RcloneViewでDropboxをBoxに同期する](https://rcloneview.com/support/blog/sync-dropbox-to-box-rcloneview)

<CloudSupportGrid />

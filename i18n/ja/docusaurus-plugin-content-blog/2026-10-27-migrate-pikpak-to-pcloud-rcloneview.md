---
slug: migrate-pikpak-to-pcloud-rcloneview
title: "PikPakからpCloudへ移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewでPikPakからpCloudへ移行：2つのリモートを接続し、Dry Runでプレビューし、クラウド間コピーを行い、Folder Compareで結果を検証します。"
keywords:
  - PikPak から pCloud へ移行
  - PikPak pCloud 転送
  - PikPak のファイルを pCloud に移動
  - PikPak pCloud 移行
  - RcloneView クラウド間転送
  - PikPak pCloud 同期
  - rclone GUI
  - クラウド移行ツール
  - pCloud ファイル転送
  - クラウド転送の検証
tags:
  - RcloneView
  - pikpak
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# PikPakからpCloudへ移行 — RcloneViewでファイルを転送

> PikPakのライブラリを、2つのクラウド間で直接pCloudへ移します。まずプレビューし、最後に検証まで行います。

PikPakは保存したダウンロードやメディアの置き場になりがちで、いずれはそれらを長期的な保管先へ移す必要が出てきます。すべてをノートPCにダウンロードしてからpCloudに再アップロードするのは、遅く不安定です。RcloneViewは1つのウィンドウで両方のサービスを接続し、直接転送します。ジョブはプレビュー、再実行、履歴での確認が可能です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## PikPakとpCloudをリモートとして追加する

**New Remote**を開き、まずPikPak、次にpCloudを追加します。pCloudはOAuthを使用します。ブラウザが開いてサインインすると、APIキーなしでリモートが接続されます。後でジョブ一覧が読みやすくなるよう、`pikpak-source`、`pcloud-dest`のように分かりやすい名前を付けてください。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでPikPakとpCloudのリモートを追加する" class="img-large img-center" />

両方のリモートを保存したら、それぞれをExplorerパネルで開きます。ソースと宛先を並べて参照すれば、何かを移動する前に正しいアカウントを見ているか確認できます。

## クラウド間でコピーする

PikPakパネルのフォルダをpCloudパネルへドラッグします。異なるリモート間のドラッグはコピーになるため、元のファイルは削除すると決めるまでPikPakに残ります。大きなライブラリの場合は、ドラッグよりも保存したCopyジョブのほうが適しています。接続が切れても再実行できるからです。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="PikPakからpCloudへのクラウド間転送" class="img-large img-center" />

RcloneViewは、Windows、macOS、Linuxで1つのウィンドウから90以上のクラウドストレージサービスを管理できるため、この移行にも、次に接続するサービスにも同じツールを使えます。

## Dry Runでプレビューする

SyncまたはJob Managerのウィザードからジョブを作成し、ソースと宛先のフォルダを選んで、本番の転送前に**Dry Run**を実行します。コピーされるファイルの一覧が表示されるため、フォルダの選び間違いをコストなしで見つけられます。移動するファイルを減らしたい場合は、フィルタリングのステップで最大ファイルサイズを設定するか、pCloudに置きたくないファイル形式を除外してください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewでコピージョブを実行する" class="img-large img-center" />

プレビューが問題なければジョブを実行し、Transferringタブで速度と進行状況を確認します。PikPakの応答が遅くなり始めたら、ファイル転送数を下げてください。

## Folder Compareで検証する

ジョブが終わったら、PikPakを左、pCloudを右にして**Compare**を開きます。左側のみのファイルをフィルタすると、届いていないものが分かるので、それらをコピーします。Job Historyには、各実行のステータス、サイズ、ファイル数が記録として残ります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="PikPakとpCloudのFolder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **New Remote**からPikPakとpCloudを追加します。
3. PikPakからpCloudへのCopyジョブを作成し、**Dry Run**を実行します。
4. ジョブを実行し、ソースで何かを削除する前に**Compare**で検証します。

プレビューと検証ができる移行は、きれいに完了すると信頼できる移行です。

---

**関連ガイド：**

- [PikPak から Google Drive へ移行](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [pCloud から Mega へ移行](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [PikPak クラウドダウンロードの管理](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)

<CloudSupportGrid />

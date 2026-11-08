---
slug: migrate-dropbox-to-koofr-rcloneview
title: "DropboxからKoofrへ移行 — RcloneViewでファイルを転送"
authors:
  - robin
description: "RcloneViewでDropboxからKoofrへ移行：2つのリモートを接続し、Dry Runを実行して、クラウド間コピーを行い、Folder Compareで結果を検証します。"
keywords:
  - DropboxからKoofrへ移行
  - Dropbox Koofr 転送
  - Dropbox Koofr 移行
  - RcloneView Dropbox
  - RcloneView Koofr
  - クラウド間転送
  - Dropboxからファイルを移動
  - Koofr ヨーロッパのクラウドストレージ
  - rclone GUI 移行
  - Dropbox for Business 移行
tags:
  - RcloneView
  - dropbox
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DropboxからKoofrへ移行 — RcloneViewでファイルを転送

> コピー前にプレビューし、コピー後に比較しながら、DropboxアカウントをKoofrクラウドへクラウド間で移行します。

デザイン事務所がクライアントのアカウントを整理するとき、あるいはフリーランサーがアーカイブをヨーロッパのプロバイダーにホストしたいときがあります。どちらの場合も、何千ものDropboxフォルダーをノートPC経由でドラッグして移すのは遅く、ミスも起きやすい作業です。RcloneViewはDropboxとKoofrを1つのウィンドウで接続し、その間のコピーを実行して、Dry RunとFolder Compareで結果を確認できます。RcloneViewは、Windows、macOS、Linuxで1つのウィンドウから90以上のプロバイダーをマウントおよび同期します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## DropboxとKoofrをリモートとして接続

Remoteタブを開き、New Remoteを選択します。DropboxはOAuthでサインインします。ブラウザーが開き、アクセスを承認するとRcloneViewが自動的に接続します。会社のアカウントの場合、Dropbox for Businessにはリモート設定で `dropbox_business = true` の設定が必要です。

2つ目のリモートとしてKoofrを追加します。両方がRemote Managerに表示されたら、2つのExplorerパネルに並べて開きます。何かを移動する前にソースとコピー先のツリーを確認しておくと、どのフォルダーが重要かが分かります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでDropboxとKoofrのリモートを追加" class="img-large img-center" />

## フィルターとDry Runでコピーを計画

ほとんどのDropboxアカウントには、移行したくない一時ファイルがあります。ジョブウィザードのステップ3では、最大ファイルサイズ、最大ファイル経過期間、フォルダー階層の深さ制限を設定できます。定義済みフィルターはMusic、Video、Image、Documentファイルに対応し、カスタムルールで `.git/` フォルダーや `.iso` ファイルなどのパターンを除外できます。

本番のジョブの前にDry Runを実行してください。どちら側も変更せずに、コピーまたは削除されるファイルの一覧を表示します。移行ではミラーリング同期ではなくCopyジョブを選び、Koofrに既に保存されているものが削除されないようにします。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでDropboxからKoofrへのクラウド間転送" class="img-large img-center" />

## 転送を実行して進捗を確認

ジョブを開始し、Transferringタブで進捗、速度、ファイル数を確認します。大きなライブラリの場合は、ステップ2でファイル転送数を増やしますが、どちらかのサービスの応答が遅い場合は、等価チェッカーの数は控えめにしてください。「Retry entire sync if fails」のデフォルトは3で、一時的なネットワークエラーを吸収します。

ライブラリが大きすぎて一度で終わらない場合は、Job Managerにジョブを保存して後で再実行します。Copyジョブは不足している、または異なるファイルのみを転送するため、2回目の実行は1回目が止まったところから再開されます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="TransferringタブでDropboxからKoofrへの転送を監視" class="img-large img-center" />

## Folder Compareで検証

ジョブが完了したら、左にDropbox、右にKoofrを置いてCompareを開きます。左のみ、右のみ、異なるファイルのフィルターで、残っているものを確認できます。右へコピーのアクションで、残りのファイルを転送します。Job Historyには実行ごとにステータス、サイズ、速度、ファイル数が記録されるため、移行の記録として役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="完了したDropboxからKoofrへの移行を示すJob History" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Dropbox（OAuth）とKoofrをリモートとして追加します。
3. フィルター付きのCopyジョブを作成し、Dry Runを実行します。
4. ジョブを実行し、Folder Compareで結果を確認します。

Compareで両側が一致することを確認するまで、Dropboxアカウントはそのままにしておきましょう。

---

**関連ガイド：**

- [Koofrストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [RcloneViewでKoofrからDropboxへ移行](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [RcloneViewでDropboxからpCloudへ移行](https://rcloneview.com/support/blog/migrate-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />

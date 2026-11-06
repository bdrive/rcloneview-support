---
slug: migrate-pcloud-to-jottacloud-rcloneview
title: "pCloudからJottacloudへ移行 — RcloneViewでファイルを転送"
authors:
  - alex
description: "RcloneViewでpCloudからJottacloudへ移行：2つのリモートを接続し、Dry Runでプレビューして、クラウド間コピーを行い、Folder Compareで検証します。"
keywords:
  - pCloudからJottacloudへ移行
  - pCloud Jottacloud 転送
  - pCloud Jottacloud 移行
  - RcloneView pCloud
  - RcloneView Jottacloud
  - クラウド間転送
  - pCloudからファイルを移動
  - ヨーロッパのクラウドストレージ移行
  - rclone GUI 移行
tags:
  - RcloneView
  - pcloud
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloudからJottacloudへ移行 — RcloneViewでファイルを転送

> pCloudのライブラリをJottacloudへクラウド間で移行します。最初にプレビューし、最後に検証を行います。

クライアントのアーカイブをまとめる写真家も、共有フォルダーを新しいプロバイダーに移す家族も、同じ作業に直面します。あるクラウドにある何千ものファイルを別のクラウドに移す作業です。すべてをノートPCにダウンロードして再びアップロードするのは遅く、不安定です。RcloneViewはpCloudとJottacloudを1つのウィンドウで接続し、その間のコピーを実行して、Dry RunとFolder Compareで結果を確認できます。RcloneViewは、Windows、macOS、Linuxで1つのウィンドウから90以上のプロバイダーをマウントおよび同期します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloudとJottacloudをリモートとして接続

Remoteタブを開き、New Remoteを選択します。pCloudはOAuthでサインインします。ブラウザーが開き、アクセスを承認するとRcloneViewが自動的に接続します。2つ目のリモートとしてJottacloudを追加するには、そのプロバイダーの画面上の案内に従ってください。

両方がRemote Managerに表示されたら、2つのExplorerパネルに並べて開きます。ソースとコピー先を先に確認しておくと、どのフォルダーを移動し、どこに置くかを決めやすくなります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでpCloudとJottacloudのリモートを追加" class="img-large img-center" />

## フィルターとDry Runでコピーを計画

ジョブウィザードのステップ3では、最大ファイルサイズ、最大ファイル経過期間、フォルダー階層の深さで転送を制限できます。定義済みフィルターはMusic、Video、Image、Documentファイルに対応し、カスタムルールで `.git/` フォルダーや `.iso` ファイルなどのパターンを除外できるため、インストーラーやディスクイメージを省くのに便利です。

本番のジョブの前にDry Runを実行してください。どちら側も変更せずに、コピーまたは削除されるファイルの一覧を表示します。移行ではミラーリング同期ではなくCopyジョブを選び、Jottacloudに既にあるものが削除されないようにします。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでpCloudからJottacloudへのクラウド間転送" class="img-large img-center" />

## 転送を実行して進捗を確認

ジョブを開始し、Transferringタブで進捗、速度、ファイル数を確認します。大きなライブラリの場合は、ステップ2でファイル転送数を増やしますが、どちらかのバックエンドの応答が遅い場合は、等価チェッカーの数は控えめにしてください。「Retry entire sync if fails」のデフォルトは3で、一時的なネットワークエラーを吸収します。

1回のセッションで終わらない場合は、Job Managerにジョブを保存して後で再実行します。Copyジョブは不足している、または異なるファイルのみを転送するため、繰り返し実行すると前回止まったところから再開されます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewでpCloudからJottacloudへのCopyジョブを実行" class="img-large img-center" />

## Folder Compareで検証

ジョブが完了したら、左にpCloud、右にJottacloudを置いてCompareを開きます。左のみ、右のみ、異なるファイルのフィルターで、まだ移動していないものを確認でき、右へコピーのアクションで残りのファイルを転送できます。Job Historyには実行ごとにステータス、サイズ、速度、ファイル数が移行の記録として残ります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="移行後のpCloudとJottacloudのフォルダーを比較" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. pCloud（OAuth）とJottacloudをリモートとして追加します。
3. フィルター付きのCopyジョブを作成し、Dry Runを実行します。
4. ジョブを実行し、Folder Compareで結果を確認します。

Compareで両側が一致することを確認するまで、pCloudアカウントはそのままにしておきましょう。

---

**関連ガイド：**

- [pCloudストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Jottacloudストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [RcloneViewでJottacloudからpCloudへ移行](https://rcloneview.com/support/blog/migrate-jottacloud-to-pcloud-rcloneview)

<CloudSupportGrid />

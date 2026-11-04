---
slug: migrate-box-to-koofr-rcloneview
title: "Box から Koofr へ移行 — RcloneView でファイルを転送"
authors:
  - jay
description: "RcloneView で Box から Koofr へ移行: 両方のリモートを接続し、転送を Dry Run で確認してからクラウド間コピーを実行し、Folder Compare で結果を検証します。"
keywords:
  - Box から Koofr へ移行
  - Box Koofr 転送
  - Box Koofr 移行
  - RcloneView Box
  - RcloneView Koofr
  - クラウド間転送
  - Box からファイルを移動
  - Koofr ヨーロッパのクラウドストレージ
  - rclone GUI 移行
  - Box Docs フィルター
tags:
  - RcloneView
  - box
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box から Koofr へ移行 — RcloneView でファイルを転送

> 自分のディスクに先にダウンロードすることなく、Box のワークスペースを Koofr に移せます。

チームが Box を離れる理由はさまざまです。プロジェクトが終了した、契約が終わった、あるいはヨーロッパのストレージプロバイダーを好むなどです。Koofr は自然な移行先ですが、何年分ものフォルダーを手作業で移すのは時間がかかり、ミスも起こりがちです。RcloneView は両方のサービスを 1 つのウィンドウで接続し、クラウド間でコピーを実行します。Dry Run と比較の手順で、漏れがないことも確認できます。RcloneView は Windows、macOS、Linux 上で、1 つのウィンドウから 90 以上のプロバイダーをマウントし、同期します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box と Koofr をリモートとして接続する

Remote タブを開き、New Remote を選択します。Box は OAuth でサインインします。ブラウザが開き、アクセスを承認すると、RcloneView が自動的に接続します。会社のアカウントを移行する場合、Box for Business ではリモート設定に `box_sub_type = enterprise` の設定が必要です。

Koofr も同じ方法で 2 つ目のリモートとして追加します。両方が Remote Manager に表示されたら、ファイルを 1 つも移す前に、2 つの Explorer パネルで並べて開き、移行元と移行先を確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で Box と Koofr のリモートを追加" class="img-large img-center" />

## フィルターと Dry Run でコピーを計画する

Box アカウントには、残したいファイル以外も入っていることがよくあります。同期ウィザードのステップ 3 では、最大ファイルサイズ、最大ファイル経過期間、フォルダー階層の深さの制限を設定できます。定義済みの Box Docs フィルターもあり、`.git/` フォルダーや `.iso` ファイルを除外するカスタムルールも設定できます。

何かを実行する前に、Dry Run を使いましょう。どちら側も変更せずに、コピーおよび削除されるファイルの一覧を表示します。移行では、ミラーリング型の同期ではなく Copy ジョブを選択すると、移行先にすでにデータがあっても Koofr 上のものが削除されません。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView での Box から Koofr へのクラウド間転送" class="img-large img-center" />

## 転送を実行して進行状況を確認する

ジョブを開始し、Transferring タブで進行状況を確認します。進捗、速度、ファイル数がライブで表示されます。大規模なライブラリの場合は、ステップ 2 でファイル転送数を増やしますが、どちらかのバックエンドの応答が遅い場合は equality checkers の数を控えめにしてください。"Retry entire sync if fails" のデフォルトは 3 で、一時的なネットワークエラーに役立ちます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring タブで Box から Koofr への転送を監視" class="img-large img-center" />

## Folder Compare で検証する

ジョブが完了したら、左に Box、右に Koofr を指定して Compare を開きます。左のみ、右のみ、差異のあるファイルのフィルターで、残っているものが正確に分かります。取りこぼしがあれば copy-right アクションで転送します。Job History には、各実行のステータス、サイズ、ファイル数が移行の記録として残ります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="移行後の Box と Koofr のフォルダーを比較" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Box（OAuth）と Koofr をリモートとして追加します。
3. フィルター付きの Copy ジョブを作成し、Dry Run を実行します。
4. ジョブを実行し、Folder Compare で結果を確認します。

Compare で両側が一致するまで、Box アカウントはそのままにしておきましょう。

---

**関連ガイド:**

- [Box ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Koofr ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [RcloneView で Box から Google Drive へ移行](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />

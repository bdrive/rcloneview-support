---
slug: migrate-hidrive-to-wasabi-rcloneview
title: "HiDrive から Wasabi へ移行 — RcloneView でファイルを転送"
authors:
  - morgan
description: "RcloneView で HiDrive から Wasabi オブジェクトストレージへファイルを移動します。両方のリモートを接続し、Dry Run、転送、Folder Compare での検証まで解説します。"
keywords:
  - HiDrive Wasabi 移行
  - HiDrive Wasabi 転送
  - HiDrive Wasabi 同期
  - RcloneView HiDrive
  - Wasabi S3 移行
  - クラウド間転送
  - HiDrive S3 バックアップ
  - rclone HiDrive Wasabi
  - HiDrive 移行ツール
  - Wasabi GUI
tags:
  - RcloneView
  - hidrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive から Wasabi へ移行 — RcloneView でファイルを転送

> HiDrive のアーカイブを Wasabi オブジェクトストレージへ移す、視覚的なワークフロー: 接続、プレビュー、転送、検証。

HiDrive は個人やチームのファイル保管場所として優れていますが、長期アーカイブは予測しやすい API アクセスを備えた S3 型のオブジェクトストレージに置くほうが適していることがよくあります。RcloneView は両方のサービスを 1 つのウィンドウで接続するため、すべてを自分のディスクにダウンロードすることなく、フォルダーをクラウド間で直接コピーできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDrive と Wasabi をリモートとして接続

HiDrive は OAuth を使用します。RcloneView がブラウザーを開き、サインインするだけで、別途 API キーなしでリモートが接続されます。Wasabi は S3互換のため、Access Key、Secret Key、バケットのリージョンに対応するエンドポイントを入力します。

Remote タブの New Remote から両方を追加します。次に、それぞれを Explorer パネルの左と右で開き、HiDrive のフォルダーと対象の Wasabi バケットを参照できることを確認します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で HiDrive と Wasabi のリモートを追加" class="img-large img-center" />

## Dry Run で転送を計画

デザインスタジオが完成したプロジェクトフォルダー 800 GB を HiDrive から移すケースを考えてみましょう。何かを変更する前に、転送をジョブとして作成します。ソースに HiDrive、宛先に Wasabi のバケットパスを選び、One-way「Modifying destination only」モードを使用します。

最初に Dry Run を実行します。変更を加えずに、コピーまたは削除されるファイルの一覧を表示するため、宛先フォルダーの間違いを見つける確実な方法です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView での HiDrive から Wasabi へのクラウド間転送" class="img-large img-center" />

## 設定を調整してジョブを実行

ウィザードの Step 2 でファイル転送数を設定し、ハッシュとサイズによる検証が必要な場合はチェックサム比較を有効にします。一時的なネットワーク障害で全体が中断しないよう、リトライ値はデフォルトの 3 のままにしてください。Step 3 のフィルターで、一時ファイルや `.git/` フォルダーなどを除外できます。

プレビューが問題なければジョブを実行し、Transferring タブで速度、進捗、ファイル数を確認します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring タブで HiDrive から Wasabi への転送を監視" class="img-large img-center" />

## Folder Compare で検証

ジョブの完了後、片側に HiDrive、もう片側に Wasabi を指定して Compare を開きます。左側のみのファイルでフィルターすると届いていないものが分かるので、不足分だけをコピーします。Job History にはステータス、所要時間、サイズ、ファイル数が記録され、移行ログとして使えます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare で HiDrive と Wasabi の内容が一致することを確認" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. HiDrive（ブラウザーログイン）と Wasabi（Access Key、Secret Key、エンドポイント）をリモートとして追加します。
3. HiDrive から Wasabi バケットへの片方向ジョブを作成し、Dry Run を実行します。
4. 転送を実行し、Folder Compare で検証します。

プレビューと検証を経た移行なら、すべてが Wasabi に届いたと確認できるまで HiDrive のファイルは手つかずのままです。

---

**関連ガイド:**

- [RcloneView で HiDrive を Amazon S3 に同期](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)
- [RcloneView で HiDrive から Backblaze B2 へ移行](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [Wasabi ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

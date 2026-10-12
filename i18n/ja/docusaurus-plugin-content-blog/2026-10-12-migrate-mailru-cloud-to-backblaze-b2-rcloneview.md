---
slug: migrate-mailru-cloud-to-backblaze-b2-rcloneview
title: "Mail.ru Cloud から Backblaze B2 へ移行 — RcloneView でファイルを転送"
authors:
  - morgan
description: "RcloneView で Mail.ru Cloud のファイルを Backblaze B2 に移動します。両方のリモートを接続し、Dry Run でプレビューして転送し、フォルダー比較で検証します。"
keywords:
  - Mail.ru Cloud から Backblaze B2 へ移行
  - Mail.ru Cloud バックアップ
  - Mail.ru Cloud to B2
  - Backblaze B2 移行
  - クラウド間転送
  - RcloneView 移行
  - Mail.ru Cloud rclone
  - Backblaze B2 へファイルを移動
tags:
  - RcloneView
  - mailru
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mail.ru Cloud から Backblaze B2 へ移行 — RcloneView でファイルを転送

> Mail.ru Cloud のライブラリを 1 つのウィンドウから Backblaze B2 オブジェクトストレージへコピーします。移動前にプレビューし、移動後に比較します。

長年のドキュメントや写真が Mail.ru Cloud にある場合、オブジェクトストアに 2 つ目のコピーを置けば独立したアーカイブになります。RcloneView は両方のサービスをリモートとして接続し、転送をクラウド間ジョブとして実行するため、ファイルを先にノート PC へダウンロードする必要はありません。FREE ライセンスで S3、Azure、Backblaze B2 に読み取り/書き込みの全機能で接続できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

Remote タブを開き、New Remote をクリックします。まず、そのプロバイダーの案内に従って Mail.ru Cloud を追加し、次に B2 コンソールで取得した Application Key ID と Application Key で Backblaze B2 を追加します。転送先となるよう、B2 でバケットを事前に作成しておいてください。

それぞれのリモートを別の Explorer パネルで開きます。左で Mail.ru Cloud のフォルダー、右で B2 のバケットを参照し、ジョブを作成する前に両方が応答することを確認します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で Mail.ru Cloud と Backblaze B2 のリモートを追加" class="img-large img-center" />

## 転送を計画する

すべてを移動するか一部だけにするかを決めます。たとえばプロジェクトフォルダー 400 GB をアーカイブするスタジオなら、最初に最上位フォルダー 1 つを試験的にコピーするとよいでしょう。同期ウィザードで Mail.ru Cloud をソース、B2 のバケットフォルダーを転送先に選び、英数字、ハイフン、アンダースコアでジョブ名を付けます。

移行には、ソースから何も削除しない Copy ジョブのほうが安全です。転送先をソースと完全に一致させたい場合のみ Sync を使用してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mail.ru Cloud から Backblaze B2 へのクラウド間転送" class="img-large img-center" />

## プレビュー、実行、監視

まず Dry Run を実行します。何も変更せずにコピーまたは削除されるファイルを一覧表示するため、転送先パスの誤りを早期に発見できます。その後ジョブを開始し、Transferring タブで進行状況、速度、ファイル数を確認します。

オブジェクトストレージは多数の並列アップロードをうまく処理しますが、コンシューマー向けクラウドはより厳しいことがあります。エラーが出る場合は、ウィザードのステップ 2 でファイル転送数を下げ、equality checkers を 4 以下に保ってください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView で Mail.ru Cloud から B2 への転送を監視" class="img-large img-center" />

## 検証して最新の状態に保つ

ジョブが完了したら、片側に Mail.ru Cloud、もう片側に B2 を指定してフォルダー比較を開きます。左のみと差異ありのファイルで絞り込み、届いていないものを見つけて、それだけをコピーします。Job History には各実行のステータス、所要時間、サイズ、ファイル数が記録されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Mail.ru Cloud と Backblaze B2 のフォルダー比較" class="img-large img-center" />

B2 のコピーを最新に保つには、ジョブを保存し、PLUS ライセンスがあればステップ 4 で crontab 形式のスケジュールを追加します。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Remote タブで Mail.ru Cloud と Backblaze B2 をリモートとして追加します。
3. Mail.ru Cloud から B2 バケットへの Copy ジョブを作成し、Dry Run を実行します。
4. 転送を開始し、フォルダー比較で検証します。

検証済みの B2 の 2 つ目のコピーにより、単一プロバイダーのライブラリがバックアップ済みのライブラリになります。

---

**関連ガイド:**

- [RcloneView で Mail.ru Cloud ストレージを管理する](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Backblaze B2 ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [RcloneView で Yandex Disk から Backblaze B2 へ移行する](https://rcloneview.com/support/blog/migrate-yandex-disk-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

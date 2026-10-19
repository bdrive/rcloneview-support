---
slug: migrate-wasabi-to-onedrive-rcloneview
title: "WasabiからOneDriveへ移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewでWasabiからOneDriveへ移行しましょう。両方のリモートを接続し、Dry Runでプレビューしてからバケットのデータをクラウド間でコピーし、Folder Compareで検証します。"
keywords:
  - Wasabi OneDrive 移行
  - Wasabi OneDrive 転送
  - Wasabi バケットを OneDrive へ移動
  - RcloneView Wasabi
  - RcloneView OneDrive
  - クラウド間移行
  - Wasabi OneDrive 同期
  - S3 から OneDrive へ
tags:
  - RcloneView
  - wasabi
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# WasabiからOneDriveへ移行 — RcloneViewでファイルを転送

> ダウンロードして再アップロードする遠回りの代わりに、プレビューと検証が可能なクラウド間コピーで、Wasabi バケットのデータを OneDrive に移動します。

プロジェクトのアーカイブを Wasabi に保管していたチームが、同僚がすでに Microsoft 365 で作業している OneDrive にそのデータを移す必要が出ることがあります。オブジェクトストレージとファイル同期サービスは動作が異なるため、何も考えずにコピーすると思わぬ結果になりかねません。RcloneView は 2 つのサービスを並べて接続し、Dry Run でジョブをプレビューし、その後に結果を検証します。FREE ライセンスで S3、Azure、Backblaze B2 を読み取り・書き込みの両方で接続でき、ほかの 90 以上のプロバイダーも利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wasabi と OneDrive を接続する

Wasabi は rclone の S3 プロトコル経由でアクセスするため、Access Key、Secret Key、および Wasabi リージョンのエンドポイントを入力します。OneDrive はブラウザ OAuth を使用します。RcloneView が Microsoft のログインページを開き、アクセスを承認すると、コピーすべきキーなしでリモートが接続されます。

2 つの Explorer パネルで両方のリモートを開きます。バケットと OneDrive のフォルダツリーを参照し、データの場所と移動先を把握しておきましょう。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で Wasabi と OneDrive のリモートを追加する" class="img-large img-center" />

## コピーを計画する

完成したプロジェクトのフォルダが入った複数のバケットを持つデザインスタジオを想像してください。すべてを一度に移すのではなく、ジョブごとに 1 つのバケットまたはプレフィックスをコピーします。短いジョブは再試行も確認も簡単です。

OneDrive にすでに残したいファイルがある場合は、Sync ではなく Copy を選んでください。片方向の同期では、コピー先がコピー元に一致するようになるためです。フィルターの手順では、ファイルサイズや期間の上限を設定したり、Document、Image、Video などの定義済みグループを使用したりできます。また、事前にファイル名を確認してください。オブジェクトキーには OneDrive が拒否する可能性のある文字や非常に長いパスが含まれることがあるため、Dry Run にかかる 1 分は十分に価値があります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="移行前に Wasabi と OneDrive のフォルダを比較する" class="img-large img-center" />

## 転送を実行する

手早く 1 回だけ行うなら、Wasabi パネルのフォルダを OneDrive パネルへドラッグします。異なるリモート間のドラッグは移動ではなくコピーなので、納得できるまでバケットはそのまま残ります。繰り返し実行する場合は、4 ステップのウィザード（ストレージ、詳細設定、フィルター、スケジュール）でジョブを保存します（スケジュールには PLUS が必要です）。

Transferring タブで速度、ファイル数、進行状況を確認します。大規模な実行中に OneDrive が遅くなる場合は、Advanced Settings で同時ファイル転送数を減らしてください。Sync ジョブは失敗すると実行全体を再試行します（デフォルト：3 回）。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Wasabi から OneDrive へのクラウド間転送" class="img-large img-center" />

## 検証して記録を残す

コピーが終わったら、両方のルートで Folder Compare を開きます。フィルターで左のみ、右のみ、同一、異なるファイルを表示でき、不足している項目はワンクリックでコピーできます。Job History には開始時刻、所要時間、ステータス、転送ファイル数が記録され、移行ログとしても使えます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Wasabi から OneDrive への移行のジョブ履歴" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Wasabi リモート（アクセスキー、シークレットキー、リージョンのエンドポイント）と OneDrive リモート（ブラウザでログイン）を追加します。
3. 1 つのプレフィックスで Dry Run を実行し、その後コピージョブを実行します。
4. Folder Compare で検証し、残りのバケットでも繰り返します。

段階的で検証済みの移行なら、バケットを廃止する前にすべてのファイルが確認済みの状態になります。

---

**関連ガイド：**

- [OneDrive から Wasabi へ移行](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Wasabi ストレージを管理する](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Dry Run：転送前に同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />

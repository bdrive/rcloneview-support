---
slug: sync-google-drive-to-koofr-rcloneview
title: "Google Drive を Koofr に同期 — RcloneView によるクラウドバックアップ"
authors:
  - alex
description: "RcloneView で Google Drive を Koofr に同期し、コマンドラインを使わずにヨーロッパでホストされたバックアップコピーを構成しましょう。"
keywords:
  - sync google drive to koofr
  - google drive koofr バックアップ
  - RcloneView koofr 同期
  - ヨーロッパ クラウドバックアップ google drive
  - koofr クラウドストレージ 同期
  - google drive koofr 移行
  - クロスクラウド同期ツール
  - koofr google drive 転送
  - クラウド間同期 rcloneview
tags:
  - RcloneView
  - google-drive
  - koofr
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive を Koofr に同期 — RcloneView によるクラウドバックアップ

> rclone コマンドを一切書かずに、Google Drive のヨーロッパホスト型ミラーを Koofr に維持しましょう。

EU拠点のクライアントを持つチームやデータ所在地の要件があるチームは、Google Drive コンテンツの2つ目のコピーをヨーロッパのインフラに置きたいと考えることがよくあります。EUを拠点とする Koofr はその役割に自然に適していますが、変更のたびにファイルを手動で再アップロードするのは持続可能ではありません。RcloneView は両方のアカウントを接続し、保存されたジョブとして同期を実行することで、手動でファイルを移動させることなく Koofr のコピーを最新に保ちます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive と Koofr を接続する

両方のリモートは、それぞれのプロバイダー固有のセットアップ方法を使用します: Google Drive は OAuth ブラウザログインで接続し、Koofr も Remote タブ > New Remote から同じ方法で追加します。両方が Remote Manager に表示されたら、Explorer パネルを2つ並べて開き — 1つは Google Drive、もう1つは Koofr — 自動化されたジョブを設定する前にドラッグ&ドロップでクイックテストコピーを試せます。2つのパネル間のドラッグは別々のリモートであるため、常に移動ではなくコピーになります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Koofr remotes in RcloneView" class="img-large img-center" />

## 同期ジョブを設定する

Home タブから同期ウィザードを起動し、Google Drive をソース、Koofr を宛先として設定します。一方向「宛先のみ変更」を選択すると、ソース側で誤って何かが削除されることなく、Koofr のコピーが常に Drive を反映します。ステップ2でチェックサム比較を有効にすると、ファイルが更新時刻ではなく内容で照合されるため、Drive に到達する前に複数の同期クライアントを経由するファイルにとって重要です。

RcloneView の 1:N 同期は、同じ Google Drive フォルダを Koofr と追加の宛先に同時にミラーリングできます — FREE ライセンスでも利用可能で、後で第2のバックアップ先を追加する際にジョブを再構築せずに済むので便利です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Google Drive to Koofr" class="img-large img-center" />

## 最初の同期の前に Dry Run を実行する

本格的な転送を行う前に Dry Run を実行して、どのファイルがコピーされるかを正確にプレビューし、Koofr から予期せず削除されるファイルがないことを確認しましょう。これは、宛先フォルダにすでにコンテンツがある Koofr アカウントに対して初めてジョブを実行する際に特に役立ちます。競合が実際の上書きになる前に明らかにしてくれるためです。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Google Drive to Koofr in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** してください。
2. Google Drive と Koofr の両方をリモートとして追加します。
3. チェックサム比較を有効にした一方向同期ジョブを作成します。
4. Dry Run を実行してから、ジョブを実行して最初の Koofr ミラーを構築します。

常時稼働する Google Drive から Koofr への同期は、数回のクリックで再実行できるヨーロッパホスト型バックアップを提供するため、復旧用コピーがジョブの再構築に依存することはありません。

---

**関連ガイド:**

- [Koofr から Google Drive への移行 — RcloneView でファイルを転送](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Koofrストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr を Amazon S3 に同期 — RcloneView によるクラウドバックアップ](https://rcloneview.com/support/blog/sync-koofr-to-amazon-s3-rcloneview)

<CloudSupportGrid />

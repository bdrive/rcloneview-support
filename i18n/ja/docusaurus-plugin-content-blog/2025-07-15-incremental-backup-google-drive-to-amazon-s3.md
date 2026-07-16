---
slug: backup-google-drive-to-amazon-s3
title: RcloneViewでGoogle DriveをAmazon S3にバックアップする
authors:
  - jay
description: RcloneViewのポイント&クリック操作で、Google DriveのフォルダをAmazon S3にコピー。一度接続すればバックアップを実行し、安心のために複製を保管できます。
keywords:
  - rcloneview
  - google drive
  - amazon s3
  - cloud backup
  - cloud sync
  - rclone gui
tags:
  - google-drive
  - amazon-s3
  - cloud-backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでGoogle DriveをAmazon S3にバックアップする

> Google Driveでのチーム作業を止めず、Amazon S3に安全なコピーを保管しましょう。RcloneViewならクリックだけでバックアップ全体を完結でき、スクリプトもコマンドラインも不要です。

## この組み合わせが便利な理由

- **Google Drive** は、ドキュメント、シート、共有フォルダが日々やり取りされる場所です。
- **Amazon S3** はバージョニング、ライフサイクルポリシー、低コストのアーカイブ階層で、コピーを長年保持できます。
- **RcloneView** はデュアルペインのエクスプローラー、比較プレビュー、スケジュールジョブでこれらをつなぎ、何が移動しているかを常に把握できるようにします。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 始める前に

1. **重要なフォルダを選ぶ** – プロジェクトスペース、共有ドライブ、引き継ぎ用フォルダを確認しましょう。不要なキャッシュや一時フォルダはスキップします。
2. **S3バケットを作成または選択する** – リージョン、バケット名、デフォルト暗号化(SSE-S3またはSSE-KMS)を決定します。[AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)
3. **プロバイダーの制限を確認する** – GoogleはDrive APIの転送を**1ユーザーあたり1日750GB**、ファイルサイズは最大**5TB**に制限しています。大規模な移動は数日に分けて計画してください。[Google for Developers](https://developers.google.com/drive/api/guides/limits) [Google Help](https://support.google.com/drive/answer/37603)
4. **フォルダ構成をマッピングする** – `drive-backup/marketing/2025/` のようなS3プレフィックスを使うと、後でスナップショットを見やすくなります。
5. **アプリで一度確認する** – [リモートストレージの参照と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage) のエクスプローラーのスクリーンショットにざっと目を通し、レイアウトに慣れておきましょう。

## ステップ1 — RcloneViewで両方のサービスを接続する

1. **RcloneView** を開き、**`+ New Remote`** を押します。
2. **Google Drive** を選択してサインインし、リモートに `Drive-Main` のような分かりやすい名前を付けます。共有ドライブをバックアップする場合は、設定時に有効化してください。
3. **Amazon S3** の別のリモートを追加します。アクセスキー/シークレットを貼り付ける(またはIAMロールを引き受ける)、対象のバケットを選択し、`S3-Backup` と名付けます。
4. 両方のリモートがエクスプローラー内で並んで表示されることを確認します。おさらいが必要な場合は、[リモートマネージャーガイド](/howto/rcloneview-basic/remote-manager) に追加のスクリーンショットがあります。

<img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />

## ステップ2 — バックアップジョブを計画する

- **フォルダのドライラン**: 左側で `Drive-Main` を、右側で `S3-Backup` を開きます。小さなテストフォルダをドラッグして、転送ダイアログを確認します。
- **比較機能を使う**: 比較ツールはコピー前に新規・変更されたファイルをハイライトします。これは[フォルダ内容の比較](/howto/rcloneview-basic/compare-folder-contents)で紹介されているのと同じビューです。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare view in RcloneView before copying Google Drive files" class="img-medium img-center" />

## ステップ3 — 最初のバックアップを実行する

1. ツールバーで **Copy**(一回限り)を選ぶか、Drive上のデータを削除せずに宛先をDriveと同じ内容にミラーしたい場合は **Sync (copy direction)** を選びます。
2. `/Personal/` のようなフォルダをスキップしたい場合は、フィルタリングルールを追加します。
3. まず **Dry Run** を実行します。保留中の転送内容がわかりやすくまとめて表示されます。
4. **Start** をクリックします。ジョブモニターで進捗を確認できます — 転送済みバイト数、ファイル数、警告がすべてここに表示されます。

## ステップ4 — 継続コピーをスケジュールする

最初の実行結果が良好であれば:

1. 完了ダイアログからそのまま **ジョブ** として保存します。
2. **ジョブマネージャー** を開き、毎日または毎週のスケジュールを設定します。これは[ジョブのスケジュールと実行ガイド](/howto/rcloneview-advanced/job-scheduling-and-execution)と同じパターンです。
3. カレンダープレビューで時間を確認したら、あとはRcloneViewに任せましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Scheduling a backup job in RcloneView" class="img-medium img-center" />

## S3のコピーを整理しておく

- **ライフサイクルポリシー**: 90日以上経過したバックアップをGlacier Instant RetrievalやDeep Archiveに移動してコストを削減します。[AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)
- **バケットのバージョニング**: すべての上書きを保持したい場合は有効にしてください。RcloneViewの各実行がリストアポイントになります。
- **タグ**: `Team=Finance` や `Compliance=SOC2` のようなタグをオブジェクトに追加しておくと、課金や監査がシンプルになります。

[RcloneViewのクラウド間転送](/blog/Effortless-Cloud-to-Cloud-Transfers-&-Syncing)に関するブログでは、クラウドコピーのフィルタリングや整理についてさらに多くのアイデアを紹介しています。

## 安心して監視・復元する

- **ジョブ履歴**: すべての実行はバイト数、所要時間、エラーメッセージを記録します。監査担当者に求められたら、UIからそのままログをエクスポートできます。
- **クラウドダッシュボード**: S3 Storage LensやCloudWatchを使って、バケットの増加を確認します。[AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens.html)
- **復元手順**: S3で必要なスナップショットを選び、同じRcloneViewのジョブテンプレートを使ってDriveまたは別のバケットにコピーし戻します。

## 関連ガイド・リソース

- [RcloneViewでのGoogle OAuthクイックセットアップ](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Amazon S3リモートのセットアップ](/howto/remote-storage-connection-settings/s3) — 認証情報のスクリーンショット付きステップバイステップ解説。
- [リアルタイム転送モニタリング](/howto/rcloneview-basic/real-time-transfer-monitoring) — ジョブ進捗チャートの読み方を紹介。

## よくある質問

**Google Docs、シート、スライドもコピーされますか?**
はい。バックアップ実行時に、選択した形式(DOCX、XLSXなど)でRcloneViewがエクスポートします。

**750GBの1日あたりの上限に達した場合はどうなりますか?**
RcloneViewは分かりやすいメッセージとともに一時停止します。24時間待つか、別のGoogleサービスアカウントに切り替えてからジョブを再開してください。中断した箇所から再開されます。

**Amazon S3の代わりにWasabiやCloudflare R2を使えますか?**
もちろん可能です。RcloneViewでS3互換のリモートを設定し、プロバイダーのエンドポイントを指定してください。

**Google Driveのファイルを長期にわたって安全に、検索可能な状態で保管する準備はできましたか?**

<CloudSupportGrid />

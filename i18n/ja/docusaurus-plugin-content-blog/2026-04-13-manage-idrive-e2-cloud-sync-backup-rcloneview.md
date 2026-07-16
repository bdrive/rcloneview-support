---
slug: manage-idrive-e2-cloud-sync-backup-rcloneview
title: "IDrive E2 ストレージを管理 — RcloneView でファイルを同期・バックアップ"
authors:
  - tayson
description: "IDrive E2 を RcloneView に接続し、GUI で S3 互換バケットを管理しましょう。IDrive E2 を Google Drive、Amazon S3、その他のクラウドと簡単に同期できます。"
keywords:
  - IDrive E2
  - IDrive E2 sync
  - IDrive E2 backup
  - IDrive E2 RcloneView
  - IDrive E2 S3 compatible
  - IDrive E2 cloud management
  - IDrive E2 to S3
  - IDrive E2 to Google Drive
  - S3-compatible storage GUI
  - cloud storage sync
tags:
  - idrive-e2
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IDrive E2 ストレージを管理 — RcloneView でファイルを同期・バックアップ

> IDrive E2 を RcloneView に追加して、Google Drive、Amazon S3、Backblaze B2、その他90以上のクラウドストレージサービスと並べて S3 互換バケットを管理しましょう。

IDrive E2 は、コストパフォーマンスに優れた S3 互換オブジェクトストレージサービスで、Amazon S3 の手頃な代替手段を求める開発者や企業に人気があり、API 互換性も維持されています。RcloneView は S3 互換プロバイダーをサポートしているため、IDrive E2 のバケットを GUI に接続し、コマンドラインスクリプトを書くことなく同期、バックアップ、クロスクラウド移行を行えます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView で IDrive E2 を設定する

IDrive E2 は、アクセスキー ID、シークレットアクセスキー、選択したリージョンに紐づいたエンドポイント URL という標準的な S3 互換認証情報を使用します。これらの認証情報は、IDrive E2 のアカウントポータルから生成できます。取得したら、RcloneView を開き、リモートタブに移動して「新規リモート」をクリックします。プロバイダータイプとして Amazon S3 を選択し、IDrive E2 のエンドポイント URL と認証情報を設定します。

保存すると、IDrive E2 のリモートがファイルエクスプローラーに表示されます。バケットとオブジェクトを直接参照し、ファイルサイズと更新日時を確認し、右クリック操作でファイルのコピー、移動、削除、ダウンロードができます。パンくずリストのパスバーには、バケット内の現在の場所が表示され、深いフォルダ構造を移動する際にはオートコンプリートの候補が表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding IDrive E2 as a remote in RcloneView" class="img-large img-center" />

## IDrive E2 を他のクラウドと同期する

IDrive E2 を主要なバックアップ先として利用している組織は、地理的冗長性やプロバイダーのフェイルオーバーのために、重要なバケットをセカンダリプロバイダーに複製したいと考えることがよくあります。RcloneView ならこれを簡単に実現できます。IDrive E2 のバケットをソースとし、Amazon S3、Cloudflare R2、Google Drive を宛先とする同期ジョブを作成するだけです。

4ステップの同期ウィザードが設定を処理します。ストレージの選択、詳細な転送設定(同時転送数、チェックサム検証)、フィルタリングルール(大きなファイルや特定の拡張子の除外)、そしてオプションのスケジュール設定です。チェックサム検証を有効にすると、各オブジェクトが破損なく転送されたことを確認できます。これは特に、IDrive E2 に保存されているバイナリアーカイブやデータベースダンプにとって重要です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing IDrive E2 bucket to Amazon S3 with RcloneView" class="img-large img-center" />

スケジュール同期(PLUSライセンス)は、指定した間隔で IDrive E2 のレプリケーションを自動的に実行します。ジョブ履歴には、各実行の開始時刻、所要時間、転送されたファイル数、最終ステータスが記録され、外部スクリプトや cron ジョブを維持することなく永続的な監査証跡を得られます。

## アクティブな転送を監視する

大規模な IDrive E2 の同期を実行している間、RcloneView 下部の転送タブには、現在転送中のファイル、累計件数、全体の同期ステータスがリアルタイムで表示されます。必要に応じてこのビューから直接実行中のジョブをキャンセルでき、ログタブには発生したエラーのトラブルシューティング用にタイムスタンプ付きのエントリが記録されます。

大量のワークロードでは、同期ウィザードの詳細設定ステップにある「ファイル転送数」を調整することで、同時に転送されるオブジェクトの数を制御できます。マルチスレッド転送設定(デフォルト: 4)は、より大きなオブジェクトのチャンク分割アップロードを処理します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring IDrive E2 sync progress in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** します。
2. IDrive アカウントポータルから IDrive E2 のアクセスキー ID とシークレットアクセスキーを生成します。
3. RcloneView に、IDrive E2 のエンドポイントと認証情報を使って新しい S3 互換リモートを追加します。
4. 定期的なスケジュールで IDrive E2 のバケットをセカンダリストレージにバックアップする同期ジョブを作成します。

RcloneView を使えば、IDrive E2 のバケットも他のクラウドストレージと同じように管理できます。ファイルブラウザで確認でき、同期ジョブで設定でき、ジョブ履歴で監査できます。

---

**関連ガイド:**

- [RcloneView を使って IDrive E2 を Amazon S3 と Google Drive に同期する](https://rcloneview.com/support/blog/sync-idrive-e2-s3-google-drive-rcloneview)
- [RcloneView で Cloudflare R2 のクラウド同期を管理する](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [RcloneView で S3、Wasabi、Cloudflare R2 ストレージを一元管理する](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />

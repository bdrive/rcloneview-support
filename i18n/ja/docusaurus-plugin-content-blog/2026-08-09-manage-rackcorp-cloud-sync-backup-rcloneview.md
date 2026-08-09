---
slug: manage-rackcorp-cloud-sync-backup-rcloneview
title: "RackCorpオブジェクトストレージを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - morgan
description: "RackCorpのオブジェクトストレージをRcloneViewに接続し、90以上の他のクラウドプロバイダーと並べてクロスプラットフォームの同期、バックアップ、マウントを利用できます。"
keywords:
  - RackCorp ストレージ
  - RackCorp クラウドバックアップ
  - RackCorp RcloneView
  - S3互換オブジェクトストレージ GUI
  - RackCorp ストレージ同期
  - RackCorp バックアップ
  - オブジェクトストレージ ローカルドライブ マウント
  - マルチクラウド ファイルマネージャー
  - クラウドストレージ 同期ツール
  - オブジェクトストレージ バックアップソフト
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RackCorpオブジェクトストレージを管理する — RcloneViewでファイルを同期・バックアップ

> RackCorpのS3互換オブジェクトストレージを、他のクラウド、ローカルドライブ、NAS共有と同じウィンドウに統合しましょう。

すでにRackCorp上でインフラを運用しているチームは、バケットとの間でファイルを移動するためだけに別のS3クライアントを併用しなければならないことがよくあります。RcloneViewはRackCorpを他のリモートとまったく同じように扱うことで、この手間を取り除きます — 同じエクスプローラー内で、Google Drive、S3、ローカルディスクと並べて閲覧、同期、マウント、バックアップができます。マウント専用ツールとは異なり、RcloneViewはFREEライセンスでも同期とフォルダ比較(Folder Compare)を利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RackCorpをリモートとして追加する

RackCorpはrcloneのS3プロトコル経由でアクセスするため、他のS3互換サービスと同じ資格情報入力パターンでセットアップします: Access Key ID、Secret Access Key、そして正しいリージョンエンドポイントです。Remoteタブ > New Remoteを開き、S3互換オプションを選択して、RackCorpアカウントの資格情報を貼り付けてください。

保存すると、RackCorpは設定済みの他のリモートと並んでエクスプローラーパネルに独自のタブとして表示されます。バケットのパスを覚えておく必要はありません — フォルダツリーとパンくずバーで視覚的にナビゲートでき、内蔵のrcloneターミナルで必要な場合は右クリック > Copy Full Pathで`remote:bucket/path`形式の文字列を取得できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewで新しいS3互換リモートを追加する" class="img-large img-center" />

## RackCorpへの同期とバックアップ

リモートを接続したら、Syncウィザードで繰り返し実行できるバックアップジョブを作成します。Step 1ではローカルまたはクラウドのソースとRackCorpの宛先フォルダを設定し、Step 2では大規模データセット向けに同時転送数とマルチスレッド転送数を調整し、Step 3ではファイルタイプ、サイズ、または経過期間でフィルタを適用して、一時ファイルやキャッシュがバケットに送られないようにします。

転送を実行する前にまずDry Runを実行し、コピーまたは削除される正確なファイルをプレビューしましょう — これにより、実運用データに影響が及ぶ前にフォルダマッピングのミスを発見できます。繰り返し実行するジョブはJob Managerに保存しておくと、後でJob History上で転送ログとともに確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RackCorpストレージへのスケジュールバックアップジョブを設定する" class="img-large img-center" />

## RackCorpをローカルドライブとしてマウントする

RackCorpのオブジェクトを通常のファイルとして扱いたい場合は、バケットを仮想ドライブとしてマウントしてください。エクスプローラーでリモートフォルダを選択し、パネルツールバーのマウントアイコンをクリックして、VFSキャッシュモードを選択します — Writesモードは変更をローカルにバッファリングしてからアップロードする方式で、堅実なデフォルトです。

マウントされたバケットはMount Managerに表示され、そこでアンマウント、ネイティブファイルブラウザでの再オープン、あるいはメインウィンドウを前面に出さずにシステムトレイから直接マウントを切り替えることができます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Remote ExplorerからRackCorpバケットをローカルドライブとしてマウントする" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. RackCorpアカウントでAccess Key IDとSecret Access Keyを生成してください。
3. Remoteタブ > New Remoteを使って、RackCorpを新しいS3互換リモートとして追加してください。
4. ワークフローに応じて同期ジョブを作成するか、バケットを直接マウントしてください。

RackCorpがRcloneViewに接続されれば、それはもうコンテキストを切り替えて使う別のツールではなく、日常のバックアップルーティンにおけるもう一つの宛先になります。

---

**関連ガイド:**

- [Linodeオブジェクトストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)
- [Hetznerオブジェクトストレージを管理する — RcloneViewで同期・バックアップ](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)
- [RcloneViewでAmazon S3からCloudflare R2へ移行する](https://rcloneview.com/support/blog/migrate-amazon-s3-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />

---
slug: sync-storj-to-backblaze-b2-rcloneview
title: "StorjをBackblaze B2に同期 — RcloneViewでクラウドバックアップ"
authors:
  - alex
description: "RcloneViewでStorj分散ストレージのファイルをBackblaze B2に同期します。S3互換データの冗長なオフネットワークコピーを保持しましょう。"
keywords:
  - Storj から Backblaze B2
  - Storj 同期
  - Storj バックアップ
  - Backblaze B2 同期
  - 分散ストレージ バックアップ
  - Storj RcloneView
  - S3互換ストレージ 同期
  - クラウド間バックアップ
  - オブジェクトストレージ 冗長性
  - RcloneView 同期
tags:
  - RcloneView
  - storj
  - backblaze-b2
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# StorjをBackblaze B2に同期 — RcloneViewでクラウドバックアップ

> RcloneViewでStorj分散ストレージデータの冗長で集中管理されたコピーをBackblaze B2に保持しましょう — 1つのジョブで、非常に異なる2つのストレージアーキテクチャを扱います。

Storjは暗号化されたファイルシャードを独立したノードネットワークに分散させます。これは検閲耐性とコストの面で優れていますが、チームが保護の第二層として従来型の中央ホスト型バックアップを求めることが多いことも意味します。Backblaze B2はその役割をうまく果たします:シンプルな取得が可能な標準のS3互換バケットです。RcloneViewはS3互換リモートサポートを通じて両方に接続し、ローカルのステージングドライブなしで直接データを移動します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## StorjとBackblaze B2の接続

プロジェクトの設定方法に応じて、S3互換ゲートウェイエンドポイントとアクセス許可、またはネイティブのStorjアクセスキーペアを使用して、RcloneViewにStorjをリモートとして追加します。B2コンソールのApplication Key IDとApplication Keyを使用して、Backblaze B2を別途追加します。両方のリモートはExplorerパネルに並んで参照可能なファイルツリーとして表示されるため、同期ジョブを構築する前にバケット構造とオブジェクト数を確認できます。

RcloneViewはWindows、macOS、Linuxの1つのウィンドウから90以上のプロバイダーをマウントおよび同期するため、StorjとB2に使用するのと同じインターフェースで、すでにスタックにある他のクラウドも処理できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Storj and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 同期ジョブの構築

Storjバケットをソース、Backblaze B2バケットを宛先とする一方向同期ジョブを作成します — 「宛先のみを変更」を選択すると、B2はStorjに書き戻すことのない純粋なミラーとして維持されます。詳細設定(Advanced Settings)のステップでチェックサム比較を有効にすると、ファイルが更新日時だけでなくハッシュとサイズで照合されます。これは、オブジェクトのメタデータが2つの異なるストレージバックエンド間で異なる動作をする場合に重要です。

Storj上に4TBのシャード化されたビデオキャプチャ映像を持つ研究グループのように、分散データセットをアーカイブするチームの場合、フィルタリング(Filtering)ステップを使用すると、ファイルの経過期間や拡張子で初回実行の範囲を指定できるため、全体転送にコミットする前にサブセットでパイプラインを検証できます。初回同期が完了すると、スケジュールされた再実行では新規または変更されたオブジェクトのみが移動します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Storj bucket to Backblaze B2 with RcloneView" class="img-large img-center" />

まずドライラン(Dry Run)を実行してください。何も転送せずにコピーされるすべてのオブジェクトをリストするため、価格設定と取得特性が異なる2つのプロバイダー間でデータを移動する前に範囲を確認する最も安全な方法です。

## 転送の監視と検証

下部の情報ビュー(Info View)の転送(Transferring)タブで進行状況を追跡します — ファイル数、転送速度、完了率が同期の実行中にリアルタイムで更新されます。完了したら、Storjソースとb2宛先の間でフォルダ比較(Folder Compare)を開き、すべてのオブジェクトが到着し、サイズが一致することを確認します。これにより、どちらか側のネットワークの不具合により途中で失敗したオブジェクトを捕捉できます。

ジョブ履歴(Job History)は、各同期実行の期間、移動された総データ量、ステータスを含む永続的な記録を保持するため、B2バックアップが最後にStorjと最新の状態に保たれたのが正確にいつだったかを示す監査証跡が得られます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Storj to Backblaze B2 sync job history in RcloneView" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. S3互換エンドポイントとアクセス資格情報を使用して、Storjをリモートとして追加します。
3. Application Key IDとApplication Keyを使用して、Backblaze B2を追加します。
4. 一方向同期ジョブを構築し、ドライランを実行してから実行してStorjをB2にミラーリングします。

分散ストレージデータの2つ目の集中ホスト型コピーは、ほとんどのバックアップ戦略における見落としがちなギャップを埋め、RcloneViewはそれを手作業ではなくスケジュール化されたGUI主導のルーチンとして維持することを可能にします。

---

**関連ガイド:**

- [RcloneViewでStorj分散型クラウド同期を管理](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [RcloneViewでBackblaze B2からWasabiへ移行](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)
- [RcloneViewでStorjのアップロードエラーを修正](https://rcloneview.com/support/blog/fix-storj-upload-errors-rcloneview)

<CloudSupportGrid />

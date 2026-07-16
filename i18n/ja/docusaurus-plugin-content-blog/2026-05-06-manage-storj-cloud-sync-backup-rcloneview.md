---
slug: manage-storj-cloud-sync-backup-rcloneview
title: "Storjストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "RcloneViewでStorjの分散型クラウドストレージを管理する方法を解説します。CLI不要のシンプルなGUIで、Storj上のファイルを同期・バックアップ・転送できます。"
keywords:
  - Storj cloud storage management
  - RcloneView Storj sync
  - Storj backup files
  - decentralized cloud storage GUI
  - Storj file transfer
  - Storj rclone GUI
  - Storj sync backup tool
  - manage Storj with RcloneView
  - Storj desktop client
  - Storj S3 compatible GUI
tags:
  - storj
  - decentralized-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Storjストレージを管理 — RcloneViewでファイルを同期・バックアップ

> RcloneViewを使えば、コマンドを一切書くことなく、Storjの分散型クラウドストレージを同期・バックアップ・管理できる本格的なGUIを利用できます。

Storjは、暗号化されたファイルの断片を世界中のノードネットワークに分散配置する分散型オブジェクトストレージプラットフォームです。医療記録、金融アーカイブ、クリエイティブ資産など機密性の高いデータを扱うチームは、組み込みの暗号化と高い耐障害性からStorjを選択しています。RcloneViewを使えば、Storjのバケットを接続し、他のクラウドアカウントと同じように視覚的に管理できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## StorjをRcloneViewに接続する

RcloneViewは、ネイティブのStorjバックエンドとS3互換エンドポイントという2つの接続方法でStorjをサポートしています。ほとんどのユーザーにとってはS3互換の方法が最もシンプルです。Storjコンソールで S3 認証情報（アクセスキーID、シークレットアクセスキー、リージョンのエンドポイントURL）を生成し、RcloneViewで新しいリモートを追加する際にプロバイダータイプとして Amazon S3 を選択し、それらの認証情報を入力します。

ネイティブのStorjバックエンドを使う場合は、Storj Web UI で作成できる Access Grant トークンが必要です。新しいリモートを追加し、プロバイダーとして Storj を選択して、Access Grant を貼り付けます。どちらの方法も2分以内で完了し、RcloneViewは認証情報を暗号化されたローカルストレージに安全に保存します。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Storj remote in RcloneView" class="img-large img-center" />

接続が完了すると、Storjのバケットは他のリモートと並んでファイルエクスプローラーに表示されます。フォルダの閲覧、サムネイルのプレビュー、ファイルの管理を、他のクラウドプロバイダーと全く同じように行えます。

## Storjへのファイル同期とバックアップ

RcloneViewの4ステップ同期ウィザードを使えば、Storjへの定期バックアップを簡単に設定できます。ソースとしてローカルフォルダまたはクラウドリモートを選択し、宛先としてStorjのバケットまたはサブフォルダを指定し、ジョブに名前を付け、同期モードまたはコピーモードを選びます。2TBのRAWファイルをアーカイブする写真スタジオの場合、毎晩の同期ジョブによって手動操作なしでStorjバケットを最新の状態に保てます。

詳細設定で**チェックサム**オプションを有効にすると、データの整合性を検証できます。Storjの誤り訂正符号化ストレージは高い耐障害性を持ちますが、ハッシュ比較でアップロードを検証することで、さらに安心感が得られます。再試行回数を3（デフォルト値）に設定しておくと、一時的なネットワーク障害にも柔軟に対応できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Storj in RcloneView" class="img-large img-center" />

## Storjバックアップの自動スケジュール設定（PLUS）

PLUSライセンスがあれば、crontab形式のスケジューラーでStorjのバックアップジョブをスケジュール設定できます。毎日午前2時のバックアップ、週次のアーカイブ実行、その他任意の間隔を設定可能です。RcloneViewの**スケジュールシミュレーション**機能を使えば、実行前に次回の実行時刻をプレビューできます。

ジョブ履歴には、開始時刻、所要時間、転送バイト数、完了ステータスなど、すべての実行が記録されるため、Storjに送信されたすべてのファイルの明確な監査証跡を確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Storj backup jobs in RcloneView" class="img-large img-center" />

## Storjと他のクラウド間のファイル転送

Storjは、Google DriveやDropboxにすでにあるデータのセカンダリなオフサイトコピーとして適しています。RcloneViewのデュアルパネルエクスプローラーを使えば、リモート間で直接ファイルをドラッグできます。大規模な移行の場合は、**ドライラン**モードで同期ジョブを実行し、実際に転送する前に何が転送されるかをプレビューしてください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from another remote to Storj" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から**RcloneViewをダウンロード**します。
2. 「リモート」タブ > 「新規リモート」に移動し、StorjまたはS3互換プロバイダーを選択します。
3. StorjのAccess GrantまたはS3互換の認証情報を入力して保存します。
4. ファイルエクスプローラーを開き、Storjのバケットを閲覧して同期ジョブを作成します。

Storjの分散型アーキテクチャは優れたオフサイトバックアップ先となり、RcloneViewを使えば主要なクラウドプロバイダーと同じくらい簡単に管理できます。

---

**関連ガイド:**

- [Amazon S3ストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [DropboxからStorjへ移行 — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [RcloneViewでStorjとGoogle Drive間を転送](https://rcloneview.com/support/blog/transfer-storj-and-google-drive-with-rcloneview)

<CloudSupportGrid />

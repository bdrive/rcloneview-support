---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Magalu Cloud ストレージを管理する — RcloneViewで同期とバックアップ"
authors:
  - robin
description: "Magalu CloudのS3互換オブジェクトストレージをRcloneViewに接続し、ドラッグ&ドロップでの閲覧、スケジュールされたバックアップ、クラウド間同期を実現しましょう。"
keywords:
  - Magalu Cloud ストレージ
  - Magalu S3
  - RcloneView Magalu
  - Magaluファイル管理
  - Magaluクラウドバックアップ
  - Magalu 同期
  - S3互換ストレージ GUI
  - ブラジルのクラウドストレージ
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

# Magalu Cloud ストレージを管理する — RcloneViewで同期とバックアップ

> Magalu CloudのS3互換オブジェクトストレージを、他のすべてのクラウドと同じウィンドウから閲覧、同期、バックアップしましょう。

Magalu CloudはS3互換のオブジェクトストレージサービスであり、ほとんどのS3互換プロバイダーと同様に専用のデスクトップファイルマネージャーは付属していません — ファイルを移動するために`curl`呼び出しをスクリプト化したり、CLIを組み立てたりする必要があります。RcloneViewは、Magaluバケットを他のリモートとまったく同じように扱うことでこのギャップを埋めます。フル機能のファイル閲覧、ドラッグ&ドロップ転送、スケジュールされた同期ジョブまで、ターミナルは一切不要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Magaluバケットへの接続

Magalu CloudはS3プロトコルを使用するため、Amazon S3やBackblaze B2を追加するのと同じ方法でRcloneViewに追加できます。新しいリモートを作成し、S3互換プロバイダーのオプションを選び、アカウントのリージョンに対応するAccess Key、Secret Key、Magaluのエンドポイント URLを入力してください。保存が完了すると、バケットはエクスプローラーパネルの通常のタブとして表示され、すぐに閲覧や転送を開始できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでMagalu Cloud のS3互換リモートを追加する" class="img-large img-center" />

S3、Azure、Backblaze B2はFREEライセンスでも読み書きが可能なため、Magaluも有料化の壁なく既存のクラウド一覧に加わります。

## Magaluストレージの閲覧と整理

接続後、Magaluバケットはエクスプローラー内でローカルフォルダと同じように動作します。名前、種類、更新日、サイズで並べ替えたり、バケットが画像でいっぱいのときはサムネイル表示に切り替えたり、フォルダを他の場所にアーカイブするかどうかを決める前にGet Sizeを使って使用容量を確認したりできます。Ctrl+クリックまたはShift+クリックによる複数選択で、スクリプトなしで一括ダウンロードや削除を処理できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewでMagalu Cloudのバケット内容を閲覧する" class="img-large img-center" />

## Magaluとのバックアップの入出力

定期的なバックアップのために、Magaluをソースまたは宛先とする同期ジョブを設定してください。4ステップのウィザードでは、同時転送数、タイムスタンプだけでなくハッシュとサイズでファイルを比較するチェックサム検証、アーカイブしたくないファイル種別を除外するフィルタリングルールを設定できます。本番データを保持するバケットに対して同期ジョブを実行する前に、まずドライランを実行して何がコピーまたは削除されるかを正確に確認することをお勧めします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewでMagalu Cloudのバックアップジョブをスケジュールする" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. 新しいリモートを作成し、S3互換プロバイダータイプを選択してください。
3. MagaluのAccess Key、Secret Key、エンドポイント URLを入力してください。
4. Magaluと他のクラウドリモート間でファイルを移動する同期またはコピージョブを設定してください。

MagaluがRcloneViewに組み込まれると、オブジェクトストレージの管理はスクリプト作業ではなく、普段のファイル操作の一部になります。

---

**関連ガイド:**

- [Scaleway オブジェクトストレージを管理する — RcloneViewでクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [IONOS オブジェクトストレージを管理する — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Leviia オブジェクトストレージを管理する — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-leviia-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

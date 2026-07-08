---
slug: manage-cloudinary-cloud-sync-backup-rcloneview
title: "Cloudinaryストレージの管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - jay
description: "RcloneViewを使用してCloudinaryのデジタルアセットをAmazon S3、Google Drive、その他のクラウドストレージに管理・同期・バックアップする方法を解説します。"
keywords:
  - RcloneViewでCloudinaryを管理
  - CloudinaryからS3へのバックアップ
  - CloudinaryとGoogle Driveの同期
  - Cloudinary rclone
  - Cloudinaryアセットのバックアップ
  - Cloudinaryクラウドストレージ管理
  - Cloudinaryファイルの同期
  - Cloudinaryのデジタルアセットバックアップ
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudinaryストレージの管理 — RcloneViewでファイルを同期・バックアップ

> Cloudinaryには本番用の画像や動画アセットが保存されています。RcloneViewを使えば、スクリプトを一切書かずにAmazon S3、Google Drive、その他のクラウドへバックアップできます。

Cloudinaryは、画像・動画・リッチメディアファイルの大規模なライブラリを管理する開発者やクリエイティブチームにとって定番のプラットフォームとなりました。しかし、すべてをCloudinaryだけに保存していると、単一障害点が生まれてしまいます。誤った一括削除、アカウントの問題、APIの障害などによって、数分でメディアライブラリ全体にアクセスできなくなる可能性があるのです。rcloneのCloudinaryバックエンドを基盤とするRcloneViewは、Cloudinaryアカウントを閲覧・同期・バックアップするためのビジュアルインターフェースを提供し、他の対応クラウドストレージへ検証済みのコピーを保持できるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## CloudinaryをRcloneViewに接続する

RcloneViewを開き、Remoteタブに移動して「New Remote」をクリックします。プロバイダーリストからCloudinaryを選択し、認証情報を入力して設定を完了します。接続が完了すると、Cloudinaryストレージがエクスプローラーパネル内で閲覧可能なリモートとして表示されます。左側のフォルダツリーでメディアライブラリを移動し、右側のファイルリストで名前、サイズ、更新日時などの個々のアセット情報を確認できます。

サムネイル表示はCloudinaryのコンテンツに特に便利です。ファイルリストでサムネイルモードに切り替えると、単なるファイル名の代わりに画像のビジュアルグリッドが表示され、操作を実行する前に正しいフォルダを見ているかどうかを簡単に確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudinary as a new remote in RcloneView" class="img-large img-center" />

## Cloudinaryアセットを別のクラウドにバックアップする

一方のエクスプローラーパネルでCloudinaryを開き、もう一方でAmazon S3、Backblaze B2、Google Driveなどのバックアップ先を開いた状態で、Homeタブ > Syncから同期ジョブを開始します。4ステップのウィザードで、転送内容を正確に設定できます。

- Cloudinaryフォルダをソースとして選択し、バックアップ先のクラウドをデスティネーションとして選択します
- ステップ3で定義済みのファイルフィルター(Image、Video)を使い、特定のメディアタイプを対象にして不要なファイルをスキップします
- 最大ファイル経過時間を設定し、新しく更新されたアセットのみを取り込む差分同期を実行します

必ず最初に**Dry Run(試行実行)**を行ってください。これにより、実際に何も変更を加えることなく、どのファイルが転送またはスキップされるかを事前に確認できます。大規模なCloudinaryライブラリでは、これによりバックアップ漏れが発生する前にフィルターの設定ミスを発見できます。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop interface for transferring Cloudinary assets to S3 backup" class="img-large img-center" />

## Cloudinaryバックアップの自動スケジュール設定

継続的なアセット保護のために、RcloneView PLUSでは同期ウィザードのステップ4にcrontab形式のスケジュール設定機能が追加されます。毎晩午前2時に同期を実行すれば、その日にアップロードされた新しいアセットを取り込みつつ、帯域使用をピーク時間外に抑えられます。保存前にSimulateスケジュールプレビューを使って次回の実行時刻を確認しておけば、初回の予定実行時に想定外のことが起こりません。

実行が開始されると、ジョブ完了通知でステータス、転送されたファイル数、データ量が通知されます。1日に何十件ものCloudinary変換とアップロードを行うチームにとって、このパッシブな通知機能により、ログインして確認しなくてもバックアップが正しく実行されたことがわかります。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a nightly scheduled backup of Cloudinary assets in RcloneView" class="img-large img-center" />

## バックアップの完全性を検証する

Folder Compare機能(Homeタブ > Compare)を使えば、いつでもCloudinaryのソースとバックアップ先を比較できます。RcloneViewは左のみ、右のみ、同一、相違のファイルを並べて表示するため、カバレッジの抜けを一目で確認でき、新しいジョブを設定することなく比較ビューから直接不足ファイルをコピーできます。重要度の高いメディアアセットについては、同期ジョブの詳細設定でチェックサムを有効にすることで、サイズの一致だけでなくファイル内容そのものを検証し、各ファイルが破損なく届いたことを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between Cloudinary source and S3 backup destination" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブ > New RemoteからCloudinaryをリモートとして追加し、設定を完了します。
3. バックアップ先(Amazon S3、Backblaze B2、Google Drive)を2つ目のリモートとして追加します。
4. Cloudinaryからバックアップ先への同期ジョブを作成し、Dry Runを実行してから、PLUSのスケジュール機能を有効にして毎日の自動バックアップを設定します。

Cloudinaryには最も可視性の高い本番アセットが保存されています。第二のクラウドに同期コピーを保持することで、単一障害点を、完全に自分の管理下にある信頼性の高い監査可能なバックアップへと変えることができます。

---

**関連ガイド:**

- [RcloneViewで複数クラウドにまたがるデジタルアセットを管理する](https://rcloneview.com/support/blog/manage-digital-assets-multi-cloud-rcloneview)
- [Amazon S3ストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [RcloneViewでGoogleフォトを外付けドライブやNASにバックアップする](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />

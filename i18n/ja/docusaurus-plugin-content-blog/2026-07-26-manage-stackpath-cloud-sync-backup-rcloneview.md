---
slug: manage-stackpath-cloud-sync-backup-rcloneview
title: "StackPathオブジェクトストレージを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - jay
description: "StackPathオブジェクトストレージをRcloneViewに接続して、ドラッグ&ドロップでのファイル管理、予約バックアップ、クロスクラウド同期を実現します。"
keywords:
  - StackPathオブジェクトストレージ
  - StackPath S3
  - RcloneView StackPath
  - StackPathファイル管理
  - StackPathバックアップ
  - StackPathクラウド同期
  - S3互換ストレージGUI
  - エッジオブジェクトストレージ
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# StackPathオブジェクトストレージを管理する — RcloneViewでファイルを同期・バックアップ

> 他のすべてのクラウドと同じウィンドウから、StackPathのS3互換オブジェクトストレージを閲覧、同期、バックアップできます。

StackPathオブジェクトストレージはS3互換APIを公開しているため、rcloneベースのツールとは相性が良いものの、専用のデスクトップGUIが付属していることはほとんどありません。結果として、チームはアップロードをスクリプト化したり、バケットの中身を確認するためだけに別のCLIセッションを行き来したりする羽目になります。RcloneViewはStackPathを他のリモートと同じように扱うことでこのギャップを埋め、コマンドを一切書かずに完全なファイル閲覧、ドラッグ&ドロップ転送、スケジュールジョブを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## StackPathバケットを接続する

StackPathはS3プロトコルを使用しているため、Amazon S3やWasabiを追加するのと同じ方法でRcloneViewに追加できます。新しいリモートを作成し、S3互換プロバイダーオプションを選択し、アクセスキー、シークレットキー、そしてリージョンに対応するStackPathエンドポイントURLを入力します。接続が完了すると、バケットはExplorerパネルに通常のタブとして表示されます — 別途の資格情報ファイルも、接続確認のためのターミナルも不要です。

FREEライセンスでもS3、Azure、Backblaze B2にフルの読み書きアクセスで接続できるため、StackPathを別のS3互換アカウントと組み合わせても、ファイル移動を始めるためにアップグレードする必要はありません。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a StackPath object storage remote in RcloneView" class="img-large img-center" />

## 日常的なファイルの閲覧と管理

リモートを設定すると、StackPathバケットはRcloneViewのExplorer内でローカルフォルダとまったく同じように動作します。名前、種類、更新日、サイズで並べ替えたり、画像の多いバケットではサムネイル表示に切り替えたり、他の場所にアーカイブするかどうかを判断する前にGet Sizeでアセットフォルダの使用容量を確認したりできます。Ctrl+クリックやShift+クリックによる複数選択はローカルドライブと同じように動作するため、一括削除や一括ダウンロードもスクリプトを書く代わりに数秒で完了します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing StackPath bucket contents in RcloneView" class="img-large img-center" />

## StackPathへ／からのバックアップ

定期的なバックアップには、StackPathをソースまたは宛先とするSyncジョブを設定します。4ステップのウィザードでは、同時転送数を設定したり、タイムスタンプではなくハッシュでファイルを比較するチェックサム検証を有効にしたり、アーカイブ不要なファイルタイプを除外するフィルターを適用したりできます。転送を実行する前にまずDry Runを実行し、実際に何がコピーまたは削除されるかを正確にプレビューしましょう — バケットに本番アセットが入っている場合に役立つ安全策です。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a StackPath backup job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 新しいリモートを作成し、S3互換プロバイダータイプを選択します。
3. StackPathのアクセスキー、シークレットキー、エンドポイントを入力します。
4. SyncまたはCopyジョブを設定して、StackPathと他のリモート間でファイルを移動します。

StackPathをRcloneViewに組み込めば、オブジェクトストレージの管理はもはやスクリプト作業ではなく、普段のファイル操作の一部になります。

---

**関連ガイド:**

- [Cephオブジェクトストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Scalewayオブジェクトストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [S3アクセス拒否を修正する — RcloneViewで権限エラーを解決](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />

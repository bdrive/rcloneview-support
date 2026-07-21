---
slug: manage-selectel-cloud-sync-backup-rcloneview
title: "Selectelストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - alex
description: "RcloneViewにSelectel Object Storageを接続し、Windows、macOS、LinuxでS3互換のファイル閲覧、同期、マウント、バックアップを行いましょう。"
keywords:
  - Selectel ストレージ
  - Selectel Object Storage
  - S3互換ストレージGUI
  - RcloneView Selectel
  - クラウドバックアップソフト
  - Selectelとクラウドの同期
  - クラウドストレージGUI管理
  - オブジェクトストレージ同期ツール
  - マルチクラウドファイルマネージャー
  - S3認証情報の設定
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

# Selectelストレージを管理 — RcloneViewでファイルを同期・バックアップ

> 設定ファイルにS3の認証情報を手入力するのではなく、グラフィカルなインターフェースからSelectel Object Storageのバケットを閲覧、同期、バックアップしましょう。

Selectel Object Storageはrcloneが提供するS3互換プロトコル経由でアクセスするため、接続にはアクセスキー、シークレットキー、エンドポイントを最初から正しく入力する必要があります。RcloneViewはこの設定作業をガイド付きフォームに変え、フルファイルエクスプローラー、同期エンジン、ジョブスケジューラーを組み合わせて提供するため、すでにSelectelにデータを保存しているチームも、他のあらゆるリモートと同じ方法で一元的に管理できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SelectelをS3互換リモートとして接続する

RcloneViewでSelectelを追加する手順は、他のS3互換サービスと同じ認証情報入力フローに従います。Remoteタブ > New Remoteを開き、S3互換オプションを選択して、アクセスキーID、シークレットアクセスキー、Selectelのエンドポイントを入力します。すでにサーバー上の共有rcloneデーモン経由でSelectel連携が動いている場合、Connect Managerを使えば、内蔵rcloneの代わりに外部のrcloneインスタンスをRcloneViewから参照させることもできます。

保存すると、そのリモートは既に設定済みの他のクラウドやローカルストレージと並んで、Explorerパネル内に独自のタブとして表示されます。Aliasリモートを使えば、階層の深いバケットパスを短い名前に置き換えて、日常的な閲覧を簡単にできます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Selectel S3-compatible remote in RcloneView" class="img-large img-center" />

## Selectelのデータを閲覧・同期・バックアップする

リモートを接続すると、File Explorerのデュアルペインレイアウトにより、Selectel上のデータをローカルフォルダや別のクラウドリモートと横並びで比較できます。異なるリモート間でファイルをドラッグするとコピーが実行され、右クリックメニューでは名前変更、削除、サイズ確認、ダウンロード/アップロードといった日常的なファイル操作を行えます。

定期的なバックアップには、Syncウィザードが4つのステップで送信元・送信先、転送並列数、フィルタリングルールを案内し、メディアやドキュメント種別向けの定義済みフィルターや最大ファイル経過時間などのオプションも用意されています。SelectelのようなS3互換サービスには、FREEライセンスのままフルの読み書きアクセスで接続できます — バケットへの書き込みのためにアップグレードは不要です。1:N同期を使えば、同じSelectelバケットを1つのジョブで複数の送信先にミラーリングでき、バックアップをローカルドライブと2つ目のクラウドリモートの両方に置きたい場合に役立ちます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Selectel storage and another remote" class="img-large img-center" />

## Selectelの定期バックアップを自動化する

Job Managerはすべての同期・コピー・移動ジョブを1つのリストで管理し、各実行はステータス、転送サイズ、ファイル数とともにJob Historyに記録されます。Dry Runは実際の転送を実行する前に、どのファイルがコピーまたは削除されるかを正確にプレビューできる機能で、新しいSelectelバケットへの最初の大規模同期の前に確認しておく価値があります。

PLUSライセンスのユーザーは、ジョブにcrontab形式のスケジュールを設定でき、Selectelのバックアップを定期的な間隔で自動実行できます。スケジュールを保存する前に、次回以降の実行時刻をプレビューするシミュレーション機能も利用できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Selectel storage" class="img-large img-center" />

## Selectelをローカルドライブとしてマウントする

Selectelストレージは仮想ドライブとしてもマウントでき、他のデスクトップアプリケーションからバケットの内容をローカルファイルのように読み書きできます。マウント設定にはVFSキャッシュモード(デフォルト:writes)、キャッシュサイズの上限、読み取り専用モードが含まれ、マウントはリモートのパネルツールバーまたは専用のMount Managerから開始できます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Selectel bucket as a local drive in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブ > New Remoteを開き、S3互換オプションを選択してSelectelの認証情報とエンドポイントを入力します。
3. Folder Compareまたはドラッグ&ドロップを使い、既存のデータをSelectelに移してから、継続的なバックアップ用のSyncジョブを設定します。
4. ジョブをJob Managerに追加し、PLUSでは手動操作なしでバックアップが実行されるようスケジュールを設定します。

リモートを設定すれば、SelectelストレージはRcloneView内の他の接続と同様に扱えます — 閲覧・同期・マウントが可能で、スケジュールに沿ったバックアップの準備も整います。

---

**関連ガイド:**

- [IONOS Object Storageを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Vultr Object Storageを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-vultr-object-storage-cloud-sync-backup-rcloneview)
- [Linode Object Storageを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

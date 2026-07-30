---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Petaboxストレージを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - steve
description: "S3互換オブジェクトストレージであるPetaboxをRcloneViewに接続し、クロスプラットフォームでのファイル閲覧、同期、自動バックアップを実現します。"
keywords:
  - Petaboxストレージ
  - Petaboxオブジェクトストレージ
  - S3互換ストレージGUI
  - RcloneView Petabox
  - クラウドバックアップソフトウェア
  - PetaboxをクラウドへSync
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

# Petaboxストレージを管理する — RcloneViewでファイルを同期・バックアップ

> 設定ファイルでS3認証情報を手作業で編集するのではなく、グラフィカルなインターフェースからPetaboxオブジェクトストレージのバケットを閲覧・同期・バックアップします。

Petaboxはrcloneが提供するS3互換プロトコル経由で接続されるため、接続にはアクセスキー、シークレットキー、エンドポイントURLを入力する必要があります — コマンドラインからは間違えやすい設定です。RcloneViewはこのプロセスをガイド付きフォームに変え、フル機能のデュアルペインファイルエクスプローラー、同期エンジン、ジョブスケジューラーと組み合わせるため、すでにPetaboxにデータを保存しているチームは、他のすべてのリモートと一緒に一つのウィンドウで管理できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## S3互換リモートとしてPetaboxを接続する

RcloneViewでPetaboxを追加する方法は、他のS3互換サービスと同じ認証情報入力フローを使用します。Remoteタブ > New Remoteを開き、S3互換タイプを選択し、アクセスキーID、シークレットアクセスキー、Petaboxのエンドポイントを入力します。Petaboxとの連携がすでにサーバー上の共有rcloneデーモンを経由して動作している場合は、Connect Managerを使って組み込みのrcloneの代わりにその外部rcloneインスタンスを指すよう設定できます。

保存すると、そのリモートは他にすでに設定済みのクラウドやローカルストレージと並んで、独自のタブとしてExplorerパネルに表示されます。Aliasリモートを使えば、深くネストしたバケットパスを日常的にナビゲートしやすい短い名前に短縮できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

## Petaboxデータの閲覧、同期、バックアップ

リモートが接続されると、File Explorerのデュアルペインレイアウトにより、Petabox上にすでにあるものをローカルフォルダや別のクラウドリモートと簡単に比較できます。異なるリモート間でドラッグ＆ドロップするとコピーがトリガーされ、右クリックメニューには名前変更、削除、サイズ確認、ダウンロード／アップロードといった日常的なファイル操作が用意されています。

継続的なバックアップには、4ステップのSyncウィザードがソースと宛先、転送の同時実行数、最大ファイル経過時間やメディア・文書タイプ向けの定義済みフィルターなどのフィルタリングルールを処理します。PetaboxのようなS3互換サービスは、FREEライセンスでも完全な読み書きアクセスで接続できます — バケットにデータを書き戻すためだけにライセンスをアップグレードする必要はありません。1:N Syncを使えば、同じPetaboxバケットを1つのジョブで複数の宛先にミラーリングでき、バックアップをローカルドライブと第2のクラウドプロバイダーの両方に置きたい場合に便利です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Petabox storage and another remote" class="img-large img-center" />

## 定期的なPetaboxバックアップを自動化する

Job Managerはすべての同期、コピー、移動ジョブを1つのリストで管理し、各実行はステータス、転送サイズ、ファイル数とともにJob Historyに記録されます。Dry Runは実際の転送を実行する前に、どのファイルがコピーまたは削除されるかを正確にプレビューします — 新しいPetaboxバケットへの大規模な初回同期の前に確認する価値があります。

PLUSライセンスのユーザーは、ジョブにcrontab形式のスケジュールを設定して、Petaboxのバックアップが繰り返し間隔で自動的に実行されるようにできます。保存前に今後の実行時刻をプレビューするシミュレーションオプションもあります。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Petabox storage" class="img-large img-center" />

## Petaboxをローカルドライブとしてマウントする

Petaboxストレージは仮想ドライブとしてマウントすることもでき、他のデスクトップアプリケーションがバケットの内容をローカルファイルと同じように読み書きできるようになります。マウント設定にはVFSキャッシュモード（デフォルト：writes）、キャッシュサイズの上限、読み取り専用モードが含まれ、マウントはリモートのパネルツールバーからでも専用のMount Managerからでも開始できます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Petabox bucket as a local drive in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブ > New Remoteを開き、S3互換オプションを選択してPetaboxの認証情報とエンドポイントを入力します。
3. Folder Compareまたはドラッグ＆ドロップを使って既存データをPetaboxに移し、継続的なバックアップのためのSyncジョブを設定します。
4. ジョブをJob Managerに追加し、PLUSでは手動操作なしでバックアップが実行されるようスケジュールを設定します。

リモートを設定すれば、Petaboxストレージは RcloneView 内の他の接続と同様に動作します — 閲覧可能、同期可能、そしてスケジュールに沿ってバックアップされる準備が整います。

---

**関連ガイド:**

- [Outscaleストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-outscale-cloud-sync-backup-rcloneview)
- [Scaleway オブジェクトストレージを管理する — RcloneViewでクラウド同期](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Selectelストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

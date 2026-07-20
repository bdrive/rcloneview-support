---
slug: manage-outscale-cloud-sync-backup-rcloneview
title: "Outscaleストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - morgan
description: "Outscale Object StorageをRcloneViewに接続して、Windows、macOS、LinuxでS3互換のファイル閲覧、同期、バックアップを実現します。"
keywords:
  - Outscale storage
  - Outscale Object Storage
  - S3-compatible storage GUI
  - RcloneView Outscale
  - cloud backup software
  - sync Outscale to cloud
  - manage cloud storage GUI
  - object storage sync tool
  - multi-cloud file manager
  - S3 credentials setup
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

# Outscaleストレージを管理 — RcloneViewでファイルを同期・バックアップ

> コマンドラインで生のS3認証情報を扱う代わりに、グラフィカルなインターフェースからOutscale Object Storageのバケットを閲覧、同期、バックアップできます。

Outscale Object Storageはrcloneが提供するS3互換プロトコルを通じてアクセスします。つまりセットアップにはAccess Key、Secret Key、エンドポイントが必要で、これらは設定ファイルに手入力する際にタイプミスしやすい項目です。RcloneViewはこのセットアップをガイド付きフォームでラップし、さらにフル機能のファイルエクスプローラー、同期エンジン、ジョブスケジューラーを追加します。これにより、すでにOutscaleにデータを保存しているチームも、他のリモートと同じ方法でデータを管理できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OutscaleをS3互換リモートとして接続する

RcloneViewでOutscaleを追加する手順は、他のS3互換サービスと同じ認証情報入力フローに従います。Remoteタブ > New Remoteを開き、S3-compatibleタイプを選択して、Access Key ID、Secret Access Key、Outscaleのエンドポイントを入力します。Connect Managerを使えば、すでにサーバー上の共有rcloneデーモンを通じてOutscale連携を運用している場合に、RcloneViewを外部のrcloneインスタンスに向けることもできます。

リモートが保存されると、Explorerパネル内に独立したタブとして表示され、すでに設定済みの他のクラウドやローカルストレージと並んで表示されます。Aliasリモートを使って接続に名前を付ければ、深くネストしたバケットパスを日々のナビゲーションで扱いやすい表記に短縮できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an Outscale S3-compatible remote in RcloneView" class="img-large img-center" />

## Outscaleデータの閲覧、同期、バックアップ

リモートを接続すると、File ExplorerはOutscale上のデータをローカルフォルダや別のクラウドリモートと比較できるデュアルペインビューを提供します。異なる2つのリモート間でドラッグアンドドロップを行うとコピーがトリガーされ、右クリックメニューには名前変更、削除、サイズ取得、ダウンロード/アップロードなど日常的なファイル操作が用意されています。

定期的なバックアップには、Syncウィザードが4ステップで転送元と転送先、転送の並列数、フィルタリングルールを設定します。最大ファイル経過時間や、メディア・文書タイプ用の定義済みフィルターなどのオプションも含まれます。OutscaleのようなS3互換サービスは、FREEライセンスでも完全な読み書きアクセスで接続できます。バケットへのデータ書き込みのためだけにアップグレードする必要はありません。1:N同期を使えば、同じOutscaleバケットを1つのジョブで複数の転送先にミラーリングでき、バックアップをローカルドライブと第2のクラウドリモートの両方に配置したい場合に便利です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Outscale storage and another remote" class="img-large img-center" />

## Outscaleの定期バックアップを自動化する

Job Managerは、作成したすべての同期、コピー、移動ジョブを1つのリストで管理し、各実行はJob Historyにステータス、転送サイズ、ファイル数とともに記録されます。Dry Runを使えば、実際に転送を実行する前に、コピーまたは削除されるファイルを正確にプレビューできます。新しいOutscaleバケットへの大規模な初回同期の前に安全確認として役立ちます。

PLUSライセンスユーザーは、ジョブにcrontab形式のスケジュールを設定できるため、Outscaleのバックアップを定期的に自動実行できます。保存前に次回の実行時刻をプレビューするシミュレートオプションも利用できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Outscale storage" class="img-large img-center" />

## Outscaleをローカルドライブとしてマウントする

Outscaleストレージは仮想ドライブとしてマウントすることもでき、他のデスクトップアプリケーションがバケットの内容をローカルファイルのように読み書きできます。マウント設定にはVFSキャッシュモード（デフォルト: writes）、キャッシュサイズの上限、読み取り専用モードが含まれ、マウントはリモートのパネルツールバーまたは専用のMount Managerから直接開始できます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting an Outscale bucket as a local drive in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブ > New Remoteを開き、S3-compatibleオプションを選択してOutscaleの認証情報とエンドポイントを入力します。
3. Folder Compareまたはドラッグアンドドロップを使って既存のデータをOutscaleに移行し、継続的なバックアップ用にSyncジョブを設定します。
4. ジョブをJob Managerに追加し、PLUSではスケジュールを設定して手動操作なしでバックアップが実行されるようにします。

リモートの設定が完了すると、Outscaleストレージは RcloneView内の他の接続と同様に動作します。閲覧、同期が可能で、スケジュールに沿ってバックアップできる状態になります。

---

**関連ガイド:**

- [Wasabi ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Scaleway オブジェクトストレージの管理 — RcloneView でクラウド同期](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Hetzner オブジェクトストレージの管理 — RcloneView でクラウド同期](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />

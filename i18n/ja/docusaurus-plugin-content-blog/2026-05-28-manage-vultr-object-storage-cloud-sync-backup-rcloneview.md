---
slug: manage-vultr-object-storage-cloud-sync-backup-rcloneview
title: "Vultr Object Storageを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - alex
description: "Vultr Object StorageをRcloneViewに接続し、S3互換バケットをGUIで管理 — CLI不要で同期、バックアップ、マウント、転送の自動化が可能です。"
keywords:
  - Vultr Object Storage
  - RcloneView Vultr
  - Vultr S3互換バックアップ
  - Vultrクラウド同期GUI
  - S3互換オブジェクトストレージマネージャー
  - Vultrバケット同期
  - オブジェクトストレージバックアップツール
  - Vultrクラウドファイル転送
  - Vultrクラウド管理
  - S3互換GUI rclone
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Vultr Object Storageを管理 — RcloneViewでファイルを同期・バックアップ

> RcloneViewはVultr Object StorageのS3互換APIに接続し、バケットの閲覧、バックアップのスケジュール設定、クラウドストレージをローカルドライブとしてマウントするための完全なGUIを提供します。

Vultr Object StorageはVultrクラウドインフラ上に構築されたS3互換のオブジェクトストレージサービスで、Vultrのコンピュートサービスと合わせて、グローバルに分散した費用対効果の高いストレージを必要とする開発者やインフラチームに好まれています。このサービスはプログラムから簡単に設定できますが、CLIを通じた日々のファイル管理やカスタムスクリプトの作成は、多くのチームが避けたい手間です。RcloneViewはVultrバケットを他のリモートと全く同じように扱うことでこの問題を解決します — スプリットペインのファイルエクスプローラーでバケットを閲覧し、ウィザードを通じて定期的な同期ジョブを設定し、rcloneコマンドを一切書くことなく転送をリアルタイムで監視できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでVultr Object Storageに接続する

RcloneViewにVultrを追加するには、標準的なS3互換の設定を使用します。**Remote**タブを開き**New Remote**をクリックし、プロバイダータイプとして**Amazon S3**を選択します。VultrのObject StorageのアクセスキーとシークレットキーはVultrコントロールパネルのObject Storageインスタンスの認証情報セクションで確認できます。**Endpoint**フィールドには、Vultrダッシュボードに表示されているエンドポイントURLを貼り付けます（各データセンターリージョンには固有のエンドポイントURLがあります）。リージョンフィールドは`auto`のままにするか空白にしておきます。Vultrはエンドポイントに基づいてルーティングを処理します。

保存すると、Vultrバケットは RcloneViewのExplorerパネルにトップレベルのフォルダとして表示されます。パンくずリストのパスバーでオブジェクトのプレフィックスを移動し、リスト表示とサムネイル表示を切り替え、ファイル名、サイズ、更新日時を一目で確認できます。デュアルペインレイアウトでは、一方のパネルでVultrを開き、もう一方でローカルフォルダ、NASパス、または別のクラウドを開くことができるため、ドラッグ＆ドロップによるアップロード、ダウンロード、プロバイダー間のコピーが簡単に行えます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Vultr Object Storage as an S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneViewは最大4つのExplorerパネルを同時に表示できるため、複数のVultrリージョン間でデータを移動したり、VultrとBackblaze B2のようなプロバイダー間でクロスアップロードしたりする際に便利です。

## Vultr Object Storageへのファイルの同期とバックアップ

RcloneViewの自動バックアップジョブは4ステップのウィザードに従います。ソース（ローカルフォルダ、外付けドライブ、または別のクラウドリモート）を選択し、宛先としてVultrバケットを選びます。ジョブに名前を付け、片方向同期を選択してVultrにデータをミラーリングし、フィルタリングと詳細オプションを設定します。同時転送数を増やすと、ソフトウェアチームが毎晩のビルド成果物（数百の小さなファイル）をバックアップするようなワークロードでスループットが向上します。チェックサム比較を有効にすると、すべてのファイルがバイト単位で完全に一致した状態で届くことが保証され、コンパイル済みバイナリやデータベースダンプをアーカイブする際に重要になります。

最初の本番実行前に、**Dry Run**をクリックして転送または削除されるファイルの全リストをプレビューします。この安全チェックにより、共有バケットでの予期しない削除を防ぐことができます。問題がなければ**Run**をクリックします — RcloneViewの下部にあるTransferringタブに、ファイル数、転送速度、合計バイト数がリアルタイムで更新表示されます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Vultr Object Storage in RcloneView" class="img-large img-center" />

RcloneView PLUSユーザーは、crontab形式のルールでジョブをスケジュールできます — 例えば月曜から金曜まで毎晩03:00に実行するバックアップなど — また完了通知を受け取ることもできます。

## Vultrストレージをローカルドライブとしてマウントする

RcloneViewのMount機能を使用すると、Vultrバケットをローカルのドライブレター（Windows）またはマウントポイント（macOS/Linux）として直接接続でき、明示的な同期手順なしにどのアプリケーションからもアクセスできるようになります。Remoteタブから**Mount Manager**を開き、**New Mount**をクリックし、Vultrリモートを選択して、公開するバケットまたはサブフォルダを選びます。ほとんどのワークロードではVFSキャッシュモードを**writes**に設定し、**Save and Mount**をクリックします。

バケットはローカルボリュームとして表示されます。例えば、ビルド成果物をマウントされたドライブに直接配置するCIパイプラインは、VultrのAPIを意識する必要が一切ありません — ローカルディスクへの書き込みと同じようにファイルを書き込むだけで、rcloneがアップロードを透過的に処理します。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Vultr Object Storage bucket as a local drive using RcloneView's Mount Manager" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Vultrコントロールパネルで、Object Storageインスタンスを開き、アクセスキー、シークレットキー、エンドポイントURLをコピーします。
3. RcloneViewで**Remoteタブ → New Remote → Amazon S3**に進み、認証情報とVultrのエンドポイントを入力して保存します。
4. Explorerパネルでバケットを閲覧するか、**Job Manager**で自動バックアップジョブを設定します。

接続が完了すると、Vultr Object StorageはRcloneViewで管理するあらゆるマルチクラウドワークフローにシームレスに統合されます — ローカルストレージ、NAS、その他のクラウドプロバイダーと一つのインターフェースの中で共に利用できます。

---

**関連ガイド:**

- [RcloneViewでVultr Object StorageをGoogle Driveに同期する](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [RcloneViewでCloudflare R2クラウドストレージを管理する](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [RcloneViewでAmazon S3バケットをローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />

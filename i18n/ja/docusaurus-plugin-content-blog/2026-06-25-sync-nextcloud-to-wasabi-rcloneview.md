---
slug: sync-nextcloud-to-wasabi-rcloneview
title: "NextcloudをWasabiに同期 — RcloneViewによるクラウドバックアップ"
authors:
  - jay
description: "RcloneViewを使ってNextcloudインスタンスをWasabi S3に同期 — WebDAVとS3のリモートを接続し、バックアップジョブを自動化して、セルフホスト型データをオフサイトで保護します。"
keywords:
  - sync nextcloud to wasabi
  - nextcloud wasabi backup
  - nextcloud s3 backup gui
  - backup nextcloud to s3
  - nextcloud cloud backup rcloneview
  - wasabi s3 backup tool
  - webdav to s3 sync rcloneview
  - nextcloud off-site backup
  - rcloneview nextcloud wasabi
tags:
  - RcloneView
  - nextcloud
  - wasabi
  - cloud-sync
  - backup
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# NextcloudをWasabiに同期 — RcloneViewによるクラウドバックアップ

> セルフホスト型のNextcloudインスタンスにはオフサイトバックアップが必要です — RcloneViewを使えば、Nextcloudフォルダから Wasabi S3ストレージへの同期を簡単かつ完全に自動化できます。

セルフホスト型のNextcloudサーバーを使うと自分のファイルを完全にコントロールできますが、その分責任も伴います。サーバーに障害が発生したり、ランサムウェアの被害に遭ったり、ディスクが劣化したりすれば、データも一緒に失われてしまいます。Wasabiへの同期により、転送コストの予期しない増加なしに、耐久性のあるオフサイトコピーを確保できます。RcloneViewはWebDAV経由でNextcloudに、S3プロトコル経由でWasabiに接続し、両者間で信頼性の高い同期ジョブを構築できます — CLIは不要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## NextcloudインスタンスをリモートとしてConnect

RcloneViewを開き、**Remoteタブ > New Remote** に移動します。リモートタイプとして **WebDAV** を選択し、ベンダーとして **Nextcloud** を選びます。Nextcloudサーバーの URLを `https://cloud.yourdomain.com/remote.php/dav/files/username/` の形式で入力し、Nextcloudのユーザー名と、アカウントパスワードまたはNextcloudのSecurity Settingsから生成したアプリ専用パスワードのいずれかを入力します。リモートを保存すると、ファイルエクスプローラー内で閲覧可能なソースとして表示されます。

マウント専用ツールとは異なり、RcloneViewはNextcloudのようなWebDAVソースを、WasabiのようなS3互換の宛先に直接同期できます — しかもFREEライセンスのみで完全に利用可能です。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud as a WebDAV remote in RcloneView" class="img-large img-center" />

接続後は、Nextcloudのディレクトリを閲覧してリンクが正しく機能しているか確認しましょう。ファイル名、サイズ、更新日時を確認できるので、バックアップジョブに含めるフォルダや、除外すべき内部ディレクトリ(`trashbin`など)を判断するのに役立ちます。

## WasabiをS3互換リモートとして追加

再び **Remoteタブ > New Remote** から、**Amazon S3** を選択し、プロバイダーとして **Wasabi** を選びます。WasabiのAccess Key IDとSecret Access Keyを入力し、該当するリージョンエンドポイント(例: `s3.us-east-1.wasabisys.com`)を選択して、対象のバケットを指定します。保存すると、RcloneViewはNextcloudと並べて2つ目のエクスプローラーパネルにWasabiバケットを開くことができます — フルの同期を実行する前に、個々のファイルをドラッグして接続を確認できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud and Wasabi remotes open side by side for cloud-to-cloud backup in RcloneView" class="img-large img-center" />

WasabiのS3互換APIにより、RcloneViewはAmazon S3と同様に扱えるため、同期、コピー、移動、フィルター操作はすべて追加設定なしで動作します。

## 同期ジョブの設定

Homeタブから **Sync** をクリックして、4ステップのジョブウィザードを開きます。ステップ1では、Nextcloudフォルダをソースに、Wasabiバケット(または `nextcloud-backup/` のようなサブフォルダ)を宛先に設定します。`nextcloud-to-wasabi-daily` のような、内容がわかりやすい名前をジョブに付けましょう。

ステップ2では、接続環境が許す場合は並列転送数を増やします — これにより、Nextcloudに典型的な大量の小さなファイルの同期が高速化されます。**チェックサム検証** を有効にすると、単なるサイズ比較ではなくファイルハッシュを比較できるため、以前の部分アップロード中に発生した破損を検出できます。ステップ3では、Nextcloudの `trashbin` フォルダやチャンクアップロードの一時ファイルを除外するフィルタールールを追加し、バックアップをクリーンに保ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Wasabi sync job in RcloneView" class="img-large img-center" />

PLUSライセンスがあれば、ステップ4でcrontab形式のスケジュール(例: 毎晩午前2時)を追加できるため、手動トリガーなしでバックアップを実行できます。スケジューラーは特定の曜日、月次間隔、ステップ単位の範囲指定をサポートしています。

## 転送履歴の確認

各実行後、**Job History** タブにはすべての実行が記録されます: 開始時刻、所要時間、ステータス(Completed / Errored / Canceled)、転送された総バイト数、転送速度です。バックアップが停止したりファイルが漏れたりしたように見える場合、まず確認すべきログであり、Nextcloudのデータが期待通りWasabiに届いているかを簡単に監査できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing completed Nextcloud to Wasabi backup runs" class="img-large img-center" />

複数のNextcloudインスタンスを運用していたり、地理的冗長性のために異なるリージョンのWasabiバケットへバックアップしたりする場合、RcloneViewの1:N同期機能を使えば、1つのソースに対して複数の宛先を設定し、単一のジョブとしてまとめて実行できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. NextcloudサーバーをWebDAVリモートとして追加します(Remoteタブ > New Remote > WebDAV > Nextcloudベンダー)。
3. Access Key、Secret Key、リージョンエンドポイント、バケット名を使って、WasabiをS3互換リモートとして追加します。
4. Nextcloudをソース、Wasabiバケットを宛先とする同期ジョブを作成します — ステップ2でチェックサム検証を有効にすると、整合性が保証されたバックアップになります。

これで、セルフホスト型のNextcloudデータは、コマンドラインスクリプトなしで自動的に実行される、信頼性の高いオフサイトコピーをWasabi上に持つことになります。

---

**Related Guides:**

- [RcloneViewでNextcloudのクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [RcloneViewでWasabiのクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneViewでNextcloudをBackblaze B2に同期する](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

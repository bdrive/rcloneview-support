---
slug: sync-nextcloud-to-google-drive-rcloneview
title: "NextcloudをGoogle Driveに同期 — RcloneViewでファイルを移行してバックアップする"
authors:
  - tayson
description: "RcloneViewを使ってNextcloudをGoogle Driveに同期する方法を解説します。自己ホストのNextcloudサーバーからGoogle Driveへ、完全な自動化サポート付きでファイルを転送できます。"
keywords:
  - Nextcloud to Google Drive sync
  - migrate Nextcloud Google Drive
  - RcloneView Nextcloud Google Drive
  - sync self-hosted cloud to Google Drive
  - Nextcloud WebDAV sync RcloneView
  - backup Nextcloud to Google Drive
  - cloud migration self-hosted RcloneView
  - transfer Nextcloud files Google Drive
  - Nextcloud Google Drive automated sync
  - RcloneView WebDAV cloud transfer
tags:
  - RcloneView
  - nextcloud
  - google-drive
  - cloud-to-cloud
  - migration
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# NextcloudをGoogle Driveに同期 — RcloneViewでファイルを移行してバックアップする

> Nextcloudはデータを完全に自分でコントロールできる仕組みを提供しますが、RcloneViewはそこにGoogle Driveへのブリッジを追加し、冗長性、移行、チームアクセスを可能にします。

Nextcloudは組織にストレージインフラの所有権を与えますが、自己ホストのデータであってもオフサイトのコピーは必要です。RcloneViewを使ってNextcloudをGoogle Driveに同期すれば、スクリプトや手動でのファイル転送なしに、主要クラウドプラットフォーム上に2つ目のコピーを作成できます。自己ホストインフラから完全に移行する場合でも、Nextcloudをプライマリストアとして維持しつつGoogle Driveをセカンダリバックアップとして使う場合でも、RcloneViewはスケジュール機能を備えたビジュアルな同期インターフェースで転送を処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewで両方のリモートを設定する

同期ジョブを作成する前に、2つのリモートを設定しておく必要があります。Google Driveの場合は、**Remote**タブに移動し、**New Remote**をクリックしてGoogle Driveを選択します。ブラウザウィンドウが開きOAuth認証が行われるため、APIキーや認証情報を手動で管理する必要はありません。Nextcloudの場合は、リモートタイプとして**WebDAV**を選択します。Nextcloudサーバーのユーザー名とパスワード（アカウントで二要素認証が有効な場合はアプリパスワード）とともに、`https://your-nextcloud.example.com/remote.php/dav/files/username/`という形式でNextcloudサーバーのURLを入力します。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud WebDAV and Google Drive remotes in RcloneView" class="img-large img-center" />

両方のリモートを保存したら、エクスプローラーパネルからそれぞれをクリックして接続を確認します。Nextcloudへの接続が成功すると、ホームディレクトリのフォルダ構造が表示されます。Google Driveの場合はDriveのルートが表示されます。Nextcloudで認証エラーが返される場合は、URLに完全なWebDAVパスが含まれているか確認してください。`/remote.php/dav/files/username/`を省略してしまうのが最もよくある設定ミスです。

## NextcloudからGoogle Driveへの同期ジョブを作成する

両方のリモートを確認したら、Homeタブから**Job Manager**を開き、新しい**Sync**ジョブを作成します。Step 1で、Nextcloudのパスをソースに、Google Driveのフォルダを宛先に設定します。同期方向が一方向（ソースが宛先のみを変更する）に設定されていることを確認してください。これにより、Nextcloudのファイルを変更することなく、Nextcloudの内容がGoogle Driveにミラーリングされます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

Step 2では、サーバーのアップロード能力に応じて同時転送数を設定します。大規模なNextcloudライブラリ（たとえば、200GBのアセットを持つデザインチームの共有プロジェクトフォルダなど）の場合、同時転送数を増やすことでGoogle Drive宛先への初期投入が高速化されます。データの整合性が重要な場合は**checksum**検証を有効にしてください。これにより、転送されたファイルがファイルサイズだけでなく、コンテンツのハッシュ値によってもソースと一致することが確認されます。

## システムフォルダとメタデータをフィルタリングする

Nextcloudサーバーには、Google Driveミラーには不要なシステムフォルダ、サムネイルキャッシュ、一時ファイルが蓄積されます。ジョブウィザードのStep 3で、これらのパスを除外するフィルタルールを追加します。`.nextcloud/`や`.thumbs/`といったパターンを指定することで、価値を追加せずにノイズだけを増やすメタデータディレクトリをスキップできます。RcloneViewの画像・ドキュメント・動画用の定義済みフィルタプリセットを使えば、チームが本当に必要とするファイルタイプだけに同期の対象を絞り込むことができます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

ジョブを実際に実行する前に、Job Managerの**Dry Run**オプションを使って、予定されているすべての操作をプレビューしましょう。ドライランでは、変更を一切加えずにコピーされる予定のすべてのファイルが一覧表示されます。大規模な初回転送を実行する前の有用な健全性チェックです。

## スケジュールによる同期の自動化

ドライランで検証が済んだら、ジョブを保存し、PLUSライセンスがあればStep 4でスケジュールを設定します。毎晩のcronスタイルのスケジュールを設定すれば、手動操作なしで、Nextcloud上のその日の変更をGoogle Driveのコピーに反映し続けることができます。同期完了通知により、スケジュールされた各実行が成功したことが分かります。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Nextcloud to Google Drive sync in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneView**をダウンロードします。
2. New Remoteから**Google Drive**リモート（OAuthブラウザログイン）と**Nextcloud**リモート（WebDAV URL + 認証情報）を追加します。
3. Nextcloudのパスをソース、Google Driveのフォルダを宛先とした**Sync**ジョブを作成します。
4. **Dry Run**で対象範囲を確認し、スケジュールを設定して保存し、継続的な自動同期を行います。

Nextcloudデータの同期されたGoogle Driveコピーを保持しておくことで、サーバー障害や誤削除が発生しても、データが永久に失われることはありません。

---

**関連ガイド:**

- [RcloneViewでNextcloudをBackblaze B2に同期する](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [RcloneViewでNextcloudのクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [RcloneViewでSeafileをGoogle Driveに移行する](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />

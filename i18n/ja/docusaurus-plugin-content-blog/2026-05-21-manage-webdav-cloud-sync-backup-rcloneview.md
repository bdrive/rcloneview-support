---
slug: manage-webdav-cloud-sync-backup-rcloneview
title: "WebDAVサーバーストレージの管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - casey
description: "RcloneViewで任意のWebDAVサーバーに接続し、同期・バックアップを行いましょう。Nextcloud、ownCloud、エンタープライズWebDAVエンドポイントを、90以上のクラウドプロバイダーと合わせて管理できます。"
keywords:
  - WebDAV sync RcloneView
  - manage WebDAV cloud storage
  - WebDAV file transfer GUI
  - Nextcloud WebDAV backup
  - sync WebDAV to cloud storage
  - ownCloud backup tool
  - WebDAV rclone GUI
  - WebDAV file management desktop
  - cross-platform WebDAV client
  - WebDAV cloud backup automation
tags:
  - RcloneView
  - webdav
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# WebDAVサーバーストレージの管理 — RcloneViewでファイルを同期・バックアップ

> 任意のWebDAVエンドポイントをRcloneViewに接続し、洗練されたGUIでファイルを管理しましょう — コマンドラインに触れることなく、同期、バックアップ、転送が行えます。

WebDAV（Web Distributed Authoring and Versioning）は、最も広く導入されているセルフホスト型ファイルプラットフォームの多くを支えています。Nextcloud、ownCloud、SharePoint、そして多くのエンタープライズコンテンツ管理システムがWebDAVエンドポイントを公開しています。こうしたサーバーを管理する際は通常、コマンドラインツールや信頼性の低いデスクトップ同期クライアントと格闘することになります。RcloneViewはWebDAVリモートを、Amazon S3やGoogle Driveの管理に使うのと同じインターフェースの中で、他のクラウドプロバイダーとまったく同じように扱います — ドラッグ&ドロップによる転送、スケジュール同期ジョブ、リアルタイムの転送モニタリングも可能です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## わずか数分でWebDAVサーバーに接続

RcloneViewでのWebDAVリモートの追加は2分もかかりません。**Remoteタブ > New Remote**をクリックし、ストレージタイプとしてWebDAVを選択、サーバーURL、ユーザー名、パスワードを入力します。自己署名SSL証明書を使用しているサーバーの場合は、**Settings > Embedded Rclone**の**Global Rclone Flags**フィールドに`--no-check-certificate`を追加することで、証明書検証をバイパスできます。保存すると、WebDAVサーバーは、設定済みの他のすべてのクラウドアカウントと並んでエクスプローラーパネルに表示されます。

この統合ビューは、社内コラボレーションにNextcloudを運用しつつ、オフサイトバックアップにパブリッククラウドストレージを利用しているチームにとって特に有用です。セルフホスト型Nextcloudサーバーを持つ映像制作スタジオでは、左パネルでプロジェクトファイルを閲覧しながら、右パネルでBackblaze B2バケットを確認できます — 完成した成果物をそのままドラッグして転送したり、夜間アーカイブを自動処理するスケジュール同期ジョブを定義したりできます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a WebDAV remote in RcloneView Remote Manager" class="img-large img-center" />

## WebDAVから任意のクラウドプロバイダーへ同期

WebDAVサーバーの接続後は、Job Managerで同期ジョブを作成し、RcloneViewがサポートする90以上のクラウドプロバイダーのいずれかへファイルを転送できます。4ステップの同期ウィザードでは、送信元・送信先リモートの選択、同時転送数とチェックサム検証の設定、ファイルサイズや更新日時によるフィルターの適用、そして必要に応じたジョブのスケジューリングを順に行えます。

バックアップ用途では、同期方向のフィールドで**「Modifying destination only」**を選択してください。これにより、クラウドバックアップはWebDAVサーバーをミラーリングし続けるだけで、逆方向の変更が入り込むことはありません。法務文書アーカイブや医療画像ライブラリなど、データの整合性が重要な場合は、チェックサムオプションを有効にすることで、実行のたびに更新日時だけでなくハッシュとサイズの両方でファイルを検証させることができます。

初回の同期を実行する前には、Dry Run機能を活用する価値があります。実際に変更を加えることなく、送信先でコピーまたは削除される予定のファイルを正確に一覧表示します。所要時間はわずか数秒で、意図しない上書きを防ぐことができます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from WebDAV server to cloud storage in RcloneView" class="img-large img-center" />

## スケジュールによるバックアップの自動化（PLUSライセンス）

手動での同期実行は即時の転送には対応できますが、WebDAVバックアップを確実なものにするのはスケジュールによる自動化です。PLUSライセンスを利用すると、RcloneViewのcrontab形式のスケジューラーで、毎晩、毎時、あるいは任意のカスタム間隔でジョブを実行するよう設定できます。スケジュールシミュレーターは保存前に次の10回分の実行時刻をプレビューするため、バックアップがいつ実行されるか予期せぬ事態になることはありません。

Job Historyでは、実行ごとの結果 — 開始時刻、所要時間、転送速度、ファイル数、ステータス（Completed / Errored / Canceled）を追跡できます。スケジュールされたジョブが一時的なネットワーク障害に遭遇した場合、RcloneViewは設定したリトライ回数までジョブを再試行してから、エラーとしてマークします。大規模なNextcloudやownCloudの展開を管理する組織にとって、これは手動監視を必要としない信頼できる監査記録となります。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled sync job from WebDAV to cloud storage in RcloneView" class="img-large img-center" />

## ファイルを並べて閲覧・比較する

RcloneViewのマルチパネルエクスプローラーでは、WebDAVサーバーとクラウド送信先を同時に閲覧できます。Folder Compareツールを使えば、両者の間で異なっているファイルを正確に特定できます — 左側にのみ存在するファイル、右側にのみ存在するファイル、サイズが一致しないファイルなどを表示します。増分バックアップの検証において、これは転送ログを手動で確認するよりも高速で信頼性の高い方法です。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing WebDAV server files with cloud backup using Folder Compare in RcloneView" class="img-large img-center" />

## はじめかた

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remoteタブ > New Remote**を開き、WebDAVを選択して、サーバーURLと認証情報を入力します。
3. Job Managerで、WebDAVリモートを送信元、お好みのクラウドプロバイダーを送信先とする同期ジョブを作成します。
4. **Dry Run**を実行して転送内容をプレビューし、その後ジョブを有効化するかスケジュールを設定します。

RcloneViewは、セルフホスト型Nextcloudインスタンスを保護する場合でも、エンタープライズコンテンツプラットフォームと長期クラウドアーカイブストレージを橋渡しする場合でも、WebDAVサーバーをマルチクラウド戦略における第一級の存在にします。

---

**関連ガイド：**

- [SFTPサーバーストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [WebDAVサーバーへの接続 — RcloneViewでクラウド同期](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Nextcloudの管理 — RcloneViewでクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

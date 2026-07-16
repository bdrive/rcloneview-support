---
slug: sync-hidrive-to-google-drive-rcloneview
title: "HiDriveをGoogle Driveに同期 — RcloneViewによるクラウドバックアップ"
authors:
  - tayson
description: "RcloneViewを使ってStrato HiDriveのストレージをGoogle Driveに同期しましょう。クラウドバックアップを自動化し、プロバイダー間でファイルを直接転送し、両方のアカウントを同期状態に保ちます。"
keywords:
  - sync HiDrive to Google Drive
  - HiDrive Google Drive sync RcloneView
  - Strato HiDrive backup to Google Drive
  - HiDrive cloud migration
  - move files HiDrive Google Drive
  - HiDrive sync tool GUI
  - Google Drive backup from HiDrive
  - RcloneView HiDrive sync
  - HiDrive file transfer tool
  - cloud to cloud sync HiDrive
tags:
  - hidrive
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDriveをGoogle Driveに同期 — RcloneViewによるクラウドバックアップ

> RcloneViewは、Strato HiDriveとGoogle Driveを自動的に同期状態に保ちます。スケジュールされたジョブと完全な転送モニタリングによる、クラウド間の直接転送です。

Strato HiDriveは、強力なGDPR準拠のセキュアなクラウドストレージとして、ドイツ語圏で広く利用されています。HiDriveとGoogle Workspaceを併用しているチームは、両方のプラットフォーム間でコンテンツを同期し、両方の環境からプロジェクトファイルにアクセスできるようにする必要がよくあります。RcloneViewは、両方のプロバイダーに接続し、定義したスケジュールで自動転送を実行することで、この同期を確実に処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでHiDriveとGoogle Driveを接続する

HiDriveとGoogle Driveはどちらも、RcloneViewでOAuthベースの認証を使用します。「Remote」タブ > 「New Remote」に移動してください。

- **HiDrive:** HiDriveを選択し、Strato HiDriveの認証情報でOAuthログインを完了します
- **Google Drive:** Google Driveを選択し、ブラウザベースのOAuth認証を完了します

RcloneViewはトークンを安全に保存し、期限切れになると自動的に更新します。同期を設定する前に、両方のリモートをデュアルパネルエクスプローラーで開き、双方に存在するデータを確認してください。

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## HiDriveからGoogle Driveへの同期ジョブを設定する

RcloneViewのウィザードで、HiDriveをソース、Google Driveフォルダを宛先とする同期ジョブを作成します。HiDriveにクライアントの成果物を保存し、Google Workspaceで共有しているコンサルティング会社であれば、毎日の同期ジョブによって、その日の作業後にGoogle Driveのコピーが常に最新の状態に保たれます。

詳細設定では、帯域幅に合わせて同時転送数を設定し、アカウント間のデータ整合性が重要な場合は**チェックサム**検証を有効にしてください。事前定義されたフィルターオプションを使用すると、特定のファイルタイプ(HiDriveのサムネイルキャッシュや一時ファイルなど)を同期から除外できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## 自動同期をスケジュールする(PLUS)

PLUSライセンスを使用すると、HiDriveからGoogle Driveへの同期ジョブを自動的に実行するようスケジュールできます。よくある設定は、毎晩午後7時にHiDriveをGoogle Driveに同期し、その日の作業内容を取り込むというものです。**Simulate schedule**機能を使用して、cron式が期待通りの実行時刻を生成することを、有効化する前に確認してください。

「Auto Start Schedule on Startup」オプションを有効にすると、マシンの再起動後にスケジュールされたジョブが再開されます。これは、共有ワークステーションで実行される同期ジョブにとって重要です。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## 同期のステータスと履歴を監視する

RcloneViewの「Transfer」タブには、同期の進行状況がリアルタイムで表示されます。各同期が完了すると、「Job History」に実行内容(転送されたファイル数、転送されたバイト数、速度、所要時間)が記録されます。大規模な同期中にGoogle DriveのAPIがリクエストを制限した場合、ログにリトライイベントが表示され、今後のジョブのために同時転送設定を調整する際に役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 「Remote」タブ > 「New Remote」で、HiDriveとGoogle DriveをOAuthリモートとして追加します。
3. HiDriveからGoogle Driveフォルダへの同期またはコピージョブを作成します。
4. PLUSライセンスで自動実行をスケジュールし、「Job History」で進行状況を監視します。

RcloneViewの自動同期エンジンを使えば、HiDriveとGoogle Driveの同期状態を保つのは簡単です。データはクラウド上で直接移動し、手作業は一切必要ありません。

---

**関連ガイド:**

- [HiDriveストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Google Driveストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneViewでHiDriveをOneDriveに同期する](https://rcloneview.com/support/blog/sync-hidrive-to-onedrive-rcloneview)

<CloudSupportGrid />

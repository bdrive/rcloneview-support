---
slug: migrate-proton-drive-to-google-drive-rcloneview
title: "Proton DriveからGoogle Driveへ移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewを使ってProton DriveからGoogle Driveへファイルを移動します。暗号化されたクラウドデータをプロバイダー間で直接転送 — 手動ダウンロード不要、フォルダ構造も完全に保持されます。"
keywords:
  - migrate Proton Drive to Google Drive
  - Proton Drive Google Drive transfer
  - RcloneView Proton Google Drive migration
  - Proton Drive migration tool
  - move files Proton Drive Google Drive
  - Proton Drive cloud migration GUI
  - Google Drive import Proton Drive
  - cloud to cloud migration
  - Proton Drive file transfer tool
  - RcloneView Proton Drive sync
tags:
  - proton-drive
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton DriveからGoogle Driveへ移行 — RcloneViewでファイルを転送

> RcloneViewは、Proton Driveのコンテンツをクラウド上で直接Google Driveへ移行します — ファイルをその場で復号し、ローカルに何も保存せずにアップロードします。

Proton Driveのエンドツーエンド暗号化は、プライバシーを重視するユーザーから信頼されるストレージプラットフォームです。Google Workspaceを基盤としたチーム環境への移行に伴い、Proton Driveのドキュメント、写真、プロジェクト資産をGoogle Driveへ移行することはよくある要件です。RcloneViewは両方のプロバイダーに接続し、単一の同期ジョブで転送を調整することで、この移行を効率的に処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでProton DriveとGoogle Driveを接続する

Proton Driveをリモートとして追加するにはrclone v1.69以降が必要です — RcloneViewに組み込まれたrcloneはデフォルトでこれを満たしています。「Remote」タブ > 「New Remote」に移動し、Proton Driveを選択して、Protonアカウントのメールアドレスとパスワードを入力します。二要素認証を有効にしている場合は、2FAコードの入力も求められます。

Google Driveの場合は、Google Driveを選択してOAuthのブラウザフローを完了させます。設定が完了すると、両方のリモートがRcloneViewのファイルエクスプローラーに表示されます。デュアルパネルビューでProton DriveとGoogle Driveを並べて開き、移行の範囲を確認しましょう。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Proton Drive and Google Drive remotes in RcloneView" class="img-large img-center" />

## 移行ジョブを設定する

Proton Driveをソース、Google Driveフォルダを宛先としてCopyまたはSyncジョブを作成します。RcloneViewの同期ウィザードでは:

- **モード:** Copyを選択すると、Proton Driveからファイルを削除せずに移動できます（移行中は元データをバックアップとして保持）
- **フィルタリング:** ファイル形式の互換性問題を避けるため、あらかじめ定義されたGoogle Docsフィルターを使用します
- **チェックサム:** 転送されたファイルの整合性検証のために有効にします

Proton Driveの暗号化により、rcloneはダウンロード時にコンテンツを復号し、平文をGoogle Driveへ再アップロードします。開始前に、Google Driveの宛先フォルダに十分な容量があることを確認してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## ドライランでプレビューを実行する

大規模な移行を実行する前には、必ずドライランモードを使用してください。RcloneViewのドライランはProton Driveのソースをスキャンし、転送されるすべてのファイルを一覧表示します — 実行前にファイル数、フォルダ構造のプレビュー、転送サイズの見積もりを確認できます。これにより、Proton Driveの内部ファイルバージョンや共有リンクなど、除外したいフォルダを特定するのに役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## 進行状況を監視し、結果を検証する

RcloneViewの「Transfer」タブでは、移行の進行状況がリアルタイムで表示されます。Proton Driveの暗号化ストレージは、平文プロバイダーと比較して処理オーバーヘッドが多少発生するため、Google Drive間の同等の転送より若干遅くなることがあります。ジョブが完了すると、「Job History」に完全なサマリー（移行されたファイル数、転送バイト数、所要時間、エラー）が表示されます。

Google Drive側のファイル数とサイズをProton Driveのソースと比較し、移行が正常に完了したことを検証してください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Proton Drive to Google Drive migration progress in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Proton Drive（メールアドレス + パスワード）とGoogle Drive（OAuth）をリモートとして追加します。
3. Proton DriveからGoogle Driveの宛先フォルダへのCopyジョブを作成します。
4. ドライランを実行して範囲を確認してから、完全な移行を実行します。

RcloneViewを使えば、Proton DriveからGoogle Driveへの移行は簡単なプロセスです — 進行状況の監視と詳細な転送履歴ログも完備しています。

---

**関連ガイド:**

- [Proton Driveストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [RcloneViewでProton DriveをOneDriveへ移行](https://rcloneview.com/support/blog/migrate-proton-drive-to-onedrive-rcloneview)
- [Google Driveストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

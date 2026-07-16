---
slug: migrate-koofr-to-backblaze-b2-rcloneview
title: "KoofrからBackblaze B2への移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "チェックサム検証と大容量転送の自動リトライを備えたRcloneViewを使って、Koofrクラウドストレージから Backblaze B2オブジェクトストレージへファイルを移行する方法を解説します。"
keywords:
  - Koofr to Backblaze B2 migration
  - migrate Koofr B2 RcloneView
  - Koofr Backblaze B2 transfer
  - switch Koofr to B2 storage
  - cloud migration Koofr
  - Koofr backup Backblaze B2
  - Koofr to S3 migration guide
  - rclone Koofr B2 GUI
tags:
  - RcloneView
  - koofr
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# KoofrからBackblaze B2への移行 — RcloneViewでファイルを転送

> KoofrクラウドストレージのライブラリをBackblaze B2オブジェクトストレージへ、RcloneViewの単一ジョブで移行できます。検証・監視・中断時の再開にも対応しています。

Koofrはプライバシーを重視したヨーロッパのクラウドストレージサービスで、他のクラウドアカウントを接続するハブとしても機能します。アーカイブやコスト削減の理由でBackblaze B2への統合を検討している場合、RcloneViewは2つのプロバイダー間で直接移行を処理します — ローカルへのダウンロードは不要です。ファイルはKoofrのWebDAVベースのバックエンドから、rcloneの転送エンジンを経由して直接B2バケットへストリーミングされます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## KoofrとBackblaze B2のリモートを設定する

Koofrについては、**Remoteタブ → New Remote**に移動し、プロバイダーリストからKoofrを選択します。KoofrはOAuthログインに対応しており、RcloneViewがブラウザウィンドウを開いてKoofrアカウントで認証できます。パスワードベースのアクセスを希望する場合は、Koofrのアカウント設定でアプリパスワードを生成し、Koofrのメールアドレスと組み合わせて使用することもできます。

Backblaze B2については、B2コンソールで生成したApplication Key IDとApplication Keyを入力します。設定でバケット名を指定します。両方のリモートを保存したら、Koofrを左側のエクスプローラーパネルに、B2を右側に配置し、どちらも参照可能であることを確認します。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and Backblaze B2 in RcloneView" class="img-large img-center" />

## 移行を実行する

Homeタブで**Sync**をクリックし、ジョブを設定します。Koofrのフォルダをソース、B2バケットを転送先とします。Advanced Settingsで**Checksum**を有効にし、整合性を検証します。KoofrはWebDAVを内部的に使用しているため、ファイル一覧の取得がネイティブのS3よりやや遅くなることがあります。Koofr APIへの負荷を避けるため、checkersの数を4に設定してください。

まずは**Dry Run**を実行し、転送される完全なファイルリストを確認しましょう。これは、Koofrが他の接続済みアカウント(Google Drive、Dropboxなど)からファイルを集約している大規模なKoofrライブラリで特に有用です。ドライランを行うことで、他のプロバイダーのミラービューではなく、実際のKoofrストレージのみを移行していることを確認できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Backblaze B2 migration in progress in RcloneView" class="img-large img-center" />

## 転送が中断した場合の対処

移行が中断した場合(ネットワーク切断、コンピューターのスリープなど)、RcloneViewの同期モードは本質的に再開可能です。同じSyncジョブを再実行すると、rcloneがソースと転送先を比較し、まだ存在しないファイルやB2側で異なるファイルのみを転送します。すでに転送済みのファイルを再送する必要はありません。

移行完了後は、**Folder Compare**を使用してKoofrのソースとB2の転送先が一致しているかを確認します。比較ビューでは、Koofrには存在するがB2に存在しないファイルがハイライトされ、再試行が必要な項目を明確にチェックできます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Koofr to B2 migration runs" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Koofr(OAuth)とBackblaze B2(Application Key)をリモートとして追加します。
3. ドライランを実行して範囲を確認し、チェックサムを有効にした状態で移行を実行します。
4. 完了後にFolder Compareを使用し、移行が完全に成功したことを確認します。

RcloneViewを使ったKoofrからBackblaze B2への移行は、データの整合性を常に保護しながら実行できる、信頼性が高く再開可能なプロセスです。

---

**関連ガイド:**

- [RcloneViewでKoofrクラウドストレージを管理する](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [RcloneViewでKoofrからGoogle Driveへ移行する](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [RcloneViewでBackblaze B2クラウドストレージを管理する](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

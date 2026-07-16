---
slug: migrate-cloudflare-r2-to-google-drive-rcloneview
title: "Cloudflare R2からGoogle Driveへ移行 — RcloneViewでファイルを転送"
authors:
  - jay
description: "RcloneViewを使ってCloudflare R2からGoogle Driveへファイルを移行する方法を解説します。予期しないエグレス料金なしで、ガイド付きのビジュアル転送ワークフローを実現します。"
keywords:
  - cloudflare r2 to google drive
  - migrate r2 to google drive rcloneview
  - cloudflare r2 google drive transfer
  - rcloneview cloudflare r2 migration
  - object storage to google drive
  - r2 bucket to google drive rclone
  - cloudflare r2 backup google drive
  - cloud migration rcloneview
tags:
  - cloudflare-r2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudflare R2からGoogle Driveへ移行 — RcloneViewでファイルを転送

> RcloneViewのビジュアルインターフェースを使い、Cloudflare R2バケットからGoogle Driveへファイルを移動します。CLIは不要で、R2側のエグレス料金も発生しません。

Cloudflare R2は、エグレス料金がかからないオブジェクトストレージとして開発者に人気ですが、非技術系の同僚と共有したり、Google Workspaceと連携したり、ストレージアカウントを統合したりするために、データをGoogle Driveへ移動する必要があるチームも多くあります。RcloneViewは両方のサービスをポイント&クリックのワークフローで接続するため、コマンドを一切書かずにR2バケットをGoogle Driveへ移行できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cloudflare R2とGoogle Driveの接続

まず、両方のサービスをリモートとして追加します。**Remote**タブで**New Remote**をクリックし、Cloudflare R2を選択します。Cloudflareの**APIトークン**、**アカウントID**、**エンドポイントURL**（`https://<account-id>.r2.cloudflarestorage.com`の形式）が必要です。RcloneViewはR2に対してrcloneのS3互換バックエンドを使用するため、R2のAPIトークンはそのままAccess KeyとSecret Keyのフィールドに対応します。

次に、Google Driveを2つ目のリモートとして追加します。RcloneViewはOAuth認証用のブラウザウィンドウを開くので、Googleアカウントにサインインしてアクセスを許可してください。APIキーの入力は不要です。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Cloudflare R2 and Google Drive remotes in RcloneView" class="img-large img-center" />

両方のリモートを設定すると、RcloneViewのデュアルパネルエクスプローラーでR2バケットとGoogle Driveのフォルダを並べて閲覧できます。

## 移行の実行

Homeタブで**Sync**をクリックし、4ステップのジョブウィザードを起動します。ステップ1では、ソースとしてR2バケット（またはその中の特定のサブフォルダ）を選択し、宛先としてGoogle Driveのフォルダを選択します。`r2-to-gdrive-migration`のようにジョブ名をわかりやすく付けておくと、後で履歴を確認する際に役立ちます。

ステップ2では、**チェックサム検証**を有効にして、各転送後にファイルの整合性を確認します。これは動画やアーカイブなどの大きなファイルでは特に重要で、転送中の破損が検出されないまま見過ごされることを防げます。リトライ回数は少なくとも3回に設定し、一時的なネットワーク中断を自動的に処理できるようにしてください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a migration job from Cloudflare R2 to Google Drive in RcloneView" class="img-large img-center" />

実行前に、**ドライラン**を実行して、実際にコピーされるファイルを正確にプレビューしましょう。転送対象の一覧とファイルサイズがすべて表示されるため、Google Driveに何も影響を与える前に範囲を確認できます。

## フィルタリングと大量転送の処理

R2バケットに複数の種類のファイルが混在している場合、ステップ3でフィルターを適用できます。あるデザインチームがプロジェクトバケットを移行する際、Max File Sizeフィルターを使って500MBを超える生の`.psd`ファイルを除外しつつ、Web公開用の書き出しファイルはすべて保持する、といった使い方が可能です。**Max File Age**フィルターは段階的な移行にも同様に便利で、過去の全データセットではなく、直近30日以内に変更されたファイルのみを移動できます。

数時間にわたる大規模な移行では、**Job History**タブに各実行の速度、ファイル数、完了ステータスが記録されます。ジョブが途中で中断した場合でも、再実行は安全です。RcloneViewはすでに正常に転送済みのファイルをスキップし、中断した箇所から続行します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring a Cloudflare R2 to Google Drive transfer job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. APIトークン、アカウントID、エンドポイントURLを使ってCloudflare R2をリモートとして追加します。
3. OAuthブラウザログインでGoogle Driveをリモートとして追加します。
4. R2バケットからGoogle Driveのフォルダへ、CopyまたはSyncジョブを作成します。最初にドライランを実行して範囲を確認してください。

Cloudflare R2のゼロエグレスモデルにより、R2側からデータを移動するコストはかかりません。あとの作業はRcloneViewがビジュアルに処理してくれます。

---

**関連ガイド:**

- [RcloneViewでGoogle DriveからCloudflare R2へ移行](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [Cloudflare R2の管理 — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Google Driveの管理 — RcloneViewでファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

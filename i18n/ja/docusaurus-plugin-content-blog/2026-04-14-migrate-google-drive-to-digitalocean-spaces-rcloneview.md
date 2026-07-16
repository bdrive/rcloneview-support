---
slug: migrate-google-drive-to-digitalocean-spaces-rcloneview
title: "Google DriveからDigitalOcean Spacesへの移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewを使ってGoogle DriveからDigitalOcean Spacesオブジェクトストレージへファイルを移動します。CLIスクリプト不要で直接クラウド間移行を行うステップバイステップガイド。"
keywords:
  - migrate Google Drive to DigitalOcean Spaces
  - Google Drive to object storage migration
  - DigitalOcean Spaces backup from Google Drive
  - rclone Google Drive DigitalOcean
  - cloud-to-cloud migration Google Drive
  - move Google Drive to S3 compatible
  - RcloneView Google Drive migration
  - DigitalOcean Spaces file transfer
tags:
  - RcloneView
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google DriveからDigitalOcean Spacesへの移行 — RcloneViewでファイルを転送

> RcloneViewは、Google DriveからDigitalOcean Spacesへの移行を直接クラウド間転送として処理します。ローカルへの一時保存は不要で、進行状況を完全に可視化し、完了時にはチェックサム検証も行います。

Google DriveからDigitalOcean Spacesへのファイル移動は、コンシューマー向けストレージからインフラグレードのオブジェクトストレージへ移行する開発者にとって一般的なワークフローです。スタートアップは、ファイル共有にGoogle Driveを使う運用から、プログラムによるアクセス、CDN連携、大規模利用時のGB単価削減のためにSpacesを使う運用へ移行することがあります。RcloneViewは両プロバイダーに同時接続し、数GB単位のデータをローカルマシン経由で転送することなく、直接ファイルを転送します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを準備する

Google DriveをOAuthリモートとして追加します: **Remoteタブ → New Remote → Google Drive**、ブラウザで認証します。Driveのフォルダがエクスプローラーに即座に表示されます。

DigitalOcean SpacesをS3互換リモートとして追加します: **New Remote → Amazon S3 Compatible → DigitalOcean Spaces**。Spacesのアクセスキー、シークレットキー、リージョンエンドポイント（例: `nyc3.digitaloceanspaces.com`）を入力します。ターゲットのバケットがまだ存在しない場合は、DigitalOceanコントロールパネルで作成してください。

2パネルのエクスプローラーレイアウトを開きます: 左側にGoogle Drive、右側にDigitalOcean Spaces。移行を実行する前に両方を閲覧し、フォルダ構造を確認してください。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## 移行を実行する

フォルダ単位の移行（例: `Google Drive:/Client Projects/` から `do-spaces:projects-bucket/` への移行）には、Job ManagerのSyncジョブウィザードを使用します。ソースと宛先を設定し、ステップ2で以下を構成します:

- **同時転送数**: 高速な接続でのスループットを最大化するには8〜12
- **チェックサム検証**: 有効 — Google Driveは独自のハッシュ方式を使用しますが、rcloneが変換を処理します
- **リトライ**: 3回 — Google APIの一時的なレート制限があっても、ジョブ全体を失敗させずに処理します

まずDry Runを実行してください。Google Driveには、Spacesに直接コピーできないGoogleドキュメント、スプレッドシート、スライドファイルが含まれていることがよくあります（これらはGoogle独自の形式でのみ存在し、ダウンロード可能なファイルとしては存在しません）。Dry Runはこれらの項目を表示するので、先にエクスポートするか、フィルタルールで除外するかを判断できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to DigitalOcean Spaces cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Google Workspaceファイルの取り扱い

ネイティブのGoogle Workspaceファイル（ドキュメント、スプレッドシート、スライド）には直接のファイル形式がなく、エクスポートが必要です。rcloneは転送中にこれらを自動的にPDFまたはOffice形式でエクスポートできます。RcloneViewのSyncジョブでは、エクスポート形式を設定しない限り、Googleドキュメントはデフォルトでスキップされます。1回限りのエクスポートを行うにはTerminalタブで `rclone copy --drive-export-formats docx,xlsx,pptx` を実行するか、Settings → Global Rclone Flagsでカスタムフラグを追加してください。

通常のファイル（PDF、画像、動画、コード）は特別な処理なしで転送され、元の形式とファイル名のままSpacesに配置されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to DigitalOcean Spaces migration with folder comparison" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Google Drive（OAuth）とDigitalOcean Spaces（S3認証情報）をリモートとして追加します。
3. Job ManagerでSyncジョブを作成し、Dry Runを実行して、Google Workspaceファイルの取り扱いを確認します。
4. 移行を実行し、Folder Compareで完了を検証します。

RcloneViewを使ったGoogle DriveからDigitalOcean Spacesへの移行は、構造化された検証可能なプロセスです。ジョブ履歴と転送ログにより、何がいつ移動したかが明確に記録されます。

---

**関連ガイド:**

- [RcloneViewでDigitalOcean Spacesのクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [RcloneViewでGoogle DriveからAWS S3へ移行する](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [RcloneViewによるチェックサム検証付きクラウド移行](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />

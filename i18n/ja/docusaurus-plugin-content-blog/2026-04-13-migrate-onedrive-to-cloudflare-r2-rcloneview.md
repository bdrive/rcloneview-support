---
slug: migrate-onedrive-to-cloudflare-r2-rcloneview
title: "OneDriveからCloudflare R2への移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewを使用して、開発者ワークフローとCDN連携のためにOneDriveのファイルをCloudflare R2に移行します。OAuthとAPIトークンで接続し、フィルターを適用して同期します。"
keywords:
  - OneDriveからCloudflare R2への移行
  - OneDrive R2転送 RcloneView
  - OneDriveからCloudflare R2への同期
  - クラウドストレージ移行 開発者
  - Cloudflare R2オブジェクトストレージ
  - OneDrive代替 R2
  - S3互換ストレージ移行
  - RcloneView OneDrive移行
tags:
  - onedrive
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDriveからCloudflare R2への移行 — RcloneViewでファイルを転送

> Cloudflare R2はCDNとWorkersのパイプラインにネイティブに統合されます — RcloneViewはローカルマシンに触れることなくOneDriveからR2への移行を処理します。

Cloudflareのエコシステムへワークロードを移行する開発者やチームは、OneDriveに保存されているアセットをCloudflare R2に移動する必要があることがよくあります。R2はゼロエグレスのS3互換オブジェクトストレージを提供し、Cloudflare Workers、Pages、CDNと直接統合します — 静的アセット、メディアファイル、ビルド成果物に最適です。RcloneViewはOAuthでOneDriveに、APIトークンでCloudflare R2に接続し、オプションのフィルタールールを使ってクラウド間同期ジョブとして移行を実行します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDriveへの接続

RcloneViewを開き、**リモートマネージャー**に移動します。**新しいリモート**をクリックし、プロバイダーリストから**OneDrive**を選択します。RcloneViewはブラウザを開いてOAuth認証を行います — Microsoftアカウントでサインインし、アクセスを許可してください。個人用OneDrive、OneDrive for Business、SharePointドキュメントライブラリのいずれもこの方法でアクセスできます。

認証後、ファイルエクスプローラーでリモートを開きます。移行予定のフォルダーに移動し、そのパスを控えておきます。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting OneDrive and Cloudflare R2 in RcloneView" class="img-large img-center" />

## Cloudflare R2への接続

**リモートマネージャー**に戻り、**新しいリモート**をクリックして**S3互換**を選択します。Cloudflare R2の認証情報を入力します。

- **アクセスキーID**: Cloudflareダッシュボード → R2 → APIトークンの管理から取得（オブジェクトの読み取り/書き込み権限を持つAPIトークンを作成）
- **シークレットアクセスキー**: トークンのシークレット
- **エンドポイント**: `https://{your-account-id}.r2.cloudflarestorage.com`

リモートを保存します。ファイルエクスプローラーで対象のバケットに移動します（存在しない場合は作成します）。バケットの内容が表示されることを確認し、アクセスできることを検証します。

## フィルターを使った移行ジョブの設定

**ジョブ**に移動し、**新しいジョブ**をクリックします。ソースとしてOneDriveと移行対象の特定フォルダーを設定します。宛先としてCloudflare R2とターゲットのバケットパスを設定します。

ジョブウィザードのステップ2では、**フィルタールール**を適用して移行対象を絞り込むことができます。

- 特定のファイルタイプのみを移行する（例: `--include "*.jpg"`、`--include "*.pdf"`）
- システムフォルダーや一時ファイルを除外する（例: `--exclude ".DS_Store"`）
- **ドライラン**を使用して、実行前にフィルター適用後の結果をプレビューする

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from OneDrive to Cloudflare R2" class="img-large img-center" />

## 移行の実行

ドライランを無効にしてジョブを実行します。RcloneViewは転送パネルにリアルタイムで進捗を表示します — 毎秒のファイル数、現在の速度、転送済みの総データ量です。OneDriveからR2への転送はサーバー間転送であり、ローカルマシンはデータの通り道ではなくオーケストレーターとして機能します。

大きなファイルは自動的にマルチパートアップロードを使用します。転送途中でファイルが失敗した場合、ログタブに具体的なエラーが表示されます。ジョブの再実行は安全です — すでに転送済みのファイルはスキップされます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring OneDrive to Cloudflare R2 transfer in real time" class="img-large img-center" />

## 移行後の検証

移行後は**フォルダー比較**を使って両側を確認します。比較ビューでOneDriveのソースとR2の宛先を開くと、RcloneViewは片側にのみ存在するファイルをハイライト表示します。重要な移行の場合は、ジョブ設定でチェックサム検証を有効にし、バイト単位の正確性を確保してください。

検証が完了したら、Cloudflare Workerのバインディング、CDNルール、またはアプリケーション設定を更新して、OneDriveではなくR2バケットを参照するようにできます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **リモートマネージャー**でOAuthを使ってOneDriveを接続します。
3. APIトークンとアカウントIDのエンドポイントを使ってCloudflare R2を接続します。
4. オプションのフィルターを付けて移行ジョブを作成し、ドライランでプレビューしてから実行します。

Cloudflare R2の緊密なCDN統合とゼロエグレス課金は、かつてOneDriveにあったコンテンツの移行先として魅力的な選択肢になります。

---

**関連ガイド:**

- [RcloneViewを使ったDropboxからCloudflare R2への移行](https://rcloneview.com/support/blog/migrate-dropbox-to-cloudflare-r2-rcloneview)
- [RcloneViewを使ったGoogle DriveからCloudflare R2への移行](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [RcloneViewを使ったAzure BlobからCloudflare R2への移行](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />

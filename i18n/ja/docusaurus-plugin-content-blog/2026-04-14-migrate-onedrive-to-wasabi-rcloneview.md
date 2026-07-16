---
slug: migrate-onedrive-to-wasabi-rcloneview
title: "OneDriveからWasabiへ移行 — RcloneViewでクラウドバックアップ"
authors:
  - tayson
description: "RcloneViewを使ってMicrosoft OneDriveからWasabiのホットクラウドストレージへファイルを移動します。CLIコマンド不要のOneDriveからWasabiへの移行ステップバイステップガイド。"
keywords:
  - migrate OneDrive to Wasabi
  - OneDrive Wasabi transfer
  - OneDrive to S3 migration
  - Wasabi cloud backup from OneDrive
  - rclone OneDrive Wasabi
  - cloud-to-cloud migration OneDrive
  - move Microsoft OneDrive files to Wasabi
  - RcloneView OneDrive migration
tags:
  - onedrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDriveからWasabiへ移行 — RcloneViewでクラウドバックアップ

> RcloneViewを使って、Microsoft OneDriveからWasabiのS3互換ホットクラウドストレージへファイルを転送します — 中間ダウンロード不要の直接クラウド間転送です。

多くの組織はMicrosoft 365にバンドルされたOneDriveから始めますが、データ量が増えるにつれて専用のコスト効率の良いバックアップ層が必要だと気づきます。WasabiのS3互換ホットクラウドストレージは人気の移行先です。固定料金のストレージで、エグレス(送信)料金もかかりません。RcloneViewはrcloneのバックエンドを通じて両方のサービスを橋渡しし、視覚的なインターフェースでOneDriveのコンテンツをWasabiバケットへ移行できます — スクリプト作成は不要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDriveとWasabiの接続

まずOneDriveを追加します。**リモートタブ → New Remote → Microsoft OneDrive** を選び、OAuthブラウザログインで認証し、リモートが保存されたことを確認します。個人用OneDriveの場合、このプロセスは即座に完了します。OneDrive for Businessの場合は、認証時に正しいテナントを選択する必要がある場合があります。

次にWasabiを追加します。**New Remote → Amazon S3 Compatible → Wasabi** を選びます。Wasabiのアクセスキー、シークレットキーを入力し、バケットのリージョンに対応する正しいエンドポイント(例: `s3.us-east-1.wasabisys.com`)を選択します。WasabiのS3 APIは、特別な設定なしでrcloneのS3バックエンドと互換性があります。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Wasabi remotes in RcloneView" class="img-large img-center" />

## 移行範囲の計画

エクスプローラーを2パネルレイアウトで開きます — 左側にOneDrive、右側にWasabiです。OneDriveのツリーを参照し、移行したいフォルダを特定します。法務部門であれば `Contracts/2020-2024/` のアーカイブを移動するかもしれませんし、デザイン会社であれば500GBのレイヤーファイルを含む `Client-Assets/` フォルダを移行するかもしれません。

転送を実行する前に、ソースフォルダを右クリックしてRcloneViewの**Get Size**オプションでデータ総量を計算しましょう。大規模な移行の場合、帯域幅を他のユーザーやサービスと共有している場合は、ジョブを夜間に実行するよう設定してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Viewing OneDrive to Wasabi transfer in RcloneView" class="img-large img-center" />

## 検証付きで同期ジョブを実行する

ジョブマネージャーで同期ジョブを作成します。ソースはOneDriveのパス、宛先はWasabiバケットのパスです。ステップ2で**チェックサム検証**を有効にし、転送後に各ファイルのハッシュを検証します — これはコンプライアンスが重視されるアーカイブでは必須です。同時転送数は6〜8に設定し、速度とAPIの安定性のバランスを取ります。

まずドライランを実行し、操作リストをプレビューします。ファイル名に特殊文字を含むOneDriveのアイテム(ユーザー生成コンテンツでよく見られます)は、エンコーディング調整のためにフラグが立てられます。ライブ転送を実行する前に、ドライラン後のログタブを確認して問題がないかチェックしてください。

移行後は、RcloneViewの**フォルダ比較**機能を使ってOneDriveのソースとWasabiの宛先を視覚的に差分比較し、OneDriveのコピーを廃止する前にファイル数とサイズが一致していることを確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OneDrive and Wasabi folders after migration in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. New Remoteウィザードで、OAuthログイン経由でOneDriveを、S3認証情報経由でWasabiを追加します。
3. フォルダ比較を使って移行範囲を評価し、ジョブマネージャーで同期ジョブを作成します。
4. チェックサム検証を有効にし、ドライランを実行してから、完全な移行を実行します。

RcloneViewを使ってOneDriveからWasabiへ移行することで、検証済みで監査可能な移行の記録が得られます — ジョブ履歴と転送ログは自動的に保存されます。

---

**関連ガイド:**

- [RcloneViewでOneDriveからBackblaze B2へ移行](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [RcloneViewでOneDriveからGoogle Driveへ移行](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [RcloneViewでOneDriveのクラウド同期とバックアップを管理](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

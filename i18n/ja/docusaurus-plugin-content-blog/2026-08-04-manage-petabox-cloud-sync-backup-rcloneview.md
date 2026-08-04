---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Petaboxストレージの管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - kai
description: "Petabox S3互換ストレージをRcloneViewに接続し、90以上の他のクラウドプロバイダーと合わせてクロスプラットフォームで閲覧、同期、バックアップ、マウントを行いましょう。"
keywords:
  - Petabox
  - Petabox RcloneView
  - Petabox 同期
  - Petabox バックアップ
  - S3互換ストレージ
  - Petabox 管理
  - オブジェクトストレージ GUI
  - Petabox クラウドストレージ
  - S3互換クラウドマネージャー
  - Petabox rclone
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Petaboxストレージの管理 — RcloneViewでファイルを同期・バックアップ

> 別途S3クライアントを用意することなく、他のクラウドと同じウィンドウでPetaboxオブジェクトストレージを閲覧、同期、バックアップします。

PetaboxはS3互換のオブジェクトストレージサービスであり、Amazon S3やWasabiと同じように、アクセスキー、シークレットキー、カスタムエンドポイントを通じてRcloneViewに接続できます。接続後、PetaboxはRcloneViewのファイルエクスプローラー内で他のリモートと同様に動作します — 閲覧可能、同期可能、そして他のプロバイダーと並んでマウント可能です。これは、オブジェクトストレージの経済性を理由にPetaboxを選んだものの、AWS CLIやバケット専用のWebコンソールではなく通常のファイルマネージャー体験を必要とするチームにとって重要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Petaboxをs3互換リモートとして接続する

Petaboxの追加は、RcloneViewの標準的なS3互換リモートのフローに従います:「New Remote」を開き、S3互換タイプを選択して、PetaboxのAccess Key ID、Secret Access Key、そしてPetaboxダッシュボードのバケットエンドポイントURLを入力してください。RcloneViewには組み込みのrcloneバイナリが同梱されているため、別途インストールする手順は不要です — 認証情報だけでバケットをファイルエクスプローラーに取り込めます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

追加が完了すると、PetaboxはGoogle DriveやOneDriveと同じようにエクスプローラーパネルのタブとして表示されます。マウント専用のS3ブラウザとは異なり、RcloneViewはPetaboxに対して同期とフォルダ比較も行います — FREEライセンスで、基本的な同期に別途購入は必要ありません。

## Petaboxを他のクラウドプロバイダーと同期する

Petaboxのよくある使用例は、より高価なプロバイダーに現在存在するデータをアーカイブしたり、冗長性のために稼働中のバケットをミラーリングしたりすることです。RcloneViewの同期ウィザードでは、Petaboxをソースまたはデスティネーションのいずれかに設定でき、ファイルタイプ、経過日数、サイズによるフィルターで必要なデータのみを移動できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Petabox object storage with another cloud provider in RcloneView" class="img-large img-center" />

ドライラン(Dry Run)モードでは、実際に何かが実行される前に、コピーまたは削除される内容を正確にプレビューできます — 誤って上書きしたくないバケットに対して単方向同期を実行する際に便利です。比較(Compare)ビューはさらに一歩進んで、コピーを実行する前にPetaboxと2つ目のリモートの間で左側のみ、右側のみ、サイズが異なるファイルを表示します。

## Petaboxの定期バックアップをスケジュールする

継続的な保護のためには、Petabox同期を手動で再実行する代わりにJob Managerにジョブとして保存してください。PLUSライセンスのユーザーはcrontab形式のスケジュールを設定でき、Petaboxとの間のバックアップを自動的に実行させ、実行のたびに作業履歴(Job History)がステータス、転送速度、ファイル数を記録します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Petabox backup job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. 「New Remote」を開き、Petabox用のS3互換ストレージタイプを選択します。
3. Access Key、Secret Key、Petaboxエンドポイントを入力し、バケットを閲覧します。
4. 同期またはバックアップジョブを設定し、必要に応じてJob Managerでスケジュールを設定します。

Petaboxのオブジェクトストレージの価格設定は、RcloneViewがPetaboxとすでに管理している他のあらゆるクラウドとの間でデータを自由に移動できる能力と相性が良いです。

---

**関連ガイド:**

- [Cloudflare R2の管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Wasabiストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneViewでAmazon S3バケットをローカルドライブとしてマウント](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />

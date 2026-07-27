---
slug: migrate-proton-drive-to-wasabi-rcloneview
title: "Proton DriveからWasabiへ移行 — RcloneViewでファイルを転送する"
authors:
  - kai
description: "RcloneViewの直接クラウド間転送を使い、Proton Driveの暗号化されたファイルをWasabiオブジェクトストレージへ移動します。ローカルへのダウンロードは不要です。"
keywords:
  - Proton DriveからWasabiへ移行
  - Proton DriveからWasabiへ転送
  - クラウド間移行
  - Wasabiオブジェクトストレージバックアップ
  - Proton Driveバックアップ
  - Proton Driveファイル転送
  - RcloneView 移行
  - 暗号化クラウドストレージ移行
tags:
  - RcloneView
  - proton-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton DriveからWasabiへ移行 — RcloneViewでファイルを転送する

> ローカルディスクを経由せずに、Proton Driveから直接Wasabiオブジェクトストレージへファイルを移動しましょう。

Proton Driveはプライバシー重視の個人向けストレージ向けに作られていますが、Wasabiが得意とするワークロード — 大規模なメディアライブラリ、アプリケーションのバックアップ、他ツールからのS3互換アクセスを必要とするデータセットなど — 向けには設計されていません。ユーザーがProton Driveの利用範囲を超えた場合、あるいは単により安価な長期保存用の二次コピーが欲しい場合、RcloneViewはすべてをローカルにダウンロードすることなく、2つのリモートに同時に接続してファイルを直接両者間で移動させます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

RcloneViewでのProton Driveは、メールアドレスとパスワード(任意で2FA)で設定し、WasabiはアクセスキーID、シークレットアクセスキー、適切なリージョンエンドポイントを使用してS3互換リモートとして追加します。両方のリモートはエクスプローラー内でタブとして表示されるため、転送を開始する前に一方のパネルでProton Driveフォルダを、もう一方のパネルでWasabiバケットを閲覧できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでProton DriveとWasabiのリモートを設定する" class="img-large img-center" />

RcloneViewはS3、Azure、Backblaze B2もFREEライセンスで完全な読み書きアクセスとして接続できるため、この移行のWasabi側のセットアップに有料プランは必要ありません。

## クラウド間転送を実行する

両方のリモートを開いた状態で、Proton DriveパネルからWasabiパネルへフォルダをドラッグすると、直接コピーが実行されます — データはRcloneViewを経由してProton DriveからWasabiへストリーミングされ、ローカルディスクには一切触れません。より大規模な移行には、同期ウィザードの方が適したツールです。これはProton DriveソースからWasabi宛先バケットへの正式な一方向同期をサポートし、利用可能な帯域幅を最大限に活用できるよう同時転送数を設定できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでのProton DriveからWasabiへのクラウド間ファイル転送" class="img-large img-center" />

Dry Runモードは、大規模な移行では最初に実行しておく価値があります — 実際に何かが移動する前に、どのファイルがコピーされるかを正確にリストアップし、フィルターの設定ミスや予期しないフォルダ構造を早期に発見できます。

## 移行完了の確認

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="RcloneViewでWasabiリモートへドラッグ&ドロップでファイル転送する" class="img-large img-center" />

同期ジョブが完了すると、下部の情報ビューの転送タブに、移動した総ファイル数、転送速度、ジョブ中に発生したエラーが表示されます。1回限りの転送ではなく保存済みジョブとして実行された移行の場合、ジョブ履歴に開始時刻、所要時間、総サイズ、完了ステータスが永続的に記録されるため、Proton Driveのコピーを廃止する前に、すべてのファイルがWasabiに正しく到着したことを確認できる明確なログが残ります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. アカウントのメールアドレスとパスワードを使ってProton Driveリモートを追加します。
3. アクセスキー、シークレットキー、リージョンエンドポイントを使ってWasabiリモートを追加します。
4. まずDry Runを実行し、その後同期を実行してジョブ履歴で転送結果を確認します。

すべてのファイルが無事にWasabiへ到達したことを示す検証済みのログがあれば、Proton Driveのフォルダを廃止する作業もずっと気軽に行えます。

---

**関連ガイド:**

- [Proton Driveの管理 — RcloneViewでファイルを同期・バックアップする](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Wasabiストレージの管理 — RcloneViewでファイルを同期・バックアップする](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Proton DriveからBackblaze B2へ移行 — RcloneViewでファイルを転送する](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

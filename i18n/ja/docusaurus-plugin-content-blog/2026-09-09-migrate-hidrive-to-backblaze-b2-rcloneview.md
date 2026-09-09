---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "HiDriveからBackblaze B2への移行 — RcloneViewでファイルを転送する"
authors:
  - kai
description: "RcloneViewを使ってHiDriveからBackblaze B2へファイルを移行 — ローカルにファイルをステージングせずに2つのプロバイダー間でデータを移動できるクロスプラットフォームGUIです。"
keywords:
  - HiDriveからBackblaze B2への移行
  - HiDrive Backblaze B2 転送
  - RcloneView HiDrive 移行
  - HiDrive クラウドバックアップツール
  - Backblaze B2 移行 GUI
  - HiDrive ファイルをB2へ移動
  - クラウド間転送 RcloneView
  - HiDrive B2 同期
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDriveからBackblaze B2への移行 — RcloneViewでファイルを転送する

> ローカルドライブに先にダウンロードすることなく、RcloneViewを使ってHiDriveからBackblaze B2へ直接ファイルを移動します。

HiDriveアカウントの容量を超えて成長したチームは、より低コストなオブジェクトストレージとアプリケーションキーモデルを理由にBackblaze B2へ移行することがよくありますが、両サービスはネイティブには連携しません。RcloneViewは1つのウィンドウでこれらを橋渡しします。両方をリモートとして接続し、パネル間でファイルをドラッグすると、内蔵のrcloneエンジンがプロバイダーがサポートする範囲でサーバー間転送を処理します。転送そのものに手動でのエクスポートやローカルのステージングフォルダは不要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDriveとBackblaze B2を接続する

まず**Remote tab → New Remote**からHiDriveを追加します。HiDriveはOAuthブラウザログインを使用するため、RcloneViewがブラウザウィンドウを開いてサインインとアクセス許可を行います — APIキーを手動でコピーする必要はありません。Backblaze B2は設定方法が異なります。リモートタイプとしてBackblaze B2を選択し、Backblazeのキー管理ページで生成したApplication Key IDとApplication Keyを入力してください。両方のリモートがRemote Managerに表示されたら、Explorerパネルを2つ並べて開き、一方をHiDriveに、もう一方をB2バケットに向けます。

マウント専用のツールとは異なり、RcloneViewはこうしたリモート間の同期とフォルダ比較もFREEライセンスで提供します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでHiDriveリモートを追加する" class="img-large img-center" />

## 一括転送または定期同期を実行する

一度きりの移行の場合は、HiDriveパネルでフォルダを選択してB2パネルにドラッグし、転送を確定します — RcloneViewはリモート間のドラッグをコピーとして扱うため、データが正しく転送されたことを確認するまでHiDrive側の元データはそのまま残ります。移行期間中もHiDriveに新しいファイルが届き続けるような継続的な移行の場合は、代わりに同期ジョブを作成してください。4ステップのウィザードでHiDriveをソース、B2を宛先として選び、方向を一方向の「Modifying destination only」に設定し、差分を追いつかせたいときに手動で実行します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="HiDriveからBackblaze B2へのクラウド間同期ジョブ" class="img-large img-center" />

最終的な切り替えの前に、ジョブのDry Runオプションを実行して、どのファイルがコピーされ、どのファイルが（もしあれば）宛先側で削除されるかを事前に確認してください — 本番のワークフローを新しいB2バケットに向ける前に役立つチェックです。

## 移行の確認と自動化

初回の移行が完了したら、完了メッセージ1つを信用するのではなく、Folder Compareを使って両側をファイル単位で確認し、ファイル数とサイズが一致しているか検証してください。移行をスケジュールに沿って繰り返す必要がある場合 — 例えば移行期間中に新しくアップロードされるHiDriveのファイルをB2に反映し続ける場合 — PLUSライセンスでcrontab形式のスケジューリングを利用すれば、移行計画に合わせた間隔で同期ジョブを無人で実行できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="HiDriveからBackblaze B2への定期同期ジョブをスケジュールする" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**。
2. Remote ManagerでOAuthブラウザログインを使ってHiDriveを追加します。
3. Application Key IDとApplication Keyを使ってBackblaze B2を追加します。
4. Dry Runを実行してから、2つのパネル間で転送または同期ジョブを実行します。

両方のリモートを設定してしまえば、HiDriveからB2への移行も、普段のファイル管理で使っているのと同じインターフェース上でのドラッグ&ドロップやスケジュールジョブの一つに過ぎません。

---

**関連ガイド:**

- [HiDriveストレージを管理する — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Backblaze B2ストレージを管理する — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [HiDriveをAmazon S3に同期する — RcloneViewでクラウドバックアップ](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)

<CloudSupportGrid />

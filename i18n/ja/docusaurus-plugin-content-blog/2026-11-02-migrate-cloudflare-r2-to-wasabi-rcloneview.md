---
slug: migrate-cloudflare-r2-to-wasabi-rcloneview
title: "Cloudflare R2からWasabiへ移行 — RcloneViewでファイルを転送"
authors:
  - robin
description: "RcloneViewでCloudflare R2のバケットをWasabiへ移動：S3互換リモート2つを接続し、Dry Run、バケット間コピー、Folder Compareで検証します。"
keywords:
  - Cloudflare R2からWasabiへ移行
  - R2からWasabiへの転送
  - R2バケットをWasabiへ移動
  - S3互換バケットの移行
  - クラウド間転送
  - RcloneView Cloudflare R2
  - RcloneView Wasabi
  - オブジェクトストレージ移行 GUI
tags:
  - RcloneView
  - cloudflare-r2
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudflare R2からWasabiへ移行 — RcloneViewでファイルを転送

> Cloudflare R2のバケットを1つのウィンドウからWasabiへコピーします。最初にDry Runを行い、完了後に目視で確認します。

Cloudflare R2とWasabiはどちらもS3プロトコルを使うため、両者間のデータ移動は概念的には単純です。しかし、生のCLIフラグで行うと、2つのエンドポイントと2組の認証情報を扱う必要があり、何が反映されたかを簡単に確認する手段もありません。RcloneViewは両方をリモートとして接続し、GUIでコピー、監視、検証を行えるようにします。FREEライセンスでS3互換サービスに読み書き可能な状態で接続できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## S3互換リモートを2つ接続する

New Remoteダイアログを開き、最初にCloudflare R2を追加します。R2にはAPIトークン、Account ID、そして`https://<ACCOUNT_ID>.r2.cloudflarestorage.com`の形式のエンドポイントが必要です。バケットを作成した後、Cloudflareダッシュボードでトークンを生成してください。RcloneViewのR2設定では、トークンにAdmin Read & Write権限が必要です。

次にWasabiを追加します。WasabiコンソールのAccess KeyとSecret Keyを入力し、移行先バケットのリージョンに合ったエンドポイントを選択します。移行先バケットはあらかじめWasabiで作成しておくか、Explorerパネルからフォルダーを作成してください。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでCloudflare R2とWasabiのリモートを追加" class="img-large img-center" />

## 2つのパネルでコピーを計画する

左のExplorerパネルでR2リモートを、右でWasabiリモートを開きます。移動したいバケットまたはプレフィックスに移動してください。数テラバイトのメディアアーカイブを持つスタジオなら、バケット全体を移す前に、まず1つのプロジェクトのプレフィックスを移行して権限や命名を確認するのもよいでしょう。

両端がリモートであるため、RcloneViewはこれを2つのリモート間のクラウド間転送として実行し、手動でダウンロードしてからアップロードする手順を自分で管理する必要はありません。リモートが異なる場合、パネル間のドラッグは既定でコピーになります。繰り返し実行するにはSyncウィザードでCopyジョブを作成します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewで2つのパネル間のクラウド間転送" class="img-large img-center" />

## Dry Run、調整、実行

実際の転送の前に、ジョブウィザードでDry Runを有効にします。コピーされるファイルが正確に一覧表示されるため、データが移動する前にプレフィックスの間違いに気づけます。Advanced Settingsでは、小さなオブジェクトが多いバケットではファイル転送数を増やし、サイズだけでなくハッシュとサイズで照合したい場合はチェックサム比較を有効にします。フィルターのステップで一時フォルダーを除外したり、ファイルの経過期間で絞り込んだりできます。

Job Managerからジョブを開始し、Transferringタブで進捗を確認します。速度、ファイル数、転送バイト数がライブで更新されます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewのJob Managerから移行ジョブを実行" class="img-large img-center" />

## Folder Compareで検証する

ジョブが完了したら、左にR2、右にWasabiを置いてCompareを開きます。left-onlyのファイルで絞り込むと不足分が、differentのファイルで絞り込むとサイズの不一致がわかります。残りがある場合はCopy rightで補い、結果がクリーンになるまで再比較してください。実行のステータス、所要時間、ファイル合計はJob Historyで確認できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewのFolder Compareでバケット移行を検証" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. New RemoteからCloudflare R2とWasabiのリモートを追加します。
3. 両方を並べたパネルで開き、Dry RunでCopyジョブを実行します。
4. ジョブを実行し、Folder Compareで結果を確認します。

Compareが完全に一致するまでR2には手を付けずにおけば、安心してストレージを切り替えられます。

---

**関連ガイド：**

- [WasabiからCloudflare R2へ移行](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [RcloneViewでWasabiストレージを管理する](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneViewでCloudflare R2を管理する](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />

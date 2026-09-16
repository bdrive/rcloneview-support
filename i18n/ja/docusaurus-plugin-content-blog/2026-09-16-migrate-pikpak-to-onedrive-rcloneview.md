---
slug: migrate-pikpak-to-onedrive-rcloneview
title: "PikPakからOneDriveへ移行 — RcloneViewでファイルを転送"
authors:
  - steve
description: "コマンドライン操作なしでクラウドストレージを移行できるrclone GUI、RcloneViewを使ってPikPakからOneDriveへファイルを移動します。"
keywords:
  - pikpak onedrive 移行
  - pikpak onedrive 転送
  - pikpak onedrive マイグレーション
  - rclone gui pikpak
  - クラウド間移行ツール
  - pikpak onedrive バックアップ
  - pikpak ファイル転送
  - rcloneview 移行
  - pikpak クラウドストレージ
  - onedrive 同期ツール
tags:
  - RcloneView
  - pikpak
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# PikPakからOneDriveへ移行 — RcloneViewでファイルを転送

> ローカルディスクに一度ダウンロードすることなく、PikPakにためたファイルをOneDriveにまとめましょう。

PikPakはオフラインダウンロードやマグネットリンクの受け皿として人気ですが、多くの人が長期的にファイルを保管したい場所ではありません — Microsoft 365と連携できるOneDriveがその役割を担うことが多いです。手作業で一方から他方へ移そうとすると、ローカルドライブにダウンロードしてから再アップロードする必要があり、時間がかかるうえ中断もしやすくなります。RcloneViewなら、1つのジョブで2つのリモート間を直接移動できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## PikPakとOneDriveをリモートとして接続する

**Remoteタブ > New Remote**を開き、まずPikPakを追加して、画面の指示に従ってアカウントを認証します。次にOneDriveを追加します。これはRcloneViewのOAuthブラウザログインを使用するため、ウィンドウが開いたらサインインするだけで、APIキーをコピー&ペーストする必要なくリモートが自動的に接続されます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでPikPakとOneDriveを新しいリモートとして追加している様子" class="img-large img-center" />

両方のリモートがRemote Managerに表示されたら、転送を設定する前に2ペインのExplorerで並べて開き、正しいフォルダーを見ているか確認しましょう。

## 移行ジョブを設定する

Homeタブで**Sync**をクリックし、4ステップのウィザードを起動します。Step 1でPikPakフォルダーをソース、対象のOneDriveフォルダーを宛先として選択し、PikPak側には手を加えずOneDrive側だけがコピーを受け取るように**One-way (modifying destination only)**を選択します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでPikPakからOneDriveへの転送ジョブを設定している様子" class="img-large img-center" />

多数の小さなファイルを移動する場合はStep 2でファイル転送数を増やし、特定のコンテンツだけを先に移したい場合はStep 3で最大ファイルサイズや拡張子フィルターを適用します。実際の転送の前に**Dry Run**を実行すれば、コピーされる内容が正確に一覧表示されるため、時間を無駄にする前に誤ったフォルダー選択に気づけます。

## 転送を監視して確認する

ジョブを開始し、**Transferring**タブに切り替えて進捗、速度、ファイル数をリアルタイムで確認します。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウント・同期できるため、PikPakからOneDriveへのジョブがバックグラウンドで実行されている間も他のリモートを確認し続けられます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="完了したPikPakからOneDriveへの移行を示すジョブ履歴" class="img-large img-center" />

ジョブが完了したら、**Job History**で転送された総サイズとファイル数を確認し、移行完了と判断する前に**Folder Compare**で両側が一致しているか確かめましょう。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. Remote Manager経由でPikPakとOneDriveのアカウントをリモートとして追加します。
3. PikPakからOneDriveへの一方向同期ジョブを作成し、まずDry Runを実行します。
4. ジョブを実行し、Job HistoryとFolder Compareで結果を確認します。

PikPakのコンテンツがOneDriveに収まれば、OneDriveが提供するコラボレーション機能やOffice連携をすぐに活用できます。

---

**関連ガイド:**

- [PikPakからGoogle Driveへ移行](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [PikPak、Google Drive、S3を同期する](https://rcloneview.com/support/blog/sync-pikpak-cloud-google-drive-s3-rcloneview)
- [PikPak同期エラーを修正する](https://rcloneview.com/support/blog/fix-pikpak-sync-errors-rcloneview)

<CloudSupportGrid />

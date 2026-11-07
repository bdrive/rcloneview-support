---
slug: migrate-mailru-cloud-to-google-drive-rcloneview
title: "Mail.ru Cloud から Google Drive へ移行 — RcloneView でファイルを転送"
authors:
  - tayson
description: "RcloneView で Mail.ru Cloud から Google Drive へ移行：両方のリモートを接続し、Dry Run を実行し、クラウド間でフォルダーをコピーして、Folder Compare で結果を検証します。"
keywords:
  - Mail.ru Cloud から Google Drive へ移行
  - Mail.ru Cloud 転送
  - Mail.ru から Google Drive へ
  - RcloneView Mail.ru
  - クラウド間移行
  - クラウド間でファイルを移動
  - Mail.ru Cloud バックアップ
  - rclone GUI 移行
  - Google Drive 移行ツール
  - Folder Compare による検証
tags:
  - RcloneView
  - mailru
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mail.ru Cloud から Google Drive へ移行 — RcloneView でファイルを転送

> 手動のダウンロードと再アップロードの代わりに、目で確認でき検証もできるワークフローで、Mail.ru Cloud のファイルを Google Drive へ移しましょう。

長年にわたる文書、スキャンデータ、メディアを Mail.ru Cloud から移すには、通常、ノートパソコンにすべてダウンロードしてから再びアップロードする必要があります。rclone をベースにした GUI の RcloneView は、両方のサービスをリモートとして接続するため、1 つのウィンドウでコピーして結果を検証できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

RcloneView を開き、**New Remote** で Mail.ru Cloud と Google Drive を追加します。Google Drive はブラウザーで OAuth によりサインインするため、API キーは不要です。Mail.ru Cloud はサポート対象プロバイダーに含まれています。画面の指示に従って認証情報を入力してください。両方が Remote Manager に表示されたら、2 つの Explorer パネルに並べて開きます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で Mail.ru Cloud と Google Drive のリモートを追加する" class="img-large img-center" />

RcloneView は Windows、macOS、Linux 上で、1 つのウィンドウから 90 以上のクラウドストレージサービスに対応しているため、今後の移行でも同じ手順で設定できます。

## 移動する前にコピー計画を立てる

まずコピー元のツリーを閲覧します。最上位フォルダーで **Get Size** を使って容量を見積もり、今移すものと後回しにできるものを決めます。たとえば小規模な会社なら、共有の「Contracts」フォルダーはすぐに移行し、大きな「Archive」フォルダーは業務時間外にスケジュールするといった進め方ができます。

Mail.ru パネルから Google Drive パネルへフォルダーをドラッグします。異なるリモート間のドラッグは **Copy** として動作するため、納得するまでコピー元はそのまま残ります。大規模な移行では、Sync ウィザードで Copy ジョブを作成し、Advanced Settings で転送数を設定し、ISO イメージなど不要なファイルはフィルターで除外します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView で 2 つのリモート間のクラウド間転送" class="img-large img-center" />

## Dry Run、転送、モニタリング

最初に **Dry Run** を実行します。どちら側にも触れずにコピーされる内容を一覧表示するため、間違ったパスを時間を無駄にする前に見つけられます。一覧が正しければジョブを開始し、Transferring タブで進捗、速度、ファイル数を確認します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView の Transferring タブで実行中の転送を監視する" class="img-large img-center" />

## Folder Compare で検証する

コピーが完了したら、左に Mail.ru Cloud、右に Google Drive を置いて **Compare** を開きます。left-only と different のファイルで絞り込み、不足または不一致のものを確認して、それらをコピーします。Job History には、ステータス、サイズ、所要時間が記録されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="コピー元とコピー先の差分を示す Folder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. **New Remote** で Mail.ru Cloud と Google Drive を追加します。
3. 1 つのフォルダーで Dry Run を実行し、その後 Copy ジョブを開始します。
4. 古いアカウントを閉じる前に Folder Compare で確認します。

検証済みのクラウド間の直接コピーにより、移行のリスクが下がり、中断後も再開しやすくなります。

---

**関連ガイド:**

- [Mail.ru Cloud の同期を管理](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Mail.ru Cloud を Google Drive と S3 へ転送](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [Mail.ru Cloud を Backblaze B2 へ移行](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

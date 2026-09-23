---
slug: manage-http-remote-cloud-sync-rcloneview
title: "HTTP リモートストレージを管理する — RcloneView でファイルを閲覧・同期"
authors:
  - alex
description: "読み取り専用の HTTP ファイルインデックスを RcloneView に接続し、その内容を Google Drive、S3、Backblaze B2 など 90 以上のクラウドストレージプロバイダーに同期します。"
keywords:
  - HTTP リモート RcloneView
  - HTTP ファイルサーバー同期
  - 読み取り専用 HTTP ストレージ
  - HTTP からクラウドへ同期
  - HTTP ディレクトリ一覧 rclone
  - HTTP から Google Drive へ
  - HTTP から Amazon S3 へ
  - HTTP ファイルのアーカイブ
  - RcloneView HTTP 接続
  - HTTP リモートの閲覧
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HTTP リモートストレージを管理する — RcloneView でファイルを閲覧・同期

> RcloneView は公開されている HTTP ファイルインデックスを閲覧可能なリモートに変換し、wget コマンドを一切使わずにその内容を Google Drive、S3、その他 90 以上のクラウドプロバイダーに取り込めるようにします。

多くのデータセット、ファームウェアアーカイブ、研究用ミラー、社内のビルド成果物が、API もログインもなく、URL で配信されるシンプルな HTTP ディレクトリ一覧の背後に今も存在しています。こうしたソースからダウンロードするには、通常 curl や wget のループをスクリプト化し、実行中にディレクトリ構造が変わらないことを願うしかありません。RcloneView は任意の HTTP エンドポイントを読み取り専用リモートとして接続し、クラウドストレージと同じエクスプローラーパネルで閲覧できるようにし、必要なものを適切なバックアップ先へコピーできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView で HTTP リモートを接続する

**Remote** タブを開き **New Remote** をクリックして、プロバイダーの一覧から HTTP を選択します。閲覧したいファイルインデックスのベース URL を入力すると、RcloneView がサーバーのディレクトリ一覧を読み取り、通常のフォルダツリーとして表示します。HTTP リモートは設計上読み取り専用のため、OAuth フローも管理すべき認証情報もありません。ファイルの一覧表示、閲覧、ダウンロードはできますが、ソースサーバーへのアップロード、名前変更、削除はできません。

この違いは、このリモートタイプの使い方において重要です。マウント専用ツールとは異なり、RcloneView は FREE ライセンスでも同期とフォルダ比較を提供するため、HTTP リモートは書き込み可能なクラウドまたはローカルの宛先を反対側に置き、そこからデータを取り込むソースとして使うのが最適です。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で新しい HTTP リモートを追加する画面" class="img-large img-center" />

## HTTP インデックスの閲覧とダウンロード

接続後、HTTP リモートは RcloneView のマルチペインエクスプローラー内で他のパネルと同じように動作します。フォルダツリーを展開し、サーバーが情報を提供している場合はファイルサイズと更新日時を確認し、Ctrl+Click または Shift+Click で複数のファイルやサブフォルダを選択してからダウンロードします。隣接パネルで Backblaze B2 バケットや Google Drive フォルダなどのクラウド宛先を開き、ファイルをドラッグして転送を開始できます。

これは、公開データセットアーカイブをミラーリングしたり、ベンダーの HTTP 配布拠点からファームウェアイメージを取得したり、ディレクトリ一覧しか公開していない社内ビルドサーバーのスナップショットをアーカイブしたりするチームでよく見られるパターンです。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView で HTTP リモートからクラウドストレージへファイルをコピーする画面" class="img-large img-center" />

## HTTP ソースからの定期的な取り込みをスケジュールする

HTTP インデックスが夜間ビルドや週次のデータセット更新のように定期的に更新される場合は、HTTP リモートをソース、クラウドストレージを宛先とする Job Manager エントリを設定します。HTTP ディレクトリ一覧が公開するメタデータの量はサーバーによって異なるため、実際の転送前にファイルのマッチングが想定どおり動作するか確認するために、まず **Dry Run** を実行してコピーされるファイルを正確に確認してください。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView で HTTP リモートからファイルを取り込む定期ジョブをスケジュールする画面" class="img-large img-center" />

**PLUS ライセンス** では、ジョブに crontab 形式のスケジュールを設定できるため、HTTP サーバーに公開された新しいファイルをそのスケジュールに従ってクラウドアーカイブに取り込むことができ、その後 **Job History** タブで転送件数を確認したり、ソースサーバーが提供を停止したファイルを見つけたりできます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** します。
2. **Remote** > **New Remote** を開き、プロバイダーの一覧から HTTP を選択します。
3. ディレクトリ一覧のベース URL を入力してリモートを保存します。
4. 片方のパネルに HTTP リモートを、もう片方にクラウド宛先を開きます。
5. **Job Manager** で同期ジョブを設定し、最初の実転送前に Dry Run を実行します。

HTTP ソースを接続すれば、クラウドアーカイブへのファイル取り込みは、毎回思い出して再実行しなければならない使い捨てスクリプトではなく、繰り返し実行可能で監査可能なジョブになります。

---

**関連ガイド:**

- [Connect Any WebDAV Server to RcloneView — Sync with Google Drive, S3, and 90+ Clouds](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Connect Any SFTP Server to RcloneView — Sync Remote Servers with Cloud Storage](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Manage FTP Server Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

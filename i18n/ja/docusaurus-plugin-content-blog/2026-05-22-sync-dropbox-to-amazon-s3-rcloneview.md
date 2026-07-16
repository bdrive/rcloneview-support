---
slug: sync-dropbox-to-amazon-s3-rcloneview
title: "DropboxをAmazon S3に同期 — RcloneViewによるクラウドバックアップ"
authors:
  - tayson
description: "RcloneViewを使ってDropboxのファイルをAmazon S3に同期・バックアップする方法を解説します。スケジュール設定、ドライラン(試験実行)プレビュー、転送履歴を備えたクラウド間転送のセットアップ方法を紹介します。"
keywords:
  - Dropbox to Amazon S3
  - Dropbox S3 backup
  - sync Dropbox to S3
  - RcloneView cloud-to-cloud
  - Dropbox backup to object storage
  - Amazon S3 backup
  - cloud migration rclone GUI
  - automate Dropbox backup
  - Dropbox S3 sync
  - cloud-to-cloud file transfer
tags:
  - dropbox
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DropboxをAmazon S3に同期 — RcloneViewによるクラウドバックアップ

> DropboxのファイルをAmazon S3にミラーリングして、耐久性が高く独立して管理できるオブジェクトストレージを実現しましょう。RcloneViewのビジュアルなクラウド間同期機能を使えば、CLIは一切不要です。

多くのチームは日々のコラボレーションにDropboxを利用していますが、長期保存やコンプライアンス上のアーカイブ、ベンダー依存の低減のために、Amazon S3にセカンダリバックアップを持ちたいと考えています。RcloneViewを使えば、ローカルマシンを経由したりrcloneコマンドを手作業で書いたりすることなく、Dropboxから直接S3バケットへファイルを同期できます。500GBのプロジェクトファイルを扱う映像制作会社であれば、毎晩実行されるDropbox→S3バックアップジョブを数分でセットアップでき、実行のたびに完全な監査記録を残すことができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## DropboxとAmazon S3をリモートとして接続する

まず、RcloneViewに両方のプロバイダーを追加します。**Remote タブ > New Remote** に進み、**Dropbox** を選択します。RcloneViewがOAuth認証用のブラウザウィンドウを開きます。アクセスを許可すると、Dropboxアカウントがすぐにエクスプローラーパネルに表示され、APIキーや手動でのトークン設定は一切不要です。

Amazon S3については、2つ目のリモートを追加し、**Amazon S3** を選択して、**Access Key ID**、**Secret Access Key**、対象の**リージョンコード**(例: `us-east-1`)を入力します。両方のリモートはエクスプローラーにタブとして表示されるため、ジョブを作成する前に両側を閲覧してフォルダ構成を確認できます。Dropboxのフォルダを右クリックすると、同期を実行する前にそのサイズを確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## クラウド間同期ジョブを設定する

両方のリモートの準備ができたら、**Home タブ > Sync** を開いて4ステップの同期ウィザードを起動します。

1. **Configure Storage(ストレージの設定)** — Dropboxの同期元フォルダ(例: `/Project Files`)と、キーのプレフィックス付きのAmazon S3同期先バケット(例: `my-backup-bucket/dropbox-mirror`)を選択します。履歴ログでわかりやすいよう、ジョブに明確な名前を付けます。
2. **Advanced Settings(詳細設定)** — 同時転送数を設定して、速度とAPIレート制限のバランスを取ります。S3側でバイト単位のデータ整合性保証が必要な場合は、チェックサム検証を有効にします。
3. **Filtering(フィルタリング)** — `.dropbox` のシステムメタデータファイル、キャッシュディレクトリ、S3に不要なファイルタイプを除外します。あらかじめ定義されたフィルターカテゴリ(Image、Video、Document)を使えば、よくあるフィルタリングシナリオに簡単に対応できます。
4. **Schedule(PLUSライセンス)** — crontab形式のスケジュールを設定し、夜間の自動実行を構成します。スケジュール設定UIでは、保存前に次回の実行時刻をシミュレーションして確認できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Dropbox to Amazon S3 cloud-to-cloud sync job in RcloneView" class="img-large img-center" />

## 初回の本番同期前にドライランを実行する

特にS3バケットにすでにデータがある場合は、初回の本番転送を実行する前に**Dry Run(ドライラン)**機能を使いましょう。ドライランは同期をシミュレートし、実際の変更を一切加えることなく、どのファイルがコピーされるか、また(もしあれば)同期先からどのファイルが削除されるかを正確に表示します。このプレビューにより、誤った同期元パスや予期しない削除がS3バケットに反映される前に検出できます。

ドライランの結果に問題がなければ、Job Managerで**Run**をクリックして実際の同期を開始します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Dropbox to Amazon S3 sync job in RcloneView Job Manager" class="img-large img-center" />

## 転送状況を監視し、ジョブ履歴を確認する

ジョブの実行中は、RcloneView下部の**Transferring**タブで、ファイル名、転送速度、転送済みの総バイト数といったライブ進捗状況を確認できます。ファイルはローカルワークステーションを経由せずDropboxとS3の間で直接移動するため、速度はローカル回線ではなくクラウド側の帯域幅を反映します。

各同期の完了後、**Job History**タブには開始時刻、所要時間、ステータス(Completed / Errored / Canceled)、転送されたデータの総量が記録されます。コンプライアンス要件の厳しいワークフローでは、このログがスケジュールされたバックアップが時刻通りエラーなく実行されたことを証明する記録として役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Dropbox to Amazon S3 backup runs in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から**RcloneViewをダウンロード**します。
2. **Remote タブ > New Remote > Dropbox** からDropboxを追加し、ブラウザのOAuthフローで認証します。
3. **Remote タブ > New Remote > Amazon S3** から、Access Key ID、Secret Access Key、リージョンを指定してAmazon S3を追加します。
4. **Home タブ > Sync** を開き、Dropboxを同期元、S3を同期先に選択して、ドライランプレビューを実行した後、保存して夜間自動バックアップのスケジュールを設定します。

これで、Dropboxのファイルは、設定したスケジュールに沿って実行され、すべての転送の完全な履歴が残る、耐久性が高く独立して管理されたバックアップをAmazon S3上に持つことになります。

---

**関連ガイド:**

- [RcloneViewでOneDriveをAmazon S3に移行する](https://rcloneview.com/support/blog/migrate-onedrive-to-amazon-s3-rcloneview)
- [Amazon S3の管理 — RcloneViewによるクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [RcloneViewでGoogleドライブからAmazon S3への増分バックアップ](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)

<CloudSupportGrid />

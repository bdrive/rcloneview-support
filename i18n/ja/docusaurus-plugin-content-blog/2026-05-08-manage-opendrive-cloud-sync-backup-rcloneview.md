---
slug: manage-opendrive-cloud-sync-backup-rcloneview
title: "OpenDriveクラウドストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - jay
description: "OpenDriveをRcloneViewに接続し、コマンドライン知識ゼロで使えるGUIでファイル管理、バックアップの自動化、クラウド間のデータ同期を行いましょう。"
keywords:
  - OpenDrive cloud storage RcloneView
  - OpenDrive sync GUI
  - manage OpenDrive files
  - OpenDrive backup tool
  - rclone OpenDrive GUI
  - OpenDrive file transfer
  - cloud storage management
  - OpenDrive desktop app
tags:
  - opendrive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDriveクラウドストレージを管理 — RcloneViewでファイルを同期・バックアップ

> OpenDriveをRcloneViewに接続すれば、ドラッグ＆ドロップでのファイル管理、スケジュールされたバックアップ、クラウド間転送がコマンドライン不要で行えます。

OpenDriveは、ファイル共有とコラボレーションに重点を置いた個人向け・ビジネス向けプランを提供するクラウドストレージプラットフォームです。Webインターフェースは日常的な用途には十分ですが、大規模なデータセットの移動、バックアップの自動化、他のクラウドへの同期を必要とするパワーユーザーには、より高機能なツールが必要です。rcloneのOpenDriveバックエンドを活用したRcloneViewは、OpenDriveアカウントにフル機能のGUIをもたらします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OpenDriveをRcloneViewに接続する

**Remoteタブ → New Remote** に移動し、プロバイダーリストからOpenDriveを選択します。OAuthでの認証が必要です — RcloneViewがブラウザウィンドウを開き、OpenDriveの認証情報でログインしてアクセスを許可します。認証が完了すると、リモートが保存され、すぐにエクスプローラーパネルで利用可能になります。

エクスプローラーには、OpenDriveのフォルダとファイルが名前、サイズ、最終更新日、種類といった完全なメタデータとともに表示されます。左側のフォルダツリーではストレージ階層全体をナビゲートでき、右側のファイルリストには選択したフォルダの内容が並べ替え可能な列で表示されます。画像の多いフォルダにはサムネイル表示が利用でき、写真やアセットライブラリの中から目的のものを見つけやすくなっています。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OpenDrive as a new remote in RcloneView" class="img-large img-center" />

## OpenDriveのファイルを外部ドライブや他のクラウドにバックアップする

OpenDriveにクライアントのプロジェクトファイルを保存している小規模なデザイン事務所にとって、別の場所にもコピーを持つことは非常に重要です。RcloneViewを使えば、OpenDriveからAmazon S3、Backblaze B2、あるいはローカルの外部ドライブへのバックアップジョブを簡単に設定できます。片方のパネルでソース（OpenDrive）を開き、もう片方でデスティネーションを開いたら、ジョブマネージャーを使って同期ジョブを設定します。

4ステップのジョブウィザードでは、ソースとデスティネーションのパスを設定し、転送の並行数を構成し、チェックサム検証を有効にし、ファイルフィルター（一時ファイルの除外や日付による制限）を設定できます。PLUSライセンスがあれば、ジョブを毎晩、または任意のcrontabスケジュールで実行するように設定でき、手動操作なしでOpenDriveのデータを常にバックアップし続けられます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an OpenDrive backup job in RcloneView" class="img-large img-center" />

## 同期前のドライラン

大規模な同期操作を実行する前に、RcloneViewの**Dry Run**モードを使用しましょう。これにより、実際の変更を加えることなく、どのファイルがコピー、更新、削除されるかを正確にシミュレーションして確認できます。大規模なOpenDriveライブラリを新しいプロバイダーに移行するチームにとって、ドライランは予期しないファイル削除を事前に発見するために非常に貴重です。

ドライランの出力はTransferringタブとLogタブに表示され、計画された操作の全体像を把握できます。内容に納得したら、ワンクリックで実際の同期を実行できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for an OpenDrive sync job" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remoteタブ → New Remote**に進み、OpenDriveを選択してOAuthログインを完了します。
3. デュアルペインのエクスプローラーでOpenDriveのファイルを閲覧・管理します。
4. ジョブマネージャーを使って、好みのデスティネーションへのスケジュールされたバックアップを作成します。

RcloneViewを使えば、OpenDriveもGoogle Drive、S3、その他利用中のプロバイダーと並んで、クラウドワークフローの中で第一級の存在として扱えます。

---

**関連ガイド：**

- [RcloneViewでOpenDriveのファイルをAWS S3にバックアップする](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [RcloneViewで複数のクラウドアカウントを管理する](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [RcloneViewで毎日のクラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />

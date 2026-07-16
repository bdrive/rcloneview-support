---
slug: manage-hidrive-cloud-sync-backup-rcloneview
title: "HiDriveストレージを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "RcloneViewを使ってHiDriveクラウドストレージを接続、同期、バックアップする方法を解説します。CLIコマンドを使わずに、GUIからHiDriveのすべてのファイルを管理できます。"
keywords:
  - HiDrive RcloneView
  - HiDrive cloud sync
  - HiDrive backup
  - STRATO HiDrive management
  - HiDrive file transfer
  - rclone HiDrive GUI
  - HiDrive sync tool
  - cloud storage management HiDrive
tags:
  - hidrive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDriveストレージを管理する — RcloneViewでファイルを同期・バックアップ

> RcloneViewはHiDriveに対して完全なGUI操作を提供し、コマンドラインを一切開かずに、閲覧、同期、バックアップ、転送のスケジュール設定を行えるようにします。

STRATOが提供し、ヨーロッパのデータセンターで運用されているHiDriveは、プライバシーを重視するユーザーやGDPRの適用を受ける企業に人気の選択肢です。rcloneを使ってプログラム的にHiDriveを管理することはこれまでも可能でしたが、RcloneViewはその機能を洗練されたインターフェースにまとめ、Windows、macOS、Linuxのどのユーザーでもファイル転送、スケジュールバックアップ、クラウド間同期を利用できるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDriveをRcloneViewに接続する

RcloneViewでHiDriveをリモートとして追加するのは簡単です。**Remoteタブ → New Remote**をクリックし、プロバイダー一覧からHiDriveまでスクロールして、OAuthブラウザログインに従ってください。RcloneViewが既定のブラウザを開き、STRATOの認証情報でログインするだけで、リモートが自動的に保存されます。トークンをコピーする必要はありません。

接続が完了すると、HiDriveのフォルダがExplorerパネルに即座に表示されます。複数のタブを開いてローカルフォルダとHiDriveバックアップを比較したり、ビューを分割してHiDriveとAmazon S3などの別のクラウドを並べて表示したりできます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive as a new remote in RcloneView" class="img-large img-center" />

HiDriveは、RcloneViewを通じて標準的なファイル操作をサポートしています。アップロード、ダウンロード、名前の変更、削除、新規フォルダの作成、公開リンクの生成などです。Windowsエクスプローラーからファイルをドラッグ&ドロップして、HiDriveのExplorerパネルに直接アップロードすることも、パネル間でドラッグしてクラウド間コピーを実行することもできます。

## HiDriveの自動バックアップをスケジュールする

HiDriveにプロジェクトアーカイブやクライアント納品物を保存している企業にとって、自動バックアップは欠かせません。RcloneViewのJob Manager（PLUSライセンス）を使えば、crontab形式のスケジュールを設定できます。たとえば、ローカルの`D:\Projects`フォルダを毎日午前2:00に`hidrive:Backups/Projects`へ夜間同期する、といった設定が可能です。

4ステップの同期ウィザードでは、転送元と転送先の選択、転送の並列数設定、ファイルフィルター、スケジュールを順に設定できます。ステップ2でチェックサム検証を有効にすると、更新日時だけに頼るのではなく、ファイルの整合性をバイト単位で確認できます。これは、タイムゾーンの違いによって誤った不一致が発生しうるヨーロッパのサーバーへ同期する際に特に重要です。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled HiDrive backup job in RcloneView" class="img-large img-center" />

初回の実同期を行う前に、Dry Runオプションを使って、実際にコピーまたは削除されるファイルを事前に確認しましょう。これは、転送先のファイルが上書きされる可能性がある一方向同期を設定する際に特に有用です。

## 転送とジョブ履歴を監視する

RcloneView下部の**Transferring**タブでは、実行中のHiDrive転送についてファイル数、転送速度、転送済みバイト数、経過時間などをリアルタイムで確認できます。ネットワークの不調でジョブが失敗した場合、RcloneViewは自動的に再試行します（デフォルトでは3回まで）。

**Job History**タブには、過去の実行履歴（手動実行かスケジュール実行かの種別、開始時刻、所要時間、ステータス、転送された総容量）がすべて記録されます。定期的なデータ保護活動を証明する必要があるコンプライアンス担当チームにとって、この監査証跡はすぐに役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing HiDrive backup job history in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. RcloneViewを開き、**Remoteタブ → New Remote**をクリックしてHiDriveを選択し、OAuthログインを完了します。
3. Explorerパネルを使ってHiDriveのフォルダを閲覧し、接続を確認します。
4. **Job Manager**を開き、ローカルドライブからHiDriveへの新しいSyncジョブを作成し、スケジュールを設定します。

RcloneViewを使えば、HiDriveはスケジュール設定、監視、検証がすべて自動化された、バックアップ戦略の一部として完全に管理できるようになります。

---

**関連ガイド：**

- [OneDriveストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Jottacloudを管理する — RcloneViewによるクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [RcloneViewで毎日のクラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />

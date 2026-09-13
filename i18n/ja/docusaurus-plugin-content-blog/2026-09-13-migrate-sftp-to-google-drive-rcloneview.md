---
slug: migrate-sftp-to-google-drive-rcloneview
title: "SFTPからGoogle Driveへ移行する — RcloneViewでファイルを転送する"
authors:
  - kai
description: "RcloneViewのデュアルペインエクスプローラー、ドライラン プレビュー、スケジュール同期ジョブを使って、SFTPサーバーからGoogle Driveへファイルを移行しましょう。"
keywords:
  - RcloneView
  - SFTPをGoogle Driveへ移行
  - SFTPからクラウドへの移行
  - SFTPファイル転送
  - SSHファイルをクラウドへ転送
  - クラウドストレージ移行
  - SFTPクライアントGUI
  - Google Driveバックアップ
  - 安全なファイル転送ツール
  - SFTPサーバーの廃止
tags:
  - RcloneView
  - sftp
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SFTPからGoogle Driveへ移行する — RcloneViewでファイルを転送する

> ファイルを1つも失うことなく古いSFTPサーバーを引退させましょう。RcloneViewを使えば、すべてをそのままGoogle Driveへ移せます。

多くのチームは今でもファイル受け渡し用に社内SFTPサーバーを運用していますが、そのマシンのSSH認証情報、ファイアウォールルール、ディスク容量を維持するコストは、ストレージと共有をGoogle Driveに任せる場合に比べて高くつきます。RcloneViewは同じウィンドウ内でSFTPホストとGoogle Driveの両方に接続できるため、ターミナルを使わずに両者間で閲覧・比較・転送が可能です。ハードウェアを完全に廃止する前にレガシーなファイルサーバーを移行しようとしている小規模なITチームにとって、これは実践的な第一歩です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTPサーバーとGoogle Driveを並べて接続する

まずSFTPリモートを追加します。New RemoteウィザードでホストアドレスとSSH認証情報を入力し、デフォルトではポート22を使用します。次に、APIキーの入力なしでOAuthブラウザログインを通じてGoogle Driveを2つ目のリモートとして追加します。RcloneViewの分割パネルレイアウトを使って両方を別々のExplorerパネルで開けば、両側のフォルダ構造全体を一度に確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an SFTP remote and a Google Drive remote in RcloneView" class="img-large img-center" />

RcloneViewは1つのウィンドウから90以上のプロバイダーをマウント・同期でき、Windows、macOS、Linuxで動作するため、SFTPサーバーがローカルネットワーク上にあっても、踏み台経由でしかアクセスできなくても、同じ設定がそのまま機能します。

## 移行前にプレビューする

何年分も蓄積されたファイルを転送する前に、SFTPのルートと移行先のGoogle Driveフォルダの間でFolder Compareを実行し、移行先に何が不足しているかを正確に把握しましょう。次に転送をSyncジョブとして設定し、Dry Runでコピーをシミュレーションします — RcloneViewは実際には何も書き込まないまま、移動するすべてのファイルと作成されるすべてのフォルダを一覧表示します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing SFTP and Google Drive folder contents before migration in RcloneView" class="img-large img-center" />

この手順は、SFTPサーバーに命名規則が一貫しないネストされたフォルダが何年分も蓄積されている場合に特に重要です — ドライランによって、それが夜間のサポート対応事案になる前に問題点を洗い出せます。

## 残りの転送をスケジュールジョブで自動化する

大規模なSFTPアーカイブの場合、一度にすべてを移動しようとしないでください。移行をJob ManagerにJobとして保存し、ファイル転送数をネットワークの実際のスループットに合わせて設定し、他のExplorerパネルで作業を続けながらバックグラウンドで実行させましょう。移行期間中、SFTPサーバーをあと数週間稼働させ続ける必要がある場合は、PLUSライセンスのスケジュール機能を使ってcrontab形式のスケジュールで同期を繰り返し、旧サーバーを停止するまでGoogle Driveを最新の状態に保てます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring SFTP to Google Drive sync job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. ホストアドレスとSSH認証情報を使ってSFTPサーバーをリモートとして追加してください。
3. OAuthブラウザログインのフローを使ってGoogle Driveを2つ目のリモートとして追加してください。
4. Folder CompareとDry Runを実行し、実際に実行する前に転送をJobとして保存してください。

同期ジョブが再実行時にコピーするものが何もない状態でクリーンに完了したら、古いSFTPサーバーは安全に停止できます。

---

**関連ガイド:**

- [SFTPサーバーストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Google Driveストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneViewでSFTPとSMBをローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />

---
slug: manage-put-io-cloud-sync-backup-rcloneview
title: "Put.ioストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "OAuthを使ってPut.ioをRcloneViewに接続し、クラウドファイルを閲覧して、メディアコンテンツを他のクラウドプロバイダーと簡単に同期する方法を解説します。"
keywords:
  - put.io RcloneView
  - put.io cloud sync
  - put.io backup
  - manage put.io files
  - put.io rclone GUI
  - put.io media management
  - cloud file transfer put.io
  - put.io sync cloud
tags:
  - putio
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Put.ioストレージを管理 — RcloneViewでファイルを同期・バックアップ

> Put.ioは、取得したコンテンツを直接クラウドに保存するクラウドトレントおよびダウンロードサービスです — RcloneViewを使えば、これらのファイルを簡単に閲覧、同期、バックアップできます。

Put.ioを使うと、トレント、直接リンク、プレミアムファイルホストのコンテンツを直接クラウドストレージに取得できるため、メディア愛好家に人気の選択肢となっています。ファイルがPut.ioに保存されたら、それをローカルドライブ、別のクラウド、または個人アーカイブへ移動する信頼できる方法が必要になります。RcloneViewはOAuthブラウザログインを使ってPut.ioに接続し、コマンドラインを使わずに転送を管理できる完全なGUIを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Put.ioをRcloneViewに接続する

RcloneViewを開き、**リモートマネージャー**に移動します。**新しいリモート**をクリックし、プロバイダーリストをスクロールして**Put.io**を選択します。RcloneViewはOAuth認証のためにブラウザを自動的に開きます — Put.ioアカウントにログインしてアクセスを許可してください。APIキーを手動でコピーする必要はなく、OAuthフローがすべてを処理します。

認証が完了すると、リモートがリモートマネージャーに表示されます。**開く**をクリックしてファイルエクスプローラーを起動し、Put.ioストレージを閲覧します。保存されたファイル、トレントやダウンロードジョブごとに整理されたフォルダー、手動で作成したディレクトリが表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Put.io remote in RcloneView" class="img-large img-center" />

## Put.ioファイルの閲覧と管理

RcloneViewファイルエクスプローラーは、おなじみのツリービューとリストビューでPut.ioのコンテンツを表示します。フォルダーを移動したり、複数のファイルを選択したり、パネルから直接転送を開始したりできます。映画、テレビシリーズ、音声ファイルなど大規模なメディアライブラリをお持ちの場合、サムネイルビューを使えばコンテンツを画像グリッドですばやく識別できます。

Put.ioと別のクラウド(たとえばGoogle DriveやBackblaze B2)の間でファイルをコピーまたは移動するには、目的のリモートを指す2つ目のパネルを開きます。Put.ioパネルでファイルを選択し、右クリックして**コピー**または**移動**を選びます。クラウド間操作を行う場合、RcloneViewはまずローカルマシンにダウンロードすることなく転送を処理します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Put.io to another provider" class="img-large img-center" />

## Put.ioの同期ジョブを設定する

定期的なバックアップやPut.ioから長期保存先への一方向同期には、手動転送よりも**ジョブ**機能の方が信頼性があります。**ジョブ**に移動し、**新しいジョブ**をクリックして、Put.ioリモートをソースとして選択します。宛先を他の設定済みリモートに設定します — 手頃な価格のメディアアーカイブにはBackblaze B2が一般的な選択肢です。

ジョブ設定ステップでは、**ドライラン**を有効にして、実行前にどのファイルが転送されるかをプレビューできます。これは、Put.ioライブラリが大きく、同期範囲を確認したい場合に役立ちます。確認後、ドライランを無効にしてジョブを実行してください。RcloneViewは**ジョブ履歴**タブで、ファイル数、速度、ステータスとともに各転送を記録します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Put.io sync job in RcloneView" class="img-large img-center" />

## ユースケース:メディアコンテンツのワークフロー

Put.ioユーザーは通常、いくつかのパターンに分かれます:取得したメディアをコールドストレージにアーカイブする、コンテンツをホームサーバーにミラーリングする、サードパーティ製プレイヤーでのストリーミング用にGoogle Driveに同期する、などです。RcloneViewはこれらすべてに対応しています。Put.ioのサブディレクトリごとに個別のジョブを作成できます — 映画用に1つ、テレビ番組用にもう1つ — そしてPLUSライセンスを使えばそれぞれを独立してスケジュールできます。

**フォルダー比較**機能は、すでに何がコピーされているか分からないときに便利です。Put.ioフォルダーと宛先フォルダーを並べて開くと、RcloneViewが差分をハイライト表示するので、不足しているものだけを転送できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Put.io transfer logs in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **リモートマネージャー**を開き、**新しいリモート**をクリックして**Put.io**を選択します。
3. OAuthブラウザログインを完了してアクセスを許可します。
4. ファイルエクスプローラーでPut.ioリモートを開き、希望する宛先への同期ジョブを設定します。

RcloneViewは、Put.ioを受動的なダウンロードの受け皿から、クラウドストレージワークフローの能動的な一部へと変えます。

---

**関連ガイド:**

- [RcloneViewでpCloudをAWS S3にバックアップ](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [RcloneViewによるクラウド間移行](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [ジョブ履歴と転送ログの監視](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />

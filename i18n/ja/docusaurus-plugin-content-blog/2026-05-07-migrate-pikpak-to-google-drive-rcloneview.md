---
slug: migrate-pikpak-to-google-drive-rcloneview
title: "PikPakからGoogle Driveへ移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewのクラウド間転送を使ってPikPakからGoogle Driveへファイルを移行する手順ガイド。両方のリモートを設定し、ローカルにダウンロードせずに転送します。"
keywords:
  - PikPak to Google Drive
  - PikPak migration
  - RcloneView PikPak
  - cloud-to-cloud transfer
  - PikPak export
  - Google Drive import
  - rclone PikPak
  - cloud file migration
tags:
  - pikpak
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# PikPakからGoogle Driveへ移行 — RcloneViewでファイルを転送

> PikPakからGoogle Driveへファイルを移動したいユーザーは、RcloneViewを使えばすべてクラウド上で完結できます。まずローカルマシンにすべてダウンロードする必要はありません。

PikPakは、トレントやマグネットリンクを直接クラウドに保存できる機能で評価されている、アジアで広く使われている人気のクラウドストレージ兼オフラインダウンロードサービスです。PikPakからの移行を検討しているユーザーや、単にPikPakのファイルのバックアップコピーをGoogle Driveに保管したいユーザーにとって、RcloneViewは最もクリーンな方法を提供します。それは、ファイルをローカルディスクを経由させずに、2つのプロバイダー間で直接移動するクラウド間転送です。RcloneViewには組み込みのrcloneバイナリが同梱されているため、追加でインストールするものはありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## PikPakリモートの設定

RcloneViewで**新規リモート**をクリックし、プロバイダー一覧から**PikPak**を選択します。PikPakの**ユーザー名**（メールアドレス）と**パスワード**を入力します。RcloneViewはPikPak APIで認証を行い、アカウントに接続します。保存後、PikPakリモートがデュアルペインのエクスプローラーに表示され、ローカルファイルシステムと同じようにファイルやフォルダーを閲覧できます。

移行を開始する前に、数分かけてPikPakのフォルダー構造を確認し、コンテンツがどのように整理されているかを把握しておきましょう。大きなフォルダーや深くネストされた構造がある場合は、1つの巨大な一括処理ではなく、個別のジョブに分けて転送すると良いことがあるので、あらかじめ確認しておきます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding PikPak as a remote in RcloneView" class="img-large img-center" />

## Google Driveの追加

もう一度**新規リモート**をクリックし、**Google Drive**を選択します。RcloneViewがGoogle OAuth認証用のブラウザタブを開くので、Googleアカウントでサインインし、要求された権限を許可します。OAuthフローが完了すると、Google DriveリモートがPikPakリモートと並んでエクスプローラーに表示されます。

転送を開始する前に、Google Drive内に移行専用の宛先フォルダー（例: `PikPak Import/`）を作成しておきましょう。こうすることで、移行したコンテンツが整理された状態を保て、PikPakとGoogle Driveのフォルダーサイズを比較することで転送完了の確認が容易になります。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="PikPak and Google Drive open side by side for migration in RcloneView" class="img-large img-center" />

## クラウド間転送の実行

両方のリモートをデュアルペインビューで開いた状態で、小規模な移行であればPikPakからGoogle Driveへ直接フォルダーをドラッグできます。大規模な移行の場合は、**ジョブウィザード**を使う方が確実です。PikPakをソースに、Google Driveの宛先フォルダーをターゲットに設定し、**コピー**モードを選択します（PikPakから何も削除せずにファイルをコピーするため）。

必ず最初に**ドライラン**を実行してください。PikPakアカウントにはオフラインダウンロードで蓄積された数千ものファイルが含まれていることがあり、ドライランを行うことで、実行前に転送量を明確に把握できます。問題がなければ、実際のジョブを実行します。RcloneViewの**ジョブマネージャー**は、現在のファイル名や転送数を含むライブ進捗状況を表示します。完了後は**ジョブ履歴**を確認し、すべてのファイルが正常に転送されたことを確認しましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a PikPak to Google Drive migration job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **新規リモート** > **PikPak**をクリックし、PikPakのユーザー名とパスワードを入力します。
3. **新規リモート** > **Google Drive**をクリックし、OAuth認証を完了します。
4. Google Driveに`PikPak Import/`フォルダーを作成し、移行先とします。
5. **ジョブウィザード**を使ってコピージョブを作成し、ドライランを実行してから、完全な移行を実行します。

RcloneViewを通じてPikPakからGoogle Driveへ移行する作業は、大規模なクラウドライブラリであっても、ローカルストレージの負荷なく確実に処理できる合理化されたプロセスです。

---

**関連ガイド:**

- [RcloneViewでPikPakのクラウドダウンロードを管理する](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)
- [Google Driveを管理する — RcloneViewによるクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneViewによるクラウド間移行](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />

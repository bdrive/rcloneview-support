---
slug: migrate-dropbox-to-proton-drive-rcloneview
title: "DropboxからProton Driveへ移行 — RcloneViewでファイルを転送"
authors:
  - jay
description: "エンドツーエンド暗号化ストレージを利用するために、DropboxのファイルをProton Driveへ移行しましょう。RcloneViewを使った数ステップで完了するクラウド間移行の方法を解説します。"
keywords:
  - migrate Dropbox to Proton Drive
  - Dropbox to Proton Drive transfer
  - cloud-to-cloud migration RcloneView
  - Proton Drive backup
  - Dropbox migration privacy
  - move files Dropbox Proton Drive
  - encrypted cloud storage migration
  - RcloneView cloud transfer guide
  - switch from Dropbox to Proton Drive
  - Proton Drive sync RcloneView
tags:
  - RcloneView
  - dropbox
  - proton-drive
  - migration
  - cloud-to-cloud
  - privacy
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DropboxからProton Driveへ移行 — RcloneViewでファイルを転送

> RcloneViewを使えば、Dropboxのライブラリ全体をProton Driveへクラウド間で直接転送できます。ローカルへのダウンロードや手動での再アップロード、コマンドラインの操作は一切不要です。

多くのチームがDropboxからの移行を決断する理由は、データプライバシーにあります。Dropboxはサーバー上にファイルを平文で保存しているため、Dropboxの従業員や法執行機関が令状をもってデータにアクセスできる可能性があります。ProtonMailを開発したチームによって作られたProton Driveは、ファイルがProtonのサーバーに到達する前にクライアント側で暗号化するため、Protonでさえコンテンツを読むことはできません。RcloneViewは両方のサービスに同時接続し、フォルダ構造とファイルの整合性を保ちながらデータをクラウド間で直接移動させることで、この移行作業をシンプルにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## DropboxとProton Driveをリモートとして追加する

ファイルを転送する前に、両方のクラウドアカウントをRcloneViewに追加します。**Remote タブ > New Remote** に進み、**Dropbox** を選択します。RcloneViewがOAuth認証用のブラウザウィンドウを開くので、Dropboxにログインしてアクセスを許可してください。認証が完了すると、リモートは自動的に保存されます。

Proton Driveについても同じ手順を繰り返します。リモートのリストから **Proton Drive** を選択し、Protonのメールアドレスとパスワードを入力します。二要素認証を有効にしている場合は、求められたらコードを入力してください。RcloneViewに組み込まれたrcloneバイナリはProton Driveをネイティブにサポートしています(rclone v1.69以上が必要で、これはバンドルされています)。両方のリモートを追加すると、デュアルペインのファイルエクスプローラーにタブとして表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## Folder Compareで移行を計画する

何かを転送する前に、RcloneViewの **Folder Compare** ツールを使ってDropboxにあるものとProton Driveにすでにあるものを確認しましょう。Home タブの **Compare** ボタンをクリックし、Dropboxを左側のソース、Proton Driveを右側に設定します。比較ビューでは、Dropboxにのみ存在するファイル(left-only)、両方に一致するファイル、サイズの違いがハイライト表示され、実際に何を移動させる必要があるのかを明確に把握できます。

このステップは、すでに一部のファイルを手動でProton Driveにコピーしていて、作業の重複を避けたい場合に特に役立ちます。「left-only」でフィルタリングすればProton Driveに不足しているものだけを確認でき、その特定の項目だけをコピーできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer setup from Dropbox to Proton Drive in RcloneView" class="img-large img-center" />

## クラウド間転送を実行する

完全な移行を行うには、**Sync** ウィザードを使用します。Home タブで **Sync** をクリックし、Dropboxをソース、Proton Driveを転送先に設定して、ジョブに名前を付けます(例:`dropbox-proton-migration`)。ジョブタイプとして **Copy** を選択すると、Dropbox上のオリジナルを保持したままProton Drive側のコピーを作成できるため、移行を検証するまでDropboxはそのまま維持されます。

ウィザードのステップ2では、**チェックサム検証** を有効にして、すべてのファイルが破損なく到着することを確認します。これはデータの整合性が保証されなければならない機密文書にとって重要です。まず **Dry Run** を実行して、実行前にどのファイルが転送されるかをプレビューし、その後実際のジョブを実行してください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using folder compare to verify Dropbox files before migration to Proton Drive" class="img-large img-center" />

## 進捗の監視と完了確認

転送が実行されている間、RcloneView下部の **Transferring** タブに、リアルタイムの転送速度、ファイル数、進捗率が表示されます。大規模なDropboxライブラリ(例えば法律事務所の5万件のクライアント文書など)は数時間かかる場合がありますが、RcloneViewをシステムトレイに最小化しても、ジョブはバックグラウンドで継続されます。

ジョブが完了したら、Folder Compareを再実行してleft-onlyのファイルがゼロであることを確認してください。Dropbox側に「left-only」としてまだマークされている項目があれば、転送に失敗したことを示しており、その部分だけを選択的に再実行できます。RcloneViewの **Job History** には、開始時刻、総バイト数、速度、ステータスを含む実行記録全体がログとして残り、コンプライアンスやITの監査にも適した恒久的な記録になります。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Dropbox to Proton Drive migration job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. **Remote タブ > New Remote** で、OAuth経由でDropboxを、メールアドレス/パスワードでProton Driveを追加します。
3. **Folder Compare** を使って、転送前に両アカウント間の差分を確認します。
4. チェックサム検証付きのCopy同期ジョブを作成し、実行して移行を完了します。

RcloneViewで両方のリモートを接続すれば、DropboxからProton Driveへのデータ移動は、スクリプトも中間ダウンロードも不要な、視覚的で管理しやすい作業になり、明確な監査証跡が全過程で残ります。

---

**関連ガイド:**

- [RcloneViewでDropboxクラウドストレージを管理する](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [RcloneViewでProton Driveのクラウド同期を管理する](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [RcloneViewでDropboxからWasabiへ移行する](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />

---
slug: migrate-icloud-drive-to-google-drive-rcloneview
title: "iCloud DriveからGoogle Driveへ移行 — RcloneViewでファイルを転送"
authors:
  - jay
description: "RcloneViewを使ってiCloud DriveからGoogle Driveへ移行する方法 — 手動ダウンロードなしでAppleのクラウドファイルをGoogleへ転送するステップバイステップガイド。"
keywords:
  - iCloud Drive to Google Drive
  - migrate iCloud Drive to Google Drive
  - iCloud Drive migration
  - transfer iCloud files to Google Drive
  - RcloneView iCloud Drive
  - cloud migration tool
  - move files from iCloud to Google Drive
  - cross-cloud file transfer
  - iCloud Drive sync RcloneView
tags:
  - cloud-to-cloud
  - migration
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud DriveからGoogle Driveへ移行 — RcloneViewでファイルを転送

> iCloud Driveのライブラリ全体を、事前にすべてダウンロードすることなくGoogle Driveへ移動できます。RcloneViewが両サービス間の転送を直接処理します。

Apple中心のワークフローからGoogle Workspaceへ切り替える場合、あるいは単にすべてのプラットフォームでファイルにアクセスしたい場合、iCloud DriveからGoogle Driveへの移行が必要になることがよくあります。数ギガバイトものデータを手動でダウンロードして再アップロードするのは時間の無駄であり、転送漏れのリスクもあります。RcloneViewは両サービスに直接接続し、クラウド間でファイルを移動しながら、その過程を通じて元のファイルをそのまま保持します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud DriveからGoogle Driveへ移行する理由

iCloud DriveはAppleのエコシステムと緊密に統合されていますが、macOSやiOS以外では体験が分断されがちです。Google Driveは主要なプラットフォームすべてでネイティブに動作し、クロスプラットフォームのチームが日々頼りにしているGoogle Workspaceツールと連携します。たとえば、300GBのプロジェクトファイルを抱えるデザインスタジオでは、Google DocsやSlidesのみを使うクライアントを受け入れる際に、すべてをGoogle Driveに置く必要が生じるかもしれません。

iCloud Driveはデスクトップやドキュメントなどのフォルダを黙ってAppleのサーバーに同期するため、長年蓄積されたファイルが明確な一覧のないまま存在していることがよくあります。Google Driveへ移行することで、一元的な可視性、きめ細かな共有制御、そしてApple アカウントを持たない任意のデバイスからのアクセスが可能になります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and Google Drive as remotes in RcloneView" class="img-large img-center" />

## RcloneViewでiCloud Driveを設定する

RcloneViewに組み込まれたrcloneバイナリ（v1.69.1以降）は、iCloud Driveサポートに必要なrclone v1.69の最小要件を満たしています。別途インストールする必要はありません。

iCloud Driveを追加するには、**Remote** タブを開き、**New Remote** をクリックします。プロバイダーリストからiCloud Driveを選択し、Apple IDのメールアドレスとパスワードを入力します。Apple アカウントで二要素認証を使用している場合は、Apple IDのセキュリティ設定からアプリ用パスワードを生成し、通常のパスワードの代わりにそれを使用してください。保存すると、iCloud Driveのフォルダがファイルエクスプローラーパネルにすぐに表示されます。デスクトップ、ドキュメント、その他の同期されたディレクトリもすべて閲覧できます。

## Google Driveを接続する

Google DriveはOAuth認証を使用します。RcloneViewで新しいリモートを追加してGoogle Driveを選択すると、ブラウザウィンドウが自動的に開き、Googleアカウントにサインインしてアクセスを許可できます。APIキーや開発者資格情報は不要です。接続は数秒で完了し、DriveのフォルダがiCloud Driveと並んで2つ目のパネルに表示されます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from iCloud Drive to Google Drive in RcloneView" class="img-large img-center" />

## 移行を実行する

両方のリモートが設定できたら、**Job Manager** を開いて **Copy** ジョブを作成します。iCloud Driveのソースフォルダを設定し、転送先としてGoogle Driveのターゲットフォルダを選択して、ジョブに名前を付けます。Copyモードは、転送先にまだ存在しないファイルのみを転送し、元のファイルには一切触れません — iCloud Driveの内容はそのまま変更されずに残ります。

完全な転送を実行する前に、ジョブオプションから **Dry Run** を実行してください。RcloneViewは、実際に1バイトも移動させることなく、コピーされるすべてのファイル（名前、パス、サイズ）を表示します。このプレビューは、iCloud Driveに長年の雑多なコンテンツが含まれている場合に、開始前に範囲を確認するのに特に役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud migration job in RcloneView" class="img-large img-center" />

問題がなければジョブを実行し、画面下部の **Transferring** タブで進行状況を確認します。速度、ファイル数、完了率がリアルタイムで更新されます。大規模なライブラリの場合は、ジョブの詳細設定でチェックサム検証を有効にし、すべてのファイルが破損なく届いたことを確認してください。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. **Remote** タブを開き、**New Remote** をクリックして、Apple IDの認証情報でiCloud Driveを追加します。
3. OAuthブラウザログインで、Google Driveを2つ目のリモートとして追加します。
4. iCloud Driveのフォルダをソース、Google Driveのフォルダを転送先として、Copyジョブを作成します。
5. Dry Runを実行して転送内容をプレビューし、その後ジョブを実行してTransferringタブで進行状況を監視します。

両サービスを並べて接続すれば、iCloud Drive全体をGoogle Driveへ移行するのは、1つのジョブを設定して実行するだけの作業になります。

---

**関連ガイド：**

- [iCloud Driveを管理する — RcloneViewによるクラウド同期](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [RcloneViewでDropboxからGoogle Driveへ移行する](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [RcloneViewでGoogle DriveからpCloudへ移行する](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)

<CloudSupportGrid />

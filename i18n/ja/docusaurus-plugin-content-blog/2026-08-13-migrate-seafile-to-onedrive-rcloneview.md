---
slug: migrate-seafile-to-onedrive-rcloneview
title: "SeafileからOneDriveへ移行する — RcloneViewでファイルを転送する"
authors:
  - casey
description: "RcloneViewのデュアルペインエクスプローラーとジョブウィザードを使い、ドライラン検証付きで、自己ホスト型SeafileサーバーのライブラリをMicrosoft OneDriveへ移行します。"
keywords:
  - Seafile 移行
  - OneDrive
  - RcloneView
  - セルフホストからクラウドへ
  - クラウド間転送
  - Seafile から OneDrive へ
  - Microsoft 365 移行
  - rclone seafile onedrive
tags:
  - RcloneView
  - seafile
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SeafileからOneDriveへ移行する — RcloneViewでファイルを転送する

> 自己ホスト型のSeafileサーバーを廃止してMicrosoft OneDriveに移行するために、手動でのダウンロードや再アップロードは必要ありません — RcloneViewは両方に直接接続し、1つのジョブでライブラリ間を移動させます。

自己ホスト型のSeafile環境が規模を超えたチームは、既存のMicrosoft 365サブスクリプションにファイルストレージを統合し、サーバー保守の負担を減らすためにOneDriveへ移行することがよくあります。RcloneViewはSeafileとOneDriveを同じウィンドウ内の対等なリモートとして扱うため、まずローカルディスクにライブラリをエクスポートすることなく、両方を閲覧し、内容を比較し、制御された転送を実行できます。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウント・同期でき、Windows、macOS、Linuxで動作するため、Seafileサーバーがオンプレミスにあってもプライベートデータセンターにあっても、同じワークフローが適用されます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Seafileサーバーへの接続

**New Remote**を開き**Seafile**を選択して、サーバーURL、ユーザー名、パスワードを入力します。2段階認証が有効になっている場合は、求められたらワンタイムトークンを入力してください。接続が完了すると、RcloneViewはアクセス可能なすべてのライブラリ(個人用および共有分)を、他のリモートと同じフォルダーツリーとファイルリストの形式でファイルエクスプローラーに表示します。

暗号化されたライブラリは、RcloneViewが内容を読み取る前にライブラリパスワードが必要です。移行全体をスケジュールする前に、小さな暗号化ライブラリ1つでアクセスできることをテストしてください。パスワードが欠けている場合、明確なエラーではなく空のフォルダーとして表示されるためです。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでSeafileリモートを追加する" class="img-large img-center" />

## Microsoft OneDriveを追加する

**New Remote** > **OneDrive**から2つ目のリモートを追加します。RcloneViewはOAuthサインイン用のブラウザウィンドウを開きます — Microsoftアカウントで認証し、要求された権限を承認してください。OneDrive for Businessのテナントでも同じOAuthフローが適用され、通常の利用では別途アプリ登録は不要です。

転送を開始する前に、OneDrive上に`Seafile Import/`のような転送先フォルダーを作成してください。移行したコンテンツを分離しておくことで結果を確認しやすくなり、すでにOneDriveのルートにあるコンテンツと移行したファイルが混在するのを避けられます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでSeafileとOneDriveのリモートを並べて開いた状態" class="img-large img-center" />

## 移行ジョブを実行する

両方のリモートが開いている状態で、小さなライブラリは直接ドラッグして転送できます — 異なるリモート間のドラッグアンドドロップはコピーとして実行され、Seafile側の元データはそのまま残ります。サーバー全体の移行には、4ステップの**Job Wizard**を使用してください。Seafileライブラリをソースに、OneDriveフォルダーを転送先に設定し、ステップ2で転送数と同一性チェッカーを構成します。

実際の転送の前には必ず**ドライラン**を実行してください。データを一切移動せずにコピーされるすべてのファイルを一覧表示するため、間違ったソースフォルダーや想定外に大きなライブラリを、転送を確定する前に見つける最も速い方法です。プレビューの内容が問題なければジョブを開始し、Transferringタブで進行状況を確認してください。**Job History**には、何がいつ移動したかの永続的な記録が残ります。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewでSeafileからOneDriveへの移行ジョブを実行する" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **New Remote** > **Seafile**をクリックし、サーバーURLと認証情報を入力します。
3. **New Remote** > **OneDrive**をクリックし、OAuth認証を完了します。
4. ドライランを実行してから移行ジョブを実行し、Job Historyで結果を確認します。

この方法でSeafileからOneDriveへ移行すれば、すべての転送が監査可能な状態になり、古いサーバーから何が出て、どこに届いたかを常に正確に把握できます。

---

**関連ガイド:**

- [RcloneViewでSeafileのクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [RcloneViewでOneDriveのクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [RcloneViewでSeafileをGoogle Driveへ移行する](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />

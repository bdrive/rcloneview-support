---
slug: migrate-seafile-to-google-drive-rcloneview
title: "SeafileからGoogle Driveへ移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewのクラウド間転送・同期ツールを使って、自己ホスト型SeafileサーバーからGoogle Driveへファイルを移行する手順ガイド。"
keywords:
  - Seafile移行
  - Google Drive
  - RcloneView
  - クラウド間転送
  - 自己ホスト移行
  - ファイル移行
  - SeafileからGoogle Driveへ
  - rclone seafile
tags:
  - seafile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SeafileからGoogle Driveへ移行 — RcloneViewでファイルを転送

> 自己ホスト型のSeafileサーバーからGoogle Driveへの移行は、思っているより簡単です。RcloneViewを使えば両方をリモートとして接続し、中間ダウンロードなしでライブラリを直接転送できます。

Seafileは人気の自己ホスト型コラボレーションプラットフォームですが、多くのチームは保守負担の軽減や生産性ツールとのより良い連携を求めて、最終的にGoogle Driveのようなマネージドクラウドサービスへ移行します。RcloneViewはSeafileをGoogle Driveと同様に第一級のリモートとして扱い、Seafileライブラリを閲覧し、分かりやすいグラフィカルなワークフローでGoogle Driveへ直接コピーできます。コマンドラインの知識は不要で、内蔵されたrcloneバイナリがすべての重い処理を担います。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Seafileサーバーへの接続

RcloneViewで**新しいリモート**をクリックし、プロバイダー一覧から**Seafile**を選択します。SeafileサーバーのURL、ユーザー名、パスワードを入力してください。サーバーが2FAを使用している場合は、セットアップ時にワンタイムトークンの入力も必要です。その後、RcloneViewはデュアルペインのファイルエクスプローラーに、個人用・共有用を含むすべてのSeafileライブラリを一覧表示します。

Seafileライブラリが暗号化されている場合、RcloneViewがファイルを復号して読み取るためにライブラリのパスワードが必要です。フル移行を試みる前に、小さな暗号化ライブラリへのアクセスをテストし、認証情報が正しく機能することを確認しておくとよいでしょう。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Seafile remote in RcloneView" class="img-large img-center" />

## Google Driveの追加

**新しいリモート** > **Google Drive**からGoogle Drive用の2つ目のリモートを追加します。RcloneViewはOAuth認証用のブラウザウィンドウを開くので、Googleアカウントでサインインし、要求された権限を許可してください。認証後、Google Driveリモートがエクスプローラーに表示されます。マイドライブまたは共有ドライブ内の任意のフォルダーに移動し、移行先として使用できます。

転送を開始する前に、Google Drive内に専用フォルダー（例:`Seafile Migration/`）を作成しておくことをおすすめします。これにより、移行期間中も移行したコンテンツを整理し、既存のファイルと分けて管理できます。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging Seafile libraries to Google Drive in RcloneView" class="img-large img-center" />

## 移行の実行

両方のリモートをデュアルペイン表示で開いている状態であれば、小規模な移行の場合はSeafileライブラリを個別にGoogle Driveへドラッグできます。サーバー全体の移行には、**ジョブウィザード**を使って同期ジョブを作成します。Seafileをソースに、Google Driveの対象フォルダーを宛先に設定してください。4ステップのウィザードでは、更新日時を保持するかどうかを含む転送オプションを設定できます。

まず**ドライラン**を実行し、転送内容をプレビューしましょう。これは数千ファイル規模の大規模なSeafileインスタンスで特に有用です。プレビューが正しいことを確認したら、実際の転送を開始します。RcloneViewの**ジョブマネージャー**でリアルタイムの進捗を確認でき、**ジョブ履歴**には移行監査証跡として結果が記録されます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Seafile to Google Drive migration job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **新しいリモート** > **Seafile**をクリックし、サーバーURL、ユーザー名、パスワードを入力します。
3. **新しいリモート** > **Google Drive**をクリックし、OAuth認証フローを完了します。
4. デュアルペインエクスプローラーで両方のリモートを並べて開きます。
5. **ジョブウィザード**を使って同期ジョブを作成し、ドライランを実行してから、フル移行を実行します。

RcloneViewを使えば、SeafileからGoogle Driveへの移行は、手作業でファイルを1つずつ処理する作業ではなく、構造化された監査可能なプロセスになります。

---

**関連ガイド:**

- [Seafileの管理 — RcloneViewによるクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Google Driveの管理 — RcloneViewによるクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneViewでSeafileをAWS S3に同期](https://rcloneview.com/support/blog/sync-seafile-to-aws-s3-rcloneview)

<CloudSupportGrid />

---
slug: sync-google-drive-to-box-rcloneview
title: "Google Drive から Box への同期 — RcloneView によるクラウドバックアップ"
authors:
  - kai
description: "RcloneView を使って Google Drive を Box に同期する方法を解説します。両プラットフォーム間でファイルを転送し、クロスクラウドバックアップを自動化し、チームの同期を維持しましょう。"
keywords:
  - sync Google Drive to Box
  - Google Drive Box RcloneView
  - cloud-to-cloud sync RcloneView
  - Google Drive Box backup
  - migrate Google Drive Box
  - RcloneView cross-cloud transfer
  - automate Google Drive backup Box
  - Google Workspace Box sync
  - Box cloud backup RcloneView
  - Google Drive Box file transfer
tags:
  - google-drive
  - box
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive から Box への同期 — RcloneView によるクラウドバックアップ

> チームが Google Workspace と Box の両方にコンテンツを保存している場合、RcloneView はスクリプト不要でそのギャップを埋めます。

多くの組織では、Google Drive にアクティブなファイルを保持しつつ、Box をコンプライアンスアーカイブ、クライアントポータル、または部門共有として利用しています。この2つのプラットフォームを手動で同期し続けるのは、ミスが起きやすく時間もかかります。RcloneView は、Google Drive からコンテンツを取得して Box にプッシュするためのクリック操作だけのワークフローを提供します。1回限りの移行、毎晩の増分バックアップ、監査目的で継続的に更新されるコピーのいずれにも対応できます。両サービスとも rclone がネイティブにサポートしているため、転送は効率的でチェックサム検証も行われます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive と Box を RcloneView に接続する

Google Drive と Box は両方とも RcloneView で OAuth ブラウザ認証を使用するため、アカウントごとに2分以内でセットアップが完了します。Remote タブを開き、New Remote をクリックして Google Drive を選択します。ブラウザウィンドウが開き、Google アカウントにサインインして権限を許可します — API キーを手動で作成する必要はありません。Box についても同じ手順を繰り返します。New Remote をクリックし、Box を選択して、ブラウザの OAuth フローを完了させます。

Google の共有ドライブ(チームドライブ)を利用している場合は、セットアップ時に `shared_with_me` オプションを有効にするか、共有ドライブの ID をルートフォルダとして指定することで、チームのすべてのコンテンツが Explorer パネルに表示されるようにできます。Box for Business アカウントの場合は、リモート作成時に `box_sub_type = enterprise` を設定することで、エンタープライズフォルダと権限が利用可能になります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Box remotes in RcloneView" class="img-large img-center" />

## クラウド間転送を実行する

左側の Explorer パネルで Google Drive を開き、右側で Box を開きます。Google Drive 内のソースフォルダ — チームの共有 `Projects` フォルダやクライアント成果物ディレクトリなど — に移動し、コピーしたい項目を選択して Box パネルへドラッグします。RcloneView はコピー操作を確認し、2つのクラウドサービス間で直接データをストリーミングします。ローカルマシンは制御プレーンとしてのみ機能するため、自分の帯域幅の使用量を低く抑えられます。

画面下部の Transferring タブには、現在の速度、ファイル数、転送済みの総バイト数などのリアルタイムの進捗状況が表示されます。プレゼンテーション資料、動画アセット、スプレッドシートにまたがる大規模な転送の場合、RcloneView のマルチスレッドエンジンが複数のファイルを同時に移動させるため、順次コピーと比較して転送時間全体を大幅に短縮できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Google Drive to Box in RcloneView" class="img-large img-center" />

## 継続的なバックアップのための同期ジョブを設定する

定期的なバックアップには、Job Manager を使って同期ジョブを作成します。Google Drive フォルダをソースとして選択し、Box フォルダを送信先とし、フィルタリングルールを設定します — 例えば、`.gdoc` の Google ドキュメントショートカットファイルを除外したり、過去30日間に更新されたコンテンツに同期を限定したりできます。一方向同期モードは Google Drive のコンテンツを変更せずに Box へ変更を書き込むため、本番稼働中のワークスペースに対して安全に実行できます。

初回の本番実行の前に、Dry Run オプションを使って、どのファイルがコピーまたは上書きされるかを正確にプレビューしましょう。Job History には、すべての実行がタイムスタンプ、転送サイズ、ステータスコードとともに記録され、コンプライアンスチームが参照できる明確な監査証跡を提供します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive to Box sync job in RcloneView" class="img-large img-center" />

## スケジュール同期による自動化(PLUS ライセンス)

PLUS ライセンスがあれば、Google Drive → Box の同期を任意の crontab 間隔で自動実行するようスケジュールできます — 毎晩深夜、毎週月曜日の朝、あるいは IT ポリシーが要求するカスタムの頻度などです。ジョブウィザードの Schedule ステップで、Minute、Hour、Day-of-Week の各フィールドを入力します。すべての実行は Job History にタイムスタンプとステータスコードとともに記録されるため、コンプライアンスチームは同期がいつ実行され、成功したかどうかを正確に監査できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Google Drive to Box automated sync in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** します。
2. Remote タブ > New Remote > Google Drive(OAuth ブラウザログイン)から Google Drive アカウントを追加します。
3. Remote タブ > New Remote > Box(OAuth ブラウザログイン)から Box アカウントを追加します。
4. 両方のリモートを Explorer パネルに並べて開き、ファイルをドラッグしてすぐにコピーするか、Job Manager で同期ジョブを作成して繰り返し実行可能なワークフローを構築します。
5. スケジュール機能(PLUS ライセンス)を有効にして、同期を定期的に自動化し、完了通知を設定します。

適切に維持された Google Drive-to-Box 同期は、コンプライアンスアーカイブを最新の状態に保ち、クロスプラットフォームでのファイルアクセスの一貫性を確保します — RcloneView なら、それがわずか5分のセットアップで実現できます。

---

**関連ガイド:**

- [RcloneView で Google Drive のクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView で Box のクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Box から Google Drive への同期 — RcloneView によるクラウドバックアップ](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />

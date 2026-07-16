---
slug: migrate-google-drive-to-proton-drive-rcloneview
title: "Google Drive から Proton Drive へ移行 — RcloneView で安全にファイルを転送"
authors:
  - kai
description: "RcloneView を使って Google Drive から Proton Drive にファイルを移行します。GUI クラウド転送ツールにより、プライバシー重視の移行を簡単かつ確実に行えます。"
keywords:
  - migrate google drive to proton drive
  - google drive to proton drive transfer
  - privacy cloud storage migration
  - RcloneView cloud transfer tool
  - cloud-to-cloud file migration
  - proton drive migration tool
  - sync google drive to proton drive
  - move files from google drive to proton drive
  - secure cloud migration GUI
  - google drive privacy migration
tags:
  - RcloneView
  - google-drive
  - proton-drive
  - migration
  - cloud-to-cloud
  - privacy
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive から Proton Drive へ移行 — RcloneView で安全にファイルを転送

> コマンドラインを使わずに Google Drive から Proton Drive へファイルを移動し、すべてのバイトが確実に届いたことを検証しましょう。

プライバシーを重視するユーザーの間で、エンドツーエンド暗号化とスイスを拠点とするデータ主権のメリットを享受するために、Google Drive から Proton Drive へ移行する動きが広がっています。情報源を守るジャーナリストであれ、機密性の高いクライアントデータを扱う企業であれ、あるいは単に個人ファイルの管理権を取り戻したい人であれ、大量のデータを手作業で移動するのは現実的ではありません。RcloneView は、両サービス間ですべてのファイルを効率的かつ検証可能な形で転送するための、視覚的な GUI ベースのワークフローを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView で Google Drive と Proton Drive を接続する

Google Drive は OAuth で接続します。Remote タブで **New Remote** をクリックし、Google Drive を選択して、ブラウザベースのログインを完了してください。API キーやトークンの手動入力は不要で、RcloneView が OAuth フローを自動的に処理します。

Proton Drive の接続には、メールアドレス、パスワード、そして必要に応じて二要素認証コードが必要です。New Remote ウィザードで Proton Drive を選択し、認証情報を入力すると、RcloneView に組み込まれた rclone バックエンドが接続を確立します。Proton Drive がサポートする最小の rclone バージョンは v1.69 以上で、これは RcloneView にデフォルトで同梱されています。両方のリモートが Explorer パネルに表示されたら、Google Drive と Proton Drive のディレクトリツリーを左右に並べて閲覧できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## 移行前に Folder Compare で確認する

転送を開始する前に、RcloneView の **Folder Compare** 機能を使って移行元と移行先を確認しましょう。Home タブから起動し、左パネルに Google Drive のルートを、右パネルに移行先の Proton Drive フォルダを指定します。比較ビューでは、左側にのみ存在するファイル(まだ移行されていないファイル)、右側にのみ存在するファイル、そしてサイズの不一致がハイライト表示されます。

このステップは、中断した移行を再開する際に特に有用です。すでに正常に転送されたファイルを即座に確認でき、転送ジョブを残りの差分だけに絞り込むことで、無駄な再転送を避けられます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare view showing Google Drive vs Proton Drive differences in RcloneView" class="img-large img-center" />

## 移行ジョブを実行する

リモートの接続とフォルダの比較が完了したら、**Job Manager** を開き、新しい Copy または Sync ジョブを作成します。Google Drive のフォルダを移行元、対応する Proton Drive のフォルダを移行先として設定します。Advanced Settings のステップで **checksum** を有効にすると、サイズだけでなくハッシュでファイルを比較できます。これは Proton Drive では特に重要です。暗号化されたストレージ形式のため、API が報告するファイルサイズがわずかに異なる場合があるからです。

下部パネルの **Transferring** タブでは、転送済みファイル数、転送データ量、転送速度といったリアルタイムの進捗が表示されます。ネットワーク切断でジョブが中断された場合は、そのまま再実行するだけで構いません。rclone の転送ロジックが既に一致しているファイルをスキップし、中断した箇所から再開します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Real-time cloud-to-cloud transfer progress between Google Drive and Proton Drive in RcloneView" class="img-large img-center" />

## 移行期間中に継続的な同期をスケジュールする

チームが段階的な移行期間にあり、同僚が引き続き Google Drive にファイルを追加している場合は、繰り返し実行される同期ジョブをスケジュールして Proton Drive を最新の状態に保つことができます。**PLUS** ライセンスがあれば、ジョブウィザードの Schedule ステップで crontab 形式のルールを設定できます。たとえば、毎晩午前2時に同期を実行するようにすれば、手動操作なしで新しいファイルが自動的に Proton Drive に反映されます。

RcloneView の **Job History** は、すべての実行を記録します。開始時刻、所要時間、転送ファイル数、速度、最終ステータス(Completed / Errored / Canceled)です。これにより、移行プロセス全体を監査可能な形で把握でき、切り替えが完了したタイミングを簡単に確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History tab showing completed Google Drive to Proton Drive migration runs in RcloneView" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** します。
2. **New Remote** をクリックし、OAuth のブラウザログインで Google Drive を追加します。
3. 再度 **New Remote** をクリックし、メールアドレスとパスワードで Proton Drive を追加します。
4. **Folder Compare** を使って、両側の差分をプレビューします。
5. checksum を有効にした Copy または Sync ジョブを作成し、転送を実行します。

プライバシー重視の移行だからといって利便性を犠牲にする必要はありません。RcloneView を使えば、Proton Drive への移行も他のクラウド間転送と同じくらいシンプルに行えます。

---

**関連ガイド:**

- [Proton Drive を管理する — RcloneView によるクラウド同期](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [RcloneView でハードドライブを Proton Drive にバックアップする](https://rcloneview.com/support/blog/hard-drive-to-proton-drive-with-rcloneview)
- [RcloneView で Proton Drive を他のクラウドと同期する](https://rcloneview.com/support/blog/sync-proton-drive-backup-other-clouds-rcloneview)

<CloudSupportGrid />

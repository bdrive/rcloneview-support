---
slug: migrate-put-io-to-google-drive-rcloneview
title: "Put.ioからGoogle Driveへ移行 — RcloneViewでファイルを転送"
authors:
  - jay
description: "RcloneViewでPut.ioのファイルをGoogle Driveへ移行しましょう。クラウドコンテンツを転送・検証・整理できるクロスプラットフォームGUIです。"
keywords:
  - put.ioからgoogle driveへ
  - put.ioファイル移行
  - putio移行
  - RcloneView put.io
  - クラウド間転送
  - google drive移行
  - ダウンロードしたトレントをクラウドへ
  - rclone put.io
  - put.ioからdriveへ転送
  - クラウドストレージ移行ツール
tags:
  - RcloneView
  - putio
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Put.ioからGoogle Driveへ移行 — RcloneViewでファイルを転送

> 2つの別々のWebインターフェースを行き来する代わりに、視覚的なドラッグ&ドロップのワークフローでPut.ioに保存したすべてをGoogle Driveへ移動しましょう。

Put.ioはダウンロードしたトレントやリモートファイルの着地点として優れていますが、Google Driveのような長期アーカイブやチーム共有向けには作られていません。Put.ioでダウンロードが完了すると、多くのユーザーは今も手動でファイルを取得し、別の場所に再アップロードする必要があります。RcloneViewは両方のサービスに同時に接続し、ローカルディスクを経由せずにコンテンツをクラウド間で直接コピーまたは移動できるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Put.ioとGoogle Driveを並べて接続する

RcloneViewのExplorerは最大4つのパネルを同時にサポートしているため、一方のパネルでPut.ioアカウントを、もう一方でGoogle Driveを開き、並べて表示できます。Put.ioとGoogle Driveはどちらも同じ方法で追加されます — ブラウザベースのOAuthログインで、手動でコピーする必要のあるAPIキーやアクセストークンはありません。両方のリモートが設定されると、それぞれ独自のタブとして表示され、切り替えは瞬時に行われます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Put.io and Google Drive as separate remotes in RcloneView" class="img-large img-center" />

両方のパネルを開いておくと、Put.ioのダウンロードフォルダをフォルダごとに閲覧し、すべてを無差別に移行するのではなく、何を移すかを正確に決められます。マウント専用のツールとは異なり、RcloneViewはFREEライセンスでも同期とフォルダ比較を提供するため、一度きりの転送は実行にかかる時間以外のコストはかかりません。

## ジョブとして転送を実行する

ファイルを1つずつドラッグする代わりに、4ステップの同期ウィザードでCopyまたはMoveジョブを設定しましょう。Put.ioをソースに、Google Driveフォルダを宛先に選択し、Advanced Settingsのステップで接続に応じて同時ファイル転送数を調整します。ジョブの範囲が正しいか確信が持てない場合は、まずDry Runを実行してください — 何も変更せずにコピーされるすべてのファイルの一覧を表示してくれるので、大規模なメディア移行の前に行う価値があります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying files from Put.io to Google Drive in RcloneView" class="img-large img-center" />

一度きりの移行にはOne-time実行モードを使い、繰り返しジョブとして保存されないようにしましょう。移動を完了する前にPut.ioへファイルを追加し続ける予定であれば、代わりにジョブとして保存しておけば、後で再実行して新しいコンテンツだけを取り込めます。

## Folder Compareで移行を検証する

転送が完了したら、Folder Compareを開いて両方の場所を並べて確認しましょう。片方にしか存在しないファイルやサイズが一致しないファイルにフラグを付けてくれるので、Put.ioから何かを削除する前に移行が完了したことを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Put.io to Google Drive transfer" class="img-large img-center" />

Job Historyには転送の記録 — ファイル数、合計サイズ、所要時間 — も残るため、複数のセッションにわたって大規模なライブラリをバッチで移行する場合に役立ちます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. ブラウザOAuthログインフローでPut.ioリモートを追加します。
3. 同じ方法でブラウザOAuthログインを使ってGoogle Driveリモートを追加します。
4. Put.ioから宛先フォルダへのCopyまたはMoveジョブを作成し、Dry Runを実行してから実行します。

Put.ioのストレージを整理して恒久的なGoogle Driveの保管場所へ移せば、2度目の手動アップロード作業なしでダウンロードを整理された状態に保てます。

---

**関連ガイド:**

- [OneDriveからGoogle Driveへ移行 — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Put.ioストレージの管理 — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Put.ioのメディアをNASやクラウドへストリーミング・同期 — RcloneView](https://rcloneview.com/support/blog/stream-sync-putio-media-nas-cloud-rcloneview)

<CloudSupportGrid />

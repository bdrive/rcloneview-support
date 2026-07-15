---
slug: sync-yandex-disk-with-google-drive-using-rcloneview
title: "RcloneViewでYandex DiskとGoogle Driveを同期する — マルチクラウドワークフローをシンプルに"
authors:
  - tayson
description: "RcloneViewでYandex DiskとGoogle Driveを接続し、差分をプレビューして、チェックサム検証付きのスケジュール同期を実行します。"
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud sync
  - rclone sync
  - multi cloud
  - checksum verification
  - scheduler
  - compare
  - mount
  - webdav
  - backup
  - migration
  - gui
  - cloud to cloud
  - transfer monitor
  - job history
  - bandwidth limits
  - dry run
  - sync jobs
tags:
  - RcloneView
  - cloud-storage
  - cloud-to-cloud
  - sync
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでYandex DiskとGoogle Driveを同期する — マルチクラウドワークフローをシンプルに

> CLIフラグを操作することなく、Yandex DiskとGoogle Driveの間でファイルを移動・同期できます。RcloneViewなら、左右並びの比較表示、チェックサム検証付きのジョブ、そして両クラウドを常に同期させておくスケジューラが利用できます。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## なぜYandex DiskとGoogle Driveを同期するのか?

- 個人アカウントとチームアカウントに散らばったフォルダを統合できます。
- 冗長化やリージョンごとのアクセスのために、常時ミラーを維持できます。
- 移行前にプレビュー、ドライラン、チェックサムを使って安全に段階を踏めます。
- ベンダーロックインを軽減: 手動エクスポートなしで、別クラウドに検証済みのコピーを保持できます。
- 稼働率を維持: 一方のプロバイダーがスロットリングされても、もう一方を利用できます。

## ステップ1 — 両方のリモートを接続する

- `+ New Remote` からYandex Disk(WebDAVまたはOAuth)を追加します。ガイド: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login)。
- 同じ手順でGoogle Driveを追加し、適切なスコープ(My DriveまたはSharedドライブ)を選択します。
- **Remote Explorer**で両方を確認し、パスと権限が正しいことを確かめます。
- 任意の健全性チェック: 予期しない上書きを避けるため、いくつかのテストファイルでタイムゾーンと更新日時の整合性を確認しておきます。  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## ステップ2 — 同期前に比較する

- **Compare**を開き、Yandex DiskとGoogle Driveの差分を確認します: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)。
- ドキュメント、メディア、アーカイブなど、注目したい内容に絞りたい場合は拡張子でフィルタします。
- 比較結果をジョブとして保存しておけば、各同期後に再チェックできます。
- 比較機能はドライランとして利用できます。データを変更せずに追加/更新/削除の内容を表示します。
- 予期しない削除が見つかった場合は、確信が持てるまでジョブを`sync`ではなく`copy`に変更してください。  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  
  

## ステップ3 — 安全な同期ジョブを構築する

- Yandex DiskからGoogle Driveへ(必要であれば双方向で)ジョブを作成します: [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)。
- 初回実行では意図しない削除を避けるため**copy**から始め、検証が済んでから**sync**に切り替えます。
- チェックサム検証を有効にして、サイレントな破損を検出できるようにします。
- 一時/キャッシュフォルダを除外し、必要なものだけを転送します。
- Sharedドライブの場合は、ACLをクリーンに保つため正しい転送先フォルダを選びます(ルートは避けます)。
- 大文字小文字を区別するバックエンドと区別しないバックエンド間で重複しているように見えるフォルダを避けるため、パスの大文字小文字表記を一貫させます。
- チャンクサイズと並行数は、API制限に達した場合のみ検討してください。ほとんどのユーザーにはデフォルトで十分です。  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />



## ステップ4 — スケジュールと監視

- APIスロットリングを減らすため、オフピーク時間帯にスケジューラを設定します: [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)    
- **Transfer Monitor**でリアルタイムのスループットと停滞ファイルを確認します: [real-time-transfer-monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring)。
- 通知の習慣: 移行期間中は毎朝Job Historyを確認し、異常を早期に発見しましょう。  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />


## ステップ5 — オンデマンドアクセス用にマウントする(任意)

- すべてをダウンロードせずに閲覧できるよう、どちらかのクラウドをローカルにマウントします: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)。
- Windows: ドライブレターを割り当てます。macOS: `/Volumes`配下のマウントパスを選択します。
- 検証に有用です: 同期後、各マウントから直接いくつかのファイルを開き、権限と読み取り可能性を確認しましょう。  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  

## 復元または逆方向の同期

- 方向を逆にする場合(Google DriveからYandex Diskへ)は、ジョブを複製してソースとターゲットを入れ替えます。
- 選択的な復元には、正常なデータの上書きを避けるため、スコープを絞ったインクルードリストで**copy**を実行します。
- 小さく既知の状態が良好な「カナリア」フォルダを維持し、すべての実行でそれが変更されないことを確認してください。これは簡易な健全性チェックになります。

## クイックヒント

- 双方で一貫したフォルダ構造を保ち、パスの不一致を減らしましょう。
- チームごとにプリセット(Docs、Media、Archives)を使い、実行結果を予測可能に保ちましょう。
- まず小さなフォルダでテストし、その後フルツリーに拡張しましょう。
- ジョブ設定(モード、フィルタ、スケジュール)を文書化し、チームの誰もが安全に再実行できるようにしましょう。
- 大規模な移行中は、実行中の編集を防ぐためユーザー向けのマウントを読み取り専用に保ちましょう。

RcloneViewを使えば、Yandex Disk ↔ Google Driveの同期は簡単です。まず比較し、安全にコピーし、残りをスケジュールし、すべてを1つのダッシュボードから監視できます。


<CloudSupportGrid />

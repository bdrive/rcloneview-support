---
slug: mount-box-storage-network-drive-rcloneview
title: "RcloneViewでBoxストレージをネットワークドライブとしてマウントし、チームのシームレスなアクセスを実現"
authors:
  - tayson
description: "Boxフォルダをローカルのドライブレターやマウントポイントに変換し、完全同期なしで即座にブラウズ。RcloneViewのキャッシュ、比較、スケジュールジョブでチームの生産性を維持します。"
keywords:
  - rcloneview
  - box mount
  - box drive letter
  - box network drive
  - cloud storage
  - vfs cache
  - windows
  - macos
  - rclone
  - multi cloud
  - file explorer
  - finder
  - scheduler
  - job history
  - transfer monitor
  - compare sync
  - checksum
  - gui
  - cloud backup
  - mount manager
tags:
  - cloud-migration
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでBoxストレージをネットワークドライブとしてマウント

> Boxからすべてをダウンロードするのはやめましょう。ドライブとしてマウントし、ExplorerやFinderでブラウズしましょう。

Boxはコラボレーションに優れていますが、ローカル同期クライアントはディスクを圧迫し、ノートPCの動作を遅くすることがあります。RcloneViewを使えば、Boxをネットワークドライブとしてマウントし、必要に応じてファイルをストリーミングし、キャッシュと帯域幅を制御できるため、チームは完全ダウンロードなしで高速なアクセスを得られます。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## なぜ同期ではなくBoxをマウントするのか?

- 共有デバイスのディスク容量を節約し、ユーザーが開いたものだけを取得します。
- オンボーディングの高速化: 1つのドライブレターまたはマウントパスをマッピングするだけで、初回の一括同期をスキップできます。

## ステップ1 — RcloneViewでBoxを接続

- `+ New Remote`（OAuthフロー）からBoxを追加します。ガイド: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login)。
- **Remote Explorer**でリモートを確認し、フォルダと階層が正しく見えるかチェックします。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## ステップ2 — Boxをドライブとしてマウント（WindowsまたはmacOS）

- **Mount Manager**を開き、Boxリモートを選択します。ガイド: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)。
- ターゲットを選択します:
  - Windows: `cmount`を内部で使用してドライブレター（例: `B:`）を割り当てます。
  - macOS: マウントパス（例: `/Volumes/Box`）を選びます。
- 保存してマウントし、ExplorerまたはFinderにドライブが表示されることを確認します。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />


## ステップ3 — （オプション）大きな変更の前にCompareを使用

- 構造的な変更を行う前に**Compare**を実行し、Boxとローカルまたは別のクラウドとの違いを確認します: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)。
- 意図しない上書きのリスクを冒すことなく、欠落しているファイルや新しいファイルを見つけられます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />


## ステップ5 — （オプション）同期ジョブとバックアップ

- **copy**または**sync**ジョブを使って、重要なBoxフォルダをバックアップ先（S3、Wasabi、NAS）にミラーリングします: [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)。
- 安全のためまずcopyから始め、結果を検証した後にsyncへ切り替えます。
- 勤務時間外にジョブをスケジュールすることで、業務時間中のマウントを快適に保てます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />


Boxを一度マウントしてキャッシュを調整すれば、重量級の同期クライアントなしで、チームに高速かつオーバーヘッドの少ないネットワークドライブを提供できます。RcloneViewはすべてを可視化し、ログに記録し、簡単に管理できるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<CloudSupportGrid />

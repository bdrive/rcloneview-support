---
slug: mount-pcloud-local-drive-rcloneview
title: "RcloneViewでpCloudをWindows・macOSのローカルドライブとしてマウント — 同期せずにファイルにアクセス"
authors:
  - tayson
description: "pCloudをドライブレターまたはボリュームとしてマウントし、フル同期なしで即座にファイルを閲覧、RcloneViewで高速かつ確実なアクセスのためにキャッシュ設定を調整します。"
keywords:
  - rcloneview
  - pcloud mount
  - cloud drive
  - vfs cache
  - windows
  - macos
  - cloud storage
  - rclone
  - multi cloud
  - drive letter
  - volume mount
  - file explorer
  - finder
  - scheduler
  - job history
  - transfer monitor
  - cache settings
  - offline access
  - read ahead
  - compare
  - sync
  - checksum
  - gui
  - cloud backup
  - mount manager
tags:
  - RcloneView
  - pcloud
  - cloud-storage
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでpCloudをWindows・macOSのローカルドライブとしてマウント — 同期せずにファイルにアクセス

> フル同期をスキップしましょう。RcloneViewでpCloudをローカルドライブとしてマウントし、ExplorerまたはFinderで閲覧し、調整済みのキャッシュ設定でオンデマンドにファイルをストリーミングします。

pCloudは柔軟なクラウドストレージを提供しますが、すべてのマシンにすべてをコピーすると時間とディスクを無駄にします。RcloneViewを使えば、pCloudをローカルのドライブレターやボリュームのようにマウントし、必要に応じてファイルを取得し、帯域幅を管理下に置くことができます。CLIフラグを覚える必要はありません。接続、マウント、それだけです。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 同期ではなくマウントを選ぶ理由

- 容量を節約: 必要なものだけを閲覧・開き、フルのローカルミラーは不要です。
- 起動が速い: ドライブを一度マップすれば、長い初期同期をスキップできます。
- 安全な編集: キャッシュがローカルに書き込みを行い、再試行と再開はRcloneViewに任せられます。

## ステップ1 — RcloneViewでpCloudを接続する

- `+ New Remote`（WebDAVまたはOAuthフロー）からpCloudを追加します。ガイド: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login)。
- **Remote Explorer**でフォルダを一覧表示し、リモートが機能していることを確認します。

## ステップ2 — マウントを作成する（WindowsまたはmacOS）

- **Mount Manager**を開き、pCloudのリモートを選択します。ガイド: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)。
- ターゲットを選択します。
  - Windows: `cmount`を使ってドライブレター（例: `P:`）を選択します。
  - macOS: マウントパス（例: `/Volumes/pcloud`）を選択します。
- 保存してマウントします。すぐにExplorerやFinderにドライブが表示されるはずです。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />


## ステップ3 — （オプション）大きな変更の前にCompareで確認する

- 一括移動やクリーンアップの前に、**Compare**で差分をプレビューします: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)。
- 破壊的な同期を実行することなく、新しいファイル・欠落しているファイル・不一致のファイルを見つけられます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />


## ステップ4 — （オプション）重要なフォルダの同期ジョブ

- 重要なフォルダ（例: `Projects/`や`Photos/`）を別のクラウドやNASにミラーリングしておきます: [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)。
- 安全のためまずは**copy**から始め、ターゲットを信頼できるようになったら**sync**に切り替えます。
- 作業中もマウントの応答性を保つため、オフピーク時間に実行をスケジュールします。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />


pCloudを一度マウントし、キャッシュを調整して、ストレージをすっきり保ちましょう。RcloneViewは、リスクの高いフル同期のオーバーヘッドなしに、クラウドドライブをローカルのように感じさせます。

<CloudSupportGrid />

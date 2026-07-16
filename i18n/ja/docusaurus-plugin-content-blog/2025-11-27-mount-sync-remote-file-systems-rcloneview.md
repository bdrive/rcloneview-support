---
slug: mount-sync-remote-file-systems-rcloneview
title: "RcloneViewでリモートファイルシステムを簡単にマウント・同期・管理"
authors:
  - tayson
description: "SFTP、SMB、WebDAV、クラウドストレージを1つのGUIで接続。RcloneViewの2ペインExplorer、Compare、Jobs、マウントマネージャーでリモートファイルシステムをマウント、同期、自動化。"
keywords:
  - rcloneview
  - sftp
  - smb
  - webdav
  - mount remote drive
  - cloud file system
  - rclone gui
  - nas backup
  - remote explorer
  - sync automation
tags:
  - cloud
  - sync
  - mount
  - nas
  - sftp
  - webdav
  - smb
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでリモートファイルシステムを簡単にマウント・同期・管理

> **SFTP**、**SMB**、**WebDAV** のようなファイルシステム型リモートも、クラウドドライブと同じ快適さに値します。RcloneViewは2ペインのExplorer、Compare、Sync、そしてマウントマネージャーを提供するので、rcloneのフラグを覚えなくてもリモートサーバーやNASボックスをローカルディスクのように扱えます。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


<!-- Image verified: /images/en/howto/rcloneview-basic/rcloneview-user-interface.png exists -->

## ローカルFS vs. リモートFS：なぜ重要なのか

- **ローカルFS：** 瞬時のレイテンシ、ネイティブな権限、ネットワークホップなし。編集には最適だが、常に冗長というわけではない。
- **リモートFS（SFTP/SMB/WebDAV）：** ネットワークレイテンシと認証が加わるが、中央NAS、オフサイトサーバー、コラボレーションを実現できる。
- **クラウドオブジェクトストレージ：** 安価で耐久性があるが、POSIX準拠ではない。マウントすることでファイルシステムを前提とするアプリのワークフローが改善される。
- **目標：** これらを1つのUIに統合し、ツールを切り替えることなくブラウズ、マウント、同期、自動化を行えるようにする。

## 数分でSFTPとWebDAVを接続

RcloneViewは、rcloneのバックエンド一覧（100以上のプロバイダー）をシンプルなリモートウィザードでラップしています。ほとんどのFS型リモートでは、プロバイダーを選択してホスト/認証情報を入力するだけです。

<!-- Image verified: /images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-large img-center" />

👉 リモートガイド：[Remote Manager](https://rcloneview.com/support/howto/rcloneview-basic/remote-manager/)

### SFTPリモート

1. **Remote -> + New Remote**（またはExplorerの**+**）を開きます。
2. **SFTP**を選択します。
3. `host`、`port`、`user`、そしてパスワードまたはキーファイルのいずれかを入力します。
4. 保存すると、SFTPサーバーがRemote Managerに表示されます。

### WebDAVリモート

1. プロバイダー一覧から**WebDAV**を選択します。
2. **WebDAV URL**、ユーザー名、パスワード/トークンを入力します。
3. 保存し、2ペインExplorerでブラウズをテストします。

### SMB / NAS共有

1. **SMB**（Samba/CIFS）を選択します。
2. サーバーアドレスと共有名を入力し、必要に応じてドメインを追加します。
3. 保存すると、他のリモートと同様に開くことができます。

### クラウドとFSを組み合わせる

同じExplorerセッション内で、SFTP、SMB、WebDAV、そしてクラウドリモート（Google Drive、Dropbox、Mega、S3）を混在させ、それらの間で直接コピーできます。

## 高速な整理のための2ペインExplorer

リモートファイルシステムも、並べて表示できればローカルのように感じられます。

<!-- Image: two-pane explorer -->
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
   
- 左側に**サーバー**（SFTP/SMB/WebDAV）、右側に**クラウド/NAS**の宛先を開きます。
- ドラッグ&ドロップでコピーでき、進行状況は**Transfer**に表示されます。
- 右クリックで`**Copy ->**`/`**<- Copy**`、**Delete**、**Mount**の操作を実行できます。
- 同期前にキャッシュ/一時フォルダを非表示にするにはフィルターを使用します。

👉 Explorerの基本：
 - [Browse & Manage Remotes](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)  
  - [Drag & Drop files](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

## リモートファイルシステムをローカルドライブのようにマウント

SFTPやWebDAVの共有をドライブレターやFinderマウントとして使いたいですか？内蔵のマウントマネージャーを使用してください。

<!-- Image verified: /images/en/howto/rcloneview-basic/mount-from-remote-explorer.png -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  
- ツールバーまたはリモートカードから**Mount**をクリックします。
- マウントタイプ（ドライブレター/パス）を選び、キャッシュ/バッファのオプションを設定します。
- **Mount Manager**でステータスを監視し、CLIなしで停止/再起動できます。
- ローカルパスしか理解しないアプリ（NLE、DAW、CADツール）に最適です。

👉 マウントガイド：[Mount Cloud Storage as a Local Drive](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

## 同期前にCompareで確認

リモートFSのコピーは慎重に行うべきです。**Compare**を使って、新しい編集を上書きしないようにしましょう。

<!-- Image: compare before copy -->
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare folders" class="img-large img-center" />

- **欠落**、**サイズの違い**、**一致**するファイルをハイライトします。
- NAS -> クラウド、またはクラウド -> NASで、変更されたものだけをコピーします。
- ローカルSSDからリモートSFTPへ編集をステージングする際に、予期しない事態を避けるのに最適です。

👉 Compareガイド：[Compare folder contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

## 権限の問題を素早く解決

- **SFTP：** サーバー上のUID/GIDが正しいことを確認し、書き込みが失敗する場合はホスト上のディレクトリ所有者と`chmod`を確認してください。
- **SMB：** ドメイン/ワークグループを一致させ、必要に応じてサーバー側で「Allow guest/NTLMv2」を設定し、ファイルシステムACLとは別に共有権限を確認してください。
- **WebDAV：** 一部のホストはMOVE/DELETEをブロックします。COPYしてからDELETEを使い、読み取り専用マウントに注意してください。
- **ローカルマウント：** アプリが書き込めない場合は、適切なユーザーで再マウントするか、マウントダイアログでマウントオプションを調整してください。
- **Logs**タブを使ってHTTP/SFTPエラー（401/403/550）を確認し、それに応じて認証情報やパスを調整してください。

<!-- Image verified: /images/en/howto/rcloneview-basic/log-tab.png -->
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />
   
## バックアップと自動化の例

### 例1：NAS -> S3（夜間）

1. ソース：**SMB**共有、宛先：**S3**バケット。
2. **Sync**をクリックし、**一方向**（NAS -> S3）を選択します。
3. **checksum**を有効にし（対応している場合）、一時/キャッシュフォルダを除外します。
4. **Save to Jobs**（例：`nas-to-s3-nightly`）。
5. **Job Manager -> Add Job**を開き、**毎日02:00**にスケジュールします。

<!-- Image: job scheduling -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />

👉 Jobガイド：[Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)、[Execute & Manage Jobs](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)、[Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)、[Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

### 例2：SFTP編集用共有 -> Google Drive（作業中）

1. 左ペイン：**SFTP**プロジェクトフォルダ、右ペイン：**Google Drive**チームスペース。
2. **Compare**を使って新しいレンダリングだけを同期します。
3. 毎日03:00のバックアップ用に再利用可能なJobとして保存します。
4. レビューリンクが常に最新であるように、**EXPORT**専用の2つ目のJobを維持します。

### 例3：WebDAV CMS -> ローカルSSD（マウント + コピー）

1. アプリの互換性のために、**Mount Manager**経由でWebDAVサイトをマウントします。
2. サイトのアセットをローカルSSDフォルダにコピーし、差分を取得するために週次で**Compare**を実行します。
3. 削除がブロックされている場合は、コピーのみを使用し、確認後に手動でプルーニングします。

## リモートFSの速度と安定性のヒント

- 業務時間中は**帯域制限**を使用し、時間外は同時実行数を上げます。
- 大きなアップロードには**再開**を優先してください。RcloneViewは自動的に再試行を処理します。
- 長距離のSFTPでは、CPUに余裕がある場合のみ圧縮を有効にします。
- SMBでは、不安定なネットワークで同じ共有を二重マウントしないようにし、1つのマウントを維持してください。
- レート制限のあるWebDAVホストでは、同期ダイアログで並列転送数を減らしてください。

## NASとクラウドフォルダをきれいに整理

- 共有フォルダのテンプレート（例：`Project/RAW`、`EDIT`、`EXPORT`、`ARCHIVE`）をNASとクラウドの両方に保存し、各プロジェクト開始前にコピーします。
- 週次で**Compare**を使用します：NAS vs. クラウドアーカイブで、コールドストレージが最新であることを確認します。
- アーカイブには**一方向コピー**を維持します（削除の伝播を避けるため）。
- コラボレーション用に**プロキシ**をクラウドに保存し、安全のために**RAW**はNAS/S3に保管します。

## マウントすべきか同期すべきか

- アプリケーションがファイルハンドルを必要とする場合（NLE、アセットブラウザ）は**Mount**を使用します。
- 一括移動、オフサイトバックアップ、またはネットワークリンクが不安定な場合は**Sync/Copy**を使用します。
- 両方を組み合わせる：日常の編集にはマウントを使い、スケジュールされた同期でアーカイブを実行します。

## ログと復旧

- **Job History**を使って、どのファイルが失敗したか、その理由を確認し、欠落項目のみを取得するために再実行します。
- 権限エラーの場合は、再試行の前にリモートを再認証するか、サーバーのACLを調整してください。
- 初回実行時は**Log tab**を開いたままにし、401/403/550/429のコードを早期に発見しましょう。
- マウントが停止した場合は、再起動する代わりに**Mount Manager**から停止/再起動してください。

## クイックスタートチェックリスト

1. Remote ManagerでSFTP/SMB/WebDAVリモートを追加します。
2. 2ペインExplorerを開き、一覧表示を確認します。
3. 小さなフォルダで**Compare**を実行し、コピーの方向を確認します。
4. アプリがドライブレター/パスを必要とする場合はマウントします。
5. Sync/CopyをJobsとして保存し、時間外にスケジュールします。
6. 初回のフル実行後にログを確認し、対応している場合はchecksumを有効にします。

## まとめ

RcloneViewはリモートファイルシステムをファーストクラスの存在に変えます。SFTP、SMB、WebDAV、NAS、クラウドリモートを接続し、それらをローカルドライブのようにマウントし、同期前にCompareで確認し、Jobsとスケジュールでバックアップを自動化する—すべてをrcloneのエンジン上に構築されたGUIから行えます。すべてのストレージエンドポイントを同じように扱いましょう：可視化され、検証可能で、自動化された状態に。

<CloudSupportGrid />

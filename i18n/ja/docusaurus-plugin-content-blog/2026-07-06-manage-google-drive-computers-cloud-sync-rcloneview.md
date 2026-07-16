---
slug: manage-google-drive-computers-cloud-sync-rcloneview
title: "Google Drive Computersを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - jay
description: "RcloneViewでGoogle Drive Computersフォルダを接続してバックアップし、デスクトップのバックアップデータを1つのGUIから90以上のクラウドプロバイダーに同期します。"
keywords:
  - google drive computers
  - google drive computers backup
  - root_folder_id google drive
  - rcloneview google drive computers
  - backup and sync computers folder
  - google drive desktop backup
  - google drive computers sync
  - manage google drive computers
tags:
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive Computersを管理 — RcloneViewでファイルを同期・バックアップ

> Googleの「バックアップと同期」アプリがDriveにプッシュするデスクトップフォルダは、通常のDriveツリーの外に存在します。RcloneViewはこれらに直接接続し、他のリモートと同様に閲覧・コピー・バックアップできるようにします。

ワークステーションでGoogle Driveのデスクトップクライアントが「パソコンをバックアップ」フォルダを有効にして実行されている場合、そのファイルはDriveの中でも標準のリモートからはデフォルトで見えないセクションに格納されます。通常のフォルダパスではなく、コンピューターIDでアドレス指定されるためです。そのため、GUIからのアクセスが難しく、より広範なバックアップやアーカイブ戦略に組み込むのも困難でした。RcloneViewはこれを設定可能なリモート設定として公開し、Computersのバックアップを通常のクラウドストレージと同じように閲覧・フィルタリング・コピーできる、単なる1つのソースにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Computersバックアップへの接続

Google Driveの通常のリモート設定では、自分のDriveのルートと、その中に作成したフォルダしか表示されません。Computersバックアップにアクセスするには、RcloneViewの新規リモートウィザードで特定のコンピューターのバックアップIDを指定した`root_folder_id`値を受け付けます。設定すると、そのマシンでバックアップされたフォルダ（デスクトップ、ドキュメント、またはデスクトップクライアントで選択した任意のフォルダ）が、通常のフォルダツリーとまったく同じようにExplorerパネルに表示されます。これは複数の従業員のノートパソコンを管理するITチームや、ブラウザにログインせずに特定のマシンの「バックアップと同期」クライアントが実際に何をキャプチャしたかを確認したいユーザーにとって便利です。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a Google Drive remote with root_folder_id to access a Computers backup in RcloneView" class="img-large img-center" />

接続後、このリモートは他のGoogle Drive接続と同じファイル操作をサポートします。サムネイルプレビュー、フォルダツリーのナビゲーション、右クリックでのコピー/ダウンロード、そして特定のマシンがDriveにどれだけプッシュしたかを監査するためのGet Sizeなどです。RcloneViewは同一のウィンドウから90以上のプロバイダーにわたってマウントと同期ができるため、Computersバックアップを片方のパネルに、転送先のアーカイブをもう片方のパネルに表示させることができます。

## 複数のマシンを1つのアーカイブに統合

複数のワークステーションをバックアップしている組織では、マシンごとに1つのComputersフォルダが作られ、それぞれが独自のIDでアドレス指定されるため、「会社のノートパソコンからバックアップされたすべてのもの」を一つの視点で把握するのが困難になります。マシンごとに別々のリモートを設定し、共有の転送先（ローカルNAS、S3バケット、または2つ目のDriveアカウントなど）へのスケジュールされた一方向の同期ジョブを実行することで、分散したバックアップデータを、各従業員のDriveビューに閉じ込めておくのではなく、実際に自分で管理できる1つの場所に統合できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Computers backup to a consolidated archive destination in RcloneView" class="img-large img-center" />

同期ウィザードのステップ3にあるフィルタリング設定は、これらのジョブを効率的に保つのに役立ちます。一時ファイル、システムキャッシュ、不要な拡張子を除外することで、統合アーカイブにはデスクトップクライアントがたまたまキャプチャしたすべてのファイルの完全なミラーではなく、実際に保持する価値のあるものだけが残ります。

## 定期的なチェックのスケジュール設定

Computersバックアップは静的なものではありません。デスクトップクライアントが独自の同期サイクルを実行するたびに増えていくため、一度きりのコピーをアーカイブに入れただけではすぐに古くなってしまいます。PLUSライセンスのユーザーは、同期ジョブにcrontab形式のスケジュールを設定でき、新しくバックアップされたファイルが定期的に自動で取り込まれるようにできます。Job Historyには、各マシンのComputersフォルダが最後にキャプチャされた時刻、転送されたサイズ、実行が正常に完了したかどうかが正確に表示されます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job for a Google Drive Computers remote in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 新しいGoogle Driveリモートを作成し、`root_folder_id`を対象コンピューターのバックアップIDに設定します。
3. Explorerパネルを閲覧して、期待するデスクトップフォルダが表示されることを確認します。
4. 統合アーカイブの転送先への一方向同期ジョブを設定し、PLUSライセンスをお持ちの場合はスケジュールを設定します。

デスクトップのバックアップデータは、ブラウザでしか確認できないコンピューターIDの裏に閉じ込めておくべきではありません。RcloneViewに取り込むことで、他のクラウドストレージと同じ可視性と保護の下に置くことができます。

---

**関連ガイド:**

- [Google Drive Storageを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Google Drive Shared With Meを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-google-drive-shared-with-me-rcloneview)
- [RcloneViewでGoogle Driveをローカルドライブとしてマウント](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)

<CloudSupportGrid />

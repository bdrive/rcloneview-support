---
slug: manage-azure-files-cloud-sync-rcloneview
title: "RcloneViewでAzure Filesを管理する:SMBクラウド共有の同期、バックアップ、マウント"
authors:
  - tayson
description: RcloneViewでAzure Filesの共有を管理する方法を解説します — リモートの追加、SMB共有の閲覧、他のクラウドとの同期、ローカルドライブとしてのマウント、バックアップのスケジュール設定まで。
keywords:
  - rcloneview
  - azure files
  - azure file shares
  - smb cloud storage
  - cloud sync
  - mount azure files
  - azure backup
  - rclone GUI
  - multi-cloud management
  - azure file management
tags:
  - RcloneView
  - azure-files
  - azure
  - cloud-storage
  - cloud-sync
  - guide
  - mount
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでAzure Filesを管理する:SMBクラウド共有の同期、バックアップ、マウント

> Azure Filesはクラウド上でフルマネージドのSMBファイル共有を提供します。**RcloneView**を使えば、コマンドライン操作を一切行わずに、ビジュアルなインターフェースからそれらを閲覧、同期、バックアップ、マウントできます。

Azure FilesはMicrosoftのマネージドファイル共有サービスで、Azureから直接SMBおよびNFSアクセスを提供します。ハイブリッドワークロードを実行する企業や、リフト&シフト型のアプリケーション、仮想マシン向けの共有ストレージで広く利用されています。しかし、Azure PortalなしでAzure Filesを管理するのは煩雑になりがちです。特に、Azureと他のクラウド間でデータを移動したり、ローカルコピーを同期させたりする必要がある場合はなおさらです。

RcloneViewは、rcloneのAzure Filesバックエンドを、洗練された2ペイン構成のGUIでラップすることでこの問題を解決します。Azureのファイル共有をリモートとして追加し、ビジュアルに閲覧し、クラウド間でファイルをドラッグし、フォルダの内容を比較し、自動バックアップをスケジュールし、さらには共有をローカルドライブレターとしてマウントすることもできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure FilesにRcloneViewを使う理由

Azure FilesはAzureのエコシステム内ではうまく機能しますが、実際のワークフローは複数のプロバイダーにまたがることが多くあります。次のような場面が考えられます。

- **Azureファイル共有をバックアップする** — 災害復旧のために、Amazon S3、Backblaze B2、Wasabiなど別のクラウドへバックアップする。
- **Azure FilesをGoogle DriveやOneDriveと同期する** — チームメンバーが使い慣れたツールから同じデータにアクセスできるようにする。
- **Azure共有をローカルにマウントする** — SMB接続文字列ではなくローカルファイルパスを想定しているアプリケーション向け。
- **データを移行する** — Azure Filesから別のプロバイダーへ、またはその逆方向へ。

RcloneViewは、スクリプト、PowerShell、AzCopyを使わずにこれらすべてに対応します。

## Azure Filesをリモートとして追加する

RcloneViewでAzure Filesを設定するのは1分もかかりません。

1. RcloneViewを開き、**+ New Remote**をクリックします。
2. リストから**Azure Files**ストレージタイプを選択します。
3. **Azure Storageアカウント名**と**アカウントキー**（またはSASトークン）を入力します。
4. リモートに名前を付け（例:`AzureFileShares`）、保存します。

これで、Azureのファイル共有がExplorerペインに表示され、すぐに閲覧できるようになります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an Azure Files remote in RcloneView" class="img-large img-center" />

## ファイル共有の閲覧と管理

接続が完了すると、RcloneViewは見慣れた2ペインレイアウトでAzureのファイル共有を表示します。次のような操作が可能です。

- **ディレクトリを移動する** — 各共有内で、ローカルのファイルマネージャーと同じようにネストしたフォルダを掘り下げられます。
- **ファイルのメタデータをプレビューする** — サイズ、更新日時、パスなど。
- **フォルダの名前変更、削除、作成**をGUIから直接行う。
- **もう一方のペインで別のクラウドを開き**、並べて管理する。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Two-pane explorer showing Azure Files alongside another cloud" class="img-large img-center" />

## Azure Filesを他のクラウドと同期する

RcloneViewの真価は、Azure Filesを別のクラウドと接続したときに発揮されます。片方にAzure Filesを、もう片方に移行先 — Google Drive、OneDrive、Amazon S3、またはサポートされている任意のリモートを読み込みます。

### ドラッグ&ドロップ

Azure Files内のファイルやフォルダを選択し、移行先のペインにドラッグします。RcloneViewがバックグラウンドで転送を処理し、リアルタイムの進捗状況を表示します。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Azure Files to another cloud" class="img-large img-center" />

### 比較と選択コピー

**Compare**機能を使うと、どちらの側で新規・変更・欠落しているファイルがあるかを確認できます。差分のみをコピーすることで、すべてを転送することなく増分更新が可能になります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders between Azure Files and a destination cloud" class="img-large img-center" />

### 完全同期

**Sync**操作を実行すると、移行先をAzureファイル共有の完全なミラーにできます。実行前には必ず**Dry Run**を使い、変更内容をプレビューしてください。

## Azure Filesをローカルドライブとしてマウントする

RcloneViewは、Windows、macOS、Linuxで任意のAzureファイル共有をローカルドライブレターとしてマウントできます。これは次のような場合に便利です。

- デスクトップアプリケーションがファイルの読み書きにローカルパスを必要とする場合。
- SMBクライアントを使わずにFile ExplorerやFinderからAzure Filesにアクセスしたい場合。
- 一回限りのタスクのために、手早く一時的なマウントが必要な場合。

Explorerでリモートを開き、共有を右クリックして**Mount**を選択します。ドライブレターまたはマウントポイントを選ぶと、共有がローカルボリュームとして表示されます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Azure Files as a local drive from RcloneView Explorer" class="img-large img-center" />

## 自動バックアップのスケジュール設定

継続的な保護のために、RcloneViewで**Scheduled Job**を作成しましょう。

1. Azure Filesからバックアップ先への Sync または Copy ジョブを設定します。
2. **Job Scheduling**パネルを開き、スケジュールを定義します — 毎日、毎週、またはカスタムのcron式。
3. スケジュールを有効にし、あとはRcloneViewに任せます。

すべての実行は**Job History**パネルに記録されるため、何が転送されたかを監査したり、エラーを検知したりできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule an automated backup job for Azure Files" class="img-large img-center" />

## Azure Filesを扱う際のヒント

- **スコープを限定したSASトークンを使用する** — アカウントキー全体を公開せずにRcloneViewにアクセス権を付与したい場合に有効です。
- **転送サイズを監視する** — Azure Filesはストレージとトランザクションに課金されるため、大きな差分で頻繁に同期するとコストが積み重なることがあります。
- **一時ファイルを除外する** — RcloneViewのフィルタルールを使い、ロックファイル、ログ、キャッシュディレクトリの同期を避けます。
- **定期的にリストアをテストする** — バックアップ先から数個のファイルをコピーし直して、整合性を確認します。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. ストレージアカウントの認証情報を使って**Azure Filesリモートを追加**します。
3. **閲覧、同期、マウント、スケジュール設定**を、CLI不要ですべてGUIから行います。

Azure Filesの管理は、ポータルのタブとPowerShellスクリプトの繰り返しである必要はありません。RcloneViewはすべてを1つのウィンドウにまとめます。

---

**関連ガイド:**

- [RcloneViewによるクラウド間転送と同期](https://rcloneview.com/support/blog/cloud-to-cloud-transfer-sync-rcloneview)
- [RcloneViewでDropboxからAzure Blob Storageへ移行する](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)
- [RcloneViewでGoogle Cloud Storageバケットを管理する](https://rcloneview.com/support/blog/manage-google-cloud-storage-buckets-rcloneview)

<CloudSupportGrid />

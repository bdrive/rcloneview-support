---
slug: mount-digitalocean-spaces-local-drive-rcloneview
title: "RcloneViewでDigitalOcean Spacesをローカルドライブとしてマウントし、簡単にファイルへアクセスする"
authors:
  - tayson
description: "DigitalOcean SpacesオブジェクトストレージをRcloneViewでローカルドライブとしてマウントし、通常のフォルダのように扱う — ドラッグ＆ドロップでファイルを操作し、他のクラウドと同期できます。"
keywords:
  - digitalocean spaces mount
  - digitalocean spaces local drive
  - spaces s3 compatible mount
  - digitalocean spaces gui
  - digitalocean spaces file manager
  - mount object storage local drive
  - digitalocean spaces sync
  - digitalocean spaces backup
  - spaces rclone gui
  - digitalocean spaces desktop
tags:
  - digitalocean-spaces
  - mount
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでDigitalOcean Spacesをローカルドライブとしてマウントし、簡単にファイルへアクセスする

> DigitalOcean Spacesはアセットの保存には優れていますが、Webコンソール経由でのファイルアクセスは遅く、面倒です。もしSpacesバケットをデスクトップ上の通常のフォルダのように閲覧できたらどうでしょうか？

DigitalOcean Spacesは手頃な価格のS3互換オブジェクトストレージを提供していますが、Webダッシュボードは日常的なファイル管理向けには作られていません。フォルダのアップロード、ファイルの整理、コンテンツのプレビューには、常にブラウザタブの切り替えが必要になります。RcloneViewを使えば、任意のSpacesバケットをローカルドライブとしてマウントでき、ローカルファイルシステムを扱うのと同じように自然に閲覧、ドラッグ＆ドロップ、同期ができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜDigitalOcean Spacesをローカルでマウントするのか？

Spacesはアプリのバックエンドストレージとしてはうまく機能しますが、人間が直接操作する必要がある場合には次のような問題があります。

- **Webコンソールが遅い** — 数千のファイルを含む大規模なバケットをナビゲートするのは面倒です。一括リネームも、クイックプレビューも、ドラッグ＆ドロップもありません。
- **CLIツールはコマンドの暗記が必要** — `s3cmd`や`aws s3`は使えますが、基本的なファイル操作のためにコマンドを入力したくない人もいます。
- **ネイティブなデスクトップ統合がない** — DropboxやGoogle Driveとは異なり、Spacesにはデスクトップ同期クライアントがありません。

Spacesをローカルドライブとしてマウントすれば、この3つすべてを解決できます。バケットはファイルマネージャー上にフォルダとして表示され、使い慣れたツールでファイルを開き、フォルダをコピーし、アイテムを削除できます。

## DigitalOcean Spacesをリモートとして設定する

SpacesはS3互換であるため、RcloneViewでの設定にはS3プロバイダータイプを使用します。

1. RcloneViewを開き、**Add Remote**をクリックします。
2. プロバイダータイプとして**Amazon S3**を選択します（SpacesはS3 APIを使用します）。
3. S3プロバイダーのドロップダウンから**DigitalOcean Spaces**を選択します。
4. 認証情報を入力します。
   - DigitalOceanのAPI設定にある**Access Key**と**Secret Key**。
   - **Region**：お使いのSpacesリージョン（例：`nyc3`、`sfo3`、`ams3`、`sgp1`）。
   - **Endpoint**：`https://{region}.digitaloceanspaces.com`
5. リモートを保存すると、Spacesバケットが閲覧可能になります。

<img src="/support/images/en/blog/new-remote.png" alt="Add DigitalOcean Spaces as S3-compatible remote" class="img-large img-center" />

## Spacesをローカルドライブとしてマウントする

接続が完了すると、Spacesバケットをローカルドライブとしてマウントするのはわずか数クリックです。

1. Explorerで対象のSpacesリモートに移動します。
2. マウントしたいバケットまたはフォルダを右クリックします。
3. コンテキストメニューから**Mount**を選択します。
4. ローカルのマウントポイントを選びます（Windowsではドライブ文字、Mac/Linuxではマウントパス）。
5. **Mount**をクリックすると、Spacesバケットがローカルドライブとして表示されます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount DigitalOcean Spaces from Explorer" class="img-large img-center" />

または、Mount Managerを使えば、マウントオプションをより細かく制御できます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure Spaces mount in Mount Manager" class="img-large img-center" />

### マウントしたドライブでできること

- **ファイルを直接開く** — 画像、ドキュメント、動画をダブルクリックすると、デフォルトのアプリで開けます。
- **コピー＆ペースト** — OSのファイルマネージャーを使って、ローカルファイルシステムとSpaces間でファイルを移動します。
- **ドラッグ＆ドロップ** — デスクトップからマウントしたドライブへファイルをドラッグします。
- **アプリケーションで利用** — Photoshop、VS Code、動画編集ソフトなどのアプリから、マウントしたドライブ上のファイルを直接指定できます。

## ファイルの閲覧と管理

マウントしなくても、RcloneViewの2ペインExplorerはSpaces向けの強力なファイルマネージャーとして機能します。

- 使い慣れたツリーナビゲーションで**バケットやフォルダを移動**できます。
- Spacesと他のリモート（Google Drive、S3、ローカルディスク）の間でファイルを**ドラッグ＆ドロップ**できます。
- ファイルやフォルダの**作成、リネーム、削除**ができます。
- **ファイルサイズと日時を表示**して管理しやすくします。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to DigitalOcean Spaces" class="img-large img-center" />

## Spacesを他のクラウドと同期する

DigitalOcean Spacesは単独で使われるものではありません。よくあるワークフローには以下があります。

### Spaces ↔ AWS S3 の同期

Spacesのデータのバックアップコピーを AWS S3 に保持します（またはその逆）。

1. Spacesをソース、S3を宛先とする同期ジョブを作成します。
2. 毎晩実行するようスケジュールします。
3. [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)を使って両側が一致していることを確認します。

### Spaces ↔ ローカル開発フォルダ の同期

開発用にSpacesアセットのローカルコピーを保持します。

1. Spacesからローカルフォルダへの同期ジョブを作成します。
2. ローカルで編集し、その後Spacesへ同期し直します。

### Spacesから複数のクラウドへ配布する

v1.3の[Batch Jobs](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview)を使って、Spacesのコンテンツを一度の自動化されたシーケンスでGoogle Drive、OneDrive、S3にコピーします。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync DigitalOcean Spaces with other clouds" class="img-large img-center" />

## Spacesワークフローの自動化

### スケジュールされたバックアップ

Spacesバケットから別のクラウドやローカルストレージへの毎日のコピージョブを設定します。

1. Job Managerでジョブを作成します。
2. [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)経由でスケジュールします。
3. [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control)や[Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)で通知を受け取ります。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule DigitalOcean Spaces sync jobs" class="img-large img-center" />

### パフォーマンスのヒント

- **並列転送数**：8〜16（Spacesは高い並行性にもよく対応します）。
- **チャンクサイズ**：大きなファイルには64MB。
- **Fast-list**：大規模なバケットでのディレクトリ一覧表示を高速化するために有効にします。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. APIキーを使って**SpacesをS3互換リモートとして追加**します。
3. バケットを**マウント**してローカルドライブにするか、Explorerで閲覧します。
4. スケジュールされたジョブで他のクラウドへ**同期またはバックアップ**します。

Webコンソールと格闘するのはやめましょう。DigitalOcean Spacesをローカルドライブとしてマウントし、デスクトップから他のすべてと同じ感覚でファイルを扱えるようにしましょう。

---

**関連ガイド：**

- [AWS S3およびS3互換ストレージの追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [クラウドストレージをローカルドライブとしてマウントする](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [リモートの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

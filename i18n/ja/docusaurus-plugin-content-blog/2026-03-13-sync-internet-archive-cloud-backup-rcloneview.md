---
slug: sync-internet-archive-cloud-backup-rcloneview
title: "RcloneViewでInternet Archiveのコレクションをアップロード・管理する方法"
authors:
  - tayson
description: "Internet Archiveはデジタルコンテンツを無料で保存できるサービスです。RcloneViewを使ってコレクションをアップロードし、ローカルのアーカイブを同期し、Internet Archiveアカウントを管理する方法を解説します。"
keywords:
  - internet archive upload
  - internet archive rclone
  - upload to internet archive
  - internet archive backup
  - internet archive manager
  - internet archive file transfer
  - internet archive collections
  - archive.org upload tool
  - digital preservation cloud
  - internet archive sync
tags:
  - RcloneView
  - internet-archive
  - digital-preservation
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでInternet Archiveのコレクションをアップロード・管理する方法

> archive.orgのInternet Archiveは、世界最大級の無料デジタルライブラリです。歴史的な文書やメディア、データセットを保存しているなら、RcloneViewを使うことで他のクラウドストレージと合わせてアップロードを管理できます。

Internet Archiveは、公開可能なデジタルコンテンツ(書籍、音声、動画、ソフトウェア、データセット)を無料・無制限で保存できるサービスです。多くの研究者、図書館員、デジタル保存の専門家が長期アーカイブとして利用しています。RcloneViewはInternet Archiveをリモートとしてサポートしており、他のクラウドと合わせてアップロードを管理できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Internet Archiveを使う理由

- **無料ストレージ** — 公開可能なコンテンツであれば費用はかかりません。
- **永続的な保存** — 長期的なデジタル保存を目的として設計されています。
- **公開アクセス** — コンテンツは誰でも自由に閲覧できます。
- **多様な形式に対応** — 音声、動画、テキスト、画像、ソフトウェアをサポート。
- **DOI対応** — 学術コンテンツの引用可能な参照を提供します。

## RcloneViewでInternet Archiveを設定する

### APIクレデンシャルを取得する

1. [archive.org](https://archive.org/) でアカウントを作成します。
2. [archive.org/account/s3.php](https://archive.org/account/s3.php) からAPIキーを取得します。

### リモートとして追加する

1. RcloneViewを開き、**Add Remote** をクリックします。
2. タイプとして **Internet Archive** を選択します。
3. アクセスキーとシークレットキーを入力します。

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote" class="img-large img-center" />

## よくあるワークフロー

### ローカルコレクションをアップロードする

デジタル化した書籍、音声録音、歴史的文書などをローカルストレージからInternet Archiveへ転送します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Upload to Internet Archive" class="img-large img-center" />

### 他のクラウドからバックアップする

Google DriveやS3からデジタル保存用のコンテンツをコピーし、Internet Archiveで永続的に公開します。

### 定期アップロード

継続的なデジタル化プロジェクトのために、定期的なアップロードをスケジュールできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Internet Archive uploads" class="img-large img-center" />

### アップロードを確認する

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Internet Archive uploads" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. APIキーを使って **Internet Archiveを追加** します。
3. コレクションを **アップロード・同期・管理** します。
4. 継続的なデジタル化プロジェクトのために **アップロードをスケジュール** します。

あらゆるサービスに接続できるツールで、デジタルの歴史を保存しましょう。

---

**関連ガイド:**

- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />

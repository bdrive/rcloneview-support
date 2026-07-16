---
slug: sync-http-remote-download-organize-rcloneview
title: "RcloneViewでHTTP/HTTPSリモートを使う — Webサーバーからファイルをダウンロード・整理する"
authors:
  - tayson
description: "RcloneViewは任意のHTTP/HTTPSファイルサーバーに読み取り専用リモートとして接続できます。公開されているファイルをダウンロード・整理し、クラウドストレージへ自動的に同期しましょう。"
keywords:
  - rclone http remote
  - http file download sync
  - web server file sync
  - http to cloud transfer
  - download files to cloud
  - http remote rcloneview
  - web directory sync
  - http ftp file manager
  - download organize cloud
  - web hosted files sync
tags:
  - ftp
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでHTTP/HTTPSリモートを使う — Webサーバーからファイルをダウンロード・整理する

> データセット、ファームウェア、アーカイブ、メディアなど、必要なファイルがあるWebサーバーがある場合、手動でダウンロードしてからクラウドに再アップロードする代わりに、RcloneViewのHTTPリモートを使って直接転送しましょう。

多くの組織、研究機関、オープンソースプロジェクトは、HTTP/HTTPS Webサーバー上にファイルを公開しています。これらのファイルを手動でダウンロードしてからクラウドストレージにアップロードするのは面倒で、ローカルの帯域幅も無駄にします。RcloneViewは任意のHTTPディレクトリリスティングに読み取り専用リモートとして接続でき、内容を閲覧しながら任意のクラウドプロバイダーへ直接転送できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HTTPリモートの仕組み

HTTPリモートは、ディレクトリリスティングを提供するWebサーバーに接続します。RcloneViewはディレクトリ構造を解析し、他のリモートと同様に閲覧可能なファイルツリーとして表示します。ファイルはその後、他の任意のリモート(Google Drive、S3、ローカルストレージなど)にコピーできます。

**重要**: HTTPリモートは読み取り専用です。ダウンロード・コピーは可能ですが、アップロードはできません。

## HTTPリモートを追加する

<img src="/support/images/en/blog/new-remote.png" alt="Add HTTP remote" class="img-large img-center" />

ディレクトリリスティングを提供する任意のWebサーバーのURLをリモートに指定します。

## ユースケース

### オープンデータセットをミラーリングする

研究機関は大規模なデータセットをHTTPで公開していることがよくあります。信頼性の高いアクセスのために、S3やGoogle Driveへミラーリングしましょう:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mirror web dataset to cloud" class="img-large img-center" />

### Web上のファイルをアーカイブする

サーバーからファイルが削除される可能性がある場合、保存のためにクラウドにコピーを作成します。

### ダウンロードしたコンテンツを整理する

HTTPサーバーの構造を閲覧し、必要なものを選択して、整理されたクラウドフォルダへ転送します。

### 定期ダウンロードをスケジュールする

定期的に更新されるサーバー(ファームウェア、パッケージ、データリリースなど)については、定期的な同期ジョブをスケジュールしましょう。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule HTTP sync" class="img-large img-center" />

### ダウンロードを検証する

HTTPのソースとクラウドのコピーを比較します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify HTTP downloads" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Webサーバーを指す**HTTPリモートを追加**します。
3. ファイルエクスプローラーで**ディレクトリを閲覧**します。
4. 70以上のプロバイダーのいずれかへ**クラウドにコピー**します。

Webサーバーも、クラウドツールキットの中の単なる一つのリモートになります。

---

**関連ガイド:**

- [WebDAVサーバーに接続する](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [FTPサーバーをクラウドへ移行する](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />

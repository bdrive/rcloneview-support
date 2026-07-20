---
slug: manage-gofile-cloud-sync-backup-rcloneview
title: "Gofileストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "RcloneViewでGofileクラウドストレージを管理 — rcloneのGofileバックエンドを利用したGUIで、Gofileコンテンツのアップロード、整理、同期を行います。"
keywords:
  - Gofile管理
  - Gofile同期ツール
  - Gofileアップロード GUI
  - RcloneView Gofile
  - Gofileクラウドバックアップ
  - Gofileファイル転送
  - コンテンツ配信ストレージ
  - マルチクラウドファイル管理
  - Gofile rclone
  - 大容量ファイルアップロードサービス
tags:
  - RcloneView
  - gofile
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gofileストレージを管理 — RcloneViewでファイルを同期・バックアップ

> Gofileは大容量アップロードに対応した人気のファイルホスティング・共有サービスです。RcloneViewはアクセストークンを使ってGofileに接続し、クラウド管理ワークフローに統合します。

Gofileは、制限の厳しいサイズ上限なしで大容量ファイルをアップロードし、共有可能なリンクを生成できるファイルホスティング・共有サービスです。Gofileを通じて定期的にコンテンツを配信するユーザーにとって、ウェブポータルのみでアップロードを管理するのは煩雑になりがちです。RcloneViewはアクセストークンを使ってGofileに接続し、他のすべてのクラウドリモートと並んで、標準的なファイル管理ワークフローにGofileストレージを取り込みます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでGofileを設定する

RcloneViewでGofileを接続するには、**Remoteタブ > New Remote**に移動し、プロバイダーリストから**Gofile**を選択します。Gofileアカウントダッシュボードから**アクセストークン**を取得する必要があります。トークンを入力し、リモートに名前を付けて保存します。GofileアカウントはExplorerにブラウズ可能なリモートとして表示され、他のクラウドストレージと同様にフォルダやファイルが表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Gofile as a new remote in RcloneView" class="img-large img-center" />

Gofileはフォルダベースの構造でコンテンツを整理しており、RcloneViewはこれをリスト表示とサムネイル表示の両方できれいに表示します。ネストしたフォルダを閲覧し、ファイル名やサイズを確認し、複数ファイルを選択して一括操作(バッチのダウンロード、古いアップロードのまとめ削除、Gofileフォルダ間でのコンテンツ移動)を行うことができます。

## Gofileコンテンツのアップロードと整理

RcloneViewは、ローカルのファイルマネージャーからGofile Explorerパネルへの直接ドラッグ&ドロップアップロードをサポートしています。ローカルフォルダから動画ファイルのバッチをドラッグすると、ブラウザを開くことなく選択したGofile先にアップロードされます。これは、大容量の動画パッケージやソフトウェアアーカイブを定期的にGofile経由で配信するコンテンツクリエイターに特に便利です。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Gofile in RcloneView" class="img-large img-center" />

**ジョブマネージャー**で同期ジョブを作成すると、ローカルフォルダからGofileへ定期的にコンテンツをプッシュできます。編集済みのエピソード音声をリスナー配信のためにGofileにアップロードするポッドキャストプロデューサーは、録音セッション後に毎週自動実行するように設定でき、毎回新規または変更されたファイルのみを同期できます。

## Gofileコンテンツを永続ストレージにバックアップする

Gofileのコンテンツは保持期間が限られていたり、アカウントの状態に依存する場合があります。Gofileを配信チャネルとして利用しつつ永続的なバックアップも欲しいユーザーのために、RcloneViewはGofileからAmazon S3、Backblaze B2、その他のクラウドリモートへの直接転送を可能にします。コピージョブを設定してGofileからコンテンツを取得し、長期ストレージにアーカイブすることで、共有したすべてのコンテンツの永続的なコピーを維持できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing Gofile backup transfers in RcloneView" class="img-large img-center" />

**ジョブ履歴**タブでは、転送されたバイト数、転送されたファイル数、所要時間、ステータスなど、各転送の詳細を追跡できます。これにより、Gofileコンテンツが正常にアーカイブされたかどうかを常に把握できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remoteタブ > New Remote**に移動し、**Gofile**を選択してアクセストークンを入力します。
3. Explorerパネルで Gofileコンテンツを閲覧します。
4. **ジョブマネージャー**を使ってローカルコンテンツをGofileに同期するか、Gofileコンテンツをバックアップストレージにコピーします。

RcloneViewを通じたGofileの利用は、Gofileの高速なアップロード・共有インフラの上に、コンテンツ配信者向けの本格的なファイル管理レイヤーをもたらし、単発のアップロードを整理された自動化ワークフローへと変えます。

---

**関連ガイド:**

- [Backblaze B2クラウドストレージを管理 — RcloneViewで同期・バックアップ](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [RcloneViewでGoogle Driveに大容量ファイルをアップロード](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)
- [URLをコピー — RcloneViewでファイルを直接クラウドにダウンロード](https://rcloneview.com/support/blog/copyurl-download-url-to-cloud-rcloneview)

<CloudSupportGrid />

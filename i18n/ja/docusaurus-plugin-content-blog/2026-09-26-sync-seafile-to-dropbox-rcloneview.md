---
slug: sync-seafile-to-dropbox-rcloneview
title: "SeafileをDropboxに同期する — RcloneViewでクラウドバックアップ"
authors:
  - casey
description: "RcloneViewを使い、スケジュール同期ジョブとDry Runプレビューでセルフホスト型SeafileサーバーをDropboxに安全かつ確実にバックアップします。"
keywords:
  - SeafileをDropboxに同期
  - Seafile Dropboxバックアップ
  - セルフホスト型クラウドバックアップ
  - RcloneView Seafile
  - クラウド間同期
  - Seafileオフサイトバックアップ
  - Dropboxバックアップツール
  - Seafile災害復旧
  - セルフホストからDropboxへの移行
tags:
  - RcloneView
  - seafile
  - dropbox
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SeafileをDropboxに同期する — RcloneViewでクラウドバックアップ

> 手作業でスクリプトを書くことなく、セルフホスト型Seafileサーバーのオフサイトコピーを Dropbox に用意しましょう。

Seafileが人気なのは、まさにデータを組織自身の管理下に置ける点にありますが、その独立性ゆえに外部バックアップへの組み込みの経路がありません。サーバーやそのディスク、ホストがダウンすれば、他所にコピーされていないものはすべて失われます。RcloneViewは同じウィンドウでSeafileとDropboxの両方に接続し、スケジュール同期ジョブとしてファイルを移動するため、誰もcronスクリプトやrcloneコマンドを手書きすることなく、セルフホスト型サーバーは本物のオフサイトコピーを得られます。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウント・同期でき、Windows、macOS、Linuxで動作するため、同期ジョブが管理者のノートパソコンから実行されても、専用のバックアップマシンから実行されても同じ設定が通用します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SeafileとDropboxを接続する

Seafileはサーバーの URL、ライブラリ、アカウントの資格情報を入力してリモートとして追加され、RcloneViewは保存前に接続を確認します。Dropboxはよりシンプルな OAuth フローを使用します。ブラウザウィンドウが開き、アカウントを認証すると、リモートが自動的にタブとして表示されます。両方を設定すると、Remote Managerに並んで表示され、互いに影響を与えることなく後から個別に編集できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a self-hosted Seafile server and Dropbox as remotes in RcloneView" class="img-large img-center" />

両方のリモートが接続されたら、完全な同期を実行する前に2パネルレイアウトを開いて、Seafileのライブラリと Dropbox の宛先フォルダを一緒に確認しましょう。

## 同期ジョブを作成する

Seafileのライブラリをソースに、専用のDropboxフォルダを宛先とする一方向同期ジョブを作成し、バックアップの実行が誤って元のSeafileデータを変更しないようにします。Filtering Settingsでは、サーバーから出てはいけないもの — 一時ファイル、バージョン管理されたプロジェクトの`.git/`フォルダ、サイズしきい値を超えるファイルタイプなど — を、RcloneViewがすべての同期ジョブに適用する同じカスタムフィルター構文で除外します。まずDry Runを実行しましょう。実際に何も転送せずにコピーされるすべてのファイルを一覧表示するため、帯域幅を消費する前に誤ったソースフォルダを見つける最も速い方法です。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Seafile to Dropbox backup job in RcloneView" class="img-large img-center" />

PLUSライセンスのユーザーは、ジョブにcrontab形式のスケジュールを設定して、誰も手動で開始しなくてもバックアップが毎晩実行されるようにできます — 営業時間中ずっと変化し続けるSeafileサーバーに便利です。

## Job Historyでバックアップを確認する

Advanced Settingsでチェックサム比較を有効にすると、RcloneViewはファイルサイズだけでなくハッシュとサイズで一致を確認します。これは、Seafileのバージョン管理によって同じサイズでも内容が異なるファイルが残る場合に重要です。各実行後、Job Historyは転送された総ファイル数、所要時間、エラーが発生した項目を表示するため、復元ポイントとして信頼する前にDropboxのコピーが実際に最新であることを簡単に確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing a completed Seafile to Dropbox sync" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Seafileサーバーをライブラリパスと資格情報を指定してリモートとして追加します。
3. OAuthログインフローでDropboxを追加します。
4. Dry Runを実行してから同期ジョブを実行し、Job Historyで結果を確認します。

スケジュールされ検証済みのDropboxコピーがあれば、セルフホスト型Seafileの導入が単一障害点から、本物のフォールバックを備えたサーバーへと変わります。

---

**関連ガイド:**

- [RcloneViewでSeafileのセルフホスト型クラウドをGoogle Drive、S3、外部ストレージと共に管理する](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [Dropboxを管理する — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [RcloneViewでSeafile同期エラーを修正する](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />

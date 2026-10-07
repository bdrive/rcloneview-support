---
slug: migrate-pcloud-to-dropbox-rcloneview
title: "pCloudからDropboxへ移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewでpCloudからDropboxへ移行：OAuthで両方を接続し、Dry Runで事前確認してからクラウド間でコピーし、Folder Compareで検証します。"
keywords:
  - pCloudからDropboxへ移行
  - pCloud to Dropbox 転送
  - pCloudのファイルをDropboxへ移動
  - pCloud Dropbox 移行ツール
  - クラウド間転送
  - RcloneView
  - rclone GUI
  - pCloud 同期
  - Dropbox 同期
  - フォルダ比較
tags:
  - RcloneView
  - pcloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloudからDropboxへ移行 — RcloneViewでファイルを転送

> pCloudのライブラリ全体を、いったんローカルディスクにダウンロードすることなくDropboxへ移せます。

pCloudからDropboxへ切り替えるのは、チームが共有用にDropboxへ統一した場合や、取引先から求められた場合がほとんどです。数百GBを手作業でダウンロードして再アップロードするのは時間がかかり、ミスも起きやすくなります。RcloneViewはrcloneを介して両サービスを接続し、ひとつのウィンドウからDry Runと検証ステップを挟みつつ、クラウド間でファイルを転送します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloudとDropboxを接続する

RcloneViewでは、pCloudもDropboxもOAuthのブラウザログインを使うため、APIキーは不要です。Remoteタブを開いて**New Remote**をクリックし、pCloudを選んでブラウザが開いたらサインインします。Dropboxも同様に追加してください。Dropbox Businessアカウントを使う場合は、設定時に`dropbox_business = true`を有効にします。

RcloneViewはWindows、macOS、Linuxで90以上のクラウドストレージサービスに対応しているため、両方のアカウントがExplorerパネルに並んで表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでpCloudとDropboxのリモートを追加" class="img-large img-center" />

## Dry Runで移行内容をプレビュー

何かを移動する前に、Syncウィザードを開き、ソースにpCloud、宛先にDropboxのフォルダを選択します。最初の移行では、ソース側に手を加えないよう**Copy**方式を使います。**Dry Run**を実行すると、転送される全ファイルが一覧表示され、フォルダ構造が想定どおりの場所に作成されるかを確認できます。

たとえば、デザイナーがpCloudに400 GBのプロジェクトフォルダを持っているとします。Dry Runで大きすぎるファイルや不要なサブフォルダを見つけ、Syncウィザードのフィルタリングステップで最大ファイルサイズ、ファイルの経過期間、カスタムフィルタルールを使って除外できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="pCloudからDropboxへのクラウド間転送" class="img-large img-center" />

## 転送を実行して進捗を監視

ジョブを開始し、Transferringタブで進捗とファイル数を確認します。Advanced Settingsでは、ファイル転送数の調整やチェックサム比較の有効化が可能です。途中で失敗した場合は、ジョブのリトライ設定（デフォルト3）に従って同期が再試行され、再実行すると不足しているファイルだけがコピーされます。

データはrcloneを介して両サービス間を直接移動するため、ライブラリ全体を保存できるローカルのディスク空き容量は必要ありません。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneViewで実行中の転送を監視" class="img-large img-center" />

## Folder Compareで検証

転送後、HomeタブからCompareを開き、左にpCloud、右にDropboxを指定します。左のみに存在するファイルと差異のあるファイルでフィルタして取りこぼしを見つけ、Copy rightで補完します。Job Historyでステータス、サイズ、ファイル数を確認すれば、移行の記録として残せます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="pCloudとDropbox間のFolder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. RemoteタブでOAuthログインを使い、pCloudとDropboxのリモートを追加します。
3. pCloudからDropboxへのCopyジョブを作成し、まずDry Runを実行します。
4. ジョブを実行し、旧アカウントを閉じる前にFolder Compareで検証します。

段階的に検証しながら進める移行なら、Dropboxに必要なものがすべて揃うまでpCloudのデータはそのまま保たれます。

---

**関連ガイド：**

- [pCloudからOneDriveへ移行](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [DropboxをpCloudへ同期](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)
- [Dry Run — クラウド同期のプレビュー](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />

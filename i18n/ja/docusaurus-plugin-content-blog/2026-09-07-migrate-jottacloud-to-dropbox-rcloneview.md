---
slug: migrate-jottacloud-to-dropbox-rcloneview
title: "JottacloudからDropboxへ移行 — RcloneViewでファイルを転送"
authors:
  - alex
description: "RcloneViewを使ってJottacloudからDropboxへファイルを移動しましょう。フォルダを同期し、転送を検証し、両方のリモートを1つのウィンドウで管理できます。"
keywords:
  - JottacloudからDropboxへ移行
  - Jottacloud Dropbox 転送
  - Jottacloud Dropbox 移行
  - RcloneView Jottacloud
  - RcloneView Dropbox
  - クラウド間転送
  - クラウドストレージ間のファイル移動
  - Jottacloudの代替
  - Dropbox移行ツール
  - ヨーロッパのクラウドストレージ移行
tags:
  - RcloneView
  - jottacloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# JottacloudからDropboxへ移行 — RcloneViewでファイルを転送

> デスクトップに何もダウンロードすることなく、JottacloudからDropboxへファイルを移動しましょう。

欧州内のデータ保管場所を理由にJottacloudから始めたチームが、国際パートナーとの連携が優先事項になった際にDropboxへ統合する必要が出てくることがあります。すべてをローカルにダウンロードしてから再アップロードすると帯域幅が無駄になり、フォルダ構造が壊れるリスクもあります。RcloneViewは両方のリモートに同時に接続してファイルを直接移動させるため、転送はクラウド間で直接行われます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## JottacloudとDropboxを並べて接続する

Remoteタブ > New Remoteから両方のストレージアカウントを追加します。Dropboxは標準的なブラウザログインで接続でき、APIキーを管理する必要はありません。追加すると、各リモートはExplorerパネルで独自のタブを持つため、片方のパネルでJottacloud、もう片方でDropboxを開き、何かを移動する前に両方のフォルダツリーを直接並べて確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewで新しいクラウドリモートを追加" class="img-large img-center" />

転送を開始する前に両方のアカウントを確認しておくと、フォルダの命名規則が一致しているかを確認したり、元の構造が時間とともに乱れている場合はDropbox側で新しい構造を計画したりできます。

## クラウド間転送を実行する

HomeタブのSyncウィザードを使用して、Jottacloudをソース、Dropboxを宛先として設定します。同期方向を一方向に設定すると、RcloneViewがJottacloud側で何も削除することなく、Dropboxがソースをそのまま反映します。ステップ3でフィルタを適用し、新しい場所に必要ないファイルタイプを除外できます — `.iso`ファイルや`.git/`フォルダ全体を除外すると、転送を本当に必要なコンテンツに集中させられます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="JottacloudからDropboxへのクラウド間同期ジョブを設定" class="img-large img-center" />

まずDry Runを実行してください。どちらのアカウントにも触れることなく、コピーされるファイルの一覧を正確に表示するため、誤って設定されたフィルタが数千件のファイルに影響を与える前に見つける最も確実な方法です。

## すべてのファイルが正しく届いたか確認する

転送が完了したら、Folder Compareを開いてJottacloudとDropboxの同じパスを指定します。サイズが一致するファイルは同一として表示され、異なるものやコピーに失敗したものはフラグが付くため、その項目だけを再実行できます。RcloneViewはWindows、macOS、Linuxの単一ウィンドウから90以上のプロバイダーをマウント・同期できるため、比較する2つのクラウドがどの組み合わせであってもこの検証手順は同じように機能します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="移行後にJottacloudとDropboxのフォルダを比較" class="img-large img-center" />

Job Historyは完了した同期のサイズ、速度、ファイル数を記録するため、移行がどのように行われたかを誰かに尋ねられたときに参照できる記録になります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. RemoteタブからJottacloudとDropboxのリモートを追加します。
3. Jottacloudをソース、Dropboxを宛先とする一方向の同期ジョブを作成し、Dry Runを実行します。
4. 同期を実行し、Folder Compareで結果を確認します。

確認が済んだら、切り替えが完全に終わるまで両方のリモートをしばらく接続したままにしておき、古いJottacloudアカウントに追加されたファイルを見逃さないようにしましょう。

---

**関連ガイド:**

- [Jottacloudストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Dropboxストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [JottacloudからWasabiへ移行 — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-jottacloud-to-wasabi-rcloneview)

<CloudSupportGrid />

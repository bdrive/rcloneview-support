---
slug: migrate-dropbox-to-storj-rcloneview
title: "DropboxからStorjへ移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewを使ってDropboxから分散型クラウドストレージのStorjへ移行 — ローカルディスクを使わずにクラウド間でファイルを転送し、フォルダ比較で検証します。"
keywords:
  - Dropbox to Storj migration
  - Storj decentralized cloud
  - Dropbox migration tool
  - RcloneView Dropbox
  - Storj backup
  - cloud migration GUI
  - decentralized storage transfer
  - cloud-to-cloud migration
  - Storj rclone
  - Dropbox alternatives
tags:
  - RcloneView
  - dropbox
  - storj
  - cloud-to-cloud
  - migration
  - decentralized-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DropboxからStorjへ移行 — RcloneViewでファイルを転送

> Storjはエンドツーエンド暗号化と高い耐久性を備えた分散型クラウドストレージを提供しています — RcloneViewを使えば、ローカルへのダウンロードと再アップロードを行うことなく、DropboxのコンテンツをStorjへ直接移行できます。

Storjは、消失訂正符号化による高い耐久性、デフォルトでのエンドツーエンド暗号化、そしてコスト効率の良い料金体系を提供する分散型クラウドストレージネットワークであり、開発者やプライバシーを重視するユーザーにとって魅力的な選択肢です。Dropboxから手動でファイルを移行する場合、まずすべてをローカルにダウンロードする必要がありますが、RcloneViewを使えばクラウド間の直接転送が可能になり、ローカルディスクを消費することなくDropboxからStorjへデータをストリーミングできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## DropboxとStorjの接続

OAuthブラウザフロー — **Remoteタブ > New Remote > Dropbox** — を使ってRcloneViewに**Dropbox**を追加します。Storjについては、新しいリモートを追加し、rcloneのStorjバックエンドを認証情報で設定します。両方のリモートをセットアップしたら、デュアルパネルエクスプローラーで左にDropbox、右にStorjバケットを並べて開き、移行前にコンテンツを確認しましょう。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Storj remotes in RcloneView" class="img-large img-center" />

**Dropbox for Business**アカウントの場合、リモート作成時に`dropbox_business`フラグを設定することで、チームスペースやメンバーフォルダに正しくアクセスできます。

## 移行の実行

**Job Manager**で、ソースをDropboxフォルダに、宛先をStorjバケットパスに設定します。300GBのプロジェクトアーカイブをクリーンに移行する場合は、Syncではなく**Copy**ジョブタイプを使用してください — これによりDropbox上のソースファイルを保持したままStorjへすべてをコピーでき、元データを削除する前に移行内容を確認する時間が確保できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dropbox to Storj migration job running in RcloneView" class="img-large img-center" />

ジョブ設定でチェックサム検証を有効にすると、各ファイルが正しく転送されたことを確認できます。Storjのアーキテクチャは、消失訂正符号化されたシャードをグローバルなノードネットワーク全体に分散するため、単なるコピーではなく、冗長性が強化されたアーカイブを得ることになります。RcloneViewの**Transferring**タブでは、移行中のリアルタイムの進捗、転送速度、ファイル数を確認できます。

## 移行後の検証

ジョブが完了したら、RcloneViewの**Folder Compare**を使ってDropboxのソースとStorjの宛先を比較します。「equal」と表示されるファイルは、サイズと更新日時の両方が一致していることを示します。左側のみに表示されるファイルは転送されなかったものを示しており、rcloneは不足分または差分のみを転送するため、ジョブを再実行することで解決できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Dropbox to Storj migration with Folder Compare in RcloneView" class="img-large img-center" />

比較によりすべてのファイルがStorjに存在することが確認できたら、Dropboxのコンテンツを安全にアーカイブまたは削除できます。**Job History**タブには、何が、いつ、どれだけのデータが転送されたかという移行の永続的な記録が残されます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Dropbox**リモート(OAuth)と**Storj**リモート(認証情報)を追加します。
3. Job ManagerでDropboxからStorjバケットへの**Copy**ジョブを作成します。
4. Dropboxのコンテンツを削除する前に、**Folder Compare**で移行の完全性を検証します。

RcloneViewを通じたStorjへの移行により、ローカルへのダウンロードと再アップロードという手間をかけることなく、分散型ストレージの持つ回復力とプライバシーの利点を得ることができます。

---

**関連ガイド:**

- [RcloneViewでStorj分散型クラウド同期を管理する](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [DropboxをBackblaze B2にバックアップ — RcloneViewによる手頃なストレージ](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [RcloneViewでStorjとGoogle Drive間のファイルを転送する](https://rcloneview.com/support/blog/transfer-storj-and-google-drive-with-rcloneview)

<CloudSupportGrid />

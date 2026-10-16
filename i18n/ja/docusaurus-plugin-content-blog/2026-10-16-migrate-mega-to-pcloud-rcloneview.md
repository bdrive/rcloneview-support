---
slug: migrate-mega-to-pcloud-rcloneview
title: "MegaからpCloudへ移行 — RcloneViewでファイルを転送"
authors:
  - morgan
description: "RcloneViewでMegaからpCloudへ移行：両方のリモートを接続し、Dry Runでプレビューしてクラウド間コピーを行い、Folder Compareで結果を検証します。"
keywords:
  - MegaからpCloudへ移行
  - Mega pCloud 転送
  - MegaのファイルをpCloudへ移動
  - RcloneView Mega
  - RcloneView pCloud
  - クラウド間移行
  - Mega pCloud 同期
  - Mega ファイル転送
tags:
  - RcloneView
  - mega
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# MegaからpCloudへ移行 — RcloneViewでファイルを転送

> 手動でダウンロードして再アップロードする代わりに、プレビューと検証が可能なコピージョブで、Megaアカウント全体をpCloudへ移しましょう。

MegaからpCloudへ切り替えるには、通常、入れ子になったフォルダにまたがる数千のファイルを扱う必要があり、ブラウザ経由では最初にすべてをダウンロードしなければなりません。RcloneViewは両サービスを並べて接続し、クラウドからクラウドへ直接転送します。Dry Runでジョブをプレビューし、Folder Compareで漏れがないことを確認できます。RcloneViewは、Windows、macOS、Linuxで1つのウィンドウから90以上のクラウドストレージサービスを管理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## MegaとpCloudをリモートとして接続

Megaは認証情報の入力方式です。新しいリモートを追加してMegaを選択し、メールアドレスとパスワードを入力します。pCloudはブラウザベースのOAuthを使用します。RcloneViewがログインページを開き、アクセスを承認するとリモートが自動的に接続されます。コピーすべきAPIキーはありません。

両方のリモートができたら、2つのExplorerパネルでそれぞれ開きます。何かを移動する前に、双方を参照してアカウントに到達できることと、フォルダツリーの構成を確認してください。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでMegaとpCloudのリモートを追加" class="img-large img-center" />

## 転送の計画

アカウント全体を移すか、一部だけにするかを決めます。よくある方法は、ジョブごとに最上位フォルダを1つコピーすることで、各実行が短く、再試行もしやすくなります。同期ウィザードでは、最大ファイルサイズ、最大ファイル経過時間、またはDocument、Image、Videoなどの定義済みグループで範囲を絞り込めます。

pCloudにすでに残したいファイルがある場合は、SyncではなくCopyを選択してください。単方向同期は、宛先をソースと同じ状態にするためです。最初にDry Runを実行してください。何も変更せずに、コピーまたは削除されるファイルの一覧が表示されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="移行前にMegaとpCloudのフォルダを比較" class="img-large img-center" />

## 移行を実行して進捗を確認

簡単な一回限りのコピーには、MegaパネルからpCloudパネルへフォルダをドラッグします。繰り返し実行する場合はジョブを保存します。異なるリモート間のドラッグは移動ではなくコピーになるため、納得するまでMegaのデータはそのまま残ります。

進捗はTransferringタブで、速度、ファイル数、パーセンテージとして確認できます。大きなアーカイブを移す場合は、Advanced Settingsで同時転送数を下げると、Megaのアカウント制限による中断が起こりにくくなります。同期ジョブは失敗した場合、実行全体を再試行します（デフォルト：3回）。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="MegaからpCloudへのクラウド間転送" class="img-large img-center" />

## 検証と完了

コピーが完了したら、2つのルートに対してFolder Compareを開きます。フィルターで、左のみ、右のみ、同一、異なるファイルを表示でき、漏れたファイルはワンクリックでコピーできます。Job Historyには実行ごとの開始時刻、所要時間、ステータス、ファイル数が記録されるため、移行ログとして役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="MegaからpCloudへの移行のジョブ履歴" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード**：[rcloneview.com](https://rcloneview.com/src/download.html)から入手できます。
2. Megaリモート（メールアドレスとパスワード）とpCloudリモート（ブラウザログイン）を追加します。
3. 1つのフォルダでDry Runを実行し、コピージョブを実行します。
4. Folder Compareで検証し、残りのフォルダでも繰り返します。

段階的に検証しながら移行すれば、すべてのファイルが届いたという確信を持ってMegaから移れます。

---

**関連ガイド：**

- [pCloudからMegaへ移行](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [Megaストレージを管理](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [pCloudストレージを管理](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

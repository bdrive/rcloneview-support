---
slug: migrate-yandex-disk-to-pcloud-rcloneview
title: "Yandex Disk から pCloud へ移行 — RcloneView でファイルを転送する"
authors:
  - morgan
description: "RcloneView で Yandex Disk のファイルを pCloud へ移動しましょう。OAuth で両方のクラウドを接続し、Dry Run でプレビューし、クラウド間でコピーして Folder Compare で検証します。"
keywords:
  - yandex disk から pcloud への移行
  - yandex disk pcloud 転送
  - yandex disk 移行
  - pcloud 移行ツール
  - クラウド間転送
  - yandex disk からファイルを移動
  - rcloneview yandex disk
  - rcloneview pcloud
  - rclone gui クラウド移行
tags:
  - RcloneView
  - yandex-disk
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex Disk から pCloud へ移行 — RcloneView でファイルを転送する

> プレビュー、監視、検証ができる GUI ベースのコピージョブで、長年蓄積した Yandex Disk のファイルを pCloud へ移しましょう。

ストレージアカウントの統合は、たいてい同じところで止まります。すべてをノートPCにダウンロードして、またアップロードし直す必要があることです。RcloneView は Yandex Disk と pCloud を並べて接続し、rclone を通じて両者の間でファイルをコピーするため、先にローカルディスクへ一時保存する必要がありません。どちらのサービスもブラウザの OAuth ログインで接続するので、API キーを作成する必要もありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Yandex Disk と pCloud をリモートとして接続する

Remote タブを開き、**New Remote** をクリックします。Yandex Disk を選び、`yandex` のような短いリモート名を付けて、ブラウザログインを完了します。pCloud についても `pcloud` のような名前で同じ手順を繰り返します。両方とも Remote Manager に表示され、後から編集や削除ができます。

接続したら、リモートごとに 1 つずつ Explorer パネルを 2 つ開き、フォルダツリーを閲覧します。最上位フォルダを右クリックして **Get Size** を選ぶと、移動するデータ量がわかります。この数値で、最初のファイルをコピーする前に pCloud のプランに空き容量があるかを確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and pCloud remotes in RcloneView" class="img-large img-center" />

## コピージョブを計画してプレビューする

一度きりの移行には **Copy** ジョブの方が安全です。pCloud にファイルを追加するだけで、何も削除しないからです。削除も含めて pCloud に Yandex Disk を正確にミラーさせたい場合にのみ **Sync** を使ってください。

Job Manager でジョブを作成します。Step 1 で Yandex Disk のフォルダを転送元、pCloud のフォルダを転送先に選びます。Step 2 ではチェックサム比較の有効化を検討してください。両側が同じハッシュ形式を共有していれば、ハッシュとサイズでファイルを比較します（Yandex Disk は MD5 を使用し、pCloud は US リージョンのアカウントでのみ MD5 を提供します）。不安定な接続に備えて、リトライ設定（デフォルト：3）はそのままにしておきます。Step 3 では不要になったものをスキップできます — たとえば最大ファイル経過期間や、`.iso` イメージや `.git/` フォルダを除外するカスタムルールです。

実行前に **Dry Run** を使いましょう。コピーされるすべてのファイルが一覧表示されるので、400 GB の RAW アーカイブを移す写真家でも、何時間もの転送を始める前にフォルダ構成が正しいかを確認できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from Yandex Disk to pCloud in RcloneView" class="img-large img-center" />

## 転送を実行して監視する

ジョブを開始し、Transferring タブで進捗、速度、ファイル数を確認します。大きなライブラリは、最上位フォルダごとに 1 つずつ複数のジョブに分けると安心です。ネットワークの不調が起きても影響は 1 つのバッチだけで済みます。すべての実行はステータス、合計サイズ、ファイル数とともに Job History に記録され、移行の監査証跡になります。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to pCloud transfer in the Transferring tab" class="img-large img-center" />

## Folder Compare で検証する

ジョブが完了したら、左に Yandex Disk のフォルダ、右に pCloud のフォルダを置いて **Compare** を開きます。「left-only」と「different」のファイルで絞り込むと、スキップされたものを見つけられます。Copy right を使えば、残ったファイルをワンクリックで送れます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Yandex Disk and pCloud folders after migration" class="img-large img-center" />

## はじめに

RcloneView は Windows、macOS、Linux で、90 以上のプロバイダーを 1 つのウィンドウからマウント・同期できます。

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. OAuth のブラウザログインで Yandex Disk と pCloud をリモートとして追加します。
3. Yandex Disk から pCloud への Copy ジョブを作成し、Dry Run で確認します。
4. ジョブを実行し、Yandex Disk のアカウントを閉じる前に Folder Compare で結果を確認します。

検証済みの移行なら、すべてのフォルダが移ったことを確認したうえで古いアカウントを整理できます。

---

**関連ガイド：**

- [Yandex Disk ストレージを管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [pCloud ストレージを管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Yandex Disk の同期エラーを解決 — RcloneView で失敗した転送を診断・解消](https://rcloneview.com/support/blog/fix-yandex-disk-sync-errors-rcloneview)

<CloudSupportGrid />

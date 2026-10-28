---
slug: migrate-pcloud-to-google-drive-rcloneview
title: "pCloud から Google Drive へ移行 — RcloneView でファイルを転送"
authors:
  - morgan
description: "RcloneView で pCloud から Google Drive へファイルを移動:両方のリモートを接続し、Dry Run を実行し、クラウド間でコピーして、Folder Compare で検証します。"
keywords:
  - pcloud から google drive へ移行
  - pcloud google drive 転送
  - pcloud のファイルを google drive に移動
  - pcloud google drive 移行
  - クラウド間転送
  - rcloneview pcloud
  - rcloneview google drive
  - pcloud 代替 移行
  - pcloud データ転送
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud から Google Drive へ移行 — RcloneView でファイルを転送

> すべてを自分のディスクにダウンロードすることなく、pCloud アカウント全体を Google Drive に移します。

Google Workspace に統一するチームは、pCloud に数年分のファイルが残っていることがよくあります。手作業でダウンロードして再アップロードするのは遅く、ミスも起こりがちです。RcloneView は 1 つのウィンドウで両方のサービスを接続し、クラウド間でコピーし、古いアカウントを閉じる前にフォルダーごとに結果を検証できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud と Google Drive を接続する

RcloneView ではどちらのサービスも OAuth のブラウザーログインを使うため、貼り付ける API キーはありません。Remote タブを開いて New Remote をクリックし、pCloud を選んで、開いたブラウザーウィンドウでアクセスを承認します。Google Drive でも同じ手順を繰り返します。両方が Remote Manager に表示されたら、2 つの Explorer パネルを並べて開きます。左に pCloud、右に Google Drive です。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で pCloud と Google Drive のリモートを追加する" class="img-large img-center" />

まず pCloud のツリーを参照し、最上位フォルダーで Get Size を使います。たとえばプロジェクトフォルダーが 1.5 TB ある写真スタジオなら、1 つの巨大なジョブではなく、フォルダーごとに移行を計画できます。

## クラウド間でコピーする

少数のフォルダーなら、pCloud パネルから Google Drive パネルへドラッグします。異なるリモート間のドラッグは Copy として実行されるため、pCloud の元ファイルはそのまま残ります。アカウント全体の場合は、代わりにジョブを作成します。Sync ウィザードを開き、ソースに pCloud、宛先に Google Drive を選び、どちら側でも何も削除されないよう Copy 型のジョブを選択します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView での pCloud から Google Drive へのクラウド間転送" class="img-large img-center" />

Advanced Settings では、Number of file transfers を控えめな値から始めるのが無難です。Google Drive は API 制限を適用するため、同時実行数が非常に高いと再試行が発生することがあります。短いネットワーク切断でジョブが終了しないよう、"Retry entire sync if fails" は既定値の 3 のままにしておきます。

## Dry Run、フィルター、モニタリング

本番実行の前に、Dry Run でコピーされるファイルをプレビューします。Filtering ステップでは、`.git/` フォルダーなどの不要なものを除外したり、最大ファイルサイズやファイルの経過期間で絞り込んだりできるため、最近のプロジェクトだけを移せば済む場合に便利です。ジョブが始まると、Transferring タブに進行状況、速度、ファイル数が表示され、Job History がすべての実行を記録します。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView で pCloud から Google Drive へのジョブ履歴を確認する" class="img-large img-center" />

## Folder Compare で検証する

ジョブが完了したら、左に pCloud、右に Google Drive を置いて Compare を開きます。left-only ファイルに絞り込めば届いていないものが分かり、比較ビューから直接コピーできます。RcloneView は Windows、macOS、Linux で 90 以上のプロバイダーを 1 つのウィンドウでマウントおよび同期できるため、移行と確認を同じツールで行えます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView での pCloud と Google Drive 間の Folder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. New Remote で pCloud と Google Drive をリモートとして追加します。
3. pCloud から Google Drive への Copy ジョブで Dry Run を実行し、その後本番実行します。
4. 古いアカウントを閉じる前に、Compare で left-only ファイルが残っていないことを確認します。

段階的なコピーと目視確認により、リスクのあるアカウント移行が日常的な作業になります。

---

**関連ガイド:**

- [pCloud を Google Drive に同期 — RcloneView でクラウドバックアップ](https://rcloneview.com/support/blog/sync-pcloud-to-google-drive-rcloneview)
- [Google Drive から pCloud へ移行 — RcloneView でファイルを転送](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [pCloud ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

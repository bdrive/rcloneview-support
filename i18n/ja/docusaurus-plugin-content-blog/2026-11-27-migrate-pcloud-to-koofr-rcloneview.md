---
slug: migrate-pcloud-to-koofr-rcloneview
title: "pCloud から Koofr へ移行 — RcloneView でファイルを転送"
authors:
  - jay
description: "RcloneView で pCloud から Koofr へ移行。クラウド間でフォルダーをコピーし、Dry Run でプレビュー、Folder Compare で検証して、ダウンロードと再アップロードの手間を省きます。"
keywords:
  - pcloud から koofr への移行
  - pcloud koofr 転送
  - pcloud koofr 移行
  - pcloud から koofr にファイルを移動
  - クラウド間移行
  - ヨーロッパのクラウドストレージ移行
  - rcloneview pcloud
  - rcloneview koofr
  - koofr ファイル転送ツール
  - rclone gui クラウド移行
tags:
  - RcloneView
  - pcloud
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud から Koofr へ移行 — RcloneView でファイルを転送

> pCloud のライブラリをフォルダーごとに Koofr へ移し、すべての変更を事前に確認し、取りこぼしがないことを確かめましょう。

チームや個人が pCloud から Koofr へ移行する理由はさまざまです。アカウントの統合、Koofr を中央ハブとして採用すること、あるいは別のプロバイダーに 2 つ目のコピーを置くことなどです。すべてをノートパソコンにダウンロードして再びアップロードすると、ディスク容量と何日もの時間を無駄にします。RcloneView は両方のサービスを 1 つのウィンドウで接続し、rclone を通じてそれらの間でデータをコピーするため、移行を監視・再実行・検証できる管理されたジョブとして実行できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud と Koofr をリモートとして接続する

**Remote** タブを開き、**New Remote** をクリックします。pCloud は OAuth を使用します。pCloud を選ぶとブラウザーが開き、サインインしてアクセスを承認できます。API キーは不要です。続いて Koofr 用の 2 つ目のリモートを追加し、設定フォームが求めるアカウント認証情報を入力します。

両方のリモートができたら、2 つの Explorer パネルに並べて開きます。**Settings > Layout** でレイアウトを左右分割または上下分割に切り替えられ、フォルダーツリー、リスト表示、または写真フォルダー向けのサムネイル表示で各アカウントを閲覧できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で pCloud と Koofr のリモートを追加" class="img-large img-center" />

何かを移す前に、pCloud の最上位フォルダーを右クリックして **Get Size** を使いましょう。合計サイズがわかれば、Koofr アカウントに十分な容量があるかを確認できます。

## クラウド間でフォルダーをコピーする

少数のフォルダーなら、pCloud パネルから Koofr パネルへドラッグします。異なるリモート間のドラッグは **Copy** になるため、pCloud の元のファイルはそのまま残ります。

完全な移行には、代わりにジョブを作成します。Home タブで **Sync** をクリックし、pCloud のフォルダーを転送元、Koofr のフォルダーを転送先に選び、`pcloud-to-koofr` のようなジョブ名を付けます。Advanced Settings では、ハッシュとサイズでファイルを比較したい場合は **checksum** を有効にし、接続が切れても実行が止まらないよう **Retry entire sync if fails** はデフォルトの 3 のままにしておきます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView で pCloud から Koofr へのクラウド間転送" class="img-large img-center" />

まず **Dry Run** を実行しましょう。コピーまたは削除されるすべてのファイルが一覧表示されるので、実際のデータが動く前に転送先パスの誤りを見つける確実な方法です。RcloneView は Windows、macOS、Linux で 1 つのウィンドウから 90 以上のプロバイダーをマウント・同期できるため、今後ほかの組み合わせを移行するときも同じジョブの流れを使えます。

## 転送を監視して履歴を確認する

ジョブの実行中は、**Transferring** タブに進捗、速度、ファイル数が表示され、いつでもキャンセルできます。400 GB の撮影データを移す写真家なら、アプリをシステムトレイに最小化しておけば、ジョブはバックグラウンドで実行され続けます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView で pCloud から Koofr への転送の進捗を監視" class="img-large img-center" />

完了したら **Job History** を開き、ステータス(Completed、Errored、Canceled)、合計サイズ、速度、ファイル数を確認します。切り替え期間中に pCloud へ新しいファイルを追加した場合は、同じジョブを再実行してください。新規または変更されたファイルだけが転送されます。

## Folder Compare で検証する

**Compare** をクリックし、左側に pCloud のフォルダー、右側に Koofr のフォルダーを読み込みます。**left-only files** でフィルターして Koofr に欠けているものを見つけ、**Copy right** で不足分を埋めます。両側が一致と表示されれば移行は完了で、pCloud のコピーをいつ廃止するかを決められます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView で移行後に pCloud と Koofr のフォルダーを比較" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. **New Remote** から pCloud(OAuth ブラウザーログイン)と Koofr をリモートとして追加します。
3. pCloud から Koofr への Sync ジョブを作成し、**Dry Run** でプレビューします。
4. ジョブを実行し、**Job History** を確認して、**Folder Compare** で検証します。

計画的で検証済みの移行なら、手作業のコピーが終わるのを待つのではなく、自分のスケジュールでプロバイダーを切り替えられます。

---

**関連ガイド:**

- [pCloud ストレージを管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Koofr ストレージを管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [RcloneView で Koofr の同期エラーを解決する](https://rcloneview.com/support/blog/fix-koofr-sync-errors-rcloneview)

<CloudSupportGrid />

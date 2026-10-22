---
slug: migrate-koofr-to-dropbox-rcloneview
title: "KoofrからDropboxへ移行 — RcloneViewでファイルを転送"
authors:
  - robin
description: "RcloneViewでKoofrからDropboxへ移行しましょう。2つのリモートを接続し、Dry Runでプレビューし、クラウド間コピーを実行して、Folder Compareで結果を検証します。"
keywords:
  - KoofrからDropboxへ移行
  - Koofr Dropbox 転送
  - RcloneView Koofr
  - RcloneView Dropbox
  - クラウド間移行
  - Koofr バックアップ
  - Dropbox 同期
  - rclone GUI
  - クラウド間でファイルを移動
  - クラウド移行ツール
tags:
  - RcloneView
  - koofr
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# KoofrからDropboxへ移行 — RcloneViewでファイルを転送

> Koofrのライブラリをクラウド間転送でDropboxへ移します。コピー前にプレビューし、完了後は比較で確認します。

KoofrからDropboxへ移る理由は、共有チームフォルダ、クライアントのワークフロー、Dropboxとしか連携しないアプリなどさまざまです。すべてをノートPCにダウンロードして再アップロードするのは遅く、失敗もしやすい方法です。rcloneベースのGUIであるRcloneViewは、両方のサービスをリモートとして接続し、1つのジョブで転送します。進行状況は最初から最後まで確認できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## KoofrとDropboxをリモートとして接続する

Remoteタブを開き、**New Remote**をクリックします。DropboxはブラウザベースのOAuthを使用します。RcloneViewがログインページを開き、アクセスを承認すると、APIキーなしでリモートが接続されます。移行先がDropbox for Businessアカウントの場合は、リモート作成時に`dropbox_business`設定を有効にしてください。Koofrも同様にプロバイダー一覧から追加し、移行元のアカウントでサインインします。

RcloneViewはWindows、macOS、Linuxで、1つのウィンドウから90以上のクラウドストレージサービスを管理できるため、両方のリモートを同じエクスプローラーに並べて表示できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでKoofrとDropboxのリモートを追加" class="img-large img-center" />

## コピー前にフォルダ構成を計画する

左のエクスプローラーパネルでKoofrを、右でDropboxを開きます。すべてを移すか、特定のフォルダだけにするかを決めましょう。数年分のクライアントフォルダを持つ写真スタジオなら1年ずつコピーしてもよく、小規模なチームならツリー全体を一度に移してもかまいません。右クリックメニューの**Get Size**で、フォルダのデータ量が分かり、ジョブにかかる時間の見積もりに役立ちます。

ジョブウィザードのフィルターステップで、`.git/`フォルダなどの不要なものや、最大サイズを超えるファイルを除外できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewでKoofrとDropboxのフォルダを比較" class="img-large img-center" />

## Dry Runを実行してから転送する

Homeタブからジョブを作成します。ソースはKoofr、宛先はDropboxにし、確信が持てるまで元データをそのまま残すためCopyを選びます。まず**Dry Run**を実行してください。コピーされるファイルの一覧が表示されるので、データが動く前に宛先フォルダの間違いに気付けます。その後ジョブを実行すると、クラウド間転送が両サービスの間でストリーミングされ、Transferringタブで速度、ファイル数、進行状況を確認できます。

Dropboxは一度に多くの呼び出しを受けると、リクエストを遅くすることがあります。レート制限のメッセージが表示された場合は、Advanced Settingsでファイル転送数を減らし、ジョブにリトライさせてください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="KoofrからDropboxへのクラウド間転送" class="img-large img-center" />

## 検証してジョブ履歴を残す

コピーが完了したら、2つのフォルダで**Compare**を開きます。Left-onlyのファイルは届いていないものを示し、サイズの違いは別に表示されます。比較ビューからコピーして不足分を補い、**Job History**で各実行のステータス、所要時間、ファイル数を確認してください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="KoofrからDropboxへの移行のジョブ履歴" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote > New Remote**からKoofrとDropboxを追加します。
3. KoofrからDropboxへのCopyジョブを作成し、Dry Runを実行します。
4. ジョブを実行し、Koofrのコピーを整理する前にFolder Compareで検証します。

プレビューと検証ができる移行なら、自信を持ってやり遂げられます。

---

**関連ガイド:**

- [Koofrストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Dropboxストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Dry Run — RcloneViewでクラウド同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />

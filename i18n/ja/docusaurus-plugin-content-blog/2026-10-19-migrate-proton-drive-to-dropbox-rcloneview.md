---
slug: migrate-proton-drive-to-dropbox-rcloneview
title: "Proton DriveからDropboxへ移行 — RcloneViewでファイルを転送"
authors:
  - kai
description: "RcloneViewでProton DriveからDropboxへ移行しましょう。両方のリモートを接続し、Dry Runでプレビューしてからクラウド間コピーを行い、Folder Compareで結果を検証します。"
keywords:
  - Proton Drive Dropbox 移行
  - Proton Drive Dropbox 転送
  - Proton Drive ファイルを Dropbox へ移動
  - RcloneView Proton Drive
  - RcloneView Dropbox
  - クラウド間移行
  - Proton Drive Dropbox 同期
  - Proton Drive ファイル転送
tags:
  - RcloneView
  - proton-drive
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton DriveからDropboxへ移行 — RcloneViewでファイルを転送

> 転送前にプレビューし、転送後に比較しながら、Proton Drive のファイルをクラウド間で Dropbox にコピーします。

Proton Drive から Dropbox への移行は、多くの場合コラボレーションが理由です。共有フォルダ、チームメンバー、すでに Dropbox 上にあるツールなどです。先にすべてをノート PC へダウンロードするのは時間がかかり、空きディスク容量も必要です。RcloneView は 1 つのウィンドウで両方のアカウントを接続し、その間で直接コピーします。RcloneView は Windows、macOS、Linux 上で、1 つのウィンドウから 90 以上のプロバイダーをマウントおよび同期できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Proton Drive と Dropbox を接続する

Proton Drive は認証情報の入力方式です。新しいリモートを追加して Proton Drive を選び、メールアドレスとパスワードを入力します。2 要素認証を有効にしている場合は 2FA コードも入力してください。Proton Drive のサポートには rclone v1.69 以降が必要です。RcloneView には rclone が組み込まれているため、リモートの作成に失敗する場合はフッターでバージョンを確認してください。

Dropbox はブラウザ OAuth を使用します。RcloneView がログインページを開くので、アクセスを承認するとリモートが自動的に接続されます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で Proton Drive と Dropbox のリモートを追加する" class="img-large img-center" />

## 移動する対象を選ぶ

Proton Drive にクライアントごとのフォルダを持ち、現在は Dropbox で成果物を共有しているフリーランスのコンサルタントを考えてみましょう。ジョブごとにクライアントフォルダを 1 つずつコピーすると、各実行が短く済み、再試行も簡単です。

Dropbox にすでに残したいファイルがある場合は、Sync ではなく Copy を使用してください。片方向の同期では、コピー先がコピー元と同じ状態になるためです。ウィザードのフィルターでは、ファイルサイズや期間で絞り込んだり、Document や Image などの定義済みグループを選択したりできます。まず Dry Run を実行してください。何も変更せずに、コピーまたは削除される内容を一覧表示します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="移行前に Proton Drive と Dropbox のフォルダを比較する" class="img-large img-center" />

## 転送と監視

手早くコピーするには、Proton Drive パネルのフォルダを Dropbox パネルへドラッグします。異なるリモート間のドラッグは移動ではなくコピーなので、元のファイルは Proton Drive に残ります。繰り返し実行する場合は、転送をジョブとして保存してください。

Transferring タブには速度、ファイル数、進行状況が表示されます。大きなアーカイブの場合は、Advanced Settings で同時転送数を減らし、どちらのサービスからも実行が中断されないようにしましょう。失敗した実行は自動的に再試行されます（デフォルト：3 回）。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Proton Drive から Dropbox へのクラウド間転送" class="img-large img-center" />

## 結果を検証する

コピー後、両方のルートで Folder Compare を実行します。左のみ、右のみ、同一、異なるファイルが表示され、取りこぼしたファイルをそのままコピーできます。Job History には実行ごとの開始時刻、所要時間、ステータス、ファイル数が記録されるため、移行の明確な記録になります。

Proton Drive から出たファイルは、Dropbox 独自のストレージモデルのもとで保存される点にご注意ください。共同作業者を招待する前に、コピー先の共有設定を確認してください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Proton Drive から Dropbox への移行のジョブ履歴" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Proton Drive リモート（メールアドレス、パスワード、任意で 2FA）と Dropbox リモート（ブラウザでログイン）を追加します。
3. 1 つのフォルダで Dry Run を実行し、その後コピージョブを実行します。
4. Folder Compare で検証し、残りのフォルダでも繰り返します。

段階的に検証しながら移行すれば、何が残ったのかを気にせずに Dropbox へ切り替えられます。

---

**関連ガイド：**

- [Dropbox から Proton Drive へ移行](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)
- [Proton Drive から Google Drive へ移行](https://rcloneview.com/support/blog/migrate-proton-drive-to-google-drive-rcloneview)
- [Dry Run：転送前に同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />

---
slug: migrate-onedrive-to-mega-rcloneview
title: "OneDriveからMegaへ移行 — RcloneViewでファイルを転送"
authors:
  - jay
description: "RcloneViewでMicrosoft OneDriveのファイルをMegaへ移動します。両方のリモートを接続し、ドライランを実行し、クラウド間コピーを行って、フォルダ比較で結果を検証します。"
keywords:
  - OneDrive Mega 移行
  - OneDriveからMegaへ転送
  - OneDriveのファイルをMegaへ移動
  - OneDrive Mega 移行ツール
  - クラウド間転送
  - RcloneView OneDrive
  - RcloneView Mega
  - Mega GUIクライアント
tags:
  - RcloneView
  - onedrive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDriveからMegaへ移行 — RcloneViewでファイルを転送

> 手作業でのダウンロードと再アップロードの代わりに、視覚的で再実行可能なクラウド間ジョブでOneDriveライブラリをMegaへ移しましょう。

Microsoft OneDriveからMegaへ長年のドキュメントを移すには、通常、自分のディスクを経由する遅い回り道が必要です。RcloneViewは両方のサービスをリモートとして接続して直接コピーし、書き込み前にプレビューを表示し、完了後には比較によって漏れがないことを確認できます。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントし、同期でき、Windows、macOS、Linuxで動作します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDriveとMegaをリモートとして接続

OneDriveはブラウザベースのOAuthを使用します。リモートを追加するときにMicrosoft OneDriveを選択してサインインすると、RcloneViewがトークンを保存します。Megaは異なり、メールアドレスとパスワードを直接入力します。開始前に用意しておいてください。

リモートには`onedrive-main`や`mega-archive`のように分かりやすい名前を付けましょう。後でジョブ履歴を読むときや、`onedrive-main:Projects`のような完全なパスをrcloneターミナルにコピーするときに、明確な名前が役立ちます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでOneDriveとMegaのリモートを追加" class="img-large img-center" />

## 実行前にコピーを計画する

両方のリモートを左右に並べたExplorerパネルで開き、移動したいフォルダを参照します。ソースでGet Sizeを使って転送するデータ量を見積もり、Megaアカウントに十分な空きがあることを確認してください。

最初の移行では、Syncではなく**Copy**を選択してください。Copyは転送先のものを一切削除しないため、フォルダの選択を誤ってもデータが消えることはありません。フィルタリングの手順で不要なファイルタイプをスキップしたり、最大ファイルサイズや経過期間で絞り込んだりできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでの2つのリモート間のクラウド間転送" class="img-large img-center" />

## ドライランの後に本番転送

ドライラン（Dry Run）は、1バイトも書き込まずにコピーされる内容を一覧表示します。確認したらジョブを実行します。Transferringタブには進捗、速度、ファイル数が表示され、実行中のジョブはいつでもキャンセルできます。

大規模なライブラリでは、Megaにスロットリングされる場合は同時ファイル転送数を減らし、短時間のネットワーク切断でジョブが中断されないよう、デフォルトのリトライ回数を維持してください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewでのコピージョブの実行" class="img-large img-center" />

## フォルダ比較で検証

ジョブが完了したら、左にOneDrive、右にMegaを置いてCompareを開きます。フィルタで左側のみのファイルを表示できるため、転送に失敗したものがすぐに分かります。同じビューから、残りのファイルをコピーすることもできます。ジョブ履歴（Job History）には、その実行のステータス、サイズ、速度、ファイル数が記録されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OneDriveとMega間のフォルダ比較結果" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. OneDrive（OAuth）とMega（メールアドレスとパスワード）をリモートとして追加します。
3. OneDriveからMegaへのCopyジョブを作成し、ドライランを実行してから本番を実行します。
4. 元のデータを手放す前に、フォルダ比較で検証します。

プレビュー、監視、検証ができる移行なら、自信を持って完了できます。

---

**関連ガイド:**

- [Megaストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [OneDriveストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Google DriveからMegaへ移行 — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-google-drive-to-mega-rcloneview)

<CloudSupportGrid />

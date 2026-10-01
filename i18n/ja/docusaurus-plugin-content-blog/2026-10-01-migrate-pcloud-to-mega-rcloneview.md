---
slug: migrate-pcloud-to-mega-rcloneview
title: "pCloudからMEGAへ移行 — RcloneViewでファイルを転送"
authors:
  - robin
description: "RcloneViewでpCloudからMEGAへ移行：両方のリモートを接続し、Dry Runを実行し、クラウド間コピーを行い、Folder Compareで検証するステップバイステップガイドです。"
keywords:
  - pCloudからMEGAへ移行
  - pCloud MEGA 転送
  - pCloud MEGA ファイル移動
  - クラウド間移行
  - RcloneView pCloud
  - RcloneView MEGA
  - pCloud MEGA 同期
  - pCloudファイルの転送
  - rclone GUI 移行
tags:
  - RcloneView
  - pcloud
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloudからMEGAへ移行 — RcloneViewでファイルを転送

> 手動でダウンロードして再アップロードする代わりに、プレビューと検証が可能なクラウド間ジョブで、pCloudのライブラリ全体をMEGAへ移します。

pCloudからMEGAへ乗り換えるとなると、たいていは大容量のアーカイブが対象で、それをいったんノートPCにダウンロードしたい人はいません。RcloneViewは両方のサービスをリモートとして接続するため、1つのウィンドウでフォルダ単位にコピーし、古いアカウントを閉じる前に結果を確認できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloudとMEGAをリモートとして接続する

pCloudはブラウザベースのOAuthを使用します。RcloneViewがログインページを開き、アクセスを承認すると、APIキーなしでリモートが作成されます。MEGAはメールアドレスとパスワードを使用します。**Remote > New Remote**を開き、各プロバイダーを選択して、`pcloud-old`や`mega-new`のように分かりやすい名前を付けます。

両方がRemote Managerに表示されたら、2つのエクスプローラーパネルに並べて開きます。RcloneViewはWindows、macOS、Linuxで1つのウィンドウから90以上のプロバイダーをマウント・同期できるため、今後の移行でも同じレイアウトを使えます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでpCloudとMEGAのリモートを追加する" class="img-large img-center" />

## クラウド間でファイルをコピーする

フォルダを別のリモートへドラッグするとコピーされます。異なるリモート間の転送は移動ではなくコピーだからです。小さなフォルダならこれで十分です。ライブラリ全体の場合は、保存・再実行でき、Job Historyで確認できるように、CopyまたはSyncジョブを作成します。

結果を検証するまでは、コピー元に手を加えないでください。Copyジョブはコピー元のpCloudをそのまま残すため、途中で中断されても安全に移行をやり直せます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでpCloudからMEGAへのクラウド間転送" class="img-large img-center" />

## Dry Runでプレビューし、転送を調整する

まずDry Runを実行します。何も変更せずに、コピーまたは削除されるファイルを一覧表示するため、保存先フォルダの指定ミスで何時間も無駄にする前に気づけます。詳細設定のステップでは、同時ファイル転送数とequality checkerの数を調整できます。エラーが出る場合は、これらの値を下げるのが最初の対処として妥当です。

古いインストーラーやGoogle Docsのエクスポートなど、移行したくないファイル形式やフォルダは、フィルタリングのステップで除外します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewで移行ジョブを実行する" class="img-large img-center" />

## Folder Compareで検証する

転送後、左にpCloud、右にMEGAを置いて**Compare**を開きます。左側のみのファイルと異なるファイルに絞り込むと、不足または不一致のものを確認でき、比較画面から残りを直接コピーできます。Transferringタブとジョブ履歴には、各実行のサイズとステータスが記録されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="pCloudとMEGAのFolder Compare" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード**：[rcloneview.com](https://rcloneview.com/src/download.html)から入手します。
2. New RemoteでpCloud（OAuth）とMEGA（メールアドレスとパスワード）を追加します。
3. pCloudからMEGAへのCopyジョブを作成し、Dry Runを実行します。
4. ジョブを実行し、古いアカウントを閉じる前にFolder Compareで検証します。

プレビューと検証を経たコピーなら、リスクのあるアカウント切り替えも日常的な作業になります。

---

**関連ガイド：**

- [pCloudからProton Driveへの移行](https://rcloneview.com/support/blog/migrate-pcloud-to-proton-drive-rcloneview)
- [MEGAからDropboxへの移行](https://rcloneview.com/support/blog/migrate-mega-to-dropbox-rcloneview)
- [pCloud同期エラーの修正](https://rcloneview.com/support/blog/fix-pcloud-sync-errors-rcloneview)

<CloudSupportGrid />

---
slug: migrate-google-drive-to-mega-rcloneview
title: "Google DriveからMegaへ移行 — RcloneViewでファイルを転送"
authors:
  - morgan
description: "RcloneViewでGoogle DriveからMegaへ移行: クラウド間コピー、ドライランのプレビュー、フィルター、検証を1つのGUIで行え、手動ダウンロードは不要です。"
keywords:
  - Google DriveからMegaへ移行
  - Google DriveからMegaへ転送
  - Megaへファイルを移動
  - RcloneView
  - クラウド間転送
  - Megaクラウドストレージ
  - Google Drive移行
  - rclone GUI
  - クラウド移行ツール
tags:
  - RcloneView
  - google-drive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google DriveからMegaへ移行 — RcloneViewでファイルを転送

> 手動でダウンロードして再アップロードすることなく、Google Driveライブラリ全体をMegaへ移動します。

Google DriveからMegaへ切り替えるには、通常アーカイブをエクスポートし、ダウンロードを待ち、再度アップロードする必要があります。RcloneViewは両サービスをリモートとして接続し、2ペインのウィンドウ間でコピーします。ファイルを1つも移動する前にドライランで結果をプレビューできます。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントし、同期でき、Windows、macOS、Linuxで動作します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続

Google DriveはOAuthを使用します。RcloneViewがブラウザを開き、サインインするとリモートが自動的に作成されます。Megaは新規リモートダイアログでメールアドレスとパスワードを直接入力します。両方のリモートがRemote Managerに表示されたら、2つのエクスプローラーパネルに並べて開けます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでGoogle DriveとMegaのリモートを追加" class="img-large img-center" />

Driveに300GBのプロジェクトフォルダが散らばっているフリーランサーを考えてみましょう。隣り合うパネルで両アカウントを閲覧すれば、開始前に元フォルダと移行先のレイアウトを確認できます。

## クラウド間でコピー

Google Driveパネルからフォルダを Megaパネルへドラッグします。異なるリモート間のドラッグはコピーとして動作するため、自分で判断するまでDriveのデータはそのまま残ります。大きなジョブには、Job ManagerでCopyジョブを作成すると、進捗の監視と履歴の保存が利用できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google DriveからMegaへのクラウド間転送" class="img-large img-center" />

転送にGoogle Docsファイルを含めたくない場合は、フィルタリングの手順で事前定義済みの「Google Docs」フィルターを使うと除外できます。ファイルサイズや経過期間に上限を設けて、必要なデータだけを移動することもできます。

## ジョブのプレビューと監視

まずドライランを実行します。コピーされるファイルの一覧が表示されるため、間違った元フォルダを何時間も無駄にする前に見つけられます。その後ジョブを開始し、Transferringタブで速度、ファイル数、進捗を確認します。長時間の実行で問題がある場合は、Advanced Settingsで同時ファイル転送数を調整できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneViewで転送の進捗を監視" class="img-large img-center" />

## 結果を検証

ジョブが完了したら、DriveとMegaのフォルダでFolder Compareを開きます。左のみ、右のみ、異なるファイルが強調表示され、漏れたものは比較ビューから直接コピーできます。Job Historyには各実行のステータス、所要時間、サイズが記録されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Google DriveとMegaのFolder Compare" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード:** [rcloneview.com](https://rcloneview.com/src/download.html)から入手します。
2. New RemoteからGoogle Drive(OAuth)とMega(メールアドレスとパスワード)を追加します。
3. 両方のリモートを2つのパネルで開き、テストフォルダでドライランを実行します。
4. ライブラリ全体のCopyジョブを作成し、Folder Compareで検証します。

スクリプト不要のビジュアルな移行なら、Megaにすべてあると確信できるまでDriveはそのまま保たれます。

---

**関連ガイド:**

- [MegaからGoogle Driveへ移行](https://rcloneview.com/support/blog/migrate-mega-to-google-drive-onedrive-rcloneview)
- [Megaクラウドストレージの管理](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [ドライラン: 転送前に同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />

---
slug: sync-pcloud-to-google-drive-rcloneview
title: "pCloudをGoogle Driveに同期 — RcloneViewでクラウドバックアップ"
authors:
  - jay
description: "RcloneViewでpCloudをGoogle Driveに同期: 両方のリモートを接続し、Dry Runでプレビューし、1つのウィンドウからクラウド間バックアップをスケジュールします。"
keywords:
  - pcloud google drive 同期
  - pcloud google drive バックアップ
  - RcloneView pcloud
  - クラウド間同期
  - pcloud google drive 転送
  - pcloud ファイルのバックアップ
  - 2つ目のコピー クラウドバックアップ
  - クラウド同期のスケジュール
  - rclone GUI
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloudをGoogle Driveに同期 — RcloneViewでクラウドバックアップ

> プレビュー、実行、スケジュールができるクラウド間同期ジョブで、pCloudのファイルの2つ目のコピーをGoogle Driveに保管しましょう。

重要なファイルを1つのクラウドだけに置くと、アカウントのロック、誤削除、同期ミスのリスクにさらされます。pCloudをGoogle Driveにミラーリングすれば、別のプロバイダー上に独立したコピーを持てます。RcloneViewはOAuthで両方のサービスを接続し、ジョブとしてそれらの間でデータを同期します。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントして同期でき、Windows、macOS、Linuxで利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloudとGoogle Driveを接続

どちらのプロバイダーもブラウザベースのOAuthログインを使用します。RcloneViewで新規リモートのダイアログを開いてpCloudを選択し、ブラウザが開いたらサインインします。Google Driveでも同様に繰り返します。認証が完了すると、各リモートがRemote ManagerとExplorerに表示され、2ペインのレイアウトでフォルダーを並べて閲覧できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewにpCloudとGoogle Driveのリモートを追加" class="img-large img-center" />

## 同期する前に確認

300 GBのpCloudプロジェクトアーカイブをDriveにミラーリングしたいフリーランスのデザイナーを想像してみてください。何かを変更する前に、2つのフォルダーでFolder Compareを使います。片側にしか存在しないファイル、異なるファイル、一致するファイルが表示されるため、最初の同期で何が行われるかを正確に把握できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewでpCloudとGoogle Driveのフォルダーを比較" class="img-large img-center" />

## 同期ジョブを作成

同期ウィザードは4つのステップで構成されます: ソースと宛先の選択、詳細設定の調整、フィルターの設定、そして任意のスケジュール設定です。ソースにpCloud、宛先にGoogle Driveを選び、宛先のみを変更する一方向オプションを使用します。フィルターで一時ファイルをスキップしたりファイルサイズを制限したりし、Dry Runでコピーまたは削除されるファイルの一覧を確認します。一方向同期は宛先をソースに一致させるため、予期しない削除がないか、必ずDry Runの出力を確認してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでpCloudからGoogle Driveへのクラウド間転送" class="img-large img-center" />

## 監視とスケジュール

ジョブを実行して転送の進行状況をライブで確認し、Job Historyで結果を確認します。PLUSライセンスでは、crontab形式のスケジュールを追加して、ミラーを定期的に更新できます(RcloneViewはSystem Trayで実行され続けます)。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewでpCloudからGoogle Driveへの同期ジョブをスケジュール" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード**: [rcloneview.com](https://rcloneview.com/src/download.html)から入手してください。
2. OAuthログインでpCloudとGoogle Driveをリモートとして追加します。
3. ソースと宛先のフォルダーを比較してから、一方向の同期ジョブを作成します。
4. Dry Runを実行し、ジョブを実行して、Job Historyで確認します。

別のプロバイダー上の検証済みの2つ目のコピーは、単一障害点を実効性のあるバックアップに変えます。

---

**関連ガイド:**

- [pCloudストレージを管理 — RcloneViewでファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Google DriveからpCloudへ移行 — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [DropboxをpCloudに同期 — RcloneViewでクラウドバックアップ](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />

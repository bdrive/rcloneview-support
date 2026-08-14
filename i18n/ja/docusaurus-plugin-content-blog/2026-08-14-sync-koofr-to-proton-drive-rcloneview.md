---
slug: sync-koofr-to-proton-drive-rcloneview
title: "KoofrをProton Driveに同期する — RcloneViewでクラウドバックアップ"
authors:
  - alex
description: "RcloneViewを使ってKoofrからProton Driveへファイルを同期する方法を紹介します。2つのクラウドを同期状態でバックアップできるクロスプラットフォームGUIです。"
keywords:
  - KoofrをProton Driveに同期
  - Koofr Proton Driveバックアップ
  - RcloneView Koofr
  - RcloneView Proton Drive
  - クラウド間同期
  - Koofrバックアップ
  - Proton Drive同期
  - 暗号化クラウドバックアップ
  - マルチクラウド同期ツール
tags:
  - RcloneView
  - koofr
  - proton-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# KoofrをProton Driveに同期する — RcloneViewでクラウドバックアップ

> まずローカルディスクにダウンロードすることなく、KoofrのファイルをProton Driveに常時バックアップしておきましょう。

Koofrは他のアカウントを統合できるヨーロッパのクラウドストレージサービスで、Proton DriveはProton Mailの開発元によるエンドツーエンド暗号化ストレージを提供します。両方を使いたいユーザーもいます — 統合ビューのためのKoofrと、プライバシー保証のためのProton Drive — RcloneViewを使えば両者を並べて接続し、ローカルドライブを経由せずにクラウド間で直接同期できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## KoofrとProton Driveをリモートとして追加する

Remote Managerからアカウント資格情報を使ってKoofrをリモートとして追加し、続けてProtonのメールアドレス、パスワード、任意の二要素認証コードで認証するProton Driveについても同じ手順を行います。両方のリモートはエクスプローラーに個別のタブとして表示されるため、転送を設定する前に一方のパネルでKoofr、もう一方でProton Driveを開いて直接見比べることができます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでKoofrとProton Driveをリモートとして追加する" class="img-large img-center" />

FREEライセンスでもS3、Azure、Backblaze B2をフルの読み書きで接続できるため、Koofrからの同期は、すでに実行しているオブジェクトストレージのバックアップと並んで、すべて同じウィンドウの中で行えます。

## 単方向同期を設定する

Homeタブから同期ウィザードを開き、Koofrをソースに、Proton Driveを宛先に選び、Koofrの元データを一切変更しない単方向バックアップのために「Modifying destination only」を選択します。Advanced Settingsでチェックサム比較を有効にすると、更新日時だけでなくハッシュとサイズでファイルが照合されます。これはKoofrとProton Driveがタイムスタンプを異なる方法で報告する場合に重要です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="KoofrからProton Driveへの単方向同期を設定する" class="img-large img-center" />

実際に実行する前に、ドライラン(Dry Run)を使ってどのファイルがコピーされるかを正確に確認し、Koofrアカウント全体ではなく特定のフォルダだけをミラーリングしたい場合は、ファイルタイプ、最大サイズ、フォルダの深さによるフィルターを適用してください。

## バックアップのスケジュール設定と追跡

設定をJob Managerにジョブとして保存すると、PLUSライセンスのユーザーはcrontab形式のスケジュールを関連付けて、Koofr-Proton Drive間の同期を一定の周期で自動実行できます。確定する前に次回の実行時刻をプレビューすることも可能です。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="KoofrからProton Driveへの定期同期ジョブをスケジュール設定する" class="img-large img-center" />

各実行は所要時間、転送速度、ファイル数、合計転送サイズとともにJob Historyに記録され、バックアップが正常に実行されたかを確認したり、再試行が必要な実行を見つけたりするための記録として残ります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remote ManagerでKoofrとProton Driveをリモートとして追加します。
3. KoofrからProton Driveへの単方向同期ジョブを作成し、まずドライランを実行します。
4. ジョブを保存し、PLUSユーザーであれば手間のかからない定期バックアップのためにスケジュールを設定します。

設定が完了すれば、実行するたびにKoofrのファイルがProton Driveにミラーリングされ、RcloneViewを離れることなく暗号化されたコピーを手に入れられます。

---

**関連ガイド:**

- [RcloneViewでProton Driveストレージを管理する — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [RcloneViewでKoofrストレージを管理する — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Proton DriveからBackblaze B2へ移行する — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

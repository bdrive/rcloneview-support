---
slug: sync-onedrive-to-dropbox-both-clouds-rcloneview
title: "OneDriveとDropboxを同期する方法 — RcloneViewで両プラットフォームを最新に保つ"
authors:
  - tayson
description: "仕事にはOneDrive、クライアント対応にはDropboxを使っていますか？RcloneViewを使ってOneDriveとDropbox間の特定フォルダを自動的に同期する方法を紹介します。"
keywords:
  - sync onedrive dropbox
  - onedrive to dropbox
  - onedrive dropbox sync tool
  - transfer onedrive dropbox
  - keep onedrive dropbox in sync
  - onedrive dropbox bridge
  - onedrive dropbox transfer
  - multi cloud sync
  - onedrive dropbox backup
  - sync two cloud services
tags:
  - RcloneView
  - onedrive
  - dropbox
  - sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDriveとDropboxを同期する方法 — RcloneViewで両プラットフォームを最新に保つ

> 会社ではMicrosoft 365を使っているのですべてOneDrive上にあります。しかしフリーランスのデザイナーはDropboxを譲りません。担当の会計士もDropboxを使っています。気づけば手作業でファイルをコピーする羽目に。これを解決しましょう。

OneDriveとDropboxは異なるエコシステムに向いています。Microsoft 365ユーザーはOneDriveを中心に活動し、クリエイティブ系のプロフェッショナルや多くの中小企業はDropboxを好みます。この両方のグループと仕事をする場合、ファイルを同期しておくことで手作業の時間を大幅に削減できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## セットアップ

### 1) 両方のアカウントを追加する

<img src="/support/images/en/blog/new-remote.png" alt="Add OneDrive and Dropbox" class="img-large img-center" />

### 2) 並べて閲覧する

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive and Dropbox side by side" class="img-large img-center" />

### 3) 同期ジョブを作成する

両方のクラウド間で特定のプロジェクトフォルダを同期します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create OneDrive Dropbox sync" class="img-large img-center" />

### 4) 自動更新をスケジュールする

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive Dropbox sync" class="img-large img-center" />

### 5) 同期状態を確認する

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare OneDrive and Dropbox" class="img-large img-center" />

## ベストプラクティス

- **特定のフォルダだけを同期する** — アカウント全体を同期するのではなく、共有しているプロジェクトフォルダのみを同期しましょう。
- **一方向の配信にはコピーを使う** — 完成したファイルをもう一方のプラットフォームへ送信します。
- **フィルターを活用する** — 一時ファイル、`.DS_Store`、Officeのロックファイルを除外します。
- **競合を監視する** — 両プラットフォームとも同時編集をサポートしているため、同期の競合が発生する可能性があります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **OneDriveとDropboxを追加**します。
3. **対象を絞った同期ジョブを作成**します。
4. **スケジュール設定と確認**を行います。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [クラウド同期の競合を検出・解決する](https://rcloneview.com/support/blog/resolve-cloud-sync-conflicts-rcloneview)
- [Rcloneフィルタールール](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />

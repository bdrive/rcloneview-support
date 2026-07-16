---
slug: migrate-sharepoint-to-google-drive-rcloneview
title: "SharePointからGoogle Driveへ移行 — RcloneViewでドキュメントライブラリを転送"
authors:
  - tayson
description: "Microsoft 365からGoogle Workspaceへの切り替えをお考えですか？RcloneViewを使って、SharePointのドキュメントライブラリとOneDriveのファイルをGoogle DriveおよびShared Drivesへ転送します。"
keywords:
  - sharepoint to google drive
  - migrate sharepoint to gdrive
  - sharepoint migration tool
  - microsoft to google migration
  - sharepoint to google workspace
  - sharepoint document library transfer
  - office 365 to google
  - sharepoint google drive sync
  - cross platform cloud migration
  - enterprise cloud migration
tags:
  - sharepoint
  - google-drive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SharePointからGoogle Driveへ移行 — RcloneViewでドキュメントライブラリを転送

> 組織がMicrosoft 365からGoogle Workspaceへ移行しようとしています。SharePointのライブラリ、OneDriveの個人ファイル、そして長年蓄積されたチームドキュメントのすべてを、そのままGoogle Driveへ移す必要があります。その方法を解説します。

SharePointからGoogle Driveへの移行は、最も一般的なエンタープライズクラウド移行の逆パターンです。コスト、プラットフォームの好み、組織変更のいずれが理由であっても、課題は同じです。構造化されたドキュメントライブラリ内の数千のファイルを、Google DriveおよびShared Drivesへクリーンに転送する必要があります。RcloneViewは両方のプラットフォームをネイティブに扱えます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 移行の計画

### 構造のマッピング

| SharePoint | Google Workspace |
|-----------|-----------------|
| Document Libraries | Shared Drives |
| OneDrive（個人用） | マイドライブ（個人用） |
| Team Sites | チームごとのShared Drive |
| 共有ファイル | Shared Driveフォルダ |

### 両方のプラットフォームを接続する

<img src="/support/images/en/blog/new-remote.png" alt="Connect SharePoint and Google Drive" class="img-large img-center" />

RcloneViewにSharePoint/OneDriveアカウントとGoogle Driveアカウントを追加します。

## 移行手順

### 1) ドキュメントライブラリを転送する

一方のペインでSharePointを、もう一方のペインでGoogle Shared Driveを開きます。ライブラリごとに転送します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SharePoint to Google Drive transfer" class="img-large img-center" />

### 2) 個人用OneDriveファイルを移行する

各ユーザーのOneDriveファイルを、それぞれのGoogle Driveのマイドライブへ移動します。

### 3) 完全性を確認する

フォルダ比較機能で、すべてのファイルが転送されたことを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration" class="img-large img-center" />

### 4) 大規模な移行は夜間にスケジュール実行する

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule overnight migration" class="img-large img-center" />

### 5) 進捗を監視する

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

## 重要な注意点

- **ファイル形式の変換**: GoogleはOfficeファイルをネイティブに表示できるため、Googleドキュメント形式への変換は任意です
- **権限のマッピング**: ファイルの権限は自動的には転送されません。Shared Driveの権限は別途計画してください
- **パスの長さ**: SharePointは想定より長いパスを許容する場合があります。互換性を確認してください
- **大規模なライブラリ**: 部署やプロジェクト単位でバッチに分割してください

## はじめかた

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **SharePoint**と**Google Drive**のリモートを追加します。
3. ライブラリをShared Drivesに**マッピング**します。
4. バッチ単位で**転送と検証**を行います。

クリーンなプラットフォーム切り替えを、データ損失ゼロで実現します。

---

**関連ガイド:**

- [Google WorkspaceからMicrosoft 365への移行](https://rcloneview.com/support/blog/migrate-google-workspace-to-microsoft-365-rcloneview)
- [ダウンタイムゼロのクラウド移行](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />

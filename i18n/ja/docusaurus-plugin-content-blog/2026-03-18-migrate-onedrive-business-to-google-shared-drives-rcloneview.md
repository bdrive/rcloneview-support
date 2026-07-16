---
slug: migrate-onedrive-business-to-google-shared-drives-rcloneview
title: "OneDrive for BusinessからGoogle共有ドライブへの移行 — RcloneViewによるエンタープライズファイル転送"
authors:
  - tayson
description: "Microsoft 365 OneDriveからGoogle共有ドライブへの移行をお考えですか？RcloneViewを使えば、ビジネスファイル、チームフォルダ、部門データを完全な検証付きで転送できます。"
keywords:
  - onedrive business to google drive
  - migrate onedrive to shared drive
  - onedrive business migration
  - microsoft to google drive transfer
  - onedrive to google workspace
  - enterprise onedrive migration
  - onedrive business to gdrive
  - switch onedrive to google
  - office 365 to google migration
  - business cloud migration
tags:
  - RcloneView
  - onedrive
  - google-drive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive for BusinessからGoogle共有ドライブへの移行 — RcloneViewによるエンタープライズファイル転送

> OneDrive for Business上の部門全体のファイルをGoogle共有ドライブに移す必要がある。手動でのダウンロード・アップロードでは大規模移行に対応できません。RcloneViewなら、視覚的にバッチ処理し、検証も行いながら対応できます。

組織がプラットフォームを統合するにつれ、OneDrive for BusinessとGoogle共有ドライブ間のエンタープライズ移行はますます一般的になっています。課題はその規模です — 数百人のユーザー、数テラバイトのデータ、そしてデータ損失ゼロが求められます。RcloneViewは両方のプラットフォームにネイティブで接続し、制御された検証可能な移行のためのツールを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 移行マップ

| OneDrive for Business | Google Workspace |
|----------------------|-----------------|
| ユーザーOneDrive | マイドライブ |
| チームサイト / ライブラリ | 共有ドライブ |
| 共有フォルダ | 共有ドライブフォルダ |

## 両方のプラットフォームを接続する

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive and Google Drive" class="img-large img-center" />

## 移行手順

### 1) 部門ごとに転送する

片方のペインでOneDriveを開き、もう片方でGoogle共有ドライブを開きます。部門ごとに移行を進めます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Google Drive" class="img-large img-center" />

### 2) 大規模バッチは夜間にスケジュールする

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule overnight migration" class="img-large img-center" />

### 3) 進行状況を監視する

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration" class="img-large img-center" />

### 4) すべてのバッチを検証する

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration" class="img-large img-center" />

## 移行後の対応

- 移行後2〜4週間はOneDriveを移行バッファとして稼働させておく
- 最終的なフォルダ比較を実行する
- ユーザーをGoogle Driveへリダイレクトする
- OneDriveアカウントを廃止する

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **OneDrive Business**と**Google Workspace**のリモートを追加します。
3. **部門ごとに移行**します。
4. **検証してカットオーバー**します。

エンタープライズ移行を、視覚的な制御で。

---

**関連ガイド:**

- [OneDriveからGoogle Driveへの移行](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [SharePointからGoogle Driveへの移行](https://rcloneview.com/support/blog/migrate-sharepoint-to-google-drive-rcloneview)
- [ゼロダウンタイムのクラウド移行](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)

<CloudSupportGrid />

---
slug: migrate-box-to-google-drive-rcloneview
title: "BoxからGoogle Driveへ移行 — RcloneViewでファイルとフォルダを転送"
authors:
  - tayson
description: "BoxからGoogle Driveへの移行をお考えですか？フォルダ、共有ファイル、アーカイブを含むBoxアカウント全体を、RcloneViewの完全な検証機能を使ってGoogle Driveに転送できます。"
keywords:
  - box to google drive
  - migrate box to gdrive
  - box migration tool
  - box to google workspace
  - switch from box
  - box file transfer
  - box to google shared drive
  - box cloud migration
  - box alternative google
  - transfer box files
tags:
  - RcloneView
  - box
  - google-drive
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# BoxからGoogle Driveへ移行 — RcloneViewでファイルとフォルダを転送

> Boxは今まで十分に役立ってきましたが、Google Workspaceの方が今の状況に合っているかもしれません。個人ファイル、共有フォルダ、部門アーカイブなど、すべてを一つも失うことなくGoogle Driveへ転送しましょう。

Boxはエンタープライズ環境で人気がありますが、多くの組織はGmail、カレンダー、Docsとのより緊密な連携を求めてGoogle Workspaceへ統合しています。移行にはフォルダ構造の維持、大規模データセットの処理、完全性の検証が必要です。RcloneViewはBoxとGoogle Driveの両方にネイティブで接続できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## BoxとGoogle Driveを接続する

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and Google Drive" class="img-large img-center" />

## 移行プロセス

### 1) フォルダ構造をマッピングする

| Box | Google Drive |
|-----|-------------|
| 個人フォルダ | マイドライブ |
| 共有フォルダ | 共有ドライブ |
| 部門アーカイブ | 共有ドライブ内のフォルダ |

### 2) フォルダ単位で転送する

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive" class="img-large img-center" />

### 3) 大規模な転送はオフピーク時にスケジュール実行する

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule migration" class="img-large img-center" />

### 4) 完全性を検証する

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box migration" class="img-large img-center" />

## Box特有の注意点

- **Boxのファイルバージョン履歴**は転送されません — 現在のバージョンのみが移行されます
- **Box Notes**は独自形式のため、移行前にエクスポートしてください
- **共有リンク**は引き継がれません — 移行後にブックマークを更新してください
- **大規模な組織**では、部門ごとにバッチジョブを作成すると管理しやすいまとまりになります

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Box**と**Google Drive**のリモートを追加します。
3. 検証を伴いながら**バッチ単位で転送**します。
4. 移行期間中は**Boxを有効なまま**にしておきます。

クリーンな移行と、完全な検証。

---

**関連ガイド:**

- [BoxからSharePointへ移行](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Dropbox BusinessからGoogleへ移行](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [フォルダ内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />

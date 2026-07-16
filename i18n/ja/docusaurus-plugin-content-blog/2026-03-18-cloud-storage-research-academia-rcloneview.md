---
slug: cloud-storage-research-academia-rcloneview
title: "研究者のためのクラウドストレージ — RcloneViewでデータセット、論文、ラボデータを管理"
authors:
  - tayson
description: "研究者は膨大なデータセット、機関のストレージ、個人のクラウド、コラボレーションプラットフォームを日々扱っています。RcloneViewで学術データを複数のクラウドにまたがって管理する方法を学びましょう。"
keywords:
  - research cloud storage
  - academic cloud management
  - research data backup
  - dataset cloud storage
  - researcher file management
  - lab data cloud sync
  - academic data backup
  - research multi cloud
  - university cloud storage
  - scientific data management
tags:
  - industry
  - best-practices
  - education
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 研究者のためのクラウドストレージ — RcloneViewでデータセット、論文、ラボデータを管理

> 大学からはGoogle Workspaceが支給される。助成金の要件ではS3にデータを置く必要がある。共同研究者はDropboxを使っている。データセットはSFTP経由でHPCクラスター上にある。あなたのワークフローもこんな感じではありませんか?

学術研究は、他のどの分野よりも多くのプラットフォームにまたがってデータを生成します。機関のストレージ、個人のクラウドアカウント、助成金で構築されたインフラ、コラボレーションツール、HPCクラスターにはそれぞれ研究データが蓄積され、それらはアクセス可能でバックアップされ、最終的にはアーカイブされる必要があります。RcloneViewは、これらすべてを単一の管理しやすいインターフェースにまとめます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 研究データの全体像

| データソース | 一般的なプラットフォーム | 容量 |
|------------|-----------------|--------|
| 生の実験データ | HPC / SFTP | 100 GB - 10 TB |
| 解析スクリプト | GitHub / Google Drive | 1-10 GB |
| 論文・原稿 | Google Drive / OneDrive | 5-50 GB |
| 共有データセット | S3 / 機関のストレージ | 10 GB - 1 TB |
| コラボレーションファイル | Dropbox / Box | 10-100 GB |
| アーカイブ済みプロジェクト | Glacier / 機関のストレージ | 100 GB以上 |

## 主なワークフロー

### HPCクラスターのデータを統合する

HPCクラスターをSFTP経由で接続し、より安全にアクセスできるようデータセットをクラウドストレージに同期します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync HPC data to cloud" class="img-large img-center" />

### かけがえのないデータをバックアップする

実験データは再現できません。複数のプロバイダーへの自動バックアップをスケジュールしましょう。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule research data backup" class="img-large img-center" />

### 共同研究者とデータを共有する

特定のデータセットを共有Dropboxフォルダーや共有Google Driveフォルダーに同期し、共同研究者がアクセスできるようにします。

### 完了したプロジェクトをアーカイブする

プロジェクトが終了したら、コストの高いホットストレージから長期保存用のS3 Glacierへデータを移動します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Archive completed research" class="img-large img-center" />

### データの整合性を検証する

研究データは検証可能でなければなりません。フォルダ比較機能を使って、バックアップの完全性を確認しましょう。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify research data" class="img-large img-center" />

## データ管理計画（DMP）への準拠

多くの助成機関はデータ管理計画（DMP）の作成を求めています。RcloneViewは、文書化されたバックアップ手順、検証可能なデータコピー、明確なアーカイブワークフローを提供することで、DMP要件を満たす手助けをします。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から**RcloneViewをダウンロード**します。
2. 機関のストレージ、クラウド、SFTPなど、**すべてのデータソースを接続**します。
3. 重要なデータを**少なくとも2か所にバックアップ**します。
4. 完了したプロジェクトを**コールドストレージにアーカイブ**します。
5. DMP準拠のために**ワークフローを文書化**します。

あなたの研究には、守るだけの価値があります。

---

**関連ガイド:**

- [大学のためのクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-for-universities-education-rcloneview)
- [S3 Glacierへのアーカイブ](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)
- [SFTPサーバーの管理](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)

<CloudSupportGrid />

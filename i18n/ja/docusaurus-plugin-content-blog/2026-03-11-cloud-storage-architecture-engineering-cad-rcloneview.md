---
slug: cloud-storage-architecture-engineering-cad-rcloneview
title: "建築・エンジニアリング業界向けクラウドストレージ — RcloneViewでチーム間の大容量CADファイルを管理する"
authors:
  - tayson
description: "建築・エンジニアリング企業は巨大なCAD、BIM、Revitファイルを扱います。RcloneViewを使ってクラウドストレージ上で大容量プロジェクトファイルを同期、バックアップ、共有する方法を解説します。"
keywords:
  - cloud storage architecture
  - cad files cloud storage
  - engineering file management cloud
  - revit cloud sync
  - bim cloud storage
  - autocad cloud backup
  - large file cloud sync
  - architecture firm cloud storage
  - engineering project cloud
  - cad file backup
tags:
  - architecture
  - engineering
  - cad
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 建築・エンジニアリング業界向けクラウドストレージ — RcloneViewでチーム間の大容量CADファイルを管理する

> Revitモデル1つで1GBを超えることもあります。XREFを含むAutoCAD図面は数百メガバイトに及びます。BIMデータを含む完全な建築プロジェクトは50〜100GBに達することもあります。従来のクラウド同期ツールでは、これほど巨大なファイルを扱いきれません。

建築・エンジニアリング(AEC)業界の企業は、あらゆる業界の中でも最大級の個別ファイルを生成します。CAD図面、BIMモデル、3Dレンダリング、点群スキャンは巨大であり、分散したチーム間で共有し、確実にバックアップし、数十年にわたってアーカイブする必要があります。RcloneViewはこの規模に対応します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## AECのストレージ課題

### ファイルサイズが巨大

| ファイルタイプ | 一般的なサイズ |
|-----------|-------------|
| AutoCAD DWG | 10〜500MB |
| Revit RVT | 100MB〜2GB |
| BIM 360モデル | 500MB〜5GB |
| 点群スキャン | 1スキャンあたり1〜50GB |
| 3Dレンダリング | 1画像あたり100MB〜1GB |
| プロジェクト完全アーカイブ | 10〜100GB |

### ワークフロー要件

- **複数拠点間の同期** — 異なる都市のチームが同じプロジェクトファイルを必要とします。
- **下請け業者との共有** — 外部パートナーが特定のファイルにアクセスする必要があります。
- **アーカイブ** — 建築プロジェクトは10年以上保存する必要があります(多くの法域で法的要件)。
- **バージョン管理** — 複数人が同じモデルを編集するため、バージョンを追跡する必要があります。
- **パフォーマンス** — クラウド同期から1GBのRevitファイルを開くには高速性が求められます。

## RcloneViewでできること

### 1) 拠点間でプロジェクトファイルを同期する

スケジュール同期を使って、拠点間でプロジェクトフォルダを同期状態に保ちます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync CAD files between offices" class="img-large img-center" />

### 2) クラウドストレージをマウントして直接アクセスする

クラウドストレージをローカルドライブとしてマウントし、CADアプリケーションからファイルを直接開けるようにします。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount cloud for CAD access" class="img-large img-center" />

### 3) プロジェクトの自動バックアップ

進行中のプロジェクトの夜間バックアップをスケジュールします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CAD project backup" class="img-large img-center" />

### 4) 下請け業者へのファイル納品

単一のジョブで、納品物を下請け業者のDropboxやGoogle Driveにコピーします。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Deliver files to subcontractor" class="img-large img-center" />

### 5) 長期アーカイブ

プロジェクトが完了したら、コールドストレージにアーカイブします。

| アクティブフェーズ | アーカイブフェーズ |
|-------------|--------------|
| NAS / Google Drive | S3 Glacier(4ドル/TB/月) |
| 高速アクセスが必要 | まれな取り出し |
| 20ドル以上/TB/月 | 1〜4ドル/TB/月 |

## 推奨アーキテクチャ

| ストレージ | 用途 | プロバイダー |
|---------|---------|----------|
| ローカルNAS | アクティブプロジェクトストレージ | Synology/QNAP |
| Google Drive / OneDrive | チームコラボレーション | Workspace/M365 |
| Backblaze B2 | オフサイトバックアップ | 6ドル/TB/月 |
| S3 Glacier | 長期アーカイブ | 4ドル/TB/月 |

## 大容量ファイルのパフォーマンスのヒント

- 大容量CADファイルには**チャンクサイズを128MB以上に増やす**。
- 業務時間中はオフィスのネットワークを圧迫しないよう**帯域幅制限を使用する**。
- マウントしたドライブのCADアプリケーションパフォーマンスを向上させるために**SSDキャッシュを使用する**。
- 大規模なプロジェクト更新には夜間スケジュールを設定し、**業務時間外に同期する**。

## 大容量転送のモニタリング

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor large CAD file transfers" class="img-large img-center" />

## プロジェクトの整合性を検証する

同期のたびに、フォルダ比較で検証します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify project file integrity" class="img-large img-center" />

AECプロジェクトでは、ファイルの欠落が構造要素の欠落を意味することがあります。検証は必須です。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**。
2. **NAS、クラウド、アーカイブストレージを接続**。
3. **プロジェクトのバックアップと同期ジョブを設定**。
4. **夜間バックアップをスケジュール**。
5. 完了したプロジェクトをコールドストレージに**アーカイブ**。

ファイル管理ワークフローではなく、建物を作りましょう。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [クラウドストレージのマウント](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [帯域幅制限の設定](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />

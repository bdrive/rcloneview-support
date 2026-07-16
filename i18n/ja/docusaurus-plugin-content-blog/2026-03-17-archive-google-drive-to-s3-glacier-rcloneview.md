---
slug: archive-google-drive-to-s3-glacier-rcloneview
title: "Google DriveのファイルをS3 Glacierにアーカイブ — RcloneViewで長期保存コストを90%削減"
authors:
  - tayson
description: "Google Driveのストレージはアーカイブ用途には高コストです。古いファイルをS3 Glacierに移すことで、復元可能な状態を保ちながら1GBあたりわずかな料金に抑えられます。RcloneViewはそのプロセス全体を自動化します。"
keywords:
  - google drive to glacier
  - google drive archive
  - s3 glacier archive
  - cheap cloud archive
  - google drive cold storage
  - archive old cloud files
  - google drive to s3
  - reduce google drive cost
  - long term cloud storage
  - cloud archive strategy
tags:
  - google-drive
  - s3
  - glacier
  - archive
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google DriveのファイルをS3 Glacierにアーカイブ — RcloneViewで長期保存コストを90%削減

> Google Driveの2TBプランに月10ドル払っているのに、そのファイルの80%は1年間開かれていません。それらをS3 Glacierに移せば月1TBあたり1ドルで済み、ストレージ費用を大幅に削減できます。

Google Driveの料金体系は、毎日開くドキュメントや同僚と共有するファイルなど、アクティブなファイル向けに設計されています。しかし、ほとんどのGoogle Driveアカウントには、古いプロジェクトフォルダ、完了した作業、アーカイブ済みの写真、古くなったドキュメントなど、何年もアクセスされていないファイルが蓄積しています。これらのファイルは、はるかに低コストなS3 Glacierに置けるにもかかわらず、高価なストレージ上に置かれたままになっています。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## コスト比較

| ストレージ | 1TB/月あたりの料金 |
|---------|-------------------|
| Google Drive (One) | 約$5 |
| Google Workspace Business | 約$6 |
| S3 Standard | 約$23 |
| S3 Glacier Instant Retrieval | 約$4 |
| S3 Glacier Flexible Retrieval | 約$3.6 |
| S3 Glacier Deep Archive | 約$1 |

Google Driveから使われていないファイル1TBをGlacier Deep Archiveに移すことで、年間約$48の節約になります。

## アーカイブすべきもの

Glacierに適した候補:

- 完了したプロジェクトフォルダ(6ヶ月以上経過したもの)
- 税務書類や財務記録(申告後)
- 古い写真・動画のバックアップ
- 退職した従業員のデータ
- アーカイブ済みのチームファイル

適さない候補(Google Driveに残すべきもの):

- アクティブなドキュメントやスプレッドシート
- 共同編集中の共有ファイル
- 週次または月次で開かれるファイル

## アーカイブの手順

### 1) アーカイブ候補を特定する

エクスプローラーでGoogle Driveを閲覧し、最近アクセスされていないフォルダを特定します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive for archive candidates" class="img-large img-center" />

### 2) S3 Glacierへ転送する

Glacierストレージクラスを設定したS3バケットへ、Google DriveからのCopyジョブを作成します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Transfer to Glacier" class="img-large img-center" />

### 3) アーカイブを検証する

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify archive completeness" class="img-large img-center" />

### 4) Google Driveから削除する

検証が完了した後にのみ削除してください。これによりGoogle Driveのストレージ容量が解放されます。

### 5) 定期的なアーカイブをスケジュールする

新しい候補に対して毎月アーカイブを実行するよう設定します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule monthly archival" class="img-large img-center" />

## 重要な注意点

- **Glacierからの復元には費用と時間がかかります** — Glacier Instant Retrievalは高速にアクセスできますが、Deep Archiveでは12時間以上かかることがあります
- **最低保存期間** — Glacierはクラスに応じて90〜180日以内の早期削除に対して料金が発生します
- **削除前に必ず検証する** — Driveから削除する前に、アーカイブが完全であることを必ず確認してください

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Google Drive**と**S3**のリモートを追加します。
3. Google Drive上で**使われていないファイルを特定**します。
4. **Glacierにコピー**し、検証してからDriveを整理します。

アクティブなファイルはDriveに。それ以外はGlacierに。

---

**関連ガイド:**

- [隠れたクラウドストレージのコスト](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Glacierによるコールドアーカイブ](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />

---
slug: backup-nas-to-multiple-clouds-rcloneview
title: "NASを複数のクラウドにバックアップする方法 — RcloneViewで実現する3-2-1バックアップ戦略"
authors:
  - tayson
description: "複数のクラウドプロバイダーへ同時にバックアップすることでNASデータを保護しましょう。RcloneViewのバッチジョブを使って適切な3-2-1バックアップ戦略を実装します。"
keywords:
  - nas multi cloud backup
  - 3 2 1 backup strategy
  - nas cloud backup multiple
  - synology multi cloud backup
  - qnap multi cloud backup
  - nas backup strategy
  - nas to s3 and b2 backup
  - nas disaster recovery
  - multi cloud backup plan
  - nas off site backup
tags:
  - nas
  - multi-cloud
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# NASを複数のクラウドにバックアップする方法 — RcloneViewで実現する3-2-1バックアップ戦略

> 1つのクラウドバックアップも良いですが、2つのクラウドバックアップはさらに良いです。3-2-1ルールでは「3つのコピー、2種類の異なるメディア、1つはオフサイト」が推奨されます。NASがコピー1、クラウドAがコピー2、クラウドBがコピー3です。RcloneViewはこれらすべてを自動化します。

NASは優れた集中型ストレージソリューションですが、依然として単一の場所にある単一のデバイスです。ハードウェア障害、火災、盗難、自然災害によって、NAS本体とそこに保存されているすべてのデータが失われる可能性があります。異なるインフラ、異なるリージョンにある複数のクラウドプロバイダーへバックアップすることで、真の意味でのディザスタリカバリを実現できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 3-2-1戦略

| コピー | 場所 | プロバイダー |
|------|----------|----------|
| 1（プライマリ） | NAS（ローカル） | Synology/QNAP |
| 2（クラウドバックアップ） | クラウドA | Backblaze B2（$6/TB） |
| 3（クラウドバックアップ） | クラウドB | AWS S3 または Wasabi |

3つのコピー。2種類の異なるストレージ（ローカルNAS＋クラウド）。1つはオフサイト（クラウドは定義上オフサイトです）。

## RcloneViewでのセットアップ

### 1) NASとクラウドを接続する

<img src="/support/images/en/blog/new-remote.png" alt="Add NAS and cloud remotes" class="img-large img-center" />

### 2) 各クラウド向けにバックアップジョブを作成する

**ジョブ1**: NAS → Backblaze B2（プライマリクラウドバックアップ）。
**ジョブ2**: NAS → AWS S3（セカンダリクラウドバックアップ）。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create multi-cloud backup jobs" class="img-large img-center" />

### 3) 毎晩のバックアップをスケジュールする

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-cloud NAS backup" class="img-large img-center" />

スケジュールをずらします。
- 午前2:00 → NAS → Backblaze B2。
- 午前4:00 → NAS → AWS S3。

### 4) バッチジョブで自動化する

v1.3のバッチジョブですべてを連結できます。

1. NAS → B2へコピー。
2. NAS → S3へコピー。
3. NASとB2を比較。
4. NASとS3を比較。
5. Slackで通知。

### 5) 両方のバックアップを検証する

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify multi-cloud backup" class="img-large img-center" />

## コスト最適化

| データ量 | B2 月額 | S3 Standard-IA 月額 | 合計 |
|-------------|-----------|----------------------|-------|
| 1 TB | $6 | $12.50 | $18.50 |
| 5 TB | $30 | $62.50 | $92.50 |
| 10 TB | $60 | $125 | $185 |

セカンダリバックアップには、S3 Glacier（$4/TB）やWasabi（$7/TB、送信転送無料）といった、より安価なティアを利用しましょう。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から**RcloneViewをダウンロード**します。
2. **NASと2つのクラウドプロバイダーを接続**します。
3. 各クラウドへの**コピージョブを作成**します。
4. バッチジョブで**スケジュールと自動化**を行います。
5. 毎週**両方のバックアップを検証**します。

2つのクラウド、1つのNAS、データ損失リスクはゼロです。

---

**関連ガイド:**

- [Synology NASでのRcloneView](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [QNAP NASでのRcloneView](https://rcloneview.com/support/blog/rcloneview-qnap-nas-cloud-backup-rcloneview)
- [クラウド間バックアップが重要な理由](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)

<CloudSupportGrid />

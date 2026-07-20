---
slug: hidden-cloud-storage-costs-save-money-rcloneview
title: "クラウドストレージの隠れたコスト — 送信(egress)料金、APIチャージ、そして節約方法"
authors:
  - tayson
description: "クラウドストレージの料金は、送信(egress)料金、APIチャージ、最低保存期間を知るまではシンプルに見えます。隠れたコストと、RcloneViewを使った最適化方法を学びましょう。"
keywords:
  - クラウドストレージ 隠れたコスト
  - クラウド egress 料金
  - クラウドストレージ 料金
  - s3 egress コスト
  - クラウド api チャージ
  - クラウドストレージ コスト削減
  - クラウドストレージ コスト最適化
  - 安いクラウドストレージ
  - クラウドストレージ 料金体系
  - クラウドストレージ 節約
tags:
  - RcloneView
  - cloud-storage
  - pricing
  - cost-optimization
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウドストレージの隠れたコスト — 送信(egress)料金、APIチャージ、そして節約方法

> AWS S3は$0.023/GB/月と宣伝されています。1TBなら安く感じます — 月額わずか$23。しかしそのテラバイトをダウンロードすると、請求額は$113に跳ね上がります。ようこそ、egress料金の世界へ。

クラウドストレージの料金には、表示価格と実際の価格があります。表示価格はGBあたりのストレージ料金です。実際の価格には、egress(ダウンロード)料金、APIリクエストチャージ、最低保存期間、そしてコールドストレージの取り出し料金が含まれます。これらの隠れたコストを理解することで、適切なプロバイダーを選び、予想外の請求を避けることができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 隠れたコスト

### 1) Egress料金

Egressとは、クラウドからデータをダウンロードする際に支払う料金です。ほとんどのクラウド請求書で最大の驚きとなる項目です。

| プロバイダー | Egress(TBあたり) |
|----------|----------------|
| AWS S3 | $90 |
| Google Cloud | $120 |
| Azure | $87 |
| Oracle Cloud | 無料(最初の10TB) |
| Backblaze B2 | $10(Cloudflare経由なら無料) |
| Wasabi | 無料* |
| Storj | $7 |

*Wasabiの無料egressにはフェアユースポリシーがあります — egressは保存容量を超えてはいけません。

**実際の影響:** AWS S3から10TBを移行すると、egressだけで$900かかります。

### 2) APIリクエストチャージ

すべてのファイル操作(リスト、読み取り、書き込み、削除)はAPI呼び出しです。呼び出しごとに費用がかかります。

| プロバイダー | PUT/POST(1,000件あたり) | GET(1,000件あたり) |
|----------|---------------------|-----------------|
| AWS S3 Standard | $0.005 | $0.0004 |
| Google Cloud | $0.005 | $0.0004 |
| Backblaze B2 | $0.004 | 無料(1日2,500件まで) |

100,000個の小さなファイルを同期すると、100,000回以上のAPI呼び出しが発生します — これが積み重なっていきます。

### 3) 最低保存期間

| プロバイダー | 最低保存期間 | 何が起こるか |
|----------|-----------------|-------------|
| AWS S3 Standard | なし | 従量課金 |
| AWS S3 Standard-IA | 30日 | 早期に削除しても30日分課金される |
| AWS S3 Glacier | 90日 | 最低90日分課金される |
| Wasabi | 90日 | 最低90日分課金される |
| Backblaze B2 | 1日 | 実質的に最低期間なし |

Wasabiでファイルを10日後に削除しても、90日分のストレージ料金を支払うことになります。

### 4) 取り出し料金

コールドストレージ階層では、データの取り出しに料金がかかります。

| 階層 | 取り出しコスト |
|------|---------------|
| S3 Glacier Instant | $10/TB |
| S3 Glacier Flexible | $30/TB(3〜5時間) |
| S3 Glacier Deep Archive | $20/TB(12時間) |

### 5) 早期削除料金

S3 Glacierでは、最低保存期間より前にオブジェクトを削除すると早期削除料金が発生します。

## クラウドストレージのコストを最適化する方法

### データに適したプロバイダーを選ぶ

| データの種類 | 最適なプロバイダー | 理由 |
|-----------|--------------|-----|
| ホット(毎日アクセス) | Google Drive、OneDrive | Workspace/M365に含まれる |
| ウォーム(週次アクセス) | S3 Standard-IA、B2 | 安いストレージ、中程度のegress |
| コールド(月次アクセス) | B2、Wasabi | 低ストレージコスト、予測可能な料金 |
| アーカイブ(年次アクセス) | S3 Glacier、Storj | 最も安いストレージ |

### RcloneViewを使って階層間でデータを移動する

データが古くなるにつれて、より安いストレージへ移動しましょう。

```
Week 1-4: Google Drive(サブスクリプションに含まれる)
Month 2-12: Backblaze B2($6/TB、低egress)
Year 2+: S3 Glacier($4/TB、アーカイブ)
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Automate tiered storage" class="img-large img-center" />

### スマートな同期でegressを最小化する

- **egressが無料になる時間帯に同期する** — 一部のプロバイダーは特定の時間帯や特定のパートナー向けに無料egressを提供しています。
- **B2でCloudflareを使う** — Cloudflareの Bandwidth Allianceを通じて、B2のegressは無料になります。
- **Oracle Cloudを選ぶ** — 月10TBまでegressが無料です。
- **フィルターを使う** — 必要なものだけを同期すれば、転送データが減りegressも減ります。

### API呼び出しを減らす

- rclone設定で**`--fast-list`を使う**と、ディレクトリ一覧取得時のAPI呼び出しを削減できます。
- 安定したデータは**同期頻度を減らす** — 毎時ではなく毎週に。
- 大きなファイルにはチェックサム検証の代わりに**サイズのみのチェック**を使う。

### 無駄を見つけて排除する

フォルダー比較を使って、複数のクラウド間の重複データを見つけましょう。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicate data across clouds" class="img-large img-center" />

## 月額コスト比較: 5TBストレージ

| シナリオ | 月額コスト |
|----------|-------------|
| AWS S3 Standard(5TBストレージ + 1TB egress) | $205 |
| Backblaze B2(5TB + 1TB egress) | $40 |
| Wasabi(5TB、egress料金なし) | $35 |
| Google Drive(2TBプラン、個人向け) | $10 |
| 最適化した組み合わせ(B2 + Glacier) | $25 |

適切なプロバイダーの組み合わせにより、コストを80%削減できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **現在のクラウドコストを監査する** — 何にいくら支払っているかを確認します。
3. **無駄を特定する** — 重複データ、未使用データ、誤ったストレージ階層。
4. RcloneViewを使って**データを最適なプロバイダーへ移動する**。
5. **自動階層化をスケジュール**して、長期的にコストを低く保ちます。

最も安いクラウドとは、あなたのアクセスパターンに合ったクラウドです。

---

**関連ガイド:**

- [クラウドストレージが満杯?容量を空ける方法](https://rcloneview.com/support/blog/cloud-storage-full-free-up-space-multiple-clouds-rcloneview)
- [重複ファイルを見つけて削除する](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-storage-rcloneview)
- [帯域幅制限を設定する](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />

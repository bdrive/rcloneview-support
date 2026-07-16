---
slug: aws-s3-vs-cloudflare-r2-object-storage-comparison-rcloneview
title: "AWS S3 vs Cloudflare R2: RcloneViewユーザーのためのオブジェクトストレージ比較"
authors:
  - tayson
description: "AWS S3とCloudflare R2のオブジェクトストレージを比較します。料金、egress費用、パフォーマンス、機能を分析し、RcloneViewに適したバックエンドを選びましょう。"
keywords:
  - aws s3 vs cloudflare r2
  - s3 vs r2
  - cloudflare r2 comparison
  - object storage comparison
  - s3 egress fees
  - r2 no egress
  - cloud storage pricing
  - s3 compatible storage
  - best object storage
  - rcloneview storage comparison
tags:
  - amazon-s3
  - cloudflare-r2
  - comparison
  - storage-comparison
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# AWS S3 vs Cloudflare R2: RcloneViewユーザーのためのオブジェクトストレージ比較

> AWS S3はオブジェクトストレージ業界の標準です。Cloudflare R2はegress費用を完全に排除しました。RcloneViewは両方に接続できます。ここでは選び方を解説します。

AWS S3はオブジェクトストレージというカテゴリを確立し、11ナインの耐久性、包括的なライフサイクル管理、AWSエコシステムとの深い統合により、今なお最も広く採用されているサービスです。Cloudflare R2は、egress費用ゼロという画期的な料金体系を武器に直接の競合として登場しました。複数のプロバイダーにまたがってデータを管理するRcloneViewユーザーにとって、S3とR2のトレードオフを理解することは、コストと機能の両方を最適化する助けになります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 料金比較

### ストレージ費用

| ティア | AWS S3 | Cloudflare R2 |
|---|---|---|
| Standard | $0.023/GB/月 | $0.015/GB/月 |
| Infrequent Access | $0.0125/GB/月 | 提供なし |
| Glacier Instant | $0.004/GB/月 | 提供なし |
| Glacier Deep Archive | $0.00099/GB/月 | 提供なし |

アクティブストレージについては、R2はS3 Standardより35%安価です。しかし、S3の階層型ストレージクラス(Infrequent Access、Glacier、Deep Archive)は、めったにアクセスされないデータに対して大幅に低い価格を提供します。データのアクセスパターンが混在している場合、S3のライフサイクルポリシーを使えば、時間経過とともにオブジェクトを自動的により安価なティアへ移行できます。これはR2にはない機能です。

### Egress費用

これがR2の目玉となる強みです。AWS S3はインターネットへのデータ転送に対して$0.09/GBを課金します(転送量が多い場合はより低いレート、CloudFrontへの転送は無料)。Cloudflare R2はegressに対して$0.00、つまりすべてのデータ取得が無料です。

月間10TBのegressワークロードの場合、その差は歴然としています。S3ではおよそ$900/月かかる一方、R2では$0です。ストレージ重視でegressの少ないワークロードでは差は小さくなり、S3のエコシステムの優位性がegress削減効果を上回る場合もあります。

### APIオペレーション

| オペレーション | AWS S3 | Cloudflare R2 |
|---|---|---|
| PUT/POST(クラスA) | $0.005/1,000件 | $0.0045/1,000件(最初の100万件は無料) |
| GET(クラスB) | $0.0004/1,000件 | $0.00036/1,000件(最初の1,000万件は無料) |
| DELETE | 無料 | 無料 |

R2はAPIオペレーションに寛大な無料枠を提供しており、無料枠を超えた分も1オペレーションあたりわずかに安価です。API呼び出し数が多いワークロード(数百万件の小さなオブジェクトオペレーション)では、R2の無料枠が意味のある節約につながります。

## 機能比較

### ストレージクラスとライフサイクル

**AWS S3**は6種類のストレージクラス(Standard、Intelligent-Tiering、Standard-IA、One Zone-IA、Glacier Instant Retrieval、Glacier Flexible Retrieval、Glacier Deep Archive)を提供し、経過時間やアクセスパターンに基づいてオブジェクトを自動的に移行するライフサイクルポリシーを備えています。

**Cloudflare R2**は単一のストレージクラスとInfrequent Accessティアを提供します。Glacier相当のコールドストレージオプションはなく、ライフサイクル管理も限定的です。

アーカイブ用途では、$0.00099/GB/月のS3 Glacier Deep Archiveに匹敵するものはありません。

### 耐久性と可用性

両サービスとも高い耐久性を提供します。AWS S3は99.999999999%(11ナイン)の耐久性を公表しています。CloudflareはR2について具体的な耐久性の数値は公表していませんが、複数のアベイラビリティゾーンにわたって高い耐久性を実現するよう設計されているとしています。

S3 Standardは99.99%の可用性を提供します。R2は具体的なSLAを公表していませんが、Cloudflareのグローバルネットワークの恩恵を受けています。

### エコシステム統合

**AWS S3**はLambda、CloudFront、Athena、EMR、SageMaker、CloudTrailなど、AWSエコシステム全体と統合されています。IAMポリシー、バケットポリシー、VPCエンドポイントによってきめ細かなアクセス制御が可能です。

**Cloudflare R2**はCloudflare Workers(エッジコンピューティング)、Cloudflare CDN、Cloudflareダッシュボードと統合されています。統合はより緊密でシンプルですが、範囲は狭くなります。

### S3 API互換性

両サービスともS3 APIをサポートしています。R2は最も一般的に使用されるS3オペレーション(GET、PUT、DELETE、マルチパートアップロード、オブジェクトの一覧表示)を実装していますが、すべてのS3機能をサポートしているわけではありません。特に、S3 Select、S3 Object Lambda、一部の高度なバケット設定はR2では利用できません。

RcloneViewは両者に同じS3互換のリモートタイプで接続するため、RcloneView内で両者を切り替えるにはエンドポイントと認証情報を変更するだけで済みます。

## RcloneViewで両方を使う

RcloneViewのマルチクラウドアプローチにより、どちらか一方を選ぶ必要はありません。よくある戦略は、アーカイブデータにはS3を使い(Glacierティアを活用)、頻繁にアクセスするデータにはR2を使う(egress費用を排除する)というものです。RcloneViewは、2ペインのエクスプローラーで数クリックするだけで両者間の同期、コピー、移行を行えます。

両方をリモートマネージャーでS3互換のリモートとして設定すれば、あとはRcloneViewにお任せです。バケットの内容を比較したり、移行を実行したり、継続的なレプリケーションジョブをスケジュールしたりできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Managing AWS S3 and Cloudflare R2 side by side in RcloneView" class="img-large img-center" />

## どちらのプロバイダーを選ぶべきか

**次の場合はAWS S3を選びましょう:**
- ライフサイクルポリシーとGlacierコールドストレージティアが必要な場合。
- ワークロードが他のAWSサービスと統合されている場合。
- S3 Select、Object Lambda、Inventoryなどの高度な機能が必要な場合。
- ストレージ容量に対してデータegressが最小限である場合。
- 公表されている11ナインの耐久性SLAが必要な場合。

**次の場合はCloudflare R2を選びましょう:**
- データegressがコストの大きな割合を占める場合。
- CloudflareのCDNネットワークを通じてコンテンツを配信する場合。
- アプリケーションがエッジコンピューティングにCloudflare Workersを使用している場合。
- egressによる予期せぬ費用のない、シンプルで予測可能な料金体系を求める場合。
- データにコールドストレージ階層化が不要な場合。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. リモートマネージャーでAWS S3とCloudflare R2をS3互換のリモートとして追加します。
3. 2ペインのエクスプローラーで両方を並べて閲覧します。
4. コストとアクセス要件に応じて、両者間でデータを移行、同期、またはレプリケートします。

AWS S3は、そのエコシステムの深さとアーカイブティアにより、オブジェクトストレージのゴールドスタンダードであり続けています。Cloudflare R2はegress費用を排除することで料金モデルに変革をもたらしています。RcloneViewを使えば、ベンダーロックインなしに両方を活用したり、切り替えたりすることができます。

---

**関連ガイド:**

- [AWS S3およびS3互換ストレージを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />

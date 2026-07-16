---
slug: rclone-about-storage-usage-analysis-rcloneview
title: "RcloneViewでクラウドストレージの使用状況とクォータを分析する"
authors:
  - tayson
description: "RcloneViewのダッシュボードとrclone aboutコマンドを使って、複数のプロバイダーにわたるクラウドストレージの使用状況を監視し、クォータを確認し、大きなフォルダを特定し、容量計画を立てましょう。"
keywords:
  - rclone about storage usage
  - cloud storage quota monitor
  - rcloneview storage analysis
  - check cloud storage space
  - cloud capacity planning
  - storage usage per remote
  - rclone disk usage
  - cloud quota monitoring tool
  - compare cloud storage usage
  - rcloneview dashboard storage
tags:
  - RcloneView
  - feature
  - cloud-storage
  - guide
  - tips
  - cost-optimization
  - dashboard
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでクラウドストレージの使用状況とクォータを分析する

> クラウドコストを最適化する前に、ストレージがどこに使われているかを正確に把握する必要があります。RcloneViewは、接続されているすべてのリモートの使用状況データとクォータ情報を一箇所にまとめて表示します。

クラウドストレージのコストの多くは容量によって決まります。S3でギガバイト単位の料金を支払う場合でも、Google Driveの無料枠内に収める場合でも、OneDriveでチームのクォータを共有する場合でも、各リモートがどれだけの容量を消費しているかを知ることは、コスト管理と容量計画において不可欠です。rcloneの`about`コマンドは、プロバイダーのAPIに問い合わせて、合計・使用済み・空き・ゴミ箱の容量を取得します。RcloneViewはこの情報を視覚的に表示するため、プロバイダーごとのダッシュボードを切り替えることなく、すべてのリモートを監視できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## rclone aboutが報告する内容

`rclone about`コマンドは、プロバイダーのAPIから直接ストレージの指標を取得します。典型的なレスポンスには以下が含まれます。

| 指標 | 説明 |
|--------|-------------|
| **Total（合計）** | アカウントに割り当てられたストレージクォータの合計 |
| **Used（使用済み）** | ファイルによって現在消費されている容量 |
| **Free（空き）** | 残りの利用可能な容量 |
| **Trashed（ゴミ箱）** | ゴミ箱/リサイクルビン内のアイテムが使用している容量 |
| **Other（その他）** | 他のサービス（Googleアカウントの場合のGmailなど）が使用している容量 |

すべてのプロバイダーがすべてのフィールドを報告するわけではありません。例えばS3互換サービスでは、バケットに固定クォータがないため、使用済み容量のみを報告することが多いです。Google Driveは5つのフィールドすべてを報告するため、最も情報量の多いプロバイダーの一つです。

## RcloneViewでストレージ使用状況を確認する

RcloneViewは、接続されているリモートを視覚的に一覧表示します。

1. **RcloneView**を開き、**ダッシュボード**または**リモートエクスプローラー**に移動します。
2. 確認したいリモートを選択します。
3. 使用済み、空き、合計容量を示すストレージサマリーを確認します。

すべてのリモートを一目で確認するには、ダッシュボードで接続されているすべてのプロバイダーの消費状況を一覧できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote list showing connected cloud providers" class="img-large img-center" />

## ターミナルからrclone aboutを実行する

生の数値やスクリプト処理のためには、RcloneViewで**ターミナル**を開き、以下を実行します。

```bash
rclone about gdrive:
```

出力例:

```
Total:   15 GiB
Used:    9.2 GiB
Free:    5.8 GiB
Trashed: 1.4 GiB
Other:   3.1 GiB
```

複数のリモートをすばやく確認するには:

```bash
rclone about gdrive:
rclone about onedrive:
rclone about s3-backup:
```

スクリプトで解析可能な機械可読出力には`--json`を使用します。

```bash
rclone about gdrive: --json
```

## 大きなフォルダを特定する

合計使用量を知ることは第一歩です。どのフォルダが最も容量を消費しているかを特定するには、`rclone size`コマンドが必要です。

```bash
rclone size gdrive:/Photos
```

これは指定したパス内のすべてのファイルの合計数と合計サイズを返します。最も大きなフォルダを見つけるには、トップレベルのディレクトリに対してこれを実行し、比較します。

RcloneViewの**エクスプローラー**では、任意のリモートを参照しながらフォルダサイズを確認できるため、コマンドを実行することなく容量を大量消費しているものを簡単に見つけられます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer browsing cloud folders with size information" class="img-large img-center" />

## プロバイダー間でのクォータ監視

プロバイダーによってクォータの扱い方は異なります。

| プロバイダー | クォータモデル | 備考 |
|----------|------------|-------|
| **Google Drive** | Drive、Gmail、Photosで共有 | 無料15GB。Workspaceプランは異なる |
| **OneDrive** | ユーザーごとの割り当て | 無料5GB。Microsoft 365プランは1TB以上を提供 |
| **Dropbox** | アカウントごとのクォータ | 無料2GB。Plusは2TBを提供 |
| **Backblaze B2** | 従量課金制、固定クォータなし | 保存容量に応じて月ごとにGB単位で請求 |
| **Amazon S3** | 従量課金制、固定クォータなし | ストレージクラスごとの段階的な料金体系 |
| **pCloud** | 買い切りまたはサブスクリプションのクォータ | 無料10GB。買い切りプランも利用可能 |

S3やB2のような従量課金型プロバイダーには到達すべきクォータはありませんが、使用量を直接監視することが請求額のコントロールにつながります。クォータ制のプロバイダーでは、容量不足になると同期やバックアップが静かに失敗します。

## 容量計画とコスト見積もり

ストレージ使用状況データを使って計画を立てましょう。

1. **時間の経過とともに増加傾向を追跡する** -- `rclone about`を定期的に実行し、結果を記録します。リモートごとの月次使用量を追跡するシンプルなスプレッドシートで傾向が見えてきます。
2. **従量課金プロバイダーの月額コストを見積もる**:
   - Backblaze B2: ストレージ0.006ドル/GB/月
   - Amazon S3 Standard: 0.023ドル/GB/月
   - Wasabi: 0.0069ドル/GB/月（最低1TB）
3. **アラートを設定する** -- クォータ制のリモートが使用率80%を超えたら、クリーンアップまたはアップグレードを計画します。
4. **プロバイダーを比較する** -- あるリモートがGBあたり安価であれば、コールドデータをそちらに移行することを検討します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare storage consumption across cloud providers" class="img-large img-center" />

## ゴミ箱から容量を取り戻す

最も見落とされがちなストレージ消費要因の一つがゴミ箱です。Google DriveとOneDriveはどちらも、ゴミ箱に入れたファイルをクォータに対してカウントします。`rclone about`の出力はゴミ箱の容量を明示的に表示し、以下のコマンドで容量を取り戻すことができます。

```bash
rclone cleanup gdrive:
```

RcloneViewでは、コマンドを入力することなくUIからこれを実行できます。ゴミ箱の容量を取り戻すことは、アクティブなファイルを削除することなく数ギガバイトを解放する最も速い方法であることが多いです。

## プロバイダー間の使用量比較

複数のクラウドアカウントを管理する際、プロバイダー間の比較は以下のような意思決定に役立ちます。

- **新しいバックアップの保存先** -- 最も余裕のあるリモートにデータを振り分けます。
- **どのプロバイダーをスケールさせるか** -- S3のコストがB2よりも速く増加している場合、その理由を調査します。
- **アーカイブのタイミング** -- 頻繁にアクセスされないデータを、高価なストレージから安価な階層に移動します。

RcloneViewのマルチリモートダッシュボードは、この比較を即座に行えるようにします。3つの異なるプロバイダーのダッシュボードにログインする代わりに、すべての使用状況データを一つのインターフェースで確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView dashboard showing multiple remote storage status" class="img-large img-center" />

## ベストプラクティス

- **大きな転送を開始する前にクォータを確認する** -- 転送先が満杯だと、静かに失敗が発生します。
- **ゴミ箱の使用量を監視し**、定期的にクリーンアップして見せかけのクォータ消費を防ぎます。
- **月次で使用状況を記録する**ことで、コスト追跡と傾向分析に役立てます。
- 特定のフォルダに**`rclone size`を使用**して、容量を最も消費しているものを見つけます。
- RcloneViewでスケジュールジョブとして`rclone about`コマンドを保存し、**チェックを自動化する**。

---

**関連ガイド:**

- [クラウドストレージのクリーンアップ: ゴミ箱を空にして古いバージョンを削除する](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2 比較](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [ビジネス向けGoogle Drive vs OneDrive](https://rcloneview.com/support/blog/google-drive-vs-onedrive-for-business-rcloneview)

<CloudSupportGrid />

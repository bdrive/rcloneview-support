---
slug: set-bandwidth-limits-cloud-transfers-rcloneview
title: "RcloneViewでクラウド転送の帯域幅制限を設定する方法"
authors:
  - tayson
description: "クラウド同期・バックアップジョブが使用する帯域幅を制御 — RcloneViewのスロットリング設定で、業務時間中のネットワーク低下を防ぎ、夜間は最大速度で転送。"
keywords:
  - rclone bandwidth limit
  - cloud transfer speed limit
  - throttle cloud sync
  - rcloneview bandwidth control
  - limit upload speed rclone
  - cloud backup bandwidth
  - rclone bwlimit
  - network throttle cloud sync
  - control cloud transfer speed
  - rcloneview transfer settings
tags:
  - performance
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでクラウド転送の帯域幅制限を設定する方法

> 業務時間中に大規模なクラウド同期を実行していませんか？チームメンバーはきっと気づきます。バックアップがみんなのインターネットを止めることなく実行できるよう、帯域幅をスロットリングする方法を紹介します。

クラウド同期・バックアップジョブはネットワーク接続を飽和させ、ビデオ通話やWebブラウジングなど重要な作業の速度を低下させることがあります。これはオフィス環境、回線を共有するホームオフィス、あるいはテラバイト単位のデータを同期する場合に特に問題となります。RcloneViewでは、正確な帯域幅制限を設定できるため、ネットワークを妨げることなくクラウド転送をバックグラウンドで実行できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 帯域幅制限が重要な理由

### 共有ネットワーク

100Mbpsの回線を持つオフィスでは、スロットリングされていない単一のクラウド同期ジョブが80Mbps以上を消費し、チームの残りにはほとんど帯域が残らなくなることがあります。

### ホームオフィス

ビデオ通話には約5〜10Mbpsが必要です。バックアップジョブが利用可能な帯域幅をすべて使ってしまうと、Zoom通話の画質はポテト品質まで低下します。

### ISPのフェアユースポリシー

一部のISPは、高帯域幅の使用が継続すると、スロットリングを行ったり追加料金を請求したりします。クラウド転送を制限することで、予期しない請求や速度低下を防げます。

### クラウドプロバイダーのレート制限

一部のプロバイダー（特にGoogle Drive）は、転送が速すぎるとスロットリングしたりエラーを返したりします。帯域幅制限を行うことで、安全な範囲内に収めることができます。

## 帯域幅制限の設定方法

### 方法1: ジョブごとの帯域幅制限

RcloneViewでジョブを作成または編集する際、rcloneオプションに帯域幅制限フラグを追加します。

- **`--bwlimit 10M`** — 10 MB/s（メガバイト毎秒）に制限
- **`--bwlimit 50M`** — 50 MB/sに制限
- **`--bwlimit 1M`** — 1 MB/sに制限（バックグラウンドでのトリクル同期に適しています）

### 方法2: 時間帯ベースの帯域幅スケジューリング

rcloneは時間帯ベースの帯域幅制限をサポートしており、時間帯ごとに異なる速度を使用できます。

```
--bwlimit "08:00,5M 18:00,50M 23:00,off"
```

これは以下を意味します。
- **午前8時〜午後6時**: 5 MB/sに制限（業務時間、影響を最小限に）
- **午後6時〜午後11時**: 50 MB/sに制限（夕方、より多くの帯域が利用可能）
- **午後11時〜午前8時**: 無制限（夜間、最大速度）

これはほとんどのユーザーにとって最適な設定です。転送は24時間365日実行されますが、ネットワークがアイドル状態のときのみフル速度になります。

### 方法3: アップロードとダウンロードの制限を分ける

アップロードとダウンロードで異なる制限を設定できます。

```
--bwlimit "10M:5M"
```

これはアップロードを10 MB/sに、ダウンロードを5 MB/sに制限します。ISPが非対称の速度を提供している場合（ケーブルやDSL回線でよくあるケース）に便利です。

## 実践例

### 100Mbps回線のホームオフィス

```
--bwlimit "09:00,2M 17:00,off"
```
- 業務時間中: 2 MB/s（ビデオ通話と並行してもほとんど気になりません）
- 業務時間後: 無制限

### 50Mbps共有回線の小規模オフィス

```
--bwlimit "08:00,3M 18:00,25M 22:00,off"
```
- 営業時間中: 3 MB/s（スタッフ用に47 Mbpsを残す）
- 夕方: 25 MB/s（半分の容量）
- 夜間: フル速度

### 週末の大規模移行

```
--bwlimit off
```
- 制限なし — メンテナンス時間帯に転送速度を最大化。

## ジョブスケジューリングとの組み合わせ

最も強力なアプローチは、**帯域幅制限なしの重いジョブを夜間に**、**厳しい制限付きの軽いジョブを日中に**スケジュールすることです。

1. 同期ジョブを2つのバージョンで作成します。
   - **日中ジョブ**: `--bwlimit 5M` — 正午に実行し、軽量な増分同期を行う
   - **夜間ジョブ**: 帯域幅制限なし — 午前2時に実行し、大量転送を行う
2. [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)で両方をスケジュールします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers with different bandwidth limits" class="img-large img-center" />

## 実際の速度を監視する

リアルタイム転送モニタリングを使用して、帯域幅制限が正しく機能しているか確認します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed with bandwidth limits" class="img-large img-center" />

転送速度の表示は、設定した制限値以下の値を示すはずです。制限値より低い速度が表示されている場合、ボトルネックは他の場所（ネットワーク、プロバイダーAPI、ディスク速度）にあります。

## クイックリファレンス

| シナリオ | 設定 | 効果 |
|----------|---------|--------|
| 軽いバックグラウンド同期 | `--bwlimit 2M` | ほとんど気にならない |
| 中程度の転送 | `--bwlimit 10M` | 目立つが許容範囲 |
| 業務時間のみ | `--bwlimit "09:00,5M 17:00,off"` | 業務時間中はスロットリング |
| アップロード重視 | `--bwlimit "20M:5M"` | アップロード20M、ダウンロード5M |
| 制限なし | `--bwlimit off` または省略 | 最大速度 |

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **リモートを追加**し、同期／コピージョブを作成します。
3. ジョブのrcloneフラグに**`--bwlimit`を追加**します。
4. **テストと監視**を行い、適切なバランスを見つけます。
5. 両方の利点を活かすため、**スケジューリングと組み合わせ**ます。

高速な転送は良いことです。しかし、チームのビデオ通話をクラッシュさせない転送はもっと良いことです。

---

**関連ガイド:**

- [大容量クラウド転送を高速化する](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [リアルタイム転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Google Driveのレート制限エラーを修正する](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)

<CloudSupportGrid />

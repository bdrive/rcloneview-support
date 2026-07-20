---
slug: job-export-import-portable-workflow-rcloneview
title: "ジョブのエクスポートとインポート — RcloneViewでのポータブルな同期ワークフロー"
authors:
  - tayson
description: "RcloneViewで同期ジョブをエクスポート・インポートし、複数のマシン間でワークフローを共有し、チームの構成を標準化し、システム移行後に復元する方法を解説します。"
keywords:
  - RcloneView job export
  - sync job import
  - portable sync workflow
  - job manager export
  - team sync configuration
  - backup sync jobs
  - migrate RcloneView jobs
  - job portability
tags:
  - RcloneView
  - feature
  - job-management
  - automation
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# ジョブのエクスポートとインポート — RcloneViewでのポータブルな同期ワークフロー

> RcloneViewでは、すべての同期ジョブをJSONファイルにエクスポートし、他のマシンにインポートできます。これにより、ワークフローを真にポータブルにし、チームの構成を統一できます。

複雑な同期ジョブの設定には時間がかかります。適切なソースおよび宛先リモートの選択、フィルターの設定、帯域幅制限の指定、各ジョブのオプション調整などが必要です。新しいコンピューターに買い替えたり、2台目のワークステーションを追加したり、新しいチームメンバーを迎え入れたりするたびに、この作業を繰り返すのは避けたいものです。RcloneViewのジョブエクスポート・インポート機能は、ジョブ構成全体をポータブルなJSONファイルにまとめて記録することでこの課題を解決します。このファイルはどのRcloneViewインストール環境にも読み込むことができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 同期ジョブをエクスポートする

ジョブをエクスポートするには、RcloneViewで**ジョブマネージャー**を開き、ツールバーまたはコンテキストメニューにある**エクスポート**オプションを探します。RcloneViewは、ソース/宛先パス、フィルタールール、rcloneフラグ、スケジュール情報を含む、設定済みのすべての同期ジョブを1つのJSONファイルにエクスポートします。このファイルの保存先は自由に選択できます。

より広いバックアップ戦略の一環として、定期的にジョブをエクスポートしておくことをお勧めします。エクスポートしたJSONは、クラウドフォルダ(たとえばGoogle DriveやBackblaze B2のバックアップバケットなど)に保存しておくと、ローカルマシンに何が起きても常にアクセスできます。これはいわば、バックアップ構成自体のバックアップと考えてください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager in RcloneView showing export option" class="img-large img-center" />

## 新しいマシンでジョブをインポートする

移行先のマシンでは、[rcloneview.com](https://rcloneview.com/src/download.html)からRcloneViewをインストールし、必要なクラウドリモートを設定します(インポートしたジョブが正しく動作するには、同じリモート名が存在している必要があります)。次に**ジョブマネージャー**を開き、**インポート**機能を使ってエクスポート済みのJSONファイルを読み込みます。すべての同期ジョブが即座に表示され、すぐに実行できる状態になります。

このワークフローは、特にコンピューターの移行後に非常に役立ちます。十数個の同期ジョブを手作業で再作成する代わりに、インポートなら数秒で完了します。同じプロセスはチームの標準化にも活用できます。チームリーダーが基準となるジョブ構成を作成・エクスポートし、そのJSONファイルをチームメンバー全員に配布して、それぞれのRcloneView環境にインポートしてもらうのです。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Imported jobs visible in RcloneView Job Manager" class="img-large img-center" />

## チームの標準化と災害復旧

複数のクラウド宛先を管理するチームにとって、同期ジョブ構成の一貫性は非常に重要です。各メンバーが個別に手作業でジョブを設定すると、フィルタールールや宛先パスに食い違いが生じ、ファイルの欠落や意図しない上書きにつながる可能性があります。マスターとなるジョブエクスポートファイルを維持し、それをすべてのチームのマシンにインポートすることで、全員が同一のワークフローで作業していることを保証できます。

エクスポート・インポート機能は、同期構成の軽量な災害復旧手段としても機能します。RcloneViewの再インストールが必要になった場合や、マシンが交換された場合でも、ワークフロー全体の復元はrcloneリモート構成のインポートとジョブJSONのインポートという2ステップで完了します。RcloneViewのエクスポート・インポートは無料版で利用可能です。この機能を使うのにPLUSライセンスは必要ありません。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Standardized sync jobs shared across team machines in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 主要マシンの**ジョブマネージャー**で同期ジョブを設定します。
3. ジョブマネージャーの**エクスポート**を使用して、すべてのジョブをJSONファイルに保存します。
4. 保管のため、エクスポートファイルをクラウドバックアップの保存場所に保存します。
5. 新しいマシンでRcloneViewをインストールし、対応するリモート名を設定した上で、JSONを**インポート**してすべてのジョブを復元します。

ジョブのエクスポートとインポートにより、RcloneViewは真にポータブルな同期プラットフォームとなります。ワークフローへの投資が単一のマシンに縛られることはありません。

---

**関連ガイド:**

- [RcloneViewで毎日のクラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [RcloneViewでrclone設定をバックアップ・移行する](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [RcloneViewでのバッチ操作](https://rcloneview.com/support/blog/batch-operations-rcloneview)

<CloudSupportGrid />

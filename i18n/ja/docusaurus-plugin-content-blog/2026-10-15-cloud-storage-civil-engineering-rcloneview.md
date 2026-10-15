---
slug: cloud-storage-civil-engineering-rcloneview
title: "土木エンジニアリング企業のためのクラウドストレージ — RcloneViewでプロジェクトファイル、測量データ、バックアップを管理"
authors:
  - tayson
description: "土木エンジニアリング企業向けクラウドストレージ：クロスプラットフォームGUIのRcloneViewで、プロジェクト図面、測量データ、バックアップを複数のクラウドにまたがって整理します。"
keywords:
  - 土木エンジニアリング クラウドストレージ
  - 土木エンジニアリング ファイルバックアップ
  - エンジニアリングプロジェクトファイル 同期
  - 測量データ クラウドバックアップ
  - エンジニア向けマルチクラウドバックアップ
  - RcloneView
  - クラウド同期 GUI
  - 大容量図面ファイル クラウド
  - プロジェクトアーカイブ クラウドストレージ
  - rclone GUI
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 土木エンジニアリング企業のためのクラウドストレージ — RcloneViewでプロジェクトファイル、測量データ、バックアップを管理

> コマンドを一行もスクリプト化することなく、図面、測量データ、完了したプロジェクトを複数のクラウドで安全に保管できます。

中規模の土木エンジニアリング企業では、進行中の道路設計プロジェクトはGoogle Drive、顧客への納品物はBoxやOneDrive、何年分もの完了済みアーカイブはNASに置いていることがあります。場所ごとにインターフェースが異なるため、一貫したバックアップは容易ではありません。RcloneViewはそれらをひとつのウィンドウにまとめ、コピー、比較、転送のスケジュール設定を視覚的に行えるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## エンジニアリングデータにマルチクラウドのアプローチが必要な理由

エンジニアリングプロジェクトでは、CAD図面、GISエクスポート、点群スキャン、計算スプレッドシート、署名済みPDFパッケージなど、大容量で多様なファイル群が生まれます。納品物の保管場所は顧客が指定することが多く、単一のプロバイダーですべてをカバーできることはまれです。RcloneViewは90以上のプロバイダーに接続できるため、Google Drive、Box、OneDrive、Amazon S3、ローカルNASをエクスプローラーに並べて表示できます。

<img src="/support/images/en/blog/new-remote.png" alt="エンジニアリング企業向けにRcloneViewでクラウドリモートを追加する" class="img-large img-center" />

RcloneViewは90以上のプロバイダーをひとつのウィンドウからマウントし同期でき、Windows、macOS、Linuxで動作するため、現場のノートPCとオフィスのワークステーションで同じワークフローを共有できます。

## 完了したプロジェクトを低コストのオブジェクトストレージへアーカイブ

プロジェクトが完了するとファイルが変更されることはほとんどありませんが、何年も保管する必要があります。デュアルペインのエクスプローラーを使うか、リモート間でドラッグ＆ドロップして、完了したプロジェクトフォルダーをアクティブな作業領域からBackblaze B2やWasabiなどのS3互換バケットへコピーします。異なるリモート間の移動はコピーとして実行されるため、結果を確認するまで元のファイルはそのまま残ります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="プロジェクトアーカイブのクラウド間転送" class="img-large img-center" />

## Folder Compareで納品物を検証

作業用ドライブから何かを削除する前に、ソースとアーカイブの間でFolder Compareを実行します。フィルターで左のみ、右のみ、差異のあるファイルを表示できるため、すべての図面セットが移行されたことを確認できます。同期ジョブは最初にDry Runを実行して、コピーまたは削除される予定のファイルをプレビューしてください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="プロジェクトフォルダー間の差異を表示するFolder Compare" class="img-large img-center" />

## 進行中プロジェクトの夜間バックアップをスケジュール

プロジェクト共有から別のクラウドへの同期ジョブを作成し、crontab形式のスケジュールを追加すれば、営業時間外にバックアップが実行されます。スケジュール機能にはPLUSライセンスが必要です。手動ジョブ、ジョブ履歴（Job History）、複数の宛先への1:N同期はFREEライセンスで利用できます。ジョブ履歴には実行ごとにステータス、サイズ、ファイル数が記録され、監査証跡として役立ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewで夜間バックアップジョブをスケジュールする" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. アクティブな作業領域、NAS、アーカイブ用バケットのリモートを追加します。
3. アクティブなプロジェクトからアーカイブへの同期ジョブを作成し、まずDry Runを実行します。
4. スケジュール（PLUS）を追加し、最初の数回の実行後にジョブ履歴を確認します。

エンジニアリング記録を長年にわたって保護するのに、もうカスタムスクリプトは必要ありません。

---

**関連ガイド:**

- [建築事務所のためのクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-architecture-firms-rcloneview)
- [Dry Run — クラウド同期のプレビュー](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [ジョブ履歴と転送ログ](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />

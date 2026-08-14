---
slug: manage-liara-object-storage-cloud-sync-rcloneview
title: "Liaraオブジェクトストレージを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - robin
description: "Liara S3互換オブジェクトストレージをRcloneViewに接続し、1つのGUIでクロスプラットフォームの閲覧、同期、バックアップ、マウントを行いましょう。"
keywords:
  - Liara RcloneView
  - Liaraオブジェクトストレージ
  - S3互換オブジェクトストレージ
  - Liaraバックアップ
  - Liara同期
  - Liaraストレージのマウント
  - オブジェクトストレージGUI
  - Liaraファイル管理
  - クラウドストレージ管理
  - Liaraバケット同期
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Liaraオブジェクトストレージを管理する — RcloneViewでファイルを同期・バックアップ

> すでに管理している他のクラウドと同じエクスプローラーウィンドウにLiaraのバケットを取り込みましょう。

LiaraはS3互換のオブジェクトストレージサービスであり、RcloneViewはAmazon S3やWasabiなど他のS3プロトコル対応プロバイダーと同じ方法で接続します — アクセスキー、シークレットキー、エンドポイントを使用します。リモートを追加すると、Liaraのバケットはファイルエクスプローラーに通常のタブとして表示され、ローカルディスクや他のクラウドアカウントと並べて閲覧、転送、スケジュール設定ができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Liaraを新しいリモートとして接続する

Remoteタブから Remote Manager を開き、New Remote をクリックします。LiaraはrcloneのS3プロトコル経由でアクセスするため、S3互換オプションを選択し、Liaraコンソールで発行されたアクセスキー、シークレットキー、エンドポイントURLを入力します。完了すべきOAuthブラウザ手順はありません — テスト接続に成功すると、バケットは他のリモートと同様にタブバーに表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewで新しいS3互換リモートを追加する" class="img-large img-center" />

RcloneViewはWindows、macOS、Linuxの1つのウィンドウから90以上のプロバイダーをマウント・同期できます — Liaraも他のクラウドアカウントと同じように、別のクライアントや異なるワークフローを必要としません。

## バケットの閲覧、転送、同期

エクスプローラーを2つのパネルに分割しましょう — 一方にローカルファイルや別のクラウドを、もう一方にLiaraのバケットを表示し、その間でファイルをドラッグします。同じリモート内での移動は移動(move)操作となり、異なるリモート間でのドラッグはコピー(copy)操作となるため、元のフォルダを変更せずにLiaraへのバックアップを準備できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="ローカルフォルダとLiaraバケット間でファイルを転送する" class="img-large img-center" />

繰り返し実行するジョブには、4ステップの同期ウィザードを使用します。ソースと宛先を選択し、詳細設定で同時転送数とイコーリティチェッカー数を調整した後、保存前にファイルタイプ、サイズ、経過時間によるフィルターを適用します。実際の同期を実行する前に、まずドライラン(Dry Run)を実行して、何がコピーまたは削除されるかを正確にプレビューしてください。

## バックアップのスケジュール設定とジョブの監視

同期ジョブがJob Managerに保存されると、PLUSライセンスのユーザーはcrontab形式のスケジュールを設定して、Liaraのバックアップを一定の周期で自動実行できます。保存前に次回の実行時刻をプレビューすることも可能です。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Liara同期ジョブに定期バックアップスケジュールを設定する" class="img-large img-center" />

手動実行・スケジュール実行を問わず、すべての実行はステータス、転送速度、ファイル数、合計サイズとともにJob Historyに記録されるため、Liaraのバックアップが正常に完了したかを確認したり、再試行が必要な失敗した実行を見つけたりできます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Liaraコンソールでアクセスキーとシークレットキーを生成し、エンドポイントURLを控えておきます。
3. Remote ManagerでLiaraを新しいS3互換リモートとして追加し、接続をテストします。
4. Liaraバケットへの定期バックアップをスケジュールする前に、まずドライラン同期を実行します。

Liaraを接続すれば、あなたのオブジェクトストレージは管理している他のすべてのクラウドと並んで配置されます — 1つのエクスプローラー、1組の同期ジョブ、別のクライアントを維持する必要はありません。

---

**関連ガイド:**

- [RcloneViewでPetaboxストレージを管理する — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-petabox-cloud-sync-backup-rcloneview)
- [RcloneViewでScalewayオブジェクトストレージを管理する — 同期とバックアップ](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [RcloneViewでWasabiストレージを管理する — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

---
slug: sync-hidrive-to-amazon-s3-rcloneview
title: "HiDriveをAmazon S3に同期 — RcloneViewによるクラウドバックアップ"
authors:
  - morgan
description: "RcloneViewを使ってHiDriveのファイルをAmazon S3に同期・バックアップする方法を解説します。シンプルなGUIでヨーロッパのクラウドストレージとグローバルなクラウドストレージ間でファイルを転送できます。"
keywords:
  - HiDrive to Amazon S3
  - RcloneView HiDrive backup
  - sync HiDrive S3
  - HiDrive cloud backup
  - transfer HiDrive to AWS
  - cloud-to-cloud backup RcloneView
  - HiDrive migration to S3
  - Amazon S3 backup tool
  - cross-cloud file transfer
  - HiDrive file sync
tags:
  - hidrive
  - amazon-s3
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDriveをAmazon S3に同期 — RcloneViewによるクラウドバックアップ

> RcloneViewのビジュアル同期ツールを使って、HiDriveのストレージをAmazon S3にバックアップしましょう。CLIは不要で、スケジューリング、フィルタリング、リアルタイムの転送モニタリングも標準搭載されています。

Stratoのヨーロッパ向けクラウドプラットフォームであるHiDriveは、GDPR準拠のストレージを重視する企業に人気があります。一方でAmazon S3は、オブジェクトストレージの耐久性とエコシステム連携における基準となる存在であり、ミッションクリティカルなデータのセカンダリバックアップ先として自然な選択肢です。RcloneViewを使えば、両方のプロバイダーを1つのインターフェースで接続し、コマンドを一切書くことなく、S3バケットをHiDriveのフォルダと同期させる自動化・フィルタリング済みの同期ジョブを実行できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでHiDriveとAmazon S3を接続する

HiDriveは認証にOAuthを使用します。つまりRcloneViewがブラウザタブを開き、そこでStratoアカウントにログインしてアクセスを許可するだけで、APIキーの管理は一切不要です。**Remote > New Remote** に進み、**HiDrive** を選択してブラウザでのログインを完了してください。HiDriveのフォルダツリーがすぐにファイルエクスプローラーに表示されます。

Amazon S3については、再度 **Remote > New Remote** に進み、**Amazon S3** を選択して、AWSアクセスキーID、シークレットアクセスキー、対象リージョンを入力します。最小権限でのアクセスを実現したい場合は、AWSコンソールで専用のIAMユーザーを作成し、書き込み権限を対象バケットのみに限定した上で、その認証情報をRcloneViewに入力してください。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting HiDrive and Amazon S3 as remotes in RcloneView" class="img-large img-center" />

両方のリモートが登録されたら、RcloneViewのデュアルペインエクスプローラーで2つのパネルを並べて開きます — 左にHiDrive、右にS3を表示し、フル同期を実行する前にフォルダの内容を視覚的に比較できます。

## HiDriveからS3への同期ジョブを作成する

両方のリモートを接続したら、**Home > Sync** に進んでジョブウィザードを開きます。HiDriveのフォルダをソースに、S3バケット（任意のサブフォルダプレフィックス付き）を宛先に設定します。Advanced Settingsのステップでは、利用可能な帯域幅に合わせて同時転送スレッド数を設定します — 値を高くすると、フラットなファイル構造の一括転送が高速化される一方、厳しいレート制限がある接続では値を低くする方が安全です。

Filteringのステップでは、種類別（例: `.tmp`、`.part`）や更新日時によって不要なファイルを除外できます — 例えば **Max file age** フィルター（`90d`）を使用して、過去90日以内に更新されたファイルのみを同期することも可能です。これによりジョブを目的に集中させ、両エンドポイントへの不要なAPIコールを減らせます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

初回実行前には必ず **Dry Run** をクリックして、転送または削除される正確なファイルリストをプレビューしてください — データが移動する前に一方向の同期方向が正しいことを確認する必要がある、既存のHiDriveアカウントから新規S3バケットへの同期において、これは欠かせないステップです。

## 自動バックアップのスケジュール設定

継続的な保護のために、PLUSライセンスユーザーはcrontab形式のスケジュールでHiDriveからS3へのジョブを自動実行できます。よくある設定としては、深夜2時のフル同期や、営業時間中の1時間ごとの差分同期があります。ジョブウィザードのステップ4にあるスケジュールシミュレーターでは、保存を確定する前に次の10回の実行時刻をプレビューできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated HiDrive to S3 backup in RcloneView" class="img-large img-center" />

無人運転が始まると、**Transferring** タブでは各スケジュール実行のリアルタイムの転送速度とファイル数が表示され、**Job History** ではすべての実行結果、転送バイト数、エラー詳細が記録されます — バックアップの説明責任を果たすための完全な監査証跡です。

## Folder Compareで同期の完全性を検証する

初回の同期が完了したら、RcloneViewの **Folder Compare** 機能を使ってHiDriveとS3が実際に同期されているかを確認します。比較ビューで両方のフォルダを開くと、RcloneViewが左側のみに存在するファイル、右側のみに存在するファイル、サイズが異なるファイルをハイライト表示します — ファイルリストを手動で照合することなく、欠落や不一致を見つけられます。重要度の高いアーカイブについては、同期ジョブのAdvanced Settingsで **checksum** 比較を有効にし、サイズだけでなくハッシュ値によるファイル整合性の検証を行ってください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Amazon S3 folder contents in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. **Remote > New Remote > HiDrive** からOAuthブラウザログインを使ってHiDriveアカウントを追加します。
3. **Remote > New Remote > Amazon S3** からIAM認証情報を使ってAmazon S3バケットを追加します。
4. **Home > Sync** でHiDriveからS3への同期ジョブを作成し、まずDry Runを実行してから本番実行します。

自動スケジューリングを有効にすれば、HiDriveのファイルは設定したスケジュールに従ってS3へと流れ込み、継続的な手作業なしにプロバイダー間のバックアップを実現できます。

---

**関連ガイド:**

- [HiDriveクラウドストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Amazon S3を管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [HiDriveをGoogle Driveに同期 — RcloneViewによるクラウドバックアップ](https://rcloneview.com/support/blog/sync-hidrive-to-google-drive-rcloneview)

<CloudSupportGrid />

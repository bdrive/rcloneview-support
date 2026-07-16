---
slug: migrate-onedrive-to-google-drive-rcloneview
title: "OneDriveからGoogle Driveへの移行方法 — RcloneViewを使ったステップバイステップ転送ガイド"
authors:
  - tayson
description: "Microsoft 365からGoogle Workspaceへの切り替えをお考えですか？ RcloneViewを使ってフォルダ構造を維持しながら、OneDriveからGoogle Driveへすべてのファイルを移行する方法を解説します。"
keywords:
  - migrate onedrive to google drive
  - onedrive to google drive transfer
  - switch microsoft 365 to google workspace
  - move files onedrive google drive
  - onedrive google drive migration tool
  - cloud migration tool
  - onedrive to gdrive sync
  - transfer onedrive files
  - microsoft to google migration
  - onedrive migration tool
tags:
  - onedrive
  - google-drive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDriveからGoogle Driveへの移行方法 — RcloneViewを使ったステップバイステップ転送ガイド

> 組織がGoogle Workspaceへ移行することになった。今度はチームのワークフローを止めずに、数テラバイトのOneDriveファイルをGoogle Driveへ移す必要がある。ここでは、その正しいやり方を解説します。

生産性スイートを切り替える場合でも、クラウドアカウントを統合する場合でも、並行バックアップを維持する場合でも、OneDriveからGoogle Driveへの移行には慎重な計画が必要です。RcloneViewが面倒な作業を代行します — クラウド間の直接転送によってフォルダ構造を維持しつつ、ファイル形式の違いも自動的に処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜダウンロードして再アップロードするだけではダメなのか

手動での方法 — OneDriveからダウンロードし、Google Driveへアップロードする — には深刻な欠点があります。

- **データセット全体分のローカルディスク容量が必要**です。
- **時間が倍かかる** — 直接転送ではなく、ダウンロード＋アップロードになるため。
- **増分更新ができない** — 転送中の変更は失われてしまいます。
- **大規模データセットで破綻する** — 数GBを超えるファイルではブラウザのアップロードが失敗します。

RcloneViewはクラウド間で直接転送するため、必要なのは帯域幅だけで、ローカルストレージは不要です。

## 移行手順

### 1) 両方のアカウントを接続する

RcloneViewにOneDriveとGoogle Driveをリモートとして追加します。

<img src="/support/images/en/blog/new-remote.png" alt="Add OneDrive and Google Drive remotes" class="img-large img-center" />

### 2) 評価と計画

両方のクラウドを並べて閲覧します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse OneDrive and Google Drive side by side" class="img-large img-center" />

移行前に、以下を確認してください。

- **合計サイズ** — どれだけのデータを移動する必要があるか？
- **ファイル形式** — Officeドキュメントは自動的に変換されます（下記参照）。
- **共有フォルダ** — OneDriveの共有アイテムは別途対応が必要です。
- **パスの長さ** — Google Driveには400文字のパス長制限があります。

### 3) ファイル形式の扱い

転送時、OfficeドキュメントはそのままGoogle Driveにアップロードできます。Google Driveは`.docx`、`.xlsx`、`.pptx`をネイティブに開くことをサポートしています。任意で、移行後にGoogleネイティブ形式へ変換することもできます。

| OneDriveの形式 | Google Driveでの扱い |
|-----------------|---------------------|
| .docx | ネイティブに開く、またはGoogleドキュメントへ変換 |
| .xlsx | ネイティブに開く、またはGoogleスプレッドシートへ変換 |
| .pptx | ネイティブに開く、またはGoogleスライドへ変換 |
| 画像、PDF | そのまま転送 |

### 4) 移行を実行する

OneDriveからGoogle Driveへの**コピー**ジョブを作成します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run OneDrive to Google Drive migration" class="img-large img-center" />

同期ではなく**コピー**を使用してください — コピーはファイルを追加するだけで、転送先から削除することはありません。

### 5) 進行状況を監視する

移行状況をリアルタイムで確認します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

### 6) 検証する

移行後、両方を比較します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## 特殊なケースへの対応

### SharePointドキュメントライブラリ

SharePointライブラリは個人のOneDriveとは別のものです。チームサイトを移行するには、RcloneViewでSharePointを別のリモートとして追加してください。

### OneDrive for Business と個人用の違い

OneDrive for Businessから移行する場合、OAuthの設定は個人用OneDriveとは異なります。RcloneViewは両方の認証フローを案内してくれます。

### 大規模移行（500GB以上）

非常に大規模なデータセットの場合。

- **バッチ単位で移行する** — まず重要なフォルダから始め、その後に副次的なデータへ進みます。
- **フィルタルールを使う** — ファイル形式や日付で優先順位をつけます。
- **時間外にスケジュールする** — レート制限を避けるため、夜間や週末に実行します。
- **リトライを有効にする** — v1.3のリトライ機能が一時的な失敗に対応します。

### 移行期間中

チームが移行する間、両方のクラウドを同期させておきます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

全員が切り替わるまで、OneDrive → Google Driveの毎日の同期をスケジュールしてください。

## 移行後のチェックリスト

1. **ファイル数を確認する** — フォルダ比較機能ですべてのファイルが転送されたことを確認します。
2. **ファイルアクセスをテストする** — Google Driveで主要なドキュメントを開いてみます。
3. **共有設定を更新する** — Google Driveでフォルダをチームメンバーと再共有します。
4. **アプリ連携を更新する** — スクリプト、ツール、ワークフローの参照先をGoogle Driveに変更します。
5. **OneDriveを有効なままにしておく** — 念のため、古いアカウントを30日間維持します。
6. **廃止する** — すべてが正常に動作することを確認した後、OneDriveのサブスクリプションを解約します。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **OneDriveとGoogle Driveをリモートとして追加**します。
3. **コピージョブを実行**してファイルを転送します。
4. **フォルダ比較で検証**します。
5. 移行期間中は**増分同期をスケジュール**します。

移行はファイルの紛失を心配するだけでも十分にストレスがかかるものです。転送はRcloneViewに任せて、移行計画に集中しましょう。

---

**関連ガイド：**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Google DriveからOneDriveへの移行](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

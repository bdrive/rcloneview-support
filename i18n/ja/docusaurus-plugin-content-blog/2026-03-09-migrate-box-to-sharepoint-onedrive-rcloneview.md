---
slug: migrate-box-to-sharepoint-onedrive-rcloneview
title: "BoxからSharePointまたはOneDriveへ移行する方法 — RcloneViewによるエンタープライズクラウド移行"
authors:
  - tayson
description: "BoxからMicrosoft 365への移行をお考えですか？RcloneViewを使ってフォルダ構造を維持したまま、BoxからSharePoint OnlineまたはOneDrive for Businessへファイルを移行する方法を解説します。"
keywords:
  - migrate box to sharepoint
  - box to onedrive migration
  - box to microsoft 365 transfer
  - box sharepoint migration tool
  - move files from box
  - box migration tool
  - enterprise cloud migration
  - box to office 365
  - box data migration
  - box alternative migration
tags:
  - box
  - sharepoint
  - onedrive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# BoxからSharePointまたはOneDriveへ移行する方法 — RcloneViewによるエンタープライズクラウド移行

> あなたの会社はMicrosoft 365への統合を決定しました。ステップ1：BoxからSharePointとOneDriveへすべてのファイルを移行すること。ステップ2：その過程で何も失わないこと。

Boxはエンタープライズのファイル共有において定番の存在でしたが、多くの組織がクラウドエコシステムをMicrosoft 365に統合しつつあります。BoxからSharePoint OnlineやOneDrive for Businessへの移行は大きなプロジェクトです — 特に長年蓄積されたデータ、複雑なフォルダ構造、共有ワークスペースを扱う場合はなおさらです。RcloneViewを使えば、これを管理しやすくできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 移行計画

### Box環境の評価

移行前に、保有しているものを棚卸ししましょう。

- **個人フォルダ** → 個々のOneDriveアカウントへ移行。
- **共有フォルダ／ワークスペース** → SharePointのドキュメントライブラリへ移行。
- **アーカイブデータ** → SharePointではなく、より安価なストレージ（S3、B2）への移動を検討。
- **総データ量** — タイムラインとアプローチを決定する要素。

### 移行先マッピング

| Box移行元 | Microsoft 365移行先 |
|-----------|--------------------------|
| My Files | OneDrive for Business |
| 共有フォルダ | SharePointチームサイト |
| 部門フォルダ | SharePointドキュメントライブラリ |
| アーカイブ／コールドデータ | OneDriveまたはAzure Blob Storage |

## 段階的な移行手順

### 1) BoxとMicrosoftのリモートを追加

RcloneViewで両方のサービスを接続します。

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and SharePoint remotes" class="img-large img-center" />

SharePointの場合は、OneDrive Businessリモートとして追加し、SharePointサイトのURLを指定します。

### 2) 閲覧して比較する

左側にBox、右側にSharePoint/OneDriveを開きます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Box and SharePoint side by side" class="img-large img-center" />

### 3) フェーズごとに転送する

一度にすべてを移行しようとしないでください。優先順位を決めます。

**フェーズ1：アクティブなプロジェクト** — 日常的に必要なファイル。
**フェーズ2：共有ワークスペース** — チームフォルダとコラボレーションスペース。
**フェーズ3：アーカイブ** — 古いプロジェクトと過去のデータ。

### 4) コピージョブを実行する

各フェーズごとにコピージョブを作成します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Box to SharePoint migration job" class="img-large img-center" />

### 5) 各フェーズを検証する

各フェーズの後、移行元と移行先を比較します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box to SharePoint migration" class="img-large img-center" />

## 制限事項への対処

### ファイル名の制限

SharePoint/OneDriveはBoxよりも厳格な命名規則を持っています。

- 使用できない文字：`" * : < > ? / \ |`
- ファイル名の先頭または末尾にスペースを使用できません。
- 最大パス長：400文字。

これらの変換の多くは、転送中にRcloneが自動的に処理します。

### Box Notes

Box Notesは独自形式であり、Microsoft 365に直接対応するものはありません。PDFとしてエクスポートするか、OneNote/Wordへ手動でコピーする必要があります。

### 権限と共有

RcloneViewはファイルを転送しますが、共有権限は転送しません。移行後、SharePoint/OneDrive上で共有設定を行う必要があります。これは別のステップとして計画してください。

### レート制限

BoxとSharePointの両方にAPIレート制限があります。

- **Box**：プランによって異なります（通常10〜20リクエスト／秒）。
- **SharePoint**：Microsoftは使用パターンに基づいてスロットリングを行います。

RcloneViewはこれらの制限を尊重します。大規模な移行の場合は、業務時間外に転送をスケジュールし、リトライ機能（v1.3）を使用してください。

## 移行期間中にBoxとSharePointを同期させる

全員が同じ日に切り替えるわけではありません。両方のプラットフォームを最新の状態に保つために、同期をスケジュールしましょう。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync during Box to SharePoint transition" class="img-large img-center" />

これにより、チームはデータの欠落なしに段階的に移行する時間的余裕を得られます。

## 大規模転送を監視する

エンタープライズの移行はテラバイト単位のデータを扱います。進捗を監視しましょう。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Box to SharePoint migration" class="img-large img-center" />

## 移行ワークフロー用のバッチジョブ

v1.3のバッチジョブを使用して、移行シーケンス全体を自動化できます。

1. Box → SharePointへコピー（アクティブなプロジェクト）。
2. Box → OneDriveへコピー（個人ファイル）。
3. BoxとSharePointを比較して検証。
4. 完了時にSlack通知を送信。

## 移行後の作業

1. **すべてのファイルを検証** — 最終的なフォルダ比較を実行。
2. **SharePointの権限を設定** — 共有構造を再構築。
3. **チームをトレーニング** — 新しい場所でファイルを見つけられるようユーザーを支援。
4. **30日間監視** — フォールバックとしてBoxを稼働状態に保つ。
5. **Boxを廃止** — すべてが安定していることを確認した後にキャンセル。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**。
2. **BoxとSharePoint/OneDriveをリモートとして追加**。
3. **移行フェーズを計画**。
4. 各フェーズごとに**コピージョブを実行**。
5. 各フェーズ後に**フォルダ比較で検証**。
6. 移行期間中は**同期をスケジュール**。

エンタープライズの移行が、エンタープライズ級の複雑さを意味する必要はありません。

---

**関連ガイド：**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [クラウド転送の帯域幅制限設定](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />

---
slug: migrate-onedrive-to-backblaze-b2-rcloneview
title: "RcloneViewでOneDriveからBackblaze B2へ移行し、手頃な価格のクラウドバックアップを実現"
authors:
  - tayson
description: "RcloneViewを使ってOneDriveのファイルをBackblaze B2に移行し、ストレージコストを削減しましょう。個人データやビジネスデータをより安価なS3互換ストレージへ移動するためのステップバイステップガイドです。"
keywords:
  - migrate onedrive to backblaze b2
  - onedrive to b2 migration
  - rcloneview onedrive backblaze
  - move onedrive to backblaze b2
  - rclone onedrive backblaze b2
  - onedrive cheaper storage alternative
  - backblaze b2 from onedrive
  - cloud storage cost reduction
  - onedrive backup to b2
  - transfer onedrive backblaze
tags:
  - RcloneView
  - onedrive
  - backblaze-b2
  - cloud-migration
  - migration
  - backup
  - cost-optimization
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでOneDriveからBackblaze B2へ移行し、手頃な価格のクラウドバックアップを実現

> OneDriveのストレージコストは、特にアーカイブ用途が多いチームやテラバイト単位のデータを扱う個人にとって、積み重なると大きな負担になります。Backblaze B2は、S3互換のオブジェクトストレージをはるかに低価格で提供しています。RcloneViewを使えば、この移行を簡単に行えます。

OneDriveはアクティブなコラボレーションには便利ですが、長期アーカイブ、コールドバックアップ、大容量のメディアコレクションにとっては、必ずしも最もコスト効率の良い選択肢ではありません。月額約$0.006/GBのBackblaze B2は、あまりアクセスしないデータに関しては、OneDriveのユーザー単位のプランよりも大幅に安価です。アクティブな作業ファイルはOneDriveに残しつつ、アーカイブデータをOneDriveからBackblaze B2に移動することは、賢いコスト最適化戦略であり、RcloneViewを使えばコマンドライン操作の知識がなくても実行できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## この移行が適しているケースは？

- Microsoft 365のストレージ容量を超過しており、アップグレードを避けたい場合。
- OneDrive内に、めったにアクセスしない大容量のメディアアーカイブ（写真、動画、プロジェクトファイル）がある場合。
- OneDriveをBackblaze B2に置き換え、それを主要なバックアップ先にしたい場合。
- ネイティブなrcloneサポートを備え、他リージョンへのegress（データ転送）料金が発生しないS3互換ストレージを求めている場合。

## コスト比較：OneDrive vs Backblaze B2

| ストレージ | 1TB/月 | 5TB/月 |
|---------|-----------|-----------|
| OneDrive（Microsoft 365） | 約$9.99/ユーザー | 約$50以上（ユーザー単位の上限あり） |
| Backblaze B2 | 約$6.00 | 約$30.00 |

アーカイブ用途が多いユーザーの場合、Backblaze B2はストレージ費用を40〜60%削減できます。

## ステップ1 — RcloneViewでOneDriveを接続する

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive in RcloneView" class="img-large img-center" />

1. RcloneViewを開き、**New Remote**をクリックします。
2. **Microsoft OneDrive**を選択します。
3. **Authorize**をクリックすると、Microsoft OAuth用のブラウザウィンドウが開きます。
4. ログインしてアクセスを許可します。
5. OneDriveの種類（Personal、Business、またはSharePoint）を選択し、リモートを`onedrive`という名前で保存します。

## ステップ2 — RcloneViewでBackblaze B2を接続する

1. [Backblazeダッシュボード](https://www.backblaze.com)にログインし、**App Keys**に移動します。
2. 対象バケットに対する**Read and Write**アクセス権を持つ新しいアプリケーションキーを作成します。
3. **keyID**と**applicationKey**を控えておきます。
4. RcloneViewで、種類が**Backblaze B2**の新しいリモートを追加します。
5. keyIDとapplicationKeyを入力し、`b2`という名前を付けて保存します。

## ステップ3 — 移行先のバケットを作成する

移行を行う前に、Backblaze B2で移行先のバケットを作成します。

- **バケット名**：一意な名前を選択します（例：`onedrive-archive-2026`）
- **バケットタイプ**：Private（個人用バックアップの場合）またはPublic（メディア配信の場合）
- **バージョニング**：任意 — 上書きされたファイルの復元を可能にします

## ステップ4 — 移行を実行する

RcloneViewで**Jobs**を開き、以下のように設定します。

| 設定項目 | 値 |
|---------|-------|
| Source | `onedrive:/Archives/`（移行対象のフォルダに応じて変更） |
| Destination | `b2:onedrive-archive-2026/` |
| Mode | **Copy**（検証が完了するまでOneDrive側のコピーを保持） |
| Transfers | 同時4〜8（帯域幅に応じて調整） |
| Checksum | 有効 |

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transfer OneDrive to Backblaze B2 in progress" class="img-large img-center" />

**Run**をクリックします。RcloneViewは、ファイルごとの進捗状況、転送速度、完了予想時間を表示します。

## ステップ5 — フォルダ比較で移行結果を検証する

ジョブが完了したら、RcloneViewの**Folder Comparison**機能を使って、すべてのOneDriveファイルがB2に正しく反映されているか確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive to B2 migration" class="img-large img-center" />

相違があればハイライト表示されます。ジョブを再実行すると、rcloneはすでに存在するファイルをスキップし、不足しているファイルのみを再転送します。

## ステップ6 — 継続的なバックアップをスケジュールする（任意）

今後もB2をOneDriveのライブバックアップとして維持したい場合は、以下の手順を行います。

1. ジョブモードをCopyから**Sync**に切り替えます。
2. **Schedule**を開き、繰り返しの間隔を設定します（例：毎晩午前2時）。
3. OneDrive内の新規または変更されたファイルが自動的にB2にバックアップされます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to B2 backup" class="img-large img-center" />

## 大規模なOneDrive移行のためのヒント

- **フォルダ単位で移行する** — 大規模なアカウントは100〜500GBのチャンクに分割します。
- **ピーク時間帯を避ける** — Microsoftは高負荷時にOneDrive APIアクセスを制限します。
- **帯域幅制限を利用する** — 業務時間中の日常業務への影響を避けるため、RcloneViewで制限を設定します。
- **OneDriveをそのまま維持する** — B2側の検証が完了するまで、OneDriveからファイルを削除しないでください。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. RcloneViewのセットアップウィザードから**OneDriveとBackblaze B2のリモートを追加**します。
3. Backblazeダッシュボードで**B2バケットを作成**します。
4. **コピー、検証を行った上で判断**します — OneDriveをアクティブなストレージとして維持するか、完全にB2へ切り替えるかを決めましょう。

Microsoftへの依存を減らし、コストを抑えつつS3互換性も得られる — Backblaze B2は、OneDriveアーカイブの移行先として賢い選択です。

---

**関連ガイド：**

- [DropboxをBackblaze B2にバックアップする](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Google DriveをOneDriveに移行する](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [隠れたクラウドストレージコスト — RcloneViewで節約する](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />

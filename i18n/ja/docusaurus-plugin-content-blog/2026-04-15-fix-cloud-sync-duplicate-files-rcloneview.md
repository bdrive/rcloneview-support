---
slug: fix-cloud-sync-duplicate-files-rcloneview
title: "クラウド同期で重複ファイルが作成される問題を修正 — RcloneViewでの解決方法"
authors:
  - tayson
description: "重複ファイルを作成するクラウド同期を修正 — 根本原因を特定し、重複を削除し、再発を防ぐためにRcloneViewの同期ジョブを設定します。"
keywords:
  - cloud sync duplicates
  - sync creating duplicate files
  - duplicate file fix
  - RcloneView deduplication
  - cloud backup duplicates
  - sync conflict files
  - fix duplicate uploads
  - cloud storage cleanup
  - rclone duplicate fix
  - cloud sync misconfiguration
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - duplicates
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウド同期で重複ファイルが作成される問題を修正 — RcloneViewでの解決方法

> 重複ファイルを生成するクラウド同期は、特定の設定ミスを示しています — RcloneViewのジョブタイプ設定とFolder Compareを使えば、原因の診断、クリーンアップ、再発防止を簡単に行えます。

同じ名前で更新日時が異なるコピーや、`-copy`や`(1)`のようなサフィックスが付いたファイルなど、重複ファイルを生成するクラウド同期操作は、実行のたびにストレージコストを増大させ、根本的な設定上の問題を示しています。RcloneViewはrcloneの決定論的な同期エンジンを使用しており、重複が発生する場合、根本原因はほぼ常にジョブタイプの不一致、競合する操作、または双方向同期の競合です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 同期が重複を生成する理由

最も頻繁な原因は、**Sync**を使うべきところで**Copy**ジョブタイプを使用していることです。Copyジョブは常に転送先にファイルを追加します — 転送先に前回実行時のファイルがすでに存在する場合、2回目のコピーで新しいタイムスタンプや追加のサフィックスを持つ重複ファイルが作成されます。**Job Manager**で**Sync**ジョブタイプに切り替えることで、転送先が転送元を正確に反映するようになります。転送先の余分なファイルは削除され、差分のみが転送されます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring Sync job type in RcloneView Job Manager to prevent duplicates" class="img-large img-center" />

RcloneViewの**Bidirection**同期モード(現在ベータ版)は、同期実行の間に両側で同じファイルが変更された場合に競合コピーを生成することがあります。rcloneは両方のバージョンを保持するために片側に競合コピーを作成します。本番環境のワークフローでは、一方向同期(デフォルトの「転送先のみ変更」モード)を使用することでこれを完全に防止できます — 双方向同期は本当に必要な場合にのみ使用してください。

## 既存の重複ファイルの検出と削除

RcloneViewの**Folder Compare**を使用して、2つの場所に存在する同じ名前で異なる内容のファイルを特定します。「different files」フィルターはサイズが一致しないファイルを強調表示し、「same files」フィルターは完全に一致するファイルを確認します。両側に存在するが重複すべきではないファイルは、Folder Compareの削除アクションでどちらか一方から削除できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify duplicate files in RcloneView" class="img-large img-center" />

単一のクラウド内で大量の既存の重複ファイルをクリーンアップするには、RcloneViewの組み込みの**Terminal**タブを使用して、適切な重複排除戦略フラグを付けた`rclone dedupe`を実行できます。これにより、名前に関係なく内容が同一のファイルを特定し、1つのコピーのみを保持します。このターミナルは、RcloneViewのインターフェースを離れることなく、rclone CLIへの完全なアクセスを提供します。

## 再発を防ぐための同期設定

**Job Manager**で、重複のないクリーンな同期動作のために以下の設定を確認してください。
- ミラー操作には(Copyではなく)**Sync**ジョブタイプを使用する
- 安定した動作のために、同期方向を**「転送先のみ変更」**(一方向)に設定する
- 新しい転送先での最初の実行前に**Dry Run**を有効にして操作リストを確認する

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing clean sync runs with no duplicates in RcloneView" class="img-large img-center" />

Advanced Settingsでチェックサム比較を有効にすると、同期がより正確になります — タイムスタンプとサイズだけでなく、ハッシュとサイズの両方でファイルが比較されるため、サイズは同じでも内容が異なるファイルが同一として扱われるケースを防止できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Job Managerで重複を発生させているジョブを特定し、必要に応じて**Copy**ジョブを**Sync**に切り替えます。
3. **Folder Compare**を使用して、転送元と転送先の間の既存の重複ファイルを検出・削除します。
4. 新しい転送先でジョブを実行する前に**Dry Run**を有効にし、実行前に動作を確認します。

クラウド同期における重複ファイルは解決可能な設定上の問題です — RcloneViewで適切なジョブタイプと同期方向の設定を行うことで、そもそも重複が発生しないようにできます。

---

**関連ガイド:**

- [RcloneViewでクラウドストレージの重複ファイルを検出・削除する](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-storage-rcloneview)
- [Sync vs Copy vs Move — RcloneViewで解説する違い](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Dry Run — RcloneViewで転送前に同期をプレビューする](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />

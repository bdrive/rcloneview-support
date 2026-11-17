---
slug: fix-one-way-sync-deleted-destination-files-rcloneview
title: "一方向同期で宛先ファイルが削除される問題の解決 — RcloneViewでバックアップを守る"
authors:
  - casey
description: "一方向同期でバックアップからファイルが消えましたか?その原因と、RcloneViewのCopyジョブ、Dry Run、Folder Compareで意図しない削除を防ぐ方法を解説します。"
keywords:
  - 同期で宛先ファイルが削除された
  - 一方向同期 ファイル削除
  - rclone sync vs copy
  - 同期による削除を防ぐ
  - クラウドバックアップ ファイル消失
  - RcloneView dry run
  - ミラー同期 ファイル削除
  - 同期後のファイル復元
  - RcloneView トラブルシューティング
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 一方向同期で宛先ファイルが削除される問題の解決 — RcloneViewでバックアップを守る

> 同期後にバックアップからファイルが消えた場合、ジョブはおそらく同期が本来行うように設計されたことをそのまま実行しています。適切なジョブタイプを選び、先に変更内容をプレビューする方法を紹介します。

よくある驚きの例です。ノートPCのフォルダーをBackblaze B2に同期したところ、バケットにしかなかった古いファイルが消えていました。これはバグではありません。一方向同期は宛先をソースと一致させるもので、ソースにないファイルを削除することも含まれます。RcloneViewには、これを事前に把握し、何も削除しないジョブタイプを選ぶためのツールがあります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 一方向同期がファイルを削除する理由

同期ウィザードでは、一方向の方向は **"Modifying destination only"** と表示されます。ソースには手を加えず、宛先がソースをミラーするまで宛先を変更します。宛先にあってソースに対応するものがないファイルは削除されます。

よくある原因:

- **ソースフォルダーの誤り。** `Projects` ではなく `Projects/2026` を選ぶと、他の年のフォルダーがすべて宛先側の「余分な」ものに見えます。
- **ソースの整理。** 空き容量を作るためにローカルの古いファイルを削除し、クラウド側のコピーはアーカイブとして残ると期待していた場合です。
- **複数のソース、1つの宛先。** 2台のマシンが同じフォルダーに同期すると、互いのファイルを削除し合います。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job in RcloneView" class="img-large img-center" />

## 宛先がアーカイブならCopyを使う

宛先にこれまで送ったものをすべて残したい場合は、SyncではなくCopyジョブ(**Copy**)を使います。Job ManagerにはSync、Copy、Move、Delete、Download、Uploadのジョブタイプがあります。Copyは新規ファイルと変更されたファイルを転送しますが、宛先からは何も削除しないため、写真アーカイブや長期のプロジェクトバックアップに適しています。

Syncは、作業フォルダーを2つ目のクラウドにそのまま再現したい場合など、本当のミラーにだけ使いましょう。

## Dry Runで削除をプレビューする

新規作成または編集した同期ジョブを実際に実行する前に、**Dry Run** を実行してください。何も変更せずに、コピーされるファイルと削除されるファイルの一覧を表示します。削除リストに残しておきたいファイルが含まれていたら、中止してソースパスを修正するかCopyに切り替えましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job after checking the Dry Run preview in RcloneView" class="img-large img-center" />

## Folder Compareで差分を確認する

**Folder Compare** は2つのフォルダーを並べて表示します。right-onlyファイルでフィルターすると、宛先にはあるがソースにはないファイル、つまり同期で削除されるファイルを正確に確認できます。その中に大切なファイルがあれば、同期の前に **Copy left** でソースに戻すか、別のフォルダーに同期して影響を避けましょう。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing destination-only files in RcloneView" class="img-large img-center" />

マウント専用ツールとは異なり、RcloneViewは同期とフォルダー比較も行え、FREE Licenseで利用できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. Job Managerで既存のジョブを開き、ソースと宛先のパスを確認します。
3. アーカイブ用途のジョブはSyncからCopyに変更し、残すすべての同期ジョブでDry Runを実行します。
4. Folder Compareでright-onlyファイルを確認し、実行のたびに **Job History** をチェックします。

すでにファイルが消えている場合は、まずプロバイダーのゴミ箱やバージョン履歴を確認し、同じことが起きないようにジョブを作り直してください。

---

**関連ガイド:**

- [Dry Run — RcloneViewで転送前に同期をプレビューする](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [RcloneViewで誤って削除したクラウドファイルを復元する](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)
- [RcloneViewでクラウド同期後に見つからないファイルを解決する](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />

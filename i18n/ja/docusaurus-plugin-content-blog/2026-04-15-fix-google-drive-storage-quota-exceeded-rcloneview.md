---
slug: fix-google-drive-storage-quota-exceeded-rcloneview
title: "Google Driveのストレージ容量超過を解決 — RcloneViewでファイルを外部に転送"
authors:
  - tayson
description: "Google Driveのストレージ容量超過を解決 — RcloneViewを使って他のクラウドへファイルを移動し、容量を空け、Driveのストレージを管理する。"
keywords:
  - Google Drive ストレージ 満杯
  - 容量超過 解決
  - Google Drive クリーンアップ
  - Google Driveからファイルを移動
  - Google Driveの容量を空ける
  - RcloneView ストレージ管理
  - クラウドストレージ オーバーフロー
  - Drive 容量問題 解決策
  - Google Drive アーカイブ
  - Google Drive 容量回復
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - tips
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Driveのストレージ容量超過を解決 — RcloneViewでファイルを外部に転送

> Google Driveの容量超過はアップロードをブロックし、作業を妨げます。RcloneViewは容量を最も消費しているファイルを特定し、コスト効率の良いアーカイブストレージへ移動することで、即座に容量を解放します。

Google Driveで「ストレージの空き容量がありません」と表示されたり、アップロードが容量エラーで失敗し始めたりすると、追加のストレージを購入するか、コンテンツを外部に移動するかという、おなじみの選択を迫られます。RcloneViewは第三の道を提供します。大容量または古くなったファイルを効率的に特定し、Google Driveからより安価なストレージ階層へ移動させることで、データを失うことなく容量を解放します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 容量を消費しているものを特定する

RcloneViewでGoogle Driveを接続します（**Remoteタブ > New Remote > Google Drive**、OAuthログイン）。接続後、エクスプローラー内の任意のフォルダを右クリックし、**Get Size**を選択すると、そのフォルダがどれだけの容量を消費しているかを確認できます。トップレベルのフォルダを体系的に確認していきましょう。動画のエクスポートファイル、非圧縮のプロジェクトファイル、重複したデータセットは、容量が満杯になったDriveアカウントで最もよく見られる原因です。

<img src="/support/images/en/blog/new-remote.png" alt="Browsing Google Drive in RcloneView to identify storage usage" class="img-large img-center" />

RcloneViewの**Folder Compare**機能は重複コンテンツの特定に役立ちます。名前が似た2つのフォルダを比較して、両方の場所に存在するファイル（同じ内容が二重にバックアップされている）を見つけ、片方を安全に削除できるようにします。比較結果の「同一ファイル」フィルターにより、2つの場所間の完全一致を正確に特定できます。

## アーカイブストレージへファイルを移動する

削除すべき最大のフォルダを特定したら、RcloneViewでアーカイブ用のリモートを設定します。**Amazon S3**、**Backblaze B2**、**Wasabi**は、コスト効率の良いコールドストレージ階層として適しています。**Job Manager**で**Move**ジョブを作成します。転送元は大容量または古いファイルを含むGoogle Driveフォルダ、転送先はアーカイブ用のバケットです。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Moving Google Drive files to Backblaze B2 archive in RcloneView" class="img-large img-center" />

Move操作はファイルを転送先にコピーした後、転送元から削除します。これにより、データを保持したまま、Driveの容量を即座に解放できます。共同作業でのアクセスが不要になった、完了済みプロジェクト200GBをDriveに保管している動画編集者は、1回のMoveジョブでB2へ移動させることで、容量全体を解放できます。RcloneViewの**Transferring**タブでは進行状況をリアルタイムで確認できます。

## 今後の容量問題を防ぐ

目先のオーバーフローを解決した後は、RcloneViewのスケジュール機能（PLUSライセンス）を使って、定期的なアーカイブポリシーを設定しましょう。**Max File Age**フィルタリング（例えば180日以上経過したファイル）を設定したSyncジョブは、毎月のスケジュールでDriveから古くなったコンテンツを自動的にコールドストレージへアーカイブします。これにより、Driveは蓄積の場ではなく、アクティブな作業用の階層として維持されます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive archiving in RcloneView" class="img-large img-center" />

**Job History**タブは各アーカイブ実行を記録し、何がいつDriveから移動したかを明確に確認できます。これは、後で古いアーカイブファイルにアクセスする必要がある際に役立ちます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. RcloneViewでGoogle Driveを接続し、**Get Size**を使って最大のフォルダを特定します。
3. アーカイブ用ストレージ（S3、B2、Wasabi）を2つ目のリモートとして追加します。
4. Job Managerで、容量の大きいフォルダからアーカイブ用リモートへの**Move**ジョブを作成します。

Google Driveが満杯になるのは、ストレージの限界ではなく管理上の問題です。RcloneViewは、コンテンツを適切な階層に振り分け、Driveを機能的な状態に保つためのツールを提供します。

---

**関連ガイド：**

- [RcloneViewでGoogle Driveの容量制限とレート制限APIエラーを解決する](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Google Driveクラウドストレージの管理 — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Backblaze B2クラウドストレージの管理 — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

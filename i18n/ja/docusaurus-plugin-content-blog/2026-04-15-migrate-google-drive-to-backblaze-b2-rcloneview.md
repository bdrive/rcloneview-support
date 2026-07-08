---
slug: migrate-google-drive-to-backblaze-b2-rcloneview
title: "Google DriveからBackblaze B2へ移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewでGoogle DriveからBackblaze B2へ移行 — クラウド間でファイルを転送し、コスト効率よくデータをアーカイブし、GUIで移行を検証します。"
keywords:
  - Google Drive to Backblaze B2
  - migrate Google Drive
  - Backblaze B2 backup
  - cloud migration tool
  - Google Drive export
  - RcloneView migration
  - cloud-to-cloud transfer
  - S3 archive Google Drive
  - Google Drive archiving
  - Backblaze cold storage
tags:
  - RcloneView
  - google-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google DriveからBackblaze B2へ移行 — RcloneViewでファイルを転送

> Google Driveはコラボレーション向けに作られており、コールドアーカイブ用ではありません — RcloneViewはローカルディスクを経由せずにDriveのコンテンツを直接Backblaze B2へ移行し、大規模にストレージコストを削減します。

Google Driveはリアルタイムのコラボレーションに優れていますが、大規模で費用対効果の高い長期アーカイブ向けには設計されていません。Backblaze B2はS3互換のオブジェクトストレージをGoogleのストレージコストのごく一部で提供しており、日常的なアクセスを必要としない大規模なデータセット、動画プロジェクト、業務記録のアーカイブ先として人気があります。RcloneViewは両方のクラウド間で直接移行を処理します — ローカルディスクの中継は不要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを設定する

RcloneViewでは、まずGoogle Driveを追加します — **Remoteタブ > New Remote > Google Drive** — そしてブラウザのOAuthで認証します。次にBackblaze B2を追加します。プロバイダー一覧から選択し、Application Key IDとApplication Keyを入力します。両方のリモートはすぐに有効になります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

RcloneViewのデュアルパネルエクスプローラーで両方のリモートを並べて開きます。この直接的なビューは移行計画に役立ちます。左側でDriveフォルダの内容を確認し、右側でターゲットとなるB2バケットの構造を確認し、転送を開始する前に優先すべきフォルダを特定します。

## 移行ジョブを設定する

**Job Manager**を開き、新しい同期またはコピージョブを作成します。ソースをGoogle Driveのフォルダ（または段階的な移行の場合は特定のサブフォルダ）に設定し、宛先をBackblaze B2のバケットパスに設定します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring Google Drive to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

大規模な移行 — 例えば動画制作会社がDriveからB2へ2TBの完成プロジェクトを移動する場合 — では、ジョブのAdvanced Settingsでマルチスレッド転送を有効にし、同時ファイル数を増やします。**Dry Run**機能を使うと、実際のジョブを実行する前にどのファイルが転送されるかを正確に確認でき、意図しない上書きやコンテンツの取りこぼしを防げます。チェックサム検証を有効にすると、すべてのファイルがB2に無傷で到着することが保証され、これは何年もアクセスされない可能性があるアーカイブにおいて特に重要です。

## 移行後の検証とクリーンアップ

転送が完了したら、RcloneViewの**Folder Compare**を使ってGoogle DriveのソースとB2の宛先を比較します。この比較ビューでは、左側のみに存在するファイル（まだ移行されていないもの）、右側のみに存在するファイル（すでにB2にあるもの）、および一致するファイルがハイライト表示され、Driveから何かを削除する前に明確なビジュアルチェックリストが得られます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive and Backblaze B2 after migration in RcloneView" class="img-large img-center" />

比較後に移行ジョブを再度実行しても安全です — rcloneは、サイズとタイムスタンプが一致する宛先に既に存在するファイルをスキップするため、残りの差分のみが転送されます。この冪等な動作により、複数のセッションにまたがる大規模な移行でも信頼性が保たれます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Google Driveリモート（OAuthブラウザ認証）とBackblaze B2リモート（Application Key認証情報）を追加します。
3. **Job Manager**を開き、Google DriveからB2への同期またはコピージョブを作成します。
4. Dry Runを有効にしてプレビューし、その後実行します — Folder Compareで完了を検証します。

RcloneViewを使ったBackblaze B2への移行は、クラウドの送信データ転送の複雑さを排除し、CLIコマンドを一切書くことなく、検証済みでコスト効率の高いアーカイブを提供します。

---

**関連ガイド:**

- [RcloneViewでBackblaze B2からGoogle Driveへ移行](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-google-drive-rcloneview)
- [Backblaze B2クラウドストレージを管理 — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [DropboxをBackblaze B2にバックアップ — RcloneViewで手頃なストレージを実現](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />

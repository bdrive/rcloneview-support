---
slug: migrate-google-drive-to-onedrive-rcloneview
title: "Google DriveからOneDriveへ移行する方法 — RcloneViewによる完全転送ガイド"
authors:
  - tayson
description: "Google WorkspaceからMicrosoft 365への移行をお考えですか？RcloneViewを使ってGoogle Driveのすべてのファイルをフォルダ構造を保ったままOneDriveへ移行する方法を解説します。"
keywords:
  - migrate google drive to onedrive
  - google drive to onedrive transfer
  - switch google workspace to microsoft 365
  - move files google drive onedrive
  - google to microsoft migration
  - cloud to cloud migration tool
  - google drive onedrive sync
  - transfer google drive files
  - google workspace to office 365
  - cloud migration without data loss
tags:
  - google-drive
  - onedrive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google DriveからOneDriveへ移行する方法 — RcloneViewによる完全転送ガイド

> Google WorkspaceからMicrosoft 365への切り替えをお考えですか？最大の悩みは新しいアプリではなく、フォルダ構造や共有設定、そして自分の正気を保ったまま、何テラバイトものファイルをGoogle DriveからOneDriveへ移動させることです。

組織として生産性スイートを切り替える場合でも、単にGoogle DriveのコピーをOneDriveに用意したい場合でも、移行プロセスは苦痛になりがちです。Google Takeoutはフォルダ構造が失われるZIPファイルをエクスポートします。手動でのドラッグ＆ドロップは膨大な時間がかかります。RcloneViewはクラウド間の直接転送によって、フォルダを保持したまま適切に処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Takeoutを使わない理由

Google TakeoutはGoogle公式のエクスポートツールですが、移行に関しては大きな制限があります。

- **ZIPとしてエクスポート** — ライブなフォルダ構造ではなく、圧縮アーカイブが得られます。
- **整理構造が失われる** — 共有ドライブやフォルダ階層がフラット化されることがあります。
- **差分更新がない** — エクスポート中にファイルが変更されると、最初からやり直しになります。
- **手動での再アップロードが必要** — OneDriveへすべてを自分でアップロードし直す必要があります。

RcloneViewはGoogle DriveからOneDriveへファイルを直接転送し、元のフォルダ構造を保持します。

## 移行手順

### 1) 両方のアカウントを接続する

RcloneViewでGoogle DriveとOneDriveの両方をリモートとして追加します。

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Drive and OneDrive remotes" class="img-large img-center" />

### 2) 閲覧して計画を立てる

2ペインのエクスプローラーで両方のリモートを開きます。左側がGoogle Drive、右側がOneDriveです。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive and OneDrive side by side" class="img-large img-center" />

移行前にGoogle Driveの構造を確認しましょう。以下を把握してください。

- 移行対象のフォルダ（すべてを移行しない場合もあります）。
- 合計サイズ（転送時間に影響します）。
- Googleドキュメント／スプレッドシート／スライド（変換が必要です — 下記参照）。

### 3) Google独自形式のファイルを扱う

Googleドキュメント、スプレッドシート、スライドは従来型のファイルではなく、Webベースのものです。転送時、rcloneはこれらをMicrosoft Office形式に変換します。

| Google形式 | 変換後 |
|---------------|------------|
| Googleドキュメント | .docx |
| Googleスプレッドシート | .xlsx |
| Googleスライド | .pptx |
| Google図形描画 | .png |

この変換は転送中に自動的に行われます。

### 4) 転送を開始する

Google DriveからOneDriveへの**コピー**ジョブを作成します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run migration job" class="img-large img-center" />

移行には（同期ではなく）**コピー**を使用してください。コピーは転送先にファイルを追加するだけで、何も削除しません。

### 5) 進捗を監視する

転送をリアルタイムで確認します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Drive to OneDrive transfer" class="img-large img-center" />

### 6) フォルダ比較で確認する

転送完了後、両側を比較して漏れがないことを確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## 移行のヒント

### バッチ単位で移行する

大容量のドライブ（500 GB以上）の場合、一度にすべてを移行するのではなく、フォルダごとに移行しましょう。

1. 重要なフォルダ（Documents、Projectsなど）から始める。
2. 次に共有フォルダを移動する。
3. アーカイブやメディアは最後にする。

こうすることで、ユーザーは最も重要なファイルからすぐにOneDriveでの作業を開始できます。

### レート制限に対応する

Google DriveとOneDriveのどちらにもAPIレート制限があります。RcloneViewは自動的にこれを尊重しますが、非常に大規模な移行では以下も検討してください。

- [帯域幅制限](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)を使ってレート制限に達しないようにする。
- 転送をオフピーク時間帯にスケジュールする。
- 失敗した転送を自動で再試行させる（v1.3の機能）。

### 差分更新を実行する

初回の移行後、同じコピージョブを再度実行してください。新規または変更されたファイルのみが転送され、すでにコピー済みのものはスキップされます。これにより、移行中にGoogle Driveへ追加されたファイルも取りこぼしなく反映できます。

## 移行後：両方を同期状態に保つ

移行期間中に両方のクラウドを稼働させておく必要がある場合は、スケジュール同期を設定します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

これにより、完全に切り替えるまでの間、Google Driveの変更をOneDriveに反映し続けられます。

## よくある問題

### 「ファイル名が長すぎます」

OneDriveには400文字のパス制限があります。Google Driveはより緩やかです。この問題が発生した場合は、移行前に深くネストされたフォルダ名を短くしてください。

### 共有ドライブのファイル

Googleの共有ドライブ（旧チームドライブ）は、個人のMy Driveとは別のものです。別のリモートとして追加するか、共有ドライブを含めるようrcloneを設定してください。

### 大容量ファイル

OneDrive Businessは最大250 GBのファイルに対応しています。OneDrive Personalも同様に最大250 GBまで対応しています。開始前に最大サイズのファイルを確認してください。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Google DriveとOneDriveをリモートとして追加**します。
3. **コピージョブを実行**します — フォルダ構造は自動的に保持されます。
4. **フォルダ比較で確認**します — 漏れがないことを確認してください。
5. 移行が完了するまで**差分更新をスケジュール**します。

ファイル移行がプラットフォーム切り替えのボトルネックにならないようにしましょう。

---

**関連ガイド：**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [帯域幅制限の設定](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

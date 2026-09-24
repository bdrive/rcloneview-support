---
slug: migrate-zoho-workdrive-to-backblaze-b2-rcloneview
title: "Zoho WorkDriveからBackblaze B2への移行 — RcloneViewでファイルを転送する"
authors:
  - steve
description: "RcloneViewを使ってZoho WorkDriveのファイルをBackblaze B2に直接移動します。クラウド間転送、Dry Runプレビュー、ジョブスケジューリングを活用します。"
keywords:
  - Zoho WorkDriveからBackblaze B2への移行
  - Zoho WorkDrive バックアップ
  - Backblaze B2 移行
  - クラウド間転送
  - RcloneView 移行ガイド
  - Zoho WorkDriveからB2へ
  - クラウドストレージ移行ツール
  - rclone Zoho WorkDrive
  - クロスクラウドファイル転送
  - 手頃なクラウドアーカイブ
tags:
  - RcloneView
  - zoho
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDriveからBackblaze B2への移行 — RcloneViewでファイルを転送する

> ローカルディスクを経由せずに、Zoho WorkDriveのファイルを直接Backblaze B2に移動します。

日常のコラボレーションにZoho WorkDriveを使用しているチームは、完了したプロジェクトや古いクライアントフォルダのために、より安価な長期保存層を必要とすることが多く、Backblaze B2はそのアーカイブ層としてよく選ばれます。RcloneViewは両方のリモートを一つのウィンドウで接続し、クラウド間で直接ファイルをコピーするため、ドキュメントやメディアが詰まった共有ドライブをノートPCのローカルストレージ経由でダウンロードし、再アップロードする必要がありません。RcloneViewはWindows、macOS、Linuxの一つのウィンドウから90以上のプロバイダーをマウント・同期できるため、Zoho WorkDriveの閲覧からBackblaze B2へのアーカイブまで、アプリケーションを切り替える必要が一切ありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDriveとBackblaze B2を接続する

New RemoteからZoho WorkDriveをリモートとして追加し、OAuthベースの設定を選択します。Zoho WorkDriveは設定時にリージョンの選択が必要なため、設定を完了する前にアカウントに合ったデータセンターを選んでください。Backblaze B2は代わりに資格情報の入力方式を使用します — B2のキー管理ページからApplication Key IDとApplication Keyを入力すると、RcloneViewは保存前に接続を検証します。両方のリモートはExplorerパネルのタブとして表示され、並べて閲覧できるようになります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでZoho WorkDriveとBackblaze B2を新しいリモートとして追加する" class="img-large img-center" />

接続が完了したら、Remote Managerを開いて両方のエントリを確認し、最初の転送前にフォルダ範囲などの設定を調整してください。

## クラウド間転送を実行する

一方にZoho WorkDrive、もう一方にBackblaze B2バケットを配置した2パネルレイアウトを開き、移行したいフォルダをドラッグします — 異なる2つのリモート間のドラッグは常にコピーとして処理されるため、片付ける準備ができるまでZoho WorkDrive側の元のファイルはそのまま残ります。より大規模な移行には、代わりにSyncジョブを構築してください。Zoho WorkDriveをソース、B2バケットを宛先として選択し、Advanced Settingsで同時ファイル転送数を設定し、実際に転送される前にどのファイルが移動するかを正確に確認するため、最初にDry Runを実行します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Zoho WorkDriveからBackblaze B2へのクラウド間転送ジョブ" class="img-large img-center" />

## 移行の検証とスケジューリング

Syncジョブのadvanced Settingsでチェックサム比較を有効にすると、RcloneViewはファイルサイズだけでなくハッシュとサイズでファイルの一致を確認します。大きなバッチが一時的なネットワークエラーに遭遇した場合に備えて、リトライ回数も設定してください。ジョブが完了したら、Job Historyで転送された総ファイル数、所要時間、エラーになった項目を確認してから、ソースフォルダをアーカイブしてください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Zoho WorkDriveからBackblaze B2への転送完了を示すJob History" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. 正しいリージョンを選択してZoho WorkDriveリモートを追加します。
3. Application Key IDとKeyを使用してBackblaze B2リモートを追加します。
4. Dry Runを実行し、その後同期またはコピージョブを実行してJob Historyで結果を確認します。

クリーンなクラウド間移行により、Zoho WorkDriveのワークスペースを軽量に保ちながら、完了したファイルには耐久性があり低コストな保存先を提供できます。

---

**関連ガイド:**

- [Zoho WorkDriveを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Backblaze B2を管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Zoho WorkDriveをOneDriveに同期する — RcloneViewによるクラウドバックアップ](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)

<CloudSupportGrid />

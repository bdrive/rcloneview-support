---
slug: migrate-zoho-workdrive-to-dropbox-rcloneview
title: "Zoho WorkDriveからDropboxへ移行 — RcloneViewでファイルを転送"
authors:
  - steve
description: "RcloneViewでZoho WorkDriveからDropboxへファイルを移動します — 転送前にフォルダを比較し、すべてのファイルが無傷で届いたことを確認できます。"
keywords:
  - zoho workdrive から dropbox へ移行
  - zoho workdrive 移行
  - zoho workdrive dropbox 転送
  - クラウド間移行ツール
  - rcloneview zoho workdrive
  - dropbox 移行ツール
  - クロスクラウドファイル転送
  - zoho workdrive バックアップ
  - エンタープライズ クラウド移行
  - クラウド間ファイル移動
tags:
  - RcloneView
  - zoho
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDriveからDropboxへ移行 — RcloneViewでファイルを転送

> まずローカルドライブにすべてをダウンロードすることなく、チームのファイルをZoho WorkDriveからDropboxへ移動します。

コラボレーションプラットフォームを切り替えるときは、通常、誰かが何年分もの共有フォルダを旧システムから新システムへ移動しなければなりません。ブラウザ経由でこれを行う、つまりZoho WorkDriveからダウンロードしてDropboxに再アップロードする方法は遅く、ローカルのディスク容量を占有し、途中で何かが漏れていないかを確認することを難しくします。RcloneViewは両方のサービスに直接接続し、クラウド間で転送を行うため、プロバイダーがサポートしている限りファイルはサーバー側で移動し、あなたのマシンのストレージを経由しません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDriveとDropboxを接続する

移行を始める前に、両方のサービスをリモートとして追加してください。Zohoは複数のデータセンターリージョンにわたってデータをホストしているため、Zoho WorkDriveはセットアップ時にアカウントリージョンを選択する必要があります。Dropboxは標準的なOAuthブラウザログインで接続します。Authorizeをクリックしてサインインすると、RcloneViewが自動的にアクセス権を取得します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでZoho WorkDriveとDropboxをリモートとして追加する" class="img-large img-center" />

マウント専用ツールとは異なり、RcloneViewはFREEライセンスでも同期とフォルダ比較を提供するため、単なる閲覧だけでなく、完全な移行ワークフローに向けて両方のリモートが準備万端になります。

## 移動する前にフォルダを比較する

転送前に**Compare**を開き、移行するZoho WorkDriveフォルダと、空または一部だけ入力済みのDropboxの転送先を指定します。比較ビューは片方にのみ存在するファイルと、すでに一致しているファイルを分けて表示するため、以前に開始した移行を再開する場合や、部分的な失敗の後に再実行する場合に特に便利です。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewでZoho WorkDriveフォルダとDropboxの転送先を比較する" class="img-large img-center" />

## 転送の実行と検証

一回限りの移動の場合、Zoho WorkDriveをソース、Dropboxを宛先とするCopyジョブを構成し、必要なフィルター(削除済みファイルや特定フォルダの除外など)を適用してから、まず**Dry Run**を実行して何が転送されるかを正確に確認します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Zoho WorkDriveからDropboxへのコピージョブを構成する" class="img-large img-center" />

同期設定でチェックサム比較を有効にすると、RcloneViewはサイズだけでなくハッシュによってファイルの整合性を検証します。その後、転送後に**Job History**を確認して、何が転送されたか、どれくらい時間がかかったか、エラーが発生したファイルがあったかどうかを記録として確認してください。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. 正しいリージョンを選択してZoho WorkDriveアカウントを追加してください。
3. ブラウザベースのOAuthログインでDropboxを接続してください。
4. ソースと宛先を比較してから、チェックサムで検証されたCopyジョブを実行して移行を完了してください。

Job Historyで転送が完了したことを確認したら、チームはWorkDriveに何も置き去りにしていないという確信を持ってDropboxでのコラボレーションを始められます。

---

**関連ガイド:**

- [RcloneViewでZoho WorkDriveを管理する](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [RcloneViewでZoho WorkDriveをOneDriveと同期する](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [RcloneViewでDropboxからOneDriveへ移行する](https://rcloneview.com/support/blog/migrate-dropbox-to-onedrive-rcloneview)

<CloudSupportGrid />

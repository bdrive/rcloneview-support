---
slug: migrate-zoho-workdrive-to-dropbox-rcloneview
title: "Zoho WorkDriveからDropboxへ移行 — RcloneViewでファイルを転送"
authors:
  - robin
description: "RcloneViewでZoho WorkDriveのファイルをDropboxへ移動しましょう。2つのクラウドを接続し、Dry Runでプレビューし、クラウド間でコピーして、Folder Compareで検証します。"
keywords:
  - zoho workdrive dropbox 移行
  - zoho workdrive dropbox 転送
  - zoho workdrive ファイル 移動
  - zoho workdrive 移行ツール
  - dropbox 移行
  - クラウド間転送
  - rcloneview zoho workdrive
  - rcloneview dropbox
  - rclone gui zoho workdrive
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

> Zoho WorkDriveのワークスペースをクラウド間で直接Dropboxへ移動します。変更前にはプレビューで、完了後には並べて比較して確認できます。

チームがZoho WorkDriveから離れる理由はさまざまです — Dropboxを使う企業との合併、Dropboxに統一しているクライアント、あるいは単なるツールの統合などです。すべてをノートPCにダウンロードしてから再アップロードするのは時間がかかり、ミスも起こりがちです。RcloneViewは1つのウィンドウで両方のサービスに接続し、ファイルを直接コピーします。Dry Run、ジョブ履歴、Folder Compareで漏れがないことを確認できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDriveとDropboxを接続する

**Remote > New Remote** を開き、まずZoho WorkDriveを追加します。Zoho WorkDriveはほとんどのプロバイダーより1ステップ多く必要です。Zohoアカウントが属する **リージョン**(例: 米国またはEUのデータセンター)を選択する必要があります。誤ったリージョンの選択が接続失敗のよくある原因なので、始める前にZohoへのサインインに使うドメインを確認してください。

次にDropboxを追加します。DropboxはOAuthを使用します。ブラウザウィンドウが開いたらサインインしてアクセスを承認すると、RcloneViewが自動的に設定を完了します — APIキーは不要です。チームでDropbox Businessを使用している場合は、設定時に `dropbox_business` を有効にしてチームフォルダにアクセスできるようにしてください。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでZoho WorkDriveとDropboxのリモートを追加" class="img-large img-center" />

## Dry Runでコピーをプレビューする

2つのリモートをExplorerパネルに並べて開き、移動したいWorkDriveフォルダへ移動します。簡単なテストとして小さなフォルダをドラッグすることもできます — 異なるリモート間のドラッグは常に移動ではなくコピーになるため、元のファイルはそのまま残ります。

本格的な移行では、**Job Manager** を開いて新しいジョブを追加します。Zoho WorkDriveをソースに、新しいDropboxフォルダ(例: `/WorkDrive-Archive`)を宛先に設定します。最初の実行には一方向同期ではなく **Copy** ジョブを使いましょう。Copyは宛先のファイルを削除しません。次に **Dry Run** を実行し、データが動く前に転送されるファイルの正確な一覧を確認します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでZoho WorkDriveからDropboxへのクラウド間転送" class="img-large img-center" />

## 転送の調整と進行状況の監視

DropboxはAPIのレート制限を設けているため、同時ファイル転送数を高く設定するよりも、控えめにしたほうが安定します。一時的なエラーから自動で回復できるよう、**Retry entire sync if fails** はデフォルトの3のままにしてください。ワークスペースに大きな動画やデザインファイルがある場合は、マルチスレッド転送の設定(デフォルト4)が個々の大容量ファイルに役立ちます。

ジョブの実行中は **Transferring** タブで進行状況、速度、ファイル数を確認できます。完了すると **Job History** にステータス、合計サイズ、ファイル数が記録されます — マネージャーから移行完了の証拠を求められたときに便利です。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneViewでZoho WorkDriveからDropboxへの転送を監視" class="img-large img-center" />

## Folder Compareで検証する

**Home > Compare** を開き、左にWorkDrive、右にDropboxを配置します。**left-only files** でフィルタリングして届いていないファイルを見つけ、**different files** でサイズの不一致を確認します。不足分を選択し、**Copy right** で埋めましょう。マウント専用ツールと異なり、RcloneViewはFREEライセンスでも同期とフォルダ比較が可能です。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="移行後にZoho WorkDriveとDropboxのフォルダを比較" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. Zoho WorkDrive(正しいリージョンを選択)とDropbox(OAuthサインイン)をリモートとして追加します。
3. WorkDriveから新しいDropboxフォルダへのCopyジョブを作成し、まずDry Runを実行します。
4. ジョブを実行し、Folder CompareとJob Historyで結果を確認します。

計画的で検証済みの移行なら、チームは不足ファイルを探し回ることなく、初日からDropboxに切り替えられます。

---

**関連ガイド:**

- [Zoho WorkDriveの管理 — RcloneViewでクラウド同期](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [RcloneViewでZoho WorkDriveからGoogle Driveへ移行](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-google-drive-rcloneview)
- [RcloneViewでDropboxの同期エラーを解決](https://rcloneview.com/support/blog/fix-dropbox-sync-errors-rcloneview)

<CloudSupportGrid />

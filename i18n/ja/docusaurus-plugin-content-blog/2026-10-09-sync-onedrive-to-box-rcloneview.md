---
slug: sync-onedrive-to-box-rcloneview
title: "OneDriveをBoxに同期 — RcloneViewでクラウドバックアップ"
authors:
  - alex
description: "RcloneViewでOneDriveをBoxに同期します。OAuthで両方を接続し、Dry Runで事前確認してからクラウド間同期を実行し、Folder Compareで検証します。"
keywords:
  - OneDrive Box 同期
  - OneDrive Box バックアップ
  - OneDrive Box 同期ツール
  - OneDrive Box コピー
  - クラウド間同期
  - OneDrive Box 移行
  - RcloneView
  - rclone GUI
  - フォルダー比較
  - スケジュール クラウド同期
tags:
  - RcloneView
  - onedrive
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDriveをBoxに同期 — RcloneViewでクラウドバックアップ

> OneDriveのファイルの2つ目のコピーをBoxに保管します。2つのクラウド間で直接転送されます。

社内ではOneDriveを使っていても、取引先やパートナー、コンプライアンス上の手続きではBoxにファイルがあることを求められる場合があります。すべてをダウンロードして再アップロードするのは時間がかかり、空きのあるローカルディスクも必要です。RcloneViewは両方のサービスを接続してクラウド間で同期し、事前にDry Runで確認し、事後に視覚的に比較できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDriveとBoxを接続する

どちらのサービスもOAuthによるブラウザーログインを使用します。Remoteタブで**New Remote**をクリックし、Microsoft OneDriveを選んでサインインします。Boxでも同じ手順を繰り返します。Box BusinessまたはEnterpriseアカウントの場合は、設定中に`box_sub_type = enterprise`を指定してください。

RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントおよび同期でき、Windows、macOS、Linuxで動作します。両方のリモートができたら、2つのExplorerパネルを並べて開きます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでOneDriveとBoxのリモートを追加" class="img-large img-center" />

## コピーか同期かを選び、Dry Runを実行する

Syncウィザードを開き、OneDriveをソース、Boxのフォルダーを宛先に選びます。片方向同期は宛先のみを変更するため、OneDriveから削除したファイルはBoxからも削除されます。ミラーではなく安全策を求める場合は、代わりにCopyジョブを使用してください。

最初に**Dry Run**を実行します。何も変更せずに、コピーされるファイルと削除されるファイルを一覧表示します。たとえば、経理チームが150GBの「Clients」フォルダーを同期する場合、本番実行の前にフォルダー構造を確認し、不要な一時ファイルを見つけることができます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDriveからBoxへのクラウド間同期" class="img-large img-center" />

## フィルターとジョブの調整

ウィザードのステップ2では、ファイル転送数、マルチスレッド転送、equality checker（同一性チェッカー）の数を設定します。サイズと時刻だけでなくハッシュとサイズで比較したい場合は、チェックサム比較を有効にします。ステップ3では、最大サイズ、期間、カスタムルールでファイルを除外したり、ドキュメントや画像用の定義済みフィルターを使ったりできます。Boxにはプランに応じた独自のアップロードサイズ制限があるため、非常に大きなファイルを同期する前にアカウントを確認してください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="OneDriveからBoxへの同期ジョブを開始" class="img-large img-center" />

## モニター、比較、スケジュール

Transferringタブで、速度、ファイル数、サイズを見ながら進行状況を確認します。完了後は**Compare**を開き、左にOneDrive、右にBoxを置いて、左のみのファイルや差異のあるファイルでフィルターします。Job Historyには実行ごとのステータス、所要時間、サイズが保存されます。

PLUSライセンスでは、ステップ4でcrontab形式のスケジュールを追加でき、RcloneViewがシステムトレイで動作している間、同期を毎晩繰り返せます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OneDriveとBoxのFolder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. RemoteタブでOneDriveとBoxのリモートを追加します。
3. OneDriveからBoxへのSyncまたはCopyジョブを作成し、Dry Runを実行します。
4. ジョブを実行し、Folder CompareとJob Historyで検証します。

Boxに検証済みの2つ目のコピーがあれば、チームが次にどのプラットフォームを使うことになっても、頼れる予備になります。

---

**関連ガイド:**

- [OneDriveストレージの管理 — RcloneViewでファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Boxストレージの管理 — RcloneViewでファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [BoxからOneDriveへ移行 — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />

---
slug: migrate-zoho-workdrive-to-wasabi-rcloneview
title: "Zoho WorkDriveからWasabiへ移行 — RcloneViewでファイルを転送"
authors:
  - morgan
description: "RcloneViewでZoho WorkDriveからWasabiオブジェクトストレージへ移行します。2つのリモートを接続し、Dry Run、クラウド間コピー、Folder Compareで検証します。"
keywords:
  - Zoho WorkDriveからWasabiへ移行
  - Zoho WorkDrive Wasabi 転送
  - Zoho WorkDrive エクスポート
  - Wasabi オブジェクトストレージ 移行
  - Zoho WorkDrive バックアップ
  - クラウド間転送
  - rclone GUI 移行
  - RcloneView Wasabi
tags:
  - RcloneView
  - zoho
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDriveからWasabiへ移行 — RcloneViewでファイルを転送

> 自分のディスクに何も一時保存せずに、Zoho WorkDriveのチームフォルダーをWasabiのバケットにアーカイブします。

プロジェクトが終了したとき、部署がツールを切り替えるとき、あるいは経理部門がより安価な長期アーカイブを求めるときに、チームはZoho WorkDriveから移行します。Wasabiはこうしたアーカイブ用途に向くS3互換の移行先ですが、何千ものファイルを手作業で移すのは時間がかかります。RcloneViewは1つのウィンドウで両方のサービスに接続し、事前にDry Runを行ってクラウド間でコピーし、その後に比較で確認します。WasabiなどのS3互換ストレージは、FREEライセンスで読み取り/書き込みの両方が可能な状態で接続できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDriveとWasabiを接続する

Remote タブを開き、New Remote を選択します。Zoho WorkDriveはセットアップ中にリージョンの選択が必要なので、Zohoアカウントに合致するデータセンターを選びます。WasabiはS3互換リモートとして追加します。アクセスキー、シークレットキー、バケットのリージョンのエンドポイントを入力します。

両方が Remote Manager に表示されたら、2つの Explorer パネルで開きます。何かを移す前に、左側でチームフォルダーを、右側でバケットを確認しましょう。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでZoho WorkDriveとWasabiのリモートを追加" class="img-large img-center" />

## コピーを計画し、Dry Runを実行する

アーカイブに含めるものを決めます。ジョブウィザードのステップ3で、最大ファイル経過期間、最大ファイルサイズ、フォルダー深度の制限を設定でき、`.git/` フォルダーを除外するようなカスタムルールも追加できます。宛先から何も削除されないよう、ミラーリング同期ではなく Copy ジョブを選択してください。

次に Dry Run を実行します。どちらの側も変更せずに、コピーまたは削除されるすべてのファイルを一覧表示するため、誤ったフォルダーやフィルターに気づく最も手軽なタイミングです。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Zoho WorkDriveからWasabiへのクラウド間転送" class="img-large img-center" />

## 転送を実行して監視する

ジョブを開始し、Transferring タブで進行状況を確認します。進捗、速度、ファイル数が表示されます。ステップ2では、大規模なアーカイブ向けにファイル転送数を増やせます。Zoho側の応答が遅い場合は、equality checker の数は控えめにしておきましょう。「Retry entire sync if fails」の既定値は3で、一時的なネットワークエラーに対応します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Zoho WorkDriveからWasabiへの転送を監視" class="img-large img-center" />

## Folder CompareとJob Historyで検証する

ジョブが完了したら、片側にZoho WorkDrive、もう片側にWasabiバケットを置いて Compare を開きます。左のみ、右のみ、異なるファイルのフィルターでまだ不足しているものがわかり、コピー操作で残りを転送できます。Job History には各実行のステータス、サイズ、ファイル数が記録されるため、移行の記録としても使えます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="移行後のZoho WorkDriveとWasabiの比較" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Zoho WorkDrive(リージョン指定付き)とWasabiをリモートとして追加します。
3. フィルター付きの Copy ジョブを作成し、Dry Run を実行します。
4. ジョブを実行し、移行元を廃棄する前に Folder Compare で確認します。

Compare で両側が一致することを確認するまで、Zohoのデータはそのまま残しておきましょう。

---

**関連ガイド:**

- [RcloneViewでZoho WorkDriveストレージを管理する](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [RcloneViewでZoho WorkDriveからBackblaze B2へ移行](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-backblaze-b2-rcloneview)
- [Wasabiストレージの管理 — RcloneViewでファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

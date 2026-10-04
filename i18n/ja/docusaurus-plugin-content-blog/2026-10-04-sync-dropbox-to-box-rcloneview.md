---
slug: sync-dropbox-to-box-rcloneview
title: "DropboxをBoxへ同期 — RcloneViewでクラウドバックアップ"
authors:
  - casey
description: "RcloneViewでDropboxをBoxへ同期: 2つのOAuthリモートを接続し、ドライランでプレビュー、ジョブをスケジュールし、Folder Compareで結果を検証します。"
keywords:
  - DropboxをBoxへ同期
  - DropboxからBoxへバックアップ
  - Dropbox Box 同期
  - クラウド間同期
  - RcloneView
  - Dropboxバックアップ
  - Boxクラウドストレージ
  - マルチクラウドバックアップ
  - rclone GUI
tags:
  - RcloneView
  - dropbox
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DropboxをBoxへ同期 — RcloneViewでクラウドバックアップ

> Dropboxファイルの2つ目のコピーをBoxに保持し、1つのデスクトップウィンドウから管理します。

チームはDropboxで作業しているのに、クライアントやパートナーはBoxを求めることがよくあります。両者を手作業で揃えるには、ダウンロードと再アップロードの繰り返しが必要です。RcloneViewは2つのアカウントをリモートとして接続し、フォルダを直接同期します。プレビューと履歴があるため、何が変わったか常に把握できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## DropboxとBoxをリモートとして追加

どちらのプロバイダーもOAuthのブラウザログインを使用するため、APIキーは不要です。New Remoteをクリックし、Dropboxを選んでブラウザでアクセスを承認し、Boxでも同様に繰り返します。ビジネスアカウントでは、Dropbox for Business設定(`dropbox_business = true`)またはBox for Business設定(`box_sub_type = enterprise`)を使用するため、該当する場合はそのバリアントを選んでください。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでDropboxとBoxのリモートを作成" class="img-large img-center" />

## 一方向同期ジョブの設定

同期ウィザードを開き、Dropboxフォルダを元、Boxフォルダを宛先として選択し、英字、数字、ハイフン、アンダースコアでジョブ名を付けます。一方向モードは宛先のみを変更するため、バックアップ用途に適しています。同期は宛先を元に一致させるため、コピーまたは削除されるファイルを確認するために、必ず最初にドライランを実行してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="DropboxからBoxへの同期ジョブ設定" class="img-large img-center" />

150GBのクライアント納品物を持つデザイン会社を想像してください。ファイルサイズや経過期間のフィルターで重い作業ファイルをBoxのコピーから除外でき、事前定義済みフィルターで動画などのカテゴリをスキップできます。

## スケジュールと監視

PLUSライセンスでは、ウィザードのステップ4でcrontab形式のスケジュールが使用でき、シミュレーションオプションで次回の実行時刻をプレビューできます。毎晩の実行により、手作業なしでBoxを最新に保てます。Transferringタブにはライブの速度と進捗が表示され、Job Historyには各実行のステータス、所要時間、サイズ、ファイルが記録されます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="DropboxからBoxへの同期ジョブをスケジュール" class="img-large img-center" />

## Folder Compareで検証

実行後、2つのフォルダでFolder Compareを開きます。左のみのファイルと異なるファイルが一覧表示され、不足している項目は比較ビューからコピーできます。Job Historyでエラーになった実行を見つけられます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="DropboxからBoxへの同期のジョブ履歴" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード:** [rcloneview.com](https://rcloneview.com/src/download.html)から入手します。
2. OAuthログインでDropboxとBoxのリモートを追加します。
3. 一方向同期ジョブを作成し、ドライランを実行します。
4. 実行し、PLUSライセンスがあればスケジュールします。

別のプロバイダーに2つ目のコピーを持つことで、単一障害点がセーフティネットに変わります。

---

**関連ガイド:**

- [ダウンタイムなしのBoxからDropboxへ](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [BoxをGoogle Driveへ同期](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [Dropboxストレージの管理](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

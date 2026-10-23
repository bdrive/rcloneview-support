---
slug: sync-box-to-wasabi-rcloneview
title: "BoxをWasabiに同期 — RcloneViewでクラウドバックアップ"
authors:
  - tayson
description: "RcloneViewでBoxをWasabiに同期: 2つのリモートを接続し、Dry Runでプレビューし、一方向バックアップを実行して、フォルダ比較で結果を検証します。"
keywords:
  - BoxをWasabiに同期
  - BoxからWasabiへのバックアップ
  - Box Wasabi 転送
  - RcloneView box
  - RcloneView wasabi
  - クラウド間同期
  - Box オブジェクトストレージ バックアップ
  - Wasabi S3 バックアップ
tags:
  - RcloneView
  - box
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# BoxをWasabiに同期 — RcloneViewでクラウドバックアップ

> 繰り返し実行できる一方向同期で、Boxのコンテンツの独立したコピーをWasabiオブジェクトストレージに保管します。

Boxはコラボレーションに便利な場所ですが、プラットフォームの外にもう1つコピーを持っておけば、誤削除、アカウントのロックアウト、保持期間の隙間から身を守れます。WasabiはS3互換のオブジェクトストレージであり、そのコピーの保存先として自然な選択肢です。RcloneViewは1つのウィンドウで両方のサービスを接続でき、基本的な同期とDry RunはFREEライセンスで利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## BoxとWasabiをリモートとして接続する

BoxはブラウザベースのOAuthを使用します。RcloneViewで新しいリモートを追加し、Boxを選択して、ブラウザが開いたらサインインします。組織でBox for Businessを使用している場合、リモートには`box_sub_type = enterprise`が必要です。WasabiはS3互換リモートとして追加します。Access Key、Secret Key、そしてWasabiリージョンのエンドポイントを入力してください。

両方のリモートがリモートマネージャー(Remote Manager)に表示されたら、2つのエクスプローラー(Explorer)パネルで左右に並べて開きます。何かを設定する前に、左側でBoxのフォルダツリーを、右側でWasabiのバケットを確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでBoxとWasabiのリモートを追加する" class="img-large img-center" />

## 同期の前にDry Runでプレビューする

デザイン会社がBoxに800 GBのクライアントプロジェクトフォルダを保管しているとします。最初の同期の前にDry Runを実行してください。何も変更せずに、コピーされるファイルと削除されるファイルが一覧表示されます。これは、同期を誤ったバケットパスに向けてしまう事態を避けるのに役立ちます。

バックアップには、一方向同期("Modifying destination only")が適した方向です。Boxが基準となり、Wasabiがそれをミラーリングします。同期は、ソースにもう存在しない宛先のファイルも削除することを忘れないでください。ミラー用には専用のバケットまたはプレフィックスを使用しましょう。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="BoxとWasabi間のクラウド間転送" class="img-large img-center" />

## 同期ジョブを設定する

ジョブウィザードは、ストレージ、詳細設定、フィルタ、スケジューリングの4ステップで進みます。小さなドキュメントが多い場合はファイル転送数を増やし、ハッシュベースの検証が必要な場合はチェックサム比較を有効にします。あらかじめ用意されたフィルタにはBox Docsオプションが含まれており、Box Notesのようなオンライン専用の項目は通常のファイルと同じようには動作しないため便利です。

ジョブ名には英字、数字、ハイフン、アンダースコアを使用し、保存して実行します。進行状況、速度、ファイル数はTransferringタブに表示されます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="保存済みのBox to Wasabi同期ジョブを実行する" class="img-large img-center" />

## スケジュールと検証

スケジュールベースの同期はPLUS機能で、crontab形式のフィールドと、今後の実行時刻をプレビューするシミュレーターが用意されています。毎晩実行すれば、Wasabi側のコピーを最新に保てます。実行後は、ジョブ履歴(Job History)でステータス、サイズ、ファイル数を確認するか、フォルダ比較(Folder Compare)で両側が一致していることを確認してください。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewで定期的な同期ジョブをスケジュールする" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. OAuthでBoxリモートを、キーとエンドポイントでWasabiリモートを追加します。
3. Boxから専用のWasabiバケットへの同期ジョブを作成し、まずDry Runを実行します。
4. ジョブを実行し、フォルダ比較とジョブ履歴で検証します。

テスト済みでスケジュールされたミラーがあれば、Boxは単一障害点から、本格的なバックアップの片割れへと変わります。

---

**関連ガイド:**

- [BoxからWasabiへの移行](https://rcloneview.com/support/blog/migrate-box-to-wasabi-rcloneview)
- [Google DriveをBoxに同期](https://rcloneview.com/support/blog/sync-google-drive-to-box-rcloneview)
- [Wasabi同期エラーの解決](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)

<CloudSupportGrid />

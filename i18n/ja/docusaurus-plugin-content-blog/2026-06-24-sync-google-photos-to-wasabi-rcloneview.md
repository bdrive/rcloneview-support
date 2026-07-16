---
slug: sync-google-photos-to-wasabi-rcloneview
title: "Google PhotosをWasabiに同期 — RcloneViewで実現する手頃な写真アーカイブバックアップ"
authors:
  - steve
description: "RcloneViewを使ってGoogle PhotosライブラリをWasabi S3互換ストレージに同期・バックアップする方法を解説します — 冗長性があり手頃なオフサイト写真アーカイブを実現します。"
keywords:
  - sync Google Photos to Wasabi
  - Google Photos Wasabi backup
  - RcloneView Google Photos backup
  - Wasabi photo archive storage
  - affordable cloud photo backup
  - Google Photos offsite backup
  - rclone Google Photos Wasabi
  - cloud photo library backup
tags:
  - google-photos
  - wasabi
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google PhotosをWasabiに同期 — RcloneViewで実現する手頃な写真アーカイブバックアップ

> 何年分もの掛け替えのない写真を守るため、Google PhotosライブラリをWasabi S3互換ストレージに同期しましょう — 冗長性があり、オフサイトで、コスト効率の良い方法です。

Google Photosは何百万もの人々が写真ライブラリを保存する場所ですが、掛け替えのない思い出を単一のプラットフォームだけに依存させることには実際のリスクが伴います。ストレージ容量の上限に達したり、アカウントポリシーが変更されたり、ほとんど予告なくアクセスが取り消されたりすることがあります。Wasabi — S3互換のオブジェクトストレージサービス — に同期することで、完全に自分で管理できる、信頼性の高い独立したオフサイトコピーを作成できます。RcloneViewは両方のサービスをビジュアルな2パネルインターフェースで接続し、コマンドライン設定なしでクラウド間の写真転送を簡単に行えるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでGoogle PhotosとWasabiを接続する

まず、Google Photosをリモートとして追加します。**Remote**タブを開き、**New Remote**をクリックして、プロバイダー一覧からGoogle Photosを選択します。RcloneViewがOAuth認証用のブラウザウィンドウを開くので、Googleアカウントでサインインしてアクセスを許可してください。写真とアルバムはすぐにエクスプローラーパネルで閲覧可能になります。

次に、WasabiをS3互換リモートとして追加します。再度**New Remote**をクリックし、タイプとしてAmazon S3を選択、プロバイダーとしてWasabiを選びます。WasabiのAccess Key、Secret Key、リージョンエンドポイントを入力します。事前にWasabiコンソールで保存先のバケットを作成しておき、ファイルを受け入れる準備を整えておきましょう。両方のリモートを保存すると、一方のパネルでGoogle Photosライブラリを、もう一方のパネルでWasabiバケットを閲覧できるようになります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Wasabi remotes in RcloneView" class="img-large img-center" />

RcloneViewはWasabiのようなS3互換プロバイダーへのフル読み書きアクセスをFREEライセンスで提供しており、プランをアップグレードしなくても有力なバックアップ先として活用できます。

## 同期ジョブの作成と実行

両方のリモートがエクスプローラーに表示されたら、**Job Manager**を開いて新しい同期ジョブを作成します。ソースとしてGoogle Photos、宛先としてWasabiバケットを設定します。Advanced Settingsのステップで**チェックサム検証**を有効にしてください — これによりサイズだけでなくコンテンツハッシュでファイルを比較し、転送中の破損を検出できます。

フル同期を実行する前に、**Dry Run**を使って完全なファイルリストをプレビューしましょう。何年もかけて構築された写真ライブラリの場合、ドライランを行うことで関係するデータ量を把握し、フィルター設定（もしあれば）が正しく構成されているかを確認できます。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Transferring Google Photos files to a Wasabi bucket in RcloneView" class="img-large img-center" />

## リアルタイムの転送進捗を監視する

ジョブが開始されると、RcloneView下部の**Transferring**タブに転送速度、完了したファイル数、転送済みの合計サイズといったライブ進捗が表示されます。8万点以上のオリジナル写真を持つ写真家の場合、初回の同期は数時間かかることがありますが、以降の実行では新規または変更されたファイルのみが転送されるため、増分バックアップは高速に保たれます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of the Google Photos to Wasabi transfer" class="img-large img-center" />

**Job History**には、各実行の開始時刻、所要時間、ファイル数、ステータスが記録されます。定期的に確認することで、バックアップが正常に完了していることを確認でき、繰り返し発生するエラーを早期に発見できます。

## PLUSで定期バックアップをスケジュールする

PLUSライセンスがあれば、Google PhotosからWasabiへの同期を任意のcrontabスケジュールで自動実行するよう設定できます — 毎日、毎週、あるいは特定の時刻に。Simulate Scheduleツールを使うと、ジョブを保存する前に今後の実行時刻をプレビューできるため、その頻度が自分のワークフローに合っているかを確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting a schedule for the Google Photos to Wasabi backup job" class="img-large img-center" />

例えば、クライアントのギャラリーをバックアップするウェディングフォトグラファーであれば、毎晩のジョブをスケジュールしてGoogle Photosから新しい納品物をWasabiのアーカイブバケットに送信できます — 撮影ごとに手作業を行う必要はありません。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **New Remote**（OAuthブラウザログイン）でGoogle Photosを追加します。
3. **New Remote**でWasabiを追加します — Amazon S3を選択し、プロバイダーとしてWasabiを選び、認証情報を入力します。
4. **Job Manager**で、Google Photosをソース、Wasabiバケットを宛先とする同期ジョブを作成します。

Google Photosライブラリは、単一のプラットフォームを超えて思い出を安全に保つ、手頃で独立して管理できるオフサイトアーカイブを手に入れます。

---

**関連ガイド:**

- [RcloneViewでGoogle PhotosをBackblaze B2に同期する](https://rcloneview.com/support/blog/sync-google-photos-to-backblaze-b2-rcloneview)
- [Google Photosストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [RcloneViewでWasabiクラウドストレージを管理する](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

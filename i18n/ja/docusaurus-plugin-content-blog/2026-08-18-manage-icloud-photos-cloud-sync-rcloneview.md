---
slug: manage-icloud-photos-cloud-sync-rcloneview
title: "iCloud Photosを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - robin
description: "RcloneViewでiCloud Photosを管理 — 1つのクロスプラットフォームGUIから、Apple写真ライブラリを閲覧、同期、バックアップできます。"
keywords:
  - iCloud Photos 管理
  - iCloud Photos バックアップ
  - iCloud Photos 同期
  - RcloneView iCloud Photos
  - Apple Photos クラウドバックアップ
  - iCloud Photos to Google Drive
  - iCloud Photos 移行
  - Apple 写真ライブラリ バックアップツール
  - iCloud Photos rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - macos
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Photosを管理する — RcloneViewでファイルを同期・バックアップ

> RcloneViewでiCloud Photosライブラリを接続し、アルバムを手作業でエクスポートすることなく別のクラウドへバックアップしましょう。

Appleのフォトエコシステムは何年分もの写真や動画をiCloudの中に閉じ込めており、別の場所に2つ目のコピーを作るには通常、Photosアプリでアルバムを1つずつエクスポートする必要があります。RcloneViewはiCloud Photosを、iCloud Driveとは別の専用リモートとして接続するので — ライブラリを直接閲覧し、手作業のエクスポート作業なしにGoogle Drive、Amazon S3、またはローカルのバックアップドライブへコピーできます。S3、Azure File Storage、Backblaze B2にはFREEライセンスで完全な読み書きアクセスで接続できるため、写真バックアップの転送先側の設定に追加費用はかかりません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud Photosをリモートとして接続する

iCloud PhotosはRcloneViewのRemoteタブ > New Remoteから追加され、iCloud Driveとは別の専用リモートタイプとして設定されます — 両方とも同じApple アカウントに由来していても、2つは別々のリモートとして動作します。認証が完了すると、ライブラリは他のクラウドストレージと同様にExplorerパネルに表示され、フォルダ、サムネイル、ファイルのメタデータを閲覧・選択できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an iCloud Photos remote in RcloneView" class="img-large img-center" />

長年iCloudを使っているユーザーの場合、ライブラリは数万ファイルに達することもあるため、一括コピーを行う前にRcloneViewのThumbnail Viewに切り替える価値があります — 転送を開始する前に画像プレビューをざっと確認し、正しいアルバムや日付範囲を指定できているか確かめられます。

## 2つ目のクラウドへバックアップする

iCloud Photosを接続したら、4ステップのウィザードで同期ジョブを設定しましょう。iCloud Photosをソースとして選び、Google Drive、S3互換バケット、またはローカルの外付けドライブから転送先のリモートを選択し、実際に転送が行われる前にDry Runを実行して何がコピーされるかを正確にプレビューします。写真ライブラリの場合、写真ファイルはサイズがほとんど変わりませんが、コピーが元とバイト単位で一致していることを確認したいため、Step 2のチェックサム比較が特に役立ちます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from iCloud Photos to another cloud remote in RcloneView" class="img-large img-center" />

Step 3のFiltering Settingsも大規模なライブラリの範囲を絞り込むのに役立ちます — 最大ファイル経過時間フィルターを使うと、バックアップジョブを最近追加されたファイルのみに限定できるため、最初のフルコピーが完了した後の繰り返し実行を高速に保てます。

## 定期バックアップを自動化する

1回限りのエクスポートでは来月撮る写真を保護できないため、ほとんどのiCloud Photosユーザーは手動での単発実行ではなく、繰り返し実行される同期ジョブを設定します。PLUSライセンスでは、crontab形式のスケジュールをジョブに割り当てることで、毎日・毎週・毎晩特定の時刻以降など好きな頻度で自動的に実行できるようになり、実行後はJob Historyで完了を確認し、転送されたファイル数を確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Photos backup job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. Remoteタブ > New Remoteから iCloud Photosリモートを追加します。
3. 選んだバックアップ先へ同期ジョブを設定し、最初にDry Runを実行します。
4. 新しい写真が自動的に保護されるよう、定期バックアップをスケジュールします。

Appleのエコシステムの外に写真ライブラリの2つ目のコピーを持つことで、アカウントがロックされたり端末を紛失したりした場合の単一障害点を1つ減らせます。

---

**関連ガイド:**

- [RcloneViewでiCloud Driveを使う](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [RcloneViewでiCloud Driveのクラウド同期を管理する](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [RcloneViewでiCloud Driveの同期エラーを修正する](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />

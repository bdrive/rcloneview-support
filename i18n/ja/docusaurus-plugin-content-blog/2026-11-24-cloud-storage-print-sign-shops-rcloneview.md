---
slug: cloud-storage-print-sign-shops-rcloneview
title: "印刷・看板業者のためのクラウドストレージ — RcloneViewでアートワークを整理・バックアップ"
authors:
  - kai
description: "RcloneViewで印刷・看板業者のクラウドストレージを管理。顧客のアートワークを集約し、制作ファイルを複数のクラウドにバックアップし、ジョブのアーカイブを整理できます。"
keywords:
  - 印刷会社 クラウドストレージ
  - 看板業者 ファイルバックアップ
  - 印刷会社 アートワーク保存
  - 大判印刷 ファイル管理
  - 印刷制作ファイル バックアップ
  - 顧客アートワーク クラウドバックアップ
  - RcloneView 印刷会社
  - 中小企業 マルチクラウドバックアップ
  - 看板会社 ファイルアーカイブ
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 印刷・看板業者のためのクラウドストレージ — RcloneViewでアートワークを整理・バックアップ

> 顧客のアートワークがどのクラウドから届いても一か所に集め、制作ファイルをバックアップし、昨年のバナーも整理されたアーカイブから開き直せます。

印刷・看板業者が扱うファイルは、大きく、種類が多く、替えのきかないものが少なくありません。ベクターロゴ、レイヤー付きPSD、入稿用PDF、車両ラッピングのテンプレート、RIP用の出力データなどです。顧客はGoogle Drive、Dropbox、OneDrive、Boxのリンクでアートワークを送り、完成したジョブはワークステーションやSynology NASにたまっていきます。RcloneViewはこれらを1つのGUIにまとめるため、ブラウザのタブを行き来せずにアートワークの収集・保管・バックアップができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## どのクラウドからでも顧客のアートワークを集める

店舗で使う各サービスを **Remote tab > New Remote** からリモートとして追加します。Google Drive、Dropbox、OneDrive、Boxはブラウザでのログインで接続できます。顧客がGoogle Driveでフォルダーを共有してくることが多い場合は、Google Drive Shared with Me リモート（`shared_with_me = true`）でそれらのフォルダーを直接閲覧できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding client cloud remotes for a print shop in RcloneView" class="img-large img-center" />

Explorerパネルは最大4つまで開けるため、顧客のフォルダーをNAS上の受付ジョブ用フォルダーの隣に並べられます。リモート間でファイルをドラッグするとコピーされます。20 GBのラッピング案件を取り込む前に **Get Size** を使えば、ダウンロード量を事前に把握できます。

## 制作ファイルを複数の場所にバックアップする

店舗の本当の資産はアーカイブです。リピーターの新しい看板に使うロゴや、トラック数台分のテンプレートなどがそうです。制作フォルダーから Backblaze B2、Wasabi、Amazon S3 などのオフサイトの保存先へ Sync または Copy ジョブを作成しましょう。**1:N sync** を使えば、1つのジョブで同じフォルダーを複数の保存先（例：NASとS3互換バケット）へ同時に送れます。これはFREE Licenseでも利用できます。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging print production files to an S3-compatible bucket in RcloneView" class="img-large img-center" />

フィルターでバックアップを軽く保ちましょう。カスタムルールで作業用フォルダーやキャッシュファイルを除外したり、忙しい平日は **Max file age** で最近のジョブだけをバックアップしたりできます。初回の同期の前には **Dry Run** を実行し、保存先で想定外のファイルが削除されないことを確認してください。

## 夜間アーカイブをスケジュールする

PLUS Licenseがあれば、ジョブの最終ステップでcrontab形式のスケジュールを追加し、たとえば月曜から土曜の午後11時など、閉店後にアーカイブを実行できます。**Simulate schedule** ボタンで、保存前に次回の実行時刻をプレビューできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly print shop archive job in RcloneView" class="img-large img-center" />

毎朝 **Job History** を確認し、実行が完了したか、何件のファイルが移動したかを確かめましょう。ジョブがエラーになった場合も、ステータスと時刻から簡単に再実行できます。

## すべてをダウンロードせずに過去のジョブを開く

顧客から再印刷の依頼があれば、Mount Managerからアーカイブ用バケットをドライブとしてマウントします。デザインソフトからマウントしたドライブ上のファイルを直接開け、ローカルのキャッシュはVFSキャッシュ（デフォルトはwritesモード）が処理します。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a print archive bucket as a drive in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. 顧客が使うクラウド、NAS、オフサイトのバケットをリモートとして追加します。
3. 制作フォルダーから1つ以上のバックアップ先へ Copy または Sync ジョブを作成し、Dry Runで確認します。
4. アーカイブ用バケットをマウントし、どのワークステーションからでも過去のジョブを開けるようにします。

アートワークを集め、バックアップし、一か所にアーカイブしておけば、チームはファイル探しの時間を減らし、印刷にもっと時間を使えます。

---

**関連ガイド:**

- [RcloneViewで出版・印刷メディア向けのクラウドストレージを管理する](https://rcloneview.com/support/blog/cloud-storage-publishing-print-media-rcloneview)
- [RcloneViewでグラフィックデザイナー向けのクラウドストレージを管理する](https://rcloneview.com/support/blog/cloud-storage-graphic-designers-rcloneview)
- [RcloneViewで1つのソースを複数のクラウド保存先へ同期する](https://rcloneview.com/support/blog/sync-one-source-multiple-cloud-destinations-rcloneview)

<CloudSupportGrid />

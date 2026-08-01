---
slug: cloud-storage-museums-archives-rcloneview
title: "博物館とアーカイブのためのクラウドストレージ — RcloneViewによるデジタル保存"
authors:
  - morgan
description: "デジタル化されたコレクション、アーカイブマスター、保存用コピーを、RcloneViewのチェックサム検証付き同期で複数のクラウドプロバイダーにわたって管理します。"
keywords:
  - 博物館向けクラウドストレージ
  - デジタルアーカイブストレージ
  - デジタル保存ソフトウェア
  - アーカイブコレクション管理
  - RcloneView 博物館
  - 文化遺産のデジタル化
  - 保存用コピーのバックアップ
  - アーカイブチェックサム検証
  - マルチクラウドアーカイブストレージ
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 博物館とアーカイブのためのクラウドストレージ — RcloneViewによるデジタル保存

> デジタル化されたコレクションには単なるバックアップ以上のものが必要です — RcloneViewはアーカイブマスターを検証し、独立した複数のクラウドプロバイダー間でミラーリングし続けます。

博物館のデジタル化プロジェクトは、スキャンデータがハードドライブに保存された時点では終わりません。絵画の高解像度TIFF、口述歴史の録音、スキャンされた原稿ページは何十年も残る必要があり、そのためには少なくとも地理的に離れた場所にコピーを1つ用意し、後になってファイルが静かに劣化していないことを証明できる手段が必要です。アーカイブや小規模な博物館のITチームには専用のデジタルアセット管理プラットフォームの予算がないことが多く、その役割をRcloneViewが担います — 保存用マスターをクラウドストレージにプッシュし、整合性を検証し、手作りのスクリプトなしで作業用コピーを同期状態に保つデスクトップGUIです。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 独立したプロバイダー間でアーカイブマスターを保存する

標準的な保存方法は、マスターファイルのコピーを少なくとも2つの異なるストレージシステムに保管することであり、単一ベンダーの障害やアカウントの問題で両方が同時に失われないよう、理想的には異なるプロバイダーを使うことです。RcloneViewは、小規模なアーカイブチームでもこれを実践できるようにします。Amazon S3やBackblaze B2をマスターのコールドストレージ先として接続し、Google DriveやWasabiなどの2つ目のプロバイダーを独立したミラーとして接続した上で、1つのソースフォルダから両方の宛先へ新しいデジタル化バッチをプッシュする1:N同期ジョブを実行します。Amazon S3、Azure、Backblaze B2はFREEライセンスでも完全な読み書きが可能なので、ストレージ自体の費用以外に追加コストをかけずに2プロバイダー保存戦略を実現できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing digitized archive files to two cloud providers with RcloneView" class="img-large img-center" />

同期ジョブの詳細設定でチェックサム比較を有効にすると、単なるタイムスタンプの一致ではなく、ハッシュとサイズでファイルが検証されます — スキャン用ワークステーションの時計がずれたり、同じ更新日時のまま内容が異なるファイルが再保存されたりする場合に重要です。

## コマンドラインなしで整合性を検証する

ビットロットとサイレント破損は、あらゆる長期アーカイブにとって目立たない脅威です。RcloneViewのFolder Compareツールを使えば、アーキビストは異なるリモート上の同じコレクション — たとえばメインのS3バケットとBackblazeミラー — に2つのパネルを向け、サイズとハッシュによるファイル単位の差分を確認できます。「Show different files」フィルターは、どの項目が同期からずれたかを正確に表示するため、四半期ごとの整合性チェックが、チェックサムログを解析する作業から5分間の目視確認に変わります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing archival collection integrity between two cloud storage remotes" class="img-large img-center" />

新しいデジタル化バッチの最初のチェックでは、Dry Runが実際に転送が行われる前に、どのファイルがコピーまたはフラグ付けされるかをプレビューします — 1つの原稿フォルダが数百ギガバイトになることもあり、間違いをやり直すコストが大きい場合に役立ちます。

## スキャン用ワークステーションからの取り込みをスケジュールする

デジタル化作業はバースト的に発生します — ある週にスライドのバッチをスキャンし、次の週にオーディオリールを転送する、といった具合です。セッションごとに手動でアップロードするのを覚えておく代わりに、PLUSライセンスを利用するアーカイブチームはcrontab形式のスケジュールを設定し、ローカルの取り込みフォルダ内の新しいファイルを毎晩自動的にクラウドストレージへ同期させることができ、Job Historyが受け入れ記録用に何がいつ転送されたかを正確に記録します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated archive ingest sync in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. メインのアーカイブストレージリモート（S3、Backblaze B2など）と、冗長性のための2つ目のプロバイダーを接続します。
3. デジタル化取り込みフォルダに対してチェックサム検証を有効にした1:N同期ジョブを設定します。
4. メインコピーとミラーコピーの間のずれを検出するため、Folder Compareを定期的に実行します。

デジタル化予算はスキャンに使われる分で半分にすぎません — RcloneViewは、それらのファイルが10年後も読めるようにするという、目立たないもう半分を担います。

---

**関連ガイド:**

- [RcloneViewによるチェックサム検証付きクラウド移行（Drive、Dropbox、S3、R2）](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [RcloneViewを使ったInternet Archiveコレクションのアップロードと管理方法](https://rcloneview.com/support/blog/sync-internet-archive-cloud-backup-rcloneview)
- [研究者向けクラウドストレージ — RcloneViewでデータセット、論文、実験室データを管理する](https://rcloneview.com/support/blog/cloud-storage-research-academia-rcloneview)

<CloudSupportGrid />

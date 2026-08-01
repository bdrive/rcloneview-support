---
slug: manage-leviia-cloud-sync-backup-rcloneview
title: "Leviiaオブジェクトストレージを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - casey
description: "LeviiaのS3互換オブジェクトストレージをRcloneViewに接続して、ドラッグ&ドロップでのファイル管理、スケジュールバックアップ、クラウド間同期を利用できます。"
keywords:
  - Leviia オブジェクトストレージ
  - Leviia S3
  - RcloneView Leviia
  - Leviia ファイル管理
  - Leviia クラウドバックアップ
  - Leviia 同期
  - S3互換ストレージ GUI
  - ヨーロッパのオブジェクトストレージ
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Leviiaオブジェクトストレージを管理する — RcloneViewでファイルを同期・バックアップ

> 他のあらゆるクラウドに使うのと同じウィンドウから、LeviiaのS3互換オブジェクトストレージを閲覧し、同期し、バックアップします。

LeviiaはヨーロッパでホストされるS3互換オブジェクトストレージを提供しており、S3ですでに動作するツール群を手放さずにデータレジデンシーの保証を求めるチームによく選ばれています。ただし、S3互換プロバイダーが洗練された独自のデスクトップクライアントを提供することはめったになく、ユーザーはアップロードをスクリプト化するか、素のCLIを使いこなす必要に迫られます。RcloneViewはLeviiaを他のリモートとまったく同じように扱うことで、その手間をなくします — 完全なファイル閲覧、ドラッグ&ドロップ転送、スケジュール同期ジョブまで、コマンド不要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Leviiaバケットを接続する

LeviiaはS3プロトコルを話すため、Amazon S3やWasabiを追加するのと同じ方法でRcloneViewに追加できます。新しいリモートを作成し、S3互換プロバイダーのオプションを選択して、アカウントのリージョンに対応するAccess Key、Secret Key、Leviiaのエンドポイント URLを入力します。保存すると、バケットはExplorerパネルに通常のタブとして表示され、すぐに閲覧・転送できるようになります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Leviia object storage remote in RcloneView" class="img-large img-center" />

RcloneViewは1つのウィンドウで90以上のプロバイダーをマウント・同期でき、Windows、macOS、Linuxで動作するため、Leviiaバケットもツールを切り替えることなく、管理している他のあらゆるクラウドアカウントと並んで扱えます。

## Leviiaストレージを閲覧・整理する

接続後、Leviiaバケットはエクスプローラー内でローカルフォルダとまったく同じように振る舞います。名前、種類、更新日時、サイズで並べ替え、画像でいっぱいのバケットではサムネイル表示に切り替え、Get Sizeであるフォルダがどれだけの容量を消費しているかを確認してから別の場所にアーカイブするか判断できます。Ctrl+ClickまたはShift+Clickによる複数選択で、スクリプトによるループなしに一括ダウンロードや削除に対応します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing Leviia bucket contents in RcloneView" class="img-large img-center" />

## Leviiaとの間でバックアップする

定期的なバックアップには、Leviiaをソースまたは宛先とするSyncジョブを設定します。4ステップのウィザードでは、同時転送数、タイムスタンプだけでなくハッシュとサイズでファイルを比較するチェックサム検証、アーカイブしたくないファイルタイプを除外するフィルタールールを設定できます。本番データが入っているバケットに向けて同期ジョブを実行する前には、まずDry Runで何がコピーまたは削除されるかをプレビューしておく価値があります。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Leviia backup job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 新しいリモートを作成し、S3互換プロバイダータイプを選択します。
3. LeviiaのAccess Key、Secret Key、エンドポイントURLを入力します。
4. Leviiaと他のクラウドリモートの間でファイルを移動するSyncまたはCopyジョブを設定します。

LeviiaがRcloneViewに組み込まれると、オブジェクトストレージの管理はスクリプトを書く面倒な作業ではなく、普段のファイル操作の一部になります。

---

**関連ガイド:**

- [RcloneViewでCephオブジェクトストレージを管理する — Cephクラスター向けS3互換GUI](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Scalewayオブジェクトストレージを管理する — RcloneViewでクラウド同期・バックアップ](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [IONOSオブジェクトストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />

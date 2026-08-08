---
slug: manage-rackcorp-object-storage-cloud-sync-rcloneview
title: "RackCorpオブジェクトストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "RackCorpのS3互換オブジェクトストレージをRcloneViewに接続し、ドラッグ&ドロップでのファイル閲覧、スケジュール同期、クロスクラウドバックアップを利用しましょう。"
keywords:
  - RackCorp オブジェクトストレージ
  - RackCorp S3
  - RcloneView RackCorp
  - RackCorp ファイル管理
  - RackCorp クラウドバックアップ
  - RackCorp 同期
  - S3互換ストレージ GUI
  - オブジェクトストレージ GUIクライアント
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

# RackCorpオブジェクトストレージを管理 — RcloneViewでファイルを同期・バックアップ

> 他のあらゆるクラウドで使っているのと同じドラッグ&ドロップの操作感で、RackCorpオブジェクトストレージのバケットを閲覧・同期・バックアップしましょう。

RackCorpのS3互換オブジェクトストレージは、大手ハイパースケーラーに代わる地域密着型の選択肢をチームに提供しますが、バケットの管理には通常、個別のCLIツールやブラウザのコンソールタブを行き来する必要があります。RcloneViewはrcloneのS3プロトコルを通じてRackCorpに接続し、すでに管理しているGoogle DriveやOneDriveなど他のリモートと同じエクスプローラーウィンドウにバケットを表示します。マウントのみのツールとは異なり、RcloneViewはFREEライセンスでも同期とフォルダ比較を提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RackCorpをRcloneViewに接続する

RackCorpオブジェクトストレージは、他のS3互換プロバイダーと同じ方法で追加します。Remoteタブ > New Remoteを開き、S3互換オプションを選択して、Access Key ID、Secret Access Key、RackCorpのエンドポイントURLを入力します。RcloneViewはこれらの認証情報をそのままrcloneの設定に渡すため、別途ドライバーやプラグインをインストールする必要はありません — 組み込みのrcloneバイナリがプロトコルのネゴシエーションを処理します。

リモートが作成されると、Explorerパネルに新しいタブとして表示されます。詳細なメタデータが必要な場合はList Viewでバケットを閲覧し、画像を保存していてすばやく視覚的に確認したい場合はThumbnail Viewに切り替えられます。左側のフォルダツリーを使えば、パスを再入力せずにプレフィックス間を移動できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでRackCorpオブジェクトストレージ用の新しいS3互換リモートを追加している画面" class="img-large img-center" />

ファイル一覧でオブジェクトを右クリックすると、Copy、Cut、Rename、Get Size、Get Public Linkにアクセスできます — ローカルファイルで使うのと同じコンテキストメニューが、RackCorpのバケットに対してもそのまま使えます。

## RackCorpを他のクラウドと同期する

オブジェクトストレージが単独で使われることはほとんどありません。よくあるパターンは、日々の編集用の作業コピーをGoogle DriveやOneDriveに置き、完成したアセットを安価で長期的な保管のためにRackCorpにアーカイブすることです。RcloneViewの4ステップのSyncウィザードなら、ターミナルを使わずにこれを処理できます。RackCorpをソースまたは宛先として選び、一時ファイルや過大なアセットを除外するフィルターを設定し、アーカイブが新規データのみを受け取るように一方向同期を選択します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでRackCorpと別のリモート間のクラウド間同期ジョブを設定している画面" class="img-large img-center" />

本格的な転送を実行する前に、Dry Runでどのファイルがコピーまたは削除されるかを正確にプレビューしましょう。大容量バケットを誤って再アップロードすると帯域幅と時間を浪費しかねないオブジェクトストレージでは、特に有用です。

## スケジュールジョブでバックアップを自動化する

PLUSライセンスを利用しているチームの場合、RackCorpの同期ジョブを毎回手動でトリガーする代わりに、crontab形式のスケジュールで実行できます。分・時・曜日のフィールドを一度設定するだけで、RcloneViewはバックグラウンドでRackCorpのバケットを最新の状態に保ちます — その後Job Historyタブで各実行のステータス、転送速度、ファイル数を確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewでRackCorpオブジェクトストレージ用のスケジュール同期ジョブを設定している画面" class="img-large img-center" />

速度よりもデータの整合性が重要な場合は、Advanced Settingsのステップでチェックサム検証を有効にしましょう — RcloneViewはサイズとタイムスタンプだけでなくファイルハッシュも比較し、転送中の見えない破損を検出します。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブ > New Remoteに移動し、RackCorp用のS3互換オプションを選択します。
3. Access Key ID、Secret Access Key、RackCorpのエンドポイントを入力して接続します。
4. 同期またはバックアップジョブを設定し、RackCorpを他のクラウドリモートと同期した状態に保ちます。

接続が完了すると、RackCorpはRcloneViewのワークスペース内の他のタブと同じように動作します — 別のコンソールも、覚えるべきCLIフラグも不要です。

---

**関連ガイド:**

- [Scalewayオブジェクトストレージを管理 — RcloneViewでクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Selectelクラウドストレージを管理 — RcloneViewでファイル同期とバックアップ](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [VFSキャッシュ — RcloneViewでのより高速なクラウドマウントパフォーマンス](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />

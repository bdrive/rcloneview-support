---
slug: manage-arvan-cloud-storage-sync-backup-rcloneview
title: "Arvan Cloudストレージを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - jay
description: "Arvan CloudのオブジェクトストレージをRcloneViewに接続し、S3互換のファイル閲覧、同期、バックアップ、クラウド間転送を行いましょう。"
keywords:
  - Arvan Cloud
  - Arvan Cloud RcloneView
  - S3互換ストレージ
  - オブジェクトストレージGUI
  - Arvan Cloud 同期
  - Arvan Cloud バックアップ
  - クラウドストレージ管理
  - Arvan Cloud ファイル転送
  - マルチクラウドGUI
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Arvan Cloudストレージを管理する — RcloneViewでファイルを同期・バックアップ

> Arvan Cloudのオブジェクトストレージバケットを、管理している他のすべてのリモートと一緒に、1つのデスクトップウィンドウで閲覧・同期・バックアップできます。

Arvan CloudのオブジェクトストレージはS3プロトコルを採用しているため、Access Key + Secret Key + Endpointによる認証情報を軸に構築されたツールであればそのまま接続できます — RcloneViewも例外ではありません。この地域特化型プロバイダー専用に別のS3クライアントを併用する代わりに、リモートとして追加すれば、既存のワークフローの中でAmazon S3やWasabiなど他のバケット型ストレージとまったく同じように扱えます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## S3互換リモートとしてArvan Cloudを接続する

Arvan CloudはrcloneのS3バックエンドを通じてアクセスされるため、RcloneViewが対応する他のすべてのS3互換サービスと同じ認証情報入力パターンに従います:Access Key、Secret Key、そしてArvanのオブジェクトストレージサービスを指すカスタムエンドポイントです。ここにはOAuthのブラウザフローはありません — Arvan Cloudのコンソールでキーペアを生成し、新規リモートウィザードに直接貼り付けるだけです。

リモートが追加されると、エクスプローラー内の他のパネルと同じように動作します:フォルダツリーでのナビゲーション、画像が多いバケット向けのサムネイルプレビュー、そしてローカルディスクで使うのと同じ右クリックのファイル操作(コピー、移動、名前変更、サイズ取得)がそのまま使えます。RcloneViewはWindows、macOS、Linuxの1つのウィンドウから90以上のプロバイダーをマウント・同期できるため、Arvan Cloudも独立したサイロ化されたアプリではなく、他のクラウドと並んで配置されます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewで新しいS3互換リモートとしてArvan Cloudを追加する" class="img-large img-center" />

すでにS3ツールで標準化しているチームにとっては、バケットポリシー、プレフィックス、フォルダ構造がそのまま引き継がれることを意味します — プロバイダーが変わってもオブジェクトストレージのモデル自体は何も変わりません。

## Arvan Cloudバケットの同期とバックアップ

リモートを接続したら、同期ウィザードを使ってローカルフォルダ — または別のクラウドリモート — をArvan Cloudバケットにミラーリングする一方向ジョブを設定します。詳細設定ステップで同時転送数と等価性チェッカー数を設定し、フィルターを使って `.iso` イメージやネストされた `.git` ディレクトリなど、転送量に含めたくないファイル種別やフォルダを除外しましょう。

ドライラン(Dry Run)を使うと、ジョブを実行する前にどのファイルがコピーまたは削除されるかを正確にプレビューできます。既存のバケットに対して初めて同期を行う際、そこに何がすでにあるか確信が持てない場合に特に重要です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでArvan Cloudストレージバケットへの同期ジョブを設定する" class="img-large img-center" />

## 定期バックアップのスケジュール設定

同期ジョブを検証したら、Job Managerに保存し、PLUSライセンスではcrontab形式のスケジュールを追加して、Arvan Cloudへのバックアップを手動でトリガーしなくても自動的に実行できるようにします。その後Job Historyが各実行の所要時間、転送速度、ファイル数、完了ステータスを記録するため、スケジュールされたバックアップが実際に完了したかを確認する際の記録として活用できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Arvan Cloudストレージへの定期バックアップジョブをスケジュールする" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. Arvan Cloudのオブジェクトストレージコンソールから Access Key と Secret Key を生成してください。
3. RcloneViewでその認証情報とArvan Cloudのエンドポイントを使って新しいS3互換リモートを作成してください。
4. まずドライランを実行し、その後継続的なバックアップ用にスケジュール同期ジョブを保存してください。

Arvan Cloudを単なるもう1つのS3エンドポイントとして扱うことで、クラウドストレージスタックで維持管理する専用ツールを1つ減らせます。

---

**関連ガイド:**

- [RcloneViewでWasabiストレージを管理する — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneViewでSelectelストレージを管理する — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [S3 Access Deniedを解決する — RcloneViewの権限エラー](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />

---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Magalu Cloudストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - jay
description: "Magalu CloudオブジェクトストレージをRcloneViewに接続し、ドラッグ&ドロップでのファイル管理、スケジュール同期、クロスクラウドのバックアップワークフローを実現します。"
keywords:
  - magalu クラウドストレージ
  - magalu オブジェクトストレージ
  - s3互換ストレージ gui
  - rcloneview magalu
  - オブジェクトストレージ バックアップ
  - クラウド同期 gui
  - マルチクラウドファイルエクスプローラー
  - s3互換マネージャー
  - magalu バックアップ
  - ブラジル クラウドストレージ
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

# Magalu Cloudストレージを管理 — RcloneViewでファイルを同期・バックアップ

> 他のすべてのクラウドを管理するのと同じウィンドウから、Magalu Cloudオブジェクトストレージを閲覧、同期、バックアップできます。

Magalu CloudはS3互換のオブジェクトストレージサービスであり、rcloneを含むS3プロトコルベースのあらゆるツールで利用できることを意味します。RcloneViewはこのプロトコルサポートをビジュアルなファイルエクスプローラーでラップしているため、アプリケーションデータやバックアップのためにすでにMagaluバケットを使用しているチームは、`s3cmd`のフラグを覚えたり、ファイルを移動するためだけに別のコンソールタブを行き来したりする必要がありません。バケットを一度接続すれば、アプリ内の他のあらゆるリモートと同じように動作します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Magalu Cloudをリモートとして接続する

Magalu CloudはS3プロトコルを話すため、RcloneViewはAmazon S3、Wasabi、Backblaze B2に接続する場合と同じ方法、つまりS3互換リモートタイプを通じて接続します。**New Remote**を開き、S3互換オプションを選択し、Access Key、Secret Key、そしてお使いのリージョンのMagalu CloudエンドポイントURLを入力してください。RcloneViewはWindows、macOS、Linuxの1つのウィンドウから90以上のプロバイダーをマウントおよび同期するため、Magaluバケットが既存のGoogle Drive、OneDrive、オンプレミスNAS接続と並んで配置されます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewで新しいMagalu Cloud S3互換リモートを追加する" class="img-large img-center" />

リモートを保存すると、Explorerパネルにタブとして表示され、フルフォルダツリーナビゲーション、画像が多いバケット用のサムネイルプレビュー、ローカルファイルと同じ右クリック操作(コピー、切り取り、名前変更、削除)を利用できます。

## Magaluバケットを他のストレージと同期する

オブジェクトストレージが単独で存在することはほとんどありません。多くのチームは冗長化のために別のクラウドと組み合わせたり、ステージングのためにローカルインフラと組み合わせたりします。RcloneViewのSyncウィザードを使用すると、Magaluバケットをソースまたは宛先として設定し、一方向同期または双方向同期(Beta)を選択し、転送前に最大ファイルサイズや最大ファイル経過時間などのフィルターを適用できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Magalu Cloudバケットと別のリモート間の同期ジョブを構成する" class="img-large img-center" />

本番バケットをバックアップ先に初めてミラーリングする前に、どのオブジェクトがコピーまたは削除されるかを事前に確認できる便利なチェックである**Dry Run**をまず実行してください。

## 定期バックアップを自動化する

毎日変化するバケットの場合、手動転送ではスケールしません。Magaluの同期構成をJobとして保存し、スケジュール設定ステップ(PLUSライセンス)を使って、毎晩、毎週、またはカスタム間隔のcrontab形式の繰り返しを定義してください。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Magalu Cloudバケットの定期バックアップジョブをスケジュールする" class="img-large img-center" />

すべての実行はステータス、転送速度、ファイル数とともにJob Historyに記録されるため、スケジュールされたバックアップが実際に完了したかどうかを推測ではなく確認できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. Magalu CloudアカウントのAccess KeyとSecret Keyを生成し、リージョンのエンドポイントを確認してください。
3. RcloneViewでMagalu Cloudを新しいS3互換リモートとして追加してください。
4. まずDry Runを実行してから、バックアップまたは副次ストレージ先に接続する同期ジョブを設定してください。

S3互換バケットをファイルマネージャー内の単なるフォルダとして扱うことで、オブジェクトストレージがワークフローの他の部分から切り離されていた摩擦がなくなります。

---

**関連ガイド:**

- [RcloneViewでWasabiクラウドストレージを管理する](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneViewでCloudflare R2ストレージを管理する](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [RcloneViewでIDrive e2クラウドストレージを管理する](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

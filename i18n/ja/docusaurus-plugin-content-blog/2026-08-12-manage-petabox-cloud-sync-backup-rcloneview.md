---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Petabox ストレージを管理する — RcloneView でファイルを同期・バックアップ"
authors:
  - kai
description: "Petabox の S3 互換オブジェクトストレージを RcloneView に接続し、クロスプラットフォームでの閲覧、同期、バックアップ、マウントを1つの GUI で実現します。"
keywords:
  - Petabox RcloneView
  - Petabox クラウドストレージ
  - S3 互換オブジェクトストレージ
  - Petabox バックアップ
  - Petabox 同期
  - Petabox マウント
  - オブジェクトストレージ GUI
  - Petabox ファイル管理
  - クラウドストレージマネージャー
  - Petabox バケット同期
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

# Petabox ストレージを管理する — RcloneView でファイルを同期・バックアップ

> 1つのデスクトップウィンドウから、使用している他のすべてのクラウドと並んで Petabox バケットを閲覧、同期、バックアップしましょう。

Petabox は S3 互換のオブジェクトストレージサービスであり、これは RcloneView が Amazon S3、Wasabi、その他の S3 プロトコル対応プロバイダーと同じ方法で接続できることを意味します：Access Key ID、Secret Access Key、そしてエンドポイントを使用します。接続が完了すると、Petabox バケットはファイルエクスプローラー上に通常のリモートとして表示され、ローカルフォルダーと同様に閲覧、転送、スケジュール設定ができるようになります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 新しいリモートとして Petabox を接続する

Remote タブから Remote Manager を開き、New Remote を選択します。Petabox は rclone の S3 プロトコルを通じてアクセスされるため、S3 互換オプションを選択し、Access Key ID、Secret Access Key、そしてアカウントから提供された Petabox のエンドポイント URL を入力します。完了すべき OAuth ブラウザフローはありません — 資格情報だけで接続が認証され、テスト接続が成功するとすぐにリモートがタブバーに表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で新しい S3 互換リモートを追加する" class="img-large img-center" />

マウントのみのツールと異なり、RcloneView は FREE ライセンスでも同期とフォルダー比較を利用できます — Petabox バケットは他のサポート対象プロバイダーと同じ同期、比較、ジョブ履歴機能を利用でき、始めるのにアップグレードは必要ありません。

## バケットの閲覧・転送・同期

Petabox を追加したら、エクスプローラーを2つのパネルに分割します — 一方にローカルフォルダーまたは別のクラウドを、もう一方に Petabox バケットを表示し、その間でファイルをドラッグします。同じリモート内でファイルを移動すると移動(move)操作になり、異なるリモート間でドラッグするとコピー(copy)操作になるため、元のファイルに触れることなく Petabox バックアップを準備できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="ローカルフォルダーと Petabox バケット間でファイルを転送する" class="img-large img-center" />

繰り返し行う転送には、4ステップの同期ウィザードを使用してください：ソースと転送先を選び、Advanced Settings で同時転送数と同一性チェッカー数を設定し、ジョブを保存する前にファイルタイプ、サイズ、または経過時間でフィルターを適用します。実際の転送を実行する前に、まずドライラン(Dry Run)を実行して、何がコピーまたは削除されるかを正確にプレビューしましょう。

## バックアップのスケジュール設定とジョブの監視

同期ジョブが Job Manager に保存されると、PLUS ライセンスのユーザーは crontab 形式のスケジュールを設定し、Petabox バックアップを独自の周期で自動実行できます。保存する前に、今後の実行時刻をプレビューすることも可能です。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Petabox 同期ジョブに定期バックアップスケジュールを設定する" class="img-large img-center" />

スケジュール実行でも手動実行でも、すべての実行はステータス、転送速度、ファイル数、合計サイズとともに Job History に記録されるため、Petabox バックアップが正常に完了したかを確認したり、再試行が必要な失敗した実行を見つけたりできます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**してください。
2. Petabox アカウントで Access Key ID と Secret Access Key を生成し、エンドポイント URL を控えておきます。
3. Remote Manager で Petabox を新しい S3 互換リモートとして追加し、接続をテストします。
4. Petabox バケットへの定期バックアップをスケジュールする前に、ドライラン同期を実行します。

Petabox を接続すれば、あなたのオブジェクトストレージは管理している他のすべてのクラウドのすぐ隣に配置されます — 別のクライアントも、ウィンドウの切り替えも必要ありません。

---

**関連ガイド:**

- [RcloneView で Storj ストレージを管理する — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [RcloneView で IDrive E2 ストレージを管理する — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [RcloneView で Wasabi ストレージを管理する — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

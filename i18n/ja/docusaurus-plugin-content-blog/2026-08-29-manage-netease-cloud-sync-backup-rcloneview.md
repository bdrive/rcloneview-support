---
slug: manage-netease-cloud-sync-backup-rcloneview
title: "Netease ストレージを管理 — RcloneView でファイルを同期・バックアップ"
authors:
  - morgan
description: "Netease のS3互換オブジェクトストレージをRcloneViewに接続し、クロスプラットフォームでの閲覧、ドラッグ&ドロップ転送、スケジュールバックアップジョブを実現します。"
keywords:
  - Netease オブジェクトストレージ
  - Netease クラウドストレージ管理
  - S3互換ストレージ GUI
  - RcloneView Netease
  - Netease オブジェクトストレージ 同期
  - S3互換ストレージ バックアップ
  - Netease NOS ストレージ
  - オブジェクトストレージ ファイルマネージャー
  - マルチクラウド GUI クライアント
  - S3 エンドポイント アクセスキー設定
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

# Netease ストレージを管理 — RcloneView でファイルを同期・バックアップ

> 別のCLIワークフローを使うことなく、他のすべてのクラウドに使っているのと同じウィンドウで、Netease のS3互換オブジェクトストレージを閲覧・転送・バックアップできます。

Netease のS3互換オブジェクトサービスを通じてストレージをプロビジョニングするチームは、ほとんどのデスクトップファイルマネージャーが主要な一般消費者向けドライブしか理解しないため、他のクラウド環境とは別にスクリプト化することがよくあります。RcloneView はNetease を他のS3互換リモートと同じように扱います — 同じエクスプローラー、同じ同期ジョブ、同じフォルダ比較 — そのため、Netease バケットはGoogle Drive、Dropbox、ローカルディスクと並んで一つのインターフェースに収まります。RcloneView は一つのウィンドウから90以上のプロバイダーをマウントし同期します、Windows、macOS、Linux で。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Netease オブジェクトストレージの接続

RcloneView にNetease を追加するには、標準のS3互換リモートのフローに従います。新しいリモートを作成し、S3プロトコルタイプを選択したら、Access Key ID、Secret Access Key、そしてバケットのリージョンに対応するNetease エンドポイントURLを入力します。保存すると、リモートはエクスプローラー内に独自のタブとして表示され、その中のすべてのフォルダはローカルドライブと同じように閲覧できます — バケットの中身を確認するために別のコンソールタブやCLIセッションは必要ありません。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView でNetease オブジェクトストレージ用の新しいS3互換リモートを追加" class="img-large img-center" />

RcloneView は各リモートの設定を独立して保存するため、複数のNetease バケット — または異なるアクセス範囲での同じバケット — を並べて登録し、毎回ターミナルで再認証する代わりにワンクリックで切り替えることができます。

## Netease と他のクラウド間でのデータ移動

Netease が接続されると、パネル間のドラッグ&ドロップがクロスリモート転送を自動的に処理します。Netease から別のリモートのパネルにファイルをドラッグするとコピーが実行され、同じNetease バケット内でドラッグするとファイルが移動します。これにより、冗長性のためにNetease からBackblaze B2 へオブジェクトの一部をミラーリングするような臨時の移行が、一回限りのrclone コマンドを書く代わりに2つのパネルを開くだけで済むようになります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView でNetease オブジェクトストレージと別のリモート間のクラウド間転送" class="img-large img-center" />

繰り返し行う転送には、4ステップの同期ウィザードでNetease をソースまたはデスティネーションに設定し、ファイルサイズやファイルの経過時間によるフィルターを適用し、実際に何かが動く前にまずドライランを実行して、コピーまたは削除される内容を正確にプレビューできます。

## 定期バックアップのスケジュール設定

一度限りの転送ではなく継続的な保護のために、Netease を対象とした同期ジョブは、分・時・日・月のcrontab形式フィールドを使って定期スケジュール(PLUSライセンス)で実行できます。ジョブ履歴はその後、すべての実行を記録します — 開始時刻、所要時間、転送速度、ファイル数 — そのため、生のログファイルを掘り返すことなく、何がいつ移動したかの具体的な監査証跡を持つことができます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView でNetease オブジェクトストレージへの定期バックアップジョブをスケジュール" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. 新しいリモートを作成し、S3互換タイプを選択して、Netease のAccess Key、Secret Key、エンドポイントを入力します。
3. Explorer パネルでNetease リモートを開き、バケットとオブジェクトが正しく読み込まれることを確認します。
4. 別のリモートまたはローカルディスクにバケットをミラーリングする同期ジョブを設定し、最初にドライランを実行します。

Netease がリモートとして設定されると、RcloneView 内の他のすべてのストレージプロバイダーと同じように動作します — クラウドスタックの残りとは別に管理すべきシステムが一つ減ります。

---

**関連ガイド:**

- [China Mobile ストレージを管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-china-mobile-cloud-sync-backup-rcloneview)
- [Alibaba OSS クラウドストレージを管理 — RcloneView で同期・バックアップ](https://rcloneview.com/support/blog/manage-alibaba-oss-cloud-sync-backup-rcloneview)
- [Huawei OBS クラウドストレージを管理 — RcloneView で同期・バックアップ](https://rcloneview.com/support/blog/manage-huawei-obs-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

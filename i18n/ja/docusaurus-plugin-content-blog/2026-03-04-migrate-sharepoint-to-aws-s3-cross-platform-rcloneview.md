---
slug: migrate-sharepoint-to-aws-s3-cross-platform-rcloneview
title: "RcloneViewでSharePointファイルをAWS S3に移行してクロスプラットフォームアクセスを実現"
authors:
  - tayson
description: "RcloneViewを使用して、Microsoft SharePointのドキュメントライブラリをAWS S3へ移行またはバックアップし、クロスプラットフォームアクセス、長期アーカイブ、マルチクラウド冗長化を実現する方法。"
keywords:
  - sharepoint to s3
  - sharepoint migration aws
  - sharepoint backup s3
  - migrate sharepoint files
  - sharepoint to aws transfer
  - sharepoint archival s3
  - sharepoint cross platform
  - sharepoint rclone
  - sharepoint s3 sync
  - sharepoint document library backup
tags:
  - RcloneView
  - sharepoint
  - aws-s3
  - cloud-storage
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでSharePointファイルをAWS S3に移行してクロスプラットフォームアクセスを実現

> SharePointはMicrosoft中心のチームには最適ですが、AWS上にデータが必要な場合やMicrosoftエコシステム外からのアクセスが必要な場合、ファイルを取り出すのは想像以上に困難です。RcloneViewがそのギャップを埋めます。

Microsoft SharePointはMicrosoft 365と深く統合されており、多くの企業でデフォルトのドキュメントストアとなっています。しかし、開発チームがAWS上で稼働している場合、データサイエンスのパイプラインでS3アクセスが必要な場合、あるいは単にクロスプラットフォームのバックアップが必要な場合、SharePointからのデータ抽出は課題となります。RcloneViewはSharePointのドキュメントライブラリに接続し、視覚的に確認可能なワークフローでコンテンツをS3(または他のクラウド)に転送します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜSharePointをS3に移行するのか?

- **AWSベースのインフラ** — アプリケーションとコンピューティングがAWS上で稼働している場合、データもそこに置く必要があります。
- **クロスプラットフォームアクセス** — S3は汎用APIを通じて、あらゆる言語、フレームワーク、プラットフォームからアクセス可能です。
- **コスト効率の良いアーカイブ** — S3 GlacierはSharePointよりも安価な長期ストレージを提供します。
- **コンプライアンス** — 一部の規制では、Microsoftエコシステム外にデータのコピーを保持することが求められます。
- **ベンダーの多様化** — 単一ベンダーへの依存を減らします。

## SharePointへの接続

1. **リモートを追加**をクリックし、**SharePoint**(または**OneDrive for Business**)を選択します。
2. OAuthで認証します — RcloneViewがブラウザを開き、Microsoftのログイン画面が表示されます。
3. アクセスしたいSharePointサイトとドキュメントライブラリを選択します。
4. 保存すると、SharePointのライブラリが閲覧可能になります。

### AWS S3への接続

1. **リモートを追加**をクリックし、**Amazon S3**を選択します。
2. アクセスキーIDとシークレットアクセスキーを入力します。
3. リージョンを選択します。

<img src="/support/images/en/blog/new-remote.png" alt="Add SharePoint and S3 remotes" class="img-large img-center" />

## 移行ワークフロー

### フェーズ1: 閲覧と評価

SharePointのライブラリとS3バケットを並べて表示します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse SharePoint alongside S3" class="img-large img-center" />

### フェーズ2: コピー

1. **コピージョブ**を作成します: SharePointライブラリ → S3バケット。
2. 転送を実行し、リアルタイムで監視します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SharePoint to S3 transfer" class="img-large img-center" />

### フェーズ3: 検証

[フォルダ比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)機能で完全性を確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify SharePoint migration to S3" class="img-large img-center" />

### フェーズ4: 継続的な同期の自動化

移行期間中はSharePointとS3を同期状態に保ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule SharePoint to S3 sync" class="img-large img-center" />

## ユースケース

- **データパイプラインへの取り込み** — SharePointのドキュメントを自動的にS3にプッシュし、AWS Lambda、Glue、Athenaで処理します。
- **長期アーカイブ** — 古いSharePointコンテンツをS3 Glacierに移動し、Microsoftのライセンスコストを節約します。
- **災害復旧** — 重要なSharePointデータの独立したS3コピーを保持します。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **SharePoint**と**AWS S3**をリモートとして追加します。
3. **コピー、検証、スケジュール設定** — 完全移行または継続的な同期を行います。

SharePointを使うからといって、ベンダーロックインを受け入れる必要はありません。RcloneViewはMicrosoftデータをポータブルにします。

---

**関連ガイド:**

- [SharePointからGoogle Driveへの移行](https://rcloneview.com/support/blog/sharepoint-to-google-drive-migration-rcloneview)
- [AWS S3およびS3互換ストレージの追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

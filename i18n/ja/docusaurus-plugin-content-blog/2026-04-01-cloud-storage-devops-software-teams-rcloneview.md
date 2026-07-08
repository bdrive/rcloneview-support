---
slug: cloud-storage-devops-software-teams-rcloneview
title: "RcloneViewによるDevOpsおよびソフトウェア開発チーム向けクラウドストレージ活用"
authors:
  - tayson
description: "ソフトウェアチームは、ビルド成果物、デプロイパッケージ、データベースバックアップ、ドキュメントなどにクラウドストレージを利用しています。RcloneViewは、パイプラインに複雑さを加えることなくマルチクラウドストレージを管理できます。"
keywords:
  - cloud storage devops teams
  - software development cloud backup
  - devops cloud storage management
  - build artifacts cloud storage
  - database backup cloud rcloneview
  - rcloneview devops workflow
  - deployment packages cloud backup
  - s3 artifacts rcloneview
  - developer cloud storage tools
  - cloud file management software teams
tags:
  - RcloneView
  - cloud-storage
  - industry
  - business
  - guide
  - backup
  - automation
  - amazon-s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewによるDevOpsおよびソフトウェア開発チーム向けクラウドストレージ活用

> DevOpsチームは、S3、GCS、その他のクラウドプロバイダーにまたがってビルド成果物、リリースパッケージ、データベースダンプ、ログ、ドキュメントを管理しています。RcloneViewは、パイプラインに複雑さを加えることなく、クラウドストレージを視覚的に管理できるレイヤーを提供します。

ソフトウェアチームは常にクラウドストレージとやり取りしています。CI/CDパイプラインはビルド成果物をS3にプッシュし、データベースバックアップはBackblaze B2に保存され、ドキュメントは非技術系の関係者向けにGoogle Driveに同期され、リリースアーカイブはオブジェクトストレージに蓄積されていきます。このようなストレージの管理——古い成果物の削除、バックアップの確認、プロバイダー間の移行——は通常、使い捨てスクリプトを書く開発者に任されがちです。RcloneViewは、そうしたスクリプトを、チームの誰もが使えるビジュアルインターフェースに置き換えます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ソフトウェア開発におけるクラウドストレージの接点

| アセット | 一般的な保存先 | 管理担当 |
|-------|----------------|-----------|
| ビルド成果物 | AWS S3、GCS | CI/CDパイプライン |
| リリースパッケージ | S3、GitHub Releases | リリースエンジニア |
| データベースバックアップ | S3、Backblaze B2 | DBA / DevOps |
| ログアーカイブ | S3 Glacier、GCS Coldline | 運用チーム |
| ドキュメント | Google Drive、Confluence | 全チーム |
| MLモデルの重み | S3、GCS | データチーム |
| インフラスナップショット | クラウドプロバイダー純正機能 | DevOps |
| 共有開発アセット | Dropbox、Google Drive | 全チーム |

## DevOpsチーム向けユースケース

### 1) クロスクラウドでの成果物調査

ビルドパイプラインは、成果物を自動的にS3にプッシュすることが多くあります。パイプラインの外で成果物を調査、コピー、移動する必要がある場合、RcloneViewがビジュアルインターフェースを提供します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse S3 build artifacts in RcloneView" class="img-large img-center" />

S3バケットをナビゲートし、成果物のバージョンを並べて比較し、AWS CLIコマンドを書くことなく特定のビルドをステージング環境にコピーできます。

### 2) データベースバックアップの検証

自動データベースバックアップは毎晩実行されますが——それらは実際にクラウドストレージに正しく保存されているでしょうか?RcloneViewの**フォルダ比較**機能を使って、バックアップファイルが期待通りかを検証できます。

1. ローカルのバックアップディレクトリとS3の保存先を比較する。
2. 欠落したバックアップやサイズの異常を特定する。
3. 必要に応じて、失敗したバックアップを手動で再実行する。

### 3) 成果物のライフサイクル管理

古いビルド成果物はストレージコストを増大させます。RcloneViewを使えば以下が可能です。

- 保持期間を過ぎた**成果物を削除する**。
- リリースビルドを安価な長期保存のためにGlacierやColdlineに**移動する**。
- あるクラウドプロバイダーから別のプロバイダーへ**成果物を移行する**(S3 → GCS、またはAWSリージョン間の移行)。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Migrate build artifacts between cloud providers" class="img-large img-center" />

### 4) ディザスタリカバリ:重要なストレージのレプリケーション

重要なアプリケーションデータ(ユーザーのアップロードファイル、処理済みファイル、MLモデルなど)については、RcloneViewを使ってクラウドプロバイダー間でレプリケーションを行います。

- プライマリ: `aws-s3:prod-user-uploads/`
- DRレプリカ: `gcs:prod-user-uploads-dr/`

毎日の同期ジョブをスケジュールしてください。DR発生時には、アプリケーションを最新であることを確信してGCSバケットに向けることができます。

### 5) 非技術系関係者へのドキュメント同期

ConfluenceやGitのwikiにあるエンジニアリングドキュメントは、プロダクトマネージャーやクライアントが常にアクセスできるとは限りません。ドキュメントをPDFやHTMLとしてエクスポートし、RcloneViewを使って全員がアクセスできる共有のGoogle DriveやSharePointフォルダに同期しましょう。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule documentation sync to Google Drive" class="img-large img-center" />

### 6) チーム横断でのアセット配布

データチーム、QAチーム、フロントエンドチームはそれぞれ、共有ファイルの異なるサブセットを必要とします。RcloneViewの**フィルタルール**を使って、各チームのストレージに関連するサブセットのみを同期できます。

```
--include /qa-test-data/**
--exclude /proprietary-models/**
```

## ストレージコスト管理

DevOpsチームは、自分たちが際限なく膨らむクラウドストレージコストの管理責任者だと気づくことがよくあります。RcloneViewは以下を支援します。

- 保存されているものと実際に参照されているものをフォルダ比較して、**未使用の成果物を発見する**。
- バケット構造をビジュアルにナビゲートして、**最大のストレージ消費元を特定する**。
- スケジュールに従って、**コールドデータを自動的に階層型ストレージ**(Glacier、Coldline)に移動する。

## 開発チームのためのセキュリティ考慮事項

| プラクティス | 実装方法 |
|----------|---------------|
| 最小権限のIAM | 環境ごとに最小限のS3権限を持つ別々のRcloneView認証情報を作成する |
| 機密性の高いエクスポートの暗号化 | PIIを含むデータベースダンプにはCryptリモートを使用する |
| アクセスの監査 | 転送の監査証跡としてRcloneViewのジョブ履歴を利用する |
| 認証情報のローテーション | IAMキーがローテーションされた際にRcloneViewのリモート設定を更新する |

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロードする**。
2. **クラウドプロバイダーを接続する**——S3、GCS、Azure Blob、Backblaze B2。
3. CLIコマンドを書かずに**ビルド成果物を閲覧・管理する**。
4. 重要なストレージのために**DRレプリケーションジョブを設定する**。

DevOpsのクラウドストレージ管理は、タスクごとにスクリプトを書く必要があってはなりません。RcloneViewがビジュアルな操作、一回限りの操作、スケジュール操作を担うことで、パイプラインは自動化に集中できます。

---

**関連ガイド:**

- [RcloneViewでS3、Wasabi、R2を一元管理する](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [RcloneViewによるウォームスタンバイDR](https://rcloneview.com/support/blog/warm-standby-dr-rcloneview)
- [RcloneViewによるAIトレーニングデータセットパイプライン](https://rcloneview.com/support/blog/ai-training-dataset-pipeline-rcloneview)

<CloudSupportGrid />

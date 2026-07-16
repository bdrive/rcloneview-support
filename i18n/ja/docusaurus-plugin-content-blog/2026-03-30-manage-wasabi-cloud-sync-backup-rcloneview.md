---
slug: manage-wasabi-cloud-sync-backup-rcloneview
title: "Wasabiストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "RcloneViewでWasabiホットクラウドストレージを管理。S3互換バケットの同期、バックアップのスケジュール設定、ビジュアルGUIによるゼロ転送料金でのデータ転送。"
keywords:
  - wasabi cloud sync
  - wasabi backup rcloneview
  - wasabi s3 compatible
  - wasabi storage manager
  - wasabi rclone gui
  - wasabi hot storage
  - wasabi zero egress
  - wasabi bucket management
  - wasabi cloud transfer
  - wasabi multi-cloud backup
tags:
  - wasabi
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Wasabiストレージを管理 — RcloneViewでファイルを同期・バックアップ

> WasabiはS3互換のホットストレージをゼロ転送料金で提供し、RcloneViewはそれらのバケット管理をドラッグ＆ドロップのように簡単にします。

Wasabiは、TBあたり月額7.99ドルで転送、API呼び出し、データ取得に一切課金しないという透明性の高い料金モデルで、オブジェクトストレージ市場で強い地位を築いてきました。頻繁なアクセスにペナルティを課すコールドストレージ階層とは異なり、すべてのWasabiバケットはホットストレージであり、取得の遅延なしにファイルへ即座にアクセスできます。RcloneViewはWasabi向けの完全なグラフィカルインターフェースを提供し、すべてのWasabiリージョンにわたるバケット管理、他のクラウドに対する同期の実行、スクリプトを書かずにバックアップスケジュールを自動化することができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでWasabiを接続する

Wasabiを追加するには、リモートマネージャーを開き、プロバイダータイプとして**S3互換**を選択し、ベンダーリストから**Wasabi**を選びます。アクセスキーとシークレットキーを入力し、適切なリージョンエンドポイントを選択します。Wasabiはus-east-1（アッシュバーン）、us-east-2（マナサス）、us-west-1（ヒルズボロ）、us-central-1（ダラス）、eu-central-1（アムステルダム）、eu-central-2（フランクフルト）、eu-west-1（ロンドン）、eu-west-2（パリ）、ap-northeast-1（東京）など、複数のデータセンターを運営しています。

正しいリージョンを選ぶことは非常に重要です。Wasabiは最低90日間のストレージ保存期間課金を適用しており、90日以内にファイルを削除しても、その期間全体存在していたものとして課金されます。プライマリのデータソースに近いリージョンを選択することで、アップロードや同期のレイテンシを低減でき、大規模な定期ジョブでは重要になります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Wasabi remote in RcloneView Remote Manager" class="img-large img-center" />

## ドラッグ＆ドロップによるファイル管理

接続すると、Wasabiバケットは他のリモートと同様に2ペインのエクスプローラーに表示されます。フォルダ階層の閲覧、ファイルのプレビュー、メタデータの確認が可能です。ローカルドライブや他のクラウドリモートからファイルをドラッグしてWasabiペインにドロップすると、すぐに転送が開始されます。

RcloneViewのマルチスレッドエンジンはWasabiのインフラに適しています。Wasabiは高スループットのアップロードをサポートしており、RcloneViewでは並列転送数とチャンクサイズを設定して帯域幅の利用を最大化できます。数テラバイト規模のデータセットでも、ギガビット接続を飽和させるほどの持続的なスループットを実現できます。

リアルタイム転送モニターは、ファイルごとの進捗、速度、推定残り時間を表示します。転送中に一時的なエラー（ネットワークの瞬断やAPIからの503エラーなど）が発生した場合、RcloneViewは設定可能なバックオフ間隔で自動的に再試行します。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging and dropping files to Wasabi storage in RcloneView" class="img-large img-center" />

## バックアップの自動化とクロスクラウド同期

Wasabiのゼロ転送料金は、マルチクラウドバックアップ戦略のハブとして理想的です。Google Drive、AWS S3、ローカルNASへWasabiからデータをダウンロードする際、ダウンロードコストを気にする必要がありません。RcloneViewのジョブスケジューラーを使えば、これらの転送をcronスケジュールで自動化できます。

一般的なパターンは、Wasabiを中心的なバックアップリポジトリとして使うことです。Google DriveとDropboxからWasabiへの夜間同期をスケジュールし、その後、地理的な冗長性のためにWasabiからBackblaze B2のような二次プロバイダーへ週次コピーを実行します。RcloneViewのジョブチェーン機能を使えば、これらのワークフローを定義し、単一のダッシュボードから監視できます。

Wasabiは、不変バックアップのためのオブジェクトロックもサポートしています。バージョニングと組み合わせることで、データ保持に関する規制要件を満たすWORM（Write-Once-Read-Many）準拠バケットを作成できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated backups to Wasabi storage in RcloneView" class="img-large img-center" />

## 転送パフォーマンスの監視

RcloneViewのリアルタイム監視パネルは、アクティブなWasabi転送に対するきめ細かな可視性を提供します。合計スループット、個々のファイルの進捗、完了した操作のローリングログを確認できます。ジョブ履歴パネルには過去のすべての転送記録が保存されており、バックアップの完全性の監査やパフォーマンス低下の診断が容易になります。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Wasabi file transfers in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Wasabiコンソールでアクセスキーを作成し、RcloneViewにS3互換リモートとして追加します。
3. Wasabiバケットを閲覧し、ローカルストレージや他のクラウドリモートからファイルをドラッグします。
4. スケジュール同期ジョブを設定して、Wasabiへの夜間バックアップを自動化します。

Wasabiの予測可能な料金体系は転送料金の予期しない発生をなくし、RcloneViewのビジュアルインターフェースは日常業務でS3のCLI構文を覚える必要をなくします。

---

**関連ガイド：**

- [RcloneViewでS3、Wasabi、R2を一元管理](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [RcloneViewでIDrive e2 S3クラウドバックアップを管理](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [RcloneViewでStorj分散型クラウド同期を管理](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)

<CloudSupportGrid />

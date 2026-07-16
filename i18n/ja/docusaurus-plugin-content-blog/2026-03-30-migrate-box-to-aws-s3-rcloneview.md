---
slug: migrate-box-to-aws-s3-rcloneview
title: "BoxからAWS S3へ移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewを使ってBoxからAWS S3へファイルを移行。チェックサム検証とスケジュールジョブで、エンタープライズコンテンツをスケーラブルなS3ストレージへ転送します。"
keywords:
  - box to aws s3
  - migrate box to s3
  - box cloud migration
  - aws s3 transfer
  - cloud-to-cloud migration
  - rcloneview box transfer
  - enterprise cloud migration
  - box to amazon s3
  - box backup to s3
  - object storage migration
tags:
  - box
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# BoxからAWS S3へ移行 — RcloneViewでファイルを転送

> 組織のコンテンツをBoxからAWS S3へ移すことで、スケーラブルでプログラム可能なストレージが利用可能になります — その面倒な作業をRcloneViewが引き受けます。

Boxはメタデータ、ワークフロー、ガバナンス機能を備えたエンタープライズコンテンツ管理に優れています。しかし、アップロードを処理するLambda関数、データレイクをクエリするAthena、アセットを配信するCloudFrontなど、アーキテクチャがAWSネイティブなサービスへシフトすると、S3にファイルを保存することでBoxとAWSスタックを橋渡しするミドルウェアが不要になります。RcloneViewはビジュアルなインターフェースを通じてBoxからS3バケットへファイルを移行し、フォルダ構造を維持しながらすべての転送を検証します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## BoxからAWS S3へ移行する理由

AWS S3は、頻繁にアクセスされるデータ向けのS3 Standardから、長期保存向けに月額1GBあたり0.00099ドルのS3 Glacier Deep Archiveまで、6つのストレージクラスにわたるきめ細かな料金設定で、事実上無制限のストレージを提供します。Boxはエンタープライズプランでユーザーあたり月額20ドルを超えることもあるユーザー単位のライセンス料金を課しており、そのストレージは個別割り当てではなくプール型です。

開発チームにとって、S3のエコシステムは他に類を見ません。イベント通知はLambda関数をトリガーし、S3 Selectはデータをその場でクエリし、バージョニングとレプリケーションルールはデータ損失を防ぎ、IAMポリシーはきめ細かなアクセス制御を提供します。BoxのAPIは高機能ですが、インフラレベルのストレージ操作ではなくコンテンツコラボレーション向けに設計されています。S3への移行により、ファイルストレージをAWSインフラの他の部分と整合させることができます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and AWS S3 remotes in RcloneView" class="img-large img-center" />

## BoxとS3のリモート設定

RcloneViewでプロバイダータイプとして「Box」を選択し、Boxリモートを追加します。OAuthフローによりブラウザが開きBox認証が行われます。Boxアカウントの資格情報でサインインし、RcloneViewを承認してください。このリモートはBoxのルートフォルダに接続され、あなたが所有する、あなたと共有されたすべてのフォルダを含みます。

AWS S3については、新しいリモートを作成し「Amazon S3」を選択します。AWSアクセスキーIDとシークレットアクセスキーを入力するか、RcloneViewがEC2インスタンス上で動作している場合はIAMロールを使用します。ターゲットリージョンを選択し、バケット名を指定します。RcloneViewは資格情報を検証し、バケットへのアクセスを確認します。新しいバケットを作成する必要がある場合は、まずAWSコンソールで希望のリージョン、暗号化、バージョニング設定を使って作成してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Box to S3 cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## 移行の実行

2ペインのエクスプローラーを使用し、片側でBoxを、もう片側でS3を閲覧します。移行したいBoxフォルダ — 部門ディレクトリ全体、プロジェクトアーカイブ、または特定のコンテンツツリー — を選択します。もう一方の側でターゲットのS3プレフィックスへ移動します。

管理された移行を行うには、ジョブマネージャーでCopyジョブを作成します。Boxをソース、S3をデスティネーションに設定します。「Copy」モードを使用すると、Boxからファイルを削除せずに転送でき、ロールバックの手段が確保できます。BoxのAPIはSHA-1チェックサムを使用し、S3はMD5とETagハッシュを保存します — RcloneViewはデフォルトでファイルサイズと更新日時を使って比較を行い、任意でチェックサム検証も利用できます。

BoxはAPIレート制限を設けています（エンタープライズアカウントで約毎秒10 APIコール）。RcloneViewは自動リトライと指数バックオフでこれらの制限を尊重します。数十万ファイル規模の大規模な移行では、スケジュールされた時間帯を使って複数日にわたりジョブを実行してください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a Box to AWS S3 migration job in RcloneView" class="img-large img-center" />

## 移行後の検証と切り替え

転送が完了したら、RcloneViewの比較機能を使って移行を検証します。両方のリモートを並べて開き、フォルダ比較を実行してファイル数、サイズ、構造を確認します。ジョブ履歴でスキップまたはエラーになったファイルを確認し、それらを再取得するためにジョブを再実行してください。

アクセスパターンに基づいてS3バケットのストレージクラスを設定することを検討してください。頻繁にアクセスされるプロジェクトファイルはS3 Standardに、アーカイブされたコンテンツはライフサイクルポリシーによりS3 Intelligent-TieringやGlacierへ移動できます。移行期間中はRcloneViewでBoxリモートをアクティブなままにしておき、すべてのユーザーがワークフローをS3へ移行し終えるまで増分同期ジョブを実行してください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to S3 migration transfers" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Boxリモートを作成する際、OAuth経由でBoxアカウントを認証します。
3. IAM資格情報でAWS S3リモートを追加し、ターゲットバケットとリージョンを選択します。
4. BoxからS3へのCopyジョブを作成し、レート制限の処理を設定し、大規模なデータセットの場合は複数日にわたりスケジュールします。

すべてのコンテンツがS3で検証されたら、アプリケーションを移行し、チームが切り替えを完了したらBoxストレージを廃止してください。

---

**関連ガイド:**

- [RcloneViewでBoxからSharePointとOneDriveへ移行](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [RcloneViewでBoxからGoogle Driveへ移行](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [RcloneViewでBoxストレージをネットワークドライブとしてマウント](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />

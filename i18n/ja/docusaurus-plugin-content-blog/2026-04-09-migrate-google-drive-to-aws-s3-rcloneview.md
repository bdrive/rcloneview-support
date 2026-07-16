---
slug: migrate-google-drive-to-aws-s3-rcloneview
title: "RcloneViewでGoogleドライブからAWS S3へ移行する"
authors:
  - tayson
description: "RcloneViewを使ってGoogleドライブからAWS S3へ移行する方法。両方のリモートを設定し、転送を計画し、データを移動して、移行を段階的に検証します。"
keywords:
  - rcloneview
  - google drive to aws s3
  - migrate google drive to s3
  - google drive s3 migration
  - google drive to amazon s3
  - cloud storage migration
  - google drive backup to s3
  - google workspace to aws
  - rclone google drive s3
  - cloud to cloud migration gui
tags:
  - RcloneView
  - google-drive
  - amazon-s3
  - migration
  - cloud-migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでGoogleドライブからAWS S3へ移行する

> Googleドライブから AWS S3 への移行により、オブジェクトレベルの制御、ライフサイクルポリシー、インフラグレードの耐久性が得られます — **RcloneView** はビジュアルなインターフェースを通じてこの転送を処理します。

Googleドライブはコラボレーションやドキュメント編集に優れていますが、きめ細かいアクセス制御、プログラムによる統合、長期アーカイブを必要とする組織にとっては、しばしば力不足になります。AWS S3 は 11 ナイン(99.999999999%)の耐久性、コールドストレージ向けの Glacier へのライフサイクル移行、IAM ベースのアクセスポリシーを提供します。Googleドライブから S3 への移行は、認証モデルの違い、ファイルセマンティクスの違い、そして場合によっては数テラバイトに及ぶデータのために、困難に思えるかもしれません。RcloneView はビジュアル GUI によって、その複雑さを裏側で処理し、プロセスを簡素化します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## GoogleドライブからAWS S3へ移行する理由

Googleドライブは、Google 固有のメタデータ(MIME タイプ、共有権限、ネイティブドキュメント形式(Docs、Sheets、Slides))を持つオブジェクトとしてファイルを保存します。AWS S3 はユーザー定義のメタデータを持つ生のバイトデータとしてオブジェクトを保存し、プログラムによるアクセスに対してより高い柔軟性を提供します。この移行の一般的な理由には次のようなものがあります。

- **コスト最適化**: S3 Standard は概ね $0.023/GB/月、S3 Glacier Deep Archive は $0.00099/GB/月まで下がります。アクセス頻度が低い大規模データセットの場合、S3 は Google Workspace のストレージプランよりも大幅に安くなります。
- **インフラ統合**: AWS 上で動作するアプリケーションは、IAM ロールを使って S3 に直接アクセスできるため、OAuth トークンや API クォータが不要になります。
- **コンプライアンス**: S3 は WORM コンプライアンス向けの Object Lock、IP ベースの制限のためのバケットポリシー、監査ログのための CloudTrail をサポートしています。
- **ライフサイクル管理**: 経過時間に応じて、Standard から Infrequent Access、さらに Glacier へと自動的にファイルを移行させることで、手作業を介さずにコストを削減できます。

## 両方のリモートを設定する

### Googleドライブのリモート

RcloneView の Remote Manager を開き、Googleドライブのリモートを追加します。OAuth 経由で認可し、フルアクセススコープを選択します。共有ドライブ(Shared Drives)を移行する必要がある場合は、セットアップ時に対象の共有ドライブを選択してください。大規模な移行の場合は、デフォルトの 100 秒あたり 10,000 クエリという上限を超えて API クォータを引き上げるために、自分の Google Cloud プロジェクトのクライアント ID を登録することを検討してください。

### AWS S3のリモート

Remote Manager で S3 リモートを追加します。AWS のアクセスキー ID とシークレットアクセスキーを入力し、対象リージョンを選択し、バケット名を指定します。バケットが存在しない場合は、RcloneView または AWS コンソールから作成できます。ストレージクラスについては、頻繁にアクセスするデータには Standard を、アーカイブ目的の移行には Standard-IA を選択してください。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでGoogleドライブとAWS S3のリモートを追加する" class="img-large img-center" />

## 移行を計画する

データを転送する前に、範囲を評価します。

1. **サイズ監査**: RcloneView のストレージ分析機能を使って、Googleドライブの総サイズを確認します。これにより S3 のコストと転送時間を見積もることができます。
2. **Googleドキュメントの取り扱い**: ネイティブの Google ドキュメント(Docs、Sheets、Slides)は、ドライブ上ではファイルサイズを持ちません。移行時、RcloneView はこれらを標準形式(docx、xlsx、pptx)にエクスポートします。これらのエクスポートが必要か、あるいはスキップできるかを判断してください。
3. **フォルダ構造**: Googleドライブでは、S3 が異なる扱いをする文字がファイル名に使用できる場合があります。RcloneView は特殊文字を自動的にエンコードしますが、極端に深いネストや非常に長いパス名がないか、フォルダ構造を確認してください。
4. **帯域幅**: 100 Mbps での 1 TB の移行には、概ね 22 時間かかります。他の操作に支障をきたさないよう、オフピーク時間帯に移行をスケジュールするか、帯域幅の制限を設定してください。

## 移行を実行する

左ペインにGoogleドライブ、右ペインに S3 を開きます。ドライブ側では移行元フォルダに、S3 側では移行先のプレフィックスに移動します。ドライブ全体をコピーすることも、特定のフォルダのみを選択することもできます。

RcloneView はGoogleドライブの MD5 チェックサムを使用し、5 GB 未満のファイルについては S3 の ETag と比較します。マルチパートでアップロードされたより大きなファイルについては、S3 の ETag は標準の MD5 ではないため、RcloneView はサイズと更新日時による比較にフォールバックします。

最初の移行では、移行先でファイルが削除されるリスクを避けるため、sync ではなく copy ジョブを使用してください。初回の転送が完了し、データを検証した後であれば、継続的なレプリケーションのために sync に切り替えることができます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewのツーペインエクスプローラーでGoogleドライブをAWS S3に移行する" class="img-large img-center" />

## 移行を検証する

転送が完了したら、RcloneView の比較機能を使って、すべてのファイルが到着したことを確認します。Googleドライブの移行元と S3 の移行先を選択し、比較を実行します。一致するファイルは同一として表示され、異なる、または欠落しているファイルはハイライト表示されます。

重要な移行の場合は、両側でチェックサムを計算して不一致を報告する check 操作を実行してください。時間はかかりますが、データの整合性について暗号学的な検証が得られます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewでGoogleドライブからS3への移行を検証する" class="img-large img-center" />

## 移行後: 継続的な同期またはカットオーバー

移行期間中にGoogleドライブと S3 を並行して運用する場合は、RcloneView で毎日の sync ジョブをスケジュールし、S3 をドライブの変更に合わせて最新の状態に保ってください。カットオーバーの準備が整ったら、sync ジョブを無効化し、Googleドライブのストレージを廃止してください。

Google Workspace から AWS ネイティブなスタックへ移行する組織にとって、この移行は、より大きなプラットフォーム移行の一部であることがよくあります。RcloneView がデータ移動を担い、チームはアプリケーションとワークフローの変更に専念できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewでGoogleドライブからS3への継続的な同期をスケジュールする" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** します。
2. Remote Manager でGoogleドライブと AWS S3 のリモートを追加します。
3. ストレージ監査を実行して、移行のサイズとコストを見積もります。
4. ドライブから S3 への copy ジョブを実行し、compare で検証します。
5. 必要に応じて、カットオーバーの準備が整うまで継続的な sync をスケジュールします。

Googleドライブはコラボレーションを得意としますが、AWS S3 は、本番ワークロードが求める耐久性、ライフサイクル管理、プログラムによるアクセスを提供します。RcloneView は、シンプルな移行パスでこの2つを橋渡しします。

---

**関連ガイド:**

- [Googleドライブを追加する](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [AWS S3およびS3互換ストレージを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

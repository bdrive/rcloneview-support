---
slug: migrate-google-drive-to-cloudflare-r2-rcloneview
title: "RcloneViewでGoogle DriveからCloudflare R2へ移行する"
authors:
  - tayson
description: "RcloneViewを使ってGoogle DriveのファイルをCloudflare R2へ移行する方法。セットアップ、Google Docsの変換、検証、egress料金ゼロのメリットまでを解説するステップバイステップガイド。"
keywords:
  - rcloneview
  - google drive to cloudflare r2
  - migrate google drive
  - google drive migration tool
  - cloudflare r2 migration
  - cloud to cloud migration
  - google docs export
  - zero egress migration
  - google drive backup r2
  - cloud storage migration gui
tags:
  - RcloneView
  - google-drive
  - cloudflare-r2
  - migration
  - cloud-migration
  - cloud-to-cloud
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでGoogle DriveからCloudflare R2へ移行する

> Google DriveからCloudflare R2へ移行することで、egress料金をなくし、S3互換のデータアクセスが可能になります。**RcloneView**なら移行のすべてを視覚的に行えます。

Google Driveは強力なコラボレーションプラットフォームですが、ストレージ需要が増え、データアクセスのパターンが変化するにつれ、多くのチームがそのスケーラビリティとAPIの柔軟性を求めてオブジェクトストレージに目を向けています。Cloudflare R2はegress料金ゼロのS3互換ストレージを提供しており、プログラムから提供する必要があるデータの移行先として魅力的です。RcloneViewは、これら2つの大きく異なるストレージモデルの橋渡しをし、Google Docs形式の変換、大容量ファイルの転送、移行後の検証を1つのGUIで処理します。

このガイドでは、両方のリモートの設定から、すべてのファイルが無事到着したことを確認するまで、移行プロセス全体を解説します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google DriveからCloudflare R2へ移行する理由

Google Driveの料金は100GBで月額1.99ドルから始まり、Google Workspace配下のエンタープライズ向けプランへとスケールします。コラボレーション用途では手頃な価格ですが、Google Driveはプログラムからのデータアクセス向けには設計されていません。APIレート制限、S3互換性の欠如、ユーザーごとのストレージ容量制限により、静的アセットの配信、データセットのホスティング、CI/CDパイプラインへのデータ供給には不向きです。

Cloudflare R2はこれらの制約を解消します。GBあたり月額0.015ドルでegress料金がゼロのため、読み取りが多いワークロードでは大幅にコストを抑えられます。S3互換APIを備えているため、既存のツールやSDKを変更なしで利用できます。データがGoogle Driveから始まったものの、今後はS3エンドポイント経由でアクセスする必要がある場合、R2への移行は理にかなった選択です。

## RcloneViewでGoogle Driveを設定する

Remote Managerを開き、Google Driveのリモートを追加します。RcloneViewはOAuth 2.0を使用します。authorizeをクリックし、Googleアカウントにログインしてアクセスを許可してください。トークンはrcloneの設定にローカルで保存されます。

共有ドライブを持つGoogle Workspaceアカウントから移行する場合は、個人のマイドライブだけでなく、特定の共有ドライブにアクセスするようRcloneViewを設定できます。これは、データがチームドライブに分散している組織的な移行において重要です。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでGoogle Driveのリモートを追加する" class="img-large img-center" />

## RcloneViewでCloudflare R2を設定する

R2をS3互換リモートとして追加します。Remote Managerで**Amazon S3 Compatible**を選択し、以下を設定します。

- **Provider**: Cloudflare
- **Access Key ID**および**Secret Access Key**: Cloudflareダッシュボードから生成
- **Endpoint**: `https://<account-id>.r2.cloudflarestorage.com`

移行を開始する前に、Cloudflareダッシュボードまたは RcloneViewのエクスプローラーから移行先のバケットを作成してください。後で識別しやすいよう、データソースを反映したバケット名（例: `gdrive-archive-2026`）を選ぶとよいでしょう。

## Google Docs形式の変換を扱う

これはGoogle Driveから移行する際に最も重要な考慮点です。Googleのネイティブ形式（Docs、Sheets、Slides、Drawings）は従来の意味でのファイルではありません。これらはGoogleのエコシステム内にのみ存在し、ディスク上のバイト数はゼロです。

RcloneViewがこれらのファイルをエクスポートする際、標準形式に変換します。

- **Google Docs**は`.docx`（Microsoft Word）に変換されます
- **Google Sheets**は`.xlsx`（Microsoft Excel）に変換されます
- **Google Slides**は`.pptx`（Microsoft PowerPoint）に変換されます

エクスポート形式はリモート設定で変更できます。チームがPDFやOpenDocument形式を好む場合は、移行を開始する前に調整してください。エクスポートされたファイルは、コメントや提案モード、リアルタイムコラボレーションのリンクといったGoogle特有の機能を失う点に注意してください。

すでに標準形式になっているファイル（アップロード済みのPDF、画像、ZIPなど）については、変換は不要で、単純なバイト単位のコピーとして転送されます。

## 移行の実行

両方のリモートを設定したら、2ペインのエクスプローラーを開きます。左側にGoogle Drive、右側にR2バケットを配置します。ドライブ全体を移行することも、特定のフォルダのみを選択することもできます。

完全な移行を行うには、同期ジョブを使用します。RcloneViewはGoogle Drive上のすべてのファイルを列挙し、Googleのネイティブ形式をエクスポートしてR2へすべて転送します。リアルタイム監視ダッシュボードには、ファイルごとの進捗、転送速度、完了予定時刻が表示されます。

大規模な移行（数百ギガバイト以上）の場合は、以下の最適化を検討してください。

- **並列転送数を増やす**: R2は高い並行性を問題なく処理します。並列転送数を8～16に増やしてスループットを最大化してください。
- **帯域幅スケジューリングを使う**: 業務時間中に移行する場合は、他のネットワーク利用者への影響を避けるため帯域幅を制限してください。
- **段階的に実行する**: 一度にすべてを移行するのではなく、フォルダ単位で移行してください。これにより、各バッチの検証や、中断時の再開が容易になります。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneViewでGoogle DriveからR2への移行の進捗を監視する" class="img-large img-center" />

## Compareで移行を検証する

移行が完了したら、RcloneViewのcompare（比較）操作をGoogle DriveとR2の間で実行します。compareビューでは以下がハイライトされます。

- **ソースにのみ存在するファイル**: 転送に失敗した、またはスキップされた項目
- **移行先にのみ存在するファイル**: 想定外の余分な項目（まれですが確認する価値があります）
- **内容が異なるファイル**: サイズやハッシュの不一致で、転送が不完全であることを示す項目

Google Docsのファイルは、エクスポートされた形式がゼロバイトのGoogleネイティブ形式と異なるため、常に「異なる」と表示される点に注意してください。意味のある比較を行うには、ネイティブでないファイルに注目してください。標準ファイルで不一致が表示された場合は、同期を再実行して不足または変更されたアイテムのみを転送してください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewのcompareでGoogle DriveからR2への移行を検証する" class="img-large img-center" />

## 移行後: 増分同期

初回の移行後、移行期間中はR2をGoogle Driveと同期させておきたい場合があります。RcloneViewでスケジュール同期ジョブを設定してください。ニーズに応じて毎日または毎時実行します。これにより、Google Driveに新たに追加されたファイルが完全に切り替えるまで自動的にR2へ複製されます。

移行が完了し、すべてのアクセスポイントがR2を参照するようになったら、同期ジョブを無効化し、必要に応じてGoogle Driveのデータをアーカイブまたは削除できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewでGoogle DriveからR2への増分同期をスケジュールする" class="img-large img-center" />

## ジョブ履歴と監査証跡

移行を実行するたびに、RcloneViewのジョブ履歴に記録されます。各実行について、転送されたファイル数、移動したバイト数、発生したエラー、経過時間を確認できます。これはコンプライアンス目的の監査証跡として役立ち、移行中または移行後に発生した問題のトラブルシューティングにも役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Google DriveからR2への移行実行を示すジョブ履歴" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. OAuth経由でGoogle Driveを追加し、Cloudflare R2をS3互換リモートとして追加します。
3. Google Docsのエクスポート形式（docx、xlsx、pptxまたはお好みの代替形式）を設定します。
4. 2ペインのエクスプローラーを使って移行を実行し、compare機能で結果を確認します。

Google Driveはコラボレーションに優れていますが、S3互換でegress料金のかからないストレージが必要な場合、Cloudflare R2が移行先となり、RcloneViewがその架け橋となります。

---

**関連ガイド:**

- [Google Driveを追加する](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [AWS S3およびS3互換ストレージを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [フォルダ内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />

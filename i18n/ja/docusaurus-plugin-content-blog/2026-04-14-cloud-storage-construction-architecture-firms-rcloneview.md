---
slug: cloud-storage-construction-architecture-firms-rcloneview
title: "建設・建築事務所向けクラウドストレージ — RcloneViewでファイル管理を効率化"
authors:
  - tayson
description: "RcloneViewは、建設・建築事務所が大容量のCADファイル、BIMモデル、プロジェクトアーカイブを複数のクラウドストレージプロバイダーにまたがって管理し、自動バックアップを行うのを支援します。"
keywords:
  - cloud storage construction firms
  - architecture firm cloud backup
  - CAD files cloud storage
  - BIM cloud sync
  - construction project file management
  - RcloneView architecture
  - cloud backup for architects
  - project archive cloud storage
tags:
  - industry
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 建設・建築事務所向けクラウドストレージ — RcloneViewでファイル管理を効率化

> 建築・建設事務所は、Revitモデル、AutoCAD図面、点群スキャンなど、信頼性の高いスケジュールバックアップを必要とする巨大でバージョン管理されたファイルを扱います。RcloneViewは、これらすべてを単一のGUIから処理します。

中規模の建築事務所は、進行中のプロジェクトごとに数十ギガバイトのBIM(Building Information Modeling)データを生成します。Revitファイルは日常的に1GBを超え、LiDAR測量による点群スキャンは1現場あたり50〜100GBに達することもあります。プロジェクトが18か月間続き、3つの拠点にまたがる20人のコラボレーターが関わる場合、問題はクラウドストレージを使うかどうかではなく、どのストレージ階層を使い、どのようにワークフローを自動化するかです。RcloneViewは、ファイルストレージと90以上のクラウドプロバイダーの間の欠けているレイヤーを提供し、IT担当者がカスタムスクリプトを保守する必要をなくします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 複数のクラウドプロバイダーにまたがるプロジェクトアーカイブの管理

建設会社は、進行中のプロジェクトは高速なローカルアクセスのためにNASや共有サーバーに置き、完了したプロジェクトのアーカイブはBackblaze B2やAmazon S3 Glacierといったコスト効率の良いクラウドストレージに移動するという、階層型ストレージのアプローチをよく採用します。RcloneViewは同じインターフェースから両方の階層を管理できます。

`NAS:/Projects/Active/` を毎晩Backblaze B2にミラーリングする同期(Sync)ジョブを設定し、完了とマークされたプロジェクトをB2からS3 Glacier互換のディープアーカイブへ移動する別のコピー(Copy)ジョブを用意しましょう。ジョブマネージャーがスケジューリングを処理し、ジョブ履歴タブは、BIMデータ管理に関するISO 19650の文書化要件を満たす監査証跡を提供します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly project archive sync jobs in RcloneView" class="img-large img-center" />

## 大容量のCADファイルとBIMファイルを確実に処理する

Revitファイルや AutoCADファイルは容量が大きく、編集中には頻繁にロックされ、部分転送に対して敏感です。rcloneをベースとするRcloneViewの同期エンジンは、他のプロセスによってロックされているファイルをスキップし、ログタブでフラグを立てることで、破損したアップロードを防ぎます。特に大きなファイルについては、RcloneViewの**Chunker**仮想リモートを有効にすることで、プロバイダーのサイズ制限を超えるファイルを扱いやすいチャンクに分割できます。

クラウドベースのBIMコラボレーションプラットフォーム(Autodesk Construction Cloud、BIM 360)を使用している事務所向けには、RcloneViewがDWGエクスポート、PDFシートセット、IFCファイルといったエクスポート済みデータパッケージのバックアップを、オフラインの安全策として二次的なクラウドストレージへ行います。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Uploading CAD project files to cloud storage with RcloneView" class="img-large img-center" />

## 現場写真とドローン測量データのストレージ

建設現場のドキュメントには、JPEG、RAW、オルソモザイクTIFFファイルなど、日々の現場写真やドローン測量の成果物が何千枚も含まれ、あっという間に容量が積み上がります。日々の写真撮影を行う現場では、週あたり5〜15GBが生成されます。RcloneViewのフィルタルールを使えば、専用の写真バックアップジョブに特定のファイルタイプ(`.jpg`、`.tif`、`.raw`)のみを含め、技術図面のアーカイブとは分けて管理できます。

1:N同期機能を使えば、現場写真ディレクトリをGoogle Drive(チーム間での簡単な共有用)とAmazon S3(長期アーカイブ用)の両方に同時にバックアップできます。両方の転送先が1回のジョブ実行で同じファイルを受け取り、アップロード帯域幅が二倍になることはありません — RcloneViewはソースから両方の転送先へ同時にストリーミングします。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing site photos to multiple cloud destinations with RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. リモートマネージャーでNAS、Backblaze B2、Amazon S3のリモートを追加します。
3. 進行中のプロジェクトアーカイブ用の夜間同期ジョブと、完了したプロジェクトの移行用のコピージョブを作成します。
4. 各ジョブに関連するCAD、BIM、写真ファイルのタイプのみを含めるフィルタルールを追加します。

RcloneViewは、その場しのぎのクラウドアップロードを、構造化されたスケジュールバックアップシステムへと変え、ITの負担を増やすことなく、かけがえのないプロジェクトデータを保護します。

---

**関連ガイド:**

- [RcloneViewによる建築・エンジニアリング向けクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-architecture-engineering-cad-rcloneview)
- [S3 GlacierとRcloneViewによるコールドアーカイブ](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [1:N同期 — RcloneViewで複数の転送先へ](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />

---
slug: cloud-storage-architecture-firms-rcloneview
title: "建築設計事務所向けクラウドストレージ — RcloneViewでCADとBIMファイルを管理する"
authors:
  - alex
description: "建築設計事務所はRcloneViewを使って、Amazon S3、Google Drive、その他のクラウドストレージサービス間で大容量のCADおよびBIMプロジェクトファイルを同期、バックアップ、管理できます。"
keywords:
  - cloud storage architecture firms
  - CAD file backup cloud
  - BIM file sync
  - architecture project cloud storage
  - RcloneView architecture
  - backup Revit files cloud
  - sync large CAD files
  - multi-cloud architecture workflow
  - architecture firm file management
  - cloud backup construction files
tags:
  - industry
  - cad
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 建築設計事務所向けクラウドストレージ — RcloneViewでCADとBIMファイルを管理する

> 建築設計事務所は1プロジェクトあたり数百ギガバイトに及ぶこともあるプロジェクトファイルを扱います。RcloneViewを使えば、複雑なスクリプトを組むことなく、クラウドプロバイダー間でCADやBIMのアセットをバックアップ、同期、アーカイブすることが現実的になります。

複合開発プロジェクトに取り組む中規模の建築設計事務所は、膨大な量のデータを生み出します。Revitモデル、AutoCAD図面、点群スキャン、レンダリング出力、そしてクライアント納品物などを合わせると、1つのプロジェクトフェーズだけで500GBを超えることもあります。これらのファイルをバックアップし、分散したチームからアクセス可能にし、プロジェクト完了時にアーカイブしておくことは、実務上の大きな課題です。RcloneViewはrcloneのデスクトップGUIであり、視覚的なインターフェースを通じて信頼性の高いクラウドワークフローを構築できます。コマンドラインの専門知識は必要ありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 建築設計事務所が直面するファイル管理の問題

CADファイルとBIMファイルには、標準的なクラウド同期ツールを苦しめる2つの特徴があります。ファイルサイズが大きいこと(個々のRevitモデルは1GBを超えることが日常的にあります)、そしてプロジェクトの進行に伴って段階的に変化することです。コンシューマー向けの同期ツールは、保存のたびにファイル全体を再アップロードすることが多く、帯域幅とストレージを浪費します。RcloneViewは転送処理をrcloneに委ねており、rcloneはサイズとチェックサムを比較して実際に変更された部分だけを転送します。これは、リモートの現場視察先から低速なVPN接続でチームメンバーがモデルの更新を保存する場合などに極めて重要です。

RcloneViewはAmazon S3、Google Drive、SharePoint、OneDrive、Backblaze B2をはじめ、90以上の対応プロバイダーの中から数十種類のサービスをサポートしています。すべてを単一のインターフェースから管理できます。事務所はS3を主要なプロジェクトストレージとして接続し、Google Driveをクライアント共有用に、そしてBackblaze B2を低コストのオフサイトアーカイブとして利用しつつ、これら3つすべてを1つのアプリケーションウィンドウから管理できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud storage remote for architecture project files in RcloneView" class="img-large img-center" />

## プロジェクトバックアップワークフローの構築

RcloneViewの4ステップの同期ウィザードは、多くの事務所が採用しているディレクトリ構造に適しています。トップレベルのプロジェクトフォルダの下に、工種(構造、設備、意匠)ごと、フェーズ(基本設計、実施設計、施工図書)ごとのサブディレクトリを配置する構成です。ローカルNASまたはネットワーク共有をソースに、S3バケットまたはOneDriveライブラリを転送先に設定し、同期の深さをどこまで及ぼすかを設定します。

フィルタリングルールを使えば、作業用の一時ファイル(`*.bak`、`*.rvt.backup`)を除外したり、最大ファイル経過日数を設定して、完了済みプロジェクトのアーカイブレンダリングが実行のたびに再同期されないようにしたりできます。**ドライラン**モードでは、実際にデータを移動する前にどのファイルが転送されるかを正確に確認できます。新しいプロジェクトフォルダを取り込む際に、実行前に同期ロジックが想定どおりかどうかを確認するのに便利です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing architecture project files between cloud providers in RcloneView" class="img-large img-center" />

## 夜間バックアップとプロジェクトアーカイブのスケジューリング

PLUSライセンスを利用すると、RcloneViewのcron形式のスケジューラーがバックアップジョブを定義した間隔で自動実行します。多くの事務所は、オフィスのネットワークが空いていてファイルアクティビティが少ないオフピーク時間帯(午前2時〜4時)に夜間同期を設定しています。各実行はジョブ履歴パネルに記録され、転送されたファイル数、合計サイズ、所要時間、成功・エラーステータスが表示されるため、プロジェクトマネージャーはログファイルを手動で確認することなくバックアップの状態を明確に把握できます。

プロジェクトの引き渡し時には、2つ目のアーカイブジョブを使って、ホットストレージ(S3標準ストレージ)からプロジェクトフォルダ全体を長期保存用バケット(またはBackblaze B2)へ、恒久的な記録としてコピーできます。RcloneViewは1対N同期に対応しているため、1つのジョブで冗長性確保のために2つの転送先へ同時にアーカイブをプッシュすることもできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly backup of architecture project files in RcloneView" class="img-large img-center" />

## クラウドストレージ間でのリビジョン比較

RcloneViewのフォルダ比較機能は、2つのロケーション間の差分を視覚化します。例えばローカルのプロジェクトフォルダとそのクラウドバックアップを比較し、どのファイルがローカルにのみ存在するか、クラウドにのみ存在するか、あるいはサイズが異なっているかを表示します。図面のリビジョンを手動で管理している事務所にとって、これは手早い確認手段になります。ローカルの「施工用発行(Issued for Construction)」フォルダをクライアントのSharePointライブラリと比較することで、提出期限前に最新の図面一式が確実に納品されたことを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing architecture project folders between local and cloud storage in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 主要なプロジェクトストレージ(Amazon S3、OneDrive、またはその他の対応プロバイダー)をリモートとして追加します。
3. 同期ウィザードを使ってプロジェクトのフォルダ構成をマッピングし、作業用ファイルやバックアップファイルを除外するファイルフィルターを設定します。
4. 夜間の定期バックアップジョブを設定し、スケジュールを有効化する前にドライランで検証します。

場当たり的な手動バックアップと、バラバラなドライブに散らばったストレージ管理に疲れた事務所にとって、RcloneViewはアクティブな設計段階から長期アーカイブまで、プロジェクトのライフサイクル全体に構造と自動化をもたらします。

---

**関連ガイド:**

- [RcloneViewでマルチクラウドストレージ全体のデジタルアセットを管理する](https://rcloneview.com/support/blog/manage-digital-assets-multi-cloud-rcloneview)
- [RcloneViewを使ったクリエイティブエージェンシー向けクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-creative-agencies-rcloneview)
- [RcloneViewで日次クラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />

---
slug: manage-sharepoint-cloud-sync-backup-rcloneview
title: "RcloneViewでSharePointのファイルとクラウド同期を管理する"
authors:
  - tayson
description: "RcloneViewでSharePoint Onlineのファイルを管理します。ビジュアルGUIを使って、SharePointドキュメントライブラリと他のクラウドプロバイダー間でデータを同期、バックアップ、転送できます。"
keywords:
  - rcloneview
  - sharepoint sync rcloneview
  - sharepoint backup
  - sharepoint file manager
  - sharepoint cloud sync tool
  - sharepoint to google drive
  - sharepoint rclone gui
  - sharepoint document library backup
  - sharepoint multi-cloud
  - sharepoint automated backup
tags:
  - sharepoint
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでSharePointのファイルとクラウド同期を管理する

> SharePoint OnlineはMicrosoft 365全体のドキュメント管理を支えていますが、その内容を外部クラウドやNASに同期するには専用のツールが必要です。**RcloneView**がそのギャップを埋めます。

SharePoint Onlineは、Microsoft 365を利用する何百万もの組織にとってドキュメント管理の基盤です。各SharePointサイトには、チームのファイル、プロジェクト資産、企業記録を保存するドキュメントライブラリが含まれています。ネイティブのOneDrive同期クライアントはSharePointライブラリをローカルマシンに同期できますが、AWS S3、Google Drive、外部ストレージへデータを複製する仕組みはありません。RcloneViewはMicrosoft Graph APIを介してSharePoint Onlineに接続し、ドキュメントライブラリをナビゲート可能なリモートとして公開します。SharePointと他のあらゆるプロバイダー間で、閲覧、同期、コピー、移動、バックアップのスケジュール設定が行えます。

コンプライアンス上重要なライブラリを不変のS3ストレージにバックアップする場合でも、退職するチームのSharePointサイトをGoogle Workspaceに移行する場合でも、RcloneViewはビジュアルインターフェースで処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでSharePointを接続する

RcloneViewのSharePointリモートは、OneDriveリモートタイプを通じて設定します。OAuth認証の際、OneDrive PersonalまたはBusinessの代わりに**SharePoint site**を選択してください。RcloneViewはGraph APIに利用可能なサイトを問い合わせ、対象のサイトとドキュメントライブラリを選択できるようにします。

各ドキュメントライブラリは、個別のナビゲート可能なパスとして表示されます。組織にMarketing、Engineering、Legal、HRなど数十のSharePointサイトがある場合、それぞれを別々のリモートとして追加することも、単一のリモート構成内でライブラリを切り替えることもできます。

SharePointのAPIスロットリングは、OneDrive for Businessと同じパターンに従います。Retry-Afterヘッダー付きの429レスポンスです。RcloneViewはこれらを自動的に尊重し、指数バックオフを使用することで、手動介入なしに大規模な転送を確実に完了させます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a SharePoint remote in RcloneView Remote Manager" class="img-large img-center" />

## SharePointドキュメントライブラリのナビゲート

SharePointドキュメントライブラリには、入れ子になったフォルダ構造、メタデータ列、バージョン管理されたファイルが含まれることがあります。RcloneViewのエクスプローラーは、おなじみの2ペインレイアウトでフォルダツリーとファイル一覧を表示します。深いフォルダ階層を閲覧したり、複数のフォルダにまたがってファイルを選択したり、コピー、移動、削除、ダウンロードなどの一括操作を実行したりできます。

SharePointは、他の多くのプロバイダーよりも厳しいファイル名の制限を課しています。`#`、`%`、`*`などの文字は使用できず、パスの長さは400文字に制限されています。制限の少ないプロバイダー(Google Driveやローカルファイルシステムなど)からSharePointへ同期する際、RcloneViewは転送の失敗を防ぐために制限対象の文字を自動的にエンコードまたは置換します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing SharePoint document libraries in RcloneView two-pane explorer" class="img-large img-center" />

## SharePointから他のクラウドプロバイダーへの同期

組織は、災害復旧のためのセカンダリクラウド、ローカルアクセス用のNAS、プラットフォーム移行時の異なるクラウドスイートなど、SharePointのデータを外部システムに複製する必要が頻繁に生じます。RcloneViewはこれを簡単にします。

一方のペインでSharePointライブラリを開き、もう一方のペインで移行先(AWS S3、Google Drive、Backblaze B2、ローカルパス)を開きます。RcloneViewはサイズと更新日時を使ってファイルリストを比較し、変更されたファイルのみを転送します。数千ファイル規模の初回移行では、マルチスレッド転送と設定可能なチャンクサイズによって処理の効率が保たれます。

SharePointは、OneDrive for Businessと同じアルゴリズムであるQuickXorHashとしてファイルハッシュを保存します。RcloneViewはQuickXorHashをネイティブにサポートしているため、比較のためにファイル内容をダウンロードすることなく、正確な差分検出が可能です。

## SharePointの自動バックアップをスケジュールする

SharePointの組み込みの保持ポリシーとごみ箱はある程度の保護を提供しますが、それらはMicrosoftのエコシステム内で動作するものです。Microsoft 365テナントを侵害するランサムウェア攻撃は、他のすべてと同様にSharePointデータにも影響を及ぼす可能性があります。別のプロバイダーへの独立したバックアップが最も強力な保護策です。

RcloneViewのスケジューラーはこれを自動化します。バージョニングを有効にしたAWS S3へ、SharePointドキュメントライブラリから夜間の同期ジョブを設定すれば、あとはRcloneViewが処理します。ジョブ履歴パネルには、実行ごとの転送統計がすべて記録され、バックアップが正常に完了しているかどうかを簡単に確認できます。

コンプライアンス重視の組織にとっては、スケジュールされたSharePointバックアップをS3 Object LockやBackblaze B2のファイルロック機能と組み合わせることで、データ保持に関する規制要件を満たす不変アーカイブを作成できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated SharePoint backup in RcloneView" class="img-large img-center" />

## フォルダの比較と移行の検証

SharePointライブラリを同期または移行した後は、RcloneViewの比較機能を使って完全性を検証しましょう。SharePointの同期元とバックアップの同期先を選択すると、RcloneViewは片方にのみ存在するファイル、内容が異なるファイル、同一のファイルをハイライト表示します。このビジュアルな検証により、推測に頼ることなく、元データを廃止する前にデータの整合性を確保できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SharePoint library with backup destination in RcloneView" class="img-large img-center" />

## SharePointをローカルドライブとしてマウントする

RcloneViewは、SharePointドキュメントライブラリをローカルのドライブレター(Windows)またはマウントポイント(macOS/Linux)としてマウントできます。これにより、CADソフトウェア、画像編集ツール、分析ツールなど、任意のデスクトップアプリケーションからSharePointファイルにアクセスでき、OneDrive同期クライアントのオーバーヘッドも不要になります。

VFSキャッシュを有効にすると、最近アクセスしたファイルがローカルに保存され、繰り返しのアクセスが高速化されます。これは、クラウドストレージをネイティブにサポートしていないアプリケーションでSharePointがホストするファイルを扱う必要があるチームに特に有用です。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting SharePoint as a local drive in RcloneView" class="img-large img-center" />

## 転送状況の監視

大規模なSharePoint移行では、数十万ものファイルが関わることがあります。RcloneViewのリアルタイム監視ダッシュボードは、転送速度、ファイルごとの進捗、全体の完了状況を表示します。転送は個別に一時停止、再開、キャンセルできます。帯域幅制限により、業務時間中にSharePointの転送がネットワーク接続全体を占有することを防げます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time SharePoint transfer monitoring in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. OAuthでMicrosoft 365アカウントを認証し、SharePointサイトとドキュメントライブラリを選択します。
3. 2ペインエクスプローラーでSharePointライブラリを閲覧し、他のプロバイダーへの同期またはコピージョブを設定します。
4. S3、B2、または他のクラウドに独立したコピーを維持するために、日次バックアップをスケジュールします。

SharePointはMicrosoft 365内でのドキュメント管理を担いますが、RcloneViewはSharePointのデータが、利用しているすべてのクラウドにわたってバックアップされ、可搬性があり、アクセス可能であることを保証します。

---

**関連ガイド:**

- [ブラウザ経由のログイン(OAuth)でリモートを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [リモートストレージの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

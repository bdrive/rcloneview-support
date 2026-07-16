---
slug: zero-downtime-sharepoint-to-google-shared-drives-rcloneview
title: "RcloneViewによるSharePointからGoogle共有ドライブへのゼロダウンタイム移行"
authors:
  - tayson
description: RcloneViewのマルチクラウドExplorer、Compareプレビュー、Syncジョブ、スケジューラーによる差分同期を組み合わせることで、ユーザーの作業を中断させることなくMicrosoft 365 SharePoint OnlineライブラリをGoogle共有ドライブへ移行します。
keywords:
  - sharepoint to google drive
  - google shared drive migration
  - rcloneview
  - zero downtime transfer
  - microsoft 365 to workspace
  - rclone compare
  - multi cloud sync
  - scheduler automation
  - sharepoint cutover plan
  - cloud migration blueprint
tags:
  - sharepoint
  - google-drive
  - migration
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewによるSharePointからGoogle共有ドライブへのゼロダウンタイム移行

> デザイナー、財務チーム、プロジェクトチームがSharePointで作業を続けている間にバックグラウンドでGoogle共有ドライブへデータを流し込み、1回のカットオーバーウィンドウで切り替えを完了します。

SharePoint Onlineのライブラリには、権限設定が複雑なフォルダー、ドキュメントセット、地域ごとのデータ制御が数多く含まれていることが少なくありません。一方、Google Workspaceの共有ドライブはよりシンプルなコラボレーションとストレージクォータを約束しますが、ネイティブの移行ツールはメタデータや差分ウィンドウ、スロットリングをほとんど考慮してくれません。RcloneViewはrcloneのSharePointおよびGoogle Driveバックエンドをラップした GUIであり、段階的なCompare実行、Sync + Copyジョブ、マウントベースのQA、スケジューラーによる差分同期を組み合わせてマルチクラウド移行を計画できます。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## SharePoint -> Googleのゼロダウンタイムカットオーバーを計画する理由

- **分散チームは作業を止められない** -- マーケティング資料、PMO、契約関連のドキュメントは、新しい共有ドライブへのデータ投入中も継続的にアクセスできる必要があります。
- **きめ細かな権限管理** -- SharePointライブラリにはTeams連携フォルダーと単独のドキュメントセンターが混在しており、明確な監査ログを残しながら共有ドライブ内で再構築できる再現性の高い方法が必要です。

ゼロダウンタイム戦略とは、両プラットフォームを稼働させたまま複数フェーズの同期を実行し、最終差分の後にカットオーバーを行うことを意味します。

## 移行の全体設計: マルチクラウド管理パネル

1. [Remote Manager](/howto/rcloneview-basic/remote-manager)を使って両側を接続し、あわせて[SharePoint for Business](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)と[Google共有ドライブ](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive)のプロバイダーガイドも参照してください。RcloneViewはテナントごとにOAuthトークンを分離し、保護された状態で保存します。
2. **Explorerペインを整理**し、各ペインが対応するライブラリと共有ドライブを参照するようにします。
3. **ジョブのテンプレート**は[Sync Jobsの作成](/howto/rcloneview-basic/create-sync-jobs)と[リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)から取得します。Copyジョブはターゲットへの初期投入を行い、Syncジョブは一方向のクリーンアップを担当し、Compare実行で検証します。
4. **QA用のマウント**は[クラウドストレージをローカルドライブとしてマウントする](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)の手順に従い、パワーユーザーがカットオーバー前にFinderやエクスプローラー内でコンテンツをプレビューできるようにします。
5. **スケジューラーとモニタリング**は、差分実行を予測可能に保つために[ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)と[リアルタイム転送モニタリング](/howto/rcloneview-basic/real-time-transfer-monitoring)に依存します。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


## ステップ1 -- コネクタとメタデータの強化

- すべてのリモートにラベルを付け(`sp-marketing`、`sp-pmo`、`gdrive-regional-apac`)、ルートパスを特定のライブラリに限定します。これにより、[リモートストレージの参照と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)内でのリモートブラウジングを高速に保てます。

## ステップ2 -- Compare実行によるベースライン取得

1. デュアルペインのExplorerを開き、左側をSharePoint、右側を空の共有ドライブに指定します。
2. [フォルダー内容の比較](/howto/rcloneview-basic/compare-folder-contents)を使って、サイズ、チェックサム、タイムスタンプの差分を検出します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare SharePoint library to Google Shared Drive before migrating" class="img-large img-center" />

ベースラインのCompareスナップショットは元の状態の詳細な記録を残し、移動する代わりにアーカイブすべき古いサブサイトを特定するのに役立ちます。

## ステップ3 -- Copy + Syncジョブのステージング

- 事業部門ごとに**Copy**ジョブを作成し、SharePoint側の何も削除することなく共有ドライブにデータを投入します。参照: [Sync Jobsの作成](/howto/rcloneview-basic/create-sync-jobs)。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />


## ステップ4 -- スケジューラーによる差分ウィンドウの自動化

Schedulerを開いてグローバルに有効化し、ジョブごとに実行間隔を割り当てます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule staged SharePoint to Google migration jobs inside RcloneView" class="img-large img-center" />


## ステップ5 -- カットオーバー当日のチェックリスト

1. SharePointで**書き込みを凍結**します(Teams/Slackで周知)が、読み取り専用のニーズに対応できるようサイト自体はオンラインのままにします。
2. 最終のSync + Compareジョブセットを実行します。Compareの差分を使い、最後の差分同期以降に変更されたファイルが少数だけであることを確認します。
3. [クラウドストレージをローカルドライブとしてマウントする](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)を使って新しい共有ドライブをマウントし、事業責任者に複雑なフォルダーツリーを抜き取りで確認してもらいます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />



## 移行後のQAとマウント運用

Mount Managerを使うと、エンジニア、財務担当者、クリエイティブリードが新しい共有ドライブ(または従来のSharePointリモート)を読み取り専用ドライブとして開き、監査やトレーニングに利用できます。

## プロジェクトタイムラインプレイブック

| フェーズ | RcloneViewでのアクション | 成果 |
| --- | --- | --- |
| 週1 | リモート接続、ベースラインCompare、Copyジョブの作成 | 各ライブラリの棚卸しと共有ドライブへの初期投入 |
| 週2 | 夜間スケジューラー差分同期 + 週次Compareレポート | ドリフトを可視化した継続的な更新 |
| 週3 | パイロットマウント、権限検証、ユーザートレーニング | 関係者が安全にGoogle共有ドライブをプレビュー |
| カットオーバー週 | SharePoint凍結、最終Sync/Compare、共有ドライブ本番稼働 | 検証ログ付きで数分のダウンタイムに抑制 |
| 2週間後 | 従来リモートでのスケジュールSync + S3/Wasabiへの任意のアーカイブCopy | 廃止前にファイルの見落としがないことを証明 |


RcloneViewは、マルチクラウド移行を予測可能なプレイブックへと変えます: リモートを設定し、差分をプレビューし、Copy + Syncジョブをステージングし、差分同期を自動化し、QAのためにマウントする。チームは、Google共有ドライブへ切り替えるまさにその瞬間までSharePoint上で生産性を維持できます。

<CloudSupportGrid />

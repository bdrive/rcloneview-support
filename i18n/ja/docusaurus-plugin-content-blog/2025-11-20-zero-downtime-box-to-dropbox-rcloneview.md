---
slug: zero-downtime-box-to-dropbox-rcloneview
title: "RcloneViewで実現するBoxからDropboxへのゼロダウンタイム・コンプライアンス移行"
authors:
  - tayson
description: RcloneViewの段階的なコピー、比較、同期、マウント、スケジューラーのワークフローを活用し、Box Businessチームを稼働させたままDropbox Businessへデータを移行し、コンプライアンス証跡を構築します。
keywords:
  - rcloneview
  - box to dropbox migration
  - zero downtime cloud transfer
  - multi cloud compare
  - rclone scheduler
  - dropbox business
  - compliance backup
  - oauth connectors
  - delta sync
  - audit logs
tags:
  - RcloneView
  - box
  - dropbox
  - migration
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewで実現するBoxからDropboxへのゼロダウンタイム・コンプライアンス移行

> Box Businessのライブラリ全体をシード、検証、切り替えする際、ユーザーにログオフを依頼する必要はありません。

Boxはマーケティング承認、法務レビュールーム、代理店ワークフローを支えていますが、多くのチームがSmart Sync、外部コラボレーション、シンプルなクォータ管理のためにDropbox Businessへの移行を望んでいます。エクスポート作業のためにすべてのプロジェクトを一時停止することは選択肢にありません。RcloneViewはrcloneの上に使いやすいGUIを重ね、BoxとDropboxのリモートを登録し、フォルダを比較し、コピージョブをスケジュールし、監査担当者がログを確認している間もQA用に転送先をマウントできるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Boxチームがゼロダウンタイム移行を必要とする理由

- **規制上の要請**: 契約書や財務関連フォルダは移行中もアクセス可能かつ保持可能でなければならないため、改ざん不可能なログと復旧可能なロールバック経路が必要です。
- **APIガードレール**: BoxとDropboxはいずれもリクエスト制限を課しており、スケジューラー駆動型のアプローチによってスロットリングのスパイクを回避し、差分を予測可能に保てます。
- **ハイブリッドな現実**: 代理店は一部のライブフォルダをBoxに残しつつ、アーカイブや共有ワークスペースをDropboxで受け取ることが多く、数週間の共存は珍しくありません。

RcloneViewはRemote Manager、デュアルペインExplorer、Compareプレビュー、Syncジョブ、Mount Manager、そして内蔵スケジューラーによってこれらすべてに対応します。

## RcloneView移行ブループリント

1. [Add OAuth Online Login](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)に記載されたOAuthウィザードを使用し、[Remote Manager](/howto/rcloneview-basic/remote-manager)内でBoxとDropboxを**接続**します。
2. 各ジョブが単一のBoxライブラリまたはDropboxチームフォルダのみを操作するよう、カラーラベルとスコープ付きルートパスでリモートを**整理**します。詳細は[Browse and manage remote storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)を参照してください。
3. [Create sync jobs](/howto/rcloneview-basic/create-sync-jobs)と[Synchronize remote storages](/howto/rcloneview-basic/synchronize-remote-storages)を使ってCopy/Syncジョブを**テンプレート化**し、[Compare folder contents](/howto/rcloneview-basic/compare-folder-contents)で変更内容をプレビューします。
4. [Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution)を通じて差分を**自動化**し、[Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring)でスループットを追跡します。
5. [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)による読み取り専用マウントで**検証**し、関係者が切り替え前にDropboxを再確認できるようにします。

## ステップ1 -- コネクタとアクセス制御の準備

- 委任された管理者アカウントでBoxとDropboxのOAuthリモートを設定します。
- リモート名にプレフィックスを付けます（例: `box-legal`、`box-studio`、`dropbox-hq`）。

## ステップ2 -- Compareスナップショットでベースラインを取得

1. デュアルペインExplorerを開き、左側にBoxライブラリを、右側に空のDropbox転送先を読み込みます。
2. **Compare**を実行し、オブジェクト数、サイズ、タイムスタンプを取得します。
3. 古いフォルダをハイライトし、Dropboxまたはコールドアーカイブバケットのどちらに移すべきかを判断します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Box to Dropbox folders inside RcloneView" class="img-large img-center" />

このCompareスナップショットが最初のインベントリとなります。

## ステップ3 -- コピージョブのシードとメタデータの保持

- [Create sync jobs](/howto/rcloneview-basic/create-sync-jobs)のテンプレートを使い、事業部ごとにCopyジョブを構築します。Copyを使うことでBox側は変更されません。
- 同ガイドに記載されているBox Docsフィルターを有効にし、一時的なBox NotesやWebサイトショートカットがDropboxを乱雑にしないようにします。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  
    
- 各ジョブを手動で一度実行し、[Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring)でスループットを確認します。  

  <img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />  
    

## ステップ4 -- スケジューラーによる差分ウィンドウの自動化

**Scheduler**を開き、グローバルに有効化して、次のような実行間隔を割り当てます（すべて[Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution)に記載されています）。

- 変化が速いフォルダ（クリエイティブブリーフ、ディールルームなど）向けの**日中のミニ同期**。Boxのスロットリングを避けるため、同時実行数は低く保ちます。
- 最終切り替え前にDropboxが常にBoxから数分以内の差分に収まるよう、残りのライブラリ向けの**夜間フル同期**。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Box to Dropbox deltas inside RcloneView" class="img-large img-center" />
  
Schedulerは一元的な可視性を提供し、実行漏れをハイライトするとともに、すべての実行を監査用にログとして記録します。

## ステップ5 -- 切り替えとマウントベースのQA

1. Boxの書き込みフリーズを告知し（読み取り専用アクセスは維持したまま）、最終的なSync + Compareシーケンスを実行します。
2. [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)経由でDropbox転送先を読み取り専用でマウントし、事業責任者がフォルダ階層、プレビュー、共有ショートカットを検証できるようにします。


<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  
## コンプライアンス・ランブック

| 実行間隔 | RcloneViewのアクション | 生成される証跡 |
| --- | --- | --- |
| 毎晩 | BoxからDropboxへのScheduler CopyジョブとCompareレポート | 転送ログ（CSV）、Compareエクスポート、チェックサムサマリー |
| 切り替え当日 | 手動Sync + Compare + マウントベースの検証 | マウントのスクリーンショット、実行ログ、関係者の承認 |
| 2週間後 | 法的保存のためCopyジョブでBoxリモートをWasabi/S3へアーカイブ | ジョブメモ、backup-dirのインベントリ、保持チケット |

## FAQ

**BoxとDropboxを長期的に同期状態に保つことはできますか？**  
はい。Syncジョブを週次または月次で有効にしたままにしてください。

RcloneViewはrcloneのエンタープライズ級エンジンをガイド付きコントロールパネルに変え、ゼロダウンタイム、透明性のある差分、そしてすべての監査に対応した文書化されたチェックポイントで、BoxからDropboxへの移行を実現します。

<CloudSupportGrid />

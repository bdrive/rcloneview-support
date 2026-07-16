---
slug: manage-enterprise-file-fabric-cloud-sync-rcloneview
title: "Enterprise File Fabricストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - morgan
description: "RcloneView — Windows、macOS、Linux向けにrcloneをベースに構築されたクロスプラットフォームのマルチクラウドGUI — を使ってEnterprise File Fabricストレージに接続、同期、バックアップする方法。"
keywords:
  - Enterprise File Fabric RcloneView
  - sync Enterprise File Fabric
  - Enterprise File Fabric cloud sync
  - Enterprise File Fabric backup
  - manage Enterprise File Fabric files
  - cloud storage management enterprise
  - RcloneView enterprise storage
  - Enterprise File Fabric GUI client
tags:
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Enterprise File Fabricストレージを管理 — RcloneViewでファイルを同期・バックアップ

> RcloneViewはEnterprise File Fabricに直接接続し、CLIコマンドを一切書くことなく、組織が管理するファイルストレージの閲覧、同期、バックアップを可能にします。

Enterprise File Fabricは、単一のガバナンス層の下で異なるストレージバックエンドを統合する必要がある組織向けのクラウドコンテンツサービスプラットフォームです。チームがプロジェクトファイル、コンプライアンス記録、共有デジタル資産をそこに保存している場合でも、そのコンテンツの同期とバックアップを維持するには、信頼性が高くクロスクラウド対応のツールが必要です。RcloneView — rcloneをベースに構築されたFlutter製GUIクライアント — は、Windows、macOS、Linux上の統一されたインターフェースから、Enterprise File Fabricを含む90以上のクラウドプロバイダーを扱えます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでEnterprise File Fabricに接続する

RcloneViewの組み込みの新規リモートウィザードを使えば、Enterprise File Fabricをリモートとして追加するのに数分しかかかりません。**Remote**タブを開き、**New Remote**をクリックして、プロバイダーリストからEnterprise File Fabricを選択します。エンドポイントURLとAPIトークン（組織がAPIアクセスに使用しているものと同じ認証情報）を入力し、保存します。リモートはすぐにエクスプローラーパネルに表示され、フォルダーの閲覧、ファイル数とサイズの確認、パンくずバーからのパスの直接コピーが可能になります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Enterprise File Fabric remote in RcloneView" class="img-large img-center" />

マウント専用ツールとは異なり、RcloneViewはFREEライセンスでもフォルダーの同期と比較が可能なため、単純なドライブマッピングにとどまらず、すべてのクラウド環境にわたってEnterprise File Fabricのコンテンツを積極的に管理できます。

## Enterprise File Fabricから他のクラウド宛先への同期

Enterprise File Fabricでよくあるシナリオは、災害復旧や長期アーカイブのために、管理対象コンテンツをセカンダリのクラウド宛先へ複製することです。RcloneViewの同期ウィザードで、Enterprise File Fabricをソースに設定し、Amazon S3、Backblaze B2、Google Drive、またはオンプレミスのSFTPサーバーなど、任意の宛先を選択します。4ステップのウィザードが、転送の並列数、チェックサム検証、ファイル経過時間フィルターの設定を案内するため、必要なものだけを移動できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Enterprise File Fabric in RcloneView" class="img-large img-center" />

実際の転送を行う前には、必ず**ドライラン**を実行してください。RcloneViewは、コピーまたはスキップされる正確なファイルの一覧を表示するため、1バイトも移動する前にフィルタールールを調整できます。1:N複製 — 同じEnterprise File Fabricフォルダーを複数の宛先へ同時にミラーリングする場合 — は、ステップ1で追加の宛先パスを追加するだけです。これはFREEライセンスで利用可能で、宛先数に上限はありません。

## 自動バックアップのスケジュール設定

Enterprise File Fabricを利用する組織では、人手を介さずに実行される夜間や週次のバックアップウィンドウが必要になることがよくあります。**PLUSライセンス**では、RcloneView内で直接crontab形式のスケジュール設定が利用可能になります。分、時、曜日、月のフィールドを設定して、任意の間隔でEnterprise File Fabricの同期ジョブを実行できます。組み込みの**Simulate schedule**ツールは、次の実行予定時刻をいくつか表示するため、確定前にタイミングを確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an Enterprise File Fabric backup job in RcloneView" class="img-large img-center" />

ジョブ完了通知は、アプリがシステムトレイに最小化されて実行されている場合でも、運用チームに状況を伝え続けます。

## 転送履歴と監査証跡の監視

すべてのEnterprise File Fabric同期ジョブは、RcloneViewの**Job History**ビューに、開始時刻、所要時間、転送速度、ファイル数、最終ステータスとともに記録されます。日付範囲や結果で履歴をフィルタリングすることで、SLA遵守の確認やデータ移動の監査ができ、管理対象のファイルストレージプラットフォームに関する保持要件やガバナンス要件を持つ組織にとって実用的です。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Enterprise File Fabric transfers in RcloneView" class="img-large img-center" />

RcloneView内のrcloneターミナルタブでは、上級ユーザーがGUIを離れることなく、Enterprise File Fabricリモートに対してカスタムの`rclone`コマンドを実行することもできます。これは、アドホックなクエリや一度限りの操作に便利です。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote**タブを開いて**New Remote**をクリックし、Enterprise File Fabricを選択します。
3. Enterprise File FabricのエンドポイントURLとAPIトークンを入力し、リモートを保存します。
4. 同期ジョブを作成し、希望するバックアップ先を設定して、最初に**ドライラン**を実行します。
5. （PLUS）スケジュール実行を有効にして、メールまたはSlack通知付きの継続的なバックアップを自動化します。

Enterprise File Fabricの管理をRcloneView内に集約することで、ツールの乱立を解消し、チームにすべてのクラウドデータ移動に関する単一の監査可能な記録を提供します。

---

**関連ガイド:**

- [RcloneViewでSharePointストレージを管理する](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [RcloneViewでAzure Filesを管理する](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [RcloneViewによるDevOps・ソフトウェアチーム向けクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-devops-software-teams-rcloneview)

<CloudSupportGrid />

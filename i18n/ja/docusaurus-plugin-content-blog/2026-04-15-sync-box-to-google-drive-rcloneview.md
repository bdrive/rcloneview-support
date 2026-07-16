---
slug: sync-box-to-google-drive-rcloneview
title: "BoxからGoogle Driveへ同期 — RcloneViewによるクラウドバックアップ"
authors:
  - tayson
description: "RcloneViewでBoxからGoogle Driveへ同期 — シンプルなクラウド間GUIでファイルを転送し、バックアップを自動化して両プラットフォームを最新の状態に保ちます。"
keywords:
  - Box to Google Drive sync
  - Box to Google Drive migration
  - cloud sync tool
  - RcloneView Box
  - Box backup
  - Google Drive archive
  - cloud-to-cloud sync
  - enterprise cloud transfer
  - Box Google Drive workflow
  - Box content migration
tags:
  - RcloneView
  - box
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# BoxからGoogle Driveへ同期 — RcloneViewによるクラウドバックアップ

> Boxは企業向けのコンプライアンス管理と安全な共有を担い、Google Driveは共同編集の基盤となります。RcloneViewはローカルディスクを経由せず、両プラットフォーム間で直接コンテンツを同期します。

Boxはコンプライアンス制御と安全なファイル共有の面で企業環境において広く利用されている一方、Google Driveはリアルタイムの共同作業ワークフローを支えています。チームが両方のプラットフォームを使用している場合や、Boxからの移行を進めている場合、コンテンツの同期維持——あるいはプラットフォーム間でのファイル移行——には信頼できるクラウド間ツールが必要です。RcloneViewはBoxとGoogle Driveを直接接続し、ローカルディスクへのダウンロードを一切必要としません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## BoxとGoogle Driveの接続

BoxとGoogle Driveはどちらも、RcloneViewではOAuthブラウザ認証を使用します。**Remoteタブ > New Remote**に移動し、**Box**を選択してブラウザでのログインを完了させます。同じ手順を**Google Drive**でも繰り返します。両方のリモートはエクスプローラーパネルにタブとして表示され、すぐに閲覧できるようになります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Google Drive remotes in RcloneView" class="img-large img-center" />

**Box for Business**アカウントの場合、リモート作成時に`box_sub_type`設定を`enterprise`に設定してください。これにより、RcloneViewが個人ストレージではなく組織のBoxアカウントに接続し、共有フォルダやビジネスが所有するコンテンツにアクセスできるようになります。

## 同期ジョブの実行

**Job Manager**で新しい同期ジョブを作成します。ソースはBoxフォルダ(または`/Projects/2026`のような特定のサブフォルダ)、宛先は対象のGoogle Driveフォルダです。RcloneViewの同期はデフォルトで一方向であり、ソースの内容を変更することなく宛先にミラーリングします。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive sync job in RcloneView" class="img-large img-center" />

長期アーカイブのために完了した案件ファイルをBoxからGoogle Driveへ同期する法務チームの場合、ファイルの経過日数でフィルタリングする(Jobの設定Step 3のMax File Age)ことで、最近更新されたファイルのみに同期対象を絞り込み、転送サイズを管理しやすく保てます。**Dry Run**プレビューでは、実際にデータへ触れる前に、どのファイルが移動するかを正確に確認できます。

## 自動化とモニタリング

PLUSライセンスがあれば、BoxからGoogle Driveへの同期をスケジュール化することで、両プラットフォームを常に最新の状態に保てます。cronベースのスケジュール——例えば毎週日曜の深夜0時——により、ユーザーの操作なしで同期が自動的に実行されます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Box to Google Drive sync in RcloneView" class="img-large img-center" />

RcloneViewの**1:N同期**機能を使えば、1つのBoxフォルダから複数のGoogle Drive宛先へ同時に同期することも可能です。これは、共有のTeam Driveと個人用アーカイブフォルダの両方に同じコンテンツをバックアップする場合などに便利です。**Job History**では、転送ファイル数、所要時間、速度、ステータスなど、各実行の詳細な統計を確認できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Box**リモート(OAuth)と**Google Drive**リモート(OAuth)を追加します。
3. **Job Manager**を開き、BoxフォルダからGoogle Driveへの同期ジョブを作成します。
4. スケジュール機能(PLUS)を有効にして、定期的な同期を自動化します。

RcloneViewを通じてBoxとGoogle Driveを同期することで、手作業をかけずに両プラットフォームを整理された状態でアクセス可能に保ちながら、コンテンツを確実にプラットフォーム間で移動できます。

---

**関連ガイド:**

- [BoxクラウドストレージをRcloneViewで管理 — 同期とバックアップ](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [RcloneViewによるダウンタイムゼロのBoxからDropboxへの移行](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [RcloneViewでBoxからSharePointおよびOneDriveへ移行](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)

<CloudSupportGrid />

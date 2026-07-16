---
slug: manage-linkbox-cloud-sync-backup-rcloneview
title: "Linkboxストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - kai
description: "Linkboxクラウドストレージと RcloneView を連携し、ドラッグ&ドロップでのファイル管理、スケジュールバックアップ、複数プロバイダー間の同期を1つのデスクトップアプリから実現しましょう。"
keywords:
  - Linkbox
  - Linkbox cloud storage
  - manage Linkbox files
  - Linkbox backup
  - Linkbox sync
  - RcloneView Linkbox
  - cloud file manager
  - Linkbox alternative client
tags:
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Linkboxストレージを管理 — RcloneViewでファイルを同期・バックアップ

> フル機能のデスクトップエクスプローラー、スケジュールバックアップ、他クラウドへのワンクリック転送により、Linkboxを日常のファイルワークフローに組み込みましょう。

Linkboxはオンラインでファイルを保存・共有するのに便利な選択肢ですが、そのWebインターフェースは一括ファイル管理、フォルダ比較、定期的なバックアップジョブ向けには作られていません。RcloneViewはLinkboxの上にネイティブなデスクトップレイヤーを追加し、本格的なファイルエクスプローラー、ドラッグ&ドロップでのアップロード、自動同期を提供します。これにより、Linkboxは孤立したストレージのサイロではなく、実際のマルチクラウドワークフローの一部になります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Linkboxをリモートとして追加する

Remoteタブを開き、New Remoteをクリックしてセットアップウィザードを起動します。RcloneViewはプロバイダー一覧からLinkboxを選択し、必要な接続情報を入力する手順を案内し、保存前に接続テストを行います。追加が完了すると、Linkboxは他の設定済みリモートと同様にExplorerパネルのタブとして表示されるため、ブラウザタブを開くことなくフォルダの閲覧、ファイルのプレビュー、サイズの確認ができます。

RcloneViewはWindows、macOS、Linux上の1つのウィンドウから90以上のプロバイダーをマウントおよび同期できるため、LinkboxはGoogle Drive、S3バケット、NAS共有と同じエクスプローラービュー内に並んで表示されます。サービスごとに別々のアプリを使う必要はありません。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Linkbox remote in RcloneView remote setup wizard" class="img-large img-center" />

接続後は、いつでもRemote ManagerからLinkboxの設定を確認・編集できます。また、Linkboxのコンテンツを別のリモートと並べて比較したい場合は、複数のパネルを切り替えて表示することもできます。

## Linkboxのコンテンツを自動でバックアップする

変更のたびにファイルをLinkboxへ手動で再アップロードするのは忘れがちです。RcloneViewのJob Managerを使えば、Linkboxから新規・変更ファイルをローカルドライブ、外付けSSD、または別のクラウドプロバイダーへ定期的に取り込むSync、Copy、Downloadジョブを定義できます。4ステップのジョブウィザードでは、転送元/転送先の選択、転送の並行数、フィルタリングを設定できます。たとえば、一時ファイルを除外したり、バックアップ実行前にファイルの最大経過日数を制限したりすることが可能です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a backup job from Linkbox to another cloud destination in RcloneView" class="img-large img-center" />

実際の転送を実行する前にDry Runを実行し、どのファイルがコピーまたは削除されるかを正確にプレビューしましょう。まだ内容を十分に把握していないLinkboxフォルダに対して初めてジョブを設定する際に特に有用です。

## Linkboxジョブのスケジュールと監視

PLUSライセンスユーザーの場合、Job Managerのスケジュール設定ステップはcrontab形式のタイミング指定に対応しているため、Linkboxのバックアップを毎晩、毎週、あるいは保持ポリシーに合わせた任意の間隔で実行でき、手動でトリガーする手間を覚えておく必要がありません。FREEライセンスユーザーも、同じジョブを手動または必要なときに一度だけ実行できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Linkbox backup job in RcloneView Job Manager" class="img-large img-center" />

すべての実行はJob Historyに開始時刻、所要時間、転送速度、ファイル数とともに記録されるため、Linkboxのバックアップが正常に完了したかを確認したり、生のログを掘り下げることなく失敗した転送を調査したりできます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブを開き、セットアップウィザードからLinkboxを新しいリモートとして追加します。
3. Linkboxからお好みの転送先へのSyncまたはBackupジョブを作成します。
4. Dry Runを実行し、ジョブを保存して、必要に応じて繰り返し実行のスケジュールを設定します。

LinkboxがRcloneViewに組み込まれると、それはもはや覚えておかなければならない別個の転送先ではなく、統合されたクラウドワークフローの中の1つのフォルダになります。

---

**関連ガイド:**

- [Manage Gofile Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Manage Pixeldrain Storage — Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-pixeldrain-cloud-sync-rcloneview)
- [Manage Uptobox Cloud Downloads with RcloneView](https://rcloneview.com/support/blog/manage-uptobox-cloud-downloads-rcloneview)

<CloudSupportGrid />

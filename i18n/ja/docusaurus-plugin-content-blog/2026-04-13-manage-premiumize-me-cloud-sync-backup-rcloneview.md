---
slug: manage-premiumize-me-cloud-sync-backup-rcloneview
title: "Premiumize.meストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "OAuthブラウザログインを使ってPremiumize.meをRcloneViewに接続し、保存済みファイルを他のクラウドプロバイダーに同期してバックアップや長期管理を行いましょう。"
keywords:
  - premiumize.me RcloneView
  - premiumize cloud sync
  - premiumize backup
  - manage premiumize files
  - premiumize rclone GUI
  - premiumize media storage
  - cloud transfer premiumize
  - premiumize file management
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - media
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Premiumize.meストレージを管理 — RcloneViewでファイルを同期・バックアップ

> Premiumize.meはプレミアムファイルホスティングとパーソナルクラウドストレージを組み合わせたサービスです — RcloneViewを使えば、そのコンテンツをシンプルなGUIから管理・バックアップできます。

Premiumize.meはプレミアムリンクジェネレーターおよびクラウドダウンロードサービスとして最もよく知られていますが、取得したコンテンツを保存するパーソナルクラウドストレージも提供しています。メディアやダウンロードファイル、プロジェクトファイルの保存にPremiumize.meを利用している場合、いずれはそれらのファイルを移動する手段が必要になります — アーカイブのために別のクラウドへ、あるいはオフラインアクセスのためにローカルストレージへ。RcloneViewはOAuthブラウザログインを通じてPremiumize.meに接続するため、セットアップは1分もかかりません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OAuthでPremiumize.meを接続する

RcloneViewを起動し、**Remote Manager**を開きます。**New Remote**をクリックし、プロバイダーの一覧から**Premiumize**を見つけます。選択すると、RcloneViewは既定のブラウザを開き、Premiumize.meのOAuth認証ページへリダイレクトします。ログインしてアクセスを許可すると、RcloneViewはトークンをローカルに保存するため、アクセスを取り消さない限り再度認証する必要はありません。

認証が完了すると、そのリモートがRemote Managerの一覧に表示されます。ダブルクリックしてFile Explorerで開きましょう。これまでサービスを通じて蓄積してきたすべてのフォルダとファイルを含むPremiumize.meのファイルツリーが読み込まれます。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Premiumize.me remote in RcloneView" class="img-large img-center" />

## Premiumize.meライブラリを閲覧する

RcloneViewのFile Explorerは、おなじみの2パネルレイアウトを提供します。片側でPremiumize.meのストレージを操作し、もう片側では他の設定済みリモート — Google Drive、Backblaze B2、あるいはローカルフォルダー — を操作できます。複数ファイルの選択、右クリックによるコピーや移動、転送パネルでの進捗確認が可能です。

メディア中心のライブラリでは、**Thumbnail View**モードが画像プレビューをグリッド表示するため、Premiumize.meのストレージに写真や動画のサムネイルが含まれている場合、転送前に視覚的に確認したいときに便利です。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Browsing and transferring Premiumize.me files in RcloneView" class="img-large img-center" />

## Premiumize.meを他のクラウドに同期する

手動でのファイル閲覧はたまの移動には向いていますが、定期的なバックアップには**Job**システムが適したツールです。**Jobs**へ移動し、**New Job**をクリックして、Premiumize.meをソースとして設定します。任意の宛先リモートを選択できます — Backblaze B2は長期的なメディアアーカイブに費用対効果の高い選択肢であり、Google Driveはモバイルからファイルにアクセスしたい場合に適しています。

ジョブウィザードの2番目のステップでは、**転送オプション**を設定できます。同時転送数の設定、チェックサムの有効化または無効化、そして何かが移動される前にコピー内容をプレビューする**Dry Run**の有効化などです。これは、Premiumize.meのストレージが時間をかけて有機的に増大しており、その正確な構造がわからない場合に特に役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring and running a Premiumize.me backup job" class="img-large img-center" />

## モニタリングとジョブ履歴

ジョブが実行されると、RcloneViewはその結果を**Job History**に記録します。各エントリには開始時刻、所要時間、転送されたファイル数、移動された総データ量、およびエラーが表示されます。これにより、すべての同期操作の監査証跡が得られます。これは、大規模なPremiumize.meライブラリを複数のセッションにわたって計画的に移行している場合に重要です。

ネットワークの不具合やPremiumize.me APIのレート制限などにより転送が途中で失敗した場合、再設定なしでJob Historyから同じジョブを再実行できます。RcloneViewは既に正常に転送済みのファイルをスキップするため、中断された同期は中断した箇所から再開されます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Premiumize.me sync results" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote Manager**を開き、**New Remote**をクリックして、**Premiumize**を選択します。
3. OAuthブラウザログインを完了し、アカウントを認証します。
4. Premiumize.meをソース、選択したクラウドを宛先として同期ジョブを作成します。

RcloneViewを使えば、Premiumize.meのファイルはもはや単一のサービスに閉じ込められることはありません — 自分のスケジュールでバックアップ、アーカイブ、または移行を行いましょう。

---

**関連ガイド：**

- [Put.ioストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [RcloneViewによるクラウド間移行](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [ジョブ履歴と転送ログのモニタリング](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />

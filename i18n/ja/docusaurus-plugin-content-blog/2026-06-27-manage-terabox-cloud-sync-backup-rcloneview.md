---
slug: manage-terabox-cloud-sync-backup-rcloneview
title: "Teraboxストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - alex
description: "RcloneViewでTeraboxクラウドストレージを管理 — 1つのクロスプラットフォームGUIから90以上のプロバイダー間でファイルを同期、バックアップ、転送。CLIは不要です。"
keywords:
  - Terabox sync
  - Terabox backup
  - manage Terabox storage
  - Terabox RcloneView
  - Terabox cloud management
  - Terabox file transfer
  - sync Terabox to Google Drive
  - Terabox cloud backup tool
  - RcloneView Terabox guide
  - cloud storage manager Terabox
tags:
  - terabox
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Teraboxストレージを管理 — RcloneViewでファイルを同期・バックアップ

> TeraboxをRcloneViewに接続すれば、フル機能のクラウド管理体験が得られます — コマンドラインを使わずに、ファイルの閲覧、同期、バックアップ、転送が可能です。

Teraboxは無料クラウドストレージの容量が大きいため、動画アーカイブ、プロジェクトファイル、個人バックアップの保存先として人気があります。しかし、そのストレージを効率的に管理する — 特に他のプロバイダーにファイルを移動したり、定期バックアップをスケジュールしたりする — には、きちんとしたツールが必要です。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントかつ同期でき、Windows、macOS、Linuxに対応しているため、Teraboxは既存のマルチクラウドワークフローに自然に組み込めます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## TeraboxをRcloneViewに接続する

Teraboxをリモートとして追加するのは1分もかかりません。RcloneViewを開いて**Remote**タブに移動し、**New Remote**をクリックします。プロバイダーリストをスクロールしてTeraboxを選択し、プロンプトが表示されたらアカウントの認証情報を入力して保存します。RcloneViewは接続情報を内蔵のrclone設定に保存するため、セットアップを繰り返す必要はありません。

接続が完了すると、Teraboxがエクスプローラーパネルのタブとして表示されます。フォルダの閲覧、新規ディレクトリの作成、ファイルのリネーム、ストレージ使用量の確認などを、他のすべてのプロバイダーで使うのと同じ2ペインインターフェースから行えます。パンくずリストのパスバーにより、深いフォルダ階層を迷わずナビゲートできます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Terabox as a new remote in RcloneView" class="img-large img-center" />

## Teraboxのファイルを同期・バックアップする

RcloneViewの4ステップ同期ウィザードを使えば、数分でTeraboxのバックアップジョブを設定できます。Teraboxをソースとして設定し、ローカルフォルダ、外部ドライブ、または他のクラウドプロバイダーなど、任意の宛先を選択して、ジョブに名前を付けます。詳細設定ステップでは、同時転送数を調整したり、チェックサム検証を有効にしたりでき、宛先に到着するすべてのファイルが元のファイルとバイト単位で一致することを保証します。

フル同期を実行する前に、ジョブマネージャーから**ドライラン**を実行して、どのファイルがコピーまたは削除されるかを正確にプレビューしましょう。これは、誤削除が大きな損害につながりかねない大規模なTeraboxアーカイブを扱う際に特に有用です。プレビューに問題がなければジョブを実行し、画面下部の転送タブでリアルタイムの進捗を確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Terabox in RcloneView" class="img-large img-center" />

## Teraboxのファイルを他のクラウドへ転送する

よくある使用例は、地域データレジデンシーの制約が厳しい、あるいはエグレスコストが低いプロバイダーへ、Teraboxからコンテンツを移行することです。両方のリモートをエクスプローラーパネルに並べて開けば、TeraboxからAmazon S3、Google Drive、Backblaze B2、その他RcloneViewが対応する任意のプロバイダーへ、ファイルを直接ドラッグできます。異なるリモート間でのドラッグ&ドロップは常にコピーであり移動ではないため、削除を決めるまでTeraboxの元データはそのまま残ります。

より大規模な移行には、専用のコピージョブまたは同期ジョブを作成してください。RcloneViewはFREEライセンスでも1:N同期に対応しており、1回のジョブ実行で単一のTeraboxフォルダを複数の宛先にプッシュできます — プライマリバックアップとコールドアーカイブの両方を用意したい場合に便利です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Terabox to another provider" class="img-large img-center" />

## ジョブ履歴の確認と転送の監視

各実行後、RcloneViewは結果を**ジョブ履歴**に記録します。日付範囲でフィルタリングしたり、ジョブが完了したか、エラーになったか、キャンセルされたかを確認したり、転送された合計バイト数と転送速度を確認したりできます。複数のワークフローにまたがって大規模なTeraboxライブラリを管理している人にとって、この監査ログは異常の発見に非常に役立ちます — エラー件数の急増は、多くの場合クォータ制限やネットワークの問題を示しており、調査する価値があります。

PLUSライセンス保有者は、任意のTeraboxジョブにcron形式のスケジュールを設定し、完了時に通知を有効にできるため、バックアップを真にハンズフリーで実行できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing Terabox sync results in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote**タブを開いて**New Remote**をクリックし、Teraboxを選択して認証情報を入力します。
3. エクスプローラーパネルでTeraboxのフォルダを閲覧し、バックアップまたは転送したいコンテンツを特定します。
4. 4ステップウィザードを使って同期ジョブまたはコピージョブを作成し、ドライランで計画を検証してから実行します。

適切に設定されたTeraboxバックアップは、数分で構築でき、保存しているコンテンツが必要な場所に確実に複製されているという安心感を与えてくれます。

---

**関連ガイド:**

- [RcloneViewでTeraboxの無料ストレージを他のクラウドに同期する](https://rcloneview.com/support/blog/sync-terabox-free-storage-other-clouds-rcloneview)
- [MEGAクラウドストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [RcloneViewによるクラウド間移行](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />

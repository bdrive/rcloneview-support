---
slug: sync-backblaze-b2-to-onedrive-rcloneview
title: "Backblaze B2からOneDriveへ同期 — RcloneViewによるクラウドバックアップ"
authors:
  - tayson
description: "RcloneViewを使ってBackblaze B2オブジェクトストレージからMicrosoft OneDriveへファイルを同期・移行する方法を解説します。GUIベースのアプローチとスケジュール自動化のサポートを含みます。"
keywords:
  - Backblaze B2 to OneDrive sync
  - migrate Backblaze B2 OneDrive RcloneView
  - Backblaze B2 OneDrive transfer
  - B2 to OneDrive migration guide
  - cloud storage sync tool
  - Backblaze B2 backup OneDrive
  - OneDrive from B2 migration
  - rclone B2 OneDrive GUI
tags:
  - backblaze-b2
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2からOneDriveへ同期 — RcloneViewによるクラウドバックアップ

> Backblaze B2のコールドストレージから選択したファイルをOneDriveに取り込んで日常的な利用に活用する、あるいはRcloneViewの1つのジョブでB2バケット全体をOneDriveに移行できます。

Backblaze B2は優れたアーカイブ・バックアップ先ですが、そのS3互換APIは日常的なコラボレーション向けには設計されていません。チームがMicrosoft 365でファイルにアクセスしたり、SharePoint経由でドキュメントを共有したり、あるいは単にB2からよりアクセスしやすい場所へデータを移動する必要がある場合は、OneDriveへの同期が解決策になります。RcloneViewは、ビジュアルなジョブビルダーとリアルタイムモニタリングによって転送をシンプルにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Backblaze B2とOneDriveの接続

RcloneViewで**リモートタブ → 新規リモート**を開き、まずBackblaze B2を追加します。Application Key IDとApplication Keyを入力し、バケット名を指定します。OneDriveについては、プロバイダー一覧から選択し、Microsoftアカウントでブラウザ経由のOAuthログインを完了させます。両方のリモートを保存したら、デュアルペインエクスプローラーで並べて開きます。

左側でB2バケットを、右側でOneDriveを閲覧します。両側でフォルダ階層の奥深くまで移動でき、転送を開始する前にファイル数を比較できます。この視覚的な確認ステップにより、大規模な移行中の予期せぬ事態を防げます。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Backblaze B2 and OneDrive remotes in RcloneView" class="img-large img-center" />

## 同期ジョブの設定と実行

ホームタブで**同期**をクリックしてジョブウィザードを開きます。ソースにBackblaze B2のパスを、ターゲットにOneDriveの宛先フォルダを設定します。ステップ2では同時転送数を設定します。OneDriveにはAPIレート制限があるため、いきなり最大にするより4〜8並列から始める方が安全です。データの整合性が重要な用途であれば、チェックサム比較を有効にしてください。

本格的な転送を行う前に**ドライラン**オプションを使用しましょう。これは選択的に同期する場合、例えばステップ3で**最大ファイル経過日数**フィルターを設定してB2から直近90日分のファイルのみを取り込む場合などに特に有用です。ドライランの出力結果が正しければ、実際のジョブを実行します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="B2 to OneDrive sync job in progress in RcloneView" class="img-large img-center" />

## B2からの定期的な取り込みのスケジュール設定

ワークフローによっては、B2からOneDriveへの定期的な同期が求められることがあります。例えば、毎朝B2に新しくアーカイブされたレポートをOneDriveフォルダに取り込み、チームメンバーがMicrosoft 365インターフェース経由でアクセスできるようにする場合です。PLUSライセンスがあれば、RcloneViewのcrontabスケジューラーがこれを自動的に処理します。ジョブウィザードのステップ4でスケジュールを設定し、ワークフローに合った曜日と時刻を選択してください。

**ジョブ履歴**タブにはすべての実行が記録されるため、スケジュールされた同期が正常に完了したことを確認したり、どれだけのデータが移動したかを確認したりできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Backblaze B2 to OneDrive sync" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Backblaze B2（Application Key）とOneDrive（OAuth）をリモートとして追加します。
3. 適切な転送制限を設定し、B2からOneDriveへの同期ジョブを作成します。
4. PLUSライセンスで定期的な同期をスケジュールし、手間をかけずに自動化します。

RcloneViewを使えば、B2の堅牢なアーカイブからOneDriveのコラボレーション環境へのデータ移動が、日常的で信頼性の高い作業になります。

---

**関連ガイド:**

- [RcloneViewでBackblaze B2をAzure Blob Storageに同期する](https://rcloneview.com/support/blog/sync-backblaze-b2-to-azure-blob-rcloneview)
- [RcloneViewでBackblaze B2クラウドストレージを管理する](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [RcloneViewでOneDriveをBackblaze B2に移行する](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

---
slug: backup-nextcloud-webdav-with-rcloneview
title: "RcloneViewでNextcloudとWebDAVドライブをバックアップ:ビジュアル同期、スケジュール、整合性チェック"
authors:
  - tayson
description: "RcloneViewでNextcloudや任意のWebDAVドライブを保護しましょう - リモートを追加し、差分をプレビューし、バージョン管理されたバックアップをスケジュールし、CLIフラグを覚えることなく整合性を検証できます。"
keywords:
  - nextcloud backup
  - webdav backup
  - rcloneview webdav
  - nextcloud to s3
  - webdav to google drive
  - cloud to cloud backup
  - rclone webdav gui
  - versioned backup
  - rclone check
  - cloud automation
tags:
  - RcloneView
  - backup
  - webdav
  - nextcloud
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでNextcloudとWebDAVドライブをバックアップ:ビジュアル同期、スケジュール、整合性チェック

> Nextcloudや任意のWebDAVドライブをGoogle Drive、S3/Wasabi、または他のクラウドにミラーリングして安全に保ちましょう-コマンドライン不要です。RcloneViewは変更をプレビューし、ジョブをスケジュールし、整合性を検証することで、バックアップの信頼性を保ちます。

Nextcloudや他のWebDAVサービスはチーム共有やセルフホスト型ストレージを支えていますが、それでもオフサイトバックアップが必要です。RcloneViewはrcloneエンジンをGUIでラップし、WebDAVを一度追加するだけで、宛先のクラウドとペアリングし、Job SchedulerとCompareを使って検証済みのバックアップを自動化できます。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## RcloneViewでWebDAV/Nextcloudをバックアップする理由

- 上書きを避けるため、**Compare**で同期前に差分を可視化。
- 同じWebDAVリモートを再利用して複数のターゲット(Drive、S3、Wasabi)にバックアップ。
- 定期バックアップをスケジュールし、Job Historyにログを保持。
- コピー/同期フローでチェックサムオプションを有効にし、データの整合性を確認(対応している場合)。

## WebDAV/Nextcloudリモートを接続する

1. **`+ New Remote`**をクリック -> **WebDAV**を選択。
2. **URL**、**ユーザー名**、**パスワード/アプリパスワード**を入力し、適切なベンダープリセット(例:Nextcloud)を選択。
3. `Nextcloud_Main`のように分かりやすい名前を付ける。  
   <img src="/support/images/en/blog/new-remote.png" alt="New remote wizard" class="img-medium img-center" />

参考が必要ですか?WebDAVガイドをご覧ください:[WebDAV/Nextcloudリモートを追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)。

## バックアップ先を選ぶ

- **Google Drive / Workspace** - 簡単な共有と履歴管理に。
- **S3互換**クラウド(Amazon S3、Wasabi、R2) - 予測可能なコストとライフサイクルルールに。
- **別のWebDAV** - シンプルなミラーコピーに。

`+ New Remote`で宛先リモートを追加し、**Explorer -> Browse**で両方を並べて開きます。  
<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Side-by-side remotes" class="img-medium img-center" />

## コピー前にプレビューする

- Explorerでソース(WebDAV)と宛先フォルダを選択。
- **Compare**をクリックして、欠落・新しい・同一のアイテムをハイライト表示。
- **`Copy ->`**または**`<- Copy`**を使って必要なものだけを移動するか、不要なファイルを安全に削除。

## Syncでワンタイムバックアップを実行する

1. ソース/宛先フォルダを選択。
2. **Sync**をクリックし、まず**Dry run**を有効にして計画中の変更を確認。
3. Syncオプションでは、サーバーがスロットリングする場合は同時実行数を控えめに保つ。テスト後にSettingsでtransfers/checkersを増やせます。
4. **Transfer**タブと**Completed**タブで進捗を確認し、APIの制限がないかログを確認。

## 定期バックアップをスケジュールする(設定すれば自動で実行)

1. Syncダイアログで**Save to Jobs**をクリック(または**Job Manager -> Add Job**を開く)。
2. スケジュール(毎日または特定の曜日)を選び、シンプルなポイントインタイムコピーにしたい場合は宛先を日付付きフォルダに指定。
3. 通知を有効にし、**Job History**で成功/失敗の詳細を確認。  

- ガイド:[Syncジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)、[ジョブの実行と管理](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)、[ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)、[転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## クイックFAQ

**Nextcloud以外の任意のWebDAVでも動作しますか?**  
はい - WebDAVを選択し、お使いのサービスに合った適切なベンダー/プリセット、または「other」を選んでください。

**複数の宛先にバックアップできますか?**  
はい - 同じWebDAVソースを複数のジョブで再利用できます(例:Nextcloud -> DriveとNextcloud -> Wasabi)。

**アプリがロックされている場合、スケジュールされたジョブは実行されますか?**  
ジョブは設定通りに実行されます。App LockはUIへのアクセスを保護するだけです([App Lockを有効にする](/tutorials/enable-app-lock)を参照)。

## まとめ

RcloneViewを使えば、WebDAV/Nextcloudのバックアップを視覚的かつ予測可能にできます:リモートを一度追加し、変更をプレビューし、パフォーマンスを調整し、検証済みのジョブをスケジュールします。CLIの習熟なしで、信頼できるオフサイトコピーでチームのファイルを保護しましょう。

<CloudSupportGrid />

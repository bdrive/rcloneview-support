---
slug: backup-zoho-workdrive-google-drive-s3-rcloneview
title: "RcloneViewでZoho WorkDriveをGoogle DriveやS3へ自動バックアップ"
authors:
  - tayson
description: "RcloneViewのWebDAV接続を使い、Zoho WorkDriveのデータをGoogle Drive、AWS S3、外部ストレージへ自動的かつスケジュールに沿ってバックアップし、大切なデータを保護しましょう。"
keywords:
  - zoho workdrive backup
  - zoho to google drive
  - zoho workdrive sync
  - zoho workdrive export
  - backup zoho files
  - zoho workdrive to s3
  - zoho cloud backup tool
  - zoho workdrive migration
  - zoho workdrive rclone
  - zoho file backup automation
tags:
  - RcloneView
  - zoho
  - cloud-storage
  - backup
  - sync
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでZoho WorkDriveをGoogle DriveやS3へ自動バックアップ

> Zoho WorkDriveは優れたコラボレーションツールですが、バックアップ計画は万全ですか？ Zohoのサブスクリプションが失効したり、データが誤って削除されたりした場合でも、Google DriveやS3への独立したバックアップがあれば何も失われません。

Zoho WorkDriveは、CRM、メール、プロジェクト管理、共有ファイルストレージを1つのプラットフォームにまとめたZohoエコシステムを利用する企業に人気です。しかし、ZohoにはWorkDriveのデータを別のクラウドへバックアップするネイティブな方法がありません。災害復旧、コンプライアンス、または移行のために独立したコピーが必要な場合、RcloneViewはWebDAV経由でWorkDriveに接続することでそのギャップを埋めます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜZoho WorkDriveをバックアップすべきか

- **クロスクラウドのネイティブバックアップがない** — ZohoにはS3やGoogle Driveへの組み込みエクスポート機能がありません。
- **誤削除のリスク** — チームメンバーが共有ファイルを削除する可能性があります。外部バックアップがなければ、復旧は不可能な場合があります。
- **サブスクリプションへの依存** — Zohoプランの有効期限が切れたりダウングレードされたりすると、ファイルへのアクセスが制限される可能性があります。
- **コンプライアンス要件** — 一部の規制では、データを複数の独立した場所に保存することが求められます。
- **移行の柔軟性** — ZohoからGoogle WorkspaceやMicrosoft 365への切り替えを検討する場合でも、バックアップがあればスムーズに移行できます。

## WebDAV経由でZoho WorkDriveを接続する

Zoho WorkDriveはWebDAVアクセスをサポートしており、RcloneViewはこれにネイティブに接続できます。

1. RcloneViewを開き、**Add Remote** をクリックします。
2. プロバイダーリストから **WebDAV** を選択します。
3. Zoho WorkDriveのWebDAV情報を入力します。
   - **URL**: Zoho WorkDriveのWebDAVエンドポイント。
   - **Username**: Zohoのメールアドレス。
   - **Password**: Zohoのセキュリティ設定で発行したアプリ専用パスワード。
4. 保存すると、WorkDriveのファイルとフォルダを閲覧できるようになります。

WebDAVの設定方法の詳細については、[WebDAV connection guide](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav) を参照してください。

<img src="/support/images/en/blog/new-remote.png" alt="Add Zoho WorkDrive via WebDAV" class="img-large img-center" />

## WorkDriveファイルを閲覧する

接続後、2ペインのExplorerでWorkDrive全体を閲覧できます。

- チームフォルダ、個人ファイル、共有スペースを表示します。
- ファイルサイズを確認し、バックアップに必要なストレージ容量を見積もります。
- 優先的にバックアップすべき重要なフォルダを特定します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Zoho WorkDrive files" class="img-large img-center" />

## Google Driveへのバックアップ

1. 2つ目のリモートとして **Google Drive** を追加します（[OAuth login](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login) 経由）。
2. **Copyジョブを作成**します: Zoho WorkDrive → Google Driveフォルダ。
3. **初回バックアップを実行**します — フォルダ構造を保持したまま全ファイルが転送されます。
4. [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) を使って毎日スケジュールし、自動的に差分更新を行います。

## AWS S3へのバックアップ

1. リモートとして **S3** を追加します（[S3 setup guide](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)）。
2. **Copyジョブを作成**します: Zoho WorkDrive → S3バケット。
3. 毎晩実行されるよう**スケジュール**します。
4. S3のライフサイクルポリシーを使い、古いバックアップをGlacierへ移動してコストを削減します。

## バックアップを検証する

各バックアップ実行後、[Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) を使って完全性を確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Zoho WorkDrive backup" class="img-large img-center" />

## 自動化と監視

1. オフピーク時間帯に毎日実行されるよう**バックアップをスケジュール**します。
2. [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) または [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) 経由で**通知を受け取り**ます。
3. **Job Historyを確認**し、すべてのバックアップ実行を追跡します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Zoho WorkDrive backups" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Zoho backup job history" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード**します。
2. WebDAV経由で **Zoho WorkDriveを追加**します。
3. **バックアップ先を追加**します（Google Drive、S3、外部ドライブなど）。
4. **Copyジョブを作成**し、スケジュールを設定します。
5. Folder Comparisonで**検証**します。

Zoho WorkDriveのデータをバックアップ計画のないままにしておかないでください。RcloneViewは、Zohoがネイティブには提供しない安心感を、あらゆるクラウドへの自動的かつ検証済みのバックアップという形で提供します。

---

**関連ガイド:**

- [WebDAVを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)
- [ブラウザベースのログイン（OAuth）でリモートを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [AWS S3およびS3互換ストレージを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

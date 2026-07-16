---
slug: manage-smb-cifs-network-shares-rcloneview
title: "SMB/CIFSネットワーク共有を管理 — RcloneViewでオフィスファイルサーバーをクラウドに同期"
authors:
  - tayson
description: "SMBネットワーク共有はオフィスファイルサーバーの中核です。RcloneViewに接続し、バックアップとリモートアクセスのためにGoogle Drive、S3、または任意のクラウドに同期する方法を紹介します。"
keywords:
  - smb cloud sync
  - cifs cloud backup
  - network share to cloud
  - smb to google drive
  - file server cloud sync
  - smb to s3 backup
  - windows share cloud
  - network drive cloud backup
  - smb rclone
  - office file server cloud
tags:
  - smb
  - nas
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SMB/CIFSネットワーク共有を管理 — RcloneViewでオフィスファイルサーバーをクラウドに同期

> 会社のファイルサーバーは何年も稼働しており、誰もがマップされたネットワークドライブ経由でアクセスしています。しかしオフサイトバックアップがなく、リモートワーカーは自宅からアクセスできません。クラウド同期はその両方の問題を解決します。

SMB/CIFS（Server Message Block / Common Internet File System）は、あらゆるWindows共有フォルダ、NASファイル共有、オフィスファイルサーバーの背後にあるプロトコルです。ローカルネットワークでは信頼性が高く高速ですが、クラウド統合やリモートアクセスを想定して設計されたものではありません。RcloneViewはそのギャップを埋めます — SMB共有を接続し、任意のクラウドプロバイダーに同期することで、バックアップ、リモートアクセス、ディザスタリカバリを実現します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SMB共有をRcloneViewに接続

<img src="/support/images/en/blog/new-remote.png" alt="Add SMB remote" class="img-large img-center" />

サーバーアドレス、共有名、認証情報を使ってSMB共有をリモートとして追加します。ネットワーク共有は2ペインのエクスプローラーに表示されます。

## 主なワークフロー

### ファイルサーバーをクラウドにバックアップ

S3、B2、Google Driveへのクラウドバックアップでオフィスファイルサーバーを保護します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="File server to cloud backup" class="img-large img-center" />

### リモートアクセスを有効化

ファイルサーバーの内容をGoogle DriveまたはOneDriveに同期し、リモートワーカーがVPNなしでどこからでもファイルにアクセスできるようにします。

### 夜間バックアップをスケジュール

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule file server backup" class="img-large img-center" />

オフィスネットワークが空いている夜間にバックアップを実行します。

### バックアップの整合性を検証

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify file server backup" class="img-large img-center" />

SMB共有とクラウドコピーを比較し、抜け漏れがないことを確認します。

### クラウドへの移行

ファイルサーバーの廃止を検討していますか？部署ごとに段階的にすべてをクラウドストレージに転送しましょう。

## パフォーマンスのヒント

- **業務時間外にバックアップを実行**してネットワーク混雑を回避
- **増分同期を使用** — 変更されたファイルのみが毎回転送されます
- **適切な同時実行数を設定** — 共有サーバーでは2〜4転送が目安
- **一時ファイルを除外** — `~$*`、`.tmp`、`Thumbs.db` をフィルタリング

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から**RcloneViewをダウンロード**します。
2. **SMB共有をリモートとして追加**します。
3. バックアップ用の**クラウド接続先を追加**します。
4. **同期ジョブを作成**し、スケジュールを設定します。
5. フォルダ比較で**定期的に検証**します。

ファイルサーバーにはクラウドのセーフティネットが必要です。

---

**関連ガイド:**

- [SFTP/SMBをローカルドライブとしてマウント](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [リモートファイルシステムのマウントと同期](https://rcloneview.com/support/blog/mount-sync-remote-file-systems-rcloneview)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

---
slug: fix-public-link-not-supported-errors-rcloneview
title: "公開リンク非対応エラーを解決する — RcloneViewで正しくファイルを共有する"
authors:
  - tayson
description: "RcloneViewのGet Public Linkエラーを解決し、どのリモートが共有可能なリンクに対応しているかを確認し、対応していない場合の安全な代替手段を使いましょう。"
keywords:
  - RcloneView
  - 公開リンクエラー
  - 公開リンク非対応
  - クラウドファイル共有
  - rclone 公開リンク
  - クラウドストレージ共有
  - 共有リンクの修正
  - クラウドファイル共有トラブルシューティング
  - リモートマネージャー
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 公開リンク非対応エラーを解決する — RcloneViewで正しくファイルを共有する

> Get Public Linkを右クリックしても何も起きない場合の理由と、代わりに行うべきことを解説します。

RcloneViewのExplorerパネルは右クリックメニューに**Get Public Link**コマンドを備えていますが、これはバックエンドがネイティブの共有APIを公開しているリモートでのみ動作します。単純なプロトコル接続や非対応のプロバイダーで試すと、URLの代わりにリクエストが失敗するかエラーが返されます。RcloneViewのRemote Managerとデュアルペインの Explorer を使えば、どのリモートを使っているかを簡単に確認し、代わりにリンク生成が可能な場所にファイルを移動できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 一部のリモートでGet Public Linkが失敗する理由

公開リンクの生成は、基盤となるストレージバックエンドが何をサポートしているかに依存します。Google Drive、Dropbox、Microsoft OneDrive、Box、pCloudなどネイティブの共有APIを持つプロバイダーは、rcloneがそのプロバイダー独自のリンクエンドポイントを呼び出すため、共有可能なURLを返します。SFTP、FTP、WebDAV、SMB/CIFSのようなプロトコルベースの接続にはこの概念自体が存在しません — これらは共有プラットフォームではなく純粋なファイル転送プロトコルであるため、コマンドが呼び出す対象がありません。S3互換のエンドポイント(Amazon S3、Wasabi、Backblaze B2、Cloudflare R2)は、代わりにプロバイダー自身のコンソールで設定したバケットポリシーや署名付きURLを通じて公開アクセスを処理します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote screen showing different provider types" class="img-large img-center" />

バグだと決めつける前に、自分のリモートがどのカテゴリに属するか確認しましょう。RemoteタブからRemote Managerを開き、リモートの種類を確認するだけで、失敗の原因がすぐに分かることが多いです。

## リモートと権限設定を確認する

リンクをサポートしているはずのOAuthベースのプロバイダーである場合、次のステップはアカウントが対象のファイルやフォルダを共有する権限を持っているか確認することです。これらのリモートのビジネス版やエンタープライズ版では、組織レベルで外部共有が制限されていることがあり、その場合RcloneViewでは同じ失敗リクエストとして表示されます。トークンが古くなっていそうな場合はRemote Managerからリモートを再認証し、まずはプロバイダー自身のWebインターフェースで共有可能と分かっているファイルで再試行してください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder compare view for verifying file locations before sharing" class="img-large img-center" />

マウント専用ツールとは異なり、RcloneViewはFREEライセンスでも同期とフォルダ比較に対応しているため、これ以上トラブルシューティングを続ける代わりに、リンク非対応のリモートからリンク対応のリモートへファイルを素早くコピーできます。

## リンク非対応リモートのための安全な代替手段

SFTP、FTP、WebDAV、SMB、そしてほとんどのS3互換バケットでは、実用的な解決策はネイティブリンクに対応したリモートへファイルをコピーするか、プロバイダー自身のコンソール(バケットポリシー、署名付きURL、またはNAS側の共有)を通じて配布することです。開いている2つのExplorerパネル間でRcloneViewのドラッグ&ドロップを使ってコピーを移動し、その後、移動先のリモートでGet Public Linkを実行してください。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling for repeatable copy-and-share workflows" class="img-large img-center" />

これが繰り返し必要な作業であれば、このコピー手順をJob ManagerにJobとして保存しておくと、同期のたびに同じファイルが自動的にリンク対応のリモートに届くようになります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. Remote Managerを開き、問題のリモートが実際にどのバックエンドタイプを使用しているか確認してください。
3. トークンが期限切れになっている可能性のあるOAuthリモートを再認証し、共有可能と分かっているファイルでリンクを再試行してください。
4. プロトコルまたはS3互換リモートの場合は、ドラッグ&ドロップでリンク対応のリモートにファイルをコピーし、そこでリンクを生成してください。

どのリモートがリンクを共有できるかを事前に知っておくことで、後々のサポートチケットを1件減らせます。

---

**関連ガイド:**

- [RcloneViewでクラウドファイルの共有可能な公開リンクを取得する](https://rcloneview.com/support/blog/link-public-shared-links-cloud-rcloneview)
- [Google Driveストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneViewでクラウド転送の権限拒否エラーを解決する](https://rcloneview.com/support/blog/fix-cloud-transfer-permission-denied-errors-rcloneview)

<CloudSupportGrid />

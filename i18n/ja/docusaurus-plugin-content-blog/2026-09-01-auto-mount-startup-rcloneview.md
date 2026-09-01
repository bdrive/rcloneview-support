---
slug: auto-mount-startup-rcloneview
title: "起動時の自動マウント — RcloneViewで常に準備万端のクラウドドライブ"
authors:
  - tayson
description: "RcloneViewの起動時自動マウントを設定して、コンピューターが起動した瞬間にクラウドドライブを利用できるようにしましょう。毎回手動で再マウントする必要はありません。"
keywords:
  - auto mount cloud drive startup
  - rcloneview 自動マウント
  - 起動時にクラウドストレージをマウント
  - 常時接続クラウドドライブ
  - 自動クラウドマウント windows
  - ログイン時起動 クラウドドライブ
  - rcloneview plus 機能
  - 永続的なクラウドマウント
  - mount manager rcloneview
  - クラウドドライブ起動自動化
tags:
  - RcloneView
  - feature
  - mount
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 起動時の自動マウント — RcloneViewで常に準備万端のクラウドドライブ

> 毎朝RcloneViewを開いて各クラウドドライブを手動でマウントする代わりに、起動時の自動マウントはマシンが起動した瞬間に自動でドライブをオンラインにします。

マウントされたクラウドドライブを日々のワークフローの一部として利用している人なら誰でも — Google Driveから直接ファイルを編集したり、S3バケットからアセットを取得したり、SFTPサーバーをローカルフォルダのように閲覧したりする際に — 再起動のたびに再マウントする手間を知っています。RcloneViewの起動時自動マウント設定は、その手順を完全になくし、アプリがシステムと共に起動するとすぐに設定済みのマウントを再接続します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 起動時自動マウントの動作

特定のマウントで有効にすると、RcloneViewはアプリが起動するたびに、最初に作成したときに設定した正確なキャッシュモード、ドライブ文字またはパス、読み取り専用設定を使って、そのリモートのマウントポイントを自動的に再接続します。一般設定の「ログイン時に起動」と組み合わせると、RcloneViewのウィンドウを開く前にファイルエクスプローラーでマウントされたドライブが利用可能になることを意味します。これはスケジュールベース同期やマルチウィンドウサポートと並ぶPLUSライセンス機能です — FREEライセンスでは引き続き手動マウント、アンマウント、すべてのマウントへの完全なファイルエクスプローラーアクセスがカバーされます。

この設定はグローバルではなくマウント単位なので、どのドライブを自動で再接続するかを正確に選択できます。めったに使わないアーカイブリモートは手動のままにしておき、毎日使うGoogle DriveフォルダやS3バケットなどの主要な作業ドライブは毎回自動でマウントされるようにできます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="自動マウントオプション付きで設定済みマウントを表示するMount Manager" class="img-large img-center" />

## Mount Managerでの設定

RemoteタブからMount Managerを開き、新しいマウントを作成するか既存のマウントを編集します。マウント設定画面で、キャッシュモード、ボリューム名、読み取り専用ステータスなどの他の設定と一緒にAuto mountを切り替えてから保存します。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントおよび同期するため、対象のリモートがGoogle Drive、S3互換バケット、SFTPサーバーのいずれであっても、同じ自動マウントトグルが同じように機能します。

すでに実行中のマウントについては、マウントがアクティブな間はEditが無効になることを覚えておいてください。まずアンマウントしてからAuto mountトグルを適用し、再マウントして正しく保存されたことを確認します。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Explorerパネルツールバーから直接リモートフォルダをマウントする" class="img-large img-center" />

## システムトレイと自動マウントの組み合わせ

起動時自動マウントは「最小化して起動」およびシステムトレイと組み合わせると最も効果的です。この組み合わせにより、RcloneViewはバックグラウンドで起動し、設定済みのドライブをマウントし、必要になるまで邪魔をしません。システムトレイアイコンのMountメニューでは、必要に応じてステータスを確認したりドライブをアンマウントしたりできるため、自動化によって手動制御が失われることはありません。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="マウントされたドライブのステータスを表示するシステムトレイメニュー" class="img-large img-center" />

## 使い始める

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**し、Help > Activate LicenseでPLUSライセンスが有効になっていることを確認します。
2. Mount Managerを開き、自動で再接続したいマウントを選択します。
3. そのマウントの設定でAuto mountトグルを有効にして保存します。
4. 一般設定で「ログイン時に起動」をオンにし、着席する前にRcloneViewと自動マウントされたドライブが準備できているようにします。

設定が完了すると、クラウドストレージはファイルシステムの永続的な一部のように動作し、手動での再マウントは不要になります。

---

**関連ガイド:**

- [Mount Cloud Storage as a Local Drive — Complete Guide to Using Google Drive, S3, and OneDrive Like Local Folders](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [System Tray and Background Sync — Keep Cloud Jobs Running in RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [RcloneView Mount Performance Tuning: Cache, Read Ahead, and VFS Settings for Smooth Cloud Drives](https://rcloneview.com/support/blog/mount-performance-tuning-rcloneview)

<CloudSupportGrid />

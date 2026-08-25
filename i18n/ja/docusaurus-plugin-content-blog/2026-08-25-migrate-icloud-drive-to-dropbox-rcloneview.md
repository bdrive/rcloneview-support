---
slug: migrate-icloud-drive-to-dropbox-rcloneview
title: "iCloud DriveからDropboxへ移行 — RcloneViewでファイルを転送"
authors:
  - casey
description: "RcloneViewを使ってiCloud DriveのファイルをDropboxに移動しましょう — 両方のクラウドに接続し、直接的で検証可能な転送を行うクロスプラットフォームGUIです。"
keywords:
  - iCloud DriveをDropboxへ移行
  - iCloudからDropboxへの転送
  - AppleクラウドからDropboxへ
  - iCloud Drive移行
  - RcloneViewクラウド間転送
  - iCloudからDropboxへの切り替え
  - iCloud DriveをDropboxにバックアップ
  - Appleファイルを Dropboxへ転送
tags:
  - RcloneView
  - cloud-to-cloud
  - migration
  - dropbox
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud DriveからDropboxへ移行 — RcloneViewでファイルを転送

> iCloud Driveから離れるには通常、まずMacにすべてダウンロードする必要があります — RcloneViewは両方のクラウドに直接接続し、そのようなローカル経由の手間なくファイルを転送します。

Appleエコシステムから離れる、クロスプラットフォームのチームに切り替える、あるいは単にストレージをDropboxに統合したい場合、いずれも同じ問題に行き着きます。iCloud Driveは他のクラウドプロバイダーへのネイティブなエクスポート機能を提供していません。一般的な回避策は、ライブラリ全体をローカルディスクにダウンロードしてからDropboxに再アップロードすることですが、これは転送時間を倍にし、余裕がないかもしれないローカルディスク容量を消費します。RcloneViewは、iCloud Driveサポートのためのrclone v1.69+を基盤に、両方のリモートに同時接続してクラウド間でファイルを直接移動します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud DriveとDropboxを接続する

iCloud Driveにはrclone v1.69以降が必要ですが、これはRcloneViewに標準搭載された内蔵rcloneですでに満たされているため、別途セットアップは不要です。Appleアカウントの認証情報でiCloud Driveリモートを追加し、続いてOAuthブラウザログインでDropboxを追加します。両方のリモートはExplorerにタブとして表示され、転送を始める前に2パネルレイアウトで並べて表示し、それぞれのライブラリを確認できます。RcloneViewはWindows、macOS、Linuxの1つのウィンドウから90以上のプロバイダーをマウントおよび同期できるため、このワークフローはMacからでも、家族で共有するApple ストレージを管理するWindowsマシンからでも同じように機能します。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an iCloud Drive remote alongside Dropbox in RcloneView" class="img-large img-center" />

## 移行を同期ジョブとして実行する

フォルダを1つずつドラッグする代わりに、4ステップのウィザードで一方向の同期ジョブを設定しましょう。ソースはiCloud Drive、宛先はDropbox、方向は「宛先のみを変更」に設定し、iCloud側には一切変更が加わらないようにします。写真や文書のライブラリが大きい場合、まずDry Runを実行すると、データが実際に移動する前に何がコピーされるかを正確に確認できます。iCloud Driveには長年にわたって個人的なコンテンツが蓄積されがちなので、これは特にやっておく価値があります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from iCloud Drive to Dropbox in RcloneView" class="img-large img-center" />

## 転送の監視と完了確認

大きなライブラリ、特に写真や文書のコレクションが多い場合は時間がかかります。Transferringタブではリアルタイムの進行状況、速度、ファイル数を確認でき、Job Historyには完了したジョブの合計サイズやエラーが発生したファイルが記録されるため、再試行が必要な項目をすぐに把握できます。転送が途中で中断された場合、RcloneViewの自動リトライ設定が同期を再実行し(デフォルト3回)、完了しなかった分を処理します。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing a completed iCloud Drive to Dropbox transfer in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. iCloud Driveリモート(rclone v1.69+が必要、標準搭載)と、OAuthログインによるDropboxリモートを追加します。
3. Dry Runを実行して、転送されるファイルをプレビューします。
4. 一方向の同期ジョブを作成し、Job Historyで完了まで監視します。

同期ジョブを一度設定すれば、新しく追加されたファイルの転送を繰り返す作業は、手動でのエクスポートではなく、ワンクリックで済みます。

---

**関連ガイド:**

- [iCloud DriveからGoogle Driveへ移行 — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [iCloud DriveからOneDriveへ移行 — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-icloud-drive-to-onedrive-rcloneview)
- [iCloud Driveストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)

<CloudSupportGrid />

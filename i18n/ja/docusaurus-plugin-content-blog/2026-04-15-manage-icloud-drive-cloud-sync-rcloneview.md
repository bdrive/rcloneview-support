---
slug: manage-icloud-drive-cloud-sync-rcloneview
title: "iCloud Driveストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "RcloneViewでiCloud Driveを管理 — rclone v1.69+をベースにしたGUIを使って、iCloud Driveファイルを同期、バックアップ、他のクラウドへ転送。"
keywords:
  - iCloud Drive 管理
  - iCloud Drive 同期
  - iCloud バックアップツール
  - RcloneView iCloud
  - iCloud Drive ファイル転送
  - Apple クラウドストレージ GUI
  - iCloud から Google Drive へ
  - マルチクラウドバックアップ
  - iCloud Drive rclone
  - Apple クラウドストレージ バックアップ
tags:
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Driveストレージを管理 — RcloneViewでファイルを同期・バックアップ

> iCloud DriveはAppleのネイティブクラウドストレージです。rclone v1.69+を基盤とするRcloneViewは、iCloud Driveに直接接続し、Appleのクラウドコンテンツをマルチクラウドのファイル管理ワークフローに取り込みます。

iCloud DriveはmacOSやiOSのワークフローに深く統合されていますが、iCloudからファイルを取り出して別のプロバイダーにバックアップしたり、iCloudのコンテンツをWindowsベースのシステムと同期したりするには、これまでApple独自のエコシステムアプリが必要でした。RcloneViewは、rclone v1.69+のiCloud Driveサポートを利用して、Appleのクラウドストレージに直接接続し、クロスプラットフォームなファイル管理インターフェースに統合します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでiCloud Driveを接続する

iCloud Driveのサポートには**rclone v1.69以降**が必要です。RcloneViewには組み込みのrcloneバイナリが同梱されており、アプリ内でのrcloneセルフアップデートに対応しています。**Help**タブから、アプリ内で直接必要なバージョンに更新できます。

iCloud Driveを接続するには、**Remoteタブ > New Remote**に移動し、プロバイダー一覧から**iCloud Drive**を選択します。Appleの認証情報を入力して認証を完了してください。設定が完了すると、iCloud Driveがエクスプローラー内にリモートとして表示され、すべてのiCloudフォルダとファイルが表示されます。macOSでは、ファイルがローカルにダウンロードされているかどうかにかかわらず、iCloudに保存されている内容を正確に確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

## iCloud Driveを別のクラウドにバックアップする

最も一般的なユースケースは、iCloud Driveのコンテンツをクラウド間でAmazon S3、Backblaze B2、Google Driveにバックアップし、クロスプラットフォームでのアクセスとディザスタリカバリーを実現することです。RcloneViewの**Job Manager**で同期ジョブを設定します。ソースはiCloud Driveリモート、宛先はバックアップ先のクラウドリモートです。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling iCloud Drive backup to another cloud in RcloneView" class="img-large img-center" />

iCloud Driveを主要なドキュメント保管場所として使用しているプロフェッショナル — 500GBのデザイン資産、クライアントファイル、プロジェクトアーカイブを抱えている場合 — にとって、Backblaze B2への夜間バックアップをスケジュールすることは、特定プロバイダーに依存しない安全策を構築することになります。iCloud Driveのフォルダ構造には、Desktop、Documents、アプリ固有のフォルダが含まれます。RcloneViewのフィルタリングオプションを使えば、特定のパスを含めたり除外したりできます。たとえば、大容量のメディアライブラリをスキップしつつDocumentsフォルダだけを同期する、といったことが可能です。

## クロスプラットフォームでのiCloudアクセス

MacとWindowsが混在する環境のチームは、iCloudのWindowsクライアントの機能制限に悩まされることがよくあります。Windows版のRcloneViewはiCloud Driveに接続して直接ファイルアクセスを提供できるため、iCloudのコンテンツをチーム全体がアクセス可能な共有ネットワークドライブやNASシステムにコピーまたは同期することが可能になります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Accessing iCloud Drive from Windows using RcloneView" class="img-large img-center" />

デュアルパネルのエクスプローラーにより、クロスプラットフォームのファイル管理は非常に簡単になります。片側にiCloud Drive、もう片側に対象のWindows共有や別のクラウドを表示します。パネル間でファイルをドラッグしてコピーしたり、繰り返し転送するための同期ジョブを設定したりできます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Help > Check for Updates**から、組み込みのrcloneがv1.69+に更新されていることを確認します。
3. **Remoteタブ > New Remote**に移動し、**iCloud Drive**を選択して、Appleの認証情報を入力します。
4. **Job Manager**で同期ジョブを設定し、iCloud Driveを二次クラウドにバックアップします。

RcloneViewを使えば、iCloud DriveはもはやAppleのエコシステム内に閉じ込められることなく、あなたのAppleクラウドコンテンツはより広範なマルチクラウドのバックアップ・管理戦略の一部となります。

---

**関連ガイド:**

- [RcloneViewでiCloud Driveを使う — はじめてのガイド](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [Google Driveクラウドストレージを管理 — RcloneViewで同期・バックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [OneDriveクラウドストレージを管理 — RcloneViewで同期・バックアップ](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

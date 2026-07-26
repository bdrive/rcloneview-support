---
slug: migrate-pcloud-to-proton-drive-rcloneview
title: "pCloudからProton Driveへ移行する — RcloneViewでファイルを転送"
authors:
  - steve
description: "RcloneViewを使って、ローカルへのダウンロードを経ずにpCloudからProton Driveへ直接ファイルを移動。Dry Runプレビューとチェックサム検証付き。"
keywords:
  - pCloudからProton Driveへ移行
  - pCloud Proton Drive転送
  - RcloneView pCloud Proton Drive
  - プライバシー重視クラウド移行
  - pCloudファイル転送
  - Proton Drive同期
  - クラウド間移行
  - 暗号化クラウドストレージ転送
tags:
  - RcloneView
  - pcloud
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloudからProton Driveへ移行する — RcloneViewでファイルを転送

> すべてをまずローカルのハードドライブ経由で回すことなく、プライバシー重視の2つのクラウドプロバイダー間でファイルを直接移動できます。

pCloudからProton Driveに乗り換えるユーザーの多くは同じ理由からそうしています。プライバシー第一のプロバイダーに紐づいたエンドツーエンド暗号化ストレージが欲しいからです。問題は、両サービスが互いに直接通信できないことです。そのため、デフォルトのやり方はpCloudからすべてをダウンロードしてProton Driveに再アップロードすることになります — 遅い上に、無意味にローカルディスクの使用量が倍になります。RcloneViewは両方のリモートを1つのウィンドウで接続し、クラウド間で直接転送します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

まずpCloudを追加します — OAuthベースのリモートなので、ブラウザウィンドウが開いてログインするとRcloneViewが自動的に接続します。APIキーをコピーする必要はありません。Proton Driveはアカウントのメールアドレスとパスワードが必要で、有効にしていればオプションで2FAも使用できます。両方のリモートを設定すると、Explorerパネルに別々のタブとして表示され、何かを移動する前に分割パネルビューで片側ずつ開いてソースフォルダと宛先フォルダを並べて確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting pCloud and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## クラウド間でファイルを転送する

RcloneViewは1つのウィンドウから90以上のプロバイダーをマウント・同期でき、Windows、macOS、Linuxで動作するため、pCloudからProton Driveへの転送も他のクロスプロバイダー移動とまったく同じように行われます。小規模な単発転送では、2つのパネル間でドラッグ&ドロップするだけです — RcloneViewはこれがクロスリモート操作であることを認識し、移動ではなくコピーを行います。アカウント全体の移行には、代わりにCopyまたはSyncジョブを設定することで、進捗状況の追跡、リトライロジック、そして何が転送されたかの正確な記録が得られます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files from pCloud to Proton Drive in RcloneView" class="img-large img-center" />

## 移行が正しく完了したか確認する

pCloudを解約する前に、ソースと宛先の間でFolder Compareを実行しましょう。左側だけに存在するファイル、右側だけに存在するファイル、サイズが異なるファイルを表示してくれるので、旧プランをキャンセルする前に転送されなかったものを見逃さず確認できます。大規模なライブラリでは、Sync設定でチェックサム比較を有効にすると、ファイルサイズではなくハッシュで検証されます — 内部のファイル処理方式が異なる2つのプロバイダー間を移動する際には特に重要です。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing migration job history in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. pCloudをリモートとして追加し、ブラウザOAuthでサインインします。
3. アカウントのメールアドレスとパスワードでProton Driveをリモートとして追加します。
4. Dry Runを実行してから、両リモート間でCopyまたはSyncジョブを実行します。

転送が完了したら、Folder Compareで検証することで、何も残さずに旧アカウントを整理する自信を持てます。

---

**関連ガイド:**

- [pCloudストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Proton Driveストレージを管理する — RcloneViewで同期](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [pCloudからOneDriveへ移行する — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)

<CloudSupportGrid />

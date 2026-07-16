---
slug: sync-google-drive-to-digitalocean-spaces-rcloneview
title: "Google DriveをDigitalOcean Spacesに同期 — RcloneViewによるクラウドバックアップ"
authors:
  - tayson
description: "Google DriveをDigitalOcean Spacesに同期して、手頃な価格のS3互換クラウドバックアップを実現。RcloneViewのビジュアルインターフェースで自動同期ジョブを設定しましょう。"
keywords:
  - sync google drive to digitalocean spaces
  - google drive digitalocean backup
  - google drive s3 compatible sync
  - digitalocean spaces backup
  - cloud-to-cloud sync
  - rcloneview google drive sync
  - google drive object storage
  - digitalocean spaces transfer
  - automated cloud backup
  - google drive redundancy
tags:
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google DriveをDigitalOcean Spacesに同期 — RcloneViewによるクラウドバックアップ

> Google DriveをDigitalOcean Spacesにバックアップすることで、Drive内のすべてのファイルに対して、手頃な価格でS3互換のセーフティネットを確保できます。

Google Driveはコラボレーションやリアルタイム編集には優れていますが、アーカイブ用のバックアップ先として設計されているわけではありません。DigitalOcean Spacesは、250GBで月額5ドル(追加ストレージは0.02ドル/GB)という定額制のS3互換オブジェクトストレージを提供しており、Driveバックアップの予測可能で手頃な転送先となります。RcloneViewは両方のサービスを接続し、スケジュールされたジョブとリアルタイムの進捗モニタリングによって同期状態を維持します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google DriveバックアップにDigitalOcean Spacesを選ぶ理由

DigitalOcean Spacesは、複数のリージョン(NYC、SFO、AMS、SGP、FRA)にわたりS3互換のオブジェクトストレージを提供します。その定額料金モデルにより、AWS S3で発生しがちなリクエスト単位の予期しないコストが発生しません。すでにDigitalOcean上でインフラを運用しているチームにとって、Spacesはネイティブに統合されます。Google Driveから同期されたファイルは、Droplet、Kubernetesクラスター、サーバーレス関数から即座にアクセス可能になります。

Google Drive純正のバックアップオプションは限定的です。Google Takeoutは1回限りのエクスポートを生成するだけで、継続的なミラーリングはできません。サードパーティのバックアップツールは、Google Workspaceの追加ライセンス費用に匹敵するユーザーごとの料金を請求することが多くあります。RcloneView経由でDriveをSpacesに同期する場合、かかる費用はSpacesのストレージ料金のみで、自分のマシンやサーバー上で実行できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## リモートのセットアップ

RcloneViewで「Google Drive」をプロバイダーとして選択し、Google Driveリモートを追加します。OAuthフローはブラウザを通じて認証を行います。Googleアカウントでサインインしてアクセスを許可してください。ルートフォルダIDを設定することで、リモートの範囲をDrive全体、特定の共有ドライブ、または単一のフォルダに限定できます。

DigitalOcean Spacesの場合は、S3互換リモートを作成します。プロバイダーのドロップダウンから「Amazon S3 Compliant」を選択し、続いて「DigitalOcean Spaces」を選びます。DigitalOceanコントロールパネルのAPI > Spaces Keysで生成したSpacesのAccess KeyとSecret Keyを入力します。エンドポイントには、`nyc3.digitaloceanspaces.com`や`fra1.digitaloceanspaces.com`など、希望するリージョンを設定します。RcloneViewは資格情報を検証し、既存のSpacesを一覧表示します。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Browsing Google Drive and DigitalOcean Spaces in RcloneView explorer" class="img-large img-center" />

## 同期ジョブの構築

RcloneViewのJob Managerを開き、新しいジョブを作成します。Google Driveをソースに、DigitalOcean Spacesを送信先に設定します。正確なミラーを維持したい場合は「Sync」モードを、Driveから削除された後もSpaces側にファイルを残しておきたい場合は「Copy」モードを選択します。

Google Driveは、Google Docs、Sheets、Slidesを従来のファイル拡張子を持たないクラウドネイティブ形式で保存します。RcloneViewは転送時にこれらを自動的にMicrosoft Office相当の形式(`.docx`、`.xlsx`、`.pptx`)としてエクスポートし、Spaces上で利用可能なファイルとして保存されるようにします。PDFなど他の形式を希望する場合は、リモート設定でエクスポート形式をカスタマイズできます。

並列転送を設定すると、初回の同期を高速化できます。4~8並列の転送であれば、通常はGoogle DriveのAPIクォータの範囲内でうまく機能します。他のサービスと回線を共有している場合は、帯域幅の上限を設定してください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Drive to DigitalOcean Spaces sync" class="img-large img-center" />

## スケジュール設定と継続的なメンテナンス

Driveの変更頻度に応じて、同期ジョブを毎晩または毎週実行するようスケジュールします。RcloneViewのスケジューラーはcron形式のタイミング指定に対応しており、各実行では前回の同期以降に変更されたファイルのみが転送されます。ジョブ履歴パネルでは、タイムスタンプ、ファイル数、転送量とともにすべての実行が記録されます。

DigitalOcean Spacesには組み込みのCDNが用意されています。Driveのファイルが同期されたら、Spaces CDNを有効にしてファイルをグローバルに配信できます。これは、Google Driveに由来するマーケティング素材、ドキュメント、メディアを配信する際に便利です。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Drive to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. OAuthでGoogle Driveアカウントを認証し、必要に応じて特定のフォルダや共有ドライブにリモートの範囲を限定します。
3. APIキーとリージョンのエンドポイントを使って、DigitalOcean Spacesリモートを追加します。
4. Syncジョブを作成し、継続的なバックアップのために定期的に実行されるようスケジュールします。

Google DriveをDigitalOcean Spacesに同期することで、ファイルは2つの独立したクラウドに保存され、誤削除、アカウントロックアウト、プロバイダー障害から保護されます。

---

**関連ガイド:**

- [Google Driveを別のアカウントに簡単に転送する方法](https://rcloneview.com/support/blog/transfer-google-drive-to-another-account-easily)
- [RcloneViewでDigitalOcean Spacesをローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [RcloneViewでLinodeオブジェクトストレージ、S3、Google Driveを同期する](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)

<CloudSupportGrid />

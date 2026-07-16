---
slug: stream-sync-putio-media-nas-cloud-rcloneview
title: "RcloneViewでPut.ioのメディアファイルをNASやクラウドドライブにストリーム・同期する"
authors:
  - tayson
description: "Put.ioのダウンロードファイルをSynology NAS、Plexライブラリ、Google Driveへ自動同期。RcloneViewでメディアファイルを整理し、常にバックアップされた状態を保ちます。"
keywords:
  - putio sync nas
  - putio download manager
  - putio to google drive
  - putio file manager
  - putio rclone
  - putio media sync
  - putio backup tool
  - putio plex integration
  - putio to nas
  - putio automated download
tags:
  - RcloneView
  - putio
  - cloud-storage
  - media
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでPut.ioのメディアファイルをNASやクラウドドライブにストリーム・同期する

> Put.ioはクラウドダウンロードには最適ですが、ファイルを整理してNASやPlexサーバーに移動するには通常手動転送が必要です。RcloneViewはこのパイプライン全体を自動化します。

Put.ioは、トレントや直接リンクなどのファイルを取得し、瞬時にストリーミングできるようクラウドに保存してくれる人気のクラウドサービスです。しかし、ファイルがPut.ioに保存された後、ほとんどのユーザーは手動でローカルドライブやNASにダウンロードしています。RcloneViewはPut.ioに直接接続し、ワークフロー全体を自動化します。新しいダウンロードファイルをSynology NAS、Plexライブラリ、Google Drive、その他任意のストレージへ同期できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Put.ioの同期を自動化する理由

- **手動ダウンロードは面倒** — 新しいファイルが追加されるたびに、ブラウザを開いてダウンロードをクリックし、待機してファイルを移動する必要があります。
- **NAS/Plex連携** — ファイルを自動的にPlexライブラリフォルダに配置することで、即座に利用可能になります。
- **ストレージ管理** — Put.ioのストレージ容量には限りがあります。自動同期により、ファイルが別の場所に安全に保存された後、容量を解放できます。
- **複数の転送先への配信** — メディアをNAS、クラウドバックアップ、ポータブルドライブへ同時に送信できます。

## Put.ioを接続する

1. RcloneViewを開き、**リモートを追加**をクリックします。
2. プロバイダー一覧から**Put.io**を選択します。
3. OAuthで認証します。
4. 保存すると、Put.ioのファイルが閲覧可能になります。

<img src="/support/images/en/blog/new-remote.png" alt="Add Put.io remote in RcloneView" class="img-large img-center" />

## Put.ioのファイルを閲覧・管理する

エクスプローラーで、ローカルドライブや他のクラウドと並べてPut.ioライブラリ全体を表示できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Put.io files alongside NAS" class="img-large img-center" />

## 同期ワークフロー

### Put.io → Synology NAS(Plex/Jellyfin)

メディアファイルをメディアサーバーへ自動配信します。

1. コピージョブを作成します: Put.io → NASのメディアフォルダ(例: `/volume1/Plex/Movies`)。
2. 1時間ごとに実行されるようスケジュールします。新しいPut.ioのダウンロードファイルが自動的にPlexに届きます。
3. Plexが新しいファイルを検出し、ストリーミング可能な状態にします。

### Put.io → Google Drive

Put.ioのダウンロードファイルのクラウドバックアップを保持します。

1. コピージョブを作成します: Put.io → Google Driveフォルダ。
2. Google Driveを通じて、どこからでもメディアにアクセスできます。

### Put.io → 外部ドライブ

オフラインのメディアアーカイブを維持します。

1. コピージョブを作成します: Put.io → 外部ドライブのパス。
2. ドライブを接続したときに手動で実行するか、常に接続している場合はスケジュールを設定します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Put.io sync job" class="img-large img-center" />

## パイプラインを自動化する

1. [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)を使って**1時間ごとの同期をスケジュール**します。
2. **バッチジョブを使用**して、Put.ioから複数の転送先へ順番に同期します。
3. 新しいファイルが同期されたら[Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)で**通知を受け取り**ます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Put.io sync" class="img-large img-center" />

## 転送状況をモニタリングする

Put.ioからNASへファイルがリアルタイムで転送される様子を確認できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Put.io file transfers" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Put.io sync job history" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. OAuthで**Put.ioをリモートとして追加**します。
3. **転送先を追加**します(NAS、Google Drive、外部ドライブ)。
4. **コピージョブを作成**し、スケジュールを設定します。
5. **自動化されたメディア配信を楽しみましょう** — ファイルはPut.ioからPlexライブラリへ、手間をかけることなく届きます。

Put.ioからのファイルの手動ダウンロードはもうやめましょう。RcloneViewは、ファイルを望みの場所に正確に届ける自動メディアパイプラインへと変えてくれます。

---

**関連ガイド:**

- [ブラウザベースのログイン(OAuth)でリモートを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [リモートの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Synology NASの自動検出と接続](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />

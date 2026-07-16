---
slug: sync-linode-object-storage-s3-google-drive-rcloneview
title: "RcloneViewでLinode Object StorageをAWS S3やGoogle Driveと同期する"
authors:
  - tayson
description: "RcloneViewのGUIでLinode Object Storageをビジュアルに管理 — バケットの閲覧、AWS S3やGoogle Driveへの同期、自動バックアップのスケジュール設定まで。"
keywords:
  - linode object storage sync
  - linode object storage backup
  - linode object storage gui
  - linode to aws s3
  - linode object storage mount
  - linode s3 compatible
  - akamai object storage sync
  - linode object storage file manager
  - linode object storage rclone
  - linode cloud backup tool
tags:
  - RcloneView
  - linode
  - s3-compatible
  - cloud-storage
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでLinode Object StorageをAWS S3やGoogle Driveと同期する

> Linode(現Akamai)Object Storageは手頃な価格でS3互換のバケットを提供していますが、デスクトップクライアントがありません。RcloneViewがそのギャップを埋め、閲覧・同期・バックアップの自動化をビジュアルに実現します。

Linode Object Storage(現在はAkamai Connected Cloudの一部)は、そのシンプルさと競争力のある価格から、開発者や小規模ビジネスに人気のS3互換ストレージサービスです。しかし、多くのオブジェクトストレージサービスと同様、Webダッシュボードは日常的なファイル管理向けには作られておらず、ネイティブのデスクトップ同期クライアントもありません。RcloneViewはS3 API経由でLinodeに接続し、閲覧・同期・データ転送の自動化ができる本格的なGUIを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜLinode Object StorageでRcloneViewを使うのか?

- **デスクトップクライアントがない** — LinodeはWebコンソールとAPIを提供していますが、同期アプリはありません。
- **ビジュアルなバケット管理** — CLIを使わずに、ファイルの閲覧、ドラッグ&ドロップ、整理ができます。
- **クラウド間同期** — Linodeのデータを AWS S3、Google Drive、その他任意のプロバイダーに複製できます。
- **自動バックアップ** — 冗長性確保のため、夜間の同期を第2のクラウドへスケジュールできます。

## Linode Object Storageへの接続

LinodeはS3互換のため、設定にはS3プロバイダーを使用します。

1. RcloneViewを開き、**Add Remote**をクリックします。
2. プロバイダータイプとして**Amazon S3**を選択します。
3. S3プロバイダーのドロップダウンから**Other**を選択します。
4. Linodeの認証情報を入力します。
   - Linode Cloud Managerからの**Access Key**と**Secret Key**。
   - **Endpoint**: `https://{cluster-id}.linodeobjects.com`(例: `https://us-east-1.linodeobjects.com`)。
   - **Region**: 使用しているクラスターのリージョン。
5. 保存すると、Linodeのバケットが閲覧できるようになります。

<img src="/support/images/en/blog/new-remote.png" alt="Add Linode Object Storage as S3-compatible remote" class="img-large img-center" />

## バケットを閲覧する

Linodeのバケットを、他のクラウドやローカルドライブと並べて表示できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Linode Object Storage" class="img-large img-center" />

## 同期シナリオ

### Linode → AWS S3(クラウド間冗長性)

1. 同期ジョブを作成します: Linode → S3バケット。
2. [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)で毎日実行するようスケジュールします。
3. どちらもS3互換のため、転送は高速かつ効率的です。

### Linode → Google Drive(チームアクセス)

1. コピージョブを作成します: Linode → Google Driveフォルダ。
2. 開発者向けのアセットを、技術に詳しくないチームメンバーもアクセスできるようにします。

### ローカル/NAS → Linode(オフサイトバックアップ)

1. ローカルストレージ → Linodeバケットへの同期ジョブを作成します。
2. Linodeの価格設定は、オフサイトバックアップにおいてコスト効率が良いです。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Linode sync job" class="img-large img-center" />

## ローカルドライブとしてマウントする

Linodeのバケットを通常のフォルダのようにアクセスできます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Linode Object Storage as local drive" class="img-large img-center" />

## 自動化と監視

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Linode backups" class="img-large img-center" />

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Linode transfers" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Linode Object Storage**をS3互換リモートとして追加します。
3. 任意の宛先へ**閲覧**、**マウント**、または**同期**します。
4. 自動バックアップのために**スケジュール**を設定します。

Linode Object Storageには、Webコンソール以上のものがふさわしいです。RcloneViewはマルチクラウド同期を組み込んだ、本格的なデスクトップ体験を提供します。

---

**関連ガイド:**

- [AWS S3およびS3互換ストレージを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [クラウドストレージをローカルドライブとしてマウントする](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

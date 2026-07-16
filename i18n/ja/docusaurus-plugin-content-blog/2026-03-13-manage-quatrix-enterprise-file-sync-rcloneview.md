---
slug: manage-quatrix-enterprise-file-sync-rcloneview
title: "Quatrixエンタープライズファイル共有を管理 — RcloneViewでGoogle Drive、S3などと同期"
authors:
  - tayson
description: "MaytechのQuatrixはエンタープライズファイル共有プラットフォームです。RcloneViewを使ってQuatrixをGoogle Drive、S3、その他のクラウドと同期・バックアップする方法を解説します。"
keywords:
  - quatrix file sharing
  - quatrix rclone
  - quatrix sync
  - quatrix backup
  - quatrix enterprise cloud
  - maytech quatrix
  - quatrix file transfer
  - quatrix google drive
  - quatrix s3 backup
  - enterprise file sharing sync
tags:
  - quatrix
  - enterprise
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Quatrixエンタープライズファイル共有を管理 — RcloneViewでGoogle Drive、S3などと同期

> MaytechのQuatrixは、コンプライアンス機能を備えた安全なエンタープライズファイル共有を提供します。しかし、他のクラウドプラットフォームと連携させるには適切なツールが必要です。RcloneViewはQuatrixを70以上のプロバイダーと接続します。

Quatrixは、セキュリティとコンプライアンスに重点を置いたエンタープライズグレードのファイル共有・転送プラットフォームです。多くの組織が、社外との安全なファイル交換にはQuatrixを、社内のコラボレーションにはGoogle DriveやOneDriveを利用しています。RcloneViewは、Quatrixをクラウドエコシステム全体と橋渡しします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでQuatrixを設定する

QuatrixはAPIまたはWebDAVインターフェースを介してアクセスできます。

1. RcloneViewを開き、**リモートを追加**をクリックします。
2. Quatrixの設定に適した接続タイプを選択します。
3. Quatrixの認証情報を入力します。

<img src="/support/images/en/blog/new-remote.png" alt="Add Quatrix remote" class="img-large img-center" />

## 主要なワークフロー

### Quatrix → S3（オフサイトバックアップ）

暗号化を使用して、機密性の高いQuatrixデータをAWS S3にバックアップします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Quatrix backup" class="img-large img-center" />

### Google Drive → Quatrix（安全な社外共有）

社内のGoogle Driveから、社外パートナーとの安全な共有のためにQuatrixへファイルを移動します。

### Quatrix → NAS（ローカルアーカイブ）

コンプライアンス上のアーカイブのため、QuatrixのコンテンツをローカルのNASに保管しておきます。

## 確認と監視

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Quatrix sync" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード** — [rcloneview.com](https://rcloneview.com/src/download.html)より。
2. **Quatrixを追加** — 他のクラウドと並べて設定します。
3. **バックアップと同期ジョブを作成**します。
4. **スケジュールして確認**します。

エンタープライズファイル共有を、あらゆるものとつなぐ。

---

**関連ガイド:**

- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [クラウドバックアップを暗号化する](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

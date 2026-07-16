---
slug: manage-hidrive-strato-sync-cloud-rcloneview
title: "STRATO HiDriveを管理 — RcloneViewでGoogle Drive、S3、その他のクラウドと同期"
authors:
  - tayson
description: "STRATO HiDriveはドイツおよびヨーロッパで人気のクラウドストレージです。RcloneViewを使ってHiDriveをGoogle Drive、S3、その他のプロバイダーと同期・バックアップする方法を紹介します。"
keywords:
  - hidrive cloud storage
  - strato hidrive sync
  - hidrive rclone
  - hidrive google drive
  - hidrive backup
  - hidrive file transfer
  - german cloud storage
  - strato hidrive backup
  - hidrive s3 sync
  - european cloud storage
tags:
  - hidrive
  - european-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# STRATO HiDriveを管理 — RcloneViewでGoogle Drive、S3、その他のクラウドと同期

> STRATO HiDriveはドイツで最も人気のあるクラウドストレージサービスの一つで、EU域内のサーバーでGDPRに準拠したストレージを提供しています。しかし、ワークフローにGoogle Drive、S3、または海外の共同作業者が含まれる場合、そのギャップを埋める方法が必要です。

STRATOのHiDriveは、ドイツの企業や個人に広く利用されている信頼性の高いヨーロッパのクラウドストレージプロバイダーです。HiDriveに保存されたデータは、厳格なEUデータ保護法のもとでドイツのサーバーに保管されます。RcloneViewはHiDriveを他の70以上のクラウドプロバイダーに接続し、EUのデータ主権を保ちながらバックアップ、移行、マルチクラウドのワークフローを実現します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜHiDriveなのか?

- **GDPR準拠** — EU法のもとでドイツのサーバーにデータを保存。
- **信頼できるインフラ** — STRATOはヨーロッパ最大級のホスティングプロバイダーの一つです。
- **WebDAV/SFTPアクセス** — 統合のための標準プロトコル。
- **優れた価格設定** — 競争力のあるヨーロッパのクラウドストレージ料金。

## RcloneViewでHiDriveを設定する

### WebDAVまたはSFTPで接続

1. RcloneViewを開き、**Add Remote**をクリックします。
2. タイプとして**WebDAV**または**SFTP**を選択します。
3. HiDriveのサーバーURLと認証情報を入力します。

<img src="/support/images/en/blog/new-remote.png" alt="Add HiDrive remote" class="img-large img-center" />

## 主なワークフロー

### HiDrive → S3(EU域外へのオフサイトバックアップ)

リージョンをまたいだ災害復旧のために、別のプロバイダーへバックアップします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule HiDrive backup" class="img-large img-center" />

### Google Drive → HiDrive(GDPR移行)

米国拠点のクラウドからGDPR準拠のHiDriveへデータを移行します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate to HiDrive for GDPR" class="img-large img-center" />

### HiDrive → Google Drive(コラボレーション)

海外のチームとの共同作業のために、特定のフォルダをGoogle Driveに同期します。

### 暗号化バックアップ

HiDriveのストレージに加えて、cryptリモートを使用してさらなる暗号化を行います。

## 検証と監視

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify HiDrive sync" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. WebDAVまたはSFTPで**HiDriveを追加**します。
3. バックアップやコラボレーションのために**他のクラウドと同期**します。
4. **自動ジョブをスケジュール**します。

グローバルなクラウドの柔軟性とともに、ヨーロッパのデータ主権を実現します。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジュール設定](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [クラウドバックアップの暗号化](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

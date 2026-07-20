---
slug: sync-proton-drive-backup-other-clouds-rcloneview
title: "RcloneViewでProton DriveをGoogle Drive、S3、その他のクラウドと同期する"
authors:
  - tayson
description: "Proton Driveはエンドツーエンドで暗号化されたクラウドストレージを提供します。RcloneViewを使ってProton DriveをGoogle Drive、S3、その他のプロバイダーと同期・バックアップする方法を解説します。"
keywords:
  - proton drive sync
  - proton drive backup
  - proton drive rclone
  - proton drive google drive
  - proton drive s3
  - proton drive transfer files
  - proton drive migration
  - proton drive multi cloud
  - proton drive alternative backup
  - encrypted cloud sync proton
tags:
  - RcloneView
  - proton-drive
  - privacy
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでProton DriveをGoogle Drive、S3、その他のクラウドと同期する

> Proton Driveは、ProtonMailの開発元が提供するプライバシー重視のクラウドストレージです。しかし、バックアップやコラボレーションのために他のクラウドと同期したい場合はどうすればよいでしょうか。RcloneViewはProton Driveを70以上のプロバイダーと接続します。

Proton Driveは、Protonエコシステムの一部としてエンドツーエンドで暗号化されたストレージを提供します。プライバシーを重視するユーザーには理想的ですが、そのエコシステムは自己完結型であり、Proton DriveをGoogle DriveやS3、その他のサービスと同期するネイティブな方法はありません。RcloneViewは、rcloneのProton Driveサポートによってその橋渡しを実現します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜProton Driveを他のクラウドと同期するのか

- **バックアップの冗長性** — エンドツーエンドの暗号化は優れていますが、単一のプロバイダーだけでは依然として単一障害点になります。
- **移行** — Google DriveからProton Drive、またはその逆への移行。
- **コラボレーション** — Protonを使用していない人とファイルを共有する。
- **ハイブリッドプライバシー** — 機密ファイルはProton Driveに、共有ファイルはGoogle Driveに。
- **アーカイブ** — 古いProton Driveのファイルをより安価なストレージ（B2、S3 Glacier）に移動する。

## RcloneViewでのProton Driveの設定

### Proton Driveをリモートとして追加する

1. RcloneViewを開き、**Add Remote**をクリックします。
2. タイプとして**Proton Drive**を選択します。
3. Protonアカウントのユーザー名とパスワードを入力します。
4. 2FAを使用している場合は、プロンプトが表示されたらコードを入力します。

<img src="/support/images/en/blog/new-remote.png" alt="Add Proton Drive remote" class="img-large img-center" />

2ペインのエクスプローラーでProton Driveのファイルを参照できます — その場で復号されます。

## 主なワークフロー

### 1) Google Drive → Proton Drive（プライバシー移行）

プライバシーのためにGoogleからProtonに切り替える：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate Google Drive to Proton Drive" class="img-large img-center" />

### 2) Proton Drive → S3（セカンダリバックアップ）

追加のcrypt暗号化を用いて、Proton DriveのバックアップをS3上に作成する：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Proton Drive backup" class="img-large img-center" />

### 3) Proton Drive → Google Drive（選択的な共有）

Protonを使用していないコラボレーターと共有するために、特定のフォルダをGoogle Driveにコピーします。

### 4) Proton Drive ↔ NAS（ローカル同期）

高速アクセスと追加の冗長性のために、Proton DriveのローカルコピーをNASに保持します。

## プライバシーに関する考慮事項

- Proton Driveのファイルは、Protonのサーバー上で保存時にエンドツーエンドで暗号化されています。
- rclone経由でファイルにアクセスすると、ローカルマシン上で復号されます。
- 別のクラウド（Google Drive、S3）へ転送すると、転送先のコピーはProtonの鍵で暗号化されなくなります。
- バックアップ先で最大限のプライバシーを確保するには、cryptリモートを使用して二重暗号化を行ってください。

## 転送の確認

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Proton Drive sync" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Proton Driveをリモートとして追加**します。
3. Protonと他のクラウドの間で**同期、バックアップ、または移行**を行います。
4. 他のプロバイダー上のProtonデータを暗号化してバックアップするには、**cryptリモートを使用**します。

プライバシー第一のストレージと、マルチクラウドの柔軟性を両立できます。

---

**関連ガイド：**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [クラウドバックアップの暗号化](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

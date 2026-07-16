---
slug: rcloneview-truenas-cloud-backup
title: "RcloneViewをTrueNASで使ったクラウドバックアップと同期"
authors:
  - tayson
description: "RcloneViewをTrueNAS(COREまたはSCALE)に接続して、クラウドバックアップ、同期、マルチクラウド管理を行いましょう。rcloneのフル機能でTrueNASのCloud Syncタスクを置き換え、または補強できます。"
keywords:
  - rcloneview truenas
  - truenas cloud backup rclone
  - truenas scale rclone gui
  - truenas core cloud sync
  - rclone truenas setup
  - truenas s3 backup rcloneview
  - truenas google drive backup
  - truenas cloud storage management
  - backup truenas to cloud
  - truenas rclone integration
tags:
  - RcloneView
  - nas
  - cloud-backup
  - guide
  - platform
  - linux
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewをTrueNASで使ったクラウドバックアップと同期

> TrueNASにはrcloneを利用した組み込みのCloud Syncタスクがありますが、この組み込みインターフェースには制限があります。TrueNASと並行してRcloneViewを実行することで、マルチクラウド管理、Cryptリモート、Bisync、フィルタルール、フォルダ比較など、rcloneのフル機能を活用できます。

TrueNAS COREとSCALEはどちらも、Cloud Syncタスク機能の内部でrcloneを使用しています。しかし、WebのGUIが公開しているのはrcloneの機能のごく一部にすぎません — プロバイダの選択肢は限られ、暗号化レイヤーもBisyncもクロスクラウドジョブもありません。RcloneViewをTrueNAS上で(Docker、VM、またはリモートワークステーション経由で)実行することで、TrueNASをメインのストレージプラットフォームとして使い続けながら、rcloneの完全な機能セットにアクセスできるようになります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## TrueNAS + RcloneView:2つの統合アプローチ

### アプローチ1 — TrueNAS SCALEコンテナ内でRcloneViewを動かす(Docker)

TrueNAS SCALEは、Appsインターフェースを通じてDockerコンテナをネイティブにサポートしています。RcloneViewを常駐コンテナとして実行できます。

1. TrueNAS SCALEで、**Apps → Available Applications**に移動するか、**Custom App**オプションを使用します。
2. TrueNASのデータセットパスを指すボリュームマウントを使って、RcloneViewのDockerイメージをデプロイします。
3. ブラウザからRcloneViewのWebインターフェースにアクセスします。

これによりRcloneViewはNAS自体にとどまるため、別のマシンを用意しなくてもバックアップジョブを実行できます。

### アプローチ2 — ワークステーションでRcloneViewを動かし、NASをリモートとして扱う

デスクトップでRcloneViewを実行し、TrueNASのデータセットをリモートとして追加します。

- **SMB**:Windows共有をRcloneViewでローカルまたはSMBリモートとして追加します。
- **SFTP**:TrueNASでSFTPを有効にし、RcloneViewでSFTPリモートとして追加します。
- **NFS**:NASのNFS共有をローカルにマウントし、RcloneViewでローカルパスとして扱います。

このアプローチはセットアップがシンプルで、Dockerの知識がなくても運用できます。

## TrueNASからSFTPを設定する

最も信頼性の高いリモートアクセス方法です。

### ステップ1 — TrueNASでSSHを有効にする

TrueNASで:**System → Services → SSH → Enable**。バックアップ用データセットへのアクセスに限定した専用ユーザーを作成します。

### ステップ2 — RcloneViewでTrueNASをSFTPリモートとして追加する

<img src="/support/images/en/blog/new-remote.png" alt="Add TrueNAS SFTP remote in RcloneView" class="img-large img-center" />

1. RcloneViewで**New Remote**をクリックします。
2. **SFTP**を選択します。
3. TrueNASのIP、SSHポート(デフォルト22)、ユーザー名、SSHキーまたはパスワードを入力します。
4. ルートパスをデータセットに設定します(例:`/mnt/tank/Backups`)。
5. 保存します。

これでRcloneViewにTrueNASのデータセットがナビゲート可能なリモートとして表示されます。

## TrueNAS向けのクラウドバックアップジョブ

TrueNASにSFTPリモートとしてアクセスできるようになったら、包括的なバックアップジョブを作成できます。

### TrueNASのデータセットをS3にバックアップする

1. RcloneViewで新規**Sync**ジョブを作成します。
2. ソース:`truenas-sftp:/mnt/tank/Photos/`
3. 宛先:`s3-backup:truenas-photos-backup/`
4. データ整合性のためにチェックサム検証を有効にします。
5. 毎晩実行するようスケジュールします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS to S3 backup job" class="img-large img-center" />

### クラウドへの暗号化バックアップ

機密性の高いデータセットには、Cryptリモートのレイヤーを追加します。

1. S3リモートをラップするCryptリモートを作成します。
2. 生のS3リモートの代わりに、Cryptリモートを宛先として設定します。
3. ファイルはTrueNASを離れる前にクライアント側で暗号化されます。

### マルチクラウドバックアップ

RcloneViewを使えば、同じTrueNASデータセットを2つのクラウドプロバイダに同時にバックアップできます。

- ジョブ1:`truenas-sftp:/mnt/tank/` → `s3-primary:`(毎日)
- ジョブ2:`truenas-sftp:/mnt/tank/` → `b2-secondary:`(毎週)

## TrueNAS組み込みのCloud Syncに対する利点

| 機能 | TrueNAS Cloud Sync | RcloneView |
|---------|-------------------|-----------|
| プロバイダ対応 | 約20プロバイダ | 70以上のプロバイダ |
| Crypt/暗号化レイヤー | ✗ | ✓ |
| Bisync(双方向) | ✗ | ✓ |
| フィルタルール | 限定的 | rcloneのフィルタを完全サポート |
| フォルダ比較 | ✗ | ✓ |
| クロスクラウド(クラウドA → クラウドB) | ✗ | ✓ |
| ジョブスケジューリング | ✓ | ✓ |
| リアルタイム監視 | 限定的 | ✓ |

## モニタリングと検証

RcloneViewの**フォルダ比較**を使って、TrueNASのバックアップとクラウドストレージが一致しているかを定期的に検証しましょう。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup in cloud with folder comparison" class="img-large img-center" />

TrueNASのソースをクラウドの宛先と比較すると、欠落または変更されたファイルがすぐに表示されます。データ整合性チェックとして、月次の検証実行をスケジュールしましょう。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **TrueNASでSSHを有効にし**、RcloneViewでSFTPリモートとして追加します。
3. TrueNASのデータセットからクラウドプロバイダへの**バックアップジョブを作成**します。
4. **スケジュールと暗号化**を設定します — 毎晩のバックアップジョブを設定し、機密性の高いデータセットにはCryptリモートを追加します。

TrueNASは優れたNASソフトウェアです。RcloneViewと組み合わせれば、TrueNASの組み込みツールをはるかに超える、完全で柔軟なクラウドバックアップ戦略を手に入れられます。

---

**関連ガイド:**

- [Synology NASでRcloneViewを実行する](https://rcloneview.com/support/blog/rcloneview-synology-rclone-gui)
- [DockerでRcloneViewを実行する](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [NASを複数のクラウドにバックアップする](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />

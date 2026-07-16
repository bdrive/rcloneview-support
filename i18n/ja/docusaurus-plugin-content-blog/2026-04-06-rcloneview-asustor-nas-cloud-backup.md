---
slug: rcloneview-asustor-nas-cloud-backup
title: "ASUSTOR NASでRcloneViewを実行して自動クラウドバックアップ"
authors:
  - tayson
description: "ASUSTOR NASデバイスはDockerを介してRcloneViewを実行できるほど強力です。自動クラウドバックアップを設定し、リモートストレージをマウントし、NASから直接転送を監視しましょう。"
keywords:
  - rcloneview asustor nas
  - asustor nas cloud backup
  - asustor docker rcloneview
  - asustor cloud sync alternative
  - asustor nas rclone gui
  - asustor automated backup cloud
  - asustor mount cloud storage
  - asustor nas s3 backup
  - asustor cloud file manager
  - rcloneview nas setup
tags:
  - nas
  - platform
  - cloud-backup
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# ASUSTOR NASでRcloneViewを実行して自動クラウドバックアップ

> ASUSTOR NASは24時間365日稼働しています。これを常時稼働のクラウドバックアップエンジンにしましょう。RcloneViewは、スケジュールされたバックアップ、クラウドマウント、リアルタイムの転送監視を備えたマルチクラウドファイル管理ハブにNASを変えます。

ASUSTOR NASデバイスはIntelまたはARMプロセッサを搭載し、ADM(ASUSTOR Data Master)OSで動作し、PortainerアプリまたはコマンドラインからDockerをサポートしています。これにより、RcloneViewをコンテナ化されたサービスとして実行できるようになります。デスクトップやノートPCを占有することなく、常にオンで、常にバックアップを行います。NAS共有をBackblaze B2にバックアップしたい場合でも、Google Driveとフォルダを同期したい場合でも、S3をローカルボリュームとしてマウントしたい場合でも、ASUSTOR NAS上のRcloneViewはWebベースのGUIからすべてを処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## NASでクラウドバックアップを実行する理由

クラウドバックアップをワークステーションではなくNAS上で直接実行することには、いくつかの利点があります。

- **常時稼働** — NASはすでに24時間365日稼働しています。バックアップはPCを起動しておく必要なく、スケジュール通りに実行されます。
- **NASデータへのLAN速度アクセス** — アップロード前にネットワーク経由でファイルをPCに引き込む必要がありません。NASは自身のディスクから直接読み取ります。
- **一元管理** — すべてのバックアップジョブ、スケジュール、ログはNAS上にあります。ブラウザを持つどのデバイスからでも管理できます。
- **ワークステーションのリソースを消費しない** — 大容量転送のCPUと帯域幅のコストをNASにオフロードします。

## ASUSTOR NASの互換性

DockerによるRcloneViewは、次のASUSTORモデルで動作します。

- **Intelベース**(x86_64)プロセッサ: AS31、AS32、AS33、AS52、AS54、AS61、AS62、AS63、AS64、AS65、AS67、Lockerstor、Lockerstor Pro、Flashstorシリーズ。
- **ARMベース**プロセッサ: DrivestorおよびDrivestor Proシリーズ(AS11、AS33のARM版) — お使いのモデルでDockerがサポートされているか確認してください。
- App Centralからインストールした**ADM 4.0以降**とDocker(Portainer)。
- **最低2GBのRAM**を推奨(大容量の同時転送には4GB以上)。

## Docker経由でRcloneViewをインストールする

### ステップ1 — App CentralからDockerをインストール

1. ADM Webインターフェースで**App Central**を開きます。
2. **Portainer**(利用可能であればDocker-CE)を検索します。
3. Portainerアプリをインストールして起動します。

### ステップ2 — RcloneViewコンテナをデプロイ

`http://your-nas-ip:9443` でPortainerを開いて新しいコンテナを作成するか、SSHを使ってコマンドラインからデプロイします。

```bash
docker run -d \
  --name rcloneview \
  -p 5572:5572 \
  -v /volume1/Docker/rcloneview/config:/config/rclone \
  -v /volume1:/data/volume1 \
  --restart unless-stopped \
  rcloneview/rcloneview:latest
```

主なボリュームマッピング:

- `/volume1/Docker/rcloneview/config` — rcloneのリモート設定を永続的に保存します。
- `/volume1` — バックアップ操作のためにメインのNASボリュームをRcloneViewに公開します。

### ステップ3 — Webインターフェースにアクセス

ブラウザを開いて `http://your-nas-ip:5572` にアクセスします。RcloneViewのダッシュボードが表示されるはずです。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote setup on ASUSTOR NAS" class="img-large img-center" />

## クラウドリモートの接続

RcloneViewインターフェースから、クラウドストレージプロバイダーを追加します。

### NASバックアップの一般的な構成

- **Backblaze B2** — 月額$6/TBで大容量NASバックアップに費用対効果が高い。
- **Wasabi** — 送信データ転送料なしの定額S3互換ストレージ。
- **Google Drive** — 重要なフォルダをNASとDrive間で同期。
- **Amazon S3** — 柔軟なストレージクラスを備えたエンタープライズグレードの耐久性。
- **SFTP** — リモートサーバーまたは2台目のNASにバックアップ。

各リモートは一度設定すれば永続的に保存されます。セットアップウィザードが各プロバイダーの認証(S3互換サービスのAPIキー、Google DriveやOneDriveのOAuthなど)を案内します。

## 自動バックアップのスケジュール設定

ASUSTOR NASでRcloneViewを実行する核心的な価値は、自動化された無人バックアップです。設定方法は次の通りです。

### バックアップジョブの作成

1. RcloneViewの2ペインエクスプローラーを開きます。
2. 左ペインをNASのローカルパス(例: `/data/volume1/Photos`)に設定します。
3. 右ペインをクラウドリモート(例: `backblaze-b2:nas-backup/photos/`)に設定します。
4. NASフォルダをクラウドにミラーリングするには**同期**、削除を反映せずに新しいファイルのみ追加するには**コピー**を選択します。
5. 操作を名前付きジョブとして保存します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a backup job on ASUSTOR NAS with RcloneView" class="img-large img-center" />

### ジョブのスケジュール設定

ジョブを自動実行するように設定します。

- **毎日午前2時** — NASのパフォーマンスへの影響を避けるため、利用の少ない時間帯にバックアップを実行します。
- **週次フル同期** — 帯域幅の需要が最も低い週末に包括的な同期を行います。
- **オンデマンド** — 大きな変更を加える前に手動でバックアップをトリガーします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cloud backups on ASUSTOR NAS" class="img-large img-center" />

## クラウドストレージのマウント

RcloneViewは、クラウドストレージをNAS上のローカルパスとしてマウントし、リモートファイルをローカルディスク上にあるかのようにアクセス可能にできます。これは次のような場合に便利です。

- クラウドストレージによる**NAS容量の拡張**。
- 手動でダウンロードすることなく**アーカイブされたファイルへのアクセス**。
- NASのメディアアプリを通じてクラウドストレージから**メディアをストリーミング**。

DockerでFUSEマウントを有効にするには、コンテナに次のフラグを追加します。

```bash
--device /dev/fuse --cap-add SYS_ADMIN
```

その後、RcloneViewのMount Managerを使用して、任意のリモートをローカルパスにマウントします。

## 転送の監視

バックアップジョブが実行されている間、RcloneViewの転送監視はリアルタイムの進捗状況を表示します。

- 現在転送中のファイル
- 転送速度と完了予定時刻(ETA)
- エラーと再試行
- 完了したファイル数

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor NAS cloud backup progress in RcloneView" class="img-large img-center" />

ジョブ履歴を確認して、スケジュールされたバックアップが正常に完了したことを確認してください。ジョブが失敗した場合(ネットワーク障害、認証情報の期限切れなど)、RcloneViewはトラブルシューティング用にエラーを記録します。

## ASUSTOR NASバックアップのベストプラクティス

- **最も重要なデータから始める** — 写真、ドキュメント、データベースを最初に。メディアライブラリはその後で構いません。
- 業務時間中はインターネット接続の飽和を避けるために**帯域幅制限を使用**する: ジョブオプションで `--bwlimit 10M` を設定します。
- ランサムウェアや誤った上書きから保護するために、クラウドストレージで**バージョニングを有効化**します。
- **rclone設定をバックアップ** — `/config/rclone` ディレクトリにはクラウドの認証情報が含まれています。これを別の場所にコピーしてください。
- **ディスクの健全性を監視** — バックアップが実行される前にNASディスクが故障してしまっては、クラウドバックアップも役に立ちません。ADMのStorage Managerアラートを使用してください。

## はじめに

1. ASUSTOR App Centralから**Portainerをインストール**します。
2. 上記のボリュームマッピングで**RcloneView Dockerコンテナをデプロイ**します。
3. Backblaze B2、S3、Google Drive、またはサポートされている任意のプロバイダーなど**クラウドリモートを追加**します。
4. 最も重要なNAS共有のために**バックアップジョブを作成しスケジュール設定**します。
5. **毎週ジョブ履歴を確認**して、すべてが順調に実行されていることを確認します。

ASUSTOR NASはすでにRAIDでデータをローカルに保護しています。RcloneViewで自動クラウドバックアップを追加することで、真のオフサイト保護が得られ、しかも自動的に実行されます。

---

**関連ガイド:**

- [クラウドとNASの架け橋: Synologyへのバックアップ](https://rcloneview.com/support/blog/cloud-to-synology-nas-with-rcloneview)
- [TrueNASでRcloneViewを実行する](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup)
- [毎日のクラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />

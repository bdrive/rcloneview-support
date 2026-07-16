---
slug: rcloneview-terramaster-nas-cloud-backup
title: "RcloneViewとTerraMaster NASでクラウドバックアップと同期を行う"
authors:
  - tayson
description: "RcloneViewとTerraMaster NASを使って、NASデータをクラウドストレージに同期・バックアップする方法を解説します。SFTPまたはSMBで接続し、S3、B2、Google Driveへのバックアップを自動化できます。"
keywords:
  - rcloneview
  - terramaster nas cloud backup
  - terramaster cloud sync
  - terramaster backup to cloud
  - terramaster rclone
  - nas cloud backup gui
  - terramaster google drive
  - terramaster s3 backup
  - terramaster file sync
  - nas to cloud transfer
tags:
  - nas
  - platform
  - cloud-backup
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewとTerraMaster NASでクラウドバックアップと同期を行う

> TerraMaster NASデバイスは手頃な価格のネットワークストレージを提供しますが、内蔵のクラウドバックアップ機能には限りがあります。**RcloneView**はビジュアルGUIを通じてマルチクラウドのバックアップ、同期、ファイル管理をTerraMasterに追加します。

TerraMasterはTOS（TerraMaster Operating System）を搭載した人気のNASデバイスを製造しています。TOSにはいくつかのプロバイダー向けの基本的なクラウド同期機能が含まれていますが、企業やパワーユーザーが必要とする幅広いクラウドストレージサービスには対応していません。RcloneViewはSFTPまたはSMB経由でTerraMaster NASに接続し、70以上のクラウドプロバイダーと橋渡しします。これにより、自動バックアップ、クラウドからNASへの同期、クロスクラウドのファイル管理が可能になります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## TerraMasterにクラウドバックアップを追加する理由

NASは高速なローカルストレージとRAID冗長性を提供しますが、以下からは保護されません。

- **サイトレベルの災害**: 火災、水害、盗難、電力サージによってNASとすべてのドライブが同時に破壊される可能性があります。RAIDはドライブ障害からは保護しますが、サイト全体の損失からは保護しません。
- **ランサムウェア**: ランサムウェアがネットワークに到達すると、NASの共有フォルダを暗号化する可能性があります。クラウドバックアップ（特にイミュータブルストレージへのバックアップ）は復旧ポイントを提供します。
- **RAIDを超えるハードウェア障害**: コントローラーボードの故障、電源装置の破損、ファームウェアの破損は、RAIDレベルに関係なくNAS全体をアクセス不能にする可能性があります。

クラウドバックアップは、ローカルNASでは実現できない地理的な冗長性を提供します。RcloneViewはこのバックアップを自動化しながら、主要な作業フローを高速なローカルNAS上に維持します。

## RcloneViewをTerraMasterに接続する

RcloneViewはデスクトップまたは別のマシン（TerraMaster自体ではなく）上で動作し、ネットワーク経由でNASに接続します。2つの接続方法が利用可能です。

### SFTP接続

TerraMasterでSSHを有効にします（TOS Control Panel > Services > SSH）。次に、RcloneViewのRemote ManagerでSFTPリモートを追加します。

- ホスト: TerraMasterのIPアドレス（例: `192.168.1.100`）
- ポート: 22（デフォルトのSSHポート）
- ユーザー名: TOS管理者ユーザー名
- パスワードまたはSSHキー: TOSの認証情報

SFTPは暗号化されたファイル転送を提供し、RcloneViewからNASデータにアクセスする際の推奨方法です。

### SMB接続

TerraMasterの共有フォルダがSMB（Windowsファイル共有）経由でアクセス可能な場合は、RcloneViewでSMBリモートを追加します。これは標準的なWindowsネットワークパス形式を使用するため、すでにSMB共有を設定している場合に便利です。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting RcloneView to TerraMaster NAS via SFTP" class="img-large img-center" />

## NASデータをクラウドストレージにバックアップする

接続が完了したら、TerraMasterからクラウド先へのバックアップジョブを設定します。

1. 左ペインでTerraMaster SFTPリモートを開きます。
2. 右ペインでクラウド先（AWS S3、Backblaze B2、Google Drive、Wasabi）を開きます。
3. NAS上のバックアップしたいフォルダに移動します。
4. NASデータをクラウドにコピーする同期ジョブを作成します。

RcloneViewの差分検出機能により、前回のバックアップ以降に変更されたファイルのみが転送されます。テラバイト級のデータを持つNASでは、初回バックアップに数日かかることがありますが、その後の日次バックアップではその日の変更分のみが転送され、通常は数分で完了します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backing up TerraMaster NAS to cloud storage in RcloneView" class="img-large img-center" />

## クラウドバックアップ先の選び方

NASバックアップには、エグレス料金が発生しない費用対効果の高いストレージが理想的です。

- **Backblaze B2**: $6/TB/月、Cloudflareとのパートナーシップにより無料エグレス。シンプルな料金体系で、単純なバックアップに適しています。
- **Wasabi**: $6.99/TB/月、エグレス料金なし。最低90日間のストレージ期間が適用されます。
- **AWS S3 Glacier Deep Archive**: アーカイブデータで$0.99/TB/月。取り出しには数時間かかり、GB単位の取り出し料金が発生しますが、ストレージコストは最も低く抑えられます。
- **Google Drive**: チームがすでにGoogle Workspaceを使用している場合に便利です。ストレージコストは高くなりますが、統合はシームレスです。

ほとんどのTerraMasterユーザーにとって、Backblaze B2はコスト、シンプルさ、取り出し速度の最良のバランスを提供します。

## 自動バックアップのスケジュール設定

RcloneViewのスケジューラーを設定して、NASバックアップを自動的に実行します。

- **日次増分バックアップ**: 毎晩、変更されたファイルをNASからクラウドに同期します。初回シード後の帯域幅使用量は最小限に抑えられます。
- **週次フル検証**: 週に一度、比較操作を実行して、すべてのNASファイルがクラウドバックアップと一致していることを確認します。これにより、転送の中断やサイレントなデータ破損による不整合を検出できます。

業務時間中にバックアップトラフィックがネットワークを圧迫しないよう、帯域幅制限を設定してください。バックアップは夜間やオフピーク時間帯にスケジュールしましょう。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling TerraMaster NAS backup in RcloneView" class="img-large img-center" />

## クラウドデータをTerraMasterに同期する

逆方向のワークフローも便利です。クラウドデータをNASに取り込み、ローカルアクセスを可能にします。チームがGoogle Driveで共同作業をしているが、プロジェクトファイルへの高速なローカルアクセスが必要な場合、該当するDriveフォルダをTerraMasterに同期します。ファイルはNAS速度でローカル編集でき、RcloneViewはスケジュールに従って変更をクラウドに同期し直します。

このハイブリッドアプローチにより、クラウドストレージの共同作業の利点とローカルNASアクセスのパフォーマンスの両方を得られます。

## NASバックアップの暗号化

機密データについては、RcloneViewのcrypt remoteを使用して、ファイルがネットワークを離れる前に暗号化します。暗号化はRcloneViewが動作するデスクトップマシン上でクラウドへのアップロード前に行われます。クラウドプロバイダーが侵害されたとしても、NASのバックアップデータは読み取れない状態に保たれます。

## モニタリングと検証

RcloneViewのジョブ履歴は、転送されたファイル数、スキップされたファイル数、合計バイト数、経過時間、エラーなど、すべてのバックアップ実行の統計情報を記録します。バックアップが正常に完了していることを確認するため、定期的に履歴を確認してください。比較機能を定期的に使用して、クラウドバックアップがNASの内容と一致していることを確認します。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitoring TerraMaster NAS backup history in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. TerraMasterでSSHを有効にし、RcloneViewにSFTPリモートとして追加します。
3. クラウド先（B2、S3、Google Drive、Wasabi）を追加します。
4. NASからクラウドへの日次バックアップジョブを作成してスケジュールします。
5. 比較機能を使って定期的にバックアップを検証します。

TerraMaster NASはローカルストレージと共有を担当します。RcloneViewは、サイトレベルの災害、ランサムウェア、RAIDを超えるハードウェア障害からデータを保護するクラウドバックアップ層を追加します。

---

**関連ガイド:**

- [リモートストレージの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジュール設定](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [ジョブ履歴](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />

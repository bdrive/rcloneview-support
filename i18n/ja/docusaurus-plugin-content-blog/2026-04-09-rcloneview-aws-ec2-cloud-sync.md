---
slug: rcloneview-aws-ec2-cloud-sync
title: "サーバーサイドのクラウド同期に AWS EC2 で RcloneView を実行する"
authors:
  - tayson
description: "AWS EC2 インスタンスで RcloneView を実行し、サーバーサイドのクラウド同期、移行、バックアップを行いましょう。GUI にリモートアクセスし、EC2 の帯域幅を活用して高速転送を実現します。"
keywords:
  - rcloneview
  - aws ec2 cloud sync
  - rcloneview ec2
  - server cloud sync
  - ec2 rclone gui
  - cloud migration server
  - headless cloud sync
  - ec2 data transfer
  - aws ec2 file manager
  - server-side cloud transfer
tags:
  - platform
  - amazon-s3
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# サーバーサイドのクラウド同期に AWS EC2 で RcloneView を実行する

> AWS EC2 インスタンスで RcloneView を実行すると、クラウド転送にサーバー級の帯域幅を利用でき、スケジュールジョブを 24 時間 365 日稼働させられ、ローカルマシンを経由してデータをやり取りする必要がなくなります。

クラウドプロバイダー間で数テラバイトのデータを移行する場合、ローカルのインターネット接続がボトルネックになります。ギガビットネットワークを備えた AWS EC2 インスタンスなら、自宅やオフィスの接続では到底及ばない速度でクラウドサービス間のデータ転送が可能です。EC2 上で RcloneView を実行すれば、ローカルマシンを稼働させ続けなくても転送が 24 時間 365 日継続し、S3 と他の AWS サービス間を移動するデータは Amazon のネットワーク内にとどまるため、多くの場合転送(egress)コストもかかりません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## EC2 で RcloneView を実行する理由

- **速度**: AWS データセンター内の EC2 インスタンスはマルチギガビットのネットワーク接続を備えています。S3 と外部プロバイダー間の転送では、ローカル接続の代わりにこの帯域幅を活用できます。
- **無料の S3 転送**: 同一リージョン内の EC2 と S3 間のデータ転送は無料です。大規模な S3 からクラウドへの移行では、EC2 上での実行によって最大のコスト要因であるローカル egress を排除できます。
- **24 時間 365 日の稼働**: デスクトップマシンを起動し続けなくても、スケジュールジョブを継続的に実行できます。EC2 インスタンスが夜間バックアップ、週次移行、継続的な同期ジョブを処理します。
- **データへの近接性**: ソースデータが AWS 内(S3、EBS、EFS)にある場合、EC2 上で RcloneView を実行することで、データの近くに配置され、レイテンシを最小限に抑えられます。
- **チームアクセス**: 複数のチームメンバーが同じ RcloneView インスタンスにリモートアクセスし、設定やジョブ履歴を共有できます。

## EC2 インスタンスのセットアップ

### インスタンスの選択

多くの RcloneView のワークロードでは、小〜中規模のインスタンスで十分です。

- **t3.medium**(2 vCPU、4 GB RAM): 軽い同期ジョブや小規模な移行に適しています。
- **m5.large**(2 vCPU、8 GB RAM): 並行転送や大容量ファイル操作に適しています。
- **c5.xlarge**(4 vCPU、8 GB RAM): 多数の並列転送を伴う重い移行作業に向いています。

クロスリージョン転送のコストを避けるため、S3 バケットと同じリージョンのインスタンスを選択してください。

### オペレーティングシステム

インスタンスは Ubuntu Server LTS または Amazon Linux 2 で起動してください。どちらも RcloneView を問題なくサポートします。GUI 用に軽量なデスクトップ環境をインストールします。

```
# Ubuntu
sudo apt update && sudo apt install -y xfce4 xrdp

# Amazon Linux 2
sudo yum install -y xrdp xfce
```

RDP サービスを有効化・起動して、GUI にリモート接続できるようにしてください。

### セキュリティグループの設定

EC2 セキュリティグループで以下のポートを開放してください。

- **ポート 3389**(RDP): GUI へのリモートデスクトップアクセス用。自分の IP アドレスに制限してください。
- **ポート 22**(SSH): ターミナルアクセス用。自分の IP アドレスに制限してください。
- **ポート 53682**(任意): EC2 インスタンスから OAuth フローを実行する必要がある場合、これは rclone のデフォルトの OAuth コールバックポートです。代わりにヘッドレス OAuth 設定を使用することもできます。

## EC2 への RcloneView のインストール

インスタンスに SSH 接続し、RcloneView をダウンロードします。

1. [rcloneview.com](https://rcloneview.com/src/download.html) から Linux 用 AppImage または .deb パッケージをダウンロードします。
2. AppImage を実行可能にします: `chmod +x RcloneView-*.AppImage`
3. RDP 経由で接続し、デスクトップ環境から RcloneView を起動します。

## クラウドプロバイダー向けのヘッドレス OAuth

EC2 インスタンスには通常、OAuth フロー用のローカルブラウザがありません。OAuth を必要とするプロバイダー(Google Drive、OneDrive、Dropbox)には、ヘッドレス認証を使用します。

1. ローカルマシン上で `rclone authorize "drive"`(または該当プロバイダー)を実行し、OAuth フローを完了します。
2. 生成されたトークンをコピーします。
3. EC2 インスタンス上で、RcloneView のリモート設定にそのトークンを貼り付けます。

または、外部の rclone インスタンスと連携するよう RcloneView を設定し、RcloneView の接続マネージャーを通じて OAuth トークンをセットアップすることもできます。

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="Configuring external rclone on EC2 for RcloneView" class="img-large img-center" />

## S3 アクセスの設定

EC2 から S3 にアクセスする場合は、静的なアクセスキーの代わりに IAM インスタンスロールを使用してください。S3 権限を持つ IAM ロールを EC2 インスタンスにアタッチすると、rclone はインスタンスメタデータサービスを使用して一時的な認証情報を自動的に取得します。これはインスタンス上にアクセスキーを保存するよりも安全です。

RcloneView の S3 リモート設定では、アクセスキーとシークレットキーのフィールドを空のままにし、environment auth をインスタンスプロファイルを使用するよう設定してください。

## 大規模移行の実行

EC2 の帯域幅により、自宅の接続では数日かかる大規模な移行が数時間で完了します。

- **1 TB の Google Drive から S3 への移行**: 持続速度でおよそ 2〜4 時間。
- **10 TB の S3 から Backblaze B2 への移行**: B2 の API スロットリングにより、およそ 1〜2 日。
- **クロスリージョンの S3 レプリケーション**: AWS 内でほぼライン速度。

RcloneView のマルチスレッド転送は、EC2 のネットワーク容量を最大限に活用します。より大きなインスタンスで最大のスループットを得るには、transfers を 16〜32、checkers を 16 に設定してください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Large-scale migration running on EC2 in RcloneView" class="img-large img-center" />

## サーバーサイドジョブのスケジューリング

RcloneView 内蔵のスケジューラーが定期ジョブを処理します。Google Drive から S3 への夜間バックアップ、S3 と Backblaze B2 間の週次同期、DR リージョンへの日次レプリケーションを設定できます。EC2 インスタンスは、RDP で接続しているかどうかに関わらずこれらのジョブを実行します。

スケジュールジョブのために EC2 インスタンスを常時稼働させておくか、AWS Instance Scheduler や Lambda 関数による起動/停止スケジュールを使用して、バックアップウィンドウの間だけインスタンスを実行することもできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling server-side sync jobs on EC2 in RcloneView" class="img-large img-center" />

## コスト管理

EC2 のコストはインスタンスタイプと稼働時間によって異なります。

- **t3.medium オンデマンド**: 約 $0.042/時間(24 時間 365 日稼働で月額約 $30)
- **スポットインスタンス**: 一度限りの移行など中断可能なワークロードでは最大 90% 安価。
- **リザーブドインスタンス**: 長期稼働のサーバーサイド同期構成では時間単価が低い。

一度限りの移行には、スポットインスタンスを使用してください。起動し、移行を実行し、検証してから終了します。継続的なスケジュールバックアップには、リザーブドの t3.small または t3.medium がコスト効率に優れています。

覚えておいてください。EC2 から同一リージョン内への S3 データ転送は無料です。インターネットへの外部転送(例: Backblaze B2 や Google Drive への転送)には、通常の AWS egress 料金が発生します。

## はじめに

1. Ubuntu または Amazon Linux とデスクトップ環境を備えた EC2 インスタンスを起動します。
2. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** し、インスタンスにインストールします。
3. クラウドプロバイダー向けにはヘッドレス OAuth、S3 向けには IAM ロールを使用してリモートを設定します。
4. EC2 の帯域幅を活かして移行を実行し、バックアップジョブをスケジュールします。
5. 不要になったらインスタンスを終了または停止し、コストを管理します。

EC2 上で RcloneView を実行することで、AWS データセンターネットワークの速度、転送を管理する GUI の利便性、そしてスケジュールジョブの 24 時間 365 日稼働が手に入ります。大規模なクラウド移行や継続的なサーバーサイド同期に最適な構成です。

---

**関連ガイド:**

- [AWS S3 および S3 互換ストレージの追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [OneDrive のヘッドレス追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)
- [ヘッドレス Google Drive](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-google-drive-connection)
- [外部 rclone の例](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />

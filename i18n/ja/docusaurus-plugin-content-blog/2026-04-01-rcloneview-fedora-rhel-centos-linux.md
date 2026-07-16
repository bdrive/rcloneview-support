---
slug: rcloneview-fedora-rhel-centos-linux
title: "Fedora、RHEL、CentOS Linux で RcloneView をインストールして使用する"
authors:
  - tayson
description: "RPMベースのLinuxディストリビューション — Fedora、RHEL、CentOS、Rocky Linux — にRcloneViewをインストールします。エンタープライズおよびワークステーションLinuxでクラウド同期とバックアップをセットアップします。"
keywords:
  - rcloneview fedora
  - rcloneview rhel
  - rcloneview centos
  - rclone gui rpm linux
  - install rcloneview fedora linux
  - rclone gui red hat linux
  - rcloneview rocky linux
  - cloud sync fedora linux
  - rclone centos gui
  - rpm based linux cloud management
tags:
  - RcloneView
  - linux
  - platform
  - installation
  - guide
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Fedora、RHEL、CentOS Linux で RcloneView をインストールして使用する

> Fedora、Red Hat Enterprise Linux(RHEL)、CentOS Stream、Rocky Linux は、ワークステーションやエンタープライズサーバーで広く使われているRPMベースのディストリビューションです。RcloneViewはこれらすべてで動作し、Red Hatエコシステムにビジュアルなクラウドストレージ管理をもたらします。

チュートリアルではUbuntuやDebian系ディストリビューションが注目されがちですが、RPMベースのファミリー — Fedora(デスクトップ・ワークステーション)、RHEL(エンタープライズ)、CentOS Stream(アップストリームテスト)、Rocky Linux/AlmaLinux(RHELの代替)— はLinux導入の大きな割合を占めています。RcloneViewのLinuxビルドはこのファミリー全体で動作し、セットアップも簡単です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## サポートされているディストリビューション

| ディストリビューション | バージョン | アーキテクチャ |
|-------------|---------|-------------|
| Fedora | 38+ | x86_64, aarch64 |
| RHEL | 8, 9 | x86_64, aarch64 |
| CentOS Stream | 8, 9 | x86_64 |
| Rocky Linux | 8, 9 | x86_64, aarch64 |
| AlmaLinux | 8, 9 | x86_64 |

## ステップ1 — RcloneViewをインストールする

[rcloneview.com](https://rcloneview.com/src/download.html)から適切なLinuxパッケージをダウンロードしてください。

RPMベースのディストリビューションの場合、RcloneViewは**AppImage**または直接実行可能なバイナリとして配布されます — システムへのインストールを必要としないセルフコンテインドな実行ファイルです。

**ダウンロードして実行(AppImage):**

```bash
# RcloneView AppImageをダウンロード
wget https://rcloneview.com/src/download.html -O RcloneView.AppImage

# 実行可能にする
chmod +x RcloneView.AppImage

# 実行
./RcloneView.AppImage
```

または、デスクトップアプリケーションエントリを作成する場合:

```bash
# 標準的な場所に移動
mkdir -p ~/.local/bin
mv RcloneView.AppImage ~/.local/bin/rcloneview

# デスクトップエントリを作成する(任意)
cat > ~/.local/share/applications/rcloneview.desktop << EOF
[Desktop Entry]
Name=RcloneView
Exec=/home/$USER/.local/bin/rcloneview
Icon=rcloneview
Type=Application
Categories=Utility;Network;
EOF
```

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView running on Linux" class="img-large img-center" />

## ステップ2 — FUSEをインストールする(マウント機能用)

クラウドドライブのマウント機能にはFUSEが必要です。RPMベースのディストリビューションの場合:

**Fedora:**
```bash
sudo dnf install fuse fuse3
sudo modprobe fuse
```

**RHEL / CentOS Stream / Rocky Linux:**
```bash
sudo dnf install fuse fuse3
# ユーザーをfuseグループに追加
sudo usermod -aG fuse $USER
```

RHEL系システムでは、FUSEモジュールの有効化も必要になる場合があります:
```bash
echo "fuse" | sudo tee -a /etc/modules-load.d/fuse.conf
```

FUSEが利用可能か確認する:
```bash
fusermount3 --version
```

## ステップ3 — rcloneをインストールする(バンドルされていない場合)

RcloneViewはrcloneを別途インストールする必要があります。RPMベースのディストリビューションの場合:

**公式rcloneインストーラーを使用する(推奨):**
```bash
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

**Fedoraでdnfを使用する:**
```bash
sudo dnf install rclone
```

**インストールの確認:**
```bash
rclone version
```

## ステップ4 — RcloneViewを起動してリモートを追加する

RcloneViewを起動し、クラウドアカウントを追加します:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Add cloud remotes in RcloneView on Fedora" class="img-large img-center" />

OAuthが必要なリモート(Google Drive、OneDrive、Dropbox)の場合、RcloneViewはシステムのブラウザを開きます。デスクトップ環境のないRHELサーバーインストールでは、`--auth-no-browser` rcloneフラグを使用するか、ブラウザのあるマシンで認証してトークンをコピーしてください。

## ヘッドレスサーバーへのデプロイ(RHEL/CentOS)

デスクトップ環境のないRHELサーバーでは、RcloneViewをバックエンドモードで実行し、リモートブラウザからアクセスします:

1. RcloneViewのAPIバックエンドを起動する:
   ```bash
   ./rcloneview --no-browser --api-port 5572 &
   ```
2. SSHポートフォワーディングでリモートマシンからアクセスする:
   ```bash
   ssh -L 5572:localhost:5572 user@your-rhel-server
   ```
3. ローカルブラウザで`http://localhost:5572`を開く。

## Linuxでのジョブスケジューリング

RHELまたはFedoraでの自動バックアップには、RcloneViewのジョブスケジューリングと併せてsystemdタイマーやcronを使用します:

**cronを使用する:**
```bash
# crontabを編集
crontab -e

# 毎晩午前2時にバックアップを追加
0 2 * * * /usr/bin/rclone sync /data/important s3-remote:backup-bucket --log-file /var/log/rclone-backup.log
```

**systemdタイマーを使用する**(RHEL 8/9で推奨):

`/etc/systemd/system/rclone-backup.service`を作成する:
```ini
[Unit]
Description=Rclone Cloud Backup

[Service]
Type=oneshot
User=backup-user
ExecStart=/usr/bin/rclone sync /data/important s3-remote:backup-bucket
```

`/etc/systemd/system/rclone-backup.timer`を作成する:
```ini
[Unit]
Description=Daily rclone backup

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

有効化して起動する:
```bash
sudo systemctl enable --now rclone-backup.timer
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cloud backup jobs on Linux" class="img-large img-center" />

## SELinuxに関する考慮事項

RHEL系ディストリビューションはデフォルトでSELinuxをenforcingモードで実行します。RcloneViewが特定のパスへのアクセスやドライブのマウントに問題がある場合:

```bash
# SELinuxの拒否をチェック
sudo ausearch -m avc -ts recent | grep rclone

# rcloneがユーザーのホームディレクトリを読み取れるようにする(必要な場合)
sudo setsebool -P user_home_t:process allow_execmem 1
```

ほとんどの操作はSELinuxの変更なしで動作します。マウント操作にはマウントポイントに適切なSELinuxコンテキストが必要な場合があります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**する。
2. マウントサポートのために**FUSEをインストール**する: `sudo dnf install fuse fuse3`。
3. 公式インストーラー経由で**rcloneをインストール**する。
4. **RcloneViewを実行**し、クラウドリモートを追加して、クラウドストレージの管理を開始する。

FedoraワークステーションとRHELサーバーは、RcloneViewのLinuxサポートにおいてファーストクラスの存在です。70以上のすべてのクラウドプロバイダー、マウント、暗号化、スケジューリング、フォルダ比較機能は、他のプラットフォームと同様に動作します。

---

**関連ガイド:**

- [Ubuntu と Debian Linux に RcloneView をインストールする](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [ARM Linux で RcloneView を実行する](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [Docker で RcloneView を実行する](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)

<CloudSupportGrid />

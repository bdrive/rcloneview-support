---
slug: backup-migrate-rclone-config-rcloneview
title: "RcloneViewでrclone設定をバックアップ・移行・管理する方法"
authors:
  - tayson
description: "RcloneViewを使って、暗号化されたリモートを含むrclone設定ファイルをバックアップ、復元、移行する方法を解説します。クラウド接続をポータブルかつ安全に保ちましょう。"
keywords:
  - backup rclone config
  - migrate rclone configuration
  - rclone config file location
  - rcloneview config backup
  - rclone config portable
  - export rclone remotes
  - rclone config file backup
  - move rclone to new computer
  - rclone config migration
  - rcloneview configuration management
tags:
  - RcloneView
  - cloud-storage
  - feature
  - guide
  - tips
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでrclone設定をバックアップ・移行・管理する方法

> rclone設定ファイルには、接続情報、認証トークン、暗号化キー、カスタム設定など、すべてのクラウドリモートの構成が含まれています。これを失うと、すべてのリモートを最初から再設定する必要があります。ここでは、バックアップ、移行、そしてポータブルに保つ方法を紹介します。

RcloneViewで数十のクラウドリモート — OAuthフロー、APIキー、暗号化パスフレーズ、カスタムエンドポイント — を設定するのに時間をかけた後、ディスク障害、OSの再インストール、マシンの買い替えでその作業を失うのは最も避けたいことです。rclone設定ファイルは、そのすべての設定内容をエンコードした単一のテキストファイルです。どこに保存されているか、どう保護するかを理解しておくことは、本格的にRcloneViewを使うすべてのユーザーにとって不可欠なメンテナンスです。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## rclone設定ファイルはどこにあるか

設定ファイルの場所はOSによって異なります。

| OS | デフォルトの場所 |
|----|----------------|
| **Windows** | `%APPDATA%\rclone\rclone.conf` |
| **macOS** | `~/.config/rclone/rclone.conf` |
| **Linux** | `~/.config/rclone/rclone.conf` |

RcloneViewの**ターミナル**で場所を確認できます。

```bash
rclone config file
```

これにより、システムで使用されている正確なパスが表示されます。

## 設定ファイルの中身

設定ファイルはプレーンテキストのINI形式のファイルです。各セクションが1つのリモートを表します。

```ini
[my-google-drive]
type = drive
client_id =
client_secret =
token = {"access_token":"ya29...","expiry":"2026-05-01T..."}

[s3-backup]
type = s3
provider = AWS
access_key_id = AKIA...
secret_access_key = abc123...
region = us-east-1

[encrypted-drive]
type = crypt
remote = my-google-drive:encrypted/
password = *** ENCRYPTED ***
password2 = *** ENCRYPTED ***
```

**重要:** OAuthトークン（Google Drive、OneDrive、Dropbox用）は設定ファイルに保存されます。これらのトークンは有効期限があり、使用中に自動的に更新されます。最新の有効なトークンを保持するため、定期的に設定をバックアップしてください。

## 設定ファイルのバックアップ

### 手動バックアップ

設定ファイルを安全な場所にコピーします。

**Windows:**
```
copy %APPDATA%\rclone\rclone.conf C:\Backups\rclone-config-backup.conf
```

**macOS/Linux:**
```bash
cp ~/.config/rclone/rclone.conf ~/backups/rclone-config-$(date +%Y%m%d).conf
```

### RcloneViewによる自動バックアップ

RcloneViewでジョブを設定し、設定ファイル自体をクラウドストレージにバックアップします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule config file backup in RcloneView" class="img-large img-center" />

1. 新しい**コピー**ジョブを作成します。
2. ソース: 設定ファイルの場所（`~/.config/rclone/`）
3. 宛先: クラウドフォルダ（`s3-backup:system-configs/rclone/`）
4. スケジュール: 週次、または大きな変更後。

**セキュリティに関する注意:** 設定ファイルには資格情報が含まれています。暗号化されたストレージ、または暗号化されたクラウドフォルダ（例: Cryptリモート）にのみバックアップしてください。

## 設定ファイルの保存時暗号化

rcloneは設定ファイル全体をパスワードで暗号化できます。RcloneViewのターミナルからこれを有効にします。

```bash
rclone config
# Choose: s - Set configuration password
```

パスワードを設定すると、設定ファイルはディスク上で暗号化されます。RcloneViewを起動するたび、またはrcloneコマンドを実行するたびにパスワードが必要になります。これにより、設定ファイルが盗まれた場合でも資格情報が保護されます。

<img src="/support/images/en/blog/new-remote.png" alt="Set config password in RcloneView terminal" class="img-large img-center" />

## 新しいマシンへの移行

### 方法1 — 直接コピー

最もシンプルな移行方法です。

1. 古いマシンから`rclone.conf`を新しいマシンの同じパスにコピーします。
2. 新しいマシンにRcloneViewをインストールします。
3. RcloneViewを開くと、すべてのリモートがすぐに表示されます。

ほとんどのリモート（S3、WebDAV、FTPなど）は再認証不要です。OAuthリモート（Google Drive、OneDrive、Dropbox）は保存されたトークンを使用し、これは有効期限まで（通常、最終使用から60〜90日）有効です。

### 方法2 — OAuthリモートの再認証

OAuthトークンの有効期限が切れている場合は、該当するリモートを再認証します。

1. RcloneViewで**リモート**を開きます。
2. リモートを選択し、**編集**を選択します。
3. **再認証**をクリックして新しいトークンを生成します。

この手順が必要なのは、OAuthトークンの期限が切れたリモートのみです。

### 方法3 — `--config`フラグを使用する

設定ファイルを標準以外の場所（例: ポータビリティのためDropbox）に保存している場合は、次のようにします。

```bash
rclone --config /path/to/rclone.conf <command>
```

または、`RCLONE_CONFIG`環境変数を設定して、そのマシン上のすべてのrclone操作でこれをデフォルトにします。

## RcloneViewでの設定の表示と編集

RcloneViewのリモート管理インターフェースは、リモートを追加・編集するためのGUIを提供します。ただし、直接アクセスを好むパワーユーザーにとっては、設定ファイルを直接編集するのも常に有効な方法です。設定ファイルを手動で編集した後は、RcloneViewを再起動して変更を反映させてください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Manage remotes in RcloneView" class="img-large img-center" />

## ベストプラクティス

| プラクティス | 理由 |
|----------|-----|
| 設定を週次でバックアップする | OAuthトークンは更新されるため、最新の有効な状態を保持する |
| バックアップ先を暗号化する | 設定には資格情報とトークンが含まれる |
| 機密性の高いインストールでは設定パスワードを使用する | マシンが侵害された場合の追加の保護になる |
| 設定を公開のGitリポジトリにコミットしない | アクセスキーとトークンが露出してしまう |
| 定期的に復元テストを行う | バックアップが実際に使用可能であることを確認する |

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. RcloneViewのターミナルで`rclone config file`を使って**設定ファイルを見つけます**。
3. 設定を暗号化されたクラウドストレージにコピーする**自動バックアップジョブを設定します**。
4. 設定パスワード（設定している場合）を**パスワードマネージャーに保存します** — これを失うと設定へのアクセスができなくなります。

rclone設定は、RcloneViewのセットアップの中で最も重要な単一のファイルです。それに見合った保護を行ってください。

---

**関連ガイド:**

- [Cryptリモートでクラウドバックアップを暗号化する](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [RcloneViewターミナル: GUI内のCLI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [アプリロックでRcloneViewを保護する](https://rcloneview.com/support/blog/secure-rcloneview-app-lock-password)

<CloudSupportGrid />

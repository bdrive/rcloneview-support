---
slug: mount-sftp-smb-local-drive-rcloneview
title: "RcloneViewでSFTPまたはSMBストレージをローカルドライブとしてマウント — セルフホスト型クラウド連携"
authors:
  - tayson
description: RcloneViewのGUIマウント、VFSキャッシュ、統合マルチクラウドダッシュボードにより、任意のSFTPまたはSMBサーバーをWindows、macOS、Linuxで一級のローカルドライブに変えましょう。
keywords:
  - rcloneview
  - rclone mount gui
  - mount smb windows
  - mount sftp mac
  - nas remote access
  - self hosted cloud
  - vfs cache
  - winfsp
  - macfuse
  - mount network drive
tags:
  - RcloneView
  - mount
  - sftp
  - smb
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでSFTPまたはSMBストレージをローカルドライブとしてマウント — セルフホスト型クラウド連携

> NAS、ホームサーバー、オフィスファイルサーバーをGoogle Driveのように扱えます。SFTPまたはSMBを、キャッシュ、バッファリング、GUIを備えた実際のドライブレターや`/Volumes`パスとしてマウントできます。

SFTPとSMBは、Synology/QNAP NAS、ホームサーバー、VPS、企業のファイルサーバーなど、セルフホスト型ストレージの基盤です。しかし、Windows、macOS、Linuxをまたいで確実にマウントしようとすると、OS特有の癖、脆弱な認証、キャッシュ制御の欠如、クラウドとの統合ビューがないなどの問題に直面することがよくあります。

RcloneViewはこの問題を解決します。`rclone mount`をフレンドリーなデスクトップアプリにラップすることで、SFTP/SMB共有はVFSキャッシュ、サムネイルストリーミング、バッファリング調整、自動化を備えた最新のクラウドドライブのように機能します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTPとSMBの違いを理解する

| 特徴       | SFTP                             | SMB                                    |
| ---------- | -------------------------------- | --------------------------------------- |
| プロトコル | SSHベース                        | Windowsネットワーク共有                 |
| 最適な用途 | リモートサーバー、WAN経由の安全な接続 | LANファイル共有、ローカルネットワーク |
| 速度       | 中程度（暗号化）                 | LAN上で非常に高速                       |
| セキュリティ | デフォルトで強力                | バージョン/ポリシーに依存               |
| OSサポート | 汎用的                           | Windows/macOSで最適、Linuxでも安定動作  |

どちらを選ぶべきか？

- **SFTP**: インターネット経由のVPS、ゼロトラストアクセス、ポートフォワードされたホームラボ、設定ファイルを取得する開発者向け。
- **SMB**: オフィスLAN、高スループットNAS、チーム向け共有ドライブ、ネットワーク内での低遅延メディア編集向け。

RcloneViewはSFTPとSMBの両方に加え、Google Drive、S3、Dropbox、OneDriveなどもサポートし、同じダッシュボードから管理できます。

## SFTP/SMBマウントにRcloneViewを使う理由

- **CLI不要**: すべての`rclone mount`フラグはGUI上で自動生成されます。リモートについては[Remote Manager](/howto/rcloneview-basic/remote-manager)を、ガイド付きマウントについては[クラウドストレージをローカルドライブとしてマウント](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)を参照してください。
- **クロスプラットフォーム**: Windows（WinFsp）、macOS（macFUSE）、Linux（FUSE）で一貫したUIを提供します。
- **真のローカルマウント**: Windowsではドライブレター、macOSでは`/Volumes/Server`、Linuxでは標準的なマウントポイントとしてマウントされます。
- **パフォーマンス対応**: VFSキャッシュ、サムネイルストリーミング、バッファリング制御、先読みチューニングがマウントダイアログで利用できます。
- **統合管理**: SFTP/SMBをクラウドストレージと合わせて管理し、再マウントをスケジュールし、スループットを一箇所で監視できます（[ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)および[リアルタイム転送モニタリング](/howto/rcloneview-basic/real-time-transfer-monitoring)を参照）。

## ステップバイステップ — RcloneViewでSFTPまたはSMBをマウントする

### 1) リモートを追加する（SFTPまたはSMB）

- **Remote Manager**を開き、**Add Remote**をクリックして**SFTP**または**SMB**を選択します。
- **Host/IP**と**Port**を入力します。
- SFTPの場合は**ユーザー名/パスワード**または**SSHキー**で認証します。SMBの場合は、必要に応じてドメイン/ユーザーを設定します。
- リモートを保存します。[General Settings](/howto/rcloneview-basic/general-settings)で設定パスワードを有効にすることも検討してください。
  <img src="/support/images/en/blog/add-sftp-remote.png" alt="Add SFTP Remote" class="img-large img-center" />

### 2) マウントジョブを作成する

- **Mount Manager**またはExplorerツールバーで**Mount**をクリックします。
- SFTP/SMBリモートを選択し、ターゲットを指定します。
  - Windows → `X:`（または任意の空いているドライブレター）
  - macOS → `/Volumes/ServerName`
  - Linux → `/mnt/server`または任意のパス

### 3) VFSキャッシュとバッファを設定する

- **キャッシュモード**: スムーズな閲覧とサムネイルストリーミングには`Full`（写真/Plexに最適）。
- **キャッシュディレクトリ**: SSDフォルダを指定します。
- **先読み**: メディアのスクラビングには4〜8MB、4K動画の場合は増やします。
- **ライトバック/バッファリング**: 大きな連続書き込みには有効化し、リンクを共有する場合は帯域幅を制限します。

### 4) マウントしてテストする

- **Mount**をクリックし、Finder/Explorer/Filesを開きます。
- フォルダを閲覧し、画像のプレビューと動画のストリーミングでキャッシュが機能しているか確認します。
- 再起動後も自動再接続されるよう、マウントエントリを保存したままにします（**Auto Mount**を切り替え）。

<img src="/support/images/en/blog/mount-sftp.png" alt="Mount SFTP/SMB from RcloneView Explorer" class="img-large img-center" />

## ユースケース

- **NASリモートアクセス**: どのOSからでもNASをクラウドドライブのように扱えます。
- **ローカル ↔ クラウド ↔ セルフホスト**: SFTP/SMBとGoogle Drive/S3/Dropbox間でファイルを1つのUIから移動できます。
- **オフィス共有ドライブ統合**: 部門ごとの共有をキャッシュ済みサムネイル付きでマッピングし、デザインチームに提供します。
- **メディア編集**: VFSキャッシュにより再ダウンロードを避けながら、NASから直接動画/写真を編集できます。
- **マルチサーバーハブ**: 複数のSFTP/SMBサーバーを並べてマウントし、ドラッグ&ドロップで移動できます。

## パフォーマンスのヒント

- メディア中心のワークロード（Plex/写真）には**キャッシュモード: Full**を設定してください。
- サムネイルとスクラビングを高速化するために**NVMe/SSDキャッシュディレクトリ**を使用してください。
- 大きな連続読み書きには**先読み**と**バッファサイズ**を増やしてください。
- スループットが重要な場合、SMBには**LAN**を優先し、WAN経由のSFTPには安定性のためにSSHキーを使用してください。
- [リアルタイム転送モニタリング](/howto/rcloneview-basic/real-time-transfer-monitoring)で転送を監視し、[ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)経由で再マウントをスケジュールしてください。

## まとめ — セルフホストとマルチクラウドの融合

SFTPとSMBはもはやレガシーなネットワークドライブのように感じる必要はありません。RcloneViewを使えば、クラウドのようなマウント、スマートなキャッシュ、そしてNAS、VPS、パブリッククラウドをスクリプトなしで混在させられる統合ダッシュボードが手に入ります。サーバーを一度追加し、ドライブレターまたは`/Volumes`パスを選択すれば、あとはRcloneViewがマウントを維持してくれるので、あなたはファイルに集中できます。

<CloudSupportGrid />

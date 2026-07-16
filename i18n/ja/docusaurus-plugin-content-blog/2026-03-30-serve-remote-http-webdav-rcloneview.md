---
slug: serve-remote-http-webdav-rcloneview
title: "HTTPとWebDAVでリモートを配信 — RcloneViewでクラウドファイルを共有"
authors:
  - tayson
description: "RcloneViewを使ってクラウドストレージのリモートをHTTPやWebDAV経由で配信し、ブラウザ、ファイルマネージャー、その他のデバイスからファイルの共有とアクセスを可能にします。"
keywords:
  - rcloneview serve
  - serve http rclone
  - webdav cloud storage
  - serve remote files
  - rcloneview webdav
  - cloud file sharing
  - http file server
  - rclone serve webdav
  - share cloud files locally
  - webdav server rcloneview
tags:
  - RcloneView
  - feature
  - webdav
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HTTPとWebDAVでリモートを配信 — RcloneViewでクラウドファイルを共有

> クラウドストレージのリモートをローカルのHTTPまたはWebDAVサーバーに変換し、ブラウザ、ファイルマネージャー、メディアプレーヤーからファイルにアクセスできるようにします。

rcloneのserve機能を使うと、クラウドストレージのリモートをローカルネットワークサービスとして公開できます。RcloneViewはこの機能をGUIから利用できるようにし、数回のクリックで設定済みのどのリモートに対してもHTTPまたはWebDAVサーバーを立ち上げられます。これにより、S3バケットをWebブラウザで閲覧したり、ネイティブサポートのないデバイスにGoogle Driveをマウントしたり、Wasabiからメディアファイルを直接動画プレーヤーへストリーミングしたりといった強力なワークフローが可能になります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HTTP経由でクラウドストレージを配信

RcloneViewのHTTP配信モードは、クラウドストレージのファイルをブラウザに適したディレクトリ一覧として表示する軽量なWebサーバーを起動します。Google Drive、Dropbox、S3バケット、あるいは暗号化されたcryptリモートなど、任意のリモートを指定すると、`http://localhost:8080` のようなローカルアドレスに移動可能なHTMLインターフェースが生成されます。

これは、クラウドストレージの認証情報を直接渡すことなく、同じネットワーク上の同僚とファイルを共有したい場合に特に便利です。HTTPサーバーを起動してローカルURLを共有すれば、相手はWebブラウザを通じてファイルを閲覧・ダウンロードできます。サーバーはRcloneViewが開いている間のみ動作し、どのリモートやサブディレクトリを公開するかはユーザーが制御します。

エアギャップ環境や制限されたネットワーク環境で作業するチームにとって、HTTP配信は各ワークステーションにクラウドプロバイダーのクライアントをインストールすることなく、クラウドに保存された参考資料、ドキュメント、データセットにアクセスする手段を提供します。RcloneViewを実行する1台のマシンがアクセスポイントとして機能します。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a cloud remote to serve via HTTP in RcloneView" class="img-large img-center" />

## WebDAV経由でクラウドストレージを配信

WebDAV（Web Distributed Authoring and Versioning）は、ネットワーク経由でのファイルの読み取り、書き込み、名前変更、削除といったファイル管理機能をHTTPに拡張したものです。RcloneViewでリモートをWebDAV経由で配信すると、Windows、macOS、Linux、iOS、Androidを含む、WebDAVをサポートする任意のデバイスからクラウドストレージにネットワークドライブとしてアクセスできるようになります。

Windowsでは、エクスプローラーからWebDAV共有をネットワークドライブとしてマップできます。macOSでは、Finderの「サーバへ接続」ダイアログを使用します。Linuxでは、NautilusやDolphinといったファイルマネージャーがWebDAVをネイティブにサポートしています。これにより、Google Drive、OneDrive、S3ストレージが、専用のクラウドクライアントアプリを持たないデバイス上でも通常のフォルダとして表示されます。

WebDAV配信は、ストレージバックエンドとしてWebDAVをサポートするアプリケーションとの連携も可能にします。ドキュメントエディタ、メディアプレーヤー、バックアップツールは、クラウド固有の設定を行うことなく、WebDAVエンドポイントを通じてクラウドストレージの読み書きができます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Serving a cloud remote as WebDAV for network access via RcloneView" class="img-large img-center" />

## 認証とセキュリティ

デフォルトでは、serve HTTPとWebDAVは認証なしで動作するため、信頼できるネットワークでの使用にのみ適しています。機密データやネットワーク公開を伴うシナリオでは、RcloneViewはユーザー名とパスワードによるHTTP Basic認証の設定をサポートしています。これにより、許可されたユーザーのみが配信されたファイルにアクセスできるようになります。

さらなるセキュリティのために、サーバーを `127.0.0.1`（ローカルホストのみ）にバインドして、ネットワーク上の他のマシンからのアクセスを防ぐことができます。リモートアクセスが必要な場合は、配信エンドポイントをインターネットに直接公開するのではなく、SSHトンネルやVPNと組み合わせてください。RcloneViewのserve設定パネルでは、サーバーを起動する前にバインドアドレス、ポート、認証情報を設定できます。

暗号化されたcryptリモートを配信する場合、ファイルはアクセスされる際にその場で復号されます。つまり、暗号化されたデータをクラウドに保存しつつ、復号された形でローカルに配信できるということです。これは、機密性の高いアーカイブをディスク上で永続的に復号することなくアクセスする際に役立ちます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active serve connections and file transfers in RcloneView" class="img-large img-center" />

## 実用的なワークフロー

**メディアストリーミング:** 動画や音声ファイルを含むクラウドリモートをHTTP経由で配信し、そのファイルURLをVLCなどのメディアプレーヤーで開きます。これにより、メディアライブラリ全体をローカルストレージにダウンロードする必要がなくなります。

**デバイス間でのファイルアクセス:** ホームサーバーや常時稼働のワークステーションでRcloneViewを実行し、クラウドストレージをWebDAV経由で配信します。同じネットワーク上のタブレット、スマートフォン、他のコンピューターから接続できます。

**開発とテスト:** 開発中にS3バケットをローカルで配信し、ステージング環境にデプロイすることなく、WebのURLからファイルを取得するアプリケーションをテストします。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing served cloud storage files through RcloneView interface" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から**RcloneViewをダウンロード**します。
2. 配信したいクラウドストレージのリモート（S3、Google Drive、Dropboxなど）を設定します。
3. serveパネルを開き、HTTPまたはWebDAVモードを選択し、ポートとオプションの認証を設定します。
4. サーバーを起動し、ブラウザやファイルマネージャーからローカルアドレスでクラウドファイルにアクセスします。

RcloneViewのserve機能は、クラウドストレージをネットワーク上のどのデバイスからでも即座にアクセスできるローカルリソースに変えます。

---

**関連ガイド:**

- [Bisync双方向同期 — RcloneViewによる双方向クラウド同期](https://rcloneview.com/support/blog/bisync-bidirectional-sync-rcloneview)
- [RcloneViewでクラウド同期用のWebDAVサーバーに接続](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [RcloneViewでSFTPとSMBをローカルドライブとしてマウント](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />

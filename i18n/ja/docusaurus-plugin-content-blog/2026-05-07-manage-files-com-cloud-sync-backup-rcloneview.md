---
slug: manage-files-com-cloud-sync-backup-rcloneview
title: "Files.comストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "Files.comをSFTPまたはWebDAV経由でRcloneViewに接続し、エンタープライズファイル共有を閲覧して、安全なファイル管理のための自動同期・バックアップジョブを実行します。"
keywords:
  - Files.com RcloneView
  - Files.com SFTP
  - Files.com WebDAV
  - エンタープライズファイル管理
  - Files.comクラウド同期
  - Files.comバックアップ
  - SFTPクラウド同期
  - 安全なファイル転送
tags:
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Files.comストレージを管理 — RcloneViewでファイルを同期・バックアップ

> Files.comは強力なエンタープライズファイル管理プラットフォームであり、RcloneViewはSFTPまたはWebDAV経由で接続することで、洗練されたデスクトップGUIからファイルの同期、バックアップ、管理を行うことができます。

Files.comは、コンプライアンス機能、自動化、そして大規模な組織が依存するアクセス制御を備えたエンタープライズグレードのマネージドファイル転送を提供します。Files.comをより広範なマルチクラウドワークフローに統合する必要があるチーム — コンテンツをクラウドバックアップに同期したり、他のストレージプロバイダーにファイルを移動したり、ファイルを一括管理したりする場合 — にとって、RcloneViewは標準のSFTPおよびWebDAVプロトコル上で動作するグラフィカルインターフェースを提供します。個別にrcloneをインストールする必要はなく、RcloneViewに同梱されています。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTP経由でFiles.comに接続する

SFTPは、RcloneViewをFiles.comに接続する最も信頼性の高い方法です。RcloneViewで**新規リモート**をクリックし、**SFTP**を選択します。Files.comのホスト名（通常は`<your-subdomain>.files.com`）、ユーザー名、そしてパスワードまたはSSHキーのいずれかを入力します。Files.comはどちらの認証方式もサポートしていますが、自動化されたワークフローではパスワードの保存を避けられるSSHキー認証が推奨されます。

保存後、Files.comのSFTPリモートがデュアルペインエクスプローラーに表示されます。Files.comのフォルダ構造を移動し、ドラッグ＆ドロップでファイルをアップロード・ダウンロードし、RcloneViewのインターフェースから直接エンタープライズファイル共有を管理できます。すべての操作についてリアルタイムの転送進捗が表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Files.com as an SFTP remote in RcloneView" class="img-large img-center" />

## WebDAV経由で接続する

Files.comはWebDAVもサポートしており、SFTPがファイアウォールでブロックされている場合や、HTTPベースのアクセスを好む場合の代替手段となります。RcloneViewで**新規リモート** > **WebDAV**をクリックし、Files.comのWebDAV URL、ユーザー名、パスワードを入力します。Files.comのWebDAVエンドポイントは通常`https://<subdomain>.files.com/dav/`で利用可能です。

WebDAVは一般的なファイル閲覧や中程度の量の転送に適しています。バックアップジョブで数千のファイルを同期するような高スループットの一括操作の場合、SFTPの方が一般的にパフォーマンスが優れており、大容量ファイルの取り扱いもより信頼性が高くなります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Files.com to cloud backup storage in RcloneView" class="img-large img-center" />

## 同期・バックアップジョブを実行する

Files.comを接続したら、**ジョブウィザード**を使って同期ジョブを作成できます。Files.comのフォルダをソースとして設定し、クラウドバックアップターゲット（Amazon S3、Backblaze B2、Google Driveなど）をデスティネーションとして設定します。これはエンタープライズバックアップの一般的なパターンです。Files.comがアクティブなファイル管理プラットフォームとして機能し、クラウドオブジェクトストアがアーカイブコピーを保持します。

同期ジョブを実行する前に**ドライラン**を実行し、正しいファイルが対象範囲に含まれていることを確認してください。コンプライアンス上重要なファイルについては、RcloneViewの**ジョブ履歴**がすべての転送の完全な監査証跡を提供します。PLUSライセンスユーザーは、これらのバックアップジョブを自動的に実行するようスケジュール設定できます（例えば毎晩実行するなど）。これにより、手動介入なしでFiles.comのデータが継続的にバックアップされます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Files.com backup sync in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **新規リモート** > **SFTP**をクリックし、Files.comのホスト名、ユーザー名、SSHキーまたはパスワードを入力します。
3. デュアルペインエクスプローラーでFiles.comのフォルダ構造を閲覧します。
4. **ジョブウィザード**を使用して、Files.comから任意のクラウドストレージへのバックアップ同期ジョブを作成します。
5. PLUSライセンスで定期的なバックアップをスケジュール設定し、データ保護を自動化します。

RcloneViewは、Files.comのエンタープライズファイル管理機能をより広範なクラウドストレージエコシステムと橋渡しし、すべてのファイル操作のための単一のグラフィカルツールを提供します。

---

**関連ガイド:**

- [Seafileを管理 — RcloneViewでクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Citrix ShareFileを管理 — RcloneViewでクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [RcloneViewでSFTP接続拒否とタイムアウトエラーを修正する](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />

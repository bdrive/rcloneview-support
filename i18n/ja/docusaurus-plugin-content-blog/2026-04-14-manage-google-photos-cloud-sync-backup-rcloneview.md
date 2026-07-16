---
slug: manage-google-photos-cloud-sync-backup-rcloneview
title: "Google フォトのストレージを管理 — RcloneView で写真を同期・バックアップ"
authors:
  - tayson
description: "Google フォトを RcloneView に接続し、写真ライブラリをローカルストレージや他のクラウドプロバイダーにバックアップしましょう。オリジナルを失うことなく Google フォトを管理できます。"
keywords:
  - Google フォト RcloneView バックアップ
  - Google フォト ローカルバックアップ ダウンロード
  - Google フォト クラウド同期
  - rclone Google フォト GUI
  - Google フォト 外付けドライブ バックアップ
  - Google フォト から S3 バックアップ
  - Google フォト ストレージ管理
  - RcloneView Google フォト
tags:
  - RcloneView
  - google-photos
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google フォトのストレージを管理 — RcloneView で写真を同期・バックアップ

> RcloneView は OAuth 経由で Google フォトに接続し、写真ライブラリの閲覧、ローカルストレージや他のクラウドプロバイダーへのオリジナルのバックアップ、スケジュールされたエクスポートの実行を可能にします。

Google フォトは何十億もの Android ユーザーにとってデフォルトの写真バックアップソリューションですが、それ自体はバックアップではありません。Google アカウントが侵害されたり、ストレージ容量を超過したり、サービス規約が変更されたりすると、写真ライブラリはリスクにさらされます。RcloneView は Google フォトを Google ドライブとは別のリモートとして接続し、写真ライブラリに直接アクセスして、外付けドライブ、NAS デバイス、または Amazon S3 や Backblaze B2 のようなコールドクラウドストレージにダウンロード・バックアップできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView で Google フォトを設定する

Google フォトは RcloneView のリモート設定において、独立したプロバイダーとして表示されます。**「リモート」タブ → 「新しいリモート」 → 「Google フォト」**に進み、OAuth ブラウザログインで認証します。RcloneView（rclone 経由）が写真への読み取りアクセスを要求するプロンプトが表示されます。承認後、ライブラリは Explorer パネルに年やアルバムごとに整理されて表示されます。

Google フォト API は、アルバムごと、または日付ベースのフォルダーごとに写真を表示する特定の構造になっている点に注意してください。API 経由で写真を再編成することはできませんが、フル解像度のオリジナル（Google One ストレージを利用していればカメラからアップロードされた RAW ファイルを含む）を閲覧・ダウンロードすることは可能です。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Photos as a remote in RcloneView" class="img-large img-center" />

## Google フォトをローカルストレージにバックアップする

最も一般的なユースケースは、Google フォトのライブラリ全体を外付けドライブや NAS にダウンロードすることです。Job Manager で Google フォトをソース、ローカルの外付けドライブ（または NAS パス）を宛先とした Copy ジョブを作成します。**「既存ファイルをスキップ」**を有効にすると、以降の実行が差分同期になり、前回のバックアップ以降に追加された新しい写真のみがダウンロードされます。

10 年分の写真、5 万枚・合計 150 GB を持つ家族の場合、初回のダウンロードには数時間かかります。夜間に一度だけ実行するスケジュールで実行しましょう。以降は毎週スケジュールしておけば、その週にアップロードされた新しい写真だけが追加され、すべてを再転送することなくローカルバックアップを最新の状態に保てます。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Backing up Google Photos library to local storage in RcloneView" class="img-large img-center" />

## クロスクラウドバックアップ：Google フォトから S3 または Backblaze B2 へ

クラウド間バックアップでは、Google フォトをソース、Amazon S3 または Backblaze B2 を宛先に設定します。これにより、写真ライブラリの独立したバックアップが別のクラウドプロバイダー上に作成され、ローカルストレージの容量を必要とせずに Google アカウントの問題から保護されます。

同期ウィザードのステップ 3 でフィルタールールを使用し、特定のファイルタイプ（`.jpg`、`.heic`、`.mp4`、`.raw`）のみを含めたり、不要であれば Google のメタデータ JSON サイドカーファイルを除外したりできます。日常的なジョブでは過去 12 か月分の写真のみをバックアップする最大ファイル経過時間フィルターを設定し、過去のアーカイブ用には別途一度限りのジョブを用意しましょう。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Photos to Backblaze B2 cross-cloud backup in RcloneView" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. 「新しいリモート」ウィザードで OAuth ブラウザ認証を使い、Google フォトをリモートとして追加します。
3. Google フォトから外付けドライブまたはクラウドバックアップバケットへの Copy ジョブを作成します。
4. 毎週の差分実行をスケジュールし、新しい写真を自動的に取り込みます。

RcloneView を使えば、Google フォトは確実にバックアップできるソースになります。かけがえのない思い出が Google のインフラから独立したコピーとして残ることを保証しましょう。

---

**関連ガイド：**

- [RcloneView で Google フォトを外付けドライブと NAS にバックアップする](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [RcloneView でクラウド写真ライブラリを整理する](https://rcloneview.com/support/blog/declutter-cloud-photo-library-rcloneview)
- [RcloneView で Google ドライブのクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

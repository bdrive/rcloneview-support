---
slug: sync-pikpak-cloud-google-drive-s3-rcloneview
title: "RcloneViewでPikPakクラウドストレージをGoogle DriveやS3などと同期する方法"
authors:
  - tayson
description: "PikPakはオフラインダウンロード機能を備えた高速クラウドストレージです。RcloneViewを使ってPikPakをGoogle Drive、AWS S3、その他のクラウドと同期・バックアップする方法を紹介します。"
keywords:
  - pikpak cloud storage
  - pikpak sync google drive
  - pikpak rclone
  - pikpak backup
  - pikpak file transfer
  - pikpak cloud manager
  - pikpak s3 sync
  - pikpak multi cloud
  - pikpak migration
  - pikpak alternative backup
tags:
  - pikpak
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでPikPakクラウドストレージをGoogle DriveやS3などと同期する方法

> PikPakは、大容量のストレージとオフラインダウンロード機能で人気を集めています。しかし、共有のためにGoogle Driveへ、あるいはアーカイブのためにS3へファイルを置きたい場合はどうすればよいでしょうか。RcloneViewはPikPakを70以上のクラウドプロバイダーと橋渡しします。

PikPakはアジアで人気のクラウドストレージサービスで、高速アップロード、オフラインダウンロード、メディアストリーミングを提供しています。個人のメディア管理には最適ですが、多くのユーザーは仕事での共同作業、バックアップの冗長性、あるいは移行のために、他のプラットフォームでもファイルにアクセスできる必要があります。RcloneViewはPikPakをクラウドエコシステム全体に接続します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜPikPakを他のクラウドと同期するのか

- **バックアップ** — 冗長性のために、PikPakのファイルのコピーを別のプロバイダーに保持します。
- **共有** — 同僚がアクセスできるGoogle DriveやDropboxにファイルを移動します。
- **移行** — PikPakから別のプロバイダーへ移行したり、ストレージを統合したりします。
- **アーカイブ** — 古いPikPakファイルを、より安価なオブジェクトストレージ(B2、S3 Glacier)へ移動します。

## RcloneViewでPikPakを設定する

### PikPakをリモートとして追加する

1. RcloneViewを開き、**Add Remote**をクリックします。
2. タイプとして**PikPak**を選択します。
3. PikPakアカウントの認証情報を入力します。

<img src="/support/images/en/blog/new-remote.png" alt="Add PikPak remote" class="img-large img-center" />

2ペインのエクスプローラーで、他のクラウドと並べてPikPakストレージを閲覧できます。

## よくある使い方

### PikPak → Google Drive

メディアやドキュメントを簡単に共有できるようGoogle Driveに同期します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer PikPak to Google Drive" class="img-large img-center" />

### PikPak → Backblaze B2(アーカイブ)

PikPakのコンテンツを、手頃な長期ストレージにアーカイブします。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Archive PikPak to B2" class="img-large img-center" />

### 自動同期をスケジュールする

PikPakとバックアップ先を自動的に同期し続けます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule PikPak sync" class="img-large img-center" />

## 転送の確認

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify PikPak transfer" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 他のクラウドと並べて**PikPakを追加**します。
3. 任意のプロバイダーと**同期、バックアップ、または移行**します。
4. 手間のかからない運用のために**自動化されたジョブをスケジュール**します。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />

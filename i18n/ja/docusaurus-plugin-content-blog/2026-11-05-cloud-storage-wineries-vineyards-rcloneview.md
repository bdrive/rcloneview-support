---
slug: cloud-storage-wineries-vineyards-rcloneview
title: "ワイナリーとブドウ園のクラウドストレージ — RcloneViewで生産記録を守る"
authors:
  - casey
description: "ワイナリーやブドウ園は、RcloneViewで収穫記録、ラベルのアートワーク、コンプライアンス関連ファイルを複数のクラウドにバックアップできます。スケジュール同期、暗号化、Folder Compare に対応。"
keywords:
  - ワイナリー クラウドストレージ
  - ブドウ園 ファイルバックアップ
  - ワイナリー 記録バックアップ
  - ラベル アートワーク バックアップ
  - 暗号化クラウドバックアップ
  - スケジュール クラウド同期
  - マルチクラウド バックアップ
  - RcloneView
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# ワイナリーとブドウ園のクラウドストレージ — RcloneViewで生産記録を守る

> 収穫記録、ラベルのアートワーク、コンプライアンス書類を、複数の場所で安全に保管しましょう。

小規模なワイナリーでも、意外に多様なファイルが生まれます。収穫・発酵のスプレッドシート、高解像度のラベルやパッケージのアートワーク、テイスティングルームの写真、販売業者との契約書、規制当局への提出書類などです。これらは事務所のPC 1台とクラウドアカウント1つにしかないことがよくあります。RcloneViewを使えば、そのデータを2か所目、3か所目にコピーし、コピーが一致していることを視覚的に確認できます。RcloneViewは1つのウィンドウで90以上のプロバイダーをマウントおよび同期でき、Windows、macOS、Linuxで動作します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ファイルのある場所を接続する

Remote タブを開き、すでに使っているストレージを追加します。事務書類用のGoogle DriveやOneDrive、貯蔵庫の事務所にあるNAS、オフサイトコピー用のBackblaze B2やWasabiなどのS3互換バケットなどです。クラウドアカウントはブラウザー経由でサインインし、バケットにはアクセスキーを使います。Synology NASはローカルネットワーク上で自動的に検出できます。

2つのリモートを Explorer パネルに並べ、フォルダーをドラッグすると、その間でコピーされます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでワイナリー用のクラウドとNASのリモートを追加" class="img-large img-center" />

## スケジュールでアートワークと記録をバックアップする

ラベルのアートワークや瓶詰め記録は、ヴィンテージのリリース前後に変更され、その後はほとんど触れられません。事務所の共有フォルダーからバケットへの同期ジョブを作成し、まず Dry Run でコピーされる内容をプレビューしましょう。フィルターも便利です。一時ファイルを除外したり、最大ファイル経過期間を設定して現行ヴィンテージに絞ったりできます。

スケジュール同期はcrontab形式のタイミング指定を使い、PLUS機能です。FREEライセンスでもジョブを手動で実行できるので、収穫や瓶詰めの後のコピーに適しています。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewでワイナリーのバックアップジョブをスケジュール" class="img-large img-center" />

## コンプライアンスと顧客データを暗号化する

販売業者との契約書、ライセンス文書、ワインクラブの顧客リストは、単なるコピー以上の保護が必要です。Crypt リモートは、ファイル名、フォルダー名、内容をクラウドに届く前に暗号化するため、プロバイダーには暗号文だけが保存されます。バックアップジョブの送信先を Crypt リモートにすれば、ワークフローの残りは変わりません。パスワードはバックアップとは別の場所に保管してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="ワイナリーのファイルを暗号化されたクラウドリモートにコピー" class="img-large img-center" />

## コピーを検証し、記録を残す

Folder Compare は、事務所の共有フォルダーとバックアップの間で、左のみ、右のみ、異なるファイルを表示するため、ヴィンテージのフォルダーが一致していることを確認できます。Job History には各実行のステータス、サイズ、ファイル数が一覧表示されるので、監査人や保険会社から最後のバックアップ完了時期を尋ねられたときに役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="ワイナリーのバックアップ実行の Job History" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 事務所のストレージとオフサイトのリモートを1つ追加します。
3. 同期ジョブを作成し、Dry Run で確認します。
4. 機密性の高いフォルダーにはオフサイトのリモートを Crypt でラップし、Folder Compare で検証します。

検証済みの2つ目のコピーがあれば、ノートPCの紛失はヴィンテージ記録の喪失ではなく、ちょっとした不便で済みます。

---

**関連ガイド:**

- [RcloneViewで食品・飲料ビジネスのクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-food-beverage-businesses-rcloneview)
- [RcloneViewで農業のクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-agriculture-farming-rcloneview)
- [RcloneViewでホスピタリティ・ホテルのクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-hospitality-hotels-rcloneview)

<CloudSupportGrid />

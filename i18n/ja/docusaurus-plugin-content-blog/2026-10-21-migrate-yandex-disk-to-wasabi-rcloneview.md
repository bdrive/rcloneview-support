---
slug: migrate-yandex-disk-to-wasabi-rcloneview
title: "Yandex DiskからWasabiへ移行 — RcloneViewでファイルを転送"
authors:
  - alex
description: "RcloneViewでYandex DiskからWasabiオブジェクトストレージへ移行しましょう。2つのリモートを接続し、Dry Runを実行し、クラウド間コピーを行って、チェックサムで検証します。"
keywords:
  - Yandex DiskからWasabiへ移行
  - Yandex Disk バックアップ
  - Wasabi 移行
  - RcloneView Yandex Disk
  - RcloneView Wasabi
  - クラウド間転送
  - S3 バックアップ
  - rclone GUI
  - オブジェクトストレージ移行
  - クラウド移行ツール
tags:
  - RcloneView
  - yandex-disk
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex DiskからWasabiへ移行 — RcloneViewでファイルを転送

> ローカルを経由せずにYandex DiskのアーカイブをWasabiのバケットへコピーし、すべてのファイルが届いたことを確認します。

Yandex Diskは個人用ドライブとしては便利ですが、長期保管のアーカイブや共有プロジェクトのデータは、バケットとアクセスキーを自分で管理できるS3互換のオブジェクトストレージに置くことがよくあります。RcloneViewは1つのウィンドウでYandex DiskとWasabiをリモートとして接続し、その間の転送を実行するため、テラバイト規模のデータを先にローカルディスクへ置く必要がありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 2つのリモートを設定する

Yandex Diskはブラウザ経由でサインインします。**Remote > New Remote**から選択してアクセスを承認すると、リモートが接続されます。WasabiはS3互換プロバイダーとして設定します。Wasabiコンソールでバケットを作成し、Access KeyとSecret Keyを生成して、バケットのリージョンのエンドポイントとともにRcloneViewに入力してください。

WasabiはS3互換プロバイダーなので、他のS3互換サービスと同じリモート設定で利用できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでYandex DiskとWasabiのリモートを追加" class="img-large img-center" />

## 移動する対象を選ぶ

片方のエクスプローラーパネルでYandex Diskを、もう片方でWasabiのバケットを開きます。よくある方法は、アーカイブ用に1つのバケットを用意し、バケット内のトップレベルフォルダをYandexのフォルダと対応させることです。オブジェクトストレージには実際のフォルダがないため、名前を一貫させ、非常に長いパスは避けてください。

ディスクに不要なファイルが含まれている場合は、ジョブのフィルターステップで拡張子、最大サイズ、ファイルの経過期間を指定して除外し、必要なものだけを移行します。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="RcloneViewでYandex DiskとWasabiの間でファイルをドラッグ" class="img-large img-center" />

## Dry Runと転送

ソースをYandex Disk、宛先をWasabiのバケットにしたジョブを作成します。結果を検証するまで元データをそのまま残すため、Copyを選択してください。**Dry Run**でファイル一覧をプレビューしてから、ジョブを開始します。Advanced Settingsでは、プロバイダーが対応している場合にハッシュとサイズを確認する**checksum**比較を有効にでき、Yandexが遅くなる場合は同時ファイル転送数も調整できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Yandex DiskからWasabiへの転送をリアルタイムで監視" class="img-large img-center" />

## 検証してフォローアップをスケジュールする

ジョブが完了したら、2つの場所で**Compare**を開き、left-onlyや不一致のファイルを見つけ、残ったものは比較ビューからコピーします。移行期間中もYandex Diskを使い続ける場合は、PLUSライセンスでcrontab形式のタイミングでジョブをスケジュールすれば、切り替えるまで新しいファイルがWasabiに保存され続けます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Yandex DiskからWasabiへの定期ジョブをスケジュール" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote > New Remote**からYandex DiskとWasabiを追加します。
3. Copyジョブを作成し、Dry Runを実行してから転送を開始します。
4. 元データを削除する前に、Folder Compareで検証します。

アーカイブが自分で管理するバケットに収まれば、古いコピーを整理することは賭けではなく、意図的な判断になります。

---

**関連ガイド:**

- [Yandex Diskストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Wasabiストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneViewによるチェックサム検証付きクラウド移行](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />

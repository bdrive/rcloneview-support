---
slug: cloud-storage-physical-therapy-clinics-rcloneview
title: "理学療法クリニックのためのクラウドストレージ — RcloneViewで整理された暗号化バックアップ"
authors:
  - robin
description: "理学療法クリニックの運動動画、問診票、画像ファイルを、RcloneViewで暗号化したクラウドストレージにバックアップする方法を紹介します。"
keywords:
  - 理学療法クリニック クラウドストレージ
  - 理学療法 ファイルバックアップ
  - クリニック クラウドバックアップ
  - 暗号化クラウドバックアップ
  - 運動動画の保存
  - スケジュール クラウド同期
  - マルチクラウドバックアップ
  - RcloneView
  - rclone GUI
  - Cryptリモート
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

# 理学療法クリニックのためのクラウドストレージ — RcloneViewで整理された暗号化バックアップ

> 患者の書類、運動動画、画像データのエクスポートを、コマンドを一つも書かずに複数のクラウドへバックアップしましょう。

理学療法クリニックでは、院長が想像する以上に多くのファイルが生まれます。スキャンした問診票、紹介状、自宅用の運動動画、歩行分析の録画、エクスポートした画像データなどです。これらは受付のPCや小型NASに1部だけ置かれ、復元テストも行われていないことがよくあります。RcloneViewは、クリニックのスタッフがデスクトップGUIでデータをクラウドストレージにコピーし、暗号化し、正しく届いたかを確認できるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## クリニックで既に使っているストレージを接続する

多くのクリニックは既にMicrosoft 365またはGoogle Workspaceのアカウントを持っており、ローカルNASを併用していることもあります。RcloneViewでRemoteタブを開き、**New Remote**をクリックします。OneDriveとGoogle Driveはブラウザ経由でサインインします。Wasabi、Cloudflare R2、Backblaze B2などのS3互換ストレージはアクセスキーを使用します。SFTP、WebDAV、SMBで院内サーバーに接続でき、Synology NASは自動検出できます。

RcloneViewは1つのウィンドウから90以上のクラウドサービスをWindows、macOS、Linuxで管理できるため、受付のWindows PCと院長のMacBookで同じ手順を使えます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでクリニック用のクラウドストレージリモートを追加" class="img-large img-center" />

## Cryptリモートで患者関連ファイルを暗号化する

問診票や施術記録を、第三者のバケットに平文のまま置くべきではありません。RcloneViewでは、アップロード前にファイル名、フォルダー名、内容を暗号化する**Crypt**仮想リモートを作成できます。Cryptリモートをバックアップ先プロバイダーのフォルダーに向け、元のバケットではなくCryptリモートへファイルをコピーします。

Cryptのパスワードは、データとは別の安全な場所に保管してください。RcloneViewだけでクリニックが法令に準拠するわけではありません。患者情報を移行する前に、地域の個人情報保護規則とストレージプロバイダーとの契約内容を確認してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでクリニックのファイルを暗号化されたクラウド先へコピー" class="img-large img-center" />

## プレビューしてからバックアップ

共有PCに、運動デモ動画とスキャンした記録が合計300GBあるクリニックを想定します。そのフォルダーからCryptリモートへ同期ジョブを作成し、**Dry Run**でコピーまたは削除される内容を一覧表示します。初回の実行でコピー方式を使えば、元データには手を加えません。S3、Azure、Backblaze B2はFREEライセンスでも読み書きが可能なため、バックアップ先のために追加のソフトウェア費用は発生しません。

ステップ1で2つ目の宛先を追加すると、1:N同期により同じソースを2つのクラウドにミラーリングできます。これもFREEで利用できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewでクリニックのバックアップジョブを実行" class="img-large img-center" />

## 夜間ジョブのスケジュールと履歴の確認

PLUSライセンスでは、同期ウィザードのステップ4でcrontab形式のスケジュールを指定できます。たとえば、最後の診療が終わった平日の22:00に実行する設定が可能です。スケジュールジョブが動作するにはアプリが起動している必要があるため、PCの電源を入れたまま、RcloneViewをシステムトレイに最小化しておいてください。

Job Historyには実行ごとにステータス、所要時間、サイズ、ファイル数が記録されるため、先週火曜日のバックアップが完了したかを確認したいときの監査証跡として使えます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewで夜間のクリニックバックアップをスケジュール" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブでメインのストレージとバックアップ先を追加します。
3. 機密性の高いフォルダー用に、バックアップ先にCryptリモートを作成します。
4. Dry Runを実行してジョブを開始し、Job Historyで結果を確認します。

検証済みの暗号化された2つ目のコピーがあれば、ディスク故障やランサムウェア被害の後でも、クリニックに復旧の手段が残ります。

---

**関連ガイド:**

- [ヘルスケア向けクラウドストレージ — RcloneViewで安全なバックアップ](https://rcloneview.com/support/blog/cloud-storage-healthcare-rcloneview)
- [医療分野のHIPAA準拠のためのクラウドストレージ — RcloneView](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)
- [Cryptリモートでクラウドバックアップを暗号化 — RcloneViewガイド](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

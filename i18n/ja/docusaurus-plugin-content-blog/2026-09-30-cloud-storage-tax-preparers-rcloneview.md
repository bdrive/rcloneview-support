---
slug: cloud-storage-tax-preparers-rcloneview
title: "税理士向けクラウドストレージ — RcloneViewで整理されたクライアントバックアップ"
authors:
  - casey
description: "税理士向けクラウドストレージ：RcloneViewでクライアントの申告書をバックアップし、機密ファイルを暗号化し、毎シーズン検証済みのオフサイトコピーを保持します。"
keywords:
  - 税理士向けクラウドストレージ
  - 税理士のファイルバックアップ
  - 確定申告シーズンのクラウドバックアップ
  - クライアント書類のバックアップ
  - 暗号化クラウドバックアップ
  - RcloneView 税務
  - 申告書をクラウドにバックアップ
  - マルチクラウドバックアップ 会計
  - Crypt リモート 機密ファイル
  - クラウドフォルダ比較
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

# 税理士向けクラウドストレージ — RcloneViewで整理されたクライアントバックアップ

> クライアントの申告書、元資料、業務委託契約書をオフサイトに暗号化してバックアップし、検証します。すべて1つのデスクトップアプリで行えます。

税務事務所では、シーズンごとに数千ものPDFが蓄積されます。源泉徴収票（W-2）、前年の申告書、署名済みの委任状などです。そのほとんどは事務所のワークステーション1台またはNASにあり、3月にドライブが1台故障すると数日を失いかねません。RcloneViewを使えば、小規模な事務所でもそのデータをスケジュールに従ってクラウドストレージへコピーし、事前に暗号化し、コピーが完全であることを確認できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ローカルのクライアントフォルダをクラウドにバックアップする

2人の事務所が、クライアントごと・年ごとにフォルダーをローカルディスクに保管しているとします。**New Remote**でBackblaze B2、Amazon S3、OneDriveなどのクラウドリモートを追加し、片方のExplorerパネルでローカルフォルダーを、もう片方でクラウドの保存先を開きます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud remote for tax client backups in RcloneView" class="img-large img-center" />

Syncウィザードで、ローカルフォルダーからバケットへのジョブを作成します。`clients-2026`のような名前を付け、Advanced Settingsでチェックサム比較を有効にすると、タイムスタンプだけでなくハッシュとサイズで変更ファイルを検出できます。

## アップロード前に機密文書を暗号化する

申告書には氏名、識別番号、銀行情報が含まれます。RcloneViewはCrypt仮想リモートに対応しており、ファイル名、フォルダー名、内容をプロバイダーに届く前に暗号化します。バケットのパスをラップするCryptリモートを作成し、同期ジョブが元のバケットではなくCryptリモートを指すように設定します。cryptのパスワードは、同じクラウドアカウントの外にある安全な場所に保管してください。パスワードがないとバックアップを復号できません。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing encrypted client folders to cloud storage" class="img-large img-center" />

## シーズンバックアップのスケジュールと履歴の確認

申告シーズン中は毎日変更が発生します。スケジュール機能はPLUS機能です。crontab形式のStep 4でジョブを毎晩実行し、Simulate scheduleで次回の実行時刻をプレビューします。FREEライセンスでも、Job Managerからワンクリックで同じジョブを手動実行できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly tax client backup job" class="img-large img-center" />

Job Historyには各実行のステータス、所要時間、サイズ、ファイル数が一覧表示されるため、重要な夜にバックアップが実行されたことを示せます。片方向同期の前には**Dry Run**を実行して、コピーまたは削除される内容を確認してください。

## シーズンをアーカイブする前に検証する

シーズンの終わりに、左にローカルフォルダー、右にクラウドのコピーを置いて**Compare**を開きます。左側のみ、または差分のあるファイルで絞り込んで不足を見つけ、コピーします。比較結果に問題がなくなったら、事務所のマシンの容量を空けても構いません。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing local client folders with the cloud backup" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. クラウドリモートを追加し、必要であればその上にCryptリモートを追加します。
3. クライアントフォルダーから同期ジョブを作成し、まずDry Runを実行します。
4. Folder Compareで検証し、Job Historyを確認します。

テスト済みの暗号化されたオフサイトコピーがあれば、申告シーズン中のハードウェア故障も、危機ではなく不便で済みます。

---

**関連ガイド：**

- [会計・財務事務所向けクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-accounting-finance-firms-rcloneview)
- [Zero-CLI Cryptリモート](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [クラウドストレージセキュリティチェックリスト](https://rcloneview.com/support/blog/cloud-storage-security-checklist-rcloneview)

<CloudSupportGrid />

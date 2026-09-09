---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "HiDriveからBackblaze B2への移行 — RcloneViewでファイルを転送"
authors:
  - steve
description: "チェックサム検証付き同期、ドライラン プレビュー、ジョブ履歴トラッキングを備えたRcloneViewで、HiDriveからBackblaze B2へファイルを移行します。"
keywords:
  - HiDriveからBackblaze B2への移行
  - HiDrive Backblaze B2 転送
  - HiDrive クラウド移行
  - Backblaze B2 バックアップツール
  - RcloneView HiDrive
  - クラウド間転送
  - チェックサム検証移行
  - HiDriveからオブジェクトストレージへ
  - ヨーロッパのクラウドからBackblaze B2へ
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDriveからBackblaze B2への移行 — RcloneViewでファイルを転送

> チェックサム検証付き転送と事前のドライランで、増え続けるHiDriveアカウントをBackblaze B2オブジェクトストレージへ移行します。

HiDriveは日常的なファイルアクセスには適していますが、より安価な長期保存やオフサイトのオブジェクトストレージのコピーが必要なチームは、個人向けまたはビジネス向けのクラウドプランの想定範囲を超えてデータセットが成長すると、Backblaze B2を検討することがよくあります。RcloneViewは同じウィンドウ内で両方のサービスを接続します — HiDriveはOAuthで、Backblaze B2はApplication Keyで — そのため、移行はすべてをまずローカルにダウンロードするのではなく、1つの設定済みジョブとして実行されます。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントおよび同期でき、Windows、macOS、Linuxで利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDriveとBackblaze B2を接続する

HiDriveはRcloneViewのブラウザベースのOAuthログインを通じて追加され — 別途APIキーを入力する必要はありません。Backblaze B2は、Backblazeアカウントコンソールで生成したApplication Key IDとApplication Keyが必要で、リモート設定フォームに直接入力します。両方のリモートがRemote Managerに表示されると、Explorer内で別々のタブとして表示されるため、転送を実行する前にHiDriveのソースとB2の宛先を並べて確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 移行ジョブを設定する

Homeタブの Sync ボタンを使って4ステップのウィザードを開きます。ステップ1では、HiDriveのソースフォルダと宛先としてBackblaze B2のバケットを選択し、HiDriveには影響を与えずB2にのみ書き込む片方向同期を選びます。ステップ2ではチェックサム比較を有効にでき、更新日時だけでなくハッシュとサイズでファイルを照合できます。これは、まったく異なる2つのストレージバックエンド間を移動する際に重要です。ステップ3では、最初は一部のみを移行したい場合に、ファイルタイプ、最大サイズ、経過期間でフィルタリングできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

実際の転送の前にドライランを実行してください — 1バイトも移動せずにコピーされる内容を正確に一覧表示するため、誤ったフォルダパスが大規模な意図しない転送になる前に発見する最も安全な方法です。

## 移行を検証する

同期が完了したら、Folder CompareでHiDriveのソースとB2の宛先を比較し、両側でファイル数とサイズが一致していることを確認します。Job Historyは実行ごとに転送された合計サイズ、転送速度、ファイル数を記録するため、何か問題があった場合に照合できる記録が残ります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Backblaze B2 folders after migration in RcloneView" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード**: [rcloneview.com](https://rcloneview.com/src/download.html)から入手してください。
2. OAuthでHiDriveアカウントを接続し、Application Key IDとKeyでBackblaze B2を追加します。
3. チェックサム比較を有効にした片方向同期ジョブを設定し、最初にドライランを実行します。
4. HiDriveのコピーを廃止する前に、Folder CompareとJob Historyで結果を確認します。

Backblaze B2への移行は、HiDriveですでに構築されたフォルダ構造やファイル整理を放棄することを意味しません — RcloneViewは転送を通してそれをそのまま維持します。

---

**関連ガイド:**

- [HiDriveストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Backblaze B2ストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [HiDrive同期エラーの修正 — RcloneViewで信頼性の高いクラウドバックアップ](https://rcloneview.com/support/blog/fix-hidrive-sync-errors-rcloneview)

<CloudSupportGrid />

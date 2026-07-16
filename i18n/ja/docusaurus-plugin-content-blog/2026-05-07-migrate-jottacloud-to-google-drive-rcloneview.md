---
slug: migrate-jottacloud-to-google-drive-rcloneview
title: "JottacloudからGoogle Driveへ移行 — RcloneViewでファイルを転送"
authors:
  - tayson
description: "RcloneViewのクラウド間転送を使ってJottacloudからGoogle Driveへファイルを移行する手順ガイド — 両方のリモートを設定し、移行ジョブを実行します。"
keywords:
  - Jottacloud移行
  - JottacloudからGoogle Driveへ
  - RcloneView移行
  - クラウド間転送
  - Jottacloudエクスポート
  - クラウドストレージ移行
  - rclone Jottacloud
  - Google Driveインポート
tags:
  - jottacloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# JottacloudからGoogle Driveへ移行 — RcloneViewでファイルを転送

> JottacloudからGoogle Driveへのファイル移行は、RcloneViewを使えば簡単です — 両方のリモートを接続し、すべてを事前にダウンロードすることなくクラウド上で直接転送できます。

Jottacloudは、無制限のストレージ提供で人気を集めてきたノルウェーのクラウドストレージサービスですが、多くのユーザーがGoogle Driveのようなより汎用的にアクセスできるプラットフォームへの移行を検討しています。プランの変更、価格、あるいは単にクラウドストレージを統合するためであっても、RcloneViewは移行プロセスをクリーンかつ確実にします。すべてのファイルを事前にローカルへダウンロードする必要はありません — RcloneViewはJottacloudからGoogle Driveへ、クラウド間操作として直接ファイルを転送します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Jottacloudリモートの設定

RcloneViewで**新規リモート**をクリックし、プロバイダーリストから**Jottacloud**を選択します。RcloneViewが認証プロセスを案内します — Jottacloudはデバイスベースのログインフローを使用し、ブラウザ経由でサインインすると、結果のトークンがRcloneViewに安全に保存されます。認証後、個人アーカイブ、バックアップフォルダ、共有コンテンツを含むJottacloudアカウントがエクスプローラーに表示されます。

移行を開始する前に、Jottacloudのフォルダ構造を確認し、コンテンツがどのように整理されているかを把握してください。特殊文字を含むフォルダ名や深くネストされた構造がある場合は注意してください。大規模な移行時に問題が発生することがあります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud as a remote in RcloneView" class="img-large img-center" />

## Google Driveの追加

再度**新規リモート**をクリックし、**Google Drive**を選択します。RcloneViewがGoogle OAuth認証用のブラウザタブを開きます — Googleアカウントでサインインし、要求された権限を付与してください。認証が完了すると、Google Driveリモートがエクスプローラーで利用可能になります。

移行を開始する前に、Google Drive上に移行先フォルダ（例: `Jottacloud Import/`）を作成しておくと、移行したファイルを整理しやすく、既存のコンテンツと分離できます。これにより、どのファイルがどこから来たのか混乱することなく、移行結果を簡単に確認できます。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Google Drive and Jottacloud open side by side in RcloneView" class="img-large img-center" />

## 移行ジョブの実行

両方のリモートを設定したら、ジョブマネージャーで**ジョブウィザード**を開きます。Jottacloudをソースに設定し（移行したいトップレベルフォルダまたは特定のサブフォルダを選択）、Google Driveの移行先フォルダをターゲットに設定します。移行の場合は**同期**モードではなく**コピー**モードを選択してください — これにより、ソース側で何も削除されることなくファイルがコピーされます。

必ず最初に**ドライラン**を実行し、どのファイルが転送されるかを正確に確認してください。数千ファイルを含む大規模なJottacloudアカウントの場合、ドライランの出力によって、実際の転送を実行する前に潜在的な問題を発見できます。問題がなければ、実際のジョブを実行します。RcloneViewの**ジョブマネージャー**はリアルタイムの進行状況を表示し、**ジョブ履歴**には最終的な転送件数とエラーが記録されます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Jottacloud to Google Drive migration job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **新規リモート** > **Jottacloud**をクリックし、ブラウザ認証を完了します。
3. **新規リモート** > **Google Drive**をクリックし、OAuth認証を完了します。
4. Google Drive上に移行したコンテンツ用の移行先フォルダを作成します。
5. **ジョブウィザード**を使用してコピージョブを作成し、ドライランを実行してから、完全な移行を実行します。

RcloneViewを使えば、JottacloudからGoogle Driveへの移行は、数分で設定でき、あとは自動的に完了まで実行される一度きりのジョブです。

---

**関連ガイド:**

- [Jottacloudの管理 — RcloneViewによるクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Google Driveの管理 — RcloneViewによるクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneViewでJottacloudをBackblaze B2へ移行](https://rcloneview.com/support/blog/migrate-jottacloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

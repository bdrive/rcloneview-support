---
slug: sync-onedrive-to-hetzner-storage-box-rcloneview
title: "OneDriveをHetzner Storage Boxに同期 — RcloneViewによるクラウドバックアップ"
authors:
  - jay
description: "RcloneViewを使ってOneDriveをHetzner Storage Boxに同期する方法。SFTPバックアップの設定、自動同期のスケジュール、ヨーロッパのストレージでMicrosoftファイルを保護する方法を解説します。"
keywords:
  - sync OneDrive to Hetzner Storage Box
  - Microsoft OneDrive Hetzner backup
  - RcloneView OneDrive Hetzner
  - Hetzner Storage Box SFTP backup
  - cloud storage to Hetzner sync
  - OneDrive backup Europe GDPR
  - cloud file sync automation
  - Hetzner cloud backup tool
  - OneDrive off-site backup
tags:
  - onedrive
  - hetzner
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDriveをHetzner Storage Boxに同期 — RcloneViewによるクラウドバックアップ

> RcloneViewを使ってOneDriveのファイルをHetzner Storage Boxに同期し、独立したオフサイトバックアップを作成しましょう。スクリプトは不要です。

Hetzner Storage Boxは、コスト効率に優れたヨーロッパホスティングのSFTPストレージソリューションで、大手ハイパースケーラー以外で信頼性とプライバシーに配慮したバックアップストレージを求める開発者やITチームに人気があります。RcloneViewを使ってMicrosoft OneDriveのコンテンツをHetzner Storage Boxに同期することで、Microsoftエコシステムから完全に独立したオフサイトコピーを作成できます。これは、ディザスタリカバリ、GDPRを意識したデータレジデンシー、または予期しないアカウント停止からの保護に役立ちます。ワークフロー全体は、rcloneコマンドを一切書くことなく、RcloneViewのビジュアルインターフェースから設定できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDriveとHetzner Storage Boxをリモートとして設定する

同期を始める前に、両方のサービスをRcloneViewにリモートとして登録する必要があります。OneDriveはOAuthブラウザ認証を使用します。**Remote**タブ→**New Remote**→**OneDrive**をクリックすると、RcloneViewがブラウザを開き、ワンクリックでMicrosoftログインが行えます。APIキーやクライアント資格情報を手動で管理する必要はありません。個人用OneDriveアカウントとMicrosoft 365のビジネス用OneDriveのどちらも、このフローで動作します。

Hetzner Storage BoxはSFTP経由で接続します。New Remoteダイアログで**SFTP**を選択し、Storage Boxのホスト名（`u{number}.your-storagebox.de`の形式）、ユーザー名、パスワード、またはSSH秘密鍵へのパスを入力します。Hetznerはパスワード認証と鍵認証の両方をサポートしています。複数のバックアップ先を管理するチームは、平文パスワードを保存せずに無人自動化を行うために、SSH鍵を好んで使用することが多いです。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Hetzner Storage Box as remotes in RcloneView" class="img-large img-center" />

両方のリモートがRcloneViewのエクスプローラータブに表示されたら、同期ジョブを構築する前に、それぞれの側を参照して接続を確認してください。

## OneDriveからHetznerへの同期ジョブを作成する

両方のリモートの準備ができたら、Homeタブから**Job Manager**を開き、**Add Job**をクリックします。4ステップのウィザードで、OneDriveのソースフォルダーを設定します。これはOneDriveのルート全体でも、`Documents/Contracts`のような特定のサブフォルダーや共有Teamsフォルダーでも構いません。宛先としてHetzner Storage Boxのパスを設定します。

Advanced Settingsのステップでは、接続速度に合わせて同時転送数を設定し、重要なデータについてはチェックサム検証を有効にします。30GBの案件ファイルをHetznerにバックアップする法律事務所であれば、チェックサムモードを利用してすべてのドキュメントが破損なく届いたことを検証し、転送中に発生した破損を検出できます。Filteringのステップでは、一時的なOfficeロックファイル（`.tmp`、`.lock`）を除外したり、PDFやスプレッドシートなど特定のドキュメントタイプにジョブを限定したりできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Hetzner Storage Box sync job configuration in RcloneView" class="img-large img-center" />

まずはドライラン（模擬実行）を行いましょう。RcloneViewは、実際に変更を加えることなく、どのファイルがコピーまたは削除されるかを正確に表示します。プレビューに問題がなければ、ジョブを実行します。下部の**Transferring**タブには、実行中のリアルタイムの転送進捗、転送速度、ファイル数が表示されます。

## 自動バックアップのスケジュールと監視

RcloneView PLUSライセンスがあれば、OneDriveからHetznerへのバックアップをcrontabスケジュールで自動化できます。毎日午前3時に同期を設定すれば、手動操作なしで毎晩OneDriveのファイルがHetznerにバックアップされます。ウィザード内のスケジュールシミュレーターは次回の実行時刻をプレビューするので、ジョブを保存する前にパターンを確認できます。

ジョブ履歴には完全な監査ログが保持され、各実行の開始時刻、所要時間、転送速度、ファイル数、結果が記録されます。一時的なネットワークの問題でバックアップが失敗した場合、RcloneViewの設定可能なリトライロジックが自動的にジョブを再試行します。ジョブ完了通知機能（PLUSで利用可能）を使えば、翌営業日が始まる前にチームが失敗を把握できるため、バックアップウィンドウが気づかれないまま過ぎることはありません。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling daily OneDrive to Hetzner Storage Box sync in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブ→**New Remote**→OneDriveから、**OneDrive**をOAuthリモートとして追加します。
3. ホスト名と認証情報を使って、**Hetzner Storage Box**をSFTPリモートとして追加します。
4. **Job Manager**で、OneDriveをソース、Hetznerのパスを宛先として同期ジョブを作成します。

OneDriveをHetzner Storage Boxにバックアップすることで、自動的に実行される低コストでヨーロッパホスティングのセーフティネットが得られます。クラウドサービスに予期しない障害が発生した場合でも、Microsoftファイルが確実に保護されます。

---

**関連ガイド:**

- [RcloneViewでHetzner Storage Boxの同期を管理する](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [OneDriveストレージの管理 — RcloneViewによる同期とバックアップ](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [RcloneViewでDropboxをHetzner Storage Boxに同期する](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)

<CloudSupportGrid />

---
slug: sync-hidrive-to-onedrive-rcloneview
title: "HiDriveからOneDriveへの同期 — RcloneViewによるクラウドバックアップ"
authors:
  - tayson
description: "RcloneViewでHiDriveからOneDriveへファイルを同期。Strato HiDriveのストレージをローカルにダウンロードせず、直接Microsoft OneDriveに転送します。"
keywords:
  - HiDrive to OneDrive
  - sync HiDrive OneDrive
  - HiDrive migration
  - Strato HiDrive sync
  - cloud-to-cloud transfer
  - HiDrive RcloneView
  - OneDrive backup
  - European cloud migration
  - RcloneView sync
  - cloud storage transfer
tags:
  - hidrive
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDriveからOneDriveへの同期 — RcloneViewによるクラウドバックアップ

> RcloneViewを使ってStrato HiDriveからMicrosoft OneDriveへ直接ファイルを転送 — ローカルへのダウンロード不要のクラウド間直接同期。

Stratoが提供するHiDriveは、GDPR準拠のデータ保管を必要とする企業に人気のヨーロッパ発クラウドストレージサービスです。多くの組織がMicrosoft 365を導入するにつれ、TeamsやSharePoint内でのシームレスなコラボレーションのために、HiDriveのファイルをOneDriveに統合したいと考えるケースが増えています。RcloneViewはこの移行を簡単にします。両方のサービスをリモートとして追加し、RcloneViewのGUIを通じて中間ローカルマシンへファイルをダウンロードすることなく、HiDriveフォルダを直接OneDriveに同期できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDriveとOneDriveの接続

HiDriveはrcloneでOAuth認証を使用します。RcloneViewでHiDriveをリモートとして追加すると、ブラウザウィンドウが開き、Strato HiDriveの認証情報でログインしてアクセスを許可します。OneDriveでも同じOAuthフローが適用されます。プロバイダー一覧からMicrosoft OneDriveを選択し、Microsoftアカウントで認証すれば、リモートが設定されます。

両方のリモートが有効になったら、RcloneViewのデュアルパネルエクスプローラーで並べて開きます。一方にHiDriveのフォルダ構造、もう一方にOneDriveが表示されます。この視覚的なレイアウトにより、同期ジョブを作成する前に、どのHiDriveフォルダをどのOneDrive宛先にマッピングするかを計画しやすくなります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## 同期ジョブの設定

同期ウィザードを使用して、HiDriveからOneDriveへの転送を作成します。HiDriveの転送元フォルダとOneDriveの転送先フォルダを選択し、設定手順を進めます。一方向同期(デフォルトの安定したオプション)は、HiDriveの内容をOneDriveにミラーリングします。新規ファイルや変更されたファイルがコピーされ、任意でHiDriveから削除されたファイルもOneDriveから削除されます。

プロジェクトアーカイブを統合するチームにとって、フィルタリングのステップは重要です。過去2年以内に作成または変更されたファイルのみを移行するように最大ファイル経過日数を設定したり、ファイルタイプフィルターを使用してドキュメント、スプレッドシート、プレゼンテーションのみを含め、大きな動画ファイルを除外したりできます。`.tmp`や`/.git/`のようなカスタムフィルタールールにより、作業用の不要なファイルを移行から除外できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HiDrive folders to OneDrive with RcloneView" class="img-large img-center" />

実際の転送の前にドライラン モードを実行し、ファイルリストが期待通りであることを確認しましょう。このシミュレーションでは、変更を加えることなく、どのファイルがコピーされるかを正確に表示します。プロバイダー間でビジネスデータを移動する際には価値のあるステップです。

## 継続的な同期のスケジュール設定

移行期間中にHiDriveとOneDriveを並行して運用するチームには、スケジュールベースの同期(PLUSライセンス)が両サービスの整合性を保つのに役立ちます。毎日、週2回、またはカスタムのcron間隔など、繰り返しスケジュールを定義すれば、RcloneViewがバックグラウンドで同期を実行します。ジョブ履歴には、実行ごとの開始時刻、転送されたファイル、完了ステータスが記録されます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling recurring HiDrive to OneDrive sync in RcloneView" class="img-large img-center" />

同期が正しく完了したかを確認する必要がある場合は、フォルダ比較を使用して、OneDriveにHiDriveから期待通りのファイルが含まれているかを確認できます。比較ビューには、左側のみ、右側のみ、サイズが異なるファイルが表示され、再転送が必要な項目を見つけるのに役立ちます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. リモートタブのOAuthブラウザログインフローでHiDriveを追加します。
3. OAuthブラウザログインフローでOneDriveを追加します。
4. 同期ウィザードを使用してHiDriveフォルダをOneDriveに転送します。まずドライランでプレビューしてください。

RcloneViewを使ってHiDriveからOneDriveへ移行することで、プロセス全体をGUI主導で監査可能な状態に保ちながら、中間的なローカルストレージの消費もありません。

---

**関連ガイド:**

- [RcloneViewでHiDrive Strato クラウド同期を管理する](https://rcloneview.com/support/blog/manage-hidrive-strato-sync-cloud-rcloneview)
- [RcloneViewでOneDriveクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [RcloneViewによるクラウド間移行](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />

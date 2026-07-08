---
slug: migrate-icloud-drive-to-onedrive-rcloneview
title: "iCloud DriveからOneDriveへ移行する — RcloneViewでファイルを転送"
authors:
  - alex
description: "RcloneViewのクラウド間同期、ドライラン(事前確認)、フォルダ比較検証機能を使って、iCloud DriveのファイルをMicrosoft OneDriveへ移行するステップバイステップガイド。"
keywords:
  - iCloud DriveからOneDriveへの移行
  - iCloudからMicrosoft OneDriveへ移行
  - iCloud Drive OneDrive 転送
  - iCloudからOneDriveへの乗り換え
  - クラウド移行 Apple Microsoft
  - iCloud Drive バックアップ OneDrive
  - RcloneView iCloud移行
  - iCloudからOneDriveへファイルを移動
  - クロスプラットフォームのクラウドファイル移行
tags:
  - RcloneView
  - cloud-to-cloud
  - migration
  - onedrive
  - macos
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud DriveからOneDriveへ移行する — RcloneViewでファイルを転送

> AppleのiCloudエコシステムからMicrosoft OneDriveへ切り替える際、数ギガバイトものファイルを手動でダウンロードして再アップロードする必要はありません——RcloneViewはこの移行をクラウド間の直接転送として実行します。

チームがMicrosoft 365に標準化する場合や、個人ユーザーがMac中心のワークフローからWindowsへ移行する場合、iCloud DriveのファイルをOneDriveに取り込むことが最初の実務的なハードルになります。すべてをローカルディスクにダウンロードして再アップロードする方法は遅く、中断が発生しやすい上、すべてのファイルが無事に届いたかを簡単に検証する手段がありません。RcloneViewは、進捗トラッキング、ドライラン(事前確認)、フォルダ比較検証を内蔵したサーバーサイド転送としてこれを処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜiCloud DriveからOneDriveへ移行するのか?

iCloud DriveはApple製ハードウェア内ではシームレスに機能しますが、そのエコシステムの外ではネイティブ統合が限定的です。対照的にOneDriveはWindowsのファイルエクスプローラーに組み込まれ、Microsoft OfficeやTeamsと直接連携し、Windows、macOS、iOS、Androidを通じて一貫した同期動作を実現します。Microsoft 365を展開する組織は、コラボレーション、バージョン履歴、アクセスポリシーがすべて単一の管理システムを通るよう、既存のファイルライブラリをOneDriveへ移行することを従業員に求めることがよくあります。

RcloneViewでiCloud Driveをサポートするには、rclone v1.69以降が必要です。RcloneViewには、この要件をすでに満たす組み込みrcloneバイナリが同梱されているため、開始前に別途rcloneをインストールする手順は不要です。

<img src="/support/images/en/blog/new-remote.png" alt="Adding both iCloud Drive and OneDrive as remotes in the RcloneView Remote Manager" class="img-large img-center" />

## RcloneViewで両方のリモートを設定する

まず、iCloud Driveリモートを追加します。**Remote**タブに移動し、**New Remote**をクリックして**iCloud Drive**を選択します。画面の指示に従ってApple IDで認証してください。次に、同様の手順でOneDriveリモートを追加します——OneDriveはOAuthブラウザログインを使用するため、ブラウザウィンドウが開いてMicrosoftアカウントへのサインインを求められ、認証が完了するとリモートが保存されます。

両方のリモートが登録されたら、それらをExplorerパネルに並べて開きます。これにより、転送を開始する前に両方のファイルツリーをライブで確認できます。iCloud Driveのルートで**Get Size**を使用してデータ総量を確認し、フォルダ構造をスキャンして、OneDrive上で挙動が異なる可能性のある名前の違いや深いネストのパスがないか確認してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and OneDrive displayed side by side in the RcloneView two-panel Explorer for cloud-to-cloud transfer" class="img-large img-center" />

## 同期ジョブで移行を実行する

**Home**タブから新しい同期ジョブを作成します。iCloud Drive(または特定のサブフォルダ)をソースに、対象のOneDriveパスを転送先に設定します。実行前に**Dry Run**(ドライラン)を実行してください。RcloneViewは実際には何も移動せずに、転送対象となるすべてのファイルとフォルダを一覧表示します。50GBのiCloudライブラリでも、このスキャンはわずか数分で完了し、OneDriveで扱いが異なる可能性のある過大なファイルやファイル名の文字を検出できます。

マウント専用ツールとは異なり、RcloneViewはFREEライセンスでもフォルダの同期と比較が可能です——そのため、ドライランからライブ転送、検証に至る移行ワークフロー全体を、有料アップグレードなしで実行できます。

ドライランの出力に問題がなければ、ライブ転送を開始します。**Transferring**タブには、進行状況、速度、現在転送中のファイルがリアルタイムで表示されます。接続が切れた場合は、同じジョブを再実行するだけで済みます。rcloneは転送先にサイズが一致する形ですでに存在するファイルをスキップするため、転送は中断した地点から効率的に再開されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare view in RcloneView confirming iCloud Drive and OneDrive folder contents match after migration" class="img-large img-center" />

## フォルダ比較で移行を検証する

同期ジョブが完了したら、**Home**タブから**Folder Compare**を開き、同じiCloud Driveのソースと転送先のOneDriveを指定します。比較エンジンは、どのファイルが同一か、サイズが異なるか、いずれか一方にのみ存在するかを表示します。左側のみ・右側のみのフィルターを確認することが、ファイルを手動でひとつずつ調べることなくデータ損失がないことを確認する最も速い方法です。

段階的な移行を行っている場合——一部のデバイスではまだ実際にiCloud Driveを使用しながら、他のデバイスをOneDriveへ移行している最中の場合——PLUSライセンスユーザーは同期ジョブにスケジュールを付加できます。iCloud Driveに追加された新しいファイルは、切り替えが完了するまで、スケジュールされた実行のたびに自動的にOneDriveへ複製されます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Drive to OneDrive sync job in RcloneView for a phased migration transition" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote** > **New Remote**から**iCloud Drive**リモートを追加し、Apple IDの認証を完了します。
3. OAuthブラウザサインインで**OneDrive**リモートを追加します。
4. iCloud Driveをソース、OneDriveを転送先とする同期ジョブを作成し、最初に**Dry Run**を実行します。
5. ライブ転送の後、**Folder Compare**を使用して、すべてのファイルが正しく移行されたことを確認します。

OneDriveへの完全な移行により、Windows、Microsoft 365、Teamsを通じて一貫したアクセスが可能になり、ファイルが2つのサービスに永続的に分散したままになることを防げます。

---

**関連ガイド:**

- [RcloneViewでiCloud Driveのクラウド同期を管理する](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [OneDriveを管理する — RcloneViewによるクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [RcloneViewでiCloud DriveからGoogle Driveへ移行する](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />

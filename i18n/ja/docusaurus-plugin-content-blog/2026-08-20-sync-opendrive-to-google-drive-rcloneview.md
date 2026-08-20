---
slug: sync-opendrive-to-google-drive-rcloneview
title: "OpenDriveをGoogle Driveに同期する — RcloneViewでクラウドバックアップ"
authors:
  - kai
description: "RcloneViewでOpenDriveフォルダーをGoogle Driveに同期し、Folder Compareと予約ジョブを使って両方のクラウドを常に一致させます。"
keywords:
  - OpenDriveをGoogle Driveに同期
  - OpenDrive Google Drive バックアップ
  - RcloneView OpenDrive 同期
  - OpenDrive クラウドバックアップ
  - クラウド間同期
  - OpenDrive Google Drive RcloneView
  - マルチクラウドバックアップツール
  - OpenDrive フォルダー比較
tags:
  - RcloneView
  - opendrive
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDriveをGoogle Driveに同期する — RcloneViewでクラウドバックアップ

> ローカルディスクに一度ダウンロードすることなく、OpenDriveフォルダーをGoogle Driveにそのままミラーリングします。

作業ファイルをOpenDriveに保存しつつ、クライアントやパートナーとはGoogle Driveで連携するチームは、結局手作業でファイルをやり取りすることになりがちで、どちらか一方が変更された瞬間にずれが生じます。RcloneViewは両方のリモートを1つのウィンドウで接続し、直接同期を行うため、転送はローカルフォルダーを経由せずクラウド間(cloud-to-cloud)で実行されます。マウント専用のツールとは異なり、RcloneViewはFREEライセンスでも同期とフォルダー比較を提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OpenDriveとGoogle Driveのリモートを設定する

まずRemote ManagerでOpenDriveをリモートとして追加し、次にブラウザベースのOAuthログインでGoogle Driveを追加します — 設定が完了すると、両方のリモートがFile Explorerに個別のタブとして表示されるため、同期ジョブを構築する前にそれぞれを独立して閲覧できます。同期ウィザードに進む前に、両方のリモートでフォルダーを一覧表示できることを確認してください。閲覧に失敗するリモートは同期中にも失敗するため、早期に発見しておくほうが対処しやすくなります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## 一方向同期ジョブを構成する

同期ウィザードでOpenDriveフォルダーをソースとして、対象のGoogle Driveフォルダーを宛先として選択し、一方向同期を選んでOpenDriveを正となるソースにします。Advanced Settingsでファイル転送数と同一性チェッカー数をフォルダーサイズに応じて設定してください — デフォルト値はほとんどの場合に適していますが、数万件の小さなファイルを含むフォルダーでは、OpenDriveがメタデータリクエストへの応答が遅い場合、同一性チェッカー数を下げると効果的です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from OpenDrive to Google Drive in RcloneView" class="img-large img-center" />

初回の実際の同期の前にDry Runを実行して、どのファイルがコピーされるかをプレビューしてください — これは特に既存のOpenDriveフォルダーに初めてジョブを向けるときに、意図しないフォルダー全体の転送を事前に防ぐのに役立ちます。

## Folder Compareで結果を確認する

初回の同期が完了したら、Folder Compareを開いて同じ2つのフォルダーを指定し、両側が一致しているか確認します。Folder Compareは片方にのみ存在するファイルやサイズが異なるファイルを強調表示するため、Job Historyでエラーを探し回るよりも部分的な転送漏れを素早く発見できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and Google Drive folders after sync in RcloneView" class="img-large img-center" />

## 継続的な同期を予約する

初回の同期を確認したら、Job Managerにジョブを保存し、crontab形式のスケジュールを設定してください — PLUSライセンスで利用可能で、これにより毎回手動で実行しなくてもOpenDriveの変更が一定の間隔でGoogle Driveに反映されます。Job Historyは転送サイズやファイル数を含め、予約された実行のすべての記録を保持するため、スケジュールが実際に期待通り動作しているか確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring OpenDrive to Google Drive sync job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. Remote ManagerでOpenDriveとGoogle Driveの両方をリモートとして追加してください。
3. まずDry Runで一方向同期ジョブを構築し、その後実際に実行してください。
4. Folder Compareで結果を確認し、必要であれば継続的なバックアップのためにスケジュール付きでジョブを保存してください。

両方のリモートを並べて表示できるようになれば、OpenDriveとGoogle Driveを揃えておくことは手作業ではなく日常的な同期ジョブになります。

---

**関連ガイド:**

- [RcloneViewでOpenDriveのファイルとクラウド同期を管理する](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [RcloneViewでOpenDriveをAWS S3と外部ストレージにバックアップする](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [RcloneViewでBoxをGoogle Driveに同期する](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />

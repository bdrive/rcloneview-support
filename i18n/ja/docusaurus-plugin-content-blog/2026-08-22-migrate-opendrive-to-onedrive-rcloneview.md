---
slug: migrate-opendrive-to-onedrive-rcloneview
title: "OpenDriveからOneDriveへ移行する — RcloneViewでファイルを転送"
authors:
  - alex
description: "RcloneViewのクラウド間転送、ドライラン プレビュー、ジョブ履歴トラッキングを使って、OpenDriveからMicrosoft OneDriveへファイルを移動しましょう。"
keywords:
  - opendrive から onedrive へ移行
  - opendrive onedrive 転送
  - rcloneview opendrive 移行
  - opendrive onedrive 同期
  - クラウド間移行
  - opendrive の代替
  - onedrive 移行ツール
  - opendrive ファイル転送
  - マルチクラウド ファイル転送
  - クラウドストレージ移行 gui
tags:
  - RcloneView
  - opendrive
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDriveからOneDriveへ移行する — RcloneViewでファイルを転送

> RcloneViewを使えば、ローカルにダウンロードしてからアップロードし直すという手順を挟まずに、OpenDriveアカウントのファイルをMicrosoft OneDriveへ直接移せます。

より少数のプロバイダーにストレージを集約することは、OpenDriveから移行する一般的な理由です。特にすでにMicrosoft 365にコラボレーションを統一しているチームにとってはなおさらです。RcloneViewは両方のサービスを同じウィンドウで接続し、データを直接両者間で転送するため、移行のために一時的にすべてをローカルディスクにコピーしてディスク容量を圧迫する必要がありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

New Remoteウィザードを使ってOpenDriveをリモートとして追加し、求められるアカウント情報を入力します。次に、ブラウザベースのOAuthログインを使ってOneDriveを2つ目のリモートとして追加してください。両方のリモートがExplorerパネルに別々のタブとして表示されます。RcloneViewは1つのウィンドウでWindows、macOS、Linuxを通じて90以上のプロバイダーをマウントおよび同期できるため、両アカウントを接続した後は別のツールを用意する必要はありません。

両方のリモートが並んで表示されている状態でドラッグ&ドロップを行うと、直接コピーが実行されます。異なるリモート間のドラッグは常に移動ではなくコピーになるため、転送を確認するまで元のOpenDriveファイルはそのまま残ります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## Syncジョブとして移行を実行する

1回限りのフォルダコピーではなく、アカウント全体の移行を行う場合は、4ステップのSyncウィザードがより信頼性の高い方法です。OpenDriveのリモートとフォルダをソースとして選択し、OneDriveを宛先として選び、一方向同期を選択すると、変更が逆方向に流れるリスクなしに、宛先がソースに合わせて構築されます。Advanced設定では同時ファイル転送数を調整でき、チェックサム比較を有効にできます。これはサイズだけに頼るのではなく、各ファイルがハッシュとサイズで一致することを確認するもので、生の速度よりもデータの整合性が重要な移行では有効にしておく価値があります。

本番の実行を確定する前に、Dry Runでコピーされるファイルを正確にプレビューできるため、古い共有フォルダのような予期しないものがOneDriveに反映される前に発見できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from OpenDrive to OneDrive with RcloneView Sync" class="img-large img-center" />

## 転送が正常に完了したことを確認する

同期が完了した後、Compare機能はOpenDriveのソースとOneDriveの宛先を並べて照合し、左側のみに存在するファイル、右側のみに存在するファイル、サイズが異なるファイルをフラグ表示します。これにより、OpenDriveアカウントを安全に閉じてよいと判断する前に、部分的な転送やスキップされたファイルを発見できます。比較ビューで見つかったギャップは、そのままそこからコピーできます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and OneDrive after migration in RcloneView" class="img-large img-center" />

## Job Historyで移行を追跡する

移行ジョブのすべての実行 — 残ったファイルを拾うための手動再実行であれ、ネットワーク障害後の再試行であれ — は、開始時刻、所要時間、ステータス、合計サイズ、ファイル数とともにJob Historyに記録されます。この記録は、後で移行について説明が必要になった際に、何がいつ移動したのかを正確に確認するのに役立ちます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. OpenDriveとOneDriveの両方をリモートとして追加します。
3. OpenDriveからOneDriveへの一方向Syncジョブを設定し、まずDry Runを実行してから転送を実行します。
4. OpenDriveアカウントを廃止する前に、Compareですべてのファイルが到着したことを確認します。

クラウド間の直接移行により、プロセスを高速に保ちつつ、すべてを先にダウンロードすることに伴うローカルストレージ不足を回避できます。

---

**関連ガイド:**

- [RcloneViewでOneDriveストレージを管理する — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [OpenDriveをGoogle Driveに同期する — RcloneViewでクラウドバックアップ](https://rcloneview.com/support/blog/sync-opendrive-to-google-drive-rcloneview)
- [OpenDriveをAWS S3にバックアップする — RcloneView外部ストレージ](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)

<CloudSupportGrid />

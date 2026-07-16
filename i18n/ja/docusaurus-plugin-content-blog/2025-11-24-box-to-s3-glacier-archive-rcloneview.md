---
slug: box-to-s3-glacier-archive-rcloneview
title: "Box から S3 + Glacier へ: RcloneView によるティア化アーカイブ"
authors:
  - tayson
description: "RcloneView の比較、チェックサム検証、スケジュール同期を使って、Box ライブラリを Amazon S3 のホットストレージと Glacier Deep Archive に移行し、長期保存を実現します。"
keywords:
  - rcloneview
  - box migration
  - s3
  - glacier
  - cloud archive
  - checksum verification
  - scheduler
  - multi cloud
  - rclone
  - tiered storage
  - cloud backup
  - compare sync
  - mount
  - job history
  - visual dashboard
  - gui
  - aws
  - vault
  - compliance
  - long term retention
tags:
  - cloud-migration
  - s3
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box から S3 + Glacier へ: RcloneView によるティア化アーカイブ

> Box ライブラリをアクティブアクセス用の Amazon S3 と長期保存用の Glacier に移行しましょう。ビジュアルな比較、チェックサム検証付きの同期、スケジュールジョブを使えば、CLI フラグは一切不要です。

Box はコラボレーションには優れていますが、長期保存や大容量メディアライブラリの管理はコストがかさみがちです。RcloneView を使えば、Box フォルダをホットアクセス用に S3 バケットへミラーリングし、経年データをスケジュールに従って Glacier クラスへ移行できます。スクリプトの面倒を見ることなく、並べて比較、ジョブのログ記録、リトライが可能です。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 解決したい課題

- コールドデータを Glacier にティア化して Box のストレージ費用を削減する。
- アクティブなチーム向けに常時利用可能な S3 コピーを維持しつつ、履歴は Glacier に保管する。
- チェックサム検証付きジョブと監査証跡でデータの整合性を維持する。

## Box と S3 のリモートを素早く接続

- `+ New Remote` から Box と S3 のリモートを追加します。OAuth とキーの設定については、[add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login)、[s3](/howto/remote-storage-connection-settings/s3) を参照してください。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />. 

- 最初の同期の前に、**Remote Explorer** を使ってフォルダの深さや命名規則に問題がないか確認しましょう。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />. 

- 任意: どちらかのリモートをローカルにマウントして、簡単な確認を行うこともできます: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />. 

## 移行前に比較する

- Box と移行先の S3 プレフィックスの間で **Compare** を実行し、不足しているファイルや更新されたファイルを実行前に確認しましょう: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)。
- 拡張子（PDF、CAD、メディアなど）でフィルタリングして、レビュー範囲を絞り込みます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />. 


## 2 段階パイプラインの構築（S3 ホット、Glacier コールド）

- ステップ1: アクティブ層向けに Box から S3 への **copy** ジョブを作成します: [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)。安全のため最初は copy から始め、結果を検証した後で sync に切り替えましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />. 

- ステップ2: バケットに S3 ライフサイクルポリシーを適用し、N 日後にオブジェクトを Glacier クラスへ移行するよう設定します。RcloneView のジョブはホットプレフィックス（例: `s3:box-archive/hot/`）を対象にしたまま維持します。
- ステップ3: 深いアーカイブについては、めったに使わないフォルダを直接 Glacier 向けプレフィックス（例: `s3:box-archive/cold/`）へ送る第2のジョブをスケジュールします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />. 


RcloneView を使えば、Box から移行し、ストレージコストを削減し、AWS 上でコンプライアンスに準拠したアーカイブを維持する、ビジュアルで再現可能な方法が手に入ります。まず比較し、安全にコピーし、残りはスケジュールに任せて、安心して眠りましょう。


<CloudSupportGrid />

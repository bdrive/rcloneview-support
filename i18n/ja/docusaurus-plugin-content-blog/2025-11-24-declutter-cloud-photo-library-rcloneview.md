---
slug: declutter-cloud-photo-library-rcloneview
title: "RcloneViewでクラウド写真ライブラリを整理する: 比較、クリーンアップ、すべてのショットを保護"
authors:
  - tayson
description: "Google Drive、Dropbox、NAS、S3に散らばった写真・動画フォルダを統合。RcloneViewで比較し、重複をクリーンアップし、保護されたバックアップをスケジュールしましょう。"
keywords:
  - rcloneview
  - photo backup
  - cloud photo dedup
  - compare cloud storage
  - multi cloud
  - google drive
  - dropbox
  - s3
  - nas backup
  - checksum
tags:
  - sync
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでクラウド写真ライブラリを整理する: 比較、クリーンアップ、すべてのショットを保護

> Google Drive、Dropbox、NASに散らばった同じRAWやJPEGにうんざりしていませんか? RcloneViewなら、重複を可視化し、クリーンアップし、保護されたバックアップを確立できます -- CLIフラグと格闘する必要はありません。

写真や動画の履歴が3か所以上に存在している場合、ズレが生じるのは避けられません。重複、失われた編集、誰も覚えていないフォルダなどです。RcloneViewはrcloneのパワーをビジュアルなワークスペースに包み込み、ソースを比較し、クラウドをローカルドライブのようにマウントし、単一の保護されたマスターライブラリを維持する再現可能な同期ジョブを実行できるようにします。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 統合ライブラリが重要な理由

- 複数のプロバイダーで同じアルバムを二重に保存する料金を払うのをやめましょう。
- Lightroom、Capture One、Photosのための単一の信頼できる情報源を維持しましょう。
- 推測ではなく、ログに記録されチェックサムで検証された実行によってバックアップの整合性を証明しましょう。

## クラウドを接続してクリーンなワークスペースをマウントする

- `+ New Remote`から、Google Drive、Dropbox、OneDrive、S3/Wasabi/R2、またはNASなど、すべての場所を一度追加します。ガイド: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login) および [/support/howto/remote-storage-connection-settings/s3](/howto/remote-storage-connection-settings/s3)。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />. 

- 主要なソースをマウントして、ツールからローカルのように感じられるようにします: [クラウドストレージをローカルドライブとしてマウントする](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)。
- 一貫したパス(例: `/Volumes/Photos` や `X:\Photos`)を使用することで、マシンを切り替えてもエディタや自動化が壊れないようにします。

 <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />. 


## Compareで重複とズレを見つける

- 任意の2つの場所間(例: DropboxとNAS)で**Compare**を実行し、同期する前に新しいファイル、欠落しているファイル、不一致のファイルを確認します: [フォルダ内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- 差分をレビューする際は、拡張子でフィルタリングしてRAW、JPEG、サイドカーファイルを分離しましょう。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />. 

## 同期ジョブで保護されたマスターライブラリを構築する

- 信頼できる情報源(多くの場合NASや最も完全なクラウドフォルダ)を選び、バックアップ先(ライフサイクルポリシーを備えたS3/Wasabiなど)への一方向同期を作成します。ガイド: [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)、および [ジョブの実行と管理](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)。
- アルバムや年ごとのジョブプリセット(例: `2020/`、`2021/`)を使用して、実行を小さく予測可能に保ちましょう。
- 統合作業の安全性を重視する場合は**copy**を優先し、ターゲットを信頼できると確認し、クリーンな実行履歴ができてから**sync**に切り替えましょう。
- 組み込みのrcloneフラグでまずドライランを実行し、includeとexcludeを検証しましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />. 


## スケジュール、監視、検証

- スケジューリングを有効にして、誰かが思い出したときではなく毎晩マスターライブラリが更新されるようにしましょう: [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />. 

- ジョブ履歴ログを監査証跡として使用しましょう。実行が失敗した場合は、再設定することなく同じジョブから再開できます。



## エディタと家族に素早く対応する

- 現行プロジェクトの高速コピーをローカルにマウントしたまま維持し、古いアーカイブはS3/Wasabiに保管しましょう。
- 軽量なJPEGエクスポートを共有用クラウド(DriveやDropbox)にプッシュする2つ目のジョブを作成し、RAWはマスターボールトに保管したままにしましょう。
- 出張撮影の場合は、ノートパソコンにクラウドをマウントし、再接続時にスケジューラがNASへバックフィルするようにしましょう。

散らかりを整理し、重複ピクセルへの支払いをやめる準備はできましたか? RcloneViewでマウント、比較、スケジューリングを行い、単一の保護されたライブラリへと近づきましょう。

<CloudSupportGrid />

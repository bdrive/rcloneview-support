---
slug: sync-jottacloud-google-drive-external-storage-rcloneview
title: "RcloneViewでJottacloudをGoogle Driveや外部ストレージと簡単に同期"
authors:
  - tayson
description: "RcloneViewを使って、JottacloudのファイルをGoogle Drive、外付けハードドライブ、他のクラウドと自動的かつ視覚的な確認付きで同期しましょう。"
keywords:
  - jottacloud sync
  - jottacloud backup tool
  - jottacloud to google drive
  - jottacloud export
  - jottacloud alternative backup
  - sync jottacloud files
  - jottacloud rclone
  - jottacloud multi-cloud
  - jottacloud external drive
  - jottacloud file transfer
tags:
  - jottacloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでJottacloudをGoogle Driveや外部ストレージと簡単に同期

> Jottacloudの無制限ストレージは気に入っているけれど、別の場所にもバックアップが欲しい方へ。RcloneViewはJottacloudのデータをGoogle Drive、外付けドライブ、その他あらゆるクラウドへ自動で同期します。

Jottacloudは、特に北欧諸国で人気のクラウドストレージサービスで、無制限のストレージプランと強力なプライバシーポリシーで知られています。しかし、単一のプロバイダーにすべてのデータを依存するのはリスクがあります。RcloneViewを使えば、JottacloudをGoogle Drive、外付けハードドライブ、NASデバイス、その他あらゆるクラウドと同期でき、冗長性と安心感を得られます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜJottacloudを他のストレージと同期すべきか

- **冗長性** — どのプロバイダーも障害、ポリシー変更、サービス終了と無縁ではありません。第二のコピーがあなたを守ります。
- **クロスプラットフォームアクセス** — Jottacloudを持っていないGoogle WorkspaceやMicrosoft 365のユーザーとファイルを共有できます。
- **ローカルバックアップ** — 外付けドライブやNASに高速アクセス可能なコピーを保持できます。
- **移行への備え** — 万が一プロバイダーを乗り換える場合でも、データはすでに別の場所にあります。

## Jottacloudの接続

1. RcloneViewを開き、**Add Remote** をクリックします。
2. プロバイダー一覧から **Jottacloud** を選択します。
3. Jottacloudの認証情報でログインします。
4. 保存すると、Jottacloudのファイルとフォルダが閲覧可能になります。

<img src="/support/images/en/blog/new-remote.png" alt="Add Jottacloud remote in RcloneView" class="img-large img-center" />

## 閲覧と管理

2ペインのExplorerで、他のストレージと並べてJottacloudのライブラリ全体を表示できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Jottacloud alongside other clouds" class="img-large img-center" />

## 同期シナリオ

### Jottacloud → Google Drive

JottacloudのデータをGoogle Driveにミラーリングします。

1. 同期ジョブを作成: Jottacloud → Google Driveフォルダ。
2. [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) で毎日実行するようスケジュールします。
3. 初回同期後は変更されたファイルのみ転送されます。

### Jottacloud → 外付けハードドライブ

ローカルのオフラインバックアップを維持します。

1. コピージョブを作成: Jottacloud → 外付けドライブのパス。
2. 週次、またはドライブを接続したときに実行します。
3. [フォルダ比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) を使って完全性を確認します。

### Jottacloud → AWS S3

Jottacloudのデータをコスト効率の良いS3ストレージにアーカイブします。

1. コピージョブを作成: Jottacloud → S3バケット。
2. S3のライフサイクルルールを使って、古いデータをGlacierに階層化します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Jottacloud sync job" class="img-large img-center" />

## 自動化とモニタリング

同期をスケジュールし、結果を通知で受け取りましょう。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Jottacloud sync" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Jottacloud sync job history" class="img-large img-center" />

## はじめかた

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. **Jottacloudをリモートとして追加** します。
3. **バックアップ先を追加** します（Google Drive、S3、外付けドライブなど）。
4. **同期またはコピージョブを作成** し、スケジュールを設定します。
5. 初回実行後、フォルダ比較で **確認** します。

Jottacloudは優れたメインクラウドです。RcloneViewは、それが唯一のコピーにならないようにしてくれます。

---

**関連ガイド:**

- [リモートの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [リアルタイム転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />

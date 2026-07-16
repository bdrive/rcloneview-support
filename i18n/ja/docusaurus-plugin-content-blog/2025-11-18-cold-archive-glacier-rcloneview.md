---
slug: tiered-cloud-archive-glacier-rcloneview
title: "RcloneViewでS3 Standard、Wasabi、Glacier Deep Archiveへの階層型クラウドバックアップ"
authors:
  - tayson
description: RcloneViewを使い、高速リストア用のS3/Wasabiと超低コスト長期保管用のGlacier Deep Archiveを組み合わせたホット・ウォーム・コールドのバックアップパイプラインを、スケジュール実行のSync/Copyジョブとライフサイクルポリシーで構築する方法。
keywords:
  - glacier deep archive
  - cold storage
  - tiered backup
  - rclone s3
  - rcloneview
  - wasabi archive
  - lifecycle policy
  - cloud backup
  - archive retention
tags:
  - archive
  - s3
  - glacier
  - wasabi
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでS3 Standard、Wasabi、Glacier Deep Archiveへの階層型クラウドバックアップ

> 直近のリストアは高速に、長期保管は低コストに——S3 Standardをホット、Wasabi/R2をウォーム、Glacier Deep Archiveをアーカイブ層として、RcloneViewのスケジュール機能とバケットライフサイクルポリシーで実現します。

単一のストレージクラスがすべてのファイルに適しているとは限りません。階層型のパイプラインを設計しましょう。新しいデータはS3 Standardにコピーして高速アクセスを確保し、地理的冗長性のために低コストなウォーム層(Wasabi/R2)へミラーリングし、コンプライアンス保持のために月次スナップショットをGlacier Deep Archiveへ送ります。RcloneViewはrcloneの上にGUIを重ねることで、シェルスクリプトなしでSyncのスケジュール設定、Compareによる検証、ライフサイクルルールの維持を可能にします。

<!-- truncate -->

**関連ドキュメント**

- Syncジョブの作成: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- ジョブのスケジュールと実行(Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- フォルダの比較: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- ローカルドライブとしてマウント: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## RcloneViewで階層型バックアップを行う理由

- リストア速度: 直近のファイルはS3 Standardに保持されるため、低レイテンシで取得できます。
- コスト管理: ウォームコピーはWasabi/R2に、ディープアーカイブはGlacierに置くことで、1TBあたり数セント単位に抑えられます。
- 耐障害性: マルチクラウド・マルチリージョン構成により、単一プロバイダーへの依存リスクを低減します。
- スクリプト不要: cronやYAMLの代わりに、ビジュアルなジョブ、スケジュール、ログを利用できます。
- 証跡: Compareジョブにより、リストアが必要になる前にデータの差異を検出できます。

## アーキテクチャの概要

```
[Primary (NAS/Drive/OneDrive)] --(Hourly Sync)--> [S3 Standard hot copy]
                                         \
                                          --(Daily Sync)--> [Wasabi/R2 warm copy]
                                          --(Monthly Copy)--> [Glacier Deep Archive]
```

- ホット: S3 Standard(高速リストア)。
- ウォーム: WasabiまたはR2(低コストかつリストア時のegressに優しい)。
- コールド: 90〜365日の保持に使うGlacier Deep Archive(バケットライフサイクルでオブジェクトを移行)。

## 前提条件

- RcloneViewに3つのリモートを設定済みであること(例: `s3:hot`、`wasabi:warm`、`s3:archive`)。
- ホット/ウォームバケットのバージョニングと、アーカイブバケットをGlacier Deep Archiveへ移行するライフサイクルルール。
- IAM/APIパーミッション: list/read/writeおよびマルチパートアップロード権限、コールド層向けのGlacierリストア権限。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## ステップ1: ホットとウォームのSyncジョブを作成する

1. **Sync**ジョブを作成します(Primary -> S3 hot)。
2. **Advanced Settings**で転送数を設定し、両側がハッシュに対応している場合はチェックサム比較を有効にします。
3. **Filtering Settings**で、キャッシュや一時フォルダを除外します。
4. 2つ目の**Sync**ジョブを作成します(Primary -> Wasabi/R2 warm)。設定とフィルタは同様にします。
5. 両方のジョブをJob Managerに保存します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## ステップ2: コールドアーカイブ用のCopyジョブを追加する

1. **Copy**ジョブを作成します(S3 hot -> Glacierアーカイブバケット)。アーカイブ上での削除を避けるため、Syncではなく必ずCopyを使用してください。
2. **Advanced Settings**で、必要に応じて転送数とチェックサム比較を設定します。
3. バケットライフサイクルルールを使い、オブジェクトをGlacier Deep Archiveへ移行し、コンプライアンス期間経過後に古いバージョンを失効させます。

## ステップ3: すべてをスケジュールする

- Jobウィザード(Step 4: Scheduling、Plus)で、ホットは1時間ごと、ウォームは毎晩、コールドは月次といったように頻度を設定します。
- **Simulate**でスケジュールをプレビューし、Advanced Settingsでリトライ回数を設定します。
- 週次のCompare(hot vs warm)を追加し、早期にデータの差異を検出します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## ステップ4: 整合性を検証する

- 最初のフルSync後に、hotとwarmの間でCompareを実行します。
- アーカイブについては、抜き取りでリストアを確認します。小規模なGlacierリトリーバルを実行し、ファイルが正しく開けることを確認してください。
- 各層に小さなカナリアファイル(例: `canary.txt`)を配置し、Compareレポートでその存在を確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## ステップ5: リストア手順

- 高速リストア: egressやロケーションに応じて、ウォーム(Wasabi/R2)またはホット(S3 Standard)から取得します。
- ディープリストア: 必要なプレフィックスに対してGlacierリストアを開始し、その後warm/hotへCopyし直します。
- 誤ったフォルダをリストアしないよう、一括コピーの前にRcloneViewのMount機能で内容を確認してください。

## チューニングのヒント

- レイテンシ/egressに敏感な場合: 業務時間中は転送数を抑え、業務時間外は増やします。
- Glacierのコスト: アーカイブは月次でまとめ、PUTおよびリトリーバルリクエストを減らすために頻繁な小さなアップロードを避けます。
- セキュリティ: ランサムウェアによる削除を防ぐため、hot/warmをObject Lockと組み合わせます(イミュータブルガイドを参照)。
- 命名規則: スナップショットには日付フォルダを接頭辞として付けます(例: `archive/2025-11/`)。ライフサイクルとリストアが簡素化されます。

## トラブルシューティングチェックリスト

- リストアの遅延: Glacierのリトリーバルには数時間かかることがあるため、それを踏まえてRPO/RTOを計画してください。
- アーカイブでのAccessDenied: IAMロールがそのバケットに対して`glacier:InitiateJob`/リストア権限を許可していることを確認してください。
- 差異が見つかった場合: hot/warmのSyncを再実行します。アーカイブにオブジェクトが欠落している場合は、hotから差分を再Copyしてください。
- コストの急増: 保持期間経過後のライフサイクル失効を有効にし、ピーク時のegress中は同時実行数を制限します。



一度階層化すれば、あとはスケジュールを常に走らせるだけ。RcloneViewでコストとRPOの両方をコントロール下に置きましょう。

<CloudSupportGrid />

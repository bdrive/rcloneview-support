---
slug: warm-standby-disaster-recovery-rcloneview
title: "RcloneViewによるクラウド間ウォームスタンバイ災害復旧(S3、Wasabi、R2、OneDrive)"
authors:
  - tayson
description: RcloneViewとrcloneを使い、AWS S3、Wasabi、Cloudflare R2、OneDrive、Google Drive間でスケジュール同期、比較、マウントベースのフェイルオーバーによるマルチリージョンのウォームスタンバイDR構成を構築します。
keywords:
  - warm standby
  - disaster recovery
  - multi-region backup
  - rclone s3
  - rcloneview
  - cloud failover
  - compare sync
  - cloudflare r2
  - wasabi s3
tags:
  - disaster-recovery
  - multi-cloud
  - sync
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewによるクラウド間ウォームスタンバイ災害復旧(S3、Wasabi、R2、OneDrive)

> 本番データのライブコピーを別のリージョンまたはクラウドに保持し、インシデント発生時には数分で切り替えられるようにします。

ウォームスタンバイDRは、プライマリロケーション(AWS S3やOneDriveなど)と、継続的に更新されるスタンバイ(Cloudflare R2やWasabiなど)をペアにする方式です。RcloneViewはrcloneの上にGUIを重ねることで、シェルスクリプトを使わずに、安定した同期のスケジューリング、Compareによるドリフトの検証、迅速なフェイルオーバーのためのスタンバイのマウントを可能にします。

<!-- truncate -->

**関連ドキュメント**

- 同期ジョブの作成: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- ジョブのスケジューリングと実行(Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- ローカルドライブとしてマウント: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive
- フォルダの比較: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## RcloneViewでウォームスタンバイを使う理由

- 復旧の高速化: スタンバイコピーはプライマリから数分〜数時間以内で、数日単位ではありません。
- クラウドの選択肢: S3、Wasabi、R2、B2、Google Drive、Dropbox、OneDriveを組み合わせられます。
- スクリプト不要: YAML/cronではなく、ウィザードでジョブを構築できます。
- 可視化されたドリフト: フェイルオーバーが必要になる前に、Compareで不一致を確認できます。
- より安全なリストア: 本番環境に触れることなく、スタンバイをマウントしてコピーバックできます。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  

## 戦略とアーキテクチャ

```
[Primary cloud/local/NAS] --(RcloneView scheduled Sync)--> [Standby cloud/region]
                                                \
                                                 --(Weekly Compare)--> [Drift report]
```

- プライマリ: アプリが書き込む場所(S3バケット、OneDriveサイト、GDriveワークスペース、NAS)。
- スタンバイ: バージョニングを備えた別のリージョン/プロバイダー(R2/Wasabi/S3/B2)。
- 制御: RcloneViewが一定間隔で同期を実行し、Compareが整合性をチェックし、Mountがフェイルオーバー時の迅速なアクセスを可能にします。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 前提条件

- RcloneViewに設定済みの2つのリモート(例: `s3:prod-bucket` と `r2:standby-bucket`)。
- ロールバックの安全性のため、スタンバイ側でバージョニングを有効化。
- 両側でのリスト/読み取り/書き込みに対するIAM/API権限。
- スケジュールされたレプリケーション(毎晩または毎時)のための帯域幅の確保。

## ステップ1: ベースラインの同期ジョブを構築する

1. 同期ジョブを作成する: ソース=プライマリ、宛先=スタンバイ。
2. 一方向同期を使用して新規/更新されたファイルをミラーリングし、厳密なパリティが必要な場合は削除も反映します。
3. フィルタリングのステップで、ノイズの多いパス(キャッシュ/一時ファイルなど)にフィルタを追加します。
4. **詳細設定**で転送数を調整し、両側がハッシュに対応している場合はチェックサム比較を有効にします。
5. ジョブを保存して、実行のたびに同じ設定が適用されるようにします(ジョブマネージャー)。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## ステップ2: 継続的な更新をスケジュールする

1. ジョブウィザード(ステップ4: スケジューリング、Plusライセンス)で、DRジョブのスケジューリングを有効にします。
2. 頻度を選択します。アプリデータは毎時、アーカイブは毎晩とし、**シミュレート**で今後の実行を事前確認します。
3. 接続が不安定な場合に備えて、詳細設定で再試行回数を設定します。
4. ドリフトを早期に検出するため、手動での週次Compareも継続します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## ステップ3: 検証と監視

- スタンバイの準備完了を宣言する前に、Compareでオブジェクト数が一致していることを確認します。
- ジョブ履歴を確認して失敗や再試行がないかチェックし、実行タイミングを逃した場合はジョブを再実行します。
- 誤って削除したデータを復旧できるよう、スタンバイ側のバージョニングを維持します。

## ステップ4: フェイルオーバーの手順

1. スタンバイをマウントする: マウントマネージャーを使用して、宛先リモートを安定したパス/ドライブレターにマウントします。
2. ワークロードをマウントされたパス、またはスタンバイバケットのエンドポイントに向けます。
3. インシデントのトリアージが完了するまで、プライマリを読み取り専用またはオフラインの状態に保ちます。


## チューニングのヒント

- 遅延に敏感なアプリ: 詳細設定で転送数を減らし、トラフィックの少ない時間帯にスケジュールします。
- コンプライアンス: スタンバイ側でバージョニングを維持し、監査のためにジョブ履歴をエクスポートします。
- コスト管理: フィルタでステージング/一時フォルダを除外し、スタンバイクラウド側でライフサイクルポリシーを適用します。
- マルチクラウド: 同じプライマリから2つのスタンバイ(R2+Wasabiなど)が必要な場合は、別々のジョブを実行します。

## トラブルシューティングチェックリスト

- カウントの不一致: Compareを再実行し、ジョブ履歴でスキップされた項目を確認します。バージョニングが有効かどうかも確認してください。
- 権限エラー: 両方のクラウドでAPIキーがリスト/読み取り/書き込みを許可していることを確認します。
- リストアでデータが削除される: 本番環境にデータを戻す際は、Sync(同期)ではなくCopy(コピー)を使用します。


スタンバイを常に最新かつ検証済みの状態に保ち、フェイルオーバーが「切り替え」で済むようにしましょう。慌ただしい対応にならないように。

<CloudSupportGrid />

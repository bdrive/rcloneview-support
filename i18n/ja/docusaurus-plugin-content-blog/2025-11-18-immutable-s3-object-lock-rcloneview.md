---
slug: immutable-backups-s3-object-lock-rcloneview
title: "RcloneViewでS3 Object Lockを使ったランサムウェア耐性のあるイミュータブルバックアップ"
authors:
  - tayson
description: RcloneViewとS3 Object Lockバケットを組み合わせて、AWS S3、Wasabi、Backblaze B2、Cloudflare R2上でランサムウェアに強いイミュータブルバックアップを構築する方法。スケジューリング、検証、迅速なリストアまで解説します。
keywords:
  - s3 object lock
  - immutable backups
  - ransomware protection
  - rclone s3
  - rcloneview
  - wasabi object lock
  - cloud backup immutability
  - compliance backup
tags:
  - RcloneView
  - backup
  - security
  - s3
  - wasabi
  - r2
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでS3 Object Lockを使ったランサムウェア耐性のあるイミュータブルバックアップ

> ランサムウェアによるロールバックの心配はもう不要です。S3 Object LockとRcloneViewのスケジューラを組み合わせて、バックアップを改ざん不可能な状態に保ちましょう。

イミュータブル（不変）ストレージは、リカバリが完了するまで攻撃者（または誤操作）がバックアップを削除・上書きすることを防ぎます。S3 Object LockはAWS S3、Wasabi、Backblaze B2、Cloudflare R2で利用できます。RcloneViewはバケットのObject Lockとバージョニング設定をそのまま活用しつつ、GUI上でジョブを構築できます。CLIは不要です。

<!-- truncate -->

**関連ドキュメント**

- 同期ジョブの作成: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- ジョブのスケジューリングと実行（Plus）: https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- フォルダの比較: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- ローカルドライブとしてマウント: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Object Lock + RcloneViewを使う理由

- イミュータブルなコピー: 保持期限により、指定した期間中の削除・上書きをブロックします。
- クラウドの選択肢: S3、Wasabi、R2、B2、およびS3互換のNASゲートウェイで動作します。
- スクリプト不要: GUIで同期ジョブを作成し、スケジュール設定（Plus）を行い、履歴・ログを保持できます。
- 高速な確認: 比較機能を使って、転送先が一致していることや保持されているバージョンを確認できます。
- 簡単なリストア: 保持設定を変更することなく、ロックされたバケットからマウントまたは同期で復元できます。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


## 前提条件

- 作成時にObject Lockを有効化したS3互換バケット。
- そのバケットでバージョニングが有効になっていること（Object Lockには必須）。
- S3リモートが接続済みのRcloneViewがインストールされていること。
- `PutObject`および`PutObjectRetention`権限を持つIAM/APIユーザー。
- （任意）ジョブを自動でスケジュール実行したい場合はPlusライセンス。


## ステップ1: バケットでObject Lockを有効化する

1. Object Lockを有効にした状態でバケットを作成します（作成後は切り替え不可）。AWS S3では「Enable Object Lock」にチェックを入れます。Wasabi/R2/B2ではバケット作成時にObject Lockオプションを選択します。
2. そのバケットのバージョニングを有効にします。
3. デフォルトの保持モードを決定します：Governance（後から上書き可能）またはCompliance（上書き不可）、そして保持期間（例: 30〜90日）を設定します。

## ステップ2: Object LockバケットにSync/Copyジョブを設定する

RcloneViewはオブジェクト単位のObject Lockフラグは表示しません。代わりに、バケットのObject Lockとバージョニングのデフォルト設定に依存し、ジョブの転送先をそのバケットに向けておきます。

1. 新しい**同期**（削除を発生させたくない場合は**コピー**）ジョブを作成します：ソース = データ、転送先 = Object Lockバケット。
2. **詳細設定**で転送数を設定し、双方がハッシュに対応している場合はチェックサム比較を有効にします。
3. **フィルタリング設定**で、キャッシュや一時ファイルのパスを除外し、無駄な保持を避けます。
4. ジョブを保存して、実行のたびに同じ設定が適用されるようにします（ジョブマネージャー）。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## ステップ3: イミュータブルバックアップをスケジュールする

1. ジョブウィザード（ステップ4: スケジューリング、Plus）で、イミュータブルバックアップジョブのスケジューリングを有効にします。
2. 毎日または毎時の実行間隔を設定し、**シミュレート**機能で今後の実行予定を確認します。
3. 接続が不安定な場合は、詳細設定で再試行回数を設定します。
4. 保持されているオブジェクトを検証するため、週次で手動の比較を行いましょう。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## ステップ4: 保持設定と整合性を検証する

- アップロード後に、比較機能でオブジェクト数を確認します。
- S3コンソール（またはRcloneViewのログ）で、オブジェクトが`Compliance`/`Governance`と期待通りのRetain Until日付を示しているか確認します。
- 転送先でテストファイルの削除を試してみてください。保持期間が終了するまでブロックされるはずです。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## ステップ5: イミュータブルバックアップからリストアする

復旧が必要になった場合：

1. 新しいジョブを作成します：転送先（Object Lockバケット）→ ソース（復旧先）とし、同期またはコピーを実行します。
2. 一時的なリストアには、マウント機能を使ってロックされたバケットを閲覧し、ファイルをドラッグして取り出します。
3. 復旧先にある新しいファイルを削除したくない場合は、リストア時に同期ではなくコピーを使用します。

## ベストプラクティスとチューニング

- 検知と調査に十分な期間になるよう、保持期間を設定します（例: 30〜90日）。
- 検証環境では柔軟性のあるGovernanceモードを、本番環境や規制対象データにはComplianceモードを使用します。
- 大容量のメディアやVMイメージについては、詳細設定で転送数を調整します。
- 少なくとも2つのリージョンまたはプロバイダー（例: Wasabi + R2）を用意し、スケジュールをローテーションします。
- コストを監視してください。Object Lockはすべてのバージョンを保持するため、保持期間終了後はライフサイクルルールと組み合わせましょう。

## トラブルシューティングチェックリスト

- アップロードがAccessDeniedで失敗する: IAMロールが`PutObjectRetention`を許可しているか確認してください。
- オブジェクトがロックされない: バケットがObject Lock有効で作成され、バージョニングがOnになっているか確認してください。
- 転送が遅い: 転送数を減らすか、接続が弱い場合は帯域制限を使用してください。
- リストアが既存データを削除してしまう: ロックされたバケットから取り込む際は、同期ではなくコピーを使用してください。



バックアップを一度ロックすれば、あとはRcloneViewが自動で安全に保ってくれます。

<CloudSupportGrid />

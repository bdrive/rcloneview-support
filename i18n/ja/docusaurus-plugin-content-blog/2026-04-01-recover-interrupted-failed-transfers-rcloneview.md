---
slug: recover-interrupted-failed-transfers-rcloneview
title: "RcloneViewで中断・失敗したクラウド転送を復旧する方法"
authors:
  - tayson
description: "RcloneViewで中断されたクラウド転送を再開し、部分的なアップロードから復旧し、失敗した同期ジョブを修正します。完了しない大容量ファイル転送に対する実践的なテクニック。"
keywords:
  - resume interrupted cloud transfer rclone
  - recover failed file transfer rcloneview
  - rclone resume partial upload
  - interrupted cloud sync recovery
  - rcloneview transfer failed
  - rclone retry failed transfers
  - cloud upload resume after disconnect
  - partial cloud transfer recovery
  - rclone resume large file upload
  - fix interrupted sync rcloneview
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewで中断・失敗したクラウド転送を復旧する方法

> ネットワーク切断、APIタイムアウト、ノートパソコンのスリープ、停電などはクラウド転送を中断させます。RcloneViewとrcloneには、すべてを最初からアップロードし直すことなく安全に再開できる仕組みが組み込まれています。

数テラバイトをクラウドに転送するのは5分で終わる作業ではありません。長時間実行されるジョブでは、接続の中断はほぼ避けられません。朗報なのは、RcloneViewが内部で使用しているrcloneのインテリジェントな転送エンジンが、まさにこのシナリオのために設計されているということです。CopyとSyncの操作は本質的に冪等（べきとう）であり、再実行すると、すでに転送済みのファイルはスキップされ、中断した箇所から再開されます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rcloneが中断した転送を処理する仕組み

Rcloneは各ファイルを転送する前に、転送元と転送先を比較します。中断後にCopyまたはSyncジョブを再実行すると：

- **すでに転送済みのファイル**はスキップされます（サイズ＋更新日時、またはチェックサムが有効な場合はチェックサムによって判定）。
- **部分的に転送されたファイル**はクリーンアップされ、最初から再転送されます。
- **まだ開始されていないファイル**はキューに入れられ、再開された実行時に転送されます。

つまり、ほとんどの場合、特別な「再開」ボタンは存在しません。同じジョブを再実行するだけです。

## ステップ1 — 同じジョブを再実行する

中断が発生した後、RcloneViewで**Jobs**を開き、同じジョブの**Run**を再度クリックします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Re-run a failed transfer job in RcloneView" class="img-large img-center" />

RcloneViewは以下を実行します。
1. 転送元と転送先を一覧表示します。
2. 転送先にすでに存在するファイルを比較します。
3. 正常に転送済みのファイルをスキップします。
4. 欠落または変更されたファイルのみを転送します。

10,000ファイルのジョブのうち8,000ファイルが成功した場合、再実行にかかる時間は元の時間のほんの一部で済みます。

## ステップ2 — ジョブ履歴で失敗したファイルを確認する

再実行する前に、RcloneViewの**Job History**を確認し、何が失敗したかを把握します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Review failed files in RcloneView job history" class="img-large img-center" />

ログには以下が表示されます。
- どの特定のファイルが失敗したか
- 各失敗のエラーメッセージ
- 失敗が一時的なもの（ネットワークエラー）か、永続的なもの（権限、パスが長すぎるなど）か

永続的なエラーは、再実行する前に修正が必要です。一時的なエラーは再試行で解決します。

## ステップ3 — 部分的にアップロードされた大容量ファイルを処理する

非常に大きなファイル（数GB）の場合、アップロード途中の中断は転送先に部分ファイルを残します。rcloneの動作はプロバイダーによって異なります。

| プロバイダー | 部分ファイルの挙動 |
|----------|-----------------------|
| Amazon S3 / S3互換 | マルチパートアップロード：不完全なパーツは孤立し、rcloneは最初から再試行します |
| Google Drive | 再開可能アップロード：セッションが有効であれば、rcloneはファイルの途中から再開できます |
| OneDrive | 再開可能アップロード：Google Driveと同様です |
| Backblaze B2 | 大容量ファイルパーツ：不完全なアップロードはB2コンソールで確認できます |

**S3の孤立したマルチパートアップロードの場合：** これらは蓄積して費用がかかります。以下の方法でクリーンアップしてください。
- RcloneView Terminal: `rclone cleanup s3-remote:bucket-name`
- または、AWSコンソールのS3 → Your Bucket → Multipart uploadsから

## ステップ4 — `--retries` と `--low-level-retries` を使用する

一時的なエラーで失敗するジョブに対しては、RcloneViewのジョブを自動的にリトライするよう設定します。

**Custom flags**フィールドに以下を追加します。
```
--retries 5 --retries-sleep 10s --low-level-retries 20
```

- `--retries 5` — エラーが発生した場合、ジョブ全体を最大5回再試行します
- `--retries-sleep 10s` — 再試行の間に10秒待機します
- `--low-level-retries 20` — 個々の低レベル操作（API呼び出し）を最大20回再試行します

## ステップ5 — チェックサムの不一致を処理する

転送が中断された後、チェックサム検証を有効にして再実行することで、データの整合性を確保できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer integrity with folder comparison" class="img-large img-center" />

RcloneViewでは、ジョブ設定で**Checksum verification**を有効にします。これにより、rcloneは（サイズ／更新日時だけでなく）ファイルの内容を比較するよう強制されます。処理は遅くなりますが、部分的に書き込まれたファイルを確実に検出して再転送します。

## ステップ6 — ファイルを削除してしまったSyncから復旧する

Syncジョブが誤った方向で実行された場合（本来とは逆に、転送先の内容で転送元を上書きしてしまった場合）、クラウドプロバイダーのバージョン管理機能から復旧する必要があります。

- **Google Drive**: ゴミ箱またはバージョン履歴（30～180日間利用可能）から復元します。
- **OneDrive**: ごみ箱またはバージョン履歴から復元します。
- **バージョニング有効なS3**: S3コンソールで以前のバージョンから復元します。
- **Backblaze B2**: 有効であればバージョン履歴から復元します。

このため、初回の大容量転送では、Syncではなく（非破壊的な）**Copy**モードの使用を強く推奨します。

## 予防策：耐障害性を考慮した転送設定

最初から転送ジョブに耐障害性を組み込みましょう。

| 設定 | 推奨事項 |
|---------|----------------|
| ジョブモード | 初回移行には**Copy**を使用し、継続的なメンテナンスにはSyncを使用します |
| リトライ | `--retries 5 --retries-sleep 10s` を設定します |
| チェックサム | 重要なデータに対して有効にします |
| 転送数 | 不安定な接続では同時実行数を減らします |
| スケジュール | 安定したネットワーク環境（夜間、VPNオフ時など）で実行します |
| 帯域幅 | ネットワーク飽和によるタイムアウトを防ぐため制限を設定します |

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Job History**を確認し、何が失敗したのか、その原因を特定します。
3. **ジョブを再実行**します。rcloneは完了済みのファイルを自動的にスキップします。
4. 将来の耐障害性のために、**リトライとチェックサム検証を設定**します。

中断された転送のほとんどは、再度Runをクリックするだけで解決します。あとはrcloneが処理してくれます。

---

**関連ガイド：**

- [誤った同期方向によるデータ損失を防ぐ](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)
- [チェックサムで検証されたクラウド移行](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [大容量クラウド転送を高速化する](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />

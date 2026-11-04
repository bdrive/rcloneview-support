---
slug: fix-yandex-disk-sync-errors-rcloneview
title: "Yandex Disk の同期エラーを解決 — RcloneView で失敗した転送を診断して修復"
authors:
  - kai
description: "RcloneView で Yandex Disk の同期エラーを解決：OAuth の再認証、チェッカーとリトライの調整、DEBUG ログの確認、Dry Run と Folder Compare による検証。"
keywords:
  - Yandex Disk 同期エラーの解決
  - Yandex Disk 転送失敗
  - Yandex Disk OAuth 再認証
  - RcloneView Yandex Disk トラブルシューティング
  - Yandex Disk 同期できない
  - rclone Yandex エラー
  - クラウド同期のトラブルシューティング
  - rclone デバッグログ
  - Yandex Disk バックアップ失敗
  - Yandex Disk ジョブエラー
tags:
  - RcloneView
  - yandex-disk
  - troubleshooting
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex Disk の同期エラーを解決 — RcloneView で失敗した転送を診断して修復

> Yandex Disk のジョブがなぜエラーになったのかを突き止め、すべてをコピーし直さずに修復するための手順です。

Job History で Yandex Disk のジョブが「Errored」で終わると困ります。夜間に実行したジョブならなおさらです。失敗の多くはいくつかのグループに分かれます。ログインの期限切れ、低速なバックエンドに対する並列数の過多、パスやフィルターの誤りです。RcloneView には、それらを見分けるための設定とログが用意されています。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Job History と Log タブから確認する

**Job History** を開き、失敗した実行を探します。ステータス、所要時間、合計サイズ、ファイル数から、ジョブが即座に失敗したのか（認証またはパスの可能性）、途中で失敗したのか（スロットリングや特定のファイルの可能性）が分かります。次に、下部の Info View にある **Log** タブで、失敗前後のタイムスタンプ付きエントリを確認します。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView の Job History に表示されたエラーの実行" class="img-large img-center" />

ログが不十分な場合は、Settings > Embedded Rclone で rclone Logging を有効にし、レベルを DEBUG に設定して Restart Embedded Rclone をクリックし、問題を再現します。生成されたファイルから、どの操作が失敗したのかを正確に確認できます。

## 期限切れまたは拒否されたログインを再認証する

Yandex Disk はブラウザーの OAuth で接続します。フォルダー一覧の取得がすぐに失敗する場合や、すべてのファイルで認証メッセージとともにエラーになる場合は、Remote Manager を開いて Yandex Disk のリモートを編集し、ブラウザーでのサインインをもう一度完了してください。その後 Explorer パネルを更新します。一覧が表示されれば、ジョブを実行する前に接続が確認できたことになります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView でリモートを編集して再認証する" class="img-large img-center" />

## 低速なバックエンド向けにジョブ設定を調整する

エラーが大きなジョブでのみ発生する場合は、負荷を下げます。Sync ウィザードの Advanced Settings でファイル転送数を減らし、低速なバックエンドでは equality checkers を 4 以下にしてください（デフォルトは 8）。同期全体のリトライのデフォルト 3 回は一時的な障害に有効なので、有効のままにしておきます。サイズだけでなく内容も確認したい場合は、checksum の有効化を検討してください。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView の詳細なジョブ設定とスケジュール" class="img-large img-center" />

## コピーし直さずに修復結果を確認する

**Dry Run** でまだ転送される内容を確認してから、ジョブをもう一度実行します。**Compare** を開いて Yandex Disk を元データと照合すると、left-only や different のファイルが残りを示すので、それらだけをコピーできます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="残りの差分を確認する Folder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Job History と Log タブで失敗した実行を調べます。
3. 一覧取得に失敗する場合は Yandex Disk のリモートを再認証します。
4. 転送数とチェッカーを下げ、Dry Run のあと再実行して Compare します。

体系的な診断により、漠然とした「Errored」ステータスが、修復可能な短いリストになります。

---

**関連ガイド:**

- [Yandex Disk 容量不足エラーの解決](https://rcloneview.com/support/blog/fix-yandex-disk-quota-full-errors-rcloneview)
- [Yandex Disk のクラウド同期とバックアップを管理](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Yandex Disk を Google Drive と S3 に同期](https://rcloneview.com/support/blog/sync-yandex-disk-google-drive-s3-rcloneview)

<CloudSupportGrid />

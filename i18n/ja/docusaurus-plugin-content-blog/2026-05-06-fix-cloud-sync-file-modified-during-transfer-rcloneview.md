---
slug: fix-cloud-sync-file-modified-during-transfer-rcloneview
title: "転送中のファイル変更を修正 — RcloneViewでクラウド同期の競合を解決"
authors:
  - tayson
description: "RcloneViewで転送中にファイルが変更されることによって発生するクラウド同期エラーを解決します。使用中ファイルの競合、部分アップロード、同期の不整合への対処方法を学びます。"
keywords:
  - fix files modified during cloud transfer
  - cloud sync conflict resolution RcloneView
  - file modified during upload error
  - rclone file in use error
  - cloud sync incomplete transfer fix
  - RcloneView sync conflict
  - file locked during sync troubleshooting
  - partial upload cloud sync fix
  - rclone modified during transfer
  - cloud backup file conflict resolution
tags:
  - troubleshooting
  - tips
  - data-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 転送中のファイル変更を修正 — RcloneViewでクラウド同期の競合を解決

> RcloneViewが同期処理を行っている最中にファイルが変更されると、転送が失敗したり、部分アップロードが発生したり、クラウド上のコピーに不整合が生じたりすることがあります。ここでは各シナリオの検出方法と解決方法を説明します。

クラウド同期エラーのよくある原因の一つは、同期ジョブの実行中にファイルが変更、ロック、または書き込みされることです。アプリケーションによって書き込み中のデータベースファイル、Officeで開かれたドキュメント、実行中のサービスによって追記されるログファイルなどは、いずれも部分アップロードや転送失敗を引き起こす可能性があります。RcloneViewはこれらのエラーをログに明確に表示し、rcloneにはこれらを適切に処理するためのいくつかのフラグが用意されています。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewのログで使用中ファイルのエラーを確認する

同期中にファイルがロックされていたり変更されたりすると、rcloneは通常次のようなエラーを報告します。
- `Failed to copy: file changed under us - trying again`
- `source file is being written to`
- `partial read detected`

RcloneViewでは、これらのエラーはインターフェース下部の**ログタブ**に表示されます。同期ジョブが完了したら、ファイル変更の競合を示す`ERROR`エントリがないかログを確認してください。**ジョブ履歴**ビューでは、ファイルの転送に失敗したジョブについて`Errored`ステータスも表示されます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing file transfer errors in RcloneView" class="img-large img-center" />

## --ignore-errorsと再試行ロジックを使用する

デフォルトでは、RcloneViewの同期ジョブには再試行回数(デフォルト: 3回)が設定されており、失敗した転送を自動的に再試行します。一時的にロックされているファイル(例:アプリケーションによって一瞬だけ開閉されるファイル)については、再試行によって次回以降の試行で成功することがよくあります。

一部のファイルが常にロックされている(例:アクティブなデータベースファイル)同期ジョブの場合は、同期ジョブ設定のカスタムrcloneフラグに`--ignore-errors`を追加してください。これにより、rcloneは一部のファイルが失敗しても他のファイルの同期を続行し、可能な限り同期を完了させたうえで、失敗内容をログに記録して後で確認できるようにします。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring sync job settings to handle file-in-use errors in RcloneView" class="img-large img-center" />

## アクティブなアプリケーションファイルを同期から除外する

使用中ファイルの競合に対する最良の長期的な解決策は、常にアクティブに使用されているファイルを同期ジョブの対象範囲から除外することです。RcloneViewのフィルタリング設定(同期ウィザードのステップ3)では、カスタム除外ルールがサポートされています。

- SQLiteデータベースを除外する: アクティブなwrite-aheadログを除外するために`*.db-journal`と`*.db-wal`を追加
- Officeの一時ファイルを除外する: Word/Excelのロックファイルを除外するために`~$*`を追加
- 書き込み中のログファイルを除外する: `*.log`または特定のパターンを追加

これらのフィルターにより、RcloneViewはジョブ実行中に確実に使用中となるファイルを同期しようとしなくなり、このエラーカテゴリ自体を排除できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up file exclusion filters to avoid sync conflicts in RcloneView" class="img-large img-center" />

## ドライランを実行してフィルターの有効性を確認する

除外フィルターを追加した後は、同期ジョブの**ドライラン**を実行し、除外したファイルが転送リストに表示されなくなったことを確認してください。ドライランの出力にはコピーされる予定のすべてのファイルが表示されます。実際の同期を実行する前に、アクティブなデータベースファイル、ロックファイル、開いているドキュメントがリストに含まれていないことを確認しましょう。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using dry run to verify filtered file list before syncing in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 同期が失敗した後は、ログタブとジョブ履歴でファイル変更エラーを確認します。
3. 常に使用中となるファイルについては、同期ウィザードでカスタム除外フィルターを追加します。
4. ドライランを実行してフィルターが正しく機能していることを確認し、その後同期ジョブを再実行します。

RcloneViewで使用中ファイルの競合を処理するには、どのファイルを除外すべきか、そして再試行をどう設定するかを理解することが重要です。一度正しく設定すれば、同期ジョブは毎回クリーンに実行されるようになります。

---

**関連ガイド:**

- [転送後にクラウド同期でファイルが見つからない問題を修正 — RcloneViewで解決](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [RcloneViewにおけるフィルタールールと選択的同期](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneViewで中断・失敗した転送を復旧する](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />

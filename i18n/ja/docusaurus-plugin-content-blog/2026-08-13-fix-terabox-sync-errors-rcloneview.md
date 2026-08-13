---
slug: fix-terabox-sync-errors-rcloneview
title: "Teraboxの同期エラーを解決する — RcloneViewでの対処法"
authors:
  - morgan
description: "接続タイムアウトから転送の停止まで、RcloneViewでよくあるTeraboxの同期失敗をログ、リトライ、フィルターを使って診断し解決します。"
keywords:
  - Terabox 同期エラー
  - RcloneView トラブルシューティング
  - Terabox 接続の問題
  - 同期エラーの解決
  - クラウド同期のトラブルシューティング
  - Terabox タイムアウト
  - rclone terabox
  - 停止した転送の修正
tags:
  - RcloneView
  - terabox
  - troubleshooting
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Teraboxの同期エラーを解決する — RcloneViewでの対処法

> 停止、タイムアウト、または途中で失敗するTeraboxの同期ジョブは、たいてい限られた原因に行き着きます。RcloneViewのログ、リトライ設定、ドライラン機能を使えば、その原因を簡単に切り分けられます。

Teraboxの無料枠ストレージはバックアップ先として人気がありますが、そのAPIは、特に小さなファイルが多い場合や大量の一括アップロード時など、継続的な転送負荷の下では大手プロバイダーほど寛容ではないことがあります。RcloneView上のTeraboxジョブがエラーを報告したり、単に進行が止まったりした場合、もう一度実行ボタンを押すだけで解決することはほとんどありません。ジョブが接続数の上限、セッションの期限切れ、ファイルレベルの問題のどれに該当するかを特定し、それに応じてジョブ設定を調整することが重要です。RcloneViewはマウントだけでなくフォルダーの同期と比較も行えるため、再試行の前に何が転送され、何が転送されなかったかを正確に確認できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## よくあるTerabox同期失敗のパターン

RcloneViewにおけるTeraboxのエラーの大半は3つのグループに分類されます。接続エラーは転送途中のタイムアウトや接続拒否として現れ、通常は同時転送数が多すぎてTeraboxのレート制限に一度に達することが原因です。認証エラーはTeraboxのセッショントークンが期限切れになったときに発生し、それまで正常に動作していたジョブが突然失敗する形で現れます。ファイルレベルのエラー — 他のジョブは完了するのに特定の1ファイルだけが繰り返し失敗する場合 — は、サポートされていないファイル名の文字や、転送中にTerabox側でファイルが変更されたことを示していることが多いです。

まず**Transferringタブ**を確認して、どのカテゴリに該当するかを見極めましょう。すべてのファイルで即座に失敗するジョブは認証の問題を示唆し、散発的にファイルが失敗するジョブはレート制限や接続の不安定さを示唆します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでTeraboxリモートを再接続する" class="img-large img-center" />

## ログとジョブ履歴を確認する

**Settings > Embedded Rclone > Enable rclone Logging**で詳細ログを有効にし、問題を再現する前にログレベルを**DEBUG**に設定します。これにより、Teraboxが返した正確なAPIレスポンスが記録され、ジョブダイアログに表示される概要エラーよりもはるかに有用な診断情報が得られます。Job Managerの**Job History**には、失敗した実行がCompleted、Errored、Canceledのいずれであったかが、合計サイズやファイル数とともに記録されます。これは、エラーが開始直後(認証の可能性)に発生したのか、途中(レート制限の可能性)で発生したのかを見極めるのに役立ちます。

セッションが期限切れの場合は、ジョブを再試行する前に**Remote Manager**からTeraboxリモートを再接続して認証情報を更新してください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneViewでTeraboxのジョブ履歴とエラー状態を確認する" class="img-large img-center" />

## リトライ、転送数、フィルターを調整する

レート制限による失敗の場合は、ジョブウィザードのステップ2で**Number of file transfers**と**Number of multi-thread transfers**を下げてください — 同時接続数を減らすことで、Teraboxがジョブ途中でセッションを制限する可能性を下げられます。**Retry entire sync if fails**をデフォルトの3から増やすと、一時的な失敗が手動介入なしに自動的に回復する機会が増えます。

特定のファイル形式が繰り返し失敗する場合は、ステップ3でカスタムフィルターを追加して一時的に除外し、残りの同期を完了させてから、そのファイルを個別に調査してください。その後**ドライラン**を実行すれば、調整したジョブを確定する前に除外が正しく機能しているか確認できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneViewで再試行されたTeraboxの同期ジョブを監視する" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. エラーを再現する前に、Settings > Embedded RcloneでDEBUGログを有効にします。
3. Job Historyを確認し、失敗が初期(認証)なのか散発的(レート制限)なのかを特定します。
4. 転送数を下げるかリトライを増やし、ドライランで修正を確認します。

Teraboxの制限に合わせて設定を調整すれば、同期ジョブが静かに失敗することがなくなり、安定して完了するようになります。

---

**関連ガイド:**

- [RcloneViewでTeraboxのクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-terabox-cloud-sync-backup-rcloneview)
- [RcloneViewでTeraboxの無料ストレージを他のクラウドに同期する](https://rcloneview.com/support/blog/sync-terabox-free-storage-other-clouds-rcloneview)
- [クラウド同期の停止・ハングを解決する — RcloneViewでの対処法](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />

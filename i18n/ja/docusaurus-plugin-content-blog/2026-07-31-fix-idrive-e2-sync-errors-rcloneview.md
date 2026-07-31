---
slug: fix-idrive-e2-sync-errors-rcloneview
title: "IDrive e2の同期エラーを修正する — RcloneViewでS3互換ストレージのトラブルシューティング"
authors:
  - kai
description: "アクセスキーの問題から転送の停止、ファイルの不一致まで、RcloneViewでよくあるIDrive e2の同期エラーを明確なステップバイステップの解決策で修正します。"
keywords:
  - idrive e2 同期エラー
  - idrive e2 rcloneview 修正
  - idrive e2 アクセスキーエラー
  - idrive e2 接続タイムアウト
  - idrive e2 アップロード失敗
  - rcloneview トラブルシューティング
  - idrive e2 s3 同期
  - idrive e2 バックアップエラー
  - s3互換ストレージ エラー
  - クラウドストレージ トラブルシューティング
tags:
  - RcloneView
  - idrive-e2
  - troubleshooting
  - tips
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IDrive e2の同期エラーを修正する — RcloneViewでS3互換ストレージのトラブルシューティング

> IDrive e2の同期ジョブが認証情報を拒否したり、転送途中で止まったり、ファイルの不一致が残ったりしていませんか？**RcloneView**は原因を特定し、転送を再開させるための可視性を提供します。

IDrive e2はS3互換のオブジェクトストレージサービスであるため、ほとんどの同期問題は同じ数種類の原因にたどり着きます — 誤ったアクセスキーのペア、間違ったリージョンエンドポイント、あるいは途中でネットワークの不具合が発生した転送です。RcloneViewはFREEライセンスでもIDrive e2にフル読み書きアクセスで接続でき、Job History、Logタブ、Dry Runツールを使えば、当てずっぽうに再実行する代わりに、ジョブがどこで失敗したかを正確に特定できます。このガイドでは、最もよくあるIDrive e2の同期エラーと、RcloneView内でそれぞれを解決する方法を紹介します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## アクセスキーまたは認証が拒否される

IDrive e2リモートが突然認証エラーを返す場合、最も多い原因は、RcloneViewでリモートを設定した後にIDrive e2側で再生成または失効したアクセスキーIDまたはシークレットアクセスキー、あるいはアカウントのリージョンと一致しなくなったエンドポイントURLです。

**修正方法:**

Remote Managerを開き、IDrive e2リモートを選択して、IDrive e2ダッシュボードから現在のアクセスキーIDとシークレットアクセスキーを再入力します。エンドポイントフィールドがIDrive e2アカウントに表示されている正確なリージョンと一致しているか再確認してください。エンドポイントが一致しないと、誤ったキーと同じ拒否エラーが発生します。それでもリモートが失敗する場合は、削除してNew Remoteウィザードでクリーンな設定を作り直してください。

<img src="/support/images/en/blog/new-remote.png" alt="Reconfiguring an IDrive e2 remote in RcloneView" class="img-large img-center" />

## Job Historyで同期ジョブが停止またはエラーになる

バケットの一部だけをコピーした後「Errored」と表示されたり、途中でフリーズしたように見えるジョブは、通常、一時的なネットワーク切断、S3エンドポイントの一時的なレート制限、または残りのバッチをブロックする問題のある名前を持つ単一オブジェクトが原因です。

**修正方法:**

Job Historyを確認し、「Errored」でフィルタリングして、正確にどの実行とタイムスタンプが失敗したかを確認します。ジョブウィザードのStep 2で「Retry entire sync if fails」の回数を増やしてください — デフォルトの3回で一時的な失敗のほとんどが自動的に回復します。特定のオブジェクトが失敗し続ける場合は、Step 3のカスタムフィルタルールで除外し、残りの転送が完了することを確認します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Adjusting retry settings for an IDrive e2 sync job in RcloneView" class="img-large img-center" />

## アップロードが遅い、またはスロットリングされる

オブジェクトストレージのエンドポイントは、同時ストリームを開きすぎる接続をスロットリングすることがあり、これは転送失敗ではなく、想定よりはるかに遅いアップロード速度として現れます。

**修正方法:**

同期ウィザードのStep 2で「Number of file transfers」と「Number of multi-thread transfers」の値を下げてください — 同時実行数が多いと、一部のS3互換バックエンドでスロットリングが発生することがあります。変更後、Transferringタブで速度が安定したか確認し、再試行されたファイルが不要に再転送されないようチェックサム比較を有効にしてください。

## 同期後にファイルが一致しない

同期完了後にIDrive e2上のオブジェクト数やサイズがソースと一致しない場合、通常はストレージ側のバグではなく、同期方向の誤りや、意図した以上に除外しているフィルタルールが原因です。

**修正方法:**

実際の同期の前にDry Runを実行し、何がコピー・削除されるかを正確にプレビューすることで、バケットに影響が及ぶ前に方向の誤りを検出します。次に、ソースとIDrive e2リモートの間でFolder Compareを使用します — Folder Compareのサイズ変化検出ツールがどのフォルダが異なるかを素早く表示し、同期と比較の両方がRcloneViewのFREEライセンスで利用できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing source and IDrive e2 bucket contents in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 認証が失敗している場合は、IDrive e2リモートを再入力または再作成します。
3. Job Historyで正確な失敗ポイントを確認し、それに応じてリトライ、フィルタ、スレッド設定を調整します。
4. 修正後はDry RunとFolder Compareを実行し、今後の同期がクリーンであることを確認します。

まずJob History、次にDry Run、そしてCompareという短い診断ルーチンで、ターミナルを開くことなくほとんどのIDrive e2同期の問題を解決できます。

---

**関連ガイド:**

- [IDrive e2ストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [IDrive e2をS3互換クラウドバックアップとして管理する — RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [RcloneViewでS3マルチパートアップロードの失敗を修正する](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />

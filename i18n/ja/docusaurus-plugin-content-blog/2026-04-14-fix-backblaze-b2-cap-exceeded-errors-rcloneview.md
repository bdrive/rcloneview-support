---
slug: fix-backblaze-b2-cap-exceeded-errors-rcloneview
title: "Backblaze B2のキャップ超過エラーを修正 — RcloneViewで解決"
authors:
  - tayson
description: "RcloneViewでBackblaze B2のキャップ超過エラーを診断・修正する方法を解説します。転送レートを制御し、日次キャップを管理して、B2バックアップを安定して運用しましょう。"
keywords:
  - Backblaze B2 cap exceeded error
  - B2 daily cap limit rclone
  - fix Backblaze B2 errors RcloneView
  - B2 transfer cap exceeded
  - Backblaze B2 troubleshooting
  - rclone B2 rate limit
  - Backblaze B2 backup errors
  - B2 upload cap fix
tags:
  - troubleshooting
  - backblaze-b2
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2のキャップ超過エラーを修正 — RcloneViewで解決

> Backblaze B2の日次ダウンロードキャップは、同期の途中で転送を停止させることがあります。RcloneViewでキャップ超過エラーを診断し、制限内に収まるようにジョブを設定する方法をご紹介します。

Backblaze B2は、Cloudflareとピア接続されたネットワークへの送信については寛大な無料枠を提供していますが、非ピア接続先へのダウンロードは日次キャップを消費します。このキャップに達すると、B2はHTTP 403エラーとともに「cap exceeded」というメッセージを返し、RcloneViewの同期ジョブが失敗または停止する原因となります。本ガイドでは、エラーの特定方法、転送設定の調整方法、B2アカウントの日次制限内に収めるためのジョブのスケジューリング方法を順を追って説明します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## キャップ超過エラーの特定

B2のキャップを超過すると、RcloneViewはインターフェース下部の**Logタブ**にエラーを表示します。`403 Forbidden`と`Transaction cap exceeded`または`Download cap exceeded`というメッセージを含むエントリが表示されます。Transferringタブの転送モニターでは、該当ジョブが0 B/sで停止していることが確認できます。

Rcloneターミナル（Terminalタブ）を開き、`rclone about b2-remote:`を実行して現在のストレージおよびトランザクション使用量を確認してください。ターミナルでは正確なキャップ上限は表示されません（これはBackblazeコンソール側で設定されます）が、リモートへの到達性とアカウント全体の状態を確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Checking Backblaze B2 remote configuration in RcloneView" class="img-large img-center" />

## キャップ超過を避けるための転送設定の調整

最も効果的な対策は、ダウンロードを複数日に分散させるために転送帯域幅を制限することです。RcloneViewのGlobal Rclone Flags（SettingsタブEmbedded RcloneGlobal Rclone Flags）に`--bwlimit 10M`を追加し、帯域幅を10 MB/sに制限します。これにより日次のデータ消費量が抑えられ、大規模な同期やリストアを実行する際にもB2のキャップ内に収まります。

スケジューラーによってトリガーされるジョブについては、実行を1日の中で分散させてください。午前6時に200 GBのリストアを一度に実行する代わりに、フォルダの階層でジョブを分割します。フィルタールールを使用して、まず`Archive/2023/`を処理し、続いて`Archive/2024/`を正午の別ジョブで処理します。RcloneViewの同期ウィザードのStep 3にあるカスタムフィルタールールを使えば、フォルダパスの除外によって各バッチを簡単に分離できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Backblaze B2 jobs to avoid daily cap in RcloneView" class="img-large img-center" />

## キャップリセット後の失敗した同期の復旧

Backblaze B2のキャップは太平洋時間の深夜0時に毎日リセットされます。キャップ超過エラーによりジョブが失敗した場合でも、RcloneViewの同期は冪等（idempotent）です。リセット後に同じジョブを再実行すると、すでに転送済みのファイルをスキップし、中断した箇所から再開します。Folder Compare機能を使えば、送信元と送信先を比較することで、失敗前にどのファイルが完了していたかを確認できます。

念のため、ジョブウィザードのStep 2で**Retry entire sync if fails**を有効にし（3回のリトライに設定）、キャップがリセットされるのに十分な間隔をリトライ間隔に設定してください。Job Historyタブを定期的に確認して失敗を早期に検知し、新しい転送をスケジュールする前にキャップの状況を確認しましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Backblaze B2 job failure history in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. B2ジョブが失敗した後、Logタブで`403 cap exceeded`エラーを確認します。
3. Global Rclone Flagsに`--bwlimit`を追加し、日次のデータ消費量を制限します。
4. 日次キャップがリセットされた後、同期ジョブを再実行します。RcloneViewは転送済みのファイルを自動的にスキップします。

慎重なスケジューリングと帯域幅制限により、日次キャップの制約内で運用する場合でも、Backblaze B2は費用対効果の高いバックアップ先であり続けます。

---

**関連ガイド:**

- [RcloneViewでBackblaze B2からAWS S3へ移行する](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [RcloneViewでクラウド同期の中断・ネットワーク再試行を修正する](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)
- [RcloneViewにおけるカスタムRcloneフラグと高度なオプション](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />

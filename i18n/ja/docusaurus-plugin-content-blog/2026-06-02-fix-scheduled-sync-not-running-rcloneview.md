---
slug: fix-scheduled-sync-not-running-rcloneview
title: "スケジュール同期が実行されない問題を解決 — RcloneViewの自動クラウドジョブをトラブルシューティング"
authors:
  - steve
description: "開始しない、または誤ったタイミングで実行されるRcloneViewのスケジュール同期ジョブを診断・修正します。ライセンス確認、cron構文、起動設定、ログ確認まで解説します。"
keywords:
  - rcloneview scheduled sync not running
  - fix scheduled cloud backup rcloneview
  - rcloneview schedule troubleshooting
  - cloud sync cron job not starting
  - automated cloud backup not running
  - rcloneview plus schedule fix
  - fix cloud sync schedule
  - rcloneview crontab troubleshooting
tags:
  - troubleshooting
  - tips
  - automation
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# スケジュール同期が実行されない問題を解決 — RcloneViewの自動クラウドジョブをトラブルシューティング

> RcloneViewの自動バックアップがスケジュール通りに実行されなくなった、あるいは一度も開始しない場合、本ガイドではライセンス確認からcron構文、起動設定まで、考えられるすべての原因を順を追って解説します。

スケジュールベースの同期は、RcloneViewの最も実用的なPLUS機能の一つです。一度ジョブを設定すれば、手動操作なしでcrontabスケジュールに従って実行されます。動作しなくなった場合、根本原因はほぼ次の4つのいずれかです — ライセンスの問題、スケジュール設定の誤り、ジョブが実行されるべき時刻にアプリが起動していない、またはジョブ自体の中で発生している静かなエラーです。各層を順に確認することで、数分で問題を解決できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 確認1: PLUSライセンスが有効か確認する

スケジュールベースの同期は、PLUSまたはLifetimeライセンス限定の機能です。FREEライセンスではcrontabスケジューリングは有効にならず、FREEライセンス下で保存されたジョブは、そのスケジュールが静かに無効化されます。RcloneViewウィンドウ下部のフッターバーを確認してください — ここにはrcloneのバージョンや接続情報とともに「FREE License」または「PLUS License」が表示されます。

ライセンスがFREEまたは期限切れと表示されている場合は、**Help → Activate License** に移動し、メールアドレスとライセンスキーを再入力してください。割引クーポンはメールアドレスごとに1回限り使用可能なため、同じクーポンで重複してアクティベーションを試みてもサブスクリプションは延長されません — 更新直後にキーが無効と表示される場合はサポートにお問い合わせください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Verifying a sync job is configured and ready to run in RcloneView" class="img-large img-center" />

PLUSが有効であることを確認した後、Job Managerで該当ジョブを再度開き、ステップ4（スケジューリング）が空欄ではなく実際の値で設定されていることを確認してください。以前に保存されたジョブは、PLUSが有効な状態で編集・再保存することでスケジュールが確定する場合があります。

## 確認2: ジョブのステップ4でcrontab構文を確認する

RcloneViewのスケジューラーは、crontab形式の5つのフィールドを使用します: **Minute**（0〜59）、**Hour**（0〜23）、**Day of Week**（0〜6、日曜日=0）、**Day of Month**（1〜31）、**Month**（1〜12）です。フィールドを空欄にすると「毎回」を意味し、値を入力すると「この値のみ」を意味します。最もよくある設定ミスは、誤ったフィールドに`0`を入力すること、または決して一致しない組み合わせ（例: Day of WeekとDay of Monthの両方を指定する場合など）を使用することです。

RcloneViewには、ステップ4に直接**Simulate Schedule**ボタンが用意されています。これをクリックすると、保存前に次に実行される数回分の時刻をプレビューできます。プレビューで予期しない結果（毎分実行される、期待していた曜日がスキップされる、次回の実行が全く表示されないなど）が表示された場合は、フィールドを調整して再度シミュレートしてください。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring crontab schedule fields in RcloneView Job Manager Step 4" class="img-large img-center" />

リスト構文（`1,3,5`）、範囲構文（平日を表す`1-5`）、ステップ構文（4時間ごとを表す`0-23/4`）はすべてサポートされています。例えば、毎日深夜に実行するジョブでは、Minute=`0`、Hour=`0`とし、残りのフィールドは空欄にします。

## 確認3: スケジュール時刻にRcloneViewを起動させたままにする

スケジュールジョブが実行されるには、RcloneViewが**起動して実行中**である必要があります — バックグラウンドのシステムサービスやデーモンとしては動作しません。コンピューターがスリープ状態にある、ユーザーがログアウトしている、またはアプリが終了している場合、その間に実行予定だったスケジュールは静かにスキップされます。

対策は簡単です。**Settings → General**で**Launch at login**を有効にし、OS起動時にアプリが自動的に起動するようにしてください。これに**Start minimized**を組み合わせることで、RcloneViewはデスクトップを妨げることなくシステムトレイに起動しつつ、スケジュールされたすべてのジョブをバックグラウンドで実行し続けます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView running a scheduled sync transfer in the background" class="img-large img-center" />

対象のマシンが夜間に定期的にシャットダウンされる場合は、スケジュールを業務時間内に調整するか、ジョブの実行予定時刻より前にOSがスリープから復帰するよう設定することを検討してください。

## 確認4: ジョブ履歴と転送ログを確認する

ジョブが実行されたように見えても出力が生成されていない場合、まず確認すべきは下部のInfo Viewにある**Job History**タブです。ここではすべての実行がStatus（Completed / Errored / Canceled）、Time Spent、Transfer Speed、File Countとともに記録されます。履歴を「Errored」項目のみでフィルタリングすると、失敗した実行を洗い出せます。各記録は関連するログ出力にリンクしており、そこからネットワークタイムアウト、認証エラー、パスが見つからない、送信先の権限問題といった具体的な失敗原因を特定できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled sync execution records and status" class="img-large img-center" />

さらに詳細な診断が必要な場合は、**Settings → Embedded Rclone**で**Enable rclone Logging**を有効にし、ログレベルを**INFO**または**DEBUG**に設定してください。次回ジョブが実行される（または手動でトリガーされる）と、ログファイルにはrcloneの完全な出力が記録され、失敗の原因となった正確なエラーコードやファイルも含まれるため、断続的な問題であっても根本原因の分析が容易になります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. フッターバーを確認します — crontabスケジューリングにはPLUSライセンスが必要です。
3. 該当ジョブを開く → Edit → ステップ4で、Simulate Scheduleを使ってcron構文を確認します。
4. Settings → Generalで**Launch at login**と**Start minimized**を有効にします。
5. Job Historyでエラーになった実行を確認し、詳細な診断のためにrcloneのログ記録を有効にします。

これら4つの層を体系的に診断することで、スケジュール同期の失敗のほとんどを迅速に解決できます — 推測は不要です。

---

**関連ガイド:**

- [RcloneViewで毎日のクラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [スケジュールのベストプラクティス — RcloneViewにおけるCron、リトライ、モニタリング](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [ジョブ履歴と転送ログ — RcloneViewでのモニタリング](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />

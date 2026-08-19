---
slug: fix-onedrive-throttling-429-errors-rcloneview
title: "OneDriveの429スロットリングエラーを解消する — RcloneViewで信頼性の高い同期を実現"
authors:
  - steve
description: "大規模な同期を妨げるOneDriveの429 Too Many Requestsスロットリングエラーを防ぎましょう — RcloneViewでリトライと転送制限を設定します。"
keywords:
  - OneDrive 429 error
  - OneDrive throttling fix
  - OneDrive too many requests
  - RcloneView OneDrive sync
  - fix OneDrive API rate limit
  - OneDrive sync failed retry
  - reduce OneDrive throttling
  - OneDrive large sync errors
  - Microsoft Graph API throttling
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDriveの429スロットリングエラーを解消する — RcloneViewで信頼性の高い同期を実現

> OneDriveが同期の途中で429 Too Many Requestsを返し始めたら、解決策はやみくもにリトライすることではなく、Microsoft Graph APIへの負荷のかけ方を緩めることです。

OneDriveはMicrosoft Graph APIにリクエストレート制限を課しており、数千の小さなファイルを移動する同期ジョブや他の複数のジョブと同時に実行されるジョブは、その上限をすぐに超えてしまい、転送が途中で停止したり429レスポンスで失敗したりすることがあります。これはクォータやストレージ不足のエラーとは異なります — アカウントには容量の余裕がありますが、リクエストがあまりに速く届くため、Microsoftが一時的にリクエストを拒否しているのです。RcloneViewは転送の並行数とリトライ動作を直接制御できるため、APIを叩き続けて失敗させるのではなく、OneDriveジョブを閾値以下に収まるよう調整できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 429スロットリングエラーの見分け方

下部のInfo ViewにあるLogタブを確認し、OneDriveジョブ中のHTTP 429レスポンスやレート制限に言及するメッセージを探してください — これは、期限切れのトークンやアカウント容量の満杯を示す認証失敗や「クォータ超過」メッセージとは異なります。スロットリングエラーは、少数の大きなファイルよりも多数の小さなファイルが同時に転送されているときに、大規模ジョブの途中でまとまって発生する傾向があります。何度かのリトライの後、間隔を空けながらジョブが最終的に完了する場合、それは組み込みのリトライロジックがすでに自力でスロットリングから回復しているという強いサインです。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing a OneDrive sync job with retries" class="img-large img-center" />

## 同時実行数を減らしてスロットリングを軽減する

最も直接的な対処法は、RcloneViewが一度にOneDriveへ送るリクエスト数を減らすことです。同期ジョブのAdvanced Settingsステップで、ファイル転送数と整合性チェッカー(equality checker)の数を減らしてください — 仕様では、アグレッシブにスロットリングをかけるバックエンドには整合性チェッカーを4以下にすることを推奨しており、OneDriveもそうしたバックエンドの一つです。マルチスレッド転送もデフォルトの4から減らすか、0に設定して完全に無効化することもでき、その場合は生のスループットの一部と引き換えに、レート制限に引っかからずに完了するジョブが得られます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring transfer settings for a OneDrive sync job" class="img-large img-center" />

## リトライに仕事をさせる

RcloneViewの同期ジョブにはデフォルトで3回に設定された「Retry entire sync if fails」設定があり、OneDriveのレート制限は短いクールダウン期間の後にリセットされるため、一時的なスロットリング期間を乗り切るには十分なことが多いです。多数のファイルを移動するOneDriveジョブでは、この値を1(リトライを無効化)に設定しないでください。そうしないと、1回の429レスポンスだけでジョブ全体が自動リトライされずに失敗してしまいます。RcloneViewはWindows、macOS、Linuxを問わず一つのウィンドウから90以上のプロバイダーをマウント・同期できるため、OneDriveがワークフロー内の複数リモートのうちの一つに過ぎないなら、異なるプロバイダーにジョブを分散させることで、最もスロットリングが起きやすいバックエンドへのリクエストの集中を避けられます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a OneDrive sync job to run at off-peak times" class="img-large img-center" />

## スケジュールジョブの時間をずらす

OneDriveの同期ジョブをスケジュール実行している場合は、異なるフォルダを対象にしていても、複数のOneDriveジョブを全く同じ時刻にトリガーしないようにしてください — アカウントが同じであれば、フォルダが異なってもレート制限を共有するためです。PLUSライセンスのユーザーは、crontab形式のスケジュールを数分間隔でずらしてリクエストが積み重ならないようにでき、保存前にスケジュールシミュレーターで次回の実行時刻をプレビューできます。非常に大きな一回限りの転送では、オフピーク時間帯にジョブを実行することでも、同じMicrosoftアカウントに対する他の自動化トラフィックと衝突する可能性を減らせます。

## はじめに

1. まだダウンロードしていない場合は、[rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. 429エラーが発生しているOneDriveジョブを開き、Logタブで失敗のパターンを確認します。
3. Advanced Settingsでファイル転送数と整合性チェッカーの数を減らし、リトライが3以上に設定されていることを確認します。
4. ジョブを再実行し、Transferringタブを見ながら停止せずに完了することを確認します。

途中で失敗して何が実際に転送されたのか分からなくなる速い同期よりも、遅くても確実に完了する同期の方が優れています。

---

**関連ガイド:**

- [OneDriveストレージの管理 — RcloneViewでファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [OneDrive同期エラーの解消 — RcloneViewでの解決方法](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-rcloneview)
- [RcloneViewでクラウドAPIのレート制限エラーを解消する](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />

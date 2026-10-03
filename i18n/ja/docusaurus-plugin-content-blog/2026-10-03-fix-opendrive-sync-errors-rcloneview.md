---
slug: fix-opendrive-sync-errors-rcloneview
title: "OpenDrive の同期エラーを解決 — RcloneView でログイン・アップロード・一覧表示の問題に対処"
authors:
  - kai
description: "RcloneView のジョブ履歴、ログ、Folder Compare を使って、ログイン失敗、アップロードの中断、ファイルの欠落といった OpenDrive の同期エラーを調査します。"
keywords:
  - OpenDrive 同期エラー 解決
  - OpenDrive rclone エラー
  - OpenDrive ログイン失敗
  - OpenDrive アップロード失敗
  - OpenDrive トラブルシューティング
  - RcloneView OpenDrive
  - rclone OpenDrive リモート
  - クラウド同期 トラブルシューティング
  - OpenDrive GUI
tags:
  - RcloneView
  - opendrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDrive の同期エラーを解決 — RcloneView でログイン・アップロード・一覧表示の問題に対処

> OpenDrive の同期が失敗したとき、RcloneView のジョブ履歴、ログ、Folder Compare を見れば、原因が認証情報なのか、転送の負荷なのか、届いていないファイルなのかがわかります。

同期の失敗は、原因を自分から教えてくれることはまれです。ジョブがすぐに停止したり、一部のファイルが欠けた状態で完了したり、フォルダが不完全に見えたりします。やみくもに再実行するのではなく、RcloneView のジョブ履歴を確認し、DEBUG ログを有効にして、両側を比較すれば本当の原因を見つけられます。RcloneView は Windows、macOS、Linux で、1 つのウィンドウから 90 以上のプロバイダーをマウントおよび同期できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 接続と認証情報の問題を切り分ける

ジョブが数秒で失敗する場合は、リモート自体を疑ってください。Remote タブから Remote Manager を開き、OpenDrive のリモートを編集してアカウント情報を再入力します。次に Explorer パネルでリモートを開き、ルートフォルダを参照します。通常どおり一覧表示されれば接続は正常で、失敗の原因は別の場所にあります。

内蔵の Terminal タブで `rclone about "remote:"` を実行して、アカウントが応答するか確認することもできます。`remote` は使用しているリモート名に置き換えてください。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView の Remote Manager で OpenDrive リモートを編集" class="img-large img-center" />

## ジョブ履歴を確認し DEBUG ログを有効にする

Job History を開き、失敗した実行のステータス、所要時間、ファイル数を確認します。途中でエラー終了したジョブは、ログインの不備よりも、特定のファイルや転送負荷の問題を示していることが多くあります。

ファイルごとの正確なメッセージを見るには、Settings > Embedded Rclone で rclone のログを有効にし、レベルを DEBUG に設定して、内蔵の rclone を再起動します。失敗を再現してから、Log タブまたは設定したログフォルダでログを確認してください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="エラーになった OpenDrive ジョブが表示された RcloneView のジョブ履歴" class="img-large img-center" />

## 中断される転送の負荷を下げる

断続的に失敗するアップロードは、同時に移動するファイル数を減らすと改善することがよくあります。同期ウィザードのステップ 2 で、ファイル転送数と equality checker の数を下げてください(低速なバックエンドでは 4 以下が目安です)。「Retry entire sync if fails」は 3 のままにしておくと、一時的な失敗が自動的に再試行されます。

再実行の前に Dry Run を使って、コピーまたは削除されるファイルの一覧が想定どおりか確認しましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView で並列数を下げて OpenDrive ジョブを再実行" class="img-large img-center" />

## Folder Compare で検証する

再実行後、片側にローカルフォルダ、もう片側に OpenDrive を指定して Compare を開きます。left-only、right-only、different のファイルで絞り込むと、まだ欠けている項目や一致しない項目が正確にわかります。ジョブ全体を繰り返すのではなく、それらの項目だけをコピーしてください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OpenDrive 上で欠落しているファイルを表示する Folder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Remote Manager で OpenDrive の認証情報を再入力し、ルートフォルダが表示されることを確認します。
3. 失敗しているジョブの Job History を確認し、DEBUG ログを有効にします。
4. 並列数を下げ、Dry Run を実行してから再実行し、Folder Compare で確認します。

ログと比較から原因を特定できれば、OpenDrive の障害は短く繰り返し可能な修正作業になります。

---

**関連ガイド:**

- [OpenDrive ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [RcloneView で Gofile の同期エラーを解決](https://rcloneview.com/support/blog/fix-gofile-sync-errors-rcloneview)
- [RcloneView でクラウド同期のスタック・ハングを解決](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />

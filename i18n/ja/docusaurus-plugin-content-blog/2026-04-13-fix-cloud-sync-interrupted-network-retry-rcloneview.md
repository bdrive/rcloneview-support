---
slug: fix-cloud-sync-interrupted-network-retry-rcloneview
title: "ネットワークエラーで中断されたクラウド同期を修復 — RcloneViewでリトライして再開する"
authors:
  - tayson
description: "RcloneViewでネットワーク切断によって中断されたクラウド同期ジョブを復旧する方法を解説します。リトライ設定、ジョブ履歴からの再実行、Dry Runを使って中断後の状態を確認しましょう。"
keywords:
  - cloud sync interrupted network RcloneView
  - resume interrupted sync rclone
  - fix network error cloud sync
  - retry cloud sync RcloneView
  - cloud backup network drop fix
  - interrupted transfer recovery
  - rclone network retry settings
  - RcloneView sync resume
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# ネットワークエラーで中断されたクラウド同期を修復 — RcloneViewでリトライして再開する

> クラウド同期中のネットワーク切断は厄介ですが、致命的ではありません。RcloneViewのリトライ機構とジョブ履歴の再実行機能で、転送を確実に軌道に戻せます。

同期の途中でのネットワーク中断は、特に自宅の回線やVPN、従量制の接続での長時間の転送では現実によく起こる問題です。アクティブな同期ジョブの実行中に接続が切れると、すでに転送済みのファイルは無事に残りますが、何が完了し、何が失敗したのか、そしてどう正しく再開すればよいのかを把握する必要があります。RcloneViewはこのようなシナリオをきれいに処理するために、リトライ設定、履歴からのジョブ再実行、そしてDry Runによる検証機能を提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ネットワークが切断されたときに何が起こるか

同期ジョブの実行中にネットワーク接続が失われると、RcloneViewの背後にあるエンジンであるrcloneは、ジョブのリトライ設定に従って失敗した操作の再試行を試みます。リトライ時間内にネットワークが回復しない場合、ジョブは失敗として報告されます。中断前に正常に転送されたファイルは転送先に残ります — これらが破損することはなく、また次回実行時に不要に再転送されることもありません。

重要なのは、RcloneViewの同期ジョブが冪等(べきとう)であるという点を理解することです。同期ジョブを再実行すると、転送元と転送先を比較し、不足しているファイルや変更されたファイルのみを転送します。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing an interrupted sync in RcloneView" class="img-large img-center" />

## リトライ動作の設定

RcloneViewで同期ジョブを開き、ステップ2(転送オプション)に進みます。リトライ設定を確認してください。

- **失敗時に同期全体をリトライ**: このオプションを有効にすると、転送に失敗した場合に同期全体を自動的に再実行します。デフォルトは3回のリトライです。
- **低レベルリトライ**: 個々のファイル転送を失敗と判定するまでに何回再試行するかを制御します(デフォルト: 10回)
- **失敗時のリトライ**: 一時的なエラー(ネットワークタイムアウトを含む)が発生した際に、バックオフを伴う自動リトライをトリガーします

不安定な接続での同期ジョブでは、**同期全体をリトライ**を5回に設定し、**低レベルリトライ**を10回のままにしておくことで、大幅な耐障害性が得られます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring retry settings in RcloneView job options" class="img-large img-center" />

## ジョブ履歴からの再開

リトライを重ねてもジョブが失敗する場合は、**ジョブ履歴**に移動し、失敗した実行を見つけてください。履歴エントリには、何件のファイルが転送され、何件が失敗したかが表示されます。**再実行**をクリックすると、RcloneViewは同じ設定で同じジョブを再度起動します。同期は転送元と転送先の状態を比較するため、すでに転送済みのファイルはスキップされ、残っているファイルや失敗したファイルのみが処理されます。

これは最初からやり直すよりも大幅に速く、転送先に無事到着済みのデータを再アップロードすることも避けられます。

## Dry Runで状態を確認する

ネットワーク中断の後は、特に大容量ファイルの転送中に失敗した場合、現在の同期状態がはっきりわからないことがあります。ジョブで**Dry Run**を有効にして再実行してください。Dry Runは、実際にファイルを移動することなく、次回の実行で何が転送されるかを表示します。これにより、本番の同期を実行する前に、残っているファイル数を明確に把握できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Using Dry Run to verify sync state after network interruption" class="img-large img-center" />

## 大容量ファイルの中断への対処

非常に大きな個々のファイル(数GB単位)の転送では、ファイルの途中でネットワークが切断されると、そのファイルは次回の実行で(クラウドプロバイダーが再開可能なアップロードとrcloneのチャンク転送モードをサポートしていない限り)最初から丸ごと再転送されます。大容量ファイルの再転送オーバーヘッドを最小限に抑えるには、対応している場合(S3互換プロバイダー、Google Drive)、ジョブの詳細設定で**チャンクアップロード**を有効にしてください。これにより、部分的なアップロードを最後に完了したチャンクから再開できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 同期ジョブの設定を開き、**失敗時に同期全体をリトライ**を有効にして、リトライ回数を3〜5回に設定します。
3. ネットワーク中断が発生したジョブについては、**ジョブ履歴**に移動し、**再実行**を使って再開します。
4. 最終的な再実行の前に、**Dry Run**を使って残りの転送範囲を確認します。

適切なリトライ設定とジョブ履歴からの再実行により、ネットワーク中断は同期の失敗ではなく、ちょっとした不便で済むようになります。

---

**関連ガイド:**

- [RcloneViewで中断・失敗した転送を復旧する](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [ジョブ履歴と転送ログの監視](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [RcloneViewでrcloneのエラーをトラブルシューティングする](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />

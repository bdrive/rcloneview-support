---
slug: system-tray-background-sync-rcloneview
title: "システムトレイとバックグラウンド同期 — RcloneViewでクラウドジョブを実行し続ける"
authors:
  - steve
description: "RcloneViewのシステムトレイ統合が、ウィンドウを開いたままにすることなく、バックグラウンドで同期ジョブを実行し続け、クラウドマウントを管理し、ジョブ完了通知を送信する仕組みを解説します。"
keywords:
  - RcloneView system tray background sync
  - cloud sync background mode
  - RcloneView minimize to tray
  - background cloud backup RcloneView
  - RcloneView tray icon jobs
  - cloud sync notifications RcloneView
  - keep cloud sync running background
  - RcloneView continuous backup
tags:
  - RcloneView
  - feature
  - cloud-sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# システムトレイとバックグラウンド同期 — RcloneViewでクラウドジョブを実行し続ける

> RcloneViewのシステムトレイ統合により、アプリを最小化した状態でも同期ジョブの実行、クラウドドライブのマウント、通知の受信をワークフローを中断することなく継続できます。

多くのクラウド同期ツールでは、ジョブが実行中であることを確認するためにウィンドウを開いたままにしておく必要があります。RcloneViewのシステムトレイ対応はこの制約を取り除きます。一度設定すれば、RcloneViewを完全に最小化しても、スケジュールされた同期ジョブ、実行中の転送、マウント済みのクラウドドライブはバックグラウンドで動作し続けます。トレイアイコンから、作業スペースを煩雑にすることなくすべてに素早くアクセスできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## バックグラウンドモードとシステムトレイの有効化

デフォルトでは、RcloneViewはウィンドウを閉じたときに終了する代わりに、システムトレイに最小化するよう設定できます。**「設定」タブ → 「一般」**で**「閉じたときに終了する」**オプションを探してください。これを無効にすると、Xボタンをクリックしたときに完全に終了する代わりに、RcloneViewがシステムトレイに移動するようになります。

**「ログイン時に起動」**を有効にすると、システム起動時にRcloneViewが自動的に起動し、すぐにスケジュールされたジョブの監視を開始します。これを**「最小化した状態で起動」**と組み合わせることで、コンピューターの起動時からRcloneViewをバックグラウンドで静かに実行し続けることができます。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView running in background with system tray active" class="img-large img-center" />

## トレイからのクラウドマウント管理

トレイの最も便利な機能の一つが、クイックマウント管理です。RcloneViewのトレイアイコンを右クリックすると、設定済みのすべてのクラウドマウントとその現在の状態（マウント済みまたは未マウント）の一覧が表示されます。任意の項目をクリックすると、メインウィンドウを開くことなく、クラウドドライブをローカルボリュームとしてマウントしたり、アンマウントしたりして、マウント状態を切り替えられます。

これは、一日を通して複数のクラウドドライブをマウントしたままにしておく専門家にとって特に有用です。開発者であれば、S3バケットをネットワークドライブとしてマウントし、Google Driveをドキュメントアクセス用にマウントし、NASをローカルファイル転送用にマウントしているかもしれません。トレイからそれらすべてを瞬時に制御できます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Quick access to cloud mounts via system tray in RcloneView" class="img-large img-center" />

## ジョブ完了通知

同期ジョブが完了すると（スケジュール実行か手動実行かを問わず）、RcloneViewはジョブ名、所要時間、最終ステータスを表示するデスクトップ通知を出すことができます。この機能は**「設定」タブ → 「インターフェースと通知」 → 「同期完了通知を表示」**で有効にできます。

これにより、大規模な夜間バックアップジョブを開始し、RcloneViewをトレイに最小化しておき、ジョブが完了したときにデスクトップ通知を受け取ることができます。ジョブがエラーになった場合も、すぐに把握できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing background sync completions in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **「設定」 → 「一般」**で**「閉じたときに終了する」**を無効にし、**「ログイン時に起動」**を有効にします。
3. 通常どおり同期ジョブやスケジュールタスクを設定します。
4. RcloneViewを最小化します — ジョブとマウントはバックグラウンドで動作し続けます。

一度設定すれば、RcloneViewはウィンドウを開いたままにする必要なく、クラウドストレージのための静かなバックグラウンドサービスとして動作します。

---

**関連ガイド:**

- [RcloneViewで毎日のクラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [同期完了時の通知アラート — RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [RcloneViewでのメールSMTPジョブ通知](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)

<CloudSupportGrid />

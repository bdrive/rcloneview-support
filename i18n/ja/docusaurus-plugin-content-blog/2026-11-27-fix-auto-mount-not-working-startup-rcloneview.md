---
slug: fix-auto-mount-not-working-startup-rcloneview
title: "起動時の自動マウントが機能しない問題を解決 — RcloneView でクラウドドライブを復元"
authors:
  - steve
description: "再起動後にクラウドドライブが消えた?ライセンス、Launch at login、ドライブ文字、Linux の FUSE、macOS の権限を確認して RcloneView の起動時自動マウントを修正します。"
keywords:
  - 自動マウントが機能しない
  - 起動時にクラウドドライブがマウントされない
  - rcloneview 自動マウント
  - 起動時にクラウドストレージをマウント
  - 再起動後にマウントしたドライブが消える
  - rclone マウント 起動時の修正
  - ログイン時にクラウドドライブを起動
  - linux fuse マウントエラー
  - ドライブ文字の競合 マウント
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 起動時の自動マウントが機能しない問題を解決 — RcloneView でクラウドドライブを復元

> 再起動のたびにクラウドドライブが消えてしまうなら、短いチェックリストでたいていは完全に元に戻せます。

Google Drive や S3 バケットのマウントを設定し、期待どおりに動いていたのに、再起動後にドライブ文字やマウントフォルダーが消えている。自動マウントは複数の設定が連携して初めて機能します。アプリが起動すること、マウントが自動マウントに設定されていること、そして OS がそれを許可していることです。このガイドでは RcloneView で各原因を順に確認します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ライセンスと自動マウント設定を確認する

**Auto Mount on Startup** は PLUS ライセンスの機能です。FREE ライセンスでもマウントとアンマウントはすべて使えますが、起動後に各マウントを手動で開始する必要があります。メインウィンドウのフッターで、どのライセンスが有効かを確認できます。

PLUS が有効なら、Remote タブから **Mount Manager** を開き、そのマウントで **Auto mount** が有効になっているか確認してください。マウントがアクティブな間は Edit が無効になるため、まずアンマウントし、設定を編集してから **Save and mount** を選択します。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView の Mount Manager で自動マウントを有効化" class="img-large img-center" />

## RcloneView が実際に起動しているか確認する

自動マウントは RcloneView の起動時に実行されるため、アプリ自体がログイン時に起動する必要があります。**Settings > General** で **Launch at login** を有効にします。アプリをそのままシステムトレイで起動したい場合は **Start minimized** もオンにしてください。トレイメニューにはマウント済みのドライブが一覧表示され、それぞれを切り替えられます。

**Quit on close** も確認しましょう。これがオンだと、ウィンドウを閉じたときにアプリが終了し、ドライブがアンマウントされます。RcloneView とそのマウントをバックグラウンドで動かし続けるには、オフにしてください。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="RcloneView のエクスプローラーからクラウドフォルダーをマウント" class="img-large img-center" />

## プラットフォーム固有の障害を解消する

**Windows:** マウントが固定のドライブ文字を使っていて、USB メモリやネットワーク共有が先にその文字を使っている場合、マウントは接続できません。**Target** を Auto に設定するか、他で使われていない文字を選んでください。

**Linux:** マウントには FUSE が必要です(fuse3 推奨)。マウントはデフォルトで nfsmount を使用し、アプリには GTK+3 と稼働中の X11 または Wayland デスクトップセッションが必要です。RcloneView は GUI アプリケーションであり、ヘッドレスの systemd サービスとしてマウントを開始することはできません。

**macOS:** マウントポイントが Desktop、Documents、Downloads の中にある場合は、**Privacy & Security > Files & Folders** または **Full Disk Access** で RcloneView にアクセスを許可し、アプリを再起動してください。

## それでも解決しない場合はログを確認する

期限切れの OAuth トークンや起動時のネットワーク遅延も、マウントを妨げる原因になります。Settings > Embedded Rclone で **rclone logging** を有効にし、ログレベルを DEBUG に設定して、組み込み rclone を再起動してから PC を再起動します。ログに正確なエラーが表示されます。認証エラーならリモートを編集して再接続し、ネットワークエラーなら通常はトレイから再度マウントすれば解消します。

<img src="/support/images/en/blog/new-remote.png" alt="認証エラー後に RcloneView でクラウドリモートを再接続" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. PLUS ライセンスを確認し、Mount Manager で各マウントの **Auto mount** を有効にします。
3. Settings > General で **Launch at login** をオンにし、**Quit on close** をオフにします。
4. ドライブ文字、FUSE、macOS の権限の問題を解決し、再起動してテストします。

チェックリストをすべて通過すれば、作業を始めるたびにクラウドドライブが使える状態になります。

---

**関連ガイド:**

- [RcloneView で起動時にクラウドストレージを自動マウントする](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [RcloneView で Windows のマウントドライブ文字の競合を解決する](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)
- [RcloneView で rclone マウントの FUSE エラーを解決する](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />

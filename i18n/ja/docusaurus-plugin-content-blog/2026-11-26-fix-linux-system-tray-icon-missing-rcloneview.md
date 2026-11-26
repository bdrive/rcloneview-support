---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "Linuxでシステムトレイアイコンが表示されない問題を解決 — RcloneViewでバックグラウンドのマウントとジョブを復元"
authors:
  - alex
description: "LinuxでRcloneViewのトレイアイコンが表示されませんか？AppIndicatorライブラリ、デスクトップ設定、RcloneViewのオプションでトレイのマウントとバックグラウンドジョブを復元する方法を解説します。"
keywords:
  - rcloneview トレイアイコン 表示されない linux
  - linux システムトレイ アイコン 表示されない
  - libayatana-appindicator3-1
  - gnome appindicator トレイアイコン
  - rcloneview linux トラブルシューティング
  - rclone gui システムトレイ linux
  - linux バックグラウンド クラウド同期
  - マウントマネージャー システムトレイ
  - rcloneview 最小化で起動
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Linuxでシステムトレイアイコンが表示されない問題を解決 — RcloneViewでバックグラウンドのマウントとジョブを復元

> LinuxでRcloneViewは起動するのにトレイアイコンが表示されない場合、原因はほぼ必ずAppIndicatorライブラリの不足か、トレイアイコンを非表示にするデスクトップ環境です。

RcloneViewのシステムトレイアイコンは単なる飾りではありません。マウント済みドライブの一覧表示、マウントとアンマウントの切り替え、新しいマウントの開始ができ、ジョブがバックグラウンドで実行されている間もアプリにすぐアクセスできます。Linuxでこのアイコンが消えると — 新規インストールしたUbuntu、Fedora、最小構成のデスクトップでよくあることです — メインウィンドウを一日中開いたままにするか、ウィンドウを閉じた後にアプリを見失うことになります。原因の診断と解決方法を紹介します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## トレイアイコンが消える理由

LinuxでRcloneViewは、D-BusとAppIndicatorを通じてデスクトップと連携します。そのためには **libayatana-appindicator3-1** または **libappindicator3-1** のいずれかのライブラリが必要です。どちらもインストールされていない場合、アプリ自体は起動しますが — 起動にはGTK+ 3.0とX11またはWaylandセッションが必要です — トレイアイコンの登録先がありません。

2つ目の原因はデスクトップ環境です。一部のデスクトップ、特にGNOMEは標準ではAppIndicatorアイコンを表示せず、AppIndicator拡張機能を有効にする必要があります。KDE Plasma、Xfce、Cinnamon、MATEは通常、追加の手順なしでアイコンを表示します。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Linuxでトレイアイコンが使えないときに使用するRcloneViewのマウントマネージャー" class="img-large img-center" />

## 手順ごとの解決方法

1. **AppIndicatorライブラリをインストールします。** ディストリビューションのパッケージマネージャーで libayatana-appindicator3-1(まだ提供しているディストリビューションでは libappindicator3-1)をインストールしてください。パッケージ名はディストリビューションごとに少しずつ異なるため、パッケージマネージャーで「appindicator」を検索してください。
2. **デスクトップでトレイサポートを有効にします。** GNOMEでは AppIndicator/KStatusNotifierItem 拡張機能をオンにし、ログアウトして再ログインします。
3. **RcloneViewを完全に再起動します。** ウィンドウを閉じるだけでなくアプリを終了してから再起動し、起動時にトレイへ登録されるようにします。

それでもアイコンが表示されない場合は、下部のInfo Viewにある **Log** タブでエラーを確認するか、Settings > Embedded Rclone でDEBUGレベルのrcloneログを有効にして、サポートに送る詳細情報を収集してください。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Linux上のRcloneViewエクスプローラーからクラウドリモートをマウント" class="img-large img-center" />

## トレイに依存する設定を確認する

General設定のうち2つがトレイと関係しています。**Start minimized** はRcloneViewを直接トレイに起動します — トレイアイコンが機能していないと、アプリがまったく起動していないように見えることがあります。**Quit on close** は、閉じるボタンでアプリを終了するか、バックグラウンドで実行し続けるかを決めます。トレイが直るまではStart minimizedをオフにし、実行中のジョブを誤って止めないようQuit on closeの設定に注意してください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="バックグラウンドジョブの完了を確認するRcloneViewのジョブ履歴" class="img-large img-center" />

## バックグラウンド処理が動作しているか確認する

アイコンが戻ったら、メインウィンドウを閉じて、トレイメニューにマウントが引き続き表示されることを確認してください。ジョブはバックグラウンドで実行を続け、各ジョブの完了時に通知が表示されます。その後、**Job History** で各実行が完了したか、エラーになったか、キャンセルされたかを確認できます。RcloneViewは Windows、macOS、Linux で、1つのウィンドウから90以上のプロバイダーをマウントし、同期します — そしてトレイが、そのウィンドウを邪魔にならない場所に置いてくれます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から .deb、.rpm、または .AppImage として **RcloneViewをダウンロード** します。
2. ディストリビューションのパッケージマネージャーで libayatana-appindicator3-1 または libappindicator3-1 をインストールします。
3. デスクトップ環境がトレイアイコンを隠す場合は、AppIndicatorサポートを有効にします。
4. RcloneViewを完全に再起動し、トレイメニューにマウントが表示されることを確認します。

トレイが機能すれば、クラウドドライブと同期ジョブを画面を占有することなくワンクリックで利用できます。

---

**関連ガイド:**

- [RcloneViewのシステムトレイとバックグラウンド同期](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [UbuntuとDebian LinuxにRcloneViewをインストールする](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneViewでRcloneマウントのFUSEエラーを解決する](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />

---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "Linux でシステムトレイアイコンが表示されない問題を解決 — RcloneView のバックグラウンド操作を取り戻す"
authors:
  - steve
description: "Linux で RcloneView のトレイアイコンが表示されない？ AppIndicator ライブラリをインストールし、デスクトップのトレイ対応を有効にして、マウントとバックグラウンドジョブの操作を取り戻しましょう。"
keywords:
  - rcloneview トレイアイコン 表示されない linux
  - linux システムトレイ アイコン 出ない
  - libayatana-appindicator3-1
  - libappindicator3-1
  - gnome appindicator トレイ
  - rcloneview linux トラブルシューティング
  - linux クラウド マウント トレイメニュー
  - linux GUI バックグラウンド同期
  - rcloneview ubuntu トレイ
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
  - ubuntu
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Linux でシステムトレイアイコンが表示されない問題を解決 — RcloneView のバックグラウンド操作を取り戻す

> トレイアイコンがないと、マウントの素早い切り替えも、最小化したアプリへの復帰も簡単にはできません。アイコンを取り戻す方法を紹介します。

Windows と macOS では、RcloneView のトレイアイコンはそのまま表示されます。Linux では、アプリが制御できない 2 つの要素に左右されます。システム上の AppIndicator ライブラリと、インジケーターアイコンを表示するデスクトップ環境です。どちらかが欠けていても RcloneView 自体は動作しますが、マウント済みドライブの一覧表示、マウントの切り替え、ウィンドウの再表示を行うアイコンは現れません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## アイコンが消える理由

RcloneView は Flutter 製のデスクトップアプリです。Linux では、実行中の X11 または Wayland セッション、GTK+ 3.0、そしてシステムトレイ用の **libayatana-appindicator3-1** または **libappindicator3-1** が必要です。`.deb` と `.rpm` パッケージは Ubuntu 22.04 LTS を基準にビルド・テストされているため、最小構成のインストール、別のディストリビューション、または簡素化されたシステム上で実行する AppImage では、インジケーターライブラリが不足していることがあります。

2 つ目の原因はデスクトップです。一部の環境、特に標準の GNOME では、インジケーター拡張機能を有効にするまで AppIndicator アイコンが表示されません。ライブラリがインストールされていても、アイコンが隠れたままになることがあります。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Linux でトレイアイコンがない場合の代替手段となる RcloneView の Mount Manager" class="img-large img-center" />

## ステップ 1: AppIndicator ライブラリをインストールする

Debian、Ubuntu およびその派生ディストリビューションでは、ディストリビューションのリポジトリから `libayatana-appindicator3-1`（古いリリースでは `libappindicator3-1`）をインストールします。Fedora および RHEL 系のシステムでは、お使いのリリースが提供する ayatana または libappindicator の GTK3 パッケージをインストールしてください。GTK+ 3 が入っていることも確認しましょう。

RcloneView を完全に終了してから再起動します。トレイはアプリの起動時に設定されるため、アプリを開いたままインストールしたライブラリは再起動するまで反映されません。

## ステップ 2: デスクトップでインジケーター対応を有効にする

GNOME では、ディストリビューションの拡張機能マネージャーから AppIndicator/KStatusNotifierItem 拡張機能を有効にします。Ubuntu には最初から有効になったものが同梱されています。KDE Plasma、Xfce、Cinnamon、MATE は、独自のパネルまたは通知領域ウィジェットでインジケーターアイコンを表示します。そのウィジェットがパネルにあり、非表示になっていないことを確認してください。

タイル型ウィンドウマネージャーを使っている場合は、StatusNotifierItem に対応したバーを追加してください。そうしないと、アイコンを表示する場所がありません。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Linux 上の RcloneView Explorer からクラウドのリモートをマウントする" class="img-large img-center" />

## ステップ 3: 最小化で起動・閉じるときに終了の設定を確認する

トレイアイコンがない状態では、**Start minimized**（最小化で起動）によって RcloneView が起動していないように見えることがあります。見えないトレイに直接起動するためです。アイコンが機能するまでは、**Settings > General** を開いて Start minimized をオフにし、**Quit on close**（閉じるときに終了）をオンにして、ウィンドウを閉じても隠れたプロセスが残らないようにしましょう。

主要な作業にトレイは必要ありません。**Mount Manager** でドライブのマウント・アンマウント、**Job Manager** で保存済みジョブの実行、**Job History** で何が実行され完了したかを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Linux でバックグラウンドジョブを確認する RcloneView の Job History" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から x86_64 または ARM64 向けの `.deb`、`.rpm`、`.AppImage` として **RcloneView をダウンロード**します。
2. `libayatana-appindicator3-1`（または `libappindicator3-1`）をインストールし、GTK+ 3 があることを確認します。
3. デスクトップ環境で AppIndicator 対応を有効にし、RcloneView を完全に再起動します。
4. アイコンが表示されてトレイからマウントにアクセスできるようになったら、**Start minimized** を再び有効にします。

マウント専用ツールとは異なり、RcloneView は FREE ライセンスでも同期とフォルダ比較を利用でき、トレイアイコンが戻ればそのすべてにワンクリックでアクセスできます。

---

**関連ガイド:**

- [システムトレイとバックグラウンド同期 — RcloneView でクラウドジョブを動かし続ける](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [Ubuntu・Debian Linux に RcloneView をインストールする方法 — 完全セットアップガイド](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView で rclone のマウントと FUSE のエラーを解決する](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />

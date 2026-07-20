---
sidebar_position: 4
description: RcloneViewの直感的なGUIを使って、Dropboxと Google Drive の間でファイルを簡単に転送・同期する方法を学びましょう。ターミナルやスクリプトは一切不要です。
keywords:
  - rcloneview
  - Dropbox
  - google drive
  - cloud to cloud transfer
  - cloud transfer
  - file synchronization
  - cloud storage
  - Cloud Migration
  - cloud sync
  - cloud file transfer
  - rclone
tags:
  - RcloneView
  - dropbox
  - google-drive
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - Sync
  - cloud-to-cloud
date: 2025-07-01
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Dropbox から Google Drive への転送ガイド

今日のデジタルワークスペースでは、個人利用、チームでの共同作業、クロスプラットフォームの同期など、さまざまな目的で複数のクラウドストレージサービスを使い分けることが一般的になっています。

**Dropbox** はそのシンプルさと高速なファイル同期で、特にチーム利用者の間で知られています。一方**Google Drive** は Google Workspace(Docs、Sheets、Gmail など)との深い連携と、無料で使える大容量ストレージが魅力です。あるサービスの容量が足りなくなったり、利便性や共同作業のためにファイルを一箇所にまとめたくなったりすると、クラウドプラットフォーム間でのデータ転送が必要になります。

手動でファイルをダウンロードし、再アップロードする作業は時間がかかり、ミスも起きやすいものです。そこで役立つのが **RcloneView** です。

**RcloneView** は [Rclone](https://rclone.org) のグラフィカルインターフェースで、コマンドラインツールを使わずにクラウド間のファイル転送を簡単に行えるように設計されています。RcloneView を使えば、次のことが可能です。

- デュアルペイン画面で Dropbox と Google Drive を接続してブラウズできる
- ドラッグ&ドロップまたは同期操作でファイルを転送できる
- 移動前にフォルダの差分をプレビューできる
- スケジュールジョブで定期的な転送を自動化できる

サービスの乗り換え、重要なデータのバックアップ、アカウント間のファイル同期など、どのような場合でも**RcloneView なら Dropbox から Google Drive への転送を簡単かつ確実に行えます**。コードを一行も書く必要はありません。

  <img src="/support/images/en/tutorials/dropbox-to-google-drive-transfer.png" alt="dropbox to google drive transfer" class="img-medium img-center" />
## **なぜクラウド間転送に RcloneView を使うのか?**

RcloneView は Rclone CLI の上に構築された、使いやすいグラフィカルツールです。シンプルなインターフェースで強力な機能を提供します。

- Dropbox と Google Drive の OAuth ベースの安全なログイン
- ファイル操作が簡単なデュアルペインエクスプローラー
- リモート間のドラッグ&ドロップ転送
- コピー前のフォルダ比較
- 同期ジョブの作成とスケジュール設定

大量のデータを同期する場合でも、いくつかのフォルダを移行するだけの場合でも、RcloneView なら数分で作業を完了できます。

## 📙 Dropbox から Google Drive へファイルを転送する

### RcloneView に Dropbox と Google Drive のリモートを追加する

1. **RcloneView** を起動し、`Remote` メニューの **`+ New Remote`** をクリックします。
2. **`Provider`** タブで **Dropbox** を検索して選択します。
3. OAuth ログインを進めます。
4. 同じ手順を繰り返して **Google Drive** を追加します。

👉 詳細な設定手順はこちら:
- [Dropbox リモートの追加方法](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Google Drive リモートの追加方法](/howto/#step-2-adding-remote-storage-google-drive-example)

:::important Dropbox Business への接続について
**Dropbox Business** を利用している場合は、リモートを追加する際にビジネスモードを有効にしてください。

**`Options`** タブの下部にスクロールし、**`Advanced Options`** をクリックして、`dropbox_business` フィールドを見つけて `true` に設定します。

:::
### エクスプローラーペインで両方のリモートを開く

1. **Browse** タブ(起動時のデフォルト画面)を開きます。
2. 左側のペインで `+` をクリックし、**Dropbox** リモートを選択します。
3. 右側のペインで `+` をクリックし、**Google Drive** リモートを選択します。
4. これで両方のストレージを並べて表示・操作できるようになります。

<img src="/support/images/en/tutorials/open-dropbox-and-google-drive.png" alt="open dropbox and google drive" class="img-medium img-center" />
## 🔄 転送方法

### 🖱️ **方法1: ドラッグ&ドロップ**

- Dropbox ペインから Google Drive ペインへ、ファイルやフォルダをドラッグするだけです。
- RcloneView がすぐに転送を開始します。
- **`Transfer`** の Logs タブで進捗を確認できます。

👉 詳しくはこちら: [リモートストレージの参照と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 🔍 方法2: フォルダ内容を比較してからコピーまたは削除する

1. 両方のエクスプローラーペインで、比較したい移動元(例: Dropbox)と移動先(例: Google Drive)のフォルダを選択します。
2. `Home` メニューの **`Compare`** ボタンをクリックしてフォルダ比較を開始します。
3. RcloneView がフォルダ間の差分をハイライト表示します。
       - 片方にのみ存在するファイル
       - 同名だがサイズが異なるファイル
       - 同一のファイル
4. 結果を目視で確認し、操作対象のファイルを選択します。
5. **Copy →** をクリックすると左から右へ、**← Copy** をクリックすると逆方向へコピーします。
       選択したファイルをどちらかの側から削除するには **Delete** を使用します。
6. 転送の進捗と結果はステータスバーとログタブに表示されます。

  この方法を使うと、何をコピー・削除するかを慎重に比較・制御できるため、ミスを最小限に抑えて正確な転送が行えます。

  👉 詳しくはこちら: [フォルダ内容の比較](/howto/rcloneview-basic/compare-folder-contents)

### 🔁  方法3: 同期またはジョブの作成

1. エクスプローラーペインで、**Dropbox** フォルダ(移動元)と **Google Drive** フォルダ(移動先)を選択します。
2. **`Home`** メニューの **`Sync`** ボタンをクリックして同期ダイアログを開きます。
3. 希望する同期方向とオプションを選択し、操作を開始します。
4. 定期的に実行したいタスクや保存しておきたいタスクの場合は、同期ウィンドウの **Save as Job** をクリックするか、
       **`Home`** メニューの **`Job Manager` → `Add Job`** からスケジュールジョブを作成します。

👉 詳しくはこちら:
- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)

### **⏰** 方法4: 自動同期ジョブのスケジュール設定

1. エクスプローラーペインで、自動同期したい **Dropbox** の移動元フォルダと **Google Drive** の移動先フォルダを選択します。
2. **`Home`** または **`Remote`** メニューから **`Job Manager`** を開き、**`Add Job`** をクリックします。
3. 移動元・移動先フォルダが正しいことを確認します。必要に応じて再選択や変更が可能です。
4. **Schedule Editor** を使って、いつ・どのくらいの頻度で同期を実行するかを設定します(例: 毎日深夜0時)。
       RcloneView には組み込みの**プレビューツール**があり、保存前にスケジュールパターンをシミュレーションして確認できます。
5. スケジュールジョブを保存して有効化します。

作成後、ジョブは設定したスケジュールに基づいて**自動的**に実行されます。**ユーザーの操作は一切不要**です。

進捗や結果はすべて **`Job History`** タブで確認でき、ジョブ完了時にはシステム通知で知らせてくれます。

👉 詳しくはこちら: [ジョブのスケジュール設定と実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## ✅ まとめ

RcloneView を使えば、クラウド間の転送はシームレスかつ効率的に行えます。バックアップを一箇所にまとめる場合でも、チーム間でプラットフォームをまたいで同期する場合でも、RcloneView はターミナルコマンドを使わずに作業をスピードアップしてくれます。

ぜひ今すぐ試して、Dropbox ↔ Google Drive のファイルワークフローを簡単にしましょう。

---

## 🔗 関連ガイド

- [Dropbox リモートの追加方法](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Google Drive リモートの追加方法](/howto/#step-2-adding-remote-storage-google-drive-example)
- [リモートストレージの参照と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [フォルダ内容の比較](/howto/rcloneview-basic/compare-folder-contents)
- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジュール設定と実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

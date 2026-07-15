---
sidebar_position: 6
description: "RcloneViewのGUI機能(ドラッグ&ドロップ、比較、同期、スケジューリング、クラウド間の効率性)を使って、OneDriveとDropbox間でシームレスにファイルを転送する方法を学びましょう。"
keywords:
  - rcloneview
  - cloud
  - sync
  - onedrive to dropbox
  - cloud to cloud transfer
  - rclone GUI
  - Onedrive
  - Dropbox
  - rclone
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - onedrive
  - dropbox
  - cloud-to-cloud
date: 2025-07-10
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# RcloneViewで簡単にOneDriveからDropboxへ転送

今日のクラウドファーストなワークフローでは、**OneDrive**や**Dropbox**のような複数のサービスを使い分けることが一般的です。OneDriveはMicrosoft 365とシームレスに連携し、Dropboxは特にチームでの信頼性の高い同期と共有を提供します。しかし、**ファイルを統合**したり、**プラットフォーム間でデータを共有**したり、単に**新しいサービスに移行**したりする必要がある場合、ブラウザでの一般的なドラッグ&ドロップ方式は遅く、中断が発生しやすいものです。大きなフォルダはダウンロードして再アップロードする必要があり、エラーのリスク、帯域幅の消費、時間がかかります。

そこで役立つのが**RcloneView**です。ローカルへのダウンロードを必要とせず、安全で効率的なクラウド間直接転送のGUIを提供します。以下のことができます。

- OAuthログインを使用して**OneDrive**と**Dropbox**の両方に接続  
- デュアルペインインターフェースで両サービスを並べて閲覧  
- ドラッグ&ドロップ、フォルダ比較、または自動化ジョブでファイルを転送  
- バックアップやワークフロー同期のための定期的な転送をスケジュール  

<img src="/support/images/en/tutorials/transfer-files-between-onedrive-and-dropbox.png" alt="transfer files between onedrive and dropbox" class="img-medium img-center" />

## OneDriveからDropboxへファイルを転送する手順

### RcloneViewにOneDriveとDropboxのリモートを追加する  
1. **RcloneView**を開き、**`Remote`**タブに移動します。  
2. **`+ New Remote`**をクリックし、**OneDrive**を選択して、OAuthフローを完了します。  
3. **Dropbox**についても同じ手順を繰り返します。  
   - Dropbox Businessの場合は、*Advanced Options*で`dropbox_business=true`を有効にします。

👉 詳しくはこちら: [ブラウザベースのログインでクラウドリモートを接続する](/howto/remote-storage-connection-settings/add-oath-online-login)

### エクスプローラーペインで両方のリモートを開く  
1. **Browse**タブに移動します。  
2. 左ペインの`+`アイコンをクリックし、**OneDrive**リモートを選択します。  
3. 右ペインの`+`をクリックし、**Dropbox**リモートを選択します。  
4. 両方のサービスが並んで表示され、簡単にファイルを閲覧・移動できるようになります。

<img src="/support/images/en/tutorials/open-onedrive-and-dropbox-remotes.png" alt="open onedrive and dropbox remotes" class="img-medium img-center" />

## 🔄 ファイルを転送する4つの方法

### 🖱️ 方法1: ドラッグ&ドロップ  
- OneDriveペインからDropboxペインへファイルまたはフォルダをドラッグするだけです。  
- 転送はすぐに開始され、進行状況は**`Transfer`**タブに表示されます。

👉 詳しくはこちら: [リモートストレージの閲覧と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 🔍 方法2: フォルダを比較してからコピー/削除  
1. 各ペインで目的のフォルダに移動します。  
2. **`Home`**メニューの**`Compare`**をクリックします。  
3. RcloneViewは以下をハイライト表示します。  
   - OneDriveのみに存在するファイル  
   - Dropboxのみに存在するファイル  
   - 同名だがサイズが異なるファイル  
   - 同一のファイル  
1. ファイルを選択し、**`Copy →`**をクリックしてDropboxへ送信するか、**`← Copy`**をクリックしてDropboxからOneDriveへ取り込みます。  
2. 不要なファイルを削除するには**`Delete`**を使用します。  
3. ステータスバーと**`Transfer`**ログで状況の更新を確認します。

👉 詳しくは[フォルダ内容を比較するガイド](/howto/rcloneview-basic/compare-folder-contents)をご覧ください

### 🔁 方法3: 同期またはジョブとして保存  
1. OneDriveを左(ソース)ペイン、Dropboxを右(送信先)ペインにして、**`Sync`**をクリックします。  
2. 同期方向、フィルター、その他のオプションを選択します。  
3. すぐに実行するか、**`Save as Job`**をクリックして設定を後で実行できるように保存します。

 👉 詳しくはこちら:  
- [リモートストレージを同期する](/howto/rcloneview-basic/synchronize-remote-storages)  
- [同期ジョブを作成する](/howto/rcloneview-basic/create-sync-jobs)  
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)


### ⏰ 方法4: 自動同期ジョブをスケジュールする  
1. **`Home`**メニューから**`Job Manager`**を開き、**`Add Job`**をクリックします。  
2. OneDriveのソースフォルダとDropboxの送信先フォルダを確認します。  
3. スケジューリングを有効にし、繰り返し頻度(毎日、毎週など)を設定します。  
4. 保存してスケジュールを有効化します。  
5. RcloneViewはジョブを自動的に実行します。結果は**`Job History`**で確認できます。

👉 詳しくはこちら: [ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

## ✅ まとめ  

サービスの移行、データのバックアップ、プラットフォーム間の同期のいずれであっても、**RcloneView**はそのプロセスを簡素化します。ドラッグ&ドロップ転送、フォルダ比較、同期、スケジューリングなどの強力な機能により、高速で耐障害性の高い、コード不要のクラウドデータ管理方法を実現できます。

---

## 🔗 関連リソース  

- [OneDrive / Dropboxリモートを追加する](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [リモートストレージの閲覧と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
- [フォルダ内容を比較する](/howto/rcloneview-basic/compare-folder-contents)  
- [リモートストレージを同期する](/howto/rcloneview-basic/synchronize-remote-storages)  
- [同期ジョブを作成する](/howto/rcloneview-basic/create-sync-jobs)  
- [ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)


<CloudSupportGrid />

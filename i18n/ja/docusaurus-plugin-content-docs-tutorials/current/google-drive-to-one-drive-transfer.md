---
sidebar_position: 2
description: "RcloneViewの直感的なドラッグ&ドロップGUIとジョブスケジューラーを使用して、Google DriveとOneDrive間でファイル転送をコピー、同期、スケジュールする方法を学びます。"
keywords:
  - rcloneview
  - Google Drive to OneDrive
  - cloud to cloud transfer
  - file synchronization
  - Cloud Migration
  - cloud storage
  - cloud sync
  - Onedrive
  - google drive
  - job scheduling
  - rclone
  - sync
  - scheduled jobs
  - drag and drop
tags:
  - RcloneView
  - Tutorial
  - cloud-storage
  - cloud-file-transfer
  - cloud-migration
  - google-drive
  - onedrive
  - Sync
  - job
  - cloud-to-cloud
date: 2025-05-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Google Drive から OneDrive への転送ガイド
  

クラウドストレージサービスは、ドキュメント、メディア、バックアップの管理に欠かせない存在となりました。中でも最も広く使われているサービスが**Google Drive**と**Microsoft OneDrive**です。それぞれが大容量のストレージ、生産性ツール(Google WorkspaceおよびMicrosoft 365)との連携、幅広いプラットフォームサポートを提供しています。

両プラットフォームはそれぞれ独自のクラウドエコシステムを提供していますが、**RcloneView**は複雑なスクリプトやコマンドライン操作なしに、両者間でファイルを一元管理・転送・同期できる統合インターフェースを提供します。

このガイドでは、Rcloneをベースに構築されたGUIツールである**RcloneView**を使って、**Google DriveからOneDriveへファイルを転送する**方法を説明します。RcloneViewはマルチクラウドのファイル管理をシンプルかつ強力にします。

<img src="/support/images/en/tutorials/google-drive-to-ondrive-transfer.png" alt="google drive to ondrive transfer" class="img-medium img-center" />

## **クラウド間転送にRcloneViewを使う理由**

RcloneViewはRcloneエンジンをベースに構築された強力なGUIで、クラウドストレージ管理をシンプルにするために設計されています。

- 複数のクラウドプロバイダーを簡単に接続
- ドラッグ&ドロップでファイルを転送できる直感的なインターフェース
- 転送前にフォルダ内容を比較
- ドライラン、フィルター、ジョブスケジューリングなどの高度な機能を備えたシンプルなGUI
- 定期的な転送やバックアップをスケジュール
- Google DriveとOneDriveの安全なOAuthログイン

従来の手動ダウンロード/アップロード方式とは異なり、RcloneViewは直接API操作によってプロセスを自動化し、クラウドストレージ間でのスムーズで無人の転送を実現します。

## 📙 Google DriveからOneDriveへファイルを転送する


### RcloneViewにGoogle DriveとOneDriveのリモートを追加する

1. **RcloneView**を開き、**`Remote`**メニューから**`+ New Remote`**をクリックします。  
2. **`Provider`**タブで**Google Drive**を検索して選択します。  
3. ウィザードを進め、OAuthログインを完了します。  
4. **OneDrive**についても同じ手順を繰り返します。  

 🔍 詳細な設定手順については、以下を参照してください。
 - [Google Driveリモートの追加方法](/howto/#step-2-adding-remote-storage-google-drive-example)
 - [OneDriveリモートの追加方法](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)

### エクスプローラーペインで両方のリモートを開く

1. **RcloneView**を開き、エクスプローラーペインの**Browseタブ**に移動します。  
2. 片方のペインで、ヘッダーの`+`アイコンをクリックし、リストから**Google Drive**リモートを選択します。  
3. もう片方のペインで、`+`アイコンをクリックし、リストから**OneDrive**リモートを選択します。  
4. 両方のリモートが並んで表示され、ファイルやフォルダの間で簡単にコピー、比較、ドラッグ、同期ができるようになります。  

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="open google drive and onedrive" class="img-medium img-center" />

### 📌 ファイル転送の4つの方法

RcloneViewは、Google DriveとOneDrive間でデータを移動または同期するための、いくつもの強力な方法を提供しています。ワークフローに合った方法を選んでください。

#### 🖱️ **方法1: エクスプローラーペイン間でドラッグ&ドロップ**

  
	1. **RcloneView**を開き、**Browse**タブ(起動時にデフォルトで表示される)に移動します。  
	2. 両方のクラウドリモート(Google DriveとOneDrive)がデュアルペインのエクスプローラーに並んで表示されていることを確認します。  
	3. Google Driveペインから**ファイルまたはフォルダをドラッグ**し、OneDriveペインに**ドロップ**するだけです。  
	4. Rcloneのバックグラウンドエンジンによって転送が自動的に開始されます。**`Transfer`**ログタブでリアルタイムに進行状況を確認できます。  

  
この直感的なドラッグ&ドロップインターフェースにより、コマンド不要でファイルの移動やコピーが簡単に行えます。

👉 詳しくはこちら: [リモートストレージの参照と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 **方法2: フォルダ内容の比較、コピー、削除**

  
	1. 両方のエクスプローラーペインで、比較したいフォルダに移動して選択します(左: Google Drive、右: OneDrive)。  
	2. メインメニュータブの**`Compare`**ボタンをクリックしてフォルダ比較を開始します。  
	3. RcloneViewは以下をスキャンしてハイライト表示します。  
		- 片方にしか存在しないファイル  
		- 同じ名前でサイズが異なるファイル  
		- 同一のファイル
	4. 操作したいファイルを選択します。  
	5. 左→右へファイルを転送する場合は、**`Copy →`**ボタンをクリックします。  
		   右→左へ転送する場合は、**`← Copy`**ボタンを使用します。  
		   リモートからファイルを削除する場合は、そのペインの**`Delete`**ボタンをクリックします。  
	6. 進行状況とサマリーの更新はステータスバーに表示されます。  


この視覚的な比較により、移動や削除を行う**前に**ファイルを確認できるため、ミスを最小限に抑えられます。

👉 詳しくは[フォルダ内容の比較ガイド](/howto/rcloneview-basic/compare-folder-contents)を参照してください。


#### 🔁 **方法3: 同期またはジョブを使う**

1. エクスプローラーペインで、同期を維持したい**Google Drive**フォルダと**OneDrive**フォルダに移動して選択します。  
2. `home`メニューの**`Sync`**ボタンをクリックします。  
3. 同期オプション(一方向または逆方向)を選択し、アクションをプレビューして確定します。   
4. RcloneViewが同期を実行し、**`transfer`**ログタブに進行状況インジケーターを表示します。   

- 繰り返しまたはスケジュールされた転送を行う場合は、以下の方法もあります。  

  1. Syncモーダルウィンドウで**`Save to Jobs`**をクリックするか、**`Job Manager`**を開いて**`Add Job`**をクリックします。   
  2. ソースと宛先を設定し、オプションを構成します。   
  3. ジョブを保存し、手動で実行するかスケジュールします。  

 👉 詳しくはこちら:  

- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)  
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)  
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)

#### ⏰ 方法4: 自動同期ジョブをスケジュールする 

1. エクスプローラーペインで、同期を維持したい**Google Drive**フォルダと**OneDrive**フォルダに移動して選択します。  
2. **`Home`**または**`Remote`**メニューから**`Job Manager`**を開き、**`Add Job`**をクリックします。  
3. 選択したソースと宛先を確認し、必要に応じて調整します。  
4. スケジュールエディターを使用して、ジョブを実行するタイミングを定義します。RcloneViewには、保存前にスケジュールパターンをプレビューできる組み込みのシミュレーションツールが用意されています。  
5. スケジュールされたジョブを保存して有効にします。   

保存後、RcloneViewは指定した時刻に自動的に同期を実行します。  

実行の詳細とログは**`Job History`**で確認でき、ジョブが正常に完了すると通知が届きます。

👉 詳しくはこちら: [ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)


## **最後に**

Google DriveとOneDriveのようなクラウドサービス間でのファイル転送は、複雑である必要はありません。**RcloneView**を使えば、数回のクリックだけで完了し、コマンドライン操作は一切不要です。

この方法は、個人ファイルを大量に移動する場合でも、アカウント間で会社の文書を同期する場合でも、高速・安全・確実です。

 🎯 今すぐRcloneViewを試して、マルチクラウド管理を簡単にしましょう。

---

## 🔗 関連ガイド

- [Google Driveリモートの追加方法](/howto/#step-2-adding-remote-storage-google-drive-example)
- [OneDriveリモートの追加方法](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [リモートストレージの参照と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [フォルダ内容の比較ガイド](/howto/rcloneview-basic/compare-folder-contents)
- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)  
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)  
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)
- [ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)


<CloudSupportGrid />

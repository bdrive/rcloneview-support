---
slug: transfer-yandex-and-google-drive-with-rcloneview
title: "RcloneViewでYandex DiskとGoogle Drive間のファイルを転送する"
authors:
  - tayson
description: "RcloneViewのGUIを使ってYandex DiskとGoogle Drive間でファイルを移行・同期する方法—Yandexのネイティブログイン、Google向けOAuth、ドラッグ&ドロップ、Compare、Sync、スケジュールJobsに対応。"
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud migration
  - cloud sync
  - rclone
  - cloud transfer
  - multi cloud
  - cloud to cloud transfer
tags:
  - RcloneView
  - cloud
  - sync
  - cloud-migration
  - tutorial
  - yandex
  - google-drive
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでYandex DiskとGoogle Drive間のファイルを転送する

> コマンドラインを使わずにYandex Disk ↔ Google Drive間でファイルを移動または同期しましょう。  
> RcloneViewは左右並びのExplorerペイン、Compare、Sync、スケジュールJobsを提供し、Yandexのブラウザログインと Google OAuth もすべて代行します。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Yandex ↔ Google Drive間の転送にRcloneViewを使う理由

- ブラウザ経由の**ネイティブなYandexログイン**（WebDAV不要、手動トークン不要）。
- Google Drive向けの安全な**OAuth**ログイン。
- 直感的なドラッグ&ドロップが可能な**左右並びのExplorerペイン**。
- コピーや削除の前に差分をプレビューできる**Compare**モード。
- ドライラン、フィルター、チェックサムに対応した**Sync**。
- 定期バックアップと自動化のための**再利用可能なJobとスケジューリング**。
- ログ、リトライ、帯域制御による**進捗の完全な可視化**。

RcloneViewはrcloneの上にビジュアルなワークフローを構築しているため、複雑なマルチクラウド転送でも手間をかけずに行えます。

---

## 始める前に

- ブラウザログインを使用するため、**Yandexアカウント**にサインインできることを確認してください（WebDAVではありません）。
- **Google Drive**の容量を確認し、Googleの1日あたり750GBのアップロード上限に注意してください。
- 最新のRcloneViewビルドを以下からインストールしてください。  
  👉 https://rcloneview.com/src/download.html
- 大きなジョブの場合は、コンピューターをスリープさせず、安定したネットワークを使用してください。

---

## ステップ1: クラウドリモートを追加する

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  

### Yandex Diskを接続する（ブラウザベースのログイン）

1. **Remote → + New Remote**を開きます。
2. プロバイダーとして**Yandex Disk**を選択します。
3. **Connect**をクリックすると、ブラウザでYandexのログインページが開きます。
4. サインインしてアクセスを許可します。
5. RcloneViewが認証の完了を確認したら、リモートを保存します。  

### Google Driveを接続する

1. 再度**+ New Remote**をクリックします。
2. **Google Drive**を選択します。
3. **Connect**を押し、ブラウザでOAuthログインを完了させて権限を許可します。
4. リモートを保存します。

👉 ガイド: [Google Driveリモートの追加](/howto/#step-2-adding-remote-storage-google-drive-example)

---

## ステップ2: 両方のクラウドをExplorerペインで開く

1. **Browse**タブに移動します。
2. 左側ペインの**+**アイコンをクリック → **Yandex Disk**を選択します。
3. 右側ペインの**+**アイコンをクリック → **Google Drive**を選択します。
4. 移動または同期したいフォルダーに移動します。  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />  

---

## ファイルを転送する4つの方法

### 方法1: Explorerペイン間でドラッグ&ドロップ

1. Yandexペインでファイルまたはフォルダーを選択します。
2. それらをGoogle Driveペインへドラッグします（または逆方向）。
3. **Transfer**で進捗を確認します。  

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />  


👉 参考:  
[リモートストレージの閲覧と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
[ドラッグ&ドロップでファイルを転送](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)  

---

### 方法2: Compareしてからコピーまたは削除

1. Yandex Disk（左）でソースフォルダー、Google Drive（右）でターゲットフォルダーを開きます。
2. **Compare**を選択します。
3. RcloneViewは以下をハイライトします。
   - 片方にのみ存在する項目
   - サイズが異なる項目
   - 一致するファイル
4. 方向に応じて**Copy →**または**← Copy**をクリックします。
5. 重複を整理する際は**Delete**を慎重に使用してください。  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />  


👉 ガイド: [フォルダー内容の比較](/howto/rcloneview-basic/compare-folder-contents)  


---

### 方法3: SyncまたはJobとして保存

1. ソースとして**Yandexフォルダー**、宛先として**Google Driveフォルダー**を選択します。
2. **Sync**をクリックします。
3. 以下から選択します。
   - 片方向同期（Yandex → Google Drive）
   - 片方向同期（Google Drive → Yandex）
   - 双方向同期
4. ドライランを使って予定された操作をプレビューします。
5. 同期を実行するか、**Save to Jobs**をクリックして後で再利用します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  


👉 詳細はこちら:

- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期Jobの作成](/howto/rcloneview-basic/create-sync-jobs)
- [Jobの実行と管理](/howto/rcloneview-basic/execute-manage-job)

---

### 方法4: 定期的な同期Jobをスケジュールする

1. **Job Manager → Add Job**を開きます。
2. Yandexをソース、Google Driveを宛先として選択します（または逆方向）。
3. 間隔を設定します（例: 毎日、毎時、毎週）。
4. Jobを有効にします。
5. 結果についてログとJob履歴を確認します。  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />  

👉 詳細はこちら: [Jobのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## スムーズな転送のためのヒント

- 大きな片方向同期の前には**ドライラン**を使用してください。
- Google Drive APIは非常に大きなバースト転送を制限することがあるため、必要に応じて同時実行数を減らしてください。
- スケジュールJobのためにRcloneViewを実行し続けてください。

---

## まとめ

RcloneViewを使えば、**Yandex Disk**と**Google Drive**間のファイル転送をシンプルかつ確実に行えます。  
両サービスのネイティブログイン、ビジュアルなExplorerペイン、Compare、Sync、Jobsにより、コマンドラインに触れることなくマルチクラウドのワークフローを移行・維持できます。

<CloudSupportGrid />

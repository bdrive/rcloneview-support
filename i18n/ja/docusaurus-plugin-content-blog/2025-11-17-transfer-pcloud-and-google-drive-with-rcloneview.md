---
slug: transfer-pcloud-and-google-drive-with-rcloneview
title: "RcloneViewでpCloudとGoogle Drive間でファイルを転送する"
authors:
  - tayson
description: "再ダウンロードせずにpCloudとGoogle Drive間でデータを移動?RcloneViewでドラッグ&ドロップ、比較、同期、OAuthとマルチスレッドアップロードに対応したスケジュールジョブを活用しましょう。"
keywords:
  - pcloud to google drive
  - google drive to pcloud
  - rcloneview
  - cloud to cloud transfer
  - multi thread upload
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - oauth login
  - resumable transfers
tags:
  - cloud-migration
  - pcloud
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでpCloudとGoogle Drive間でファイルを転送する

> ダウンロードして再アップロードする面倒な作業は不要です。RcloneViewなら、CLIを使わずガイド付きGUIでpCloud ↔ Google Drive間のドラッグ&ドロップ、比較、同期、スケジュール転送が行えます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## マルチクラウド転送にRcloneViewを使う理由

- Google Driveには安全なOAuth、pCloudにはシンプルなメール/パスワード認証を採用。トークンの貼り付けは不要です。
- 進行状況ログとリトライ機能を備えた、マルチスレッドの再開可能なアップロード。
- クラウド間で直接ドラッグ&ドロップできる2ペインのエクスプローラー。
- コピーや整理を行う前に差分をプレビューできる比較機能。
- 包含/除外フィルター、ドライラン、サイズベースの判断が可能な同期機能。
- 定期的な移動作業を自動化するバックグラウンドジョブとスケジューリング。

RcloneViewはrcloneの信頼性とビジュアルなワークフローを組み合わせており、チームや管理者が大きなフォルダーを安心して移動できます。

## 始める前に

- 両方のアカウントにサインインし、クォータとAPI制限を確認してください(Google Driveはユーザーごとに1日あたり750GBのアップロード上限を設けています)。
- 最新のRcloneViewビルドをインストールしてください:[ダウンロード](https://rcloneview.com/src/download.html)。
- pCloudの場合は、メールアドレスとパスワードを手元に用意してください。セキュリティ設定でアプリパスワードが必要な場合は有効化しておきましょう。
- 大容量の転送中は有線接続または安定したWi-Fiを使用し、ジョブが中断されないようRcloneViewを起動したままにしてください。

## ステップ1: クラウドリモートを接続する

1. **リモート → + 新しいリモート**を開きます。
2. **pCloud**を選択し、**メールアドレス**と**パスワード**を入力して保存します。
3. **Google Drive**についても同様に操作し、**接続**をクリックしてOAuthブラウザログインを完了します。
4. 両方のリモートがリモートマネージャーに表示されていることを確認します。

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  
  👉 詳細はこちら:
  - [Google Driveリモートの追加](/howto/#step-2-adding-remote-storage-google-drive-example)
  - [新しいリモートの追加(OAuth)](/howto/remote-storage-connection-settings/add-oath-online-login)

## ステップ2: エクスプローラーペインで両方のリモートを開く

1. **ブラウズ**に移動します。
2. 左ペインで**+**をクリックし、**pCloud**リモートを開きます。
3. 右ペインで**+**をクリックし、**Google Drive**リモートを開きます。
4. 移動元と移動先のフォルダーに移動します。

<!-- Image placeholder: add `/support/images/en/tutorials/open-pcloud-and-google-drive-remotes.png` if available -->
<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="open pcloud and google drive remotes" class="img-medium img-center" />

## pCloud ↔ Google Drive間の4つの転送方法

### 方法1: ペイン間でドラッグ&ドロップ

1. pCloudペインでファイルまたはフォルダーを選択します。
2. Google Driveペインへドラッグします(またはその逆)。
3. **転送**タブで進行状況を確認し、必要に応じて一時停止・再開します。

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />
    
  👉 詳細はこちら:[リモートストレージの参照と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 方法2: 比較してからコピーまたは削除

1. 左側で移動元フォルダー、右側で移動先フォルダーを開きます。
2. ツールバーの**比較**をクリックします。
3. RcloneViewが固有の項目、サイズの差分、一致する項目をハイライト表示します。
4. 移動する項目を選択し、**コピー →**または**← コピー**を選びます。
5. 重複や古いデータを整理する際は**削除**を慎重に使用してください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

👉 詳細はこちら:[フォルダー内容の比較](/howto/rcloneview-basic/compare-folder-contents)

### 方法3: 同期またはジョブとして保存

1. pCloudの移動元とGoogle Driveの移動先を選択します。
2. **同期**をクリックし、一方向または双方向の同期を選択します。
3. 変更内容をプレビューし、フィルター(包含/除外)を調整してから開始します。
4. **ジョブに保存**をクリックすると、同じ設定を後で再利用できます。

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add sync job in job manager" class="img-large img-center" />   
     

👉 詳細はこちら:
- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)


### 方法4: 定期的な同期ジョブをスケジュールする

1. **ジョブマネージャー → ジョブを追加**を開きます。
2. **pCloud**を移動元、**Google Drive**を移動先に設定します(またはその逆)。
3. スケジュール(1時間ごと、毎日、毎週、またはカスタムのcron形式)を選択します。
4. ジョブを有効にし、RcloneViewに自動実行させます。
5. ログと履歴を確認し、実行が成功しているか検証します。

👉 詳細はこちら:[ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="configure job schedule" class="img-large img-center" />

## スムーズな転送のためのヒント

- 大規模な同期の前に**ドライラン**を実行し、計画内容を確認しましょう。
- 業務時間中は**帯域幅制限**を使用してスロットリングのリスクを減らしましょう。
- 暗号化されたpCloudフォルダーについては、アクセスキーを用意するか、移動前にローカルで復号してください。
- Google Driveの1日あたりの上限に近づいている場合は、ジョブを複数日または複数アカウントに分割してください。
- **転送**タブを開いたままにして、リトライ、速度、APIレスポンスを監視しましょう。

## まとめ

RcloneViewは、**pCloud**と**Google Drive**間で高速かつ信頼性の高い、CLI不要の転送を実現します。並列ブラウジング、比較、同期、再利用可能なジョブ、スケジューリングにより、手動でのダウンロードや再アップロードなしに、移行や定期的なバックアップを行うことができます。

<CloudSupportGrid />

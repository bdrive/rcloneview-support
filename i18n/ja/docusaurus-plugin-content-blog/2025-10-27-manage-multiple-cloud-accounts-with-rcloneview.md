---
slug: manage-multiple-cloud-accounts-rcloneview
title: "RcloneViewで複数のクラウドアカウントを一元管理(Google、OneDrive、Dropbox、S3)"
authors:
  - tayson
description: CLIを使わずにGoogle Drive、OneDrive、Dropbox、S3を横断して操作。RcloneViewは複数のクラウドアカウントを統合し、1つの直感的なインターフェースでデータの閲覧、転送、同期を行えます。
keywords:
  - rcloneview
  - 複数のクラウドアカウント
  - google drive
  - onedrive
  - dropbox
  - s3
  - cloud sync
  - rclone gui
  - ファイル移行
tags:
  - google-drive
  - onedrive
  - dropbox
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewで複数のクラウドアカウントを一元管理(Google、OneDrive、Dropbox、S3)

> すべてのクラウドを1つのクリーンなダッシュボードで—コマンドラインを使わずに閲覧、比較、転送、自動化。

クラウドストレージの乱立は現実的な問題です。個人用Gmailと仕事用Googleアカウント、Microsoft 365に紐づいたOneDrive、今もベンダーと共有している古いDropbox、そしてアーカイブ用のS3バケット。異なるポータルへのログイン・ログアウトを繰り返すのは時間の無駄で、何がどこにあるのか把握しづらくなります。RcloneViewはrcloneを活用した単一のビジュアルエクスプローラーにすべてのアカウントを集約することで、この問題を解決します。プレビュー、ドライラン、スケジュール実行によって、プロバイダー間を自信を持って移動できます。

<!-- truncate -->

RcloneViewを使えば、`rclone config`を学んだりフラグを覚えたりする必要はありません。アプリが各アカウントの接続を一度だけ案内し、その接続をコピー、比較、同期のワークフローで使い回せます。以下のような用途に最適です。

- アカウント間でファイルをドラッグしたいだけの一般ユーザー
- 複数のクラウドに散らばったプロジェクトデータを統合するエンジニア
- 複数アカウントのバックアップと移行を標準化するIT管理者

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

### 課題を理解する

- 分断されたUI:各プロバイダーは独自のウェブコンソールを持ち、一括操作に制限があります。
- 異なるAPIとクォータ:Google、Microsoft、Dropbox、S3はいずれも大量のデータ移動時に異なる挙動をします。
- 監査と再現性:ブラウザでの一回限りの手動ドラッグではなく、プレビュー、ログ、スケジュール実行が必要です。

### 統合インターフェースが変えること

- 1つのエクスプローラー:複数のアカウントを並べて開ける—再ログインの繰り返しなし
- 比較優先:コピー前に差分を確認し、重複や思わぬ結果を防止
- ジョブと履歴:同期を保存し、時間外の実行をスケジュールし、監査証跡を残せる

| アプローチ                     | 作業場所        | 差分プレビュー | スケジュール & 繰り返し | マルチプロバイダー     |
| ---------------------------- | --------------------- | ------------------- | ----------------- | ------------------ |
| 各クラウドのネイティブWeb UI         | 別々のブラウザタブ | 限定的             | 手動            | プロバイダー専用      |
| RcloneViewのマルチアカウントGUI | 単一のデスクトップアプリ    | あり(比較機能)       | あり(ジョブ)        | 任意のrcloneバックエンド |



## 準備

1. アカウントと目標を整理する:使用しているアカウント(例:個人用Google Drive、仕事用OneDrive、Dropbox、S3/Wasabi/R2)と、統合・バックアップ・整理といった目的をリストアップします。
2. アクセス権を確認する:必要に応じてログインアクセスまたはAPIキーが必要です。
3. まずは小さく始める:小さなフォルダでテストし、規模を拡大する前にプレビューと結果を検証します。

参考リンク

- [Google OAuthクイックセットアップ](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Microsoft/SharePointサインイン](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
- [S3/Wasabi/R2セットアップ](/howto/remote-storage-connection-settings/s3) · [Cloudflare R2の認証情報](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [Dropbox OAuthセットアップ](/howto/remote-storage-connection-settings/add-oath-online-login)

## RcloneViewでアカウントを接続する

RcloneViewはrcloneの設定をわかりやすいウィザードでラップしています。各クラウドを一度追加すれば、左側のExplorerに表示され再利用できます。

1. RcloneViewを開き→`+ New Remote`をクリックします。

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2. プロバイダーを選択し、案内に従います。
   - Google Drive:OAuthでサインインし、わかりやすい名前を付けます(例:`Drive-Personal`、`Drive-Work`)。参照:[OAuthログインガイド](/howto/remote-storage-connection-settings/add-oath-online-login)
   - OneDrive/SharePoint:Microsoftアカウントでサインインします。参照:[Microsoft/SharePointセットアップ](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
   - Dropbox:RcloneViewのDropbox OAuthウィザードで接続します。参照:[OAuthログインガイド](/howto/remote-storage-connection-settings/add-oath-online-login)
   - S3/Wasabi/R2:エンドポイント/リージョンとキーを設定します。→ [S3接続設定](/howto/remote-storage-connection-settings/s3) · [Cloudflare R2の認証情報](/howto/cloud-storage-setting/cloudflare-r2-credential)
3. 各アカウントについて繰り返します。複数のリモートを同時に開いて、並べて閲覧できます。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 予期せぬ結果なく移動・同期する

RcloneViewは接続したどのアカウント間でも同じ3つのパターンをサポートします。まずは小さなパイロットフォルダから始め、規模を拡大しましょう。

### ドラッグ&ドロップ

左側でソースを、右側でデスティネーションを開き、ファイルやフォルダをドラッグして移動します。

参照:[ドラッグ&ドロップでファイルをコピーする](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### コピー前に比較する

比較機能を実行して、2つのフォルダ間(異なるプロバイダー間でも)で新規・変更・欠落しているものを一覧表示します。スキップしたい項目を選択解除してからコピーします。

参照:[比較結果とファイル管理](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Preview and select differences before copying" class="img-large img-center" />

### 同期とスケジュール

同期機能を使って、選択したフォルダをアカウント間でミラーリングします。必ずドライランを実行してからジョブを保存し、時間外実行をスケジュールしましょう。Job Managerで進捗と履歴を確認できます。

参照:[リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)、[同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)、[ジョブのスケジュールと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure and run a sync job in RcloneView" class="img-large img-center" />

## 実践的なユースケース

- 個人用と仕事用のGoogle Drive:スケジュール同期と明確なログを使って、選択した個人フォルダの読み取り専用ミラーを仕事用アカウントに保持する、あるいはその逆を行う。
- OneDrive ↔ Google Driveのチーム間引き継ぎ:比較機能を使って移行を段階的に準備し、デスティネーションが正となるまで毎晩同期する。
- Dropboxの整理とアーカイブ:あまり使わない共有をS3/Wasabiバケットにドラッグして、コラボレーター用のオンラインコピーを保持しつつ低コストなストレージに移す。
- マルチクラウドバックアップ:日常的なコラボレーションはDrive/OneDriveで行いつつ、S3互換バケットに暗号化アーカイブを維持する。クライアント側の暗号化が必要な場合はrcloneの`crypt`と組み合わせます。参照:/blog/encrypt-cloud-backups-google-drive-onedrive-s3-with-rcloneview

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-account jobs in RcloneView" class="img-large img-center" />

## スムーズな運用のためのヒント

- リモートに明確な名前を付ける:`Drive-Personal`、`Drive-Work`、`OneDrive-DeptA`、`Dropbox-Shared`、`S3-Archive`。
- まずはパイロットで:一括処理の前に、少量のサンプルで比較とコピーを行う。
- クォータを尊重する:Google Driveのアップロード/コピー制限やAPIスロットリングは大規模な実行に影響する可能性があるため、可能であれば夜間にスケジュールする。
- 監査証跡を残す:変更履歴の追跡のためにJob Historyからログをエクスポートする。

## まとめ

RcloneViewは、乱立するログインとブラウザタブを1つの信頼できるワークスペースに変えます。すべてのアカウントを一度接続し、あらゆる変更をプレビューし、繰り返し行う作業をコマンドを一切書かずに自動化しましょう。個人データを統合する場合でも、チームの引き継ぎを調整する場合でも、IT移行を実行する場合でも、統合されたマルチアカウントGUIによってクラウド作業がより速く、より安全になります。

特定のプロバイダーの設定についてサポートが必要ですか?次のガイドをご確認ください。

- Remote Manager概要:[Remote Manager](/howto/rcloneview-basic/remote-manager)
- リアルタイム転送モニタリング:[Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring)
- クラウドをローカルドライブとしてマウント:[クラウドストレージをローカルドライブとしてマウントする](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />

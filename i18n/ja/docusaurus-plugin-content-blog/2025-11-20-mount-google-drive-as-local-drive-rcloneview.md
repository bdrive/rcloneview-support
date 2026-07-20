---
slug: mount-google-drive-local-drive-rcloneview
title: "RcloneViewでGoogle DriveをWindows・macOSのローカルドライブとしてマウントする方法"
authors:
  - tayson
description: RcloneViewを使えば、複雑なCLI手順をガイド付きマウント・キャッシュ・自動化に置き換え、月間4万件以上検索されている「Google Driveのマウント」をクリックだけで実現できます。
keywords:
  - mount google drive windows
  - mount google drive mac
  - google drive local drive
  - rcloneview
  - rclone mount gui
  - google drive file stream alternative
  - map google drive letter
  - mount google drive finder
  - scheduler auto mount
  - multi cloud explorer
tags:
  - RcloneView
  - google-drive
  - mount
  - windows
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでGoogle DriveをWindows・macOSのローカルドライブとしてマウントする方法

> 月間4万人以上が「Google Driveをマウントする方法」を検索しています。RcloneViewなら、CLIに頼りがちなこの作業を、キャッシュ・自動起動・GUI監視付きのワンツークリックのワークフローに変えられます。

`rclone mount` は定評があるものの、OAuthトークン、config用パスワード、WinFsp/macFUSEのインストール、長いフラグ文字列、再起動後に再実行するスクリプトなど、扱いが難しいのも事実です。RcloneViewはこれらすべてをデスクトップアプリにまとめ、ターミナルを使わずにGoogle Drive(他のクラウドも同様)をWindowsでは実際のドライブ文字として、macOSではFinderのボリュームとしてマウントできるようにします。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 自前のCLIマウントよりRcloneViewを選ぶ理由

- **ガイド付きOAuth**: リモートマネージャーが安全なブラウザを起動し、リフレッシュトークンを保存します(詳細は[リモートマネージャー](/howto/rcloneview-basic/remote-manager)を参照)。
- **ドライバーのヘルパー**: WinFspとmacFUSEのプロンプトはインストーラーに組み込まれており、Mountを押す前にRcloneViewが検証を行います。
- **再利用可能なテンプレート**: マウントマネージャーがすべてのGoogle Drive、共有ドライブ、その他のリモートを記憶するため、再起動後もトグル一つで再マウントできます。
- **マルチクラウド管理**: Google Driveをマウントしながら、同じUIからDropboxへの同期、S3バケットの比較、ジョブのスケジュール設定も行えます。
- **監視とスケジューラー**: 内蔵のスケジューラーと転送モニターがスループットを表示し、選択すればマウントを自動的に再起動します。

## ステップ1 -- デスクトップの準備

1. **RcloneViewをインストール**します(rcloneが同梱されています)。Windowsの場合はWinFspのプロンプトを承諾し、macOSの場合はmacFUSEをインストールしてください。
2. Google Driveを表示させたい**外部ドライブ文字やFinderのボリューム名を決める**(例: `G:` や `/Volumes/GDrive`)。
3. **キャッシュ用スペースを決める**: 数GB以上の空き容量があるSSDフォルダを選んでください。後でマウント時にこのフォルダを指定すると、プレビューが高速になります。

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  

## ステップ2 -- Google Drive(と他のクラウド)を接続する

- リモートマネージャーを開き、**Add Remote** -> **Google Drive** をクリックします。[Add OAuth Online Login](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)に記載のOAuth手順に従ってください。
- リモートに `gdrive-main` というラベルを付けます(必要に応じて共有ドライブや、Dropbox、OneDrive、S3などの他のクラウドも追加し、後で比較・同期できるようにします)。
- [Browse and manage remote storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)を使って、よくマウントするフォルダのプリセット(Design、Finance、Shared Drivesなど)を作成します。

  <img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
  


## ステップ3 -- ExplorerまたはマウントマネージャーからGoogle Driveをマウントする

1. デュアルペインのExplorerを起動し、Google Driveのリモートを選択して、ツールバーの**マウントアイコン**をクリックします。
2. **ドライブ文字/ボリューム**を選択し、キャッシュパスを指定して、読み書き、キャッシュモード、帯域幅上限を切り替えます。
3. **Mount** をクリックし、File ExplorerまたはFinderを開いて新しいドライブを確認します。

  <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Google Drive from RcloneView Explorer" class="img-large img-center" />

マウントマネージャー(Tools -> Mount Manager)は、自動起動、再接続、ログイン時起動のスイッチとともにマウントの一覧を保持します。複数のGoogleアカウントを同時に公開することも可能で、通常なら複数のコマンドシェルが必要になる作業です。


## ステップ4 -- マウント以上のワークフローを自動化する

マウントは最初の一歩に過ぎません。RcloneViewはその上にマルチクラウドのワークフローを重ねます。

- マウントを維持したまま[フォルダ内容の比較](/howto/rcloneview-basic/compare-folder-contents)を使って、Google Driveとローカルの SSDやDropboxを**比較・整理**します。

  <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)と[リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)を使って、フォルダ全体を外部ドライブに**同期またはコピー**し、オフラインバックアップを作成します。

  <img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />
  

- マウントしたGoogle Driveから毎晩NASやWasabiへの同期ジョブが手動操作なしで実行されるように、それらのジョブを**スケジュール**します([Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution)を参照)。

  <img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />
  

- OneDrive、Dropbox、S3などの**他のクラウドを並べてマウント**し、まるでローカルディスクのようにFinderウィンドウ間でファイルをドラッグします。

## RcloneViewが可能にするユースケース

- **デザイナー・メディアチーム**: ライブラリ全体をローカルに保存することなく、AdobeやDaVinci Resolveへ直接アセットをストリーミングできます。
- **開発者・DevOps**: 設定ファイル用に共有ドライブをマウントし、Compareやsyncジョブをスクリプト化してステージング/本番のバケットへ反映できます。
- **監査・コンプライアンス**: レビュアー向けにGoogle Driveを読み取り専用でマウントしつつ、スケジューラーによってS3や外部ドライブへ不変のコピーを継続的に作成できます。
- **パワーユーザー**: Drive for Desktopを、自分のキャッシュパス、帯域幅上限、ログ設定に従う軽量なマウントに置き換えられます。

## トラブルシューティングとFAQ

**CLIはまだ必要ですか?**
いいえ。RcloneViewが背後ですべての`rclone mount`フラグを生成します。上級ユーザーはジョブの詳細を開けば正確なコマンドを確認できます。

**macOSの権限についてはどうですか?**
macFUSE用のシステム拡張のプロンプトを承認し、Finderにボリュームが表示されない場合はマウントマネージャーを再確認してください。ハウツーガイドには権限付与のスクリーンショットが含まれています。

**複数のGoogleアカウントをマウントできますか?**
はい。リモートマネージャーでアカウントごとにリモートを1つ追加し、それぞれにマウントエントリーを作成してください。RcloneViewはトークンを個別に保持するため、`gdrive-marketing` と `gdrive-personal` を同時に表示できます。

Google Driveのマウントは今もGoogle検索で上位に入るテーマですが、それはCLIでの回答が複雑だからです。RcloneViewはその4万人以上の検索者に、コード不要の道筋を提供します。Googleアカウントを一度接続し、Mountを押すだけで、信頼できるドライブ文字やFinderボリュームと、すでに頼りにしているマルチクラウドの力(Compare、Sync、Scheduler)がすべて手に入ります。最新版をダウンロードして、今日からマウントスクリプトを卒業しましょう。

<CloudSupportGrid />

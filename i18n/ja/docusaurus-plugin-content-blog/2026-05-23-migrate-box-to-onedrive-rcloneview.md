---
slug: migrate-box-to-onedrive-rcloneview
title: "BoxからOneDriveへ移行 — RcloneViewでファイルを転送"
authors:
  - morgan
description: "RcloneViewを使ってBoxからMicrosoft OneDriveへファイルを移行する手順ガイド。進捗を完全に監視しながら、高速かつ信頼性の高いクラウド間ファイル転送を実現します。"
keywords:
  - migrate box to onedrive
  - box to onedrive transfer
  - cloud migration box onedrive
  - rcloneview box onedrive
  - box onedrive migration guide
  - transfer files from box to onedrive
  - box cloud migration tool
  - onedrive migration from box rcloneview
  - move files box to microsoft onedrive
tags:
  - RcloneView
  - box
  - onedrive
  - cloud-to-cloud
  - migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# BoxからOneDriveへ移行 — RcloneViewでファイルを転送

> RcloneViewを使えば、BoxからMicrosoft OneDriveへの移行は簡単です。両方のアカウントを接続し、転送ジョブを設定するだけで、ブラウザを操作することなくファイルライブラリ全体を移動できます。

BoxからMicrosoft OneDriveへ移行する組織は、いずれも同じ課題に直面します。データの欠落や重複を避けながら、数千ものファイルを確実に移動し、遅いダウンロード・再アップロードの手動サイクルを避けたいというものです。RcloneViewはデスクトップGUIを通じて移行プロセス全体を処理し、2つのクラウドサービス間でファイルをクラウド間で直接転送しながら、進捗をリアルタイムで監視できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## BoxとOneDriveの接続

最初のステップは、両方のアカウントをRcloneViewにリモートとして追加することです。**Remote**タブから**New Remote**をクリックし、**Box**を選択します。RcloneViewがOAuth認証用のブラウザウィンドウを開くので、ログインしてアクセスを許可し、アプリに戻ります。**OneDrive**についても同じ手順を繰り返します。こちらもブラウザベースのOAuthログインを使用します。

両方のリモートが保存されたら、Settingsタブの**Layout**オプションを使って2つのExplorerパネルを並べて開きます。左側のパネルでBoxの元フォルダーへ、右側のパネルでOneDriveの移行先フォルダーへ移動します。このデュアルパネル表示により、転送を開始する前に既存の構造を明確に把握できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and OneDrive as remotes in RcloneView" class="img-large img-center" />

Box for Businessアカウントを移行する場合は、リモート設定で`box_sub_type = enterprise`を設定してください。セットアップウィザードにこの項目が含まれています。OneDrive for Businessまたは SharePoint ドキュメントライブラリの場合は、OneDriveのセットアップ手順で該当するアカウントタイプを選択してください。どちらのエンタープライズ版も、ブラウザOAuthによる同じ認証方式を使用します。

## 移行ジョブの実行

両方のリモートが設定できたら、**Job Manager**を開いて**Add Job**をクリックします。Boxフォルダーを送信元、対象のOneDriveフォルダーを移行先として選択します。一度限りの移行であれば、**Copy**ジョブタイプを使うことでBox内のファイルをすべて保持したままOneDriveへ複製できます。転送と同時にBoxからファイルを削除したい場合のみ**Move**を使用してください。

詳細設定では、**checksum verification**（チェックサム検証）を有効にして、各ファイルが破損なく到着したことを確認します。これは、大規模な移行においてネットワーク中断が気づかないうちに破損コピーを生み出す可能性がある場合に特に有効です。また、どちらかのプロバイダー側で発生する一時的なAPIエラーを手動での再起動なしに処理できるよう、リトライ回数（デフォルト: 3回）も設定しておきましょう。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy job from Box to OneDrive in RcloneView" class="img-large img-center" />

転送を実行する前に、**Dry Run**モードを使ってジョブをシミュレートしましょう。プレビューでは実際にコピーされるファイルが正確に表示されるため、実際の移行に帯域幅と時間を費やす前に、フォルダー構造の不一致や予想外に大きなファイルを発見できます。

## 進捗の監視と結果の確認

転送中は、RcloneViewインターフェース下部の**Transferring**タブで、現在の速度、完了したファイル数、転送済みの総データ量、経過時間といったリアルタイムの進捗が表示されます。例えば法務チームが10年分の契約書類を移動するような大規模な移行では、この可視性が処理にかかる時間の見積もりや業務時間を考慮したスケジューリングに欠かせません。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring Box to OneDrive transfer progress in RcloneView" class="img-large img-center" />

ジョブが完了したら、**Job History**パネルで実行結果の全体サマリーを確認します。エラーが発生したファイルがあれば、ログに正確なパスとエラーメッセージが表示されるため、ジョブ全体を再実行することなく個別に対処できます。履歴を確認した後は、RcloneViewの**Folder Compare**機能を使ってBoxの送信元とOneDriveの移行先を並べて比較し、Boxアカウントを廃止する前にすべてのファイルが正しく転送されたことを確認しましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to OneDrive migration in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneView**をダウンロードします。
2. **Remote > New Remote**からOAuth認証で**Box**をリモートとして追加します。
3. OAuth認証で**OneDrive**を2つ目のリモートとして追加します。
4. Job ManagerでBoxを送信元、OneDriveを移行先とする**Copy**ジョブを作成し、チェックサム検証を有効にして実行します。

RcloneViewを使えば、BoxからOneDriveへの移行はクリーンで追跡可能な作業になります。手動でのダウンロードも中間ストレージも不要で、開始から完了まで進捗を完全に把握できます。

---

**関連ガイド:**

- [RcloneViewでBoxをGoogle Driveに同期](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [RcloneViewによるダウンタイムゼロのBoxからDropboxへの移行](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [RcloneViewでBoxをBackblaze B2へ移行](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

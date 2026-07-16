---
slug: migrate-onedrive-to-dropbox-rcloneview
title: "RcloneViewでOneDriveからDropboxへ移行する"
authors:
  - tayson
description: "RcloneViewを使ってOneDriveからDropboxへ移行しましょう。プラットフォームの機能を比較し、両方のリモートを設定し、データを転送して、移行の各ステップを検証します。"
keywords:
  - rcloneview
  - onedrive to dropbox
  - migrate onedrive to dropbox
  - onedrive dropbox migration
  - onedrive migration tool
  - cloud storage migration
  - dropbox from onedrive
  - microsoft to dropbox
  - onedrive data transfer
  - cloud to cloud migration gui
tags:
  - RcloneView
  - onedrive
  - dropbox
  - migration
  - cloud-migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでOneDriveからDropboxへ移行する

> OneDriveからDropboxへの切り替えは、2つの異なるエコシステム間でファイルを移動することを意味します。**RcloneView**は、ビジュアルインターフェースを通じて転送、メタデータの保持、検証を行います。

OneDriveはMicrosoft 365と深く統合されている一方、Dropboxはファイル同期とコラボレーションに重点を置き、幅広いサードパーティアプリとの連携を提供しています。生産性スイートを切り替える組織、優れたスマート同期やPaper機能のためにDropboxへ移行するチーム、Dropboxのファイル復元機能を好む個人ユーザー — いずれも、数年分にもなり得るデータをプラットフォーム間で転送するという同じ課題に直面します。RcloneViewはそれぞれのAPIを通じて両方に接続し、わかりやすい移行手段を提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDriveからDropboxへ移行する理由

この決定には、通常次のような要因のいずれか、または複数が関係します。

- **プラットフォームの切り替え**: Microsoft 365からGoogle Workspaceや、OneDriveを含まないスイートへ移行しつつ、ファイルストレージとしてDropboxを選ぶ場合。
- **スマート同期**: Dropboxのスマート同期(ローカルにプレースホルダーを置くオンライン専用ファイル)は、OneDriveのFiles On-Demandよりも実績が長く、アプリケーションの互換性も広いです。
- **サードパーティ連携**: DropboxはそのAPIエコシステムを通じて、より幅広いクリエイティブ・生産性ツールと連携します。
- **ファイル復元**: Dropbox Businessプランは180日間のバージョン履歴を提供しますが、OneDrive Personalプランは30日間に制限されています。
- **クロスプラットフォームの一貫性**: DropboxはWindows、macOS、Linuxにおいてより統一された操作感を提供します。

## 両方のリモートを設定する

### OneDriveリモート

RcloneViewのRemote Managerを開き、**Microsoft OneDrive**リモートを追加します。OAuthで認証し、アカウントの種類に応じてOneDrive PersonalまたはBusinessを選択します。Businessアカウントの場合は、個人用ドライブかSharePointドキュメントライブラリのいずれかを選択します。

### Dropboxリモート

**Dropbox**リモートを追加します。OAuthで認証します — RcloneViewはDropboxのログインと権限付与のためにブラウザウィンドウを開きます。トークンはローカルのrclone設定に保存されます。Dropboxリモートは、Businessプランを利用している場合はチームフォルダーを含め、Dropbox全体へのアクセスを提供します。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Dropbox remotes in RcloneView" class="img-large img-center" />

## 移行の計画

転送を開始する前に、以下を確認してください。

1. **ファイル名の互換性**: OneDrive for Businessは`#`や`%`などの文字を制限しており、Dropboxにも独自の制限があります(末尾のスペースやピリオドなど)。OneDrive上に存在するファイルは、Dropboxとの互換性のためにリネームが必要になる場合があります。RcloneViewはエンコーディングを自動的に処理しますが、エッジケースがないかファイル構造を確認してください。
2. **サイズと構造**: RcloneViewのストレージ分析機能を使用して、データの総容量を把握します。50Mbpsで500GBを移行する場合、約22時間かかります。
3. **共有ファイルとリンク**: OneDriveの共有権限やリンクはDropboxに転送されません。移行前に重要な共有リンクを記録しておき、Dropbox上で再作成できるようにしてください。
4. **OneNoteノートブック**: OneDriveに保存されているOneNoteファイルは標準的なファイルではなく、移行前にエクスポートが必要です。個別にエクスポートすることを検討してください。

## 移行の実行

左ペインでOneDrive、右ペインでDropboxを開きます。移行元フォルダーと移行先の場所に移動します。検証が完了するまで両側にファイルを残しておくため、最初の移行にはコピージョブを使用してください。

RcloneViewはサイズと更新日時を使ってファイルを比較します。OneDriveはQuickXorHashを使用し、Dropboxは独自のコンテンツハッシュを使用しているため互換性がなく、RcloneViewはこの2つのプロバイダー間の差分検出において、サイズとタイムスタンプの比較に依存します。一致するファイルはスキップされ、新規または変更されたファイルのみが転送されます。

大規模な移行の場合は、マルチスレッド転送を有効にし、接続を圧迫しないよう適切な帯域幅制限を設定してください。RcloneViewのリアルタイムモニタリングでは、転送の進捗状況、速度、完了予定時刻を確認できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating OneDrive to Dropbox in RcloneView" class="img-large img-center" />

## 移行の検証

転送後、RcloneViewの比較機能を使って完全性を検証します。OneDrive側を移行元、Dropbox側を移行先として選択し、比較を実行します。一致するファイルは同一として表示され、欠落しているファイルや相違のあるファイルはハイライト表示されます。

Office Onlineドキュメントを利用していた場合は、Google Docs形式のようなファイルに注意してください — これらは転送時に標準的なOffice形式に変換されているはずです。変換されたファイルがDropboxで正しく開けることを確認してください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying OneDrive to Dropbox migration in RcloneView" class="img-large img-center" />

## 移行後の手順

1. Dropboxデスクトップクライアントをインストールし、スマート同期の設定を行います。
2. 共有リンクやフォルダー権限をDropbox上で再作成します。
3. OneDriveのパスを参照していたアプリケーション連携を更新します。
4. 削除する前に、移行期間(30〜60日間)はOneDriveのデータを保持しておきます。
5. 両方を並行して運用する場合は、RcloneViewで日次の同期ジョブをスケジュールし、Dropboxを常に最新の状態に保ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling ongoing OneDrive to Dropbox sync in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remote ManagerでOneDriveとDropboxのリモートを追加します。
3. OneDriveからDropboxへのコピージョブを実行します。
4. 比較機能で検証します。
5. 移行後の手順を完了し、準備ができたらOneDriveを廃止します。

OneDriveとDropboxは異なるエコシステムに属していますが、RcloneViewを使えばデータをクリーンかつ完全にそれらの間で移動できます。

---

**関連ガイド:**

- [ブラウザベースのログイン(OAuth)でリモートを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [フォルダー内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [リアルタイム転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />

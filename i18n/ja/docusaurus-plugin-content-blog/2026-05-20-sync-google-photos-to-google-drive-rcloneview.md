---
slug: sync-google-photos-to-google-drive-rcloneview
title: "Google フォトを Google ドライブに同期する — RcloneView で写真ライブラリを整理してバックアップ"
authors:
  - kai
description: "RcloneView を使って Google フォトを Google ドライブに自動同期する方法を解説します。写真ライブラリ全体をクラウドアカウント間で転送、整理、バックアップできます。"
keywords:
  - sync Google Photos to Google Drive
  - backup Google Photos to Google Drive RcloneView
  - Google Photos Google Drive transfer
  - RcloneView Google Photos sync
  - cloud photo library backup
  - automated Google Photos backup
  - photo file management cloud
  - Google Photos cloud sync
  - transfer photos between Google services
  - cloud photo organization tool
tags:
  - RcloneView
  - google-photos
  - google-drive
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google フォトを Google ドライブに同期する — RcloneView で写真ライブラリを整理してバックアップ

> Google フォトと Google ドライブは rclone では別々のクラウドリモートです。RcloneView を使えば、両者の間で写真ライブラリ全体を数クリックで同期し、自動実行するようスケジュール設定できます。

多くの写真家やチームは、撮影・整理用のメインツールとして Google フォトを使いながら、構造化されたファイル共有やコラボレーションには Google ドライブを利用しています。問題は、これら 2 つが rclone 上では別々のクラウドサービスであり、コンテンツが自動的に行き来しないことです。Google フォトに数万枚もの編集済み画像を管理するウェディングフォトグラファーは、クライアント納品や長期アーカイブのために、それらのファイルを構造化された Google ドライブのフォルダーに配置する必要があるかもしれません。RcloneView は両方のサービスを同じインターフェースから接続できるため、コマンドライン操作なしで写真の転送、同期、移行のスケジューリングを簡単に行えます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView で Google フォトと Google ドライブを接続する

Google フォトと Google ドライブはどちらもブラウザベースの OAuth 認証を使用します。RcloneView では、Remote タブを開いて New Remote をクリックし、Google Photos を選択してブラウザでのサインインを完了させます。同じ手順を繰り返し、Google Drive を 2 つ目のリモートとして追加します。数分後には、両方のアカウントがデュアルペインのファイルエクスプローラーに別々のパネルとして表示されます。

両方のリモートが並んで表示されることで、同じウィンドウ内で Google フォトのライブラリと Google ドライブのフォルダー構成を並行して閲覧できます。この並列表示により、まだ転送されていない写真アルバムや期間を簡単に見つけられ、個々のフォルダーをドラッグして一度限りのコピーをすばやく行うこともできます。ドラッグ&ドロップ確認ポップアップ(設定でオン/オフ切り替え可能)は、大規模なライブラリを扱う際の誤操作による移動を防ぎます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Google Drive as remotes in RcloneView" class="img-large img-center" />

## 写真ライブラリを転送する同期ジョブの設定

一括転送を行う場合は、Job Manager を使って専用の同期ジョブを作成します。Home タブから Sync ボタンをクリックし、ソースとして Google フォトのフォルダーを選択し、ターゲットとして Google ドライブ内のフォルダーを選びます。4 ステップのウィザードでは、並行転送ストリーム数の設定、転送中の破損ファイルを検出するチェックサム検証の有効化、動画を除外したり特定期間の写真のみを取得したりするためのファイルサイズや日付によるフィルターの適用が可能です。

フルトランスファーを実行する前に、Dry Run(ドライラン)機能を使って、実際にどのファイルがコピーされるかをプレビューしましょう。すでに整理済みの Drive フォルダーを重複ファイルで誤って上書きしたくない大規模アーカイブの同期では、これが重要です。ドライランでは、実際の変更を一切行わずに、予定されている操作の一覧をすべて表示します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job between Google Photos and Google Drive in RcloneView" class="img-large img-center" />

画面下部の Transferring タブでは、進捗率、現在の転送速度、ファイル数などをリアルタイムで確認できるため、大規模な写真移行の残り作業量を推測する必要がありません。

## 自動写真同期のスケジュール設定(PLUS ライセンス)

Google フォトへ継続的にアップロードする写真家やチームにとっては、一度限りの転送では不十分です。PLUS ライセンスを利用すると、crontab 形式のスケジューリングで繰り返し実行される同期ジョブを設定できます。毎晩実行されるジョブを設定し、新しく追加された Google フォトの写真を対応する Google ドライブのフォルダーに取り込むことで、手作業なしで両方のアカウントを最新の状態に保てます。スケジューラーは分単位、時間単位、曜日単位、日単位、月単位といったきめ細かい間隔設定に対応しています。

Job History には、実行ごとの記録(実行日時、転送されたファイル数、総データ量、速度、完了またはエラーの有無)が残ります。ネットワークの問題でセッションが中断した場合、RcloneView は自動的に再試行し(デフォルトで 3 回)、結果をログに記録するため、後から確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Photos to Google Drive sync transfers" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Remote タブ > New Remote > Google Photos から Google フォトを追加し、ブラウザで認証します。
3. 同じ手順で Google ドライブを 2 つ目のリモートとして追加します。
4. Job Manager で同期ジョブを作成し、ソースに Google フォト、ターゲットに Google ドライブのフォルダーを選択して、まず Dry Run を実行してから、フルトランスファーを実行します。

RcloneView を使えば、Google フォトのライブラリを Google ドライブに同期する設定は数分で完了し、構造化されたファイルアクセスと写真コレクション全体の信頼できるセカンドコピーを得られます。

---

**関連ガイド:**

- [Google フォトのストレージを管理する — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Google ドライブのストレージを管理する — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView で Google フォトを外付けドライブや NAS にバックアップする](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />

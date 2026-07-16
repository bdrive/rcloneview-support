---
slug: sync-dropbox-to-google-drive-rcloneview
title: "Dropbox を Google Drive に同期 — RcloneView でクラウドバックアップを自動化"
authors:
  - casey
description: "RcloneView を使って Dropbox を Google Drive に自動同期する方法を解説します。スケジューリング、フィルタリング、リアルタイム転送モニタリングを備えた定期的なクラウド間バックアップジョブを設定しましょう。"
keywords:
  - sync Dropbox to Google Drive
  - Dropbox Google Drive sync
  - Dropbox to Google Drive backup
  - cloud to cloud sync RcloneView
  - automate Dropbox Google Drive transfer
  - rclone Dropbox Google Drive GUI
  - Dropbox cloud backup solution
  - recurring cloud sync job
  - cross-cloud backup automation
  - RcloneView cloud sync tool
tags:
  - dropbox
  - google-drive
  - cloud-to-cloud
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox を Google Drive に同期 — RcloneView でクラウドバックアップを自動化

> スクリプトやターミナル、高価なサードパーティ製同期サービスを使わずに、Dropbox と Google Drive を自動的に同期し続けましょう。

多くのチームは日常的なファイル共有に Dropbox を利用していますが、賢いクラウド戦略には Google Drive のような第二のプロバイダーに冗長コピーを保持することが含まれます。誤削除への備え、ワークスペース移行の準備、あるいは二重クラウドバックアップポリシーの遵守など、目的が何であれ、RcloneView は Dropbox を Google Drive に確実に同期させるための、スケジュール実行可能な GUI ベースのパイプラインを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox と Google Drive をリモートとして接続する

同期ジョブをスケジュールする前に、RcloneView は両方のプロバイダーへの認証済み接続を必要とします。アプリを開き、**リモートタブ**に移動して**新規リモート**をクリックします。プロバイダーリストから**Dropbox**を選択し、OAuth ブラウザログインを完了させます — API キーは不要です。**Google Drive** についても、Google アカウントで認証しながら同じ手順を繰り返します。

これで両方のリモートがリモートマネージャーに表示され、どのエクスプローラーパネルからもアクセスできるようになります。左パネルで Dropbox のフォルダを、右パネルで Google Drive の送信先を閲覧できるため、ジョブを構築する前にソースと送信先を簡単に確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Google Drive remotes in RcloneView" class="img-large img-center" />

**Dropbox for Business** を利用しているチームは、リモート設定時に `dropbox_business = true` パラメータを設定してください。**Google 共有ドライブ**の場合は、共有ドライブオプションを有効にすることで、チームフォルダがリモートエクスプローラーからアクセス可能になります。

## スケジューリング付きの同期ジョブを構築する

両方のリモートが接続されたら、**ホームタブ**に移動して**同期**をクリックし、ジョブウィザードを開きます。ステップ1では、Dropbox のフォルダをソースとして、Google Drive のフォルダを送信先として選択します。`dropbox-to-gdrive-backup` のようなわかりやすい名前をジョブに付けましょう。

ステップ2では、接続速度に合わせて同時転送数を調整します。**チェックサム検証**を有効にすると、サイズだけでなくバイト単位でファイルの整合性が確認されます。ステップ3ではファイルタイプによるフィルタリングが可能です — 例えば、Dropbox が同期されたチームフォルダに残すことがある `.tmp` や `.lnk` ファイルを除外できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled Dropbox to Google Drive sync job in RcloneView" class="img-large img-center" />

ステップ4で自動化が実現します。**PLUS ライセンス**があれば、cron 形式のスケジュールを設定できます — 例えば毎晩午前2時に実行するように設定すれば、最新の Dropbox コンテンツが自動的に Google Drive にミラーリングされます。毎日実行する場合は cron 式 `0 2 * * *` を、毎週日曜日に同期する場合は `0 2 * * 0` を使用します。**スケジュールをシミュレート**ボタンを使えば、保存前に今後の実行時刻を複数プレビューできます。

## リアルタイム転送の監視と履歴の確認

ジョブが実行されると、アプリ下部の**転送タブ**にファイル数、転送速度、転送済みデータ総量、そして実行途中で中断したい場合のキャンセルボタンなど、リアルタイムの転送進捗が表示されます。Dropbox から Google Drive へ 80GB のプロジェクトアーカイブを同期するクリエイティブエージェンシーであれば、転送完了とともに各ファイルのステータスが更新されていく様子を確認できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Dropbox to Google Drive sync" class="img-large img-center" />

各実行後、**ジョブ履歴**ビューには実行タイプ(手動またはスケジュール)、所要時間、転送された総バイト数、速度、そして最終ステータス(完了、エラー、キャンセル)が記録されます。Dropbox または Google Drive のいずれかで一時的な API レート制限が発生した場合でも、組み込みの再試行機能(デフォルト:3回)が手動での対応なしに一時的な失敗を処理します。

## フォルダ比較で同期結果を確認する

初回のフルシンク完了後は、RcloneView の**フォルダ比較**ツールを使って両側が一致しているかを検証しましょう。ホームタブから起動し、Dropbox のソースと Google Drive の送信先を選択して、比較をクリックします。結果には、左側のみに存在するファイル(まだ同期されていない)、右側のみに存在するファイル(Drive に手動で追加された)、同一ファイル、サイズが一致しないファイルが表示されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Dropbox and Google Drive are in sync" class="img-large img-center" />

初回のライブ同期を実行する前に**ドライラン**を実行し、実際にコピーまたは削除されるファイルを正確にプレビューしましょう。これは、稼働中の Dropbox チームフォルダを同期する際に特に重要です — Google Drive の送信先に変更が加わる前に、範囲を確認しておく必要があります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から**RcloneView をダウンロード**します。
2. OAuth ログイン(リモートタブ > 新規リモート)で Dropbox リモートを追加します。
3. 同じ方法で Google Drive リモートを追加します。
4. Dropbox から Google Drive への同期ジョブを作成し、お好みのスケジュールを設定します。

適切な Dropbox から Google Drive へのパイプラインが整えば、データは2つのクラウドに存在することになり、プロバイダー障害、誤削除、予期せぬ請求への備えとなります。

---

**関連ガイド:**

- [RcloneView で Dropbox を Google Drive に移行する](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [Dropbox を管理する — RcloneView によるクラウド同期とバックアップ](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [RcloneView で Google Drive を Dropbox に同期する](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)

<CloudSupportGrid />

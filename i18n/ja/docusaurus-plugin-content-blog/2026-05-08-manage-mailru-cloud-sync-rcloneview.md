---
slug: manage-mailru-cloud-sync-rcloneview
title: "Mail.ru クラウドストレージを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "RcloneViewでMail.ruクラウドストレージを接続・管理する方法を解説します。CLIコマンドを使わずに、わかりやすいGUIでMail.ruのファイルを同期、バックアップ、転送できます。"
keywords:
  - Mail.ru クラウドストレージ RcloneView
  - Mail.ru クラウド同期 GUI
  - Mail.ru ファイル管理
  - Mail.ru バックアップツール
  - rclone Mail.ru GUI
  - Mail.ru ファイル転送
  - クラウドストレージ管理
  - Mail.ru 同期デスクトップアプリ
tags:
  - mailru
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mail.ru クラウドストレージを管理する — RcloneViewでファイルを同期・バックアップ

> Mail.ru CloudをRcloneViewに接続すれば、ファイルの管理、自動バックアップの実行、複数プロバイダー間でのデータ同期まで、すべて1つのデスクトップGUIから行えます。

Mail.ru Cloudは大容量の無料ストレージを提供しており、ロシアおよび近隣諸国で広く利用されています。適切なツールがなければ、効率的に管理するのは難しいものです。RcloneViewはそのギャップを埋め、rcloneの実績あるMail.ruバックエンドを通じて接続し、おなじみの2ペイン式エクスプローラーでファイルを表示します。コマンドラインの知識は一切必要ありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでMail.ru Cloudをリモートとして追加する

RcloneViewでMail.ruを設定するのは2分もかかりません。メニューバーの**Remoteタブ**を開き、**New Remote**をクリックします。プロバイダー一覧をスクロールしてMail.ru Cloudを見つける（または検索フィールドに「mail」と入力する）か、そこにMail.ruアカウントの認証情報 — ユーザー名とパスワード — を入力します。RcloneViewはこれらを組み込みのrcloneインスタンスに渡し、Mail.ru APIに対する認証を処理します。

保存すると、リモートはすぐにエクスプローラーパネルに表示されます。フォルダの閲覧、サムネイルのプレビュー、ファイルメタデータの確認、フォルダツリーの操作を、ローカルドライブと同じように行えます。パンくずリストのパスバーはクリック可能な階層を提供するため、ネストされたディレクトリの奥深くまで素早く移動できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Mail.ru Cloud as a new remote in RcloneView" class="img-large img-center" />

## Mail.ruのファイルを他のクラウドやローカルドライブに同期する

RcloneViewの最も強力な機能の一つが、シームレスなクラウド間転送です。Mail.ru CloudからGoogle Drive、Backblaze B2、またはローカルフォルダにファイルをコピーする必要がある場合は、デュアルペインエクスプローラーで両方の場所を並べて開きます。片方のパネルからもう一方へファイルをドラッグするか、右クリックして**Copy**を選択し、ターゲットパネルで**Paste**します。

定期的なバックアップには、内蔵のJob Managerを使用します。Mail.ruをソースとし、任意の転送先を指定してSyncまたはCopyジョブを定義します。転送の並列数を設定し、チェックサム検証を有効にすることで、転送中のファイル破損を検出できます。PLUSライセンスがあれば、これらのジョブをcrontab形式のタイマーでスケジュール設定でき、手動操作なしで自動的にバックアップを実行できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Mail.ru sync job in RcloneView Job Manager" class="img-large img-center" />

## 転送状況の監視と履歴の確認

RcloneViewウィンドウ下部の**Transferring**タブには、実行中のジョブのライブ進行状況 — ファイル数、転送済みバイト数、現在の速度 — が表示されます。設定を一時停止したり調整したりする必要がある場合は、いつでも実行中のジョブをキャンセルできます。

各ジョブの完了後、**Job History**タブには開始時刻、所要時間、転送された総サイズ、最終ステータス（Completed、Errored、Canceled）を含む完全な記録が保存されます。クライアントへの納品物をMail.ruに保存している写真事業者にとって、この履歴は信頼できる監査証跡となり、夜間のバックアップジョブが失敗していないかを簡単に確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing Mail.ru sync results" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remoteタブ → New Remote**を開き、Mail.ru Cloudを選択して認証情報を入力します。
3. エクスプローラーパネルでMail.ruのファイルを閲覧し、任意の転送先にアイテムをドラッグします。
4. **Job Manager**でSyncジョブを作成し、定期的な自動バックアップを設定します。

RcloneViewを使えば、Mail.ru Cloudはターミナル不要でマルチクラウドのワークフローにきれいに組み込まれます。

---

**関連ガイド:**

- [RcloneViewでYandex Diskクラウドストレージを管理する](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Mail.ru CloudをGoogle DriveとS3に転送する](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [RcloneViewで複数のクラウドアカウントを管理する](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />

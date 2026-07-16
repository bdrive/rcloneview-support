---
slug: sync-dropbox-to-pcloud-rcloneview
title: "DropboxをpCloudに同期 — RcloneViewによるクラウドバックアップ"
authors:
  - tayson
description: "RcloneViewを使ってDropboxのファイルをpCloudに同期し、冗長なクラウドバックアップを実現しましょう。スケジュールジョブとリアルタイム監視で両方のクラウドを同期状態に保ちます。"
keywords:
  - sync dropbox to pcloud
  - dropbox pcloud backup
  - dropbox to pcloud transfer
  - cloud-to-cloud sync
  - pcloud backup solution
  - rcloneview dropbox sync
  - multi-cloud backup
  - dropbox redundancy
  - pcloud cloud storage
  - cross-cloud sync
tags:
  - dropbox
  - pcloud
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DropboxをpCloudに同期 — RcloneViewによるクラウドバックアップ

> DropboxのライブミラーをpCloudに保持しておくことで、誤削除、ランサムウェア、単一プロバイダーの障害から保護されます。

Dropboxは数百万のチームにとって標準的なコラボレーションハブですが、重要なファイルを単一のクラウドプロバイダーに依存するのはリスクがあります。pCloudは永久ストレージプランと強力なクライアントサイド暗号化オプションを提供しており、優れたセカンダリの保存先となります。RcloneViewは両方のサービスを接続し、スケジュールに従って自動的に同期を保ちます — 手動でのファイル移動は不要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## DropboxをpCloudに同期する理由

Dropboxはほとんどのプランでストレージ容量に上限を設けており、ユーザーごとの課金は成長中のチームにとって急速に膨らみます。pCloudの永久プランは継続的なコストをなくし、ヨーロッパ(ルクセンブルク)のデータセンターは、米国外でのデータ所在地を必要とするチームにとって地理的なヘッジとなります。DropboxをpCloudに同期することで、pCloud独自のアプリとWebインターフェースからアクセス可能なリアルタイムバックアップを維持できます。

保護という観点もあります。Dropboxのバージョン管理期間は、プランによって30日または180日に限られています。ファイルの破損や誤削除がその期間を過ぎて気づかれなかった場合、復旧は不可能です。pCloudミラーは独自の保持期間を持つ独立したコピーを提供し、安全網を二重にします。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and pCloud remotes in RcloneView" class="img-large img-center" />

## RcloneViewでDropboxとpCloudを接続する

まずDropboxリモートを追加します。RcloneViewがOAuth認証のためにブラウザを開きます — Dropboxにサインインして接続を承認すると、リモートがリモート一覧に表示されます。APIキーを手動でコピーする必要はありません。Dropboxリモートは、所有している共有フォルダを含め、Dropboxのルート全体へのアクセスをRcloneViewに与えます。

pCloudについては、新しいリモートを追加し、プロバイダーとして「pCloud」を選択します。同じ方法でOAuth経由で認証します。pCloudアカウントがEUサーバー上にある場合は、セットアップ時に正しいホスト名(`eapi.pcloud.com`)を選択してください。RcloneViewが接続を確認し、pCloudのルートディレクトリを表示します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Dropbox and pCloud files side by side in RcloneView" class="img-large img-center" />

## 同期ジョブの設定

左にDropbox、右にpCloudを配置した2ペインのエクスプローラーを開きます。同期を保ちたいフォルダに移動します。完全なミラーにする場合はDropboxのルートを選択し、選択的な同期の場合は`/Work`や`/Photos`のような特定のディレクトリを選びます。

ジョブマネージャーで新しいジョブを作成します。モードを「同期」に設定すると、pCloudはDropboxの正確なミラーとして保たれます。pCloudから何も削除せず新しいファイルのみを追加したい場合は、代わりに「コピー」モードを使用します。RcloneViewはデフォルトで更新日時とファイルサイズを比較しますが、追加の検証レイヤーとしてチェックサムチェックを有効にすることもできます。なお、Dropboxは独自のコンテンツハッシュアルゴリズムを使用していますが、RcloneViewが自動的に変換を処理します。

従量制の接続を利用している場合は帯域幅の制限を設定し、繰り返しスケジュールでジョブを実行するように設定してください — ほとんどのチームでは毎日の同期がうまく機能します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Dropbox to pCloud sync job in RcloneView" class="img-large img-center" />

## 転送の監視と検証

ジョブが開始されると、転送ダッシュボードにファイルごとの進捗、全体のスループット、完了予定時刻が表示されます。DropboxのAPIレート制限が大規模な転送を制限することがありますが、RcloneViewは失敗したリクエストを自動的に再試行し、制限に達した場合はバックオフします。

最初のフル同期の後、以降の実行は増分になります — 変更されたファイルや新しいファイルのみが転送されます。ジョブ履歴を確認して、各実行がエラーなく完了したことを確認し、pCloud上のいくつかのファイルを抜き取り確認してコンテンツの整合性を検証してください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Dropbox to pCloud sync" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Dropboxリモートを追加する際に、OAuth経由でDropboxアカウントを認証します。
3. pCloudアカウントを認証し、正しいサーバーリージョン(USまたはEU)を確認します。
4. DropboxからpCloudへの同期ジョブを作成し、毎日実行されるようスケジュールします。

両方のクラウドを接続することで、Dropboxのデータは2つの独立した場所に存在するようになり、必要なときにいつでも復旧できる状態になります。

---

**関連ガイド:**

- [Backup Dropbox to Backblaze B2 — Affordable Storage with RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Manage pCloud Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Encrypt pCloud Files with RcloneView](https://rcloneview.com/support/blog/encrypt-pcloud-files-with-rcloneview)

<CloudSupportGrid />

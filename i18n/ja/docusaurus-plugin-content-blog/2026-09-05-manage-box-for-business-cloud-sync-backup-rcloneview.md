---
slug: manage-box-for-business-cloud-sync-backup-rcloneview
title: "Box for Business を管理する — RcloneView でファイルを同期・バックアップ"
authors:
  - tayson
description: "Box for Business を RcloneView に接続して、90以上の他社サービスと並べてエンタープライズのクラウドファイルを閲覧・同期・マウント・バックアップしましょう。"
keywords:
  - Box for Business
  - Box エンタープライズストレージ
  - RcloneView
  - エンタープライズクラウド同期
  - クラウドストレージ管理
  - クラウドバックアップソフトウェア
  - box_sub_type enterprise
  - マルチクラウドファイル管理
  - ビジネスクラウドストレージ
  - フォルダ比較ツール
tags:
  - RcloneView
  - box
  - enterprise
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box for Business を管理する — RcloneView でファイルを同期・バックアップ

> 組織の Box for Business アカウントを、他のドライブと同じように扱いましょう — 1つのデスクトップアプリから閲覧、同期、マウント、バックアップまで。

Box for Business アカウントには、何年分もの部署共有ファイルが何層にも入れ子になったチームフォルダに散らばっていることが多く、IT担当者はブラウザタブの中だけで生活せずにこうしたコンテンツを確認・移動・保護する信頼できる方法を必要としています。RcloneView は個人の Box アカウントと同じ OAuth ログインで Box for Business に接続し、続いてエンタープライズ専用の設定フラグを適用することで、組織全体のフォルダ構造をアプリが認識できるようにします。接続後は、このアカウントは RcloneView のエクスプローラー、同期、マウントの各ツールで他のリモートと同じように動作し、同期とフォルダ比較機能は FREE ライセンスでも利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box for Business リモートを設定する

RcloneView で新しいリモートを作成し、Box を選択します — アプリがブラウザを開いて標準の OAuth ログインを行うため、APIキーや手動でのトークン入力は不要です。会社の Box アカウント情報でサインインして接続を承認してください。

Box for Business アカウントでは、個人の Box ログインに加えてもう1つの設定が必要です。リモートの詳細設定に入力する `box_sub_type = enterprise` です。この設定により rclone は単一の個人アカウントではなく組織の共有チーム構造を参照するようになり、これが RcloneView のエクスプローラーパネルに全社共通のフォルダを表示させる仕組みです。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で新しい Box for Business リモートを作成する" class="img-large img-center" />

複数の部署にまたがる複数の Box for Business アカウントを管理している場合、Remote Manager が各アカウントを個別に保持するため、認証情報や enterprise フラグをそれぞれ独立して編集できます。

## エンタープライズフォルダの比較と同期

古いファイルサーバーから部署を移行したり、重複したチームフォルダを整理したりする前に、Folder Compare を使って Box for Business フォルダと移行先の間で何がどう違うかを正確に確認しましょう。比較画面では結果を「左のみ」「右のみ」「同一」「異なる」でフィルタリングできるため、すべてを再アップロードする代わりに不足分だけをコピーできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box for Business フォルダを別のクラウドリモートと比較・同期する" class="img-large img-center" />

継続的な保護のために、一方向同期ジョブはソースに触れることなく重要な Box for Business フォルダの副本を最新の状態に保ち、dry run では実際に何も移動する前にどのファイルがコピーまたは削除されるかを正確に示します。

## バックアップのスケジュール設定とジョブの監視

Job Manager を使うと、同じ Box for Business のコンテンツを2つの保存先へ同時にミラーリングする同期・コピー・1:N ジョブを設定できます — 例えばローカルNASとS3互換バケットへ同時に保存すれば、1つの同期ジョブでオンサイトとオフサイトの両方のバックアップ要件を満たせます。その後、Job History がすべての実行について開始時刻、所要時間、ステータス、ファイル数を記録するため、管理者は夜間バックアップが実際に完了したかどうかを確認する際に役立ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView で定期的な Box for Business バックアップジョブをスケジュールする" class="img-large img-center" />

PLUS ライセンスのユーザーは crontab 形式のスケジュール機能でこれをさらに自動化でき、誰かが手動で実行しなくても夜間にバックアップを実行できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. 新しい Box リモートを追加し、会社アカウントで OAuth ログインを完了します。
3. リモートの詳細設定を編集し、`box_sub_type = enterprise` を設定して全社フォルダのロックを解除します。
4. 同期ジョブまたはマウントを設定して、Box for Business コンテンツの管理を開始します。

エンタープライズの Box アカウントが他のすべてのリモートと同じインターフェースに並ぶようになれば、日常のファイル管理と災害復旧バックアップはもはや2つの別々のワークフローではなくなります。

---

**関連ガイド:**

- [Box ストレージを管理する — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Box から SharePoint または OneDrive への移行方法 — RcloneView によるエンタープライズクラウド移行](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [RcloneView で Box ストレージをネットワークドライブとしてマウントし、シームレスなチームアクセスを実現](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />

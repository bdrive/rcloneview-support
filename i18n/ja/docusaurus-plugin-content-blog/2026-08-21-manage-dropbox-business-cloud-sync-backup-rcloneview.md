---
slug: manage-dropbox-business-cloud-sync-backup-rcloneview
title: "Dropbox for Business ストレージを管理する — RcloneView で同期とバックアップ"
authors:
  - casey
description: "Dropbox for Business を RcloneView に接続して、チームアカウントのクロスプラットフォームなファイル閲覧、クラウド間同期、スケジュールバックアップを実現します。"
keywords:
  - dropbox for business
  - dropbox business 同期
  - rcloneview dropbox business
  - dropbox business バックアップ
  - dropbox_business rclone
  - エンタープライズ dropbox ストレージ
  - ビジネス クラウドストレージ gui
  - dropbox チームアカウント 同期
  - マルチクラウド ファイル管理
  - dropbox business 移行
tags:
  - RcloneView
  - dropbox
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox for Business ストレージを管理する — RcloneView で同期とバックアップ

> Dropbox for Business のチームアカウントを RcloneView に接続し、管理している他のすべてのクラウドと並べてチーム共有フォルダーを閲覧・同期・バックアップします。

Dropbox for Business アカウントは、個人用 Dropbox とは異なる形でファイルを整理します。チームフォルダー、管理者が管理するスペース、共有ワークスペースはいずれもビジネスログインの背後にあります。RcloneView はこれらのチームアカウントに直接接続し、IT 管理者やチームリーダーが Dropbox の Web アプリと別のデスクトップクライアントを行き来することなく、1つのウィンドウでビジネスコンテンツを閲覧、転送、バックアップできるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox for Business リモートの設定

RcloneView で Dropbox for Business アカウントを追加する手順は、個人用 Dropbox 接続と同じように始まります。New Remote をクリックして Dropbox を選択し、ブラウザで OAuth ログインを完了させます。違いは1つの追加設定だけです — リモートで `dropbox_business = true` を有効にすることで、個人アカウントではなくチームアカウントに対して認証するよう指示します。設定が完了すると、ビジネスアカウントのチームフォルダーが他のリモートと同じように Explorer パネルに表示されます。

RcloneView は Windows、macOS、Linux 上で1つのウィンドウから90以上のプロバイダーをマウントかつ同期できるため、Dropbox for Business テナントと他の部門のクラウドを両方管理する管理者は、プロバイダーごとに別のアプリケーションを行き来することなく、同じセッション内ですべてを管理できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Dropbox for Business remote in RcloneView" class="img-large img-center" />

## チームフォルダーと共有スペースの閲覧

接続すると、File Explorer パネルには他のすべてのリモートと同じ名前、種類、更新日、サイズの列を使って Dropbox for Business のフォルダー構造が表示されます。複数の部門にまたがるチームフォルダーも、折りたたみ可能なフォルダーツリーで簡単に移動でき、パンくずパスバーの Copy Full Path オプションは、スクリプト作成や組み込みの rclone Terminal への受け渡しに必要な `remote:path` 形式を出力します。

Ctrl+Click または Shift+Click によるマルチ選択を使えば、アカウント全体を扱うのではなく、大きなチームスペースから特定のプロジェクトフォルダーだけを取り出すことが簡単になります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Dropbox for Business team folders in RcloneView Explorer" class="img-large img-center" />

## ビジネスデータを2つ目のクラウドにバックアップする

ビジネスにとって重要なファイルを単一のプロバイダーだけに頼るのはリスクが高いため、多くのチームは Dropbox for Business のコンテンツを Amazon S3、Backblaze B2、または別のクラウドにミラーリングしてセカンダリコピーを作成します。RcloneView の4ステップの Sync ウィザードでこれを直接実行できます。Dropbox for Business リモートをソースとして選択し、送信先リモートを選び、片方向同期を選択すれば、上流を上書きすることなく、バックアップ先が常にソースを反映するようになります。フィルタリング設定を使えば大容量メディアファイルを除外したり、バックアップを一定の経過日数未満のフォルダーに限定したりして、本当に保護が必要なものだけにジョブを集中させることができます。

最初の同期の前に Dry Run を実行すると、どのファイルがコピーされるかを正確に確認できるため、チームアカウント全体のデータを移動する前に範囲を検証するのに役立ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Dropbox for Business backup job in RcloneView" class="img-large img-center" />

## 定期バックアップの自動化

PLUS ライセンスのユーザーは、Dropbox for Business のバックアップジョブに crontab 形式のスケジュールを設定し、手動操作なしで毎晩または毎週実行できます。Job History はスケジュールされたすべての実行について、実行タイプ、所要時間、ステータス、転送された合計サイズを記録するため、管理者は Dropbox 自体のアクティビティログを掘り返すことなく確認できる監査証跡を得られます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** します。
2. 新しい Dropbox リモートを追加し、設定中に `dropbox_business` 設定を有効にします。
3. Explorer パネルでチームフォルダーを閲覧し、必要な共有スペースへのアクセスを確認します。
4. Sync ジョブを作成してビジネスデータをセカンダリクラウドにミラーリングし、PLUS ライセンスであればスケジュールを設定します。

Dropbox for Business リモートを適切に設定すれば、一箇所にしか存在しがちなチームデータのための実用的な安全策として RcloneView を活用できます。

---

**関連ガイド:**

- [RcloneView で Dropbox ストレージを管理する — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Dropbox Business から Google Workspace へ移行する — RcloneView でファイルを転送](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [Dropbox を AWS S3 にバックアップする — RcloneView によるクラウドバックアップ](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />

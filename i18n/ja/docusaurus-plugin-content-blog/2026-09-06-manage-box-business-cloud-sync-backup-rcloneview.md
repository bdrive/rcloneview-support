---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Box for Business を管理する — RcloneView でエンタープライズのクラウド同期とバックアップを行う"
authors:
  - casey
description: "管理者が用意した Box アカウント全体にわたるエンタープライズの同期、バックアップ、マウントのワークフローのために、RcloneView で Box for Business を設定します。"
keywords:
  - Box for Business
  - Box for Business 管理
  - Box エンタープライズ クラウド同期
  - Box ビジネス バックアップ
  - RcloneView Box
  - box_sub_type enterprise
  - エンタープライズ クラウドストレージ 同期
  - Box アカウント バックアップツール
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box for Business を管理する — RcloneView でエンタープライズのクラウド同期とバックアップを行う

> Box for Business アカウントでは、管理者がプロビジョニングしたすべての内容を RcloneView が認識できるようにするために、追加の設定が一つ必要です — 正しく設定する方法を紹介します。

標準の Box リモートは個人アカウントでは問題なく動作しますが、Box for Business(エンタープライズ)アカウントは内部的にフォルダと権限の構造が異なります。個人の Box アカウントと同じ方法で接続すると、一部のエンタープライズ管理コンテンツがエクスプローラーに表示されないことがあります。RcloneView はリモートに専用の `box_sub_type = enterprise` 設定を適用することでこれを解決し、チームの共有フォルダ、共同所有コンテンツ、管理者がプロビジョニングしたストレージがすべて正しく表示されるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box for Business リモートを設定する

新しいリモートを作成し、プロバイダーとして Box を選択することから始めます — ブラウザベースの OAuth ログインは個人アカウントと同じように機能するため、別途学ぶべき認証情報フローはありません。違いは認証後に現れます。リモートの詳細設定を開き、`box_sub_type = enterprise` を設定してください。これにより、RcloneView が動作する基盤である rclone が、個人アカウントのデフォルトではなくエンタープライズスコープのフォルダ構造を解決するようになります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で新しい Box for Business リモートを作成する" class="img-large img-center" />

設定が完了すれば、他のリモートと同じ方法で参照できます — フォルダツリーのナビゲーション、サムネイルプレビュー、ファイル操作(コピー、切り取り、名前の変更、削除)は、個人アカウントでもビジネスプランでも同じように機能します。

## エンタープライズ Box コンテンツの同期とバックアップ

IT チームでよくあるシナリオは、Box for Business アカウントをオンプレミスの NAS、別のクラウド、あるいはコールドアーカイブ用の S3 互換オブジェクトストレージといったセカンダリの場所にバックアップすることです。Box for Business をソースとする同期ジョブを構築し、安全で非破壊的なバックアップのために方向を「宛先のみ変更」の一方向に設定し、まずドライランを実行して実際にコピーされる内容を正確にプレビューしてください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView で Box for Business のバックアップ同期ジョブを設定する" class="img-large img-center" />

数十の Box フォルダにまたがる共有ドライブを扱う部門では、最大ファイル経過時間や定義済みのドキュメントフィルターで絞り込むことで、毎回アカウント全体を再スキャンする代わりに、夜間ジョブを変更があった箇所だけに集中させることができます。RcloneView は FREE ライセンスでも同期とフォルダ比較をサポートしているため、エンタープライズのバックアップワークフローを始めるのにアップグレードは必要ありません。

## 繰り返しのエンタープライズバックアップをスケジュールする

毎日複数の担当者がファイルを追加するエンタープライズアカウントでは、手動エクスポートは拡張性がありません。Job Manager を使えば、Box for Business の同期を名前付きジョブとして保存し、crontab 形式のスケジュール(PLUS ライセンス機能)を設定して、毎晩、あるいはコンプライアンスポリシーが求める任意の頻度で自動的に実行できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="定期的な Box for Business 同期ジョブをスケジュールする" class="img-large img-center" />

すべての実行は開始時刻、所要時間、転送速度、ファイル数とともに Job History に記録されるため、監査でバックアップの検証方法を尋ねられた際に有用な証拠となります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**。
2. 新しい Box リモートを作成し、Box for Business の認証情報でブラウザ OAuth ログインを完了してください。
3. リモートの詳細設定を開き、`box_sub_type = enterprise` を設定してエンタープライズスコープのフォルダを有効にしてください。
4. Box for Business と、他のサポートされているリモートまたはローカルストレージを組み合わせた同期またはバックアップジョブを構築してください。

この一つの設定を最初に正しく行っておくことで、後から「ファイルはどこへ行った」というトラブルシューティングに何時間も費やすことを避けられます。

---

**関連ガイド:**

- [Box ストレージを管理する — RcloneView でファイルを同期・バックアップする](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dropbox for Business を管理する — RcloneView でファイルを同期・バックアップする](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [Box から OneDrive へ移行する — RcloneView でファイルを転送する](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />

---
slug: manage-sugarsync-cloud-sync-backup-rcloneview
title: "SugarSyncストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "SugarSyncをRcloneViewに接続し、クラウドファイルを視覚的に管理。GUIで使いやすくSugarSyncデータをプラットフォーム間で同期、バックアップ、転送。"
keywords:
  - SugarSync クラウドストレージ管理
  - RcloneView SugarSync 同期
  - SugarSync バックアップファイル
  - SugarSync ファイル転送 GUI
  - SugarSync rclone
  - RcloneViewでSugarSyncを管理
  - SugarSync デスクトップクライアントの代替
  - SugarSync クラウドバックアップツール
  - SugarSyncファイルを同期
  - SugarSync マルチクラウド
tags:
  - sugarsync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SugarSyncストレージを管理 — RcloneViewでファイルを同期・バックアップ

> RcloneViewはSugarSyncストレージに完全なGUI操作を提供します。SugarSyncのネイティブデスクトップクライアントだけに頼らず、ファイルの閲覧、同期、バックアップができます。

SugarSyncは、デバイス間の信頼性の高いファイル同期を必要とする中小企業や個人プロフェッショナルにとって、信頼できるクラウドバックアップソリューションであり続けています。SugarSyncのネイティブアプリは日常的な同期をカバーしますが、RcloneViewはIT管理者やパワーユーザー向けに、スケジュールジョブ、クラウド間転送、一括移行、他のクラウドアカウントとの一元管理など強力な機能を追加します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SugarSyncをRcloneViewに接続

RcloneViewはrcloneのSugarSyncバックエンドを使用してSugarSyncに接続します。RcloneViewでRemoteタブ > New Remoteに進み、プロバイダーリストからSugarSyncを選択します。SugarSyncアカウントの認証情報で認証するよう求められ、トークンはRcloneViewの暗号化されたローカルストレージに安全に保存されます。

接続すると、Magic Briefcaseやカスタム同期フォルダを含むSugarSyncフォルダがファイルエクスプローラーに表示されます。フォルダの内容を閲覧し、ファイルサイズを確認し、右クリックのコンテキストメニューでファイル管理操作を実行できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding SugarSync as a remote in RcloneView" class="img-large img-center" />

## SugarSyncを別のクラウドにバックアップ

SugarSyncをRcloneViewに接続する魅力的なユースケースの一つは、クロスクラウドバックアップです。SugarSyncの内容をBackblaze B2やAmazon S3などのセカンダリプロバイダーにコピーします。SugarSyncに何年分ものクライアント文書を保存しているフリーランスコンサルタントは、毎週の同期ジョブを設定してその内容をS3互換のアーカイブにミラーリングし、プライマリアカウントにアクセスできなくなった場合の冗長性を確保できます。

RcloneViewの同期ウィザードでは、ソースの選択、送信先の設定、フィルタリングオプション、スケジュール設定を順に案内します。チェックサム検証を有効にすると、転送されたすべてのファイルがソースと正確に一致することを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a backup job from SugarSync in RcloneView" class="img-large img-center" />

## SugarSyncファイルの閲覧と整理

デュアルパネルのファイルエクスプローラーでは、SugarSyncと別のクラウドまたはローカルフォルダを並べて操作できます。RcloneViewの内蔵フォルダ比較機能を使ってフォルダ内容を視覚的に比較し、片方にしか存在しないファイルを見つけたり、同期が不完全であることを示すサイズの違いがあるファイルを特定したりできます。

数千個のファイルを持つ大規模なSugarSyncライブラリでは、ファイルリストの並べ替えやフィルター機能を使って素早くナビゲートできます。フッターの概要には、ファイルの総数と合計ストレージサイズが一目でわかるように表示されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SugarSync folder contents in RcloneView" class="img-large img-center" />

## SugarSyncからの移行

SugarSyncから別のプロバイダーへの移行を計画している場合、RcloneViewはそのプロセスを大幅に簡素化します。SugarSyncからターゲットの送信先への一回限りの同期ジョブを設定し、ドライランで転送内容をプレビューしてから、完全な移行を実行します。ジョブ履歴には、移動したファイルの完全な記録が残ります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating SugarSync data to another cloud provider with RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブ > New Remoteに進み、SugarSyncを選択します。
3. SugarSyncの認証情報で認証し、リモートを保存します。
4. エクスプローラーでファイルを閲覧し、他のプロバイダーへの同期・バックアップジョブを設定します。

RcloneViewは、SugarSyncユーザーがすでに慣れ親しんだワークフローを置き換えることなく、エンタープライズグレードの同期・バックアップツールを提供します。

---

**関連ガイド:**

- [Dropboxストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Google Driveストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [フリーランスと独立請負業者のためのクラウドストレージ — RcloneView](https://rcloneview.com/support/blog/cloud-storage-freelancers-independent-contractors-rcloneview)

<CloudSupportGrid />

---
slug: manage-yandex-disk-cloud-sync-backup-rcloneview
title: "Yandex Disk ストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "RcloneViewでYandex Diskを管理 — 信頼性の高いGUIインターフェースを使用して、Yandex Diskと他のクラウド間でファイルを同期、バックアップ、転送します。"
keywords:
  - Yandex Disk 管理
  - Yandex Disk 同期
  - Yandex Disk バックアップ
  - RcloneView Yandex
  - Yandex クラウドストレージ GUI
  - Yandex Disk ファイル転送
  - クラウドバックアップツール
  - マルチクラウド同期
  - Yandex Disk rclone
  - Yandex ストレージマネージャー
tags:
  - yandex-disk
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex Disk ストレージを管理 — RcloneViewでファイルを同期・バックアップ

> Yandex Diskはヨーロッパのユーザー向けに大容量のストレージと優れたパフォーマンスを提供します — RcloneViewはOAuthを介して接続し、あなたのYandexコンテンツを統合されたマルチクラウドファイルマネージャーに取り込みます。

Yandex Diskは、ヨーロッパとロシアのユーザーに向けて信頼性の高いクラウドストレージと安定したパフォーマンス実績を提供していますが、Yandex Diskと他のプラットフォーム間でファイルを移動するには、通常、単独のYandexクライアントか手動ダウンロードが必要でした。RcloneViewはブラウザOAuthを介してYandex Diskに直接接続し、他のクラウドリモートと並んで統合されたファイル管理インターフェースを提供します — 追加のソフトウェアは一切不要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでYandex Diskをセットアップする

RcloneViewで**リモートタブ > 新規リモート**をクリックし、リストから**Yandex Disk**を選択します。認証はブラウザOAuthフローを通じて行われます — デフォルトのブラウザでYandexのログインページが開き、アカウントにサインインすると、RcloneViewが自動的にアクセストークンを受け取ります。手動でのキー生成やAPI設定は一切必要ありません。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk as a new remote in RcloneView" class="img-large img-center" />

接続後、Yandex Diskはエクスプローラーパネルに閲覧可能なリモートとして表示されます。フォルダやファイルを閲覧したり、サイズや更新日時を確認したり、インターフェースから直接新しいフォルダを作成したりできます。サムネイル表示により、ブラウザやYandexアプリを開くことなく、Yandex Diskに保存された写真ライブラリを簡単に閲覧できます。

## Yandex Diskのファイルをローカルまたは別のクラウドに同期する

Yandex Diskにプロジェクトファイルを保存しているコンテンツクリエイターにとって、ローカルの外付けドライブへの一方向同期を設定することで、インターネット障害にも耐えるオフラインバックアップが作成できます。**ジョブマネージャー**で同期ジョブを設定します。ソースはYandex Diskフォルダ、宛先は外付けドライブのパスです。以降の実行では変更されたファイルのみが転送されるため、大規模なライブラリでも同期が高速に保たれます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Yandex Disk in RcloneView Job Manager" class="img-large img-center" />

プロバイダー間の転送も同様に簡単です。ヨーロッパでのファイル配布にYandex Diskを使用しつつ、共同編集にGoogle Driveを使用しているチームは、両方のリモート間で定期的な同期を設定でき、手動でのアップロードなしに両方のプラットフォームで一貫したコンテンツを維持できます。RcloneViewはファイルをサイズと更新日時で比較し、新規または変更されたものだけを転送します。

## Yandex Diskへのバックアップ

Yandex Diskは、すでに他のクラウドに保存されているファイルの二次バックアップ先として優れています。Google Driveをメインストレージとして使用している写真家は、RcloneViewを使ってYandex Diskに毎月コピーをプッシュすることができ、単一のクラウドがダウンしたりアクセスが制限されたりすることから保護する、プロバイダーを分散させたバックアップ戦略を構築できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Yandex Disk backup jobs in RcloneView" class="img-large img-center" />

PLUSライセンスを使用すると、バックアップを毎日、毎週、または任意のcronベースの間隔で自動的に実行するようスケジューリングできます。**ジョブ履歴**タブには、各実行結果 — 転送サイズ、速度、ファイル数、完了ステータス — が記録され、すべてのバックアップサイクルの監査証跡を提供します。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **リモートタブ > 新規リモート**に移動し、**Yandex Disk**を選択して、ブラウザで認証します。
3. エクスプローラーパネルでYandex Diskのファイルを閲覧します。
4. **ジョブマネージャー**で同期ジョブを作成し、ローカルストレージまたは別のクラウドにバックアップします。

RcloneViewを通じてYandex Diskを管理することは、進行中のプロジェクトをバックアップする場合でも、新しいプロバイダーへファイルを移行する場合でも、すべてのクラウドストレージに対して一貫したインターフェースを持つことを意味します。

---

**関連ガイド:**

- [RcloneViewを使ってYandex DiskとGoogle Driveを同期する](https://rcloneview.com/support/blog/sync-yandex-disk-with-google-drive-using-rcloneview)
- [Dropboxクラウドストレージを管理 — RcloneViewで同期・バックアップ](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [RcloneViewでYandex DiskとGoogle Driveのファイルを転送する](https://rcloneview.com/support/blog/transfer-yandex-and-google-drive-with-rcloneview)

<CloudSupportGrid />

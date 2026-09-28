---
slug: sync-nextcloud-to-koofr-rcloneview
title: "NextcloudをKoofrに同期 — RcloneViewでクラウドバックアップ"
authors:
  - robin
description: "RcloneViewを使って、セルフホスト型のNextcloudインスタンスをKoofrにバックアップしましょう — プライバシー重視の2つのストレージプロバイダー間での直接的なクラウド間同期です。"
keywords:
  - NextcloudをKoofrに同期
  - Nextcloud Koofr バックアップ
  - RcloneView Nextcloud
  - RcloneView Koofr
  - セルフホスト クラウドバックアップ
  - クラウド間同期
  - Nextcloud Koofr 転送
  - ヨーロッパ クラウドストレージ バックアップ
tags:
  - RcloneView
  - nextcloud
  - koofr
  - cloud-to-cloud
  - sync
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# NextcloudをKoofrに同期 — RcloneViewでクラウドバックアップ

> セルフホスト型のNextcloudインスタンスに、手動エクスポートの代わりにスケジュールで動くKoofrへのオフサイトバックアップを用意しましょう。

Nextcloudが人気なのは、ストレージを自分の管理下に置けるからですが、その管理権限には、サーバー障害1回、不具合のあるアップデート、ディスクエラーだけで、唯一のコピーすべてを失う可能性があるという意味も含まれています。Koofrは同じくEUを拠点とするプライバシー重視のプロバイダーであるため、セカンダリコピーの自然な組み合わせです — 無関係な法域ではなく、似たようなデータ居住地のポリシーを持つ場所にバックアップが置かれます。RcloneViewは両方を通常のリモートとして接続し、その間で直接コピーを実行するため、バックアップがNextcloudサーバー自体をアップロードクライアントとして兼用することに依存しません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## NextcloudとKoofrを接続する

リモートタブ > 新規リモートから、WebDAVを使ってNextcloudをリモートとして追加します — Nextcloudはインスタンスの管理パネルの設定に表示されるURLでWebDAV経由でファイルを公開しているため、サーバーアドレス、ユーザー名、そして通常のログインパスワードではなくアプリパスワードが必要です。Koofrは独自のOAuthログインフローを通じて別途追加します。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントおよび同期し、Windows、macOS、Linuxで利用できるため、Nextcloudサーバーが自宅のNASにあってもレンタルVPSにあっても、同じ2つのリモート設定がそのまま機能します。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

両方のリモートがリモートマネージャーに表示されたら、2つのエクスプローラーパネルを並べて開き、Nextcloudのフォルダ構造を閲覧できることと、（おそらく空の）Koofrの宛先を確認してから、自動化の設定に進みましょう。

## 同期ジョブを作成する

このようなバックアップには、その場のドラッグアンドドロップではなく、4ステップの同期ウィザードを使いましょう — NextcloudをソースにKoofrを宛先に設定し、Koofrがコピーを受け取るだけでNextcloudが正となるよう一方向同期を選び、実際に転送が行われる前にまずドライランを実行してファイルリストが正しいか確認します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync from Nextcloud to Koofr in RcloneView" class="img-large img-center" />

ステップ3では、オフサイトに複製したくないものを除外します — Nextcloud独自の`.git`形式のバージョンフォルダや、すでに他の場所でバックアップしている大容量の同期済みメディアライブラリは、フィルタールールの良い対象であり、Koofr側のコピーを実際に冗長化が必要なものに集中させることができます。

## 定期バックアップをスケジュールする

一度限りの同期では今日の障害からしか守れず、来月の障害には対応できません。PLUSライセンスでは、ウィザードのステップ4でcrontab形式のスケジューリングを追加できるため、アプリを開かなくてもNextcloudからKoofrへの同期が毎晩または毎週実行されます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Koofr backup job in RcloneView" class="img-large img-center" />

ジョブ履歴では、スケジュールされたすべての実行について、完了状態、ファイル数、所要時間の記録が残るため、スケジュールされたタスクが裏で静かに動いていると思い込む代わりに、バックアップが実際に実行されたことを確認できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. NextcloudインスタンスをWebDAVリモートとして、KoofrをOAuthリモートとして追加します。
3. NextcloudからKoofrへの一方向同期ジョブを作成し、複製したくないものはフィルターで除外します。
4. ジョブを自動実行するようスケジュールし、定期的にジョブ履歴を確認して正常に完了しているかチェックします。

セルフホスト型サーバーの安全性はそのバックアップ次第であり、そのバックアップを2つ目の独立したプロバイダーに向けることこそが、セルフホスティングがそのままでは残してしまう単一障害点のギャップを解消する方法です。

---

**関連ガイド:**

- [KoofrをProton Driveに同期 — RcloneViewでクラウドバックアップ](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [Nextcloud同期エラーの修正 — RcloneViewで解決する方法](https://rcloneview.com/support/blog/fix-nextcloud-sync-errors-rcloneview)
- [KoofrからJottacloudへ移行 — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-koofr-to-jottacloud-rcloneview)

<CloudSupportGrid />

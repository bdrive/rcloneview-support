---
slug: migrate-koofr-to-mega-rcloneview
title: "KoofrからMegaへ移行 — RcloneViewでファイルを転送"
authors:
  - steve
description: "RcloneViewでKoofrからMegaへ移行します。両方のリモートを接続し、Dry Runでプレビューし、クラウド間でファイルをコピーし、Folder Compareで検証します。"
keywords:
  - KoofrからMegaへ移行
  - Koofr to Mega 転送
  - KoofrのファイルをMegaへ移動
  - Koofr Mega 移行
  - RcloneView クラウド間転送
  - Koofr to Mega 同期
  - rclone GUI
  - クラウド移行ツール
  - Mega ファイル転送
  - クラウド転送の検証
tags:
  - RcloneView
  - koofr
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# KoofrからMegaへ移行 — RcloneViewでファイルを転送

> Koofrのライブラリを2つのクラウド間で直接Megaへコピーします。最初にプレビューを確認し、最後に検証を行います。

KoofrとMegaはストレージへのアプローチが異なり、両者の間を手作業で移動するには、すべてをダウンロードして再アップロードする必要があります。何年分ものプロジェクトフォルダーを持つ写真家や、共有ドキュメントを扱う小規模オフィスにとって、それは何時間もつきっきりになる作業です。RcloneViewは1つのウィンドウで両方のサービスを接続し、両者の間で直接転送します。ジョブはプレビュー、繰り返し実行、履歴での確認が可能です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## KoofrとMegaをリモートとして追加する

**Remote > New Remote**を開き、セットアップダイアログが求める認証情報でKoofrを追加します。次に、メールアドレスとパスワードでMegaを追加します。MegaはOAuthではなく認証情報入力方式のリモートなので、ブラウザーでの手順はありません。両方がRemote Managerに表示されたら、それぞれを別のExplorerパネルで開けます。

KoofrとMegaは、同じリモート一覧の中で他の対応プロバイダーと並んで表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでKoofrとMegaのリモートを作成" class="img-large img-center" />

## 転送を計画する

まず、移動したいKoofrのフォルダーを閲覧します。大きなフォルダーには**Get Size**を使って規模を把握し、置いていってよいものをメモしておきましょう。Megaにはプランに応じたアカウントの転送量とストレージの制限があるため、途中で気づくことのないよう、大規模なジョブを開始する前に宛先に十分な空き容量があるか確認してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでKoofrとMegaを並べて閲覧" class="img-large img-center" />

## Copyジョブを作成してDry Runを実行する

Syncウィザードで、Koofrをソース、Megaのフォルダーを宛先に設定します。既存のMegaファイルが削除されないよう、**Copy**ジョブタイプを選択してください。詳細設定ではファイル転送数とequality checkerの数を調整できます。どちらかのサービスが遅くなったりエラーを返したりする場合は、値を下げてください。フィルタリングを使えば、持ち込みたくないファイルタイプやフォルダーをスキップできます。

本番のジョブの前に**Dry Run**を実行します。どのファイルがコピーされるかを正確に表示するため、ソースフォルダーの選択ミスを費用をかけずに発見できます。プレビューが正しければジョブを実行し、Transferringタブで速度と進行状況を確認しましょう。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferringタブでクラウド間転送を監視" class="img-large img-center" />

## 検証して記録を残す

実行後、左にKoofr、右にMegaを置いて**Compare**を開きます。左側のみのファイルや異なるファイルでフィルターして、届いていないものを確認し、Compareビューのコピー操作で転送します。Job Historyには実行ごとのステータス、所要時間、サイズ、ファイル数が保存されるため、古いアカウントを閉じる前に記録が手に入ります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="完了したKoofr to Mega転送を示すJob History" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote > New Remote**からKoofrとMegaを追加します。
3. KoofrからMegaへのCopyジョブを作成し、Dry Runを実行します。
4. ジョブを実行し、Koofrで何かを削除する前にFolder Compareで確認します。

先にコピーして後で検証すれば、MegaにすべてがそろうまでKoofrのファイルを引き続き利用できます。

---

**関連ガイド:**

- [KoofrからDropboxへ移行](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [pCloudからMegaへ移行](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [Megaの接続エラーとクォータエラーを修正](https://rcloneview.com/support/blog/fix-mega-connection-quota-errors-rcloneview)

<CloudSupportGrid />

---
slug: migrate-mega-to-proton-drive-rcloneview
title: "MegaからProton Driveへ移行 — RcloneViewでファイルを転送する"
authors:
  - alex
description: "RcloneViewでMegaとProton Driveの間で直接ファイルを移動 — ローカルへの一時保存もサードパーティの中継も不要で、転送を完全にコントロールできます。"
keywords:
  - MegaからProton Driveへ移行
  - Mega Proton Drive 転送
  - プライバシー重視のクラウド移行
  - RcloneView Mega
  - RcloneView Proton Drive
  - 暗号化クラウドストレージ移行
  - クラウド間転送
  - Mega Proton Drive 同期
tags:
  - RcloneView
  - mega
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# MegaからProton Driveへ移行 — RcloneViewでファイルを転送する

> プライバシー重視の2つのクラウドプロバイダー、1つの直接転送経路 — RcloneViewはローカルへの往復なしにMegaとProton Driveの間でファイルを移動します。

MegaからProton Driveに乗り換える、あるいは両方を1つのプライバシー重視のバックアップ戦略に統合しようとするユーザーは、たいてい同じ壁にぶつかります。どちらのプロバイダーも相手と直接やり取りするネイティブな方法を提供していないのです。MegaからすべてをローカルディスクにダウンロードしてからProton Driveに再アップロードする方法も機能しますが、時間が2倍かかり、ローカルディスクの使用量も2倍になり、再アップロードが密かに失敗する可能性のあるステップが増えます。RcloneViewは両方のリモートに同時に接続し、それらの間で直接転送します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

RcloneViewではMegaはメールアドレスとパスワードの認証情報で追加され、別途OAuthフローは不要です。Proton Driveも同様の方法で追加されます:メールアドレスとパスワード、アカウントで有効になっている場合はオプションの二要素認証ステップが加わります。両方のリモートを設定すると、エクスプローラー内に別々のタブとして表示され、アプリを離れることなくそれぞれのフォルダ構造を閲覧できます。移行の一部にビジネス向けストレージも含まれる場合は、FREEライセンスで完全な読み書きができるS3、Azure、Backblaze B2も接続できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでMegaまたはProton Driveの新しいリモートを追加する" class="img-large img-center" />

両方のタブを開いた状態で、Megaパネルからフォルダをドラッグしてプロトンドライブパネルにドロップすると、リモート間の直接コピーがトリガーされます — データはファイル本体の中間ステップとしてお使いのマシンのディスクを経由せず、rcloneを介してクラウド間でストリーミングされます。

## 一度限りのドラッグではなく構造化された同期を実行する

単一フォルダではなくアカウント全体の移行の場合、同期ウィザードの方が適したツールです。Megaをソース、Proton Driveを転送先として選択し、Mega側に触れないよう片方向同期を選び、転送を開始する前に除外したいもの(大容量の動画アーカイブ、一時ファイル、特定の拡張子など)があればフィルタリングステップに進みます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでMegaからProton Driveへの同期ジョブを設定する" class="img-large img-center" />

まずドライラン(Dry Run)を実行してください。データを一切移動せずにコピーされるすべてのファイルを一覧表示するため、設定ミスのあるフィルターがスキップしすぎたり含めすぎたりしかねない初回のアカウント全体移行で特に重要です。

## 移行が正しく完了したことを確認する

同期が完了したら、同じ2つのフォルダ間でフォルダ比較(Folder Compare)を開きます。「同じファイルを表示」と「異なるファイルを表示」フィルターにより、すべてのファイルが正しく到着しサイズが一致しているかを確認でき、ソースから何かを削除する前に部分的な転送を発見する最も速い方法です。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewで移行後にMegaとProton Driveのフォルダを比較する" class="img-large img-center" />

一度限りの移動ではなく定期的なバックアップの場合 — Proton DriveをMegaフォルダの常設ミラーとして維持する場合 — Job Managerにジョブを保存し、各実行後に実行履歴を確認して転送速度とエラーが発生したファイルを追跡してください。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. メール/パスワードの認証情報を使ってMegaとProton Driveの両方をリモートとして追加します。
3. Mega からProton Driveへの片方向同期ジョブを設定し、必要に応じてフィルターを適用します。
4. ドライランを実行してから同期を実行し、フォルダ比較で確認します。

プライバシー重視のストレージを1つの移行ワークフローに統合することで、移動のすべての段階でデータを自分のコントロール下に置いておけます。

---

**関連ガイド:**

- [RcloneViewでProton Driveのクラウド同期を管理する](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [RcloneViewでMegaからGoogle DriveまたはOneDriveへ移行する](https://rcloneview.com/support/blog/migrate-mega-to-google-drive-onedrive-rcloneview)
- [RcloneViewでProton Driveのバックアップを他のクラウドに同期する](https://rcloneview.com/support/blog/sync-proton-drive-backup-other-clouds-rcloneview)

<CloudSupportGrid />

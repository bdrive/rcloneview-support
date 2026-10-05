---
slug: migrate-mega-to-cloudflare-r2-rcloneview
title: "MegaからCloudflare R2へ移行 — RcloneViewでファイルを転送"
authors:
  - robin
description: "RcloneViewでMegaからCloudflare R2へ移行します。2つのリモートを接続し、Dry Runを実行し、クラウド間で転送して、Folder Compareで検証します。"
keywords:
  - MegaからCloudflare R2へ移行
  - MegaからR2への転送
  - MegaのバックアップをR2へ
  - クラウド間移行
  - Cloudflare R2オブジェクトストレージ
  - Megaクラウドストレージ
  - RcloneView
  - rclone GUI
  - Megaからファイルを移動
tags:
  - RcloneView
  - mega
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# MegaからCloudflare R2へ移行 — RcloneViewでファイルを転送

> RcloneViewを使って、Megaのライブラリを実行前にジョブをプレビューしながらCloudflare R2バケットへ移します。

Megaは個人向けストレージに適していますが、バケット形式のアクセス、S3互換API、あるいはストレージと共有の明確な分離が必要なプロジェクトでは、オブジェクトストレージに移ることがよくあります。RcloneViewはMegaとCloudflare R2をリモートとして接続し、1つのジョブで両者の間を転送します。プレビュー、モニタリング、すべての実行履歴も利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## MegaとCloudflare R2を接続

New Remoteを開き、Megaを選択します。アカウントの認証情報であるメールアドレスとパスワードを使用します。次にR2リモートを作成します。Cloudflareダッシュボードでバケットを作成し、Admin Read & Write権限を持つAPIトークンを生成します。RcloneViewはトークンの認証情報、Account ID、そして`https://<ACCOUNT_ID>.r2.cloudflarestorage.com`という形式のエンドポイントを求めます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでMegaとCloudflare R2のリモートを追加" class="img-large img-center" />

RcloneViewはWindows、macOS、Linuxで90以上のクラウドストレージサービスをサポートしており、2つのリモートを保存するとExplorerに並べて表示されます。

## 転送前にプレビュー

2つのExplorerパネルを開き、左にMega、右にR2バケットを表示します。異なるリモート間のドラッグは移動ではなくコピーになるため、手早くコピーするにはフォルダをドラッグします。ライブラリ全体の場合は同期ウィザードを使用します。MegaフォルダをソースにバケットをデスティネーションにしてDry Runを実行し、コピーまたは削除されるファイルを確認します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="MegaからCloudflare R2への転送ジョブ設定" class="img-large img-center" />

Megaに800GBのプロジェクトアーカイブを持つ動画編集者を考えてみましょう。Step 2では、小さなファイルが多い場合にファイル転送数を増やしたり、ハッシュとサイズのチェックが必要ならチェックサム比較を有効にしたりできます。Step 3のフィルタでフォルダを除外したり、ファイルサイズに上限を設けたりできます。

## モニタリングと検証

ジョブが開始されると、Transferringタブに進行状況、速度、ファイル数が表示され、必要に応じて実行をキャンセルできます。エラーに注意し、セッションが途中で止まった場合はジョブを再実行してください。Job Historyにはステータス、所要時間、サイズ、ファイル数が記録されます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneViewでMegaからR2への転送を監視" class="img-large img-center" />

完了したら、片側にMega、もう片側にR2を置いてFolder Compareを開きます。Left-onlyファイルはバケットにないものを示し、比較ビューからそのままコピーできます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="MegaとCloudflare R2のFolder Compare" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード** [rcloneview.com](https://rcloneview.com/src/download.html)してください。
2. メールアドレスとパスワードでMegaを、APIトークン、Account ID、エンドポイントでCloudflare R2を追加します。
3. MegaからR2バケットへの同期ジョブを作成し、Dry Runを実行します。
4. 転送を開始し、Folder Compareで結果を確認します。

プレビューを行い、最後にFolder Compareで確認する移行なら、R2に何が届いたかを確かめられます。

---

**関連ガイド：**

- [Megaストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Cloudflare R2の管理 — RcloneViewで同期とバックアップ](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — RcloneViewで転送前に同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />

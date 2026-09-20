---
slug: migrate-koofr-to-jottacloud-rcloneview
title: "KoofrからJottacloudへ移行 — RcloneViewでファイルを転送する"
authors:
  - alex
description: "RcloneViewを使ってKoofrからJottacloudへファイルを移動しましょう — 検証済みの、プライバシー重視の欧州発ストレージプロバイダー2社間でのクラウド間転送です。"
keywords:
  - Koofr から Jottacloud へ移行
  - Koofr Jottacloud 転送
  - RcloneView Koofr
  - RcloneView Jottacloud
  - 欧州クラウド移行
  - クラウド間転送
  - Koofr Jottacloud 同期
  - クラウド間ファイル移動
tags:
  - RcloneView
  - koofr
  - jottacloud
  - cloud-to-cloud
  - migration
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# KoofrからJottacloudへ移行 — RcloneViewでファイルを転送する

> ローカルのダウンロードフォルダを経由せず、KoofrからJottacloudへクラウド間で直接ファイルを移動しましょう。

KoofrとJottacloudはどちらも欧州発のストレージプロバイダーで、データのレジデンシーやプライバシーを重視するユーザーに人気があり、プランやアカウント容量を比較した後にどちらか一方へ集約するのはよくあることです。すべてのファイルをノートPCにダウンロードしてから再アップロードする方法で移行すると、帯域幅と時間を無駄にするうえ、接続が途中で切れると転送が中途半端に終わるリスクもあります。RcloneViewは両方のリモートに同時に接続してファイルを直接コピーするため、転送中もローカルマシンは単なる中継点であり、保存先にはなりません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

リモートタブ > 新規リモートからKoofrをリモートとして追加し、Jottacloudについても同じ手順を繰り返します。両方とも共有のログイン画面ではなく、それぞれ独自のアカウント認証フローで接続するため、開始前に各プロバイダーのアカウント情報を手元に用意しておいてください。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントおよび同期でき、Windows、macOS、Linuxで動作するため、どのプラットフォームから移行する場合でも同じ手順がそのまま使えます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

両方のリモートがリモートマネージャーに表示されたら、Koofrを表示するエクスプローラーパネルとJottacloudを表示するエクスプローラーパネルを並べて開き、何かを移動する前に両方のファイルツリーを一目で確認できるようにしましょう。

## 転送を実行する

一度きりの移行であれば、Koofrパネルから移動したいフォルダをドラッグし、Jottacloudパネルへそのままドロップします。異なるリモート間の転送であるため、RcloneViewはこのドロップをデフォルトでコピーとして扱い、すべてがJottacloud側に正しく到着したことを確認するまでKoofr側の元のファイルはそのまま残ります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dragging files from Koofr to Jottacloud in RcloneView" class="img-large img-center" />

より大きなライブラリの場合は、4ステップの同期ウィザードの方が適したツールです。Koofrを送信元、Jottacloudを送信先として設定し、まずドライランを実行して実際にコピーされる内容を事前に確認してから、本番の同期を実行します。ドライランはすべてのライセンスプランで利用できるため、大規模な移行を実行する前にプレビューを省略する理由はありません。

## 移行が完了したことを確認する

転送が終わったら、フォルダ比較を使って両側をファイル単位で確認しましょう。片方にしか存在しないファイルや、サイズが異なる状態で転送されたファイルを検出してくれるため、Koofrから何かを削除する前に不完全なアップロードを見つけられます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Koofr to Jottacloud transfer in RcloneView" class="img-large img-center" />

ジョブ履歴には、ファイル数、合計サイズ、所要時間といった実行記録が永続的に残るため、後でアカウント解約のために移行を証明する必要がある場合には、スクリーンショットを撮ったりエクスポートしたりしておく価値があります。

## はじめ方

1. まだの場合は[rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. リモートタブ > 新規リモートからKoofrとJottacloudの両方をリモートとして追加します。
3. 手早く移動したい場合はドラッグアンドドロップを、ライブラリ全体を移行したい場合はドライラン付きの同期ジョブを構築します。
4. Koofrから何かを削除する前に、フォルダ比較を実行してすべてのファイルが正しく到着したことを確認します。

両方のプロバイダーを同じウィンドウで接続しておけば、欧州クラウドストレージの統合は数日がかりのダウンロードと再アップロードのプロジェクトではなく、1回のセッションで終わる作業になります。

---

**関連ガイド:**

- [KoofrをProton Driveに同期 — RcloneViewでクラウドバックアップする](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [JottacloudからOneDriveへ移行 — RcloneViewでファイルを転送する](https://rcloneview.com/support/blog/migrate-jottacloud-to-onedrive-rcloneview)
- [Koofr vs Jottacloud — RcloneViewで見る欧州クラウドストレージ比較](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />

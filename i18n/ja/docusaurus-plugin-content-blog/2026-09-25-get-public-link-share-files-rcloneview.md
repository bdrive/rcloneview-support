---
slug: get-public-link-share-files-rcloneview
title: "公開リンクを取得 — RcloneViewでクラウドファイルを即座に共有する"
authors:
  - kai
description: "ブラウザタブを開かずに、RcloneViewのファイルエクスプローラーから直接クラウドファイルの共有可能な公開リンクを生成する方法を学びます。"
keywords:
  - 公開リンク取得
  - クラウドファイル共有
  - クラウドストレージ共有リンク
  - RcloneView 公開リンク
  - Google Drive 共有リンク
  - Dropbox 共有リンク
  - Box 共有リンク
  - クラウドファイル共有
  - rclone 公開リンク
  - OneDrive 共有リンク
tags:
  - RcloneView
  - feature
  - file-management
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 公開リンクを取得 — RcloneViewでクラウドファイルを即座に共有する

> ブラウザは不要です。RcloneViewでファイルを右クリックするだけで、数秒で共有可能な公開リンクを生成できます。

クラウド上のファイルを1つ共有するには、通常ブラウザタブを開き、プロバイダーのWebコンソールにログインし、共有ボタンを探し、期待通りの権限になっているか分からないリンクをコピーするという手順が必要です。RcloneViewはこの一連のワークフローを、右クリックメニュー項目1つに集約します。複数のプロバイダーにまたがるファイルを同じエクスプローラーで管理している場合、この一貫性は見た目以上に重要です — ファイルを1つ送るために5つの異なるWeb UIを行き来する必要がなくなります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 公開リンク取得の仕組み

**公開リンクを取得(Get Public Link)** コマンドは、Copy、Cut、Rename、Downloadと同じ右クリックコンテキストメニューにあります。接続されたリモートのファイルリストで1つ以上のファイルを選択し、右クリックしてGet Public Linkを選びます。RcloneViewはそのリクエストを背後のrcloneバックエンドに渡し、バックエンドはそのプロバイダーのAPIに対して、そのバックエンドがサポートする権限(読み取り専用、有効期限付き、パスワード保護など)でリンクを生成するよう要求します。

これはプロバイダー固有の動作であるため、正確なリンク形式とオプションは異なります。DropboxのリンクはBoxのリンクとは異なる振る舞いをし、すべてのリモートタイプが公開リンクをサポートしているわけではありません — 一般的なSFTPやFTPサーバーのようなプロトコルベースのリモートには、コンシューマー向けクラウドドライブのような「共有」の概念が通常ありません。RcloneViewは、サポートされていないリモートで静かに失敗する万能ボタンを偽装するのではなく、バックエンドが実際にサポートしているものをそのまま表示します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote explorer with right-click context menu open" class="img-large img-center" />

## 日々のワークフローでの活用

クライアントへの成果物、マーケティング素材、単発のドキュメント依頼を扱うチームは、ファイルがすでにある同じウィンドウ内でリンクを生成できることから最も恩恵を受けます。ファイルがどのプロバイダーにあるかを思い出して、そのプロバイダーのサイトを別途開く代わりに、RcloneViewのExplorerパネルでそのファイルまで移動し、その場でリンクを生成すればよいのです。マウント専用ツールとは異なり、RcloneViewはFREEライセンスでも同期とフォルダ比較を行えるため、今日リンクを共有したのと同じウィンドウが、明日は同じフォルダをスケジュールに沿ってバックアップし続けることもできます。

これは、1つのプロジェクトの資産が複数のプロバイダーに分散している場合に特に便利です — 例えば、RAW写真の原本はBackblaze B2に、クライアント向けの校正はDropboxにある場合です。2つのワークフローは必要なく、タブが2つ開いたエクスプローラーが1つあれば済みます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud to cloud file transfer panel in RcloneView" class="img-large img-center" />

## 公開リンクとフォルダ整理の組み合わせ

共有する前に、RcloneViewのファイルリスト表示を使って、実際に何を公開しようとしているのかを正確に確認しておくとよいでしょう。ファイルサイズと更新日時を確認するにはList Viewに切り替え、画像を共有していて正しいファイルを選択したか素早く視覚的に確認したい場合はThumbnail Viewを使います。Get Public Linkは複数選択したファイルでも動作するため、右クリックを繰り返す代わりに一度に複数のリンクを生成できます。

そのリンクを、定期的に繰り返し共有するために維持したい場合 — 例えば、クライアントが常に同じURLから取得する週次レポートなど — 同じパスの元ファイルを更新し続けるSyncジョブと組み合わせれば、リンク自体を再生成する必要がなくなります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled file updates" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. New Remoteを使って、共有したいファイルがあるリモートを接続してください。
3. Explorerパネルでファイルまで移動し、右クリックしてGet Public Linkを選択してください。
4. 生成されたリンクをコピーして送信してください — 別途ブラウザでのログインは不要です。

これが日常のルーチンになれば、クラウドファイルの共有は、90以上ある対応プロバイダーのどこにあっても同じ3クリックで済みます。

---

**関連ガイド:**

- [公開リンク非対応エラーの修正 — RcloneViewで正しくファイルを共有する](https://rcloneview.com/support/blog/fix-public-link-not-supported-errors-rcloneview)
- [サイズを取得 — RcloneViewでクラウドストレージ使用量を即座に計算する](https://rcloneview.com/support/blog/get-size-calculate-cloud-storage-usage-rcloneview)
- [サムネイル表示 — RcloneViewでクラウド画像を視覚的に閲覧・プレビューする](https://rcloneview.com/support/blog/thumbnail-view-image-preview-cloud-rcloneview)

<CloudSupportGrid />

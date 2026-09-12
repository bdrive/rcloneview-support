---
slug: migrate-seafile-to-backblaze-b2-rcloneview
title: "Seafile から Backblaze B2 へ移行する — RcloneView でファイルを転送"
authors:
  - steve
description: "信頼性の高いクラウド間転送に対応したクロスプラットフォーム GUI である RcloneView を使って、セルフホストの Seafile から Backblaze B2 へライブラリを移行します。"
keywords:
  - seafile から backblaze b2 へ移行
  - seafile backblaze b2 移行
  - seafile クラウドバックアップ
  - セルフホストからクラウドへの移行
  - backblaze b2 gui
  - rcloneview seafile
  - クロスプラットフォーム ファイル転送
  - seafile ライブラリ バックアップ
tags:
  - RcloneView
  - seafile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Seafile から Backblaze B2 へ移行する — RcloneView でファイルを転送

> コマンドラインを使わずに、セルフホストの Seafile ライブラリを Backblaze B2 オブジェクトストレージへ移行します。

自社のハードウェアやプライベートサーバーで Seafile を運用しているチームは、やがて壁に突き当たります。ローカルディスクの容量が不足したり、サーバーの保守が負担になったり、災害復旧のためにオフサイトのコピーが必要になったりするのです。Backblaze B2 はこうしたデータのために、コスト効率が良く耐久性の高い保存先を提供しますが、セルフホストの同期プラットフォームとオブジェクトストレージの間で転送を調整することは、多くのファイルマネージャーがうまく処理できない作業です。RcloneView は Seafile と Backblaze B2 を同じウィンドウ内でリモートとして接続でき、ライブラリを直接参照・比較・移動できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Seafile と Backblaze B2 をリモートとして接続する

Seafile は他のリモートと同様に RcloneView に追加され、フォルダツリーとブレッドクラムのパスバーとともに、参照可能なライブラリのファイル一覧が表示されます。Backblaze B2 は、リモート作成時に Application Key ID と Application Key を直接入力する必要があります — OAuth によるリダイレクトも別途の CLI 設定も不要です。両方のリモートはタブとして表示され、水平または垂直分割を使って、1 つのパネルで Seafile を、もう 1 つのパネルで B2 バケットを開くことができます。

マウントのみに対応する他のツールとは異なり、RcloneView は FREE ライセンスでも同期とフォルダ比較を行えるため、一度限りの転送であっても単純なドラッグ&ドロップだけに頼る必要はありません。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Backblaze B2 remote alongside Seafile in RcloneView" class="img-large img-center" />

両方のリモートが表示されたら、小規模なライブラリはパネル間のドラッグ&ドロップで、再試行やフィルタリングが必要な大規模かつ継続的な転送には Sync ジョブを設定してください。

## Sync ジョブとして移行を実行する

ライブラリ全体を移行する場合は、Seafile をソース、Backblaze B2 バケットを宛先とする Sync ジョブを設定します。4 ステップのウィザードでは、同時ファイル転送数とマルチスレッド転送数を設定できます。これは、共有ドキュメントライブラリに典型的な、数千個の小さなファイルを移動する際に重要になります。チェックサム比較を有効にすると、1 回のパスで済ませるのではなく、ハッシュとサイズによってファイルが検証されます。

転送を実行する前に、Dry Run を実行して、コピーされるファイルを正確に事前確認してください。これは特に、長年使用されてきたライブラリを移行する際に有用で、古くなったファイルや予想外に大きなファイルが B2 のストレージを消費する前に明らかにしてくれます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Seafile to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

## 転送のフィルタリングと確認

Seafile のライブラリには、ドキュメントの種類、一時ファイル、バージョン履歴のアーティファクトが混在していることが多く、それらを B2 に重複させたくない場合があります。RcloneView のフィルタリング設定を使えば、ファイルの種類、パス、経過期間で除外できます — たとえば、コードに関連するライブラリでは `.git/` フォルダをスキップしたり、アーカイブ移行のために指定した年数より古いファイルを除外したりできます。カスタムフィルターでは、拡張子の除外には `.iso`、ルートレベルのパス除外には `/.git/*` のような単純なパターンを使用します。

ジョブが完了すると、Job History に実行タイプ、所要時間、合計サイズ、転送速度、ファイル数が記録され、移行が正しく完了したかどうかを関係者に尋ねられた際に参照できる記録が残ります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Seafile to Backblaze B2 migration" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**してください。
2. アカウントの認証情報を使って、Seafile サーバーをリモートとして追加してください。
3. Application Key ID と Application Key を使って Backblaze B2 リモートを作成してください。
4. Seafile から B2 への Sync ジョブを設定し、Dry Run を実行してから、実行して Job History で確認してください。

セルフホストのインフラから離れることは、ワークフローをゼロから作り直すことを意味しません — 両方のエンドポイントを 1 つのエクスプローラー内に置くことで、移行は 1 つの追跡可能なジョブになります。

---

**関連ガイド:**

- [Storj 分散型クラウド同期を管理する](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [Nextcloud を Backblaze B2 に同期する](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [Seafile の同期エラーを解決する](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />

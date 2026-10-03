---
slug: migrate-opendrive-to-backblaze-b2-rcloneview
title: "OpenDrive から Backblaze B2 へ移行 — RcloneView でファイルを転送"
authors:
  - tayson
description: "RcloneView で OpenDrive のファイルを Backblaze B2 へ移動します。2 つのリモートを接続し、Dry Run でコピーを確認し、転送を実行して、Folder Compare で検証します。"
keywords:
  - OpenDrive Backblaze B2 移行
  - OpenDrive B2 転送
  - OpenDrive 移行
  - Backblaze B2 バックアップ
  - クラウド間転送
  - RcloneView OpenDrive
  - RcloneView Backblaze B2
  - OpenDrive B2 ファイル移動
tags:
  - RcloneView
  - opendrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDrive から Backblaze B2 へ移行 — RcloneView でファイルを転送

> 手動でダウンロードして再アップロードする代わりに、事前確認と検証ができるクラウド間転送で、OpenDrive のライブラリを Backblaze B2 のバケットへ移動します。

ファイル共有アカウントでは手狭になったチームは、長期アーカイブ用にオブジェクトストレージを求めることがよくあります。OpenDrive から Backblaze B2 へ手作業でデータを移すには、まずすべてをローカルにダウンロードする必要があります。RcloneView は両方のサービスに接続し、サービス間で直接転送します。Dry Run と比較の手順により、何が移動したかを確認できます。FREE ライセンスで、S3、Azure、Backblaze B2 にフル読み書きで接続できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 2 つのリモートを接続する

Remote タブを開き、New Remote を選択します。OpenDrive を 1 つ目のリモートとして、Backblaze B2 をもう 1 つのリモートとして追加します。B2 では Application Key ID と Application Key を使用します。これらは Backblaze のキー管理ページで作成します。転送先のパスを用意できるよう、先に Backblaze で転送先バケットを作成してください。

両方のリモートが Remote Manager に表示されたら、2 つの Explorer パネルを並べて開きます。大量の転送を始める前に、それぞれのトップレベルを参照して認証情報が機能していることを確認します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で OpenDrive と Backblaze B2 のリモートを追加" class="img-large img-center" />

## フォルダ構成を計画する

移行は、データを B2 にどう配置するかを決める良い機会です。一般的なパターンは用途ごとに 1 つのバケットを用意する方法で、たとえば完了したプロジェクト用のアーカイブバケットを作り、トップレベルのフォルダを現在の OpenDrive の構成と同じにします。最も大きな OpenDrive のフォルダで Get Size を使って容量を見積もり、最も重要なフォルダから先にコピーします。

一部のファイル形式を除外したい場合は、同期ウィザードのステップ 3 で、最大ファイルサイズ、最大ファイル経過期間、`.iso` などのカスタム除外ルールを設定できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView での OpenDrive から Backblaze B2 へのクラウド間転送" class="img-large img-center" />

## Dry Run のあとに転送する

OpenDrive をソース、B2 バケットを転送先としてジョブを作成します。移行では、ソースに手を加えない Copy ジョブのほうが安全です。Sync ジョブは、ソースに合わせるために転送先のファイルを削除することがあります。まず Dry Run を実行して、コピーされるファイルの一覧を確認します。

ステップ 2 では、「Retry entire sync if fails」を既定値の 3 のままにし、ソース側でスロットリングされる場合は同時転送数を下げることを検討してください。その後ジョブを実行し、Transferring タブで進行状況、速度、ファイル数を確認します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView で OpenDrive から B2 へのジョブを実行" class="img-large img-center" />

## ソースを廃止する前に検証する

ジョブが完了したら Job History を開き、ステータスが Completed であることを確認し、合計サイズとファイル数を見直します。次に、OpenDrive と B2 のフォルダに対して Compare を使用します。left-only のファイルは届かなかった項目で、different のファイルは再コピーすべきサイズの不一致を示します。比較結果に left-only のファイルがなくなるまで、OpenDrive のデータは保持してください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OpenDrive と Backblaze B2 の間の Folder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. OpenDrive と Backblaze B2 をリモートとして追加し、転送先バケットを作成します。
3. Copy ジョブを作成し、Dry Run を実行してから転送を実行します。
4. ソースを廃止する前に、Job History と Folder Compare で検証します。

事前確認と検証を行うコピーにより、大規模なライブラリでも B2 への移行を予測しやすくなります。

---

**関連ガイド:**

- [OpenDrive ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [RcloneView で SugarSync から Backblaze B2 へ移行](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [RcloneView で Koofr から Backblaze B2 へ移行](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

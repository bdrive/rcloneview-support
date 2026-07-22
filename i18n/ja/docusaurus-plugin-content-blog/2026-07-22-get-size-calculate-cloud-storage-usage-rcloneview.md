---
slug: get-size-calculate-cloud-storage-usage-rcloneview
title: "サイズ取得 — RcloneViewでクラウドストレージの使用量を即座に計算"
authors:
  - jay
description: "RcloneViewのサイズ取得(Get Size)機能を使って、同期や移行の前に90以上のクラウドプロバイダーにまたがるフォルダや選択項目の合計サイズを計算しましょう。"
keywords:
  - サイズ取得機能
  - クラウドストレージ サイズ計算
  - クラウドストレージ フォルダサイズ
  - RcloneView サイズ取得
  - クラウドストレージ 使用量確認
  - 転送前のフォルダサイズ確認
  - マルチクラウド ストレージ監査
  - rclone about コマンド GUI
  - クラウドファイルマネージャー ツール
  - ストレージ使用量分析
tags:
  - RcloneView
  - feature
  - cloud-storage
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# サイズ取得 — RcloneViewでクラウドストレージの使用量を即座に計算

> RcloneViewでフォルダや選択項目を右クリックするだけで、転送全体を待たずに移動するデータ量を即座に確認できます。

クラウドプロバイダーは、実際にフォルダを移動してみるまでその大きさがどれほどかを分かりにくくしていることがよくあります。ネストされたサブフォルダが数千個ある「Media」フォルダは、同期ジョブが途中で止まったり、転送中に容量警告が表示されたりして初めて明らかになる数ギガバイトのデータを隠している場合があります。RcloneViewのFile Explorerの右クリックメニューにあるサイズ取得(Get Size)コマンドは、同期・マウント・移行を実行する前に、選択したファイルやフォルダの合計サイズをオンデマンドで計算することでこの問題を解決します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 何かを移動する前にフォルダサイズを確認する

Explorerパネルで1つ以上のファイルやフォルダを選択し、右クリックしてサイズ取得(Get Size)を選びます。RcloneViewは選択項目をたどって合計サイズを返します。これは、File Listのフッター概要だけではネストされたコンテンツが反映されない、深いサブディレクトリ構造を持つフォルダで特に有用です。これは選択項目がGoogle Drive、Amazon S3、セルフホストのNextcloudインスタンス、ローカルディスクのいずれにあっても同じように動作します — RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントおよび同期できるため、どのリモートを閲覧していても同じ右クリックメニューが適用されます。

サイズ取得(Get Size)は事前チェックとして最も役立ちます。大規模なSyncジョブや2つのクラウド間の一度きりの移行を開始する前に、ソースフォルダの実際のサイズを確認することで、転送時間を見積もり、移行先に十分な空き容量があるかを確認し、ジョブを絞り込むためのフィルタリングルールが必要かどうかを判断できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder in RcloneView to check its total size" class="img-large img-center" />

## 複数のリモートにわたるストレージ使用量の監査

接続されているすべてのリモート(クラウドでもローカルでも)が同じExplorer内にあるため、サイズ取得(Get Size)はマルチクラウド環境でストレージがどこで消費されているかを素早く監査する手段としても機能します。各リモートのトップレベルフォルダで順番に実行すれば、どのアカウントが上限に近づいているかの大まかな把握ができ、各プロバイダーの個別のWebコンソールにログインして使用量を確認するよりも速く済みます。

特定のフォルダではなくリモート単位でより正確な使用量を知りたい場合は、内蔵のRclone Terminalが`rclone about "remote:"`をサポートしており、プロバイダーのAPIから直接、使用済みおよび利用可能な合計ストレージを報告します。サイズ取得(Get Size)とターミナルの`about`コマンドは互いを補完します。一方は特定の選択項目に絞り込み、もう一方はアカウント全体の合計を報告します。

<img src="/support/images/en/blog/new-remote.png" alt="Multiple cloud remotes connected in RcloneView for storage auditing" class="img-large img-center" />

## サイズ確認を使って同期とフィルタルールを計画する

フォルダの実際のサイズが分かれば、RcloneViewのSyncウィザードはその情報をもとに行動するためのツールを提供します。ジョブ設定のステップ3には、最大ファイルサイズ、最大ファイル経過期間によるフィルタリングと、メディア・動画・画像・ドキュメントタイプ向けの定義済みフィルタが含まれており、サイズの大きすぎるフォルダを実際に転送が必要なファイルだけに絞り込むことができます。その後Dry Runを実行すると、現在のフィルタ設定の下で実際にコピーまたは削除されるファイルを正確にプレビューでき、実際にデータが移動する前にジョブが想定通りであることを確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring sync filters after checking folder size in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブ > New Remoteから監査したいリモートを接続します。
3. Explorerでフォルダを選択して右クリックし、サイズ取得(Get Size)を選んで合計容量を確認します。
4. その数値を使って、フルの転送を実行する前にSyncウィザードでフィルタやスケジュールを計画します。

正確にどれだけのデータを扱っているかを知ることで、当て推量が計画に変わります。サイズ取得(Get Size)は、その確認をサポートチケットになりかねなかった作業から、ワンクリックで済む習慣へと変えてくれます。

---

**関連ガイド:**

- [Job History & 転送ログ — RcloneViewですべての同期を監視する](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Dry Run プレビュー — RcloneViewで実行前にクラウド同期をシミュレーションする](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [RcloneViewでクラウドストレージの重複ファイルを見つけて削除する](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-rcloneview)

<CloudSupportGrid />

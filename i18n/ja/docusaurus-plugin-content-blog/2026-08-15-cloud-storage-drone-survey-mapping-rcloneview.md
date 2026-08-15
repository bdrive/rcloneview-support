---
slug: cloud-storage-drone-survey-mapping-rcloneview
title: "ドローン測量・マッピング企業向けクラウドストレージ — RcloneViewで大容量データセットを管理"
authors:
  - jay
description: "ドローン測量画像、オルソモザイク、LiDARデータセットを、RcloneViewの同期・マウント・比較ツールで複数のクラウドストレージプロバイダーにわたって管理します。"
keywords:
  - ドローン測量 クラウドストレージ
  - マッピング企業 バックアップ
  - オルソモザイク ファイル保存
  - LiDARデータ クラウド同期
  - ドローン画像 バックアップ
  - 地理空間データ管理
  - RcloneView ドローン測量
  - 測量会社 クラウドストレージ
  - ドローンデータ転送
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# ドローン測量・マッピング企業向けクラウドストレージ — RcloneViewで大容量データセットを管理

> 生の撮影データ、処理済みのオルソモザイク、点群データはあっという間に積み上がります — RcloneViewはチームが利用するすべてのクラウド上でそれらを整理された状態に保ちます。

1回のドローン測量フライトだけで数万枚の生画像が生成されることがあり、オルソモザイクやLiDAR点群といった処理済みの成果物は、現場ごとに数十ギガバイトに達することも珍しくありません。測量・マッピング企業は通常、アクティブな処理用の高速ローカルドライブ、クライアント納品用のクラウドストレージ、完了したプロジェクト用の低コストなアーカイブ層にデータを分散させており、そのためファイルは常に複数の場所間を移動する必要があります。RcloneViewは、プロバイダーごとに別々のアップロードツールを使い分ける代わりに、この移動を1つのインターフェースから管理できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 生の撮影データと処理済み成果物の整理

生の撮影アーカイブ、処理用ワークスペース、完成した成果物をクライアントと共有するクラウドの場所それぞれに、個別のリモートを設定します。RcloneViewのマルチパネルExplorerを使えば最大4つの場所を並べて表示できるため、生画像をローカルディスクからアーカイブする前に、処理済みのオルソモザイクが元のフライトフォルダと一致しているか確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでドローン測量データ用のクラウドリモートを設定する" class="img-large img-center" />

FREEライセンスでも、S3、Azure、Backblaze B2に完全な読み書きアクセスで接続できます。これは、大容量の処理済みデータセットをシート単位の費用なしにオブジェクトストレージへ長期保存し、クライアントに提供する必要がある測量会社にとって重要です。

## 手作業のアップロードなしで大規模なフライトデータセットを同期

同期ジョブのソースをローカルの撮影フォルダに、宛先をクラウドストレージに設定し、Advanced Settingsで同時ファイル転送数をアップロード帯域幅に合わせて調整します — 小さな生画像が大量にある場合は、少数の大きな処理済みファイルよりも高い並列度が有利です。max file ageフィルターを使えば、現場作業が活発な日には直近のフライトのみを同期し、時間的制約のある成果物のために帯域幅を確保できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでドローン測量画像をクラウドストレージに同期する" class="img-large img-center" />

新しい現場を初めて同期する前にDry Runを実行し、フォルダ構造とファイル数がフライトログと一致しているか確認しましょう。これにより、抜け落ちたフォルダがクライアント向けの問題になる前に発見できます。

## Folder Compareで成果物を検証

プロジェクトをクライアントに引き渡したりアーカイブしたりする前に、Folder Compareを使ってクラウドストレージにアップロードされたすべてのファイルがローカルの処理フォルダと一致しているか確認します。片方にのみ存在するファイルやサイズが異なるファイルをフラグ表示するため、クライアントがオルソモザイクの欠落タイルに気づく前に、中断されたアップロードを検出できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewでローカルのドローン測量ファイルをクラウドストレージと比較する" class="img-large img-center" />

継続的に取引のある測量クライアントについては、これらをスケジュール同期ジョブ(PLUSライセンス)として保存しておくことで、設定したスケジュールに従って新しいフライトデータがそれぞれ正しいクライアントフォルダに届くようになり、Job Historyで各データセットが正確にいつ納品されたかの記録を確認できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. ローカルの撮影ドライブ、処理用ワークスペース、クライアント納品用のクラウドストレージにリモートを追加します。
3. 通常のフライトデータセットのサイズに合わせて転送並列度を調整した同期ジョブを構成します。
4. 生の撮影データをアーカイブする前に、アップロードのたびにFolder Compareを実行してデータセットが完全に転送されたことを確認します。

複数のストレージ層にわたってフライトデータを整理しておくことで、ファイルを探す時間が減り、すべてのクライアント納品が完全であるという確信を持てます。

---

**関連ガイド:**

- [農業向けクラウドストレージ — RcloneViewでフィールドデータを管理](https://rcloneview.com/support/blog/cloud-storage-agriculture-farming-rcloneview)
- [RcloneViewによる建設プロジェクト管理向けクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [RcloneViewで大容量クラウド転送を高速化](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />

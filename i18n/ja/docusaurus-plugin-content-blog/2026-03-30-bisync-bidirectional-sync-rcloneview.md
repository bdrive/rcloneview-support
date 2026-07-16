---
slug: bisync-bidirectional-sync-rcloneview
title: "Bisync双方向同期 — RcloneViewによるクラウドの二方向同期"
authors:
  - tayson
description: "RcloneViewのbisync双方向同期を使って、複数のデバイスやプロバイダー間でローカルファイルとクラウドファイルを二方向に同期する方法を学びます。"
keywords:
  - bisync rcloneview
  - 双方向同期
  - 二方向クラウド同期
  - rclone bisync
  - クラウドファイル同期
  - 二方向ファイル同期
  - bisyncの設定
  - rcloneview 同期
  - マルチデバイス同期
  - 双方向バックアップ
tags:
  - feature
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync双方向同期 — RcloneViewによるクラウドの二方向同期

> Bisyncは両方向に変更を伝播させ、どちらか一方を上書きすることなく、ローカルファイルとクラウドストレージを完全なミラー状態に保ちます。

標準の同期操作は一方向です。送信元に合わせて送信先を一致させ、送信元に存在しないものは送信先から削除します。Bisyncはこれとは異なる動作をします。前回の実行以降に両側で発生した変更を追跡し、追加、変更、削除を両方向に伝播させます。RcloneViewはrcloneのbisync機能をグラフィカルインターフェースを通じて公開しており、コマンドラインスクリプトを書くことなく二方向クラウド同期を利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Bisyncの仕組み

rcloneのbisyncコマンドは、各回の実行が成功した後に送信元(Path1)と送信先(Path2)双方の状態を記録する、一対のリスティングファイルを保持します。次回以降の実行時には、bisyncは各側の現在の状態を保存されたリスティングと比較し、何が変更されたかを判定します。Path1上の新しいファイルはPath2にコピーされ、Path2上の新しいファイルはPath1にコピーされ、削除は両方向にミラーリングされます。

競合検出も組み込まれています。同じファイルが両側で実行の間に変更された場合、bisyncは片方のバージョンを黙って上書きするのではなく、それを競合としてフラグ付けします。デフォルトの動作では競合したコピーの名前を変更し、両方のバージョンを保持するため、後で手動で差分を解決できます。これは、複数のユーザーやデバイスが同じドキュメントを編集する可能性がある共有ワークフローにおいて重要です。

最初のbisync実行には、初期のベースラインリスティングを確立するために`--resync`フラグが必要です。RcloneViewでは新しいbisyncジョブを作成する際にこれを自動的に処理します。初回実行でresyncが行われ、それ以降のスケジュール実行はすべて通常の差分モードで動作します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Bisync bidirectional transfer configuration in RcloneView" class="img-large img-center" />

## RcloneViewでBisyncを設定する

RcloneViewでbisyncジョブを作成するには、ジョブマネージャーを開き、操作タイプとしてbisyncを選択します。2つのパスを選びます。例えば、`/home/user/Documents`のようなローカルディレクトリをPath1に、Google DriveフォルダをPath2に指定します。DropboxフォルダをOneDriveにミラーリングするなど、2つのクラウドリモート間でbisyncすることもできます。

フィルタールールは、標準の同期と同様にbisyncでも機能します。includeおよびexcludeパターンを使って、bisyncの対象を特定のファイルタイプやサブディレクトリに限定できます。例えば、ローカルのプロジェクトフォルダと共有OneDriveディレクトリの間で`*.docx`と`*.xlsx`ファイルのみをbisyncし、一時ファイルやOSのメタデータは無視するといった使い方が可能です。

RcloneViewのジョブスケジューラーは、15分ごと、1時間ごと、またはカスタムのcronスケジュールで、定期的にbisyncを実行することをサポートしています。頻繁な間隔で実行することで、競合が発生する余地を最小限に抑え、ローカルマシンとクラウドストレージの間でほぼリアルタイムの同期を実現できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a bisync job from the RcloneView job manager" class="img-large img-center" />

## Bisyncの実用的なユースケース

**マルチデバイスのドキュメント同期:** 作業用ドキュメントフォルダを、デスクトップとクラウドストレージの間で同期しておきます。ノートパソコン上でファイルを編集すると(これも独自のbisyncジョブを通じて同じクラウドフォルダに同期されます)、次回の実行で変更がすべての接続デバイスに伝播します。

**共同作業のプロジェクトフォルダ:** クラウドストレージフォルダを共有するチームは、bisyncを使ってローカルの作業コピーを維持できます。各チームメンバーのローカルでの変更はクラウドにプッシュされ、同僚によるリモートでの変更は自動的にプルされます。競合検出により、同時編集が互いを黙って上書きしないことが保証されます。

**ローカルとクラウドのハイブリッドワークフロー:** 高速なローカルファイルアクセスを必要としつつ、クラウドバックアップも望む開発者やデザイナーは、プロジェクトディレクトリをbisyncできます。ローカルでのファイル操作は瞬時のままである一方、クラウド上のコピーはバックアップや共有のために常に最新の状態に保たれます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring bisync job in RcloneView" class="img-large img-center" />

## Bisyncのベストプラクティス

競合を最小限に抑えるため、一貫したスケジュールでbisyncを実行してください。実行間隔が長くなるほど、編集が競合する可能性は高くなります。活発に作業しているディレクトリでは、15分から30分の間隔が応答性とリソース使用量の良いバランスを取ります。フィルターなしで非常に大きなディレクトリツリーに対してbisyncを実行することは避けてください。リスティングの比較に時間がかかる場合があります。RcloneViewのジョブ履歴を使って繰り返し発生する競合を監視し、それに応じてワークフローを調整してください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Bisync job history showing completed two-way synchronization runs" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 送信元と送信先のリモート(ローカルフォルダ、Google Drive、OneDriveなど)を設定します。
3. ジョブマネージャーで新しいbisyncジョブを作成し、初回のresyncを実行します。
4. 継続的な二方向同期のために、希望する間隔でbisyncジョブをスケジュールします。

RcloneViewのBisyncは、スクリプトやcronジョブ、コマンドラインの複雑さを必要とせず、真の双方向クラウド同期をデスクトップにもたらします。

---

**関連ガイド:**

- [同期、コピー、移動 — RcloneViewにおける違いの解説](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [RcloneViewにおけるフィルタールールと選択的同期](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneView対Syncthing — 比較](https://rcloneview.com/support/blog/rcloneview-vs-syncthing-comparison)

<CloudSupportGrid />

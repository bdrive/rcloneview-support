---
slug: cache-remote-accelerate-slow-storage-rcloneview
title: "キャッシュリモート — RcloneViewで遅いクラウドストレージを高速化"
authors:
  - robin
description: "RcloneViewのキャッシュ仮想リモートが、ディレクトリ一覧とファイルデータをキャッシュすることで遅いクラウドバックエンドをどう高速化するか、Plex連携も含めて解説します。"
keywords:
  - rclone cache remote
  - rcloneview キャッシュリモート 設定
  - 遅いクラウドストレージ 高速化
  - rclone キャッシュ plex 連携
  - クラウドファイル閲覧 高速化
  - キャッシュ仮想リモート rclone
  - rcloneview 仮想リモート
  - 遅いクラウドストレージ 対策
  - plex メディアサーバー クラウドキャッシュ
  - rclone ディレクトリキャッシュ
tags:
  - RcloneView
  - feature
  - performance
  - plex
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# キャッシュリモート — RcloneViewで遅いクラウドストレージを高速化

> 一部のクラウドバックエンドは、閲覧のたびに一覧を取得し直すのに時間がかかります — キャッシュ仮想リモートは、すでに取得した内容を記憶することでこの問題を解決します。

すべてのストレージプロバイダーが高速に応答するわけではありません。APIのレート制限が厳しい、またはリクエストごとのレイテンシが高いバックエンドは、大きなフォルダツリーを閲覧する場合や、Plexのようなメディアサーバーが同じライブラリを繰り返しスキャンする場合に、閲覧が重く感じられる原因になります。RcloneViewはNew Remoteウィザード内でrcloneのキャッシュ仮想リモートを直接利用できるようにしており、設定ファイルを手動で編集することなく、遅いリモートをキャッシュ層でラップできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## キャッシュリモートの仕組み

キャッシュリモートは独立したストレージタイプではなく、ラッパーです — すでに設定済みの既存リモートとRcloneViewの間に位置し、ディレクトリ一覧の取得やファイル読み込みをインターセプトすることで、同じリクエストがバックエンドに再度届くのを防ぎます。フォルダを最初に閲覧するときはRcloneViewが通常どおりラップされたリモートから取得しますが、次回は結果がキャッシュからローカルで返されます。これはAPI応答が遅い、あるいはレート制限が厳しいリモートで特に顕著です。

これは、1回のマウントセッションに対してのみデータをキャッシュするマウント組み込みのVFSキャッシュモードとは異なります。キャッシュ仮想リモートは代わりに、閲覧・マウント・同期を直接行える独立した名前付きリモートを新規作成し、そのキャッシュ状態はアプリを再起動しても保持されます。実務でよくある利用シーンは、キャッシュリモートをPlexメディアサーバー連携と組み合わせることです。そうしなければ、絶え間ないライブラリスキャンが基盤となるクラウドストレージに対して冗長なAPI呼び出しを大量に発生させてしまいます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewで既存のクラウドストレージリモートをラップするキャッシュ仮想リモートを作成する" class="img-large img-center" />

## RcloneViewでキャッシュリモートを設定する

Remoteタブ > New Remoteを開き、仮想リモートのオプションからCacheを選択します。ラップする元のリモートを選択するよう求められます — これはクラウドプロバイダーでも、S3互換バケットでも、SFTPやWebDAVのようなプロトコルベースの接続でも、RcloneViewにすでに設定されている必要があります。Tab BarやRemote Managerで、生の接続ではなくキャッシュされたバージョンを閲覧していることが分かるように、キャッシュリモートには区別しやすい名前を付けましょう。

作成後、キャッシュリモートは他のリモートと並んでRemote Managerに表示され、閲覧・マウント・同期のための他の項目と同じように動作します。RcloneViewは1つのウィンドウでWindows、macOS、Linuxを問わず90以上のプロバイダーをマウントおよび同期できるため、遅いバックエンド上に構築したキャッシュリモートもネイティブ接続と同じ機能セットを利用できます — Dry Runで同期をシミュレートしたり、Job Managerに追加したり、ローカルドライブとしてマウントしたりできます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Remote Explorerパネルツールバーからキャッシュリモートをマウントする" class="img-large img-center" />

## キャッシュが実際に役立つ場面

キャッシュは、変化するデータ量に対して一覧取得のコストが大きいリモートで最も効果を発揮します — Plexが繰り返しスキャンする大容量の写真・動画ライブラリ、深いフォルダツリー、連続したリクエストを制限する控えめなレート制限を持つプロバイダーなどです。頻繁に書き込みを行うリモートではあまり有用ではありません。変更されたファイルが他のツールから一貫して見えるようになるには、キャッシュを経由して伝播する必要があるためです。

メディアストリーミング用にキャッシュリモートをマウントする場合は、マウント自体のVFSキャッシュモードをwritesまたはfullに設定して組み合わせてください — 2つのキャッシュ層は異なるレベルで動作し、互いに補完し合います。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="キャッシュリモートに対して実行中の同期ジョブを表示するJob Manager" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 高速化したい遅いリモートがまだ設定されていない場合は設定します。
3. New Remoteを開いてCacheを選択し、ラップするリモートとしてそのリモートを指定します。
4. 新しいキャッシュリモートをマウントまたは閲覧し、同じフォルダへの2回目の訪問で一覧取得の速度を比較してみましょう。

キャッシュリモートはインターネット回線自体を速くするわけではありませんが、繰り返される閲覧パターン — 特にメディアライブラリのスキャン — においては、遅いバックエンドを最初の1回の後は瞬時に感じられるものへと変えてくれます。

---

**関連ガイド:**

- [RcloneViewの仮想リモート — Combine、Union、Aliasを解説](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [RcloneViewによるPlexクラウドストリーミング](https://rcloneview.com/support/blog/plex-cloud-mount-rcloneview)
- [Plexのバッファリング解消 — RcloneViewのVFSキャッシュ調整](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)

<CloudSupportGrid />

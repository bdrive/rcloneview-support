---
slug: fix-vfs-cache-disk-full-errors-rcloneview
title: "VFSキャッシュのディスク容量不足エラーを解決 — RcloneViewでマウントキャッシュを管理する"
authors:
  - robin
description: "マウントしたクラウドドライブがローカルディスクを圧迫する理由と、RcloneViewのキャッシュ設定を使ってVFSキャッシュのディスク容量不足エラーを解決する方法を解説します。"
keywords:
  - VFSキャッシュ ディスク容量不足
  - VFSキャッシュエラーの修正
  - rclone マウントキャッシュ 満杯
  - RcloneView キャッシュモード
  - マウントキャッシュ 最大サイズ
  - クラウドマウント ディスク容量
  - VFSキャッシュモード writes
  - RcloneView マウント設定
  - キャッシュ最大保持期間
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - vfs
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# VFSキャッシュのディスク容量不足エラーを解決 — RcloneViewでマウントキャッシュを管理する

> マウントしたクラウドドライブがローカルディスクを埋め尽くしてしまう場合、たいていはキャッシュモードがワークフローに対して高く設定されすぎています — RcloneViewでの診断と修正方法を紹介します。

クラウドストレージをローカルドライブとしてマウントすると、読み書きを高速かつ確実にするためにVFS(仮想ファイルシステム)キャッシュが使われますが、このキャッシュはローカルディスク上に置かれ、設定を誤ると気づかないうちに数ギガバイトも消費してしまいます。マウントが書き込みを受け付けなくなったり、クラウドストレージ側には十分な空き容量があるのにOSがディスク容量不足を報告したりする場合、原因はリモートではなくほぼ常にVFSキャッシュです。RcloneViewはマウント設定画面で関連するキャッシュ設定をすべて公開しているため、rcloneの設定ファイルを手動で編集する必要なくこの問題を解決できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## VFSキャッシュがローカルディスクを圧迫する理由

RcloneViewのマウントオプションには、off、minimal、writes(デフォルト)、fullという4つのキャッシュモードがあります。「writes」モードでは、変更したファイルがアップロードを完了するまでローカルにキャッシュされます。「full」モードでは、読み取りのために開いただけのファイルもローカルにキャッシュされ、ネットワークに再度アクセスせずに再読み込みできるようになります — パフォーマンス面では優れていますが、マウント経由でアクセスする大規模なメディアライブラリやデータセットが知らないうちにドライブを埋め尽くしてしまう可能性があります。

<img src="/support/images/en/blog/new-remote.png" alt="Mount configuration screen showing VFS cache mode options in RcloneView" class="img-large img-center" />

クラウドストレージ自体の使用量統計ではなく、RcloneViewのキャッシュディレクトリがあるドライブでディスク容量が減っている場合、まず確認すべきなのはこの設定です。

## 適切なキャッシュモードを選ぶ

日常的な用途のほとんどでは、「writes」モードが適切なバランスです。実際に変更中のものだけをキャッシュするため、ディスク使用量を現在の作業範囲に抑えられます。「full」モードは、マウント経由で直接動画編集を行う場合など、大きなファイルをオフラインで再読み込みする必要が本当にある場合のために取っておき、そのプロジェクトが終わったら「writes」や「minimal」に戻しましょう。「minimal」モードはキャッシュ量が最も少なく、ディスク容量が逼迫している場合に最も安全な選択肢です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing writes and full VFS cache modes for a cloud mount" class="img-large img-center" />

RcloneViewは1つのウィンドウでWindows、macOS、Linuxにまたがる90以上のプロバイダーをマウント・同期できるため、どのリモートをマウントしていても同じキャッシュ設定が適用されます。

## キャッシュ最大サイズと最大保持期間の設定

キャッシュモード自体に加えて、RcloneViewではキャッシュ最大サイズ(バイト単位、無制限は-1)と、キャッシュされたデータが破棄されるまでの有効期間を制御するキャッシュ最大保持期間でキャッシュに上限を設けられます。空きディスク容量より十分に低い具体的な最大サイズを設定しておけば、「full」モードであっても1回の大規模な読み取りセッションでドライブ全体が消費されることを防げます。他の場所で頻繁に変更されるファイルを扱っている場合は、より短い最大保持期間と組み合わせてください。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting cache max size and cache max age for a mount in RcloneView" class="img-large img-center" />

## すでに容量不足になったキャッシュのクリーンアップ

キャッシュが満杯になってマウントがすでに書き込みを拒否している場合は、Mount Managerからアンマウントしてキャッシュされたデータを解放し、作業を再開する前により低いキャッシュモードまたは明示的な最大サイズで再マウントしてください。事前にDebugレベルのロギングを有効にした上でLogタブを確認すれば、ネットワークや権限のエラーではなく、キャッシュの退避が実際の原因だったかどうかを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Unmounting and re-mounting a cloud drive from Mount Manager after a cache disk full error" class="img-large img-center" />

## はじめかた

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Mount Managerを開き、該当するマウントの設定を編集します。
3. キャッシュモードを「writes」または「minimal」に切り替え、具体的なキャッシュ最大サイズを設定します。
4. 新しい制限を適用するためにアンマウントして再マウントし、通常使用時のディスク使用量を監視します。

キャッシュモードとサイズ設定を数分調整するだけで、予測不能だったディスク容量不足エラーが、期待どおりに動作するマウントへと変わります。

---

**関連ガイド:**

- [RcloneViewにおけるVFSキャッシュとマウントパフォーマンス](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [RcloneViewのVFSキャッシュ調整でPlexのバッファリングを解決](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)
- [RcloneViewでクラウドマウントの切断を解決する](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)

<CloudSupportGrid />

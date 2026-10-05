---
slug: fix-mount-slow-file-open-vfs-cache-mode-rcloneview
title: "クラウドマウントでファイルを開くのが遅い問題を解決 — RcloneViewでVFSキャッシュを調整"
authors:
  - alex
description: "Mount Managerでキャッシュモード、キャッシュサイズ、ディレクトリキャッシュ時間を調整して、マウントしたクラウドドライブでのファイルを開く遅さを改善します。"
keywords:
  - クラウドマウントの遅延を解決
  - マウントしたドライブでファイルを開くのが遅い
  - VFSキャッシュモード
  - rcloneマウントのパフォーマンス
  - ディレクトリキャッシュ時間
  - クラウドドライブの遅延
  - RcloneViewマウント
  - rclone GUI
  - マウントのトラブルシューティング
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウドマウントでファイルを開くのが遅い問題を解決 — RcloneViewでVFSキャッシュを調整

> キャッシュ設定はマウントしたクラウドドライブの応答に影響し、Mount Managerでマウントごとに変更できます。

マウントしたクラウドドライブは、大きなファイルをダブルクリックして待たされるまでは、ローカルディスクのように感じられます。フォルダの一覧表示が遅い、保存時にアプリケーションが固まる、メディアが途切れるといったことが起こります。RcloneViewは各マウントの背後にあるVFSキャッシュオプションを提供しているので、推測に頼らずリモートごとに調整できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## まずキャッシュモードを確認

RemoteタブからMount Managerを開き、マウントを編集します。キャッシュモードにはoff、minimal、writes、fullがあります。デフォルトはwritesで、ドライブに書き込まれるファイルをキャッシュします。ドキュメントやメディアなど同じファイルを繰り返し読む場合、fullは読み取りもキャッシュするため、2回目以降はローカルディスクから提供されることがあります。offは最も軽い設定ですが、すべての読み取りがクラウドに送られます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneViewのMount Manager設定" class="img-large img-center" />

ドライブがマウントされている間はEditとDeleteが無効になるため、先にアンマウントし、設定を変更してから再度マウントしてください。

## キャッシュサイズとディレクトリ時間の設定

キャッシュ最大サイズのデフォルトは-1で、サイズ制限なしを意味し、小さなディスクを埋めてしまう可能性があります。空き容量に合った上限を設定し、cache max ageでキャッシュデータの有効期間を制御します。Dir cache timeはフォルダ一覧を記憶する期間を制御します。値を長くすると繰り返しのフォルダ参照が減りますが、他のユーザーによる変更が反映されるまで時間がかかります。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Explorerツールバーからリモートフォルダをマウント" class="img-large img-center" />

建築家が共有マウントから300MBの図面を開く場面を想像してください。fullキャッシュモードと適切なサイズ制限を組み合わせると、最初に開くときにファイルがダウンロードされ、以降はローカルディスクから読み込まれます。

## 作業に合ったツールを選ぶ

マウントは個々のファイルを開いて編集するのに向いています。フォルダ全体を移動する場合は、ドライブ経由でファイルをドラッグするよりも、同期またはコピージョブのほうが監視しやすく、同期、コピー、Folder CompareはFREEライセンスで利用できます。Windowsではマウントタイプのデフォルトはcmount、LinuxとmacOSではnfsmountで、LinuxではFUSEのインストールも必要です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="マウントの代わりに同期ジョブで一括転送" class="img-large img-center" />

問題が解決しない場合は、設定でrcloneのログを有効にし、レベルをDEBUGに設定して、組み込みrcloneを再起動し、問題を再現してください。

## はじめに

1. **RcloneViewをダウンロード** [rcloneview.com](https://rcloneview.com/src/download.html)してください。
2. Mount Managerを開き、遅いドライブをアンマウントして、Editをクリックします。
3. 読み取り中心の作業ではキャッシュモードをfullに切り替え、キャッシュ最大サイズを設定します。
4. 閲覧が遅い場合はdir cache timeを長くし、Saveして再度マウントします。

作業スタイルに合わせてキャッシュ設定を調整すれば、マウントしたクラウドドライブをワークフローに必要な形で使えます。

---

**関連ガイド：**

- [VFSキャッシュ — RcloneViewのマウントパフォーマンス](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [RcloneViewでVFSキャッシュのディスク満杯エラーを解決](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [RcloneViewでクラウドストレージをローカルドライブとしてマウント](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />

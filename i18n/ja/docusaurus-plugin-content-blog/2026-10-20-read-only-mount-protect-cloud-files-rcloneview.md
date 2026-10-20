---
slug: read-only-mount-protect-cloud-files-rcloneview
title: "読み取り専用マウント — RcloneViewでクラウドファイルを誤った変更から守る"
authors:
  - casey
description: "RcloneViewのRead onlyマウントオプションを使えば、誤って編集や削除をする心配なく、ファイルエクスプローラーからクラウドストレージを閲覧できます。"
keywords:
  - 読み取り専用マウント
  - クラウドストレージを読み取り専用でマウント
  - クラウドファイルの保護
  - RcloneView マウント
  - rclone 読み取り専用マウント
  - クラウドドライブの削除防止
  - マウントマネージャー
  - 仮想ドライブ
tags:
  - RcloneView
  - feature
  - mount
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 読み取り専用マウント — RcloneViewでクラウドファイルを誤った変更から守る

> リモートをローカルドライブとしてマウントし、閲覧とコピーはできても変更はできないようにします。

マウントしたクラウドドライブは通常のディスクと同じように動作するため、誤った削除、逆方向へのドラッグ、ファイルを書き換えるアプリケーションによって、クラウド上のデータが変わってしまうことがあります。アーカイブの確認や参照ファイルを開くだけなど、読み取りだけが目的であれば、書き込みできないドライブが最もリスクの低い選択肢です。RcloneViewのマウント設定には、まさにこの用途のためのRead onlyオプションがあります。RcloneViewは、Windows、macOS、Linuxで1つのウィンドウから90以上のプロバイダーをマウントおよび同期できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 読み取り専用が適している場面

完了した案件の記録をバケットに保管しているコンプライアンスチームを考えてみてください。スタッフは文書を開いてコピーできる必要がありますが、誰も内容を変更できてはいけません。別の例として、バックアップ自体を危険にさらすことなく、デスクトップから共有バックアップ先を確認したい場合があります。

どちらの場合も、読み取り専用マウントなら、ファイルエクスプローラー、メディアプレーヤー、ビューアーといった通常のツールをそのまま使いながら、書き込み操作は拒否されます。ストレージサービス側の権限の代わりにはなりませんが、お使いのマシン上での追加の安全策になります。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="RcloneViewのエクスプローラーからリモートフォルダーをマウントする" class="img-large img-center" />

## Mount ManagerでRead onlyを有効にする

Remoteタブから Mount Manager を開いて New mount を選ぶか、Explorerパネルの Mount アイコンから開始します。リモートとサブディレクトリを選択し、オプションで **Read only** にチェックを入れます。Windowsではドライブレターを選択でき、macOSとLinuxではローカルのマウントパスを設定します。Save and mount を選ぶと、すぐにドライブが接続されます。

同じダイアログには、ボリューム名、キャッシュモード(off、minimal、デフォルトのwrites、full)、Windowsではネットワークドライブとしての表示といったオプションもあります。何も書き込まないため、読み取り専用での利用ではデフォルトのキャッシュモードが問題になることはあまりありませんが、fullは同じファイルを繰り返し読み込む際に高速化に役立つ場合があります。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneViewのマウントオプションがあるMount Manager" class="img-large img-center" />

## マウントの変更と削除

マウントがアクティブな間は Edit と Delete が無効になるため、先に Mount Manager またはシステムトレイのメニューからマウントを解除してください。後でドライブを書き込み可能にするには、マウントを解除してエントリーを編集し、Read only のチェックを外して、再度マウントします。同じリモートに対して、閲覧用の読み取り専用エントリーと、意図的な作業用の書き込み可能なエントリーの2つを用意しておくこともできます。

PLUSライセンスでは、Auto mount により起動時にドライブを自動で接続できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでリモート間のファイルをコピーする" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 閲覧したいリモートを追加し、Remoteタブから Mount Manager を開きます。
3. 新しいマウントを作成し、リモートとフォルダーを選択して Read only にチェックを入れます。
4. Save and mount を押し、ファイルエクスプローラーからドライブを開きます。

読み取り専用アクセスなら、変更の心配なくすべてを開くことができます。

---

**関連ガイド:**

- [起動時の自動マウント](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [マウント性能のためのVFSキャッシュ](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Windowsでのマウントドライブレター競合の解決](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />

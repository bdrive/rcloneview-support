---
slug: fix-mount-read-only-cannot-save-files-rcloneview
title: "クラウドマウントが読み取り専用でファイルを保存できない場合 — RcloneViewでの解決方法"
authors:
  - steve
description: "マウントしたクラウドドライブでファイルを保存・編集できませんか？ RcloneViewのRead onlyオプション、キャッシュモード、権限、FUSEを確認して、マウントを再び書き込み可能にしましょう。"
keywords:
  - クラウドドライブ マウント 読み取り専用
  - マウントドライブ ファイル保存不可
  - rclone mount 読み取り専用
  - RcloneView マウント トラブルシューティング
  - VFSキャッシュモード writes
  - FUSE マウント Linux
  - クラウドドライブ 書き込みエラー
  - マウントマネージャー 設定
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

# クラウドマウントが読み取り専用でファイルを保存できない場合 — RcloneViewでの解決方法

> マウントしたクラウドドライブで保存が拒否される原因は、たいていマウント設定か権限であり、どちらもすぐに確認できます。

リモートをマウントしてドキュメントを開いたのに保存に失敗する、あるいはファイルはコピーできても編集できない、ということがあります。クラウドプロバイダーのせいにする前に、マウントがどのように構成されているかを確認しましょう。RcloneViewは関連するすべてのオプションを1つのダイアログにまとめているため、コマンドラインを使わずに原因を見つけられます。RcloneViewはフォルダの同期や比較にも対応しており、基本機能はFREEライセンスで利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## まずRead Onlyオプションを確認

マウント設定には、デフォルトでオフの**Read only**スイッチがあります。マウントを保存した時点でこれが有効になっていると、すべての書き込みが拒否されます。Remoteタブからマウントマネージャーを開き、エントリをアンマウントしてから編集してください。ドライブがマウントされている間はEditとDeleteが無効になるため、変更するにはアンマウントが必要です。

Read onlyをオフにして、Save and mountを選択します。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="マウント設定を表示しているRcloneViewのマウントマネージャー" class="img-large img-center" />

## キャッシュモードの確認

デフォルトのVFSキャッシュモードは**writes**で、書き込むファイルをローカルにバッファリングし、アプリケーションが通常どおり保存できるようにします。offやminimalに設定すると、ファイル内をシークしたり、その場で書き換えたりするプログラムが動作しなくなることがあります。エディタで保存に失敗する場合は、writesまたはfullを試してください。

キャッシュ場所の空き容量も確認しましょう。キャッシュディスクがいっぱいになると、権限の問題のように見える書き込みエラーが発生します。その疑いがある場合は、下記のVFSキャッシュのディスク容量不足エラーに関する関連ガイドを参照してください。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="リモートエクスプローラーからマウントする際のキャッシュモード設定" class="img-large img-center" />

## アカウントとプラットフォームの原因を切り分ける

リモートの中には、性質上読み取り専用のものがあります。HTTPリモートは読み取りアクセスのみを提供し、閲覧権限しか与えられていない共有フォルダは、マウント設定に関係なく書き込めません。Explorerパネルからファイルをアップロードしてテストしてください。それも失敗する場合、問題はマウントではなくリモートまたはその権限にあります。

Linuxでマウントするには、FUSEが必要です（fuse3を推奨）。他のユーザーもアクセスする必要がある場合は、**Allow other**を有効にしてください。Windowsでは、ネットワークドライブとして表示されるマウントが一部のアプリケーションで異なる動作をすることがあるため、そのオプションを切り替えてみてください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="失敗した書き込み操作を確認するジョブ履歴" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. ドライブをアンマウントし、マウントマネージャーでそのエントリを開いて、Read onlyがオフであることを確認します。
3. キャッシュモードをwritesに設定し、ディスクの空き容量を確認します。
4. Explorerでアップロードをテストし、リモートの権限とマウント設定を切り分けます。

書き込み失敗のほとんどは、これらのチェックのいずれかで原因が判明し、どれも数分で完了します。

---

**関連ガイド:**

- [RcloneViewでクラウドマウントの切断・ドロップを解決する](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)
- [RcloneViewでVFSキャッシュのディスク容量不足エラーを解決する](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [マウントでのファイルオープン遅延を解決 — RcloneViewのVFSキャッシュモード](https://rcloneview.com/support/blog/fix-mount-slow-file-open-vfs-cache-mode-rcloneview)

<CloudSupportGrid />

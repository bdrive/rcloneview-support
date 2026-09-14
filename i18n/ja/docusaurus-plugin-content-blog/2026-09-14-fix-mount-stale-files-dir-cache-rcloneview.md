---
slug: fix-mount-stale-files-dir-cache-rcloneview
title: "マウントに古いファイルが表示される問題を解決 — RcloneViewのDir Cache Timeを解説"
authors:
  - morgan
description: "RcloneViewでDir cache timeとVFS cache modeを正しく調整し、マウントしたクラウドドライブに古い、または欠落したファイルが表示される問題を解決します。"
keywords:
  - マウントに古いファイルが表示される
  - RcloneView dir cache time
  - マウントされたドライブの古いファイル
  - 古いマウント一覧の修正
  - クラウドドライブが更新されない
  - VFS cache modeの不一致
  - RcloneViewマウントのトラブルシューティング
  - クラウドマウントのディレクトリキャッシュ
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

# マウントに古いファイルが表示される問題を解決 — RcloneViewのDir Cache Timeを解説

> マウントしたクラウドドライブが削除済みのファイルを表示し続けたり、新しいファイルを表示しなかったりする場合、多くは故障ではなく、ディレクトリキャッシュがまだ期限切れになっていないだけです。RcloneViewでの解決方法を説明します。

リモートをローカルドライブとしてマウントすると、RcloneViewはクリックのたびにすべてのフォルダを再一覧表示するわけではありません — 短命なディレクトリキャッシュを保持することで、クラウドプロバイダーへ毎回往復せずに閲覧を即時に感じさせています。これは速度の面では優れていますが、別のデバイス、別のRcloneViewウィンドウ、またはプロバイダー自身のWebアプリから行った変更が、マウントされたフォルダに反映されるまでに少し時間がかかることも意味します。このガイドでは、その遅延が正常な場合と、正常でない場合の調整方法を説明します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dir Cache Timeを理解する

RcloneViewのマウント設定には**Dir cache time**という設定があり、マウントがリモートの変更を再確認するまでフォルダ一覧が有効とみなされる時間を制御します。これは、ファイル内容のキャッシュを管理するVFS **Cache mode**設定(off / minimal / writes / full)とは別のものです。Dir cache timeを短くすると、リモートの変更がほぼ即座にマウントに反映されますが、プロバイダーへの一覧取得リクエストが増えます。Dir cache timeを長くすると、API呼び出しは減りますが、新規または削除されたファイルが表示されるまでの遅延が長くなります。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneViewのDir cache timeを含むマウント設定オプション" class="img-large img-center" />

複数の人や複数のデバイスが同時に書き込むリモートをマウントしている場合 — 例えば共有のGoogle Driveフォルダなど — デフォルトのキャッシュ期間のせいで、実際には別の場所から数秒前に追加されたファイルをRcloneViewが「見落とした」ように見えることがあります。何も見落としているわけではなく、単にマウントがそのフォルダの一覧をまだ更新していないだけです。

## 新しいファイルが表示されないマウントを解決する

本当に問題があると決める前に、まず手動で更新してみてください。Explorerパネルやマウントを指しているOSのファイルブラウザで、フォルダの再読み込みを強制する(F5、またはディレクトリから出て再度入る)ことで、キャッシュが自然に期限切れになるのを待たずに変更が即座に表示されることが多いです。手動更新後もファイルが表示されない場合、停止したrclone VFSプロセスが設定されたDir cache timeよりもさらに古い一覧を保持していることがあるため、**Mount Manager**からマウントを解除して再マウントする必要がある場合があります。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewでマウントされたリモートフォルダの一覧を更新する" class="img-large img-center" />

生のAPI効率よりもほぼリアルタイムの可視性が重要なリモートについては、保存して再マウントする前に、マウントのEdit設定でDir cache timeの値を下げてください。ここにはトレードオフがあります。使用頻度の高いリモートでこの値を過度に低く設定すると、RcloneViewが送信する一覧リクエストの数が増え、1分あたりのAPI呼び出し数を制限しているプロバイダー側のレート制限を引き起こす可能性があります。

## Dir Cache TimeとCache Modeを併せて選ぶ

Dir cache timeとVFS Cache modeは異なる問題を解決するため、一方だけを確認して他方を確認しないと、根本的な問題が半分しか解決されないことが多いです。削除されたファイルがマウント上でまだアクセス可能に表示される場合(新しいファイルが表示されないのではなく)、それはDir cache timeよりもCache modeの症状である可能性が高いです — デフォルトの**writes**は最近書き込まれたファイル内容をローカルにキャッシュし、**full**は読み込んだ内容もキャッシュします。どちらの場合も、ローカルにキャッシュされたコピーが、キャッシュが検証されるまでリモートの現在の状態より古い状態のまま残る可能性があります。より短いDir cache timeを、リモートの実際の使われ方に合ったCache modeと組み合わせることで、古い一覧に関する不具合の大部分が解決します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでリモートのマウントキャッシュ設定を調整する" class="img-large img-center" />

RcloneViewはWindows、macOS、Linuxで同じウィンドウから90以上のプロバイダーをマウント・同期できるため、マウント先がGoogle Drive、S3バケット、あるいは自前ホストのWebDAVサーバーのどれであっても、これらのキャッシュ設定は同じように適用されます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. **Mount Manager**を開き、対象のマウントを選択して現在のDir cache time値を確認します。
3. 複数のソースから頻繁に変更されるリモートについてはDir cache timeを下げ、アンマウント/再マウントして適用します。
4. 一覧だけでなくファイルの*内容*が古いことが実際の症状である場合は、Cache mode設定も併せて見直します。

リモートの実際の使われ方に合ったスケジュールでクラウドの状態を正確に反映するマウントは、毎回「なぜ同期されないのか」を推測するよりもはるかに優れています。

---

**関連ガイド:**

- [VFS Cache — RcloneViewでクラウドドライブのマウント性能を向上させる](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [VFS Cacheのディスク容量不足エラーを解決 — RcloneViewでマウントキャッシュを管理する](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [RcloneViewでRcloneマウントおよびFUSEエラーを解決する](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />

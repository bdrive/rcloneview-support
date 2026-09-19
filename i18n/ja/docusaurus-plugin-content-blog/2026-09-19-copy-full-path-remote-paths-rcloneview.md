---
slug: copy-full-path-remote-paths-rcloneview
title: "フルパスをコピー — RcloneViewで素早くリモートパスをコピーする"
authors:
  - robin
description: "RcloneViewのフルパスコピーコマンドを使って、rclone CLIコマンドやスクリプト、ジョブ設定に必要なremote:path文字列を即座に取得しましょう。"
keywords:
  - RcloneView フルパスコピー
  - rclone リモートパス
  - リモート付きパスコピー
  - rclone CLI パス構文
  - パンくずパスバー
  - RcloneView ターミナル ワークフロー
  - rclone スクリプティング パス
  - クラウド リモートパスコピー
tags:
  - RcloneView
  - feature
  - cli
  - tips
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# フルパスをコピー — RcloneViewで素早くリモートパスをコピーする

> リモート名とフォルダパスを手で入力し直すのはやめましょう — パンくずバーを右クリックすれば、rcloneが求める正確な`remote:path`文字列をコピーできます。

RcloneViewのGUIとrcloneのCLIコマンドを併用する人なら、この面倒さをよく知っているはずです。フォルダを目で見つけた後、スクリプトやターミナルコマンドで参照するためにパスを手で組み立て直さなければなりません。RcloneViewのフルパスコピー機能は、rcloneが使う正確な`mygoogledrive:Meet recordings`形式を生成することでこの手順を完全になくし、コマンドやジョブフィルタ、自動化スクリプトにそのまま貼り付けられるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## このコマンドの場所

フルパスコピーは、各エクスプローラーパネル上部にあるパンくずパスバーの右クリックメニューに、切り取り・コピー・貼り付け・すべて選択と並んで用意されています。ローカルでもクラウドでも参照したいフォルダに移動し、ファイル行ではなくパスバー自体を右クリックしてフルパスコピーを選択してください。RcloneViewは、rclone自身のCLI、設定ファイル、RC API呼び出しが期待するのと同じ`remote:path`構文で、リモート名とフォルダパスをクリップボードに書き込みます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView breadcrumb path bar with right-click context menu open" class="img-large img-center" />

これが重要なのは、rcloneがこの構文に厳格だからです。コロンがリモート名とパスを区切り、これを間違えると(余分なスラッシュ、コロンの抜け)、記憶を頼りに手でパスを入力したときによく起こる「ディレクトリが見つかりません」エラーの原因になります。

## 手動でのパス入力より優れている理由

フォルダ名にUnicode文字やスペース、深い階層が含まれるようになると、手でパスを入力する方法はすぐに限界を迎えます — まさにそうしたパスこそ入力ミスが起きやすく、デバッグも難しいのです。フルパスコピーは、RcloneViewがフォルダツリーを描画した際にすでに解決済みのリテラル文字列をそのままコピーすることでこの問題をすべて回避するため、貼り付けた内容はリモートが実際に持つ内容と必ず一致します。RcloneViewはFREEライセンスでも同期とフォルダ比較に対応しており、フルパスコピーはエクスプローラー、同期ジョブ設定、フォルダ比較の3つすべてで同じように機能します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder path for comparison in RcloneView" class="img-large img-center" />

同期ジョブの送信元や送信先フォルダを設定するときや、正確なパスの接頭辞が必要なカスタムフィルタルールを作成するときに特に役立ちます — コピーしたパスを貼り付けることで、意図しないファイルを静かに除外してしまうような小さな入力ミスを防げます。

## 内蔵ターミナルとの組み合わせ

フルパスコピーは、下部の情報ビューにあるRcloneターミナルと組み合わせたときに最も強力です。エクスプローラーでパスをコピーし、ターミナルタブに切り替え、アプリを離れたり再入力したりすることなく`rclone lsf`や`rclone about`のようなコマンドに直接貼り付けられます。これによりRcloneViewはハイブリッドなワークフローツールになります。目で見てフォルダを探し、GUIがまだ提供していない機能についてはそのままCLIレベルの操作に切り替えられるのです。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an rclone command referencing a copied remote path" class="img-large img-center" />

`rclone size`の確認や2つのフォルダ間での手動`rclone check`など、定期的なメンテナンス作業をスクリプト化する人にとって、このショートカットは手でコマンドを書く際に最もミスが起きやすい手順を取り除いてくれます。

## はじめ方

1. まだの場合は[rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. エクスプローラーで任意のリモートを開き、参照したいフォルダに移動します。
3. パンくずパスバーを右クリックしてフルパスコピーを選択します。
4. コピーした`remote:path`文字列を同期ジョブ、フィルタルール、または内蔵のRcloneターミナルに貼り付けます。

これが習慣になれば、リモートパスを手で入力することがいかに遅いやり方だったかを実感するでしょう。

---

**関連ガイド:**

- [RcloneViewターミナル:GUIの中でrclone CLIの力をフルに活用する](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [RcloneViewのキーボードショートカットと生産性向上のヒント](https://rcloneview.com/support/blog/keyboard-shortcuts-productivity-rcloneview)
- [RcloneViewでクラウドファイル管理を高速化する2ペインエクスプローラーのヒント10選](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)

<CloudSupportGrid />

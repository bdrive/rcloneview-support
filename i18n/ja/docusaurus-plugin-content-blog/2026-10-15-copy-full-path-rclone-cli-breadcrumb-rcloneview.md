---
slug: copy-full-path-rclone-cli-breadcrumb-rcloneview
title: "リモート付きでフルパスをコピー — RcloneViewでGUIとrcloneコマンドをつなぐ"
authors:
  - kai
description: "RcloneViewのパンくずリストにあるフルパスのコピー（Copy Full Path）でremote:path文字列を取得し、内蔵rcloneターミナルで実行します。実用的なGUIからCLIへのワークフローです。"
keywords:
  - rclone リモートパス
  - rclone フルパスをコピー
  - RcloneView パンくずリスト
  - rclone ターミナル GUI
  - rclone about コマンド
  - remote:path 構文
  - rclone GUI ワークフロー
  - rclone コマンドヘルパー
  - RcloneView 機能
  - クラウドパスのコピー
tags:
  - RcloneView
  - feature
  - cli
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# リモート付きでフルパスをコピー — RcloneViewでGUIとrcloneコマンドをつなぐ

> 右クリック一つで、閲覧中のフォルダーがそのまま使えるrcloneパスになります。

rcloneコマンドを入力したことがある人なら、特にスペースや深い階層のフォルダーがある場合に、`remote:path`を正確に書く大変さをご存じでしょう。RcloneViewは、リモート名を含むフルパスをそのままクリップボードにコピーするパンくずリストのメニューオプションで、この問題を解決します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Copy Full Pathの機能

各エクスプローラーパネルには、現在位置を示すパンくずパスバーがあります。ここを右クリックすると、切り取り、コピー、貼り付け、すべて選択、そして**Copy Full Path (with Remote)**が表示されます。最後のオプションは、rcloneが期待する正確な構文である`mygoogledrive:Meet recordings`の形式で場所をコピーします。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewのエクスプローラーに表示されたリモート一覧" class="img-large img-center" />

リモート名が含まれるため、そのフォルダーがどのリモートに属するかを推測する必要がありません。同じプロバイダーの複数アカウントを管理している場合に重要です。

## 内蔵ターミナルに貼り付ける

RcloneViewには、下部のInfo ViewにTerminalタブがあり、完全なターミナルエミュレーションを備えています。`rclone`に続けてスペースを入力するとコマンドの候補が表示されるので、コピーしたパスを貼り付けます。たとえば`rclone about "remote:"`はリモートのストレージ使用量を表示し、`rclone listremotes`は設定済みのすべてのリモートを一覧表示します。スペースを含むパスは引用符で囲んでください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView内でジョブとコマンドを実行する" class="img-large img-center" />

このGUIとCLIの往復は、ウィザードでは提供されない単発のコマンドが必要なときに、視覚的なエクスプローラーで正しいフォルダーを探しながら使えて便利です。

## ジョブやドキュメントでパスを活用する

コピーしたパスは、ターミナル以外でも役立ちます。運用手順書、サポートチケット、チームメイトとのチャットに貼り付ければ、全員が同じ場所を指していることを保証できます。転送後は、TransferringタブやJob Historyで結果を確認できます。ジョブ履歴には実行ごとにステータス、サイズ、速度が記録されます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="完了した転送を表示するジョブ履歴" class="img-large img-center" />

RcloneViewはrcloneの代替ではなく、rcloneの上に構築されたGUIです。そのため、ターミナルで実行するコマンドは、ジョブと同じ内蔵エンジンを使用します。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. リモートを追加し、エクスプローラーでフォルダーに移動します。
3. パンくずバーを右クリックして**Copy Full Path (with Remote)**を選択します。
4. Terminalタブを開き、`rclone about "`と入力してパスを貼り付けます。

タイプミスを減らし、トラブルシューティングを素早く。クリックとタイピングを一つのツールで。

---

**関連ガイド:**

- [RcloneView内のRcloneターミナル](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [ターミナルとGUIのワークフロー](https://rcloneview.com/support/blog/rcloneview-terminal-gui-workflow)
- [Aliasリモートのショートカットパス](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />

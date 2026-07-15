---
slug: rcloneview-connection-manager-embedded-external
title: "RcloneView Connection Manager: より安全なクラウド操作のためにEmbeddedとExternalのrcloneを切り替える"
authors:
  - tayson
description: "RcloneView Connection Managerを使ってEmbeddedとExternalのrcloneインスタンスを切り替え、環境を分離し、より安全で監査可能なワークフローを実行しましょう。"
keywords:
  - rcloneview connection manager
  - embedded rclone
  - external rclone
  - rclone rcd gui
  - rcloneview remote control
  - rclone instance switch
  - cloud automation gui
  - rcloneview workflow
  - rclone gui
  - rcloneview enterprise
tags:
  - RcloneView
  - cloud-storage
  - sync
  - file-management
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Connection Manager: より安全なクラウド操作のためにEmbeddedとExternalのrcloneを切り替える

> 個人用ジョブ、本番データ、テスト環境をきちんと分離したいですか?RcloneView Connection Managerを使えば、CLIのリスクなしで数秒でrcloneインスタンスを切り替えられます。

RcloneViewにはEmbedded(組み込み)のrcloneエンジンが含まれていますが、External(外部)のrcloneインスタンス(ローカル、リモート、またはコンテナ)にも接続できます。これにより、設定を書き換えたり複数のターミナルを行き来したりすることなく、環境を安全に分離し、変更をテストし、エンタープライズ規模で運用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connection Managerが重要な理由

rcloneユーザーの多くは、いずれ次のいずれかの問題に直面します。

- テスト実行が本番リモートに影響を与えてしまう
- マシンごとに異なる認証情報が必要になる
- PCをクリーンに保ちながら、転送はリモートサーバーに任せたい

Connection Managerは、ワンクリックで**Embedded**と**External**のrcloneインスタンスを切り替えられるようにすることで、この問題を解決します。

## EmbeddedとExternalのrclone(簡単なメンタルモデル)

- **Embedded rclone**: 組み込み済みでローカルにあり、常に利用可能
- **External rclone**: ユーザーが管理し、サーバー、NAS、または別のマシン上で実行可能

これが安全なワークフローの基盤です。環境を混在させるのではなく、分離することが重要です。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="Embedded rclone model" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="External rclone model" class="img-large img-center" />
</div>

## Connection Managerでできること

Connection Managerを使うと、次のことができます。

- 利用可能なすべてのrcloneインスタンスを確認する
- 一度に1つのインスタンスに接続する
- EmbeddedとExternalを即座に切り替える
- インスタンスごとに設定を分離する

<img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="Connection Manager with embedded rclone" class="img-large img-center" />

## チームにとって価値の高いワークフローである理由

### 1) より安全なテストと検証

外部インスタンスを使って、本番リモートに触れることなく変更をテストできます。

### 2) 環境のクリーンな分離

ステージング用に1つのインスタンス、本番用に別のインスタンスを実行できます。設定が混在することはありません。

### 3) 大容量転送のためのリモートコンピューティング

サーバーやNASに大容量転送を任せることで、デスクトップを軽量に保てます。

### 4) ミスからの迅速な復旧

外部インスタンスに障害が発生したり誤動作したりした場合は、即座にEmbeddedに切り替えられます。

## ステップバイステップ: 外部rclone接続を追加する

1) **Settings -> Connection Manager**を開きます。
2) **New Connection**をクリックします。
3) `rclone rcd`のリモートアドレスを入力します。

<img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="New connection form" class="img-large img-center" />

追加が完了すると、そのエントリに接続、編集、削除ができるようになります。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="External rclone added" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="External rclone selected" class="img-large img-center" />
</div>

ガイド: [/support/howto/rcloneview-basic/connection-manager](/howto/rcloneview-basic/connection-manager)

## 典型的なユースケース

### 個人利用と業務利用の分離

個人用リモートはEmbeddedに、業務用リモートはExternalに保管します。

### サーバー側での転送

サーバー(EC2、NAS、またはDocker)でrcloneを実行し、RcloneViewをUIコントローラーとして使用します。

### 複数ウィンドウでの操作

新しいRcloneViewウィンドウを開いて、切り替えることなく別のインスタンスを管理できます。

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="Open new RcloneView window" class="img-large img-center" />

## 信頼性の高いワークフローのためのベストプラクティス

- 外部インスタンスには分かりやすい名前を付ける(例: `Prod-Rclone`、`Lab-Rclone`)。
- ジョブスケジュールを正しいインスタンスに紐づけておく。
- 環境を切り替える際は同期前に比較(Compare)を使用する。
- 各インスタンスにどのリモートが存在するかを文書化する。

## よくある間違い

- テスト用インスタンスで本番ジョブを実行してしまう
- 関係のないチーム間で1つの外部インスタンスを共有してしまう
- 現在どのインスタンスがアクティブか把握していない

Connection Managerは、視覚的な状況表示と迅速な切り替えによって、これらの問題の多くを解決します。

## まとめ

RcloneView Connection Managerは、rcloneを安全なマルチ環境システムへと変えます。Embeddedは日常的な用途に最適で、Externalは環境の分離、サーバー側での転送、エンタープライズワークフローに理想的です。必要に応じて切り替え、運用をクリーンに保ちましょう。

<CloudSupportGrid />

---
slug: custom-rclone-flags-advanced-options-rcloneview
title: "RcloneViewのジョブでカスタムrcloneフラグと詳細オプションを使用する"
authors:
  - tayson
description: "RcloneViewでパフォーマンスチューニング、デバッグ、高度なジョブ設定のためにカスタムrcloneフラグを追加する方法を解説します。transfers、checkers、fast-listなどを網羅します。"
keywords:
  - rclone custom flags
  - rcloneview advanced options
  - rclone transfers flag
  - rclone fast-list performance
  - rclone checkers setting
  - rclone no-traverse flag
  - rclone size-only flag
  - rcloneview job configuration
  - rclone performance tuning
  - rclone debugging flags
tags:
  - RcloneView
  - feature
  - rclone
  - guide
  - tips
  - cli
  - performance
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewのジョブでカスタムrcloneフラグと詳細オプションを使用する

> RcloneViewは一般的なケースを自動的に処理しますが、rcloneの真の力はそのフラグにあります。どのフラグをどこに追加するかを知っていれば、転送時間を半分に短縮したり、手ごわいエッジケースを解決したりできます。

rcloneには、転送の並列度からチェックサムの挙動、リトライロジックまであらゆるものを制御する数百のコマンドラインフラグがあります。RcloneViewは最も一般的な操作向けにシンプルなインターフェースを提供していますが、デフォルト設定では不十分な場合に備えて、任意のジョブにカスタムフラグを追加することもできます。このガイドでは、最も便利なフラグ、それぞれの使いどころ、そしてRcloneViewでの設定方法を解説します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでカスタムフラグを追加する場所

RcloneViewでは、2箇所でカスタムフラグをサポートしています。

1. **ジョブ設定** -- ジョブ(copy、sync、move)を作成または編集する際、追加フラグ用のフィールドがあります。コマンドラインで入力する場合と同じように入力してください。
2. **ターミナル** -- 一度限りのコマンドの場合は、ターミナルパネルを開き、必要なフラグを付けたrcloneコマンド全体を入力します。

保存したジョブに追加したフラグは実行のたびに保持されるため、一度設定すれば、スケジュール実行を含め、ジョブが実行されるたびに適用されます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView job configuration with custom flags" class="img-large img-center" />

## パフォーマンスチューニングフラグ

これらのフラグは転送速度とリソース使用量に直接影響します。

### --transfers N

並列で転送するファイル数を制御します。デフォルトは4です。

```bash
--transfers 16
```

ファイル数が多い場合や、プロバイダが高い並列度をサポートしている場合はこの値を増やしてください。S3、B2、Wasabiは16〜32の並列転送をうまく処理できます。Google Driveは8〜10を超えるとスロットリングされる場合があります。

### --checkers N

並列でチェック(比較)するファイル数を制御します。デフォルトは8です。

```bash
--checkers 32
```

ファイル数の多いディレクトリでsyncやcheck操作を実行する場合は、この値を増やしてください。チェック段階が転送よりもボトルネックになることがよくあります。

### --fast-list

すべてのオブジェクトを1回のリクエストで取得することで、ディレクトリのリスト取得に必要なAPI呼び出し回数を減らします。大規模なバケットを扱うS3互換プロバイダで劇的に高速化します。

```bash
--fast-list
```

トレードオフ: リスト全体をメモリに保持するため、より多くのメモリを消費します。オブジェクト数が数百万に及ぶバケットでは、数ギガバイトのRAMを消費することがあります。

### --no-traverse

宛先のリスト取得を完全にスキップします。既存ファイルが数百万件ある宛先に少数のファイルをコピーする場合に便利です。

```bash
--no-traverse
```

このフラグを使わない場合、rcloneは既存ファイルを確認するために宛先全体をリスト取得します。宛先の大部分が無関係であるとわかっている場合(例: 500万オブジェクトあるバケットに10個の新規ファイルをコピーする場合)、`--no-traverse`を使えばリスト取得にかかる時間を数分単位で節約できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane view for configuring transfer jobs" class="img-large img-center" />

### --buffer-size

ファイル転送ごとのインメモリバッファを制御します。デフォルトは16MiBです。

```bash
--buffer-size 64M
```

高帯域幅接続での大きなファイルの場合、この値を増やすとI/Oの停滞を減らせます。メモリが制約されている場合は減らしてください。

### --multi-thread-streams N

単一ファイルのマルチスレッドダウンロードで使用するストリーム数です。デフォルトは4です。

```bash
--multi-thread-streams 8
```

バイト範囲リクエストをサポートするプロバイダから大きな個別ファイルをダウンロードする際に役立ちます。

## 比較と挙動に関するフラグ

これらのフラグは、rcloneが何を転送するかを判断する方法を変更します。

### --size-only

更新日時やチェックサムを無視し、ファイルサイズのみで比較します。

```bash
--size-only
```

タイムスタンプが信頼できない場合(一部のSFTPサーバーでよくあります)や、同一サイズの変更を見逃すリスクを負ってでも可能な限り高速な比較をしたい場合に使用します。

### --ignore-existing

サイズや日付にかかわらず、宛先に既に存在するファイルをスキップします。

```bash
--ignore-existing
```

既存ファイルを変更せず、新しいファイルのみを追加するインクリメンタルアップロードに最適です。すべてのファイルを比較するよりもはるかに高速です。

### --ignore-size

サイズを無視し、更新日時のみで比較します。

```bash
--ignore-size
```

必要になることは稀ですが、特定のファイルタイプで誤ったサイズを報告するプロバイダで有用です。

### --update

宛先の方が新しいファイルをスキップします。

```bash
--update
```

宛先の方が古いファイルのみをコピーしたい、双方向的なワークフローに便利です。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders with custom comparison flags" class="img-large img-center" />

## リトライと信頼性に関するフラグ

### --retries N

失敗した操作のリトライ回数です。デフォルトは3です。

```bash
--retries 10
```

不安定なネットワークや、断続的にエラーが発生するプロバイダの場合は増やしてください。

### --retries-sleep DURATION

リトライ間の待機時間です。デフォルトは0です。

```bash
--retries-sleep 5s
```

リトライの間に遅延を追加します。プロバイダによるレート制限がある場合に便利です。

### --low-level-retries N

低レベル操作(HTTPリクエスト)のリトライ回数です。デフォルトは10です。

```bash
--low-level-retries 20
```

### --timeout DURATION

IOアイドルタイムアウトです。デフォルトは5m0sです。

```bash
--timeout 10m
```

非常に遅い接続や、レイテンシが高いプロバイダの場合は増やしてください。

## デバッグとロギングに関するフラグ

ジョブが失敗したり予期しない挙動をしたりする場合、これらのフラグが問題の診断に役立ちます。

### -v / -vv

冗長出力と非常に冗長な出力です。

```bash
-v
```

転送される各ファイルと基本的な進捗情報を表示します。HTTPリクエストを含む詳細なデバッグ出力には`-vv`を使用してください。

### --log-file PATH

コンソールの代わりにファイルにログを書き込みます。

```bash
--log-file /tmp/rclone-debug.log
```

### --log-level DEBUG

ログレベルを明示的に設定します。

```bash
--log-level DEBUG
```

最も詳細な出力を生成します。問題を報告する際や、予期しない挙動を調査する際に使用してください。

### --dry-run

実際の変更を行わずに操作をシミュレートします。

```bash
--dry-run
```

新しいフラグの組み合わせをテストする際は、期待通りに動作するか確認するために必ず最初にこれを実行してください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer with verbose logging in RcloneView" class="img-large img-center" />

## ジョブごとのフラグ設定

RcloneViewでは、ジョブごとに異なるフラグセットを保存できます。実用的な組み合わせをいくつか紹介します。

**S3への大容量ファイル同期:**
```
--transfers 8 --checkers 16 --fast-list --buffer-size 64M
```

**小さなファイルのインクリメンタルバックアップ:**
```
--transfers 32 --checkers 64 --ignore-existing --fast-list
```

**まずdry-runで慎重に同期:**
```
--dry-run -v
```
その後、実際の実行では`--dry-run`を削除します。

**失敗する転送のデバッグ:**
```
-vv --log-file /tmp/debug.log --retries 1
```

## よく理解していない限り避けるべきフラグ

| フラグ | リスク |
|------|------|
| `--delete-before` | 転送前に宛先ファイルを削除する -- 転送が途中で失敗すると危険 |
| テストなしの`--max-delete N` | 値を低く設定しすぎるとクリーンアップが妨げられる可能性がある |
| `--no-check-certificate` | TLS検証を無効化する -- セキュリティリスク |
| `--ignore-checksum` | 整合性検証をスキップする -- チェックサムの目的が失われる |

## ベストプラクティス

- **デフォルトから始める** -- rcloneのデフォルト設定はほとんどのワークロードで妥当です。具体的な問題や測定可能なボトルネックがある場合のみフラグを追加してください。
- **--dry-runでテストする** -- 本番ジョブに新しいフラグを適用する前に実施してください。
- **フラグを文書化する** -- カスタムフラグ付きでジョブを保存する際は、将来の自分(またはチームメイト)が意図を理解できるよう、それぞれのフラグがなぜそこにあるかを記録してください。
- **前後でベンチマークを取る** -- パフォーマンスフラグの有無で転送時間を測定し、実際にワークロードに役立っているか確認してください。
- **本番ジョブには-vを使用する** -- わずかなオーバーヘッドは、各実行中に何が起きたかを可視化できる価値に見合います。

---

**関連ガイド:**

- [CheckとCompareでクラウドファイルの整合性を検証する](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [中断・失敗した転送を復旧する](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [クラウド間の転送と同期](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />

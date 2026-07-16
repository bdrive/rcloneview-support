---
slug: optimize-rcloneview-mount-s3-r2-performance
title: "S3とCloudflare R2向けにRcloneViewのマウントパフォーマンスを最適化する"
authors:
  - tayson
description: 適切なキャッシュモード、チャンクサイズ、並行数でAmazon S3とCloudflare R2のRcloneViewマウントをチューニングし、メディアサーバーや分析ジョブを高速かつ安定した状態に保ちます。
keywords:
  - rcloneview
  - rclone mount
  - s3 mount performance
  - cloudflare r2 mount
  - vfs cache
  - rclone tuning
  - multi-thread streams
  - s3 chunk size
tags:
  - mount
  - cloudflare-r2
  - aws-s3
  - performance
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# S3とCloudflare R2向けにRcloneViewのマウントパフォーマンスを最適化する

> CLIフラグを一切編集することなく、S3互換ストレージ向けにRcloneViewのマウント設定をチューニングし、よりスムーズな再生と高速な読み取りを実現しましょう。

S3バケットやCloudflare R2をワークステーション、NAS、メディアサーバーにマウントすると即座にアクセスできるようになりますが、デフォルト設定ではスループットが制限されることがあります。RcloneViewでいくつかのポイントを絞った調整を行うことで、AWSとR2の両方でレイテンシを削減し、バッファリングを減らし、コストを予測しやすく保つことができます。

<!-- truncate -->

**主要キーワード:** *rclone mount*、*S3 mount performance*、*Cloudflare R2*、*VFS cache*、*multi-thread streams*。

---

## マウントのチューニングが重要な理由

- 途切れないストリーミング: メディアサーバーやBIツールでは、バッファリングを避けるために一貫した先読みとキャッシュが必要です。
- APIを過負荷から保護: 並行数を制御することで、S3互換エンドポイントでの429/503スロットリングを防げます。
- 送信料と再読み込みの節約: よりスマートなキャッシュにより、重複したGETやネットワークの通信量が削減されます。
- 書き込みの安全性を維持: 適切なキャッシュモードにより、切断時のデータベース破損や不完全なアップロードを回避できます。

---

## 前提条件と事前チェック

1. 配置とレイテンシ: ユーザーに最も近いAWSリージョンを選択します。R2の場合は、RTTを最小化するために最も近いCloudflareロケーションを選びます。
2. ネットワーク経路: VPN/ファイアウォールのルールが、過度なIDSスロットリングなしに持続的なHTTPS（443）トラフィックを許可していることを確認します。
3. RcloneViewでの認証情報: Amazon S3とCloudflare R2用のリモートを追加します（`https://<account>.r2.cloudflarestorage.com`のようなS3互換エンドポイント）。
   - おさらいが必要ですか？[S3リモートの追加方法](/howto/remote-storage-connection-settings/s3)と[Cloudflare R2のAPI認証情報の取得方法](/howto/cloud-storage-setting/cloudflare-r2-credential)をご覧ください。
4. ワークロードを理解する: メディアストリーミングは先読みを重視し、分析処理は並列読み取りを重視し、バックアップ用途ではより安全な書き込みキャッシュが必要になる場合があります。

---

## ステップ1 - RcloneViewでマウントを作成する

1. **RcloneView** -> **Mounts** -> **New Mount** を開きます。
2. リモート（S3またはR2）とローカルマウントパスを選択します。
3. 再起動時にサービス（Plex/Jellyfin、BIツールなど）を実行する場合は、**Auto-start on launch** をオンにします。
4. 保存後、一度マウントを開始し、OSのファイルエクスプローラーに表示されることを確認します。

> ヒント: R2の場合、リージョナルレイテンシを低く保つために、Advanced Settingsで正しいエンドポイントを設定してください。

---

## ステップ2 - 適切なVFSキャッシュモードを設定する

| ユースケース | 推奨する `--vfs-cache-mode` | 理由 |
| --- | --- | --- |
| メディア再生 / BIダッシュボード | `writes` | ダウンロードと一時書き込みをバッファリングし、部分的な更新に対して安全 |
| 写真/動画編集 | `full` | アップロード前にランダムな読み書きがローカルキャッシュに確実に反映される |
| シンプルな読み取り専用ブラウジング | `off`（デフォルト） | ファイルをほとんど変更しない場合、オーバーヘッドが最小 |

マウントモーダル内の追加キャッシュ設定:

- キャッシュの最大サイズ: SSD上で10〜50GBから始め、大規模なライブラリをストリーミングする場合は増やします。
- `--vfs-read-ahead`: プレイヤーが一時停止せずに事前バッファリングできるよう、32M〜128Mに設定します。
- `--buffer-size`: ファイルあたり8M〜32Mにすることで、高レイテンシ回線でもTCPウィンドウを埋めた状態に保てます。
- `--dir-cache-time`: 深い階層のバケットでのLIST呼び出しを減らすため5m〜30mに設定し、更新が反映されるよう `--poll-interval`（例: 30s）と組み合わせます。

---

## ステップ3 - 並行数とマルチパートのチューニングでスループットを引き出す

マウントの場合でも、rcloneはバックエンドのチューニングフラグを尊重します。

- `--multi-thread-streams`: 高レイテンシ経路での単一ファイルの読み取りを改善します（4〜8を試してください）。
- `--transfers`: キャッシュからの同時アップロード数を制御します。プロバイダーのスロットリングを避けるため4〜8から始めます。
- S3チャンクサイズ: `--s3-chunk-size 64M`（1Gbps以上の場合は128M）を設定し、大きなファイルでのラウンドトリップを減らします。
- S3アップロード並行数: `--s3-upload-concurrency 4` が安全な基準値です。CPUとネットワークに余裕があれば増やしてください。
- チェックサム: 重要でないデータで純粋に速度を最適化する場合を除き、整合性のために `--s3-disable-checksum=false` を維持します。
- R2のマルチパート: `--chunk-size 64M` と `--upload-cutoff 64M` を使用して、大きなアセットに対してマルチパートアップロードを強制します。

レート制限に注意してください。429/503レスポンスが表示された場合は、転送数を25%減らし、`--retries-sleep 10s` を追加します。

---

## ステップ4 - 長時間のセッションでもマウントを安定させる

- 再試行とバックオフ: `--retries 10` と `--low-level-retries 20` を設定し、`--retries-sleep 5s` と組み合わせます。
- タイムアウトの安全対策: 不安定なWi-Fiの場合、`--contimeout 15s` と `--timeout 5m` を追加して、長時間の読み取りが失敗しないようにします。
- 書き込みの安全性: 共有編集ワークロードでは、決して変更されないアーカイブに対してのみ `--immutable` を有効にします。
- ロギング: RcloneViewのマウントで詳細ログを有効にし、並行数を調整する際にtailしてスロットリングを検出します。
- ヘルスチェック: S3とR2間で整合性検証のために、毎晩 `--size-only` または `--checksum` ジョブをスケジュールします。

---

## ステップ5 - 一般的なシナリオ向けのプロファイル

### R2/S3からPlexやJellyfinへのメディアストリーミング
- `--vfs-cache-mode writes`
- `--vfs-read-ahead 96M`、`--buffer-size 16M`
- `--multi-thread-streams 6`
- R2/S3を安定させるために `--transfers 4` に制限し、ピーク時間帯には `--bwlimit 80M` を有効にします。

### マウントされたparquet/CSVでのBIダッシュボードやデータサイエンスノートブック
- ランダム読み取り用に `--vfs-cache-mode full`
- `--multi-thread-streams 8`、`--transfers 6`
- キャッシュからの高速なスピル書き込みのために、より大きな `--s3-chunk-size 128M` と `--s3-upload-concurrency 6`

### バックアップのドロップターゲット（NASからS3/R2へ）
- `--vfs-cache-mode writes`、`--dir-cache-time 30m`
- 控えめな `--transfers 4`、`--checkers 8`
- バケットポリシーで必要な場合はサーバーサイド暗号化を有効にし、チェックサムは有効なままにします。

---

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## トラブルシューティングチェックリスト

1. 大きなフォルダのブラウジングが遅い場合は、プロバイダーが許可していれば `--fast-list` を追加し、`--dir-cache-time` を延長します。
2. バッファリングが続く場合は、`--vfs-read-ahead` を上げ、SSDキャッシュ容量を確認し、OSのディスクキューを監視します。
3. スロットリングエラーが発生する場合は、`--transfers` と `--multi-thread-streams` を下げ、業務時間中は `--bwlimit` を追加します。
4. アップロードが99%で止まる場合は、`--timeout` を増やし、マルチパートのチャンクサイズがプロバイダーの最小値（S3は5MB、R2は5〜50MB）を満たしているか確認します。
5. アプリに古いメタデータが表示される場合は、`--poll-interval` を短くし、マウントを再起動してディレクトリキャッシュを更新します。

---

## よくある質問

**Q. S3とR2に別々のマウントが必要ですか？**
**A.** それぞれのリモートに対して個別のマウントを作成してください。両方を同時にアクティブにして、RcloneView内でドラッグ&ドロップできます。

**Q. キャッシュサイズはコストに影響しますか？**
**A.** はい。キャッシュを大きくすると重複するGETが減り、特にR2のリクエスト単位の課金モデルにおいて送信料やリクエスト料金を削減できる場合があります。

**Q. 読み取り専用と読み書きのワークロードを混在させることはできますか？**
**A.** 2つのマウントを使用してください。1つはメディア再生用の読み取り専用（`--read-only`）、もう1つは編集者用の読み書き用にすることで、権限とキャッシュを予測可能な状態に保てます。

**Q. パフォーマンスを継続的に監視するにはどうすればよいですか？**
**A.** 毎週マウントログとJob Historyをエクスポートし、設定にタグを付け（例: `[MountTest] R2 64M/6threads`）、チーム向けにうまくいった設定の簡単なランブックを保管してください。

---

適切にチューニングされたマウントは、ローカルのように感じられます。キャッシュ、並行数、ロギングに関するRcloneViewのGUIコントロールを使えば、シェルスクリプトを一切使わずに、S3とR2をオンプレミスストレージのようなパフォーマンスで維持できます。

<CloudSupportGrid />

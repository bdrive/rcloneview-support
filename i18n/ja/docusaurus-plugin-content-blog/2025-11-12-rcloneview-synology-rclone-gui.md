---
slug: rcloneview-synology-rclone-gui
title: "GUIでSynology NASにrcloneを導入：SSH不要"
authors:
  - tayson
description: "SSHやCLIを使わずにSynology NASでrcloneを実行。RcloneViewでリモートを管理し、変更を比較し、暗号化し、クラウドバックアップを安全に自動化できます。"
keywords:
  - synology rclone
  - rclone synology nas
  - rcloneview synology
  - synology cloud backup
  - rclone gui
  - no ssh backup
  - nas to cloud backup
  - rcloneview jobs
  - compare first backup
  - rcloneview crypt remote

tags:
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# GUIでSynology NASにrcloneを導入：SSH不要

> Synologyユーザーは、SSHやCLIのリスクなしでrcloneのパワーを求めています。RcloneViewは、視覚的なコントロール、より安全なバックアップ、そして一つのワークスペースで繰り返し可能な自動化を提供します。

DSMのツールは良い出発点ですが、多くのNASユーザーはやがて限界に直面します。クラウド対応の不足、弱いコントロール、そして不明瞭なコストやセキュリティのトレードオフです。rcloneは明らかなアップグレードですが、従来の方法ではSSHとコマンドラインのスキルが必要です。このガイドでは、rcloneのパワーを維持しながらCLIの負担を取り除く、GUIファーストのアーキテクチャを紹介します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜ「Synology rclone」がこれほど人気の検索キーワードなのか

Synology NASユーザーは通常、次の3つを求めています。

- DSMのツールよりも幅広いクラウド対応
- Copy、Sync、フィルターに対するファイル単位のコントロール
- ベンダーロックインや不透明なバックアップ形式からの解放

rcloneはそのすべてを実現しますが、ほとんどのガイドはSSHとCLIを前提としています。実際の検索意図はシンプルです。*ターミナルを使わずにrcloneを使いたい*。

## rcloneは強力だが、CLIのみでは障壁になる

一般的なNASでのrcloneセットアップは次のようになります。

- SSHを有効化する
- ターミナルで接続する
- `rclone.conf` を編集・管理する
- コマンドを手動またはcron経由で実行する

多くのNASユーザーにとって、これは実際のリスクを生みます。

- タイプミスでデータが削除される可能性がある
- Syncの前にビジュアルプレビューがない
- 失敗後にログを追跡するのが難しい

## より良いアーキテクチャ：NASはストレージ、GUIはコントロール

キーとなる考え方は次のとおりです。

- NASは**データエンジン**のまま
- RcloneViewが**コントロールセンター**になる

内部では引き続きrcloneを使用しますが、視覚的で安全なインターフェースを通じて管理します。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS detection and connection" class="img-large img-center" />

## RcloneViewがSynologyのワークフローで変えるもの

- SSH不要のリモート設定
- 転送前のビジュアルCompare
- ジョブ履歴とログを一箇所に集約
- cronの代わりにGUIでのスケジューリング

RcloneViewはNASを置き換えるものではありません。CLIの手間なしにNASをクラウド対応にします。

## 一般的なセットアップオプション（SSH中心ではないワークフロー）

### オプション1：NASをソース、RcloneViewをコントローラーとして使用

- NAS共有フォルダー -> クラウドターゲット
- Copy/Sync/CompareはすべてRcloneViewで制御

### オプション2：ハイブリッドモデル

- NASはデータをローカルに保存
- RcloneViewがCompare、暗号化、スケジューリングを担当

## SSH依存のないステップバイステップの流れ

### ステップ1：保護すべきNASデータを特定する

- デフォルトではボリューム全体をスキップ
- 重要な共有フォルダーを選択
- プロジェクトまたはユーザーごとに分ける

### ステップ2：RcloneViewでクラウドリモートを追加する

- Google Drive、OneDrive、S3、Wasabi、Backblaze
- OAuthまたはキーベースのセットアップ

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

### ステップ3：NASフォルダーをソースとして扱う

- マッピングまたはマウントされたNASパスを使用
- 読み書き権限を明示的に保つ

## NAS + rcloneでGUIが重要な理由

### ビジュアルな安全性

- CopyとSyncの違いが明示的
- 方向のミスを見つけやすい

### 転送前のCompare

- データを移動する前に正確な差分を確認
- 一時ファイルやキャッシュファイルなどのNASノイズをフィルター

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

### 非専門家にとってのリスク低減

- 覚えるべきCLI構文がない
- 破壊的なミスの余地が少ない

## NASデータでCompareを使用する

NASフォルダーには次のようなものがよく含まれます。

- `@eaDir`
- 一時キャッシュ
- パッケージが生成するファイル

Compareは実際の変更点を識別し、不要なアップロードを避けるのに役立ちます。また、各バックアップ実行前にコストの可視性も得られます。

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="Compare and copy only changes" class="img-large img-center" />

## NASバックアップにおけるCopyとSyncの違い

### Copy（推奨されるデフォルト）

- 転送先での削除がない
- バックアップに最も安全
- ロールバックが容易

### Sync（上級者向けのみ）

- 制御されたミラーリングにのみ使用
- 常に最初にDry Runを実行する

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />

## アップロード前にNASデータを暗号化する（Cryptリモート）

NASの暗号化は、データがNASを離れた後は保護しません。Cryptリモートは、アップロード前にクライアント側での暗号化を提供します。

- ファイルコンテンツおよびオプションのファイル名の暗号化
- クラウド上でのゼロ知識ストレージ

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="Add Crypt remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="Select Crypt target folder" class="img-large img-center" />
</div>

## cronを使わないスケジューリングと自動化

CopyまたはSyncをJobとして保存し、視覚的にスケジュールします。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

これにより、次のことが得られます。

- ジョブ履歴と失敗の可視化
- 再現可能な設定
- チーム間での引き継ぎが容易に

## 実際のNASバックアップシナリオ

### ホームNAS -> Google Drive

- 写真やドキュメント
- 高速な単一ファイルの復元

### 小規模オフィスNAS -> S3またはWasabi

- 予測可能なコストと長期ストレージ
- 制御されたCopyジョブ

### パワーユーザーまたはIT管理者

- NAS -> マルチクラウドターゲット
- 部門またはプロジェクトごとに分けたジョブ

## セキュリティと安全性の考慮事項

- 可能な限り読み取り専用マウントを使用する
- バックアップジョブと同期ジョブを分離する
- クラウド上で直接ファイルを開いて復元をテストする

## よくある誤解

**「CLIの方が常に優れている」**
強力ですが、本番環境のNASデータではリスクを伴います。

**「GUIは初心者向けだけ」**
GUIは運用上の安全性と監査可能性を向上させます。

## 結論：rcloneは強力、コントロールがすべて

Synologyユーザーは柔軟性を求めてrcloneを選びます。RcloneViewはその力を維持しながら、SSHとCLIの手間を取り除きます。より安全なワークフロー、より優れた可視性、そして信頼できるバックアップが手に入ります。

ターミナルを使わずにSynologyでrcloneを利用したいなら、これが最もシンプルな方法です。

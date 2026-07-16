---
slug: cloud-api-rate-limits-explained-rcloneview
title: "クラウドAPIレート制限を徹底解説 — 転送が失敗する理由と解決方法"
authors:
  - tayson
description: "Google Driveの403エラー？ OneDriveのスロットリング？ クラウドAPIレート制限とは何か、なぜ転送が失敗するのか、そしてRcloneViewでそれを回避する設定方法を解説します。"
keywords:
  - cloud api rate limit
  - google drive 403 error
  - onedrive throttling
  - s3 rate limit
  - cloud transfer failed
  - api rate limit exceeded
  - cloud sync error fix
  - google drive quota exceeded
  - dropbox rate limit
  - cloud storage api limits
tags:
  - troubleshooting
  - api
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウドAPIレート制限を徹底解説 — 転送が失敗する理由と解決方法

> クラウド同期が快調に始まったのに、突然速度が這うように遅くなる。「Rate limit exceeded」「403 Forbidden」「Too many requests」といったエラーメッセージが表示される。転送は60%で止まってしまう。一体何が起きているのでしょうか？

すべてのクラウドストレージプロバイダーは、APIとのやり取り速度に制限を設けています。このレート制限はインフラを不正利用から守るためのものですが、大量のデータを移動している正当なユーザーにも影響を与えます。この制限を理解し、ツールをそれに合わせて設定することが、確実に完了する転送と途中で失敗する転送の分かれ目になります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## APIレート制限とは？

クラウドストレージでファイルをアップロード、ダウンロード、一覧表示、変更する際、ツールはAPI呼び出しを行います。各操作は1つ以上のAPIリクエストです。レート制限は、一定期間内に行えるリクエスト数の上限を定めます。

### 制限の種類

- **秒あたりのリクエスト数** — 1秒間に行えるAPI呼び出しの数（例：S3では、プレフィックスごとに秒間3,500件のPUTリクエスト）。
- **1日あたりのリクエスト数** — 1日の総API呼び出し数（例：Google Driveはアプリ全体で1日あたり約100億クエリだが、ユーザー単位ではもっと少ない）。
- **1日あたりの帯域幅** — 総データ転送量（例：Google Driveでは1日あたり約750GBのアップロード）。
- **同時接続数** — 許可される同時接続の数。
- **バースト制限** — スロットリングが発動するまでに許容される短期的なスパイク。

## プロバイダー別のレート制限

### Google Drive

| 制限 | 値 |
|-------|-------|
| 1日あたりのアップロード | 約750GB |
| 1日あたりのダウンロード | 約10TB |
| 100秒あたりのAPIクエリ | ユーザーあたり1,000件 |
| 秒あたりのファイル操作 | 約10件 |
| エラーコード | 403（userRateLimitExceeded）、429 |

Google Driveは最もレート制限が厳しいプロバイダーの1つです。`403`や`userRateLimitExceeded`が表示された場合、その壁にぶつかっています。

### OneDrive / SharePoint

| 制限 | 値 |
|-------|-------|
| API呼び出し | 動的スロットリング |
| 同時アップロード | 推奨は約4件 |
| エラーコード | 429（Too Many Requests）、503 |

Microsoftは動的スロットリングを採用しており、セッション内での使用量が増えるにつれて制限が厳しくなります。

### AWS S3

| 制限 | 値 |
|-------|-------|
| PUT/COPY/POST/DELETE | プレフィックスあたり秒間3,500件 |
| GET/HEAD | プレフィックスあたり秒間5,500件 |
| 1日あたりの帯域幅制限 | なし（無制限） |
| エラーコード | 503（Slow Down） |

S3は最も寛容です。数千件の小さなファイル操作を行わない限り、ほとんどのユーザーはレート制限に達しません。

### Dropbox

| 制限 | 値 |
|-------|-------|
| API呼び出し | アプリごとに約300件/分 |
| セッションあたりのアップロード | 段階的スロットリング |
| エラーコード | 429 |

### Backblaze B2

| 制限 | 値 |
|-------|-------|
| API呼び出し | プランに基づく |
| 同時アップロード | 明確な上限なし |
| 帯域幅 | 従量課金、上限なし |

B2は非常に寛容で、レート制限が問題になることはほとんどありません。

## RcloneViewがレート制限にどう対処するか

### 自動リトライ

rcloneはレート制限エラー（429、403、503）を受け取ると、自動的に：

1. 該当する転送を一時停止します。
2. サーバーが指定した時間だけ待機します（または指数バックオフを使用します）。
3. 操作を再試行します。

これは転送ログに「rate limited, waiting X seconds」として表示されます。

### 並列転送数の設定

APIリクエストレートを下げるには、並列転送数を減らします。

| プロバイダー | 推奨並列転送数 |
|----------|-------------------------------|
| Google Drive | 3〜4 |
| OneDrive | 4 |
| Dropbox | 3〜4 |
| S3 | 8〜32 |
| B2 | 8〜16 |

### 帯域幅制限

[帯域幅制限](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)を使ってデータ転送レートを制御し、間接的にAPI呼び出しを減らせます。

### v1.3の失敗転送リトライ機能

レート制限対策を行ってもなお転送が失敗する場合、v1.3のリトライ機能はジョブ完了後に失敗したファイルを再実行できます。

## レート制限を回避する戦略

### 1) 時間帯を選んで転送する

他のユーザー（および自分自身のアプリ）がAPI呼び出しを行っていない夜間や週末に、大きな転送をスケジュールしましょう。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers during off-hours" class="img-large img-center" />

### 2) 複数日に分散する

Google Driveの1日あたり750GBのアップロード制限を超える移行の場合：

- 1日目：フォルダA（500GB）を転送。
- 2日目：フォルダB（500GB）を転送。
- 3日目：フォルダCを転送し、すべてを検証。

### 3) 自分のAPI認証情報を使う

Google Driveをはじめとする一部のプロバイダーでは、共有の認証情報ではなく自分自身のOAuthアプリ認証情報を使うことで、より高いレート制限が適用される場合があります。自分のGoogle APIプロジェクトを設定して、より大きなクォータを確保しましょう。

### 4) ファイルチェックを減らす

初回の一括アップロードでは、転送先の存在チェックをスキップしましょう。これにより（各ファイルが既に存在するかを確認する）API呼び出しの半分を削減できます。

### 5) 小さなファイルをバッチ化する

数千個の小さなファイルがある場合、転送前にZIPにアーカイブすることを検討してください。1GBのZIP1つなら1回のAPI呼び出しで済みますが、10,000個の個別ファイルをアップロードすると10,000回の呼び出しが必要になります。

## レート制限の兆候を監視する

転送の進行状況を見て、スロットリングの兆候がないか確認しましょう。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor for rate limit errors" class="img-large img-center" />

警告サイン：

- 好調に始まった転送速度が突然低下する。
- 転送が周期的に一時停止する。
- ログに429や403コードのエラーメッセージが表示される。
- 転送速度が変動する（速い→遅い→速い）。

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 使用するクラウドプロバイダーに応じて**適切な並列転送数を設定**します。
3. 大きな転送は**時間帯を選んでスケジュール**します。
4. **進行状況を監視**し、スロットリングの兆候を確認します。
5. 信頼性を高めるために**リトライ機能（v1.3）**を活用します。

レート制限がなくなることはありませんが、適切な設定を行えば、その範囲内で確実に作業を進めることができます。

---

**関連ガイド：**

- [Google Driveの403レート制限エラーを修正する](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [帯域幅制限の設定](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />

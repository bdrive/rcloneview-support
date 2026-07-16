---
slug: troubleshoot-rclone-errors-rcloneview
title: "RcloneViewでrcloneのエラーをトラブルシューティング: APIレート制限、権限、タイムアウトなどを解決"
authors:
  - tayson
description: "RcloneViewのターミナル、ジョブログ、履歴を使ってrcloneの一般的なエラーを診断・修正し、APIレート制限、権限の問題、タイムアウト、データ整合性の警告を解決する方法。"
keywords:
  - rclone error fix
  - rclone troubleshooting
  - rclone api rate limit
  - rclone permission denied
  - rclone timeout
  - rclone quota exceeded
  - rclone debugging
  - rcloneview errors
  - rclone cli gui
  - cloud automation
  - rcloneview
tags:
  - sync
  - file-management
unlisted: true

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでrcloneのエラーをトラブルシューティング: APIレート制限、権限、タイムアウトなどを解決

> rcloneは強力なツールですが、403のレート制限やタイムアウト、「permission denied」といったエラーが発生すると移行作業が止まってしまうことがあります。RcloneViewはCLIの可視性とGUIのコンテキストを組み合わせることで、原因をより速く特定し、安全に修正できるようにします。

rcloneの大量の出力を眺めながら、なぜジョブが失敗したのか悩んだことがあるなら、RcloneViewはその手間を短縮できます。組み込みのターミナル、詳細ログ、ジョブ履歴を使えば、アプリを離れることなく問題を再現し、失敗しているファイルを特定し、パフォーマンスや認証設定を調整できます。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## rcloneのエラーが発生する理由

- APIの制限とクォータ: Google Drive、OneDrive、Dropboxなどからの403または429レスポンス。
- 認証スコープの問題: トークンの期限切れや権限の不足。
- パスと権限の不一致: 共有ドライブ、外部フォルダ、誤ったルートパス。
- ネットワーク状況: タイムアウト、スロットリング、不安定な接続。
- 整合性チェック: プロバイダーがアップロードを変更した際のチェックサムの不一致。

## よくあるエラーとその意味

| エラー | 通常の意味 | 次に取るべき対応 |
| --- | --- | --- |
| 403: Rate Limit Exceeded / 429 Too Many Requests | プロバイダーがリクエストをスロットリングした | `--transfers` を下げ、`--tpslimit` を追加し、バックオフして再試行 |
| Failed to copy: permission denied | フォルダまたはファイルへのアクセス権がない | パスを確認し、共有ドライブの権限を確認し、正しいスコープで再認証 |
| Failed to refresh token | OAuthトークンが期限切れまたは無効 | RcloneViewのOAuthフローでリモートを再接続 |
| Directory not found | パスの入力ミスまたは誤ったルート | `rclone lsf remote:` でパスを確認 |
| Timeout waiting for connection | ネットワークの不安定さまたはファイアウォール | 並列度を下げ、`--retries` と `--low-level-retries` で再試行 |
| Upload failed: corrupted on transfer | 整合性チェックの失敗 | `--checksum` または `rclone check` で再実行 |

## RcloneViewのターミナルを使ってエラーを再現・調査する

失敗したコマンドを組み込みのターミナルで再実行し、誤った作業ディレクトリや設定などの変数を排除します。

- **Terminal** タブを開き、`rclone ` と入力するとすべてのコマンド（オートコンプリート）が表示されます。[ガイド](/howto/rcloneview-basic/using-terminal-in-rcloneview)
- コピーや共有が可能な詳細出力を取得するには `-vv` を追加します。

例:

```bash
rclone about myremote: -vv
rclone lsf myremote:path -vv --dirs-only --recursive
rclone sync src: dst: -vv --transfers=8
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="RcloneView Terminal autocomplete" class="img-medium img-center" />

## ジョブログと履歴を確認してパターンを見つける

ジョブモニターと履歴ビューでは、どのファイルが失敗したか、その頻度がわかります。

- **ジョブモニター**: 実行中のジョブ用のライブTransferタブと、完了したジョブ用のCompleted/APIログ。[手順を見る](/howto/rcloneview-basic/real-time-transfer-monitoring)
- **履歴**: ジョブマネージャーから特定のジョブの履歴を開き、ファイルごとの結果を確認します。[手順を見る](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="Job Monitor transfer log" class="img-medium img-center" />

## APIレート制限とクォータのエラーを修正する

- 同時実行数を下げる: ジョブオプションまたはコマンドフラグで `--transfers` と `--checkers` を減らします。
- 適度なスロットリングを追加する: APIが厳しいプロバイダーには `--tpslimit` と `--tpslimit-burst` を使用します。
- 大きなジョブを分割する: フォルダ単位で実行するか、ジョブマネージャーでオフピーク時間帯にスケジュールします。
- 増分実行を使用する: Compare + Syncを組み合わせて、変更されたファイルのみを転送し、API呼び出しを減らします。

## 認証とOAuthの問題を修正する

- RcloneViewのOAuthプロンプトを使って、正しいスコープでリモートを再認証します。
- トークンが期限切れまたは失効している場合は、リモートを再作成するか、ターミナルで `rclone config reconnect remote:` を実行して更新します。
- 共有ドライブや委任アカウントの場合は、リモートが正しいドライブIDまたはテナントIDで設定されているか確認します。

## Permission deniedエラーを修正する

- パスが存在し、アクセス権があることを確認します: ターミナルで `rclone lsf remote:folder` を実行します。
- Googleの共有ドライブやDropboxの共有フォルダの場合は、リモートが正しいルートまたはドライブIDを使用していることを確認します。
- 共有ドライブにコピーする場合は、書き込み権限があるか確認してください。なければ自分が所有する保存先を選択します。

## タイムアウトと不安定な接続を修正する

- 不安定な接続では並列度を下げます: `--transfers=2 --checkers=2`。
- リトライ動作を強化します: `--retries=10 --retries-sleep=5s --low-level-retries=20`。
- 大きなファイルにはマルチスレッドストリーミングを有効にします: `--multi-thread-streams=4 --multi-thread-cutoff=64M`。
- 大規模な同期の前に、軽量なコマンドでターミナルから到達性をテストします:

```bash
rclone lsf remote: --max-depth 1 --fast-list -vv
```

## データ整合性とチェックサムのエラーを修正する

- ドライラン `--dry-run` をSyncまたはCopyジョブで実行し、ソースと保存先を検証します。
- `rclone check` を使って2つのリモート間のチェックサムを比較します:

```bash
rclone check source:folder dest:folder --one-way --size-only
```

- 対応しているプロバイダーではチェックサム比較を有効にして、サイレント破損を検出します。

## GUIとターミナルの使い分け

- **GUI**: ジョブの作成、定期バックアップのスケジュール設定、同期前のCompare、クラウド間のドラッグ&ドロップ。
- **ターミナル**: エラーの迅速な診断、バックエンドフラグのテスト、`-vv` の完全なログでのアドホックなコマンド実行。
- 両方を活用する: ターミナルでプロトタイプを作成し、安定したコマンドを再利用可能なジョブとして保存します。

## クイックトラブルシューティングチェックリスト

1. ターミナルで `-vv` を使ってエラーを再現し、ログをコピーする。
2. ジョブモニターと履歴で、失敗したファイルとその頻度を確認する。
3. 該当する修正カテゴリを適用する: レート制限（同時実行数を下げる）、認証（再認証）、権限（パス/ルートを確認）、ネットワーク（スレッド数を減らし、リトライ回数を増やす）、整合性（`check` を実行）。
4. 変更を加える前に `--dry-run` で再実行する。

## まとめ

RcloneViewはrcloneのデバッグをガイド付きのワークフローに変えます。構文ミスを防ぐオートコンプリート、何が失敗したかを確認できるアプリ内ログ、同時実行数やスケジュールを調整できるGUIコントロール。ターミナルとジョブ履歴を併用して、エラーをより速く解決し、転送を止めないようにしましょう。

<CloudSupportGrid />

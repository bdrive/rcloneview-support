---
slug: remote-management-add-edit-delete-rcloneview
title: "リモート管理ガイド — RcloneViewでクラウド接続を追加・編集・整理する"
authors:
  - tayson
description: "70以上のクラウドプロバイダーの管理は、整理されたリモートから始まります。RcloneViewのリモートマネージャーでクラウド接続を追加・設定・編集・整理する方法を解説します。"
keywords:
  - rcloneview remote manager
  - add cloud remote rcloneview
  - manage cloud connections
  - rclone remote setup
  - cloud connection manager
  - rcloneview configure remote
  - add cloud account rcloneview
  - rcloneview setup guide
  - cloud remote configuration
  - organize cloud accounts
tags:
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# リモート管理ガイド — RcloneViewでクラウド接続を追加・編集・整理する

> 最初のリモートの設定は2分で終わります。しかし15個目ともなると、体系立てた管理が必要です。マルチクラウド環境が拡大するにつれて、すべてのクラウド接続を効率的に管理する方法を紹介します。

RcloneViewでは、各クラウドプロバイダーは「リモート」として扱われます。これは認証情報と設定を持つ、名前付きの接続です。リモートが2つ、3つ程度であれば管理は簡単です。しかし、プロバイダーを追加していくうちに（多くのユーザーは最終的に10個以上になります）、整理しておくことが不可欠になります。このガイドでは、最初のリモートの追加から、複雑なマルチクラウド環境の管理まで、すべてを解説します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 新しいリモートの追加

<img src="/support/images/en/blog/new-remote.png" alt="Add new remote" class="img-large img-center" />

リモートマネージャーは、70以上のプロバイダーの追加をステップごとに案内してくれます。プロバイダーの種類ごとに設定項目は異なります — Google DriveはOAuth、S3はアクセスキー、WebDAVはURLと認証情報を使用します。

### 主なプロバイダーの種類

| 接続タイプ | 例 | 認証方法 |
|----------------|---------|-------------|
| OAuth | Google Drive, OneDrive, Dropbox | ブラウザログイン |
| アクセスキー | S3, B2, Wasabi, R2 | キー + シークレット |
| ユーザー名/パスワード | WebDAV, FTP, SFTP | 認証情報 |
| トークン | Box, Mega | APIトークン |

## 命名規則

適切な命名は、後々の混乱を防ぎます。以下のパターンを検討してください。

- **プロバイダー別**: `gdrive-personal`, `gdrive-work`, `s3-backup`
- **用途別**: `backup-primary`, `backup-secondary`, `archive`
- **チーム別**: `marketing-drive`, `engineering-s3`, `finance-onedrive`

## リモート設定の編集

認証情報の更新、エンドポイントの変更、設定の変更が必要ですか？ リモートマネージャーから、リモートを作り直すことなくいつでも編集できます。

編集が必要になる主な理由:

- **OAuthトークンの期限切れ** — ジョブ設定を失うことなく再認証できます
- **アクセスキーの変更** — ローテーション後にS3の認証情報を更新します
- **エンドポイントの変更** — S3のリージョンやカスタムエンドポイントを切り替えます

## 高度な設定

### Crypt（暗号化）リモート

既存のリモートを暗号化でラップするリモートを作成します。Cryptリモートは、ファイル名とファイル内容をクラウドに送信する前に暗号化します。

### Union/Combineリモート

複数のリモートを1つの仮想ビューにマージします。複数プロバイダーの無料ストレージ枠をまとめて活用する際に便利です。

## リモートの整理

リモートの数が増えてきたら:

- **命名規則を統一する** — リモートが論理的にソートされるようにします
- **構成をドキュメント化する** — どのリモートがどこにバックアップされるか記録します
- **未使用のリモートを整理する** — 古い試用アカウントを削除します
- **接続を定期的にテストする** — 期限切れのトークンはサイレントな失敗の原因になります

## エクスプローラーでのリモートの利用

設定が完了すると、リモートは2ペインのエクスプローラーに表示されます。任意のリモートを、ソースまたは宛先のペインとして選択できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse remotes in explorer" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **最初のリモートを追加**します — ガイドに沿って設定してください。
3. 後で分かりやすいように**明確な名前を付け**ます。
4. 必要に応じて**さらにリモートを追加**します。
5. 統一された命名規則で**整理された状態を保ち**ます。

適切なリモート管理は、優れたクラウド管理の基盤です。

---

**関連ガイド:**

- [接続マネージャーガイド](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [クラウドバックアップの暗号化](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [仮想リモート: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />

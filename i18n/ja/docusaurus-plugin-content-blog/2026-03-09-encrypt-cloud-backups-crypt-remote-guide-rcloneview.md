---
slug: encrypt-cloud-backups-crypt-remote-guide-rcloneview
title: "Rclone Cryptでクラウドバックアップを暗号化 — Google Drive、S3などのためのゼロ知識暗号化"
authors:
  - tayson
description: "rcloneのcryptリモートでアップロード前にクラウドファイルを暗号化。RcloneViewを使ったGoogle Drive、OneDrive、S3、あらゆるクラウドプロバイダー向けのゼロ知識暗号化の完全ガイド。"
keywords:
  - クラウドストレージ 暗号化
  - rclone crypt リモート
  - クラウド ゼロ知識暗号化
  - google drive ファイル 暗号化
  - 暗号化クラウドバックアップ
  - rclone 暗号化ガイド
  - onedrive ファイル 暗号化
  - クライアントサイド暗号化 クラウド
  - s3 ファイル 暗号化
  - 暗号化クラウドストレージツール
tags:
  - RcloneView
  - encryption
  - crypt
  - security
  - feature
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone Cryptでクラウドバックアップを暗号化 — Google Drive、S3などのためのゼロ知識暗号化

> Google Driveにファイルをアップロードすると、Googleはそれを読むことができます。S3にデータを保存すると、Amazonはそれにアクセスできます。rcloneのcryptリモートはこれを変えます — ファイルはマシンから出る前に暗号化されます。

クラウドプロバイダーはサーバー上で「at rest」でデータを暗号化しますが、鍵はプロバイダーが保持しています。つまり、プロバイダー(そして場合によっては政府機関、プロバイダーに侵入したハッカー、または不正な従業員)があなたのファイルにアクセスできる可能性があります。rcloneのcryptリモートは真のゼロ知識暗号化を提供します。ファイルはアップロード前にあなたのマシン上で暗号化され、鍵を持つのはあなただけです。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cryptリモートとは?

Cryptリモートは、既存のクラウドリモートの上に配置される仮想レイヤーです。

```
あなたのファイル → Cryptリモート(暗号化) → クラウドリモート(暗号化済みblobをアップロード)
```

ファイルを読み取るとき:

```
クラウドリモート(暗号化済みblob) → Cryptリモート(復号) → あなたのファイル
```

クラウドプロバイダーは暗号化されたデータのみを保存します。ファイル名、ディレクトリ名、ファイルの内容はすべて暗号化されます。プロバイダーはあなたが何を保存しているか見ることができません。

## Crypt暗号化の仕組み

### 暗号化標準

- **ファイル内容**: HMAC-SHA256認証を伴うCTRモードのAES-256。
- **ファイル名**: オプションの難読化を伴うAES-256 EME(encrypt-mix-encrypt)。
- **ディレクトリ名**: ファイル名と同様(デフォルトで暗号化)。

### 何が暗号化されるか

| コンポーネント | 標準モード | ファイル名暗号化あり |
|-----------|:---:|:---:|
| ファイル内容 | ✅ 暗号化済み | ✅ 暗号化済み |
| ファイル名 | ❌ 表示される | ✅ 暗号化済み |
| ディレクトリ名 | ❌ 表示される | ✅ 暗号化済み |
| ファイルサイズ | ❌ 表示される(わずかにパディング) | ❌ 表示される(わずかにパディング) |
| ディレクトリ構造 | ❌ 表示される | ✅ 暗号化済み |

**推奨事項**: プライバシーを最大化するため、常にファイル名暗号化を有効にしてください。

## RcloneViewでのCryptの設定

### ステップ1: 既存のリモートを用意する

まず、クラウドストレージを通常のリモートとして追加します(例: Google Drive、S3、Backblaze B2)。

<img src="/support/images/en/blog/new-remote.png" alt="Add base cloud remote" class="img-large img-center" />

### ステップ2: その上にcryptリモートを作成する

種類**Crypt**の新しいリモートを追加します。既存のリモート上のフォルダを指すように設定します。

- **Remote**: `gdrive:encrypted-backup/`(Google Drive上のフォルダ)。
- **File name encryption**: Standard(暗号化)。
- **Directory name encryption**: True。
- **Password**: 強力なパスワード(これがあなたの暗号化キーです — **紛失しないでください**)。
- **Password2 (salt)**: 追加のセキュリティのための補助パスワード。

### ステップ3: cryptリモートを使用する

これで、cryptリモートを介してファイルを閲覧または転送すると、すべてが透過的に暗号化されます。cryptリモート経由でアップロード → ファイルはGoogle Driveに暗号化された状態で届きます。cryptリモート経由でダウンロード → ファイルは自動的に復号されます。

## 暗号化バックアップのワークフロー

### 暗号化バックアップジョブを設定する

ローカルストレージ(または別のクラウド)からcryptリモートへのCopyジョブを作成します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create encrypted backup job" class="img-large img-center" />

### 毎日の暗号化バックアップをスケジュールする

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule encrypted backup" class="img-large img-center" />

### クラウドプロバイダーから見えるもの

誰かがあなたのGoogle Driveを閲覧すると、次のように見えます。

```
encrypted-backup/
  q6r2v8s3f1g4h5j6k7l8/
    a1b2c3d4e5f6g7h8i9j0k1l2m3n4.bin
    p5q6r7s8t9u0v1w2x3y4z5a6b7c8.bin
  m9n0o1p2q3r4s5t6u7v8/
    d9e0f1g2h3i4j5k6l7m8n9o0p1q2.bin
```

ファイル名は判読不能です。内容は暗号化されています。フォルダ構造さえも隠されています。

### あなたに見えるもの(cryptリモート経由)

```
encrypted-backup/
  Documents/
    tax-return-2025.pdf
    passport-scan.jpg
  Medical/
    lab-results-march.pdf
```

通常の読みやすいファイル — オンザフライで復号されます。

## 実践的なユースケース

### 1) 暗号化されたGoogle Driveバックアップ

日常使いの個人用Google Drive。同じGoogle Drive上に機密ファイルの暗号化バックアップを作成:

```
gdrive:Documents/     ← 通常のファイル(Googleが見える)
gdrive-crypt:Sensitive/ ← 暗号化(Googleにはblobしか見えない)
```

### 2) 暗号化されたS3アーカイブ

クライアントサイド暗号化でS3に機密データをアーカイブ。AWSアカウントが侵害されても、パスワードなしではデータは読み取れません。

### 3) HIPAA/コンプライアンスストレージ

保存時の暗号化が求められる医療、法律、金融データ。Cryptリモートは検証可能なクライアントサイド暗号化を提供します。

### 4) 国境を越えたデータ保護

プロバイダーのデータアクセスポリシーを完全には信頼できないクラウドリージョンにデータを保存する場合。

## 暗号化バックアップの検証

Folder Comparisonをcryptリモート経由で使用して、暗号化バックアップがソースと一致していることを確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify encrypted backup" class="img-large img-center" />

## 重要な警告

### パスワードを紛失しないこと

「パスワードを忘れた」場合の復旧手段はありません。cryptパスワードを紛失すると、暗号化されたデータには永久にアクセスできなくなります。誰も — rcloneも、Googleも、Amazonも — 復旧できません。

**パスワードを安全に保管してください:**

- 書き留めて物理的な金庫に保管する。
- パスワードマネージャーを使用する(暗号化対象のクラウドとは別のもの)。
- 異なる場所に少なくとも2つのコピーを保管する。

### 暗号化されたファイルを直接編集しない

クラウドプロバイダー上で暗号化されたblobを直接編集しないでください。常にcryptリモートを介してアクセスしてください。直接編集するとファイルが破損します。

### パフォーマンスへの影響

暗号化は多少のCPUオーバーヘッドを追加します。

- 最新のデスクトップやラップトップでは無視できるレベル。
- Raspberry Piや低電力デバイスでは目立つ場合がある。
- ネットワーク速度には影響しない(暗号化はアップロード前に行われる)。

## 複数のCryptリモート

異なる目的のために複数のcryptリモートを作成できます。

| Cryptリモート | 参照先 | パスワード | 用途 |
|-------------|-----------|----------|----------|
| crypt-personal | gdrive:encrypted/ | Password A | 個人の機密ファイル |
| crypt-work | s3:work-encrypted/ | Password B | 仕事関連の文書 |
| crypt-archive | b2:archive-encrypted/ | Password C | 長期アーカイブ |

それぞれ異なるパスワードと異なる基盤ストレージを使用します。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**する。
2. クラウドストレージを通常のリモートとして**追加する**。
3. そのクラウド上のフォルダを指す**cryptリモートを作成する**。
4. **強力なパスワードを設定**し、安全に保管する。
5. 機密性の高いすべてのファイル操作に**cryptリモートを使用する**。
6. 自動化のために**暗号化バックアップをスケジュールする**。

あなたのデータ。あなたの鍵。あなたのコントロール。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [HIPAA準拠クラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)

<CloudSupportGrid />

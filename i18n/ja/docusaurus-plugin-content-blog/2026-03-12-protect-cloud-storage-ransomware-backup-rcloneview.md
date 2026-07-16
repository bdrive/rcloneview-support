---
slug: protect-cloud-storage-ransomware-backup-rcloneview
title: "ランサムウェアからクラウドストレージを守る — RcloneViewによるイミュータブルバックアップ"
authors:
  - tayson
description: "ランサムウェアは同期を通じてクラウド上のファイルも暗号化してしまう可能性があります。RcloneViewを使って、ランサムウェア攻撃を生き延びるイミュータブルでエアギャップされたクラウドバックアップを作成する方法を解説します。"
keywords:
  - ransomware cloud storage protection
  - immutable cloud backup
  - ransomware proof backup
  - cloud ransomware protection
  - air gapped cloud backup
  - protect google drive ransomware
  - ransomware cloud sync
  - immutable s3 backup
  - cloud backup ransomware defense
  - anti ransomware backup strategy
tags:
  - ransomware
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# ランサムウェアからクラウドストレージを守る — RcloneViewによるイミュータブルバックアップ

> ランサムウェアはローカルファイルを暗号化するだけではありません。クラウド同期が有効になっている場合、クラウド上のコピーも暗号化されたバージョンで上書きされてしまいます。Google Drive、OneDrive、Dropboxのいずれも、わずか数分で被害を受ける可能性があります。

クラウドストレージは「クラウドにあるから、バックアップされている」と安心しがちです。しかし、クラウド同期ツールは双方向に動作します。ランサムウェアがコンピューター上のファイルを暗号化すると、同期クライアントは律儀にその暗号化されたバージョンをクラウドにアップロードし、元のファイルを置き換えてしまいます。数分のうちに、あなたのクラウドストレージは暗号化されたゴミで埋め尽くされます。解決策は、ランサムウェアが手を出せないバックアップコピーを持つことです。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ランサムウェアがクラウドに到達する仕組み

1. **ランサムウェアがローカルファイルを暗号化** — コンピューター上のファイルが暗号化されます。
2. **同期クライアントが変更を検知** — OneDrive、Dropbox、Google Driveの同期が「変更あり」を検知します。
3. **暗号化されたファイルがアップロードされる** — 同期クライアントが元のファイルを暗号化バージョンに置き換えます。
4. **クラウドストレージも暗号化される** — ローカルとクラウドの両方のコピーが被害を受けます。

## 防御戦略: 同期ではなくコピーを使う

重要なポイントは、**バックアップには同期ではなくコピージョブを使うこと**です。コピーはファイルの追加と更新のみを行い、送信先からファイルを削除することはありません。プライマリのクラウドがランサムウェアに暗号化されたファイルで汚染されても、バックアップには最後の正常なバージョンが保持されます。

### プライマリクラウド（脆弱）

```
Google Drive ← ローカルコンピューターと同期（ランサムウェアがここに到達可能）
```

### バックアップ（保護されている）

```
Google Drive → コピー → Backblaze B2（ランサムウェアは古いバージョンを削除できない）
```

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create ransomware-resistant backup" class="img-large img-center" />

## 追加の保護レイヤー

### 1) S3 Object Lock（イミュータブル）

AWS S3はObject Lockをサポートしており、指定した期間、ファイルの変更や削除ができないようにできます。

- **ガバナンスモード** — 誤削除から保護します。管理者は上書きすることができます。
- **コンプライアンスモード** — ルートアカウントであっても、誰も削除・変更できません。

Object Lockを有効にしたS3バケットにバックアップしましょう。ランサムウェアがAWSの認証情報を突破したとしても、ロックされたオブジェクトは生き残ります。

### 2) バージョニング

バックアップ先のストレージでバージョニングを有効にしましょう。

- **S3バージョニング** — 上書きのたびに新しいバージョンが作成されます。古いバージョンは保持されます。
- **B2バージョニング** — Backblazeはデフォルトで以前のバージョンを保持します。

ランサムウェアに暗号化されたファイルがバックアップにコピーされたとしても、以前のクリーンなバージョンにアクセスすることができます。

### 3) 認証情報を分ける

バックアップ先には異なる認証情報を使用しましょう。プライマリとバックアップのクラウド間でAWSキーやOAuthトークンを使い回してはいけません。ランサムウェアが一方の認証情報を盗んだとしても、もう一方は安全なままです。

### 4) cryptによる暗号化バックアップ

rcloneのcryptリモートを使って、バックアップを暗号化しましょう。誰かがバックアップストレージにアクセスできたとしても、あなたのcryptパスワードなしでは暗号化されたデータを変更することはできません。

## バックアップスケジュール

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ransomware-resistant backup" class="img-large img-center" />

重要なデータについては、1日に複数回コピージョブを実行しましょう。

| データの種類 | バックアップ頻度 | 保持期間 |
|-----------|-----------------|-----------|
| 重要な文書 | 4時間ごと | 90日分のバージョン |
| プロジェクトファイル | 毎日 | 30日分のバージョン |
| アーカイブ | 毎週 | 1年間 |

## バックアップの整合性を検証する

バックアップが破損していないか、定期的に確認しましょう。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup integrity" class="img-large img-center" />

## 復旧計画

ランサムウェアの被害に遭った場合:

1. **すべての同期クライアントを即座に停止**します。
2. **ネットワークから切断**し、被害の拡大を防ぎます。
3. **RcloneView経由でバックアップにアクセス**します（クリーンなマシンから）。
4. **最後のクリーンなバージョンから復元** — バックアップからクリーンなクラウドアカウントへコピーします。
5. **フォルダ比較で復元したデータを検証**します。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **同期ではなくコピー**で、別のプロバイダーへのバックアップを設定します。
3. バックアップストレージで**バージョニングを有効**にします。
4. バックアップアカウントには**別の認証情報を使用**します。
5. **頻繁なバックアップをスケジュール**します。
6. **復元をテスト** — 必要になる前に練習しておきましょう。

最高のランサムウェア対策は、ランサムウェアが手を出せないバックアップを持つことです。

---

**関連ガイド:**

- [クラウド間バックアップが重要な理由](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)
- [誤って削除したファイルを復元する](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)
- [同期・コピー・移動の違い](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [クラウドバックアップを暗号化する](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

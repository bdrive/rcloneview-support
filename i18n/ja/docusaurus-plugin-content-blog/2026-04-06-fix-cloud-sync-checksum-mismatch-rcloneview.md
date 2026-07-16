---
slug: fix-cloud-sync-checksum-mismatch-rcloneview
title: "RcloneViewでクラウド同期のチェックサム不一致エラーを解決する"
authors:
  - tayson
description: "RcloneViewでクラウド同期時に発生するチェックサム不一致エラーを解決します。rcloneがチェックサムをどう扱うか、プロバイダー間のハッシュの違い、そして --ignore-checksum を使うべきタイミングを解説します。"
keywords:
  - rclone checksum mismatch
  - cloud sync checksum error
  - rclone hash mismatch fix
  - rcloneview checksum error
  - rclone ignore checksum
  - md5 sha1 cloud storage hash
  - rclone data integrity check
  - fix sync mismatch rclone
  - cloud provider hash comparison
  - rclone checksum verification
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - guide
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでクラウド同期のチェックサム不一致エラーを解決する

> クラウド同期時のチェックサム不一致は、多くの場合データが破損しているのではなく、転送元と転送先が異なるハッシュアルゴリズムを使用していることが原因です。ここでは、その診断方法と解決方法を説明します。

rcloneがクラウドプロバイダー間でファイルを同期する際、転送されたデータが元のファイルと一致するかどうかをチェックサムで比較します。転送元と転送先のプロバイダーが異なるハッシュアルゴリズムを使用している場合、あるいは一方のプロバイダーがチェックサムをまったく返さない場合、rcloneは不一致を報告したり、不要にファイルを再転送したりすることがあります。このガイドでは、何が起きているのか、そしてRcloneViewでの解決方法を説明します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## チェックサム不一致とは

チェックサム(ハッシュ)は、ファイルの内容から計算される固定長の文字列です。2つのファイルが同じチェックサムを生成する場合、それらは同一のファイルです。rcloneはチェックサムを次の目的で使用します。

- **アップロードの検証** — 転送後に転送先のファイルが転送元と一致することを確認する。
- **変更の検出** — 同期時に、チェックサムとサイズが変化していないファイルをスキップする。
- **整合性の確保** — ファイルのハッシュが期待値と一致しない場合、破損としてフラグを立てる。

不一致とは、一方で計算されたハッシュがもう一方と一致しないことを意味します。これは実際のデータ破損を示している場合もありますが、多くの場合はプロバイダー間の**ハッシュアルゴリズムの非互換性**を反映しているだけです。

## プロバイダー固有のハッシュの違い

クラウドプロバイダーごとにサポートするハッシュアルゴリズムは異なります。

| プロバイダー | サポートするハッシュ |
|----------|-----------------|
| **ローカルディスク** | MD5、SHA-1、SHA-256(OSに依存) |
| **Google Drive** | MD5 |
| **OneDrive** | SHA-1、QuickXorHash |
| **Dropbox** | Dropboxコンテンツハッシュ(独自形式) |
| **Amazon S3** | MD5(ETag、ただしマルチパートアップロードは除く) |
| **Backblaze B2** | SHA-1 |
| **Azure Blob** | MD5 |
| **SFTP** | MD5、SHA-1(サーバーがサポートする場合) |
| **Wasabi** | MD5(ETag) |
| **Cloudflare R2** | MD5(ETag) |

共通のハッシュアルゴリズムを持つプロバイダー間で同期する場合(例: Google Drive の MD5 と Azure Blob の MD5)、チェックサムはシームレスに機能します。共通のハッシュがない場合(例: Google Drive の MD5 と OneDrive の QuickXorHash)、rcloneはチェックサムを直接比較できません。

## rcloneがハッシュの不一致をどう扱うか

rcloneはハッシュの比較について賢く振る舞います。

1. **共通のハッシュが見つかった場合** — rcloneは共有アルゴリズムを使ってファイルを比較します。問題は発生しません。
2. **共通のハッシュがない場合** — rcloneはファイルサイズと更新日時の比較にフォールバックします。サイズと日時が一致するファイルは同一とみなされます。
3. **`--checksum` フラグが有効な場合** — rcloneはチェックサムのみを使用します(日時の比較は行いません)。共通のハッシュが存在しない場合、一致を確認できないため、rcloneはすべてのファイルを再転送します。

この3番目のシナリオが、予期しない動作の最も一般的な原因です。非互換なプロバイダー間で `--checksum` を有効にすると、不要な再転送が強制されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders in RcloneView to identify mismatched files" class="img-large img-center" />

## よくあるエラーシナリオ

### シナリオ1: S3マルチパートアップロードのETag不一致

大きなファイルをマルチパートアップロードでS3にアップロードすると、結果として生成されるETagは単純なMD5ハッシュではなく、各パートの複合ハッシュになります。rcloneがローカルで計算するMD5はS3のETagと一致しないため、次回の同期時に不一致が発生します。

**対処法:** これは想定内の動作です。rcloneは可能な場合、メタデータに期待されるハッシュを保存することでこれを処理します。大きなファイルの再転送が発生する場合は、その特定の同期ジョブに対して `--ignore-checksum` を安全に使用できます。

### シナリオ2: Google DriveからOneDriveへの同期

Google DriveはMD5を使用し、OneDriveはQuickXorHashを使用します。共通するハッシュアルゴリズムは存在しません。

**対処法:** rcloneは自動的にサイズと更新日時の比較にフォールバックします。この組み合わせでは `--checksum` を使用しないでください。使用するとすべてのファイルが再転送されてしまいます。

### シナリオ3: 暗号化(Crypt)リモート

rclone cryptを使用する場合、暗号化されたファイルは平文の転送元とは異なるハッシュを持ちます。rcloneはこれを内部で適切に処理しますが、cryptリモートのハッシュを元のプロバイダーのハッシュと比較すると、決して一致しません。

**対処法:** 暗号化されたストレージを直接見るのではなく、常にcryptリモートのレイヤーを通してファイルを比較してください。

## RcloneViewでのチェックサム動作の設定

### --checksum フラグの使用

`--checksum` フラグは、ファイルを転送する必要があるかどうかを判断する際に、更新日時ではなくチェックサムのみを使用するようrcloneに指示します。次のような場合に有効にしてください。

- 転送元と転送先の両方が同じハッシュアルゴリズムをサポートしている場合。
- 最も強力な整合性の保証が欲しい場合。
- ローカルディスクとMD5をサポートするプロバイダー間で同期する場合。

次のような場合は使用しないでください。

- 転送元と転送先に共通のハッシュがない場合 — すべてのファイルの再転送が強制されます。
- 大きなファイルをS3に同期する場合(マルチパートのETagは一致しません)。

### --ignore-checksum フラグの使用

`--ignore-checksum` フラグは、すべてのチェックサム検証をスキップします。次のような場合に使用してください。

- データが正しいことを確認済みだが、チェックサムが決して一致しない場合(例: S3マルチパートのETag)。
- 非常に大きなデータセットでハッシュ計算をスキップし、同期を高速化したい場合。
- プロバイダーが一貫性のない、または誤ったハッシュを返す場合(まれですが起こり得ます)。

デフォルトの設定として使用しないでください — チェックサムは実際の破損を検出するために存在します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure sync job flags in RcloneView before execution" class="img-large img-center" />

## データ整合性の検証

ハッシュアルゴリズムの不一致ではなく、実際にデータが破損していると疑われる場合は次の手順を行ってください。

1. **`rclone check` を実行する** — 転送元と転送先のファイルを比較し、差分を報告します。RcloneViewでは、フォルダ比較ビューを使用できます。
2. **ダウンロードしてローカルで比較する** — 転送元と転送先の両方からファイルをダウンロードし、`md5sum` や `sha256sum` でローカルのチェックサムを計算します。
3. **転送ログを確認する** — RcloneViewのジョブ履歴を確認し、元の転送時にエラーが発生していないか確認します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer progress and verify checksums in RcloneView" class="img-large img-center" />

## クイックリファレンス: ハッシュ互換性マトリクス

| 同期方向 | 共通のハッシュ | チェックサムフラグは安全か? |
|---------------|-------------|-------------------|
| ローカルからGoogle Driveへ | MD5 | はい |
| ローカルからOneDriveへ | SHA-1 | はい |
| ローカルからS3へ(小さいファイル) | MD5 | はい |
| ローカルからS3へ(マルチパート) | なし(ETagが異なる) | いいえ |
| Google DriveからOneDriveへ | なし | いいえ |
| Google DriveからS3へ | MD5 | はい(小さいファイル) |
| S3からBackblaze B2へ | なし(MD5とSHA-1) | いいえ |
| S3からAzure Blobへ | MD5 | はい(小さいファイル) |

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. 上記の表を使って **利用しているプロバイダーのハッシュサポートを確認** します。
3. 不要な再転送を防ぐため、**非互換なプロバイダー間では `--checksum` を避けます**。
4. RcloneViewの **フォルダ比較機能を使って** 同期結果を視覚的に確認します。

チェックサム不一致エラーのほとんどはデータ破損ではなく、プロバイダー間のハッシュアルゴリズムの不一致です。各プロバイダーがサポートするハッシュを理解することが、これらの問題を迅速に解決する鍵となります。

---

**関連ガイド:**

- [RcloneViewでrcloneエラーをトラブルシューティングする](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [S3アクセス拒否エラーを解決する](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [OneDrive同期エラーを解決する](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-delta-token-path-length-rcloneview)

<CloudSupportGrid />

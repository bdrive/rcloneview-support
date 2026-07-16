---
slug: fix-cloud-sync-timestamp-mismatch-rcloneview
title: "RcloneViewでクラウド同期のタイムスタンプ不一致エラーを解決する"
authors:
  - tayson
description: "RcloneViewでのクラウド同期中に発生するタイムスタンプ不一致エラーを解決します。クロックのずれ、タイムゾーンの違い、プロバイダーのメタデータの制限、チェックサム比較、および --use-server-modtime や --no-update-modtime などのフラグについて説明します。"
keywords:
  - rclone timestamp mismatch
  - cloud sync time error
  - rclone modification time wrong
  - rclone use server modtime
  - rclone no update modtime
  - cloud sync checksum comparison
  - rclone timezone issue
  - rclone clock skew fix
  - cloud provider timestamp support
  - rcloneview sync mismatch fix
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

# RcloneViewでクラウド同期のタイムスタンプ不一致エラーを解決する

> タイムスタンプの不一致により、rcloneは変更されていないファイルを再転送してしまい、帯域幅と時間を無駄にします。このガイドでは、なぜこの問題が発生するのか、そしてRcloneViewで正しく処理するための設定方法を説明します。

rcloneが2つの場所間でファイルを同期する際、更新日時のタイムスタンプを比較してどのファイルを更新する必要があるかを判断します。ソースと宛先が同じファイルに対して異なるタイムスタンプを報告した場合、たとえ1秒の違いであっても、rcloneはそのファイルを変更されたとみなして再度転送します。これにより不要な転送、帯域幅コストの増大、そして完全には終わらないように見える同期ジョブが発生します。この問題は、異なるクラウドプロバイダー間で同期する場合や、タイムスタンプの扱いが異なるローカルストレージとクラウドリモート間で同期する場合に特によく見られます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## タイムスタンプ不一致が発生する理由

タイムスタンプは一見単純に思えます。ファイルが特定の時刻に変更された、というだけのことです。しかし、クラウドプロバイダー全体で見ると実際にはもっと複雑です。同じファイルがソースと宛先で異なる更新日時を報告する原因はいくつかあります。

### プロバイダー間のクロックのずれ

各クラウドプロバイダーは独自の内部クロックを保持しています。ほとんどはNTPを使用してミリ秒単位で同期されていますが、ファイルに対して保存されるタイムスタンプは、アップロード処理のどの時点で設定されるかがプロバイダーによって異なります。あるプロバイダーはアップロード開始時刻を記録し、別のプロバイダーは完了時刻を記録することがあります。大きなファイルの場合、この差は数秒以上になることもあります。

### タイムゾーンと精度の違い

プロバイダーによってタイムスタンプをUTCで保存するものもあれば、ユーザーのローカルタイムゾーンで保存するもの、さらには精度を切り捨てるものもあります。例えば:

- **Google Drive** はミリ秒単位の精度で更新日時を保存し、カスタムの更新日時を設定できます。
- **OneDrive** は秒単位の精度で更新日時をサポートします。
- **Amazon S3** はオブジェクトメタデータ内でネイティブに更新日時をサポートしておらず、代わりにアップロード時刻をlast-modifiedヘッダーとして記録します。
- **Dropbox** はクライアント側で設定された更新日時を保持しますが、秒単位までです。
- **SFTP** はリモートファイルシステムに依存し、秒単位またはマイクロ秒単位の精度になる場合があります。

ミリ秒単位の精度を持つプロバイダーから秒単位の精度のプロバイダーへ同期する場合、丸め処理によって常に1秒(またはそれ以下)の食い違いが発生します。

### 更新日時がサポートされていない

一部のクラウドストレージバックエンドは、更新日時の保持自体をサポートしていません:

- **S3互換ストレージ**(AWS S3、Wasabi、S3モードのBackblaze B2、Cloudflare R2)はアップロード時刻を保存し、元のファイルの更新日時は保存しません。rcloneはオブジェクトメタデータ(X-Amz-Meta-Mtime)に元の更新日時を保存することでこれを回避していますが、これは最初のアップロード時にrcloneによってメタデータが設定されている場合にのみ機能します。
- プロバイダーのWebインターフェースや他のツールを通じてアップロードされたファイルにはこのメタデータがなく、それ以降の同期で不一致が発生します。

### 転送中にメタデータが保持されない

ファイルが元々rclone以外のツールによって宛先にアップロードされていた場合、またはプロキシやCDNによってメタデータヘッダーが削除されていた場合、rcloneは期待する更新日時のメタデータを見つけることができません。その場合、プロバイダーのlast-modified時刻にフォールバックしますが、これはソースとは異なる値になります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

## 問題を診断する

修正を適用する前に、タイムスタンプが実際に問題の原因であることを確認しましょう。RcloneViewまたはターミナルからドライランの同期を実行します:

```bash
rclone sync source: dest: --dry-run -v
```

出力を確認してください。次のような行が表示される場合:

```
NOTICE: file.txt: Skipped copy (src older)
```

または、内容が同一であるにもかかわらずファイルが転送対象としてマークされている場合、タイムスタンプが原因である可能性が高いです。特定のファイルを比較することもできます:

```bash
rclone lsl source:path/to/file.txt
rclone lsl dest:path/to/file.txt
```

`lsl` コマンドはファイルサイズ、更新日時、パスを表示します。タイムスタンプを比較してください。サイズが一致しているのに時刻が数秒異なる、または異なるタイムゾーンを示している場合、タイムスタンプの不一致が発生しています。

RcloneViewでは、**フォルダ比較**機能を使用して差異を視覚的に確認できます。比較ビューは、サイズ、タイムスタンプ、チェックサムによって異なるファイルをハイライト表示するため、タイムスタンプのみの食い違いを簡単に特定できます。

## --use-server-modtime を使用する

`--use-server-modtime` フラグは、rcloneに対してメタデータに保存された時刻ではなく、サーバーが報告する更新日時を使用するよう指示します。これは次のような場合に便利です:

- ファイルが元々どのようにアップロードされたかに関わらず、一貫した動作を望む場合。
- メタデータの更新日時が信頼できない、または存在しない場合。
- ファイルが異なるツールによってアップロードされた2つの場所間で同期する場合。

```bash
rclone sync source: dest: --use-server-modtime
```

RcloneViewでは、ジョブ設定の詳細オプションまたはカスタムフラグでこのフラグを追加できます。

**使用すべき場面:** rclone以外のツールでファイルがアップロードされたS3互換バックエンドから同期する場合、またはメタデータヘッダーに一貫性がない場合。

**トレードオフ:** サーバーの更新日時はアップロード時刻を反映するものであり、元のファイルの更新日時ではありません。つまり、rcloneは再アップロード前にファイルが変更されたかどうかを検出できず、アップロードのタイムスタンプしか認識しません。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## --no-update-modtime を使用する

`--no-update-modtime` フラグは、ファイルのコピー後にrcloneが宛先の更新日時を設定するのを防ぎます。デフォルトでは、rcloneはファイルをコピーした後、宛先の更新日時をソースに合わせて設定します。宛先が更新日時の設定をサポートしていない(または丸めてしまう)場合、これが次回の同期時に持続的な不一致を引き起こします。

```bash
rclone sync source: dest: --no-update-modtime
```

**使用すべき場面:** 宛先プロバイダーが更新日時の設定をサポートしていない場合、または時刻を設定する動作自体が丸め誤差を生み、不要な再転送を引き起こす場合。

**トレードオフ:** 更新日時が一致しないため、rcloneは次回の同期で変更を検出するために別の方法(チェックサムなど)を使用する必要があります。

## チェックサムベースの比較への切り替え

ソースと宛先の間でタイムスタンプが根本的に信頼できない場合、更新日時ではなくチェックサムでファイルを比較するようrcloneに指示できます。これはファイルが実際に変更されたかどうかを判断する最も信頼性の高い方法です。

```bash
rclone sync source: dest: --checksum
```

`--checksum` フラグは、rcloneに両側のファイルのハッシュ(MD5、SHA-1、またはその他のサポートされているアルゴリズム)を計算または取得させ、ハッシュが異なるファイルのみを転送するようにします。

**利点:**

- タイムスタンプを完全に無視するため、クロックのずれや精度の違いによる誤検出がなくなります。
- メタデータの違いだけでなく、実際のコンテンツの変更を検出します。
- すべてのプロバイダーで確実に動作します。

**欠点:**

- rcloneがすべてのファイルに対してチェックサムを計算または取得する必要があるため、大量のファイルセットでは処理が遅くなります。
- 一部のプロバイダーはすべてのファイルに対してチェックサムを返しません(例えば、マルチパートアップロードされたS3オブジェクトは標準的なMD5ハッシュではない複合ETagを持ちます)。
- APIコールが増加し、レート制限に影響したりコストが発生したりする場合があります。

RcloneViewでは、同期ジョブの設定でチェックサム比較を有効にできます。大規模なデータセットの場合、チェックサム同期をスケジュール(週次など)で実行し、日次の増分バックアップにはタイムスタンプベースの同期を使用することを検討してください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## プロバイダーごとのタイムスタンプの扱いの違い

各プロバイダーのタイムスタンプの挙動を理解することで、適切な同期戦略を選択できます。

| プロバイダー | 更新日時のサポート | 精度 | 備考 |
|---|---|---|---|
| Google Drive | 完全対応 | ミリ秒 | APIを介してカスタム更新日時の設定が可能 |
| OneDrive | 完全対応 | 秒 | 更新日時の設定をサポート |
| Dropbox | 完全対応 | 秒 | クライアント側で設定した更新日時を保持 |
| Amazon S3 | メタデータのみ | 秒 | rcloneがX-Amz-Meta-Mtimeに更新日時を保存 |
| Backblaze B2 | メタデータのみ | ミリ秒 | ファイル情報ヘッダーに保存 |
| Wasabi | メタデータのみ | 秒 | S3互換、X-Amz-Meta-Mtimeを使用 |
| Cloudflare R2 | メタデータのみ | 秒 | S3互換、メタデータベース |
| SFTP | ファイルシステムに依存 | さまざま | リモートファイルシステムに依存 |
| Azure Blob | メタデータのみ | 秒 | rcloneがメタデータヘッダーを使用 |
| Google Cloud Storage | メタデータのみ | 秒 | 更新日時用のカスタムメタデータ |

「完全対応」の更新日時サポートを持つ2つのプロバイダー間(例えばGoogle DriveからOneDriveなど)で同期する場合、タイムスタンプベースの比較は確実に機能します。「完全対応」のプロバイダーと「メタデータのみ」のプロバイダー間で同期する場合、ファイルが元々rcloneによってアップロードされていない限り、不一致がよく発生します。

## 最良の結果を得るためのフラグの組み合わせ

ほとんどのプロバイダー間同期のシナリオでは、複数のフラグを組み合わせることで最良の結果が得られます:

**他のツールでアップロードされたファイルを含むS3からS3、またはS3からクラウドへの同期の場合:**

```bash
rclone sync source: dest: --checksum --no-update-modtime
```

**Google DriveからOneDriveへの同期(両方とも更新日時をサポート)の場合:**

```bash
rclone sync gdrive: onedrive: --modify-window 1s
```

`--modify-window` フラグはタイムスタンプ比較に許容範囲を追加します。`1s` に設定すると、互いに1秒以内のタイムスタンプを持つファイルは同一とみなされます。これにより、精度の違いによる丸め処理に対応できます。

**日次の増分同期と、時折の完全な検証を組み合わせる場合:**

```bash
# 日次(高速、タイムスタンプベースで許容範囲あり)
rclone sync source: dest: --modify-window 2s

# 週次(徹底的、チェックサムベース)
rclone sync source: dest: --checksum
```

RcloneViewでは、`--modify-window` を使った日次実行用と `--checksum` を使った週次実行用の2つの同期ジョブを別々に作成し、それぞれ独立してスケジュールできます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 新規セットアップでタイムスタンプ問題を予防する

新しい同期ワークフローを構築する場合、最初からほとんどのタイムスタンプ問題を回避できます:

1. **すべての転送にrcloneを使用する** — rcloneはメタデータを一貫して設定するため、rcloneでアップロードされたファイルはどこでも正しい更新日時のメタデータを持ちます。
2. **プロバイダーの組み合わせに応じて --modify-window を適切に設定する** — 最初の同期から設定しておきます。
3. **初回のマイグレーションではチェックサムモードを使用する** — 大規模なデータセットを新しいプロバイダーへ初めて移行する場合は、`--checksum` を使ってクリーンな基準を確保します。
4. **まず小さなフォルダでテストする** — 少数のファイルを同期し、不一致を確認してからスケールアップします。
5. **使用したフラグを記録する** — 自分のプロバイダーの組み合わせに適した設定が見つかったら、後で再発見する手間を省くためにRcloneViewのジョブとして保存しておきます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から**RcloneViewをダウンロード**します。
2. リモートマネージャーで**ソースと宛先のリモートを追加**します。
3. 同期前に**フォルダ比較**を使って差異を確認します。
4. プロバイダーの組み合わせに応じて**同期フラグ**(`--checksum`、`--modify-window`、`--no-update-modtime`)を設定します。
5. **スケジュール同期ジョブを作成**し、ジョブ履歴で結果を監視します。

タイムスタンプの不一致は、クラウド同期の非効率を引き起こす最も一般的な原因の1つです。適切なフラグと各プロバイダーの更新日時の扱い方についての理解があれば、不要な転送をなくし、同期ジョブをクリーンに保つことができます。

---

**関連ガイド:**

- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [リモートストレージの同期](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [リアルタイム転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />

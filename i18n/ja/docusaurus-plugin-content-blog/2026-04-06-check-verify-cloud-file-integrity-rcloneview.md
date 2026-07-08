---
slug: check-verify-cloud-file-integrity-rcloneview
title: "RcloneViewのCheckとCompare機能でクラウドファイルの整合性を検証する"
authors:
  - tayson
description: "RcloneViewのcheckおよびcompare機能を使って、クラウドファイルの整合性を検証し、ビットロットを検出し、チェックサムを検証し、プロバイダー間の移行が成功したことを確認しましょう。"
keywords:
  - rclone check files
  - verify cloud file integrity
  - rcloneview compare folders
  - cloud checksum verification
  - detect bit rot cloud storage
  - post migration verification
  - rclone file validation
  - compare source destination cloud
  - rcloneview check feature
  - cloud data integrity tool
tags:
  - RcloneView
  - feature
  - cloud-sync
  - guide
  - tips
  - best-practices
  - security
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewのCheckとCompare機能でクラウドファイルの整合性を検証する

> クラウドにファイルをコピーするのは仕事の半分に過ぎません。すべてのバイトが無事に届いたことを検証することこそが、信頼できるワークフローと希望的観測との違いを生みます。

数テラバイトをプロバイダー間で移動したり、夜間バックアップを実行したり、重要なデータセットをアーカイブしたりする作業には、いずれも共通のリスクがあります。それは、静かに進行するデータ破損です。転送の中断やプロバイダー側のバグ、あるいは時間の経過によるビットロットが原因で、送信先にファイルが存在しているように見えても、実際は元のファイルと異なっている場合があります。Rcloneには送信元と送信先をファイル単位で比較する専用の`check`コマンドが用意されており、RcloneViewはそのプロセスを視覚的でわかりやすいものにします。このガイドでは、クラウドファイルをいつ、どのように検証すればよいかを説明します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ファイル整合性の検証が重要な理由

クラウドプロバイダーは内部でデータを複製していますが、エラーから完全に免れているシステムはありません。ここでは、検証によって実際の問題を発見できる代表的なシナリオを紹介します。

- **転送の中断** -- 大容量コピー中のネットワーク切断により、名前だけでは完全に見える不完全なファイルが送信先に残ることがあります。
- **ビットロット** -- ストレージメディアは数か月から数年かけて劣化し、めったにアクセスされないファイルのビットが反転することがあります。
- **プロバイダー側のバグ** -- まれに発生するAPIエラーにより、エラーを出さずにゼロバイトのアップロードや途中で切れた書き込みが発生することがあります。
- **移行の検証** -- 数十万件のファイルをプロバイダー間で移動した後は、何も失われたり変更されたりしていないことの証明が必要です。

検証ステップがなければ、これらの問題は実際にファイルが必要になるまで発見されません。

## Rclone Checkの仕組み

`rclone check`コマンドは、送信元と送信先のパスを比較し、異なるファイルを報告します。関与するプロバイダーによって、以下のいずれかの方法が使用されます。

| 方法 | 仕組み | 使用される場面 |
|--------|-------------|-----------|
| **ハッシュチェック** | 両方のプロバイダーが報告するチェックサム(MD5、SHA1など)を比較する | 両方のプロバイダーが共通のハッシュをサポートしている場合 |
| **サイズチェック** | ファイルサイズのみを比較する | 共通のハッシュが利用できない場合 |
| **ダウンロードチェック** | 両方のファイルをダウンロードしてバイト単位で比較する | `--download`フラグで強制した場合 |

両方のプロバイダーがサポートしている場合、ハッシュベースのチェックが最も高速かつ信頼性の高い方法です。Google Drive、OneDrive、S3互換プロバイダー、Backblaze B2はいずれもファイルハッシュを報告しますが、必ずしも同じ種類のハッシュとは限りません。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView compare folders showing file differences" class="img-large img-center" />

## RcloneViewでCompareを使用する

RcloneView内蔵の**Compare**機能を使うと、送信元と送信先のフォルダーを視覚的に並べて表示できます。

1. **Explorer**ペインを開き、片側に送信元のリモート、もう片側に送信先を選択します。
2. 比較したいフォルダーに移動します。
3. **Compare**をクリックして解析を実行します。
4. 結果を確認します -- ファイルは一致、送信元のみ、送信先のみ、相違ありといった状態ごとに色分けされます。

この視覚的なアプローチは、特定のフォルダーを抜き取りで確認したり、コマンドライン出力を覚えずに移行後の結果を確認したりするのに最適です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane explorer with source and destination" class="img-large img-center" />

## ターミナルからRclone Checkを実行する

リモート全体の完全な整合性スキャンを行うには、RcloneViewで**Terminal**を開き、以下を実行します。

```bash
rclone check source:path dest:path
```

知っておくと便利なフラグ:

| フラグ | 目的 |
|------|---------|
| `--size-only` | サイズのみで比較し、ハッシュチェックをスキップする |
| `--download` | 両方のコピーをダウンロードしてバイト単位の比較を強制する |
| `--one-way` | 送信元のファイルが送信先に存在するかのみをチェックする(逆方向はチェックしない) |
| `--combined report.txt` | 一致・不一致の結合レポートをファイルに書き出す |
| `--missing-on-src missing.txt` | 送信先には存在するが送信元にはないファイルを記録する |
| `--missing-on-dst missing.txt` | 送信元には存在するが送信先にはないファイルを記録する |
| `--error errors.txt` | チェックに失敗したファイルを記録する |

移行後の徹底的なチェックの例:

```bash
rclone check gdrive:/Archive s3-backup:archive-bucket --combined /tmp/check-report.txt
```

## 移行後の検証ワークフロー

プロバイダー間でデータを移行した後は、以下のワークフローに従って成功を確認してください。

1. **一方向チェックを実行**し、送信元のファイルがすべて送信先に届いたことを確認します。
   ```bash
   rclone check source:path dest:path --one-way
   ```
2. **不一致を確認** -- 差異が報告されたファイルは再コピーが必要です。
3. RcloneViewのコピーまたは同期機能で`--ignore-existing`を外して**失敗したファイルを再転送**します。
4. **再度チェックを実行**し、すべての差異が解消されたことを確認します。
5. `--combined`フラグを使用して監査目的で**レポートを保存**します。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed check operations" class="img-large img-center" />

## 経年によるビットロットの検出

長期アーカイブについては、定期的な整合性チェックをスケジュールしましょう。

1. RcloneViewでアーカイブに対して`rclone check`を実行する**ジョブ**を作成します。
2. **Job Scheduler**を使って、毎週または毎月実行するようにスケジュールします。
3. 実行のたびにジョブ履歴を確認し、新たに破損したファイルがないかチェックします。

これは特に、ファイルが一度書き込まれてほとんど読み込まれることのないコールドストレージ層(S3 Glacier、Backblaze B2アーカイブなど)において重要です。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule periodic integrity check in RcloneView" class="img-large img-center" />

## プロバイダー間のチェックサム互換性

すべてのプロバイダーが同じハッシュアルゴリズムをサポートしているわけではありません。簡単な早見表を以下に示します。

| プロバイダー | MD5 | SHA1 | その他 |
|----------|-----|------|-------|
| Google Drive | あり | なし | Quickxorが利用可能 |
| OneDrive | なし | なし | QuickXorHash |
| Amazon S3 | あり(シングルパートの場合はETag) | なし | -- |
| Backblaze B2 | なし | あり | ネイティブのSHA1 |
| Dropbox | なし | なし | Dropboxコンテンツハッシュ |
| SFTP/Local | あり | あり | 複数対応 |

2つのプロバイダーが共通のハッシュを持たない場合、rcloneはサイズのみの比較にフォールバックします。そのような場合にバイトレベルの確実性が必要なら、`--download`を使用してください。

## ベストプラクティス

- **大規模な移行の後は必ず検証する** -- コピーコマンドが成功したからといって、すべてのファイルが無傷であるとは限りません。
- **`--combined`レポートを活用**し、何が一致し、何が一致しなかったかを監査可能な記録として残しましょう。
- 数か月間手を付けないアーカイブデータには、**定期的なチェックをスケジュール**しましょう。
- 可能な限り、サイズのみのチェックよりも**ハッシュチェックを優先**しましょう -- 同一サイズでの破損はまれですが実際に起こり得ます。
- チェック後に**ドライランの同期を実行**し、不一致を自動的に修正しましょう。

---

**関連ガイド:**

- [クラウド間の転送と同期](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)
- [Google DriveからAmazon S3への増分バックアップ](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [中断・失敗した転送の復旧](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />

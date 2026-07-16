---
slug: find-unused-files-reduce-cloud-costs-rcloneview
title: "クラウドストレージを無駄にしている不要ファイルを見つける — RcloneViewでストレージ監査してコストを削減"
authors:
  - tayson
description: "誰も古いファイルを削除しないため、クラウドの請求額は増え続けます。RcloneViewを使って、すべてのクラウドアカウントに散らばる忘れられたデータ、古いバックアップ、不要な重複ファイルを見つける方法を学びましょう。"
keywords:
  - reduce cloud storage costs
  - find unused cloud files
  - cloud storage cleanup
  - cloud cost optimization
  - cloud storage waste
  - cloud bill reduction
  - cloud file audit
  - storage cost savings
  - cloud cleanup tool
  - unnecessary cloud files
tags:
  - RcloneView
  - cost-optimization
  - tips
  - cloud-storage
  - organization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウドストレージを無駄にしている不要ファイルを見つける — RcloneViewでストレージ監査してコストを削減

> あなたは3つのクラウドプロバイダーで合計5TBの料金を支払っています。そのうち実際に必要なのはどれくらいでしょうか？ほとんどのユーザーにとって、クラウドストレージの30〜50%は二度とアクセスしないファイルに占められています。

クラウドストレージの請求額は徐々に増えていきます。ここに数ギガバイト、あそこに忘れられたバックアップが積み重なり、気づけば誰も使わないデータに年間数百ドルを費やすことになります。問題はギガバイトあたりの単価ではなく、目に見えない蓄積です。RcloneViewを使えば、各アカウントの中身を正確に把握し、何を残し何を削除すべきか、根拠のある判断ができます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## よくある無駄の原因

### 古いバックアップのコピー

バックアップジョブはコピーを作成します。長年の間にバックアップ先を変更してきた場合、古いコピーが以前のプロバイダーに残ったまま、有料のストレージを消費し続けます。

### 複数プロバイダーにまたがる重複ファイル

「念のため」あらゆる場所に同期した結果、Google Drive、OneDrive、そしてDropboxに同じファイルが保存されている状態です。

### 古くなったプロジェクトファイル

2年前のプロジェクトが、Glacierなら1TBあたり1ドルで済むのに、いまだにS3 Standard（1TBあたり23ドル）に置かれたままになっています。

### テストデータや一時ファイル

試験的なアップロード、テストフォルダ、キャッシュデータ、`.DS_Store`ファイル、`Thumbs.db` — これらは何千ものフォルダにわたって積み重なっていきます。

## 無駄を見つける方法

### 各アカウントを閲覧する

すべてのクラウドアカウントを接続し、体系的に閲覧していきます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse cloud accounts" class="img-large img-center" />

### アカウント間で重複を比較する

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicates across clouds" class="img-large img-center" />

2つのプロバイダー間のフォルダ比較を行うと、同一のファイル — つまり二重に料金を支払っている可能性のある重複ファイル — が浮かび上がります。

### バックアップの鮮度を確認する

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check backup recency" class="img-large img-center" />

ジョブ履歴には、バックアップが最後に実行された日時が表示されます。6か月間実行されていないバックアップは、まだ必要でしょうか？

## アクションプラン

| 発見事項 | 対応 | 節約額 |
|---------|--------|---------|
| 高額なストレージ上の古いバックアップ | 削除するかGlacierへ移動 | 月額 1TBあたり5〜20ドル |
| プロバイダー間の重複ファイル | 1つだけ残し、他は削除 | 月額 1TBあたり5〜10ドル |
| ホットストレージ上の古いプロジェクト | コールドストレージへアーカイブ | 月額 1TBあたり15〜20ドル |
| 一時ファイルやゴミデータ | 削除 | 変動あり |
| 使われていないプロバイダーアカウント | 解約 | サブスクリプション費用 |

## 削除する前にアーカイブする

積極的に削除しすぎないでください。まずは古いファイルをコールドストレージへ移動しましょう。「念のため」残しておくには十分安価で、ホットストレージに比べて90%もコストを削減できます。

## はじめ方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **すべてのクラウドアカウントを接続**します。
3. **体系的に閲覧・比較**します。
4. **使われていないデータをコールドストレージへアーカイブ**します。
5. アーカイブ後、**本当に不要なものを削除**します。

最も安いストレージとは、必要のないストレージのことです。

---

**関連ガイド：**

- [クラウドストレージ監査ガイド](https://rcloneview.com/support/blog/cloud-storage-permissions-audit-rcloneview)
- [見落としがちなクラウドストレージのコスト](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Google DriveからS3 Glacierへのアーカイブ](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)

<CloudSupportGrid />

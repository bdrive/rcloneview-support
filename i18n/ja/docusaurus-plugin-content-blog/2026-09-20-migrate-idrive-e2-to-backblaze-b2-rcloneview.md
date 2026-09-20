---
slug: migrate-idrive-e2-to-backblaze-b2-rcloneview
title: "IDrive e2からBackblaze B2への移行 — RcloneViewでファイルを転送する"
authors:
  - steve
description: "RcloneViewのクラウド間転送ツール、ドライラン プレビュー、ジョブ履歴を使って、IDrive e2からBackblaze B2へバケットを移行する方法。"
keywords:
  - migrate idrive e2 to backblaze b2
  - idrive e2 to backblaze b2 transfer
  - s3 compatible storage migration
  - cloud to cloud object storage transfer
  - RcloneView migration guide
  - backblaze b2 bucket migration
  - idrive e2 rcloneview
  - object storage provider switch
tags:
  - RcloneView
  - idrive-e2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IDrive e2からBackblaze B2への移行 — RcloneViewでファイルを転送する

> ファイルをローカルに一時保存することなく、2つのS3互換プロバイダー間でオブジェクトストレージのバケットを移動します。

S3互換のオブジェクトストレージプロバイダーを切り替える作業は通常、1つのファイルを移動する前にアクセスキー、エンドポイント、バケット構造を細かく調べる必要があります。RcloneViewはIDrive e2とBackblaze B2の両方をネイティブなリモートとして接続するため、両者間の移行はダウンロードしてからアップロードする2段階のプロセスではなく、直接的なクラウド間転送になります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

IDrive e2とBackblaze B2はどちらもRcloneViewのS3互換リモート設定を通じて構成され、それぞれアクセスキー、シークレットキー、エンドポイントが必要です。特にBackblaze B2については、RcloneViewはApplication Key IDとApplication Keyを使うネイティブな認証情報入力方式もサポートしており、S3互換方式よりもこちらを好むチームもあります。両方のリモートがRemote Managerに表示されたら、RcloneViewの水平または垂直分割レイアウトを使って、リモートごとに1つずつ、エクスプローラーパネルを2つ並べて開きます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote manager with IDrive e2 and Backblaze B2 remotes configured" class="img-large img-center" />

両方のバケットを同時に表示できれば、転送を実行する前に両側のフォルダ構造を確認でき、名前の不一致や予期しないネストされたフォルダを早期に発見できます。

## 同期ジョブとして転送を実行する

大きなバケットを手作業でドラッグする代わりに、4ステップのウィザードを使って同期ジョブを設定します。ソースとしてIDrive e2、宛先としてBackblaze B2を選択し、片方向同期を選ぶことで、IDrive e2側は変更されずに宛先のみがソースに一致するよう修正されます。ステップ2では、RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントおよび同期でき、ファイル転送数を調整したり、チェックサム比較を有効にしたりして、更新日時だけでなくハッシュとサイズでファイルを検証できます。これは異なる2つのストレージバックエンド間で移行する際に特に重要です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView sync job configured between two S3-compatible object storage remotes" class="img-large img-center" />

実際の転送を実行する前に、ドライランを使ってどのファイルがコピーされるかを事前確認し、予期しない削除やスキップが発生しないことを確認してください。

## 移行を検証する

同期が完了すると、ジョブ履歴にその実行の総転送サイズ、転送速度、ファイル数が表示され、ソースバケットの合計と比較できる記録になります。追加の確認として、RcloneViewのフォルダ比較ツールを使えば、移行後に両方のバケットを並べて比較し、サイズが異なるファイルやどちらか一方にしか存在しないファイルを検出できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing a completed cloud-to-cloud migration" class="img-large img-center" />

## 始め方

1. **[rcloneview.com](https://rcloneview.com/src/download.html)からRcloneViewをダウンロード**
2. アクセスキー、シークレットキー、エンドポイントでIDrive e2リモートを追加します。
3. S3互換方式またはネイティブ認証情報を使ってBackblaze B2リモートを追加します。
4. 片方向同期ジョブを設定し、まずドライランを実行してから本番実行し、ジョブ履歴で検証します。

きれいなバケット移行の鍵は、実行前と実行後の両方を検証することです——RcloneViewのドライランと比較ツールが、この2つのステップを同じワークフローの一部にしてくれます。

---

**関連ガイド:**

- [IDrive e2ストレージの管理 — RcloneViewでの同期とバックアップ](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Backblaze B2ストレージの管理 — RcloneViewでの同期とバックアップ](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2 — オブジェクトストレージ比較](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />

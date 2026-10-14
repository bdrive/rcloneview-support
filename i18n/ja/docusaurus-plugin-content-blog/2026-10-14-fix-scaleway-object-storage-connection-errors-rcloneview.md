---
slug: fix-scaleway-object-storage-connection-errors-rcloneview
title: "Scaleway Object Storageの接続エラーを修正 — RcloneViewで解決"
authors:
  - steve
description: "RcloneViewでScaleway Object Storageの接続エラーをトラブルシュート: S3互換リモートのリージョン、エンドポイント、アクセスキーの不一致を修正します。"
keywords:
  - scaleway object storage エラー
  - scaleway 接続の修正
  - RcloneView scaleway
  - S3互換 トラブルシューティング
  - scaleway エンドポイント リージョン
  - scaleway バケット アクセス拒否
  - scaleway アクセスキー
  - rclone scaleway リモート
tags:
  - RcloneView
  - troubleshooting
  - tips
  - object-storage
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Scaleway Object Storageの接続エラーを修正 — RcloneViewで解決

> Scalewayの接続障害の多くは、リージョン、エンドポイント、キーの不一致が原因です。RcloneViewで原因を見つけて修正する方法を紹介します。

Scaleway Object StorageはS3互換プロトコルで接続するため、リモートには一致するAccess Key、Secret Key、リージョン、エンドポイントが必要です。これらのいずれかがバケットの実際の場所と食い違うと、ネットワークの問題のように見えるアクセス拒否やバケット未検出のエラーが発生します。RcloneViewはログにエラーを表示し、同期ジョブを失うことなくリモートを再作成できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## まずリージョンとエンドポイントを確認

Scalewayのバケットはリージョンに紐づいており、エンドポイントも同じリージョンのものでなければなりません。バケットをあるリージョンに作成し、リモートを別のリージョンで設定すると、キーが正しくても認証エラーのような失敗が起きます。Scalewayコンソールに表示されるリージョンと、リモート設定のリージョンおよびエンドポイントを一文字ずつ比較してください。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでScaleway S3互換リモートを設定" class="img-large img-center" />

## 認証情報と権限を確認

次に、Access KeyとSecret Keyを確認します。以前は動いていたジョブが突然失敗する場合、キーの再生成や削除がよくある原因です。また、キーの権限が対象のバケットとプロジェクトをカバーしているかも確認してください。有効なキーでも、バケットへのアクセス権がなければアクセス拒否が返されます。Remote Managerを開いてリモートを編集し、新しい値を貼り付けます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="認証情報の修正後にRcloneViewでScalewayバケットを閲覧" class="img-large img-center" />

## テストしてからジョブを再開

リモートを編集したら、Rclone Terminalを開いてバケットを一覧表示し、接続が機能していることを確認します。次に、同期ジョブでDry Runを実行し、実際の転送を再開する前に想定どおりのファイルが見えていることを確認します。問題が続く場合は、設定でrcloneのログレベルをDEBUGにし、組み込みのrcloneを再起動してエラーを再現し、ログを確認してください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneViewでScalewayのジョブ履歴を確認" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード**: [rcloneview.com](https://rcloneview.com/src/download.html)から入手してください。
2. Remote Managerを開き、Scalewayリモートを編集します。
3. リージョンとエンドポイントをバケットに合わせ、キーを入力し直します。
4. バケットを一覧表示し、Dry Runを実行してから、ジョブを再開します。

リージョン、エンドポイント、キーが一致しているリモートは、ワークフローの中で他のS3互換ストレージと同じように動作します。

---

**関連ガイド:**

- [Scaleway Object Storageを管理 — RcloneViewでクラウド同期](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Linode Object Storageの接続エラーを修正 — RcloneViewで解決](https://rcloneview.com/support/blog/fix-linode-object-storage-connection-errors-rcloneview)
- [IBM COSからScalewayへ移行 — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-ibm-cos-to-scaleway-rcloneview)

<CloudSupportGrid />

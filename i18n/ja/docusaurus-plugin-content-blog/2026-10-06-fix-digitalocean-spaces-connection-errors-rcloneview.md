---
slug: fix-digitalocean-spaces-connection-errors-rcloneview
title: "DigitalOcean Spaces の接続エラーを解消 — RcloneView でエンドポイントとキーの問題を調査"
authors:
  - jay
description: "RcloneView でエンドポイント、リージョン、キーを確認し、アクセス拒否や署名不一致などの DigitalOcean Spaces 接続エラーを解消します。"
keywords:
  - DigitalOcean Spaces 接続エラー 解消
  - DigitalOcean Spaces アクセス拒否
  - Spaces SignatureDoesNotMatch
  - DigitalOcean Spaces エンドポイント リージョン
  - S3 互換ストレージ トラブルシューティング
  - rclone DigitalOcean Spaces
  - RcloneView DigitalOcean Spaces
  - Spaces アクセスキー
tags:
  - RcloneView
  - troubleshooting
  - tips
  - digitalocean-spaces
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DigitalOcean Spaces の接続エラーを解消 — RcloneView でエンドポイントとキーの問題を調査

> DigitalOcean Spaces の接続失敗のほとんどは、エンドポイント、リージョン、アクセスキーという 3 つの設定に起因します。

Spaces のリモートを追加したのに、バケット一覧が空だったり、すべてのリクエストでアクセス拒否や署名エラーが返されたりしていませんか。Spaces は S3 互換サービスなので、原因は多くの場合リモートの設定のわずかな不一致です。RcloneView では、リモートを確認・修正し、同じウィンドウで再テストできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## まずエンドポイントとリージョンを確認

Spaces のエンドポイントはリージョンごとに `<region>.digitaloceanspaces.com` という形式で、たとえば `nyc3.digitaloceanspaces.com` です。エンドポイントのリージョンが Space を作成したリージョンと異なると、キーが正しくてもリクエストは失敗します。Remote タブから Remote Manager を開いてリモートを編集し、エンドポイントを DigitalOcean のコントロールパネルに表示されているリージョンと照らし合わせてください。

バケット名を含む Space 固有の URL ではなく、リージョンのみのエンドポイントを使用してください。エンドポイントにバケット名を追加すると、「bucket not found」のような不可解な結果になる一般的な原因になります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で S3 互換リモートのエンドポイントを編集する" class="img-large img-center" />

## アクセスキーとシークレットを確認

Spaces は、DigitalOcean の API トークンとは別の専用アクセスキーペアを使用します。キー欄に API トークンを貼り付けてしまうのはよくある間違いです。不明な場合は Spaces のキーペアを再生成し、両方の値を貼り直してください。コピー時に先頭や末尾に紛れ込む空白にも注意してください。

一覧表示はできるのにアップロードが失敗する場合、キーにその Space への書き込み権限がない可能性があります。適切なアクセス権を持つキーを作成し、リモートを更新してください。

## 内蔵ターミナルでテスト

RcloneView には、下部の Info View に Terminal タブがあります。`rclone listremotes` を実行してリモートが存在することを確認し、続けて `rclone about "myspaces:"` または簡単な一覧表示で生のエラーメッセージを確認します。正確なメッセージから、問題が認証、エンドポイント、ネットワークのどれにあるかが分かります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="エラーとなった転送を示す RcloneView のジョブ履歴" class="img-large img-center" />

Log タブと Job History で繰り返し発生している失敗を確認してください。エラーが大きな転送でのみ発生する場合は、ジョブの Advanced Settings でファイル転送数を下げて負荷を軽減します。

## ネットワークと時刻の問題を除外

署名付きリクエストは現在時刻に依存するため、システム時計が大きくずれていると署名エラーが発生することがあります。時計を修正して再試行してください。TLS を検査する社内プロキシやファイアウォールも接続を妨げる場合があるため、キーとエンドポイントが正しく見える場合は別のネットワークからテストしてください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView で DigitalOcean Spaces への転送を実行する" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Remote Manager を開いて Spaces のリモートを編集し、リージョン別エンドポイントを確認します。
3. Spaces のアクセスキーとシークレットを再入力します。
4. 小さなフォルダのコピーでテストしてから、フルのジョブを再実行します。

エンドポイントとキーペアが正しく設定されていれば、漠然とした失敗が、信頼でき繰り返し実行できるワークフローに変わります。

---

**関連ガイド:**

- [DigitalOcean Spaces を管理 — RcloneView で同期とバックアップ](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [RcloneView で S3 アクセス拒否の権限エラーを解消](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [RcloneView で SSL/TLS 証明書エラーを解消](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />

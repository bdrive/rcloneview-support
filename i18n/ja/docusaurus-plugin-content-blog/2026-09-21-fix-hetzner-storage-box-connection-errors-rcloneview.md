---
slug: fix-hetzner-storage-box-connection-errors-rcloneview
title: "Hetzner Storage Boxの接続エラーを解決する — RcloneViewでトラブルシューティング"
authors:
  - kai
description: "エンドポイントの設定ミスから認証情報やマウントのエラーまで、RcloneViewでHetzner Storage Boxの接続失敗をトラブルシューティングします。"
keywords:
  - Hetzner Storage Box 接続エラー
  - Hetzner S3 トラブルシューティング
  - Hetzner クラウド同期 修正
  - Hetzner オブジェクトストレージ エラー
  - RcloneView Hetzner
  - S3 エンドポイント設定エラー
  - クラウドストレージ 接続拒否
  - Hetzner 認証情報 設定
tags:
  - RcloneView
  - troubleshooting
  - hetzner
  - s3-compatible
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hetzner Storage Boxの接続エラーを解決する — RcloneViewでトラブルシューティング

> HetznerのS3互換オブジェクトストレージへの接続失敗は、ほぼ常に誤ったエンドポイント、リージョン、または認証情報のペアに起因します — RcloneViewの接続テストは、完全な同期に時間を無駄にする前に、どれが問題なのかを正確に示します。

Hetznerのオブジェクトストレージはrcloneが提供するS3互換プロトコルを通じてアクセスするため、リモートにはAccess Key、Secret Key、エンドポイントを正しく入力する必要があります — ブラウザログインが認証を自動的に処理するOAuthベースのプロバイダーとは異なります。RcloneViewはWindows、macOS、Linuxで1つのウィンドウから90以上のプロバイダーをマウントかつ同期できますが、Hetznerのようなs3互換リモートは、ワンクリックのOAuthリモートよりも設定時にもう少し注意が必要です。以下では、最も一般的な接続失敗の診断方法を説明します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## エンドポイントとリージョンが一致しているか確認する

Hetznerの接続エラーの最も一般的な原因は、ストレージボックスが作成されたリージョンと一致しないエンドポイントです。Hetznerのオブジェクトストレージのエンドポイントはリージョンごとに異なり、誤ったものを貼り付けたり — あるいは別のS3互換プロバイダーからコピーしたエンドポイントが残っていたりすると — 誤った認証情報とまったく同じに見える接続失敗が発生します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでHetzner Storage Boxのリモート設定を編集する" class="img-large img-center" />

Remote Managerを開いてHetznerのリモートを選択し、エンドポイントの項目をそのストレージボックスについてHetzner Cloud Consoleに表示されている正確な値と照合してください。リモートはエラーなく設定画面を読み込み続けることが多いため、リージョンの不一致は見落としやすいです — 失敗はRcloneViewが実際にファイル一覧を取得しようとしたときに初めて現れます。

## 完全な同期の前に接続をテストする

転送の途中で認証情報の問題を発見するのではなく、リモートを追加または編集する際にRcloneViewの接続テストを使用してください。認証エラーでテストが失敗した場合は、エンドポイントよりもAccess Key IDやSecret Access Keyを疑ってください — 末尾に余分な空白がないか、あるいはRcloneViewでリモートを最初に設定した後にHetznerのコンソールでキーが再発行されていないかを再確認してください。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Hetzner Storage Boxの接続エラーを修正した後にローカルファイルと比較する" class="img-large img-center" />

テストは成功したものの、同期ジョブが途中で失敗し続ける場合は、下部のInfo ViewにあるLogタブを確認してください — Hetznerは大量のバッチアップロード中にレート制限のレスポンスを返すことがあり、詳細なログには一般的なタイムアウトではなく具体的なHTTPステータスが表示されます。

## ファイアウォールとネットワークアクセスを確認する

企業のファイアウォールや一部のVPN設定は、主要なプロバイダーへのトラフィックは許可する一方で、あまり一般的でないS3エンドポイントへの発信トラフィックをブロックすることがあります。接続テストがすぐに失敗せずに固まる場合は、そのマシンがHetznerのエンドポイントに直接到達できるか確認してください — ネットワークレベルのブロックは、RcloneViewの内部からは設定ミスのリモートとまったく同じように見えます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Hetznerの接続問題を解決した後にJob Historyを確認する" class="img-large img-center" />

ジョブが正常に実行されると、Job Historyは転送速度とファイル数の記録を保持し、これは修正が完全な同期を通じて維持されたことを確認するのに役立ちます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. Remote Managerを開き、Hetzner Cloud Consoleに表示されているリージョンに対してHetznerのエンドポイントを再確認してください。
3. 接続テストが認証エラーで失敗する場合は、Access KeyとSecret Keyを再入力してください。
4. 実際の転送の前にDry Run同期を実行し、データを移動せずに残っている問題を確認してください。

正しく設定されたエンドポイントと認証情報のペアは、Hetznerの接続問題の大部分を解決し、以降の同期およびバックアップジョブが安定して実行されるようにします。

---

**関連ガイド:**

- [Hetzner Storage Boxを管理する — RcloneViewでファイルを同期・バックアップする](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [MinIOの接続および認証エラーを解決する — RcloneView](https://rcloneview.com/support/blog/fix-minio-connection-authentication-errors-rcloneview)
- [Linode Object Storageの接続エラーを解決する — RcloneView](https://rcloneview.com/support/blog/fix-linode-object-storage-connection-errors-rcloneview)

<CloudSupportGrid />

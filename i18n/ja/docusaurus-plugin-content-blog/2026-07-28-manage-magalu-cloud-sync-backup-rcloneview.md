---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Magalu Cloud ストレージを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - casey
description: "Magalu Cloudオブジェクトストレージ をRcloneViewに接続して、ドラッグ&ドロップのファイル管理、予約同期、クロスクラウドバックアップを利用しましょう。"
keywords:
  - Magalu Cloud RcloneView
  - Magalu オブジェクトストレージ GUI
  - Magalu Cloud ストレージ管理
  - S3互換クラウドバックアップ
  - Magalu Cloud 同期ツール
  - ブラジル オブジェクトストレージ GUI
  - Magalu Cloud ファイルマネージャー
  - RcloneView S3互換リモート
  - クラウドストレージ 同期 バックアップ
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Magalu Cloud ストレージを管理する — RcloneViewでファイルを同期・バックアップ

> ターミナルでAPI認証情報をあれこれ操作する代わりに、完全なドラッグ&ドロップ対応のファイルマネージャーでMagalu Cloudオブジェクトストレージを閲覧、同期、バックアップしましょう。

Magalu CloudはS3互換のオブジェクトストレージサービスであり、S3プロトコルを中心に構築されたあらゆるツールに直接適合します。RcloneViewはこれをAmazon S3やBackblaze B2とまったく同じように扱います。アクセスキー、シークレットキー、エンドポイントを入力するだけで、バケットが管理している他のすべてのリモートと並んでファイルエクスプローラーに表示されます。これは、既に使い慣れたS3ツールを離れることなくオブジェクトストレージの選択肢を求める、ブラジルやラテンアメリカで既にワークロードを運用しているチームにとって実用的です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Magalu Cloudリモートを接続する

Magalu Cloudの追加は、RcloneViewがすべてのS3互換プロバイダーに使用するのと同じ認証情報入力フローに従います。New Remoteを開き、S3互換タイプを選択し、アクセスキーID、シークレットアクセスキー、およびお使いのリージョンのMagalu CloudエンドポイントURLを入力します。保存すると、バケットは完全なフォルダツリーナビゲーション、画像のサムネイルプレビュー、コピー・名前変更・削除・サイズ取得のための右クリックアクセスとともにExplorerパネルに読み込まれます — 別途S3コンソールのタブを開く必要はありません。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Magalu Cloud S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneViewはrcloneのS3バックエンドを通じて接続するため、標準的なオブジェクトストレージの動作が適用されます。フォルダはキープレフィックスから構築される仮想的な構造であり、ファイル操作はrcloneが発行する基盤のPUT/GET/DELETE呼び出しにマッピングされます。マウント専用のツールとは異なり、RcloneViewはFREEライセンスでも同期とフォルダ比較を提供するため、Magaluバケットが受動的な閲覧だけに限定されることはありません。

## Magalu Cloudを他のストレージと同期する

ほとんどのチームはオブジェクトストレージを単独では使用しません — バックアップやマイグレーション計画の一部として、ローカルドライブ、NASボックス、または他のクラウドプロバイダーと並んで使用します。4ステップの同期ウィザードでは、Magaluバケットをソースまたは同期先として設定し、大量バッチ転送を確実に行うために同時転送数と同等性チェッカーを構成し、実際に移動させたいファイルだけが対象になるようフィルター(最大ファイルサイズ、最大経過期間、拡張子除外)を適用できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job with a Magalu Cloud bucket as destination" class="img-large img-center" />

実際の転送を確定する前に、まずDry Runを実行して正確にどのファイルがコピーまたは削除されるかをプレビューしましょう — これは特に、新しいバケットに初めて同期ジョブを向ける際、ソースと同期先のフォルダを正しく設定することが重要な場面で役立ちます。

## Magaluへの定期バックアップをスケジュールする

継続的なバックアップルーチンのために、PLUSライセンスのユーザーは同期ジョブにcrontab形式のスケジュールを設定でき、ローカルのプロジェクトフォルダや別のクラウドリモートを、毎晩、毎週、あるいは任意のカスタム間隔で自動的にMagalu Cloudへミラーリングできます。Job Historyはその後、各実行の所要時間、転送速度、ファイル数、完了状態を記録し、ターミナルログを確認しなくても明確な監査証跡を提供します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job to a Magalu Cloud bucket" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. New Remoteを開き、S3互換プロバイダータイプを選択し、Magalu Cloudのアクセスキー、シークレットキー、エンドポイントを入力します。
3. Explorerパネルでバケットを閲覧し、接続とフォルダ構造を確認します。
4. Magaluリモートを対象とした同期またはバックアップジョブを作成し、Dry Runを実行してから転送を実行します。

接続が完了すると、Magalu CloudバケットはRcloneView内の他のリモートと同じように動作します — 日常的な利用、クロスクラウド転送、予約された保護のための準備が整います。

---

**関連ガイド:**

- [IDrive e2 S3クラウドバックアップを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [Cloudflare R2を管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — RcloneViewで転送前にクラウド同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />

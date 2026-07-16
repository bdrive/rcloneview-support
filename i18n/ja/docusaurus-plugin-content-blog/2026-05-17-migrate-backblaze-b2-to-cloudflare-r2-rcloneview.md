---
slug: migrate-backblaze-b2-to-cloudflare-r2-rcloneview
title: "Backblaze B2 から Cloudflare R2 へ移行 — RcloneView でファイルを転送する"
authors:
  - alex
description: "RcloneView を使って Backblaze B2 オブジェクトストレージを Cloudflare R2 に移行する方法。チェックサム検証付きで CLI コマンド不要のステップバイステップ GUI ガイド。"
keywords:
  - Backblaze B2 to Cloudflare R2 migration
  - migrate B2 to R2
  - Cloudflare R2 migration guide
  - RcloneView cloud migration
  - B2 to R2 transfer
  - object storage migration
  - Backblaze to Cloudflare
  - cloud storage migration tool
  - S3 compatible migration
  - transfer B2 bucket rcloneview
tags:
  - RcloneView
  - backblaze-b2
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2 から Cloudflare R2 へ移行 — RcloneView でファイルを転送する

> B2 バケットを Cloudflare R2 に移動するのは、RcloneView ではシンプルなクラウド間操作です。両方のリモートを追加し、コピージョブを設定して、チェックサム比較で整合性を検証するだけです。

Backblaze B2 と Cloudflare R2 はどちらも人気の高い S3 互換オブジェクトストレージプラットフォームであり、インフラ要件の変化に伴い、両者間でデータを移動する必要に迫られるチームは少なくありません。データをローカルにダウンロードして再アップロードする代わりに、RcloneView は rclone のクラウド間転送エンジンを使ってサーバーサイドで転送を処理します。これにより、コマンドを一切書くことなく GUI からバケット全体を移行できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Backblaze B2 と Cloudflare R2 をリモートとして追加する

移行を実行する前に、両方のストレージアカウントを RcloneView に接続します。

**Backblaze B2:** **Remote** > **New Remote** を開き、Backblaze B2 を選択して、Application Key ID と Application Key を入力します。保存すると、RcloneView がエクスプローラーに B2 バケットの一覧を表示します。

**Cloudflare R2:** 2つ目のリモートを追加し、Cloudflare R2 を選択して、API Token、Account ID、R2 エンドポイントを入力します。B2 と同様に、R2 バケットもすぐにエクスプローラーに表示されます。

両方のリモートを接続すると、RcloneView のデュアルペインインターフェースで並べて閲覧でき、移行を開始する前にソースバケットと宛先バケットが正しいことを確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## クラウド間移行を実行する

**Job Manager** を開き、新しい Copy または Sync ジョブを作成します。Backblaze B2 バケット(またはその中の特定のプレフィックス)をソースとして、Cloudflare R2 バケットを宛先として設定します。

Advanced Settings ステップでは、ネットワーク容量に合わせて同時ファイル転送数を設定します。値を大きくすると小さなファイルが多いバケットの転送が高速化され、大容量のメディアアーカイブはマルチスレッド転送の恩恵を受けます。**チェックサム検証** を有効にすると、サイズと更新日時だけに頼るのではなく、ハッシュ比較を使って B2 と R2 のファイル整合性が一致していることを確認できます。

実際の転送前に **ドライラン** を実行してください。プレビューでコピーされるすべてのオブジェクトが表示されるため、実行前に予期しないフィルタ一致やパスの不一致を発見できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Backblaze B2 to Cloudflare R2 in RcloneView" class="img-large img-center" />

## 転送状況をリアルタイムで監視する

ジョブが開始されると、下部の Info View にある **Transferring** タブでライブ進捗が表示されます。ファイルごとの転送速度、全体のスループット、完了・残りのオブジェクト数を確認できます。数万ファイルの動画アーカイブなど、大規模な B2 バケットの場合、リアルタイムビューを使えば停滞を早期に発見し、必要に応じてキャンセルや調整を行えます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring during B2 to R2 migration in RcloneView" class="img-large img-center" />

転送完了後は、**Job History** タブで転送された合計サイズ、転送速度、ファイル数、最終ステータスなど詳細な概要を確認できます。エラー0件でチェックサム検証済みの実行結果は、R2 バケットが元の B2 データとバイト単位で完全に一致していることを意味します。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history confirming successful Backblaze B2 to Cloudflare R2 migration" class="img-large img-center" />

**PLUS ライセンス** があれば、段階的な切り替えの過程で B2 に新しいオブジェクトが追加されるたびに R2 を最新の状態に保つ増分同期ジョブをスケジュール実行できます。1回の大きなバッチではなく、複数回に分けて移行を進めることが可能です。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** します。
2. **Remote** > **New Remote** から Backblaze B2 アカウントを追加します(Application Key ID + Application Key)。
3. Cloudflare R2 アカウントを追加します(API Token + Account ID + Endpoint)。
4. **Job Manager** を開き、B2 から R2 への Copy ジョブを作成して、チェックサム検証を有効にします。
5. まずドライランを実行してから実際の移行を実行し、Job History で結果を確認します。

RcloneView は CLI の専門知識や中間のローカルストレージを必要とせず、完全な整合性検証を組み込んだ状態で B2 のデータを直接 R2 に移動します。

---

**関連ガイド:**

- [Backblaze B2 クラウドストレージを管理する — RcloneView で同期とバックアップ](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Cloudflare R2 クラウドストレージを管理する — RcloneView で同期](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Cloudflare R2 から Backblaze B2 へ移行する — RcloneView](https://rcloneview.com/support/blog/migrate-cloudflare-r2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

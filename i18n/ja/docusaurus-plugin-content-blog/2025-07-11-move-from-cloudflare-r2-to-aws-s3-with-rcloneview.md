---
slug: move-from-cloudflare-r2-to-aws-s3-with-rcloneview
title: RcloneViewで実現するCloudflare R2からAWS S3への手軽な同期
authors:
  - jay
description: RcloneViewの直感的なGUIを使って、Cloudflare R2からAWS S3へファイルをシームレスに同期・移行する方法をご紹介します。ターミナル操作は不要です。
keywords:
  - rcloneview
  - cloudflare r2 to aws s3
  - object storage sync
  - cloud migration GUI
  - rclone GUI
  - multi-cloud workflow
  - file transfer cloudflare R2
tags:
  - cloudflare
  - aws-s3
  - cloud-migration
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewで実現するCloudflare R2からAWS S3への手軽な同期

> コマンドラインを使わずに、Cloudflare R2のデータをAWS S3へユーザーフレンドリーな方法でバックアップ・複製する方法を解説します。


## R2とS3を同期する理由

**Cloudflare R2**は**エグレス料金ゼロ**という点で際立っており、コストパフォーマンスに優れたストレージの選択肢です。一方、**AWS S3**はライフサイクルルール、暗号化、リージョンの可用性など、成熟したエコシステムで依然として優位性を保っています。R2からS3へデータを同期することで、コスト削減と戦略的なレジリエンスという両方のメリットを得られます。

<!-- truncate -->
### Cloudflare R2の概要
- アウトゴーイングデータ料金なし——大量利用に最適
- S3互換APIによるシンプルな従量課金制

### AWS S3にデータを保持する理由
- バージョニング、IAM制御、ストレージ階層などの高度な機能
- AWSのツールやサービスとの幅広い連携

**R2からS3への同期がもたらすメリット:**
- 信頼性の高いAWSインフラでデータを保護
- AWSサービスに依存するワークフローとの互換性を維持
- R2の手頃な価格とS3の機能性を融合


<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## ステップバイステップ：R2 → S3のRcloneViewワークフロー

### ステップ1 – アクセスの準備

以下を用意してください。
- Cloudflare R2の認証情報（アクセスキー、シークレットキー）
- AWS S3のアクセスキー/シークレットとリージョン情報
- 一回限りのバックアップにするか、定期同期にするかを決定

🔍 参考ガイド:
- [AWS S3のアクセス認証情報を取得する方法](/howto/cloud-storage-setting/aws-account-info)
- [Cloudflare R2のAPI認証情報とエンドポイントを取得する方法](/howto/cloud-storage-setting/cloudflare-r2-credential)
### ステップ2 – RcloneViewでリモートを追加

1. **RcloneView**を開き、**`+ New Remote`**をクリック
2. R2の場合:
   - プロバイダーとして**S3互換**を選択し、**Cloudflare**を選ぶ
   - R2のキーとエンドポイントを入力（例: `https://<account>.r2.cloudflarestorage.com`）
3. AWS S3の場合:
   - **Amazon S3**を選択し、認証情報を追加、わかりやすい名前を付ける（例: `MyS3`）
4. Explorerビューで両方が並んで表示されることを確認

👉 詳細はこちら: [S3リモートを追加する方法](/howto/remote-storage-connection-settings/s3)
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

### ステップ3 – 同期を実行

**方法A – ドラッグ＆ドロップ**
手軽で視覚的な方法——R2ペインからファイルをドラッグしてS3ペインへ。

👉 詳細はこちら: [ドラッグ＆ドロップでファイルをコピーする](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

**方法B – 比較してコピー**
**Compare**機能を使って新規・変更されたファイルをハイライトし、同期する対象を選択します。

👉 詳細はこちら: [ファイルの比較と管理](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-medium img-center" />

**方法C – 同期とスケジュールジョブ**
定期タスクの設定手順:
1. R2フォルダーをソース、S3をデスティネーションとして選択
2. **Sync**をクリックし、プレビュー（ドライラン）を確認後、ジョブとして保存
3. 必要に応じてスケジュールを設定し、RcloneViewに自動処理を任せる

👉 詳細はこちら:
- [リモートストレージを同期する](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブを作成する](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />

## まとめとヒント

### 簡単な振り返り
- **R2**: エグレス料金ゼロで手頃な価格、**S3**: 機能豊富で高度な統合性
- **RcloneView**: CLIスキル不要でその両者を橋渡しするシンプルなGUIインターフェース

### さらに賢く使うコツ
- 公開用アセットにはR2を使用し、長期アーカイブや監査対応のためにS3へ同期
- S3にライフサイクルルールを適用して階層型ストレージを活用——同期ワークフローでもコスト削減が可能
- RcloneViewのログとビジュアルフィードバックでジョブの結果を監視

## よくある質問

| 質問                                            | 回答                                                          |
|-----------------------------------------------------|------------------------------------------------------------------|
| これを行うのに技術的なスキルは必要ですか？              | まったく必要ありません——RcloneViewはわかりやすいビジュアルインターフェースを提供します。         |
| 同期でエグレス料金は発生しますか？                     | R2からの転送にはエグレス料金はかかりません。AWS側では、階層によって受信ストレージ操作に料金が発生する場合があります。 |
| 定期同期のスケジュール設定は有用ですか？             | もちろんです——手間をかけずにAWSのバックアップを最新の状態に保てます。  |


**Cloudflare R2とAWS S3の環境を手軽に橋渡ししませんか？**

<CloudSupportGrid />

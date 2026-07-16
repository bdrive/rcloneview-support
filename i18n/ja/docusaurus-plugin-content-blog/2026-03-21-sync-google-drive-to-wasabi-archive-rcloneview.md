---
slug: sync-google-drive-to-wasabi-archive-rcloneview
title: "Google DriveをWasabiに同期 — RcloneViewで実現する手頃なアーカイブとバックアップ"
authors:
  - tayson
description: "AWS S3のわずかな費用でGoogle DriveをWasabiホットクラウドストレージにアーカイブし、RcloneViewで信頼性の高いバックアップを実現しましょう。"
keywords:
  - Google Driveバックアップ
  - Wasabiクラウドストレージ
  - 手頃なクラウドアーカイブ
  - Wasabiへのバックアップ
  - RcloneView
  - クラウド間同期
  - データアーカイブ
  - コスト効率の良いバックアップ
  - Google Driveアーカイブ
  - ホットストレージ
tags:
  - google-drive
  - wasabi
  - archive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google DriveをWasabiに同期 — RcloneViewで実現する手頃なアーカイブとバックアップ

> Google Driveはアクティブなコラボレーションには便利ですが、長期保存のコストは積み重なっていきます。WasabiはS3互換のホットストレージを半額で提供しており、RcloneViewでGoogle Driveをアーカイブするのに最適です。

Google Driveはチームでのコラボレーションに最適ですが、無制限ストレージには保持の複雑さが伴います。Wasabiは予測可能な料金と転送料無料のホットクラウドストレージを提供します。RcloneViewは、完了したプロジェクト、古いファイル、コールドデータをWasabiにアーカイブするプロセスを自動化します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google DriveとWasabiを接続する

RcloneViewで両方のリモートをセットアップするのは、迅速かつ安全です。

**Google Drive:**
1. **Add Remote** をクリック → **Google Drive** を選択
2. OAuth経由でRcloneViewを認証
3. フォルダ/ファイルへのアクセス権限を付与
4. 接続を確認

**Wasabi:**
1. **Add Remote** をクリック → **Wasabi** を選択
2. WasabiのAccess KeyとSecret Keyを入力
3. バケットとリージョンを選択
4. 接続をテスト

![New Remote Setup](/images/en/blog/new-remote.png)

## Google DriveをWasabiホットストレージにアーカイブする

ファイルを移動するために、一回限りまたは定期的な同期ジョブを作成します。Wasabiのホットストレージは即座にアクセス可能で、glacierのような復元遅延はありません。

**アーカイブのシナリオ:**
- **プロジェクト完了時**: プロジェクト終了後にクライアント成果物をアーカイブ
- **ストレージの最適化**: 90日以上経過したファイルをWasabiに移動
- **コンプライアンスバックアップ**: 業務記録の検索可能なコピーを保持

![Wasabi Transfer Setup](/images/en/tutorials/wasabi-drag-and-drop.png)

## リアルタイムの転送パフォーマンスを監視する

RcloneViewは、アーカイブジョブのライブメトリクス（転送速度、処理済みファイル数、残り時間）を表示します。

![Real-Time Transfer Monitoring](/images/en/tutorials/wasabi-real-time-monitoring-transferring.png)

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. [wasabi.com](https://wasabi.com/) でWasabiアカウントを作成します。
3. OAuth認証を使用してGoogle Driveをリモートとして追加します。
4. Wasabiバケットをリモートとして設定します。
5. 同期またはコピージョブを作成し、アーカイブを開始します。
6. 定期的なバックアップをスケジュールして、アーカイブを最新の状態に保ちます。

手頃な価格でアーカイブし、すぐに取り出せる—WasabiとRcloneViewならシンプルに実現できます。

---

**関連ガイド：**

- [RcloneViewでGoogle DriveをBackblaze B2に同期する](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [RcloneViewでGoogle DriveをS3 Glacierにアーカイブする](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)
- [クラウドストレージの転送料 — RcloneViewで回避する方法](https://rcloneview.com/support/blog/cloud-storage-egress-fees-avoid-rcloneview)

<CloudSupportGrid />

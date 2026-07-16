---
slug: manage-seagate-lyve-cloud-sync-backup-rcloneview
title: "Seagate Lyve Cloudを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - kai
description: "RcloneViewでSeagate Lyve Cloudストレージを管理する方法を解説します。このS3互換クラウドストレージGUIでファイルの同期、バックアップ、転送を行いましょう。"
keywords:
  - Seagate Lyve Cloud
  - RcloneView Seagate
  - Lyve Cloud sync
  - Lyve Cloud backup
  - S3-compatible storage GUI
  - object storage management
  - Lyve Cloud RcloneView
  - manage Seagate cloud storage
  - cloud file transfer tool
  - Lyve Cloud file manager
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Seagate Lyve Cloudを管理する — RcloneViewでファイルを同期・バックアップ

> Seagate Lyve CloudをRcloneViewに接続すれば、S3互換オブジェクトストレージをGUIで完全にコントロールできます — コマンドラインを使わずに、閲覧、同期、バックアップ、マウントが可能です。

Seagate Lyve Cloudは、高スループットのワークロードと長期データ保持のために構築されたS3互換オブジェクトストレージプラットフォームです。監視カメラの映像、大容量メディアアーカイブ、企業データセットのいずれを管理する場合でも、Lyve Cloudのアーキテクチャは大量データ向けの優れたストレージ層となります。RcloneViewに接続すると、各バケットがドラッグ&ドロップ、同期、スケジュール設定が可能な閲覧可能なファイルツリーに変換され、RcloneViewが対応する他の90以上のプロバイダーとも組み合わせて利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでSeagate Lyve Cloudをリモートとして追加する

Seagate Lyve CloudはS3プロトコルを使用しているため、他のS3互換プロバイダーと同様に、アクセスキー、シークレットキー、そしてお住まいの地域のLyve Cloudエンドポイントを使って設定します。

RcloneViewを開き、**Remote > New Remote**に進み、プロバイダータイプとして**Amazon S3**を選択します。次の画面で、プロバイダーのサブタイプ一覧から**Seagate Lyve Cloud**を選択してください — RcloneViewが自動的に該当地域の正しいエンドポイント形式を適用します。Lyve Cloudコンソールで生成したLyve Cloud APIの認証情報(アクセスキーIDとシークレットアクセスキー)を入力し、リモートを保存します。数秒後には、あなたのバケットがローカルフォルダと同じようにファイルエクスプローラーに表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Seagate Lyve Cloud remote in RcloneView" class="img-large img-center" />

複数のLyve Cloudリージョンにまたがって組織を運営している場合は、それぞれを個別の名前付きリモートとして追加してください — 例えば`lyve-us`、`lyve-eu`、`lyve-ap`のように。RcloneViewのデュアルパネルエクスプローラーで、それらを並べて比較したり同期したりできます。

## Lyve Cloudへのファイルの同期とバックアップ

リモートを接続したら、ドラッグ&ドロップですぐにアドホック転送を開始することも、ジョブマネージャーを使って繰り返し実行可能な同期ジョブを構築することもできます。よくあるワークフローとしては、映像制作スタジオが4KプロジェクトのレンダリングをローカルサーバーからLyve Cloudに同期して長期アーカイブする一方、別のクラウドにも同時にミラーを保持して高速アクセスを確保するケースが挙げられます。

**Home > Sync**に進み、ローカルフォルダまたは別のクラウドリモートをソースとして選択し、Lyve Cloudバケットを宛先として選択します。同期ウィザードの詳細設定では、同時転送スレッド数を調整したり、ハッシュによるチェックサム検証を有効にしたり、フィルタリングのステップでファイルの経過日数やサイズによるフィルターを設定したりできます — 例えば、監視カメラの録画から`.tmp`ファイルや`.part`ファイルを除外するといった具合です。設定に満足したら、**Dry Run**をクリックして、本番データに触れることなくどのファイルが移動するかを正確にプレビューできます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Seagate Lyve Cloud in RcloneView" class="img-large img-center" />

PLUSライセンスをお持ちの場合は、crontab形式の式を使ってジョブをスケジュールできます — 手動操作なしで、Lyve Cloudへのオフピーク時の転送を毎日設定できます。

## 転送の監視とジョブ履歴の確認

RcloneViewの下部パネルにある**Transferring**タブでは、実行中の各ジョブのライブ進捗状況 — 転送速度、ファイル数、完了率、そして実行中の転送をキャンセルするボタン — を確認できます。各ジョブの完了後、**Job History**ビューには開始時刻、所要時間、転送された合計バイト数、平均速度、最終ステータスが記録され、ストレージの来歴の文書化が求められるコンプライアンス重視の業界にとって重要な監査証跡となります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Seagate Lyve Cloud sync transfers in RcloneView" class="img-large img-center" />

複数拠点でLyve Cloudを運用しているチームは、同期ジョブの設定をJSONファイルにエクスポートし、他のマシンにインポートすることで、手動での再入力なしに同一のジョブ設定を確保できます。

## Lyve Cloudをローカルドライブとしてマウントする

アプリケーションがファイルを事前にダウンロードすることなくLyve Cloudから直接読み取る必要があるワークフロー向けに、RcloneViewのマウント機能はLyve Cloudバケットをローカルのドライブレター(Windows)またはマウントパス(macOS/Linux)にマッピングします。**Remote > Mount Manager**に移動し、Lyve Cloudリモートを対象とする新しいマウントを作成して、**Save and mount**をクリックします。バケットはWindowsエクスプローラーまたはmacOS Finderにドライブとして表示されます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Seagate Lyve Cloud bucket as a local drive in RcloneView" class="img-large img-center" />

デフォルトのVFSキャッシュモード(`writes`)は、書き込みをアップロード前にローカルでバッファリングするため、レイテンシの高い接続でも応答性の高いパフォーマンスが得られます。ローカルキャッシュの恩恵を受けやすい読み取り中心のワークフローには、マウント設定で`full`キャッシュモードに切り替えてください。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote > New Remote**に進み、**Amazon S3**を選択し、プロバイダーのサブタイプとして**Seagate Lyve Cloud**を選択します。
3. Lyve CloudのアクセスキーIDとシークレットアクセスキーを入力し、リモートを保存します。
4. ファイルエクスプローラーでSeagate Lyve Cloudリモートを開き、すぐにバケットの閲覧を開始します。

接続が完了したら、同期ジョブを作成してローカルストレージまたは別のクラウドからLyve Cloudへファイルを移動し、毎晩自動的に実行されるようスケジュールすることで、手間のかからないアーカイブを実現できます。

---

**関連ガイド:**

- [Wasabiクラウドストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Backblaze B2クラウドストレージを管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Amazon S3を管理する — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

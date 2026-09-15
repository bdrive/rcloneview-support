---
slug: cloud-storage-esports-organizations-rcloneview
title: "eスポーツ組織向けクラウドストレージ — RcloneViewでVODとスポンサー素材を管理する"
authors:
  - alex
description: "eスポーツ組織は、独自のパイプラインをスクリプトで組むことなく、大会VOD、ハイライトクリップ、スポンサー素材をクラウドストレージ間で同期するためにRcloneViewを利用しています。"
keywords:
  - eスポーツ クラウドストレージ
  - 大会VOD バックアップ
  - eスポーツ組織 ファイル管理
  - RcloneView eスポーツ
  - スポンサー素材管理
  - ハイライトクリップ ストレージ
  - 配信録画 バックアップ
  - 競技ゲーミング ファイル同期
  - eスポーツチーム クラウドワークフロー
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# eスポーツ組織向けクラウドストレージ — RcloneViewでVODとスポンサー素材を管理する

> 大会VOD、選手の配信録画、スポンサー向け納品物の間で、eスポーツ組織は誰かが監視していなくても適切なクラウドフォルダに収まる必要がある大容量メディアファイルを絶えず生み出しています。

eスポーツ組織のメディア出力は、一般的な企業のアーカイブとは異なります — 何時間分もの生の試合映像、選手ごとのPOV録画、編集済みのハイライトリール、そしてスポンサーが期限内の納品を期待するブランド素材です。コーディネーターは、コンテンツ制作者、放送パートナー、マーケティングにまたがる複数のクラウドアカウントを扱うことが多く、誰が何をどこにアップロードしたかによってファイルが散らばってしまいます。RcloneViewは、これらすべてのクラウドアカウントを1つのデスクトップアプリから接続し、スクリプト化されたパイプラインなしでアカウント間のファイル移動を行います。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントおよび同期し、Windows、macOS、Linuxで動作するため、チームがMacで編集してもWindows機で編集しても同じ設定がそのまま機能します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 複数のソースから試合VODを一元化する

大会のVODや選手のPOV録画は、多くの場合、複数の場所に散らばった状態から始まります — 制作パートナーのGoogle Drive、コーチ個人のDropbox、放送ブースのローカルキャプチャドライブなどです。RcloneViewはこれらの各ソースをエクスプローラーパネルの別々のタブとして開くため、コンテンツコーディネーターはブラウザタブとデスクトップアプリを切り替える代わりに、すべてのソースを並べて閲覧できます。ある試合の映像が複数のソースにまたがって特定できたら、CopyまたはSyncジョブでそれを組織の正規のクラウドアーカイブに統合し、大会と試合日ごとにフォルダ構成を整理しておけます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでeスポーツVODストレージ用に複数のクラウドアカウントを接続する" class="img-large img-center" />

これは大会週末の直後、編集チームがハイライトの編集を始める前に、3〜4個の別々のアカウントからの映像を1か所にまとめる必要があるときに最も重要になります。

## 予測可能なスケジュールでスポンサー素材を届ける

スポンサーはブランドオーバーレイ、まとめクリップ、パフォーマンスレポートを一定の周期で受け取ることを期待しており、納品期限を逃すと数か月かけて築いた関係が損なわれます。RcloneViewの**Job Manager**を使えば、メディアチームはスポンサー向け配信の転送をソースフォルダ、宛先リモート、ファイルタイプフィルターとともに名前付きジョブとして保存できるため、毎回手作業で組み直すのではなく常に同じ方法で実行されます。PLUSライセンスがあれば、そのジョブをcrontab形式のスケジュールで実行できるため、コンテンツチームが編集を終えた後、週次のスポンサーパッケージが自動的に送信されるようになります。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewで定期的なスポンサー素材配信ジョブをスケジュールする" class="img-large img-center" />

その後Job Historyは、タイムスタンプ、ファイル数、合計サイズといった配信ごとの記録をマネージャーに提供し、素材が実際に送信されたかどうかスポンサーから問い合わせがあった際に役立ちます。

## ハイライトクリップを複数のプラットフォームへ一度に配信する

ハイライトクリップが1か所だけに送られることはほとんどありません — ファン向けの公開Google Drive、長期保存用の非公開Backblaze B2バケット、再配信用のパートナーのS3バケットなど、複数の場所が必要になることがあります。RcloneViewの**1:N同期**は、1回のジョブ実行で1つのソースフォルダを複数の宛先にプッシュするため、編集チームはカット編集を終えた後に同じアップロードを3回繰り返す必要がありません。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="複数宛先へのハイライトクリップ配信を示すジョブ履歴" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 各コンテンツのソースと宛先 — Google Drive、Dropbox、S3、Backblaze B2など — をリモートとして追加します。
3. VOD映像をアーカイブに統合する前に、**Folder Compare**で漏れがないか確認します。
4. 繰り返し行うスポンサー配信やハイライト配信を、**Job Manager**で名前付きジョブとして保存します。

映像の統合とスポンサー配信が手作業のアップロードではなく繰り返し可能なジョブとして実行されるようになれば、コンテンツチームは大会週末をアカウントをまたいでファイルを追いかける代わりに編集に費やせます。

---

**関連ガイド:**

- [ビデオゲームスタジオ向けクラウドストレージ — RcloneViewでアセットの同期とバックアップ](https://rcloneview.com/support/blog/cloud-storage-video-game-studios-rcloneview)
- [スポーツ団体向けクラウドストレージ — RcloneViewでチームファイル管理](https://rcloneview.com/support/blog/cloud-storage-sports-organizations-rcloneview)
- [1:N同期 — RcloneViewで1つのソースを複数の宛先に同期する](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />

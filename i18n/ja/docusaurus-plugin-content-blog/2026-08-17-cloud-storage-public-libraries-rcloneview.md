---
slug: cloud-storage-public-libraries-rcloneview
title: "公共図書館向けクラウドストレージ — RcloneViewでコレクションをデジタル化・共有"
authors:
  - morgan
description: "RcloneViewを使用して、公共図書館のデジタル化されたアーカイブ、複数支館のバックアップ、利用者記録をクラウドストレージ全体で管理します。"
keywords:
  - 図書館向けクラウドストレージ
  - 図書館デジタル化バックアップ
  - RcloneView 図書館
  - 複数支館図書館同期
  - デジタルアーカイブバックアップ
  - 図書館クラウド移行
  - 図書館間ファイル共有
  - 公共図書館IT
  - 図書館クラウドバックアップ
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

# 公共図書館向けクラウドストレージ — RcloneViewでコレクションをデジタル化・共有

> デジタル化されたアーカイブ、利用者ファイル、複数支館の記録はすべて、確実に保管できる場所と、専任のIT担当者なしで支館間を移動できる方法を必要としています。

数十年分の地域新聞や歴史的写真をデジタル化する公共図書館システムは、支館のローカルストレージを圧迫することなく永続的なクラウドアーカイブに送る必要がある、テラバイト規模のスキャン済みTIFFおよびPDFファイルを生成します。さらにカタログ、プログラム資料、管理記録を共有する複数支館運営が加わると、多くの場合パートタイムの管理者1人だけの図書館IT担当者は、スクリプティングの専門知識を必要とせずに転送とバックアップを処理できるツールを必要とします。RcloneViewは図書館システムに、支館とクラウドプロバイダー間でファイルを移動、同期、アーカイブするためのポイント&クリック方式の方法を提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## デジタル化プロジェクトのアーカイブ

デジタル化プロジェクトは、ローカルのスキャンステーションから長期クラウドストレージへ、フォルダごとに手動でコピーすることなく移動する必要がある、高解像度スキャンの大量バッチを生成します。スキャンワークステーションのローカルフォルダからクラウドアーカイブのリモートへの一方向同期ジョブをRcloneViewで設定し、進行中の部分的なスキャンではなく完了したバッチのみをプッシュしたい場合は、最大ファイル経過時間または最大ファイルサイズのフィルターを使用します。

<img src="/support/images/en/blog/new-remote.png" alt="デジタル化された図書館資料用のクラウドアーカイブリモートを追加" class="img-large img-center" />

新しいデジタル化バッチの最初の本番同期の前にドライラン(Dry Run)を実行してください — 転送される予定のスキャンファイルを正確にリストするため、誤ったフォルダに出力しているスキャナーを、数千枚の誤ったファイル分類の画像がアーカイブに入る前に発見できます。

## 複数支館間での記録の同期

複数の支館を持つ図書館システムでは、同じカタログ、イベント資料、共有管理文書がどこでも利用可能である必要がある場合がよくあります。RcloneViewの1:N同期により、1つの支館が単一のジョブで複数の宛先リモートに更新をプッシュできます — 更新されたプログラムカレンダーや共有参考資料を中央支館からすべてのサテライト支館に配布するのに便利です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="支館間で共有図書館記録を同期" class="img-large img-center" />

FREEライセンスでもS3、Azure、Backblaze B2に完全な読み書きアクセスで接続できます。これは、サイズ制限のあるコンシューマー向け同期フォルダではなく、長期保存のためのオブジェクトストレージを必要とする予算の厳しいシステムにとって重要です。

## 無人バックアップのスケジュール設定

図書館IT担当者は夜間の転送を見守る時間がほとんどありません。支館のローカルサーバーとクラウドバックアップ先の間の同期ジョブが設定されれば、PLUSライセンスユーザーはcrontab形式のスケジュールを設定して、誰もいなくても夜間にバックアップを実行でき、保存前に次回の予定実行のプレビューを確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="図書館支館の夜間バックアップジョブをスケジュール" class="img-large img-center" />

その後、ジョブ履歴(Job History)は、すべての実行について転送ステータス、ファイル数、所要時間を示すシンプルな監査証跡を提供するため、複数の支館を監督する1人の担当者が各拠点を個別に確認することなくバックアップが完了したことを確認できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. リモートマネージャーでアーカイブと支館ストレージをリモートとして追加します。
3. ドライランを最初に使用して、デジタル化アップロードまたは支館間の記録共有のための同期ジョブを構築します。
4. 定期バックアップをスケジュールし、ジョブ履歴を確認してクリーンに実行されたことを確認します。

図書館のコレクションと記録は、最後に実際に完了したバックアップと同じくらいしか安全ではありません — RcloneViewは、すべての支館でこのプロセスを可視化し、一貫性を保ちます。

---

**関連ガイド:**

- [博物館・アーカイブ向けクラウドストレージ — RcloneView](https://rcloneview.com/support/blog/cloud-storage-museums-archives-rcloneview)
- [K-12学校向けクラウドストレージ — RcloneView](https://rcloneview.com/support/blog/cloud-storage-k12-schools-rcloneview)
- [RcloneViewで複数クラウドにNASをバックアップ](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />

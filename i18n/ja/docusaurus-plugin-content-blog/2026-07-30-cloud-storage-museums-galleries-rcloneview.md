---
slug: cloud-storage-museums-galleries-rcloneview
title: "博物館・美術館のためのクラウドストレージ — RcloneViewでデジタルコレクションを保存する"
authors:
  - jay
description: "RcloneViewで、博物館や美術館向けに高解像度のコレクションスキャンとアーカイブ記録を複数のクラウドにまたがって管理します。"
keywords:
  - 博物館のためのクラウドストレージ
  - デジタルコレクション保存
  - 美術館アーカイブバックアップ
  - RcloneView 博物館
  - アーカイブストレージソフトウェア
  - コレクションデジタル化バックアップ
  - マルチクラウドアーカイブ管理
  - 非営利団体向けクラウドストレージ
  - 博物館データ管理
  - 文化遺産バックアップ
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 博物館・美術館のためのクラウドストレージ — RcloneViewでデジタルコレクションを保存する

> 小規模な学芸チームを一つのプロバイダーに縛りつけることなく、高解像度のコレクションスキャン、状態報告書、貸出記録を複数のクラウドにわたって安全に保管します。

常設コレクションをデジタル化する博物館では、高解像度のTIFFスキャン、収蔵品のRAW写真、3Dキャプチャデータが数テラバイト規模に蓄積されることがあり、それらは寄贈されたクラウドアカウント、組織のGoogle Workspace、Backblaze B2やWasabiのような助成金によるアーカイブ層に分散していることが少なくありません。RcloneViewは、登録担当者やデジタルアーキビストに、プロバイダーごとに異なる管理コンソールを覚えるのではなく、コレクションを閲覧・比較・移動できる単一のインターフェースを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 複数クラウドに散らばったコレクション記録の統合

組織のストレージ体制が整然としていることはほとんどありません — 助成金がBackblaze B2のアーカイブストレージを1年分カバーする一方、日常の学芸ファイルはGoogle DriveやSharePointにあり、巡回展はパートナー機関に紐づくアカウントをさらに増やします。RcloneViewはWindows、macOS、Linux上の1つのウィンドウから90以上のプロバイダーをマウント・同期できるため、登録担当者はブラウザのタブや個別のデスクトップアプリを切り替えるのではなく、すべてのソースのコレクションフォルダを並べて確認できます。

マルチパネルのExplorerは最大4パネルを同時にサポートし、デジタルアーキビストが新規受け入れ品を整理する間、作業中のコレクション、アーカイブバックアップ、受信中の寄贈者からの転送を同時に表示しておくことができます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a museum collection remote in RcloneView" class="img-large img-center" />

## Folder Compareでデジタル化コレクションを検証する

デジタル化業者や館内の撮影ステーションから収蔵品スキャンの一括データがアップロードされた後、Folder Compareは納品されたファイルをアーカイブ用リモートで期待される内容と照合し、欠落しているファイル、サイズが一致しないファイル、片側にしか存在しないファイルを検出します。これにより、スキャンセッションがアーカイブ済みとしてマークされる前に不完全な転送を発見できます。壊れやすい収蔵品を再撮影することは簡単にやり直せる作業ではないため、この確認は重要です。

差分ファイルのみをコピーする動作により、昨年のデジタル化データに対する比較実行では、バイト単位で同一のファイルを再転送して帯域を無駄にすることがありません — 実際に変更されたファイルや新規に到着したファイルのみが移動します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing digitized collection files between local storage and a cloud archive" class="img-large img-center" />

## 専任のIT担当者なしでアーカイブバックアップをスケジュールする

多くの博物館や美術館は技術スタッフが少なく、手動で実行する必要がある同期ジョブは、展示の設営で忙しい時期に忘れられがちです。PLUSライセンスのユーザーは、コレクションバックアップジョブにcrontab形式のスケジュールを設定し、スキャンと状態報告書が自動的に第2のプロバイダーに転送されるようにできます。本番適用前にシミュレーションオプションでタイミングを確認することも可能です。その後、Job Historyはシンプルな監査証跡を提供し、助成金の報告書でアーカイブバックアップが実際にスケジュールどおり実行されたことを証明する必要がある場合に役立ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an automated archival backup for a museum collection" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. コレクションデータを保持する各クラウドアカウント — Google Drive、SharePoint、Backblaze B2やWasabiのようなアーカイブプロバイダー — をそれぞれ別のリモートとして接続します。
3. 直近のデジタル化データに対してFolder Compareを実行し、アーカイブ前に欠落がないか確認します。
4. Syncジョブを作成して新規受け入れ品を第2のプロバイダーにミラーリングし、PLUSでスケジュール設定することで、誰かが実行を覚えておく必要がないようにします。

一貫した検証済みのバックアップは、空調管理された保管庫が実物を保護するのと同じように、コレクションのデジタル記録を保護します。

---

**関連ガイド:**

- [RcloneViewで複数クラウドにわたるデジタルアセットを管理する：完全ワークフローガイド](https://rcloneview.com/support/blog/manage-digital-assets-multi-cloud-rcloneview)
- [写真家のためのクラウドストレージ — RAWファイルのバックアップ、Lightroomカタログの同期、クライアントへの納品](https://rcloneview.com/support/blog/cloud-storage-photographers-raw-backup-rcloneview)
- [非営利団体・慈善団体のためのクラウドストレージ — RcloneViewで寄付とデータを管理する](https://rcloneview.com/support/blog/cloud-storage-nonprofit-charities-rcloneview)

<CloudSupportGrid />

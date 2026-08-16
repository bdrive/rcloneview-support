---
slug: cloud-storage-surveying-firms-rcloneview
title: "測量会社向けクラウドストレージ — RcloneViewで大容量フィールドデータファイルを管理"
authors:
  - tayson
description: "測量会社は膨大なLiDAR、点群、GPSデータセットを扱います。RcloneViewがクラウドストレージ全体でフィールドデータを同期、バックアップ、マウントする方法をご覧ください。"
keywords:
  - 測量会社向けクラウドストレージ
  - LiDAR点群バックアップ
  - 土地測量データ管理
  - GPSフィールドデータ同期
  - 測量会社クラウドストレージ
  - 大容量ファイルクラウド同期ツール
  - 測量向けRcloneView
  - 地理空間データクラウドバックアップ
  - ドローン測量データ保存
  - エンジニアリング会社向けマルチクラウドバックアップ
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

# 測量会社向けクラウドストレージ — RcloneViewで大容量フィールドデータファイルを管理

> 点群、LiDARスキャン、GPS測量データはあっという間に蓄積します — RcloneViewはフィールドチームとオフィスが同じ同期済みデータセットで作業できるようにします。

土地測量、地理空間、土木エンジニアリング会社は、あらゆる業界の中でも特に重いファイル負荷を生み出します。生のLiDARスキャン、ドローン写真測量セット、現場ごとに数十ギガバイトに達するトータルステーション点群などです。フィールド用ノートPCはすぐに容量がいっぱいになり、毎晩の遅い手動アップロードなしにそのデータを中央アーカイブへ安全に取り込むことは、実務上の大きなボトルネックとなります。RcloneViewは測量チームに、フィールドストレージ、クラウドアーカイブ、オフィスの間でデータを移動させるための単一のウィンドウを提供し、会社がすでに利用しているプロバイダーであれば何にでも対応します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 複数の現場からデータを一元化

測量クルーは現場から戻る際、ローカルドライブ、NASユニット、または現場トレーラーに設置されたFTP/SFTPサーバー上にデータを持ち帰ることがよくあります。RcloneViewはこれらすべてに加え、90以上のクラウドプロバイダーに接続できます — 多くの会社が生スキャンデータの長期アーカイブに利用するS3互換オブジェクトストレージも含まれます。2つ以上のExplorerパネルを並べて開けば、プロジェクトマネージャーはフィールドノートPCの生フォルダを会社のクラウドアーカイブと並べて確認し、ローカルストレージをクリアする前に何が届いているかを正確に確認できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでローカルストレージとクラウドアーカイブ間で測量データを転送" class="img-large img-center" />

ここで特に役立つのが**Get Size**アクションです — プロジェクトフォルダを右クリックして転送開始前に合計サイズを計算すれば、クルーは遠隔地の帯域幅制限を踏まえて計画を立てられ、途中で止まってしまうアップロードを避けられます。

## フィールドストレージからの夜間アップロードを自動化

毎日の終わりに誰かがファイルをコピーすることを覚えておくのに頼る代わりに、フィールドワークステーションのプロジェクトフォルダからクラウドアーカイブのリモートへSyncジョブを設定しましょう。フィルタリングルールを使えば、一時的なスキャナーキャッシュファイルやサムネイルプレビューを除外し、完成したデータセットだけをアップロードできます。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントかつ同期でき、Windows、macOS、Linuxに対応しているため、フィールドマシンがWindowsノートPCでもスキャニングソフトウェアを実行するLinuxワークステーションでも、同じジョブ設定がそのまま機能します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="測量データをクラウドストレージにアップロードするスケジュール同期ジョブの実行" class="img-large img-center" />

## ローカルストレージを消去する前にアップロードを確認

不完全なアップロードで一日分のLiDARスキャンを失うと、やり直すのに多大なコストがかかります。同期前に**Dry Run**を実行して何が転送されるかを正確にプレビューし、その後**Folder Compare**を使ってクラウドのコピーがフィールドデータとファイル単位で一致していること — サイズチェックを含めて — を確認してから、次の現場のためにドライブ容量を空けるべくローカルの原本を削除しましょう。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="検証のためローカル測量データフォルダをクラウドアーカイブと比較" class="img-large img-center" />

## オフィスのアーカイブを整理された状態に保つ

データがクラウドに到達した後、スケジュール済みの同期ジョブが完成したプロジェクトを冗長性のためにセカンダリのアーカイブリモートへミラーリングでき、Job Historyが何がいつ転送されたかのタイムスタンプ付き記録を提供します — これはクライアント成果物の追跡や社内QAに役立ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewで定期的な測量データバックアップジョブをスケジュール" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. フィールドストレージ(SFTP、ローカルドライブ、またはNAS)とクラウドアーカイブリモートを接続してください。
3. 一時的なスキャナーファイルを除外するフィルターを設定したSyncジョブを作成し、Dry Runを実行してください。
4. 各フィールド作業日の後に実行されるようジョブをスケジュールし、Job Historyで完了を確認してください。

フィールドデータが毎晩確実にクラウドへ移動することで、測量チームはアップロードの見守りに費やす時間を減らし、次の現場により多くの時間を割けるようになります。

---

**関連ガイド:**

- [建設プロジェクト管理向けクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [建築、エンジニアリング、CAD向けクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-architecture-engineering-cad-rcloneview)
- [RcloneViewによるマルチクラウドバックアップ戦略](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />

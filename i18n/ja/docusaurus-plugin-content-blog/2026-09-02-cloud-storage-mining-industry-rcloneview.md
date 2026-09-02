---
slug: cloud-storage-mining-industry-rcloneview
title: "鉱業企業向けクラウドストレージ — RcloneViewで調査データを管理"
authors:
  - morgan
description: "RcloneViewで遠隔地の鉱山現場からドローン調査、LiDAR、GISデータを一元化 — 鉱業向けに構築されたクラウドストレージ。"
keywords:
  - 鉱業企業向けクラウドストレージ
  - 鉱業クラウドバックアップ
  - 地質調査データストレージ
  - LiDARデータクラウド同期
  - 遠隔鉱山現場バックアップ
  - RcloneView 鉱業
  - 鉱業GISクラウドストレージ
  - ドローン調査クラウドバックアップ
  - 鉱業探査データ管理
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

# 鉱業企業向けクラウドストレージ — RcloneViewで調査データを管理

> ドローン画像、LiDARスキャン、地質調査ファイルを現場のノートパソコンから取り出し、専任のITチームなしで一元化されたクラウドストレージに移行します。

鉱業では、ドローン空撮、LiDAR点群、ボーリング孔ログ、CADモデルなど膨大な量の地理空間データが生成されます — その多くは接続が限られ、ローカルサーバールームもない現場で取得されます。現場チームには、接続が確保でき次第データを中央ストレージへ確実に移す方法が必要であり、本社のエンジニアはファイル数を確認するためだけにテラバイト単位をダウンロードすることなく、データを閲覧・検証できる必要があります。RcloneViewは、ローカルドライブ、クラウドストレージ、アーカイブ向けオブジェクトストレージを1つのウィンドウで接続する単一のデスクトップアプリケーションを、両方のグループに提供します。FREEライセンスでS3、Azure、Backblaze B2に読み書き両方でフルアクセス接続できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 遠隔現場の調査データを一元化

現場のノートパソコンには通常、接続が確保できるまで、ドローンの生の撮影データとLiDARのエクスポートファイルがローカルファイルとして保存されています。RcloneViewでは、ローカルディスクや外付けドライブがクラウドのリモートと並んで独自のExplorerパネルに表示されるため、現場エンジニアはその日の調査ファイルを閲覧し、S3互換バケットにコピーできます — Wasabi、AWS S3、Backblaze B2は、めったに再アクセスされないもののコンプライアンス上保持が必要な画像の、コスト効率の良い長期アーカイブとしてよく選ばれます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでローカルの調査用ドライブとクラウドストレージのリモートを接続" class="img-large img-center" />

## 不要なものをスキップするフィルターで現場データを同期

調査用ドライブのすべてのファイルをクラウドに送る必要はありません。RcloneViewの同期フィルタリングステップを使えば、拡張子で一時処理ファイルを除外したり、最大ファイルサイズを制限したり、入れ子になったプロジェクトフォルダー構造で同期がどこまで深く入るかを制限したりできます — 生の撮影フォルダーの隣に、現場を離れる必要のない数ギガバイトの中間レンダリング出力がある場合に便利です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="現場ドライブからクラウドストレージへフィルタリングされた調査データを同期" class="img-large img-center" />

衛星回線や携帯回線のアップリンクが細い現場では、夜間にスケジュールジョブ(PLUSライセンス)として同期を実行することで、業務時間中に回線を占有することなく転送の大部分を自動で行えます。

## アーカイブ前にデータの整合性を検証

調査記録とコンプライアンス記録は、中央ストレージに到達した後も損なわれていないことを証明できる必要があります。Folder Compareはローカルの現場フォルダーとクラウドアーカイブを並べて表示し、サイズが異なるファイルにフラグを立て、チェックサムベースの比較により、ファイル名やタイムスタンプだけに頼らずコンテンツが一致していることを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneViewでローカルの調査フォルダーとアーカイブ済みのクラウドコピーを比較" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 現場のローカルドライブと、アーカイブ用のクラウドまたはS3互換リモートを追加します。
3. 一時ファイルと中間ファイルを除外するように同期フィルターを設定します。
4. Dry Runを実行してからジョブを保存し、同期のたびにJob Historyを確認します。

遠隔現場から信頼できるデータを取得できれば、エンジニアリングチームやコンプライアンスチームが必要とするときの驚きが減ります。

---

**関連ガイド:**

- [建設・プロジェクト管理向けクラウドストレージ — RcloneView](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [エネルギー・公益事業向けクラウドストレージ — RcloneView](https://rcloneview.com/support/blog/cloud-storage-energy-utilities-rcloneview)
- [建築・エンジニアリング・CAD向けクラウドストレージ — RcloneView](https://rcloneview.com/support/blog/cloud-storage-architecture-engineering-cad-rcloneview)

<CloudSupportGrid />

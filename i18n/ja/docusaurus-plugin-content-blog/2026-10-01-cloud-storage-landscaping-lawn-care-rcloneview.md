---
slug: cloud-storage-landscaping-lawn-care-rcloneview
title: "造園会社のためのクラウドストレージ — RcloneViewで案件ファイルを守る"
authors:
  - alex
description: "造園・芝生管理会社向けのクラウドストレージ：RcloneViewのスケジュール同期と暗号化で、現場写真・設計図・見積書をバックアップします。"
keywords:
  - 造園会社向けクラウドストレージ
  - 造園設計ファイルのバックアップ
  - 芝生管理事業のバックアップ
  - 現場写真のバックアップ
  - 造園クラウド同期
  - 暗号化クラウドバックアップ
  - RcloneViewバックアップ
  - 小規模事業のクラウドバックアップ
  - スケジュールクラウドバックアップ
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

# 造園会社のためのクラウドストレージ — RcloneViewで案件ファイルを守る

> 作業員のやり方を変えることなく、現場写真・設計図面・見積書をオフサイトにバックアップできます。

造園会社のファイルはあちこちに散らばりがちです。施工前後の写真はスマートフォン、CADや設計の書き出しファイルは事務所のPC、署名済みの見積書は共有フォルダにあります。シーズン中にノートPCが1台壊れれば、各顧客に約束した内容の履歴も一緒に失われます。RcloneViewは、小規模事業者がこうした成果物をクラウドストレージへコピーし、正しく届いたことを確認するための視覚的な方法を提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## バックアップの前に案件ファイルを整理する

まず事務所のPCに分かりやすいフォルダ構成を作ります。顧客ごとに1つのフォルダを用意し、その中に写真、設計、見積書、請求書のサブフォルダを置きます。作業員が撮影した写真は、毎日の終業時に顧客フォルダへ入れます。

RcloneViewのエクスプローラーパネルの片方にローカルフォルダ、もう片方にクラウドのリモートを開きます。ファイルエクスプローラーで、現場写真がアップロード前に正しい案件フォルダに入っているか確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewで造園案件ファイル用のクラウドリモートを追加する" class="img-large img-center" />

## 事業に合ったストレージを選ぶ

RcloneViewはGoogle Drive、OneDrive、Dropbox、Backblaze B2、Wasabi、Amazon S3をはじめ90以上のプロバイダーに対応しているため、すでに使っているアカウントを利用することも、大量の写真アーカイブ向けにオブジェクトストレージを選ぶこともできます。

顧客の住所や契約書を扱う場合は、保存先の上にCryptリモートを追加します。ファイル名と内容はrclone Cryptによってアップロード前に暗号化されます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewで案件フォルダをクラウドストレージにコピーする" class="img-large img-center" />

## 夜間コピーを自動化する

案件フォルダからクラウドの保存先へのSyncジョブまたはCopyジョブを作成します。まずDry Runで、何がコピーまたは削除されるかをプレビューします。一方向同期は保存先だけを変更するため、バックアップに向いています。PLUSライセンスでは、crontab形式のスケジュールを追加して、作業員が写真をアップロードした後の毎晩にジョブを実行できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewで夜間バックアップジョブをスケジュールする" class="img-large img-center" />

## バックアップが本当に成功したか確認する

Job Historyには、各実行の開始時刻、所要時間、ステータス、サイズ、ファイル数が表示されます。ローカルフォルダとクラウド上のコピーの間でFolder Compareを使えば、特に施工が立て込んだ週の後などに、不足しているファイルを見つけられます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneViewでのバックアップ実行のジョブ履歴" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード**：[rcloneview.com](https://rcloneview.com/src/download.html)から入手します。
2. New Remoteでクラウドストレージを追加します。機密ファイル用にCryptリモートも必要に応じて追加します。
3. 案件フォルダからクラウドへのSyncジョブを作成し、Dry Runを実行します。
4. スケジュールを設定する（PLUS）か手動で実行し、毎週Job Historyを確認します。

信頼できるバックアップがあれば、ノートPCの故障は不便で済み、1シーズン分の顧客記録を失うことはありません。

---

**関連ガイド：**

- [空調・配管工事業者のためのクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-hvac-plumbing-contractors-rcloneview)
- [インテリアデザイン会社のためのクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-interior-design-firms-rcloneview)
- [測量会社のためのクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-surveying-firms-rcloneview)

<CloudSupportGrid />

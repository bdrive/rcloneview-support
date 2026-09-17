---
slug: sync-seafile-to-wasabi-rcloneview
title: "SeafileをWasabiに同期 — RcloneViewでクラウドバックアップ"
authors:
  - kai
description: "セルフホストのSeafileライブラリをRcloneViewでWasabiのS3互換ストレージに同期。同期スクリプトを書くことなくオフサイトのコピーを保持できます。"
keywords:
  - SeafileをWasabiに同期
  - Seafile バックアップ
  - Wasabi クラウド同期
  - セルフホスト クラウドバックアップ
  - Seafile RcloneView
  - Wasabi S3互換ストレージ
  - クラウド間同期
  - セルフホスト オフサイトバックアップ
  - RcloneView Seafile
  - RcloneView Wasabi
tags:
  - RcloneView
  - seafile
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SeafileをWasabiに同期 — RcloneViewでクラウドバックアップ

> 同期スクリプトを1行も書かずに、セルフホストのSeafileライブラリにWasabi上のオフサイトバックアップを用意しましょう。

Seafileは、自分たちのサーバー上でファイル同期プラットフォームを運用したいチームに人気の選択肢ですが、セルフホストであるということはバックアップの責任もすべて自分たちにあるということです — サーバーのディスクが故障すれば、唯一のコピーも失われます。WasabiはS3互換で大規模でも手頃、どこからでもアクセスできる、自然なオフサイト先です。RcloneViewは両方に直接接続できるため、手動エクスポートに頼らずSeafileライブラリをスケジュールに沿ってWasabiバケットへミラーリングできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SeafileとWasabiをリモートとして接続する

まずSeafileサーバーをリモートとして追加し、RcloneViewにサーバーURLとライブラリの認証情報を設定します。次にAccess Key ID、Secret Access Key、該当するWasabiのリージョンエンドポイントを使ってWasabiを別途追加します。両方のリモートが設定されると、Explorerパネルで閲覧可能なファイルツリーとして表示されるので、同期ジョブを組む前にライブラリの構造とファイル数を確認できます。RcloneViewはWindows、macOS、Linux上の1つのウィンドウから90以上のプロバイダーをマウント・同期できるため、SeafileとWasabiも既存の他のクラウドと並んで扱えます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでSeafileとWasabiのリモートを追加する様子" class="img-large img-center" />

## 一方向同期ジョブを構築する

Seafileライブラリをソース、Wasabiバケットを宛先とする同期ジョブを設定し、「宛先のみ変更」を使ってWasabiがSeafileに書き戻さない純粋なミラーになるようにします。ソースファイルとエクスポートを含む500GBの共有ライブラリを持つデザインチームであれば、FilteringステップでSeafileが内部的に生成する一時ファイルやロックファイルを除外し、Wasabi側のコピーを同期の副産物で散らからないようにできます。

Advanced Settingsステップでチェックサム比較を有効にし、更新日時ではなくハッシュとサイズでファイルを照合するようにします — SeafileとS3互換ストレージはファイルのメタデータの扱い方が異なるため役立ちます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでSeafileライブラリをWasabiバケットに同期する様子" class="img-large img-center" />

最初の本番同期の前にDry Runを実行してください。データを一切移動せずに何が転送されるかを正確にリストアップしてくれるため、ライブラリの実際の大きさがまだ分からない最初のパスで特に重要です。

## バックアップのスケジュール設定と検証

PLUSライセンスでは、ジョブにcrontab形式のスケジュールを設定して自動的に再実行されるようにしましょう — よく使われるライブラリなら毎晩、アーカイブに近い性質のものなら毎週が目安です。Job Historyは各実行の所要時間、転送速度、ステータスを記録するため、Wasabi側のコピーが最後に最新化されたタイミングを明確に把握できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewでSeafileからWasabiへの定期同期ジョブをスケジュールする様子" class="img-large img-center" />

最初のフル同期のあと、SeafileのソースとWasabiの宛先の間でFolder Compareを実行し、すべてのファイルが正しく届きサイズが一致しているか確認しましょう — ネットワーク障害で抜け落ちたものを見つける手早い方法です。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. サーバーURLとライブラリの認証情報を使ってSeafileサーバーをリモートとして追加します。
3. Access Key ID、Secret Access Key、リージョンエンドポイントを使ってWasabiをリモートとして追加します。
4. 一方向同期ジョブを構築し、Dry Runを実行してから、バックアップを最新に保つための定期実行をスケジュールします。

セルフホストのライブラリは、どこか他の場所にも存在してこそ安全です。SeafileからWasabiへのスケジュール同期は、その要件を自動で回る仕組みに変えてくれます。

---

**関連ガイド:**

- [RcloneViewでSeafileのセルフホストクラウド同期を管理する](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [RcloneViewでWasabiのクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneViewでSeafileからBackblaze B2へ移行する](https://rcloneview.com/support/blog/migrate-seafile-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

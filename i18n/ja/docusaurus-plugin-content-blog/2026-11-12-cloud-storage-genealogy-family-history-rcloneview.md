---
slug: cloud-storage-genealogy-family-history-rcloneview
title: "家系調査研究者のためのクラウドストレージ — RcloneViewで家族史アーカイブを保存する"
authors:
  - tayson
description: "スキャンした記録、家系図ファイル、オーラルヒストリーの録音をRcloneViewで保護：家系アーカイブのためのマルチクラウドバックアップ、暗号化、検証。"
keywords:
  - 家系調査向けクラウドストレージ
  - 家族史バックアップ
  - 家系アーカイブのバックアップ
  - 家系図ファイルのバックアップ
  - スキャンした家族文書をクラウドへ
  - オーラルヒストリー録音のバックアップ
  - 家系研究会のファイル保存
  - 家族写真を複数のクラウドに保存
  - 暗号化されたDNAデータのバックアップ
  - RcloneView 家系調査
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

# 家系調査研究者のためのクラウドストレージ — RcloneViewで家族史アーカイブを保存する

> 何十年分もの調査がノートPCのドライブ1台に収まっていることがあります。RcloneViewはそれを複数のクラウドにコピーし、すべてのコピーが一致するか確認します。

家系アーカイブはさまざまな形で増えていきます。ひとりの家族史研究者が、教区記録簿をスキャンしたTIFFファイル40,000点、家系図をエクスポートしたGEDCOMファイル数点、高齢の親族への数時間分のWAVインタビュー、生のDNAデータファイルを抱えていることもあります。ボランティアの家系研究会も、同じような資料を共有ドライブや余ったUSBディスクに保管しています。RcloneViewは、そのどちらにも、すでに使っているクラウドストレージへアーカイブをコピーし、コピーを最新に保つためのひとつのデスクトップアプリを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## すべてのアーカイブの保存先をひとつのウィンドウに

多くの研究者は資料を複数のサービスに分散させています。いとこと共有しているGoogle Driveのフォルダ、遠方の資料館から届いたDropboxのリンク、マスタースキャンを収めた外付けドライブなどです。RcloneViewではそれぞれをリモートとして追加します。Google Drive、Dropbox、OneDrive、pCloudはブラウザでのログインで接続できます。Backblaze B2にはApplication Key IDとキーが必要です。Synology NASはローカルネットワーク上で検出できます。

最大4つのExplorerパネルを並べて開き、外付けドライブのスキャンフォルダをクラウドリモートへドラッグします。異なるリモート間のドラッグはコピーになるため、元のファイルはそのまま残ります。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud storage remote in RcloneView for a genealogy archive" class="img-large img-center" />

## かけがえのないスキャンは複数のコピーで

国勢調査のページをスキャンし直すのは手間で済みます。しかし祖父母の声を収めた録音を失えば、二度と取り戻せません。1:N同期を使えば、1つのソースフォルダを1つのジョブで複数の宛先へ送れます。たとえばマスタースキャンのフォルダをpCloudとBackblaze B2のバケットの両方へ送れます。S3、Azure、Backblaze B2はFREE Licenseでも読み書きの両方が可能な状態で接続できます。

初回の実行前にDry Runを使って、コピーされる項目と削除される項目の一覧を確認しましょう。一方向同期は宛先だけを変更するため、ドライブ上のマスターフォルダには一切手を加えません。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying family history scans between cloud remotes in RcloneView" class="img-large img-center" />

## DNAデータと存命の親族の記録を守る

生のDNAファイルや存命の人物に関する記録は、19世紀の婚姻記録簿よりも慎重な扱いが必要です。クラウドフォルダを**Crypt**リモートで包むと、RcloneViewはアップロード前にファイル名、フォルダ名、内容を暗号化します。プロバイダーには暗号化されたデータのみが保存され、RcloneViewではいつもどおり復号された状態で閲覧できます。Cryptのパスワードは安全な場所に保管してください。パスワードがなければファイルは復号できません。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare in RcloneView showing differences between archive copies" class="img-large img-center" />

## コピーの検証と更新の自動化

Folder Compareでローカルのマスターと各クラウドのコピーを比較します。フィルターで片側にしかないファイルやサイズが異なるファイルを表示でき、Copy rightまたはCopy leftで欠けている部分をワンクリックで補えます。PLUS Licenseがあれば、crontab形式のスケジュールで毎週日曜の夜に同期を実行でき、Job Historyに各実行のステータス、サイズ、ファイル数が記録されます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a weekly family archive backup job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 外付けドライブまたはNASと、pCloudやBackblaze B2などのクラウドリモートを2つ追加します。
3. マスターアーカイブフォルダをソース、2つのクラウドを宛先とする同期ジョブを作成し、Dry Runを実行します。
4. DNAファイルと存命の親族の記録用にCryptリモートを追加し、Folder Compareでコピーを確認します。

検証済みのオフサイトコピーが2つあれば、あなたの研究はどの単一ドライブよりも長く残ります。

---

**関連ガイド:**

- [博物館・資料館のためのクラウドストレージ](https://rcloneview.com/support/blog/cloud-storage-museums-archives-rcloneview)
- [複数の宛先への1対多同期](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)
- [Cryptリモートでクラウドバックアップを暗号化する](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

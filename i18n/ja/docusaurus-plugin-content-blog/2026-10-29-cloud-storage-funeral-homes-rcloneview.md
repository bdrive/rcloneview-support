---
slug: cloud-storage-funeral-homes-rcloneview
title: "葬儀社のためのクラウドストレージ — RcloneViewでご遺族の記録を守る"
authors:
  - alex
description: "葬儀社はRcloneViewで、葬儀記録、契約書、写真、追悼ビデオを複数のクラウドにバックアップできます：スケジュール同期、暗号化、Folder Compare。"
keywords:
  - 葬儀社 クラウドストレージ
  - 葬儀社 ファイルバックアップ
  - 葬儀社 文書保管
  - 追悼ビデオ バックアップ
  - 暗号化クラウドバックアップ
  - 小規模事業 クラウドバックアップ
  - rcloneview 葬儀社
  - マルチクラウドバックアップ
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

# 葬儀社のためのクラウドストレージ — RcloneViewでご遺族の記録を守る

> 葬儀の契約書、追悼写真、追悼ビデオを、複数の場所に安全にバックアップしましょう。

葬儀社は、ご遺族が何十年も残っていると期待する記録を預かっています。署名済みの契約書、訃報、生前準備の書類、写真スライドショー、そして数ギガバイトに達することもある葬儀の録画などです。これらは多くの場合、事務所のPC1台、または単一のクラウドアカウントに置かれています。RcloneViewを使えば、少人数のスタッフでもスクリプトなしで、視覚的にこのデータを2か所目、3か所目へコピーできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## コピーが1つでは足りない理由

共有ドライブに15年分の案件フォルダがあり、ご遺族から送られる写真用にDropboxアカウントも使っている葬儀社を考えてみましょう。ディスク故障、誤削除、ログイン情報の流出のいずれかが起きれば、すべての案件が一度に影響を受けます。堅実な構成は、プライマリコピー、オフサイトのクラウドコピー、そして独立した2つ目のクラウドまたはローカルドライブです。

RcloneViewは、Google Drive、OneDrive、Dropbox、Backblaze B2、Wasabi、ローカルドライブや外付けディスクなど、90以上のプロバイダーに接続できます。業務用ドライブとオブジェクトストレージのバケットを組み合わせれば、バックアップを元データとは別のアカウント・別のプロバイダーに保管できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewで葬儀社のバックアップ用にクラウドとローカルのリモートを追加" class="img-large img-center" />

## 繰り返し使えるバックアップジョブを作成する

4ステップのウィザードから**Sync**または**Copy**ジョブを作成します。ソースは案件記録フォルダ、宛先はバックアップ用リモートです。ソース側での削除を反映させたくない場合はCopyを使用してください。まず**Dry Run**を実行して、コピーまたは削除される内容を確認します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewで案件フォルダをバックアップ用クラウドにコピー" class="img-large img-center" />

PLUSライセンスでは、ウィザード最後のステップでcrontab形式のスケジュール設定が追加されるため、閉店後に毎晩ジョブを実行できます。Job Historyには各実行のステータス、サイズ、ファイル数が記録されるので、バックアップが実行されている証跡として役立ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewで夜間バックアップジョブをスケジュール" class="img-large img-center" />

## 機微な記録を保護する

ご家族や金銭に関わる情報は暗号化に値します。バックアップ先の上に**Crypt**仮想リモートを作成すると、RcloneViewはファイル名、フォルダ名、内容を、マシンから送信される前に暗号化します。Cryptのパスワードは事務所のコンピューターとは別の場所に保管してください。パスワードがなければデータを復号できません。

バックアップが元データと一致しているか確認するため、定期的に**Folder Compare**を使いましょう。左側のみに存在するファイルはまだコピーされていないものを示し、サイズが異なるファイルは不完全なアップロードを示します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compareで葬儀社のバックアップを検証" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **New Remote**でメインのストレージとバックアップ先を追加します。
3. 機微な案件ファイルのために、宛先をCryptリモートで包みます。
4. Copyジョブを作成してDry Runを実行し、スケジュールする（PLUS）か、葬儀のたびに実行します。

作成者よりも長く残る記録には、特定のアカウントよりも長く続くバックアップ計画が必要です。

---

**関連ガイド:**

- [Cloud Storage for Law Firms — Secure Client Files with RcloneView](https://rcloneview.com/support/blog/cloud-storage-law-firms-rcloneview)
- [Cloud Storage for Tax Preparers](https://rcloneview.com/support/blog/cloud-storage-tax-preparers-rcloneview)
- [Encrypt Cloud Backups with a Crypt Remote](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />

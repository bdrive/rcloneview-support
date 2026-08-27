---
slug: manage-china-mobile-cloud-sync-backup-rcloneview
title: "China Mobileストレージの管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - jay
description: "China MobileのS3互換オブジェクトストレージをRcloneViewに接続し、クロスプラットフォームでの閲覧、ドラッグ&ドロップ転送、スケジュールバックアップジョブを利用しましょう。"
keywords:
  - China Mobile オブジェクトストレージ
  - China Mobile クラウドストレージ 管理
  - S3互換ストレージ GUI
  - RcloneView China Mobile
  - China Mobile オブジェクトストレージ 同期
  - S3互換ストレージ バックアップ
  - China Mobile Ecloud EOS
  - オブジェクトストレージ ファイルマネージャー
  - マルチクラウド GUIクライアント
  - S3エンドポイント アクセスキー設定
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# China Mobileストレージの管理 — RcloneViewでファイルを同期・バックアップ

> ターミナルに触れることなく、他のあらゆるクラウドと同じウィンドウでChina MobileのS3互換オブジェクトストレージを閲覧、転送、バックアップできます。

China MobileのS3互換オブジェクトストレージでインフラを運用するチームは、多くの場合、生のCLI呼び出しや使い捨てのスクリプトでこれを管理し、他のクラウド環境とは切り離されたままになりがちです。RcloneViewはこれを他のS3互換リモートと同様に扱います — 同じエクスプローラー、同じ同期ジョブ、同じフォルダ比較 — そのため、China Mobile上のバケットがGoogle Drive、Backblaze B2、あるいはローカルディスクと並んで1つのインターフェース内に配置されます。S3、Azure、Backblaze B2はFREEライセンスで完全な読み書きアクセスが可能で、S3互換エンドポイントであれば同様です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## China Mobileオブジェクトストレージの接続

China Mobileのオブジェクトストレージは、RcloneViewがWasabi、MinIO、Cloudflare R2に使用するのと同じ経路、rcloneのS3プロトコルを通じてアクセスされます。New Remote画面でS3互換プロバイダータイプを選択し、Access Key ID、Secret Access Key、サービスのEndpointの3つの値を入力します。OAuthフローはありません — 資格情報を直接入力する方式のため、エンドポイント文字列を再確認してください。新しいリモートが最初の接続テストに失敗する最も一般的な原因は、このタイプミスです。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでChina Mobile S3互換リモートを追加する様子" class="img-large img-center" />

リモートが接続されると、他のすべてのストレージタイプと同様にExplorerパネルにタブとして表示されます。ローカルディスク、別のクラウド、あるいは全く別のバケットなど、1〜4パネルのレイアウトを使って2番目のパネルと並べて開くことができます。

## ファイルの閲覧と転送

リモートを開いた状態で、File Listはローカルのファイルマネージャーで見慣れたのと同じ列でバケットとオブジェクトを表示します: 名前、種類、更新日、サイズ。右クリックでCopy、Cut、Paste、Rename、New Folder、Download、Uploadを利用できます。また、Ctrl+ClickとShift+Clickで複数選択してから一括操作を行うこともできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="China Mobileオブジェクトストレージと他のリモート間でのファイル転送" class="img-large img-center" />

ドラッグ&ドロップはシンプルなルールに従います: 同じリモート内でファイルを移動すると位置が変わり、異なる2つのリモート間でドラッグするとコピーされます。これにより、オブジェクトストレージと他のクラウド間の臨時転送は、ローカルに一旦ダウンロードするのではなく、パネル間で選択項目をドラッグする作業になります。

## 定期バックアップのスケジュール設定

繰り返し行う作業であれば、Job Managerの4ステップウィザードが単発の転送を保存済みジョブに変えてくれます: ソースと宛先を選び、転送の同時実行数とリトライ動作を調整し、最大ファイルサイズや経過時間といったフィルターを適用した上で — PLUSライセンスでは — crontab形式のスケジュールを設定します。実行前にコピーまたは削除される内容を正確にプレビューするには、まずDry Runを実行しましょう。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewでChina Mobileオブジェクトストレージ用のバックアップジョブをスケジュール設定する様子" class="img-large img-center" />

その後Job Historyがすべての実行を記録します — ステータス、所要時間、転送速度、ファイル数 — 生のログを掘り返さなくても、何がいつ移動したかの記録が残ります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. New Remoteを開き、S3互換プロバイダータイプを選択して、China MobileのAccess Key ID、Secret Access Key、エンドポイントを入力します。
3. Explorerでバケットを閲覧し、他のリモートとの手動コピーをテストします。
4. 繰り返し行う転送があれば、Job Managerで同期ジョブを作成し、最初の実行前にDry Runを実行します。

China Mobileオブジェクトストレージが1つのエクスプローラー内で他のリモートと並ぶと、データの移動はスクリプトを書く作業ではなく、ドラッグ&ドロップの作業になります。

---

**関連ガイド:**

- [RackCorpオブジェクトストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-rackcorp-object-storage-cloud-sync-rcloneview)
- [Scalewayオブジェクトストレージの管理 — RcloneViewでクラウド同期・バックアップ](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Cephオブジェクトストレージの管理 — CephクラスタのためのS3互換GUI、RcloneView](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)

<CloudSupportGrid />

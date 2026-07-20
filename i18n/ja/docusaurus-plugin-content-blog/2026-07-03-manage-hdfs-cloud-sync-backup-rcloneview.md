---
slug: manage-hdfs-cloud-sync-backup-rcloneview
title: "HDFSストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - kai
description: "Hadoop Distributed File System（HDFS）クラスタをRcloneViewに接続して、90以上のクラウドプロバイダーにまたがるビッグデータストレージを閲覧、同期、バックアップします。"
keywords:
  - hdfs rcloneview
  - manage hdfs cloud storage
  - hadoop distributed file system gui
  - hdfs to cloud migration
  - hdfs cloud backup
  - sync hdfs to cloud storage
  - hdfs rclone gui
  - hybrid data lake cloud sync
  - on-prem hadoop cloud backup
tags:
  - RcloneView
  - self-hosted
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HDFSストレージを管理 — RcloneViewでファイルを同期・バックアップ

> Hadoopクラスタには何年分もの処理済みデータが蓄積されていますが、そのデータをオンプレミスストレージとクラウドの間で移動するには、通常スクリプトやCLIツールを使う必要があります — RcloneViewはHDFSに視覚的な操作環境を提供します。

Hadoop Distributed File System（HDFS）は、無数のオンプレミスのビッグデータパイプラインを支えるストレージ層ですが、Hadoopエコシステムの外からそのデータを確認、転送、アーカイブするための使いやすい方法は備わっていません。RcloneViewはSFTP、FTP、WebDAVと同様に、プロトコルベースのリモートとしてHDFSに接続できるため、データエンジニアは使い慣れたファイルエクスプローラーでクラスタの内容を閲覧し、distcpジョブやカスタムスクリプトを書くことなく、データセットをクラウドストレージとの間でやり取りできます。Windows、macOS、Linuxのいずれでも同じように動作するため、データチームのメンバーが同じOSを使っていない場合にも役立ちます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HDFSクラスタをリモートとして追加する

HDFSはRcloneViewのプロトコルベースのストレージカテゴリに属しており、SFTPやWebDAV接続で使われるのと同じNew Remoteウィザードから設定します。クラスタを追加すると、Explorerパネルに専用のタブとして表示され、クラスタのネームノード全体に保存されたデータセットを閲覧するための標準的なフォルダツリー、ファイルリスト、サムネイル表示が利用できます。右クリック操作 — コピー、ダウンロード、名前の変更、Get Size — も他のリモートとまったく同じように動作するため、`hadoop fs`コマンドに不慣れなエンジニアでも、HDFSに実際に何が保存されているかを確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an HDFS remote in RcloneView's New Remote wizard" class="img-large img-center" />

RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントかつ同期できるため、HDFSを閲覧している同じセッションで、隣のパネルにGoogle Drive、S3バケット、ローカルディスクを開いて直接比較することもできます。

## オンプレミスストレージとクラウドオブジェクトストレージを橋渡しする

HDFSをRcloneViewに接続する最も一般的な理由は、コールドデータや処理済みデータを、容量に制約のある高価なクラスタから、長期保管に適した安価なクラウドストレージへ移動することです。「Modifying destination only」方向の一方向同期ジョブを使えば、HDFSの出力 — 処理済みデータセット、モデル学習の成果物、ログアーカイブ — をソースに触れることなくS3、Azure Blob、Backblaze B2バケットにコピーできます。同期ウィザードのステップ3にあるフィルタリング設定を使うと、ジョブの対象を特定のファイルタイプに絞り込んだり、Hadoopジョブが残す中間の`_SUCCESS`ファイルや一時ファイルを除外したりできるため、保存先バケットには本当に保持する価値があるものだけが残ります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HDFS cluster data to cloud object storage in RcloneView" class="img-large img-center" />

大規模なデータセットの場合、Advanced Settingsでファイル転送数とマルチスレッド転送数を調整することで、クラスタと転送先の間の利用可能な帯域幅を最大限に活用できます。一方で、比較フェーズ中にネームノードへ不要な読み取り負荷をかけないよう、等価性チェッカーの数は控えめに保つとよいでしょう。

## 定期的なアーカイブジョブをスケジュールする

データパイプラインは一度きりで終わることはほとんどありません。PLUSライセンスのユーザーは、HDFS同期ジョブにcrontab形式のスケジュールを設定できるため、各バッチ実行後に新たに生成された出力を、手動で転送を開始することを誰かが覚えておく必要なく、自動的にクラウドストレージへミラーリングできます。Job Historyはすべての実行を記録するため — ステータス、転送サイズ、所要時間 — 各データセットがいつクラスタを離れ、どこに到達したかを正確に示す監査証跡がチームに提供されます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring HDFS to cloud storage sync job in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. プロトコルベースのストレージオプションを使って、HDFSクラスタを新しいリモートとして追加します。
3. Explorerパネルでクラスタを閲覧し、データセットと権限が正しいことを確認します。
4. 一時ファイルを除外するフィルタを設定した上で、アーカイブ用のクラウド転送先への一方向同期ジョブをセットアップします。

HDFSをクラウドリモートと同じウィンドウに取り込むことで、スクリプトに頼ったエラーの起きやすいエクスポート作業を、監視・スケジュール可能な反復可能なジョブへと変えられます。

---

**関連ガイド:**

- [MinIOストレージを管理 — RcloneViewでセルフホスト型クラウド同期](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [データサイエンティストのためのクラウドストレージ — RcloneViewでデータセットを効率化](https://rcloneview.com/support/blog/cloud-storage-data-scientists-rcloneview)
- [AI学習用データセットパイプライン — RcloneViewで構築・同期](https://rcloneview.com/support/blog/ai-training-dataset-pipeline-rcloneview)

<CloudSupportGrid />

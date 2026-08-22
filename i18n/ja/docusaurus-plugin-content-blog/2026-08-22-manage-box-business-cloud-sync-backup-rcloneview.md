---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Box for Businessストレージを管理する — RcloneViewで同期とバックアップ"
authors:
  - robin
description: "Box for BusinessをRcloneViewに接続して、エンタープライズBoxアカウントのクロスプラットフォームファイル閲覧、クラウド間同期、スケジュールバックアップを利用しましょう。"
keywords:
  - box for business
  - box エンタープライズ ストレージ
  - rcloneview box business
  - box business 同期
  - box_sub_type enterprise
  - エンタープライズ クラウドストレージ gui
  - box チームアカウント バックアップ
  - ビジネス クラウドストレージ管理
  - box business 移行
  - マルチクラウド ファイル管理
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box for Businessストレージを管理する — RcloneViewで同期とバックアップ

> Box for BusinessのエンタープライズアカウントをRcloneViewに接続し、管理している他のすべてのクラウドと並べて、共有された社内フォルダを閲覧・同期・バックアップしましょう。

Box for Businessアカウントは、単一の個人アカウントではなく、エンタープライズが管理するフォルダを中心にコンテンツを整理します。そのため、標準のBox接続が正しく動作するには追加の設定が1つ必要です。RcloneViewはこれを直接処理し、IT管理者がBoxのWebアプリと別の同期クライアントを行き来することなく、1つのウィンドウでエンタープライズBoxコンテンツを閲覧、転送、保護できるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box for Businessリモートを設定する

Box for Businessアカウントの追加は、個人用Box接続と同じ手順で始まります。New Remoteをクリックし、Boxを選択して、ブラウザでOAuthログインを完了してください。違いは追加設定が1つあることだけです — `box_sub_type = enterprise` — この設定により、リモートは個々のユーザー領域ではなくエンタープライズアカウント構造に向けられます。この設定が適用されると、エンタープライズアカウントのフォルダは他のリモートと同様にExplorerパネルに読み込まれます。

マウント専用ツールとは異なり、RcloneViewはFREEライセンスでもフォルダの同期と比較ができるため、Boxを他の部門のクラウドと一緒に管理する管理者は、ファイルを移動するためだけに別のアプリケーションを用意する必要がありません。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## エンタープライズフォルダを閲覧する

接続後、File Explorerパネルには、他のすべてのリモートで使われているのと同じName、Type、Modified date、Sizeの列とともに、エンタープライズのフォルダ構造が表示されます。折りたたみ可能なフォルダツリーもあり、深い部門階層を移動できます。パンくずパスバーのCopy Full Pathオプションは`remote:path`形式でパスを出力し、内蔵のrclone Terminalに場所を渡してすばやく`rclone about`のストレージ確認を行う際に便利です。

Ctrl+ClickとShift+Clickによる複数選択を使うと、アカウント全体を確認しなくても、大規模なエンタープライズ領域から特定のプロジェクトフォルダだけを取り出せます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Box for Business enterprise folders in RcloneView Explorer" class="img-large img-center" />

## エンタープライズデータを2つ目のクラウドにバックアップする

エンタープライズファイルを単一のプロバイダーだけに保管することは、多くのIT部門が避けたいリスクです。そのため、Box for Businessのコンテンツをセカンダリコピーとして、Amazon S3やBackblaze B2、あるいは他のクラウドにミラーリングするのはよくあるパターンです。RcloneViewの4ステップSyncウィザードがこれをカバーします。Box for Businessリモートをソースとして選び、宛先リモートを選択し、同期方向を一方向に設定すると、バックアップ先は上流に一切触れずにソースを反映します。Filtering設定を使えば、サイズの大きいメディアを除外したり、一定の期間より新しいファイルだけにジョブを絞り込んだりできるため、バックアップの対象を実際に重要なものだけに保てます。

最初のフル同期の前にDry Runを実行すると、コピーおよび削除されるファイルの正確な一覧が表示されます。エンタープライズアカウント全体のデータを移動する前に、確認しておく価値があります。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Box for Business backup job in RcloneView" class="img-large img-center" />

## 定期バックアップを自動化する

PLUSライセンスのユーザーは、Box for Businessのバックアップジョブにcrontab形式のスケジュールを設定し、手動操作なしで毎晩または毎週実行できます。その後、Job Historyはすべての実行について実行タイプ、所要時間、ステータス、転送された合計サイズを記録するため、管理者はBox自体の管理コンソールを掘り下げなくても確認できる記録を得られます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. 新しいBoxリモートを追加し、設定中に`box_sub_type = enterprise`を設定します。
3. Explorerパネルでエンタープライズフォルダを閲覧し、必要な部門にアクセスできることを確認します。
4. エンタープライズデータをセカンダリクラウドにミラーリングするSyncジョブを作成し、PLUSライセンスであればスケジュールを設定します。

正しく設定されたBox for Businessリモートにより、RcloneViewは、そうでなければ1か所にしか存在しない会社のデータのための実用的な安全策になります。

---

**関連ガイド:**

- [RcloneViewでBoxストレージを管理する — ファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [BoxからOneDriveへ移行する — RcloneViewでファイルを転送](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)
- [Boxストレージをネットワークドライブとしてマウントする — RcloneViewを使用](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />

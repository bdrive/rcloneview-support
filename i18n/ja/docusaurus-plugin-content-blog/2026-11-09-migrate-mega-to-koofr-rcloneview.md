---
slug: migrate-mega-to-koofr-rcloneview
title: "MEGAからKoofrへ移行 — RcloneViewでファイルを転送"
authors:
  - casey
description: "RcloneViewでMEGAからKoofrへ移行します。両方のリモートを接続し、Dry Runでプレビューし、クラウド間コピーを実行して、Folder Compareで結果を検証します。"
keywords:
  - MEGAからKoofrへ移行
  - MEGA Koofr 転送
  - MEGA Koofr 移行
  - MEGAからKoofrへファイルを移動
  - RcloneView MEGA
  - RcloneView Koofr
  - クラウド間転送
  - MEGA 代替 ヨーロッパのストレージ
tags:
  - RcloneView
  - mega
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# MEGAからKoofrへ移行 — RcloneViewでファイルを転送

> 手動のダウンロードと再アップロードの代わりに、プレビューと検証ができるクラウド間ジョブで、MEGAアカウントのファイルをKoofrへ移します。

MEGAから長年のファイルを移すには、通常ノートPCにダウンロードしてから再度アップロードする必要があり、作業が二重になり、ネットワークが少し途切れるだけで失敗します。RcloneViewなら、MEGAとKoofrを並べて接続し、1つのジョブとして転送できます。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントおよび同期でき、Windows、macOS、Linuxで動作します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

Remoteタブを開き、New Remoteをクリックします。MEGAは認証情報の入力方式なので、アカウントのメールアドレスとパスワードを入力します。Koofrもプロバイダー一覧から同じ方法で追加します。両方がRemote Managerに表示されたら、2つのExplorerパネルで開いて、ソースと宛先を並べて確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでMEGAとKoofrのリモートを追加" class="img-large img-center" />

まずMEGAのツリーを確認してください。すべてを移すのか、特定のフォルダーだけなのかを決めます。範囲を絞ると、最初の実行が速く、確認もしやすくなります。

## プレビューしてから転送

MEGAパネルからKoofrパネルへフォルダーをドラッグできます。異なるリモート間のドラッグはコピーとして実行されるため、元のMEGAファイルはそのまま残ります。大規模な移行では、代わりにSyncまたはCopyジョブを作成します。最初にDry Runを実行すると、コピーされるファイルが一覧表示されるため、何かが書き込まれる前に宛先パスの誤りに気づけます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="MEGAからKoofrへのクラウド間転送" class="img-large img-center" />

ジョブのAdvanced Settingsで、同時ファイル転送数を調整できます。どちらかのサービスが遅くなったりエラーを返したりし始めたら、equality checkersと転送数を下げ、一時的な失敗は再試行設定に任せてください。

## 監視と検証

速度、ファイル数、サイズを表示するTransferringタブで進行状況を確認します。ジョブが完了したら、Job Historyを開いてステータスと転送合計を確認します。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="完了したMEGAからKoofrへの転送を示すJob History" class="img-large img-center" />

最後に、左にMEGA、右にKoofrを置いてFolder Compareを使用します。左側のみのファイルと異なるファイルでフィルターして、届いていないものを見つけ、比較ビューから直接コピーできます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="MEGAとKoofr間のFolder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. RemoteタブからMEGAとKoofrのリモートを追加します。
3. CopyまたはSyncジョブを作成し、Dry Runでプレビューします。
4. ジョブを実行し、MEGA側で何かを整理する前にFolder Compareで結果を検証します。

比較結果が問題なしになるまでMEGAのコピーを保持しておけば、検証中も元のデータをそのまま利用できます。

---

**関連ガイド:**

- [KoofrからMEGAへ移行](https://rcloneview.com/support/blog/migrate-koofr-to-mega-rcloneview)
- [MEGAからpCloudへ移行](https://rcloneview.com/support/blog/migrate-mega-to-pcloud-rcloneview)
- [Koofrのクラウド同期とバックアップを管理](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)

<CloudSupportGrid />

---
slug: migrate-citrix-sharefile-onedrive-sharepoint-rcloneview
title: "RcloneViewでCitrix ShareFileからOneDriveまたはSharePointへ移行する"
authors:
  - tayson
description: "RcloneViewを使って、組織のデータをCitrix ShareFileからMicrosoft OneDriveまたはSharePointへ安全に移行 — フォルダ比較による検証とデータ損失ゼロで。"
keywords:
  - sharefile migration
  - sharefile to onedrive
  - citrix sharefile export
  - sharefile to sharepoint
  - migrate sharefile data
  - sharefile alternative
  - sharefile backup tool
  - citrix sharefile migration tool
  - sharefile to microsoft 365
  - sharefile data export
tags:
  - RcloneView
  - sharefile
  - onedrive
  - sharepoint
  - cloud-storage
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでCitrix ShareFileからOneDriveまたはSharePointへ移行する

> Citrix ShareFileからMicrosoft 365への移行をお考えですか？その移行は悪夢である必要はありません。RcloneViewは、すべてのデータを移行するための視覚的で検証可能なワークフローを提供し、データ損失ゼロを実現します。

多くの組織が、Citrix ShareFileのようなスタンドアロンソリューションをOneDrive for BusinessとSharePointに置き換え、ファイルストレージをMicrosoft 365に統合しています。しかし、長年にわたる企業データ、クライアントファイル、共有フォルダの移行は容易ではありません。RcloneViewは、この移行を制御可能、検証可能、かつ再現可能にするツールを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 企業がShareFileを離れる理由

- **統合** — Microsoft 365にはすでにOneDriveとSharePointが含まれています。ShareFileに別途料金を支払うのは冗長です。
- **連携性** — OneDriveはTeams、Outlook、Officeアプリとネイティブに連携します。
- **コスト** — ShareFileの別ライセンスを廃止することでコストを削減できます。
- **コンプライアンス** — データを1つのプラットフォームに集約することで、ガバナンスが簡素化されます。

課題は移行そのものです。ファイルの損失、フォルダ構造の破壊、アクティブユーザーへの支障なしに、すべてをどう移行するかです。

## ShareFileへの接続

1. RcloneViewを開き、**リモートを追加**をクリックします。
2. プロバイダーリストから**Citrix ShareFile**を選択します。
3. ShareFileの認証情報（OAuthまたはAPIキー）で認証します。
4. 保存すると、ShareFileのフォルダとファイルが閲覧可能になります。

<img src="/support/images/en/blog/new-remote.png" alt="Add Citrix ShareFile remote" class="img-large img-center" />

## 移行戦略：4つのフェーズ

### フェーズ1：評価

エクスプローラーでShareFileアカウントを閲覧し、規模を把握します。

- 総データ量（GB/TB）。
- ファイル数とフォルダの深さ。
- 重要なフォルダとアーカイブ可能なデータを区別する。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Assess ShareFile data for migration" class="img-large img-center" />

### フェーズ2：初回コピー

ShareFileからOneDrive/SharePointへの最初のフルコピーを実行します。

1. [OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)経由で**OneDriveをリモートとして追加**します。
2. **コピージョブを作成**：ShareFile → OneDrive。
3. **ジョブを実行**すると、フォルダ構造は自動的に保持されます。
4. 進捗をリアルタイムで監視します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor ShareFile to OneDrive transfer" class="img-large img-center" />

### フェーズ3：検証

コピー完了後、[フォルダ比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)で検証します。

- すべてのファイルが転送されたことを確認する。
- 差分を特定する。
- 不足しているファイルをコピーしてギャップを埋める。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify ShareFile migration completeness" class="img-large img-center" />

### フェーズ4：移行期間中の同期

ユーザーが移行する間、両システムを同期状態に保ちます。

1. ShareFile → OneDriveへの**日次同期ジョブをスケジュール**します。
2. ShareFileに追加された新しいファイルは自動的にOneDriveに反映されます。
3. すべてのユーザーが切り替えを完了したら、ShareFileを廃止します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during migration" class="img-large img-center" />

## 移行後：バックアップを保持する

移行後も、OneDriveデータのセカンダリバックアップを保持することを検討してください。

- オフサイトの冗長性のために、OneDriveを[AWS S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)に同期する。
- [バッチジョブ](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview)を使用して、複数の宛先へのバックアップを自動化する。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **ShareFile**と**OneDrive/SharePoint**をリモートとして追加します。
3. 移行範囲を**閲覧して評価**します。
4. 4フェーズのアプローチで**コピー、検証、同期**を行います。
5. 自信を持って**ShareFileを廃止**します。

ShareFileからMicrosoft 365への移行は、賭けである必要はありません。RcloneViewは、データ損失ゼロで制御された検証済みのプロセスを実現します。

---

**関連ガイド：**

- [ブラウザベースのログイン（OAuth）でリモートを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [リアルタイム転送監視](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />

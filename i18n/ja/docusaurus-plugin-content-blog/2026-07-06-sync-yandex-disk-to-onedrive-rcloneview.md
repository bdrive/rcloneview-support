---
slug: sync-yandex-disk-to-onedrive-rcloneview
title: "Yandex DiskをOneDriveに同期 — RcloneViewでクラウドバックアップ"
authors:
  - steve
description: "RcloneViewを使ってYandex DiskをOneDriveに同期し、1つのクロスプラットフォームGUIからスケジュールで両プロバイダー間のファイルをミラーリングします。"
keywords:
  - sync yandex disk to onedrive
  - yandex disk onedrive backup
  - yandex disk to microsoft onedrive
  - rcloneview yandex disk
  - cloud to cloud sync
  - yandex disk migration
  - onedrive backup destination
  - cross-cloud file sync
tags:
  - yandex-disk
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex DiskをOneDriveに同期 — RcloneViewでクラウドバックアップ

> Yandex Diskをソースのまま維持しつつOneDriveに作業用コピーを置くには、エクスポートして再アップロードする必要はありません — RcloneViewは両方をリモートとして接続し、フォルダをクラウド間で直接同期します。

Yandex Diskは、ロシアや近隣市場で活動するユーザーやチームにとって一般的な主要ストレージの選択肢ですが、共同作業者や下流のツールは代わりにOneDrive上のファイルを期待することがよくあります — Office連携のため、SharePointへの引き渡しのため、あるいは単に組織の他のメンバーがそこにいるためです。両者間でファイルを移動するには通常、まずすべてをローカルにダウンロードしてから再アップロードする必要があり、転送時間が倍になり、不必要にローカルディスク容量を消費します。RcloneViewは同じウィンドウ内でYandex DiskとOneDriveの両方にリモートとして接続し、両者間で直接転送を行うため、ローカルへの往復を完全にスキップできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

Yandex DiskはOAuthブラウザログインを通じてRcloneViewに接続され、Google DriveやDropboxと同じフローで、個別のAPIキーや手動でのトークン入力は不要です。OneDriveも同じ方法で接続します。両方の認証が完了したら、2つのExplorerパネルを並べて開き、一方をYandex Diskのルートに、もう一方を対象のOneDriveフォルダに向けることで、転送ジョブを設定する前に両側のフォルダ構造を確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Yandex Disk and OneDrive as remotes in RcloneView" class="img-large img-center" />

RcloneViewはFREEライセンスでもフォルダの同期と比較が可能です — 2つのクラウドプロバイダー間でファイルを移動するためだけに別途有料プランが必要になることはなく、単発の移行のためにサブスクリプションを契約したくない場合に重要なポイントです。

## 同期ジョブを設定する

同期ウィザードのステップ1で転送内容を定義します。Yandex Diskのフォルダをソースとして、OneDriveのフォルダを宛先として選択し、「Modifying destination only」を選ぶことで、元のファイルに手を加えずにOneDriveをYandex Diskと一致させる一方向ミラーになります。実際に実行する前に、Dry Runを使ってどのファイルがコピーされるかを正確にプレビューしてください — これにより、実際にデータが移動する前に命名の問題や予期しない大きなフォルダを発見できます。2つのプロバイダーはファイルメタデータの報告方法が大きく異なるため、これは実施する価値があります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

ステップ3のフィルタリング設定では、移動する必要のないファイルタイプを除外できます。最大ファイルサイズやカスタムパスの除外ルールを使うことで、大容量メディアファイルやすでに同期済みのフォルダをスキップし、OneDriveのコピーを共同作業者が実際に必要とする内容に絞り込めます。

## 転送を監視する

ジョブを実行すると、下部のInfo Viewにある「Transferring」タブでリアルタイムの進捗が表示されます。完了率、現在の転送速度、ファイル数を確認できるため、大きなYandex Diskのアーカイブが実際に転送されているのか、それとも停止しているのかを確認できます。ジョブが完了すると、Job Historyに転送された合計サイズ、所要時間、完了ステータスが記録され、後で共同作業者から特定のファイル群が転送されたかどうかを尋ねられた際に参照できる記録になります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing Job History after syncing Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. OAuthログイン経由でYandex DiskとOneDriveの両方をリモートとして接続します。
3. Yandex DiskからOneDriveへの一方向同期ジョブを設定し、まずDry Runを実行します。
4. 同期を実行し、Job Historyで転送が想定通り完了したことを確認します。

クロスクラウドのバックアップは、ローカルディスクを経由する必要はありません — 両方のプロバイダーが同じウィンドウ内で稼働していれば、ファイルは必要な場所へそのまま移動します。

---

**関連ガイド:**

- [Yandex Diskストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [OneDriveストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [RcloneViewでYandex DiskをDropboxに移行](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)

<CloudSupportGrid />

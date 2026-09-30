---
slug: migrate-yandex-disk-to-backblaze-b2-rcloneview
title: "Yandex DiskからBackblaze B2へ移行 — RcloneViewでファイルを転送"
authors:
  - morgan
description: "RcloneViewでYandex DiskからBackblaze B2へ移行：両方のリモートを接続し、コピーをドライランし、Folder Compareで検証して、堅牢なバックアップを保ちます。"
keywords:
  - Yandex DiskからBackblaze B2へ移行
  - yandex disk to b2
  - Yandex Disk バックアップ
  - Backblaze B2 移行
  - RcloneView Yandex Disk
  - クラウド間転送
  - Yandex Diskからファイルを移動
  - rclone yandex backblaze
  - クラウド移行 GUI
  - Yandex Disk ファイルのエクスポート
tags:
  - RcloneView
  - yandex-disk
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex DiskからBackblaze B2へ移行 — RcloneViewでファイルを転送

> Yandex Disk のすべてをBackblaze B2バケットにコピーし、すべてのファイルが届いたことをコマンドラインなしで確認します。

ファイルはYandex Diskにあるものの、Backblaze B2に独立したバケットベースのコピーを持ちたい場合、通常は自分のマシンを経由して手動でダウンロードし再アップロードする方法になります。RcloneViewは両方のサービスを1つのウィンドウで接続し、その間の転送を実行します。事前にドライランを行い、事後にフォルダー比較を行えます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Yandex DiskとBackblaze B2を接続する

Yandex DiskはOAuthを使用します。**New Remote**で選択すると、RcloneViewがブラウザーを開くので、サインインしてアクセスを承認します。APIキーは不要です。Backblaze B2は、Backblazeのキー管理ページで発行するApplication Key IDとApplication Keyを使用します。移行用の認証情報がほかの場所に届かないよう、保存先のバケットに限定したキーを作成してください。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

片方のExplorerパネルでYandex Diskを、もう片方でB2バケットを開きます。RcloneViewはWindows、macOS、Linuxで、90以上のプロバイダーを1つのウィンドウからマウントし同期できるため、作業中も両側が見えたままになります。

## レイアウトの計画とコピー

フォルダーをバケットにどう対応させるかを決めます。10年分のプロジェクトフォルダーを持つ小規模なデザインスタジオなら、Yandex Diskの最上位フォルダーごとに、1つのバケット内のプレフィックスとして再現すると、後でパスが読みやすくなります。先に**New Folder**で保存先フォルダーを作成しておきます。

Yandex DiskパネルからB2パネルへフォルダーをドラッグします。異なるリモート間では、ドラッグ＆ドロップはコピーになるため、元のデータはそのまま残ります。大規模な移行や繰り返し行う移行では、代わりにSyncウィザードを使います。Yandex Diskをソース、バケットのパスを保存先に設定し、ジョブ名には英字、数字、ハイフン、アンダースコアを使用します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Yandex Disk to Backblaze B2" class="img-large img-center" />

## Dry Runと転送の監視

まず**Dry Run**を実行します。コピーされるファイルと削除されるファイルが一覧表示されるため、ソースや保存先の誤りを被害が出る前に見つけられます。保存先をソースに合わせて変更する片方向同期では、特に重要です。

Advanced Settingsで同時ファイル転送数を調整し、ハッシュとサイズによる検証が必要な場合はチェックサム比較を有効にします。まずは控えめな設定で始め、転送が安定したら同時実行数を上げてください。進行状況、速度、ファイル数は**Transferring**タブで確認できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to B2 transfer in real time" class="img-large img-center" />

## Folder Compareで検証する

ジョブが完了したら、Homeタブから**Compare**を開き、左にYandex Disk、右にB2を置きます。左側のみ、または差分のあるファイルで絞り込んで不足を見つけ、Copy rightで補います。Job Historyには各実行のステータス、サイズ、速度、ファイル数が記録されるため、移行の記録として役立ちます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare between Yandex Disk and Backblaze B2" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. OAuthでYandex Diskを、バケットに限定したアプリケーションキーでBackblaze B2を追加します。
3. Dry Runを実行し、その後コピーまたは同期ジョブを開始します。
4. Folder Compareで、バケットがソースと一致していることを確認します。

オブジェクトストレージに検証済みの2つ目のコピーがあれば、Yandex Diskはファイルが存在する唯一の場所ではなくなります。

---

**関連ガイド：**

- [HiDriveからBackblaze B2へ移行](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [Yandex DiskからDropboxへ移行](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)
- [Dry Run：転送前に同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />

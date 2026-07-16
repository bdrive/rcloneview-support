---
slug: migrate-koofr-to-onedrive-rcloneview
title: "KoofrからOneDriveへ移行 — RcloneViewでファイルを転送"
authors:
  - jay
description: "RcloneViewを使ってKoofrからMicrosoft OneDriveへファイルを移動します。安全かつ正確なクラウド間移行のための、視覚的でステップバイステップのガイドです。"
keywords:
  - Koofr to OneDrive migration
  - migrate Koofr to OneDrive
  - Koofr OneDrive transfer
  - cloud to cloud migration
  - RcloneView Koofr
  - RcloneView OneDrive
  - rclone Koofr OneDrive GUI
  - cloud file migration tool
  - OneDrive migration software
  - Koofr cloud transfer
tags:
  - koofr
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# KoofrからOneDriveへ移行 — RcloneViewでファイルを転送

> RcloneViewを使えば、Koofrからマイクロソフト OneDriveへの移行を、シンプルかつ検証可能な形で行えます。フォルダ比較、ドライラン(事前確認)プレビュー、ライブ転送モニタリングが標準で備わっています。

Koofrはプライバシーを重視した欧州発のクラウドストレージプロバイダーで、データ主権とシンプルなインターフェースを重視するユーザーに人気があります。OneDriveはMicrosoft 365と緊密に統合されており、チームがWord、Excel、Teamsでのコラボレーションを標準化する際の移行先としてよく選ばれます。この2つのプロバイダー間の移動は、単にファイルをコピーするだけでは済みません。課題は、それを確実に行うことです。ネストしたフォルダ構造を維持し、ファイル名のエッジケースを処理し、すべてのファイルが無事に到着したことを確認する必要があります。RcloneViewは、データをローカルディスク経由で送ることなく、両方のプロバイダーに直接接続して、移行プロセス全体を視覚的に管理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでKoofrとOneDriveを接続する

両方のリモートは、RcloneViewの**Remote**タブにある**New Remote**ウィザードから設定します。まずプロバイダー一覧からKoofrを選択し、アカウントの認証情報を入力して追加します。次にOneDriveを追加します。OneDriveはOAuth認証を使用するため、ブラウザウィンドウが開き、Microsoftアカウントでサインインするだけで、トークンを手動で扱うことなく自動的に接続が確立されます。

両方のリモートが保存されると、デュアルペインのファイルエクスプローラーに独立したタブとして表示されます。左パネルでKoofrを、右パネルでOneDriveを開くと、両方のフォルダツリーを並べて確認できます。このレイアウトは、共有プロジェクトの階層を移行するチームにとってすぐに役立ちます。1つのファイルを移動する前に、OneDrive側の移行先フォルダ構造が想定通りであることを確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and OneDrive remotes in RcloneView" class="img-large img-center" />

## 移行前のコンテンツ監査

**Home**タブから起動する RcloneViewの**Folder Compare**ツールは、クラウド移行の事前チェックに効果的です。左側にKoofrの移行元フォルダを、右側に対応するOneDriveの移行先フォルダを指定します。比較ビューはすべてのファイルを分類します。左側のみ(まだOneDriveに存在しない)、右側のみ(すでに存在する、または以前の部分的な実行によるもの)、同一(サイズが一致)、相違(サイズの不一致があり、潜在的な競合を示す)です。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Koofr and OneDrive folder contents before migration in RcloneView" class="img-large img-center" />

数千件のドキュメントやデザインファイルを移行するチームにとって、この比較ステップは、通常は数週間後にサポートチケットとして表面化するようなケースを事前に発見できます。たとえば、パス内の特殊文字が原因で気づかないうちに失敗したフォルダや、前回の試行によってすでに部分的に移行されていたファイルなどです。比較によって移行元と移行先が想定通りの状態であることを確認できたら、同期ジョブに進みます。

## クラウド間転送の実行

**Job Manager**で新しいジョブを作成し、Koofrのフォルダを移行元、対象のOneDriveフォルダを移行先として設定し、ジョブタイプとして**Sync**を選択します。RcloneViewは2つのプロバイダー間で直接ファイルを転送します。データはKoofrからOneDriveへ、ローカルに一時保存されることなく流れるため、インターネットの帯域幅使用量はクラウド間の経路のみに抑えられ、すべてを二重にダウンロードすることを避けられます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer from Koofr to OneDrive in RcloneView" class="img-large img-center" />

Advanced Settingsのステップでは、**チェックサム検証**を有効にして、転送中の破損を検出できるようにします。まず**Dry Run**(ドライラン)を実行してください。これにより、実際に何も移動する前に、コピーまたは削除されるファイルの完全な一覧をプレビューでき、予期しない削除やパスの不一致を事前に発見する最後の機会となります。

## 進捗のモニタリングと完了確認

**Transferring**タブでは、ジョブの実行中にリアルタイムの転送速度、処理済みファイル数、転送済みの総バイト数を確認できます。完了後、**Job History**ログには、開始時刻、所要時間、転送サイズ、最終ステータスとともに、すべての実行が記録されます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Koofr to OneDrive migration progress in RcloneView" class="img-large img-center" />

移行が完了したら、もう一度**Folder Compare**を実行し、「left-only」のファイルでフィルタリングします。件数がゼロであれば、移行は完了です。ファイルが残っている場合は、比較ビューにどのファイルかが正確に表示されるため、データセット全体を再移行するのではなく、特定のサブフォルダに限定してジョブを再実行できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote tab > New Remote**からKoofrのリモートを追加し、アカウントの認証情報を入力します。
3. OAuthのブラウザログインを使用してOneDriveのリモートを追加します。トークンを手動で扱う必要はありません。
4. **Folder Compare**を使って移行元と移行先を監査し、完全な移行を実行する前にDry Run同期を行います。

RcloneViewを使ってKoofrからOneDriveへ移行することで、移行前の比較からジョブ履歴ログに至るまで、完全な監査証跡が得られます。これにより、すべてのファイルが確実に移行されたことを自信を持って確認できます。

---

**関連ガイド:**

- [RcloneViewでKoofrからGoogle Driveへ移行する](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [RcloneViewでKoofrからBackblaze B2へ移行する](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)
- [RcloneViewでBoxからOneDriveへ移行する](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />

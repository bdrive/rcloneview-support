---
slug: migrate-box-to-proton-drive-rcloneview
title: "Box から Proton Drive へ移行 — RcloneView でファイルを転送する"
authors:
  - casey
description: "RcloneView で Box のファイルを Proton Drive に移動しましょう。両方のクラウドを接続し、Dry Run でプレビューし、フォルダーをコピーして、Folder Compare で移行を検証します。"
keywords:
  - box から proton drive へ移行
  - box proton drive 転送
  - box のファイルを proton drive に移動
  - box 移行ツール
  - proton drive 移行
  - クラウド間移行
  - 暗号化クラウドストレージ 移行
  - RcloneView box
  - RcloneView proton drive
tags:
  - RcloneView
  - box
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box から Proton Drive へ移行 — RcloneView でファイルを転送する

> すべてを一度ノートパソコンにダウンロードすることなく、Box のフォルダーを Proton Drive のエンドツーエンド暗号化ストレージへ移しましょう。

チームやフリーランサーは、コラボレーション機能を目当てに Box から始め、その後プライバシー重視の Proton Drive に機密性の高いアーカイブを移すことがよくあります。手作業で行うと、Box から何ギガバイトもダウンロードし、ブラウザーで再アップロードする必要があります。RcloneView なら両方のサービスを 1 つのウィンドウで接続できるので、フォルダーを直接コピーし、結果を確認し、後から追加されるファイル向けに繰り返し使えるジョブを残せます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box と Proton Drive を接続する

**Remote tab > New Remote** を開き、まず Box を追加します。Box は OAuth を使うため、ブラウザーウィンドウが開いたらサインインしてアクセスを承認するだけです。API キーをコピーする必要はありません。組織で Box for Business を使っている場合は、リモート設定で `box_sub_type = enterprise` を指定して、RcloneView がエンタープライズのフォルダーを参照できるようにします。

次に、Proton のメールアドレスとパスワード、アカウントで 2FA を有効にしている場合は 2FA コードを使って Proton Drive を追加します。Proton Drive のサポートには rclone v1.69 以降が必要です。RcloneView に同梱されている組み込み rclone はこの要件を満たしており、使用中のバージョンはフッターに表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で Box と Proton Drive のリモートを追加" class="img-large img-center" />

## 転送を計画する

左の Explorer パネルで Box を、右で Proton Drive を開きます。Box の最上位フォルダーに **Get Size** を使って移動するデータ量を確認し、残したい構成を反映した転送先のフォルダー構成を Proton Drive に作成します。

Box Notes などの Box 独自のドキュメントは通常のファイルではありません。同期ウィザードの **Filtering Settings** にある定義済みの **Box Docs** フィルターを使えば、転送中に気づくのではなく、意図的に扱えます。これらの形式から必要なものは、移行前に Box 内でエクスポートしておきましょう。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView でクラウド間転送のために並べて開いた Box と Proton Drive" class="img-large img-center" />

## 移行を実行する

少数のフォルダーなら、Box パネルから Proton Drive パネルへドラッグします。異なるリモート間のドラッグはデータをコピーします。全体を移行する場合は、Box をソース、Proton Drive を転送先とする **Sync** ジョブを作成します。Proton Drive はクライアント側でファイルを暗号化するため、控えめな同時実行数から始めるのが無難です。エラーが出る場合は Advanced Settings でファイル転送数を下げられます。

必ず最初に **Dry Run** をクリックしてください。コピーされるものと削除されるものが一覧表示されるので、誤ったミラーリングから既存の Proton Drive のコンテンツを守れます。その後ジョブを実行し、**Transferring** タブで進捗、速度、ファイル数を確認します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView の Transferring タブで Box から Proton Drive への転送を監視" class="img-large img-center" />

## Box を解約する前に検証する

ジョブが完了したら、片側に Box フォルダー、もう片側に Proton Drive フォルダーを置いて **Compare** を開きます。左側のみのファイルは移行されなかったものを示すので、Copy right で不足分を補えます。Job History には各実行のステータス、サイズ、ファイル数が記録されます。

RcloneView は Windows、macOS、Linux で 1 つのウィンドウから 90 以上のプロバイダーをマウント・同期できるため、次の移行でも同じ設定がそのまま使えます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="完了した Box から Proton Drive への移行を確認する Job History" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. ブラウザーでのサインインで Box を、メールアドレス・パスワード・任意の 2FA で Proton Drive を追加します。
3. Box から Proton Drive への Sync ジョブを作成し、Dry Run でプレビューします。
4. ジョブを実行し、Box アカウントを閉じる前に Folder Compare で結果を確認します。

慎重に検証した移行なら、取りこぼしがないことを確かめたうえで暗号化ストレージへ安心して移れます。

---

**関連ガイド:**

- [Box ストレージの管理 — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Proton Drive の管理 — RcloneView でクラウド同期](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [RcloneView で Dropbox から Proton Drive へ移行](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)

<CloudSupportGrid />

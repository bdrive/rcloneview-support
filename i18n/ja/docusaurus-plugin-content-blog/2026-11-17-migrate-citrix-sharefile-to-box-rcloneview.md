---
slug: migrate-citrix-sharefile-to-box-rcloneview
title: "Citrix ShareFileからBoxへ移行 — RcloneViewでファイルを転送する"
authors:
  - morgan
description: "RcloneViewでCitrix ShareFileからBoxへ移行しましょう。両方のリモートを接続し、Dry Runでプレビューし、クラウド間でフォルダーをコピーして、Folder Compareで検証します。"
keywords:
  - Citrix ShareFile Box 移行
  - ShareFileからBoxへの移行
  - Citrix ShareFile Box 転送
  - クラウド間移行ツール
  - RcloneView ShareFile
  - Box for Business 移行
  - 企業向けファイル移行 GUI
  - ShareFileフォルダーをBoxへ移動
  - rclone ShareFile Box
tags:
  - RcloneView
  - sharefile
  - box
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Citrix ShareFileからBoxへ移行 — RcloneViewでファイルを転送する

> ShareFileのフォルダーツリーをクラウド間でBoxへ移動し、すべての変更を事前にプレビューし、結果を並べて検証できます。すべて1つのGUIで行えます。

組織がBoxに集約する際には、契約書、顧客向け納品物、プロジェクトフォルダーを含むShareFileのアーカイブも一緒に移す必要があります。すべてをノートPCにダウンロードしてから再アップロードする方法は、時間がかかりミスも起きやすくなります。RcloneViewは両方のサービスをリモートとして接続し、rclone経由で転送を実行するため、ファイルは2つのクラウド間で直接移動し、進行状況は1つのウィンドウで確認できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Citrix ShareFileとBoxを接続する

**Remote tab > New Remote** を開き、Citrix ShareFileを選択します。ShareFileではサインインに加えて **Root Folder ID** が必要です。これはrcloneにどのフォルダーをリモートの最上位として扱うかを指定します。部署ごとに移行する予定なら、ルートフォルダーごとに別のリモートを作成すると、各ジョブを小さく監査しやすく保てます。

次にBoxを追加します。BoxはOAuthを使用します。RcloneViewがブラウザーを開き、サインインすると接続が保存され、コピーするAPIキーはありません。組織でBox for Businessを使用している場合は、設定時に `box_sub_type = enterprise` を指定して、リモートが企業アカウントを対象にするようにします。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Citrix ShareFile and Box remotes in RcloneView" class="img-large img-center" />

左パネルでShareFileを、右パネルでBoxを開きます。両方を並べて閲覧すれば、何かを移動する前に想定どおりのフォルダーが見えるかをすばやく確認できます。

## 転送を計画してプレビューする

1回限りの移行には、慎重な選択として **Copy** ジョブが適しています。Boxにすでにあるものを削除せずにファイルを追加します。**Home tab > Sync** またはJob Managerからジョブを作成し、ShareFileのフォルダーをソース、Boxのフォルダーを宛先に選び、`sharefile-legal-to-box` のようなジョブ名を付けます。

Advanced Settingsのステップでは、この組み合わせではチェックサムをオフのままにします。チェックサム比較には両側で共通のハッシュタイプが必要ですが、ShareFile(MD5)とBox(SHA-1)は異なるハッシュを使うため、rcloneは代わりにサイズと更新日時で比較します。一覧の取得が遅いと感じる場合は、equality checkerの数を控えめにしてください。Filteringのステップでは、大きなインストーラー(`.iso`)や残さないと決めたレガシーフォルダーを除外できます。

実行する前に **Dry Run** を使いましょう。何も転送せずにコピーされるファイルの一覧を表示するため、40,000件の顧客文書を移す法律事務所でも、まず範囲を確認できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Citrix ShareFile to Box in RcloneView" class="img-large img-center" />

## 実行、監視、検証

ジョブを開始し、**Transferring** タブで進行状況、速度、ファイル数を確認します。大規模な移行は最上位フォルダーごとに複数のジョブに分けると、1つの失敗が他をすべて止めることはありません。各実行はステータス、合計サイズ、ファイル数とともに **Job History** に記録され、移行の監査記録になります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed ShareFile to Box migration runs" class="img-large img-center" />

ジョブが完了したら、ソースと宛先で **Folder Compare** を開きます。left-onlyファイルでフィルターして届いていないものを見つけ、Copy rightで不足分を補いましょう。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying ShareFile and Box contents" class="img-large img-center" />

## はじめに

RcloneViewはWindows、macOS、Linuxで動作し、1つのウィンドウから90以上のプロバイダーをマウント・同期できます。

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. Citrix ShareFile(Root Folder ID付き)とBoxをリモートとして追加します。
3. ShareFileからBoxへのCopyジョブを作成し、まずDry Runを実行します。
4. ジョブを実行し、Folder CompareとJob Historyで結果を確認します。

計画と検証を経た移行なら、チームはフォルダーの取り残しを心配せずにBoxへ切り替えられます。

---

**関連ガイド:**

- [Citrix ShareFileストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Boxストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [RcloneViewでCitrix ShareFileからGoogle Driveへ移行する](https://rcloneview.com/support/blog/migrate-citrix-sharefile-to-google-drive-rcloneview)

<CloudSupportGrid />

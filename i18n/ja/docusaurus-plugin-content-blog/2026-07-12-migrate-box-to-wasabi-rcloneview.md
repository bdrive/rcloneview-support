---
slug: migrate-box-to-wasabi-rcloneview
title: "Box から Wasabi への移行 — RcloneView でファイルを転送"
authors:
  - casey
description: "RcloneView を使ってフォルダ比較、同期ジョブ、ドライランで、Box から Wasabi のホットクラウドストレージへ安全にファイルを移行します。"
keywords:
  - migrate Box to Wasabi
  - Box to Wasabi transfer
  - Box cloud migration
  - Wasabi hot storage
  - RcloneView Box Wasabi
  - cloud to cloud transfer tool
  - Box storage backup
  - Wasabi sync software
  - move files between clouds
  - Box S3 migration
tags:
  - box
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box から Wasabi への移行 — RcloneView でファイルを転送

> Box アカウントのファイルとフォルダを、まずローカルディスクを経由することなく、Wasabi の S3 互換ホットストレージへ直接移動します。

ドキュメントのコラボレーションのために Box を導入したチームでも、長期保存の用途では手狭になることがあり、S3 互換のオブジェクトストレージである Wasabi が、アーカイブ、メディアライブラリ、バックアップセットの次の保存先になります。RcloneView は同じウィンドウから両方のサービスに接続できるため、この移行はローカルマシンを経由した遅いダウンロード後アップロードのサイクルではなく、クラウド間の直接転送になります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box と Wasabi をリモートとして接続する

Box は OAuth 経由で追加されます。Remote タブで New Remote をクリックすると、アカウントログイン用のブラウザウィンドウが開き、認証が完了すると RcloneView が自動的に接続します。企業全体のビューが必要なビジネスアカウントでは、設定時に `box_sub_type = enterprise` を指定できます。Wasabi は S3 互換リモートタイプとして追加し、Access Key、Secret Key、対象リージョンの Wasabi エンドポイントを使用します。

両方のリモートを設定すると、Explorer 内に別々のタブとして表示され、一方のパネルで Box を、もう一方で Wasabi を開いて、何かを移動する前に両方のファイルツリーを並べて確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Wasabi remotes in RcloneView" class="img-large img-center" />

## 転送前に比較する

Folder Compare は Box の転送元フォルダと Wasabi の転送先フォルダを並べて表示し、それぞれの側で不足しているもの、すでに同一のもの、サイズが異なるものを示します。初めての移行では、これが一括同期を実行する前に Box ライブラリ全体が揃っていることを確認する最速の方法であり、転送完了後の検証パスとしても機能します。コピー後もまだ「left-only」とマークされているファイルは再確認が必要です。

Folder Compare 内からのコピーでは、転送先にまだ存在しないファイルやサイズが異なるファイルのみが対象になるため、途中で終わった移行を、すでに Wasabi にコピー済みのファイルを再コピーすることなく再開できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Box and Wasabi folders before migration" class="img-large img-center" />

## Sync で移行を実行する

一括転送では、Sync ウィザードの4つのステップで転送元/転送先の選択、転送の並行数、フィルタリングを処理します。フィルタリングは、Box の一時的なコラボレーションファイルなど、Wasabi に持ち込みたくないファイルタイプを除外するのに便利です。Dry Run では、実際に何かが移動する前に、コピーされるファイルを正確にプレビューできます。これは、Box ライブラリに数年分のコンテンツが蓄積している場合や、ミスの取り消しにコストがかかる場合に重要です。

RcloneView は Windows、macOS、Linux 上の1つのウィンドウから90以上のプロバイダーにわたるマウントと同期を行えるため、ここで Box と Wasabi に使ったのと同じワークフローを、新しいツールを覚えることなく他のリモートの組み合わせにも適用できます。同期ジョブを Job Manager に保存すると、そのステータス、転送サイズ、所要時間などの履歴が後から参照できるようになります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a sync job from Box to Wasabi in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** します。
2. Remote Manager で OAuth ログインにより Box を、S3 互換の認証情報により Wasabi を追加します。
3. Box の転送元と Wasabi の転送先の間で Folder Compare を実行し、転送前に対象範囲を確認します。
4. まず Dry Run を有効にして Sync ジョブを作成し、その後実際に実行して Transferring タブで進行状況を追跡します。

同じエクスプローラー内で両方のリモートが表示されることで、Box のライブラリを Wasabi へ移動する作業は、複数のツールを使う手間のかかる作業ではなく、単一のガイド付きワークフローになります。

---

**関連ガイド:**

- [Box ストレージを管理する — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Wasabi ストレージを管理する — RcloneView でファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Box から Google Drive への移行 — RcloneView でファイルを転送](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />

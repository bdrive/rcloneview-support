---
slug: migrate-dropbox-to-jottacloud-rcloneview
title: "Dropbox から Jottacloud への移行 — RcloneView でファイルを転送する"
authors:
  - jay
description: "RcloneView で Dropbox のファイルを Jottacloud に移動しましょう。両方のクラウドを接続し、Dry Run でプレビューし、クラウド間でコピーして、Folder Compare で結果を確認します。"
keywords:
  - dropbox jottacloud 移行
  - dropbox jottacloud 転送
  - dropbox から jottacloud へ ファイル移動
  - jottacloud 移行ツール
  - dropbox 代替 ヨーロッパ
  - クラウド間移行 GUI
  - rcloneview jottacloud
  - rclone dropbox jottacloud
  - ヨーロッパ クラウドストレージ 移行
tags:
  - RcloneView
  - dropbox
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox から Jottacloud への移行 — RcloneView でファイルを転送する

> Dropbox のフォルダをクラウド間で直接 Jottacloud に移し、旧アカウントを解約する前にすべてのファイルを確認しましょう。

ノルウェーのプロバイダーに移行するチームや家庭は、よく同じ壁にぶつかります。何年分もの Dropbox データをノートパソコンにダウンロードして再びアップロードするのは、時間がかかりリスクもあります。RcloneView は両方のアカウントを 1 つのウィンドウで接続し、rclone を通じて転送を実行するため、ローカルフォルダを経由して手作業で移す必要なく、ファイルが Dropbox から Jottacloud へ移動します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox と Jottacloud をリモートとして接続する

**Remote** タブを開き、**New Remote** をクリックします。Dropbox は OAuth を使用します。ブラウザが開いたらサインインし、RcloneView が接続を保存します。ファイルが Dropbox のチームアカウントにある場合は、rclone がビジネス用の名前空間と通信するように `dropbox_business` オプションを設定してください。

Jottacloud も同じ方法で追加します。プロバイダー一覧から Jottacloud を選び、接続の案内に従ってください。両方のリモートが表示されたら、2 つの Explorer パネルに並べて開き、転送元と転送先を同時に確認できるようにします。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で Dropbox と Jottacloud のリモートを追加する" class="img-large img-center" />

## コピーの前にフォルダ構成を計画する

`Clients`、`Archive`、`Shared Assets` に 600 GB が分散しているデザイン事務所なら、まず各トップレベルフォルダの移動先を決めましょう。右クリックメニューから Jottacloud に転送先フォルダを作成し、各 Dropbox フォルダで **Get Size** を使って、各ステップで移動するデータ量を確認します。

ちょっとした一回限りの作業なら、Dropbox パネルから Jottacloud パネルにフォルダをドラッグします。異なるリモート間のドラッグは常にコピーなので、Dropbox からは何も削除されません。大きな作業には、再実行して履歴を確認できる保存済みジョブのほうが適しています。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView での Dropbox から Jottacloud へのクラウド間転送" class="img-large img-center" />

## 繰り返し実行できる移行ジョブを作成する

Home タブで **Sync** をクリックし、転送元に Dropbox、転送先に Jottacloud を選びます。方向は一方向（「Modifying destination only」）のままにします。Advanced Settings では、マルチスレッドの既定設定を維持し、チェックサム比較はオフのままにしてください（Dropbox と Jottacloud は異なるハッシュ形式を使うため、rclone はサイズと更新日時でファイルを比較します）。持ち込む必要のないものは Filtering で除外しましょう。

まず **Dry Run** を実行します。転送先でコピーまたは削除されるすべてのファイルが一覧表示されるため、フォルダの選択ミスを何時間も無駄にする前に見つけられます。その後、本番の実行を開始し、**Transferring** タブで速度とファイル数を確認します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView で Dropbox から Jottacloud への移行ジョブを実行する" class="img-large img-center" />

移行中もメンバーが Dropbox で作業を続ける場合は、切り替え直前に同じジョブを再実行してください。新規または変更されたファイルだけが転送されます。PLUS ライセンスなら、切り替え日まで毎晩ジョブを実行するようスケジュールできます。

## Folder Compare で検証する

Dropbox を解約する前に、**Compare** をクリックして 2 つのトップレベルフォルダを開きます。左側のみのファイルとサイズが異なるファイルのフィルターをオンにします。一覧に残っているものは、届いていないか一致していないファイルです。それらを選択して **Copy right** で不足分を埋めましょう。同一のファイルだけが表示されれば、移行は完了です。**Job History** には各実行のサイズ、速度、ステータスの記録が残ります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="移行後に RcloneView で Dropbox と Jottacloud のフォルダを比較する" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. **Remote > New Remote** から Dropbox（OAuth）と Jottacloud をリモートとして追加します。
3. Dropbox から Jottacloud への一方向 Sync ジョブを作成し、**Dry Run** でプレビューします。
4. ジョブを実行し、Dropbox アカウントを廃止する前に **Compare** で結果を確認します。

RcloneView は Windows、macOS、Linux で 90 以上のプロバイダーを 1 つのウィンドウからマウント・同期できるため、移行後は同じアプリで Jottacloud をローカルドライブとしてマウントできます。

---

**関連ガイド:**

- [RcloneView で Jottacloud ストレージを管理する: 同期、バックアップ、ファイル整理](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Dropbox から Koofr への移行 — RcloneView でファイルを転送する](https://rcloneview.com/support/blog/migrate-dropbox-to-koofr-rcloneview)
- [Jottacloud の同期エラーを解決 — RcloneView でトラブルシューティング](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)

<CloudSupportGrid />

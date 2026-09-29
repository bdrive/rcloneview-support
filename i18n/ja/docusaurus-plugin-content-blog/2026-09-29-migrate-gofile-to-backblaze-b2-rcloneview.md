---
slug: migrate-gofile-to-backblaze-b2-rcloneview
title: "Gofile から Backblaze B2 への移行 — RcloneView でファイルを転送"
authors:
  - tayson
description: "RcloneView で Gofile から Backblaze B2 へ移行: 両リモートを接続し、ドライランでコピーし、Folder Compare で検証して、堅牢なバックアップを保ちます。"
keywords:
  - gofile から backblaze b2 への移行
  - gofile から b2
  - gofile バックアップ
  - backblaze b2 移行
  - RcloneView gofile
  - クラウド間転送
  - gofile ファイル転送ツール
  - gofile からファイルを移動
  - rclone gofile backblaze
  - クラウド移行 GUI
tags:
  - RcloneView
  - gofile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gofile から Backblaze B2 への移行 — RcloneView でファイルを転送

> Gofile で共有していたファイルを Backblaze B2 オブジェクトストレージへ移し、コマンドを一切書かずに全ファイルの到着を確認します。

Gofile は他の人にファイルを渡すには便利ですが、大切なファイルの唯一のコピーを置く場所には向きません。Backblaze B2 は長期保管のためのオブジェクトストレージで、バケット単位で保管内容を管理できます。RcloneView は両サービスを一つのウィンドウで接続し、一つのインターフェースからコピーできるため、ファイルを手作業でダウンロードして再アップロードする必要がありません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Gofile と Backblaze B2 を接続する

Gofile は Access Token で認証します。Gofile のプロフィールページにある API トークン欄からコピーし、**New Remote** で Gofile を選んで貼り付けてください。Backblaze B2 には Application Key ID と Application Key が必要で、Backblaze のキー管理ページで生成します。マスターキーではなく移行先バケットに範囲を限定したキーを作成すると、移行用の認証情報が必要なものだけに触れられるようになります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で Gofile と Backblaze B2 のリモートを追加" class="img-large img-center" />

両方のリモートを作成したら、一方の Explorer パネルで Gofile を、もう一方で B2 バケットを開きます。RcloneView は最大 4 つのパネルを同時に表示できるので、確認用にローカルフォルダーも開いておけます。S3、Azure、Backblaze B2 への接続は、FREE ライセンスでも読み書きが可能です。

## コピー前にレイアウトを計画する

Gofile のコンテンツをバケットにどう対応させるかを決めておきます。たとえば、12 個の Gofile フォルダーに顧客納品物を置いている写真スタジオなら、B2 バケットを一つ作り、各フォルダーを最上位のプレフィックスとして再現すると、後からパスが読みやすくなります。B2 パネルで **New Folder** を使い、先に移行先フォルダーを作成しておきましょう。

Gofile パネルから B2 パネルへフォルダーをドラッグします。異なるリモート間ではドラッグ&ドロップはコピーとして動作するため、自分で削除するまで Gofile の元ファイルはそのまま残ります。繰り返し実行する大規模な移行では、代わりに Sync ウィザードを使ってください。Gofile をソース、バケットのパスを宛先に指定し、文字、数字、ハイフン、アンダースコアでジョブ名を付けます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView での Gofile から Backblaze B2 へのクラウド間転送" class="img-large img-center" />

## Dry Run、転送、モニタリング

本番実行の前に **Dry Run** を使いましょう。コピーされるファイルと削除されるファイルが一覧表示されるため、ソースや宛先の指定ミスを実害が出る前に発見できます。片方向同期を選ぶと宛先がソースに合わせて変更されるので、Dry Run に数分かける価値があります。

Advanced Settings では、同時ファイル転送数を調整したり、チェックサム比較を有効にしたりできます。初回は控えめに始め、転送が安定していれば並列数を上げてください。進行状況、速度、ファイル数は、ウィンドウ下部の **Transferring** タブで確認できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring タブで転送の進行状況を監視" class="img-large img-center" />

## Folder Compare で検証する

転送が終わったら、Home タブから **Compare** を開き、左に Gofile、右に B2 を指定します。left-only のファイルに絞り込むと届かなかったファイルが、different のファイルに絞り込むとサイズの不一致が分かります。Copy right は、すでに一致しているファイルを再送せずに足りない分だけを補います。Job History には各実行のステータス、サイズ、所要時間が記録され、移行の記録になります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Gofile と B2 の差分を表示する Folder Compare" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. Access Token で Gofile リモートを、バケット限定のアプリケーションキーで Backblaze B2 リモートを追加します。
3. 両リモートを並べて開き、**Dry Run** を実行してから、フォルダーをコピーまたは同期します。
4. Gofile 側を整理する前に、**Compare** で欠けているファイルがないことを確認します。

B2 に検証済みのコピーがあれば、一時的な共有リンクが自分で管理できるバックアップに変わります。

---

**関連ガイド:**

- [Gofile から Google Drive への移行](https://rcloneview.com/support/blog/migrate-gofile-to-google-drive-rcloneview)
- [Gofile ストレージの管理](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [IDrive e2 から Backblaze B2 への移行](https://rcloneview.com/support/blog/migrate-idrive-e2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />

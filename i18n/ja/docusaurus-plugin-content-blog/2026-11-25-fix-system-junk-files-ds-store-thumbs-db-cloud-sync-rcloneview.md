---
slug: fix-system-junk-files-ds-store-thumbs-db-cloud-sync-rcloneview
title: "クラウド同期の .DS_Store・Thumbs.db を解消 — RcloneView でシステムファイルを除外する"
authors:
  - morgan
description: ".DS_Store、Thumbs.db、desktop.ini がクラウドバックアップを散らかさないようにしましょう。RcloneView のフィルターで同期ジョブから OS の不要ファイルを除外します。"
keywords:
  - ds_store ファイル クラウド同期
  - thumbs.db クラウドストレージ
  - システムファイル 同期 除外
  - desktop.ini クラウドバックアップ
  - rclone ds_store 除外
  - RcloneView カスタムフィルター
  - クラウド同期 不要ファイル 整理
  - クロスプラットフォーム クラウド同期 不要ファイル
  - rclone 隠しファイル フィルター
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cleanup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウド同期の .DS_Store・Thumbs.db を解消 — RcloneView でシステムファイルを除外する

> OS が生成する不要ファイルをクラウドフォルダーから締め出し、毎回の同期で実際に使うファイルだけを運びましょう。

Mac と Windows が混在するチームで同期している共有クラウドフォルダーを開くと、ほぼすべてのディレクトリに同じ招かれざる客がいます。macOS の Finder が作る `.DS_Store`、Windows エクスプローラーが作る `Thumbs.db` と `desktop.ini` です。これらはファイル一覧を見づらくし、ファイル数を水増しし、2 台のマシンが同じフォルダーに触れるたびに「異なる」ファイルとして表示されます。RcloneView を使えば、同期ジョブからこれらを除外し、すでにクラウドに入ってしまったコピーも片付けられます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## システムファイルがクラウドに現れ続ける理由

これらのファイルはコンテンツではなくメタデータです。Finder はアイコンの位置や表示設定を記憶するために `.DS_Store` を書き込み、Windows はサムネイルのキャッシュに `Thumbs.db`、フォルダーのカスタマイズ保存に `desktop.ini` を書き込みます。同期ツールはこれらを他のファイルと同じように扱うため、MacBook から一方向の同期を行うと、訪れたすべてのフォルダーに `.DS_Store` がアップロードされます。

規模が大きくなるほど問題も大きくなります。40,000 のプロジェクトフォルダーをバックアップするデザイン会社では、バケットに何万もの小さなメタデータファイルがたまることがあります。それぞれが一覧取得と比較の対象となる別個のオブジェクトなので、以降の同期実行が遅くなり、同僚が自分のマシンでフォルダーを閲覧するたびにファイルが変わって再び転送されます。

<img src="/support/images/en/blog/new-remote.png" alt="同期の除外設定の前に RcloneView でクラウドのリモートを追加" class="img-large img-center" />

## カスタムフィルターで不要ファイルを除外する

対策は同期ウィザードから始まります。**Step 3: Filtering Settings** で、`.DS_Store`、`Thumbs.db`、`desktop.ini` のカスタム除外ルールを追加します。カスタムフィルターはファイルの種類、フォルダー、パスのルールを受け付けるので、Mac でフォーマットした外付けドライブから同期するときに現れることがある `.Trashes` や `.Spotlight-V100` フォルダーも除外できます。

ジョブを本番実行する前に **Dry Run** をクリックしましょう。シミュレーションはコピーまたは削除されるすべてのファイルを一覧表示するので、メタデータファイルが転送リストから外れたことを確認できます。まだ表示される場合はルールの綴りを確認してください。フィルタールールはデフォルトで大文字と小文字を区別するため、`Thumbs.db` は `thumbs.db` に一致しません。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView でフィルターを適用したクラウド同期ジョブを実行" class="img-large img-center" />

## すでにクラウドにあるファイルを片付ける

フィルターは新たな不要ファイルを防ぎますが、既存のものは削除しません。一方の Explorer パネルでクラウドフォルダーを、もう一方でローカルのソースを開き、**Compare** を使います。ローカルにもう存在しないメタデータファイルは "Show right-only files" に表示され、両側にまだ存在するコピーは同一ファイルまたは相違ファイルとして表示されます。いずれの場合も、比較ビューからクラウド側のコピーを選択して直接削除できます。

ここでは一方向の同期に注意してください。ソースを転送先にミラーリングする同期は、ソースに存在しなくなった転送先のファイルを削除しますが、除外されたファイルは完全にスキップされます。そのため、Compare での整理がこれらを削除する最も明確で慎重な方法です。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="クラウド側に残ったシステムファイルを表示する RcloneView の Folder Compare" class="img-large img-center" />

## 毎回クリーンに保つ

フィルターを設定した同期を Job Manager にジョブとして保存すれば、毎回除外が適用されます。RcloneView は Windows、macOS、Linux で同じフィルターを使ってこれらのジョブを実行するため、アップロードする人たちが異なる OS を使っている場合に役立ちます。PLUS ライセンスがあればジョブをスケジュールでき、Job History には実行ごとのファイル数が表示されます。フィルター追加後にファイル数が急に減っていれば、不要ファイルがなくなった良い兆候です。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="システムファイル除外後のファイル数を示す RcloneView の Job History" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. 同期ジョブを作成または編集し、Step 3 で `.DS_Store`、`Thumbs.db`、`desktop.ini` をカスタム除外フィルターとして追加します。
3. Dry Run を実行し、メタデータファイルが転送リストに含まれなくなったことを確認します。
4. Compare を使って、すでにクラウドに保存されているコピーを見つけて削除します。

数分のフィルター設定で、クラウドフォルダーは見やすくなり、同期の実行は本当の作業に集中できます。

---

**関連ガイド:**

- [同期フィルターでファイルが除外されない問題の解決](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Rclone のフィルタールール — Include と Exclude の解説](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [容量がいっぱいのクラウドストレージアカウントを整理する](https://rcloneview.com/support/blog/manage-cloud-storage-full-cleanup-rcloneview)

<CloudSupportGrid />

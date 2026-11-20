---
slug: fix-junk-system-files-ds-store-thumbs-db-sync-rcloneview
title: "クラウド同期の不要なシステムファイルを解消 — RcloneViewで.DS_StoreとThumbs.dbを除外する"
authors:
  - kai
description: ".DS_Store、Thumbs.db、desktop.iniがクラウドバックアップを散らかすのを防ぎましょう。RcloneViewの同期フィルター、Dry Run、フォルダー比較で除外できます。"
keywords:
  - .DS_Store クラウド同期 除外
  - Thumbs.db クラウドバックアップ
  - desktop.ini 同期 不要ファイル
  - クラウドストレージ 不要ファイル 削除
  - rclone システムファイル 除外
  - RcloneView カスタムフィルター
  - macOS Windows クラウド同期 整理
  - 隠しファイル 同期フィルター
  - クロスプラットフォーム クラウド同期 ヒント
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウド同期の不要なシステムファイルを解消 — RcloneViewで.DS_StoreとThumbs.dbを除外する

> OSが作るメタデータファイルはバックアップを散らかします。いくつかのフィルタールールで、確実に除外できます。

MacとWindows PCの両方から使われている共有クラウドフォルダーを開くと、たいていすべてのディレクトリに`.DS_Store`、画像のまとまりごとに`Thumbs.db`、ツリーのあちこちに`desktop.ini`が散らばっています。サイズは小さいものの、ファイル数を膨らませ、比較で「異なる」と表示され、不要な再アップロードを引き起こします。RcloneViewではフィルタールールでこれらを同期ジョブから除外し、転送先がきれいになったことを確認できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## これらのファイルが何度も戻ってくる理由

macOSのFinderはフォルダーの表示設定を保存するために`.DS_Store`を書き込みます。Windowsエクスプローラーは画像のサムネイルをキャッシュするために`Thumbs.db`を、フォルダーのカスタマイズを保存するために`desktop.ini`を作成します。誰かが同期フォルダーやマウントしたドライブを閲覧するたびにOSがこれらのファイルを書き換えることがあり、次の同期では「変更された」ファイルとして再び転送されます。

NASに40,000のプロジェクトフォルダーを置き、毎晩クラウドへ同期しているデザイン事務所を考えてみましょう。実際の作業が一部のフォルダーでしか変わっていなくても、閲覧されたフォルダーごとに新しいメタデータファイルが生じる可能性があり、ジョブログが煩雑になって本当に重要な転送が埋もれてしまいます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History showing file counts inflated by system metadata files" class="img-large img-center" />

## 同期ジョブに除外フィルターを追加する

**Job Manager**でジョブを開いて**Edit**をクリックし、**Step 3: Filtering Settings**に進みます。カスタムフィルターで、ファイル名ごとに除外ルールを1つずつ追加します：`.DS_Store`、`Thumbs.db`、`desktop.ini`。チームでOfficeも使っている場合は、`~$`で始まる一時ロックファイルの除外も検討してください。これらのルールはrcloneのフィルター構文を使い、ドキュメントにある`.iso`や`.git/`などの例と同じ構文です。

フィルターはPLUSライセンスでのスケジュール実行を含め、ジョブが実行されるたびに適用されるため、設定は一度だけで済みます。Job Managerの**Export**でジョブをJSONファイルとして保存し、他のマシンで**Import**すれば、全員が同じルールを使えます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing sync job settings in RcloneView to add exclusion filters" class="img-large img-center" />

## プレビュー、クリーンアップ、確認

保存後に**Dry Run**を実行します。プレビューに、メタデータファイルが転送対象として表示されなくなっているはずです。まだ表示される場合は、各ルールのスペルと大文字・小文字を確認してください。タイプミスは、フィルターが無視されているように見えるよくある原因です。

フィルターは新しいコピーの転送を止めますが、すでにクラウドにあるファイルはそのまま残ります。Explorerパネルで転送先を開き、残っているファイルを見つけて右クリックの**Delete**で削除してください。全体をチェックするには、転送元と転送先の間で**Compare**を開き、「Show right-only files」で以前の実行から残ったメタデータファイルを探します。PLUSライセンスでは、Folder Compare with Filterで比較画面にも同じ除外ルールを適用できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using RcloneView Folder Compare to find leftover .DS_Store and Thumbs.db files" class="img-large img-center" />

## はじめに

RcloneViewはWindows、macOS、Linux上の1つのウィンドウで90以上のサービスをマウント・同期できるため、どのOSがファイルを作成したかにかかわらず同じフィルタールールが使えます。

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 同期ジョブを編集し、`.DS_Store`、`Thumbs.db`、`desktop.ini`をカスタム除外フィルターとして追加します。
3. **Dry Run**を実行し、メタデータファイルが転送対象に表示されなくなったことを確認します。
4. **Compare**を使って、すでにクラウドに残っているファイルを見つけて削除します。

ジョブログが短くなりバックアップがすっきりすれば、本当に重要な変更を見つけやすくなります。

---

**関連ガイド：**

- [同期フィルターでファイルが除外されない問題を解決 — RcloneViewで正しい除外ルールを設定](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [最大フォルダー深度と最大ファイルサイズのフィルター — RcloneViewで同期対象を制御](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [macOSでデスクトップや書類フォルダーが空になる問題を解決 — RcloneViewの権限設定](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />

---
slug: fix-google-docs-sheets-sync-errors-rcloneview
title: "Google ドキュメント・スプレッドシートの同期問題を解決 — RcloneView でネイティブファイルを扱う"
authors:
  - casey
description: "Google ドキュメント、スプレッドシート、スライドが何度も再コピーされたり、差分ありと表示されたりしませんか？ネイティブファイルの挙動が異なる理由と、RcloneView の同期ジョブでの扱い方を解説します。"
keywords:
  - google ドキュメント 同期エラー
  - google スプレッドシート バックアップ 問題
  - google drive ネイティブファイル 同期
  - google docs export rclone
  - google docs フィルター rcloneview
  - google drive バックアップ docx xlsx
  - rclone drive エクスポート形式
  - rcloneview google drive 同期 修正
  - google workspace ファイル バックアップ
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-drive
  - filters
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google ドキュメント・スプレッドシートの同期問題を解決 — RcloneView でネイティブファイルを扱う

> Google ドキュメント、スプレッドシート、スライドは通常のファイルではありません。この違いを無視したバックアップジョブは、何度も予想外の結果を生みます。

Google Drive を NAS や別のクラウドにバックアップすると、ジョブは完了します — しかしドキュメントやスプレッドシートが Word や Excel ファイルとして現れたり、Folder Compare で毎回差分ありと表示されたり、次回の実行で再びコピー対象に挙がったりします。これは転送が壊れているという意味ではありません。RcloneView はこうしたジョブを rclone で実行しており、rclone が Google ネイティブのドキュメントをどう扱うかを理解すれば、望む動作を自分で選べます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ネイティブ Google ファイルの挙動が異なる理由

Google ドキュメントは Google のエディタの中にだけ存在し、その背後に保存されたバイナリファイルはありません。rclone が Google Drive から Google 以外の転送先へドキュメントをコピーするときは、ダウンロード可能な形式にエクスポートします。デフォルトは `.docx`、`.xlsx`、`.pptx` などの Office 形式です。

この変換には副作用があります。Drive はネイティブドキュメントの固定サイズを報告しないため、サイズベースの比較ではエクスポートしたコピーと照合できません。また Drive はこれらの MD5 ハッシュを保存しないため、同期ジョブでチェックサムを有効にしても検証できません。その結果、確認するたびに「異なる」と見えるファイルが生まれます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing Google Docs flagged as different files" class="img-large img-center" />

## オプション 1：ファイルバックアップからネイティブドキュメントを除外する

チームがアップロード済みのファイル — PDF、画像、動画 — だけをバックアップすればよいなら、ネイティブドキュメントを外すのが最もすっきりした解決策です。同期ウィザードの Step 3 で、定義済みの **Google Docs** フィルターを有効にしてください。ジョブは通常のファイルに集中し、比較できないドキュメントを再び一覧に挙げなくなります。

最初の本番実行の前に **Dry Run** を併用しましょう。プレビューにはコピーされるファイルが正確に一覧表示されるので、ドキュメントやスプレッドシートがキューから外れたことを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive sync job with the Google Docs filter applied" class="img-large img-center" />

## オプション 2：エクスポートしたコピーを意図的に保持する

エクスポートしたコピーそのものが目的の場合もあります — 会計事務所なら、Google アカウントなしで開けるよう、すべてのスプレッドシートを `.xlsx` として NAS にアーカイブしたいかもしれません。その場合はネイティブファイルをジョブに含め、変換されたコピーをアーカイブとして扱います。

エクスポート形式は rclone のフラグで変更できます。Settings の **Global Rclone Flags** フィールドには `--drive-export-formats` などの追加フラグを指定できます（例：読み取り専用アーカイブ向けの `pdf`）。このフラグは Google Drive に関わるすべてのジョブに適用されるため、まず小さなフォルダで Dry Run を使ってテストしてください。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a recurring Google Drive export job in RcloneView" class="img-large img-center" />

## Job History で結果を確認する

実行のたびに Job History を開き、ステータス、ファイル数、合計サイズを確認します。実行ごとに件数が予想外に大きく変動する場合は、Step 3 のフィルタールールを見直してください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Google Drive job results in Job History" class="img-large img-center" />

## はじめに

マウント専用ツールと異なり、RcloneView は FREE ライセンスでも同期とフォルダ比較が使えます。

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. OAuth のブラウザログインで Google Drive を接続します。
3. ネイティブドキュメントを Google Docs フィルターで除外するか、Office ファイルとしてエクスポートするかを決めます。
4. Dry Run でジョブをプレビューして実行し、Job History で結果を確認します。

ネイティブファイルを意図的に扱えば、Google Drive のバックアップで誤ったアラートが出なくなります。

---

**関連ガイド：**

- [Google Drive の同期エラーを解決 — RcloneView でフォルダの欠落、ジョブの失敗、空の一覧を解消](https://rcloneview.com/support/blog/fix-google-drive-sync-errors-rcloneview)
- [RcloneView フィルタールール：フォルダやファイル形式を除外して、より速くクリーンに同期](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run プレビュー — RcloneView で変更を確定する前にクラウド同期をテスト](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
